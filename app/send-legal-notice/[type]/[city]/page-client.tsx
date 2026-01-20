'use client';

import { NoticeTypeData } from "@/lib/send-legal-notice/notice-types/types";
import { CityData, getAllCities } from "@/lib/data/cities";

// Import existing components
import { HeroSection } from "@/components/send-legal-notice/HeroSection";
import { CitySpecificSection } from "@/components/send-legal-notice/CitySpecificSection";
import { HowWeWorkTimeline } from "@/components/send-legal-notice/HowWeWorkTimeline";
import { TestimonialsSection } from "@/components/send-legal-notice/testimonials-section";
import { FAQSection } from "@/components/ui/faq-section";
import { Check, MapPin } from "lucide-react";
import Link from "next/link";

interface LegalNoticeCityPageClientProps {
  noticeData: NoticeTypeData;
  cityData: CityData;
}

export function LegalNoticeCityPageClient({
  noticeData,
  cityData,
}: LegalNoticeCityPageClientProps) {
  // Customize hero for city
  const cityHero = {
    ...noticeData.hero,
    headline: `${noticeData.title} in ${cityData.name}`,
    subheadline: `Expert advocates draft your notice for ${cityData.courts.highCourt}. ${cityData.stats.noticesSent}+ notices sent in ${cityData.name}.`,
  };

  const citySpecificFAQs = [
    {
      id: "city-faq-1",
      question: `How long does it take to send a legal notice in ${cityData.name}?`,
      answer: `Most legal notices in ${cityData.name} are drafted within 24 hours. Once drafted, delivery depends on your chosen method - email (instant), courier (1-2 days), or registered post (3-5 days).`
    },
    {
      id: "city-faq-2",
      question: `Do you have lawyers in ${cityData.name}?`,
      answer: `Yes, we have ${cityData.stats.lawyersAvailable}+ experienced advocates in ${cityData.name} who draft legal notices compliant with ${cityData.courts.highCourt} and local court requirements.`
    },
    {
      id: "city-faq-3",
      question: `Will my notice be valid in ${cityData.name} courts?`,
      answer: `Absolutely. All notices are drafted by advocates familiar with ${cityData.state} laws and ${cityData.courts.highCourt} procedures. They're court-ready and legally valid.`
    },
    {
      id: "city-faq-4",
      question: `What courts in ${cityData.name} accept these notices?`,
      answer: `Our notices are accepted by all courts in ${cityData.name}, including ${cityData.courts.district[0]}, ${cityData.courts.highCourt}, and other local courts.`
    },
    {
      id: "city-faq-5",
      question: `How much does a legal notice cost in ${cityData.name}?`,
      answer: `Our legal notice services in ${cityData.name} start from ₹299, significantly lower than traditional lawyers who charge ₹3,000-₹10,000. Same quality, better price.`
    }
  ];

  const otherCities = getAllCities().filter(c => c.slug !== cityData.slug).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section (City-customized) */}
      <HeroSection
        {...cityHero}
      />

      {/* City-Specific Section (NEW) */}
      <CitySpecificSection cityData={cityData} noticeType={noticeData} />

      {/* Local Courts Section */}
      <section className="py-12 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">
            Legal Notice Format for {cityData.name} Courts
          </h2>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="mb-4">
              Our advocates ensure your notice is compliant with {cityData.courts.highCourt} and
              local court requirements in {cityData.name}.
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold">Relevant Courts in {cityData.name}:</h3>
              <ul className="space-y-2">
                {cityData.courts.district.map((court) => (
                  <li key={court} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{court}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (Same as main page) */}
      <HowWeWorkTimeline />

      {/* Success Stories (City-specific if available - for now generic or passed filtered ID) */}
      <TestimonialsSection /> 

      {/* FAQ (City-specific + general) */}
      <div className="container max-w-4xl py-12">
        <FAQSection 
            title={`FAQs about Legal Notice in ${cityData.name}`}
            faqs={[...citySpecificFAQs, ...noticeData.faqs]} 
        />
      </div>

      {/* Other Cities Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Also Available in Other Cities
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/send-legal-notice/${noticeData.slug}/${city.slug}`}
                className="text-center p-4 border rounded bg-white hover:shadow-lg transition group"
              >
                <MapPin className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <div className="font-semibold">{city.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
