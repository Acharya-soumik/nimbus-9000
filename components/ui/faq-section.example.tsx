/**
 * FAQ Section - Example Usage
 *
 * This file demonstrates how to use the FAQ component across different pages
 */

import { FAQSection, FAQSectionDark, FAQSectionMinimal } from "./faq-section";
import type { FAQItem } from "./faq-section";

// =============================================================================
// EXAMPLE 1: Legal Notice FAQ
// =============================================================================

const legalNoticeFAQs: FAQItem[] = [
  {
    id: "what-is-legal-notice",
    question: "What is a legal notice?",
    answer: (
      <div className="space-y-2">
        <p>
          A legal notice is a formal written communication that informs an
          individual or entity about a legal matter. It serves as an official
          record of intent to take legal action if the matter is not resolved.
        </p>
        <p>
          Legal notices are commonly used in cases of breach of contract,
          property disputes, cheque bounces, and other civil matters.
        </p>
      </div>
    ),
  },
  {
    id: "why-send-legal-notice",
    question: "Why should I send a legal notice?",
    answer:
      "A legal notice serves multiple purposes: it formally documents your grievance, provides the recipient an opportunity to resolve the matter amicably, and establishes a record that you attempted to settle the dispute before approaching the court. It can often lead to resolution without litigation.",
  },
  {
    id: "how-long-response",
    question: "How long does the recipient have to respond?",
    answer:
      "Typically, the recipient is given 15-30 days to respond to a legal notice, though this can vary depending on the nature of the case and applicable laws. The response period should be clearly mentioned in the notice itself.",
  },
  {
    id: "cost-legal-notice",
    question: "How much does it cost to send a legal notice?",
    answer: (
      <div className="space-y-2">
        <p>
          The cost varies based on the complexity of the case and the lawyer's
          fees. With Vakil Tech, we offer transparent pricing starting from{" "}
          <span className="font-semibold text-[oklch(64%_0.18_15)]">₹499</span>,
          making legal services accessible to everyone.
        </p>
        <p>This includes drafting, review, and sending via Speed Post.</p>
      </div>
    ),
  },
  {
    id: "what-happens-after",
    question: "What happens after sending a legal notice?",
    answer:
      "After the notice is sent, the recipient may respond with their position, propose a settlement, or choose not to respond. If no satisfactory response is received within the specified time period, you can proceed with filing a case in court. The legal notice serves as evidence that you attempted resolution before litigation.",
  },
];

export function LegalNoticeFAQExample() {
  return (
    <FAQSection
      faqs={legalNoticeFAQs}
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about legal notices"
      showDove={true}
    />
  );
}

// =============================================================================
// EXAMPLE 2: General FAQ (Dark Variant)
// =============================================================================

const generalFAQs: FAQItem[] = [
  {
    id: "how-it-works",
    question: "How does Vakil Tech work?",
    answer:
      "Simply select the service you need, fill out the required information, make the payment, and our legal experts will take care of the rest. You'll receive updates at every step of the process.",
  },
  {
    id: "payment-secure",
    question: "Is my payment secure?",
    answer:
      "Yes, absolutely! We use industry-standard encryption and secure payment gateways to ensure your payment information is completely safe and secure.",
  },
  {
    id: "turnaround-time",
    question: "What is the typical turnaround time?",
    answer:
      "For most services, we complete the drafting and review within 24-48 hours. The complete process, including delivery via Speed Post, typically takes 5-7 business days.",
  },
  {
    id: "track-status",
    question: "Can I track my case status?",
    answer:
      "Yes, you'll receive a unique tracking ID and can monitor the progress of your legal notice through our dashboard. We also send email updates at each milestone.",
  },
];

export function GeneralFAQDarkExample() {
  return (
    <FAQSectionDark
      faqs={generalFAQs}
      title="Have Questions?"
      subtitle="We're here to help"
      showDove={true}
    />
  );
}

// =============================================================================
// EXAMPLE 3: Minimal FAQ (No Background)
// =============================================================================

const pricingFAQs: FAQItem[] = [
  {
    id: "refund-policy",
    question: "What is your refund policy?",
    answer:
      "We offer a full refund if we're unable to deliver the service as promised. Once the legal notice has been drafted and sent, refunds are processed on a case-by-case basis.",
  },
  {
    id: "payment-plans",
    question: "Do you offer payment plans?",
    answer:
      "Currently, we require full payment upfront for our services. However, we keep our prices affordable and transparent to make legal services accessible to everyone.",
  },
  {
    id: "hidden-charges",
    question: "Are there any hidden charges?",
    answer:
      "No, absolutely not! The price you see is the price you pay. All costs including drafting, review, registered post, and tracking are included in the quoted price.",
  },
];

export function PricingFAQMinimalExample() {
  return (
    <FAQSectionMinimal
      faqs={pricingFAQs}
      title="Pricing Questions"
      showDove={false}
      className="bg-[oklch(98%_0.01_30)]"
    />
  );
}

// =============================================================================
// EXAMPLE 4: Allow Multiple Items Open
// =============================================================================

const quickFAQs: FAQItem[] = [
  {
    id: "q1",
    question: "How quickly can you draft a legal notice?",
    answer: "We can draft most legal notices within 24 hours.",
  },
  {
    id: "q2",
    question: "Do you provide lawyer consultation?",
    answer:
      "Yes, all our packages include a free consultation with a legal expert.",
  },
  {
    id: "q3",
    question: "Can I make changes after submission?",
    answer:
      "Yes, minor changes can be made before the notice is sent. Major changes may require additional fees.",
  },
];

export function QuickFAQExample() {
  return (
    <FAQSection
      faqs={quickFAQs}
      title="Quick Answers"
      showDove={true}
      allowMultiple={true}
      defaultOpenId="q1"
    />
  );
}

// =============================================================================
// EXAMPLE 5: Custom Styling
// =============================================================================

export function CustomStyledFAQExample() {
  return (
    <FAQSection
      faqs={legalNoticeFAQs}
      title="Got Questions?"
      subtitle="We've got answers"
      showDove={true}
      className="bg-gradient-to-b from-white to-[oklch(98%_0.01_30)]"
      titleClassName="text-[oklch(20%_0_0)]"
      itemClassName="hover:border-[oklch(64%_0.18_15)]/20"
    />
  );
}

// =============================================================================
// EXAMPLE 6: Embedding in a Page Layout
// =============================================================================

export function FullPageWithFAQExample() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-[oklch(98%_0.01_30)] to-white">
        <h1 className="text-5xl font-bold mb-4">Legal Notice Services</h1>
        <p className="text-xl text-[oklch(45%_0_0)]">
          Professional legal notices delivered to your doorstep
        </p>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-[oklch(38%_0_0)] mb-8">
            We provide comprehensive legal notice services...
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <LegalNoticeFAQExample />

      {/* Footer */}
      <footer className="py-8 px-4 bg-[oklch(20%_0_0)] text-white text-center">
        <p>&copy; 2024 Vakil Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}
