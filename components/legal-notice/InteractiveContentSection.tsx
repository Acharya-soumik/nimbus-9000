"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
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

export interface ContentCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  expandedContent?: string | React.ReactNode;
  listItems?: string[];
  internalLinks?: Array<{ text: string; href: string }>;
  badge?: string;
}

export interface InteractiveContentSectionProps {
  className?: string;
  h1: string;
  introduction: string;
  cards: ContentCard[];
  visualContent?: React.ReactNode; // For sticky side content
  finalCta?: {
    text: string;
    buttonText: string;
    onButtonClick?: () => void;
  };
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
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

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function InteractiveContentSection({
  className,
  h1,
  introduction,
  cards,
  visualContent,
  finalCta,
}: InteractiveContentSectionProps) {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  return (
    <section className={cn("relative overflow-hidden py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* H1 - Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-3xl font-bold leading-tight text-text-heading sm:text-4xl lg:mb-8 lg:text-5xl"
        >
          {h1}
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-base leading-relaxed text-text-medium sm:text-lg lg:mb-12 lg:text-xl"
        >
          {introduction}
        </motion.p>

        {/* Desktop: Two Column Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left: Interactive Cards (Accordion) */}
          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              value={activeCard || undefined}
              onValueChange={setActiveCard}
              className="space-y-4"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <AccordionItem
                    value={card.id}
                    className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-md data-[state=open]:shadow-lg"
                  >
                    <AccordionTrigger className="px-5 py-4 hover:no-underline lg:px-6 lg:py-5">
                      <div className="flex items-start gap-4 text-left">
                        {/* Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background-pink-light">
                          <div className="text-primary">{card.icon}</div>
                        </div>

                        {/* Title & Short Description */}
                        <div className="flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="text-lg font-bold text-text-heading lg:text-xl">
                              {card.title}
                            </h3>
                            {card.badge && (
                              <span className="rounded-full bg-success-light px-2 py-0.5 text-xs font-semibold text-success-darker">
                                {card.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-text-medium lg:text-base">
                            {card.shortDescription}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="border-t border-border bg-background-gray-light px-5 py-4 lg:px-6 lg:py-5">
                      <div className="space-y-4">
                        {/* Expanded Content */}
                        {card.expandedContent && (
                          <div className="text-sm leading-relaxed text-text-medium lg:text-base">
                            {typeof card.expandedContent === "string" ? (
                              <p>{card.expandedContent}</p>
                            ) : (
                              card.expandedContent
                            )}
                          </div>
                        )}

                        {/* List Items */}
                        {card.listItems && card.listItems.length > 0 && (
                          <ul className="space-y-2.5">
                            {card.listItems.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-sm text-text-medium lg:text-base"
                              >
                                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Internal Links */}
                        {card.internalLinks && card.internalLinks.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                              Related Services
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {card.internalLinks.map((link, idx) => (
                                <Link
                                  key={idx}
                                  href={link.href}
                                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white"
                                >
                                  {link.text}
                                  <svg
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Right: Sticky Visual Content (Desktop Only) */}
          {visualContent && (
            <div className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-background-peach via-background-pink-light to-background-peach p-8">
                {visualContent}
              </div>
            </div>
          )}
        </div>

        {/* Final CTA */}
        {finalCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 via-background-pink-light to-primary/10 p-6 text-center lg:mt-16 lg:p-8"
          >
            <p className="mb-4 text-lg font-semibold text-text-heading sm:text-xl lg:mb-5 lg:text-2xl">
              {finalCta.text}
            </p>
            <button
              onClick={finalCta.onButtonClick}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary/90 active:scale-[0.98] lg:px-8 lg:py-4 lg:text-lg"
            >
              {finalCta.buttonText}
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default InteractiveContentSection;
