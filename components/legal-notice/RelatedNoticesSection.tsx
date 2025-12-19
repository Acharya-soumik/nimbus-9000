"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface RelatedNotice {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconType:
    | "rupee"
    | "cheque"
    | "tenant"
    | "builder"
    | "divorce"
    | "consumer"
    | "contract"
    | "salary";
  iconBgColor?: string;
  iconColor?: string;
}

export interface RelatedNoticesSectionProps {
  className?: string;
  currentSlug?: string;
  cluster?:
    | "money-recovery"
    | "family"
    | "tenant-property"
    | "builder-consumer";
  label?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  maxNotices?: number;
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
    </svg>
  );
}

function TenantIcon({ className }: { className?: string }) {
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
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BuilderIcon({ className }: { className?: string }) {
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
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  );
}

function DivorceIcon({ className }: { className?: string }) {
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
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ConsumerIcon({ className }: { className?: string }) {
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
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function ContractIcon({ className }: { className?: string }) {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function SalaryIcon({ className }: { className?: string }) {
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
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
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
  notice: RelatedNotice;
}

function NoticeCard({ notice }: NoticeCardProps) {
  const getIconAndColor = () => {
    const iconMap = {
      rupee: { Icon: RupeeIcon, bg: "bg-pink-100", text: "text-pink-600" },
      cheque: {
        Icon: ChequeIcon,
        bg: "bg-purple-100",
        text: "text-purple-600",
      },
      tenant: { Icon: TenantIcon, bg: "bg-blue-100", text: "text-blue-600" },
      builder: {
        Icon: BuilderIcon,
        bg: "bg-orange-100",
        text: "text-orange-600",
      },
      divorce: { Icon: DivorceIcon, bg: "bg-rose-100", text: "text-rose-600" },
      consumer: {
        Icon: ConsumerIcon,
        bg: "bg-green-100",
        text: "text-green-600",
      },
      contract: {
        Icon: ContractIcon,
        bg: "bg-indigo-100",
        text: "text-indigo-600",
      },
      salary: { Icon: SalaryIcon, bg: "bg-amber-100", text: "text-amber-600" },
    };

    const config = iconMap[notice.iconType] || iconMap.rupee;
    return {
      Icon: config.Icon,
      bg: notice.iconBgColor || config.bg,
      text: notice.iconColor || config.text,
    };
  };

  const { Icon, bg, text } = getIconAndColor();

  return (
    <Link
      href={`/${notice.slug}`}
      className={cn(
        "group flex w-full items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100/80",
        "transition-all duration-200 hover:shadow-md hover:ring-primary/20"
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex h-12 w-12 flex-0 items-center justify-center rounded-xl",
          bg
        )}
      >
        <Icon className={text} />
      </div>

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
      <div className="flex-0">
        <ArrowRightIcon className="text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </Link>
  );
}

/* =============================================================================
 * ALL NOTICES DATA
 * ============================================================================= */

const ALL_NOTICES: RelatedNotice[] = [
  {
    id: "money-recovery",
    slug: "legal-notice-for-money-recovery",
    title: "Money Recovery",
    description: "Recover unpaid dues, loans, or business payments legally.",
    iconType: "rupee",
  },
  {
    id: "cheque-bounce",
    slug: "cheque-bounce-legal-notice",
    title: "Cheque Bounce",
    description: "Legal action under Section 138 for dishonoured cheques.",
    iconType: "cheque",
  },
  {
    id: "outstanding-payment",
    slug: "legal-notice-for-outstanding-payment",
    title: "Outstanding Payment",
    description: "Recover unpaid invoices and business dues.",
    iconType: "rupee",
  },
  {
    id: "unpaid-salary",
    slug: "legal-notice-for-unpaid-salary",
    title: "Unpaid Salary",
    description: "Claim unpaid wages and employment dues.",
    iconType: "salary",
  },
  {
    id: "divorce",
    slug: "legal-notice-for-divorce",
    title: "Divorce Notice",
    description: "Legal notice for divorce proceedings in India.",
    iconType: "divorce",
  },
  {
    id: "maintenance",
    slug: "maintenance-legal-notice",
    title: "Maintenance Claim",
    description: "Claim maintenance for wife, children, or parents.",
    iconType: "divorce",
  },
  {
    id: "cruelty",
    slug: "legal-notice-for-cruelty-or-desertion",
    title: "Cruelty or Desertion",
    description: "Legal action for matrimonial cruelty or desertion.",
    iconType: "divorce",
  },
  {
    id: "tenant",
    slug: "legal-notice-to-tenant",
    title: "Tenant Notice",
    description: "Send legal notice to tenant for various disputes.",
    iconType: "tenant",
  },
  {
    id: "rent-arrears",
    slug: "legal-notice-for-rent-arrears",
    title: "Rent Arrears",
    description: "Recover unpaid rent from tenant.",
    iconType: "tenant",
  },
  {
    id: "eviction",
    slug: "eviction-legal-notice",
    title: "Eviction Notice",
    description: "Lawfully evict tenant from property.",
    iconType: "tenant",
  },
  {
    id: "builder",
    slug: "legal-notice-to-builder",
    title: "Builder Dispute",
    description: "Legal action for builder delay or default.",
    iconType: "builder",
  },
  {
    id: "property-possession",
    slug: "legal-notice-for-property-possession",
    title: "Property Possession",
    description: "Demand possession of property from builder.",
    iconType: "builder",
  },
  {
    id: "consumer-complaint",
    slug: "consumer-complaint-legal-notice",
    title: "Consumer Complaint",
    description: "File consumer complaint for defective products or services.",
    iconType: "consumer",
  },
];

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function RelatedNoticesSection({
  className,
  currentSlug,
  cluster,
  label = "EXPLORE OTHER NOTICES",
  title = "Related",
  titleHighlight = "Legal Notices",
  subtitle = "Need a different type of legal notice? We've got you covered.",
  maxNotices = 6,
}: RelatedNoticesSectionProps) {
  // Filter out current page and get related notices
  const getRelatedNotices = () => {
    let filtered = ALL_NOTICES.filter((notice) => notice.slug !== currentSlug);

    // If cluster is specified, prioritize notices from same cluster
    if (cluster) {
      const clusterNotices = filtered.filter((notice) => {
        if (cluster === "money-recovery") {
          return [
            "money-recovery",
            "cheque-bounce",
            "outstanding-payment",
            "unpaid-salary",
          ].includes(notice.id);
        }
        if (cluster === "family") {
          return ["divorce", "maintenance", "cruelty"].includes(notice.id);
        }
        if (cluster === "tenant-property") {
          return ["tenant", "rent-arrears", "eviction"].includes(notice.id);
        }
        if (cluster === "builder-consumer") {
          return [
            "builder",
            "property-possession",
            "consumer-complaint",
          ].includes(notice.id);
        }
        return false;
      });

      // Mix cluster notices with others
      const otherNotices = filtered.filter((n) => !clusterNotices.includes(n));
      filtered = [...clusterNotices, ...otherNotices];
    }

    return filtered.slice(0, maxNotices);
  };

  const relatedNotices = getRelatedNotices();

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-20",
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background-gray-light via-white to-background-gray-light" />

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
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
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Notice Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {relatedNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-10 text-center lg:mt-12">
          <Link
            href="/send-legal-notice"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white lg:px-8 lg:py-4 lg:text-lg"
          >
            View All Legal Notices
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RelatedNoticesSection;
