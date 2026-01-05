
import mixpanel from "mixpanel-browser";

// Mixpanel Project Token
const MIXPANEL_TOKEN = "efa40c452a5bf0887f7169882a2d8c46";

export const mixpanelConfig = {
  token: MIXPANEL_TOKEN,
  config: {
    debug: process.env.NODE_ENV !== "production",
    autocapture: true, // As per instruction
    record_sessions_percent: 100, // As per instruction
    persistence: "localStorage" as const,
  },
};

// Event naming convention helper
// Ensures all event names are consistently formatted if needed, 
// though the prompt asks for "Past Tense Human Readable" which we will enforce via types or convention.

export type MixpanelEventProps = Record<string, any>;

export const trackEvent = (eventName: string, props: MixpanelEventProps = {}) => {
  if (typeof window === "undefined") return;

  try {
    mixpanel.track(eventName, props);
  } catch (error) {
    console.error("Mixpanel track error:", error);
  }
};

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

// Initialize helper (safe to call multiple times, though mixpanel-browser handles it)
export const initMixpanel = () => {
  if (typeof window === "undefined") return;
  mixpanel.init(MIXPANEL_TOKEN, mixpanelConfig.config);
};
