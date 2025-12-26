import type { Metadata } from "next";

// About Page Components
import {
  AboutHeroSection,
  CoreValuesSection,
  WhyVakilTechSection,
  TransparencySection,
  ImpactStatsSection,
  CorporateClientsSection,
  TeamSection,
  ServicesCTASection,
  aboutTestimonials,
  aboutStats,
} from "@/components/about";

// Reused Components
import { TestimonialsSection } from "@/components/send-legal-notice/testimonials-section";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";

/**
 * SEO Metadata for About Page
 */
export const metadata: Metadata = {
  title: "About VakilTech | Affordable Legal Services for Every Indian",
  description:
    "Learn why 15,000+ Indians trust VakilTech for legal notices and consultations. Transparent pricing, expert advocates, and genuine solutions. Save 80% on legal fees.",
  keywords: [
    "VakilTech",
    "about us",
    "legal services India",
    "affordable lawyers",
    "transparent legal fees",
    "online legal help",
    "legal notice service",
    "legal consultation India",
  ],
  openGraph: {
    title: "About VakilTech | Affordable Legal Services for Every Indian",
    description:
      "Learn why 15,000+ Indians trust VakilTech for legal notices and consultations. Transparent pricing, expert advocates, and genuine solutions.",
    type: "website",
    locale: "en_IN",
  },
};

/**
 * About Page
 *
 * Comprehensive page showcasing:
 * - VakilTech's mission and vision
 * - Core values and principles
 * - Why choose VakilTech (differentiators)
 * - Pricing transparency philosophy
 * - Impact and statistics
 * - Corporate partnerships
 * - Team expertise (without names)
 * - Testimonials
 * - Service CTAs
 */
export default function AboutPage() {
  return (
    <main className="relative bg-white">
      {/* Hero Section - Mission & Vision */}
      <AboutHeroSection />

      {/* Core Values */}
      <CoreValuesSection />

      {/* Why VakilTech - Differentiators */}
      <WhyVakilTechSection />

      {/* Transparency Section - KEY: Pricing Philosophy */}
      <TransparencySection />

      {/* Impact Stats */}
      <ImpactStatsSection />

      {/* Corporate Clients */}
      <CorporateClientsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <TestimonialsSection
        title="What Our Clients Say About Us"
        subtitle="Real stories from real people who experienced the VakilTech difference."
        testimonials={aboutTestimonials}
        stats={aboutStats}
      />

      {/* Services CTA */}
      <ServicesCTASection />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloater
        phoneNumber="917047683995"
        message="Hi! I visited your About page and would like to learn more about VakilTech."
      />
    </main>
  );
}










