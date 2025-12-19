"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
  Building2,
  Factory,
  ShoppingBag,
  Heart,
  Landmark,
  GraduationCap,
  Home,
  Truck,
  Tv,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { corporateClientsContent, type CorporateClient } from "./about-data";

/**
 * Corporate Clients Section Props
 */
export interface CorporateClientsSectionProps {
  className?: string;
  clients?: CorporateClient[];
}

/**
 * Industry icon mapping
 */
const industryIconMap: Record<string, LucideIcon> = {
  Technology: Building2,
  Manufacturing: Factory,
  Retail: ShoppingBag,
  Healthcare: Heart,
  Finance: Landmark,
  Education: GraduationCap,
  "Real Estate": Home,
  Logistics: Truck,
  Media: Tv,
  "F&B": UtensilsCrossed,
};

/**
 * Client Logo Placeholder Component
 */
function ClientLogoPlaceholder({ name, industry }: CorporateClient) {
  const Icon = industryIconMap[industry] || Building2;
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="mx-4 flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <Icon className="mb-1 h-6 w-6 text-text-muted" strokeWidth={1.5} />
        <span className="text-xs font-medium text-text-muted">{initials}</span>
      </div>
    </div>
  );
}

/**
 * Corporate Clients Section
 *
 * Displays scrolling logos of corporate clients to build credibility.
 */
export function CorporateClientsSection({
  className,
  clients = corporateClientsContent.clients,
}: CorporateClientsSectionProps) {
  const { sectionTitle, sectionSubtitle, bottomCTA } = corporateClientsContent;

  // Split clients into two rows
  const halfLength = Math.ceil(clients.length / 2);
  const firstRow = clients.slice(0, halfLength);
  const secondRow = clients.slice(halfLength);

  return (
    <section className={cn("bg-background-gray-light py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Corporate Partners
          </span>
          <h2 className="mb-4 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
            {sectionTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
            {sectionSubtitle}
          </p>
        </div>

        {/* Logo Marquee - First Row */}
        <div className="mb-4">
          <Marquee direction="left" speed={40} pauseOnHover>
            {firstRow.map((client, index) => (
              <ClientLogoPlaceholder key={index} {...client} />
            ))}
          </Marquee>
        </div>

        {/* Logo Marquee - Second Row (Opposite Direction) */}
        <div className="mb-12">
          <Marquee direction="right" speed={40} pauseOnHover>
            {secondRow.map((client, index) => (
              <ClientLogoPlaceholder key={index} {...client} />
            ))}
          </Marquee>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="mb-4 text-text-medium">{bottomCTA.text}</p>
          <Link
            href={bottomCTA.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary/5"
          >
            {bottomCTA.buttonText}
            <svg
              className="h-4 w-4"
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
    </section>
  );
}

export default CorporateClientsSection;






