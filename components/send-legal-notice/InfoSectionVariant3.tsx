"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MeshGradient } from "@paper-design/shaders-react";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BenefitItemProps {
  text: string;
  highlight?: string;
}

export interface InfoSectionVariant3Props {
  className?: string;
  refCode?: string;
  watermark?: string;
  title?: string;
  titleHighlight?: string;
  subject?: string;
  description?: string;
  highlightedWord?: string;
  statisticalInsight?: {
    percentage: string;
    text: string;
  };
  sectionNumber?: string;
  sectionTitle?: string;
  benefits?: BenefitItemProps[];
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function CheckBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* =============================================================================
 * HELPER FUNCTION
 * ============================================================================= */

function renderDescriptionWithHighlight(
  description: string,
  highlightedWord?: string
) {
  if (!highlightedWord) {
    return description;
  }

  const parts = description.split(new RegExp(`(${highlightedWord})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlightedWord?.toLowerCase() ? (
      <span
        key={index}
        className="rounded bg-warning-yellow/40 px-1 py-0.5 font-medium"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function InfoSectionVariant3({
  className,
  refCode = "VN-2024-GDPR",
  watermark = "VD",
  title = "LEGAL NOTICE",
  titleHighlight = "Essentials",
  subject = "Formal Intimation of Legal Intent.",
  description = "Sending a legal notice is the first step in any legal battle. It formally conveys your grievance.",
  highlightedWord = "first step",
  statisticalInsight = {
    percentage: "70%",
    text: "of cases, disputes are settled immediately after receiving a notice, avoiding expensive litigation.",
  },
  sectionNumber = "01",
  sectionTitle = "Key Benefits",
  benefits = [
    { text: "Creates official", highlight: "proof of demand" },
    { text: "Clearly states your grievance and intent." },
    { text: "Mandatory for Section 138 cases." },
  ],
}: InfoSectionVariant3Props) {
  const [dimensions, setDimensions] = React.useState({
    width: 800,
    height: 1000,
  });
  const [mounted, setMounted] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: width || 800, height: height || 1000 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative h-full overflow-hidden rounded-3xl bg-white/60 shadow shadow-primary",
        className
      )}
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* {mounted ? (
          <MeshGradient
            width={dimensions.width}
            height={dimensions.height}
            colors={[
              "#FFD6A0", // Light peach
              "#FFBE7D", // Warm peach
              "#FFA860", // Rich orange
              "#FF9D52", // Deep orange
              "#FFB070", // Soft coral
              "#FF8A4C", // Vibrant coral
            ]}
            speed={1}
            distortion={0.8}
            swirl={1}
            grainMixer={0}
            grainOverlay={0.5}
            offsetX={0.2}
            offsetY={0.1}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #FFD6A0 0%, #FFBE7D 25%, #FFA860 50%, #FF9D52 75%, #FFB070 100%)",
            }}
          />
        )} */}
      </div>

      {/* Watermark */}
      {watermark && (
        <div className="absolute right-8 top-8 text-6xl font-bold text-black/20 select-none md:text-7xl lg:right-12 lg:top-12 lg:text-8xl">
          {watermark}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        {/* Reference Badge */}
        <div className="mb-6 inline-flex items-center rounded-full bg-white px-4 py-2 shadow-sm lg:mb-8 lg:px-5 lg:py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-body lg:text-sm">
            REF: {refCode}
          </span>
        </div>

        {/* Title */}
        <div className="mb-4 lg:mb-6">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-text-heading sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="font-serif text-xl italic text-primary sm:text-2xl lg:text-3xl">
            {titleHighlight}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-6 h-0.5 w-16 bg-text-heading/30 lg:mb-8 lg:w-20" />

        {/* Subject */}
        <div className="mb-4 lg:mb-6">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-text-heading lg:text-sm">
            SUBJECT:
          </span>
          <span className="ml-2 font-mono text-sm text-text-body lg:text-base">
            {subject}
          </span>
        </div>

        {/* Description */}
        <p className="mb-8 font-mono text-sm leading-relaxed text-text-body sm:text-base lg:mb-10 lg:text-lg">
          {renderDescriptionWithHighlight(description, highlightedWord)}
        </p>

        {/* Statistical Insight Card */}
        {statisticalInsight && (
          <div className="mb-6 rounded-2xl border-l-4 border-primary bg-white p-5 shadow-sm lg:mb-8 lg:p-6">
            <div className="flex gap-4 lg:gap-5">
              <div className="mt-0.5 shrink-0">
                <CheckBadgeIcon className="h-6 w-6 text-primary lg:h-7 lg:w-7" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted lg:mb-2.5 lg:text-sm">
                  STATISTICAL INSIGHT
                </p>
                <p className="text-sm italic leading-relaxed text-text-medium lg:text-base">
                  "In{" "}
                  <span className="font-semibold not-italic text-primary">
                    {statisticalInsight.percentage}
                  </span>{" "}
                  {statisticalInsight.text}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Key Benefits Section */}
        <div className="rounded-2xl bg-white p-5 shadow-sm lg:p-6">
          {/* Section Header */}
          <div className="mb-4 flex items-center justify-between lg:mb-5">
            <div className="flex items-center gap-3 lg:gap-4">
              <span className="text-sm font-medium text-text-muted lg:text-base">
                {sectionNumber}
              </span>
              <h3 className="font-semibold text-text-heading lg:text-lg">
                {sectionTitle}
              </h3>
            </div>
            <svg
              className="h-5 w-5 rotate-180 text-text-muted lg:h-6 lg:w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Benefits List */}
          <ul className="space-y-3 lg:space-y-3.5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 lg:gap-4">
                <span className="mt-2 text-xs text-text-muted">○</span>
                <span className="text-sm leading-relaxed text-text-medium lg:text-base">
                  {benefit.highlight ? (
                    <>
                      {benefit.text}{" "}
                      <strong className="font-semibold text-text-heading">
                        {benefit.highlight}
                      </strong>
                      .
                    </>
                  ) : (
                    benefit.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default InfoSectionVariant3;
