"use client";

import { useEffect } from "react";
import { initMixpanel, extractAndStoreUTMS } from "@/lib/mixpanel";

export default function MixpanelManager() {
  useEffect(() => {
    // Defer analytics initialization to browser idle time
    // This prevents blocking user interactions during page load
    const initAnalytics = () => {
      initMixpanel();
      extractAndStoreUTMS();
    };

    // Use requestIdleCallback if available, otherwise use setTimeout with delay
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(initAnalytics, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    } else {
      // Fallback for Safari and older browsers
      const timeoutId = setTimeout(initAnalytics, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return null;
}
