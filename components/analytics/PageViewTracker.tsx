"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics/dataLayer";

interface PageViewTrackerProps {
  serviceType: string;
}

/**
 * Tracks page views for specific service pages
 * Fires once on mount - zero performance overhead
 */
export function PageViewTracker({ serviceType }: PageViewTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view with service type
    trackPageView(pathname, serviceType);
  }, []); // Empty deps - only fires once on mount

  return null; // No UI - just tracking
}
