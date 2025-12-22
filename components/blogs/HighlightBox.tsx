"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export type HighlightBoxType =
  | "fact"
  | "tip"
  | "warning"
  | "key-takeaway"
  | "legal-insight";

export interface HighlightBoxProps {
  /** Type of highlight box determining styling */
  type: HighlightBoxType;
  /** Custom icon (overrides default) */
  icon?: React.ReactNode;
  /** Custom title (overrides default) */
  title?: string;
  /** Content to display */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * DEFAULT ICONS
 * ============================================================================= */

function LightbulbIcon({ className }: { className?: string }) {
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
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
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
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
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
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

function ScaleIcon({ className }: { className?: string }) {
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
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    </svg>
  );
}

/* =============================================================================
 * TYPE CONFIGURATIONS
 * ============================================================================= */

const typeConfig: Record<
  HighlightBoxType,
  {
    defaultTitle: string;
    icon: React.ReactNode;
    bgClass: string;
    borderClass: string;
    iconColorClass: string;
    titleColorClass: string;
  }
> = {
  fact: {
    defaultTitle: "Did You Know?",
    icon: <LightbulbIcon />,
    bgClass: "bg-warning-yellow/10",
    borderClass: "border-l-warning-yellow",
    iconColorClass: "text-warning-yellow",
    titleColorClass: "text-warning-dark",
  },
  tip: {
    defaultTitle: "Pro Tip",
    icon: <InfoIcon />,
    bgClass: "bg-info/10",
    borderClass: "border-l-info",
    iconColorClass: "text-info",
    titleColorClass: "text-info",
  },
  warning: {
    defaultTitle: "Important",
    icon: <WarningIcon />,
    bgClass: "bg-warning/10",
    borderClass: "border-l-warning",
    iconColorClass: "text-warning",
    titleColorClass: "text-warning-dark",
  },
  "key-takeaway": {
    defaultTitle: "Key Takeaway",
    icon: <StarIcon />,
    bgClass: "bg-success-light",
    borderClass: "border-l-success",
    iconColorClass: "text-success",
    titleColorClass: "text-success-dark",
  },
  "legal-insight": {
    defaultTitle: "Legal Insight",
    icon: <ScaleIcon />,
    bgClass: "bg-primary/10",
    borderClass: "border-l-primary",
    iconColorClass: "text-primary",
    titleColorClass: "text-primary",
  },
};

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * HighlightBox Component
 * Callout boxes for facts, tips, warnings, key takeaways, and legal insights
 */
export function HighlightBox({
  type,
  icon,
  title,
  children,
  className,
}: HighlightBoxProps) {
  const config = typeConfig[type];

  return (
    <aside
      className={cn(
        "my-6 rounded-xl border-l-4 p-5 lg:my-8 lg:p-6",
        config.bgClass,
        config.borderClass,
        className
      )}
      role="note"
      aria-label={title || config.defaultTitle}
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <span className={config.iconColorClass}>
          {icon || config.icon}
        </span>
        <h4
          className={cn(
            "text-sm font-bold uppercase tracking-wide",
            config.titleColorClass
          )}
        >
          {title || config.defaultTitle}
        </h4>
      </div>

      {/* Content */}
      <div className="text-base text-text-body leading-relaxed">
        {children}
      </div>
    </aside>
  );
}

export default HighlightBox;









