"use client";

import * as React from "react";
import {
  Guide,
  GuideCategory,
  GuidePostHeader,
  GuidePostContent,
  RelatedGuidesSection,
  TableOfContents,
  ReadingProgressBar,
  ShareButtons,
  ServiceAdCard,
  ServiceAdBanner,
  HighlightBox,
  QuoteBlock,
} from "@/components/guides";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

interface GuidePageClientProps {
  post: Guide;
  relatedPosts: Guide[];
  popularPosts: Guide[];
  categories: GuideCategory[];
}

/* =============================================================================
 * CLIENT COMPONENT
 * Adapted from BlogPostClient - reuses all blog components
 * ============================================================================= */

export function GuidePageClient({ post, relatedPosts }: GuidePageClientProps) {
  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      {/* Dark mode styles wrapper */}
      <style jsx global>{`
        /* Guides Dark Theme Overrides */
        .guides-dark-theme {
          --color-background: #000000;
          --color-surface: #1a1a1a;
          --color-surface-elevated: #2d2d2d;
          --color-border: #404040;
          --color-text-heading: #ffffff;
          --color-text-body: #e5e5e5;
          --color-text-muted: #a3a3a3;
        }
        
        .guides-dark-theme .bg-white {
          background-color: #0a0a0a !important;
        }
        
        .guides-dark-theme .bg-background-gray,
        .guides-dark-theme .bg-background-gray-light {
          background-color: #1a1a1a !important;
        }
        
        .guides-dark-theme .text-text-heading {
          color: #ffffff !important;
        }
        
        .guides-dark-theme .text-text-body {
          color: #e5e5e5 !important;
        }
        
        .guides-dark-theme .text-text-medium {
          color: #d4d4d4 !important;
        }
        
        .guides-dark-theme .text-text-muted {
          color: #a3a3a3 !important;
        }
        
        .guides-dark-theme .shadow-xs {
          box-shadow: 0 1px 2px rgba(255, 255, 255, 0.05) !important;
        }
        
        .guides-dark-theme .border-border {
          border-color: #404040 !important;
        }
        
        .guides-dark-theme .border-t {
          border-color: #2d2d2d !important;
        }
        
        .guides-dark-theme .rounded-2xl,
        .guides-dark-theme .rounded-xl {
          background-color: #1a1a1a;
          border: 1px solid #2d2d2d;
        }
        
        .guides-dark-theme .prose {
          color: #e5e5e5 !important;
        }
        
        .guides-dark-theme .prose h2,
        .guides-dark-theme .prose h3,
        .guides-dark-theme .prose h4 {
          color: #ffffff !important;
        }
        
        .guides-dark-theme .prose p {
          color: #d4d4d4 !important;
        }
        
        .guides-dark-theme .prose strong {
          color: #ffffff !important;
        }
        
        .guides-dark-theme .prose a {
          color: #ef5a6f !important;
        }
        
        .guides-dark-theme .prose ul,
        .guides-dark-theme .prose ol {
          color: #d4d4d4 !important;
        }
        
        .guides-dark-theme .prose blockquote {
          color: #a3a3a3 !important;
          border-left-color: #404040 !important;
        }
        
        .guides-dark-theme .prose code {
          background-color: #1a1a1a !important;
          color: #ef5a6f !important;
        }
        
        /* Quote blocks - AGGRESSIVE dark background overrides */
        .guides-dark-theme blockquote,
        .guides-dark-theme [class*="quote"] {
          background: #1a1a1a !important;
          background-color: #1a1a1a !important;
          background-image: none !important;
          border-left-color: #ef5a6f !important;
          color: #ffffff !important;
        }
        
        /* Override gradient backgrounds */
        .guides-dark-theme blockquote.bg-gradient-to-br,
        .guides-dark-theme [class*="gradient"] {
          background: #1a1a1a !important;
          background-image: none !important;
        }
        
        .guides-dark-theme blockquote p,
        .guides-dark-theme [class*="quote"] p,
        .guides-dark-theme blockquote p.italic {
          color: #ffffff !important;
        }
        
        .guides-dark-theme blockquote cite,
        .guides-dark-theme [class*="quote"] cite {
          color: #a3a3a3 !important;
        }
        
        /* Force all blockquote text colors */
        .guides-dark-theme blockquote *:not(svg) {
          color: #ffffff !important;
        }
        
        /* Highlight boxes */
        .guides-dark-theme [class*="highlight"],
        .guides-dark-theme [class*="alert"],
        .guides-dark-theme [class*="callout"] {
          background-color: #1a1a1a !important;
          border-color: #404040 !important;
        }
        
        .guides-dark-theme [class*="highlight"] p,
        .guides-dark-theme [class*="alert"] p,
        .guides-dark-theme [class*="callout"] p {
          color: #e5e5e5 !important;
        }
        
        /* Lists */
        .guides-dark-theme ul li,
        .guides-dark-theme ol li {
          color: #d4d4d4 !important;
        }
      `}</style>
      
      <main className="min-h-screen bg-black guides-dark-theme">
        {/* Reading Progress Bar */}
        <ReadingProgressBar targetSelector="article" />

        {/* Floating Share Buttons (Desktop) */}
        <ShareButtons
          url={currentUrl}
          title={post.title.rendered}
          variant="floating"
          platforms={["twitter", "facebook", "linkedin", "whatsapp"]}
        />

        {/* Article */}
        <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
          {/* Header */}
          <GuidePostHeader
            post={post}
            showBreadcrumb
            showCategory
            showAuthor
            showDate
            showReadTime
          />

          {/* Table of Contents */}
          <div className="mt-8 lg:hidden">
            <TableOfContents
              content={post.content.rendered}
              maxDepth={3}
              collapsed
              title="Table of Contents"
            />
          </div>

          {/* Main Content Layout */}
          <div className="mt-8 flex gap-8 lg:mt-12">
            {/* Content Column */}
            <div className="min-w-0 flex-1">
              {/* Introduction with Key Takeaway */}
              <HighlightBox type="key-takeaway" title="Key Takeaway">
                <p>
                  This comprehensive guide provides detailed information on legal procedures,
                  rights, and remedies. For specific advice related to your situation,
                  consult with a qualified advocate.
                </p>
              </HighlightBox>

              {/* Main Content */}
              <GuidePostContent content={post.content.rendered} />

              {/* Mid-content Service Ad */}
              <ServiceAdCard
                serviceName="Legal Notice Service"
                serviceDescription="Get your legal notice drafted by expert advocates. Professional, legally sound, and delivered via Speed Post."
                price={{ current: 1499, original: 3999 }}
                badge="POPULAR SERVICE"
                ctaText="Get Started"
                ctaLink="/send-legal-notice"
                variant="inline"
                dataContext="legal-notice"
              />

              {/* Quote Block Example */}
              <QuoteBlock
                quote="Justice delayed is justice denied. Understanding your legal rights is the first step towards swift resolution."
                author="Supreme Court of India"
                variant="large"
              />

              {/* Legal Insight Box */}
              <HighlightBox type="legal-insight">
                <p>
                  <strong>Pro Tip:</strong> Always maintain comprehensive documentation
                  of all legal matters, including correspondence, receipts, and agreements.
                  This documentation can be crucial evidence in legal proceedings.
                </p>
              </HighlightBox>

              {/* Share Buttons (Mobile/Tablet) */}
              <div className="mt-12 border-t border-border pt-8 lg:hidden">
                <h3 className="mb-4 text-sm font-semibold text-text-muted">
                  Share this guide
                </h3>
                <ShareButtons
                  url={currentUrl}
                  title={post.title.rendered}
                  variant="buttons"
                  platforms={[
                    "twitter",
                    "facebook",
                    "linkedin",
                    "whatsapp",
                    "copy",
                  ]}
                />
              </div>

              {/* Author Box */}
              {post._embedded?.author?.[0] && (
                <div className="mt-12 rounded-2xl bg-background-gray-light p-6 lg:p-8">
                  <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                    {post._embedded.author[0].avatar_urls?.["96"] && (
                      <img
                        src={post._embedded.author[0].avatar_urls["96"]}
                        alt={post._embedded.author[0].name}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                        Written by
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-text-heading">
                        {post._embedded.author[0].name}
                      </h3>
                      {post._embedded.author[0].description && (
                        <p className="mt-2 text-sm text-text-medium">
                          {post._embedded.author[0].description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (Desktop) */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <TableOfContents
                  content={post.content.rendered}
                  maxDepth={3}
                  title="Table of Contents"
                />

                {/* Share Buttons */}
                <div className="rounded-xl bg-white p-4 shadow-xs">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Share
                  </h3>
                  <ShareButtons
                    url={currentUrl}
                    title={post.title.rendered}
                    variant="icons"
                    platforms={[
                      "twitter",
                      "facebook",
                      "linkedin",
                      "whatsapp",
                      "copy",
                    ]}
                  />
                </div>

                {/* Service Ad */}
                <ServiceAdCard
                  serviceName="Legal Consultation"
                  serviceDescription="Get expert advice from experienced advocates."
                  price={{ current: 499, original: 999 }}
                  badge="QUICK HELP"
                  ctaText="Book Now"
                  ctaLink="/legal-consultation"
                  variant="sidebar"
                  dataContext="consultation"
                />
              </div>
            </aside>
          </div>
        </article>

        {/* Related Guides */}
        {relatedPosts.length > 0 && (
          <section className="bg-background-gray-light py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <RelatedGuidesSection
                posts={relatedPosts}
                title="Related Guides"
                variant="grid"
                maxPosts={3}
              />
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <ServiceAdBanner
          headline="Need Professional Legal Help?"
          subheadline="Our team of experienced advocates is ready to help you navigate any legal matter with confidence."
          ctaText="Get Started"
          ctaLink="/legal-consultation"
          backgroundVariant="gradient"
        />
      </main>
    </>
  );
}

export default GuidePageClient;
