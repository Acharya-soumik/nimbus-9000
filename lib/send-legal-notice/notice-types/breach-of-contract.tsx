import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { breachOfContractSections } from "../notice-seo-content";

export const breachOfContractData: NoticeTypeData = {
  slug: "breach-of-contract-legal-notice",
  title: "Legal Notice for Breach of Contract",
  cluster: "contract",

  seo: {
    title:
      "Breach of Contract? | Enforce Agreement | Start at ₹499",
    description:
      "Contract violated? Get a lawyer-drafted breach of contract notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.",
    keywords: [
      "breach of contract legal notice",
      "contract violation notice",
      "specific performance notice",
      "contract enforcement",
      "contract dispute",
    ],
  },

  hero: {
    badge: "BREACH OF CONTRACT",
    headline: "Enforce Your Contracts. Protect Your Business!",
    subheadline:
      "Legal notices for breach of contract and demand for specific performance or damages",
    flipWords: [
      "Contract Enforcement",
      "Specific Performance",
      "Damages Recovery",
      "Legal Protection",
    ],
    badges: [
      { icon: "shield", text: "Contract Act\\n1872" },
      { icon: "check", text: "Performance or\\nDamages" },
    ],
  },

  content: {
    h1: "Legal Notice for Breach of Contract in India",
    introduction:
      "When a party fails to fulfill contractual obligations, you have legal remedies under the Indian Contract Act 1872. A breach of contract notice formally demands performance or compensation and is prerequisite before filing suit for specific performance or damages. This notice applies to all contracts—business agreements, service contracts, sale agreements, employment contracts, and partnership agreements.",
    sections: breachOfContractSections,
    finalCta: {
      text: "Don't let contract breaches harm your business. Take legal action to enforce your rights and recover losses.",
      buttonText: "Send Breach of Contract Notice",
    },
  },

  story: {
    badge: "CONTRACT ENFORCED",
    title: "Recovered Damages of",
    titleHighlight: "₹45 Lakhs",
    description:
      "A vendor failed to deliver goods worth ₹18 lakhs despite receiving full payment, then abandoned the contract. After sending legal notice demanding refund plus damages, the vendor paid ₹18 lakhs (principal) plus ₹27 lakhs (damages for business losses and delay) within 45 days to avoid lengthy litigation.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Basis",
        description:
          "Well-drafted notice establishes breach, your performance, and quantified damages.",
        badge: { text: "60-70% Settle", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Specific Performance",
        description:
          "Can demand court order forcing the party to perform the contract as agreed.",
      },
      {
        icon: "wallet",
        title: "Damages Recovery",
        description:
          "Can claim actual losses, consequential damages, interest, and legal costs.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Indian Contract Act 1872 and",
    titleHighlight: "Specific Relief Act 1963",
    description:
      "Contract breaches are governed by Contract Act 1872 (damages) and Specific Relief Act 1963 (specific performance). Courts can order performance of contract or award monetary damages.",
    expertInsight: {
      quote:
        "60-70% of contract disputes settle after legal notice as breaching party realizes litigation costs and time involved.",
    },
    accordionSections: [
      {
        id: "legal-remedies",
        title: "Legal Remedies for Breach of Contract",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Specific Performance:",
            highlight: "court orders party to perform",
          },
          {
            text: "Damages:",
            highlight: "compensatory and consequential losses",
          },
          { text: "Injunction: restraining order against breach" },
          { text: "Rescission: contract cancelled, parties restored" },
          { text: "Quantum Meruit: payment for work done before breach" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["breach-of-contract"],

  faqs: [
    {
      id: "what-is-breach",
      question: "What constitutes breach of contract?",
      answer:
        "Breach of contract occurs when a party: fails to perform obligations on due date (actual breach), indicates in advance they won't perform (anticipatory breach), performs defectively not meeting contract standards (material breach), or partially performs some but not all obligations. The breach must be of a valid, enforceable contract.",
    },
    {
      id: "specific-performance-vs-damages",
      question: "What is difference between specific performance and damages?",
      answer:
        "Specific performance: court order forcing the breaching party to perform the contract as agreed. Granted for unique contracts (sale of specific property, rare goods). Damages: monetary compensation for losses suffered. Granted when specific performance not feasible or appropriate. You can demand specific performance as primary relief and damages as alternative.",
    },
    {
      id: "what-damages",
      question: "What damages can I claim?",
      answer:
        "You can claim: actual/compensatory damages (direct financial loss), consequential damages (indirect losses like lost profits, business disruption), liquidated damages (pre-agreed amount in contract), interest on amount due from breach date, and legal costs. Must prove damages are direct result of breach and reasonably foreseeable.",
    },
    {
      id: "notice-mandatory",
      question: "Is legal notice mandatory before filing suit?",
      answer:
        "While not always legally mandatory, sending legal notice is highly recommended and often required by courts. It demonstrates you attempted amicable resolution before litigation. Many contracts have clauses requiring notice before suit. Proper notice strengthens your case significantly and often leads to settlement without court.",
    },
    {
      id: "contract-types",
      question: "What types of contracts can be enforced?",
      answer:
        "All legally valid contracts: business agreements (supply, service, partnership), sale agreements (goods, property), employment contracts (non-compete, notice period), franchise agreements, construction/contractor agreements, loan agreements, and license agreements. Contract must have valid offer, acceptance, consideration, lawful object, and capacity to contract.",
    },
    {
      id: "timeline",
      question: "How long does breach of contract litigation take?",
      answer:
        "If notice doesn't resolve the matter, suit for specific performance or damages typically takes 2-4 years in civil court. However, 60-70% of cases settle during litigation through compromise. For commercial disputes over ₹3 lakhs, Commercial Courts Act provides for faster disposal (target 1 year). Arbitration, if contract has clause, can be faster (6-18 months).",
    },
    {
      id: "force-majeure",
      question: "What if they claim force majeure or impossibility?",
      answer:
        "Force majeure (act of God, pandemic, war) or impossibility of performance can be valid defenses to breach. However, burden of  proof is on the breaching party to show: event was unforeseeable, beyond their control, made performance impossible (not just difficult or expensive), and they took reasonable steps to mitigate. Most force majeure defenses fail as contracts only become difficult, not impossible.",
    },
    {
      id: "cost-of-notice",
      question: "How much does breach of contract notice cost?",
      answer:
        "VakilTech offers breach of contract legal notice services for ₹1,499, including: contract analysis and breach identification, professional drafting citing Contract Act provisions, documentation of your complete performance, quantification of damages and losses, demand for specific performance or compensation, unlimited revisions, and guidance on filing suit if needed.",
    },
  ],
};
