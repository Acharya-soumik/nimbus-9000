"use client";

import * as React from "react";
import {
  AgreementHeroSection,
  AgreementTypesGrid,
  PricingTiers,
  SampleAgreementSection,
  SampleAgreementModal,
  IndustrySolutionsSection,
  agreementFAQs,
  agreementTestimonials,
  agreementTimelineSteps,
  whyChooseUsPoints,
  sampleAgreements,
} from "@/components/agreement-drafting";
import {
  HowWeWorkTimeline,
  TestimonialsSection,
  ServingCitiesSection,
  DiscountOfferModal,
  ExitIntentModal,
} from "@/components/legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";

/**
 * Agreement Drafting Service Page
 *
 * A comprehensive page for VakilTech's agreement drafting services.
 * Reuses components from legal-notice while introducing agreement-specific elements.
 */
export default function AgreementDraftingPage() {
  // Modal states
  const [showSampleModal, setShowSampleModal] = React.useState(false);
  const [selectedSampleId, setSelectedSampleId] = React.useState<string>();
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);
  const [showExitModal, setShowExitModal] = React.useState(false);

  // Handle agreement selection from grid
  const handleAgreementClick = (agreementId: string) => {
    console.log("Agreement selected:", agreementId);
    // Scroll to form section
    document
      .querySelector("#agreement-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle sample view
  const handleViewSample = (agreementId: string) => {
    setSelectedSampleId(agreementId);
    setShowSampleModal(true);
  };

  // Handle pricing tier selection
  const handleTierClick = (tierId: string) => {
    console.log("Tier selected:", tierId);
    document
      .querySelector("#agreement-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle industry click
  const handleIndustryClick = (industryId: string) => {
    console.log("Industry selected:", industryId);
    // Could filter the agreement grid in the future
  };

  // Handle form submission (from hero)
  const handleFormSubmit = () => {
    console.log("Form submitted");
    setShowDiscountModal(true);
  };

  // Handle offer claim
  const handleClaimOffer = (discountedPrice?: number) => {
    console.log("Offer claimed!", discountedPrice);
    setShowDiscountModal(false);
    setShowExitModal(false);
  };

  // Handle consultation booking
  const handleBookConsultation = (consultationPrice?: number) => {
    console.log("Consultation booked!", consultationPrice);
    setShowExitModal(false);
  };

  return (
    <main>
      {/* Hero Section with Teal Theme */}
      <AgreementHeroSection />

      {/* Agreement Types Grid */}
      <AgreementTypesGrid
        onAgreementClick={handleAgreementClick}
        onCategoryClick={(categoryId) => console.log("Category:", categoryId)}
      />

      {/* How We Work Timeline */}
      <HowWeWorkTimeline
        heading="How It Works"
        subtitle="Get your agreement drafted in 4 simple steps"
        steps={agreementTimelineSteps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Why Choose Us Section */}
      <section className="bg-background-gray py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
              WHY VAKILTECH
            </span>
            <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              Why Choose Us for{" "}
              <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
                Agreement Drafting
              </span>
            </h2>
            <p className="mt-3 text-base text-text-medium lg:text-lg">
              India&apos;s fastest and most reliable agreement drafting service
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsPoints.map((point, index) => (
              <div
                key={point.id}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md hover:ring-teal/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light">
                  {point.iconType === "clock" && (
                    <svg
                      className="h-6 w-6 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  {point.iconType === "shield" && (
                    <svg
                      className="h-6 w-6 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {point.iconType === "refresh" && (
                    <svg
                      className="h-6 w-6 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="23 4 23 10 17 10" />
                      <polyline points="1 20 1 14 7 14" />
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                  )}
                  {point.iconType === "document" && (
                    <svg
                      className="h-6 w-6 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                    </svg>
                  )}
                  {point.iconType === "check" && (
                    <svg
                      className="h-6 w-6 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  )}
                  {point.iconType === "chat" && (
                    <svg
                      className="h-6 w-6 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  )}
                </div>
                <h3 className="mb-2 font-sans text-lg font-bold text-text-heading">
                  {point.title}
                </h3>
                <p className="text-sm text-text-muted">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <PricingTiers onTierClick={handleTierClick} />

      {/* Sample Agreement Section */}
      <SampleAgreementSection onViewSample={handleViewSample} />

      {/* Industry Solutions */}
      <IndustrySolutionsSection onIndustryClick={handleIndustryClick} />

      {/* Form Section */}
      <section
        id="agreement-form"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
              Get Your Agreement Drafted
            </h2>
            <p className="mt-2 text-text-medium">
              Fill out the form below to get started
            </p>
          </div>
          {/* Reusing BasicLeadForm from legal-notice for now */}
          {/* In production, this would use MultiStepForm with agreement-specific fields */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
            <p className="mb-4 text-center text-sm text-text-muted">
              Our team will contact you within 30 minutes
            </p>
            <button
              onClick={handleFormSubmit}
              className="w-full rounded-xl bg-teal py-3 text-sm font-semibold text-white transition-all hover:bg-teal-dark"
            >
              Request Agreement Drafting
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        className="bg-background-gray"
        testimonials={agreementTestimonials.map((t) => ({
          quote: t.text,
          name: t.name,
          title: `${t.role}, ${t.location}`,
        }))}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={agreementFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about agreement drafting"
        showDove={true}
      />

      {/* Serving Cities */}
      <ServingCitiesSection
        onCityClick={(cityId) => console.log("City clicked:", cityId)}
        onViewAllClick={() => console.log("View all cities")}
      />

      {/* Sample Agreement Modal */}
      <SampleAgreementModal
        open={showSampleModal}
        onOpenChange={setShowSampleModal}
        agreementId={selectedSampleId}
        onCtaClick={() => {
          setShowSampleModal(false);
          document
            .querySelector("#agreement-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Discount Offer Modal */}
      <DiscountOfferModal
        isOpen={showDiscountModal}
        onClose={() => setShowDiscountModal(false)}
        offer={{
          headline: "Special Agreement Offer",
          originalPrice: 1999,
          discountedPrice: 999,
          savings: 1000,
          currency: "₹",
          expiresInSeconds: 360,
        }}
        onClaimOffer={handleClaimOffer}
        onDismiss={() => setShowDiscountModal(false)}
      />

      {/* Exit Intent Modal */}
      <ExitIntentModal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        headline="Wait! Before You Go"
        subheadline="We noticed you're about to leave. Help us understand why:"
        onClaimOffer={handleClaimOffer}
        onBookConsultation={handleBookConsultation}
        onDismiss={() => setShowExitModal(false)}
        originalPrice={1999}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="919876543210"
        message="Hi! I'm interested in getting an agreement drafted. Can you help me?"
      />
    </main>
  );
}
