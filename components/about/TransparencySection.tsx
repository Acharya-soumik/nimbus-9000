"use client";

import { cn } from "@/lib/utils";
import { X, Check, Quote } from "lucide-react";
import { transparencyContent } from "./about-data";

/**
 * Transparency Section Props
 */
export interface TransparencySectionProps {
  className?: string;
}

/**
 * Transparency Section
 *
 * KEY SECTION: Addresses the "seniority-based pricing" problem
 * and establishes VakilTech's fair pricing philosophy.
 */
export function TransparencySection({ className }: TransparencySectionProps) {
  const { badge, headline, subheadline, traditionalModel, vakilTechModel, quote } =
    transparencyContent;

  return (
    <section
      className={cn("py-16 lg:py-24", className)}
      style={{
        background:
          "linear-gradient(135deg, oklch(97% 0.01 30) 0%, oklch(98% 0.02 90) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-warning-yellow/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-warning-brown">
            {badge}
          </span>
          <h2 className="mb-2 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {headline}
          </h2>
          <p className="text-lg text-text-medium sm:text-xl">{subheadline}</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Traditional Model (Negative) */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg lg:p-8">
            {/* Red accent at top */}
            <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-red-400 to-red-500" />

            <div className="pt-2">
              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-red-600 sm:text-2xl">
                {traditionalModel.title}
              </h3>

              {/* Explanation */}
              <p className="mb-6 text-sm text-text-medium leading-relaxed sm:text-base">
                {traditionalModel.explanation}
              </p>

              {/* Problems List */}
              <ul className="space-y-3">
                {traditionalModel.problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-sm text-text-body">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VakilTech Model (Positive) */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-2 ring-success lg:p-8">
            {/* Green accent at top */}
            <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-success to-success-dark" />

            {/* Best Value Badge */}
            <div className="absolute -right-8 top-6 rotate-45 bg-success px-10 py-1 text-xs font-bold text-white">
              BETTER
            </div>

            <div className="pt-2">
              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-success-dark sm:text-2xl">
                {vakilTechModel.title}
              </h3>

              {/* Explanation */}
              <p className="mb-6 text-sm text-text-medium leading-relaxed sm:text-base">
                {vakilTechModel.explanation}
              </p>

              {/* Promises List */}
              <ul className="space-y-3">
                {vakilTechModel.promises.map((promise, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-success-light">
                      <Check className="h-4 w-4 text-success-dark" />
                    </div>
                    <span className="text-sm font-medium text-text-heading">
                      {promise}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* VS Divider (visible on desktop) */}
        <div className="relative my-8 hidden lg:block">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text-heading text-white font-bold">
              VS
            </div>
          </div>
        </div>

        {/* Quote Block */}
        <div className="mt-12 lg:mt-16">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <div className="flex flex-col items-center text-center">
              <Quote className="mb-4 h-10 w-10 text-primary/30" />
              <blockquote className="mb-4 text-lg font-medium text-text-heading leading-relaxed sm:text-xl">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <cite className="text-sm text-text-muted not-italic">
                — {quote.attribution}
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransparencySection;








