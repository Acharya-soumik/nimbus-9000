"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { BlogPost, BlogCategory } from "./blog-data";
import { BlogCard } from "./BlogCard";
import { CategoryFilter } from "./CategoryFilter";
import { ServiceAdCard, ServiceAdCardProps } from "./ServiceAdCard";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BlogSidebarProps {
  /** Categories for filter */
  categories?: BlogCategory[];
  /** Selected category slug */
  selectedCategory?: string | null;
  /** Callback when category changes */
  onCategoryChange?: (categorySlug: string | null) => void;
  /** Popular posts to display */
  popularPosts?: BlogPost[];
  /** Recent posts to display */
  recentPosts?: BlogPost[];
  /** Show newsletter signup form */
  showNewsletterSignup?: boolean;
  /** Show service advertisement */
  showServiceAd?: boolean;
  /** Service ad data */
  serviceAdData?: ServiceAdCardProps;
  /** Make sidebar sticky */
  sticky?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Search callback */
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

/* =============================================================================
 * SEARCH BOX COMPONENT
 * ============================================================================= */

function SearchBox({
  placeholder = "Search articles...",
  onSearch,
}: {
  placeholder?: string;
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-xl border border-border bg-background-gray-light",
          "py-3 pl-10 pr-4 text-sm text-text-body placeholder:text-text-muted",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          "transition-colors"
        )}
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
    </form>
  );
}

/* =============================================================================
 * NEWSLETTER SIGNUP COMPONENT
 * ============================================================================= */

function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In production, this would call an API
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-success-light p-4 text-center">
        <svg
          className="mx-auto h-10 w-10 text-success"
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
        <p className="mt-2 font-semibold text-success-darker">
          Thanks for subscribing!
        </p>
        <p className="mt-1 text-sm text-success-dark">
          Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-gradient-to-br from-background-peach to-background-pink-light p-5">
      <h4 className="font-bold text-text-heading">Stay Updated</h4>
      <p className="mt-1 text-sm text-text-medium">
        Get the latest legal insights delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={cn(
            "w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm",
            "placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
          )}
        />
        <button
          type="submit"
          className={cn(
            "mt-3 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white",
            "transition-colors hover:bg-primary/90"
          )}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

/* =============================================================================
 * SECTION TITLE COMPONENT
 * ============================================================================= */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-text-muted">
      {children}
    </h3>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * BlogSidebar Component
 * Sidebar with search, categories, popular posts, newsletter, and service ads
 */
export function BlogSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  popularPosts,
  recentPosts,
  showNewsletterSignup = true,
  showServiceAd = true,
  serviceAdData,
  sticky = true,
  searchPlaceholder,
  onSearch,
  className,
}: BlogSidebarProps) {
  // Default service ad data
  const defaultServiceAd: ServiceAdCardProps = {
    serviceName: "Legal Notice Service",
    serviceDescription: "Get your legal notice drafted by expert advocates and delivered via registered post.",
    price: { current: 1499, original: 3999 },
    badge: "POPULAR SERVICE",
    ctaText: "Get Started",
    ctaLink: "/legal-notice",
    variant: "sidebar",
  };

  return (
    <aside
      className={cn(
        "w-full space-y-6",
        sticky && "lg:sticky lg:top-24",
        className
      )}
    >
      {/* Search */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <SectionTitle>Search</SectionTitle>
        <SearchBox placeholder={searchPlaceholder} onSearch={onSearch} />
      </div>

      {/* Categories */}
      {categories && categories.length > 0 && onCategoryChange && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <SectionTitle>Categories</SectionTitle>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            variant="sidebar"
            showCounts
          />
        </div>
      )}

      {/* Popular Posts */}
      {popularPosts && popularPosts.length > 0 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <SectionTitle>Popular Articles</SectionTitle>
          <div className="space-y-1">
            {popularPosts.slice(0, 5).map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      {recentPosts && recentPosts.length > 0 && (
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <SectionTitle>Recent Articles</SectionTitle>
          <div className="space-y-1">
            {recentPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      {showNewsletterSignup && (
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <NewsletterSignup />
        </div>
      )}

      {/* Service Ad */}
      {showServiceAd && (
        <ServiceAdCard {...(serviceAdData || defaultServiceAd)} />
      )}
    </aside>
  );
}

export default BlogSidebar;





