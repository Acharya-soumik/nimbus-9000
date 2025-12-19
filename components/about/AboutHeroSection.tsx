"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MeshGradient } from "@paper-design/shaders-react";
import { heroContent } from "./about-data";

/**
 * About Hero Section Props
 */
export interface AboutHeroSectionProps {
  className?: string;
}

/**
 * About Page Hero Section
 *
 * Communicates VakilTech's mission and vision with an animated
 * gradient background and impactful statistics.
 */
export function AboutHeroSection({ className }: AboutHeroSectionProps) {
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
        "relative w-full overflow-hidden min-h-[80vh] flex items-center",
        className
      )}
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* {mounted && (
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
              speed={0.3}
              distortion={0.6}
              swirl={0.5}
              grainMixer={0}
              grainOverlay={0}
              offsetX={0.1}
            />
            <div className="absolute inset-0 pointer-events-none bg-white/40" />
          </>
        )} */}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 w-full">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-background-pink-light px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              {heroContent.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 font-sans text-[2.5rem] font-bold leading-[1.1] text-text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
            {heroContent.headline}{" "}
            <span className="text-primary">
              {heroContent.headlineHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 text-xl text-text-medium sm:text-2xl lg:text-3xl font-medium">
            {heroContent.subheadline}
          </p>

          {/* Mission Statement */}
          <div className="mx-auto max-w-3xl mb-6">
            <p className="text-base text-text-body leading-relaxed sm:text-lg">
              {heroContent.missionStatement}
            </p>
          </div>

          {/* Vision Statement */}
          <div className="mx-auto max-w-2xl mb-12">
            <p className="text-sm text-text-medium italic sm:text-base">
              &ldquo;{heroContent.visionStatement}&rdquo;
            </p>
          </div>

          {/* Stats Row */}
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {heroContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:p-6"
                >
                  {/* Gradient accent line at top */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-warning-yellow via-warning to-primary" />

                  <div className="text-2xl font-bold bg-gradient-to-r from-primary via-warning to-warning-yellow bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-medium sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
