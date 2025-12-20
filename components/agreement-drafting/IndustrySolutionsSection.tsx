"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { industrySolutions, type IndustrySolution } from "./agreement-data";

/**
 * Props for the IndustrySolutionsSection component
 */
export interface IndustrySolutionsSectionProps {
  /** Additional CSS classes */
  className?: string;
  /** Custom industry solutions (defaults to industrySolutions from data file) */
  industries?: IndustrySolution[];
  /** Callback when an industry card is clicked */
  onIndustryClick?: (industryId: string) => void;
}

/**
 * Industry icon components
 */
function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function HeartPulseIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

/**
 * Get icon component for industry type
 */
function getIndustryIcon(iconType: IndustrySolution["iconType"]) {
  const iconMap: Record<IndustrySolution["iconType"], React.ComponentType<{ className?: string }>> = {
    startup: RocketIcon,
    realestate: BuildingIcon,
    healthcare: HeartPulseIcon,
    manufacturing: FactoryIcon,
    consulting: BriefcaseIcon,
  };
  return iconMap[iconType] || BriefcaseIcon;
}

/**
 * Industry Card Component
 */
interface IndustryCardProps {
  industry: IndustrySolution;
  onClick?: () => void;
}

function IndustryCard({ industry, onClick }: IndustryCardProps) {
  const IconComponent = getIndustryIcon(industry.iconType);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center",
        "shadow-sm ring-1 ring-gray-100",
        "transition-all duration-300",
        "hover:shadow-lg hover:ring-teal/20 hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
      )}
    >
      {/* Icon with Gradient Background */}
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br",
          industry.gradient,
          "shadow-md transition-transform duration-300 group-hover:scale-110"
        )}
      >
        <IconComponent className="text-white" />
      </div>

      {/* Industry Name */}
      <h3 className="mt-4 font-sans text-base font-bold text-text-heading sm:text-lg">
        {industry.name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-sm text-text-muted">
        {industry.description}
      </p>

      {/* Agreement Count Badge */}
      <div className="mt-4 inline-flex items-center rounded-full bg-teal-light px-3 py-1 text-xs font-semibold text-teal-dark">
        {industry.agreementIds.length} Agreements
      </div>
    </button>
  );
}

/**
 * IndustrySolutionsSection Component
 *
 * Displays industry-specific solution cards with gradient icons.
 * Each card shows the industry name, description, and agreement count.
 */
export function IndustrySolutionsSection({
  className,
  industries = industrySolutions,
  onIndustryClick,
}: IndustrySolutionsSectionProps) {
  // Reference for horizontal scroll container
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className={cn("bg-background-gray py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
            TAILORED FOR YOUR INDUSTRY
          </span>
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            Industry-Specific{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            Agreements crafted for your business domain
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:hidden"
        >
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="w-[280px] flex-shrink-0 snap-center"
            >
              <IndustryCard
                industry={industry}
                onClick={() => onIndustryClick?.(industry.id)}
              />
            </div>
          ))}
        </div>

        {/* Tablet & Desktop: Grid */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <IndustryCard
                industry={industry}
                onClick={() => onIndustryClick?.(industry.id)}
              />
            </div>
          ))}
        </div>

        {/* Scroll Indicator for Mobile */}
        <div className="mt-4 flex justify-center gap-1 sm:hidden">
          {industries.map((_, index) => (
            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutionsSection;








