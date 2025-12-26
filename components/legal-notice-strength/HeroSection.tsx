"use client";

import * as React from "react";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

/**
 * HeroSection Component for Legal Notice Strength Calculator
 *
 * Landing section that explains the calculator and encourages users to start.
 */
export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange via-orange-light to-orange/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-gray-700">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Free Case Assessment
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Check Your Legal Notice{" "}
              <span className="block text-primary">Strength</span>
            </h1>

            <p className="mb-6 text-lg text-gray-700 sm:text-xl lg:text-2xl">
              Get an instant assessment of your case strength before sending a
              legal notice. Answer a few questions and understand your legal
              position.
            </p>

            <div className="mb-8 space-y-3">
              {[
                "Quick 3-4 minute assessment",
                "Personalized strength score (0-100)",
                "Expert recommendations on next steps",
                "Completely free and confidential",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {onGetStarted && (
              <button
                onClick={onGetStarted}
                className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl sm:text-lg"
              >
                Start Free Assessment →
              </button>
            )}
          </div>

          {/* Illustration / Stats */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Stat Cards */}
                {[
                  { value: "10,000+", label: "Cases Assessed" },
                  { value: "85%", label: "Accuracy Rate" },
                  { value: "3 min", label: "Average Time" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white/20 p-6 backdrop-blur-sm border border-gray-200"
                  >
                    <div className="text-3xl font-bold text-gray-700">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
