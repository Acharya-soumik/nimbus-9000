export interface PaymentConfig {
  service:
    | "legal-notice"
    | "consultation"
    | "document-drafting"
    | "corporate-retainer"
    | "legal-drafts-bundle"
    | "legal-consultation"
    | "agreement-drafting"
    | "legal-notice-for-money-recovery";
  amount: number;
  currency: "INR";
  description: string;
  bundleType?: "hindi-english" | "marathi-only" | "hindi-english-marathi";
}

export interface ServicePaymentRequest {
  amount: number;
  currency: string;
  receipt: string;
  notes: {
    leadId: string;
    service: string;
    customerName: string;
  };
}

export interface PaymentVerificationResponse {
  success: boolean;
  paymentId?: string;
  leadId?: string;
  error?: string;
  message?: string;
}

// Payment configuration for each service (Amounts in Rupees)
export const PAYMENT_CONFIG: Record<string, PaymentConfig> = {
  "legal-notice": {
    service: "legal-notice",
    amount: 499,
    currency: "INR",
    description: "Legal Notice Service - Advance Payment",
  },
  "legal-consultation": {
    service: "legal-consultation",
    amount: 299,
    currency: "INR",
    description: "Legal Consultation Service - Advance Payment",
  },
  "agreement-drafting": {
    service: "agreement-drafting",
    amount: 299,
    currency: "INR",
    description: "Agreement Drafting Service - Advance Payment",
  },
  "legal-notice-for-money-recovery": {
    service: "legal-notice-for-money-recovery",
    amount: 499,
    currency: "INR",
    description: "Legal Notice for Money Recovery - Advance Payment",
  },
  consultation: {
    service: "consultation",
    amount: 299,
    currency: "INR",
    description: "Legal Consultation Service - Advance Payment",
  },
  "document-drafting": {
    service: "document-drafting",
    amount: 299,
    currency: "INR",
    description: "Document Drafting Service - Advance Payment",
  },
  "corporate-retainer": {
    service: "corporate-retainer",
    amount: 0,
    currency: "INR",
    description: "Corporate Retainer Service - Advance Payment",
  },
  "legal-drafts-bundle-hindi-english": {
    service: "legal-drafts-bundle",
    amount: 357,
    currency: "INR",
    description: "3500+ Legal Drafts Bundle - Hindi + English",
    bundleType: "hindi-english",
  },
  "legal-drafts-bundle-marathi-only": {
    service: "legal-drafts-bundle",
    amount: 315,
    currency: "INR",
    description: "3500+ Legal Drafts Bundle - Marathi Only",
    bundleType: "marathi-only",
  },
  "legal-drafts-bundle-hindi-english-marathi": {
    service: "legal-drafts-bundle",
    amount: 499,
    currency: "INR",
    description: "3500+ Legal Drafts Bundle - Hindi + English + Marathi",
    bundleType: "hindi-english-marathi",
  },
};

// Helper function to get payment config for a service
export function getPaymentConfig(
  service: string,
  bundleType?: string
): PaymentConfig | null {
  if (service === "legal-drafts-bundle" && bundleType) {
    const key = `legal-drafts-bundle-${bundleType}`;
    return PAYMENT_CONFIG[key] || null;
  }
  return PAYMENT_CONFIG[service] || null;
}

// Helper function to format amount for display
export function formatAmount(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// Helper function to generate unique receipt ID
export function generateReceiptId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `receipt_${timestamp}_${random}`;
}

// Helper function to create payment request
export function createPaymentRequest(
  service: string,
  leadId: string,
  customerName: string,
  bundleType?: string
): ServicePaymentRequest | null {
  const config = getPaymentConfig(service, bundleType);
  if (!config) return null;

  return {
    amount: config.amount,
    currency: config.currency,
    receipt: generateReceiptId(),
    notes: {
      leadId,
      service: bundleType ? `${service}-${bundleType}` : service,
      customerName,
    },
  };
}
