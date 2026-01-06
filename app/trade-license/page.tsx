"use client";

import * as React from "react";
import { TradeLicenseHeroSection } from "@/components/trade-license/HeroSection";
import {
  tradeLicenseFAQs,
  tradeLicenseTimelineSteps,
  whyChooseUsPoints,
  tradeLicenseTestimonials,
  tradeLicenseDocuments,
  tradeLicenseEligibility,
} from "@/components/trade-license/trade-license-data";
import {
  HowWeWorkTimeline,
  TestimonialsSection,
} from "@/components/send-legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

/**
 * Trade License Service Page
 */
export default function TradeLicensePage() {
  return (
    <main>
      <PageViewTracker serviceType="Trade License" />

      {/* Hero Section */}
      <TradeLicenseHeroSection />

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
                Trade License
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
                  {point.iconType === "check" && (
                     <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  )}
                  {point.iconType === "clock" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  )}
                  {point.iconType === "refresh" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
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
                  Keep these documents handy. We'll assist with resizing and uploading.
                </p>
              </div>
              <ul className="space-y-4">
                {tradeLicenseDocuments.map((doc, idx) => (
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
                  WHO NEEDS IT?
                </span>
                <h3 className="mb-4 text-2xl font-bold text-text-heading">
                  Eligibility Criteria
                </h3>
                <p className="text-text-medium">
                  Mandatory for any business within municipal limits.
                </p>
              </div>
              <div className="space-y-4">
                {tradeLicenseEligibility.map((item, idx) => (
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
        heading="Registration Process"
        subtitle="Get your Trade License in 4 simple steps"
        steps={tradeLicenseTimelineSteps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Testimonials */}
      <TestimonialsSection
        className="bg-white"
        testimonials={tradeLicenseTestimonials.map((t) => ({
          quote: t.text,
          name: t.name,
          title: `${t.role}, ${t.location}`,
        }))}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={tradeLicenseFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Trade Licenses"
        showDove={true}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="917047683995"
        message="Hi! I need help with Trade License Registration. Can you guide me?"
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Trade License Registration Service",
            description: "Online Municipal Trade License Registration Service in India.",
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.in",
            },
            offers: {
              "@type": "Offer",
              price: "399",
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
