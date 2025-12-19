"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface ReadingProgressBarProps {
  /** Target element selector to track progress (default: article) */
  targetSelector?: string;
  /** Additional CSS classes */
  className?: string;
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

/**
 * ReadingProgressBar Component
 * Visual indicator of reading progress fixed at top of viewport
 */
export function ReadingProgressBar({
  targetSelector = "article",
  className,
}: ReadingProgressBarProps) {
  const [progress, setProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const calculateProgress = () => {
      const target = document.querySelector(targetSelector);
      
      if (!target) {
        setIsVisible(false);
        return;
      }

      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const targetHeight = target.scrollHeight;
      
      // Calculate how much of the article is above the viewport
      const scrolled = Math.max(0, -rect.top);
      const total = targetHeight - windowHeight;
      
      if (total <= 0) {
        setProgress(100);
        return;
      }

      const percentage = Math.min(100, Math.max(0, (scrolled / total) * 100));
      setProgress(percentage);
      
      // Only show progress bar when we've started reading
      setIsVisible(scrolled > 50);
    };

    calculateProgress(); // Initial calculation
    
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [targetSelector]);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 h-1 bg-border transition-opacity duration-200",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-primary transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ReadingProgressBar;






