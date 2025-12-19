/**
 * VakilTech About Page Data Constants
 *
 * All content and data for the About Us page.
 * Centralized here for easy updates without touching components.
 */

import type { Testimonial, Stat } from "@/components/legal-notice/testimonials-section";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface HeroStat {
  value: string;
  label: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
  color: "primary" | "success" | "warning" | "info";
}

export interface Comparison {
  traditional: string;
  vakiltech: string;
  icon: string;
  highlight: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  subtext: string;
  icon: string;
}

export interface ImpactStory {
  metric: string;
  description: string;
}

export interface CorporateClient {
  name: string;
  industry: string;
  logo?: string;
  logoPlaceholder: boolean;
}

export interface TeamCategory {
  title: string;
  description: string;
  imagePlaceholder: string;
  credentials: string[];
}

export interface TeamStat {
  value: string;
  label: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
  price: string;
  features: string[];
  href: string;
  icon: string;
  badge?: string;
}

// =============================================================================
// HERO SECTION CONTENT
// =============================================================================

export const heroContent = {
  badge: "OUR MISSION",
  headline: "Legal Confusion to",
  headlineHighlight: "Clear Solutions",
  subheadline: "We Will Guide You",
  missionStatement:
    "VakilTech exists to make quality legal services accessible to every Indian. We believe legal help shouldn't be a privilege of the wealthy—it should be a right everyone can afford.",
  visionStatement:
    "A future where no one fears legal problems because affordable expert help is always within reach.",
  stats: [
    { value: "15,000+", label: "Indians Served" },
    { value: "₹50L+", label: "Fees Saved for Clients" },
    { value: "65%", label: "Cases Resolved Without Court" },
    { value: "4.8/5", label: "Client Satisfaction" },
  ] as HeroStat[],
};

// =============================================================================
// CORE VALUES
// =============================================================================

export const coreValues: CoreValue[] = [
  {
    icon: "Scale",
    title: "Justice for All",
    description:
      "Legal help shouldn't be determined by your bank balance. We fight to make justice accessible to every Indian.",
    color: "primary",
  },
  {
    icon: "Eye",
    title: "Radical Transparency",
    description:
      "No hidden fees. No surprise charges. What you see is what you pay. Period.",
    color: "info",
  },
  {
    icon: "Heart",
    title: "Client-First Always",
    description:
      "Your problem is our problem. We don't rest until you have clarity and a path forward.",
    color: "success",
  },
  {
    icon: "Zap",
    title: "Speed Without Compromise",
    description:
      "24-hour drafts, 3-hour lawyer matching. Fast doesn't mean careless—it means efficient.",
    color: "warning",
  },
  {
    icon: "Award",
    title: "Expertise You Can Trust",
    description:
      "Only Bar Council-registered advocates. Only High Court-experienced lawyers. No juniors, no chatbots.",
    color: "primary",
  },
  {
    icon: "Shield",
    title: "Confidentiality Guaranteed",
    description:
      "Your information never leaves our secure systems. Attorney-client privilege is sacred to us.",
    color: "success",
  },
];

// =============================================================================
// WHY VAKILTECH COMPARISONS
// =============================================================================

export const whyVakilTechContent = {
  sectionTitle: "Why VakilTech?",
  sectionSubtitle: "Because legal services needed a revolution",
  comparisons: [
    {
      traditional: "Lawyers charge ₹5,000-15,000 for a legal notice",
      vakiltech: "VakilTech: ₹1,499 all-inclusive",
      icon: "Wallet",
      highlight: "Save 80%+",
    },
    {
      traditional: "Weeks of waiting for a simple draft",
      vakiltech: "VakilTech: 24-hour turnaround guaranteed",
      icon: "Clock",
      highlight: "10x Faster",
    },
    {
      traditional: "Hidden charges appear after engagement",
      vakiltech: "VakilTech: Transparent pricing, no surprises",
      icon: "Receipt",
      highlight: "Zero Hidden Fees",
    },
    {
      traditional: "Junior lawyers handle your case secretly",
      vakiltech: "VakilTech: Supreme Court/Licensed Advocates only",
      icon: "UserCheck",
      highlight: "Senior Experts Only",
    },
    {
      traditional: "In-person visits during work hours required",
      vakiltech: "VakilTech: 100% remote, available 24/7",
      icon: "Home",
      highlight: "Work From Home",
    },
  ] as Comparison[],
  bottomNote:
    "We didn't just build another legal platform. We built the legal service we wished existed when we needed one.",
};

// =============================================================================
// TRANSPARENCY SECTION
// =============================================================================

export const transparencyContent = {
  badge: "BREAKING THE MYTH",
  headline: "Why Do Lawyers Charge Different Prices?",
  subheadline: "And why VakilTech doesn't",
  traditionalModel: {
    title: "The Traditional Lawyer Pricing Problem",
    explanation:
      "Traditional law firms charge you based on who handles your case. A senior partner charges ₹10,000/hour. A junior associate charges ₹2,000/hour. But here's the dirty secret: juniors often do 80% of the work while you pay senior rates.",
    problems: [
      "Seniority-based billing favors the firm, not you",
      "No correlation between price and outcome quality",
      "Hidden handoffs to junior lawyers",
      "Incentive to drag cases longer for more billing",
      "Opaque pricing that changes without notice",
    ],
  },
  vakilTechModel: {
    title: "The VakilTech Promise",
    explanation:
      "We believe in outcome-based value, not time-based billing. Whether your case takes 30 minutes or 3 hours, you pay the same transparent price. Every case is handled by experienced advocates, and you know exactly what you're paying before you start.",
    promises: [
      "Fixed, transparent pricing for every service",
      "High Court/Supreme Court advocates on every case",
      "No hidden handoffs—your advocate owns your case",
      "Money-back guarantee if not satisfied",
      "Price locked at booking—no surprise increases",
    ],
  },
  quote: {
    text: "We decided early on: we'd rather earn less per case and serve 10x more Indians than run an exclusive club for the wealthy.",
    attribution: "VakilTech Founding Team",
  },
};

// =============================================================================
// IMPACT STATS
// =============================================================================

export const impactStats: ImpactStat[] = [
  {
    value: "15,000+",
    label: "Indians Served",
    subtext: "Individuals and businesses across India",
    icon: "Users",
  },
  {
    value: "₹3 Crore+",
    label: "Client Savings",
    subtext: "Compared to traditional lawyer fees",
    icon: "PiggyBank",
  },
  {
    value: "65%",
    label: "Settled Without Court",
    subtext: "Most disputes resolved through notices alone",
    icon: "Handshake",
  },
  {
    value: "30+",
    label: "Expert Advocates",
    subtext: "High Court & Supreme Court registered",
    icon: "Award",
  },
  {
    value: "15+",
    label: "Cities Served",
    subtext: "From metros to tier-2 cities",
    icon: "MapPin",
  },
  {
    value: "24 Hours",
    label: "Average Turnaround",
    subtext: "From submission to draft ready",
    icon: "Clock",
  },
];

export const impactStories: ImpactStory[] = [
  {
    metric: "₹45 Lakhs",
    description: "Recovered for clients through cheque bounce notices in 2024",
  },
  {
    metric: "2,500+",
    description: "Property disputes resolved through legal notices",
  },
  {
    metric: "1,200+",
    description: "Employment issues addressed (salary recovery, termination)",
  },
];

// =============================================================================
// CORPORATE CLIENTS
// =============================================================================

export const corporateClientsContent = {
  sectionTitle: "Trusted by Growing Businesses",
  sectionSubtitle: "From startups to established enterprises",
  clients: [
    { name: "Tech Startup A", industry: "Technology", logoPlaceholder: true },
    { name: "Manufacturing Co", industry: "Manufacturing", logoPlaceholder: true },
    { name: "E-commerce Brand", industry: "Retail", logoPlaceholder: true },
    { name: "Healthcare Firm", industry: "Healthcare", logoPlaceholder: true },
    { name: "Fintech Company", industry: "Finance", logoPlaceholder: true },
    { name: "EdTech Platform", industry: "Education", logoPlaceholder: true },
    { name: "Real Estate Group", industry: "Real Estate", logoPlaceholder: true },
    { name: "Logistics Co", industry: "Logistics", logoPlaceholder: true },
    { name: "Media House", industry: "Media", logoPlaceholder: true },
    { name: "Food & Beverage", industry: "F&B", logoPlaceholder: true },
  ] as CorporateClient[],
  bottomCTA: {
    text: "Want to become a corporate client?",
    buttonText: "Explore Corporate Retainers",
    href: "/legal-consultation",
  },
};

// =============================================================================
// TEAM SECTION
// =============================================================================

export const teamContent = {
  sectionTitle: "The People Behind VakilTech",
  sectionSubtitle: "A collective of legal experts, technologists, and problem-solvers",
  teamStats: [
    { value: "50+", label: "Years Combined Legal Experience" },
    { value: "10+", label: "Licensed Advocates" },
    { value: "5+", label: "Supreme Court Practitioners" },
    { value: "20+", label: "Legal Tech Specialists" },
  ] as TeamStat[],
  teamCategories: [
    {
      title: "Legal Advisory Board",
      description:
        "Senior advocates from High Courts across India who review our processes and ensure quality standards.",
      imagePlaceholder: "/assets/about/team-legal.png",
      credentials: [
        "High Court Bar Council certified",
        "15+ years average experience",
        "Expertise across civil, criminal, corporate law",
      ],
    },
    {
      title: "Drafting Team",
      description:
        "The backbone of our legal notice service. Each notice is hand-drafted by experienced advocates.",
      imagePlaceholder: "/assets/about/team-drafting.png",
      credentials: [
        "All notices include Bar Council ID",
        "Specialization in dispute resolution",
        "Multi-lingual support (Hindi, English, regional)",
      ],
    },
    {
      title: "Consultation Experts",
      description:
        "Advocates available 24/7 for video and phone consultations across all legal domains.",
      imagePlaceholder: "/assets/about/team-consultation.png",
      credentials: [
        "Immediate availability within 3 hours",
        "Expertise in 50+ legal categories",
        "Follow-up support included",
      ],
    },
    {
      title: "Technology & Operations",
      description:
        "The team that makes seamless legal service delivery possible through technology.",
      imagePlaceholder: "/assets/about/team-tech.png",
      credentials: [
        "Secure, encrypted platforms",
        "24/7 customer support",
        "Real-time case tracking systems",
      ],
    },
  ] as TeamCategory[],
  quote:
    "We're not here to replace lawyers. We're here to connect the right lawyer with the right client, at a fair price, without the hassle.",
};

// =============================================================================
// ABOUT-SPECIFIC TESTIMONIALS
// =============================================================================

export const aboutTestimonials: Testimonial[] = [
  {
    quote:
      "I was quoted ₹12,000 by a local lawyer for a simple cheque bounce notice. VakilTech did it for ₹1,499. Same quality, 1/8th the price. Why doesn't everyone know about this?",
    name: "Amit Sharma",
    title: "Small Business Owner, Delhi",
  },
  {
    quote:
      "What impressed me most was the transparency. No hidden fees, no 'we'll let you know the cost later'. Everything was upfront. That's rare in legal services.",
    name: "Priya Menon",
    title: "Startup Founder, Bangalore",
  },
  {
    quote:
      "The advocate who handled my property case had 15 years of experience. I was paying fraction of what I'd pay elsewhere for the same expertise.",
    name: "Rajesh Agarwal",
    title: "NRI, USA (Property in Mumbai)",
  },
  {
    quote:
      "मुझे लगा था online lawyer reliable नहीं होंगे। लेकिन VakilTech ने सब clear किया। Hindi में consultation मिली और 2 हफ्ते में problem solve हो गई।",
    name: "Kavita Singh",
    title: "Teacher, Lucknow",
  },
  {
    quote:
      "Finally, a legal service that treats clients like humans, not billing opportunities. Refreshingly honest and genuinely helpful.",
    name: "Mohammed Faiz",
    title: "IT Professional, Hyderabad",
  },
];

export const aboutStats: Stat[] = [
  { value: "4.8/5", label: "Google Rating" },
  { value: "2,500+", label: "5-Star Reviews" },
  { value: "95%", label: "Would Recommend" },
  { value: "92%", label: "Repeat Clients" },
];

// =============================================================================
// SERVICES CTA SECTION
// =============================================================================

export const servicesCTAContent = {
  sectionTitle: "Ready to Experience the Difference?",
  sectionSubtitle: "Choose the service that fits your needs",
  services: [
    {
      title: "Legal Notice",
      description:
        "Get a custom-drafted legal notice from a Licensed Advocate. Perfect for money recovery, property disputes, or any situation requiring formal legal communication.",
      price: "₹1,499",
      features: ["24-hour draft", "Unlimited revisions", "Registered post delivery"],
      href: "/legal-notice",
      icon: "FileText",
      badge: "Most Popular",
    },
    {
      title: "Legal Consultation",
      description:
        "Talk to an expert advocate about your legal concerns. Get clarity on your options, rights, and next steps.",
      price: "₹299",
      features: ["Video/phone call", "Licensed Advocate", "Follow-up included"],
      href: "/legal-consultation",
      icon: "MessageCircle",
      badge: "Quick Help",
    },
    {
      title: "Corporate Retainer",
      description:
        "Ongoing legal support for your business. All legal services under one affordable monthly plan.",
      price: "₹9,999/mo",
      features: ["Unlimited consultations", "Priority support", "Dedicated advocate"],
      href: "/legal-consultation",
      icon: "Building",
      badge: "For Business",
    },
  ] as ServiceCTA[],
  bottomCTA: {
    headline: "Not sure what you need?",
    subtext:
      "Our team can help you figure out the best path forward. No pressure, no sales pitch.",
    buttonText: "Talk to Us on WhatsApp",
    whatsappLink:
      "https://wa.me/919876543210?text=Hi! I visited your About page and need some guidance.",
  },
};






