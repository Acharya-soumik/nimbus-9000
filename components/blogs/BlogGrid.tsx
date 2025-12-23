"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { BlogPost } from "./blog-data";
import { BlogCard } from "./BlogCard";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BlogGridProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
  /** Grid variant */
  variant?: "grid" | "masonry" | "list";
  /** Number of columns (for grid variant) */
  columns?: 1 | 2 | 3 | 4;
  /** Gap between cards */
  gap?: "sm" | "md" | "lg";
  /** Show pagination controls */
  showPagination?: boolean;
  /** Current page number (1-indexed) */
  currentPage?: number;
  /** Total number of pages */
  totalPages?: number;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Loading state */
  loading?: boolean;
  /** Number of skeleton items to show when loading */
  skeletonCount?: number;
  /** Message to show when no posts */
  emptyStateMessage?: string;
  /** Card variant to use */
  cardVariant?: "default" | "featured" | "horizontal" | "compact";
  /** Callback when category is clicked */
  onCategoryClick?: (categorySlug: string) => void;
  /** Base path for links (e.g., "/blogs" or "/guides") */
  basePath?: string;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * GAP CLASSES
 * ============================================================================= */

const gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

/* =============================================================================
 * SKELETON CARD COMPONENT
 * ============================================================================= */

function SkeletonCard({ variant = "default" }: { variant?: "default" | "featured" | "horizontal" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="flex items-start gap-3 rounded-xl p-2">
        <div className="h-16 w-20 shrink-0 animate-pulse rounded-lg bg-border lg:h-20 lg:w-24" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-border" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-border" />
          <div className="h-3 w-1/4 animate-pulse rounded bg-border" />
        </div>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card sm:flex-row">
        <div className="aspect-video w-full shrink-0 animate-pulse bg-border sm:w-2/5 sm:aspect-auto sm:min-h-[180px]" />
        <div className="flex-1 p-4 lg:p-5">
          <div className="h-4 w-20 animate-pulse rounded-full bg-border" />
          <div className="mt-3 h-5 w-full animate-pulse rounded bg-border" />
          <div className="mt-2 h-5 w-3/4 animate-pulse rounded bg-border" />
          <div className="mt-3 space-y-1.5">
            <div className="h-3 w-full animate-pulse rounded bg-border" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-border" />
          </div>
          <div className="mt-4 flex gap-3">
            <div className="h-3 w-16 animate-pulse rounded bg-border" />
            <div className="h-3 w-12 animate-pulse rounded bg-border" />
          </div>
        </div>
      </div>
    );
  }

  // Default skeleton
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-card">
      <div className="aspect-video w-full animate-pulse bg-border" />
      <div className="p-5 lg:p-6">
        <div className="h-5 w-24 animate-pulse rounded-full bg-border" />
        <div className="mt-3 h-6 w-full animate-pulse rounded bg-border" />
        <div className="mt-2 h-6 w-3/4 animate-pulse rounded bg-border" />
        <div className="mt-3 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-border" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-border" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-border" />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-border" />
            <div className="h-4 w-24 animate-pulse rounded bg-border" />
          </div>
          <div className="h-4 w-16 animate-pulse rounded bg-border" />
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
 * EMPTY STATE COMPONENT
 * ============================================================================= */

function EmptyState({ message }: { message: string }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
      {/* Empty State Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background-gray-light">
        <svg
          className="h-10 w-10 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-text-heading">No articles found</h3>
      <p className="mt-2 max-w-sm text-sm text-text-muted">{message}</p>
    </div>
  );
}

/* =============================================================================
 * PAGINATION COMPONENT
 * ============================================================================= */

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "ellipsis")[] = [];
  
  // Generate page numbers with ellipsis
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    
    if (currentPage > 3) {
      pages.push("ellipsis");
    }
    
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }
    
    pages.push(totalPages);
  }

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
          currentPage === 1
            ? "cursor-not-allowed text-text-muted"
            : "text-text-body hover:bg-background-gray-light"
        )}
        aria-label="Previous page"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${index}`}
            className="flex h-10 w-10 items-center justify-center text-text-muted"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors",
              currentPage === page
                ? "bg-primary text-white"
                : "text-text-body hover:bg-background-gray-light"
            )}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
          currentPage === totalPages
            ? "cursor-not-allowed text-text-muted"
            : "text-text-body hover:bg-background-gray-light"
        )}
        aria-label="Next page"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * BlogGrid Component
 * Displays a grid of blog cards with pagination and loading states
 */
export function BlogGrid({
  posts,
  variant = "grid",
  columns = 3,
  gap = "md",
  showPagination = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  loading = false,
  skeletonCount = 6,
  emptyStateMessage = "No articles match your current filter. Try selecting a different category.",
  cardVariant = "default",
  onCategoryClick,
  basePath = "/blogs",
  className,
}: BlogGridProps) {
  // Grid column classes based on variant and columns prop
  const gridClasses = React.useMemo(() => {
    if (variant === "list") {
      return "flex flex-col";
    }

    const columnClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    };

    return cn("grid", columnClasses[columns]);
  }, [variant, columns]);

  // Determine card variant for list view
  const effectiveCardVariant = variant === "list" ? "horizontal" : cardVariant;

  return (
    <div className={cn("space-y-8", className)}>
      {/* Grid */}
      <div className={cn(gridClasses, gapClasses[gap])}>
        {loading ? (
          // Skeleton Loading State
          Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} variant={effectiveCardVariant} />
          ))
        ) : posts.length === 0 ? (
          // Empty State
          <EmptyState message={emptyStateMessage} />
        ) : (
          // Blog Cards
          posts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              variant={effectiveCardVariant}
              basePath={basePath}
              onCategoryClick={onCategoryClick}
              className={cn(
                // Staggered animation
                "animate-in fade-in-0 slide-in-from-bottom-4",
                { "animation-delay-100": index % 3 === 1 },
                { "animation-delay-200": index % 3 === 2 }
              )}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {showPagination && !loading && posts.length > 0 && totalPages > 1 && onPageChange && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

export default BlogGrid;

