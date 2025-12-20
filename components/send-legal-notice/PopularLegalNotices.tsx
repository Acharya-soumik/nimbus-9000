"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface NoticeType {
  /** Unique identifier */
  id: string;
  /** Notice title */
  title: string;
  /** Short description */
  description: string;
  /** Icon type */
  iconType: "rupee" | "loan" | "cheque" | "custom";
  /** Custom icon element if iconType is "custom" */
  customIcon?: React.ReactNode;
  /** Background color class for the icon container */
  iconBgColor?: string;
  /** Icon color class */
  iconColor?: string;
  /** Click handler */
  onClick?: () => void;
  /** Link href */
  href?: string;
}

export interface PopularLegalNoticesProps {
  className?: string;
  /** Section label/eyebrow text */
  label?: string;
  /** Main title */
  title?: string;
  /** Highlighted text in title (will be styled differently) */
  titleHighlight?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** List of notice types to display */
  notices?: NoticeType[];
  /** Callback when a notice card is clicked */
  onNoticeClick?: (noticeId: string) => void;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function RupeeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="M6 13l8.5 8" />
      <path d="M6 13h3c3.5 0 6-2.5 6-5H6" />
    </svg>
  );
}

function LoanIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function ChequeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="16" y2="14" />
      <path d="M9 9l-2 2 2 2" strokeWidth="1.5" />
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* =============================================================================
 * NOTICE CARD COMPONENT
 * ============================================================================= */

interface NoticeCardProps {
  notice: NoticeType;
  onClick?: () => void;
}

function NoticeCard({ notice, onClick }: NoticeCardProps) {
  const getIcon = () => {
    const iconColors: Record<string, { bg: string; text: string }> = {
      rupee: { bg: "bg-pink-100", text: "text-pink-600" },
      loan: { bg: "bg-orange-100", text: "text-orange-600" },
      cheque: { bg: "bg-purple-100", text: "text-purple-600" },
      custom: { bg: notice.iconBgColor || "bg-gray-100", text: notice.iconColor || "text-gray-600" },
    };

    const colors = iconColors[notice.iconType] || iconColors.custom;

    const IconComponent = () => {
      switch (notice.iconType) {
        case "rupee":
          return <RupeeIcon className={colors.text} />;
        case "loan":
          return <LoanIcon className={colors.text} />;
        case "cheque":
          return <ChequeIcon className={colors.text} />;
        case "custom":
          return notice.customIcon || null;
        default:
          return null;
      }
    };

    return (
      <div
        className={cn(
          "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
          colors.bg
        )}
      >
        <IconComponent />
      </div>
    );
  };

  const CardWrapper = notice.href ? "a" : "button";
  const cardProps = notice.href
    ? { href: notice.href }
    : { type: "button" as const, onClick: onClick || notice.onClick };

  return (
    <CardWrapper
      {...cardProps}
      className={cn(
        "group flex w-full items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100/80",
        "transition-all duration-200 hover:shadow-md hover:ring-primary/20",
        "text-left"
      )}
    >
      {/* Icon */}
      {getIcon()}

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-sans text-base font-bold text-text-heading sm:text-lg">
          {notice.title}
        </h3>
        <p className="mt-0.5 text-sm text-text-muted line-clamp-2">
          {notice.description}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        <ArrowRightIcon className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </CardWrapper>
  );
}

/* =============================================================================
 * DEFAULT NOTICES DATA
 * ============================================================================= */

const defaultNotices: NoticeType[] = [
  {
    id: "recovery-of-money",
    title: "Recovery of Money",
    description: "Recover pending dues, salary, or payments legally.",
    iconType: "rupee",
  },
  {
    id: "loan-repayment",
    title: "Loan Repayment",
    description: "Demand repayment for personal or business loans.",
    iconType: "loan",
  },
  {
    id: "dishonoured-cheque",
    title: "Dishonoured Cheque",
    description: "Legal action under Section 138 of NI Act.",
    iconType: "cheque",
  },
];

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function PopularLegalNotices({
  className,
  label = "LEGAL SOLUTIONS",
  title = "Popular",
  titleHighlight = "Legal Notices",
  subtitle = "Expertly drafted legal notices for the most common disputes.",
  notices = defaultNotices,
  onNoticeClick,
}: PopularLegalNoticesProps) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredNotices = React.useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return notices.slice(0, 6);
    return notices.filter(
      (notice) =>
        notice.title.toLowerCase().includes(query) ||
        notice.description.toLowerCase().includes(query)
    );
  }, [notices, searchQuery]);

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-20",
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background-gray-light via-white to-background-gray-light" />

      <div className="mx-auto max-w-xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Eyebrow Label */}
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            {label}
          </span>

          {/* Title with gradient highlight */}
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-warning-bright via-warning to-warning-coral bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base text-text-medium lg:text-lg">{subtitle}</p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-10 max-w-md">
          <Input
            type="search"
            placeholder="Search for a legal notice (e.g., Divorce, Cheque Bounce)..."
            className="h-12 w-full rounded-xl border-gray-200 bg-white px-4 text-base shadow-sm ring-1 ring-gray-100 placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 sm:text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Notice Cards */}
        {filteredNotices.length > 0 ? (
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                onClick={() => onNoticeClick?.(notice.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-3xl">
              🔍
            </div>
            <h3 className="text-lg font-medium text-text-heading">
              No legal notices found
            </h3>
            <p className="mt-1 text-text-medium">
              Try searching for something else or browse our full list.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularLegalNotices;








