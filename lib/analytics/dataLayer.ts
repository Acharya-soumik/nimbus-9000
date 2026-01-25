/**
 * DataLayer Utility for Google Tag Manager
 * Optimized for performance with minimal overhead
 */

import { trackEvent, trackPageView as mixpanelTrackPageView, identifyUser, MP_EVENTS } from "@/lib/mixpanel";

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
  }
}

/**
 * Push event to GTM dataLayer
 * Only executes if dataLayer exists (no errors in dev)
 */
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

/**
 * Track page view with service type
 */
export const trackPageView = (pagePath: string, serviceType: string) => {
  pushToDataLayer({
    event: "page_view",
    page_path: pagePath,
    service_type: serviceType,
  });

  // Mixpanel Page View
  mixpanelTrackPageView("other", {
    path: pagePath,
    service_type: serviceType
  });

  // Also push to Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

/**
 * Track form start
 */
export const trackFormStart = (
  serviceType: string,
  formName: string
) => {
  pushToDataLayer({
    event: "form_start",
    service_type: serviceType,
    form_name: formName,
  });

  // Mixpanel
  trackEvent(MP_EVENTS.FORM_STARTED, {
    form_name: formName,
    service_type: serviceType
  });
};

/**
 * Track form step completion
 * Debounced to avoid excessive events
 */
let stepTimeout: NodeJS.Timeout;
export const trackFormStep = (
  serviceType: string,
  formName: string,
  step: number,
  stepName: string,
  userData?: {
    phone?: string;
    name?: string;
  }
) => {
  // Debounce to avoid rapid-fire events
  clearTimeout(stepTimeout);
  stepTimeout = setTimeout(() => {
    pushToDataLayer({
      event: "form_step",
      service_type: serviceType,
      form_name: formName,
      step_number: step,
      step_name: stepName,
    });

    // Mixpanel
    trackEvent(MP_EVENTS.FORM_STEP_COMPLETED, {
      form_name: formName,
      service_type: serviceType,
      step_number: step,
      step_name: stepName
    });

    // Meta Pixel with Dynamic Advanced Matching (Restored for Step 1)
    // Only fire if userData is provided (typically Step 1 completion)
    if (userData && typeof window !== "undefined" && window.fbq) {
      const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
      const advancedMatchingData: any = {};

      if (userData.phone) {
        const cleanPhone = userData.phone.replace(/[\s\-\+]/g, "");
        advancedMatchingData.ph = normalizeData(cleanPhone);
      }

      if (userData.name) {
        const nameParts = userData.name.trim().split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        if (firstName) {
          advancedMatchingData.fn = normalizeData(firstName);
        }
        if (lastName) {
          advancedMatchingData.ln = normalizeData(lastName);
        }
      }

      if (Object.keys(advancedMatchingData).length > 0 && pixelId) {
        window.fbq("init", pixelId, advancedMatchingData);
      }

      window.fbq("track", "Contact", {
        content_name: formName,
        content_category: serviceType,
        status: "step_completed",
        step_name: stepName
      });
    }
  }, 300); // Wait 300ms before firing
};

/**
 * Track form submission (Lead event)
 */
export const trackFormSubmission = (
  serviceType: string,
  formName: string,
  price?: number,
  userData?: {
    phone?: string;
    email?: string;
    name?: string;
    city?: string;
  }
) => {
  pushToDataLayer({
    event: "form_submit",
    service_type: serviceType,
    form_name: formName,
    value: price || 0,
    currency: "INR",
  });

  // Mixpanel
  trackEvent(MP_EVENTS.FORM_SUBMITTED, {
      form_name: formName,
      service_type: serviceType,
      value: price || 0,
      currency: "INR"
  });
  
  // Identify user if possible
  if (userData?.name || userData?.email || userData?.phone) {
      // Use phone or email as distinct_id if available, otherwise just set people properties causes alias/identity issues if not careful.
      // We will just set people properties for now without aliasing identity unless we have a persistent ID.
      // Usually identify is done on Login. Here it's a lead form. 
      // We can use alias, but let's stick to safe "people.set" or just track events with properties.
  }


  // Meta Pixel Lead event with Dynamic Advanced Matching
  if (typeof window !== "undefined" && window.fbq) {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

    // Build Advanced Matching data object
    const advancedMatchingData: any = {};

    if (userData?.phone) {
      const cleanPhone = userData.phone.replace(/[\s\-\+]/g, "");
      advancedMatchingData.ph = normalizeData(cleanPhone);
    }

    if (userData?.email) {
      advancedMatchingData.em = normalizeData(userData.email);
    }

    if (userData?.name) {
      const nameParts = userData.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      if (firstName) {
        advancedMatchingData.fn = normalizeData(firstName);
      }
      if (lastName) {
        advancedMatchingData.ln = normalizeData(lastName);
      }
    }

    if (userData?.city) {
      advancedMatchingData.ct = normalizeData(userData.city);
    }

    // Update init with user data (Dynamic Advanced Matching)
    // Meta will automatically SHA-256 hash this data
    if (Object.keys(advancedMatchingData).length > 0 && pixelId) {
      window.fbq("init", pixelId, advancedMatchingData);
    }

    // Track Lead event with value
    window.fbq("track", "Lead", {
      content_name: formName,
      content_category: serviceType,
      value: price || 0,
      currency: "INR",
    });
  }
};

/**
 * Track CTA/Button clicks
 */
export const trackCTAClick = (
  ctaText: string,
  serviceType: string,
  location: string,
  price?: number
) => {
  pushToDataLayer({
    event: "cta_click",
    cta_text: ctaText,
    service_type: serviceType,
    cta_location: location,
    value: price || 0,
    currency: "INR",
  });

  // Mixpanel
  trackEvent(MP_EVENTS.CTA_CLICKED, {
      cta_text: ctaText,
      service_type: serviceType,
      location: location,
      value: price
  });
};

/**
 * Normalize user data for Meta Advanced Matching
 * Meta will automatically SHA-256 hash this data on their servers
 * Following Meta's normalization rules: lowercase, trim whitespace, remove special chars
 *
 * @param data - User data to normalize
 * @returns Normalized data that Meta will hash
 */
function normalizeData(data: string): string {
  if (!data) return "";

  try {
    // Normalize according to Meta's requirements:
    // 1. Convert to lowercase
    // 2. Remove leading/trailing whitespace
    // 3. Remove special characters for phone numbers
    let normalized = data.toLowerCase().trim();

    // For phone numbers, remove all non-digit characters
    if (/^\+?\d/.test(data)) {
      normalized = normalized.replace(/\D/g, "");
    }

    return normalized;
  } catch (error) {
    console.error("Error normalizing data:", error);
    return data.toLowerCase().trim();
  }
}

