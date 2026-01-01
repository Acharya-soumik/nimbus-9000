"use client";

import { cn } from "@/lib/utils";
import {
  Scale,
  Eye,
  Heart,
  Zap,
  Award,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { coreValues, type CoreValue } from "./about-data";

/**
 * Core Values Section Props
 */
export interface CoreValuesSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  values?: CoreValue[];
}

/**
 * Icon mapping for core values
 */
const iconMap: Record<string, LucideIcon> = {
  Scale,
  Eye,
  Heart,
  Zap,
  Award,
  Shield,
};

/**
 * Color classes for value cards
 */
const colorClasses: Record<string, { bg: string; text: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
  },
  success: {
    bg: "bg-success-light",
    text: "text-success-dark",
  },
  warning: {
    bg: "bg-warning-yellow/20",
    text: "text-warning-dark",
  },
  info: {
    bg: "bg-info-light",
    text: "text-info",
  },
};

/**
 * Value Card Component
 */
function ValueCard({ icon, title, description, color }: CoreValue) {
  const Icon = iconMap[icon] || Scale;
  const colors = colorClasses[color] || colorClasses.primary;

  return (
    <div className="group flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Icon Circle */}
      <div
        className={cn(
          "mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
          colors.bg
        )}
      >
        <Icon className={cn("h-8 w-8", colors.text)} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-center text-lg font-bold text-text-heading">
        {title}
      </h3>

      {/* Description */}
      <p className="text-center text-sm leading-relaxed text-text-medium">
        {description}
      </p>
    </div>
  );
}

/**
 * Core Values Section
 *
 * Displays VakilTech's core values in a visually impactful grid.
 */
export function CoreValuesSection({
  className,
  title = "The Values That Drive Us",
  subtitle = "Every decision we make is guided by these principles",
  values = coreValues,
}: CoreValuesSectionProps) {
  return (
    <section
      className={cn("py-16 lg:py-24", className)}
      style={{
        background:
          "radial-gradient(circle at top left, oklch(98% 0.01 30) 0%, oklch(95% 0.03 30) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValuesSection;











