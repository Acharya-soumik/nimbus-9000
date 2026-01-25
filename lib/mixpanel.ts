
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

// Events List - REDEFINED AS PER BLUEPRINT
export const MP_EVENTS = {
  // Awareness
  PAGE_VIEWED: "Page Viewed",
  
  // Interest
  CTA_CLICKED: "CTA Clicked",
  PRICING_SECTION_VIEWED: "Pricing Section Viewed",
  SAMPLE_NOTICE_VIEWED: "Sample Notice Viewed",
  STRENGTH_CHECKER_STARTED: "Strength Checker Started",
  STRENGTH_CHECKER_COMPLETED: "Strength Checker Completed",
  
  // Trust
  LAWYER_PROFILE_VIEWED: "Lawyer Profile Viewed",
  TESTIMONIALS_VIEWED: "Testimonials Viewed",
  REFUND_POLICY_VIEWED: "Refund Policy Viewed",

  // Intent
  FORM_STARTED: "Form Started",
  FORM_STEP_COMPLETED: "Form Step Completed",
  FORM_SUBMITTED: "Form Submitted",
  LEAD_CREATED: "Lead Created",

  // Purchase
  CHECKOUT_STARTED: "Checkout Started",
  PAYMENT_COMPLETED: "Payment Completed",
  PAYMENT_FAILED: "Payment Failed",
};

/**
 * Enhanced track helper with safety checks
 */
export const trackEvent = (eventName: string, props: MixpanelEventProps = {}) => {
  if (typeof window === "undefined") return;

  try {
    mixpanel.track(eventName, props);
  } catch (error) {
    console.error("Mixpanel track error:", error);
  }
};

/**
 * Identify user when they provide email/phone (Lead Created)
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
 * Handle user alias (e.g. on sign up test)
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

// ------------------------------------------------------------------
// PART 1: Page View Consolidation
// ------------------------------------------------------------------
export const trackPageView = (
  pageType: "landing" | "pricing" | "form" | "checkout" | "other",
  additionalProps: MixpanelEventProps = {}
) => {
    trackEvent(MP_EVENTS.PAGE_VIEWED, {
        page_type: pageType,
        page_url: typeof window !== 'undefined' ? window.location.pathname : '',
        ...additionalProps
    });
};

/**
 * Legacy helper wrapper for backwards compatibility
 * TODO: Replace usages with trackPageView
 */
export const trackLandingPageView = (
  serviceType: string, 
  noticeType?: string, 
  additionalProps: MixpanelEventProps = {}
) => {
    trackPageView("landing", {
        service_type: serviceType,
        notice_type: noticeType,
        ...additionalProps
    });
}

// ------------------------------------------------------------------
// PART 2: Payment Events
// ------------------------------------------------------------------
export const trackPaymentCompleted = (props: {
    amount: number;
    currency: string;
    product: string;
    payment_method: string;
    [key: string]: any;
}) => {
    trackEvent(MP_EVENTS.PAYMENT_COMPLETED, props);
};

export const trackPaymentFailed = (props: {
    reason: string;
    amount?: number;
    [key: string]: any;
}) => {
    trackEvent(MP_EVENTS.PAYMENT_FAILED, props);
};

// ------------------------------------------------------------------
// PART 3: Form Tracking
// ------------------------------------------------------------------
export const trackFormStep = (stepName: string, stepNumber: number, props: MixpanelEventProps = {}) => {
    trackEvent(MP_EVENTS.FORM_STEP_COMPLETED, {
        step_name: stepName,
        step_number: stepNumber,
        ...props
    });
};

export const trackFormSubmitted = (props: MixpanelEventProps = {}) => {
    trackEvent(MP_EVENTS.FORM_SUBMITTED, props);
};

// ------------------------------------------------------------------
// PART 4: CTA & Trust Signals
// ------------------------------------------------------------------
export const trackCTAClicked = (ctaName: string, ctaLocation: string) => {
    trackEvent(MP_EVENTS.CTA_CLICKED, {
        cta_name: ctaName,
        cta_location: ctaLocation
    });
};

export const trackTrustSignal = (signalType: "lawyer_profile" | "testimonials" | "refund_policy", props: MixpanelEventProps = {}) => {
    const eventName = signalType === "lawyer_profile" ? MP_EVENTS.LAWYER_PROFILE_VIEWED :
                      signalType === "testimonials" ? MP_EVENTS.TESTIMONIALS_VIEWED :
                      MP_EVENTS.REFUND_POLICY_VIEWED;
    trackEvent(eventName, props);
};


// ------------------------------------------------------------------
// PART 5: Feature Specific Events
// ------------------------------------------------------------------
export const trackStrengthCheckerCompleted = (
    score: number, 
    category: "strong" | "medium" | "weak",
    noticeType: string
) => {
    trackEvent(MP_EVENTS.STRENGTH_CHECKER_COMPLETED, {
        score,
        category,
        notice_type: noticeType
    });
};

export const trackLeadCreated = (props: {
    lead_id: string;
    notice_type: string;
    source?: string;
    [key: string]: any;
}) => {
    trackEvent(MP_EVENTS.LEAD_CREATED, props);
};


/**
 * Extract UTMs and GCLID from URL and register them as super properties
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
            mixpanel.register_once(utmParams);
            mixpanel.register(utmParams);
        }
    } catch (e) {
        console.error("Error extracting UTMs", e);
    }
}


// Initialize helper
export const initMixpanel = () => {
  if (typeof window === "undefined") return;
  mixpanel.init(MIXPANEL_TOKEN, mixpanelConfig.config);
};

