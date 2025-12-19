"use client";

import * as React from "react";
import {
  HeroSection,
  HowWeWorkTimeline,
  InfoSectionVariant1,
  InfoSectionVariant2,
  InfoSectionVariant3,
  PricingCard,
  MultiStepForm,
  DiscountOfferModal,
  ExitIntentModal,
  SampleNoticeSection,
  SampleNoticeModal,
  PopularLegalNotices,
  ServingCitiesSection,
  TestimonialsSection,
  WhySaferSection,
  type SampleNoticeContent,
  Breadcrumb,
} from "@/components/legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import type { FAQItem } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { StickyCTABar } from "@/components/legal-consultation/StickyCTABar";
import { realSampleNotices } from "@/lib/legal-notice/real-sample-notices";

// Use the real money recovery notice
const moneyRecoveryNotice: SampleNoticeContent = realSampleNotices["money-recovery"];

// FAQ data for Legal Notice page
const legalNoticeFAQs: FAQItem[] = [
  {
    id: "what-is-legal-notice",
    question: "What is a legal notice?",
    answer: (
      <div className="space-y-2">
        <p>
          A legal notice is a formal written communication that informs an
          individual or entity about a legal matter. It serves as an official
          record of intent to take legal action if the matter is not resolved.
        </p>
        <p>
          Legal notices are commonly used in cases of breach of contract,
          property disputes, cheque bounces, defamation, and other civil
          matters.
        </p>
      </div>
    ),
  },
  {
    id: "why-send-legal-notice",
    question: "Why should I send a legal notice?",
    answer:
      "A legal notice serves multiple purposes: it formally documents your grievance, provides the recipient an opportunity to resolve the matter amicably, and establishes a record that you attempted to settle the dispute before approaching the court. It can often lead to resolution without expensive and time-consuming litigation.",
  },
  {
    id: "how-long-response",
    question: "How long does the recipient have to respond?",
    answer:
      "Typically, the recipient is given 15-30 days to respond to a legal notice, though this can vary depending on the nature of the case and applicable laws. The response period should be clearly mentioned in the notice itself.",
  },
  {
    id: "cost-legal-notice",
    question: "How much does it cost to send a legal notice?",
    answer: (
      <div className="space-y-2">
        <p>
          The cost varies based on the complexity of the case and the lawyer's
          fees. With Vakil Tech, we offer transparent pricing starting from{" "}
          <span className="font-semibold text-[oklch(64%_0.18_15)]">
            ₹1,499
          </span>
          , making legal services accessible to everyone.
        </p>
        <p>
          This includes drafting by High Court advocates, unlimited revisions,
          sending via registered post, and 24/7 support.
        </p>
      </div>
    ),
  },
  {
    id: "what-happens-after",
    question: "What happens after sending a legal notice?",
    answer:
      "After the notice is sent, the recipient may respond with their position, propose a settlement, or choose not to respond. If no satisfactory response is received within the specified time period, you can proceed with filing a case in court. The legal notice serves as evidence that you attempted resolution before litigation.",
  },
  {
    id: "how-long-takes",
    question: "How long does the process take?",
    answer:
      "With Vakil Tech, the drafting process typically takes 24-48 hours. Once drafted and approved by you, the notice is sent via registered post, which takes 5-7 business days for delivery. You'll receive tracking updates at every step.",
  },
  {
    id: "do-i-need-lawyer",
    question: "Do I need to visit a lawyer's office?",
    answer:
      "No! Our entire process is 100% online. Simply fill out our form, and our experienced High Court advocates will draft your notice. You can review, request revisions, and approve everything from the comfort of your home.",
  },
  {
    id: "what-documents-needed",
    question: "What documents do I need to provide?",
    answer:
      "The required documents vary by case type, but generally include: identity proof, relevant contracts or agreements, proof of transaction (for money recovery), correspondence with the other party, and any other supporting evidence. Our team will guide you on specific requirements after you submit your initial details.",
  },
];

export default function LegalNoticePage() {
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);
  const [showExitModal, setShowExitModal] = React.useState(false);
  const [showSampleNoticeModal, setShowSampleNoticeModal] =
    React.useState(false);

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

  const handleClaimOffer = (discountedPrice?: number) => {
    console.log("Offer claimed!", discountedPrice);
    setShowDiscountModal(false);
    setShowExitModal(false);
  };

  const handleBookConsultation = (consultationPrice?: number) => {
    console.log("Consultation booked!", consultationPrice);
    setShowExitModal(false);
  };

  const handleExitIntent = () => {
    // This would be triggered by exit intent detection
    setShowExitModal(true);
  };

  // Scroll to form handler
  const scrollToForm = () => {
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
          ]}
        />
      </div>
      <HeroSection />
      <HowWeWorkTimeline />
      {/* Why Safer Section */}
      <WhySaferSection />
      {/* Multi-Step Form Section */}
      <section
        id="multi-step-form"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
              Get Your Legal Notice Drafted
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
      </section>{" "}
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
                "Drafted by High Court Advocate",
                "Sent via Registered Post",
                "Unlimited Revisions",
                "24/7 Support",
                "Legal Consultation",
              ]}
              totalLabel="TOTAL PAYABLE"
            />
          </div>
        </div>
      </section>
      {/* Sample Notice Preview Section */}
      <SampleNoticeSection
        noticeCategory="Money Recovery"
        title="See a Real Legal Notice Format"
        subtitle="Preview a professionally drafted legal notice."
        buttonText="View Sample Notice"
        onButtonClick={() => setShowSampleNoticeModal(true)}
      />
      {/* Popular Legal Notices Section */}
      <PopularLegalNotices
        notices={[
          {
            id: "recovery-of-money",
            title: "Money Recovery",
            description: "Recover pending dues, salary, or payments legally.",
            iconType: "rupee",
            href: "/legal-notice/legal-notice-for-money-recovery",
          },
          {
            id: "cheque-bounce",
            title: "Cheque Bounce",
            description: "Legal action under Section 138 of NI Act.",
            iconType: "cheque",
            href: "/legal-notice/cheque-bounce-legal-notice",
          },
          {
            id: "outstanding-payment",
            title: "Outstanding Payment",
            description: "Recover unpaid invoices and business dues.",
            iconType: "rupee",
            href: "/legal-notice/legal-notice-for-outstanding-payment",
          },
          {
            id: "unpaid-salary",
            title: "Unpaid Salary",
            description: "Recover unpaid wages and employment dues.",
            iconType: "rupee",
            href: "/legal-notice/legal-notice-for-unpaid-salary",
          },
          {
            id: "divorce",
            title: "Divorce Notice",
            description: "Legal notice for divorce proceedings.",
            iconType: "loan",
            href: "/legal-notice/legal-notice-for-divorce",
          },
          {
            id: "maintenance",
            title: "Maintenance",
            description: "Claim maintenance under Section 125 CrPC.",
            iconType: "rupee",
            href: "/legal-notice/maintenance-legal-notice",
          },
          {
            id: "tenant-eviction",
            title: "Tenant Eviction",
            description: "Lawful eviction process for landlords.",
            iconType: "loan",
            href: "/legal-notice/legal-notice-to-tenant",
          },
          {
            id: "rent-arrears",
            title: "Rent Arrears",
            description: "Recover unpaid rent from tenants.",
            iconType: "rupee",
            href: "/legal-notice/legal-notice-for-rent-arrears",
          },
          {
            id: "builder-delay",
            title: "Builder Delay",
            description: "Notice for delayed property possession.",
            iconType: "loan",
            href: "/legal-notice/legal-notice-to-builder",
          },
          {
            id: "property-possession",
            title: "Property Possession",
            description: "Demand timely property handover.",
            iconType: "loan",
            href: "/legal-notice/legal-notice-for-property-possession",
          },
          {
            id: "consumer-complaint",
            title: "Consumer Complaint",
            description: "Assert consumer rights for defects.",
            iconType: "cheque",
            href: "/legal-notice/consumer-complaint-legal-notice",
          },
          {
            id: "eviction",
            title: "Eviction Notice",
            description: "Legal eviction with proper procedure.",
            iconType: "loan",
            href: "/legal-notice/eviction-legal-notice",
          },
          {
            id: "cruelty-desertion",
            title: "Cruelty/Desertion",
            description: "Matrimonial cruelty and desertion cases.",
            iconType: "loan",
            href: "/legal-notice/legal-notice-for-cruelty-or-desertion",
          },
        ]}
      />
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
        faqs={legalNoticeFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about legal notices"
        showDove={true}
      />
      {/* Info Section Variants for Testing */}
      <section className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {/* Variant 1 - Side by side on desktop */}
        <div id="info-variant-1" className="mx-auto max-w-md lg:max-w-none">
          <InfoSectionVariant1 />
        </div>

        {/* Grid of Variant 2 and 3 on desktop */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div id="info-variant-2">
            <InfoSectionVariant2 />
          </div>
          <div id="info-variant-3">
            <InfoSectionVariant3 />
          </div>
        </div>
      </section>
      {/* Discount Offer Modal */}
      <DiscountOfferModal
        isOpen={showDiscountModal}
        onClose={() => setShowDiscountModal(false)}
        offer={{
          headline: "Trust Our Process",
          originalPrice: 499,
          discountedPrice: 299,
          savings: 200,
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
        originalPrice={499}
      />
      {/* Sample Notice Modal */}
      <SampleNoticeModal
        open={showSampleNoticeModal}
        onOpenChange={setShowSampleNoticeModal}
        noticeCategory="Money Recovery"
        noticeContent={moneyRecoveryNotice}
        ctaLabel="Need a notice like this?"
        ctaSubtitle="Our lawyers draft & send it for you."
        ctaButtonText="Generate Your Own Notice"
        onCtaClick={() => {
          setShowSampleNoticeModal(false);
          // Scroll to form section
          document
            .querySelector("#multi-step-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="919876543210"
        message="Hi! I'm interested in getting a legal notice drafted. Can you help me?"
      />
      {/* Sticky CTA Bar (Mobile) */}
      <StickyCTABar
        price="From ₹1,499"
        ctaText="Get Started"
        onCtaClick={scrollToForm}
        formSectionId="multi-step-form"
      />
    </main>
  );
}
