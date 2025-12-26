"use client";

import * as React from "react";
import type { NoticeTypeData } from "@/lib/send-legal-notice/notice-types-data";
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
} from "@/components/send-legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { StickyCTABar } from "@/components/legal-consultation/StickyCTABar";
import { StrengthCalculatorPromo } from "@/components/send-legal-notice/StrengthCalculatorPromo";

interface LegalNoticeTypePageClientProps {
  data: NoticeTypeData;
}

export function LegalNoticeTypePageClient({
  data,
}: LegalNoticeTypePageClientProps) {
  const [showSampleNoticeModal, setShowSampleNoticeModal] =
    React.useState(false);

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
    <>
      {/* LegalService Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `VakilTech - ${data.title}`,
            description: data.seo.description,
            url: `https://vakiltech.in/send-legal-notice/${data.slug}`,
            priceRange: "₹1,499 - ₹3,999",
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.in",
              logo: "https://vakiltech.in/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-70476 83995",
                contactType: "Customer Service",
                availableLanguage: ["English", "Hindi"],
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "500",
            },
            offers: {
              "@type": "Offer",
              price: "1499",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Article Schema for AEO/AISEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data.seo.title,
            description: data.seo.description,
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
              "@id": `https://vakiltech.in/send-legal-notice/${data.slug}`,
            },
            keywords: data.seo.keywords.join(", "),
          }),
        }}
      />

      {/* BreadcrumbList Schema for AEO */}
      <script
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
                name: "Legal Notice",
                item: "https://vakiltech.in/send-legal-notice",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: data.title,
                item: `https://vakiltech.in/send-legal-notice/${data.slug}`,
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema for Process Steps (AEO Optimization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How to Send ${data.title} Online`,
            description: `Step-by-step guide to send ${data.title.toLowerCase()} through VakilTech`,
            totalTime: "PT48H",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "INR",
              value: "1499",
            },
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Fill the Online Form",
                text: "Provide your details and case information through our simple online form. Our AI assistant helps you provide accurate information.",
                image: "https://vakiltech.in/assets/common/fill-form.png",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Expert Lawyer Drafts Your Notice",
                text: "Our Licensed Advocates review your case and draft a professional legal notice. You can review and request unlimited revisions.",
                image: "https://vakiltech.in/assets/common/consut-lawyer.png",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Notice Sent via Speed Post",
                text: "Once approved, we send your legal notice via Speed Post with Acknowledgement Due (RPAD) for legal validity.",
                image: "https://vakiltech.in/assets/common/registered-post.png",
              },
            ],
          }),
        }}
      />

      {/* WebPage Schema with Speakable (for voice assistants) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: data.seo.title,
            description: data.seo.description,
            url: `https://vakiltech.in/send-legal-notice/${data.slug}`,
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".prose"],
            },
            mainEntity: {
              "@type": "Service",
              name: data.title,
              description: data.content.introduction,
              provider: {
                "@type": "Organization",
                name: "VakilTech",
              },
            },
          }),
        }}
      />
      <main>
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Legal Notice", href: "/legal-notice" },
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

        {/* Strength Calculator Promo */}
        <StrengthCalculatorPromo />

        {/* Content Section with H1 and Introduction */}
        <section className="bg-white/70 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              {/* H1 and Introduction */}
              <h1 className="mb-6 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
                {data.content.h1}
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="mb-8 text-lg leading-relaxed text-text-medium">
                  {data.content.introduction}
                </p>
              </div>

              {/* SEO Content Sections */}
              {data.content.sections && data.content.sections.length > 0 && (
                <div className="mt-12 space-y-10">
                  {data.content.sections.map((section, index) => (
                    <div key={index} className="scroll-mt-20">
                      <h2 className="mb-4 text-2xl font-bold text-text-heading sm:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="prose prose-lg max-w-none">
                        <p className="mb-4 leading-relaxed text-text-medium">
                          {section.content}
                        </p>
                        {section.listItems && section.listItems.length > 0 && (
                          <ul className="mt-4 space-y-3">
                            {section.listItems.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3 text-text-body"
                              >
                                <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-light">
                                  <svg
                                    className="h-4 w-4 text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </span>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Final CTA */}
              <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6">
                <p className="mb-4 text-text-body">
                  {data.content.finalCta.text}
                </p>
                <button
                  onClick={handleScrollToForm}
                  className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  {data.content.finalCta.buttonText}
                </button>
              </div>
            </div>
          </div>
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
              ctaText={`Start Your ${data.title}`}
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
                    const message = encodeURIComponent(
                      `Hi! I need help with ${data.title.toLowerCase()}. Can I get a free consultation?`
                    );
                    const whatsappUrl = `https://wa.me/917047683995?text=${message}`;
                    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
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
          noticeCategory={data.title}
          title={`See a Real ${data.title} Format`}
          subtitle={`Preview a professionally drafted ${data.title.toLowerCase()}.`}
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
                Get Your {data.title} Drafted
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
          title={`Other ${
            data.cluster === "money-recovery"
              ? "Money Recovery"
              : data.cluster === "family"
              ? "Family Law"
              : data.cluster === "tenant-property"
              ? "Tenant & Property"
              : "Builder & Consumer"
          }`}
          titleHighlight="Legal Notices"
          subtitle="Need a different type of legal notice? We have specialized options."
          maxNotices={6}
        />

        {/* Testimonials Section */}
        <TestimonialsSection className="bg-background-gray" />

        {/* FAQs */}
        <FAQSection
          faqs={data.faqs}
          title="Frequently Asked Questions"
          subtitle={`Everything you need to know about ${data.title.toLowerCase()}`}
          showDove={true}
          enableSchema={true}
        />

        {/* Sample Notice Modal */}
        <SampleNoticeModal
          open={showSampleNoticeModal}
          onOpenChange={setShowSampleNoticeModal}
          noticeCategory={data.title}
          noticeContent={data.sampleNotice}
          ctaLabel="Need a notice like this?"
          ctaSubtitle="Our lawyers draft & send it for you."
          ctaButtonText="Generate Your Own Notice"
          onCtaClick={() => {
            setShowSampleNoticeModal(false);
            handleScrollToForm();
          }}
        />

        {/* Sticky CTA Bar (Mobile) */}
        <StickyCTABar
          price="₹499"
          ctaText="Get Started"
          onCtaClick={handleScrollToForm}
          formSectionId="multi-step-form"
        />

        {/* WhatsApp Floater */}
        <WhatsAppFloater
          phoneNumber="917047683995"
          message={`Hi! I need help with ${data.title.toLowerCase()}. Can you assist me?`}
        />
      </main>
    </>
  );
}
