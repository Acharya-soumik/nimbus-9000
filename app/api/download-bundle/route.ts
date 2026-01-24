import { NextRequest, NextResponse } from "next/server";
import {
  generateBundleDownloadUrls,
  validateS3Configuration,
  BundleType,
  BUNDLE_FILE_MAPPING,
} from "@/lib/s3-service";
import { PaymentService } from "@/services/payment-service";
import { getSupabaseServer } from "@/lib/supabase-server";

/**
 * API Route: Generate pre-signed download URL for legal bundle
 * POST /api/download-bundle
 * Body: { bundleType: string, transactionId: string }
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { bundleType, transactionId } = body;

    // Validate required fields
    if (!bundleType) {
      return NextResponse.json(
        { error: "Bundle type is required" },
        { status: 400 }
      );
    }

    if (!transactionId) {
      return NextResponse.json(
        { error: "Transaction ID is required" },
        { status: 400 }
      );
    }

    // Validate bundle type
    if (!(bundleType in BUNDLE_FILE_MAPPING)) {
      return NextResponse.json(
        { error: "Invalid bundle type" },
        { status: 400 }
      );
    }

    // Check S3 configuration
    if (!validateS3Configuration()) {
      console.error("S3 configuration is incomplete");
      return NextResponse.json(
        { error: "Service configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Verify transaction and log sale
    try {
      // 1. Verify Payment with Cashfree
      const verification = await PaymentService.verifyPayment(transactionId);
      
      if (!verification.success) {
        console.error(`Payment verification failed for transaction ${transactionId}:`, verification.message);
        // We might choose to block download here, but for now let's just log error
        // return NextResponse.json({ error: "Payment not verified" }, { status: 403 });
      } else {
        // 2. Log sale to Supabase
        const supabase = getSupabaseServer();
        const paymentData = verification.data; // This might be the Payment object
        
        // Check if already logged
        const { data: existingSale } = await supabase
          .from("bundle_sales")
          .select("id")
          .eq("transaction_id", transactionId)
          .single();
          
        if (!existingSale) {
          // Insert new sale record
          const { error: insertError } = await supabase
            .from("bundle_sales")
            .insert({
              transaction_id: transactionId,
              bundle_type: bundleType,
              amount: paymentData?.payment_amount || 0,
              customer_name: paymentData?.customer_details?.customer_name || paymentData?.payment_group?.name || null,
              customer_phone: paymentData?.customer_details?.customer_phone || paymentData?.payment_group?.phone || null,
              customer_email: paymentData?.customer_details?.customer_email || paymentData?.payment_group?.email || null,
              status: "completed"
            });
            
          if (insertError) {
             console.error("Failed to log bundle sale:", insertError);
          } else {
             console.log(`Bundle sale logged for transaction ${transactionId}`);
          }
        }
      }
    } catch (verifyError) {
      console.error("Error during payment verification/logging:", verifyError);
      // specific error handling if needed
    }

    // Generate pre-signed URLs (valid for 1 hour)
    const downloadUrls = await generateBundleDownloadUrls(
      bundleType as BundleType,
      3600
    );

    // Log the download request (optional - for analytics)
    console.log(`Download URLs generated for transaction: ${transactionId}, bundle: ${bundleType}, files: ${downloadUrls.length}`);

    return NextResponse.json({
      success: true,
      downloads: downloadUrls,
      expiresIn: 3600,
      fileCount: downloadUrls.length,
    });
  } catch (error) {
    console.error("Error generating download URL:", error);

    return NextResponse.json(
      {
        error: "Failed to generate download URL",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for health check
 */
export async function GET() {
  const isConfigured = validateS3Configuration();

  return NextResponse.json({
    status: "ok",
    s3Configured: isConfigured,
    availableBundles: Object.keys(BUNDLE_FILE_MAPPING),
  });
}
