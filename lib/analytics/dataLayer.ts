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
export const trackFormStart = (serviceType: string, formName: string) => {
  pushToDataLayer({
    event: "form_start",
    service_type: serviceType,
    form_name: formName,
  });

  // Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: formName,
      content_category: serviceType,
    });
  }
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
  stepName: string
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
  }
) => {
  pushToDataLayer({
    event: "form_submit",
    service_type: serviceType,
    form_name: formName,
    value: price || 0,
    currency: "INR",
  });

  // Meta Pixel Lead event with enhanced matching
  if (typeof window !== "undefined" && window.fbq) {
    const eventData: any = {
      content_name: formName,
      content_category: serviceType,
      value: price || 0,
      currency: "INR",
    };

    // Add hashed user data for CAPI matching
    if (userData?.phone) {
      eventData.phone = hashData(userData.phone);
    }
    if (userData?.email) {
      eventData.email = hashData(userData.email);
    }

    window.fbq("track", "Lead", eventData);
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
 * Simple hash function for user data (for Meta CAPI)
 * Uses SHA-256 via Web Crypto API
 */
async function hashData(data: string): Promise<string> {
  if (!data) return "";

  try {
    // Normalize data
    const normalized = data.toLowerCase().trim();

    // Use Web Crypto API for hashing
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(normalized);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

    return hashHex;
  } catch (error) {
    console.error("Error hashing data:", error);
    return "";
  }
}
