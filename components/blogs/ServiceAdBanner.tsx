"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface ServiceAdBannerProps {
  /** Main headline text */
  headline: string;
  /** Supporting subheadline */
  subheadline?: string;
  /** CTA button text */
  ctaText: string;
  /** CTA link URL */
  ctaLink: string;
  /** Background style variant */
  backgroundVariant?: "gradient" | "pattern" | "image";
  /** Background image URL (for image variant) */
  backgroundImage?: string;
  /** Whether the banner can be dismissed */
  dismissible?: boolean;
  /** Callback when banner is dismissed */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

/* =============================================================================
 * BACKGROUND STYLES
 * ============================================================================= */

const backgroundStyles: Record<"gradient" | "pattern" | "image", string> = {
  gradient: "bg-gradient-to-r from-warning via-warning-coral to-primary",
  pattern: "bg-primary",
  image: "",
};

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * ServiceAdBanner Component
 * Full-width service advertisement banner
 */
export function ServiceAdBanner({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  backgroundVariant = "gradient",
  backgroundImage,
  dismissible = false,
  onDismiss,
  className,
}: ServiceAdBannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      className={cn(
        "relative overflow-hidden py-8 lg:py-12",
        backgroundVariant !== "image" && backgroundStyles[backgroundVariant],
        className
      )}
      style={
        backgroundVariant === "image" && backgroundImage
          ? {
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      aria-label="Service promotion"
    >
      {/* Pattern Overlay for Pattern Variant */}
      {backgroundVariant === "pattern" && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Dismiss Button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Dismiss banner"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center text-white md:flex-row md:justify-between md:text-left">
          {/* Content */}
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              {headline}
            </h2>
            {subheadline && (
              <p className="mt-2 text-white/80 lg:text-lg">
                {subheadline}
              </p>
            )}
          </div>

          {/* CTA */}
          <Link
            href={ctaLink}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            {ctaText}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70 md:justify-start">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            100% Secure
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Verified Experts
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quick Delivery
          </span>
        </div>
      </div>
    </aside>
  );
}

export default ServiceAdBanner;









