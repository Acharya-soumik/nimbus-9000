/**
 * FAQ Section Component
 *
 * A beautiful, reusable FAQ component with accordion functionality
 * Features:
 * - Elegant dove image decoration
 * - Smooth animations
 * - Design system integration
 * - Fully responsive
 * - TypeScript support
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// =============================================================================
// TYPES
// =============================================================================

export interface FAQItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text */
  question: string;
  /** The answer text (supports React nodes for rich content) */
  answer: React.ReactNode;
}

export interface FAQSectionProps {
  /** Array of FAQ items to display */
  faqs: FAQItem[];
  /** Section title */
  title?: string;
  /** Section subtitle/description */
  subtitle?: string;
  /** Show dove image decoration */
  showDove?: boolean;
  /** Custom className for container */
  className?: string;
  /** Custom className for title */
  titleClassName?: string;
  /** Custom className for each FAQ item */
  itemClassName?: string;
  /** Initial open item ID */
  defaultOpenId?: string;
  /** Allow multiple items to be open at once */
  allowMultiple?: boolean;
  /** Enable FAQ Schema (JSON-LD structured data) for SEO */
  enableSchema?: boolean;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  showDove = true,
  className,
  titleClassName,
  itemClassName,
  defaultOpenId,
  allowMultiple = false,
  enableSchema = false,
}: FAQSectionProps) {
  // Helper function to extract text from React nodes
  const getTextFromReactNode = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getTextFromReactNode).join(" ");
    if (node && typeof node === "object" && "props" in node) {
      const element = node as { props: { children?: React.ReactNode } };
      return getTextFromReactNode(element.props.children);
    }
    return "";
  };

  // Generate FAQ Schema for SEO
  const faqSchema = enableSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: getTextFromReactNode(faq.answer),
          },
        })),
      }
    : null;

  return (
    <>
      {/* FAQ Schema Markup */}
      {enableSchema && faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <section
        className={cn(
          "relative w-full py-16 md:py-24",
          "px-4 sm:px-6 lg:px-8",
          className
        )}
      >
      <div className="mx-auto max-w-4xl">
        {/* Title Section with Dove */}
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            {/* Dove Image - Positioned to the right of title */}
            {/* {showDove && (
              <div className="absolute -right-16 -top-4 md:-right-20 md:-top-6">
                <div className="relative h-16 w-16 md:h-20 md:w-20">
                  <Image
                    src="/assets/common/dove-bird.png"
                    alt="Peace dove"
                    fill
                    className="object-contain animate-float"
                    priority
                  />
                </div>
              </div>
            )} */}

            {/* Title */}
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold",
                "bg-gradient-to-r from-[oklch(64%_0.18_15)] to-[oklch(63%_0.22_25)]",
                "bg-clip-text text-transparent",
                "mb-4",
                titleClassName
              )}
            >
              {title}
            </h2>
          </div>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={cn(
                "text-base md:text-lg",
                "text-[oklch(45%_0_0)]",
                "max-w-2xl mx-auto mt-4"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="relative">
          {/* Background Gradient Decoration */}
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 0%, oklch(98% 0.01 30), transparent 70%)`,
            }}
          />

          {allowMultiple ? (
            <Accordion
              type="multiple"
              defaultValue={defaultOpenId ? [defaultOpenId] : undefined}
              className={cn(
                "w-full",
                "bg-white/80 backdrop-blur-sm",
                "rounded-2xl",
                "border border-[oklch(92%_0_0)]",
                "shadow-[0_10px_15px_oklch(0%_0_0_/_0.1),_0_4px_6px_oklch(0%_0_0_/_0.05)]",
                "p-6 md:p-8",
                "space-y-2"
              )}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={cn(
                    "border-[oklch(92%_0_0)]",
                    "rounded-lg",
                    "transition-colors duration-200",
                    "hover:bg-[oklch(98%_0.01_30)]",
                    "px-4 md:px-6",
                    itemClassName
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "text-left",
                      "text-base md:text-lg font-semibold",
                      "text-[oklch(20%_0_0)]",
                      "hover:text-[oklch(64%_0.18_15)]",
                      "transition-colors duration-200",
                      "py-5"
                    )}
                  >
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "text-sm md:text-base",
                      "text-[oklch(38%_0_0)]",
                      "leading-relaxed",
                      "pt-2 pb-5"
                    )}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Accordion
              type="single"
              defaultValue={defaultOpenId}
              collapsible
              className={cn(
                "w-full",
                "bg-white/80 backdrop-blur-sm",
                "rounded-2xl",
                "border border-[oklch(92%_0_0)]",
                "shadow-[0_10px_15px_oklch(0%_0_0_/_0.1),_0_4px_6px_oklch(0%_0_0_/_0.05)]",
                "p-6 md:p-8",
                "space-y-2"
              )}
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={cn(
                    "border-[oklch(92%_0_0)]",
                    "rounded-lg",
                    "transition-colors duration-200",
                    "hover:bg-[oklch(98%_0.01_30)]",
                    "px-4 md:px-6",
                    itemClassName
                  )}
                >
                  <AccordionTrigger
                    className={cn(
                      "text-left",
                      "text-base md:text-lg font-semibold",
                      "text-[oklch(20%_0_0)]",
                      "hover:text-[oklch(64%_0.18_15)]",
                      "transition-colors duration-200",
                      "py-5"
                    )}
                  >
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "text-sm md:text-base",
                      "text-[oklch(38%_0_0)]",
                      "leading-relaxed",
                      "pt-2 pb-5"
                    )}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center gap-1">
          <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[oklch(64%_0.18_15)] to-[oklch(63%_0.22_25)]" />
          <div className="h-1 w-4 rounded-full bg-gradient-to-r from-[oklch(63%_0.22_25)] to-[oklch(58%_0.22_25)]" />
          <div className="h-1 w-2 rounded-full bg-[oklch(58%_0.22_25)]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        :global(.animate-float) {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
    </>
  );
}

// =============================================================================
// PRESET VARIANTS
// =============================================================================

/**
 * FAQ Section with minimal styling (no background, simpler design)
 */
export function FAQSectionMinimal(props: FAQSectionProps) {
  return (
    <FAQSection {...props} className={cn("bg-transparent", props.className)} />
  );
}

/**
 * FAQ Section with dark background variant
 */
export function FAQSectionDark(props: FAQSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full py-16 md:py-24",
        "px-4 sm:px-6 lg:px-8",
        "bg-[oklch(20%_0_0)]",
        props.className
      )}
    >
      <div className="mx-auto max-w-4xl">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            {props.showDove !== false && (
              <div className="absolute -right-16 -top-4 md:-right-20 md:-top-6">
                <div className="relative h-16 w-16 md:h-20 md:w-20">
                  <Image
                    src="/assets/common/dove-bird.png"
                    alt="Peace dove"
                    fill
                    className="object-contain animate-float brightness-0 invert"
                    priority
                  />
                </div>
              </div>
            )}

            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold",
                "text-white",
                "mb-4",
                props.titleClassName
              )}
            >
              {props.title || "Frequently Asked Questions"}
            </h2>
          </div>

          {props.subtitle && (
            <p className="text-base md:text-lg text-[oklch(70%_0_0)] max-w-2xl mx-auto mt-4">
              {props.subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        {props.allowMultiple ? (
          <Accordion
            type="multiple"
            defaultValue={
              props.defaultOpenId ? [props.defaultOpenId] : undefined
            }
            className={cn(
              "w-full",
              "bg-[oklch(15%_0_0)]",
              "rounded-2xl",
              "border border-[oklch(30%_0_0)]",
              "p-6 md:p-8",
              "space-y-2"
            )}
          >
            {props.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "border-[oklch(30%_0_0)]",
                  "rounded-lg",
                  "hover:bg-[oklch(18%_0_0)]",
                  "px-4 md:px-6",
                  props.itemClassName
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "text-left text-base md:text-lg font-semibold",
                    "text-white",
                    "hover:text-[oklch(64%_0.18_15)]",
                    "py-5"
                  )}
                >
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "text-sm md:text-base",
                    "text-[oklch(70%_0_0)]",
                    "leading-relaxed",
                    "pt-2 pb-5"
                  )}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Accordion
            type="single"
            defaultValue={props.defaultOpenId}
            collapsible
            className={cn(
              "w-full",
              "bg-[oklch(15%_0_0)]",
              "rounded-2xl",
              "border border-[oklch(30%_0_0)]",
              "p-6 md:p-8",
              "space-y-2"
            )}
          >
            {props.faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "border-[oklch(30%_0_0)]",
                  "rounded-lg",
                  "hover:bg-[oklch(18%_0_0)]",
                  "px-4 md:px-6",
                  props.itemClassName
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "text-left text-base md:text-lg font-semibold",
                    "text-white",
                    "hover:text-[oklch(64%_0.18_15)]",
                    "py-5"
                  )}
                >
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "text-sm md:text-base",
                    "text-[oklch(70%_0_0)]",
                    "leading-relaxed",
                    "pt-2 pb-5"
                  )}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        :global(.animate-float) {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// =============================================================================
// EXPORTS
// =============================================================================

export default FAQSection;
