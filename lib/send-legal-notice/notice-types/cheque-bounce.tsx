import { NoticeTypeData } from "./types";
import { chequeBounceSections } from "../notice-seo-content";
import { realSampleNotices } from "../real-sample-notices";

export const chequeBounceData: NoticeTypeData = {
  slug: "cheque-bounce-legal-notice",
  title: "Cheque Bounce Legal Notice",
  cluster: "money-recovery",

  seo: {
    title: "Send Cheque Bounce Legal Notice - Quick & Affordable | VakilTech",
    description:
      "Facing a Cheque Bounce Issue? Get a Legal Notice Drafted and Sent Quickly. Expert lawyers, flat fee ₹1499. start now.",
    keywords: [
      "cheque bounce legal notice format",
      "section 138 legal notice format",
      "cheque dishonour notice",
      "legal notice for cheque bounce to company",
      "138 notice format",
    ],
  },

  hero: {
    badge: "CHEQUE BOUNCE - SECTION 138",
    headline: "Cheque Bounced? Take Legal Action Now!",
    subheadline:
      "Expert legal notices for dishonoured cheques under Section 138 of NI Act. Flat fee ₹1,499.",
    flipWords: [
      "Criminal Action",
      "Mandatory Notice",
      "15-Day Deadline",
      "Expert Drafting",
    ],
    badges: [
      { icon: "clock", text: "Time-Sensitive\nAction" },
      { icon: "shield", text: "Section 138\nCompliance" },
    ],
  },

  content: {
    h1: "Cheque Bounce Legal Notice Under Section 138 of NI Act",
    introduction:
      "When a cheque is dishonoured due to insufficient funds, it is a criminal offence. You have the legal right to send a mandatory notice under Section 138 of the Negotiable Instruments Act, 1881. This notice must be sent strictly within 30 days of receiving the cheque return memo. Failure to adhere to this timeline can invalidate your legal claim.",
    sections: chequeBounceSections,
    finalCta: {
      text: "Time is running out. You only have 30 days from the date of the return memo to act. Send your Section 138 notice immediately.",
      buttonText: "Draft Cheque Bounce Notice - ₹1,499",
    },
  },

  story: {
    badge: "SUCCESS STORY",
    title: "How Section 138 Notice Recovered",
    titleHighlight: "₹12 Lakhs",
    description:
      "Priya received a bounced cheque of ₹12 lakhs. She sent a legally compliant Section 138 notice through VakilTech. Within 15 days, the drawer paid the full amount plus compensation to avoid criminal prosecution.",
    features: [
      {
        icon: "document",
        title: "Criminal Prosecution Threat",
        description:
          "Section 138 allows both civil and criminal action, making it highly effective for recovery.",
        badge: { text: "Strong Deterrent", color: "warning" },
      },
      {
        icon: "speedometer",
        title: "Mandatory Timeline",
        description:
          "Notice must be sent within 30 days of cheque dishonour, giving 15 days to pay.",
      },
      {
        icon: "wallet",
        title: "Double Recovery",
        description:
          "Recover the cheque amount plus compensation up to twice the cheque value.",
        badge: { text: "2x Compensation", color: "success" },
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Section 138 of",
    titleHighlight: "Negotiable Instruments Act",
    description:
      "Cheque bounce is a criminal offence under Section 138 of the Negotiable Instruments Act, 1881, which provides for imprisonment up to 2 years and fines up to twice the cheque amount.",
    expertInsight: {
      quote:
        "The Supreme Court has reiterated that the objective of Section 138 is to ensure the credibility of commercial transactions.",
    },
    accordionSections: [
      {
        id: "legal-requirements",
        title: "Legal Requirements for Section 138",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Notice mandatory within",
            highlight: "30 days of cheque return memo",
          },
          {
            text: "Statutory payment period of",
            highlight: "15 days for the drawer",
          },
          { text: "Complaint to be filed within 30 days after notice period expiry" },
          { text: "Punishment: Up to 2 years jail or 2x fine" },
          { text: "Stop Payment: Also considered an offence under Section 138" },
        ],
      },
    ],
  },

  postNoticeRoadmap: {
    title: "Roadmap: What Happens After Sending the Notice?",
    scenarios: [
      {
        situation: "If Reply Received / Payment Offered",
        actions: [
          {
            title: "Mediation/Settlement",
            description: "If they offer partial payment or ask for time, draft a Settlement Agreement binding them to a payment schedule.",
          },
          {
            title: "Closure",
            description: "If full payment is made, issue a receipt and close the matter.",
          },
        ],
      },
      {
        situation: "If Reply Received (Denial)",
        actions: [
          {
            title: "Review",
            description: "Analyze their defense (e.g., 'security cheque', 'lost cheque').",
          },
          {
            title: "File Case",
            description: "If the defense is weak, file a Criminal Complaint u/s 138 before the Judicial Magistrate within 30 days of the expiry of the 15-day notice period.",
          },
        ],
      },
      {
        situation: "If NO Reply & NO Payment",
        actions: [
          {
            title: "File Case",
            description: "Immediate filing of Criminal Complaint u/s 138.",
          },
          {
            title: "Authority Complaint",
            description: "Optionally, file a cheating complaint (Section 420 IPC) at the local police station if fraudulent intent is clear from the start.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["cheque-bounce"],

  faqs: [
    {
      id: "what-is-section-138",
      question: "What is Section 138 of the Negotiable Instruments Act?",
      answer:
        "Section 138 makes it a criminal offence to issue a cheque that bounces due to insufficient funds or if it exceeds the arrangement with the bank. The drawer (issuer) can face imprisonment up to 2 years and/or a fine up to twice the cheque amount. This provision ensures cheque payment honesty.",
    },
    {
      id: "deadline-for-notice",
      question: "What is the deadline for sending a cheque bounce notice?",
      answer:
        "You must send the legal notice within 30 days of receiving the cheque return memo from your bank. This is a strict statutory deadline. If you miss this 30-day window, you may lose your right to file a criminal complaint under Section 138.",
    },
    {
      id: "stop-payment",
      question: "Does Section 138 apply if the drawer stops payment?",
      answer: "Yes, if the drawer issues a 'Stop Payment' instruction to the bank to prevent the cheque from clearing, it still attracts liability under Section 138, provided the stop payment was not due to valid reasons like theft of the cheque.",
    },
    {
      id: "response-time",
      question: "How much time does the drawer get to pay after the notice?",
      answer:
        "After receiving your notice, the law mandates a 15-day period for the drawer to make the payment. You cannot file a complaint before this 15-day period expires.",
    },
    {
      id: "what-if-no-payment",
      question: "What happens if the drawer doesn't pay after the notice?",
      answer:
        "If the drawer fails to pay within 15 days of receiving the notice, you can file a criminal complaint under Section 138 in the appropriate Magistrate court. This complaint must be filed within 30 days from the expiry of the 15-day notice period.",
    },
    {
      id: "compensation-amount",
      question: "Can I claim compensation in addition to the cheque amount?",
      answer:
        "Yes. Under Section 138, if the drawer is convicted, the court can order payment of the cheque amount plus compensation up to twice the cheque amount. This is in addition to any fine or imprisonment imposed.",
    },
    {
      id: "criminal-or-civil",
      question: "Is cheque bounce a criminal or civil matter?",
      answer:
        "Cheque bounce under Section 138 is primarily a criminal offence, but it also has civil implications. You can pursue both criminal prosecution (under Section 138) and civil recovery (through a civil suit). Most people prefer criminal action as it's faster and more effective.",
    },
    {
      id: "reasons-for-bounce",
      question: "What reasons for cheque bounce are covered under Section 138?",
      answer:
        "Section 138 covers cheques that bounce due to insufficient funds or if the amount exceeds the arrangement with the bank. It also covers 'Stop Payment' instructions if done with malafide intent.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a Section 138 notice cost?",
      answer:
        "VakilTech offers Section 138 cheque bounce notice drafting and sending for ₹1,499, including professional drafting by advocates experienced in negotiable instruments law, unlimited revisions, registered post delivery, and legal support throughout the process.",
    },
  ],
};
