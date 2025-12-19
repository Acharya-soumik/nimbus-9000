import { NextRequest, NextResponse } from 'next/server';
import { getPaymentDetails } from '@/lib/razorpay-client';

interface PaymentDetailsResponse {
  success: boolean;
  payment?: {
    id: string;
    amount: string | number;
    currency: string;
    status: string;
    method: string;
    created_at: number;
    service?: string;
  };
  error?: string;
  message?: string;
}

/**
 * GET /api/payment/details
 *
 * Fetch payment details from Razorpay for receipt generation
 * Query params: payment_id
 */
export async function GET(
  request: NextRequest
): Promise<NextResponse<PaymentDetailsResponse>> {
  try {
    const searchParams = request.nextUrl.searchParams;
    const paymentId = searchParams.get('payment_id');

    if (!paymentId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing payment_id',
          message: 'Payment ID is required',
        },
        { status: 400 }
      );
    }

    // Fetch payment details from Razorpay
    const payment = await getPaymentDetails(paymentId);

    if (!payment) {
      return NextResponse.json(
        {
          success: false,
          error: 'Payment not found',
          message: 'Could not find payment details',
        },
        { status: 404 }
      );
    }

    // Extract service from payment notes
    const service = payment.notes?.service || 'unknown';

    return NextResponse.json(
      {
        success: true,
        payment: {
          id: payment.id,
          amount: payment.amount,
          currency: payment.currency,
          status: payment.status,
          method: payment.method,
          created_at: payment.created_at,
          service,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching payment details:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to fetch payment details',
      },
      { status: 500 }
    );
  }
}
