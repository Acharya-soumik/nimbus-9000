"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  HeroSection,
  HowWeWorkTimeline,
  InfoSectionVariant1,
  InfoSectionVariant2,
  InfoSectionVariant3,
  PricingCard,
  MultiStepForm,
  SampleNoticeSection,
  PopularLegalNotices,
  ServingCitiesSection,
  TestimonialsSection,
  WhySaferSection,
  type SampleNoticeContent,
  Breadcrumb,
} from "@/components/send-legal-notice";
import { AdvocateShowcase } from "@/components/start-legal-notice/AdvocateShowcase";
import { PostNoticeClarity } from "@/components/send-legal-notice/PostNoticeClarity";
import { PricingPlans } from "@/components/send-legal-notice/PricingPlans";
import { FAQSection } from "@/components/ui/faq-section";
import type { FAQItem } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { StickyCTABar } from "@/components/legal-consultation/StickyCTABar";
import { realSampleNotices } from "@/lib/send-legal-notice/real-sample-notices";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { StrengthCalculatorPromo } from "@/components/send-legal-notice/StrengthCalculatorPromo";
import { trackEvent, trackLandingPageView } from "@/lib/mixpanel";
import { RelatedContentSection } from "@/components/ui/related-content";
import { InContentLink } from "@/components/ui/in-content-link";
import { getAllCities } from "@/lib/data/cities";

// Lazy load modals to improve INP (reduces initial bundle and defers hydration)
const DiscountOfferModal = dynamic(
  () => import("@/components/send-legal-notice/DiscountOfferModal"),
  { ssr: false }
);
const ExitIntentModal = dynamic(
  () => import("@/components/send-legal-notice/ExitIntentModal"),
  { ssr: false }
);
const SampleNoticeModal = dynamic(
  () => import("@/components/send-legal-notice/SampleNoticeModal"),
  { ssr: false }
);

// Use the real money recovery notice
const moneyRecoveryNotice: SampleNoticeContent =
  realSampleNotices["money-recovery"];

// FAQ data for Legal Notice page
const legalNoticeFAQs: FAQItem[] = [
  {
    id: "what-is-legal-notice",
    question: "What is a legal notice?",
    answer: "A formal warning sent to an opponent. It signals your intent to sue if the dispute isn't resolved.",
  },
  {
    id: "why-send-legal-notice",
    question: "Why should I send a legal notice?",
    answer:
      "It proves you tried to settle. Essential for court cases. Most disputes end here.",
  },
  {
    id: "how-long-response",
    question: "How long does the recipient have to respond?",
    answer:
      "Usually 15-30 days. We specify this in your notice.",
  },
  {
    id: "cost-legal-notice",
    question: "How much does it cost?",
    answer: (
      <div className="space-y-2">
        <p>
          Flat <span className="font-semibold text-[oklch(64%_0.18_15)]">₹1,499</span>. Includes everything: drafting, revisions, and Speed Post.
        </p>
      </div>
    ),
  },
  {
    id: "what-happens-after",
    question: "What happens after sending?",
    answer:
      "Wait for their reply. If they refuse to settle, you can file a court case. This notice is your proof.",
  },
  {
    id: "how-long-takes",
    question: "How long does the process take?",
    answer:
      "Draft in 24 hours. Sent after your approval. Delivered in 5-7 days.",
  },
  {
    id: "do-i-need-lawyer",
    question: "Do I need to visit a lawyer?",
    answer:
      "No. We handle everything online. You stay home.",
  },
  {
    id: "what-documents-needed",
    question: "What documents do I need?",
    answer:
      "ID proof and any evidence (bills, agreements, chats). We'll guide you after you sign up.",
  },
];

export default function LegalNoticePage() {
  const [showDiscountModal, setShowDiscountModal] = React.useState(false);
  const [showExitModal, setShowExitModal] = React.useState(false);
  const [showSampleNoticeModal, setShowSampleNoticeModal] =
    React.useState(false);

  const [selectedPlan, setSelectedPlan] = React.useState({
    id: "basic" as "basic" | "smart",
    name: "Legal Notice Only",
    price: 1499,
    originalPrice: 1499,
    advanceAmount: 499
  });

  const handleFormSubmit = (data: {
    fullName: string;
    whatsappNumber: string;
    noticeType: string;
    description: string;
    city: string;
  }) => {
    console.log("Form submitted:", data);
    
    // Only show discount offer for Basic plan (Legal Notice Only)
    // For Guided Dispute Resolution (Smart plan), we don't show the offer
    if (selectedPlan.id !== "smart") {
      setShowDiscountModal(true);
    }
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
    // Only show exit intent for Basic plan
    if (selectedPlan.id !== "smart") {
      setShowExitModal(true);
    }
  };

  // Scroll to form handler
  const scrollToForm = () => {
    trackEvent("CTA Clicked", {
        section: "Sticky Bar/Hero",
        action: "Scroll to Form"
    });
    document
      .querySelector("#multi-step-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle scroll on mount if hash is present
  React.useEffect(() => {
    // Track Landing Page View
    trackLandingPageView("Legal Notice");

    // Small delay to ensure rendering and hash availability
    const timer = setTimeout(() => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page View Tracking */}
      <PageViewTracker serviceType="Legal Notice" />

      {/* LegalService Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "VakilTech - Legal Notice Services",
            description:
              "Professional legal notice drafting and sending services in India. Drafted by Licensed Advocates and sent via Speed Post.",
            url: "https://vakiltech.in/send-legal-notice",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Legal Notice Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Money Recovery Legal Notice",
                    description:
                      "Legal notice for recovery of pending dues, salary, or payments",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cheque Bounce Legal Notice",
                    description:
                      "Legal action under Section 138 of Negotiable Instruments Act",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Property Dispute Legal Notice",
                    description:
                      "Legal notice for property possession and builder delays",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "500",
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
            headline:
              "Send Legal Notice Online India | Expert Advocates | VakilTech",
            description:
              "Send legal notice online in India from ₹1,499. Drafted by Licensed Advocates, sent via Speed Post. Money recovery, cheque bounce, property disputes & more.",
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
              "@id": "https://vakiltech.in/send-legal-notice",
            },
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
            name: "How to Send a Legal Notice Online in India",
            description:
              "Complete step-by-step guide to send a legal notice online through VakilTech. Get expert legal notices drafted by Licensed Advocates.",
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
                text: "Provide your details and case information through our simple online form. Our AI assistant helps you provide accurate information about your legal issue.",
                image: "https://vakiltech.in/assets/common/fill-form.png",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Expert Lawyer Drafts Your Notice",
                text: "Our experienced Licensed Advocates review your case details and draft a professional, legally sound legal notice. You can review and request unlimited revisions until you're satisfied.",
                image: "https://vakiltech.in/assets/common/consut-lawyer.png",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Notice Sent via Speed Post",
                text: "Once you approve the final draft, we send your legal notice via Speed Post with Acknowledgement Due  for complete legal validity and proof of delivery.",
                image: "https://vakiltech.in/assets/common/registered-post.png",
              },
            ],
          }),
        }}
      />

      {/* WebPage Schema with Speakable (for voice assistants and AI engines) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Send Legal Notice Online India | VakilTech",
            description:
              "Send legal notice online in India from ₹1,499. Drafted by Licensed Advocates, sent via Speed Post.",
            url: "https://vakiltech.in/send-legal-notice",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".prose"],
            },
            about: {
              "@type": "Thing",
              name: "Legal Notice Services",
              description: "Professional online legal notice services in India",
            },
          }),
        }}
      />
      <main>
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-7xl px-8 pt-6 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Legal Notice", href: "/send-legal-notice" },
            ]}
          />
        </div>
        <HeroSection />
        
        {/* Strength Calculator Promo (Moved Up) */}
        <StrengthCalculatorPromo />

        {/* Drafted By Senior Advocates */}
        <AdvocateShowcase />

        {/* How We Work Section */}
        <HowWeWorkTimeline />
        
        {/* Post Notice Clarity (What Happens After) */}
        <PostNoticeClarity />
        
        {/* Why Safer Section */}
        <WhySaferSection />

        {/* Pricing Section */}
        <PricingPlans 
          onPlanSelect={(plan) => {
             setSelectedPlan(plan);
             // Scroll to form only if needed, or maybe just update state
             document.querySelector('#multi-step-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          selectedPlanId={selectedPlan.id}
        />

        {/* Multi-Step Form Section */}
        <section
          id="multi-step-form"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
                Get Your {selectedPlan.name}
              </h2>
              <p className="mt-2 text-text-medium">
                Fill out the form below to get started
              </p>
            </div>
            <MultiStepForm
              onSubmit={handleFormSubmit}
              onStepChange={(step) => console.log("Step changed:", step)}
              serviceType="Legal Notice"
              servicePrice={selectedPlan.originalPrice} // Should this be original or current? Let's pass the plan details
              planDetails={{
                id: selectedPlan.id,
                name: selectedPlan.name,
                price: selectedPlan.price,
                advanceAmount: selectedPlan.advanceAmount
              }}
            />
          </div>
        </section>
        {/* Sample Notice Preview Section */}
        <SampleNoticeSection
          noticeCategory="Money Recovery"
          title="See a Real Legal Notice Format"
          subtitle="Preview a real advocate-drafted legal notice used in actual cases."
          buttonText="View Sample Notice"
          onButtonClick={() => setShowSampleNoticeModal(true)}
        />
        {/* Popular Legal Notices Section */}
        <PopularLegalNotices
          id="popular-notices"
          notices={[
            {
              id: "recovery-of-money",
              title: "Money Recovery",
              description: "Recover pending dues, salary, or payments legally.",
              iconType: "rupee",
              href: "/send-legal-notice/legal-notice-for-money-recovery",
            },
            {
              id: "cheque-bounce",
              title: "Cheque Bounce",
              description: "Legal action under Section 138 of NI Act.",
              iconType: "cheque",
              href: "/send-legal-notice/cheque-bounce-legal-notice",
            },
            {
              id: "outstanding-payment",
              title: "Outstanding Payment",
              description: "Recover unpaid invoices and business dues.",
              iconType: "rupee",
              href: "/send-legal-notice/legal-notice-for-outstanding-payment",
            },
            {
              id: "unpaid-salary",
              title: "Unpaid Salary",
              description: "Recover unpaid wages and employment dues.",
              iconType: "rupee",
              href: "/send-legal-notice/legal-notice-for-unpaid-salary",
            },
            {
              id: "divorce",
              title: "Divorce Notice",
              description: "Legal notice for divorce proceedings.",
              iconType: "loan",
              href: "/send-legal-notice/legal-notice-for-divorce",
            },
            {
              id: "maintenance",
              title: "Maintenance",
              description: "Claim maintenance under Section 125 CrPC.",
              iconType: "rupee",
              href: "/send-legal-notice/maintenance-legal-notice",
            },
            {
              id: "tenant-eviction",
              title: "Tenant Eviction",
              description: "Lawful eviction process for landlords.",
              iconType: "loan",
              href: "/send-legal-notice/legal-notice-to-tenant",
            },
            {
              id: "rent-arrears",
              title: "Rent Arrears",
              description: "Recover unpaid rent from tenants.",
              iconType: "rupee",
              href: "/send-legal-notice/legal-notice-for-rent-arrears",
            },
            {
              id: "builder-delay",
              title: "Builder Delay",
              description: "Notice for delayed property possession.",
              iconType: "loan",
              href: "/send-legal-notice/legal-notice-to-builder",
            },
            {
              id: "property-possession",
              title: "Property Possession",
              description: "Demand timely property handover.",
              iconType: "loan",
              href: "/send-legal-notice/legal-notice-for-property-possession",
            },
            {
              id: "consumer-complaint",
              title: "Consumer Complaint",
              description: "Assert consumer rights for defects.",
              iconType: "cheque",
              href: "/send-legal-notice/consumer-complaint-legal-notice",
            },
            {
              id: "eviction",
              title: "Eviction Notice",
              description: "Legal eviction with proper procedure.",
              iconType: "loan",
              href: "/send-legal-notice/eviction-legal-notice",
            },
            {
              id: "cruelty-desertion",
              title: "Cruelty/Desertion",
              description: "Matrimonial cruelty and desertion cases.",
              iconType: "loan",
              href: "/send-legal-notice/legal-notice-for-cruelty-or-desertion",
            },
            {
              id: "criminal-defamation",
              title: "Criminal Defamation",
              description: "Legal action for defamatory statements.",
              iconType: "cheque",
              href: "/send-legal-notice/criminal-defamation-legal-notice",
            },
            {
              id: "wrongful-termination",
              title: "Wrongful Termination",
              description: "Challenge unfair dismissal from employment.",
              iconType: "loan",
              href: "/send-legal-notice/wrongful-termination-legal-notice",
            },
            {
              id: "property-partition",
              title: "Property Partition",
              description: "Legal division of jointly owned property.",
              iconType: "loan",
              href: "/send-legal-notice/property-partition-legal-notice",
            },
            {
              id: "child-custody",
              title: "Child Custody",
              description: "Legal notice for child custody matters.",
              iconType: "loan",
              href: "/send-legal-notice/child-custody-legal-notice",
            },
            {
              id: "workplace-harassment",
              title: "Workplace Harassment",
              description: "Action against workplace harassment.",
              iconType: "cheque",
              href: "/send-legal-notice/workplace-harassment-legal-notice",
            },
            {
              id: "employee-misconduct",
              title: "Employee Misconduct",
              description: "Notice for employee misconduct issues.",
              iconType: "cheque",
              href: "/send-legal-notice/employee-misconduct-legal-notice",
            },
            {
              id: "domestic-violence",
              title: "Domestic Violence",
              description: "Protection from domestic violence.",
              iconType: "loan",
              href: "/send-legal-notice/domestic-violence-legal-notice",
            },
            {
              id: "breach-of-contract",
              title: "Breach of Contract",
              description: "Enforce contract terms and obligations.",
              iconType: "cheque",
              href: "/send-legal-notice/breach-of-contract-legal-notice",
            },
          ]}
        />
        
        {/* Related Content / Cross-Linking Strategy */}
        <div className="bg-white">
            <RelatedContentSection 
                title="Frequently Needed Together"
                items={[
                    {
                        type: "service",
                        title: "Legal Consultation",
                        description: "Discuss your case with an advocate before sending notice",
                        href: "/legal-consultation"
                    },
                    {
                        type: "service",
                        title: "Agreement Drafting",
                        description: "Draft settlement agreements after notice response",
                        href: "/agreement-drafting"
                    },
                    {
                        type: "service",
                        title: "Legal Drafts Bundle",
                        description: "3500+ templates for DIY legal work",
                        href: "/legal-drafts-bundle"
                    },
                    {
                        type: "guide",
                        title: "Money Recovery Complete Guide",
                        description: "Comprehensive guide on recovering dues in India",
                        href: "/guides/money-recovery-complete-guide-india"
                    },
                    {
                        type: "guide",
                        title: "Cheque Bounce Case Procedure",
                        description: "Step-by-step process for Section 138 cases",
                        href: "/guides/cheque-bounce-case-procedure-india"
                    },
                    {
                        type: "guide",
                        title: "Divorce Process in India",
                        description: "Understanding mutual and contested divorce",
                        href: "/guides/divorce-process-india-complete-guide"
                    }
                ]}
            />
        </div>

        {/* Testimonials Section */}
        <TestimonialsSection className="bg-background-gray" />
        {/* Serving Cities Section */}
        <ServingCitiesSection
          cities={getAllCities().map((city) => ({
            id: city.id,
            name: city.name,
            state: city.state,
            href: `/send-legal-notice/legal-notice-for-money-recovery/${city.slug}`,
          }))}
          onViewAllClick={() => {
            console.log("View all cities clicked");
            scrollToForm();
          }}
        />
        {/* FAQ Section */}
        <FAQSection
          faqs={legalNoticeFAQs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about legal notices"
          showDove={true}
          enableSchema={true}
        />
        {/* Info Section Variants (Educational Content) */}
        <section className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-text-heading">Legal Notice – Complete Guide</h2>
                <p className="mt-4 text-text-medium max-w-2xl mx-auto">
                    Whether you need a <InContentLink href="/send-legal-notice/legal-notice-for-money-recovery">money recovery notice</InContentLink> for
                    unpaid debts or a <InContentLink href="/send-legal-notice/cheque-bounce-legal-notice">cheque bounce notice</InContentLink> under 
                    Section 138, our advocates ensure your legal rights are protected.
                </p>
            </div>
          {/* Variant 1 - Side by side on desktop */}
          <div id="info-variant-1" className="mx-auto max-w-md lg:max-w-none">
            <InfoSectionVariant1 onCtaClick={scrollToForm} />
          </div>

          {/* Grid of Variant 2 and 3 on desktop */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div id="info-variant-2">
              <InfoSectionVariant2
                ctaCards={[
                  {
                    variant: "primary" as const,
                    title: "Start Lawyer Review",
                    subtitle: "₹499 advance · Lawyer verified",
                    price: "₹1,499",
                    onClick: scrollToForm,
                  },
                  {
                    variant: "secondary" as const,
                    title: "Talk to a Lawyer",
                    price: "₹299",
                    priceUnit: "/call",
                    onClick: () => {
                      const message = encodeURIComponent(
                        "Hi! I need help with a legal notice. Can I get a free consultation?"
                      );
                      const whatsappUrl = `https://wa.me/917047683995?text=${message}`;
                      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                    },
                  },
                ]}
              />
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
          ctaButtonText="Start Lawyer Review"
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
          phoneNumber="917047683995"
          message="Hi! I'm interested in getting a legal notice drafted. Can you help me?"
        />
        {/* Sticky CTA Bar (Mobile) */}
        <StickyCTABar
          price="₹499 advance · Lawyer verified"
          ctaText="Start Lawyer Review"
          onCtaClick={scrollToForm}
          formSectionId="multi-step-form"
        />
      </main>
    </>
  );
}
