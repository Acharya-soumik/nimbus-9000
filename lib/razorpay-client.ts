import Razorpay from 'razorpay';
import crypto from 'crypto';

const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

if (!razorpayKeyId || !razorpayKeySecret) {
  throw new Error('Missing Razorpay environment variables');
}

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: razorpayKeyId,
  key_secret: razorpayKeySecret,
});

// Create Razorpay order
export interface CreateOrderParams {
  amount: number; // amount in paise
  currency: string;
  receipt: string;
  notes?: Record<string, string>;
}

export async function createOrder(params: CreateOrderParams) {
  try {
    const order = await razorpay.orders.create(params);
    return order;
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
}

// Verify payment signature
export function verifyPaymentSignature(
  paymentId: string,
  orderId: string,
  signature: string
): boolean {
  try {
    const text = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', razorpayKeySecret!)
      .update(text)
      .digest('hex');

    return expectedSignature === signature;
  } catch (error) {
    console.error('Error verifying payment signature:', error);
    return false;
  }
}

// Get payment details
export async function getPaymentDetails(paymentId: string) {
  try {
    const payment = await razorpay.payments.fetch(paymentId);
    return payment;
  } catch (error) {
    console.error('Error fetching payment details:', error);
    throw error;
  }
}

// Capture payment (for authorized payments)
export async function capturePayment(
  paymentId: string,
  amount: number,
  currency: string
) {
  try {
    const payment = await razorpay.payments.capture(paymentId, amount, currency);
    return payment;
  } catch (error) {
    console.error('Error capturing payment:', error);
    throw error;
  }
}
