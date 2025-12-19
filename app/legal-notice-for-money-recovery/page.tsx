"use client";

import * as React from "react";
import type { Metadata } from "next";
import { moneyRecoveryData } from "@/lib/legal-notice/notice-types-data";
import {
  Breadcrumb,
  HeroSection,
  InfoSectionVariant1,
  HowWeWorkTimeline,
  InfoSectionVariant2,
  WhySaferSection,
  SampleNoticeSection,
  SampleNoticeModal,
  MultiStepForm,
  PricingCard,
  RelatedNoticesSection,
  TestimonialsSection,
  InteractiveContentSection,
} from "@/components/legal-notice";
import { StickyScroll } from "@/components/aceternity/sticky-scroll-reveal";
import {
  moneyRecoveryInteractiveCards,
  moneyRecoveryVisualContent,
} from "@/lib/legal-notice/interactive-content-data";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* =============================================================================
 * PAGE COMPONENT
 * ============================================================================= */

export default function MoneyRecoveryPage() {
  const data = moneyRecoveryData;
  const [showSampleNoticeModal, setShowSampleNoticeModal] =
    React.useState(false);
  const [activeCard, setActiveCard] = React.useState<string | undefined>(
    undefined
  );
  const handleFormSubmit = (formData: {
    fullName: string;
    whatsappNumber: string;
    noticeType: string;
    description: string;
    city: string;
  }) => {
    console.log("Form submitted:", formData);
    // Scroll to confirmation or show success modal
  };

  const handleScrollToForm = () => {
    document
      .querySelector("#multi-step-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      {/* Breadcrumb Navigation */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Legal Notice", href: "/send-legal-notice" },
            { label: data.title },
          ]}
        />
      </div>

      {/* Hero Section - Type Specific */}
      <HeroSection
        className="pb-8 lg:pb-12"
        badge={data.hero.badge}
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
        flipWords={data.hero.flipWords}
        badges={data.hero.badges}
      />

      {/* Content Section with H1 and Introduction */}
      <section className="bg-white/70 py-6 lg:py-12">
        <InteractiveContentSection
          h1={data.content.h1}
          introduction={data.content.introduction}
          cards={moneyRecoveryInteractiveCards}
          visualContent={moneyRecoveryVisualContent}
          finalCta={data.content.finalCta}
        />
      </section>

      {/* Story Section - Real Success Story */}
      <section className="bg-background-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InfoSectionVariant1
            badge={data.story.badge}
            title={data.story.title}
            titleHighlight={data.story.titleHighlight}
            description={data.story.description}
            features={data.story.features.map((feature) => ({
              icon: (
                <span className="text-2xl">
                  {feature.icon === "document"
                    ? "📄"
                    : feature.icon === "speedometer"
                    ? "⚡"
                    : "💰"}
                </span>
              ),
              title: feature.title,
              description: feature.description,
              badge: feature.badge,
            }))}
            avatarLabel="Drafted by Top Advocates"
            ctaText="Start Your Money Recovery Notice"
            onCtaClick={handleScrollToForm}
          />
        </div>
      </section>

      {/* How We Work Timeline */}
      <HowWeWorkTimeline />

      {/* Legal Framework Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <InfoSectionVariant2
            badge={data.legalFramework.badge}
            title={data.legalFramework.title}
            titleHighlight={data.legalFramework.titleHighlight}
            description={data.legalFramework.description}
            expertInsight={data.legalFramework.expertInsight}
            accordionSections={data.legalFramework.accordionSections}
            ctaCards={[
              {
                variant: "primary" as const,
                title: "Draft Notice Now",
                subtitle: "Expert drafting in 48 hours",
                price: "₹1,499",
                onClick: handleScrollToForm,
              },
              {
                variant: "secondary" as const,
                title: "Talk to a Lawyer",
                price: "Free",
                priceUnit: " Consultation",
                onClick: () => {
                  // Open WhatsApp or consultation booking
                },
              },
            ]}
          />
        </div>
      </section>

      {/* Why Safer Section */}
      <WhySaferSection className="bg-background-gray-light" />

      {/* Sample Notice Section */}
      <SampleNoticeSection
        className="bg-white"
        noticeCategory="Money Recovery"
        title="See a Real Money Recovery Notice Format"
        subtitle="Preview a professionally drafted legal notice for money recovery."
        buttonText="View Sample Notice"
        onButtonClick={() => setShowSampleNoticeModal(true)}
      />

      {/* Multi-Step Form Section */}
      <section
        id="multi-step-form"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
              Get Your Money Recovery Notice Drafted
            </h2>
            <p className="mt-2 text-text-medium">
              Fill out the form below to get started
            </p>
          </div>
          <MultiStepForm
            onSubmit={handleFormSubmit}
            onStepChange={(step) => console.log("Step changed:", step)}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-background-gray py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-2 text-text-medium">
              No hidden charges, pay only for what you need
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <PricingCard
              badge="BEST VALUE PACK"
              originalPrice={3999}
              currentPrice={1499}
              unit="/ notice"
              features={[
                "Drafted by Licensed Advocate",
                "Sent via Speed Post",
                "Unlimited Revisions",
                "24/7 Support",
                "Legal Consultation",
              ]}
              totalLabel="TOTAL PAYABLE"
              showPaymentBreakdown={true}
              advancePayment={499}
              finalPayment={1000}
            />
          </div>
        </div>
      </section>

      {/* Related Notices (Internal Linking!) */}
      <RelatedNoticesSection
        currentSlug={data.slug}
        cluster={data.cluster}
        label="EXPLORE RELATED NOTICES"
        title="Other Money Recovery"
        titleHighlight="Legal Notices"
        subtitle="Need a different type of money recovery notice? We have specialized options."
        maxNotices={6}
      />

      {/* Testimonials Section */}
      <TestimonialsSection className="bg-background-gray" />

      {/* FAQs */}
      <FAQSection
        faqs={data.faqs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about money recovery legal notices"
        showDove={true}
      />

      {/* Sample Notice Modal */}
      <SampleNoticeModal
        open={showSampleNoticeModal}
        onOpenChange={setShowSampleNoticeModal}
        noticeCategory="Money Recovery"
        noticeContent={data.sampleNotice}
        ctaLabel="Need a notice like this?"
        ctaSubtitle="Our lawyers draft & send it for you."
        ctaButtonText="Generate Your Own Notice"
        onCtaClick={() => {
          setShowSampleNoticeModal(false);
          handleScrollToForm();
        }}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="919876543210"
        message="Hi! I need help with a money recovery legal notice. Can you assist me?"
      />
    </main>
  );
}
