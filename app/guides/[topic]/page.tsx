import { notFound } from "next/navigation";
import {
  getGuideBySlug,
  getRelatedGuides,
  getPopularGuides,
  guideCategories,
} from "@/components/guides";
import { GuidePageClient } from "./client";

/* =============================================================================
 * METADATA
 * ============================================================================= */

interface GuidePageProps {
  params: Promise<{
    topic: string;
  }>;
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { topic } = await params;
  const guide = getGuideBySlug(topic);

  if (!guide) {
    return {
      title: "Guide Not Found | VakilTech",
    };
  }

  // Strip HTML from excerpt for meta description
  const description = guide.excerpt.rendered.replace(/<[^>]*>/g, "").trim();

  return {
    title: `${guide.title.rendered} | VakilTech Guides`,
    description,
    openGraph: {
      title: guide.title.rendered,
      description,
      type: "article",
      publishedTime: guide.date,
      modifiedTime: guide.modified,
      images: guide._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [guide._embedded["wp:featuredmedia"][0].source_url]
        : [],
    },
  };
}

/* =============================================================================
 * PAGE COMPONENT
 * ============================================================================= */

export default async function GuidePage({ params }: GuidePageProps) {
  const { topic } = await params;
  const guide = getGuideBySlug(topic);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide, 3);
  const popularGuides = getPopularGuides(5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title.rendered,
    description: guide.excerpt.rendered.replace(/<[^>]*>/g, "").trim(),
    image: guide._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    datePublished: guide.date,
    dateModified: guide.modified,
    author: {
      "@type": "Person",
      name: guide._embedded?.author?.[0]?.name || "VakilTech Legal Team",
    },
    publisher: {
      "@type": "Organization",
      name: "VakilTech",
      logo: {
        "@type": "ImageObject",
        url: "https://vakiltech.com/logo.png", // Ideally this should be dynamic/config
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidePageClient
        post={guide}
        relatedPosts={relatedGuides}
        popularPosts={popularGuides}
        categories={guideCategories}
      />
    </>
  );
}
