import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getNoticeData } from "@/lib/send-legal-notice/notice-types-data";
import { LegalNoticeTypePageClient } from "./page-client";

/* =============================================================================
 * PAGE COMPONENT (Server Component)
 * ============================================================================= */

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const data = getNoticeData(type);

  if (!data) {
    return {
      title: "Legal Notice Service Not Found",
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: "website",
      url: `https://vakiltech.in/send-legal-notice/${type}`,
      images: [
        {
          url: "/assets/services/legal-notice.png", 
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
     alternates: {
      canonical: `https://vakiltech.in/send-legal-notice/${type}`,
    },
  };
}

export default async function LegalNoticeTypePage({ params }: PageProps) {
  const { type } = await params;
  const data = getNoticeData(type);

  // If notice type doesn't exist, show 404
  if (!data) {
    notFound();
  }

  return <LegalNoticeTypePageClient data={data} />;
}
