"use client";

import * as React from "react";
import Image from "next/image";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

// Design System
import { MeshGradient } from "@paper-design/shaders-react";
import { FlipWords } from "@/components/aceternity/flip-words";

// Reusable components from legal-notice
import {
  HowWeWorkTimeline,
  PricingCard,
  MultiStepForm,
  ServingCitiesSection,
  TestimonialsSection,
  WhySaferSection,
  Breadcrumb,
} from "@/components/legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";

// Dynamic imports for better performance (loaded on demand)
const DiscountOfferModal = dynamic(
  () =>
    import("@/components/legal-notice/DiscountOfferModal").then(
      (mod) => mod.DiscountOfferModal
    ),
  { ssr: false }
);

const ExitIntentModal = dynamic(
  () =>
    import("@/components/legal-notice/ExitIntentModal").then(
      (mod) => mod.ExitIntentModal
    ),
  { ssr: false }
);

// Consultation-specific components
import {
  ConsultationTypesSection,
  TrustBadgesBar,
  StickyCTABar,
  SocialProofNotification,
  // Data
  consultationTypes,
  consultationTestimonials,
  consultationStats,
  consultationFAQs,
  consultationPricing,
  consultationSteps,
  consultationFeatures,
  heroContent,
  socialProofNotifications,
  discountModalContent,
  exitIntentReasons,
} from "@/components/legal-consultation";

// =============================================================================
// HERO SECTION (Custom for Consultation - Pain Point Focused)
// =============================================================================

function ConsultationHeroSection() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={[
                "#FFFFFF",
                "#FFFFFF",
                "#FAFAFA",
                "#F5F5F5",
                "#FFEBEE",
                "#EF5A6F",
              ]}
              speed={0.5}
              distortion={1.0}
              swirl={0.8}
              grainMixer={0}
              grainOverlay={0}
              offsetX={0.1}
            />
            <div className="absolute inset-0 pointer-events-none bg-yellow-100/30" />
          </>
        )} */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="pt-4">
            {/* Social Proof Badge */}
            <div className="mb-4">
              <span className="inline-block rounded-full bg-success-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-success-darker">
                🎯 {heroContent.badge}
              </span>
            </div>

            {/* Headline - Pain Point Focused */}
            <h1 className="mb-6 font-sans text-[3rem] font-bold leading-[1.1] text-text-heading xl:text-[3.5rem]">
              {heroContent.headline}
            </h1>

            {/* Subtitle with FlipWords */}
            <div className="mb-8 max-w-lg text-lg text-text-medium">
              <span>{heroContent.subheadlinePrefix}</span>
              <FlipWords
                words={heroContent.flipWords}
                duration={2500}
                className="font-semibold text-primary"
              />
              <span>{heroContent.subheadlineSuffix}</span>
            </div>

            {/* Trust Badges */}
            <div className="mb-8 flex flex-wrap gap-4">
              {heroContent.trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {badge.icon === "Building2" && (
                        <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                      )}
                      {badge.icon === "Shield" && (
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      )}
                      {badge.icon === "Clock" && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-text-body">
                      {badge.title}
                    </span>
                    <span className="text-xs text-text-muted">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-16/10 w-full max-w-lg overflow-hidden rounded-2xl">
                <Image
                  src="/assets/legal-notice/hero.png"
                  alt="Legal consultation illustration"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Expert Consultation Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                    <div className="mb-1 flex justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <svg
                          className="h-4 w-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold text-text-heading">
                      Speak to an Expert
                    </p>
                    <p className="text-center text-xs text-text-muted">
                      Our advocates understand your situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form + Pricing Card */}
          <div className="space-y-6 lg:pl-4">
            <MultiStepForm
              onSubmit={() => {}}
              onStepChange={() => {}}
              serviceType="Legal Consultation"
              servicePrice={299}
            />
            <PricingCard
              badge={heroContent.pricingCard.badge}
              originalPrice={heroContent.pricingCard.originalPrice}
              currentPrice={heroContent.pricingCard.currentPrice}
              unit={heroContent.pricingCard.unit}
              features={heroContent.pricingCard.features}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Text Overlay Section */}
          <div className="relative z-10 pb-4 text-center">
            {/* Social Proof Badge */}
            <div className="mb-3">
              <span className="inline-block rounded-full bg-success-light px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-success-darker">
                🎯 {heroContent.badge}
              </span>
            </div>

            <h1 className="mb-3 font-sans text-[1.6rem] font-bold leading-tight text-text-heading sm:text-3xl">
              {heroContent.headline}
            </h1>
            <div className="text-sm text-text-medium sm:text-base">
              <span>{heroContent.subheadlinePrefix}</span>
              <FlipWords
                words={heroContent.flipWords}
                duration={2500}
                className="font-semibold text-primary text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Hero Image with Floating Badges */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-16/10">
            <Image
              src="/assets/legal-notice/hero.png"
              alt="Legal consultation illustration"
              fill
              className="object-cover"
              priority
            />

            {/* Floating Badges */}
            <div className="absolute left-3 top-1/4 flex flex-col gap-2 sm:left-4 sm:gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:px-4 sm:py-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-pink-light sm:h-9 sm:w-9">
                  <svg
                    className="h-4 w-4 text-primary sm:h-5 sm:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-text-body sm:text-sm">
                  100%
                  <br />
                  Confidential
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:px-4 sm:py-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-pink-light sm:h-9 sm:w-9">
                  <svg
                    className="h-4 w-4 text-primary sm:h-5 sm:w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-text-body sm:text-sm">
                  Connect in
                  <br />
                  30 Minutes
                </span>
              </div>
            </div>

            {/* Category Pill */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
              <span className="inline-block rounded-full bg-warning-yellow px-4 py-2 text-xs font-semibold text-warning-brown sm:text-sm">
                Expert Advice
              </span>
            </div>
          </div>

          {/* Form Section - Below image on mobile */}
          <div className="mt-8 space-y-6">
            <MultiStepForm
              onSubmit={() => {}}
              onStepChange={() => {}}
              serviceType="Legal Consultation"
              servicePrice={299}
            />
            <PricingCard
              badge={heroContent.pricingCard.badge}
              originalPrice={heroContent.pricingCard.originalPrice}
              currentPrice={heroContent.pricingCard.currentPrice}
              unit={heroContent.pricingCard.unit}
              features={heroContent.pricingCard.features}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================

export default function LegalConsultationPage() {
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasExitModalShown, setHasExitModalShown] = useState(false);

  // Form submission handler
  const handleFormSubmit = (data: {
    fullName: string;
    whatsappNumber: string;
    noticeType: string;
    description: string;
    city: string;
  }) => {
    console.log("Form submitted:", data);
    // After form submission, show discount offer
    setShowDiscountModal(true);
  };

  // Claim offer handler
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

  // Exit intent detection (desktop only)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasExitModalShown && !showDiscountModal) {
        setShowExitModal(true);
        setHasExitModalShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasExitModalShown, showDiscountModal]);

  // Scroll to form handler
  const scrollToForm = () => {
    document
      .querySelector("#consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle consultation type click
  const handleTypeClick = (typeId: string) => {
    console.log("Type clicked:", typeId);
    scrollToForm();
  };

  return (
    <main>
      {/* Page View Tracking */}
      <PageViewTracker serviceType="Legal Consultation" />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Legal Consultation", href: "/legal-consultation" },
        ]}
      />
      {/* Hero Section */}
      <ConsultationHeroSection />

      {/* Trust Badges Bar */}
      <TrustBadgesBar />

      {/* How We Work Timeline */}
      <HowWeWorkTimeline
        heading="How Our Consultation Works"
        subtitle="SIMPLE & EFFECTIVE"
        steps={consultationSteps}
      />

      {/* Why VakilTech Section */}
      <WhySaferSection
        title="Why 15,000+ Indians Choose"
        titleHighlight="VakilTech"
        features={consultationFeatures}
      />

      {/* Consultation Types Section */}
      <ConsultationTypesSection
        types={consultationTypes}
        onTypeClick={handleTypeClick}
      />

      {/* Multi-Step Form Section */}
      <section
        id="consultation-form"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
              Book Your Consultation
            </h2>
            <p className="mt-2 text-text-medium">
              Fill out the form below to get started
            </p>
          </div>
          <MultiStepForm
            onSubmit={handleFormSubmit}
            onStepChange={(step) => console.log("Step changed:", step)}
            serviceType="Legal Consultation"
            servicePrice={299}
          />
        </div>
      </section>

      {/* Pricing Section - Single Attractive Card */}
      <section className="bg-linear-to-b from-background-gray to-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-success-light px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-success-darker">
              Simple & Transparent
            </span>
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              One Price. Everything Included.
            </h2>
            <p className="mt-2 text-text-medium">
              No hidden fees. No surprises. Just expert legal advice.
            </p>
          </div>

          {/* Single Pricing Card - Centered */}
          <div className="mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl ring-2 ring-primary sm:p-8">
              {/* Best Value Badge */}
              <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1.5 text-xs font-bold text-white">
                {consultationPricing.badge}
              </div>

              {/* Price */}
              <div className="mb-6 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="text-lg text-text-muted line-through">
                    ₹{consultationPricing.originalPrice}
                  </span>
                  <span className="rounded-full bg-success-light px-2 py-0.5 text-xs font-semibold text-success-darker">
                    Save ₹
                    {consultationPricing.originalPrice -
                      consultationPricing.currentPrice}
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary sm:text-6xl">
                    ₹{consultationPricing.currentPrice}
                  </span>
                  <span className="text-lg text-text-muted">
                    {consultationPricing.unit}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

              {/* Features */}
              <ul className="mb-8 space-y-4">
                {consultationPricing.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                      <svg
                        className="h-4 w-4 text-success"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full rounded-xl bg-primary py-4 text-base font-semibold text-white transition-all hover:bg-primary-coral hover:shadow-lg active:scale-[0.98]"
              >
                {consultationPricing.ctaText} →
              </button>

              {/* Trust Note */}
              <p className="mt-4 text-center text-xs text-text-muted">
                🔒 Secure payment • 💯 Money-back guarantee
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-center sm:gap-10">
            <div>
              <div className="text-2xl font-bold text-text-heading">
                15,000+
              </div>
              <div className="text-sm text-text-muted">Consultations Done</div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-text-heading">4.9/5</div>
              <div className="text-sm text-text-muted">Google Rating</div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-text-heading">30 Min</div>
              <div className="text-sm text-text-muted">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection className="bg-background-gray" />

      {/* Serving Cities Section */}
      <ServingCitiesSection
        onCityClick={(cityId) => {
          console.log("City clicked:", cityId);
        }}
        onViewAllClick={() => {
          console.log("View all cities clicked");
        }}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={consultationFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about legal consultations"
        showDove={true}
      />

      {/* Discount Offer Modal */}
      <DiscountOfferModal
        isOpen={showDiscountModal}
        onClose={() => setShowDiscountModal(false)}
        offer={{
          headline: discountModalContent.headline,
          originalPrice: discountModalContent.originalPrice,
          discountedPrice: discountModalContent.discountedPrice,
          savings: discountModalContent.savings,
          currency: "₹",
          expiresInSeconds: discountModalContent.expiresInSeconds,
        }}
        onClaimOffer={handleClaimOffer}
        onDismiss={() => setShowDiscountModal(false)}
      />

      {/* Exit Intent Modal */}
      <ExitIntentModal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        headline="Wait! Get Expert Advice"
        subheadline="We noticed you're about to leave. Help us understand why:"
        onClaimOffer={handleClaimOffer}
        onBookConsultation={handleBookConsultation}
        onDismiss={() => setShowExitModal(false)}
        originalPrice={discountModalContent.originalPrice}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="919876543210"
        message="Hi! I'm interested in booking a legal consultation. Can you help me?"
      />

      {/* Sticky CTA Bar (Mobile) */}
      <StickyCTABar
        price="From ₹299"
        ctaText="Book Now"
        onCtaClick={scrollToForm}
        formSectionId="consultation-form"
      />

      {/* Social Proof Notification */}
      <SocialProofNotification
        notifications={socialProofNotifications}
        enabled={true}
      />

      {/* JSON-LD Schema Markup */}
      <Script
        id="legal-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "VakilTech Legal Consultation",
            description:
              "Online legal consultation services from expert Licensed Advocates",
            url: "https://vakiltech.com/legal-consultation",
            priceRange: "₹299 - ₹999",
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "Legal Consultation",
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.com",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "15000",
              bestRating: "5",
              worstRating: "1",
            },
            offers: {
              "@type": "Offer",
              price: "299",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: consultationFAQs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  typeof faq.answer === "string"
                    ? faq.answer
                    : "Please visit our website for detailed information.",
              },
            })),
          }),
        }}
      />

      {/* AEO/AISEO Schemas */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Online Lawyer Consultation ₹299 | Talk to Expert Licensed Advocates",
            description:
              "Get instant legal consultation online from experienced Licensed Advocates. Starting at just ₹299. 24/7 support, 100% confidential.",
            author: {
              "@type": "Organization",
              name: "VakilTech Legal Team",
              url: "https://vakiltech.in/about",
            },
            publisher: {
              "@type": "Organization",
              name: "VakilTech",
              logo: {
                "@type": "ImageObject",
                url: "https://vakiltech.in/logo.png",
              },
            },
            datePublished: "2024-01-15",
            dateModified: new Date().toISOString().split("T")[0],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vakiltech.in/legal-consultation",
            },
          }),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://vakiltech.in",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Legal Consultation",
                item: "https://vakiltech.in/legal-consultation",
              },
            ],
          }),
        }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Online Lawyer Consultation ₹299 | VakilTech",
            description:
              "Get instant legal consultation from Licensed Advocates. Starting ₹299. 24/7 support, 100% confidential.",
            url: "https://vakiltech.in/legal-consultation",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".prose"],
            },
            about: {
              "@type": "Thing",
              name: "Legal Consultation Services",
              description:
                "Professional online legal consultation services in India",
            },
          }),
        }}
      />
    </main>
  );
}
