/**
 * Agreement Drafting Service - Static Data
 *
 * This file contains all static data for the Agreement Drafting Service page.
 * Centralizing data here makes updates easy and keeps components focused on presentation.
 */

import type { ReactNode } from "react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface AgreementType {
  id: string;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
}

export interface AgreementCategory {
  id: string;
  title: string;
  description: string;
  iconType: "business" | "employment" | "property" | "service" | "ip" | "personal";
  iconBgColor: string;
  agreements: AgreementType[];
  popular?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  unit: string;
  features: Array<{
    text: string;
    included: boolean;
    highlight?: boolean;
  }>;
  badge?: string;
  popular?: boolean;
  ctaText: string;
}

export interface SampleAgreement {
  id: string;
  title: string;
  category: string;
  previewLines: string[];
  fullContent: string[];
}

export interface IndustrySolution {
  id: string;
  name: string;
  description: string;
  iconType: "startup" | "realestate" | "healthcare" | "manufacturing" | "consulting";
  agreementIds: string[];
  gradient: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string | ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  avatar?: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  badge?: string;
}

// =============================================================================
// AGREEMENT CATEGORIES & TYPES
// =============================================================================

export const agreementCategories: AgreementCategory[] = [
  {
    id: "business",
    title: "Business Agreements",
    description: "Partnership, shareholder, and business formation",
    iconType: "business",
    iconBgColor: "bg-blue-100",
    agreements: [
      {
        id: "partnership-deed",
        name: "Partnership Deed",
        description: "Define roles, profit sharing, and responsibilities",
        price: 1999,
      },
      {
        id: "shareholder-agreement",
        name: "Shareholder Agreement",
        description: "Rights and obligations of company shareholders",
        price: 2499,
      },
      {
        id: "jv-agreement",
        name: "Joint Venture Agreement",
        description: "Terms for business collaboration",
        price: 2999,
      },
      {
        id: "mou",
        name: "Memorandum of Understanding",
        description: "Preliminary agreement before formal contract",
        price: 1499,
        popular: true,
      },
    ],
  },
  {
    id: "employment",
    title: "Employment & HR",
    description: "Hiring, confidentiality, and workplace contracts",
    iconType: "employment",
    iconBgColor: "bg-purple-100",
    popular: true,
    agreements: [
      {
        id: "employment-contract",
        name: "Employment Contract",
        description: "Terms of employment for new hires",
        price: 1499,
        popular: true,
      },
      {
        id: "offer-letter",
        name: "Offer Letter",
        description: "Formal job offer with terms",
        price: 999,
      },
      {
        id: "nda",
        name: "Non-Disclosure Agreement",
        description: "Protect confidential information",
        price: 999,
        popular: true,
      },
      {
        id: "non-compete",
        name: "Non-Compete Agreement",
        description: "Restrict competitive activities",
        price: 1499,
      },
      {
        id: "freelancer-contract",
        name: "Freelancer Contract",
        description: "Terms for independent contractors",
        price: 1299,
      },
    ],
  },
  {
    id: "property",
    title: "Property & Real Estate",
    description: "Rental, lease, and property sale agreements",
    iconType: "property",
    iconBgColor: "bg-green-100",
    popular: true,
    agreements: [
      {
        id: "rental-agreement",
        name: "Rental Agreement",
        description: "Terms for residential property rental",
        price: 999,
        popular: true,
      },
      {
        id: "commercial-lease",
        name: "Commercial Lease",
        description: "Terms for business property rental",
        price: 1999,
      },
      {
        id: "leave-license",
        name: "Leave & License Agreement",
        description: "Short-term property usage rights",
        price: 1299,
      },
      {
        id: "sale-deed",
        name: "Sale Deed",
        description: "Transfer of property ownership",
        price: 2499,
      },
    ],
  },
  {
    id: "service",
    title: "Service & Vendor",
    description: "Service delivery and vendor relationship contracts",
    iconType: "service",
    iconBgColor: "bg-orange-100",
    agreements: [
      {
        id: "service-agreement",
        name: "Service Agreement",
        description: "Terms for service delivery",
        price: 1499,
        popular: true,
      },
      {
        id: "sla",
        name: "Service Level Agreement",
        description: "Define service standards and metrics",
        price: 1999,
      },
      {
        id: "vendor-contract",
        name: "Vendor Contract",
        description: "Terms for supplier relationships",
        price: 1499,
      },
      {
        id: "consulting-agreement",
        name: "Consulting Agreement",
        description: "Terms for consulting engagements",
        price: 1799,
      },
    ],
  },
  {
    id: "ip",
    title: "IP & Technology",
    description: "Intellectual property and software licenses",
    iconType: "ip",
    iconBgColor: "bg-cyan-100",
    agreements: [
      {
        id: "ip-assignment",
        name: "IP Assignment Agreement",
        description: "Transfer intellectual property rights",
        price: 2499,
      },
      {
        id: "licensing-agreement",
        name: "Licensing Agreement",
        description: "Grant usage rights for IP",
        price: 2999,
      },
      {
        id: "software-license",
        name: "Software License Agreement",
        description: "Terms for software usage",
        price: 1999,
      },
      {
        id: "saas-agreement",
        name: "SaaS Agreement",
        description: "Software as a Service terms",
        price: 2499,
      },
    ],
  },
  {
    id: "personal",
    title: "Family & Personal",
    description: "Personal loans, gifts, and family agreements",
    iconType: "personal",
    iconBgColor: "bg-pink-100",
    agreements: [
      {
        id: "loan-agreement",
        name: "Personal Loan Agreement",
        description: "Terms for personal lending",
        price: 999,
      },
      {
        id: "gift-deed",
        name: "Gift Deed",
        description: "Legal transfer of property as gift",
        price: 1499,
      },
      {
        id: "prenuptial",
        name: "Prenuptial Agreement",
        description: "Pre-marriage asset protection",
        price: 2999,
      },
      {
        id: "will",
        name: "Will & Testament",
        description: "Estate planning and succession",
        price: 1999,
      },
    ],
  },
];

// =============================================================================
// PRICING TIERS
// =============================================================================

export const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Standard agreements from our template library",
    price: 999,
    originalPrice: 1499,
    unit: "/ agreement",
    features: [
      { text: "Standard agreement template", included: true },
      { text: "48-hour delivery", included: true },
      { text: "2 revisions included", included: true },
      { text: "Email support", included: true },
      { text: "Legal consultation", included: false },
      { text: "Custom clauses", included: false },
    ],
    ctaText: "Get Started",
  },
  {
    id: "standard",
    name: "Standard",
    description: "Customized agreements for your specific needs",
    price: 1999,
    originalPrice: 3499,
    unit: "/ agreement",
    badge: "BEST VALUE",
    popular: true,
    features: [
      { text: "Customized agreement", included: true, highlight: true },
      { text: "24-hour delivery", included: true, highlight: true },
      { text: "Unlimited revisions", included: true, highlight: true },
      { text: "WhatsApp + Email support", included: true },
      { text: "15-min legal consultation", included: true },
      { text: "Industry-specific clauses", included: true },
    ],
    ctaText: "Choose Standard",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Complex agreements with legal guidance",
    price: 3499,
    originalPrice: 5999,
    unit: "/ agreement",
    badge: "URGENT",
    features: [
      { text: "Complex/multi-party agreement", included: true },
      { text: "Same-day delivery", included: true, highlight: true },
      { text: "Unlimited revisions", included: true },
      { text: "Priority 24/7 support", included: true },
      { text: "30-min legal consultation", included: true, highlight: true },
      { text: "Negotiation assistance", included: true },
    ],
    ctaText: "Go Premium",
  },
];

// =============================================================================
// SAMPLE AGREEMENTS
// =============================================================================

export const sampleAgreements: SampleAgreement[] = [
  {
    id: "nda-sample",
    title: "Non-Disclosure Agreement",
    category: "Employment & HR",
    previewLines: [
      "MUTUAL NON-DISCLOSURE AGREEMENT",
      "",
      "This Non-Disclosure Agreement ('Agreement') is entered into...",
      "WHEREAS, the parties wish to explore a potential business relationship...",
      "NOW, THEREFORE, in consideration of the mutual covenants...",
    ],
    fullContent: [
      "MUTUAL NON-DISCLOSURE AGREEMENT",
      "",
      "This Non-Disclosure Agreement ('Agreement') is entered into as of ████████ ('Effective Date'), by and between:",
      "",
      "DISCLOSING PARTY: ████████████████ ('Discloser')",
      "Address: ████████████████████████████",
      "",
      "RECEIVING PARTY: ████████████████ ('Recipient')",
      "Address: ████████████████████████████",
      "",
      "WHEREAS, the parties wish to explore a potential business relationship ('Purpose') and in connection therewith, may disclose to each other certain confidential and proprietary information;",
      "",
      "NOW, THEREFORE, in consideration of the mutual covenants and agreements set forth herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:",
      "",
      "1. DEFINITION OF CONFIDENTIAL INFORMATION",
      "'Confidential Information' means any and all non-public information disclosed by either party...",
      "",
      "2. OBLIGATIONS OF RECEIVING PARTY",
      "The Receiving Party shall: (a) hold and maintain the Confidential Information in strict confidence...",
      "",
      "3. TERM",
      "This Agreement shall remain in effect for a period of ████ years from the Effective Date...",
    ],
  },
  {
    id: "rental-sample",
    title: "Rental Agreement",
    category: "Property & Real Estate",
    previewLines: [
      "RESIDENTIAL RENTAL AGREEMENT",
      "",
      "This Rental Agreement ('Agreement') is made and executed at...",
      "BETWEEN the LESSOR (Name: ████████████) and LESSEE...",
      "WHEREAS the Lessor is the lawful owner of the premises...",
    ],
    fullContent: [
      "RESIDENTIAL RENTAL AGREEMENT",
      "",
      "This Rental Agreement ('Agreement') is made and executed at ████████, on this ████ day of ████████ 20██.",
      "",
      "BETWEEN:",
      "",
      "LESSOR/LANDLORD:",
      "Name: ████████████████",
      "Address: ████████████████████████████",
      "PAN: ████████████",
      "(Hereinafter referred to as the 'Lessor')",
      "",
      "AND",
      "",
      "LESSEE/TENANT:",
      "Name: ████████████████",
      "Address: ████████████████████████████",
      "PAN: ████████████",
      "(Hereinafter referred to as the 'Lessee')",
      "",
      "WHEREAS the Lessor is the lawful owner of the premises situated at ████████████████████████████ ('Premises');",
      "",
      "AND WHEREAS the Lessee has approached the Lessor with a request to let out the said premises...",
      "",
      "1. RENTAL PERIOD",
      "The tenancy shall commence from ████████ and shall be for a period of ████ months...",
      "",
      "2. MONTHLY RENT",
      "The Lessee shall pay a monthly rent of ₹████████ (Rupees ████████████████ only)...",
    ],
  },
  {
    id: "employment-sample",
    title: "Employment Contract",
    category: "Employment & HR",
    previewLines: [
      "EMPLOYMENT AGREEMENT",
      "",
      "This Employment Agreement is entered into by and between...",
      "COMPANY: ████████ Technologies Pvt. Ltd.",
      "EMPLOYEE: The individual whose details are set forth herein...",
    ],
    fullContent: [
      "EMPLOYMENT AGREEMENT",
      "",
      "This Employment Agreement ('Agreement') is entered into as of ████████ ('Effective Date'), by and between:",
      "",
      "EMPLOYER:",
      "████████ Technologies Private Limited",
      "CIN: ████████████████████",
      "Registered Office: ████████████████████████████",
      "(Hereinafter referred to as the 'Company')",
      "",
      "AND",
      "",
      "EMPLOYEE:",
      "Name: ████████████████",
      "Address: ████████████████████████████",
      "PAN: ████████████",
      "(Hereinafter referred to as the 'Employee')",
      "",
      "WHEREAS the Company desires to employ the Employee, and the Employee desires to be employed by the Company, on the terms and conditions set forth herein;",
      "",
      "NOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:",
      "",
      "1. POSITION AND DUTIES",
      "The Employee shall serve as ████████████████ and shall perform such duties...",
      "",
      "2. COMPENSATION",
      "Base Salary: ₹████████ per annum (Rupees ████████████████ only)...",
    ],
  },
];

// =============================================================================
// INDUSTRY SOLUTIONS
// =============================================================================

export const industrySolutions: IndustrySolution[] = [
  {
    id: "startup",
    name: "Startups & Tech",
    description: "NDAs, employment contracts, IP agreements for fast-growing companies",
    iconType: "startup",
    agreementIds: ["nda", "employment-contract", "ip-assignment", "shareholder-agreement", "freelancer-contract"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Rental, lease, and property sale agreements for owners and developers",
    iconType: "realestate",
    agreementIds: ["rental-agreement", "commercial-lease", "sale-deed", "leave-license"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Service agreements, NDAs, and vendor contracts for medical practices",
    iconType: "healthcare",
    agreementIds: ["service-agreement", "nda", "vendor-contract", "consulting-agreement"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Vendor contracts, SLAs, and partnership agreements for manufacturers",
    iconType: "manufacturing",
    agreementIds: ["vendor-contract", "sla", "partnership-deed", "jv-agreement"],
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id: "consulting",
    name: "Consulting & Services",
    description: "Service agreements, NDAs, and freelancer contracts for consultants",
    iconType: "consulting",
    agreementIds: ["consulting-agreement", "nda", "freelancer-contract", "service-agreement"],
    gradient: "from-purple-500 to-violet-500",
  },
];

// =============================================================================
// FAQ DATA
// =============================================================================

export const agreementFAQs: FAQItem[] = [
  {
    id: "what-makes-valid",
    question: "What makes an agreement legally valid?",
    answer:
      "A legally valid agreement requires: (1) Offer and acceptance between parties, (2) Lawful consideration, (3) Competent parties (of legal age and sound mind), (4) Free consent (no coercion/fraud), (5) Lawful object. Our advocates ensure all these elements are properly addressed in every agreement we draft.",
  },
  {
    id: "stamp-paper",
    question: "Do agreements need to be on stamp paper?",
    answer:
      "Requirements vary by state and agreement type. Rental agreements typically require stamp paper (e-stamping available in most states). We'll guide you on specific requirements and can assist with e-stamping where applicable. The stamp duty is additional and depends on the agreement value.",
  },
  {
    id: "customize-templates",
    question: "Can I customize the agreement templates?",
    answer:
      "Yes! Our Standard and Premium plans include customization. You can add, modify, or remove clauses to suit your specific needs. Our advocates will work with you to ensure the customizations are legally sound and protect your interests.",
  },
  {
    id: "changes-after-delivery",
    question: "What if I need changes after delivery?",
    answer:
      "Basic plan includes 2 revisions, while Standard and Premium plans include unlimited revisions. Simply share your feedback, and our team will make the changes within 24 hours. We're committed to your satisfaction.",
  },
  {
    id: "digital-signatures",
    question: "Are digital/electronic signatures accepted?",
    answer:
      "Yes, under the Information Technology Act, 2000, electronic signatures using Aadhaar eSign or DSC are legally valid for most agreements. However, some documents like property sale deeds still require physical signatures. We'll advise you on the best approach for your specific agreement.",
  },
  {
    id: "how-long-valid",
    question: "How long is an agreement valid?",
    answer:
      "Validity depends on the terms specified in the agreement. Employment contracts may be indefinite or fixed-term, rental agreements typically run 11-36 months, and NDAs can range from 2-10 years. We'll help you determine the appropriate duration for your needs.",
  },
  {
    id: "dispute-resolution",
    question: "What happens if there's a dispute?",
    answer:
      "All our agreements include well-drafted dispute resolution clauses, typically specifying arbitration or court jurisdiction. In case of disputes, the agreement serves as legal evidence. We recommend the Premium plan for complex matters where disputes are more likely.",
  },
  {
    id: "multiple-parties",
    question: "Can agreements have more than 2 parties?",
    answer:
      "Yes, we draft multi-party agreements including joint ventures, consortium agreements, and partnership deeds with multiple partners. Multi-party agreements typically fall under our Premium tier due to their complexity.",
  },
];

// =============================================================================
// TESTIMONIALS
// =============================================================================

export const agreementTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Freelance Designer",
    location: "Pune",
    text: "I used to ignore contracts, but after a client refused payment, I got a Service Agreement drafted here. It's solid, protects my rights, and clients actually respect me more now.",
    rating: 5,
    avatar: "/assets/common/avatar-1.png",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    role: "Small Business Owner",
    location: "Gurgaon",
    text: "Much better than the copy-paste templates from local typists. The 'Non-Compete' clause they added saved my business when an employee tried to poach my clients.",
    rating: 5,
    avatar: "/assets/common/avatar-2.png",
  },
  {
    id: 3,
    name: "Rajeshwari Iyer",
    role: "Landlord",
    location: "Chennai",
    text: "Drafted a Rent Agreement. They included a specific clause for 'annual painting' restoration which my previous broker missed. Very thorough work.",
    rating: 5,
    avatar: "/assets/common/avatar-3.png",
  },
  {
    id: 4,
    name: "TechSolutions Pvt Ltd",
    role: "Founders",
    location: "Hyderabad",
    text: "We needed a Vendor Agreement for a long-term supplier. The lawyer allowed for 3 rounds of changes until we were 100% sure. Great B2B support.",
    rating: 5,
    avatar: "/assets/common/avatar-4.png",
  },
  {
    id: 5,
    name: "Aditya Verma",
    role: "Tenant",
    location: "Indore",
    text: "My landlord wanted a very one-sided agreement. VakilTech reviewed it and suggested changes to the lock-in period clause that saved me huge money later.",
    rating: 5,
    avatar: "/assets/common/avatar-5.png",
  },
];

// =============================================================================
// TIMELINE STEPS (How We Work)
// =============================================================================

export const agreementTimelineSteps: TimelineStep[] = [
  {
    title: "Choose Your Agreement",
    description:
      "Browse our 50+ templates or describe your custom requirements. Our team will recommend the best approach for your specific needs.",
    badge: "50+ Templates",
  },
  {
    title: "Share Your Details",
    description:
      "Fill a simple form with the necessary information. Our lawyers may call for clarifications to ensure we capture everything accurately.",
    badge: "5-Min Form",
  },
  {
    title: "Expert Drafting",
    description:
      "Our Licensed Advocates draft your agreement with industry-specific clauses and legal compliance. Every clause is reviewed for accuracy.",
    badge: "24-Hour Delivery",
  },
  {
    title: "Review & Finalize",
    description:
      "Review your draft and request unlimited revisions. We'll finalize and deliver the agreement ready for signing.",
    badge: "Unlimited Revisions",
  },
];

// =============================================================================
// FORM OPTIONS
// =============================================================================

export const agreementTypeOptions = [
  { value: "nda", label: "Non-Disclosure Agreement (NDA)" },
  { value: "employment", label: "Employment Contract" },
  { value: "rental", label: "Rental Agreement" },
  { value: "service", label: "Service Agreement" },
  { value: "partnership", label: "Partnership Deed" },
  { value: "freelancer", label: "Freelancer Contract" },
  { value: "shareholder", label: "Shareholder Agreement" },
  { value: "vendor", label: "Vendor Contract" },
  { value: "custom", label: "Custom Agreement (Describe Below)" },
];

export const urgencyLevelOptions = [
  { value: "standard", label: "Standard (48 hours)", price: 999 },
  { value: "express", label: "Express (24 hours)", price: 1999 },
  { value: "urgent", label: "Urgent (Same Day)", price: 3499 },
];

// =============================================================================
// WHY CHOOSE US POINTS
// =============================================================================

export const whyChooseUsPoints = [
  {
    id: "speed",
    title: "24-Hour Turnaround",
    description: "Get your agreement drafted in 24 hours. Same-day delivery available for urgent needs.",
    iconType: "clock",
  },
  {
    id: "quality",
    title: "Licensed Advocates",
    description: "Every agreement is drafted by experienced Licensed Advocates with industry expertise.",
    iconType: "shield",
  },
  {
    id: "revisions",
    title: "Unlimited Revisions",
    description: "Not satisfied? Request unlimited revisions until the agreement meets your needs perfectly.",
    iconType: "refresh",
  },
  {
    id: "templates",
    title: "50+ Industry Templates",
    description: "Choose from over 50 professionally drafted templates tailored to various industries.",
    iconType: "document",
  },
  {
    id: "compliance",
    title: "100% Legally Compliant",
    description: "All agreements comply with Indian laws and are valid for court proceedings.",
    iconType: "check",
  },
  {
    id: "consultation",
    title: "Free Legal Consultation",
    description: "Get expert guidance on choosing the right agreement and understanding key clauses.",
    iconType: "chat",
  },
];

// =============================================================================
// HERO SECTION DATA
// =============================================================================

export const heroFlipWords = [
  "Custom Drafting",
  "24-Hour Delivery",
  "Expert Review",
  "Unlimited Revisions",
];

export const heroFeatureBadges = [
  {
    id: "advocates",
    title: "Licensed Advocates",
    subtitle: "Expert drafting",
  },
  {
    id: "templates",
    title: "50+ Templates",
    subtitle: "Industry-specific",
  },
];











 
export const agreementDeliverables = [
  "Professionally Drafted Agreement in Word & PDF Format",
  "Customized Clauses tailored to your specific situation",
  "Legal review by experienced High Court Advocates",
  "Unlimited Revisions until you are satisfied",
  "Guidance on Stamp Duty and Notarization",
  "Post-delivery support for any clarifications",
];

export const agreementProcessDetails = [
  {
    title: "Requirement Gathering",
    description: "We collect all necessary details via a simple form or call.",
  },
  {
    title: "Legal Research & Drafting",
    description: "Our advocates research case laws and draft a strong agreement.",
  },
  {
    title: "Internal Quality Check",
    description: "Senior lawyers review the draft to ensure zero errors.",
  },
  {
    title: "Client Review & Finalization",
    description: "You review the draft, suggest changes, and we finalize it.",
  },
];
