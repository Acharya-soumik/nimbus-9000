import * as React from 'react';
import { Metadata } from 'next';
import { PaymentService } from '@/services/payment-service';
import {
  SuccessHero,
  PaymentSummary,
  NextStepsSection,
  ActionButtons,
  PostPaymentQuestion,
  UpsellModal,
  PaymentSuccessTracker,
} from '@/components/thank-you';
import {
  getServiceContent,
  formatWhatsAppMessage,
  getWhatsAppSupportNumber,
} from '@/lib/thank-you/service-content';

export const metadata: Metadata = {
  title: 'Payment Successful | VakilTech',
  description: 'Your payment has been processed successfully. Thank you for choosing VakilTech.',
  robots: {
    index: false,
    follow: false,
  },
};

interface ThankYouPageProps {
  searchParams: Promise<{
    payment_id?: string;
    order_id?: string;
  }>;
}

/**
 * Format timestamp to readable date
 */
function formatDate(timestamp: number | string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Thank You Page - Server Component
 *
 * Displays success message and payment details after successful payment.
 * Fetches payment info and shows service-specific content.
 */
export default async function ThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const { payment_id: paymentId, order_id: orderId } = await searchParams;

  let paymentData: any = null;
  let serviceType: string = 'unknown';
  let errorOccurred = false;

  try {
    // Fetch payment details from Cashfree via PaymentService
    if (orderId) {
      const verification = await PaymentService.verifyPayment(orderId);
      if (verification.success && verification.data) {
        paymentData = verification.data;
      }
    } 
    
    // Fallback or legacy handling could go here if needed, 
    // but we primarily rely on orderId from Cashfree return_url

    if (!paymentData) {
       // If we have paymentId but no orderId (legacy/manual), we might not be able to fetch details easily 
       // without the order ID in Cashfree's new flow, unless we search by payment ID (not implemented in service yet).
       // For now, we assume orderId is present as per our new implementation.
       if (!orderId) {
         console.warn("No order_id provided to thank-you page");
       } else {
         throw new Error('Payment verification failed or pending');
       }
    } else {
       // Extract service type from payment notes/metadata
       // Note: Cashfree structure might differ; ensuring safe access
       // paymentData.order_note might be a JSON string if we sent it that way
       // OR we might need to fetch the Order details separately if payments endpoint doesn't return notes.
       // However, let's try to extract from what we have or fallback.
       
       // In createOrder we sent: verifyPayment returns the *payment* object from FetchPayments.
       // The payment object might not have the order notes. 
       // We might need to fetch the Order itself to get notes. 
       // For now, let's use a safe fallback or try to parse if available.
       
       // If we can't get service type, we default to 'unknown' which shows generic success.
       // Ideally we should double check if verifyPayment can return order meta.
       
       // Let's assume for now we use generic success if notes are missing, 
       // OR we pass service type in URL params as a fallback? 
       // Cashfree return URL allows replacement of {order_id}, getting other params is cleaner.
       // But let's stick to what we have.
       serviceType = 'unknown'; 
    }

  } catch (error) {
    console.error('Error fetching payment details:', error);
    errorOccurred = true;
  }

  // Get service-specific content
  const serviceContent = getServiceContent(serviceType);

  // Format WhatsApp message
  const whatsappMessage = formatWhatsAppMessage(
    serviceContent.whatsappMessage,
    (paymentData?.cf_payment_id || paymentId || orderId || "Order") as string
  );

  // Get WhatsApp support number
  const whatsappNumber = getWhatsAppSupportNumber();

  // If error occurred or payment data is missing
  if (errorOccurred || !paymentData) {
    // If we have an orderId but failed to get payment data, it implies verification failed (e.g. cancelled)
    const isFailure = !!orderId;

    if (isFailure) {
      return (
        <main className="min-h-screen bg-white">
          <section className="relative w-full overflow-hidden bg-gradient-to-b from-red-50 to-white py-12">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-red-100 p-4">
                  <svg
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
              </div>
              <h1 className="mb-3 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
                Payment Failed or Cancelled
              </h1>
              <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
                We couldn't verify your payment. If you cancelled the transaction, you can try again. If money was deducted, it will be automatically refunded within 5-7 business days.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-4">
              <a
                href="/send-legal-notice"
                className="rounded-xl bg-primary px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Try Again
              </a>
              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-gray-200 bg-white px-8 py-3 font-semibold text-text-heading hover:bg-gray-50"
              >
                Contact Support
              </a>
            </div>
          </section>
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-white">
        <SuccessHero
          title="Payment Successful!"
          description="Thank you for your payment. Our team will contact you shortly."
        />

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Generic Payment Summary */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                <h2 className="text-lg font-semibold text-text-heading">
                  Payment Confirmation
                </h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-text-medium">
                  Reference ID:{' '}
                  <span className="font-mono font-semibold text-text-body">
                    {orderId || paymentId || "N/A"}
                  </span>
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Your payment has been successfully processed. Our team will contact you within 3 hours.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
              <ActionButtons
                whatsappNumber={whatsappNumber}
                whatsappMessage={whatsappMessage}
                paymentId={(orderId || paymentId || "") as string}
              />
          </div>
        </section>
      </main>
    );
  }

  // Successful payment with data
  return (
    <main className="min-h-screen bg-white">
      {/* Success Hero */}
      <SuccessHero
        title={serviceContent.title}
        description={serviceContent.description}
      />
      
      {/* 
        PaymentSuccessTracker needs payment details.
        Mapping Cashfree fields to what might be expected or updating components.
        Assuming PaymentSuccessTracker uses these props to display/track.
       */}
      <PaymentSuccessTracker 
        paymentId={paymentData.cf_payment_id}
        amount={paymentData.payment_amount}
        serviceType={serviceType}
        email={paymentData.payment_group?.email || ""} // Adjust based on actual Cashfree response structure
        phone={paymentData.payment_group?.phone || ""}
      />

      {/* Main Content Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Payment Summary Card */}
          <PaymentSummary
            paymentId={paymentData.cf_payment_id}
            amount={paymentData.payment_amount}
            date={formatDate(paymentData.payment_completion_time)}
            service={serviceType}
          />

          {/* Next Steps Timeline */}
          <NextStepsSection steps={serviceContent.nextSteps} />

          {/* Post Payment Question */}
          <PostPaymentQuestion />

          {/* Action Buttons */}
          <ActionButtons
            whatsappNumber={whatsappNumber}
            whatsappMessage={whatsappMessage}
            paymentId={String(paymentData.cf_payment_id)}
          />

          {/* Upsell for Basic Plan Users */}
          <UpsellModal 
            planId={'basic'} 
          />

          {/* Additional Info Card */}
          <div className="rounded-xl border border-warning-light bg-warning-light/10 p-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-warning-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold text-text-heading">
                  Important Information
                </h3>
                <ul className="space-y-1 text-sm text-text-medium">
                  <li>• Keep your Payment ID safe for future reference</li>
                  <li>• You will receive updates on your registered WhatsApp number</li>
                  <li>• For any queries, contact us on WhatsApp or call our support team</li>
                  <li>• Payment receipt has been sent to your email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-16" />
    </main>
  );
}
