

import type { Metadata } from 'next';

import * as React from "react";
import { FSSAIHeroSection } from "@/components/fssai-registration/HeroSection";
import {
  fssaiFAQs,
  fssaiTimelineSteps,
  whyChooseUsPoints,
  fssaiTestimonials,
  fssaiDocuments,
  fssaiLicenseTypes,
  fssaiBenefits,
  fssaiPenalties,
} from "@/components/fssai-registration/fssai-data";
import {
  HowWeWorkTimeline,
  TestimonialsSection,
} from "@/components/send-legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

export const metadata: Metadata = {
  title: "FSSAI Registration Online | Food License Apply @ ₹429 | VakilTech",
  description:
    "Apply for FSSAI Registration Online in India starting @ ₹429. Get your Food License (FosCos) quickly via VakilTech. 100% Online, Expert Support, Avoid Penalties.",
  keywords: [
    "fssai registration online",
    "food license apply",
    "fssai license registration",
    "foscos registration",
    "food safety license",
    "fssai registration fees",
  ],
  openGraph: {
    title: "FSSAI Registration Online | Food License Apply @ ₹429",
    description: "Get your FSSAI Food License online with VakilTech. Expert assistance, transparent pricing.",
    url: "https://vakiltech.in/fssai-registration",
    type: "website",
    images: [
      {
        url: "/assets/services/fssai-registration.png", // Assuming this exists or generic
        width: 1200,
        height: 630,
        alt: "FSSAI Registration Service",
      },
    ],
  },
};

/**
 * FSSAI Registration Service Page
 */
export default function FSSAIRegistrationPage() {
  return (
    <main>
      <PageViewTracker serviceType="FSSAI Registration" />

      {/* Hero Section */}
      <FSSAIHeroSection />

      {/* Breadcrumb Schema */}
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
                name: "FSSAI Registration",
                item: "https://vakiltech.in/fssai-registration",
              },
            ],
          }),
        }}
      />

      {/* Why Choose Us */}
      <section className="bg-background-gray py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
              WHY COMPLY?
            </span>
            <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              Benefits of FSSAI Registration
            </h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fssaiBenefits.map((benefit, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                   {/* Simple icon mapping */}
                   <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {benefit.icon === "scale" && <path d="M12 3v19M5 8h14M3 14h18" />}
                    {benefit.icon === "shield-check" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                    {benefit.icon === "trending-up" && <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />}
                    {benefit.icon === "building-library" && <path d="M4 22h16M4 18h16M6 14h4m4 0h4m-8-4h-4m8 0h4m-10-8v6m8-6v6" />}
                   </svg>
                </div>
                <h3 className="mb-2 font-bold text-text-heading">{benefit.title}</h3>
                <p className="text-sm text-text-medium">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-10 text-center">
             <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-teal">
              WHY VAKILTECH
            </span>
            <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              Why Choose Us for FSSAI
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {whyChooseUsPoints.map((point, index) => (
              <div
                key={point.id}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md hover:ring-teal/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light">
                  {/* Basic Icon Swapping based on type since we don't have a dynamic icon component exported yet */}
                  {point.iconType === "shield" && (
                     <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  )}
                  {point.iconType === "clock" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  )}
                  {point.iconType === "document" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
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

      {/* Documents and License Types */}
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
                  Keep these documents handy for a smooth registration process.
                </p>
              </div>
              <ul className="space-y-4">
                {fssaiDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-medium text-text-body">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* License Types */}
            <div>
              <div className="mb-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-teal">
                  ELIGIBILITY
                </span>
                <h3 className="mb-4 text-2xl font-bold text-text-heading">
                  Types of FSSAI Licenses
                </h3>
                <p className="text-text-medium">
                  Select the right license based on your business turnover.
                </p>
              </div>
              <div className="space-y-4">
                {fssaiLicenseTypes.map((type, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
                    <h4 className="mb-1 font-bold text-text-heading">{type.title}</h4>
                    <p className="mb-2 text-xs font-semibold uppercase text-teal">
                      {type.criteria}
                    </p>
                    <p className="text-sm text-text-muted">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Section - Warning */}
      <section className="bg-red-50/50 py-12">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
               <div className="lg:w-1/3">
                  <h3 className="mb-4 text-2xl font-bold text-text-heading">Avoid Heavy Penalties</h3>
                  <p className="text-text-medium mb-6">
                    FSSAI has strict guidelines for food safety. Non-compliance can lead to imprisonment and hefty fines.
                  </p>
                  <a href="#fssai-form-desktop" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700">
                    Get Compliant Now
                  </a>
               </div>
               <div className="lg:w-2/3">
                  <div className="grid gap-4 sm:grid-cols-2">
                     {fssaiPenalties.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm">
                           <div className="flex-shrink-0 text-red-500">
                              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                           </div>
                           <div>
                              <h4 className="font-bold text-text-heading">{item.offense}</h4>
                              <p className="text-sm font-medium text-red-600">{item.penalty}</p>
                           </div>
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
        subtitle="Get your FSSAI license in 4 simple steps"
        steps={fssaiTimelineSteps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Testimonials */}
      <TestimonialsSection
        className="bg-white"
        testimonials={fssaiTestimonials.map((t) => ({
          quote: t.text,
          name: t.name,
          title: `${t.role}, ${t.location}`,
        }))}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={fssaiFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about FSSAI Registration"
        showDove={true}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="917047683995"
        message="Hi! I need help with FSSAI Registration. Can you guide me?"
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "FSSAI Registration Service",
            description: "Online FSSAI Registration and Food License Service in India.",
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.in",
            },
            offers: {
              "@type": "Offer",
              price: "429",
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
