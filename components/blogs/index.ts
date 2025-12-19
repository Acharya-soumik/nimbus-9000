/**
 * Blog Components - Export Index
 * All blog-related components and utilities
 * 
 * This module provides a comprehensive set of components for building a 
 * WordPress-powered blog section with a beautiful, modern UI.
 * 
 * @module components/blogs
 */

/* =============================================================================
 * DATA TYPES & UTILITIES
 * Export all TypeScript interfaces and helper functions
 * ============================================================================= */
export {
  // Types
  type BlogPost,
  type BlogCategory,
  type BlogAuthor,
  type BlogPostMeta,
  type BlogFeaturedMedia,
  type BlogPostEmbedded,
  
  // Mock Data
  mockPosts,
  mockCategories,
  mockAuthors,
  
  // Utility Functions
  calculateReadingTime,
  getPostMeta,
  formatPostDate,
  cleanExcerpt,
  getPostsByCategory,
  getPostBySlug,
  getRelatedPosts,
  getPopularPosts,
} from "./blog-data";

/* =============================================================================
 * CORE COMPONENTS
 * Primary components for displaying blog content
 * ============================================================================= */
export { BlogCard, type BlogCardProps } from "./BlogCard";
export { BlogGrid, type BlogGridProps } from "./BlogGrid";
export { CategoryFilter, type CategoryFilterProps } from "./CategoryFilter";
export { BlogHeroSection, type BlogHeroSectionProps } from "./BlogHeroSection";

/* =============================================================================
 * POST PAGE COMPONENTS
 * Components for individual blog post pages
 * ============================================================================= */
export { BlogPostHeader, type BlogPostHeaderProps } from "./BlogPostHeader";
export { BlogPostContent, type BlogPostContentProps } from "./BlogPostContent";

/* =============================================================================
 * CONTENT ENHANCEMENT COMPONENTS
 * Components for enhancing blog content
 * ============================================================================= */
export { HighlightBox, type HighlightBoxProps, type HighlightBoxType } from "./HighlightBox";
export { QuoteBlock, type QuoteBlockProps } from "./QuoteBlock";

/* =============================================================================
 * SERVICE ADVERTISEMENT COMPONENTS
 * Components for promoting services within blog content
 * ============================================================================= */
export { ServiceAdCard, type ServiceAdCardProps } from "./ServiceAdCard";
export { ServiceAdBanner, type ServiceAdBannerProps } from "./ServiceAdBanner";

/* =============================================================================
 * SIDEBAR & RELATED CONTENT COMPONENTS
 * Components for sidebar and related posts sections
 * ============================================================================= */
export { BlogSidebar, type BlogSidebarProps } from "./BlogSidebar";
export { RelatedPostsSection, type RelatedPostsSectionProps } from "./RelatedPostsSection";

/* =============================================================================
 * ENHANCEMENT COMPONENTS
 * Components for improved user experience
 * ============================================================================= */
export { TableOfContents, type TableOfContentsProps } from "./TableOfContents";
export { ReadingProgressBar, type ReadingProgressBarProps } from "./ReadingProgressBar";
export { ShareButtons, type ShareButtonsProps } from "./ShareButtons";
