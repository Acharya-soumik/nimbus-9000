/**
 * Legal Notice Page Components
 *
 * This module exports all components specific to the Legal Notice page.
 */

export { HeroSection } from "./HeroSection";
export type { HeroSectionProps } from "./HeroSection";

export { PricingCard } from "./PricingCard";
export type { PricingCardProps } from "./PricingCard";

export { HowWeWorkTimeline } from "./HowWeWorkTimeline";
export type { HowWeWorkTimelineProps, TimelineStep } from "./HowWeWorkTimeline";

// Info Section Components (3 Variants)
export {
  InfoSection,
  InfoSectionVariant1,
  InfoSectionVariant2,
  InfoSectionVariant3,
} from "./InfoSection";
export type {
  InfoSectionProps,
  InfoSectionVariant,
  InfoSectionVariant1Props,
  InfoSectionVariant2Props,
  InfoSectionVariant3Props,
} from "./InfoSection";
export type { FeatureCardProps } from "./InfoSectionVariant1";
export type {
  AccordionSection,
  CTACardProps,
  BenefitItem,
} from "./InfoSectionVariant2";

// Multi-Step Form Components
export { MultiStepForm, ProgressBar } from "./MultiStepForm";
export type { MultiStepFormProps, FormStepData } from "./MultiStepForm";

// Modal Components
export { DiscountOfferModal } from "./DiscountOfferModal";
export type {
  DiscountOfferModalProps,
  TrustBadge,
  Benefit,
} from "./DiscountOfferModal";

export { ExitIntentModal } from "./ExitIntentModal";
export type { ExitIntentModalProps, ExitReason } from "./ExitIntentModal";

// Sample Notice Components
export { SampleNoticeSection } from "./SampleNoticeSection";
export type { SampleNoticeSectionProps } from "./SampleNoticeSection";

export { SampleNoticeModal } from "./SampleNoticeModal";
export type {
  SampleNoticeModalProps,
  SampleNoticeContent,
} from "./SampleNoticeModal";

// Popular Legal Notices Section
export { PopularLegalNotices } from "./PopularLegalNotices";
export type {
  PopularLegalNoticesProps,
  NoticeType,
} from "./PopularLegalNotices";

// Serving Cities Section
export { ServingCitiesSection } from "./ServingCitiesSection";
export type { ServingCitiesSectionProps, City } from "./ServingCitiesSection";

// Testimonials Section
export {
  TestimonialsSection,
  type TestimonialsSectionProps,
} from "./testimonials-section";

// Why Safer Section
export { WhySaferSection } from "./WhySaferSection";
export type { WhySaferSectionProps, SafetyFeature } from "./WhySaferSection";

// Breadcrumb Navigation
export { Breadcrumb } from "./Breadcrumb";
export type { BreadcrumbProps, BreadcrumbItem } from "./Breadcrumb";

// Related Notices Section
export { RelatedNoticesSection } from "./RelatedNoticesSection";
export type {
  RelatedNoticesSectionProps,
  RelatedNotice,
} from "./RelatedNoticesSection";

// Interactive Content Section
export { InteractiveContentSection } from "./InteractiveContentSection";
export type {
  InteractiveContentSectionProps,
  ContentCard,
} from "./InteractiveContentSection";

export { PostNoticeRoadmap } from "./PostNoticeRoadmap";
