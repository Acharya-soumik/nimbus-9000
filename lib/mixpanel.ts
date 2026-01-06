
import mixpanel, { Dict } from "mixpanel-browser";

// Mixpanel Project Token
const MIXPANEL_TOKEN = "efa40c452a5bf0887f7169882a2d8c46";

export const mixpanelConfig = {
  token: MIXPANEL_TOKEN,
  config: {
    debug: process.env.NODE_ENV !== "production",
    autocapture: false, // Explicit tracking only as requested
    ignore_dnt: true,
    persistence: "localStorage" as const,
  },
};

export type MixpanelEventProps = Record<string, any>;

// Events List
export const MP_EVENTS = {
  LANDING_PAGE_VIEWED: "Landing Page Viewed",
  PRICING_SECTION_VIEWED: "Pricing Section Viewed",
  CHECKOUT_STARTED: "Checkout Started",
  PAYMENT_INITIATED: "Payment Initiated",
  PAYMENT_SUCCESS: "Payment Success",
  PAYMENT_FAILED: "Payment Failed",
  SAMPLE_NOTICE_VIEWED: "Sample Notice Viewed",
  STRENGTH_CHECKER_STARTED: "Strength Checker Started",
  STRENGTH_CHECKER_COMPLETED: "Strength Checker Completed",
  STRENGTH_CHECKER_RESULT_VIEWED: "Strength Checker Result Viewed",
};

/**
 * Enhanced track helper with safety checks and UTM support
 */
export const trackEvent = (eventName: string, props: MixpanelEventProps = {}) => {
  if (typeof window === "undefined") return;

  try {
    // Add common properties if needed
    mixpanel.track(eventName, props);
  } catch (error) {
    console.error("Mixpanel track error:", error);
  }
};

/**
 * Identify user when they provide email/phone
 */
export const identifyUser = (userId: string, traits: MixpanelEventProps = {}) => {
  if (typeof window === "undefined") return;

  try {
    mixpanel.identify(userId);
    if (Object.keys(traits).length > 0) {
      mixpanel.people.set(traits);
    }
  } catch (error) {
    console.error("Mixpanel identify error:", error);
  }
};

/**
 * Handle user alias (e.g. on sign up)
 */
export const aliasUser = (alias: string) => {
    if (typeof window === "undefined") return;
    try {
        mixpanel.alias(alias);
    } catch (error) {
        console.error("Mixpanel alias error:", error);
    }
}


export const resetUser = () => {
  if (typeof window === "undefined") return;
  
  try {
    mixpanel.reset();
  } catch (error) {
    console.error("Mixpanel reset error:", error);
  }
};

export const trackPageView = (pageName: string, props: MixpanelEventProps = {}) => {
    trackEvent("Page Viewed", {
        page_name: pageName,
        url: window.location.href,
        ...props
    });
};

/**
 * Specialized helper for Landing Page Views
 */
export const trackLandingPageView = (
  serviceType: string, 
  noticeType?: string, 
  additionalProps: MixpanelEventProps = {}
) => {
    trackEvent(MP_EVENTS.LANDING_PAGE_VIEWED, {
        page_path: typeof window !== 'undefined' ? window.location.pathname : '',
        service_type: serviceType,
        notice_type: noticeType,
        ...additionalProps
    });
}

/**
 * Extract UTMs and GCLID from URL and register them as super properties
 * This ensures they are attached to all future events in the session
 */
export const extractAndStoreUTMS = () => {
    if (typeof window === "undefined") return;
    
    try {
        const query = new URLSearchParams(window.location.search);
        const utmParams: Dict = {};
        
        const keys = [
            'utm_source', 
            'utm_medium', 
            'utm_campaign', 
            'utm_term', 
            'utm_content', 
            'gclid'
        ];

        let foundCampaiginData = false;

        keys.forEach(key => {
            const value = query.get(key);
            if (value) {
                utmParams[key] = value;
                foundCampaiginData = true;
            }
        });

        if (foundCampaiginData) {
            // Register once ensures that original source is kept until explicitly overwritten 
            // useful for first-touch attribution
            mixpanel.register_once(utmParams);
            
            // Also register as super properties for this session immediately
            mixpanel.register(utmParams);
        }
    } catch (e) {
        console.error("Error extracting UTMs", e);
    }
}


// Initialize helper (safe to call multiple times, though mixpanel-browser handles it)
export const initMixpanel = () => {
  if (typeof window === "undefined") return;
  mixpanel.init(MIXPANEL_TOKEN, mixpanelConfig.config);
};
