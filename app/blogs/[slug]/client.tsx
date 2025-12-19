"use client";

import * as React from "react";
import {
  BlogPost,
  BlogCategory,
  BlogPostHeader,
  BlogPostContent,
  RelatedPostsSection,
  TableOfContents,
  ReadingProgressBar,
  ShareButtons,
  ServiceAdCard,
  ServiceAdBanner,
  HighlightBox,
  QuoteBlock,
} from "@/components/blogs";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  popularPosts: BlogPost[];
  categories: BlogCategory[];
}

/* =============================================================================
 * CLIENT COMPONENT
 * ============================================================================= */

export function BlogPostClient({
  post,
  relatedPosts,
}: BlogPostClientProps) {
  const [currentUrl, setCurrentUrl] = React.useState("");

  React.useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <main className="min-h-screen bg-white">
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
        <BlogPostHeader
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
                This article covers essential information that can help you navigate
                legal matters effectively. Make sure to consult with a qualified
                advocate for specific advice related to your situation.
              </p>
            </HighlightBox>

            {/* Main Content */}
            <BlogPostContent content={post.content.rendered} />

            {/* Mid-content Service Ad */}
            <ServiceAdCard
              serviceName="Legal Notice Service"
              serviceDescription="Get your legal notice drafted by expert advocates. Professional, legally sound, and delivered via registered post."
              price={{ current: 1499, original: 3999 }}
              badge="POPULAR SERVICE"
              ctaText="Get Started"
              ctaLink="/legal-notice"
              variant="inline"
              dataContext="legal-notice"
            />

            {/* Quote Block Example */}
            <QuoteBlock
              quote="The first duty of society is justice. When justice is denied, peace is disrupted, and social harmony is threatened."
              author="Supreme Court of India"
              variant="large"
            />

            {/* Legal Insight Box */}
            <HighlightBox type="legal-insight">
              <p>
                Always keep copies of all legal documents and correspondence. They may
                be crucial evidence if the matter escalates to court proceedings.
              </p>
            </HighlightBox>

            {/* Share Buttons (Mobile/Tablet) */}
            <div className="mt-12 border-t border-border pt-8 lg:hidden">
              <h3 className="mb-4 text-sm font-semibold text-text-muted">
                Share this article
              </h3>
              <ShareButtons
                url={currentUrl}
                title={post.title.rendered}
                variant="buttons"
                platforms={["twitter", "facebook", "linkedin", "whatsapp", "copy"]}
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
                  platforms={["twitter", "facebook", "linkedin", "whatsapp", "copy"]}
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-background-gray-light py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RelatedPostsSection
              posts={relatedPosts}
              title="Related Articles"
              variant="grid"
              maxPosts={3}
            />
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <ServiceAdBanner
        headline="Have a Legal Question? Get Expert Answers"
        subheadline="Our team of experienced advocates is ready to help you navigate any legal matter."
        ctaText="Start Consultation"
        ctaLink="/legal-consultation"
        backgroundVariant="gradient"
      />
    </main>
  );
}

export default BlogPostClient;






