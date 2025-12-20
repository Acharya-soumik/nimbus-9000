"use client";

import { cn } from "@/lib/utils";
import { Check, Quote, Users, Scale, Headphones, Code } from "lucide-react";
import { teamContent, type TeamCategory, type TeamStat } from "./about-data";

/**
 * Team Section Props
 */
export interface TeamSectionProps {
  className?: string;
  teamCategories?: TeamCategory[];
  teamStats?: TeamStat[];
}

/**
 * Icon mapping for team categories (placeholder icons)
 */
const categoryIconMap: Record<string, React.ReactNode> = {
  "Legal Advisory Board": <Scale className="h-12 w-12 text-primary" />,
  "Drafting Team": <Users className="h-12 w-12 text-primary" />,
  "Consultation Experts": <Headphones className="h-12 w-12 text-primary" />,
  "Technology & Operations": <Code className="h-12 w-12 text-primary" />,
};

/**
 * Team Stat Card Component
 */
function TeamStatCard({ value, label }: TeamStat) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs text-text-medium sm:text-sm">{label}</div>
    </div>
  );
}

/**
 * Team Category Card Component
 */
function TeamCategoryCard({ title, description, credentials }: TeamCategory) {
  const icon = categoryIconMap[title] || <Users className="h-12 w-12 text-primary" />;

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-background-pink-light to-background-peach">
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10" />
        <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-warning-yellow/20" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-text-heading">{title}</h3>
        <p className="mb-4 text-sm text-text-medium leading-relaxed">
          {description}
        </p>

        {/* Credentials */}
        <ul className="space-y-2">
          {credentials.map((credential, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-light">
                <Check className="h-3 w-3 text-success-dark" />
              </div>
              <span className="text-xs text-text-body">{credential}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Team Section
 *
 * Represents team expertise without revealing individual identities.
 * Shows team categories with credentials instead of named individuals.
 */
export function TeamSection({
  className,
  teamCategories = teamContent.teamCategories,
  teamStats = teamContent.teamStats,
}: TeamSectionProps) {
  const { sectionTitle, sectionSubtitle, quote } = teamContent;

  return (
    <section className={cn("bg-white py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Our Team
          </span>
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
            {sectionSubtitle}
          </p>
        </div>

        {/* Team Stats */}
        <div className="mb-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mb-16">
          {teamStats.map((stat, index) => (
            <TeamStatCard key={index} {...stat} />
          ))}
        </div>

        {/* Team Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {teamCategories.map((category, index) => (
            <TeamCategoryCard key={index} {...category} />
          ))}
        </div>

        {/* Quote Block */}
        <div className="mt-12 lg:mt-16">
          <div className="mx-auto max-w-3xl rounded-2xl bg-background-peach p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <blockquote className="text-base font-medium text-text-heading leading-relaxed sm:text-lg">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;







