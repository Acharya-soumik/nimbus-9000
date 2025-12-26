"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { services, type Service } from "./home-data";

/**
 * Services Section Props
 */
export interface ServicesSectionProps {
  className?: string;
}

/**
 * Service Card Icons
 */
function NoticeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ConsultationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

/**
 * Service Card Component
 */
function ServiceCard({ service }: { service: Service }) {
  const Icon = service.iconType === "notice" ? NoticeIcon : ConsultationIcon;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Badge */}
      {service.badge && (
        <div className="absolute right-4 top-4 z-10">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {service.badge}
          </span>
        </div>
      )}

      {/* Header with Icon */}
      <div className="relative bg-gradient-to-br from-background-pink-light/50 to-background-pink-light p-6 pb-8">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-text-heading">
          {service.title}
        </h3>
        <p className="text-sm text-text-medium leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="border-b border-gray-100 px-6 py-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-text-heading">
            {service.price}
          </span>
          {service.originalPrice && (
            <span className="text-lg text-text-muted line-through">
              {service.originalPrice}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-green-600 font-medium">
          Save {Math.round(
            ((parseInt(service.originalPrice?.replace(/[^\d]/g, "") || "0") -
              parseInt(service.price.replace(/[^\d]/g, ""))) /
              parseInt(service.originalPrice?.replace(/[^\d]/g, "") || "1")) *
              100
          )}
          % Today
        </p>
      </div>

      {/* Features */}
      <div className="px-6 py-4">
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-text-body">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6">
        <Link
          href={service.href}
          className="block w-full rounded-xl bg-primary py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          {service.ctaText}
          <svg
            className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

/**
 * Services Section Component
 *
 * Displays service cards in a responsive grid.
 * Currently shows Legal Notice and Legal Consultation.
 */
export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={cn(
        "relative bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            Choose Your Legal Solution
          </h2>
          <p className="text-lg text-text-medium">
            Professional legal services starting at just ₹299. No hidden fees,
            no complicated processes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted">
            <svg
              className="mr-2 inline-block h-4 w-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            All services come with a 100% money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;










