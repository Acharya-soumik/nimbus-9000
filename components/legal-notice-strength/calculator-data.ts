/**
 * Legal Notice Strength Calculator - Data Layer
 * Question banks, scoring weights, and routing logic for case strength assessment
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type QuestionType =
  | "boolean"
  | "multiple_choice"
  | "date"
  | "amount"
  | "text"
  | "file"
  | "multi_select"
  | "number";

export type NoticeType =
  | "money_recovery"
  | "cheque_bounce"
  | "tenant_rent_eviction"
  | "unpaid_salary"
  | "consumer_complaint"
  | "builder_delay"
  | "divorce_maintenance"
  | "criminal_defamation"
  | "civil_defamation"
  | "breach_of_contract"
  | "insurance_dispute"
  | "property_partition"
  | "child_custody"
  | "workplace_harassment"
  | "wrongful_termination";

export interface Option {
  value: string | number;
  label: string;
  score_multiplier: number;
  triggers_warning?: string;
}

export interface Question {
  key: string;
  type: QuestionType;
  label: string;
  help_text?: string;
  options?: Option[];
  weight: number;
  critical?: boolean;
  affects_limitation?: boolean;
  show_if?: Record<string, any>;
  validation?: {
    min?: number;
    max?: number;
    required?: boolean;
  };
}

export interface NoticeTypeConfig {
  notice_type: NoticeType;
  display_name: string;
  description: string;
  icon: string;
  questions: Question[];
  estimated_time_minutes: number;
}

export interface ScoreBucket {
  min: number;
  max: number;
  bucket: "weak" | "moderate" | "strong" | "very_strong";
  label: string;
  color: string;
  recommendation: string;
  primary_cta: string;
  secondary_cta?: string;
}

// ============================================================================
// SCORE BUCKETS & ROUTING LOGIC
// ============================================================================

export const SCORE_BUCKETS: ScoreBucket[] = [
  {
    min: 0,
    max: 39,
    bucket: "weak",
    label: "Weak Case",
    color: "red",
    recommendation:
      "We recommend legal consultation first to strengthen your case",
    primary_cta: "Consult Lawyer",
    secondary_cta: undefined,
  },
  {
    min: 40,
    max: 59,
    bucket: "moderate",
    label: "Moderate Case",
    color: "yellow",
    recommendation: "Your case needs strengthening before sending a notice",
    primary_cta: "Consult Lawyer First",
    secondary_cta: "Send Notice Anyway",
  },
  {
    min: 60,
    max: 79,
    bucket: "strong",
    label: "Strong Case",
    color: "green",
    recommendation: "You have a solid foundation for sending a legal notice",
    primary_cta: "Generate Legal Notice",
    secondary_cta: "Get Lawyer Review",
  },
  {
    min: 80,
    max: 100,
    bucket: "very_strong",
    label: "Very Strong Case",
    color: "green",
    recommendation: "Your legal notice has high probability of success",
    primary_cta: "Generate Legal Notice",
    secondary_cta: "Talk to Lawyer (Optional)",
  },
];

// ============================================================================
// QUESTION BANKS - MVP NOTICE TYPES (Phase 1)
// ============================================================================

/**
 * Money Recovery / Outstanding Payment
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const MONEY_RECOVERY_QUESTIONS: Question[] = [
  {
    key: "written_agreement_exists",
    type: "boolean",
    label:
      "Do you have a written agreement (contract, invoice, or written acknowledgment of debt)?",
    help_text:
      "Written evidence is the strongest proof. Even an email or WhatsApp acknowledgment helps.",
    weight: 25,
    critical: true,
    affects_limitation: false,
  },
  {
    key: "payment_proof",
    type: "multiple_choice",
    label: "How did you transfer the money?",
    options: [
      {
        value: "bank_transfer",
        label: "Bank Transfer/UPI (I have statement)",
        score_multiplier: 1.0,
      },
      {
        value: "cheque",
        label: "Cheque (I have copy)",
        score_multiplier: 0.9,
      },
      {
        value: "cash_receipt",
        label: "Cash with signed receipt",
        score_multiplier: 0.6,
      },
      {
        value: "cash_no_receipt",
        label: "Cash without receipt",
        score_multiplier: 0.2,
      },
      {
        value: "no_proof",
        label: "No proof of payment",
        score_multiplier: 0,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "amount_owed",
    type: "amount",
    label: "How much money is owed to you? (₹)",
    help_text: "Enter total principal amount (without interest)",
    weight: 5,
    validation: { min: 1, max: 100000000, required: true },
  },
  {
    key: "repayment_date",
    type: "date",
    label: "What was the agreed repayment date?",
    help_text:
      "If no specific date was agreed, when did you first demand repayment?",
    weight: 15,
    critical: true,
    affects_limitation: true,
  },
  {
    key: "borrower_acknowledged_recently",
    type: "boolean",
    label:
      "Has the borrower acknowledged the debt in writing (email/WhatsApp) in the last 6 months?",
    help_text: "Recent acknowledgment can restart the limitation period",
    weight: 10,
  },
  {
    key: "demand_sent_before",
    type: "boolean",
    label: "Have you already sent a demand letter/notice to the borrower?",
    weight: 5,
  },
  {
    key: "borrower_address_confirmed",
    type: "boolean",
    label: "Do you have the borrower's current residential/business address?",
    help_text: "Required to send legal notice via registered post",
    weight: 5,
  },
  {
    key: "witnesses_available",
    type: "boolean",
    label: "Were there any witnesses to the loan transaction?",
    weight: 5,
  },
  {
    key: "interest_rate_agreed",
    type: "boolean",
    label: "Was an interest rate agreed upon?",
    help_text: "Helps strengthen your claim for interest on delayed payment",
    weight: 5,
  },
  {
    key: "borrower_responsive",
    type: "multiple_choice",
    label: "How has the borrower responded to your payment requests?",
    options: [
      {
        value: "promises_no_action",
        label: "Makes promises but takes no action",
        score_multiplier: 0.7,
      },
      {
        value: "avoiding_contact",
        label: "Avoiding contact completely",
        score_multiplier: 0.5,
      },
      {
        value: "disputes_debt",
        label: "Disputes owing the debt",
        score_multiplier: 0.3,
        triggers_warning:
          "A disputed debt requires stronger documentation and legal strategy",
      },
      {
        value: "responsive",
        label: "Responsive and willing to pay",
        score_multiplier: 0.9,
      },
    ],
    weight: 5,
  },
];

/**
 * Cheque Bounce (Section 138 NI Act)
 * Total Questions: 9 | Estimated Time: 4 minutes
 */
export const CHEQUE_BOUNCE_QUESTIONS: Question[] = [
  {
    key: "bank_memo_received",
    type: "boolean",
    label: "Did you receive a 'Cheque Return Memo' from your bank?",
    help_text:
      "This is the most critical document. It shows reason for dishonor (e.g., 'Insufficient Funds').",
    weight: 25,
    critical: true,
  },
  {
    key: "bank_memo_date",
    type: "date",
    label: "What is the date on the Cheque Return Memo?",
    help_text: "This starts the 30-day clock for sending legal notice",
    weight: 5,
    affects_limitation: true,
  },
  {
    key: "cheque_presented_within_validity",
    type: "boolean",
    label: "Was the cheque presented within 3 months of its date?",
    help_text: "Cheques are valid for 3 months from the date written on them",
    weight: 15,
    critical: true,
  },
  {
    key: "dishonor_reason",
    type: "multiple_choice",
    label: "What reason is mentioned on the Cheque Return Memo?",
    options: [
      {
        value: "insufficient_funds",
        label: "Insufficient Funds",
        score_multiplier: 1.0,
      },
      {
        value: "account_closed",
        label: "Account Closed",
        score_multiplier: 0.9,
      },
      {
        value: "signature_mismatch",
        label: "Signature Mismatch",
        score_multiplier: 0.5,
      },
      {
        value: "stop_payment",
        label: "Stop Payment Instruction",
        score_multiplier: 0.7,
      },
      {
        value: "other",
        label: "Other reason",
        score_multiplier: 0.4,
      },
    ],
    weight: 10,
  },
  {
    key: "proof_of_debt_underlying",
    type: "multiple_choice",
    label: "Do you have proof of the debt for which the cheque was given?",
    options: [
      {
        value: "written_agreement",
        label: "Yes, written loan agreement/invoice",
        score_multiplier: 1.0,
      },
      {
        value: "email_whatsapp",
        label: "Email/WhatsApp acknowledgment",
        score_multiplier: 0.8,
      },
      {
        value: "verbal_only",
        label: "No, it was verbal agreement",
        score_multiplier: 0.4,
      },
    ],
    weight: 10,
    critical: true,
  },
  {
    key: "cheque_amount",
    type: "amount",
    label: "What is the amount mentioned on the cheque? (₹)",
    weight: 3,
    validation: { min: 1, max: 100000000, required: true },
  },
  {
    key: "drawer_address_known",
    type: "boolean",
    label: "Do you have the cheque issuer's current address?",
    help_text: "Required for sending legal notice and filing complaint",
    weight: 2,
  },
  {
    key: "original_cheque_available",
    type: "boolean",
    label: "Do you have the original dishonored cheque?",
    help_text: "Original cheque is required for filing criminal complaint",
    weight: 15,
    critical: true,
  },
  {
    key: "demand_notice_already_sent",
    type: "boolean",
    label:
      "Have you already sent a legal demand notice to the cheque issuer?",
    help_text: "Required before filing criminal complaint under Section 138",
    weight: 15,
  },
];

/**
 * Tenant/Landlord - Rent Arrears & Eviction
 * Total Questions: 11 | Estimated Time: 4 minutes
 */
export const TENANT_RENT_QUESTIONS: Question[] = [
  {
    key: "rental_agreement_type",
    type: "multiple_choice",
    label: "What type of rental agreement do you have with the tenant?",
    options: [
      {
        value: "registered_written",
        label: "Registered written agreement",
        score_multiplier: 1.0,
      },
      {
        value: "unregistered_written",
        label: "Unregistered written agreement",
        score_multiplier: 0.8,
      },
      {
        value: "verbal_with_rent_receipts",
        label: "Verbal, but I have rent receipts",
        score_multiplier: 0.6,
      },
      {
        value: "verbal_only",
        label: "Purely verbal",
        score_multiplier: 0.3,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "rent_due_months",
    type: "number",
    label: "How many months of rent are pending?",
    weight: 15,
    validation: { min: 0, max: 120, required: true },
  },
  {
    key: "rent_amount_monthly",
    type: "amount",
    label: "What is the monthly rent? (₹)",
    weight: 5,
    validation: { min: 1, max: 10000000, required: true },
  },
  {
    key: "notice_period_in_agreement",
    type: "multiple_choice",
    label: "Does your agreement mention a notice period for eviction?",
    options: [
      {
        value: "yes_complied",
        label: "Yes, and I've given the required notice",
        score_multiplier: 1.0,
      },
      {
        value: "yes_not_complied",
        label: "Yes, but I haven't given notice yet",
        score_multiplier: 0.5,
      },
      {
        value: "no_notice_period",
        label: "No notice period mentioned",
        score_multiplier: 0.7,
      },
    ],
    weight: 10,
  },
  {
    key: "eviction_ground",
    type: "multi_select",
    label: "What are your reasons for eviction? (Select all that apply)",
    options: [
      {
        value: "non_payment",
        label: "Non-payment of rent",
        score_multiplier: 1.0,
      },
      {
        value: "property_damage",
        label: "Property damage",
        score_multiplier: 0.8,
      },
      {
        value: "subletting",
        label: "Unauthorized subletting",
        score_multiplier: 0.7,
      },
      {
        value: "personal_use",
        label: "Bonafide personal use",
        score_multiplier: 0.6,
      },
      {
        value: "illegal_activities",
        label: "Illegal activities",
        score_multiplier: 0.9,
      },
    ],
    weight: 15,
  },
  {
    key: "payment_history_proof",
    type: "boolean",
    label:
      "Do you have records of past rent payments (bank statements/receipts)?",
    help_text: "Shows payment pattern and arrears clearly",
    weight: 10,
  },
  {
    key: "tenant_current_address",
    type: "boolean",
    label: "Is the tenant still occupying the property?",
    weight: 5,
  },
  {
    key: "police_complaint_filed",
    type: "boolean",
    label: "Have you filed any police complaint against the tenant?",
    weight: 3,
  },
  {
    key: "security_deposit_held",
    type: "boolean",
    label: "Are you holding the tenant's security deposit?",
    help_text:
      "Can be adjusted against arrears, but may complicate legal proceedings",
    weight: 2,
  },
  {
    key: "property_condition",
    type: "multiple_choice",
    label: "What is the current condition of the property?",
    options: [
      {
        value: "well_maintained",
        label: "Well maintained",
        score_multiplier: 1.0,
      },
      {
        value: "minor_damages",
        label: "Minor damages",
        score_multiplier: 0.8,
      },
      {
        value: "significant_damages",
        label: "Significant damages",
        score_multiplier: 0.6,
      },
    ],
    weight: 5,
  },
  {
    key: "previous_notices_sent",
    type: "boolean",
    label: "Have you sent any prior notice to the tenant about the issue?",
    help_text: "Shows good faith attempt to resolve",
    weight: 10,
  },
];

/**
 * Unpaid Salary / Employment Dues
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const UNPAID_SALARY_QUESTIONS: Question[] = [
  {
    key: "employer_type",
    type: "multiple_choice",
    label: "What type of employer owes you salary?",
    options: [
      {
        value: "registered_company",
        label: "Registered Private Limited/Public Company",
        score_multiplier: 1.0,
      },
      {
        value: "llp_partnership",
        label: "LLP or Partnership Firm",
        score_multiplier: 0.9,
      },
      {
        value: "proprietorship",
        label: "Sole Proprietorship",
        score_multiplier: 0.7,
      },
      {
        value: "individual",
        label: "Individual/Household",
        score_multiplier: 0.5,
      },
    ],
    weight: 10,
    critical: true,
  },
  {
    key: "employment_proof",
    type: "multiple_choice",
    label: "What proof of employment do you have?",
    options: [
      {
        value: "written_contract_offer",
        label: "Written appointment letter/contract",
        score_multiplier: 1.0,
      },
      {
        value: "email_offer",
        label: "Email offer letter",
        score_multiplier: 0.9,
      },
      {
        value: "id_card_payslips",
        label: "Company ID card or past payslips",
        score_multiplier: 0.8,
      },
      {
        value: "verbal_only",
        label: "Verbal agreement only",
        score_multiplier: 0.3,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "salary_payment_method_previous",
    type: "multiple_choice",
    label: "How did you receive salary previously?",
    options: [
      {
        value: "bank_transfer",
        label: "Bank transfer (I have statements)",
        score_multiplier: 1.0,
      },
      {
        value: "cheque",
        label: "Cheque",
        score_multiplier: 0.9,
      },
      {
        value: "cash_receipt",
        label: "Cash with receipt",
        score_multiplier: 0.6,
      },
      {
        value: "cash_no_proof",
        label: "Cash without receipt",
        score_multiplier: 0.3,
      },
    ],
    weight: 15,
  },
  {
    key: "months_unpaid",
    type: "number",
    label: "How many months' salary is pending?",
    weight: 10,
    validation: { min: 1, max: 60, required: true },
  },
  {
    key: "monthly_salary_amount",
    type: "amount",
    label: "What is your monthly salary? (₹)",
    weight: 5,
    validation: { min: 1, max: 10000000, required: true },
  },
  {
    key: "last_working_day",
    type: "date",
    label: "When was your last working day?",
    help_text: "Leave blank if still employed",
    weight: 10,
    affects_limitation: true,
  },
  {
    key: "resignation_termination_letter",
    type: "boolean",
    label: "Do you have resignation/termination letter?",
    weight: 5,
  },
  {
    key: "labour_dept_complaint",
    type: "boolean",
    label: "Have you filed a complaint with the Labour Department?",
    help_text: "Labour Department can mediate and sometimes recover dues faster",
    weight: 10,
  },
  {
    key: "pf_esi_deducted",
    type: "boolean",
    label: "Were PF/ESI deductions shown in your payslips?",
    help_text: "Strengthens proof of formal employment",
    weight: 10,
  },
  {
    key: "employer_contact_available",
    type: "boolean",
    label: "Do you have employer's registered office address?",
    weight: 5,
  },
];

/**
 * Consumer Complaint - Defective Goods/Services
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const CONSUMER_COMPLAINT_QUESTIONS: Question[] = [
  {
    key: "purchase_type",
    type: "multiple_choice",
    label: "What did you purchase?",
    options: [
      {
        value: "goods_product",
        label: "Goods/Product",
        score_multiplier: 1.0,
      },
      {
        value: "service",
        label: "Service",
        score_multiplier: 0.9,
      },
      {
        value: "both",
        label: "Both goods and service",
        score_multiplier: 1.0,
      },
    ],
    weight: 5,
  },
  {
    key: "purchase_proof",
    type: "multiple_choice",
    label: "What proof of purchase do you have?",
    options: [
      {
        value: "invoice_receipt_gst",
        label: "Invoice/Receipt with GST",
        score_multiplier: 1.0,
      },
      {
        value: "invoice_no_gst",
        label: "Invoice/Receipt without GST",
        score_multiplier: 0.9,
      },
      {
        value: "payment_confirmation",
        label: "Online payment confirmation",
        score_multiplier: 0.7,
      },
      {
        value: "no_proof",
        label: "No proof",
        score_multiplier: 0.1,
      },
    ],
    weight: 25,
    critical: true,
  },
  {
    key: "purchase_amount",
    type: "amount",
    label: "What was the purchase amount? (₹)",
    help_text: "Determines which consumer forum has jurisdiction",
    weight: 5,
    validation: { min: 1, max: 100000000, required: true },
  },
  {
    key: "defect_type",
    type: "multi_select",
    label: "What is the issue? (Select all that apply)",
    options: [
      {
        value: "defective_product",
        label: "Product is defective",
        score_multiplier: 1.0,
      },
      {
        value: "service_not_provided",
        label: "Service not provided as promised",
        score_multiplier: 0.9,
      },
      {
        value: "wrong_product",
        label: "Wrong product delivered",
        score_multiplier: 1.0,
      },
      {
        value: "delayed_delivery",
        label: "Delayed delivery",
        score_multiplier: 0.7,
      },
      {
        value: "refund_not_given",
        label: "Refund not given",
        score_multiplier: 0.9,
      },
    ],
    weight: 10,
  },
  {
    key: "warranty_status",
    type: "multiple_choice",
    label: "Is the product/service still under warranty/guarantee?",
    options: [
      {
        value: "under_warranty",
        label: "Yes, under warranty",
        score_multiplier: 1.0,
      },
      {
        value: "warranty_expired_recently",
        label: "Warranty expired within last 6 months",
        score_multiplier: 0.7,
      },
      {
        value: "warranty_expired_long",
        label: "Warranty expired long ago",
        score_multiplier: 0.4,
      },
      {
        value: "no_warranty",
        label: "No warranty given",
        score_multiplier: 0.5,
      },
    ],
    weight: 15,
  },
  {
    key: "complained_to_seller",
    type: "boolean",
    label: "Have you complained to the seller/service provider?",
    help_text: "Consumer law requires attempt at resolution before filing complaint",
    weight: 15,
    critical: true,
  },
  {
    key: "complaint_response",
    type: "multiple_choice",
    label: "What was their response?",
    options: [
      {
        value: "refused_help",
        label: "Refused to help/No response",
        score_multiplier: 1.0,
      },
      {
        value: "promised_no_action",
        label: "Promised action but didn't deliver",
        score_multiplier: 0.9,
      },
      {
        value: "partial_resolution",
        label: "Offered partial resolution",
        score_multiplier: 0.6,
      },
    ],
    weight: 10,
  },
  {
    key: "communication_proof",
    type: "boolean",
    label: "Do you have proof of your complaints (emails, WhatsApp, letters)?",
    help_text: "Very important to show you attempted resolution",
    weight: 10,
  },
  {
    key: "seller_address",
    type: "boolean",
    label: "Do you have the seller/manufacturer's registered address?",
    weight: 5,
  },
];

/**
 * Builder/Real Estate Possession Delay
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const BUILDER_DELAY_QUESTIONS: Question[] = [
  {
    key: "booking_agreement",
    type: "multiple_choice",
    label: "What type of agreement do you have with the builder?",
    options: [
      {
        value: "registered_agreement",
        label: "Registered Agreement for Sale",
        score_multiplier: 1.0,
      },
      {
        value: "unregistered_agreement",
        label: "Unregistered Agreement for Sale",
        score_multiplier: 0.8,
      },
      {
        value: "booking_form_only",
        label: "Only booking form/receipt",
        score_multiplier: 0.5,
      },
      {
        value: "no_written_agreement",
        label: "No written agreement",
        score_multiplier: 0.2,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "possession_date_agreed",
    type: "date",
    label: "What was the agreed possession date?",
    help_text: "Date mentioned in your agreement",
    weight: 20,
    critical: true,
    affects_limitation: true,
  },
  {
    key: "payments_made_proof",
    type: "multiple_choice",
    label: "How much have you paid to the builder?",
    options: [
      {
        value: "full_payment",
        label: "Full payment made (I have receipts)",
        score_multiplier: 1.0,
      },
      {
        value: "substantial_payment",
        label: "Substantial payment made (>75%)",
        score_multiplier: 0.9,
      },
      {
        value: "partial_payment",
        label: "Partial payment made (25-75%)",
        score_multiplier: 0.6,
      },
      {
        value: "token_only",
        label: "Only token amount paid",
        score_multiplier: 0.4,
      },
    ],
    weight: 20,
  },
  {
    key: "total_amount_paid",
    type: "amount",
    label: "What is the total amount paid to the builder? (₹)",
    weight: 5,
    validation: { min: 1, max: 1000000000, required: true },
  },
  {
    key: "rera_registered",
    type: "boolean",
    label: "Is the project registered under RERA?",
    help_text: "RERA provides stronger protection for homebuyers",
    weight: 15,
  },
  {
    key: "complaint_to_rera",
    type: "boolean",
    label: "Have you filed a complaint with RERA?",
    help_text: "RERA complaints can be effective for delays",
    weight: 10,
  },
  {
    key: "construction_status",
    type: "multiple_choice",
    label: "What is the current construction status?",
    options: [
      {
        value: "completed_not_handed",
        label: "Construction completed but possession not given",
        score_multiplier: 1.0,
      },
      {
        value: "nearing_completion",
        label: "Nearing completion (>80%)",
        score_multiplier: 0.8,
      },
      {
        value: "partially_completed",
        label: "Partially completed (40-80%)",
        score_multiplier: 0.6,
      },
      {
        value: "barely_started",
        label: "Construction barely started (<40%)",
        score_multiplier: 0.4,
      },
    ],
    weight: 5,
  },
  {
    key: "builder_communication",
    type: "boolean",
    label: "Do you have written communication from the builder acknowledging the delay?",
    help_text: "Emails, letters, or notices from builder",
    weight: 10,
  },
  {
    key: "penalty_clause",
    type: "boolean",
    label: "Does your agreement have a penalty clause for delayed possession?",
    help_text: "Strengthens your claim for compensation",
    weight: 5,
  },
  {
    key: "loan_emi_paying",
    type: "boolean",
    label: "Are you paying home loan EMIs while possession is delayed?",
    help_text: "Can claim compensation for financial loss",
    weight: 5,
  },
];

/**
 * Divorce & Maintenance
 * Total Questions: 10 | Estimated Time: 4 minutes
 */
export const DIVORCE_MAINTENANCE_QUESTIONS: Question[] = [
  {
    key: "marriage_certificate",
    type: "boolean",
    label: "Do you have a marriage certificate?",
    help_text: "Essential document for divorce proceedings",
    weight: 15,
    critical: true,
  },
  {
    key: "marriage_duration",
    type: "number",
    label: "How many years have you been married?",
    weight: 10,
    validation: { min: 0, max: 100, required: true },
  },
  {
    key: "separation_duration",
    type: "number",
    label: "How long have you been living separately (in months)?",
    weight: 10,
    validation: { min: 0, max: 600, required: true },
  },
  {
    key: "divorce_ground",
    type: "multi_select",
    label: "What are the grounds for divorce? (Select all that apply)",
    options: [
      {
        value: "cruelty",
        label: "Cruelty (physical or mental)",
        score_multiplier: 1.0,
      },
      {
        value: "adultery",
        label: "Adultery",
        score_multiplier: 0.9,
      },
      {
        value: "desertion",
        label: "Desertion",
        score_multiplier: 0.8,
      },
      {
        value: "mutual_consent",
        label: "Mutual consent",
        score_multiplier: 1.0,
      },
      {
        value: "conversion",
        label: "Conversion to another religion",
        score_multiplier: 0.7,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "proof_of_grounds",
    type: "multiple_choice",
    label: "What proof do you have for the grounds of divorce?",
    options: [
      {
        value: "strong_evidence",
        label: "Strong evidence (medical records, police complaints, witnesses)",
        score_multiplier: 1.0,
      },
      {
        value: "moderate_evidence",
        label: "Moderate evidence (messages, emails, photos)",
        score_multiplier: 0.7,
      },
      {
        value: "minimal_evidence",
        label: "Minimal evidence (verbal testimony only)",
        score_multiplier: 0.3,
      },
    ],
    weight: 20,
  },
  {
    key: "children_involved",
    type: "boolean",
    label: "Do you have children from this marriage?",
    help_text: "Affects custody and maintenance considerations",
    weight: 5,
  },
  {
    key: "maintenance_claim",
    type: "boolean",
    label: "Are you seeking maintenance/alimony?",
    weight: 10,
  },
  {
    key: "income_proof_spouse",
    type: "boolean",
    label: "Do you have proof of your spouse's income?",
    help_text: "Bank statements, salary slips, IT returns",
    weight: 10,
  },
  {
    key: "attempts_at_mediation",
    type: "boolean",
    label: "Have you attempted counseling or mediation?",
    help_text: "Courts appreciate attempts at reconciliation",
    weight: 5,
  },
  {
    key: "domestic_violence_case",
    type: "boolean",
    label: "Is there any domestic violence case filed?",
    help_text: "Police complaint or Protection Order under DV Act",
    weight: 10,
  },
];

/**
 * Criminal Defamation (Section 356 BNS 2023)
 * Total Questions: 9 | Estimated Time: 3-4 minutes
 */
export const CRIMINAL_DEFAMATION_QUESTIONS: Question[] = [
  {
    key: "defamatory_statement_proof",
    type: "multiple_choice",
    label: "Do you have proof of the defamatory statement?",
    options: [
      {
        value: "written_recorded",
        label: "Yes, written/recorded proof (screenshots, recordings, documents)",
        score_multiplier: 1.0,
      },
      {
        value: "witness_testimony",
        label: "Witness testimony available",
        score_multiplier: 0.7,
      },
      {
        value: "verbal_only",
        label: "Verbal statement only, no proof",
        score_multiplier: 0.3,
      },
    ],
    weight: 25,
    critical: true,
  },
  {
    key: "publication_proof",
    type: "boolean",
    label: "Was the statement made publicly or published?",
    help_text: "Essential for defamation - must be communicated to third parties",
    weight: 20,
    critical: true,
  },
  {
    key: "statement_false",
    type: "boolean",
    label: "Is the statement factually false?",
    help_text: "Truth is a defense to defamation",
    weight: 20,
    critical: true,
  },
  {
    key: "harm_to_reputation",
    type: "multiple_choice",
    label: "Has the statement harmed your reputation?",
    options: [
      {
        value: "significant_harm",
        label: "Yes, significant damage (lost business, job, social standing)",
        score_multiplier: 1.0,
      },
      {
        value: "moderate_harm",
        label: "Moderate damage",
        score_multiplier: 0.7,
      },
      {
        value: "minimal_harm",
        label: "Minimal damage",
        score_multiplier: 0.4,
      },
    ],
    weight: 15,
  },
  {
    key: "when_statement_made",
    type: "date",
    label: "When was the defamatory statement made?",
    help_text: "Must be within limitation period",
    weight: 10,
    affects_limitation: true,
  },
  {
    key: "complainant_identity",
    type: "boolean",
    label: "Do you know the identity of the person who made the statement?",
    help_text: "Required to send legal notice",
    weight: 5,
  },
  {
    key: "complained_to_police",
    type: "boolean",
    label: "Have you filed a police complaint?",
    weight: 5,
  },
  {
    key: "retraction_demanded",
    type: "boolean",
    label: "Have you asked the person to retract the statement?",
    help_text: "Shows good faith attempt to resolve",
    weight: 5,
  },
  {
    key: "statement_medium",
    type: "multi_select",
    label: "Where was the statement made? (Select all that apply)",
    options: [
      {
        value: "social_media",
        label: "Social media (Facebook, Twitter, Instagram, etc.)",
        score_multiplier: 1.0,
      },
      {
        value: "newspaper",
        label: "Newspaper/Magazine/Media",
        score_multiplier: 1.0,
      },
      {
        value: "email",
        label: "Email to multiple people",
        score_multiplier: 0.8,
      },
      {
        value: "public_gathering",
        label: "Public gathering/meeting",
        score_multiplier: 0.9,
      },
    ],
    weight: 5,
  },
];

/**
 * Civil Defamation
 * Total Questions: 9 | Estimated Time: 3-4 minutes
 */
export const CIVIL_DEFAMATION_QUESTIONS: Question[] = [
  {
    key: "defamatory_statement_proof",
    type: "multiple_choice",
    label: "Do you have proof of the defamatory statement?",
    options: [
      {
        value: "written_recorded",
        label: "Yes, written/recorded proof (screenshots, recordings, documents)",
        score_multiplier: 1.0,
      },
      {
        value: "witness_testimony",
        label: "Witness testimony available",
        score_multiplier: 0.7,
      },
      {
        value: "verbal_only",
        label: "Verbal statement only, no proof",
        score_multiplier: 0.3,
      },
    ],
    weight: 25,
    critical: true,
  },
  {
    key: "publication_proof",
    type: "boolean",
    label: "Was the statement made publicly or published?",
    help_text: "Essential for defamation - must be communicated to third parties",
    weight: 20,
    critical: true,
  },
  {
    key: "statement_false",
    type: "boolean",
    label: "Is the statement factually false?",
    help_text: "Truth is a defense to defamation",
    weight: 15,
    critical: true,
  },
  {
    key: "quantifiable_damages",
    type: "boolean",
    label: "Can you quantify the financial damages?",
    help_text: "Lost contracts, business opportunities, job loss, etc.",
    weight: 15,
  },
  {
    key: "damage_amount_estimate",
    type: "amount",
    label: "What is your estimated damage/compensation amount? (₹)",
    help_text: "Include financial losses and compensation for mental agony",
    weight: 10,
    validation: { min: 1, max: 1000000000, required: true },
  },
  {
    key: "business_impact",
    type: "boolean",
    label: "Has this affected your business or professional reputation?",
    help_text: "Stronger case for civil damages",
    weight: 10,
  },
  {
    key: "complainant_identity",
    type: "boolean",
    label: "Do you know the identity of the person who made the statement?",
    weight: 5,
  },
  {
    key: "retraction_demanded",
    type: "boolean",
    label: "Have you demanded a public apology or retraction?",
    help_text: "Required before filing civil suit",
    weight: 5,
  },
  {
    key: "when_statement_made",
    type: "date",
    label: "When was the defamatory statement made?",
    help_text: "Must be within limitation period",
    weight: 5,
    affects_limitation: true,
  },
];

/**
 * Breach of Contract
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const BREACH_OF_CONTRACT_QUESTIONS: Question[] = [
  {
    key: "signed_contract",
    type: "multiple_choice",
    label: "What type of contract do you have?",
    options: [
      {
        value: "written_signed",
        label: "Written contract signed by both parties",
        score_multiplier: 1.0,
      },
      {
        value: "email_agreement",
        label: "Email agreement/exchange",
        score_multiplier: 0.8,
      },
      {
        value: "verbal_agreement",
        label: "Verbal agreement only",
        score_multiplier: 0.4,
      },
      {
        value: "implied_contract",
        label: "Implied contract (conduct-based)",
        score_multiplier: 0.5,
      },
    ],
    weight: 30,
    critical: true,
  },
  {
    key: "breach_nature",
    type: "multiple_choice",
    label: "What type of breach occurred?",
    options: [
      {
        value: "non_payment",
        label: "Non-payment for goods/services delivered",
        score_multiplier: 1.0,
      },
      {
        value: "non_delivery",
        label: "Non-delivery of goods/services",
        score_multiplier: 1.0,
      },
      {
        value: "partial_performance",
        label: "Partial/incomplete performance",
        score_multiplier: 0.8,
      },
      {
        value: "delayed_performance",
        label: "Delayed performance",
        score_multiplier: 0.7,
      },
    ],
    weight: 20,
  },
  {
    key: "breach_evidence",
    type: "multiple_choice",
    label: "What evidence do you have of the breach?",
    options: [
      {
        value: "strong_evidence",
        label: "Strong evidence (emails, documents, invoices, delivery receipts)",
        score_multiplier: 1.0,
      },
      {
        value: "moderate_evidence",
        label: "Moderate evidence (some documentation)",
        score_multiplier: 0.7,
      },
      {
        value: "minimal_evidence",
        label: "Minimal evidence (mostly verbal)",
        score_multiplier: 0.3,
      },
    ],
    weight: 25,
    critical: true,
  },
  {
    key: "your_performance",
    type: "boolean",
    label: "Have you fully performed your obligations under the contract?",
    help_text: "You must have fulfilled your side of the contract",
    weight: 20,
    critical: true,
  },
  {
    key: "contract_value",
    type: "amount",
    label: "What is the value of the contract? (₹)",
    weight: 5,
    validation: { min: 1, max: 1000000000, required: true },
  },
  {
    key: "damages_quantified",
    type: "boolean",
    label: "Can you quantify your losses due to the breach?",
    help_text: "Lost profits, additional costs, opportunity costs",
    weight: 10,
  },
  {
    key: "notice_to_perform",
    type: "boolean",
    label: "Did you give notice to the other party to perform?",
    help_text: "Shows attempt to resolve before legal action",
    weight: 5,
  },
  {
    key: "arbitration_clause",
    type: "boolean",
    label: "Does the contract have an arbitration or dispute resolution clause?",
    help_text: "May require arbitration instead of court",
    weight: 5,
  },
  {
    key: "breach_date",
    type: "date",
    label: "When did the breach occur?",
    help_text: "When the other party failed to perform",
    weight: 5,
    affects_limitation: true,
  },
  {
    key: "other_party_response",
    type: "multiple_choice",
    label: "How has the other party responded?",
    options: [
      {
        value: "denies_breach",
        label: "Denies any breach occurred",
        score_multiplier: 0.6,
      },
      {
        value: "acknowledges_delays",
        label: "Acknowledges but provides excuses",
        score_multiplier: 0.8,
      },
      {
        value: "no_response",
        label: "No response to communications",
        score_multiplier: 0.7,
      },
      {
        value: "willing_settle",
        label: "Willing to settle/negotiate",
        score_multiplier: 0.9,
      },
    ],
    weight: 5,
  },
];

/**
 * Insurance Claim Dispute
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const INSURANCE_DISPUTE_QUESTIONS: Question[] = [
  {
    key: "policy_document",
    type: "boolean",
    label: "Do you have the original insurance policy document?",
    help_text: "Essential to verify coverage",
    weight: 20,
    critical: true,
  },
  {
    key: "claim_filed_date",
    type: "date",
    label: "When did you file the insurance claim?",
    help_text: "Must be within policy terms",
    weight: 10,
    affects_limitation: true,
  },
  {
    key: "claim_rejection_letter",
    type: "boolean",
    label: "Did you receive a rejection letter from the insurance company?",
    help_text: "Written rejection is important evidence",
    weight: 25,
    critical: true,
  },
  {
    key: "rejection_reason",
    type: "multiple_choice",
    label: "What reason did they give for rejection?",
    options: [
      {
        value: "not_covered",
        label: "Event not covered under policy",
        score_multiplier: 0.5,
        triggers_warning: "Check policy terms carefully - coverage disputes are harder to win",
      },
      {
        value: "documentation_incomplete",
        label: "Incomplete documentation",
        score_multiplier: 0.8,
      },
      {
        value: "claim_delay",
        label: "Claim filed too late",
        score_multiplier: 0.6,
      },
      {
        value: "misrepresentation",
        label: "Alleged misrepresentation/fraud",
        score_multiplier: 0.4,
      },
      {
        value: "no_reason",
        label: "No specific reason given",
        score_multiplier: 0.7,
      },
    ],
    weight: 15,
  },
  {
    key: "claim_amount",
    type: "amount",
    label: "What is the claim amount? (₹)",
    weight: 5,
    validation: { min: 1, max: 1000000000, required: true },
  },
  {
    key: "supporting_documents",
    type: "multi_select",
    label: "What supporting documents do you have? (Select all that apply)",
    options: [
      {
        value: "medical_reports",
        label: "Medical reports/bills (health insurance)",
        score_multiplier: 1.0,
      },
      {
        value: "police_fir",
        label: "Police FIR (accident/theft)",
        score_multiplier: 1.0,
      },
      {
        value: "death_certificate",
        label: "Death certificate (life insurance)",
        score_multiplier: 1.0,
      },
      {
        value: "repair_estimates",
        label: "Repair estimates/bills (vehicle/property)",
        score_multiplier: 0.9,
      },
      {
        value: "photographs",
        label: "Photographs of damage",
        score_multiplier: 0.8,
      },
    ],
    weight: 20,
  },
  {
    key: "premium_payment_proof",
    type: "boolean",
    label: "Do you have proof of premium payments?",
    help_text: "Receipts or bank statements showing premium paid",
    weight: 15,
    critical: true,
  },
  {
    key: "policy_in_force",
    type: "boolean",
    label: "Was the policy active/in force when the event occurred?",
    help_text: "No lapse in premium payment",
    weight: 10,
  },
  {
    key: "complaint_to_ombudsman",
    type: "boolean",
    label: "Have you filed a complaint with the Insurance Ombudsman?",
    help_text: "Required before approaching consumer court in some cases",
    weight: 5,
  },
  {
    key: "surveyor_report",
    type: "boolean",
    label: "Did the insurance company send a surveyor/investigator?",
    help_text: "Surveyor report can support or harm your claim",
    weight: 5,
  },
];

/**
 * Property Partition
 * Total Questions: 9 | Estimated Time: 3-4 minutes
 */
export const PROPERTY_PARTITION_QUESTIONS: Question[] = [
  {
    key: "co_ownership_proof",
    type: "multiple_choice",
    label: "What proof of co-ownership do you have?",
    options: [
      {
        value: "registered_deed",
        label: "Registered property deed showing co-ownership",
        score_multiplier: 1.0,
      },
      {
        value: "succession_certificate",
        label: "Succession certificate/will",
        score_multiplier: 0.9,
      },
      {
        value: "inheritance_documents",
        label: "Inheritance documents (not registered)",
        score_multiplier: 0.6,
      },
      {
        value: "no_formal_proof",
        label: "No formal proof (ancestral property)",
        score_multiplier: 0.4,
      },
    ],
    weight: 25,
    critical: true,
  },
  {
    key: "share_entitlement",
    type: "multiple_choice",
    label: "How is your share defined?",
    options: [
      {
        value: "clearly_defined",
        label: "Clearly defined in documents (e.g., 1/3 share)",
        score_multiplier: 1.0,
      },
      {
        value: "equal_shares",
        label: "Equal shares among co-owners",
        score_multiplier: 0.9,
      },
      {
        value: "disputed_shares",
        label: "Share percentage is disputed",
        score_multiplier: 0.5,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "property_type",
    type: "multiple_choice",
    label: "What type of property needs partition?",
    options: [
      {
        value: "residential",
        label: "Residential property",
        score_multiplier: 1.0,
      },
      {
        value: "agricultural",
        label: "Agricultural land",
        score_multiplier: 0.9,
      },
      {
        value: "commercial",
        label: "Commercial property",
        score_multiplier: 1.0,
      },
      {
        value: "mixed",
        label: "Mixed (residential + commercial/agricultural)",
        score_multiplier: 0.8,
      },
    ],
    weight: 5,
  },
  {
    key: "partition_refusal",
    type: "boolean",
    label: "Have the other co-owners refused partition?",
    help_text: "Essential for filing partition suit",
    weight: 15,
  },
  {
    key: "property_valuation",
    type: "boolean",
    label: "Has the property been valued by an authorized valuer?",
    help_text: "Helps in determining share amounts",
    weight: 10,
  },
  {
    key: "property_occupied",
    type: "multiple_choice",
    label: "Who is currently occupying the property?",
    options: [
      {
        value: "self_occupied",
        label: "I am occupying it",
        score_multiplier: 0.8,
      },
      {
        value: "other_co_owner",
        label: "Other co-owner is occupying",
        score_multiplier: 0.9,
      },
      {
        value: "tenant",
        label: "Rented to tenant",
        score_multiplier: 0.7,
      },
      {
        value: "vacant",
        label: "Vacant",
        score_multiplier: 1.0,
      },
    ],
    weight: 10,
  },
  {
    key: "number_of_co_owners",
    type: "number",
    label: "How many co-owners are there in total (including you)?",
    weight: 5,
    validation: { min: 2, max: 50, required: true },
  },
  {
    key: "other_co_owners_willing",
    type: "boolean",
    label: "Are any other co-owners willing to support partition?",
    help_text: "Mutual consent can simplify the process",
    weight: 10,
  },
  {
    key: "demand_notice_sent",
    type: "boolean",
    label: "Have you sent a demand notice for partition to other co-owners?",
    help_text: "Required before filing suit",
    weight: 10,
  },
];

/**
 * Child Custody
 * Total Questions: 10 | Estimated Time: 4 minutes
 */
export const CHILD_CUSTODY_QUESTIONS: Question[] = [
  {
    key: "marriage_certificate",
    type: "boolean",
    label: "Do you have your marriage certificate?",
    weight: 10,
  },
  {
    key: "child_birth_certificate",
    type: "boolean",
    label: "Do you have the child's birth certificate?",
    help_text: "Proves parentage",
    weight: 20,
    critical: true,
  },
  {
    key: "child_age",
    type: "number",
    label: "What is the age of the child (in years)?",
    help_text: "Age affects custody decisions",
    weight: 10,
    validation: { min: 0, max: 18, required: true },
  },
  {
    key: "current_custody",
    type: "multiple_choice",
    label: "Who currently has custody of the child?",
    options: [
      {
        value: "self",
        label: "I have custody",
        score_multiplier: 0.8,
      },
      {
        value: "other_parent",
        label: "Other parent has custody",
        score_multiplier: 0.9,
      },
      {
        value: "grandparents",
        label: "Grandparents/relatives",
        score_multiplier: 0.6,
      },
      {
        value: "shared",
        label: "Shared/joint custody",
        score_multiplier: 0.7,
      },
    ],
    weight: 15,
  },
  {
    key: "custody_type_seeking",
    type: "multiple_choice",
    label: "What type of custody are you seeking?",
    options: [
      {
        value: "sole_custody",
        label: "Sole custody",
        score_multiplier: 0.7,
      },
      {
        value: "joint_custody",
        label: "Joint custody",
        score_multiplier: 1.0,
      },
      {
        value: "visitation_rights",
        label: "Visitation rights only",
        score_multiplier: 0.9,
      },
    ],
    weight: 10,
  },
  {
    key: "child_welfare_concerns",
    type: "multi_select",
    label: "What concerns do you have about the child's welfare? (Select all that apply)",
    options: [
      {
        value: "physical_abuse",
        label: "Physical abuse by other parent",
        score_multiplier: 1.0,
      },
      {
        value: "neglect",
        label: "Neglect of child's needs",
        score_multiplier: 0.9,
      },
      {
        value: "substance_abuse",
        label: "Other parent's substance abuse",
        score_multiplier: 0.9,
      },
      {
        value: "inadequate_care",
        label: "Inadequate living conditions",
        score_multiplier: 0.8,
      },
      {
        value: "no_concerns",
        label: "No specific concerns",
        score_multiplier: 0.5,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "proof_of_concerns",
    type: "boolean",
    label: "Do you have evidence of your concerns (medical records, police complaints, etc.)?",
    weight: 15,
  },
  {
    key: "financial_stability",
    type: "boolean",
    label: "Can you demonstrate financial stability to care for the child?",
    help_text: "Income proof, accommodation, etc.",
    weight: 10,
  },
  {
    key: "child_preference",
    type: "boolean",
    label: "If the child is old enough, do they prefer to stay with you?",
    help_text: "Child's preference is considered for children above 9 years",
    weight: 5,
  },
  {
    key: "mediation_attempted",
    type: "boolean",
    label: "Have you attempted mediation or counseling?",
    help_text: "Courts appreciate attempts at amicable resolution",
    weight: 5,
  },
];

/**
 * Workplace Harassment
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const WORKPLACE_HARASSMENT_QUESTIONS: Question[] = [
  {
    key: "employment_proof",
    type: "multiple_choice",
    label: "What proof of employment do you have?",
    options: [
      {
        value: "appointment_letter",
        label: "Appointment letter/employment contract",
        score_multiplier: 1.0,
      },
      {
        value: "id_card_payslips",
        label: "ID card and payslips",
        score_multiplier: 0.9,
      },
      {
        value: "email_correspondence",
        label: "Email correspondence only",
        score_multiplier: 0.7,
      },
    ],
    weight: 15,
    critical: true,
  },
  {
    key: "harassment_type",
    type: "multi_select",
    label: "What type of harassment occurred? (Select all that apply)",
    options: [
      {
        value: "sexual_harassment",
        label: "Sexual harassment",
        score_multiplier: 1.0,
      },
      {
        value: "verbal_abuse",
        label: "Verbal abuse/bullying",
        score_multiplier: 0.8,
      },
      {
        value: "discrimination",
        label: "Discrimination (gender, caste, religion, etc.)",
        score_multiplier: 0.9,
      },
      {
        value: "hostile_environment",
        label: "Hostile work environment",
        score_multiplier: 0.7,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "harassment_evidence",
    type: "multiple_choice",
    label: "What evidence do you have?",
    options: [
      {
        value: "strong_evidence",
        label: "Strong evidence (emails, messages, recordings, CCTV)",
        score_multiplier: 1.0,
      },
      {
        value: "witness_testimony",
        label: "Witness testimony",
        score_multiplier: 0.8,
      },
      {
        value: "minimal_evidence",
        label: "Minimal evidence (personal account only)",
        score_multiplier: 0.4,
      },
    ],
    weight: 25,
    critical: true,
  },
  {
    key: "complaint_to_ic",
    type: "boolean",
    label: "Did you file a complaint with the Internal Complaints Committee (ICC)?",
    help_text: "Required under POSH Act for sexual harassment",
    weight: 15,
  },
  {
    key: "ic_response",
    type: "multiple_choice",
    label: "What was the ICC's response?",
    options: [
      {
        value: "no_action",
        label: "No action taken/complaint dismissed",
        score_multiplier: 0.8,
      },
      {
        value: "inadequate_action",
        label: "Inadequate action taken",
        score_multiplier: 0.7,
      },
      {
        value: "no_ic_exists",
        label: "Company has no ICC",
        score_multiplier: 0.9,
      },
    ],
    weight: 10,
  },
  {
    key: "harasser_position",
    type: "multiple_choice",
    label: "What is the position of the person harassing you?",
    options: [
      {
        value: "supervisor_manager",
        label: "Supervisor/Manager",
        score_multiplier: 1.0,
      },
      {
        value: "colleague",
        label: "Colleague (same level)",
        score_multiplier: 0.8,
      },
      {
        value: "client_vendor",
        label: "Client/Vendor",
        score_multiplier: 0.7,
      },
    ],
    weight: 5,
  },
  {
    key: "ongoing_harassment",
    type: "boolean",
    label: "Is the harassment still ongoing?",
    weight: 5,
  },
  {
    key: "impact_on_work",
    type: "boolean",
    label: "Has this affected your work performance or mental health?",
    help_text: "Medical records, performance reviews can support this",
    weight: 10,
  },
  {
    key: "when_harassment_started",
    type: "date",
    label: "When did the harassment begin?",
    weight: 5,
    affects_limitation: true,
  },
  {
    key: "retaliation_faced",
    type: "boolean",
    label: "Have you faced retaliation for complaining?",
    help_text: "Demotion, termination, transfer, etc.",
    weight: 10,
  },
];

/**
 * Wrongful Termination
 * Total Questions: 10 | Estimated Time: 3-4 minutes
 */
export const WRONGFUL_TERMINATION_QUESTIONS: Question[] = [
  {
    key: "employment_contract",
    type: "multiple_choice",
    label: "What type of employment contract did you have?",
    options: [
      {
        value: "written_contract",
        label: "Written employment contract",
        score_multiplier: 1.0,
      },
      {
        value: "appointment_letter",
        label: "Appointment letter only",
        score_multiplier: 0.9,
      },
      {
        value: "verbal_agreement",
        label: "Verbal agreement",
        score_multiplier: 0.5,
      },
    ],
    weight: 20,
    critical: true,
  },
  {
    key: "termination_letter",
    type: "boolean",
    label: "Did you receive a termination letter?",
    help_text: "Written termination notice",
    weight: 20,
    critical: true,
  },
  {
    key: "termination_reason",
    type: "multiple_choice",
    label: "What reason was given for termination?",
    options: [
      {
        value: "misconduct",
        label: "Misconduct/performance issues",
        score_multiplier: 0.6,
      },
      {
        value: "redundancy",
        label: "Redundancy/restructuring",
        score_multiplier: 0.7,
      },
      {
        value: "no_reason",
        label: "No reason given",
        score_multiplier: 0.9,
      },
      {
        value: "discriminatory",
        label: "Discriminatory reason (pregnancy, caste, religion, etc.)",
        score_multiplier: 1.0,
      },
    ],
    weight: 15,
  },
  {
    key: "notice_period_given",
    type: "boolean",
    label: "Were you given proper notice as per contract/law?",
    help_text: "Usually 1-3 months notice or pay in lieu",
    weight: 15,
  },
  {
    key: "termination_date",
    type: "date",
    label: "When were you terminated?",
    weight: 10,
    affects_limitation: true,
  },
  {
    key: "dues_pending",
    type: "multi_select",
    label: "What dues are pending from the employer? (Select all that apply)",
    options: [
      {
        value: "salary",
        label: "Pending salary",
        score_multiplier: 1.0,
      },
      {
        value: "notice_pay",
        label: "Notice period pay",
        score_multiplier: 0.9,
      },
      {
        value: "gratuity",
        label: "Gratuity",
        score_multiplier: 0.9,
      },
      {
        value: "pf_settlement",
        label: "PF settlement",
        score_multiplier: 0.8,
      },
      {
        value: "bonus",
        label: "Bonus/incentives",
        score_multiplier: 0.7,
      },
    ],
    weight: 10,
  },
  {
    key: "inquiry_conducted",
    type: "boolean",
    label: "Was a proper inquiry/hearing conducted before termination?",
    help_text: "Required for termination on misconduct grounds",
    weight: 15,
  },
  {
    key: "union_membership",
    type: "boolean",
    label: "Are you a member of a labor union?",
    help_text: "Union can provide support",
    weight: 5,
  },
  {
    key: "service_length",
    type: "number",
    label: "How many years did you work with this employer?",
    help_text: "Longer service strengthens wrongful termination claims",
    weight: 5,
    validation: { min: 0, max: 50, required: true },
  },
  {
    key: "retaliation_termination",
    type: "boolean",
    label: "Was this termination in retaliation for a complaint you made?",
    help_text: "E.g., harassment complaint, safety concern, etc.",
    weight: 10,
  },
];

// ============================================================================
// NOTICE TYPE CONFIGURATIONS
// ============================================================================

export const NOTICE_TYPES: NoticeTypeConfig[] = [
  {
    notice_type: "money_recovery",
    display_name: "Money Recovery",
    description: "Recover pending dues, salary, or payments legally",
    icon: "rupee",
    questions: MONEY_RECOVERY_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "cheque_bounce",
    display_name: "Cheque Bounce",
    description: "Legal action under Section 138 of NI Act",
    icon: "cheque",
    questions: CHEQUE_BOUNCE_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "tenant_rent_eviction",
    display_name: "Tenant Eviction / Rent Recovery",
    description: "Recover unpaid rent or evict tenant lawfully",
    icon: "home",
    questions: TENANT_RENT_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "unpaid_salary",
    display_name: "Unpaid Salary",
    description: "Recover unpaid wages and employment dues",
    icon: "rupee",
    questions: UNPAID_SALARY_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "consumer_complaint",
    display_name: "Consumer Complaint",
    description: "Assert consumer rights for defective goods/services",
    icon: "shield",
    questions: CONSUMER_COMPLAINT_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "builder_delay",
    display_name: "Builder Delay / Property Possession",
    description: "Legal action for delayed property possession",
    icon: "building",
    questions: BUILDER_DELAY_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "divorce_maintenance",
    display_name: "Divorce & Maintenance",
    description: "Legal notice for divorce or maintenance claims",
    icon: "family",
    questions: DIVORCE_MAINTENANCE_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "criminal_defamation",
    display_name: "Criminal Defamation",
    description: "Legal action for defamatory statements (Section 356 BNS)",
    icon: "alert",
    questions: CRIMINAL_DEFAMATION_QUESTIONS,
    estimated_time_minutes: 3,
  },
  {
    notice_type: "civil_defamation",
    display_name: "Civil Defamation",
    description: "Civil remedy for defamation with damages",
    icon: "alert",
    questions: CIVIL_DEFAMATION_QUESTIONS,
    estimated_time_minutes: 3,
  },
  {
    notice_type: "breach_of_contract",
    display_name: "Breach of Contract",
    description: "Enforce contract terms and seek damages",
    icon: "document",
    questions: BREACH_OF_CONTRACT_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "insurance_dispute",
    display_name: "Insurance Claim Dispute",
    description: "Challenge insurance claim rejection",
    icon: "shield",
    questions: INSURANCE_DISPUTE_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "property_partition",
    display_name: "Property Partition",
    description: "Legal division of jointly owned property",
    icon: "building",
    questions: PROPERTY_PARTITION_QUESTIONS,
    estimated_time_minutes: 3,
  },
  {
    notice_type: "child_custody",
    display_name: "Child Custody",
    description: "Legal notice for child custody matters",
    icon: "family",
    questions: CHILD_CUSTODY_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "workplace_harassment",
    display_name: "Workplace Harassment",
    description: "Action against workplace harassment",
    icon: "alert",
    questions: WORKPLACE_HARASSMENT_QUESTIONS,
    estimated_time_minutes: 4,
  },
  {
    notice_type: "wrongful_termination",
    display_name: "Wrongful Termination",
    description: "Challenge unfair dismissal from employment",
    icon: "document",
    questions: WRONGFUL_TERMINATION_QUESTIONS,
    estimated_time_minutes: 4,
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getNoticeTypeConfig(
  noticeType: NoticeType
): NoticeTypeConfig | undefined {
  return NOTICE_TYPES.find((nt) => nt.notice_type === noticeType);
}

export function getScoreBucket(score: number): ScoreBucket {
  return (
    SCORE_BUCKETS.find((bucket) => score >= bucket.min && score <= bucket.max) ||
    SCORE_BUCKETS[0]
  );
}

export function calculateDaysSince(date: Date): number {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function isWithinLimitationPeriod(
  date: Date,
  limitationDays: number
): boolean {
  return calculateDaysSince(date) <= limitationDays;
}
