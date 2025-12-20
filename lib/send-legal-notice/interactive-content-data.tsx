import React from "react";
import type { ContentCard } from "@/components/send-legal-notice/InteractiveContentSection";

/* =============================================================================
 * ICON COMPONENTS FOR CARDS
 * ============================================================================= */

const icons = {
  document: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  calendar: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  checklist: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  timeline: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  support: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  wallet: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),
  users: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

/* =============================================================================
 * MONEY RECOVERY INTERACTIVE CONTENT
 * ============================================================================= */

export const moneyRecoveryInteractiveCards: ContentCard[] = [
  {
    id: "what-is",
    icon: icons.document,
    title: "What Is a Money Recovery Notice?",
    shortDescription: "A formal legal demand to recover unpaid dues",
    expandedContent:
      "A legal notice for recovery of money is a formal written demand sent by an advocate to recover unpaid dues. It informs the recipient that a specific amount is legally payable, the failure to pay violates legal or contractual obligations, and legal action will follow if payment is not made within a stipulated time.",
    listItems: [
      "Creates formal documentary evidence",
      "Establishes timeline for legal action",
      "Often resolves disputes without court",
      "Required before filing civil suits",
    ],
  },
  {
    id: "when-to-send",
    icon: icons.calendar,
    title: "When Can You Send One?",
    shortDescription: "Common scenarios that warrant a legal notice",
    badge: "Most Common",
    expandedContent:
      "You can send a legal notice for recovery of money in various situations where someone owes you money and refuses to pay:",
    listItems: [
      "Non-payment of loan amount",
      "Unpaid business invoices or service fees",
      "Salary or commission not paid by employer",
      "Money lent to a friend or relative",
      "Breach of payment terms in a contract",
      "Advance paid but services not delivered",
    ],
    internalLinks: [
      { text: "Cheque Bounce Notice", href: "/cheque-bounce-legal-notice" },
      { text: "Unpaid Salary", href: "/legal-notice-for-unpaid-salary" },
    ],
  },
  {
    id: "what-to-include",
    icon: icons.checklist,
    title: "What Should the Notice Contain?",
    shortDescription: "Essential elements for a legally valid notice",
    expandedContent:
      "A legally valid notice must be comprehensive and clear. Improperly drafted notices often weaken your case later, which is why it's important that the notice is drafted by a qualified advocate.",
    listItems: [
      "Details of the parties involved",
      "Exact amount due and payment breakup",
      "Date and reason the amount became payable",
      "Legal grounds for recovery",
      "Time period given for payment (usually 7–15 days)",
      "Consequences of non-payment",
    ],
  },
  {
    id: "what-happens-next",
    icon: icons.timeline,
    title: "What Happens After Sending?",
    shortDescription: "Three possible outcomes after notice delivery",
    expandedContent: (
      <div className="space-y-3">
        <p>After the legal notice is sent, one of three things typically happens:</p>
        <div className="space-y-3 rounded-lg bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-light">
              <span className="text-xs font-bold text-success">1</span>
            </div>
            <div>
              <p className="font-semibold text-text-heading">Payment is made</p>
              <p className="text-sm text-text-medium">Many disputes end here (65% success rate)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning-yellow">
              <span className="text-xs font-bold text-warning-brown">2</span>
            </div>
            <div>
              <p className="font-semibold text-text-heading">Negotiation or settlement</p>
              <p className="text-sm text-text-medium">Lawyers may resolve the matter mutually</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background-gray">
              <span className="text-xs font-bold text-text-body">3</span>
            </div>
            <div>
              <p className="font-semibold text-text-heading">No response or refusal</p>
              <p className="text-sm text-text-medium">Legal action can be initiated in court</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "is-it-mandatory",
    icon: icons.shield,
    title: "Is It Mandatory?",
    shortDescription: "When you must send a legal notice",
    expandedContent:
      "While not mandatory in every case, sending a legal notice is strongly recommended because:",
    listItems: [
      "Courts view it as good-faith effort to resolve",
      "Strengthens your legal position significantly",
      "Often avoids lengthy and expensive litigation",
      "Creates crucial written evidence for court",
      "Legally compulsory in cheque bounce cases (Section 138)",
    ],
  },
  {
    id: "how-vakiltech-helps",
    icon: icons.users,
    title: "How Vakiltech Helps",
    shortDescription: "Professional support for money recovery",
    badge: "₹12.3 Cr Recovered",
    expandedContent:
      "With Vakiltech, you get end-to-end support for recovering your money through legal channels:",
    listItems: [
      "Lawyer-drafted legal notice (not templates)",
      "Case-specific legal language tailored to your situation",
      "Pan-India service with local expertise",
      "Transparent pricing starting at ₹1,499",
      "Fast drafting and dispatch (24-48 hours)",
      "Guidance on next legal steps if needed",
    ],
  },
  {
    id: "cost",
    icon: icons.wallet,
    title: "Cost & Pricing",
    shortDescription: "Transparent, affordable pricing",
    expandedContent: (
      <div className="space-y-4">
        <p>The cost of sending a legal notice depends on:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary">•</span>
            <span>Complexity of the dispute</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary">•</span>
            <span>Amount involved</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary">•</span>
            <span>Supporting documents required</span>
          </li>
        </ul>
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="text-center text-lg font-bold text-primary">
            ₹1,499 All Inclusive
          </p>
          <p className="text-center text-sm text-text-medium">
            No hidden charges. Clear, upfront pricing.
          </p>
        </div>
      </div>
    ),
  },
];

/* =============================================================================
 * VISUAL CONTENT FOR STICKY SIDE (Desktop)
 * ============================================================================= */

export const moneyRecoveryVisualContent = (
  <div className="space-y-6">
    <div className="text-center">
      <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-success-light">
        <span className="text-3xl font-bold text-success">65%</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-text-heading">
        Success Rate
      </h3>
      <p className="text-sm text-text-medium">
        Disputes resolved after sending legal notice
      </p>
    </div>

    <div className="rounded-xl bg-white p-5 shadow-sm">
      <h4 className="mb-3 font-semibold text-text-heading">Why It Works</h4>
      <ul className="space-y-2.5 text-sm text-text-medium">
        <li className="flex items-start gap-2">
          {icons.checklist}
          <span>Creates legal pressure</span>
        </li>
        <li className="flex items-start gap-2">
          {icons.shield}
          <span>Proves good faith</span>
        </li>
        <li className="flex items-start gap-2">
          {icons.timeline}
          <span>Sets clear timeline</span>
        </li>
      </ul>
    </div>

    <div className="rounded-xl bg-success-light p-4 text-center">
      <p className="text-2xl font-bold text-success-darker">₹12.3 Cr</p>
      <p className="text-sm text-success-dark">Recovered for clients in 2024</p>
    </div>
  </div>
);
