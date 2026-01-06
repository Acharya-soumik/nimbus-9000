import { NextRequest, NextResponse } from 'next/server';
import {
  verifyPaymentSignature,
  getPaymentDetails,
  capturePayment,
} from '@/lib/razorpay-client';
import { getSupabaseServer } from '@/lib/supabase-server';
import { sendPaymentConfirmation } from '@/lib/email';

interface PaymentVerificationResponse {
  success: boolean;
  verified?: boolean;
  paymentId?: string;
  leadId?: string;
  error?: string;
  message?: string;
}

interface PaymentVerificationRequest {
  paymentId: string;
  orderId: string;
  signature: string;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<PaymentVerificationResponse>> {
  try {
    const body: PaymentVerificationRequest = await request.json();
    const { paymentId, orderId, signature } = body;

    if (!paymentId || !orderId || !signature) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          message: 'Payment ID, Order ID, and signature are required.',
        },
        { status: 400 }
      );
    }

    // Verify payment signature
    const isSignatureValid = verifyPaymentSignature(
      paymentId,
      orderId,
      signature
    );
    if (!isSignatureValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid signature',
          message: 'Payment signature verification failed.',
        },
        { status: 400 }
      );
    }

    // Get payment details from Razorpay
    let paymentDetails = await getPaymentDetails(paymentId);

    // If authorized, capture it server-side
    if (paymentDetails.status === 'authorized' && !paymentDetails.captured) {
      try {
        paymentDetails = await capturePayment(
          paymentId,
          Number(paymentDetails.amount),
          String(paymentDetails.currency)
        );
      } catch {
        return NextResponse.json(
          {
            success: false,
            error: 'Capture failed',
            message: 'Payment authorized but capture failed.',
          },
          { status: 400 }
        );
      }
    }

    // Check if payment is successful
    if (paymentDetails.status !== 'captured') {
      return NextResponse.json(
        {
          success: false,
          error: 'Payment not captured',
          message: 'Payment has not been captured successfully.',
        },
        { status: 400 }
      );
    }

    // Extract lead ID from payment notes
    const leadId = paymentDetails.notes?.leadId;

    // If leadId exists in notes, update the lead in database
    if (leadId) {
      const { data: updatedLead, error: updateError } = await getSupabaseServer()
        .from('leads')
        .update({
          payment_status: 'advance_paid',
          payment_id: paymentId,
          payment_amount: paymentDetails.amount,
          mark_advance_paid: true,
          advance_amount: paymentDetails.amount,
          status: 'paid_customer',
        })
        .eq('id', leadId)
        .select()
        .single();

      if (updateError) {
        console.error('Error updating lead payment status:', updateError);
        return NextResponse.json(
          {
            success: false,
            error: 'Database update failed',
            message: 'Failed to update lead payment status.',
          },
          { status: 500 }
        );
      }
      
      // Send Payment Confirmation
      // Send Payment Confirmation
      if (updatedLead) {
        // Try to get email from payment details if not in lead
        const userEmail = updatedLead.email || (paymentDetails as any).email;

        // If we found an email and it wasn't in the lead, update it
        if (!updatedLead.email && userEmail) {
            getSupabaseServer()
            .from('leads')
            .update({ email: userEmail })
            .eq('id', leadId)
            .then(({ error }) => {
                if(error) console.error("Failed to update lead email from payment", error);
            });
        }

        sendPaymentConfirmation(
          {
            name: updatedLead.name,
            email: userEmail,
            phone: updatedLead.whatsapp_number,
            service: updatedLead.service,
            customId: updatedLead.custom_id,
            paymentStatus: 'paid',
          },
          Number(paymentDetails.amount),
          paymentId
        ).catch((err) => console.error('Failed to send payment confirmation email:', err));
      }
    }

    return NextResponse.json(
      {
        success: true,
        verified: true,
        paymentId,
        leadId: leadId || undefined,
        message: leadId
          ? 'Payment verified and lead updated successfully!'
          : 'Payment verified successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Payment verification error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: 'Verification failed',
          message: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Something went wrong during payment verification.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
