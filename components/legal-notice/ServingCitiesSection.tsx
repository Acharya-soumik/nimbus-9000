"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface City {
  /** Unique identifier */
  id: string;
  /** City name */
  name: string;
  /** State/Region name */
  state: string;
  /** Optional link href */
  href?: string;
  /** Click handler */
  onClick?: () => void;
}

export interface ServingCitiesSectionProps {
  className?: string;
  /** Main title - text before highlight */
  title?: string;
  /** Highlighted text in title (gradient styled) */
  titleHighlight?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** List of cities to display */
  cities?: City[];
  /** Footer link text */
  viewAllText?: string;
  /** Footer link href */
  viewAllHref?: string;
  /** Callback when a city card is clicked */
  onCityClick?: (cityId: string) => void;
  /** Callback when view all is clicked */
  onViewAllClick?: () => void;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
      <path d="M12 14h.01" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

/* =============================================================================
 * CITY CARD COMPONENT
 * ============================================================================= */

interface CityCardProps {
  city: City;
  onClick?: () => void;
}

function CityCard({ city, onClick }: CityCardProps) {
  const CardContent = () => (
    <>
      {/* Icon and Arrow Row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-gray-light">
          <BuildingIcon className="text-text-medium" />
        </div>
        <ArrowUpRightIcon className="text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>

      {/* City Info */}
      <div>
        <h3 className="font-sans text-base font-bold text-text-heading">
          {city.name}
        </h3>
        <p className="mt-0.5 text-sm text-text-muted">{city.state}</p>
      </div>
    </>
  );

  if (city.href) {
    return (
      <Link
        href={city.href}
        className={cn(
          "group block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100/80",
          "transition-all duration-200 hover:shadow-md hover:ring-primary/20"
        )}
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick || city.onClick}
      className={cn(
        "group block w-full rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100/80 text-left",
        "transition-all duration-200 hover:shadow-md hover:ring-primary/20"
      )}
    >
      <CardContent />
    </button>
  );
}

/* =============================================================================
 * DEFAULT CITIES DATA
 * ============================================================================= */

const defaultCities: City[] = [
  { id: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { id: "delhi", name: "Delhi", state: "NCR" },
  { id: "bangalore", name: "Bangalore", state: "Karnataka" },
  { id: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { id: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { id: "kolkata", name: "Kolkata", state: "West Bengal" },
  { id: "pune", name: "Pune", state: "Maharashtra" },
  { id: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
  { id: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { id: "lucknow", name: "Lucknow", state: "Uttar Pradesh" },
];

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function ServingCitiesSection({
  className,
  title = "Serving All Major",
  titleHighlight = "Cities",
  subtitle = "Select your city to find specialized local legal experts.",
  cities = defaultCities,
  viewAllText = "We support over 100+ cities in India",
  viewAllHref,
  onCityClick,
  onViewAllClick,
}: ServingCitiesSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-20",
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-background-gray-light to-white" />

      <div className="mx-auto max-w-xl">
        {/* Decorative top line */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-warning-bright via-warning to-warning-coral" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Title with gradient highlight */}
          <h2 className="font-sans text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            {title}{" "}
            <span className="bg-gradient-to-r from-warning-bright via-warning to-warning-coral bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-base text-text-medium lg:text-lg">
            {subtitle}
          </p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {cities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              onClick={() => onCityClick?.(city.id)}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          {viewAllHref ? (
            <Link
              href={viewAllHref}
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium text-text-medium",
                "transition-colors hover:text-primary"
              )}
            >
              <MapIcon className="text-text-muted" />
              {viewAllText}
            </Link>
          ) : (
            <button
              type="button"
              onClick={onViewAllClick}
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium text-text-medium",
                "transition-colors hover:text-primary"
              )}
            >
              <MapIcon className="text-text-muted" />
              {viewAllText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServingCitiesSection;

