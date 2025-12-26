"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { BlogPost } from "./blog-data";
import { BlogCard } from "./BlogCard";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface RelatedPostsSectionProps {
  /** Array of related posts */
  posts: BlogPost[];
  /** Section title */
  title?: string;
  /** Display variant */
  variant?: "grid" | "carousel";
  /** Maximum number of posts to show */
  maxPosts?: number;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* =============================================================================
 * GRID VARIANT
 * ============================================================================= */

function GridVariant({
  posts,
  maxPosts,
}: {
  posts: BlogPost[];
  maxPosts: number;
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, maxPosts).map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <BlogCard post={post} variant="default" />
        </motion.div>
      ))}
    </div>
  );
}

/* =============================================================================
 * CAROUSEL VARIANT
 * ============================================================================= */

function CarouselVariant({
  posts,
  maxPosts,
}: {
  posts: BlogPost[];
  maxPosts: number;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollButtons = React.useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  React.useEffect(() => {
    checkScrollButtons();
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", checkScrollButtons);
      return () => scrollEl.removeEventListener("scroll", checkScrollButtons);
    }
  }, [checkScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const displayPosts = posts.slice(0, maxPosts);

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <div className="hidden lg:block">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className={cn(
              "absolute -left-4 top-1/2 z-10 -translate-y-1/2",
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white text-text-body shadow-md transition-all",
              "hover:bg-background-gray-light hover:shadow-lg"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className={cn(
              "absolute -right-4 top-1/2 z-10 -translate-y-1/2",
              "flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white text-text-body shadow-md transition-all",
              "hover:bg-background-gray-light hover:shadow-lg"
            )}
            aria-label="Scroll right"
          >
            <ChevronRightIcon />
          </button>
        )}
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-6 overflow-x-auto pb-4 scrollbar-hide",
          "-mx-4 px-4 sm:mx-0 sm:px-0",
          "snap-x snap-mandatory"
        )}
      >
        {displayPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="w-[300px] shrink-0 snap-start sm:w-[320px]"
          >
            <BlogCard post={post} variant="default" />
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicators (Mobile) */}
      <div className="mt-4 flex justify-center gap-1.5 lg:hidden">
        {displayPosts.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === 0 ? "w-4 bg-primary" : "w-1.5 bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * RelatedPostsSection Component
 * Display related posts at the end of blog posts
 */
export function RelatedPostsSection({
  posts,
  title = "Related Articles",
  variant = "grid",
  maxPosts = 3,
  className,
}: RelatedPostsSectionProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={cn("py-12 lg:py-16", className)}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-center justify-between"
      >
        <h2 className="text-2xl font-bold text-text-heading lg:text-3xl">
          {title}
        </h2>
        
        {/* View All Link (optional) */}
        {posts.length > maxPosts && (
          <a
            href="/blogs"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all articles →
          </a>
        )}
      </motion.div>

      {/* Content */}
      {variant === "carousel" ? (
        <CarouselVariant posts={posts} maxPosts={maxPosts} />
      ) : (
        <GridVariant posts={posts} maxPosts={maxPosts} />
      )}
    </section>
  );
}

export default RelatedPostsSection;










