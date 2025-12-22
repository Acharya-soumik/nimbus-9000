"use client";

import { cn } from "@/lib/utils";
import {
  Users,
  PiggyBank,
  Handshake,
  Award,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { impactStats, impactStories, type ImpactStat, type ImpactStory } from "./about-data";

/**
 * Impact Stats Section Props
 */
export interface ImpactStatsSectionProps {
  className?: string;
  stats?: ImpactStat[];
  stories?: ImpactStory[];
}

/**
 * Icon mapping for impact stats
 */
const iconMap: Record<string, LucideIcon> = {
  Users,
  PiggyBank,
  Handshake,
  Award,
  MapPin,
  Clock,
};

/**
 * Stat Card Component
 */
function StatCard({ value, label, subtext, icon }: ImpactStat) {
  const Icon = iconMap[icon] || Users;

  return (
    <div className="relative overflow-hidden rounded-xl bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Gradient accent line at top */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-warning-yellow via-warning to-primary" />

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-warning to-warning-yellow bg-clip-text text-transparent sm:text-3xl">
            {value}
          </div>
          <div className="text-sm font-semibold text-text-heading">{label}</div>
          <div className="mt-1 text-xs text-text-muted">{subtext}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Impact Story Card Component
 */
function StoryCard({ metric, description }: ImpactStory) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white/80 p-4 backdrop-blur-sm">
      <div className="text-xl font-bold text-primary sm:text-2xl">{metric}</div>
      <div className="text-sm text-text-medium">{description}</div>
    </div>
  );
}

/**
 * Impact Stats Section
 *
 * Displays quantified impact with meaningful statistics
 * and client success stories.
 */
export function ImpactStatsSection({
  className,
  stats = impactStats,
  stories = impactStories,
}: ImpactStatsSectionProps) {
  return (
    <section
      className={cn("py-16 lg:py-24", className)}
      style={{
        background:
          "radial-gradient(circle at top left, oklch(92% 0.06 35) 0%, oklch(95% 0.04 25) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
            Our Impact
          </span>
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            Numbers That <span className="text-primary">Matter</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
            Real results from real cases. These numbers represent Indians we&apos;ve helped
            find affordable legal solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Impact Stories */}
        <div className="mt-12 lg:mt-16">
          <h3 className="mb-6 text-center text-xl font-bold text-text-heading sm:text-2xl">
            Impact Stories
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stories.map((story, index) => (
              <StoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactStatsSection;









