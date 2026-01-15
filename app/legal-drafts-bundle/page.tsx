import type { Metadata } from "next";
import { BundleLanding } from "@/components/legal-drafts-bundle";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "3500+ Legal Drafts Templates Bundle | Instant Download at ₹499 | Hindi, English & Marathi",
  description:
    "Download 3500+ professional legal drafts instantly at ₹499 (80% OFF). Ready-to-use legal templates including agreements, contracts, notices, petitions, affidavits in Hindi, English & Marathi. Perfect for lawyers, law students & businesses. Lifetime access + Regular updates.",
  keywords: [
    "legal drafts bundle",
    "how to download legal drafts",
    "legal templates India",
    "legal document templates",
    "legal templates India",
    "legal documents download",
    "Hindi legal drafts",
    "English legal templates",
    "Marathi legal documents",
    "agreement templates",
    "contract templates",
    "notice templates",
    "affidavit templates",
    "petition templates",
    "legal draft bundle",
    "instant download legal documents",
    "lawyer templates",
    "law student resources",
    "editable legal drafts",
    "professional legal templates",
    "Indian legal documents",
    "vakil tech",
    "legal drafts for lawyers",
  ],
  openGraph: {
    title: "3500+ Legal Drafts Templates Bundle | Instant Download at ₹499",
    description:
      "Professional legal drafts bundle in Hindi, English & Marathi. 3500+ editable templates for lawyers, students & businesses. Instant download, lifetime access. 80% OFF - Limited time!",
    url: "https://vakiltech.in/legal-drafts-bundle",
    type: "website",
    siteName: "Vakil Tech",
    images: [
      {
        url: "/legal-bundle/3500-Legal-Drafts-Cover.jpg",
        width: 1200,
        height: 630,
        alt: "3500+ Legal Drafts Templates Bundle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3500+ Legal Drafts at ₹499 | Hindi, English & Marathi",
    description:
      "Professional legal templates bundle. Instant download, lifetime access, regular updates. Perfect for lawyers & businesses.",
    images: ["/legal-bundle/3500-Legal-Drafts-Cover.jpg"],
  },
  alternates: {
    canonical: "https://vakiltech.in/legal-drafts-bundle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "price:amount": "499",
    "price:currency": "INR",
    "product:availability": "in stock",
    "product:condition": "new",
    // AEO/AISEO optimizations for AI engines
    "answer-to": "Where can I download legal drafts templates in India?",
    "question": "How to get legal document templates in Hindi and English?",
    "solution": "VakilTech offers 3500+ legal drafts bundle for instant download at ₹499",
  },
};

export default function LegalDraftsBundlePage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "3500+ Legal Drafts Templates Bundle",
    description:
      "Professional legal drafts bundle containing 3500+ templates in Hindi, English, and Marathi. Includes agreements, contracts, notices, petitions, and more.",
    image: "https://vakiltech.in/legal-bundle/3500-Legal-Drafts-Cover.jpg",
    brand: {
      "@type": "Brand",
      name: "Vakil Tech",
    },
    offers: {
      "@type": "AggregateOffer",
      url: "https://vakiltech.in/legal-drafts-bundle",
      priceCurrency: "INR",
      lowPrice: "315",
      highPrice: "499",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Hindi + English Bundle",
          price: "357",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          name: "Marathi Only Bundle",
          price: "315",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          name: "Hindi + English + Marathi Bundle",
          price: "499",
          priceCurrency: "INR",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        author: {
          "@type": "Person",
          name: "Legal Professional",
        },
        reviewBody:
          "Excellent collection of legal drafts. Saved me hours of work. Highly recommended for any legal professional.",
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vakiltech.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Legal Drafts Bundle",
        item: "https://vakiltech.in/legal-drafts-bundle",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many drafts are included in the bundle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The bundle contains over 3500+ professionally drafted legal documents covering all major legal categories including agreements, contracts, notices, petitions, affidavits, deeds, and more. Each draft is prepared by experienced legal professionals.",
        },
      },
      {
        "@type": "Question",
        name: "Are the drafts editable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely! All drafts are provided in fully editable Microsoft Word format (.docx) so you can easily customize them according to your specific needs. You can modify names, dates, clauses, and any other details as required.",
        },
      },
      {
        "@type": "Question",
        name: "How will I receive the drafts after payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After successful payment, your bundle will automatically start downloading to your device immediately. You can also access the download link from your email for future downloads anytime you need.",
        },
      },
      {
        "@type": "Question",
        name: "What languages are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer drafts in three languages: Hindi, English, and Marathi. You can choose the language bundle that best suits your needs. The most popular option is the complete bundle with all three languages.",
        },
      },
      {
        "@type": "Question",
        name: "Is the payment secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely! All payments are processed through Razorpay, India's most trusted payment gateway. We use 256-bit SSL encryption and support all major payment methods including UPI, credit/debit cards, net banking, and wallets.",
        },
      },
    ],
  };

  // AEO/AISEO Schemas
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "3500+ Legal Drafts Templates Bundle | Instant Download at ₹499",
    description:
      "Download 3500+ professional legal drafts instantly at ₹499 (80% OFF). Ready-to-use legal templates in Hindi, English & Marathi. Includes agreements, contracts, notices.",
    author: {
      "@type": "Organization",
      name: "VakilTech Legal Team",
      url: "https://vakiltech.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "VakilTech",
      logo: {
        "@type": "ImageObject",
        url: "https://vakiltech.in/logo.png",
      },
    },
    datePublished: "2024-01-15",
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vakiltech.in/legal-drafts-bundle",
    },
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Legal Drafts Bundle | 3500+ Templates | VakilTech",
    description:
      "Download 3500+ professional legal drafts instantly at ₹499. Ready-to-use templates for lawyers, law students & businesses.",
    url: "https://vakiltech.in/legal-drafts-bundle",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".prose"],
    },
    about: {
      "@type": "Thing",
      name: "Legal Document Templates",
      description: "Comprehensive collection of legal drafts and templates",
    },
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download Legal Drafts Bundle",
    description: "Simple 3-step process to get instant access to 3500+ legal templates",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "499",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose Your Bundle",
        text: "Select from Hindi, English, Marathi, or the complete bundle with all languages.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Complete Payment",
        text: "Make a secure payment of ₹499 through Razorpay using UPI, cards, or net banking.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Instant Download",
        text: "Your bundle starts downloading immediately. You'll also receive an email with the download link for future access.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <BundleLanding />
    </>
  );
}
