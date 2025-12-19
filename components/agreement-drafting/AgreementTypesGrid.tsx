"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AgreementTypeCard } from "./AgreementTypeCard";
import { agreementCategories, type AgreementCategory } from "./agreement-data";

/**
 * Props for the AgreementTypesGrid component
 */
export interface AgreementTypesGridProps {
  /** Additional CSS classes */
  className?: string;
  /** Optional custom categories (defaults to agreementCategories from data file) */
  categories?: AgreementCategory[];
  /** Callback when an agreement is clicked */
  onAgreementClick?: (agreementId: string) => void;
  /** Callback when a category is clicked */
  onCategoryClick?: (categoryId: string) => void;
}

/**
 * Category icon components
 */
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

/**
 * Get icon component for category type
 */
function getCategoryIcon(iconType: AgreementCategory["iconType"]) {
  const iconMap: Record<AgreementCategory["iconType"], React.ComponentType<{ className?: string }>> = {
    business: BriefcaseIcon,
    employment: UsersIcon,
    property: HomeIcon,
    service: FileTextIcon,
    ip: CpuIcon,
    personal: HeartIcon,
  };
  return iconMap[iconType] || FileTextIcon;
}

/**
 * Get text color for icon based on background color
 */
function getIconTextColor(iconBgColor: string): string {
  const colorMap: Record<string, string> = {
    "bg-blue-100": "text-blue-600",
    "bg-purple-100": "text-purple-600",
    "bg-green-100": "text-green-600",
    "bg-orange-100": "text-orange-600",
    "bg-cyan-100": "text-cyan-600",
    "bg-pink-100": "text-pink-600",
  };
  return colorMap[iconBgColor] || "text-gray-600";
}

/**
 * Category Card Component
 */
interface CategoryCardProps {
  category: AgreementCategory;
  isExpanded: boolean;
  onToggle: () => void;
  onAgreementClick?: (agreementId: string) => void;
}

function CategoryCard({ category, isExpanded, onToggle, onAgreementClick }: CategoryCardProps) {
  const IconComponent = getCategoryIcon(category.iconType);
  const iconTextColor = getIconTextColor(category.iconBgColor);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100/80",
        "transition-all duration-300",
        isExpanded && "ring-teal/20 shadow-md"
      )}
    >
      {/* Category Header */}
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center gap-4 p-4 text-left",
          "transition-colors duration-200",
          "hover:bg-gray-50/50",
          "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal/50"
        )}
        aria-expanded={isExpanded}
        aria-controls={`category-${category.id}-content`}
      >
        {/* Icon */}
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
            category.iconBgColor
          )}
        >
          <IconComponent className={iconTextColor} />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-sans text-base font-bold text-text-heading sm:text-lg">
              {category.title}
            </h3>
            {category.popular && (
              <span className="inline-flex shrink-0 items-center rounded-full bg-teal-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-dark">
                Popular
              </span>
            )}
          </div>
          <p className="mt-0.5 line-clamp-1 text-sm text-text-muted">
            {category.description}
          </p>
        </div>

        {/* Expand Arrow */}
        <ChevronDownIcon
          className={cn(
            "shrink-0 text-text-muted transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {/* Expanded Content */}
      <div
        id={`category-${category.id}-content`}
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 border-t border-gray-100 p-4 pt-3">
            {category.agreements.map((agreement) => (
              <AgreementTypeCard
                key={agreement.id}
                agreement={agreement}
                onClick={() => onAgreementClick?.(agreement.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * AgreementTypesGrid Component
 *
 * Displays a grid of agreement categories with expandable sections
 * showing individual agreement types. Responsive layout with
 * 1 column on mobile, 2 on tablet, and 3 on desktop.
 */
export function AgreementTypesGrid({
  className,
  categories = agreementCategories,
  onAgreementClick,
  onCategoryClick,
}: AgreementTypesGridProps) {
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(new Set());

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
    onCategoryClick?.(categoryId);
  };

  return (
    <section className={cn("py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
            50+ AGREEMENT TYPES
          </span>
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Agreement Type
            </span>
          </h2>
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            Select a category to explore available agreements
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <CategoryCard
                category={category}
                isExpanded={expandedCategories.has(category.id)}
                onToggle={() => toggleCategory(category.id)}
                onAgreementClick={onAgreementClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgreementTypesGrid;





