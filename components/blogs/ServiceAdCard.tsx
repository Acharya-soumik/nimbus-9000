"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface ServiceAdCardProps {
  /** Service name/title */
  serviceName: string;
  /** Service description */
  serviceDescription: string;
  /** Price information */
  price?: {
    current: number;
    original?: number;
  };
  /** Badge text (e.g., "RELATED SERVICE") */
  badge?: string;
  /** Illustration/image */
  illustration?: {
    src: string;
    alt: string;
  };
  /** CTA button text */
  ctaText: string;
  /** CTA link URL */
  ctaLink: string;
  /** Card variant */
  variant?: "inline" | "sidebar" | "full-width";
  /** Data context for programmatic insertion */
  dataContext?: "legal-notice" | "consultation" | "property" | "family";
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
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

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

/* =============================================================================
 * INLINE VARIANT
 * ============================================================================= */

function InlineCard({
  serviceName,
  serviceDescription,
  price,
  badge = "RELATED SERVICE",
  illustration,
  ctaText,
  ctaLink,
  dataContext,
  className,
}: ServiceAdCardProps) {
  return (
    <aside
      className={cn(
        "my-8 overflow-hidden rounded-2xl bg-gradient-to-br from-warning-coral to-warning-light lg:my-10",
        className
      )}
      data-context={dataContext}
      aria-label="Service advertisement"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Illustration */}
        {illustration && (
          <div className="flex items-center justify-center bg-white/10 p-6 md:w-2/5 md:p-8">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="h-32 w-auto object-contain md:h-40"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-6 text-white md:p-8">
          {/* Badge */}
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
            {badge}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-xl font-bold lg:text-2xl">
            {serviceName}
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-white/90 line-clamp-2 lg:text-base">
            {serviceDescription}
          </p>

          {/* Price */}
          {price && (
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold">
                ₹{price.current.toLocaleString("en-IN")}
              </span>
              {price.original && (
                <span className="text-sm text-white/60 line-through">
                  ₹{price.original.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          )}

          {/* CTA */}
          <Link
            href={ctaLink}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {ctaText}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

/* =============================================================================
 * SIDEBAR VARIANT
 * ============================================================================= */

function SidebarCard({
  serviceName,
  serviceDescription,
  price,
  badge = "RECOMMENDED",
  illustration,
  ctaText,
  ctaLink,
  dataContext,
  className,
}: ServiceAdCardProps) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white shadow-md",
        className
      )}
      data-context={dataContext}
      aria-label="Service advertisement"
    >
      {/* Gradient Border Top */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-warning-yellow via-warning to-primary" />

      <div className="p-5">
        {/* Badge */}
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          {badge}
        </span>

        {/* Illustration */}
        {illustration && (
          <div className="my-4 flex justify-center">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="h-24 w-auto object-contain"
              loading="lazy"
            />
          </div>
        )}

        {/* Title */}
        <h4 className="mt-3 text-lg font-bold text-text-heading">
          {serviceName}
        </h4>

        {/* Description */}
        <p className="mt-2 text-sm text-text-medium line-clamp-3">
          {serviceDescription}
        </p>

        {/* Features (sample) */}
        <ul className="mt-4 space-y-2">
          {["Expert drafted", "Fast delivery", "100% secure"].map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-text-body">
              <CheckCircleIcon className="h-4 w-4 text-success" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        {price && (
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-xl font-bold text-text-heading">
              ₹{price.current.toLocaleString("en-IN")}
            </span>
            {price.original && (
              <span className="text-sm text-text-muted line-through">
                ₹{price.original.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          href={ctaLink}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-white transition-all hover:bg-primary/90"
        >
          {ctaText}
          <ArrowRightIcon />
        </Link>
      </div>
    </aside>
  );
}

/* =============================================================================
 * FULL-WIDTH VARIANT
 * ============================================================================= */

function FullWidthCard({
  serviceName,
  serviceDescription,
  price,
  badge = "SPECIAL OFFER",
  illustration,
  ctaText,
  ctaLink,
  dataContext,
  className,
}: ServiceAdCardProps) {
  return (
    <aside
      className={cn(
        "my-10 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-warning-coral to-warning shadow-lg lg:my-12",
        className
      )}
      data-context={dataContext}
      aria-label="Service advertisement"
    >
      <div className="flex flex-col items-center gap-6 p-6 text-center text-white md:flex-row md:gap-8 md:p-8 md:text-left lg:p-10">
        {/* Illustration */}
        {illustration && (
          <div className="shrink-0">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="h-24 w-auto object-contain md:h-32"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          {/* Badge */}
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {badge}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-xl font-bold lg:text-2xl">
            {serviceName}
          </h3>

          {/* Description */}
          <p className="mt-2 text-white/90 line-clamp-2">
            {serviceDescription}
          </p>
        </div>

        {/* Price & CTA */}
        <div className="flex shrink-0 flex-col items-center gap-3 md:items-end">
          {price && (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold md:text-3xl">
                ₹{price.current.toLocaleString("en-IN")}
              </span>
              {price.original && (
                <span className="text-sm text-white/60 line-through">
                  ₹{price.original.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          )}

          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {ctaText}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </aside>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * ServiceAdCard Component
 * Service advertisement card for strategic placement in blog content
 */
export function ServiceAdCard({
  serviceName,
  serviceDescription,
  price,
  badge,
  illustration,
  ctaText,
  ctaLink,
  variant = "inline",
  dataContext,
  className,
}: ServiceAdCardProps) {
  const commonProps = {
    serviceName,
    serviceDescription,
    price,
    badge,
    illustration,
    ctaText,
    ctaLink,
    dataContext,
    className,
  };

  switch (variant) {
    case "sidebar":
      return <SidebarCard {...commonProps} />;
    case "full-width":
      return <FullWidthCard {...commonProps} />;
    default:
      return <InlineCard {...commonProps} />;
  }
}

export default ServiceAdCard;





