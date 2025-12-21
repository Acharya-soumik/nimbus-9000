/**
 * Service-Specific Content Configuration for Thank You Page
 *
 * This file contains all the content variations for different services
 * displayed on the thank-you page after successful payment.
 */

export interface ServiceContent {
  title: string;
  description: string;
  nextSteps: string[];
  whatsappMessage: string;
  icon: "legal-notice" | "consultation" | "agreement" | "default";
}

export type ServiceType =
  | "legal-notice"
  | "legal-consultation"
  | "agreement-drafting"
  | "legal-notice-for-money-recovery";

export const SERVICE_CONTENT: Record<ServiceType, ServiceContent> = {
  "legal-notice": {
    title: "Legal Notice Booked Successfully!",
    description: "Your legal notice will be drafted by our expert advocates",
    nextSteps: [
      "Our legal team will contact you within 3 hours",
      "Legal notice draft ready within 24 hours",
      "Review and approve the draft",
      "Notice sent via Speed Post",
      "Receive tracking details on WhatsApp",
    ],
    whatsappMessage:
      "Hi! I just completed payment for legal notice service (Payment ID: {payment_id}). I would like to know the next steps.",
    icon: "legal-notice",
  },
  "legal-consultation": {
    title: "Consultation Booked Successfully!",
    description: "Our expert advocate will connect with you shortly",
    nextSteps: [
      "Expert advocate will call you within 30 minutes",
      "Discuss your legal situation in detail",
      "Get actionable legal advice",
      "Receive consultation summary on email",
    ],
    whatsappMessage:
      "Hi! I just booked a legal consultation (Payment ID: {payment_id}). When will the advocate call me?",
    icon: "consultation",
  },
  "agreement-drafting": {
    title: "Agreement Drafting Booked Successfully!",
    description: "We will draft your agreement with utmost precision",
    nextSteps: [
      "Our team will contact you within 3 hours",
      "Collect detailed agreement requirements",
      "Draft prepared within 48 hours",
      "Review and finalize the agreement",
      "Receive final agreement on email",
    ],
    whatsappMessage:
      "Hi! I just paid for agreement drafting service (Payment ID: {payment_id}). I would like to discuss my requirements.",
    icon: "agreement",
  },
  "legal-notice-for-money-recovery": {
    title: "Money Recovery Notice Booked Successfully!",
    description: "We will help you recover your money through legal means",
    nextSteps: [
      "Our legal team will contact you within 3 hours",
      "Discuss case details and recovery strategy",
      "Legal notice draft ready within 24 hours",
      "Review and approve the draft",
      "Notice sent via Speed Post to debtor",
      "Track progress and receive updates on WhatsApp",
    ],
    whatsappMessage:
      "Hi! I just completed payment for money recovery notice (Payment ID: {payment_id}). I want to discuss my case.",
    icon: "legal-notice",
  },
};

/**
 * Get service-specific content
 * @param service - Service type from payment notes
 * @returns Service-specific content object
 */
export function getServiceContent(service: string | undefined): ServiceContent {
  // Normalize service string
  const normalizedService = service?.toLowerCase().trim();

  // Check if it's a valid service type
  if (normalizedService && normalizedService in SERVICE_CONTENT) {
    return SERVICE_CONTENT[normalizedService as ServiceType];
  }

  // Default fallback content
  return {
    title: "Payment Successful!",
    description:
      "Thank you for your payment. Our team will contact you shortly.",
    nextSteps: [
      "Our team will contact you within 3 hours",
      "Discuss your requirements in detail",
      "Receive service updates on WhatsApp",
      "Complete your service as per timeline",
    ],
    whatsappMessage:
      "Hi! I just completed a payment (Payment ID: {payment_id}). I would like to know the next steps.",
    icon: "default",
  };
}

/**
 * Replace placeholders in WhatsApp message
 * @param message - Message template with placeholders
 * @param paymentId - Actual payment ID
 * @returns Formatted message
 */
export function formatWhatsAppMessage(
  message: string,
  paymentId: string
): string {
  return message.replace("{payment_id}", paymentId);
}

/**
 * Get WhatsApp support number
 * @returns WhatsApp number for support
 */
export function getWhatsAppSupportNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917047683995";
}
