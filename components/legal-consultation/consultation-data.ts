/**
 * Legal Consultation Page Data Constants
 *
 * All content and data for the Legal Consultation page.
 * This file contains consultation types, testimonials, FAQs, pricing, and timeline data.
 */

import type { FAQItem } from "@/components/ui/faq-section";
import type { TimelineStep } from "@/components/send-legal-notice/HowWeWorkTimeline";
import type { SafetyFeature } from "@/components/send-legal-notice/WhySaferSection";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface ConsultationType {
  id: string;
  iconType:
    | "building"
    | "heart"
    | "briefcase"
    | "users"
    | "shield"
    | "scale"
    | "file"
    | "calculator";
  title: string;
  description: string;
  popular?: boolean;
}

export interface ConsultationTestimonial {
  quote: string;
  name: string;
  title: string;
  result?: string;
}

export interface ConsultationStat {
  value: string;
  label: string;
}

export interface PricingTier {
  badge: string;
  originalPrice: number;
  currentPrice: number;
  unit: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
  subtext?: string;
}

// =============================================================================
// CONSULTATION TYPES
// =============================================================================

export const consultationTypes: ConsultationType[] = [
  {
    id: "property",
    iconType: "building",
    title: "Property & Real Estate",
    description: "Land disputes, tenancy, property registration",
    popular: true,
  },
  {
    id: "family",
    iconType: "heart",
    title: "Family & Matrimonial",
    description: "Divorce, custody, maintenance, domestic issues",
    popular: true,
  },
  {
    id: "business",
    iconType: "briefcase",
    title: "Business & Corporate",
    description: "Contracts, partnerships, compliance",
  },
  {
    id: "employment",
    iconType: "users",
    title: "Employment & Labor",
    description: "Workplace issues, termination, harassment",
  },
  {
    id: "consumer",
    iconType: "shield",
    title: "Consumer Disputes",
    description: "Product issues, service complaints",
  },
  {
    id: "criminal",
    iconType: "scale",
    title: "Criminal Matters",
    description: "Bail, FIR, criminal defense",
  },
  {
    id: "civil",
    iconType: "file",
    title: "Civil Disputes",
    description: "Money recovery, cheque bounce, contracts",
  },
  {
    id: "tax",
    iconType: "calculator",
    title: "Tax & Financial",
    description: "Income tax, GST, financial disputes",
  },
];

// =============================================================================
// CONSULTATION TESTIMONIALS (Objection-Handling Focus)
// =============================================================================

export const consultationTestimonials: ConsultationTestimonial[] = [
  {
    // Addresses: "Is it worth the money?"
    quote:
      "I was worried about a family property dispute. The lawyer explained my exact share in the ancestral property legally. No false hopes, just clear facts. Worth much more than ₹299.",
    name: "Manoj Tiwari",
    title: "Shop Owner, Lucknow",
    result: "Clear Property Rights",
  },
  {
    // Addresses: "Privacy concern (Divorce/Family)"
    quote:
      "It's hard to discuss divorce with strangers. The advocate was very patient and dignified. I got clarity on alimony and child custody without feeling judged.",
    name: "Kiran R.",
    title: "Teacher, Bangalore",
    result: "Dignified Advice",
  },
  {
    // Addresses: "Employment/Harassment"
    quote:
      "My manager was harassing me to resign. I took a consultation to know if I can take legal action. The lawyer told me exactly what proofs to collect. I feel stronger now.",
    name: "S. Chatterjee",
    title: "IT Professional, Kolkata",
    result: "Actionable Plan",
  },
  {
    // Addresses: "Language Barrier"
    quote:
      "Mein English kam samajhta hu. Lawyer ne puri baat Hindi mein samjhayi aur bataya ki Police complaint kaise karni hai. Bahut madad mili.",
    name: "Ramesh Yadav",
    title: "Driver, Delhi",
    result: "Hindi Support",
  },
  {
    // Addresses: "Cheque Bounce/Recovery"
    quote:
      "A client owed me 2 Lakhs. Manufacturer lawyer advised against court case immediately and suggested a specific legal notice format first. It worked!",
    name: "Gaurav Sethi",
    title: "Distributor, Ahmedabad",
    result: "Money Recovered",
  },
  {
    // Addresses: "Speed"
    quote:
      "Had to reply to a builder's notice in 48 hours. Connected with a lawyer in 15 mins, understood the risks, and got the reply drafted the same day.",
    name: "Dr. P. Hegde",
    title: "Doctor, Mangalore",
    result: "Instant Help",
  },
];

// =============================================================================
// CONSULTATION STATS
// =============================================================================

export const consultationStats: ConsultationStat[] = [
  { value: "15,000+", label: "Consultations Done" },
  { value: "₹3Cr+", label: "Client Savings" },
  { value: "30+", label: "Expert Advocates" },
  { value: "4.9/5", label: "Google Rating" },
];

// =============================================================================
// CONSULTATION FAQs
// =============================================================================

export const consultationFAQs: FAQItem[] = [
  {
    id: "what-is-consultation",
    question: "What is an online legal consultation?",
    answer:
      "An online legal consultation is a video or phone call with an experienced advocate who can answer your legal questions, explain your rights, and guide you on the best course of action for your situation. It's like visiting a lawyer's office, but from the comfort of your home.",
  },
  {
    id: "how-it-works",
    question: "How does the consultation process work?",
    answer:
      "1) Fill out our simple form describing your query. 2) We match you with a specialist advocate. 3) Schedule a convenient time slot. 4) Have your consultation via video/phone call. 5) Receive clear, actionable advice and follow-up support.",
  },
  {
    id: "what-to-expect",
    question: "What can I discuss in a consultation?",
    answer:
      "You can discuss any legal matter including property disputes, family issues, business contracts, employment problems, consumer complaints, criminal matters, and more. Our advocates cover all areas of Indian law. No question is too small or too complex.",
  },
  {
    id: "confidentiality",
    question: "Is my consultation confidential?",
    answer:
      "Yes, absolutely. All consultations are protected by advocate-client privilege. Your information is never shared with third parties and all calls are conducted on secure, encrypted platforms. We take your privacy very seriously.",
  },
  {
    id: "preparation",
    question: "Do I need to prepare anything before the call?",
    answer:
      "It helps to have relevant documents ready (contracts, notices, etc.) and a list of questions you want answered. However, our advocates are skilled at understanding situations even with limited information. Just come as you are!",
  },
  {
    id: "after-consultation",
    question: "What happens after the consultation?",
    answer:
      "You'll receive a summary of the advice given, recommended next steps, and follow-up support based on your plan. If you need further legal services (notice drafting, court representation), we can assist with that too.",
  },
  {
    id: "refund-policy",
    question: "What if I'm not satisfied? Can I get a refund?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're genuinely not satisfied with the quality of consultation, contact us within 24 hours and we'll either arrange another consultation with a different advocate or process a full refund. No questions asked.",
  },
  {
    id: "court-representation",
    question: "Can the advocate represent me in court?",
    answer:
      "The consultation is for advice only. However, if your case requires court representation, we can connect you with advocates from our network who can take up your case. This would be a separate engagement with clear pricing.",
  },
];

// =============================================================================
// PRICING - SINGLE TIER
// =============================================================================

export const consultationPricing: PricingTier = {
  badge: "BEST VALUE",
  originalPrice: 999,
  currentPrice: 299,
  unit: "only",
  features: [
    "Detailed Discussion with Expert",
    "Call Within 30 Minutes",
    "Expert Legal Advice",
    "100% Confidential",
    "Money-Back Guarantee",
  ],
  highlighted: true,
  ctaText: "Book Consultation Now",
};

// =============================================================================
// TIMELINE STEPS (How We Work)
// =============================================================================

export const consultationSteps: TimelineStep[] = [
  {
    title: "Share Your Query",
    description:
      "Fill out a brief form describing your legal situation. Include any relevant details or documents you have.",
    icon: "/assets/common/fill-form.png",
  },
  {
    title: "Get Matched with Expert",
    description:
      "We analyze your query and connect you with a specialist advocate from our panel of High Court lawyers.",
    icon: "/assets/common/consut-lawyer.png",
  },
  {
    title: "Consult via Video/Phone",
    description:
      "Have a private, confidential conversation with your advocate. Ask questions, get clarity on your rights.",
    icon: "/assets/common/sit-and-relax.png",
  },
  {
    title: "Receive Actionable Advice",
    description:
      "Get clear guidance on your legal options, next steps, and recommended course of action.",
    icon: "/assets/common/registered-post.png",
  },
];

// =============================================================================
// WHY VAKILTECH FEATURES (Pain Point Solutions)
// =============================================================================

export const consultationFeatures: SafetyFeature[] = [
  {
    image: "/assets/common/consut-lawyer.png",
    title: "Real Experts, Not Juniors",
    description:
      "Connect with verified Licensed Advocates. 10+ years average experience.",
  },
  {
    image: "/assets/common/save-money.png",
    title: "Save ₹1,700+ Per Consultation",
    description: "Traditional lawyers charge ₹2,000+. We charge just ₹299.",
  },
  {
    image: "/assets/common/sit-and-relax.png",
    title: "No Office Visits Required",
    description:
      "Consult from your home, office, or anywhere. 24/7 availability.",
  },
  {
    image: "/assets/common/postal-delivery.png",
    title: "Get Answers in 30 Minutes",
    description: "No waiting for appointments. Connect with an expert today.",
  },
];

// =============================================================================
// TRUST BADGES
// =============================================================================

export const trustBadges: TrustBadge[] = [
  {
    icon: "ShieldCheck",
    text: "100% Secure",
    subtext: "256-bit encryption",
  },
  {
    icon: "Award",
    text: "Bar Council Verified",
    subtext: "All advocates registered",
  },
  {
    icon: "CreditCard",
    text: "Money-Back Guarantee",
    subtext: "No questions asked",
  },
  {
    icon: "Lock",
    text: "Confidential",
    subtext: "Your data never shared",
  },
];

// =============================================================================
// HERO SECTION CONTENT
// =============================================================================

export const heroContent = {
  breadcrumb: ["Home", "Legal Consultation"],
  badge: "TRUSTED BY 15,000+ INDIANS",
  headline: "Need Legal Advice But Can't Trust Local Lawyers?",
  subheadlinePrefix: "Our expertise is in ",
  subheadlineSuffix: " - Starting at just ₹299",
  flipWords: [
    "Property & Real Estate",
    "Family & Matrimonial",
    "Business & Corporate",
    "Employment & Labor",
    "Consumer Disputes",
    "Criminal Matters",
    "Civil Disputes",
    "Tax & Financial",
  ],
  trustBadges: [
    {
      icon: "Building2",
      title: "Licensed Advocates",
      subtitle: "Not just lawyers",
    },
    {
      icon: "Shield",
      title: "100% Confidential",
      subtitle: "Your data is safe",
    },
    {
      icon: "Clock",
      title: "Connect in 30 Min",
      subtitle: "No waiting",
    },
    {
      icon: "Shield",
      title: "Quality Advice",
      subtitle: "Expert lawyers",
    },
  ],
  pricingCard: {
    badge: "LIMITED TIME OFFER",
    originalPrice: 999,
    currentPrice: 299,
    unit: "/ consultation",
    features: [
      "15-45 Min detailed Call",
      "Licensed Advocate",
      "Free Follow-up Included",
      "Money-Back Guarantee",
    ],
    urgencyText: "Only 3 slots left today",
  },
};

// =============================================================================
// SOCIAL PROOF NOTIFICATIONS (for FOMO effect)
// =============================================================================

export const socialProofNotifications = [
  {
    name: "Rahul M.",
    city: "Mumbai",
    type: "Property Consultation",
    timeAgo: "2 min ago",
  },
  {
    name: "Priya S.",
    city: "Delhi",
    type: "Family Consultation",
    timeAgo: "5 min ago",
  },
  {
    name: "Amit K.",
    city: "Bangalore",
    type: "Business Consultation",
    timeAgo: "8 min ago",
  },
  {
    name: "Neha G.",
    city: "Pune",
    type: "Employment Consultation",
    timeAgo: "12 min ago",
  },
  {
    name: "Vikram R.",
    city: "Chennai",
    type: "Consumer Dispute",
    timeAgo: "15 min ago",
  },
];

// =============================================================================
// MODAL CONTENT
// =============================================================================

export const discountModalContent = {
  headline: "Special Consultation Offer",
  originalPrice: 499,
  discountedPrice: 299,
  savings: 200,
  expiresInSeconds: 300, // 5 minutes
  benefits: [
    "15 min call with expert advocate",
    "Follow-up support included",
    "100% confidential",
  ],
};

export const exitIntentReasons = [
  "Too expensive",
  "Need more information",
  "Will come back later",
  "Found another service",
  "Just browsing",
];
