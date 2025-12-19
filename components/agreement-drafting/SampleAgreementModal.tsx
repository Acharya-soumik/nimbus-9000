"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { sampleAgreements, type SampleAgreement } from "./agreement-data";

/**
 * Props for the SampleAgreementModal component
 */
export interface SampleAgreementModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Agreement ID to display */
  agreementId?: string;
  /** Direct agreement data (alternative to agreementId) */
  agreement?: SampleAgreement;
  /** Callback when CTA is clicked */
  onCtaClick?: () => void;
  /** CTA button text */
  ctaText?: string;
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
 * Arrow icon for CTA
 */
function ArrowRightIcon({ className }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/**
 * SampleAgreementModal Component
 *
 * Displays the full sample agreement content in a modal dialog.
 * Includes redacted sensitive information and a CTA to get started.
 */
export function SampleAgreementModal({
  open,
  onOpenChange,
  agreementId,
  agreement: propAgreement,
  onCtaClick,
  ctaText = "Need This Agreement? Get Started →",
}: SampleAgreementModalProps) {
  // Get agreement data from ID or props
  const agreement = propAgreement || sampleAgreements.find((a) => a.id === agreementId);

  if (!agreement) {
    return null;
  }

  const handleCtaClick = () => {
    onCtaClick?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-hidden p-0">
        {/* Header */}
        <DialogHeader className="border-b border-gray-100 p-4 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
              <DocumentIcon className="text-teal" />
            </div>
            <div>
              <DialogTitle className="font-sans text-lg font-bold text-text-heading sm:text-xl">
                {agreement.title}
              </DialogTitle>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-text-muted">
                {agreement.category}
              </span>
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="relative max-h-[50vh] overflow-y-auto p-4 sm:p-6">
          {/* Agreement Content */}
          <div className="rounded-lg bg-gray-50 p-4 sm:p-6">
            <div className="space-y-2 font-mono text-xs text-text-body sm:text-sm">
              {agreement.fullContent.map((line, index) => (
                <p
                  key={index}
                  className={cn(
                    "whitespace-pre-wrap",
                    // Style headings
                    (line.includes("AGREEMENT") || line.includes("BETWEEN") || line.includes("AND") || line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.")) &&
                      "font-semibold text-text-heading",
                    // Style section numbers
                    /^\d+\./.test(line) && "mt-4 font-semibold text-text-heading",
                    // Style labels
                    (line.includes("LESSOR") || line.includes("LESSEE") || line.includes("EMPLOYER") || line.includes("EMPLOYEE") || line.includes("DISCLOSING") || line.includes("RECEIVING")) &&
                      "font-semibold"
                  )}
                >
                  {line || "\u00A0"}
                </p>
              ))}
            </div>
          </div>

          {/* Redaction Notice */}
          <p className="mt-4 text-center text-xs text-text-muted">
            <span className="font-medium">Note:</span> Sensitive information (████) is redacted for privacy.
            Your agreement will contain your actual details.
          </p>
        </div>

        {/* Footer with CTA */}
        <div className="relative border-t border-gray-100 bg-white p-4 sm:p-6">
          {/* Gradient overlay for visual effect */}
          <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-white to-transparent" />

          <button
            type="button"
            onClick={handleCtaClick}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-xl",
              "bg-teal py-3 text-sm font-semibold text-white",
              "shadow-md transition-all duration-200",
              "hover:bg-teal-dark hover:shadow-lg",
              "focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
            )}
          >
            {ctaText}
            <ArrowRightIcon />
          </button>

          <p className="mt-3 text-center text-xs text-text-muted">
            Our advocates will customize this agreement for your specific needs
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SampleAgreementModal;






