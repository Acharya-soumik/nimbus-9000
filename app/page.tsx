"use client";

import { useState } from "react";

// Home Page Components
import {
  HomeHeroSection,
  ServicesSection,
  CTABanner,
  homeFeatures,
  homeTimelineSteps,
  homeFAQs,
} from "@/components/home";

// Reused Components from Legal Notice
import {
  WhySaferSection,
  HowWeWorkTimeline,
  TestimonialsSection,
  ServingCitiesSection,
  DiscountOfferModal,
} from "@/components/legal-notice";

// Shared UI Components
import { FAQSection } from "@/components/ui/faq-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";

/**
 * Home Page Testimonials Data
 * Reusing the existing testimonial section format
 */
const homeTestimonials = [
  {
    quote:
      "VakilTech made recovering my money so easy. The legal notice was professional and I got my ₹3.5 lakh back within 2 weeks!",
    name: "Priya Sharma",
    title: "Business Owner, Delhi",
  },
  {
    quote:
      "The consultation helped me understand my rights in a property dispute. Clear advice that saved me lakhs in potential losses.",
    name: "Rajesh Kumar",
    title: "Software Engineer, Bangalore",
  },
  {
    quote:
      "Excellent service for my cheque bounce case. The lawyer drafted a perfect notice and guided me through the whole process.",
    name: "Ananya Verma",
    title: "Freelancer, Mumbai",
  },
  {
    quote:
      "Got a consultation about my employment contract. The advocate spotted issues I hadn't even considered. Highly recommended!",
    name: "Vikram Singh",
    title: "HR Manager, Hyderabad",
  },
  {
    quote:
      "Affordable and professional. The legal notice was delivered quickly and the tenant finally paid the pending rent.",
    name: "Meera Patel",
    title: "Property Owner, Ahmedabad",
  },
];

/**
 * Home Page Stats
 */
const homePageStats = [
  { value: "15,000+", label: "Clients Served" },
  { value: "₹50L+", label: "Legal Fees Saved" },
  { value: "30+", label: "Expert Advocates" },
  { value: "4.9/5", label: "Customer Rating" },
];

/**
 * VakilTech Home Page
 *
 * Main landing page showcasing:
 * - Hero with dual CTAs (Legal Notice & Consultation)
 * - Services section highlighting both offerings
 * - Why Choose VakilTech section
 * - How It Works timeline
 * - Testimonials & social proof
 * - Cities served
 * - FAQs
 * - Final CTA banner
 */
export default function HomePage() {
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  return (
    <main className="relative bg-white">
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose VakilTech */}
      <WhySaferSection
        title="Why Choose"
        titleHighlight="VakilTech"
        titleSuffix="?"
        features={homeFeatures}
      />

      {/* How It Works */}
      <HowWeWorkTimeline
        heading="How VakilTech Works"
        subtitle="THREE SIMPLE STEPS"
        steps={homeTimelineSteps}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={homeTestimonials}
        stats={homePageStats}
      />

      {/* Serving Cities */}
      <ServingCitiesSection />

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to us."
        faqs={homeFAQs}
      />

      {/* Final CTA Banner */}
      <CTABanner />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloater
        phoneNumber="919876543210"
        message="Hi! I'm interested in VakilTech's legal services."
      />

      {/* Discount Modal (triggered after scroll/time) */}
      <DiscountOfferModal
        isOpen={showDiscountModal}
        onClose={() => setShowDiscountModal(false)}
        onClaimOffer={() => {
          setShowDiscountModal(false);
          // Navigate to services section
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }}
        offer={{
          headline: "Limited Time Offer!",
          subheadline: "Get expert legal help at the lowest price",
          originalPrice: 499,
          discountedPrice: 299,
          savings: 200,
        }}
      />
    </main>
  );
}
