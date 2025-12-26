"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { pricingTiers, type PricingTier } from "./agreement-data";

/**
 * Props for the PricingTiers component
 */
export interface PricingTiersProps {
  /** Additional CSS classes */
  className?: string;
  /** Custom pricing tiers (defaults to pricingTiers from data file) */
  tiers?: PricingTier[];
  /** Callback when a tier CTA is clicked */
  onTierClick?: (tierId: string) => void;
}

/**
 * Check icon for included features
 */
function CheckIcon({ className }: { className?: string }) {
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
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

/**
 * X icon for excluded features
 */
function XIcon({ className }: { className?: string }) {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/**
 * Individual Pricing Tier Card
 */
interface TierCardProps {
  tier: PricingTier;
  onClick?: () => void;
}

function TierCard({ tier, onClick }: TierCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1",
        tier.popular
          ? "ring-2 ring-teal shadow-lg scale-[1.02] z-10"
          : "ring-gray-200"
      )}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
              tier.popular
                ? "bg-teal text-white"
                : "bg-warning-yellow text-warning-brown"
            )}
          >
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier Header */}
      <div className={cn("text-center", tier.badge && "mt-2")}>
        <h3 className="text-xl font-bold text-text-heading">{tier.name}</h3>
        <p className="mt-1 text-sm text-text-muted">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mt-6 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-text-heading">
            ₹{tier.price.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-text-muted">{tier.unit}</span>
        </div>
        {tier.originalPrice && (
          <div className="mt-1">
            <span className="text-sm text-text-muted line-through">
              ₹{tier.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="ml-2 text-sm font-semibold text-success">
              Save ₹{(tier.originalPrice - tier.price).toLocaleString("en-IN")}
            </span>
          </div>
        )}
      </div>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              "flex items-start gap-3",
              !feature.included && "opacity-50"
            )}
          >
            {feature.included ? (
              <CheckIcon
                className={cn(
                  "mt-0.5 shrink-0",
                  feature.highlight ? "text-teal" : "text-success"
                )}
              />
            ) : (
              <XIcon className="mt-0.5 shrink-0 text-text-muted" />
            )}
            <span
              className={cn(
                "text-sm",
                feature.included ? "text-text-body" : "text-text-muted",
                feature.highlight && "font-semibold text-teal-dark"
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "mt-6 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200",
          tier.popular
            ? "bg-teal text-white hover:bg-teal-dark shadow-md hover:shadow-lg"
            : "bg-gray-100 text-text-heading hover:bg-gray-200"
        )}
      >
        {tier.ctaText}
      </button>
    </div>
  );
}

/**
 * PricingTiers Component
 *
 * Displays tiered pricing options with feature comparison.
 * The "popular" tier is highlighted with enhanced styling.
 */
export function PricingTiers({
  className,
  tiers = pricingTiers,
  onTierClick,
}: PricingTiersProps) {
  return (
    <section className={cn("bg-background-gray py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
            SIMPLE PRICING
          </span>
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            Transparent pricing. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-4">
          {/* Mobile: Reorder to show popular first */}
          {[...tiers]
            .sort((a, b) => {
              // On mobile view, popular tier should be first
              if (a.popular) return -1;
              if (b.popular) return 1;
              return 0;
            })
            .map((tier, index) => (
              <div
                key={tier.id}
                className={cn(
                  "lg:order-none",
                  // Restore original order on desktop
                  tier.id === "basic" && "lg:order-1",
                  tier.id === "standard" && "lg:order-2",
                  tier.id === "premium" && "lg:order-3"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <TierCard
                  tier={tier}
                  onClick={() => onTierClick?.(tier.id)}
                />
              </div>
            ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-10 text-center">
          <p className="text-sm text-text-muted">
            ✓ 100% Secure Payment &nbsp;•&nbsp; ✓ Money-Back Guarantee &nbsp;•&nbsp; ✓ Instant Confirmation
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingTiers;










