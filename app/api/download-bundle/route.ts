import { NextRequest, NextResponse } from "next/server";
import {
  generateBundleDownloadUrls,
  validateS3Configuration,
  BundleType,
  BUNDLE_FILE_MAPPING,
} from "@/lib/s3-service";

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

    // TODO: Optionally verify transactionId in your database/payment system
    // This ensures only users who actually paid can download
    // Example:
    // const isValidTransaction = await verifyTransaction(transactionId);
    // if (!isValidTransaction) {
    //   return NextResponse.json(
    //     { error: "Invalid transaction" },
    //     { status: 403 }
    //   );
    // }

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
