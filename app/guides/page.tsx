"use client";

import * as React from "react";
import {
  mockGuides,
  guideCategories,
  getGuidesByCategory,
  getPopularGuides,
  GuideHeroSection,
  GuideGrid,
  CategoryFilter,
  GuideSidebar,
  ServiceAdBanner,
} from "@/components/guides";

/* =============================================================================
 * GUIDES LISTING PAGE
 * Adapted from blogs page - reuses all blog components
 * ============================================================================= */

export default function GuidesPage() {
  // State
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // Constants
  const GUIDES_PER_PAGE = 6;

  // Filter guides by category and search
  const filteredGuides = React.useMemo(() => {
    let guides = getGuidesByCategory(selectedCategory);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      guides = guides.filter(
        (guide) =>
          guide.title.rendered.toLowerCase().includes(query) ||
          guide.excerpt.rendered.toLowerCase().includes(query)
      );
    }
    
    return guides;
  }, [selectedCategory, searchQuery]);

  // Paginate
  const paginatedGuides = React.useMemo(() => {
    const start = (currentPage - 1) * GUIDES_PER_PAGE;
    return filteredGuides.slice(start, start + GUIDES_PER_PAGE);
  }, [filteredGuides, currentPage]);

  const totalPages = Math.ceil(filteredGuides.length / GUIDES_PER_PAGE);

  // Handlers
  const handleCategoryChange = (category: string | null) => {
    setLoading(true);
    setSelectedCategory(category);
    setCurrentPage(1);
    // Simulate loading
    setTimeout(() => setLoading(false), 300);
  };

  const handlePageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo({ top: 400, behavior: "smooth" });
    setTimeout(() => setLoading(false), 300);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Featured guide (first guide)
  const featuredGuide = mockGuides[0];
  const popularGuides = getPopularGuides(5);

  return (
    <main className="min-h-screen bg-black">
      {/* Dark mode styles wrapper */}
      <style jsx global>{`
        /* Guides Dark Theme Overrides */
        .guides-dark-theme {
          --color-background: #1d1d1d;
          --color-surface: #1a1a1a;
          --color-surface-elevated: #2d2d2d;
          --color-border: #404040;
          --color-text-heading: #ffffff;
          --color-text-body: #e5e5e5;
          --color-text-muted: #a3a3a3;
        }
        
        /* Background overrides */
        .guides-dark-theme,
        .guides-dark-theme * {
          border-color: #404040;
        }
        
        .guides-dark-theme .bg-background-peach,
        .guides-dark-theme [class*="bg-background"],
        .guides-dark-theme section,
        .guides-dark-theme header {
          background-color: #000000 !important;
        }
        
        .guides-dark-theme .bg-white {
          background-color: #1a1a1a !important;
          border: 1px solid #2d2d2d;
        }
        
        .guides-dark-theme .bg-background-gray,
        .guides-dark-theme .bg-background-gray-light {
          background-color: #0a0a0a !important;
        }
        
        /* Text color overrides */
        .guides-dark-theme .text-text-heading,
        .guides-dark-theme h1,
        .guides-dark-theme h2,
        .guides-dark-theme h3 {
          color: #ffffff !important;
        }
        
        .guides-dark-theme .text-text-body {
          color: #e5e5e5 !important;
        }
        
        .guides-dark-theme .text-text-medium {
          color: #d4d4d4 !important;
        }
        
        .guides-dark-theme .text-text-muted,
        .guides-dark-theme p {
          color: #a3a3a3 !important;
        }
        
        /* Shadow overrides */
        .guides-dark-theme .shadow-card {
          box-shadow: 0 1px 3px rgba(255, 255, 255, 0.05) !important;
        }
        
        .guides-dark-theme .shadow-card-hover {
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1) !important;
        }
        
        .guides-dark-theme .shadow-xs {
          box-shadow: 0 1px 2px rgba(255, 255, 255, 0.05) !important;
        }
        
        /* Border overrides */
        .guides-dark-theme .border-border,
        .guides-dark-theme .border {
          border-color: #404040 !important;
        }
        
        .guides-dark-theme .border-t {
          border-color: #2d2d2d !important;
        }
        
        /* Primary color backgrounds */
        .guides-dark-theme .bg-primary\/10 {
          background-color: rgba(239, 90, 111, 0.15) !important;
        }
        
        .guides-dark-theme .bg-primary\/20 {
          background-color: rgba(239, 90, 111, 0.25) !important;
        }
        
        /* Hover states */
        .guides-dark-theme .hover\:bg-background-gray-light:hover {
          background-color: #2d2d2d !important;
        }
        
        /* Skeleton loading */
        .guides-dark-theme .bg-border {
          background-color: #2d2d2d !important;
        }
        
        /* Input fields */
        .guides-dark-theme input,
        .guides-dark-theme textarea {
          background-color: #1a1a1a !important;
          color: #e5e5e5 !important;
          border-color: #404040 !important;
        }
        
        .guides-dark-theme input::placeholder,
        .guides-dark-theme textarea::placeholder {
          color: #666666 !important;
        }
        
        /* Buttons - keep primary color but adjust text */
        .guides-dark-theme button:not(.bg-primary) {
          background-color: #1a1a1a !important;
          color: #e5e5e5 !important;
        }
        
        /* Rounded elements */
        .guides-dark-theme .rounded-2xl,
        .guides-dark-theme .rounded-xl,
        .guides-dark-theme .rounded-3xl,
        .guides-dark-theme .rounded-lg {
          background-color: #1a1a1a;
        }
        
        /* Featured image overlays - keep gradient but adjust base */
        .guides-dark-theme [class*="gradient"] {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        }
        
        /* Quote blocks - dark background with light text */
        .guides-dark-theme blockquote,
        .guides-dark-theme [class*="quote"],
        .guides-dark-theme .prose blockquote {
          background-color: #1a1a1a !important;
          border-left-color: #ef5a6f !important;
          color: #e5e5e5 !important;
        }
        
        .guides-dark-theme blockquote p,
        .guides-dark-theme [class*="quote"] p {
          color: #e5e5e5 !important;
        }
        
        .guides-dark-theme blockquote cite,
        .guides-dark-theme [class*="quote"] cite {
          color: #a3a3a3 !important;
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
        
        /* Links in content */
        .guides-dark-theme a:not(.bg-primary) {
          color: #ef5a6f !important;
        }
        
        .guides-dark-theme a:not(.bg-primary):hover {
          color: #ff6b7d !important;
        }
      `}</style>
      
      <div className="guides-dark-theme">
        {/* Hero Section */}
        <GuideHeroSection
          badge={{
            icon: (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            ),
            text: "Comprehensive Legal Guides",
          }}
          headline="Expert Legal Guides & Resources"
          highlightedWords={["Legal", "Guides"]}
          subtitle="In-depth, comprehensive guides to help you understand your legal rights and navigate complex legal matters in India."
          featuredPost={featuredGuide}
          searchPlaceholder="Search guides..."
          onSearch={handleSearch}
        />

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Main Column */}
            <div className="flex-1">
              {/* Category Filter - Pills (Mobile/Desktop) */}
              <div className="mb-8">
                <CategoryFilter
                  categories={guideCategories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  variant="pills"
                  showCounts
                />
              </div>

              {/* Results Summary */}
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-text-muted">
                  {searchQuery ? (
                    <>
                      Showing {filteredGuides.length} result{filteredGuides.length !== 1 ? "s" : ""}{" "}
                      for &quot;{searchQuery}&quot;
                    </>
                  ) : selectedCategory ? (
                    <>
                      Showing {filteredGuides.length} guide{filteredGuides.length !== 1 ? "s" : ""} in{" "}
                      <span className="font-medium text-text-body">
                        {guideCategories.find((c) => c.slug === selectedCategory)?.name}
                      </span>
                    </>
                  ) : (
                    <>{filteredGuides.length} comprehensive guides</>
                  )}
                </p>

                {(searchQuery || selectedCategory) && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                      setCurrentPage(1);
                    }}
                    className="text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {/* Guide Grid */}
              <GuideGrid
                posts={paginatedGuides}
                loading={loading}
                skeletonCount={6}
                columns={2}
                gap="lg"
                basePath="/guides"
                showPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onCategoryClick={handleCategoryChange}
                emptyStateMessage={
                  searchQuery
                    ? "No guides match your search. Try different keywords."
                    : "No guides found in this category."
                }
              />
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 xl:w-96">
              <GuideSidebar
                categories={guideCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                popularPosts={popularGuides}
                showNewsletterSignup
                showServiceAd
                searchPlaceholder="Search guides..."
                onSearch={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <ServiceAdBanner
          headline="Need Legal Help? Get Expert Consultation Today"
          subheadline="Connect with experienced advocates who can guide you through any legal matter."
          ctaText="Book Consultation"
          ctaLink="/legal-consultation"
          backgroundVariant="gradient"
        />
      </div>
    </main>
  );
}
