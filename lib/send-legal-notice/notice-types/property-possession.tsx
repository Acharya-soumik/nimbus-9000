import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const propertyPossessionNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-property-possession",
  title: "Legal Notice for Property Possession",
  cluster: "builder-consumer",

  seo: {
    title: "Demand Property Possession | Legal Notice | ₹499",
    description:
      "Awaiting property handover? Get a lawyer-drafted possession demand notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
    keywords: [
      "legal notice for property possession",
      "possession delay notice",
      "property handover notice",
    ],
  },

  hero: {
    badge: "POSSESSION DELAY",
    headline: "Demand Your Rightful Property Possession",
    subheadline: "Legal notices for delayed possession and handover disputes",
    flipWords: [
      "Timely Possession",
      "RERA Rights",
      "Delay Compensation",
      "Force Handover",
    ],
    badges: [
      { icon: "shield", text: "RERA\nCompliance" },
      { icon: "clock", text: "Interest on\nDelay" },
    ],
  },

  content: {
    h1: "Legal Notice for Property Possession",
    introduction:
      "If your builder has delayed property possession beyond the agreed timeline, you have the legal right to demand immediate possession or claim compensation and interest for the delay. A legal notice for property possession formally demands handover and sets the stage for RERA complaints or legal action if the builder continues to delay.",
    sections: [],
    finalCta: {
      text: "Stop waiting endlessly for your property. Send a possession demand notice and claim your rights today.",
      buttonText: "Draft Possession Notice",
    },
  },

  story: {
    badge: "POSSESSION SECURED",
    title: "Got Possession After 2 Years Delay +",
    titleHighlight: "₹6L Compensation",
    description:
      "Neha's flat possession was delayed by 2 years. After sending a possession demand notice through VakilTech and filing RERA complaint, she received possession within 3 months and ₹6 lakhs compensation (interest for delay period at 10.75% per annum).",
    features: [
      {
        icon: "document",
        title: "Force Immediate Possession",
        description:
          "Notice creates legal pressure for builder to hand over possession quickly.",
      },
      {
        icon: "speedometer",
        title: "Interest for Delay Period",
        description:
          "Claim interest at prescribed rate for entire delay period beyond grace.",
        badge: { text: "RERA Interest", color: "success" },
      },
      {
        icon: "wallet",
        title: "Possession OR Refund",
        description:
          "Can choose immediate possession with compensation OR full refund with interest.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Property Possession",
    titleHighlight: "Rights",
    description:
      "Property possession rights are protected under RERA 2016, Consumer Protection Act 2019, Transfer of Property Act 1882, and buyer-builder agreements.",
    expertInsight: {
      quote:
        "Possession delay is the most common RERA complaint. 80% of cases result in either immediate possession or refund with interest within 6 months.",
    },
    accordionSections: [
      {
        id: "possession-rights",
        title: "Legal Rights for Property Possession",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to possession on",
            highlight: "committed date (+ grace period)",
          },
          { text: "Interest on delay at SBI MCLR + 2% or as per agreement" },
          { text: "Refund with interest if delay is unreasonable" },
          { text: "Compensation for mental harassment and losses" },
          { text: "File RERA complaint after notice for fast relief" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["builder-delay"],

  faqs: [
    {
      id: "when-possession-due",
      question: "When is possession legally due from builder?",
      answer:
        "Possession is due on the date mentioned in the buyer-builder agreement plus any grace period (typically 3-6 months). Example: Agreement says 'possession by December 2023' with 6-month grace means possession is due by June 2024. Any delay beyond that date entitles you to interest/compensation. If no date is mentioned, reasonable time (typically 3-4 years) is implied.",
    },
    {
      id: "calculate-delay",
      question: "How to calculate possession delay?",
      answer:
        "Delay = Current date - (Committed possession date + Grace period). Example: Committed date: Jan 2022, Grace: 6 months, So possession due: July 2022. If today is Jan 2025, delay is 30 months. Interest/compensation is calculated for these 30 months at prescribed rate (typically 10-11% per annum). Use simple interest calculation.",
    },
    {
      id: "what-if-ready-but-not-offering",
      question:
        "What if property is ready but builder is not offering possession?",
      answer:
        "If construction is complete but builder is delaying handover (often to collect additional charges or due to occupation certificate delay), send immediate possession demand notice. Threaten RERA complaint if not handed over within 15-30 days. You can also claim continued interest/rent for delay period. Builder cannot withhold possession without valid reason.",
    },
    {
      id: "possession-with-conditions",
      question: "Can builder impose conditions for possession?",
      answer:
        "Builder can only demand: pending installments as per payment schedule, property tax/stamp duty/registration (which are buyer's legal obligations), and reasonable possession charges mentioned in agreement. Builder CANNOT demand: extra charges not in agreement, club membership fees, infrastructure charges beyond agreement, or force you to take loan from specific bank. Refuse illegal demands.",
    },
    {
      id: "possession-without-oc",
      question: "Can I take possession without Occupation Certificate (OC)?",
      answer:
        "No, don't take possession without OC. Occupation Certificate certifies the building is safe for occupation and complies with approved plans. Without OC: you cannot get water/electricity connections, property insurance may be invalid, resale is difficult, and home loan disbursement may stop. Insist on OC before possession. Builder's delay in getting OC is not your problem.",
    },
    {
      id: "part-possession",
      question:
        "What if builder offers part possession (flat ready but amenities pending)?",
      answer:
        "You can: accept flat possession but don't pay full amount—hold back 10-15% until amenities are complete, take possession under protest (written statement that amenities are pending), continue claiming delay interest until full project including amenities is complete, or refuse possession until everything including amenities is ready. Document everything in writing.",
    },
    {
      id: "compensation-amount",
      question: "How much compensation can I claim for possession delay?",
      answer:
        "Under RERA: Interest at prescribed rate (SBI MCLR + 2%, currently ~10.75% per annum) calculated on all amounts paid for the entire delay period. Additionally, you can claim: rent equivalent for alternative accommodation, mental harassment compensation (₹50,000-2,00,000 typically), and litigation costs. Total compensation can be 10-20% of property value for 2-3 years delay.",
    },
    {
      id: "should-take-possession",
      question: "Should I take possession even if property has defects?",
      answer:
        "Take possession under protest: write detailed defect list, take photographs/videos of all defects, give written notice to builder about defects with rectification timeline, and mention you're taking possession without prejudice to rights. This way you get possession (stop delay interest running) but can still claim rectification. However, for major structural defects, consider refusing possession until fixed.",
    },
    {
      id: "cost-possession-notice",
      question: "How much does a property possession notice cost?",
      answer:
        "VakilTech offers property possession notice services for ₹1,499, including review of agreement and possession timeline, calculation of delay period and interest, professional drafting citing RERA and agreement clauses, demand for immediate possession with compensation, unlimited revisions, registered post delivery, and guidance on filing RERA complaint if possession is not offered within notice period.",
    },
  ],
};
