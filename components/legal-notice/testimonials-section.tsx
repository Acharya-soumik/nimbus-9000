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
      "The GST compliance advice was pretty clear and helped us avoid some penalties. Only minor issue was response time took a day longer than expected, but overall good experience.",
    name: "Amit Singh",
    title: "Manufacturing Business Owner, Pune",
  },
  {
    quote:
      "Sent a legal notice for property dispute. The draft was professional and the postal tracking was helpful. The lawyer explained all steps clearly.",
    name: "Priya Sharma",
    title: "Homemaker, Mumbai",
  },
  {
    quote:
      "Used their service for contract review. Found a couple of risky clauses I would have missed. Good value for money and quick turnaround.",
    name: "Rajesh Kumar",
    title: "Startup Founder, Bangalore",
  },
  {
    quote:
      "Needed a legal notice for money recovery. The team was responsive and the notice was sent on time. Got my money back within 2 weeks!",
    name: "Anita Patel",
    title: "E-commerce Business Owner, Delhi",
  },
  {
    quote:
      "Their trademark registration service was smooth. Kept me updated throughout the process and answered all my questions patiently.",
    name: "Vikram Reddy",
    title: "Restaurant Owner, Hyderabad",
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
