"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PricingCard } from "@/components/send-legal-notice/PricingCard";
import { MeshGradient } from "@paper-design/shaders-react";
import { FlipWords } from "@/components/aceternity/flip-words";
import { heroFlipWords, heroFeatureBadges } from "./agreement-data";
import { MultiStepForm } from "@/components/send-legal-notice/MultiStepForm";

/**
 * Agreement Hero Section Props
 */
export interface AgreementHeroSectionProps {
  className?: string;
}

/**
 * Agreement Hero Section Component
 *
 * Landing section with teal accent gradient, headline emphasizing speed and quality.
 * Mobile: Image with overlaid text and floating badges
 * Desktop: Two columns - text left, form right
 */
export function AgreementHeroSection({ className }: AgreementHeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      {/* Animated Mesh Gradient Background - Teal Theme */}
      <div className="absolute inset-0">
        {/* {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={[
                "#FFFFFF", // Pure white
                "#FFFFFF", // Pure white
                "#FAFAFA", // Off white
                "#F0FDFA", // Very light teal
                "#CCFBF1", // Barely there teal tint
                "#14B8A6", // Accent teal
              ]}
              speed={0.5}
              distortion={1.0}
              swirl={0.8}
              grainMixer={0}
              grainOverlay={0}
              offsetX={0.1}
            />
            <div className="pointer-events-none absolute inset-0 bg-white/60" />
          </>
        )} */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-text-muted lg:mb-6">
          <span className="flex items-center gap-1">
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
          </span>
          <span className="text-text-muted">{">"}</span>
          <span className="font-medium text-text-body">Agreement Drafting</span>
        </nav>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="pt-4">
            {/* Category Badge - Desktop Only */}
            <div className="mb-6">
              <span className="inline-block rounded-full bg-teal-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-dark">
                BUSINESS & LEGAL DOCUMENTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-sans text-[3.25rem] font-bold leading-[1.1] text-text-heading xl:text-[3.75rem]">
              Legally Binding Agreements, <br className="hidden xl:block" />
              <span className="relative inline-block pb-2">
                <span className="relative z-10">Delivered in 24 Hours</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 max-w-md text-lg text-text-medium">
              <span>VakilTech provides </span>
              <FlipWords
                words={heroFlipWords}
                duration={2500}
                className="font-semibold text-teal"
              />
            </div>

            {/* Feature Badges - Desktop */}
            <div className="mb-8 flex flex-wrap gap-4">
              {heroFeatureBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
                    {badge.id === "advocates" ? (
                      <svg
                        className="h-5 w-5 text-teal"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-teal"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14,2 14,8 20,8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-medium text-text-body">
                    {badge.title}
                    <br />
                    <span className="text-text-muted">{badge.subtitle}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Image - Desktop (below badges) */}
            <div className="relative">
              <div className="relative aspect-[16/10] w-full max-w-lg overflow-hidden rounded-2xl bg-teal-light">
                {/* Placeholder for hero image */}
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-16 w-16 text-teal/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14,2 14,8 20,8" />
                      <path d="M12 18v-6" />
                      <path d="m9 15 3 3 3-3" />
                    </svg>
                    <p className="mt-2 text-sm text-teal/60">
                      Agreement Illustration
                    </p>
                  </div>
                </div>

                {/* Expert Drafting Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                    <div className="mb-1 flex justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-light">
                        <svg
                          className="h-4 w-4 text-teal"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold text-text-heading">
                      Expert Legal Drafting
                    </p>
                    <p className="text-center text-xs text-text-muted">
                      By Licensed Advocates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form + Pricing Card */}
          <div className="space-y-6 lg:pl-4" id="agreement-form-desktop">
            <MultiStepForm
              onSubmit={() => {}}
              onStepChange={() => {}}
              serviceType="Agreement Drafting"
              servicePrice={999}
            />
            <PricingCard
              currentPrice={999}
              features={[
                "Drafted by Licensed Advocate",
                "24-Hour Delivery Guaranteed",
                "Unlimited Revisions Included",
              ]}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Hero Content */}
          <div className="relative">
            {/* Text Section */}
            <div className="relative z-10 pb-4 text-center">
              <h1 className="mb-3 font-sans text-[1.75rem] font-bold leading-tight text-text-heading sm:text-3xl">
                Legally Binding Agreements,
                <br />
                <span className="relative inline-block pb-2">
                  <span className="relative z-10">Delivered in 24 Hours</span>
                </span>
              </h1>
              <div className="text-sm text-text-medium sm:text-base">
                <span>VakilTech provides </span>
                <FlipWords
                  words={heroFlipWords}
                  duration={2500}
                  className="text-sm font-semibold text-teal sm:text-base"
                />
              </div>
            </div>

            {/* Hero Image with Floating Badges */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-teal-light sm:aspect-[16/10]">
              {/* Placeholder */}
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  className="h-16 w-16 text-teal/40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
              </div>

              {/* Floating Badges */}
              <div className="absolute left-3 top-1/4 flex flex-col gap-2 sm:left-4 sm:gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:px-4 sm:py-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-light sm:h-9 sm:w-9">
                    <svg
                      className="h-4 w-4 text-teal sm:h-5 sm:w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-text-body sm:text-sm">
                    24-Hour
                    <br />
                    Delivery
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:px-4 sm:py-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-light sm:h-9 sm:w-9">
                    <svg
                      className="h-4 w-4 text-teal sm:h-5 sm:w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-text-body sm:text-sm">
                    High Court
                    <br />
                    Advocates
                  </span>
                </div>
              </div>

              {/* Category Pill */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-block rounded-full bg-teal px-4 py-2 text-xs font-semibold text-white sm:text-sm">
                  50+ Templates
                </span>
              </div>
            </div>
          </div>

          {/* Form Section - Below image on mobile */}
          <div className="mt-8 space-y-6" id="agreement-form-mobile">
            <MultiStepForm
              onSubmit={() => {}}
              onStepChange={() => {}}
              serviceType="Agreement Drafting"
              servicePrice={999}
            />
            <PricingCard
              currentPrice={999}
              features={[
                "Drafted by Licensed Advocate",
                "24-Hour Delivery Guaranteed",
                "Unlimited Revisions Included",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgreementHeroSection;






