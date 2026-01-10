"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PricingCard } from "@/components/send-legal-notice/PricingCard";
import { FlipWords } from "@/components/aceternity/flip-words";
import { SimpleLeadForm } from "@/components/common/SimpleLeadForm";

export interface AgreementHeroSectionProps {
  className?: string;
  title: string;
  subtitle: string;
  price: number;
  flipWords: string[];
  featureBadges: { id: string; title: string; subtitle: string }[];
  imageSrc: string;
  imageAlt: string;
  serviceName: string;
  pricingFeatures: string[];
}

export function AgreementHeroSection({
  className,
  title,
  subtitle,
  price,
  flipWords,
  featureBadges,
  imageSrc,
  imageAlt,
  serviceName,
  pricingFeatures,
}: AgreementHeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-background-light",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-text-muted lg:mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-teal">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
          <span className="text-text-muted">{">"}</span>
          <Link href="/agreement-drafting" className="hover:text-teal">
            Agreement Drafting
          </Link>
          <span className="text-text-muted">{">"}</span>
          <span className="font-medium text-text-body">{serviceName}</span>
        </nav>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="pt-4">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-teal-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-dark">
                LEGAL DRAFTING
              </span>
            </div>

            <h1 className="mb-6 font-sans text-[3.25rem] font-bold leading-[1.1] text-text-heading xl:text-[3.75rem]">
              {title} <br className="hidden xl:block" />
              <span className="relative inline-block pb-2">
                <span className="relative z-10">{subtitle}</span>
              </span>
            </h1>

            <div className="mb-8 max-w-md text-lg text-text-medium">
              <span>Ensure legal </span>
              <FlipWords
                words={flipWords}
                duration={2500}
                className="font-semibold text-teal"
              />
            </div>

            <div className="mb-8 flex flex-wrap gap-4">
              {featureBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
                    <svg
                      className="h-5 w-5 text-teal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-text-body">
                    {badge.title}
                    <br />
                    <span className="text-text-muted">{badge.subtitle}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl bg-teal-light shadow-lg">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Form + Pricing Card */}
          <div className="space-y-6 lg:pl-4">
            <SimpleLeadForm
              serviceName={serviceName}
              servicePrice={price}
              formTitle={`Draft ${serviceName}`}
            />
            <PricingCard
              currentPrice={price}
              features={pricingFeatures}
              unit="/draft"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="relative z-10 pb-4 text-center">
              <h1 className="mb-3 font-sans text-[1.75rem] font-bold leading-tight text-text-heading sm:text-3xl">
                {title}
                <br />
                <span className="relative inline-block pb-2">
                  <span className="relative z-10">{subtitle}</span>
                </span>
              </h1>
              <div className="text-sm text-text-medium sm:text-base">
                <span>Ensure legal </span>
                <FlipWords
                  words={flipWords}
                  duration={2500}
                  className="text-sm font-semibold text-teal sm:text-base"
                />
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-teal-light shadow-md sm:aspect-[16/10]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <SimpleLeadForm
              serviceName={serviceName}
              servicePrice={price}
              formTitle={`Draft ${serviceName}`}
            />
            <PricingCard
              currentPrice={price}
              features={pricingFeatures}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
