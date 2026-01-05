import * as React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { getPaymentDetails } from '@/lib/razorpay-client';
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
  }>;
}

/**
 * Format timestamp to readable date
 */
function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
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
 * Fetches payment info from Razorpay and shows service-specific content.
 */
export default async function ThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const { payment_id: paymentId } = await searchParams;

  // Redirect if no payment_id provided
  if (!paymentId) {
    redirect('/?error=missing_payment_id');
  }

  let paymentData: Awaited<ReturnType<typeof getPaymentDetails>> | null = null;
  let serviceType: string = 'unknown';
  let errorOccurred = false;

  try {
    // Fetch payment details from Razorpay
    paymentData = await getPaymentDetails(paymentId);

    if (!paymentData) {
      throw new Error('Payment not found');
    }

    // Extract service type from payment notes
    serviceType = paymentData.notes?.service || 'unknown';
  } catch (error) {
    console.error('Error fetching payment details:', error);
    errorOccurred = true;
  }

  // Get service-specific content
  const serviceContent = getServiceContent(serviceType);

  // Format WhatsApp message with payment ID
  const whatsappMessage = formatWhatsAppMessage(
    serviceContent.whatsappMessage,
    paymentId
  );

  // Get WhatsApp support number
  const whatsappNumber = getWhatsAppSupportNumber();

  // If error occurred or payment data is missing, show generic success
  if (errorOccurred || !paymentData) {
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
                  Payment ID:{' '}
                  <span className="font-mono font-semibold text-text-body">
                    {paymentId}
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
              whatsappMessage={`Hi! I just completed a payment (Payment ID: ${paymentId}). I would like to know the next steps.`}
              paymentId={paymentId}
            />
          </div>
        </section>
      </main>
    );
  }

  // Successful payment with full details
  return (
    <main className="min-h-screen bg-white">
      {/* Success Hero */}
      <SuccessHero
        title={serviceContent.title}
        description={serviceContent.description}
      />
      
      <PaymentSuccessTracker 
        paymentId={paymentData.id}
        amount={typeof paymentData.amount === 'string' ? parseInt(paymentData.amount) : paymentData.amount}
        serviceType={serviceType}
        planId={paymentData.notes?.planId}
        email={paymentData.email}
        phone={paymentData.contact ? String(paymentData.contact) : undefined}
      />

      {/* Main Content Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Payment Summary Card */}
          <PaymentSummary
            paymentId={paymentData.id}
            amount={typeof paymentData.amount === 'string' ? parseInt(paymentData.amount) : paymentData.amount}
            date={formatDate(paymentData.created_at)}
            service={serviceType}
          />

          {/* Next Steps Timeline */}
          <NextStepsSection steps={serviceContent.nextSteps} />

          {/* Post Payment Question - Validation Experiment */}
          <PostPaymentQuestion />

          {/* Action Buttons */}
          <ActionButtons
            whatsappNumber={whatsappNumber}
            whatsappMessage={whatsappMessage}
            paymentId={paymentId}
          />

          {/* Upsell for Basic Plan Users - Validation Experiment */}
          <UpsellModal 
            planId={paymentData.notes?.planId || 'basic'} // Default to basic if no planId found to test
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
