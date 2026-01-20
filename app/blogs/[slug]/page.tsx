import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getRelatedPosts,
  getPopularPosts,
} from "@/lib/blog";
import { mockCategories } from "@/components/blogs/blog-data";
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

  // Strip Markdown/HTML from excerpt for meta description if needed
  // Since excerpt is likely plain text in frontmatter, we can use it directly
  const description = post.excerpt || "";

  return {
    title: `${post.title} | VakalatnaamaToday Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
      // modifiedTime: post.modified, // We don't have modified time in frontmatter yet
      images: post.image
        ? [post.image]
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
