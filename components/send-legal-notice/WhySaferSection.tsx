"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface SafetyFeature {
  image: string;
  title: string;
  description: string;
}

export interface WhySaferSectionProps {
  className?: string;
  title?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  features?: SafetyFeature[];
}

/* =============================================================================
 * DEFAULT FEATURES DATA
 * ============================================================================= */

const defaultFeatures: SafetyFeature[] = [
  {
    image: "/assets/common/sit-and-relax.png",
    title: "No Court Visits",
    description: "Resolve disputes from the comfort of your home.",
  },
  {
    image: "/assets/common/consut-lawyer.png",
    title: "Custom Drafted",
    description:
      "Detailed understanding of your case and custom drafted for you.",
  },
  {
    image: "/assets/common/save-money.png",
    title: "Cost-Efficient",
    description: "Save 80% compared to local lawyers.",
  },
  {
    image: "/assets/common/postal-delivery.png",
    title: "Rapid Delivery",
    description: "Drafts ready for review in 24 hours.",
  },
];

/* =============================================================================
 * FEATURE CARD COMPONENT
 * ============================================================================= */

function FeatureCard({ image, title, description }: SafetyFeature) {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-white p-4 shadow-md sm:p-6">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={96}
        height={96}
        className="mb-3 h-20 w-20 object-contain sm:h-24 sm:w-24"
      />

      {/* Title */}
      <h3 className="mb-1 text-center text-sm font-bold text-text-heading sm:text-base">
        {title}
      </h3>

      {/* Description */}
      <p className="text-center text-xs leading-relaxed text-text-medium sm:text-sm">
        {description}
      </p>
    </div>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function WhySaferSection({
  className,
  title = "Why",
  titleHighlight = "VakilTech",
  titleSuffix = "is the Best ?",
  features = defaultFeatures,
}: WhySaferSectionProps) {
  return (
    <section className={cn("py-10 lg:py-16", className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-text-heading sm:text-2xl lg:text-3xl">
            {title}{" "}
            <span className="bg-linear-to-r from-primary-coral to-warning-coral bg-clip-text text-transparent">
              {titleHighlight}
            </span>{" "}
            {titleSuffix}
          </h2>
        </div>

        {/* Features Grid - 2x2 on all screens */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySaferSection;
