"use client";

import { cn } from "@/lib/utils";
import {
  Wallet,
  Clock,
  Receipt,
  UserCheck,
  Home,
  X,
  Check,
  type LucideIcon,
} from "lucide-react";
import { whyVakilTechContent, type Comparison } from "./about-data";

/**
 * Why VakilTech Section Props
 */
export interface WhyVakilTechSectionProps {
  className?: string;
}

/**
 * Icon mapping for comparisons
 */
const iconMap: Record<string, LucideIcon> = {
  Wallet,
  Clock,
  Receipt,
  UserCheck,
  Home,
};

/**
 * Comparison Card Component
 */
function ComparisonCard({ traditional, vakiltech, icon, highlight }: Comparison) {
  const Icon = iconMap[icon] || Wallet;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Highlight Badge */}
      <div className="absolute right-4 top-4 z-10">
        <span className="inline-block rounded-full bg-success px-3 py-1 text-xs font-bold text-white">
          {highlight}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
        </div>

        {/* Traditional (Negative) */}
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
            <X className="h-4 w-4 text-red-500" />
          </div>
          <p className="text-sm text-text-muted line-through">{traditional}</p>
        </div>

        {/* VakilTech (Positive) */}
        <div className="flex items-start gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-light">
            <Check className="h-4 w-4 text-success-dark" />
          </div>
          <p className="text-sm font-semibold text-text-heading">{vakiltech}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Why VakilTech Section
 *
 * Shows comparisons between traditional lawyers and VakilTech
 * to highlight the advantages of choosing VakilTech.
 */
export function WhyVakilTechSection({ className }: WhyVakilTechSectionProps) {
  const { sectionTitle, sectionSubtitle, comparisons, bottomNote } =
    whyVakilTechContent;

  return (
    <section className={cn("bg-white py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            The Difference
          </span>
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
            {sectionSubtitle}
          </p>
        </div>

        {/* Comparisons Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((comparison, index) => (
            <ComparisonCard key={index} {...comparison} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base italic text-text-medium">
            &ldquo;{bottomNote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyVakilTechSection;











