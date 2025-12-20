"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: {
    text: string;
    color?: "success" | "warning" | "primary";
  };
}

export interface InfoSectionVariant1Props {
  className?: string;
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  showDecorationIcons?: boolean;
  features?: FeatureCardProps[];
  avatars?: { initials: string }[];
  avatarLabel?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      <path d="M13 3v5a1 1 0 001 1h5" />
    </svg>
  );
}

function SpeedometerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
      <path d="M8.5 8.5L12 12" />
    </svg>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h2" />
    </svg>
  );
}

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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ImagePlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-10 w-10", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function PaperclipIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-10 w-10", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

/* =============================================================================
 * FEATURE CARD COMPONENT
 * ============================================================================= */

function FeatureCard({ icon, title, description, badge }: FeatureCardProps) {
  const badgeColorClasses = {
    success: "bg-success-light text-success-darker",
    warning: "bg-warning-yellow/20 text-warning-dark",
    primary: "bg-background-pink-light text-primary",
  };

  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm lg:gap-5 lg:p-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-background-pink-light lg:h-16 lg:w-16">
        <div className="text-primary">{icon}</div>
      </div>
      <div className="flex-1 pt-1">
        <div className="mb-2 flex flex-wrap items-center gap-2 lg:mb-2.5 lg:gap-3">
          <h4 className="text-lg font-bold text-text-heading lg:text-xl">
            {title}
          </h4>
          {badge && (
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold lg:text-sm",
                badgeColorClasses[badge.color || "success"]
              )}
            >
              {badge.text}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-text-medium lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function InfoSectionVariant1({
  className,
  badge = "VERIFIED GUIDE",
  title = "Why Send a",
  titleHighlight = "Legal Notice?",
  description = "A legal notice is more than just a warning. It creates a formal timeline and establishes your intent to resolve the matter.",
  showDecorationIcons = true,
  features = [
    {
      icon: <DocumentIcon />,
      title: "Creates Evidence",
      description:
        "Serves as admissible proof in court that you attempted to resolve the dispute amicably.",
    },
    {
      icon: <SpeedometerIcon />,
      title: "Faster Resolution",
      description:
        "Most disputes are settled immediately after receiving a notice, avoiding court entirely.",
      badge: { text: "65% Success", color: "success" as const },
    },
    {
      icon: <WalletIcon />,
      title: "Saves Money",
      description:
        "Reduces litigation costs significantly by forcing a pre-litigation settlement.",
    },
  ],
  avatars = [{ initials: "/A" }, { initials: "/A" }],
  avatarLabel = "Drafted by Top Lawyers",
  ctaText = "Start Drafting Notice",
  onCtaClick,
}: InfoSectionVariant1Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br from-background-peach via-background-pink-light/50 to-background-peach",
        // Mobile padding
        "p-6",
        // Tablet padding
        "sm:p-8",
        // Desktop padding
        "lg:p-10",
        className
      )}
    >
      {/* Desktop: Two Column Layout */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Left Column - Header & Description */}
        <div className="lg:pr-4">
          {/* Header Section */}
          <div className="mb-5 flex items-start justify-between gap-4 lg:mb-6">
            <div className="flex-1">
              {/* Badge */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm lg:mb-4 lg:px-5 lg:py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-primary lg:h-3 lg:w-3" />
                <span className="text-xs font-bold uppercase tracking-wider text-text-body lg:text-sm">
                  {badge}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[1.75rem] font-bold leading-tight text-text-heading sm:text-3xl lg:text-4xl">
                {title}
                <br />
                <span className="text-primary">{titleHighlight}</span>
              </h2>
            </div>

            {/* Decoration Icons */}
            {showDecorationIcons && (
              <div className="flex items-start gap-2 pt-1 lg:gap-3">
                <div className="text-success/60">
                  <ImagePlaceholderIcon />
                </div>
                <div className="text-info/60">
                  <PaperclipIcon />
                </div>
              </div>
            )}
          </div>

          {/* Description Quote */}
          <div className="mb-5 border-l-4 border-primary/30 pl-4 lg:mb-6 lg:pl-5">
            <p className="text-[15px] italic leading-relaxed text-text-medium lg:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Right Column on Desktop - Feature Cards & CTA */}
        <div>
          {/* Feature Cards */}
          <div className="mb-5 space-y-4 lg:mb-6 lg:space-y-5">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Footer */}
          <div className="space-y-4 lg:space-y-5">
            {/* Avatars and Label */}
            <div className="flex items-center gap-3">
              <div className="flex items-center -space-x-1">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-white bg-background-gray text-xs font-semibold text-text-medium shadow-sm lg:h-10 lg:w-10"
                  >
                    {avatar.initials}
                  </div>
                ))}
                {/* Checkmark badge */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-success shadow-sm lg:h-10 lg:w-10">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <span className="text-sm text-text-muted lg:text-base">
                {avatarLabel}
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-text-heading py-4 text-base font-semibold text-white transition-all hover:bg-text-heading/90 active:scale-[0.98] lg:py-5 lg:text-lg"
            >
              {ctaText}
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSectionVariant1;
