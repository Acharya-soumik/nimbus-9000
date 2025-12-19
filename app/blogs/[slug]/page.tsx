import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getRelatedPosts,
  getPopularPosts,
  mockCategories,
} from "@/components/blogs";
import { BlogPostClient } from "./client";

/* =============================================================================
 * METADATA
 * ============================================================================= */

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | VakalatnaamaToday",
    };
  }

  // Strip HTML from excerpt for meta description
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();

  return {
    title: `${post.title.rendered} | VakalatnaamaToday Blog`,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [post._embedded["wp:featuredmedia"][0].source_url]
        : [],
    },
  };
}

/* =============================================================================
 * PAGE COMPONENT
 * ============================================================================= */

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const popularPosts = getPopularPosts(5);

  return (
    <BlogPostClient
      post={post}
      relatedPosts={relatedPosts}
      popularPosts={popularPosts}
      categories={mockCategories}
    />
  );
}
