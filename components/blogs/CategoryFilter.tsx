"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { BlogCategory } from "./blog-data";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface CategoryFilterProps {
  /** Array of categories to display */
  categories: BlogCategory[];
  /** Currently selected category slug (null for "All") */
  selectedCategory?: string | null;
  /** Callback when category selection changes */
  onCategoryChange: (categorySlug: string | null) => void;
  /** Filter variant */
  variant?: "pills" | "dropdown" | "sidebar";
  /** Show post count next to category name */
  showCounts?: boolean;
  /** Label for the "All" option */
  allLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* =============================================================================
 * PILLS VARIANT
 * ============================================================================= */

function PillsFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  showCounts = false,
  allLabel = "All",
  className,
}: CategoryFilterProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
        "-mx-4 px-4 sm:mx-0 sm:px-0", // Negative margin trick for mobile edge-to-edge scroll
        className
      )}
      role="tablist"
      aria-label="Filter by category"
    >
      {/* "All" Option */}
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          selectedCategory === null
            ? "bg-primary text-white shadow-sm"
            : "bg-white text-text-body border border-border hover:border-primary hover:text-primary"
        )}
        role="tab"
        aria-selected={selectedCategory === null}
      >
        {allLabel}
      </button>

      {/* Category Pills */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.slug)}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            selectedCategory === category.slug
              ? "bg-primary text-white shadow-sm"
              : "bg-white text-text-body border border-border hover:border-primary hover:text-primary"
          )}
          role="tab"
          aria-selected={selectedCategory === category.slug}
        >
          {category.name}
          {showCounts && (
            <span
              className={cn(
                "ml-1.5",
                selectedCategory === category.slug
                  ? "text-white/70"
                  : "text-text-muted"
              )}
            >
              ({category.count})
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

/* =============================================================================
 * DROPDOWN VARIANT
 * ============================================================================= */

function DropdownFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  showCounts = false,
  allLabel = "All Categories",
  className,
}: CategoryFilterProps) {
  const selectedCategoryData = categories.find(
    (cat) => cat.slug === selectedCategory
  );
  const displayText = selectedCategoryData
    ? selectedCategoryData.name
    : allLabel;

  return (
    <div className={cn("relative", className)}>
      <select
        value={selectedCategory || ""}
        onChange={(e) => onCategoryChange(e.target.value || null)}
        className={cn(
          "w-full appearance-none rounded-xl border border-border bg-white",
          "px-4 py-3 pr-10 text-sm font-medium text-text-body",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          "transition-colors cursor-pointer"
        )}
        aria-label="Select category"
      >
        <option value="">{allLabel}</option>
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
            {showCounts ? ` (${category.count})` : ""}
          </option>
        ))}
      </select>

      {/* Custom Chevron Icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <ChevronDownIcon className="text-text-muted" />
      </div>
    </div>
  );
}

/* =============================================================================
 * SIDEBAR VARIANT
 * ============================================================================= */

function SidebarFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  showCounts = true,
  allLabel = "All Articles",
  className,
}: CategoryFilterProps) {
  // Group categories by parent for hierarchical display
  const parentCategories = categories.filter((cat) => cat.parent === 0);
  const childCategories = categories.filter((cat) => cat.parent !== 0);

  const getChildrenForParent = (parentId: number) =>
    childCategories.filter((cat) => cat.parent === parentId);

  return (
    <nav className={cn("space-y-1", className)} aria-label="Categories">
      {/* "All" Option */}
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          selectedCategory === null
            ? "bg-primary/10 font-semibold text-primary"
            : "text-text-body hover:bg-background-gray-light"
        )}
      >
        <span>{allLabel}</span>
        {selectedCategory === null && (
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        )}
      </button>

      {/* Parent Categories */}
      {parentCategories.map((category) => {
        const children = getChildrenForParent(category.id);
        const isSelected = selectedCategory === category.slug;
        const hasSelectedChild = children.some(
          (child) => selectedCategory === child.slug
        );

        return (
          <div key={category.id}>
            <button
              onClick={() => onCategoryChange(category.slug)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                isSelected
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-text-body hover:bg-background-gray-light"
              )}
            >
              <span className="flex items-center gap-2">
                {children.length > 0 && (
                  <ChevronRightIcon
                    className={cn(
                      "h-3 w-3 transition-transform",
                      (isSelected || hasSelectedChild) && "rotate-90"
                    )}
                  />
                )}
                {category.name}
              </span>
              <span className="flex items-center gap-2">
                {showCounts && (
                  <span
                    className={cn(
                      "text-xs",
                      isSelected ? "text-primary/70" : "text-text-muted"
                    )}
                  >
                    {category.count}
                  </span>
                )}
                {isSelected && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </span>
            </button>

            {/* Child Categories */}
            {children.length > 0 && (isSelected || hasSelectedChild) && (
              <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                {children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => onCategoryChange(child.slug)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      selectedCategory === child.slug
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-text-medium hover:bg-background-gray-light"
                    )}
                  >
                    <span>{child.name}</span>
                    {showCounts && (
                      <span
                        className={cn(
                          "text-xs",
                          selectedCategory === child.slug
                            ? "text-primary/70"
                            : "text-text-muted"
                        )}
                      >
                        {child.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * CategoryFilter Component
 * Provides category filtering with multiple display variants
 */
export function CategoryFilter({
  categories,
  selectedCategory = null,
  onCategoryChange,
  variant = "pills",
  showCounts = false,
  allLabel,
  className,
}: CategoryFilterProps) {
  const commonProps = {
    categories,
    selectedCategory,
    onCategoryChange,
    showCounts,
    allLabel,
    className,
  };

  switch (variant) {
    case "dropdown":
      return <DropdownFilter {...commonProps} />;
    case "sidebar":
      return <SidebarFilter {...commonProps} />;
    default:
      return <PillsFilter {...commonProps} />;
  }
}

export default CategoryFilter;







