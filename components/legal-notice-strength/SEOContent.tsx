"use client";

import * as React from "react";
import InfoSectionVariant2 from "@/components/send-legal-notice/InfoSectionVariant2";
import { Check, AlertTriangle, XCircle, FileText, Scale, Shield } from "lucide-react";

/* =============================================================================
 * INTRO SECTION
 * ============================================================================= */
export function StrengthIntro() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
          Legal Notice Strength Calculator — <span className="text-primary">How Strong Is Your Case?</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-text-medium">
          This free tool helps you assess the strength of your legal notice before you send it. 
          Whether it’s a <strong>money recovery notice, cheque bounce notice, or rental dispute notice</strong>, 
          answering a few simple questions gives you a strength score and actionable recommendations.
        </p>
        <p className="mt-4 text-base text-text-muted">
          A strong legal notice forms the foundation of a successful legal outcome. 
          Use this calculator to find out if you have all the necessary proofs and legal grounds 
          to move forward confidently.
        </p>
      </div>
    </section>
  );
}

/* =============================================================================
 * TOOL LOGIC SECTION
 * ============================================================================= */
export function StrengthToolLogic() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InfoSectionVariant2
          title="What Is a Legal Notice"
          titleHighlight="Strength Score?"
          description="A strong legal notice generally has clear proof (such as contracts or receipts), clear demand statements, a reasonable deadline, and relevant legal citations. Our scoring model weighs these factors to give you a strength estimate."
          badge="SCORING LOGIC"
          expertInsight={{
            quote: "A well-structured legal notice with clear evidence is often enough to settle disputes without going to court. The strength score reflects this probability.",
          }}
          accordionSections={[
            {
              id: "factors",
              title: "What Factors We Analyze",
              icon: <Scale className="h-5 w-5 text-primary" />,
              items: [
                { text: "Availability of", highlight: "written evidence (contracts, invoices)" },
                { text: "Clarity of", highlight: "legal demand and due amount" },
                { text: "Adherence to", highlight: "statutory limitation periods" },
                { text: "Previous communication history with the opposing party" },
              ],
            },
            {
              id: "logic",
              title: "How Scoring Works",
              icon: <FileText className="h-5 w-5 text-info" />,
              items: [
                { text: "High Score (60-100%): Strong evidence, clear legal standing." },
                { text: "Moderate Score (40-59%): Some gaps in evidence or procedure." },
                { text: "Low Score (0-39%): Significant missing elements or weak legal ground." },
              ],
            },
          ]}
          ctaCards={[]} // No CTAs for this informational section
          defaultOpenAccordion="factors"
        />
      </div>
    </div>
  );
}

/* =============================================================================
 * OUTCOME SECTION
 * ============================================================================= */
export function StrengthOutcomes() {
  return (
    <section className="bg-background-gray py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-text-heading sm:text-4xl">
            What Your Strength Score Means
          </h2>
          <p className="mt-3 text-lg text-text-medium">
            Understand your position and decide your next legal steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Weak Case */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border-t-4 border-red-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-heading">Low Strength (0-39%)</h3>
            <p className="mb-4 text-sm text-text-medium">
              Your case may lack crucial evidence or legal standing. Sending a notice now might be risky or ineffective.
            </p>
            <h4 className="mb-2 text-sm font-semibold text-text-heading">Recommended Steps:</h4>
            <ul className="space-y-2 text-sm text-text-medium">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"/>
                Gather more evidence (emails, chats, receipts).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"/>
                Consult a lawyer to identify gaps.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"/>
                Do not send a notice yet.
              </li>
            </ul>
          </div>

          {/* Moderate Case */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border-t-4 border-yellow-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
              <Shield className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-heading">Moderate (40-59%)</h3>
            <p className="mb-4 text-sm text-text-medium">
              You have a valid claim but might face challenges if the other party contests it strongly.
            </p>
            <h4 className="mb-2 text-sm font-semibold text-text-heading">Recommended Steps:</h4>
            <ul className="space-y-2 text-sm text-text-medium">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500"/>
                Organize your timeline of events.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500"/>
                Get a lawyer to draft a precise notice.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500"/>
                Highlight the strongest proofs you have.
              </li>
            </ul>
          </div>

          {/* Strong Case */}
          <div className="rounded-2xl bg-white p-6 shadow-sm border-t-4 border-green-500">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-heading">High Strength (60-100%)</h3>
            <p className="mb-4 text-sm text-text-medium">
              You have a solid foundation for a legal notice. The likelihood of a favorable outcome is high.
            </p>
            <h4 className="mb-2 text-sm font-semibold text-text-heading">Recommended Steps:</h4>
            <ul className="space-y-2 text-sm text-text-medium">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"/>
                Send a legal notice immediately.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"/>
                Keep original documents safe for court.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"/>
                Prepare for settlement negotiations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
 * SCENARIOS SECTION
 * ============================================================================= */
export function StrengthScenarios() {
  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InfoSectionVariant2
          title="User Case Scenarios"
          titleHighlight="Examples"
          description="See how different factors affect the strength of a legal notice in real-world situations."
          badge="REAL EXAMPLES"
          badgeIcon={<FileText className="h-5 w-5 text-primary" />}
          expertInsight={{
            quote: "Even a small missing detail like a 'date of service' or 'clear demand amount' can weaken an otherwise strong case.",
          }}
          accordionSections={[
            {
              id: "money-recovery",
              title: "Scenario: Money Recovery",
              icon: <span className="text-xl">💰</span>,
              items: [
                { text: "Strong Case:", highlight: "Has signed contract, invoices, and email acknowledgement of debt." },
                { text: "Weak Case:", highlight: "Verbal agreement only, no proof of money transfer, debt is 4 years old (time-barred)." },
              ],
            },
            {
              id: "cheque-bounce",
              title: "Scenario: Cheque Bounce",
              icon: <span className="text-xl">🏦</span>,
              items: [
                { text: "Strong Case:", highlight: "Cheque deposited within 3 months, return memo received, notice sent within 30 days." },
                { text: "Weak Case:", highlight: "Notice sent after 45 days of return memo (limitation expired)." },
              ],
            },
            {
              id: "tenant",
              title: "Scenario: Tenant Eviction",
              icon: <span className="text-xl">🏠</span>,
              items: [
                { text: "Strong Case:", highlight: "Registered rent agreement, bank proof of unpaid rent for 3+ months." },
                { text: "Weak Case:", highlight: "No written agreement, rent paid in cash with no receipts." },
              ],
            },
          ]}
          ctaCards={[]} 
          defaultOpenAccordion="money-recovery"
        />
      </div>
    </div>
  );
}
