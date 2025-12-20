"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface BenefitItem {
  text: string;
  highlight?: string;
}

export interface AccordionSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  items: BenefitItem[];
}

export interface CTACardProps {
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  price: string;
  priceUnit?: string;
  onClick?: () => void;
}

export interface InfoSectionVariant2Props {
  className?: string;
  badge?: string;
  badgeIcon?: React.ReactNode;
  title?: string;
  titleHighlight?: string;
  description?: string;
  expertInsight?: {
    quote: string;
  };
  accordionSections?: AccordionSection[];
  ctaCards?: CTACardProps[];
  defaultOpenAccordion?: string;
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function GavelIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.73 12.02l3.98-3.98a.996.996 0 0 0 0-1.41l-4.34-4.34a.996.996 0 0 0-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63a.996.996 0 0 0 0 1.41l3.98 3.98L2.25 16a.996.996 0 0 0 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34a.996.996 0 0 0 0-1.41l-3.99-3.97zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4.34 7.96l-3.62-3.62 3.62-3.63 3.63 3.63-3.63 3.62z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function DocumentPlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polygon points="10 11 10 17 15 14 10 11" />
    </svg>
  );
}

function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

/* =============================================================================
 * CTA CARD COMPONENT
 * ============================================================================= */

function CTACard({
  variant,
  icon,
  title,
  subtitle,
  price,
  priceUnit,
  onClick,
}: CTACardProps) {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between rounded-2xl bg-primary px-5 py-4 text-left transition-all hover:bg-primary/90"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
            {icon || <DocumentPlayIcon className="h-5 w-5 text-white" />}
          </div>
          <div>
            <p className="font-semibold text-white">{title}</p>
            {subtitle && (
              <p className="text-xs text-white/70">{subtitle}</p>
            )}
          </div>
        </div>
        <span className="text-xl font-bold text-white">{price}</span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 text-left transition-all hover:border-primary/30 hover:bg-background-peach/30"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-gray">
          {icon || <HeadphonesIcon className="h-5 w-5 text-text-medium" />}
        </div>
        <p className="font-semibold text-text-heading">{title}</p>
      </div>
      <span className="text-sm font-semibold text-text-medium">
        {price}
        {priceUnit && <span className="font-normal">{priceUnit}</span>}
      </span>
    </button>
  );
}

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function InfoSectionVariant2({
  className,
  badge = "LEGAL INSIGHT",
  badgeIcon,
  title = "Understanding Legal",
  titleHighlight = "Notices",
  description = "A formal communication demanding action or informing of a grievance before court proceedings.",
  expertInsight = {
    quote:
      '"A well-drafted notice settles 65% of disputes without ever stepping foot inside a courtroom."',
  },
  accordionSections = [
    {
      id: "benefits",
      title: "Key Benefits",
      icon: <CheckCircleIcon className="h-5 w-5 text-success" />,
      items: [
        {
          text: "Creates official",
          highlight: "proof of demand",
        },
        {
          text: "for future litigation.",
        },
        {
          text: "Clearly states your grievance and intent to sue if unresolved.",
        },
        {
          text: "Mandatory first step for cases like cheque bounce (Section 138).",
        },
      ],
    },
    {
      id: "usecases",
      title: "Common Use Cases",
      icon: <CalendarIcon className="h-5 w-5 text-info" />,
      items: [],
    },
  ],
  ctaCards = [
    {
      variant: "primary" as const,
      title: "Draft Notice Now",
      subtitle: "Verified by experts",
      price: "₹499",
    },
    {
      variant: "secondary" as const,
      title: "Talk to a Lawyer",
      price: "₹299",
      priceUnit: "/call",
    },
  ],
  defaultOpenAccordion = "benefits",
}: InfoSectionVariant2Props) {
  return (
    <section
      className={cn(
        "relative h-full overflow-hidden rounded-3xl bg-white shadow-sm",
        "p-6 sm:p-8 lg:p-10",
        className
      )}
    >
      {/* Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-background-pink-light px-4 py-2 lg:mb-5">
        {badgeIcon || <GavelIcon className="h-4 w-4 text-primary lg:h-5 lg:w-5" />}
        <span className="text-xs font-semibold uppercase tracking-wide text-primary lg:text-sm">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-2xl font-bold leading-tight text-text-heading sm:text-3xl lg:mb-4 lg:text-4xl">
        {title}
        <br />
        <span className="text-primary">{titleHighlight}</span>
      </h2>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-text-medium sm:text-base lg:mb-8 lg:text-lg">
        {description}
      </p>

      {/* Expert Insight Card */}
      {expertInsight && (
        <div className="mb-6 rounded-2xl border border-border bg-white p-5 shadow-sm lg:mb-8 lg:p-6">
          <div className="flex gap-4">
            <div className="mt-1 shrink-0">
              <div className="h-3 w-3 rounded-full bg-primary lg:h-4 lg:w-4" />
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted lg:text-sm">
                EXPERT INSIGHT
              </p>
              <p className="text-sm italic leading-relaxed text-text-medium lg:text-base">
                {expertInsight.quote}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Accordion Sections */}
      <Accordion
        type="single"
        collapsible
        defaultValue={defaultOpenAccordion}
        className="mb-6 lg:mb-8"
      >
        {accordionSections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border-b-0 rounded-xl bg-white mb-3"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline rounded-xl hover:bg-background-gray/50">
              <div className="flex items-center gap-3">
                {section.icon}
                <span className="font-semibold text-text-heading lg:text-lg">
                  {section.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4">
              <ul className="space-y-3 lg:space-y-3.5">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
                    <span className="text-sm leading-relaxed text-text-medium lg:text-base">
                      {item.highlight ? (
                        <>
                          {item.text}{" "}
                          <strong className="font-semibold text-text-heading">
                            {item.highlight}
                          </strong>
                          {item.text.includes("for") ? "" : "."}
                        </>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* CTA Cards */}
      <div className="space-y-3 lg:space-y-4">
        {ctaCards.map((card, index) => (
          <CTACard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default InfoSectionVariant2;

