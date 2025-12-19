"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BlogPost,
  getPostMeta,
  formatPostDate,
  cleanExcerpt,
} from "./blog-data";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BlogCardProps {
  /** Blog post data */
  post: BlogPost;
  /** Card variant */
  variant?: "default" | "featured" | "horizontal" | "compact";
  /** Show excerpt text */
  showExcerpt?: boolean;
  /** Show category badge */
  showCategory?: boolean;
  /** Show author info */
  showAuthor?: boolean;
  /** Show reading time */
  showReadTime?: boolean;
  /** Image aspect ratio */
  imageAspectRatio?: "16:9" | "4:3" | "1:1";
  /** Callback when category is clicked */
  onCategoryClick?: (categorySlug: string) => void;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

/* =============================================================================
 * ASPECT RATIO CLASSES
 * ============================================================================= */

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

/* =============================================================================
 * DEFAULT VARIANT
 * ============================================================================= */

function DefaultCard({
  post,
  meta,
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  imageAspectRatio = "16:9",
  onCategoryClick,
  className,
}: BlogCardProps & { meta: ReturnType<typeof getPostMeta> }) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Featured Image */}
      {meta.featuredImageUrl && (
        <Link href={`/blogs/${post.slug}`} className="block overflow-hidden">
          <div className={cn(aspectRatioClasses[imageAspectRatio], "overflow-hidden")}>
            <img
              src={meta.featuredImageUrl}
              alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      <div className="p-5 lg:p-6">
        {/* Category Badge */}
        {showCategory && meta.categoryNames?.[0] && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick?.(meta.categorySlug || "");
            }}
            className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {meta.categoryNames[0]}
          </button>
        )}

        {/* Title */}
        <h3 className="mt-3 text-lg font-bold text-text-heading lg:text-xl">
          <Link
            href={`/blogs/${post.slug}`}
            className="line-clamp-2 transition-colors hover:text-primary"
          >
            {post.title.rendered}
          </Link>
        </h3>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="mt-2 text-sm text-text-medium line-clamp-3 lg:text-base">
            {cleanExcerpt(post.excerpt.rendered, 120)}
          </p>
        )}

        {/* Footer: Author & Meta */}
        <div className="mt-4 flex items-center justify-between">
          {showAuthor && meta.authorName && (
            <div className="flex items-center gap-2">
              {meta.authorAvatar && (
                <img
                  src={meta.authorAvatar}
                  alt={meta.authorName}
                  className="h-8 w-8 rounded-full object-cover"
                  loading="lazy"
                />
              )}
              <span className="text-sm text-text-muted">{meta.authorName}</span>
            </div>
          )}

          {showReadTime && (
            <div className="flex items-center gap-1 text-sm text-text-muted">
              <ClockIcon className="h-3.5 w-3.5" />
              <span>{meta.readingTime} min</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* =============================================================================
 * FEATURED VARIANT
 * ============================================================================= */

function FeaturedCard({
  post,
  meta,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  onCategoryClick,
  className,
}: BlogCardProps & { meta: ReturnType<typeof getPostMeta> }) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {/* Featured Image with Gradient Overlay */}
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-video">
          {meta.featuredImageUrl && (
            <img
              src={meta.featuredImageUrl}
              alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white lg:p-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide">
                Featured
              </span>
              {showCategory && meta.categoryNames?.[0] && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onCategoryClick?.(meta.categorySlug || "");
                  }}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  {meta.categoryNames[0]}
                </button>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-xl font-bold leading-tight lg:text-2xl xl:text-3xl">
              {post.title.rendered}
            </h3>

            {/* Excerpt */}
            <p className="mt-2 text-sm text-white/80 line-clamp-2 lg:text-base">
              {cleanExcerpt(post.excerpt.rendered, 160)}
            </p>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
              {showAuthor && meta.authorName && (
                <div className="flex items-center gap-2">
                  {meta.authorAvatar && (
                    <img
                      src={meta.authorAvatar}
                      alt={meta.authorName}
                      className="h-8 w-8 rounded-full border-2 border-white/30 object-cover"
                      loading="lazy"
                    />
                  )}
                  <span>{meta.authorName}</span>
                </div>
              )}
              <span>{formatPostDate(post.date)}</span>
              {showReadTime && (
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3.5 w-3.5" />
                  <span>{meta.readingTime} min read</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* =============================================================================
 * HORIZONTAL VARIANT
 * ============================================================================= */

function HorizontalCard({
  post,
  meta,
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  onCategoryClick,
  className,
}: BlogCardProps & { meta: ReturnType<typeof getPostMeta> }) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 sm:flex-row",
        "hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Featured Image */}
      {meta.featuredImageUrl && (
        <Link
          href={`/blogs/${post.slug}`}
          className="block w-full shrink-0 overflow-hidden sm:w-2/5"
        >
          <div className="aspect-video h-full overflow-hidden sm:aspect-auto sm:min-h-[180px]">
            <img
              src={meta.featuredImageUrl}
              alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-4 lg:p-5">
        {/* Category Badge */}
        {showCategory && meta.categoryNames?.[0] && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick?.(meta.categorySlug || "");
            }}
            className="inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {meta.categoryNames[0]}
          </button>
        )}

        {/* Title */}
        <h3 className="mt-2 text-base font-bold text-text-heading lg:text-lg">
          <Link
            href={`/blogs/${post.slug}`}
            className="line-clamp-2 transition-colors hover:text-primary"
          >
            {post.title.rendered}
          </Link>
        </h3>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="mt-1.5 text-sm text-text-medium line-clamp-2">
            {cleanExcerpt(post.excerpt.rendered, 100)}
          </p>
        )}

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-text-muted">
          {showAuthor && meta.authorName && (
            <span>{meta.authorName}</span>
          )}
          {showReadTime && (
            <div className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              <span>{meta.readingTime} min</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* =============================================================================
 * COMPACT VARIANT
 * ============================================================================= */

function CompactCard({
  post,
  meta,
  showReadTime = true,
  className,
}: BlogCardProps & { meta: ReturnType<typeof getPostMeta> }) {
  return (
    <article
      className={cn(
        "group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-background-gray-light",
        className
      )}
    >
      {/* Thumbnail */}
      {meta.featuredImageUrl && (
        <Link
          href={`/blogs/${post.slug}`}
          className="block shrink-0 overflow-hidden rounded-lg"
        >
          <div className="h-16 w-20 overflow-hidden lg:h-20 lg:w-24">
            <img
              src={
                post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.thumbnail?.source_url || meta.featuredImageUrl
              }
              alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-text-heading lg:text-base">
          <Link
            href={`/blogs/${post.slug}`}
            className="line-clamp-2 transition-colors group-hover:text-primary"
          >
            {post.title.rendered}
          </Link>
        </h4>

        {showReadTime && (
          <div className="mt-1 flex items-center gap-1 text-xs text-text-muted">
            <ClockIcon className="h-3 w-3" />
            <span>{meta.readingTime} min read</span>
          </div>
        )}
      </div>
    </article>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * BlogCard Component
 * Displays a blog post card with multiple variant styles
 */
export function BlogCard({
  post,
  variant = "default",
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  imageAspectRatio = "16:9",
  onCategoryClick,
  className,
}: BlogCardProps) {
  const meta = getPostMeta(post);

  const commonProps = {
    post,
    meta,
    showExcerpt,
    showCategory,
    showAuthor,
    showReadTime,
    imageAspectRatio,
    onCategoryClick,
    className,
  };

  switch (variant) {
    case "featured":
      return <FeaturedCard {...commonProps} />;
    case "horizontal":
      return <HorizontalCard {...commonProps} />;
    case "compact":
      return <CompactCard {...commonProps} />;
    default:
      return <DefaultCard {...commonProps} />;
  }
}

export default BlogCard;





