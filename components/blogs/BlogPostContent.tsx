"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BlogPostContentProps {
  /** HTML content string from WordPress */
  content: string;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * PROSE STYLES
 * ============================================================================= */

const proseStyles = `
  /* Base Typography */
  .blog-prose {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-text-body, #2C2C2C);
  }

  /* Headings */
  .blog-prose h2 {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: var(--color-text-heading, #1A1A1A);
    scroll-margin-top: 100px;
  }

  .blog-prose h3 {
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.4;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: var(--color-text-heading, #1A1A1A);
    scroll-margin-top: 100px;
  }

  .blog-prose h4 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--color-text-heading, #1A1A1A);
  }

  /* Paragraphs */
  .blog-prose p {
    margin-bottom: 1.25rem;
  }

  .blog-prose p:last-child {
    margin-bottom: 0;
  }

  /* Links */
  .blog-prose a {
    color: var(--color-primary, #EF5A6F);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .blog-prose a:hover {
    text-decoration: underline;
  }

  /* Lists */
  .blog-prose ul,
  .blog-prose ol {
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }

  .blog-prose ul {
    list-style-type: disc;
  }

  .blog-prose ol {
    list-style-type: decimal;
  }

  .blog-prose li {
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }

  .blog-prose li::marker {
    color: var(--color-primary, #EF5A6F);
  }

  .blog-prose ul ul,
  .blog-prose ol ol,
  .blog-prose ul ol,
  .blog-prose ol ul {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  /* Blockquotes */
  .blog-prose blockquote {
    margin: 1.5rem 0;
    padding: 1.25rem 1.5rem;
    border-left: 4px solid var(--color-primary, #EF5A6F);
    background-color: var(--color-bg-gray-light, #F9FAFB);
    border-radius: 0 0.75rem 0.75rem 0;
    font-style: italic;
    color: var(--color-text-medium, #4B5563);
  }

  .blog-prose blockquote p {
    margin-bottom: 0.5rem;
  }

  .blog-prose blockquote p:last-child {
    margin-bottom: 0;
  }

  .blog-prose blockquote cite {
    display: block;
    margin-top: 0.75rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    color: var(--color-text-heading, #1A1A1A);
  }

  /* Strong & Emphasis */
  .blog-prose strong {
    font-weight: 600;
    color: var(--color-text-heading, #1A1A1A);
  }

  .blog-prose em {
    font-style: italic;
  }

  /* Images */
  .blog-prose img {
    width: 100%;
    height: auto;
    margin: 1.5rem 0;
    border-radius: 1rem;
  }

  .blog-prose figure {
    margin: 1.5rem 0;
  }

  .blog-prose figcaption {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    text-align: center;
    color: var(--color-text-muted, #9CA3AF);
  }

  /* Code */
  .blog-prose code {
    font-family: var(--font-mono, 'B612 Mono', monospace);
    font-size: 0.875em;
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
    background-color: var(--color-bg-gray-light, #F9FAFB);
    color: var(--color-primary, #EF5A6F);
  }

  .blog-prose pre {
    margin: 1.5rem 0;
    padding: 1.25rem;
    border-radius: 0.75rem;
    background-color: #1F2937;
    overflow-x: auto;
  }

  .blog-prose pre code {
    padding: 0;
    background-color: transparent;
    color: #E5E7EB;
    font-size: 0.875rem;
    line-height: 1.7;
  }

  /* Tables */
  .blog-prose table {
    width: 100%;
    margin: 1.5rem 0;
    border-collapse: collapse;
    font-size: 0.875rem;
  }

  .blog-prose th,
  .blog-prose td {
    padding: 0.75rem 1rem;
    border: 1px solid var(--color-border, #E5E7EB);
    text-align: left;
  }

  .blog-prose th {
    font-weight: 600;
    background-color: var(--color-bg-gray-light, #F9FAFB);
    color: var(--color-text-heading, #1A1A1A);
  }

  .blog-prose tr:nth-child(even) {
    background-color: var(--color-bg-gray-light, #F9FAFB);
  }

  /* Horizontal Rule */
  .blog-prose hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid var(--color-border, #E5E7EB);
  }

  /* Responsive adjustments */
  @media (min-width: 768px) {
    .blog-prose {
      font-size: 1.0625rem;
    }

    .blog-prose h2 {
      font-size: 2rem;
    }

    .blog-prose h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .blog-prose {
      font-size: 1.125rem;
    }

    .blog-prose h2 {
      font-size: 2.25rem;
    }

    .blog-prose h3 {
      font-size: 1.625rem;
    }
  }

  /* Table responsiveness */
  .blog-prose .table-wrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/* =============================================================================
 * CONTENT COMPONENT
 * ============================================================================= */

/**
 * BlogPostContent Component
 * Renders WordPress HTML content with proper styling
 */
export function BlogPostContent({ content, className }: BlogPostContentProps) {
  // Prose styles are handled by Tailwind typography plugin (prose class)
  // We can customize specific elements via components prop in ReactMarkdown

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: proseStyles }} />
      <article className={cn("blog-prose", className)}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}
          components={{
            // Custom renderers if needed
            img: ({ node, ...props }) => (
              <span className="block my-8">
                <img
                  {...props}
                  className="rounded-xl shadow-lg w-full"
                  loading="lazy"
                />
              </span>
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-8 rounded-lg border border-border">
                <table {...props} className="w-full text-sm text-left" />
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
  );
}










