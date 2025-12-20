"use client";

import * as React from "react";
import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards";

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TestimonialsSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  stats?: Stat[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through VakilTech, he returned the full amount within 10 days. The draft was very strong.",
    name: "Rohan Malhotra",
    title: "Software Engineer, Bangalore",
  },
  {
    quote:
      "A builder in Noida was delaying possession by 2 years. I sent a legal notice for refund with interest. They finally called me for a settlement meeting. Highly recommended for property issues.",
    name: "Suresh Gupta",
    title: "Government Employee, Delhi",
  },
  {
    quote:
      "I was not getting my salary dues from my previous employer. The legal notice drafted by VakilTech showed I was serious. They cleared my dues to avoid court trouble. Thank you!",
    name: "Anjali Desai",
    title: "Marketing Executive, Mumbai",
  },
  {
    quote:
      "Standard legal notice for cheque bounce. The process was simple, and the lawyer added all necessary sections under the NI Act. Very professional service.",
    name: "Vikramjit Singh",
    title: "Business Owner, Ludhiana",
  },
  {
    quote:
      "Bought a defective fridge and the company wasn't replacing it. Sent a consumer notice. They replaced it immediately after receiving the notice. Fast and effective.",
    name: "Meera Nair",
    title: "Homemaker, Kochi",
  },
];

const defaultStats: Stat[] = [
  {
    value: "15,000+",
    label: "Clients Served",
  },
  {
    value: "₹50L+",
    label: "Legal Fees Saved",
  },
  {
    value: "25+",
    label: "Expert Lawyers",
  },
  {
    value: "4.8/5",
    label: "Customer Rating",
  },
];

export function TestimonialsSection({
  className,
  title = "What our clients say about us",
  subtitle = "Join hundreds of Indians who trust Vakil Tech for all their legal needs.",
  testimonials = defaultTestimonials,
  stats = defaultStats,
}: TestimonialsSectionProps) {
  return (
    <section
      className={className}
      style={{
        background:
          "radial-gradient(circle at top left, oklch(92% 0.06 35) 0%, oklch(95% 0.04 25) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-3 text-base text-text-medium sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient accent line at top */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-warning-yellow via-warning to-primary" />

              <div className="text-3xl font-bold bg-gradient-to-r from-primary via-warning to-warning-yellow bg-clip-text text-transparent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-medium sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative space-y-6">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="py-0"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
            pauseOnHover={true}
            className="py-0"
          />
        </div>
      </div>
    </section>
  );
}
