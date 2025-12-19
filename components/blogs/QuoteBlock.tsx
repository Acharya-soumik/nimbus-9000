"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface QuoteBlockProps {
  /** The quote text */
  quote: string;
  /** Author name */
  author?: string;
  /** Author title/role */
  authorTitle?: string;
  /** Author image URL */
  authorImage?: string;
  /** Quote variant */
  variant?: "default" | "large" | "testimonial";
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * QUOTE ICON
 * ============================================================================= */

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-8 w-8", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

/* =============================================================================
 * DEFAULT VARIANT
 * ============================================================================= */

function DefaultQuote({
  quote,
  author,
  authorTitle,
  className,
}: QuoteBlockProps) {
  return (
    <blockquote
      className={cn(
        "relative my-6 border-l-4 border-primary py-4 pl-6 lg:my-8",
        className
      )}
    >
      {/* Quote Icon */}
      <QuoteIcon className="absolute -left-1 -top-2 text-primary/20" />

      {/* Quote Text */}
      <p className="relative text-lg italic leading-relaxed text-text-heading lg:text-xl">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      {author && (
        <footer className="mt-4">
          <p className="font-semibold text-text-heading">{author}</p>
          {authorTitle && (
            <p className="text-sm text-text-muted">{authorTitle}</p>
          )}
        </footer>
      )}
    </blockquote>
  );
}

/* =============================================================================
 * LARGE VARIANT
 * ============================================================================= */

function LargeQuote({
  quote,
  author,
  authorTitle,
  className,
}: QuoteBlockProps) {
  return (
    <blockquote
      className={cn(
        "relative my-8 rounded-2xl bg-gradient-to-br from-background-peach to-background-pink-light p-8 lg:my-12 lg:p-10",
        className
      )}
    >
      {/* Quote Icon */}
      <QuoteIcon className="absolute left-6 top-6 h-12 w-12 text-primary/30 lg:h-16 lg:w-16" />

      {/* Quote Text */}
      <p className="relative pt-8 text-xl font-medium italic leading-relaxed text-text-heading lg:pt-10 lg:text-2xl xl:text-3xl">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      {author && (
        <footer className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <div className="text-right">
            <p className="font-semibold text-text-heading">{author}</p>
            {authorTitle && (
              <p className="text-sm text-text-muted">{authorTitle}</p>
            )}
          </div>
        </footer>
      )}
    </blockquote>
  );
}

/* =============================================================================
 * TESTIMONIAL VARIANT
 * ============================================================================= */

function TestimonialQuote({
  quote,
  author,
  authorTitle,
  authorImage,
  className,
}: QuoteBlockProps) {
  return (
    <blockquote
      className={cn(
        "relative my-6 overflow-hidden rounded-2xl bg-white p-6 shadow-md lg:my-8 lg:p-8",
        className
      )}
    >
      {/* Gradient Top Border */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-warning-yellow via-warning to-primary" />

      {/* Quote Icon */}
      <QuoteIcon className="mb-4 h-10 w-10 text-primary/40" />

      {/* Quote Text */}
      <p className="text-base italic leading-relaxed text-text-medium lg:text-lg">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      {author && (
        <footer className="mt-6 flex items-center gap-4">
          {/* Author Image */}
          {authorImage ? (
            <img
              src={authorImage}
              alt={author}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
              {author.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Author Info */}
          <div>
            <p className="font-semibold text-text-heading">{author}</p>
            {authorTitle && (
              <p className="text-sm text-text-muted">{authorTitle}</p>
            )}
          </div>

          {/* Star Rating (decorative) */}
          <div className="ml-auto flex gap-0.5 text-warning-yellow">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </footer>
      )}
    </blockquote>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * QuoteBlock Component
 * Styled blockquote component with multiple variants
 */
export function QuoteBlock({
  quote,
  author,
  authorTitle,
  authorImage,
  variant = "default",
  className,
}: QuoteBlockProps) {
  const commonProps = {
    quote,
    author,
    authorTitle,
    authorImage,
    className,
  };

  switch (variant) {
    case "large":
      return <LargeQuote {...commonProps} />;
    case "testimonial":
      return <TestimonialQuote {...commonProps} />;
    default:
      return <DefaultQuote {...commonProps} />;
  }
}

export default QuoteBlock;





