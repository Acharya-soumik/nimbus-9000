"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface StickyCTABarProps {
  price?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showAfterScroll?: number;
  hideOnFormVisible?: boolean;
  formSectionId?: string;
  className?: string;
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function StickyCTABar({
  price = "From ₹299",
  ctaText = "Book Now",
  onCtaClick,
  showAfterScroll = 500,
  hideOnFormVisible = true,
  formSectionId = "consultation-form",
  className,
}: StickyCTABarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormInView, setIsFormInView] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Skip if RAF already scheduled
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Only update state if scroll position changed significantly (5px threshold)
        if (Math.abs(scrollY - lastScrollY) > 5) {
          lastScrollY = scrollY;
          setIsVisible(scrollY > showAfterScroll);

          // Check if form section is in viewport
          if (hideOnFormVisible && formSectionId) {
            const formSection = document.getElementById(formSectionId);
            if (formSection) {
              const rect = formSection.getBoundingClientRect();
              const isInView = rect.top < window.innerHeight && rect.bottom > 0;
              setIsFormInView(isInView);
            }
          }
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [showAfterScroll, hideOnFormVisible, formSectionId]);

  // Don't render on desktop (lg breakpoint and above)
  // This is handled via CSS, but we also check here for SSR
  const shouldShow = isVisible && (!hideOnFormVisible || !isFormInView);

  return (
    <div
      className={cn(
        // Base styles
        "fixed bottom-0 left-0 right-0 z-50 will-change-transform",
        "bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]",
        "px-4 py-3 safe-area-inset-bottom",
        // Only show on mobile/tablet
        "lg:hidden",
        // Animation
        "transition-transform duration-300 ease-out",
        shouldShow ? "translate-y-0" : "translate-y-full",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Price */}
        <div className="flex flex-col">
          <span className="text-xs text-text-muted">Starting at</span>
          <span className="text-lg font-bold text-text-heading">{price}</span>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onCtaClick}
          className={cn(
            "flex items-center gap-2 rounded-xl bg-primary px-6 py-3",
            "text-sm font-semibold text-white",
            "transition-all duration-200 hover:bg-primary-coral active:scale-95"
          )}
        >
          {ctaText}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default StickyCTABar;
