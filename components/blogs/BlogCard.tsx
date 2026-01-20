"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  BlogPost,
  formatPostDate,
  calculateReadingTime,
} from "@/components/blogs"; // Using updated imports

/* =============================================================================
 * ICONS
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

/* =============================================================================
 * CONSTANTS
 * ============================================================================= */

const aspectRatioClasses: Record<string, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "video": "aspect-video",
};

/* =============================================================================
 * DEFAULT VARIANT
 * ============================================================================= */

function DefaultCard({
  post,
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  imageAspectRatio = "16:9",
  basePath = "/blogs",
  onCategoryClick,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Featured Image */}
      {post.image && (
        <Link href={`${basePath}/${post.slug}`} className="block overflow-hidden">
          <div className={cn(aspectRatioClasses[imageAspectRatio], "overflow-hidden")}>
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      <div className="p-5 lg:p-6">
        {/* Category Badge */}
        {showCategory && post.category && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick?.(post.category || "");
            }}
            className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {post.category}
          </button>
        )}

        {/* Title */}
        <h3 className="mt-3 text-lg font-bold text-text-heading lg:text-xl">
          <Link
            href={`${basePath}/${post.slug}`}
            className="line-clamp-2 transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="mt-2 text-sm text-text-medium line-clamp-3 lg:text-base">
            {post.excerpt}
          </p>
        )}

        {/* Footer: Author & Meta */}
        <div className="mt-4 flex items-center justify-between">
          {showAuthor && post.author && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-muted">{post.author}</span>
            </div>
          )}

          {showReadTime && post.readingTime && (
            <div className="flex items-center gap-1 text-sm text-text-muted">
              <ClockIcon className="h-3.5 w-3.5" />
              <span>{post.readingTime} min</span>
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
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  basePath = "/blogs",
  onCategoryClick,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {/* Featured Image with Gradient Overlay */}
      <Link href={`${basePath}/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-video">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
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
              {showCategory && post.category && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onCategoryClick?.(post.category || "");
                  }}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  {post.category}
                </button>
              )}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-xl font-bold leading-tight lg:text-2xl xl:text-3xl">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="mt-2 text-sm text-white/80 line-clamp-2 lg:text-base">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/70">
              {showAuthor && post.author && (
                <div className="flex items-center gap-2">
                  <span>{post.author}</span>
                </div>
              )}
              <span>{formatPostDate(post.date)}</span>
              {showReadTime && post.readingTime && (
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3.5 w-3.5" />
                  <span>{post.readingTime} min read</span>
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
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  basePath = "/blogs",
  onCategoryClick,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 sm:flex-row",
        "hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Featured Image */}
      {post.image && (
        <Link
          href={`${basePath}/${post.slug}`}
          className="block w-full shrink-0 overflow-hidden sm:w-2/5"
        >
          <div className="aspect-video h-full overflow-hidden sm:aspect-auto sm:min-h-[180px]">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-4 lg:p-5">
        {/* Category Badge */}
        {showCategory && post.category && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onCategoryClick?.(post.category || "");
            }}
            className="inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {post.category}
          </button>
        )}

        {/* Title */}
        <h3 className="mt-2 text-base font-bold text-text-heading lg:text-lg">
          <Link
            href={`${basePath}/${post.slug}`}
            className="line-clamp-2 transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="mt-1.5 text-sm text-text-medium line-clamp-2">
            {post.excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-text-muted">
          {showAuthor && post.author && (
            <span>{post.author}</span>
          )}
          {showReadTime && post.readingTime && (
            <div className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              <span>{post.readingTime} min</span>
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
  showReadTime = true,
  basePath = "/blogs",
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-background-gray-light",
        className
      )}
    >
      {/* Thumbnail */}
      {post.image && (
        <Link
          href={`${basePath}/${post.slug}`}
          className="block shrink-0 overflow-hidden rounded-lg"
        >
          <div className="h-16 w-20 overflow-hidden lg:h-20 lg:w-24">
            <img
              src={post.image}
              alt={post.title}
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
            href={`${basePath}/${post.slug}`}
            className="line-clamp-2 transition-colors group-hover:text-primary"
          >
            {post.title}
          </Link>
        </h4>

        {showReadTime && post.readingTime && (
          <div className="mt-1 flex items-center gap-1 text-xs text-text-muted">
            <ClockIcon className="h-3 w-3" />
            <span>{post.readingTime} min read</span>
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
export interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "horizontal" | "featured" | "compact";
  showImage?: boolean;
  showCategory?: boolean;
  showDate?: boolean;
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showReadTime?: boolean;
  imageAspectRatio?: string;
  className?: string;
  onCategoryClick?: (category: string) => void;
  basePath?: string;
}

export function BlogCard({
  post,
  variant = "default",
  showExcerpt = true,
  showCategory = true,
  showAuthor = true,
  showReadTime = true,
  imageAspectRatio = "16:9",
  basePath = "/blogs",
  onCategoryClick,
  className,
}: BlogCardProps) {
  const commonProps = {
    post,
    showExcerpt,
    showCategory,
    showAuthor,
    showReadTime,
    imageAspectRatio,
    basePath,
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











