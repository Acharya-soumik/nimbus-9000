"use client";

import * as React from "react";
import {
  HeroSection,
  NoticeTypeSelector,
  CalculatorForm,
  ResultModal,
  StrengthIntro,
  StrengthToolLogic,
  StrengthOutcomes,
  StrengthScenarios,
  type NoticeType,
  type CaseStrengthResult,
} from "@/components/legal-notice-strength";
import { FAQSection } from "@/components/ui/faq-section";
import type { FAQItem } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { ServiceAdCard } from "@/components/blogs/ServiceAdCard";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { pushToDataLayer } from "@/lib/analytics/dataLayer";
import { TestimonialsSection } from "@/components/send-legal-notice/testimonials-section";
import { RelatedNoticesSection } from "@/components/send-legal-notice/RelatedNoticesSection";

// FAQ data for Legal Notice Strength Calculator
const calculatorFAQs: FAQItem[] = [
  {
    id: "what-is-calculator",
    question: "What is the Legal Notice Strength Calculator?",
    answer:
      "The Legal Notice Strength Calculator is a free tool that helps you assess the strength of your legal case before sending a legal notice. By answering a few questions about your situation, you'll receive a personalized score (0-100) and expert recommendations on the best next steps.",
  },
  {
    id: "factors-make-notice-strong",
    question: "What factors make a legal notice strong?",
    answer: (
      <div className="space-y-2">
        <p>A strong legal notice is built on clear evidence and procedure. Key factors include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Written Evidence:</strong> Contracts, invoices, emails, or chat history.</li>
          <li><strong>Clear Demand:</strong> A specific amount or action required.</li>
          <li><strong>Timeline:</strong> Acting within the limitation period (e.g., 30 days for cheque bounce).</li>
          <li><strong>Previous Communication:</strong> Record of trying to resolve the issue amicably.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "without-lawyer",
    question: "Can I send a legal notice without a lawyer?",
    answer:
      "Yes, you technically can send a notice yourself, but it is highly risky. A notice sent by a lawyer has more weight, legal validity, and ensures you don't accidentally admit to something that hurts your case later. Lawsuits are often won or lost based on the initial notice content.",
  },
  {
    id: "how-accurate",
    question: "How do I interpret my strength score?",
    answer: (
      <div className="space-y-2">
        <p>Your strength score is an indicator of case readiness:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>80-100%:</strong> Very Strong. You have excellent proof and legitimate grounds.</li>
          <li><strong>60-79%:</strong> Strong. Good case, but ensure you organize your documents well.</li>
          <li><strong>40-59%:</strong> Moderate. You might be missing some evidence or the timeline is tricky. Consult a lawyer.</li>
          <li><strong>Below 40%:</strong> Weak/Risky. You may need to gather more proof before taking action.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "low-score",
    question: "What if my strength score is low?",
    answer:
      "A low score doesn't always mean you have no case—it means you need to prepare better. It often highlights missing evidence (like a written contract) or procedural issues. We recommend booking a consultation with our experts to find alternative legal strategies.",
  },
  {
    id: "replace-lawyer",
    question: "Does this calculator replace a lawyer review?",
    answer:
      "No. This calculator provides a preliminary assessment based on general legal principles. It does not replace professional legal advice. Every case has unique nuances that only a human lawyer can evaluate fully.",
  },
  {
    id: "is-it-free",
    question: "Is the calculator really free?",
    answer:
      "Yes, the Legal Notice Strength Calculator is completely free to use with no hidden charges. There's no obligation to purchase any services.",
  },
  {
    id: "is-data-secure",
    question: "Is my information confidential?",
    answer:
      "Absolutely. All information you provide is encrypted and stored securely. We take your privacy seriously and will never share your personal information with third parties without your consent.",
  },
];

export default function LegalNoticeStrengthPage() {
  const [step, setStep] = React.useState<
    "hero" | "selector" | "questionnaire" | "result"
  >("hero");
  const [selectedNoticeType, setSelectedNoticeType] =
    React.useState<NoticeType | null>(null);
  const [result, setResult] = React.useState<CaseStrengthResult | null>(null);
  const [showResultModal, setShowResultModal] = React.useState(false);

  const handleGetStarted = () => {
    setStep("selector");
    // Scroll to selector section
    setTimeout(() => {
      document
        .querySelector("#notice-type-selector")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleNoticeTypeSelect = (noticeType: NoticeType) => {
    setSelectedNoticeType(noticeType);
    setStep("questionnaire");
    // Scroll to questionnaire
    setTimeout(() => {
      document
        .querySelector("#calculator-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCalculationComplete = (calculatedResult: CaseStrengthResult) => {
    // Track detailed analytics event
    pushToDataLayer({
      event: "strength_calculation_complete",
      notice_type: calculatedResult.notice_type,
      score: calculatedResult.score,
      confidence: calculatedResult.confidence,
      strength_factors: calculatedResult.strength_factors,
      risk_factors: calculatedResult.risk_factors,
      result_bucket: calculatedResult.score >= 60 ? "strong" : "weak",
      timestamp: new Date().toISOString(),
    });

    setResult(calculatedResult);
    setShowResultModal(true);
    setStep("result");
  };

  const handlePrimaryCTA = () => {
    setShowResultModal(false);
    // Route based on score
    if (result && result.score >= 60) {
      // Strong case - redirect to legal notice service form
      window.location.href = "/send-legal-notice#multi-step-form";
    } else {
      // Weak/Moderate case - redirect to consultation form
      window.location.href = "/legal-consultation#consultation-form";
    }
  };

  const handleSecondaryCTA = () => {
    setShowResultModal(false);
    // Secondary action based on score
    if (result && result.score >= 60) {
      // Get lawyer review
      window.location.href = "/legal-consultation#consultation-form";
    } else {
      // Send notice anyway (for moderate cases)
      window.location.href = "/send-legal-notice#multi-step-form";
    }
  };

  const handleStartOver = () => {
    setStep("selector");
    setSelectedNoticeType(null);
    setResult(null);
    setShowResultModal(false);
  };

  return (
    <>
      {/* Page View Tracking */}
      <PageViewTracker serviceType="Legal Notice Strength Calculator" />

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Legal Notice Strength Calculator - VakilTech",
            description:
              "Free online tool to assess your legal notice case strength. Get instant score and expert recommendations in 3-4 minutes.",
            url: "https://vakiltech.in/legal-notice-strength",
            applicationCategory: "LegalService",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.in",
            },
          }),
        }}
      />

      <main>
        {/* Hero Section - Always Visible */}
        <HeroSection onGetStarted={handleGetStarted} />

        {/* SEO Intro Section - NEW */}
        <StrengthIntro />

        {/* Notice Type Selector */}
        {(step === "selector" ||
          step === "questionnaire" ||
          step === "result") && (
          <div id="notice-type-selector">
            <NoticeTypeSelector onSelect={handleNoticeTypeSelect} />
          </div>
        )}

        {/* Calculator Form */}
        {step === "questionnaire" && selectedNoticeType && (
          <section
            id="calculator-form"
            className="bg-background-gray py-12 lg:py-16"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">
                  Answer a Few Questions
                </h2>
                <p className="mt-2 text-text-medium">
                  Help us understand your case to provide an accurate assessment
                </p>
              </div>

              <CalculatorForm
                noticeType={selectedNoticeType}
                onComplete={handleCalculationComplete}
              />

              {/* Back to Selection */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setStep("selector")}
                  className="text-sm text-text-muted hover:text-text-medium underline"
                >
                  ← Back to Notice Type Selection
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Result Section (after modal) */}
        {step === "result" && result && (
          <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg text-center">
                <h2 className="text-2xl font-bold text-text-heading mb-4">
                  Assessment Complete!
                </h2>
                <p className="text-text-medium mb-6">
                  Your case strength score: <strong>{result.score}%</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handlePrimaryCTA}
                    className="rounded-xl bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition-colors"
                  >
                    {result.score >= 60
                      ? "Generate Legal Notice"
                      : "Consult Lawyer"}
                  </button>
                  <button
                    onClick={handleStartOver}
                    className="rounded-xl border-2 border-gray-300 px-6 py-3 text-text-medium font-semibold hover:border-gray-400 transition-colors"
                  >
                    Start New Assessment
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tool Logic / How it Works - IMPROVED */}
        <StrengthToolLogic />

        {/* What Happens Next / Outcomes - NEW */}
        <StrengthOutcomes />

        {/* User Scenarios - NEW */}
        <StrengthScenarios />

        {/* How It Works Section - Visual Steps (Retained as visual guide) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
                Simple 3-Step Process
              </h2>
            </div>
            {/* ... Existing 3 step visual content ... */}
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Select Notice Type",
                  description:
                    "Choose the category that matches your legal situation",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Answer Questions",
                  description:
                    "Provide details about your case through our simple questionnaire",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Get Your Score",
                  description:
                    "Receive instant assessment with personalized recommendations",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    {item.icon}
                  </div>
                  <div className="mb-2 text-sm font-bold text-orange-600">
                    STEP {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-text-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Service Promotion */}
        <section className="py-8">
           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <ServiceAdCard
              serviceName="Send Legal Notice through Expert Advocates"
              serviceDescription="Don't want to rely on AI? Get your legal notice drafted by verified expert advocates."
              price={{ current: 1499, original: 3999 }}
              badge="Expert Service"
              ctaText="Start Now"
              ctaLink="/send-legal-notice"
              variant="full-width"
            />
          </div>
        </section>

        {/* Testimonials - TRUST SIGNALS */}
        <TestimonialsSection
          title="Clients Who Trusted Our Analysis"
          subtitle="See how knowing their case strength helped these clients win."
        />

        {/* FAQ Section */}
        <FAQSection
          faqs={calculatorFAQs}
          title="Frequently Asked Questions"
          subtitle="Expert answers to common questions about legal notice strength"
          showDove={true}
          enableSchema={true}
        />

        {/* Related Notices - INTERNAL LINKS */}
        <RelatedNoticesSection
           label="EXPLORE SERVICES"
           title="Related"
           titleHighlight="Legal Services"
           subtitle="Found your strength score? Here are the notices specific to your needs."
        />

        {/* Important Legal Disclaimer */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-yellow-900">
                ⚠️ Important Legal Disclaimer
              </h3>
              <div className="space-y-2 text-sm text-yellow-800">
                <p>
                  This calculator provides <strong>guidance only</strong> and
                  does not:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create an attorney-client relationship</li>
                  <li>Constitute legal advice</li>
                  <li>Replace consultation with a qualified lawyer</li>
                  <li>Guarantee any legal outcome</li>
                </ul>
                <p className="mt-3">
                  Results are based solely on your inputs. Actual case outcomes
                  depend on complete document review by a lawyer, court
                  jurisdiction, opposing party's response, and other factors.
                </p>
                <p className="font-semibold">
                  Statutory deadlines are critical. Missing a deadline can
                  destroy your case regardless of its strength. Consult a lawyer
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Result Modal */}
        {result && (
          <ResultModal
            open={showResultModal}
            onOpenChange={setShowResultModal}
            result={result}
            onPrimaryCTA={handlePrimaryCTA}
            onSecondaryCTA={handleSecondaryCTA}
          />
        )}

        {/* WhatsApp Floater */}
        <WhatsAppFloater
          phoneNumber="917047683995"
          message="Hi! I used the Legal Notice Strength Calculator and would like to discuss my case."
        />
      </main>
    </>
  );
}
