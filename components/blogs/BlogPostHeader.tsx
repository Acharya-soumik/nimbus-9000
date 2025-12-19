"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { BlogPost, getPostMeta, formatPostDate } from "./blog-data";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BlogPostHeaderProps {
  /** Blog post data */
  post: BlogPost;
  /** Show breadcrumb navigation */
  showBreadcrumb?: boolean;
  /** Show category badge */
  showCategory?: boolean;
  /** Show author information */
  showAuthor?: boolean;
  /** Show publication date */
  showDate?: boolean;
  /** Show reading time */
  showReadTime?: boolean;
  /** Show share buttons placeholder */
  showShareButtons?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

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

function CalendarIcon({ className }: { className?: string }) {
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

/* =============================================================================
 * BREADCRUMB COMPONENT
 * ============================================================================= */

function Breadcrumb({
  category,
  postTitle,
}: {
  category?: string;
  postTitle: string;
}) {
  // Truncate title for breadcrumb
  const truncatedTitle =
    postTitle.length > 40 ? postTitle.substring(0, 40) + "..." : postTitle;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap items-center gap-1 text-sm text-text-muted"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="transition-colors hover:text-primary"
      >
        Home
      </Link>
      <ChevronRightIcon className="h-3 w-3 shrink-0" />
      <Link
        href="/blogs"
        className="transition-colors hover:text-primary"
      >
        Blog
      </Link>
      {category && (
        <>
          <ChevronRightIcon className="h-3 w-3 shrink-0" />
          <Link
            href={`/blogs?category=${category.toLowerCase().replace(/\s+/g, "-")}`}
            className="transition-colors hover:text-primary"
          >
            {category}
          </Link>
        </>
      )}
      <ChevronRightIcon className="h-3 w-3 shrink-0" />
      <span className="text-text-body line-clamp-1">{truncatedTitle}</span>
    </motion.nav>
  );
}

/* =============================================================================
 * ANIMATED TITLE COMPONENT
 * ============================================================================= */

function AnimatedTitle({ title }: { title: string }) {
  const words = title.split(" ");

  return (
    <h1 className="text-2xl font-bold leading-tight text-text-heading sm:text-3xl md:text-4xl lg:text-5xl">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2 + index * 0.05,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </h1>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * BlogPostHeader Component
 * Header section for individual blog post pages
 */
export function BlogPostHeader({
  post,
  showBreadcrumb = true,
  showCategory = true,
  showAuthor = true,
  showDate = true,
  showReadTime = true,
  showShareButtons = false,
  className,
}: BlogPostHeaderProps) {
  const meta = getPostMeta(post);

  return (
    <header className={cn("", className)}>
      {/* Breadcrumb */}
      {showBreadcrumb && (
        <div className="mb-6">
          <Breadcrumb
            category={meta.categoryNames?.[0]}
            postTitle={post.title.rendered}
          />
        </div>
      )}

      {/* Category Badge */}
      {showCategory && meta.categoryNames?.[0] && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link
            href={`/blogs?category=${meta.categorySlug}`}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            {meta.categoryNames[0]}
          </Link>
        </motion.div>
      )}

      {/* Title */}
      <div className="mt-4">
        <AnimatedTitle title={post.title.rendered} />
      </div>

      {/* Meta Information */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6"
      >
        {/* Author */}
        {showAuthor && meta.authorName && (
          <div className="flex items-center gap-3">
            {meta.authorAvatar && (
              <img
                src={meta.authorAvatar}
                alt={meta.authorName}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                loading="lazy"
              />
            )}
            <div>
              <p className="text-xs text-text-muted">Written by</p>
              <p className="font-semibold text-text-heading">{meta.authorName}</p>
            </div>
          </div>
        )}

        {/* Divider */}
        {showAuthor && (showDate || showReadTime) && (
          <div className="hidden h-8 w-px bg-border sm:block" />
        )}

        {/* Date */}
        {showDate && (
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <CalendarIcon className="h-4 w-4" />
            <span>{formatPostDate(post.date)}</span>
          </div>
        )}

        {/* Reading Time */}
        {showReadTime && (
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <ClockIcon className="h-4 w-4" />
            <span>{meta.readingTime} min read</span>
          </div>
        )}
      </motion.div>

      {/* Featured Image */}
      {meta.featuredImageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 overflow-hidden rounded-2xl lg:rounded-3xl"
        >
          <img
            src={meta.featuredImageUrl}
            alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered}
            className="aspect-video w-full object-cover"
          />
        </motion.div>
      )}
    </header>
  );
}

export default BlogPostHeader;






