"use client";

import * as React from "react";
import { ITRHeroSection } from "@/components/itr-filing/HeroSection";
import {
  itrFAQs,
  itrTimelineSteps,
  whyChooseUsPoints,
  itrTestimonials,
  itrDocuments,
  itrEligibility,
} from "@/components/itr-filing/itr-data";
import {
  HowWeWorkTimeline,
  TestimonialsSection,
} from "@/components/send-legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

/**
 * ITR Filing Service Page
 */
export default function ITRFilingPage() {
  return (
    <main>
      <PageViewTracker serviceType="ITR Filing" />

      {/* Hero Section */}
      <ITRHeroSection />

      {/* Why Choose Us */}
      <section className="bg-background-gray py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
              WHY VAKILTECH
            </span>
            <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              Why Choose Us for{" "}
              <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
                ITR Filing
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {whyChooseUsPoints.map((point) => (
              <div
                key={point.id}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md hover:ring-teal/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light">
                  {point.iconType === "shield" && (
                     <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  )}
                  {point.iconType === "expert" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  )}
                  {point.iconType === "chat" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
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

      {/* Documents and Eligibility */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Documents */}
            <div>
              <div className="mb-6">
                 <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-teal">
                  CHECKLIST
                </span>
                <h3 className="mb-4 text-2xl font-bold text-text-heading">
                  Documents Required
                </h3>
                <p className="text-text-medium">
                  We'll review these to maximize your deductions.
                </p>
              </div>
              <ul className="space-y-4">
                {itrDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-medium text-text-body">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <div className="mb-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-teal">
                  WHO SHOULD FILE?
                </span>
                <h3 className="mb-4 text-2xl font-bold text-text-heading">
                  Eligibility & Benefits
                </h3>
                <p className="text-text-medium">
                  Filing ITR is crucial for financial health and compliance.
                </p>
              </div>
              <div className="space-y-4">
                {itrEligibility.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
                    <h4 className="mb-1 font-bold text-text-heading">{item.title}</h4>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowWeWorkTimeline
        heading="Filing Process"
        subtitle="File your ITR in 4 simple steps"
        steps={itrTimelineSteps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Testimonials */}
      <TestimonialsSection
        className="bg-white"
        testimonials={itrTestimonials.map((t) => ({
          quote: t.text,
          name: t.name,
          title: `${t.role}, ${t.location}`,
        }))}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={itrFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about ITR Filing"
        showDove={true}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="917047683995"
        message="Hi! I need help with tax filing. Can you calculate my refund?"
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Online ITR Filing Service",
            description: "Expert CA assisted ITR filing service in India starting at ₹599.",
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.in",
            },
            offers: {
              "@type": "Offer",
              price: "599",
              priceCurrency: "INR",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
          }),
        }}
      />
    </main>
  );
}
