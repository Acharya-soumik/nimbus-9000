"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/mixpanel";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface SampleNoticeSectionProps {
  className?: string;
  /** Section title */
  title?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** The category/type of notice (e.g., "Money Recovery", "Divorce") */
  noticeCategory?: string;
  /** The sample notice title displayed in the card */
  noticeTitle?: string;
  /** Text for the download/view button */
  buttonText?: string;
  /** Footer trust text */
  trustText?: string;
  /** Callback when download/view button is clicked */
  onButtonClick?: () => void;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-8 w-8", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  );
}

/* =============================================================================
 * BLURRED SKELETON LINES COMPONENT
 * ============================================================================= */

function BlurredSkeletonLines() {
  return (
    <div className="space-y-3 blur-[2px]">
      <div className="h-3 w-full rounded-full bg-gray-300/70" />
      <div className="h-3 w-[85%] rounded-full bg-gray-300/60" />
      <div className="h-3 w-[70%] rounded-full bg-gray-300/50" />
    </div>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function SampleNoticeSection({
  className,
  title = "See a Real Legal Notice Format",
  subtitle = "Preview a professionally drafted legal notice.",
  noticeCategory,
  noticeTitle = "Sample Legal Notice",
  buttonText = "Download Sample PDF",
  trustText = "* Legally valid format used by 10,000+ lawyers.",
  onButtonClick,
}: SampleNoticeSectionProps) {
  const [animationKey, setAnimationKey] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger shake animation when section comes into view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Increment key to force re-render and re-trigger animation
          setAnimationKey((prev) => prev + 1);
        }
      },
      { 
        threshold: 0.4,
        rootMargin: "0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Also trigger on page visibility change (tab switch)
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Small delay to ensure smooth animation
        setTimeout(() => {
          setAnimationKey((prev) => prev + 1);
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Combine notice title with category if provided
  const displayTitle = noticeCategory
    ? `${noticeTitle} — ${noticeCategory}`
    : noticeTitle;

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-20",
        className
      )}
    >
      {/* Background gradient - soft pink/peach gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background-peach via-background-pink-light/60 to-background-peach" />

      <div className="mx-auto max-w-xl text-center">
        {/* Section Header */}
        <h2 className="mb-3 font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mb-10 text-base text-text-medium lg:text-lg">{subtitle}</p>

        {/* Preview Card Container - with perspective for 3D tilt */}
        <div className="relative mx-auto max-w-sm" style={{ perspective: "1000px" }}>
          {/* Tilted Card with shake animation */}
          <div
            ref={cardRef}
            key={animationKey}
            className={cn(
              "relative rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100/50 sm:p-8",
              "transform",
              // Tilt effect - rotated like a paper document
              "rotate-[-2deg]",
              // Shake animation - using the global keyframe
              "animate-[notice-shake_0.6s_ease-out]"
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Document Icon */}
            <div className="mb-5 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <DocumentIcon className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Notice Title */}
            <h3 className="mb-5 font-sans text-xl font-bold text-text-heading sm:text-2xl">
              {displayTitle}
            </h3>

            {/* Blurred Skeleton Lines - representing notice content */}
            <div className="mb-6">
              <BlurredSkeletonLines />
            </div>

            {/* Download/View Button */}
            <button
              onClick={() => {
                trackEvent("Sample Notice Viewed", {
                    category: noticeCategory,
                    view_mode: "preview_card"
                });
                onButtonClick?.();
              }}
              className="w-full rounded-xl border-2 border-primary/30 bg-primary/5 px-6 py-3.5 text-base font-bold text-primary transition-all hover:border-primary/50 hover:bg-primary/10 active:scale-[0.98] sm:py-4"
            >
              {buttonText}
            </button>

            {/* Trust Text */}
            <p className="mt-5 text-xs italic text-text-muted sm:text-sm">
              {trustText}
            </p>
          </div>

          {/* Soft shadow beneath tilted card */}
          <div 
            className="absolute -bottom-3 left-1/2 -z-10 h-8 w-[80%] -translate-x-1/2 rounded-full bg-black/10 blur-xl"
            style={{ transform: "translateX(-50%) rotate(-2deg)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default SampleNoticeSection;
