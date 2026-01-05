import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const builderNoticeData: NoticeTypeData = {
  slug: "legal-notice-to-builder",
  title: "Legal Notice to Builder",
  cluster: "builder-consumer",

  seo: {
    title: "Builder Delayed Possession? | Send RERA Notice | ₹499",
    description:
      "Property delayed or defective? Get a RERA-compliant notice sent to your builder today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
    keywords: [
      "legal notice to builder",
      "builder delay legal notice",
      "rera notice",
    ],
  },

  hero: {
    badge: "PROPERTY BUYER RIGHTS",
    headline: "Hold Builders Accountable for Delays and Defects",
    subheadline: "Legal notices for property buyers under RERA",
    flipWords: [
      "RERA Protection",
      "Possession Delay",
      "Quality Defects",
      "Refund Claims",
    ],
    badges: [
      { icon: "shield", text: "RERA\nProtection" },
      { icon: "clock", text: "Penalty &\nCompensation" },
    ],
  },

  content: {
    h1: "Legal Notice to Builder for Delay or Default",
    introduction:
      "If your builder has delayed possession, delivered a defective property, or violated the buyer-builder agreement, you have strong rights under RERA (Real Estate Regulation Act) 2016. A legal notice to builder is the first step to claim compensation, refund, or enforce your rights as a property buyer.",
    sections: [],
    finalCta: {
      text: "Don't let builders exploit you. Assert your RERA rights and send a legal notice today.",
      buttonText: "Send Builder Notice Now",
    },
  },

  story: {
    badge: "BUYER VICTORY",
    title: "Recovered ₹25 Lakhs + Compensation from",
    titleHighlight: "Delayed Project",
    description:
      "Amit's flat possession was delayed by 3 years. After sending a RERA-based legal notice through VakilTech, he filed a RERA complaint. The builder was ordered to pay ₹25 lakhs refund plus ₹8 lakhs compensation for the delay.",
    features: [
      {
        icon: "document",
        title: "Strong RERA Protection",
        description:
          "RERA provides statutory remedies for buyers against builder defaults.",
        badge: { text: "Buyer Protection", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Fast RERA Adjudication",
        description:
          "RERA authorities decide cases within 60-90 days, much faster than courts.",
      },
      {
        icon: "wallet",
        title: "Refund + Interest + Compensation",
        description:
          "Can claim full refund with interest at prescribed rate plus compensation for delay.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "RERA &",
    titleHighlight: "Property Buyer Rights",
    description:
      "Property buyer rights are protected under Real Estate (Regulation and Development) Act 2016, Consumer Protection Act 2019, and buyer-builder agreements.",
    expertInsight: {
      quote:
        "RERA has revolutionized property buyer protection. 85% of RERA complaints result in favorable orders for buyers within 6 months.",
    },
    accordionSections: [
      {
        id: "rera-rights",
        title: "Property Buyer Rights Under RERA",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to timely possession as per",
            highlight: "registered agreement",
          },
          {
            text: "Refund with interest if possession delayed beyond grace period",
          },
          { text: "Compensation for defects and quality issues" },
          { text: "Interest on delayed possession at prescribed rate" },
          { text: "Right to approach RERA authority for fast resolution" },
        ],
      },
    ],
  },
  
  postNoticeRoadmap: {
    title: "Roadmap: What Happens After Sending the Notice?",
    scenarios: [
      {
        situation: "If Reply Received",
        actions: [
          {
            title: "Mediation",
            description: "Most property disputes are best settled out of court to save decades of time. Draft a Settlement Agreement.",
          },
          {
            title: "Authority",
            description: "If it's a builder issue, file a complaint with RERA (Real Estate Regulatory Authority).",
          },
        ],
      },
      {
        situation: "If NO Reply",
        actions: [
          {
            title: "File Case",
            description: "File a formal complaint with RERA or Consumer Forum for compensation and refund.",
          },
          {
            title: "Authority",
            description: "File a written complaint to the Municipal Corporation if there is illegal construction.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["builder-delay"],

  faqs: [
    {
      id: "when-send-builder-notice",
      question: "When should I send a legal notice to builder?",
      answer:
        "Send a notice when: possession is delayed beyond agreed date + grace period (if any), builder is not responding to complaints, property has major defects or quality issues, builder violates buyer agreement terms, you want refund due to delay, or builder has deviated from approved plans. Notice is required before approaching RERA or consumer forum.",
    },
    {
      id: "what-is-rera",
      question: "What is RERA and how does it protect property buyers?",
      answer:
        "RERA (Real Estate Regulation Act) 2016 is a central law protecting property buyers from builder exploitation. Key protections: builders must register projects, deposit 70% of funds in escrow, complete within registered timeline, pay interest on delays, refund with interest if project fails, fix defects within defect liability period, and face penalties for violations. RERA authorities provide fast adjudication (60-90 days) compared to courts.",
    },
    {
      id: "compensation-for-delay",
      question: "What compensation can I claim for possession delay?",
      answer:
        "You can claim: (1) Refund of all amounts paid with interest at prescribed rate (typically SBI MCLR + 2%), (2) OR Possession with compensation for delay period at same interest rate, (3) Additional compensation for mental harassment and loss, (4) Litigation costs. Many buyers claim rent equivalent for the delay period as alternative accommodation cost.",
    },
    {
      id: "defective-property",
      question: "Can I send notice for defective or poor quality property?",
      answer:
        "Yes, if property has: structural defects, seepage/leakage issues, quality different from promised specifications, deviation from approved plans, amenities not provided as promised, or defects within defect liability period (5 years under RERA). Notice should detail all defects with photographs and demand rectification within timeline or compensation.",
    },
    {
      id: "refund-vs-possession",
      question: "Should I claim refund or wait for possession?",
      answer:
        "Consider: how much delay has occurred (3+ years suggests claiming refund), builder's financial health (distressed builders may never complete), whether you still want the property, and market conditions. If project is clearly delayed beyond reasonable time or builder is in financial trouble, claiming refund with interest is often better than waiting indefinitely. You can revise your claim later.",
    },
    {
      id: "rera-complaint-vs-court",
      question: "Should I approach RERA or file a court case?",
      answer:
        "Prefer RERA authority first because: it's much faster (60-90 days vs 2-5 years), no court fee (small nominal fee only), buyer-friendly forum with specialized expertise, and builder non-compliance attracts strict penalties. Court cases are for very large claims or if RERA doesn't have jurisdiction. Consumer forum is alternative for deficiency in service.",
    },
    {
      id: "builder-bankruptcy",
      question: "What if builder is bankrupt or project is stalled?",
      answer:
        "If builder is under IBC (bankruptcy code), you become a financial creditor and can: file claim in NCLT proceedings, vote on resolution plan, and recover from available assets (priority after secured creditors). RERA claims can still be filed. However, recovery may be partial. For stalled projects, check if state has taken over or if buyer association can complete using available funds.",
    },
    {
      id: "grace-period",
      question: "What is grace period for possession delay?",
      answer:
        "Grace period is the buffer time beyond committed possession date during which builder is not liable for delay. Typically 3-6 months as per buyer-builder agreement. Delay is calculated only after grace period ends. Example: Possession date June 2023, grace period 6 months, delay starts from January 2024 onward. Check your agreement for specific grace period clause.",
    },
    {
      id: "cost-builder-notice",
      question: "How much does a legal notice to builder cost?",
      answer:
        "VakilTech offers builder notice services for ₹1,499, including detailed review of buyer-builder agreement and RERA provisions, calculation of delay period and interest, professional drafting citing RERA and consumer law, demand for refund/compensation/possession, unlimited revisions, registered post delivery to builder's registered address, and guidance on filing RERA complaint or consumer case if needed.",
    },
  ],
};
