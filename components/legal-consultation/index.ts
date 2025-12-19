/**
 * Legal Consultation Page Components
 *
 * This module exports all components specific to the Legal Consultation page.
 */

// Components
export { ConsultationTypesSection } from "./ConsultationTypesSection";
export type {
  ConsultationType,
  ConsultationTypesSectionProps,
} from "./ConsultationTypesSection";

export { TrustBadgesBar } from "./TrustBadgesBar";
export type { TrustBadge, TrustBadgesBarProps } from "./TrustBadgesBar";

export { StickyCTABar } from "./StickyCTABar";
export type { StickyCTABarProps } from "./StickyCTABar";

export { SocialProofNotification } from "./SocialProofNotification";
export type {
  NotificationData,
  SocialProofNotificationProps,
} from "./SocialProofNotification";

// Data constants
export {
  // Types
  type ConsultationType as ConsultationTypeData,
  type ConsultationTestimonial,
  type ConsultationStat,
  type PricingTier,
  type TrustBadge as TrustBadgeData,
  // Data
  consultationTypes,
  consultationTestimonials,
  consultationStats,
  consultationFAQs,
  consultationPricing,
  consultationSteps,
  consultationFeatures,
  trustBadges,
  heroContent,
  socialProofNotifications,
  discountModalContent,
  exitIntentReasons,
} from "./consultation-data";
