"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Pricing Card Component
 * Displays the pricing information with gradient border
 */

export interface PricingCardProps {
  className?: string;
  badge?: string;
  originalPrice?: number;
  currentPrice: number;
  unit?: string;
  features: string[];
  totalLabel?: string;
  showPaymentBreakdown?: boolean;
  advancePayment?: number;
  finalPayment?: number;
}

export function PricingCard({
  className,
  badge = "BEST VALUE PACK",
  originalPrice = 3999,
  currentPrice = 1499,
  unit = "/ notice",
  features = [
    "Drafted by Licensed Advocate",
    "Sent via Speed Post (RPAD)",
    "Unlimited Revisions Included",
  ],
  totalLabel = "TOTAL PAYABLE",
  showPaymentBreakdown = false,
  advancePayment = 499,
  finalPayment = 1000,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white shadow-lg",
        className
      )}
    >
      {/* Gradient Left Border */}
      <div className="absolute bottom-0 left-0 top-0 w-1.5 bg-gradient-to-b from-warning-yellow via-warning to-primary" />

      {/* Card Content */}
      <div className="pl-4">
        {/* Header Section */}
        <div className="flex items-start justify-between px-4 pb-4 pt-5">
          {/* Badge */}
          <span className="rounded-md bg-warning-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-warning-brown">
            {badge}
          </span>
          {/* Original Price */}
          <span className="text-sm text-text-muted line-through">
            ₹{originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Price Display */}
        <div className="px-4 pb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-text-heading">
              ₹{currentPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-base text-text-muted">{unit}</span>
          </div>
        </div>

        {/* Features List */}
        <div className="px-4 pb-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2.5">
                <svg
                  className="h-5 w-5 shrink-0 text-success"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 12 15 16 10" />
                </svg>
                <span className="text-sm text-text-body">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Breakdown Highlight */}
        {showPaymentBreakdown && (
          <div className="mx-4 mb-4 rounded-lg bg-gradient-to-r from-info/10 to-primary/10 border border-info/30 p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-text-heading">
                  Get Started With
                </span>
                <span className="text-xl font-bold text-primary">
                  ₹{advancePayment.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-success mt-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="text-xs text-text-body leading-relaxed">
                  Pay ₹{finalPayment.toLocaleString("en-IN")} after notice is
                  drafted and approved
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Footer - Total Payable */}
        <div className="flex items-center justify-between border-t border-border bg-background-gray-light px-4 py-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-info">
            {totalLabel}
          </span>
          <span className="text-lg font-bold text-text-heading">
            ₹{currentPrice.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
