"use client";

import React from "react";
import { Timeline } from "@/components/aceternity/timeline";
import { colors } from "@/lib/design-system/theme";
import Image from "next/image";

/**
 * Timeline step data structure
 */
export interface TimelineStep {
  /** The title of the timeline step */
  title: string;
  /** The description of the timeline step */
  description: string;
  /** Optional icon or image path */
  icon?: string;
}

/**
 * Props for HowWeWorkTimeline component
 */
export interface HowWeWorkTimelineProps {
  /** Main heading for the timeline section */
  heading?: string;
  /** Subtitle/tagline for the timeline section */
  subtitle?: string;
  /** Array of timeline steps to display */
  steps?: TimelineStep[];
  /** Optional custom className for the container */
  className?: string;
}

/**
 * Default timeline steps for Legal Notice service
 */
const defaultSteps: TimelineStep[] = [
  {
    title: "Case Review",
    description:
      "Share your details and documents. A licensed lawyer reviews your case and calls you for consultation.",
    icon: "/assets/common/fill-form.png",
  },
  {
    title: "Drafting",
    description:
      "A custom legal notice is drafted based on your facts. You review and approve before anything is sent.",
    icon: "/assets/common/consut-lawyer.png",
  },
  {
    title: "Dispatch",
    description:
      "The notice is sent via Speed Post. You receive delivery proof and scanned copies.",
    icon: "/assets/common/registered-post.png",
  },
];

/**
 * Custom Timeline Step Component with content
 */
const TimelineStepContent = ({
  step,
  index,
}: {
  step: TimelineStep;
  index: number;
}) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Icon if provided */}
      {step.icon && (
        <div className="mb-4">
          <Image
            src={step.icon}
            alt={step.title}
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
            width={100}
            height={100}
          />
        </div>
      )}

      {/* Description */}
      <p
        className="text-base md:text-lg leading-relaxed max-w-xl"
        style={{
          color: `var(--color-text-label, ${colors.text.label})`,
        }}
      >
        {step.description}
      </p>
    </div>
  );
};

/**
 * How We Work Timeline Component
 *
 * A reusable timeline component that displays the workflow process
 * with numbered steps, icons, and descriptions.
 *
 * @example
 * ```tsx
 * <HowWeWorkTimeline
 *   heading="How We Work"
 *   subtitle="SIMPLE & EFFECTIVE"
 *   steps={customSteps}
 * />
 * ```
 */
export const HowWeWorkTimeline: React.FC<HowWeWorkTimelineProps> = ({
  heading = "How We Work",
  subtitle = "SIMPLE & EFFECTIVE",
  steps = defaultSteps,
  className = "",
}) => {
  // Transform steps into Timeline component format
  const timelineData = steps.map((step, index) => ({
    title: step.title,
    content: <TimelineStepContent step={step} index={index} />,
  }));

  return (
    <section className={`relative bg-white py-12 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{
              color: `var(--color-text-heading, ${colors.text.heading})`,
            }}
          >
            {heading}
          </h2>
          <p
            className="text-sm md:text-base tracking-widest uppercase"
            style={{
              color: `var(--color-text-muted, ${colors.text.muted})`,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Custom styled Timeline */}
        <div className="how-we-work-timeline">
          <Timeline
            data={timelineData}
            showHeader={false}
            showBackground={false}
          />
        </div>
      </div>

      {/* Custom styles for timeline customization */}
      <style jsx global>{`
        /* Style the numbered circles on the left */
        .how-we-work-timeline .h-10.absolute {
          width: 3.5rem !important;
          height: 3.5rem !important;
          background: ${colors.primary.DEFAULT} !important;
          left: 0.75rem !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        .how-we-work-timeline .h-4.w-4 {
          width: 100% !important;
          height: 100% !important;
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: white !important;
          font-weight: bold !important;
          font-size: 1.5rem !important;
        }

        /* Add numbers to the circles */
        .how-we-work-timeline
          .flex.justify-start:nth-child(1)
          .h-4.w-4::before {
          content: "1";
        }
        .how-we-work-timeline
          .flex.justify-start:nth-child(2)
          .h-4.w-4::before {
          content: "2";
        }
        .how-we-work-timeline
          .flex.justify-start:nth-child(3)
          .h-4.w-4::before {
          content: "3";
        }
        .how-we-work-timeline
          .flex.justify-start:nth-child(4)
          .h-4.w-4::before {
          content: "4";
        }
        .how-we-work-timeline
          .flex.justify-start:nth-child(5)
          .h-4.w-4::before {
          content: "5";
        }
        .how-we-work-timeline
          .flex.justify-start:nth-child(6)
          .h-4.w-4::before {
          content: "6";
        }

        /* Style the title text to be bold and dark */
        .how-we-work-timeline .text-xl.md\\:pl-20,
        .how-we-work-timeline .text-xl.md\\:text-5xl {
          color: ${colors.text.heading} !important;
          font-weight: bold !important;
          font-size: 1.875rem !important;
        }

        /* Desktop title adjustments */
        @media (min-width: 768px) {
          .how-we-work-timeline .text-xl.md\\:text-5xl {
            font-size: 2.25rem !important;
          }
        }

        /* Hide the default mobile title from timeline component */
        .how-we-work-timeline .md\\:hidden.block.text-2xl {
          display: none !important;
        }

        /* Adjust spacing between timeline items */
        .how-we-work-timeline .flex.justify-start {
          padding-top: 2rem !important;
        }

        .how-we-work-timeline .flex.justify-start:first-child {
          padding-top: 0 !important;
        }

        /* Adjust timeline line color to match brand */
        .how-we-work-timeline .absolute.md\\:left-8 {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            ${colors.border.DEFAULT} 10%,
            ${colors.border.DEFAULT} 90%,
            transparent 100%
          ) !important;
        }

        /* Adjust progress line gradient */
        .how-we-work-timeline .bg-gradient-to-t {
          background: linear-gradient(
            to top,
            ${colors.primary.DEFAULT} 0%,
            ${colors.primary.coral} 50%,
            transparent 100%
          ) !important;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .how-we-work-timeline .h-10.absolute {
            left: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkTimeline;
