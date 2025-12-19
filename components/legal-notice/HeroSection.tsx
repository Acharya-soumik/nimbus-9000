"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PricingCard } from "./PricingCard";
import { MeshGradient } from "@paper-design/shaders-react";
import { FlipWords } from "@/components/aceternity/flip-words";
import { Breadcrumb } from "./Breadcrumb";
import { Highlight } from "@/components/aceternity/hero-highlight";
import { MultiStepForm } from "./MultiStepForm";

/**
 * Hero Section Props
 */
export interface HeroSectionProps {
  className?: string;
  badge?: string;
  headline?: string;
  subheadline?: string;
  flipWords?: string[];
  badges?: Array<{
    icon: "clock" | "shield" | "users" | "check";
    text: string;
  }>;
}

/**
 * Hero Section Component
 * Mobile: Image with overlaid text and floating badges
 * Desktop: Two columns - text left, form right
 */
export function HeroSection({
  className,
  badge = "FAMILY LAW & CIVIL DISPUTES",
  headline = "We Don't Just Send Notices. We Solve Problems!",
  subheadline,
  flipWords = [
    "Expert Lawyers",
    "Understanding You",
    "Custom Drafting",
    "48-Hour Delivery",
  ],
  badges = [
    { icon: "clock" as const, text: "Honest advice\nbefore action" },
    { icon: "shield" as const, text: "Drafted by\nfamily lawyers" },
  ],
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
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

  // Helper function to render icon based on type
  const renderIcon = (iconType: "clock" | "shield" | "users" | "check") => {
    switch (iconType) {
      case "clock":
        return (
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case "shield":
        return (
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "users":
        return (
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "check":
        return (
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        );
    }
  };

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        {mounted && (
          <>
            {/* <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={[
                "#FFFFFF", // Pure white
                "#FFFFFF", // Pure white
                "#FAFAFA", // Off white
                "#F5F5F5", // Very light gray
                "#FFEBEE", // Barely there red tint
                "#EF5A6F", // Accent red (your primary color)
              ]}
              speed={0.6}
              distortion={0}
              swirl={1}
              grainMixer={0}
              grainOverlay={0}
              offsetX={0.1}
            /> */}
            <div className="absolute inset-0 pointer-events-none bg-white/60" />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-12">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="pt-4">
            {/* Category Badge - Desktop Only */}
            <div className="mb-6">
              <span className="inline-block rounded-full bg-background-pink-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                {badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-sans text-[3.25rem] font-bold leading-[1.1] text-text-heading xl:text-[3.75rem]">
              {headline}
            </h1>

            {/* Subtitle */}
            <div className="mb-8 max-w-md text-lg text-text-medium">
              <span>{subheadline || "Vakiltech provides "}</span>
              <FlipWords
                words={flipWords}
                duration={2500}
                className="font-semibold text-primary"
              />
            </div>

            {/* Feature Badges - Desktop */}
            <div className="mb-8 flex flex-wrap gap-4">
              {badges.map((badgeItem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    {renderIcon(badgeItem.icon)}
                  </div>
                  <span className="text-sm font-medium text-text-body whitespace-pre-line">
                    {badgeItem.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Image - Desktop (below badges) */}
            <div className="relative">
              <div className="relative aspect-16/10 w-full max-w-lg overflow-hidden rounded-2xl">
                <Image
                  src="/assets/legal-notice/hero.png"
                  alt="Legal consultation illustration"
                  fill
                  className="object-cover"
                  fetchPriority="high"
                  priority
                />
                {/* Expert Consultation Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                    <div className="mb-1 flex justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <svg
                          className="h-4 w-4 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm font-semibold text-text-heading">
                      Expert Legal Consultation
                    </p>
                    <p className="text-center text-xs text-text-muted">
                      Our lawyers analyze your case in detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form + Pricing Card */}
          <div className="space-y-6 lg:pl-4">
            <MultiStepForm onSubmit={() => {}} onStepChange={() => {}} />
            <PricingCard
              currentPrice={1499}
              badge="BEST VALUE PACK"
              features={[
                "Drafted by High Court Advocate",
                "Sent via Registered Post (RPAD)",
                "Unlimited Revisions Included",
              ]}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Hero Image Container with Overlaid Content */}
          <div className="relative">
            {/* Text Overlay Section */}
            <div className="relative z-10 pb-4 text-center">
              <h1 className="mb-3 font-sans text-[1.75rem] font-bold leading-tight text-text-heading sm:text-3xl">
                {headline}
              </h1>
              <div className="text-sm text-text-medium sm:text-base">
                <span>{subheadline || "Every Notice is"}</span>
                <FlipWords
                  words={flipWords}
                  duration={2500}
                  className="font-semibold text-primary text-sm sm:text-base m-0 p-0 px-1"
                />
              </div>
            </div>

            {/* Hero Image with Floating Badges */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-16/10">
              <Image
                src="/assets/legal-notice/hero.png"
                alt="Legal consultation illustration"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Badges - Positioned on left side of image */}
              <div className="absolute left-3 top-1/4 flex flex-col gap-2 sm:left-4 sm:gap-3">
                {badges.slice(0, 2).map((badgeItem, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm sm:px-4 sm:py-2.5"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background-pink-light sm:h-9 sm:w-9">
                      <div className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:sm:h-5 [&>svg]:sm:w-5">
                        {renderIcon(badgeItem.icon)}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-text-body sm:text-sm whitespace-pre-line">
                      {badgeItem.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Category Pill - Bottom left */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-block rounded-full bg-warning-yellow px-4 py-2 text-xs font-semibold text-warning-brown sm:text-sm">
                  {badge}
                </span>
              </div>
            </div>
          </div>

          {/* Form Section - Below image on mobile with gap */}
          <div className="my-8 space-y-6">
            <MultiStepForm onSubmit={() => {}} onStepChange={() => {}} />
          </div>
          {/* <PricingCard
            currentPrice={499}
            badge="BEST VALUE PACK"
            features={[
              "Drafted by High Court Advocate",
              "Sent via Registered Post (RPAD)",
              "Unlimited Revisions Included",
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
