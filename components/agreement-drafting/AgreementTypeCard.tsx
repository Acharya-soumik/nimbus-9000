"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { AgreementType } from "./agreement-data";

/**
 * Props for the AgreementTypeCard component
 */
export interface AgreementTypeCardProps {
  /** Agreement data to display */
  agreement: AgreementType;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Arrow icon for the card
 */
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/**
 * AgreementTypeCard Component
 *
 * Displays an individual agreement type with name, description, price,
 * and optional "Popular" badge. Used within the AgreementTypesGrid.
 */
export function AgreementTypeCard({
  agreement,
  onClick,
  className,
}: AgreementTypeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex w-full items-center justify-between gap-3 rounded-xl bg-white p-4",
        "border border-gray-100 text-left",
        "transition-all duration-200",
        "hover:border-teal/30 hover:shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-teal/50 focus:ring-offset-2",
        className
      )}
      aria-label={`Select ${agreement.name} agreement - ₹${agreement.price}`}
    >
      {/* Left Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h4 className="truncate font-sans text-sm font-semibold text-text-heading sm:text-base">
            {agreement.name}
          </h4>
          {agreement.popular && (
            <span className="inline-flex shrink-0 items-center rounded-full bg-teal-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-dark">
              Popular
            </span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-1 text-xs text-text-muted sm:text-sm">
          {agreement.description}
        </p>
      </div>

      {/* Price + Arrow */}
      <div className="flex shrink-0 items-center gap-2">
        <span className="text-sm font-bold text-teal sm:text-base">
          ₹{agreement.price.toLocaleString("en-IN")}
        </span>
        <ArrowRightIcon className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-teal" />
      </div>
    </button>
  );
}

export default AgreementTypeCard;








