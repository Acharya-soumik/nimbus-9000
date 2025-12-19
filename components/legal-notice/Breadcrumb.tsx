"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/* =============================================================================
 * ICONS
 * ============================================================================= */

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
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

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        "mb-4 flex items-center gap-2 text-sm text-text-muted lg:mb-6 bg-transparent",
        className
      )}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isFirst = index === 0;

          return (
            <li key={index} className="flex items-center gap-2">
              {/* Show separator except for first item */}
              {!isFirst && <ChevronRightIcon className="text-text-muted/50" />}

              {/* Breadcrumb Item */}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 transition-colors hover:text-text-body"
                >
                  {isFirst && <HomeIcon />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  className={cn(
                    "flex items-center gap-1",
                    isLast ? "font-medium text-text-body" : ""
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {isFirst && <HomeIcon />}
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
