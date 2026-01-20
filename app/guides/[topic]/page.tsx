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

  // Strip HTML from excerpt for meta description (if any)
  const description = guide.excerpt.replace(/<[^>]*>/g, "").trim();

  return {
    title: `${guide.title} | VakilTech Guides`,
    description,
    openGraph: {
      title: guide.title,
      description,
      type: "article",
      publishedTime: guide.date,
      // modifiedTime: guide.modified, // Optional if not present in new schema
      images: guide.image ? [guide.image] : [],
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
    headline: guide.title,
    description: guide.excerpt.replace(/<[^>]*>/g, "").trim(),
    image: guide.image,
    datePublished: guide.date,
    // dateModified: guide.modified,
    author: {
      "@type": "Person",
      name: guide.author || "VakilTech Legal Team",
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
