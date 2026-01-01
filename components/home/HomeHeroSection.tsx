"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MeshGradient } from "@paper-design/shaders-react";
import { FlipWords } from "@/components/aceternity/flip-words";
import { homeHeroContent, homeStats } from "./home-data";

/**
 * Home Hero Section Props
 */
export interface HomeHeroSectionProps {
  className?: string;
}

/**
 * Home Page Hero Section
 *
 * A full-width hero section for the main landing page.
 * Features animated gradient background, headline with flip words,
 * trust badges, stats, and dual CTAs for both services.
 */
export function HomeHeroSection({ className }: HomeHeroSectionProps) {
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
    <section
      className={cn(
        "relative w-full overflow-hidden min-h-[85vh] flex items-center",
        className
      )}
    >
      {/* Animated Mesh Gradient Background */}
      {/* <div className="absolute inset-0">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={[
                "#FFFFFF",
                "#FFFFFF",
                "#FAFAFA",
                "#F5F5F5",
                "#FFEBEE",
                "#EF5A6F",
              ]}
              speed={0.4}
              distortion={0.8}
              swirl={0.6}
              grainMixer={0}
              grainOverlay={0}
              offsetX={0.1}
            />
            <div className="absolute inset-0 pointer-events-none bg-white/50" />
          </>
        )}
      </div> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-background-pink-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              {homeHeroContent.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 font-sans text-[2.5rem] font-bold leading-[1.1] text-text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-primary">
              {homeHeroContent.highlightedText}
            </span>{" "}
            {homeHeroContent.headline}
          </h1>

          {/* Subheadline with FlipWords */}
          <div className="mx-auto mb-8 max-w-2xl text-lg text-text-medium sm:text-xl">
            <span>{homeHeroContent.subheadline.split(",")[0]}:</span>{" "}
            <FlipWords
              words={homeHeroContent.flipWords}
              duration={2500}
              className="font-semibold text-primary"
            />
          </div>

          {/* Trust Badges */}
          <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {homeHeroContent.trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
              >
                <svg
                  className="h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-text-body">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/send-legal-notice"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl sm:w-auto"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Send Legal Notice
              <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
                ₹499
              </span>
            </Link>

            <Link
              href="/legal-consultation"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-8 py-4 text-base font-semibold text-primary shadow-sm transition-all hover:bg-primary/5 sm:w-auto"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Book Consultation
              <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs">
                ₹299
              </span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {homeStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce">
            <Link
              href="#services"
              className="inline-flex flex-col items-center text-text-muted transition-colors hover:text-primary"
            >
              <span className="mb-2 text-sm">Explore Services</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;






