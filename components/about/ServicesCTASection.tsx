"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FileText,
  MessageCircle,
  Building,
  Check,
  type LucideIcon,
} from "lucide-react";
import { servicesCTAContent, type ServiceCTA } from "./about-data";

/**
 * Services CTA Section Props
 */
export interface ServicesCTASectionProps {
  className?: string;
  services?: ServiceCTA[];
}

/**
 * Icon mapping for services
 */
const iconMap: Record<string, LucideIcon> = {
  FileText,
  MessageCircle,
  Building,
};

/**
 * Badge color mapping
 */
const badgeColors: Record<string, string> = {
  "Most Popular": "bg-primary text-white",
  "Quick Help": "bg-success text-white",
  "For Business": "bg-info text-white",
};

/**
 * Service Card Component
 */
function ServiceCard({
  title,
  description,
  price,
  features,
  href,
  icon,
  badge,
}: ServiceCTA) {
  const Icon = iconMap[icon] || FileText;
  const badgeClass = badge ? badgeColors[badge] || "bg-primary text-white" : "";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Badge */}
      {badge && (
        <div className="absolute right-4 top-4 z-10">
          <span
            className={cn(
              "inline-block rounded-full px-3 py-1 text-xs font-bold",
              badgeClass
            )}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Header with Icon */}
      <div className="relative bg-gradient-to-br from-background-pink-light/50 to-background-peach p-6 pb-8">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
          <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-text-heading">{title}</h3>
        <p className="text-sm text-text-medium leading-relaxed">{description}</p>
      </div>

      {/* Pricing */}
      <div className="border-b border-gray-100 px-6 py-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-text-heading">{price}</span>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-success-light">
                <Check className="h-3 w-3 text-success-dark" />
              </div>
              <span className="text-sm text-text-body">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6">
        <Link
          href={href}
          className="block w-full rounded-xl bg-primary py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          Get Started
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
 * Services CTA Section
 *
 * Drives visitors to service pages with compelling CTAs.
 */
export function ServicesCTASection({
  className,
  services = servicesCTAContent.services,
}: ServicesCTASectionProps) {
  const { sectionTitle, sectionSubtitle, bottomCTA } = servicesCTAContent;

  return (
    <section
      className={cn("py-16 lg:py-24", className)}
      style={{
        background:
          "linear-gradient(180deg, oklch(98% 0.01 30) 0%, oklch(100% 0 0) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Get Started
          </span>
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
            {sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom WhatsApp CTA */}
        <div className="mt-12 lg:mt-16">
          <div className="mx-auto max-w-2xl rounded-2xl bg-success/10 p-6 text-center sm:p-8">
            <h3 className="mb-2 text-xl font-bold text-text-heading">
              {bottomCTA.headline}
            </h3>
            <p className="mb-4 text-sm text-text-medium">{bottomCTA.subtext}</p>
            <a
              href={bottomCTA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-success px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-success-dark hover:shadow-lg"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {bottomCTA.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTASection;







