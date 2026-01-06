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
  badge: "INDIA'S TRUSTED LEGAL PLATFORM",
  headline: "Legal Solutions Made Simple",
  highlightedText: "Affordable",
  subheadline:
    "From legal notices to expert consultations, get professional legal help without the complexity or high costs.",
  flipWords: [
    "Legal Notices",
    "Expert Consultations",
    "Document Review",
    "Legal Advice",
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
    description: "Sent via Speed Post",
    price: "Custom Drafted",
    originalPrice: "₹3,999",
    features: [
      "Drafted by Licensed Advocate",
      "Sent via Speed Post ",
      "Unlimited Revisions",
      "24/7 Support",
      "Delivery Tracking",
    ],
    href: "/send-legal-notice",
    ctaText: "Send Legal Notice",
    badge: "MOST POPULAR",
    iconType: "notice",
    image: "/assets/our-services/legal-notice.png",
  },
  {
    id: "legal-consultation",
    title: "Legal Consultation",
    description: "Talk to Expert Lawyers",
    price: "no time constraints",
    originalPrice: "₹999",
    features: [
      "15-45 min detailed call",
      "Licensed Advocate",
      "Follow-up Support Included",
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
    description: "Custom Legal Contracts",
    price: "detailed consultation",
    features: [
      "Drafted by Licensed Advocate",
      "Unlimited Revisions",
      "24/7 Support",
      "Delivery Tracking",
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
    description: "Got Food Business?",
    price: "Get License",
    originalPrice: "₹999",
    features: [
      "14-Digit License Number",
      "100% Online Process",
      "Avoid Penalties",
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
    description: "For Shops & Offices",
    price: "Apply Now",
    originalPrice: "₹1,499",
    features: [
      "Municipal Compliance",
      "Prevent Shop Sealing",
      "Hassle-free Processing",
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
    description: "File Tax Returns",
    price: "@599",
    originalPrice: "₹1,999",
    features: [
      "CA Review & Filing",
      "Maximum Refund",
      "Notice Support",
      "Plans for all incomes",
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
// WHY VAKILTECH FEATURES (Generic for Home Page)
// =============================================================================

export const homeFeatures: SafetyFeature[] = [
  {
    image: "/assets/common/consut-lawyer.png",
    title: "Expert Advocates",
    description:
      "Connect with verified Licensed Advocates, not junior lawyers.",
  },
  {
    image: "/assets/common/save-money.png",
    title: "Save 80% on Legal Fees",
    description: "Quality legal services at a fraction of traditional costs.",
  },
  {
    image: "/assets/common/sit-and-relax.png",
    title: "100% Online Process",
    description: "No office visits needed. Handle everything from your home.",
  },
  {
    image: "/assets/common/postal-delivery.png",
    title: "Fast & Reliable",
    description: "Quick turnaround with real-time tracking and updates.",
  },
];

// =============================================================================
// HOW IT WORKS (Generic Steps)
// =============================================================================

export const homeTimelineSteps: TimelineStep[] = [
  {
    title: "Choose Your Service",
    description:
      "Select from our range of legal services - notices, consultations, or document review.",
    icon: "/assets/common/fill-form.png",
  },
  {
    title: "Share Your Details",
    description:
      "Fill a simple form with your requirements. Our AI helps you provide the right information.",
    icon: "/assets/common/consut-lawyer.png",
  },
  {
    title: "Get Expert Help",
    description:
      "Our Licensed Advocates review your case and deliver professional legal assistance.",
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
      "VakilTech is India's trusted online legal services platform. We connect you with experienced Licensed Advocates for legal notices, consultations, and document services - all at affordable prices without the hassle of traditional lawyer visits.",
  },
  {
    id: "services-offered",
    question: "What services does VakilTech offer?",
    answer:
      "We currently offer two main services: 1) Legal Notice drafting and delivery - professionally drafted notices sent via Speed Post for money recovery, property disputes, cheque bounce, etc. 2) Legal Consultation - video/phone consultations with expert advocates for any legal matter.",
  },
  {
    id: "how-different",
    question: "How is VakilTech different from traditional lawyers?",
    answer:
      "VakilTech offers 80% lower costs, 100% online convenience, verified Licensed Advocates, transparent pricing with no hidden fees, and a money-back guarantee. Traditional lawyers often charge ₹2,000+ for a simple consultation, while we start at just ₹299.",
  },
  {
    id: "is-it-legitimate",
    question: "Is VakilTech legitimate? Are the lawyers real?",
    answer:
      "Yes, absolutely. All our advocates are Bar Council registered with verifiable credentials. We've served 15,000+ clients with a 4.9/5 rating. Your legal matters are handled by experienced Licensed Advocates, not paralegals or AI.",
  },
  {
    id: "confidential",
    question: "Is my information confidential?",
    answer:
      "100% confidential. All communications are protected by advocate-client privilege. We use bank-grade encryption and never share your data with third parties. Your privacy is our top priority.",
  },
  {
    id: "refund-policy",
    question: "What if I'm not satisfied?",
    answer:
      "We offer a 100% money-back guarantee. If you're not satisfied with our service quality, contact us within 24 hours and we'll either resolve the issue or process a full refund - no questions asked.",
  },
];

// =============================================================================
// CTA BANNER CONTENT
// =============================================================================

export const ctaBannerContent = {
  headline: "Ready to Solve Your Legal Problem?",
  subheadline:
    "Join 15,000+ Indians who trust VakilTech for affordable, professional legal help.",
  primaryCta: {
    text: "Get Started",
    href: "#services",
  },
  secondaryCta: {
    text: "Talk to Us on WhatsApp",
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





