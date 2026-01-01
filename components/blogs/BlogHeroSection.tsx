"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { BlogPost, getPostMeta, cleanExcerpt } from "./blog-data";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BlogHeroSectionProps {
  /** Badge displayed above headline */
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  /** Main headline text */
  headline: string;
  /** Words to highlight with primary color */
  highlightedWords?: string[];
  /** Subtitle/description text */
  subtitle: string;
  /** Featured/pinned blog post to display */
  featuredPost?: BlogPost;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Callback when search is submitted */
  onSearch?: (query: string) => void;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
 * ANIMATED HEADLINE COMPONENT
 * ============================================================================= */

function AnimatedHeadline({
  text,
  highlightedWords = [],
}: {
  text: string;
  highlightedWords?: string[];
}) {
  const words = text.split(" ");

  return (
    <motion.h1 className="text-3xl font-bold leading-tight text-text-heading sm:text-4xl md:text-5xl lg:text-6xl">
      {words.map((word, index) => {
        const isHighlighted = highlightedWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase().replace(/[^a-zA-Z]/g, "")
        );

        return (
          <motion.span
            key={`${word}-${index}`}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className={cn(
              "inline-block",
              isHighlighted && "text-primary"
            )}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

/* =============================================================================
 * SEARCH INPUT COMPONENT
 * ============================================================================= */

function SearchInput({
  placeholder,
  onSearch,
}: {
  placeholder: string;
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="relative w-full max-w-md"
    >
      <div
        className={cn(
          "flex items-center overflow-hidden rounded-2xl bg-white transition-all duration-200",
          "border-2",
          isFocused ? "border-primary shadow-lg" : "border-transparent shadow-md"
        )}
      >
        <div className="pl-4 text-text-muted">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-3 py-4 text-text-body placeholder:text-text-muted focus:outline-none"
        />
        <button
          type="submit"
          className={cn(
            "mr-2 rounded-xl px-5 py-2.5 font-medium transition-all",
            query.trim()
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-background-gray-light text-text-muted"
          )}
        >
          Search
        </button>
      </div>
    </motion.form>
  );
}

/* =============================================================================
 * FEATURED POST CARD COMPONENT
 * ============================================================================= */

function FeaturedPostCard({ post }: { post: BlogPost }) {
  const meta = getPostMeta(post);

  return (
    <motion.article
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl lg:rounded-3xl"
    >
      <Link href={`/blogs/${post.slug}`} className="block">
        {/* Image */}
        {meta.featuredImageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={meta.featuredImageUrl}
              alt={post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || ""}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-4 lg:p-5">
          {/* Category & Reading Time */}
          <div className="flex items-center justify-between">
            {meta.categoryNames?.[0] && (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {meta.categoryNames[0]}
              </span>
            )}
            <div className="flex items-center gap-1 text-xs text-text-muted">
              <ClockIcon className="h-3.5 w-3.5" />
              <span>{meta.readingTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-3 text-base font-bold text-text-heading line-clamp-2 group-hover:text-primary lg:text-lg">
            {post.title.rendered}
          </h3>

          {/* Excerpt */}
          <p className="mt-2 text-sm text-text-medium line-clamp-2">
            {cleanExcerpt(post.excerpt.rendered, 100)}
          </p>

          {/* Read More */}
          <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
            Read Article
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * BlogHeroSection Component
 * Hero section for the blog listing page with animated headline and featured post
 */
export function BlogHeroSection({
  badge,
  headline,
  highlightedWords = [],
  subtitle,
  featuredPost,
  searchPlaceholder = "Search articles...",
  onSearch,
  className,
}: BlogHeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-hero",
        "px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
        className
      )}
    >
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-warning-yellow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
              >
                {badge.icon && (
                  <span className="text-primary">{badge.icon}</span>
                )}
                <span className="text-sm font-semibold text-text-body">
                  {badge.text}
                </span>
              </motion.div>
            )}

            {/* Headline */}
            <AnimatedHeadline
              text={headline}
              highlightedWords={highlightedWords}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 max-w-xl text-base text-text-medium sm:text-lg lg:mt-6 lg:text-xl"
            >
              {subtitle}
            </motion.p>

            {/* Search Input */}
            <div className="mt-6 lg:mt-8">
              <SearchInput
                placeholder={searchPlaceholder}
                onSearch={onSearch}
              />
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <svg
                    className="h-5 w-5 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">50+</p>
                  <p className="text-xs text-text-muted">Expert Articles</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-info/10">
                  <svg
                    className="h-5 w-5 text-info"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">5</p>
                  <p className="text-xs text-text-muted">Categories</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/10">
                  <svg
                    className="h-5 w-5 text-warning"
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
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">Weekly</p>
                  <p className="text-xs text-text-muted">New Content</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Featured Post */}
          {featuredPost && (
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-none">
                <FeaturedPostCard post={featuredPost} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogHeroSection;











