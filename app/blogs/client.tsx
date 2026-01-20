"use client";

import * as React from "react";
import {
  BlogPost,
  BlogCategory,
  BlogHeroSection,
  BlogGrid,
  CategoryFilter,
  BlogSidebar,
  ServiceAdBanner,
} from "@/components/blogs";

interface BlogsClientProps {
  initialPosts: BlogPost[];
  popularPosts: BlogPost[];
  allCategories: BlogCategory[];
}

export function BlogsClient({ initialPosts, popularPosts, allCategories }: BlogsClientProps) {
  // State
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // Constants
  const POSTS_PER_PAGE = 6;

  // Filter posts based on selected category, search query, and current tab
  const filteredPosts = React.useMemo(() => {
    let posts = initialPosts;

    // Category Filter
    if (selectedCategory) {
      posts = posts.filter((post) => {
        // Handle case where post might not have category, or different slug format
        const postCatSlug = post.category?.toLowerCase().replace(/\s+/g, "-");
        return postCatSlug === selectedCategory;
      });
    }
    
    // Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }
    
    return posts;
  }, [selectedCategory, searchQuery, initialPosts]);

  // Paginate
  const paginatedPosts = React.useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

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

  // Featured post (first post of filtered, or initial)
  // Logic: "Featured" usually means "Sticky", but here let's just use the first post of the list as hero if we want.
  // BUT the design passed 'featuredPost' to HeroSection separately.
  // Let's assume the first post of the *initial* list is the featured one for the Hero, unless we have a specific 'featured' flag.
  // For now, let's just pick the first one.
  const featuredPost = initialPosts[0];

  return (
    <main className="min-h-screen bg-background-peach">
      {/* Hero Section */}
      <BlogHeroSection
        badge={{
          icon: (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
          text: "Legal Knowledge Hub",
        }}
        headline="Expert Legal Insights & Resources"
        highlightedWords={["Legal", "Insights"]}
        subtitle="Stay informed with expert legal guidance, tips, and updates to help you navigate the legal landscape in India."
        featuredPost={featuredPost}
        searchPlaceholder="Search articles..."
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
                categories={allCategories}
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
                    Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""}{" "}
                    for &quot;{searchQuery}&quot;
                  </>
                ) : selectedCategory ? (
                  <>
                    Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} in{" "}
                    <span className="font-medium text-text-body">
                      {allCategories.find((c) => c.slug === selectedCategory)?.name}
                    </span>
                  </>
                ) : (
                  <>{filteredPosts.length} articles</>
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

            {/* Blog Grid */}
            <BlogGrid
              posts={paginatedPosts}
              loading={loading}
              skeletonCount={6}
              columns={2}
              gap="lg"
              showPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onCategoryClick={handleCategoryChange}
              emptyStateMessage={
                searchQuery
                  ? "No articles match your search. Try different keywords."
                  : "No articles found in this category."
              }
            />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 xl:w-96">
            <BlogSidebar
              categories={allCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              popularPosts={popularPosts}
              showNewsletterSignup
              showServiceAd
              searchPlaceholder="Search articles..."
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
    </main>
  );
}
