
import type { Metadata } from "next";
import * as React from "react";
import { AgreementHeroSection } from "@/components/agreement-drafting/HeroSection";
import {
  employmentFAQs,
  employmentTimelineSteps,
  whyChooseUsPoints,
  employmentTestimonials,
  employmentDocuments,
  employmentEligibility,
  heroFlipWords,
  heroFeatureBadges,
} from "@/components/agreement-drafting/employment-data";
import {
  HowWeWorkTimeline,
  TestimonialsSection,
} from "@/components/send-legal-notice";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";

export const metadata: Metadata = {
  title: "Employment Agreement Drafting | Job Contract Format @ ₹499 | VakilTech",
  description:
    "Get professional Employment Agreements drafted online. Includes Non-compete, IP rights, and Probation clauses. Lawyer verified drafts for Startups & SMEs.",
  keywords: [
    "employment agreement drafting",
    "job contract format",
    "employee bond agreement",
    "appointment letter format",
    "service agreement drafting",
  ],
  openGraph: {
    title: "Employment Agreement Drafting | Job Contract Format @ ₹499",
    description: "Protect your business with expert-drafted employment contracts.",
    url: "https://vakiltech.in/agreement-drafting/employment-agreement",
    type: "website",
  },
};

/**
 * Employment Agreement Service Page
 */
export default function EmploymentAgreementPage() {
  return (
    <main>
      <PageViewTracker serviceType="Employment Agreement" />

      {/* Hero Section */}
      <AgreementHeroSection
        title="Employment Agreement"
        subtitle="Professional Drafting"
        price={499}
        flipWords={heroFlipWords}
        featureBadges={heroFeatureBadges}
        imageSrc="/assets/our-services/employment-agreement.png"
        imageAlt="Employment Agreement Drafting"
        serviceName="Employment Agreement"
        pricingFeatures={[
            "HR Compliant",
            "IP Protection",
            "Delivered in 48 Hrs",
        ]}
      />

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
                name: "Agreement Drafting",
                item: "https://vakiltech.in/agreement-drafting",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Employment Agreement",
                item: "https://vakiltech.in/agreement-drafting/employment-agreement",
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
              WHY VAKILTECH
            </span>
            <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
              Why Choose Us for{" "}
              <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
                Employment Contracts
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
                  {point.iconType === "shield" && (
                    <svg className="h-6 w-6 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
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
                  REQUIREMENTS
                </span>
                <h3 className="mb-4 text-2xl font-bold text-text-heading">
                  Information Needed
                </h3>
                <p className="text-text-medium">
                  Key details to customize the contract.
                </p>
              </div>
              <ul className="space-y-4">
                {employmentDocuments.map((doc, idx) => (
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
                  BENEFICIARIES
                </span>
                <h3 className="mb-4 text-2xl font-bold text-text-heading">
                  Who is this for?
                </h3>
                <p className="text-text-medium">
                  Ideal for businesses of all sizes.
                </p>
              </div>
              <div className="space-y-4">
                {employmentEligibility.map((item, idx) => (
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
        heading="Drafting Process"
        subtitle="Professional contracts in 3 steps"
        steps={employmentTimelineSteps.map((step) => ({
          title: step.title,
          description: step.description,
        }))}
      />

      {/* Testimonials */}
      <TestimonialsSection
        className="bg-white"
        testimonials={employmentTestimonials.map((t) => ({
          quote: t.text,
          name: t.name,
          title: `${t.role}, ${t.location}`,
        }))}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={employmentFAQs}
        title="Frequently Asked Questions"
        subtitle="Common questions about Hiring Contracts"
        showDove={true}
      />

      {/* WhatsApp Floater */}
      <WhatsAppFloater
        phoneNumber="917047683995"
        message="Hi! I need help drafting an Employment Agreement for my team."
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Employment Agreement Drafting",
            description: "Online Employment Agreement Drafting for Startups & SMEs. Includes IP protection and non-compete clauses.",
            provider: {
              "@type": "Organization",
              name: "VakilTech",
              url: "https://vakiltech.in",
            },
            offers: {
              "@type": "Offer",
              price: "499",
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
