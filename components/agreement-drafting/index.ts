/**
 * Agreement Drafting Service - Component Exports
 *
 * This barrel file exports all components and data for the Agreement Drafting Service.
 */

// =============================================================================
// DATA EXPORTS
// =============================================================================

export {
  // Types
  type AgreementType,
  type AgreementCategory,
  type PricingTier,
  type SampleAgreement,
  type IndustrySolution,
  type FAQItem,
  type Testimonial,
  type TimelineStep,
  // Data
  agreementCategories,
  pricingTiers,
  sampleAgreements,
  industrySolutions,
  agreementFAQs,
  agreementTestimonials,
  agreementTimelineSteps,
  agreementTypeOptions,
  urgencyLevelOptions,
  whyChooseUsPoints,
  heroFlipWords,
  heroFeatureBadges,
} from "./agreement-data";

// =============================================================================
// COMPONENT EXPORTS
// =============================================================================

export { AgreementTypeCard, type AgreementTypeCardProps } from "./AgreementTypeCard";
export { AgreementTypesGrid, type AgreementTypesGridProps } from "./AgreementTypesGrid";
export { PricingTiers, type PricingTiersProps } from "./PricingTiers";
export { SampleAgreementSection, type SampleAgreementSectionProps } from "./SampleAgreementSection";
export { SampleAgreementModal, type SampleAgreementModalProps } from "./SampleAgreementModal";
export { IndustrySolutionsSection, type IndustrySolutionsSectionProps } from "./IndustrySolutionsSection";
export { AgreementHeroSection, type AgreementHeroSectionProps } from "./HeroSection";
