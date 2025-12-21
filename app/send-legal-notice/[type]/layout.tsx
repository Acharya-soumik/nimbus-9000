import type { Metadata } from "next";
import { getNoticeData, getAllNoticeSlugs } from "@/lib/send-legal-notice/notice-types-data";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    type: string;
  }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { type } = await params;
  const data = getNoticeData(type);

  if (!data) {
    return {
      title: "Legal Notice Not Found | vakiltech",
      description: "The requested legal notice page was not found.",
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
      url: `https://vakiltech.in/send-legal-notice/${data.slug}`,
      siteName: "vakiltech",
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.title,
      description: data.seo.description,
    },
    alternates: {
      canonical: `https://vakiltech.in/send-legal-notice/${data.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllNoticeSlugs();
  return slugs.map((slug) => ({
    type: slug,
  }));
}

export default function LegalNoticeTypeLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
