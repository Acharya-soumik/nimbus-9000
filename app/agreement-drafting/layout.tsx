import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Online Agreement Drafting Services India | Legal Contracts | vakiltech",
  description:
    "Professional agreement drafting services online from ₹999. Rental agreements, employment contracts, NDAs, partnership deeds & more. Drafted by Licensed Advocates. Get your custom legal agreement in 48 hours.",
  keywords: [
    "agreement drafting online",
    "legal agreement drafting",
    "contract drafting services",
    "rental agreement online",
    "employment contract drafting",
    "NDA drafting",
    "partnership deed online",
    "legal document drafting India",
    "online agreement services",
    "custom agreement drafting",
    "vakiltech",
  ],
  openGraph: {
    title: "Online Agreement Drafting Services India | vakiltech",
    description:
      "Professional agreement drafting services online from ₹999. Rental agreements, employment contracts, NDAs & more. Drafted by Licensed Advocates.",
    type: "website",
    url: "https://vakiltech.in/agreement-drafting",
    siteName: "vakiltech",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Agreement Drafting Services India | vakiltech",
    description:
      "Professional agreement drafting services online from ₹999. Drafted by Licensed Advocates.",
  },
  alternates: {
    canonical: "https://vakiltech.in/agreement-drafting",
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
    // AEO/AISEO optimizations for AI engines
    "answer-to": "How to get a legal agreement drafted online in India?",
    question: "Where can I get professional agreement drafting services?",
    solution:
      "vakiltech provides expert agreement drafting services starting at ₹999",
  },
};

export default function AgreementDraftingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
