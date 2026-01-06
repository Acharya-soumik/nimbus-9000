"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { services, type Service } from "./home-data";

/**
 * Services Section Props
 */
export interface ServicesSectionProps {
  className?: string;
}

/**
 * Service Card Component
 * Redesigned to be sleek image-based cards
 */
function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-primary/10 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
    >
      {/* Background Image */}
      {service.image ? (
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={service.id === "legal-notice"}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-800">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      {/* Dark Overlay Gradient (Bottom) for Text Legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute left-0 bottom-0 w-full p-6 text-center z-10">
        <h3 className="mb-1 text-2xl font-bold text-white drop-shadow-md tracking-tight">
          {service.title}
        </h3>
        <p className="text-base font-medium text-gray-200 drop-shadow-sm opacity-90">
          {service.price}
        </p>
      </div>

      {/* Badge (Top Right or Corner) - Optional style tweak */}
      {service.badge && (
        <div className="absolute -right-12 top-8 rotate-45 transform bg-red-600 px-12 py-1 text-center text-xs font-bold uppercase text-white shadow-lg z-20">
          {service.badge}
        </div>
      )}
    </Link>
  );
}

/**
 * Services Section Component
 *
 * Displays service cards in a responsive grid.
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
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
