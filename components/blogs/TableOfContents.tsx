"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface TableOfContentsProps {
  /** HTML content to parse for headings */
  content: string;
  /** Maximum heading depth (default: 3 for H2, H3) */
  maxDepth?: number;
  /** Make TOC sticky */
  sticky?: boolean;
  /** Start collapsed */
  collapsed?: boolean;
  /** Title for the TOC */
  title?: string;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ListIcon({ className }: { className?: string }) {
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
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
}

/* =============================================================================
 * PARSE HEADINGS FROM HTML
 * ============================================================================= */

function parseHeadings(html: string, maxDepth: number): TOCItem[] {
  const items: TOCItem[] = [];
  
  // Regex to match h2 and h3 tags with their content and id
  const headingRegex = /<h([2-3])(?:[^>]*id="([^"]*)")?[^>]*>([^<]+)<\/h[2-3]>/gi;
  
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    if (level <= maxDepth) {
      const text = match[3].trim();
      // Generate ID from text if not present
      const id = match[2] || text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      
      items.push({ id, text, level });
    }
  }
  
  return items;
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * TableOfContents Component
 * Auto-generated table of contents from HTML content
 */
export function TableOfContents({
  content,
  maxDepth = 3,
  sticky = false,
  collapsed: initialCollapsed = false,
  title = "Table of Contents",
  className,
}: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(initialCollapsed);
  const [activeId, setActiveId] = React.useState<string>("");
  
  // Parse headings from content
  const items = React.useMemo(
    () => parseHeadings(content, maxDepth),
    [content, maxDepth]
  );

  // Track scroll position to highlight active section
  React.useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const headingElements = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      // Find the heading that's currently in view
      let currentId = items[0]?.id || "";
      
      for (const element of headingElements) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120) {
          currentId = element.id;
        }
      }

      setActiveId(currentId);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  // Handle click on TOC item
  const handleItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn(
        "rounded-xl bg-white p-4 shadow-xs lg:p-5",
        sticky && "lg:sticky lg:top-24",
        className
      )}
      aria-label="Table of contents"
    >
      {/* Header */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={!isCollapsed}
      >
        <div className="flex items-center gap-2">
          <ListIcon className="text-text-muted" />
          <span className="text-sm font-semibold text-text-heading">
            {title}
          </span>
        </div>
        <ChevronDownIcon
          className={cn(
            "text-text-muted transition-transform",
            isCollapsed && "-rotate-90"
          )}
        />
      </button>

      {/* Items */}
      {!isCollapsed && (
        <ul className="mt-4 space-y-1">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
            >
              <button
                onClick={() => handleItemClick(item.id)}
                className={cn(
                  "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  "hover:bg-background-gray-light",
                  activeId === item.id
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-text-medium"
                )}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default TableOfContents;





