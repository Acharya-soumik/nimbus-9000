/**
 * VakilTech Home Page Data Constants
 *
 * All content and data for the main home page.
 */

import type { FAQItem } from "@/components/ui/faq-section";
import type { TimelineStep } from "@/components/send-legal-notice/HowWeWorkTimeline";
import type { SafetyFeature } from "@/components/send-legal-notice/WhySaferSection";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  href: string;
  ctaText: string;
  badge?: string;
  iconType: "notice" | "consultation";
  image?: string;
  mostPopular?: boolean;
}

export interface HomeStat {
  value: string;
  label: string;
  suffix?: string;
}

// =============================================================================
// HERO CONTENT
// =============================================================================

export const homeHeroContent = {
  badge: "PREMIUM LEGAL NETWORK",
  headline: "Quality Legal Experts.",
  highlightedText: "Connect with",
  subheadline:
    "Get verified High Court advocates for notices, consultations, and agreements. Fast, reliable, and 100% online.",
  flipWords: [
    "Legal Notices",
    "Consultations",
    "Agreements",
    "Property Disputes",
  ],
  stats: [
    { value: "15,000+", label: "Clients Served" },
    { value: "₹50L+", label: "Legal Fees Saved" },
    { value: "4.9/5", label: "Client Rating" },
  ],
  trustBadges: [
    "Licensed Advocates",
    "100% Confidential",
    "Money-Back Guarantee",
  ],
};

// =============================================================================
// SERVICES DATA
// =============================================================================

export const services: Service[] = [
  {
    id: "legal-notice",
    title: "Legal Notice",
    description: "Drafted by Senior Advocates",
    price: "Custom Drafted",
    originalPrice: "₹3,999",
    features: [
      "Senior Advocate Review",
      "Sent via Speed Post",
      "Unlimited Revisions",
      "24/7 Support",
      "Delivery Tracking",
    ],
    href: "/send-legal-notice",
    ctaText: "Send Legal Notice",
    badge: "MOST POPULAR",
    iconType: "notice",
    image: "/assets/our-services/legal-notice.png",
    mostPopular: true,
  },
  {
    id: "legal-consultation",
    title: "Legal Consultation",
    description: "Talk to High Court Experts",
    price: "No Time Constraints",
    originalPrice: "₹999",
    features: [
      "15-45 Min Detailed Call",
      "High Court Advocate",
      "Clear Actionable Advice",
      "100% Confidential",
      "Same-Day Availability",
    ],
    href: "/legal-consultation",
    ctaText: "Book Consultation",
    badge: "STARTING AT ₹299",
    iconType: "consultation",
    image: "/assets/our-services/consultation.png",
  },
  {
    id: "agreement-drafting",
    title: "Agreement Drafting",
    description: "Ironclad Legal Contracts",
    price: "Detailed Consultation",
    features: [
      "Drafted by Experts",
      "Unlimited Revisions",
      "100% Legal Safety",
      "Custom Protection",
    ],
    href: "/agreement-drafting",
    ctaText: "Draft Agreement",
    badge: "Custom Drafted",
    iconType: "notice",
    image: "/assets/our-services/agreement-drafting.png",
  },
  {
    id: "fssai-registration",
    title: "FSSAI License",
    description: "Zero Rejection Guarantee",
    price: "Get License",
    originalPrice: "₹999",
    features: [
      "14-Digit License Number",
      "100% Online Process",
      "Avoid Fines",
      "Fast Delivery",
    ],
    href: "/fssai-registration",
    ctaText: "Get FSSAI License",
    badge: "FOOD BIZ ESSENTIAL",
    iconType: "notice",
    image: "/assets/our-services/fssai-registration.png",
  },
  {
    id: "trade-license",
    title: "Trade License",
    description: "Official Government Reg.",
    price: "Apply Now",
    originalPrice: "₹1,499",
    features: [
      "Municipal Compliance",
      "Prevent Sealing",
      "Hassle-free Process",
      "Valid for 1 Year",
    ],
    href: "/trade-license",
    ctaText: "Apply Now",
    badge: "MUNICIPAL PERMIT",
    iconType: "notice",
    image: "/assets/our-services/trade-license.png",
  },
  {
    id: "itr-filing",
    title: "ITR Filing",
    description: "Expert Tax Filing",
    price: "@599",
    originalPrice: "₹1,999",
    features: [
      "CA Review & Filing",
      "Maximum Refund",
      "Notice Support",
      "All Income Plans",
    ],
    href: "/itr-filing",
    ctaText: "File ITR",
    badge: "TAX SEASON",
    iconType: "notice",
    image: "/assets/our-services/itr-filing.png",
  },
  {
    id: "gst-registration",
    title: "GST Registration",
    description: "Get GST Number",
    price: "@698",
    originalPrice: "₹1,499",
    features: [
      "GST Certificate (REG-06)",
      "3-7 Days Delivery",
      "100% Online",
      "Lowest Price",
    ],
    href: "/gst-registration",
    ctaText: "Register GST",
    badge: "BUSINESS GROWTH",
    iconType: "notice",
    image: "/assets/our-services/gst-registration.png",
  },
];

// =============================================================================
// WHY VAKILTECH FEATURES
// =============================================================================

export const homeFeatures: SafetyFeature[] = [
  {
    image: "/assets/common/consut-lawyer.png",
    title: "Verified Experts",
    description:
      "We only partner with experienced High Court practitioners. Quality you can trust.",
  },
  {
    image: "/assets/common/save-money.png",
    title: "Transparent Pricing",
    description: "Premium legal services at fixed, affordable rates. No hidden costs.",
  },
  {
    image: "/assets/common/sit-and-relax.png",
    title: "Zero Court Visits",
    description: "Minimal jhanjhat. Handle everything from your phone.",
  },
  {
    image: "/assets/common/postal-delivery.png",
    title: "Track Every Step",
    description: "Real-time updates via WhatsApp & Email. Sleep better.",
  },
];

// =============================================================================
// HOW IT WORKS
// =============================================================================

export const homeTimelineSteps: TimelineStep[] = [
  {
    title: "Tell Us The Issue",
    description:
      "Answer simple questions. No complicated legal jargon.",
    icon: "/assets/common/fill-form.png",
  },
  {
    title: "Expert Review",
    description:
      "A Senior Advocate reviews your case drafted by our team.",
    icon: "/assets/common/consut-lawyer.png",
  },
  {
    title: "You Get Results",
    description:
      "Notice sent or advice delivered. Professional and precise.",
    icon: "/assets/common/registered-post.png",
  },
];

// =============================================================================
// HOME PAGE FAQs
// =============================================================================

export const homeFAQs: FAQItem[] = [
  {
    id: "what-is-vakiltech",
    question: "What is VakilTech?",
    answer:
      "Your online legal team. We connect you with verified High Court advocates for notices, consultations, and documents. Fixed prices. Zero office visits.",
  },
  {
    id: "services-offered",
    question: "What services do you offer?",
    answer:
      "1. Legal Notices: Drafted by senior advocates, sent via Speed Post.\n2. Consultations: 15-min calls with experts.\n3. Documents: Rent agreements, wills, and contracts.",
  },
  {
    id: "how-different",
    question: "Why choose VakilTech?",
    answer:
      "Quality and Convenience. We combine the expertise of top lawyers with the ease of an online platform. You get premium service without the premium price tag.",
  },
  {
    id: "is-it-legitimate",
    question: "Is this legitimate?",
    answer:
      "100% Pakka. All our advocates are Bar Council registered. We've served 15,000+ happy clients. Your case is in safe hands.",
  },
  {
    id: "confidential",
    question: "Is my data safe?",
    answer:
      "Yes. Encrypted and protected by advocate-client privilege. We never share your details with anyone. Period.",
  },
  {
    id: "refund-policy",
    question: "What if I'm not happy?",
    answer:
      "Money-back guarantee. If you're not satisfied, tell us within 24 hours. We'll fix it or refund you. No questions asked.",
  },
];

// =============================================================================
// CTA BANNER CONTENT
// =============================================================================

export const ctaBannerContent = {
  headline: "Quality Legal Support. Just a Click Away.",
  subheadline:
    "Join 15,000+ satisfied clients who trust VakilTech for their legal needs.",
  primaryCta: {
    text: "Explore Services",
    href: "#services",
  },
  secondaryCta: {
    text: "Chat on WhatsApp",
    href: "https://wa.me/917047683995",
  },
};

// =============================================================================
// STATS DATA
// =============================================================================

export const homeStats: HomeStat[] = [
  { value: "15,000", label: "Happy Clients", suffix: "+" },
  { value: "50", label: "Lakhs Saved", suffix: "L+" },
  { value: "30", label: "Expert Advocates", suffix: "+" },
  { value: "4.9", label: "Average Rating", suffix: "/5" },
];

