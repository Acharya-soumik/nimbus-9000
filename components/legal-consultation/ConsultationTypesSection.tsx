"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Building2,
  Heart,
  Briefcase,
  Users,
  ShieldCheck,
  Scale,
  FileText,
  Calculator,
} from "lucide-react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface ConsultationType {
  id: string;
  iconType:
    | "building"
    | "heart"
    | "briefcase"
    | "users"
    | "shield"
    | "scale"
    | "file"
    | "calculator";
  title: string;
  description: string;
  popular?: boolean;
}

export interface ConsultationTypesSectionProps {
  title?: string;
  subtitle?: string;
  label?: string;
  types?: ConsultationType[];
  onTypeClick?: (typeId: string) => void;
  className?: string;
}

// =============================================================================
// ICON MAP
// =============================================================================

const iconMap = {
  building: Building2,
  heart: Heart,
  briefcase: Briefcase,
  users: Users,
  shield: ShieldCheck,
  scale: Scale,
  file: FileText,
  calculator: Calculator,
};

// =============================================================================
// DEFAULT DATA
// =============================================================================

const defaultTypes: ConsultationType[] = [
  {
    id: "property",
    iconType: "building",
    title: "Property & Real Estate",
    description: "Land disputes, tenancy, property registration",
    popular: true,
  },
  {
    id: "family",
    iconType: "heart",
    title: "Family & Matrimonial",
    description: "Divorce, custody, maintenance, domestic issues",
    popular: true,
  },
  {
    id: "business",
    iconType: "briefcase",
    title: "Business & Corporate",
    description: "Contracts, partnerships, compliance",
  },
  {
    id: "employment",
    iconType: "users",
    title: "Employment & Labor",
    description: "Workplace issues, termination, harassment",
  },
  {
    id: "consumer",
    iconType: "shield",
    title: "Consumer Disputes",
    description: "Product issues, service complaints",
  },
  {
    id: "criminal",
    iconType: "scale",
    title: "Criminal Matters",
    description: "Bail, FIR, criminal defense",
  },
  {
    id: "civil",
    iconType: "file",
    title: "Civil Disputes",
    description: "Money recovery, cheque bounce, contracts",
  },
  {
    id: "tax",
    iconType: "calculator",
    title: "Tax & Financial",
    description: "Income tax, GST, financial disputes",
  },
];

// =============================================================================
// CONSULTATION TYPE CARD
// =============================================================================

interface TypeCardProps {
  type: ConsultationType;
  onClick?: () => void;
}

function TypeCard({ type, onClick }: TypeCardProps) {
  const IconComponent = iconMap[type.iconType];

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex flex-col items-start gap-3 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-gray-100/80",
        "transition-all duration-200 hover:shadow-md hover:ring-primary/20 hover:scale-[1.02]",
        "sm:p-5"
      )}
    >
      {/* Popular Badge */}
      {type.popular && (
        <span className="absolute -top-2 right-3 rounded-full bg-warning-yellow px-2.5 py-0.5 text-xs font-semibold text-warning-brown">
          Popular
        </span>
      )}

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>

      {/* Content */}
      <div>
        <h3 className="font-semibold text-text-heading">{type.title}</h3>
        <p className="mt-1 text-sm text-text-muted line-clamp-2">
          {type.description}
        </p>
      </div>

      {/* Arrow indicator on hover */}
      <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
        <svg
          className="h-5 w-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function ConsultationTypesSection({
  title = "What Do You Need Help With?",
  subtitle = "Choose a category to get started with expert legal advice",
  label = "CONSULTATION CATEGORIES",
  types = defaultTypes,
  onTypeClick,
  className,
}: ConsultationTypesSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 lg:py-16",
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-background-gray-light/30 to-white" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Eyebrow Label */}
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            {label}
          </span>

          {/* Title */}
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Types Grid - 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {types.map((type) => (
            <TypeCard
              key={type.id}
              type={type}
              onClick={() => onTypeClick?.(type.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsultationTypesSection;
