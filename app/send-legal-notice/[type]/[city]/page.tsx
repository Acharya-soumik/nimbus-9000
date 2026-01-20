import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getNoticeData } from "@/lib/send-legal-notice/notice-types-data";
import { getCityData } from "@/lib/data/cities";
import { LegalNoticeCityPageClient } from "./page-client";

interface PageProps {
  params: Promise<{
    type: string;
    city: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type, city } = await params;
  const noticeData = getNoticeData(type);
  const cityData = getCityData(city);

  if (!noticeData || !cityData) {
    return {
      title: "Service Not Available",
    };
  }

  const title = `${noticeData.title} in ${cityData.name} – Expert Advocate Draft | VakilTech`;
  const description = `Send ${noticeData.title.toLowerCase()} in ${cityData.name}. Local court-ready format (${cityData.courts.highCourt}). ${cityData.stats.noticesSent}+ sent. ₹299 onwards. 24hr delivery.`;

  return {
    title,
    description,
    keywords: [
      ...noticeData.seo.keywords,
      ...cityData.keywords,
      `${type} ${city}`,
      `legal notice in ${city}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://vakiltech.in/send-legal-notice/${type}/${city}`,
    },
    alternates: {
      canonical: `/send-legal-notice/${type}/${city}`,
    },
  };
}

// Generate static paths for top cities (ISR for others)
export async function generateStaticParams() {
  const topCities = ['bangalore', 'mumbai', 'delhi', 'hyderabad', 'chennai'];
  const topNoticeTypes = [
    'legal-notice-for-money-recovery',
    'cheque-bounce-legal-notice',
    'legal-notice-to-tenant',
  ];

  const params = [];
  for (const city of topCities) {
    for (const type of topNoticeTypes) {
      params.push({ type, city });
    }
  }
  return params;
}

export default async function LegalNoticeCityPage({ params }: PageProps) {
  const { type, city } = await params;
  const noticeData = getNoticeData(type);
  const cityData = getCityData(city);

  if (!noticeData || !cityData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `VakilTech - ${noticeData.title} in ${cityData.name}`,
    "description": `${noticeData.title} service in ${cityData.name}`,
    "areaServed": {
      "@type": "City",
      "name": cityData.name,
      "containedIn": {
        "@type": "State",
        "name": cityData.state
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://vakiltech.in/send-legal-notice/${type}/${city}`
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": cityData.stats.noticesSent.toString()
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <LegalNoticeCityPageClient noticeData={noticeData} cityData={cityData} />
    </>
  );
}
