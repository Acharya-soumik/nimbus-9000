/**
 * Guide Components - Export Index
 * Reuses all blog components for guides section
 * 
 * This module provides the same functionality as blogs but adapted for guides
 * 
 * @module components/guides
 */

/* =============================================================================
 * GUIDE DATA & UTILITIES
 * ============================================================================= */
export {
  // Types
  type Guide,
  type GuideCategory,
  
  // Mock Data
  mockGuides,
  guideCategories,
  
  // Utility Functions
  calculateReadingTime,
  cleanExcerpt,
  getGuidesByCategory,
  getGuideBySlug,
  getRelatedGuides,
  getPopularGuides,
} from "./guide-data";

/* =============================================================================
 * RE-EXPORT BLOG COMPONENTS FOR GUIDES
 * All components work the same way with guides as they do with blogs
 * ============================================================================= */

// Core components
export {
  BlogCard as GuideCard,
  type BlogCardProps as GuideCardProps,
  BlogGrid as GuideGrid,
  type BlogGridProps as GuideGridProps,
  CategoryFilter,
  type CategoryFilterProps,
  BlogHeroSection as GuideHeroSection,
  type BlogHeroSectionProps as GuideHeroSectionProps,
} from "@/components/blogs";

// Post/Guide page components
export {
  BlogPostHeader as GuidePostHeader,
  type BlogPostHeaderProps as GuidePostHeaderProps,
  BlogPostContent as GuidePostContent,
  type BlogPostContentProps as GuidePostContentProps,
} from "@/components/blogs";

// Content enhancement
export {
  HighlightBox,
  type HighlightBoxProps,
  type HighlightBoxType,
  QuoteBlock,
  type QuoteBlockProps,
} from "@/components/blogs";

// Service ads
export {
  ServiceAdCard,
  type ServiceAdCardProps,
  ServiceAdBanner,
  type ServiceAdBannerProps,
} from "@/components/blogs";

// Sidebar & related content
export {
  BlogSidebar as GuideSidebar,
  type BlogSidebarProps as GuideSidebarProps,
  RelatedPostsSection as RelatedGuidesSection,
  type RelatedPostsSectionProps as RelatedGuidesSectionProps,
} from "@/components/blogs";

// Enhancement components
export {
  TableOfContents,
  type TableOfContentsProps,
  ReadingProgressBar,
  type ReadingProgressBarProps,
  ShareButtons,
  type ShareButtonsProps,
} from "@/components/blogs";
