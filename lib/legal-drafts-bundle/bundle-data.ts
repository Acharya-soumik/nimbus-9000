import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Users,
  Award,
  Zap,
  RefreshCw,
  Lock,
} from "lucide-react";

export interface BundleOption {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  discount: string;
}

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const bundleOptions: BundleOption[] = [
  {
    id: "hindi-english",
    name: "Hindi + English",
    price: 357,
    originalPrice: 1785,
    description: "Complete bundle in Hindi and English languages",
    features: [
      "3500+ Legal Drafts",
      "Hindi & English versions",
      "Instant download",
      "Lifetime access",
      "Regular updates",
      "Editable Word format",
    ],
    discount: "80% OFF",
  },
  {
    id: "marathi-only",
    name: "Marathi Only",
    price: 315,
    originalPrice: 1575,
    description: "Complete bundle in Marathi language",
    features: [
      "3500+ Legal Drafts",
      "Marathi language",
      "Instant download",
      "Lifetime access",
      "Regular updates",
      "Editable Word format",
    ],
    discount: "80% OFF",
  },
  {
    id: "hindi-english-marathi",
    name: "Hindi + English + Marathi",
    price: 499,
    originalPrice: 2495,
    description: "Complete bundle in all three languages",
    features: [
      "3500+ Legal Drafts",
      "Hindi, English & Marathi",
      "Instant download",
      "Lifetime access",
      "Regular updates",
      "Most popular choice",
      "Editable Word format",
      "Priority support",
    ],
    popular: true,
    discount: "80% OFF",
  },
];

export const legalCategories = [
  "Agreements",
  "Affidavits",
  "Bail Applications",
  "Contracts",
  "Deeds",
  "Legal Notices",
  "Petitions",
  "Wills & Testaments",
  "Power of Attorney",
  "Rent Agreements",
  "Sale Deeds",
  "Partnership Deeds",
  "Employment Contracts",
  "NDA Agreements",
  "Service Agreements",
  "Loan Agreements",
  "Gift Deeds",
  "Lease Deeds",
  "Settlement Deeds",
  "Divorce Petitions",
  "Maintenance Petitions",
  "Property Disputes",
  "Consumer Complaints",
  "Insurance Claims",
  "Banking Documents",
  "Corporate Documents",
  "Tax Documents",
  "Family Law Documents",
  "Criminal Law Documents",
  "Civil Law Documents",
];

export const bundleTestimonials: Testimonial[] = [
  {
    name: "Adv. Rajesh Kumar",
    role: "Practicing Advocate, Delhi",
    rating: 5,
    comment:
      "Outstanding collection! This bundle has saved me countless hours of drafting time. The drafts are professionally written and cover almost every scenario I encounter in my practice. Worth every rupee!",
    verified: true,
  },
  {
    name: "Priya Sharma",
    role: "Law Student, Mumbai",
    rating: 5,
    comment:
      "As a law student, this bundle is a goldmine! It helps me understand different types of legal drafts and their formats. The variety of templates has significantly improved my drafting skills. Highly recommended!",
    verified: true,
  },
  {
    name: "Suresh Patel",
    role: "Business Owner, Pune",
    rating: 5,
    comment:
      "Perfect for businesses! I no longer need to hire lawyers for basic agreements and contracts. The drafts are clear, professional, and easy to customize. This bundle has saved my company lakhs in legal fees.",
    verified: true,
  },
  {
    name: "Adv. Meera Reddy",
    role: "Legal Consultant, Bangalore",
    rating: 5,
    comment:
      "The Marathi drafts are especially helpful for my practice in Maharashtra. Quality is excellent and the variety is impressive. Regular updates are a bonus. Great value for money!",
    verified: true,
  },
  {
    name: "Amit Deshmukh",
    role: "CA Professional, Nagpur",
    rating: 5,
    comment:
      "Extremely useful for my practice. The bundle includes all types of agreements and documents I need for my clients. The editable format makes customization easy. Excellent product!",
    verified: true,
  },
  {
    name: "Adv. Sneha Joshi",
    role: "Junior Advocate, Kolhapur",
    rating: 5,
    comment:
      "This bundle is a complete package for any legal professional. The drafts are well-structured and legally sound. The multilingual option is a huge plus. Best investment I've made for my practice!",
    verified: true,
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: BadgeCheck,
    title: "Professionally Drafted",
    description:
      "All drafts prepared by experienced legal professionals with 10+ years of expertise",
  },
  {
    icon: Users,
    title: "Trusted by 10,000+ Users",
    description:
      "Join thousands of lawyers, students, and businesses who trust our templates",
  },
  {
    icon: Award,
    title: "Comprehensive Coverage",
    description:
      "3500+ templates covering all major legal categories and requirements",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Download immediately after payment - no waiting, no delays",
  },
  {
    icon: RefreshCw,
    title: "Free Lifetime Updates",
    description:
      "Get all future updates and new templates added absolutely free",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    description:
      "100% secure transactions powered by Razorpay with 256-bit encryption",
  },
];

export const bundleFAQs: FAQ[] = [
  {
    question: "How many drafts are included in the bundle?",
    answer:
      "The bundle contains over 3500+ professionally drafted legal documents covering all major legal categories including agreements, contracts, notices, petitions, affidavits, deeds, and more. Each draft is prepared by experienced legal professionals.",
  },
  {
    question: "Are the drafts editable?",
    answer:
      "Yes, absolutely! All drafts are provided in fully editable Microsoft Word format (.docx) so you can easily customize them according to your specific needs. You can modify names, dates, clauses, and any other details as required.",
  },
  {
    question: "How will I receive the drafts after payment?",
    answer:
      "After successful payment, your bundle will automatically start downloading to your device immediately. You can also access the download link from your email for future downloads anytime you need.",
  },
  {
    question: "What languages are available?",
    answer:
      "We offer drafts in three languages: Hindi, English, and Marathi. You can choose the language bundle that best suits your needs. The most popular option is the complete bundle with all three languages.",
  },
  {
    question: "Who can benefit from this bundle?",
    answer:
      "This bundle is perfect for lawyers, advocates, legal practitioners, law students, CA professionals, businesses, startups, and anyone who regularly needs legal documents. It saves hours of drafting time and ensures professional quality.",
  },
  {
    question: "What if the download doesn't start after payment?",
    answer:
      "We guarantee instant delivery. If your download doesn't start automatically after payment, please contact us immediately at +91 70476 83995 or via email. We will send you the download link instantly or provide a full refund.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "We offer a 7-day money-back guarantee. If you're not satisfied with the quality of the drafts for any reason, contact us within 7 days of purchase and we'll provide a full refund, no questions asked.",
  },
  {
    question: "Do you provide updates?",
    answer:
      "Yes! We regularly update the bundle with new templates and drafts based on latest legal amendments and requirements. All updates are free for lifetime once you purchase the bundle.",
  },
  {
    question: "Can I use these drafts for my clients?",
    answer:
      "Yes, you can use these drafts for your professional practice and clients. However, we recommend reviewing and customizing each draft according to specific case requirements and current legal provisions.",
  },
  {
    question: "Is the payment secure?",
    answer:
      "Yes, absolutely! All payments are processed through Razorpay, India's most trusted payment gateway. We use 256-bit SSL encryption and support all major payment methods including UPI, credit/debit cards, net banking, and wallets.",
  },
];
