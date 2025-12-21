/**
 * DataLayer Utility for Google Tag Manager
 * Optimized for performance with minimal overhead
 */

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
