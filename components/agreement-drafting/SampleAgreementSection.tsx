"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { sampleAgreements, type SampleAgreement } from "./agreement-data";

/**
 * Props for the SampleAgreementSection component
 */
export interface SampleAgreementSectionProps {
  /** Additional CSS classes */
  className?: string;
  /** Custom sample agreements (defaults to sampleAgreements from data file) */
  agreements?: SampleAgreement[];
  /** Callback when "View Full Sample" is clicked */
  onViewSample?: (agreementId: string) => void;
}

/**
 * Document icon
 */
function DocumentIcon({ className }: { className?: string }) {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}

/**
 * Eye icon for view action
 */
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/**
 * Sample Agreement Card
 */
interface SampleCardProps {
  agreement: SampleAgreement;
  onViewClick?: () => void;
}

function SampleCard({ agreement, onViewClick }: SampleCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md hover:ring-teal/20">
      {/* Card Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
          <DocumentIcon className="text-teal" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-sans text-base font-bold text-text-heading">
            {agreement.title}
          </h3>
          <span className="text-xs text-text-muted">{agreement.category}</span>
        </div>
      </div>

      {/* Preview Content with Blur Effect */}
      <div className="relative p-4">
        <div className="space-y-1.5 font-mono text-xs text-text-medium">
          {agreement.previewLines.map((line, index) => (
            <p
              key={index}
              className={cn(
                "whitespace-pre-wrap",
                index === 0 && "font-semibold text-text-heading",
                index > 2 && "blur-[2px]"
              )}
            >
              {line || "\u00A0"}
            </p>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent" />

        {/* View Button */}
        <button
          type="button"
          onClick={onViewClick}
          className={cn(
            "absolute bottom-4 left-1/2 -translate-x-1/2",
            "flex items-center gap-2 rounded-full bg-teal px-4 py-2",
            "text-sm font-semibold text-white shadow-md",
            "transition-all duration-200",
            "hover:bg-teal-dark hover:shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
          )}
        >
          <EyeIcon />
          View Full Sample
        </button>
      </div>
    </div>
  );
}

/**
 * SampleAgreementSection Component
 *
 * Displays preview cards of sample agreements with blurred content
 * to encourage users to view the full sample in a modal.
 */
export function SampleAgreementSection({
  className,
  agreements = sampleAgreements,
  onViewSample,
}: SampleAgreementSectionProps) {
  return (
    <section className={cn("py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
            QUALITY PREVIEW
          </span>
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            See Our{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Agreement Quality
            </span>
          </h2>
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            Preview professionally drafted agreements before you order
          </p>
        </div>

        {/* Sample Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agreements.map((agreement, index) => (
            <div
              key={agreement.id}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
            >
              <SampleCard
                agreement={agreement}
                onViewClick={() => onViewSample?.(agreement.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SampleAgreementSection;








