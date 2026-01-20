import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const consumerComplaintNoticeData: NoticeTypeData = {
  slug: "consumer-complaint-legal-notice",
  title: "Consumer Complaint Legal Notice",
  cluster: "builder-consumer",

  seo: {
    title: "Consumer Complaint Legal Notice – Defective Product/Service | ₹1499",
    description:
      "Got a defective product? Send consumer complaint notice under CPA 2019. Full refund + compensation. Expert drafted ₹1,499. 24hr delivery.",
    keywords: [
      "consumer complaint legal notice",
      "defective product legal notice",
      "consumer rights notice",
      "file consumer complaint online",
      "consumer protection act notice format",
    ],
  },

  hero: {
    badge: "CONSUMER PROTECTION",
    headline: "Assert Your Consumer Rights Against Unfair Trade",
    subheadline: "Legal notices for product defects and service deficiency",
    flipWords: [
      "Consumer Rights",
      "Product Defects",
      "Service Issues",
      "Fair Trade",
    ],
    badges: [
      { icon: "shield", text: "Consumer Act\n2019" },
      { icon: "users", text: "Strong\nProtection" },
    ],
  },

  content: {
    h1: "Consumer Complaint Legal Notice in India",
    introduction:
      "If you've received a defective product, faced deficiency in service, been charged unfairly, or encountered any unfair trade practice, you have strong rights under the Consumer Protection Act 2019. A consumer complaint legal notice is the mandatory first step before approaching a consumer forum. For a detailed understanding, read our [Consumer Protection Guide](/guide/consumer-protection).",
    sections: [
      {
        heading: "Common Grounds for Consumer Complaints",
        content: "You can file a complaint for various issues:",
        listItems: [
          "Defective Goods: Manufacturing defaults or poor quality",
          "Deficiency in Service: Negligence or failure to deliver promised service",
          "Unfair Trade Practices: Misleading ads or false claims",
          "Overcharging: Charging above MRP",
        ],
      },
      {
        heading: "Consumer Forum Jurisdiction",
        content: "Drafting a notice is the first step. If unresolved, you can approach the District Commission (up to ₹1 Cr), State Commission (₹1 Cr - ₹10 Cr), or National Commission (> ₹10 Cr).",
      }
    ],
    finalCta: {
      text: "Don't let businesses exploit you. Assert your consumer rights and send a legal notice today.",
      buttonText: "Draft Consumer Complaint",
    },
  },

  story: {
    badge: "CONSUMER WIN",
    title: "Got ₹5L Compensation for",
    titleHighlight: "Defective Car",
    description:
      "Rajiv bought a new car that had recurring engine problems. After the company refused proper repairs, he sent a consumer complaint notice through VakilTech and filed a consumer case. The forum ordered full refund of ₹18 lakhs plus ₹5 lakhs compensation for deficiency in service.",
    features: [
      {
        icon: "document",
        title: "Wide Consumer Protection",
        description:
          "Covers products, services, e-commerce, real estate, and all consumer transactions.",
      },
      {
        icon: "speedometer",
        title: "Fast Consumer Forums",
        description:
          "Consumer forums decide cases faster than courts—6-12 months typically.",
        badge: { text: "Quick Justice", color: "success" },
      },
      {
        icon: "wallet",
        title: "Refund + Compensation",
        description:
          "Can claim full refund/replacement plus compensation for loss and harassment.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Consumer Protection",
    titleHighlight: "Act 2019",
    description:
      "Consumer rights are protected under Consumer Protection Act 2019, which covers goods, services, e-commerce, and provides for consumer forums at district, state, and national levels.",
    expertInsight: {
      quote:
        "Consumer forums award compensation in 75% of cases where deficiency in service or product defect is clearly established with evidence.",
    },
    accordionSections: [
      {
        id: "consumer-rights",
        title: "Consumer Rights Under Law",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to safety - protection from",
            highlight: "hazardous products",
          },
          { text: "Right to information - full product/service details" },
          { text: "Right to choose - fair competition and variety" },
          { text: "Right to be heard - voice grievances in consumer forum" },
          { text: "Right to redress - compensation for deficiency/defect" },
          { text: "Right to consumer education - awareness of rights" },
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
            description: "Brands often offer replacement or refund to avoid litigation costs. Accept if reasonable.",
          },
          {
            title: "Authority",
            description: "Use the National Consumer Helpline (NCH) app to pressure them before court.",
          },
        ],
      },
      {
        situation: "If NO Reply / Denial",
        actions: [
          {
            title: "File Case",
            description: "File a formal complaint in the District Consumer Disputes Redressal Commission (Consumer Court).",
          },
          {
            title: "Note",
            description: "You can ask for compensation + litigation costs + mental harassment.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["consumer-complaint"],

  faqs: [
    {
      id: "who-is-consumer",
      question: "Who is considered a consumer under law?",
      answer:
        "A consumer is any person who: buys goods for personal use (not for resale or commercial purpose), hires services for consideration, or is a beneficiary of such goods/services. This includes: individual buyers, online shoppers, patients (healthcare services), bank customers, insurance buyers, telecom users, and property buyers. Commercial purchases are generally not covered.",
    },
    {
      id: "what-complaints-can-file",
      question: "What types of consumer complaints can be filed?",
      answer:
        "You can file complaints for: defective products (manufacturing defect, doesn't work as promised), deficiency in service (delayed, improper, or no service), unfair trade practices (false advertising, deceptive practices), overcharging or wrong billing, poor quality not matching specifications, breach of warranty, non-delivery of goods/services paid for, and any consumer rights violation.",
    },
    {
      id: "notice-mandatory",
      question:
        "Is sending a legal notice mandatory before consumer complaint?",
      answer:
        "While not strictly mandatory under Consumer Protection Act, sending a legal notice is highly recommended because: it gives the company one last chance to resolve (avoiding litigation), creates documentary evidence of your complaint attempt, shows good faith to the consumer forum, and many companies resolve issues after receiving formal notice. Most consumer forums expect notice to have been sent first.",
    },
    {
      id: "time-limit-complaint",
      question: "What is the time limit for filing consumer complaint?",
      answer:
        "You must file complaint within 2 years from the date when the cause of action arose. Example: for defective product, 2 years from date of purchase/defect discovery. For service deficiency, 2 years from when service was supposed to be delivered or deficiency occurred. Consumer forums can condone delay if you show sufficient cause for the delay.",
    },
    {
      id: "which-forum",
      question: "Which consumer forum should I approach?",
      answer:
        "Depends on claim amount: District Consumer Forum: claims up to ₹1 crore, State Consumer Commission: claims ₹1 crore to ₹10 crore, National Consumer Commission: claims above ₹10 crore. File in the district where you reside or where the company has office or where transaction occurred. E-filing is available. Most cases are at district level.",
    },
    {
      id: "compensation-types",
      question: "What compensation can consumer forums award?",
      answer:
        "Consumer forums can order: refund of amount paid, replacement of defective product, repair or rectification of defect/deficiency, compensation for loss, injury, or damage suffered, compensation for mental harassment (typically ₹10,000-50,000), punitive damages for deliberate negligence, litigation costs, and interest on delayed payment or refund.",
    },
    {
      id: "e-commerce-complaints",
      question: "Can I file complaints against e-commerce companies?",
      answer:
        "Yes, Consumer Protection Act 2019 specifically covers e-commerce. You can complain for: product not delivered, defective/fake products, description mismatch, refund not processed, poor customer service, or unfair terms. File against both: the e-commerce platform and the seller. Consumer Protection (E-Commerce) Rules 2020 provide additional protection for online buyers.",
    },
    {
      id: "bank-insurance-complaints",
      question: "Can I send notice for banking and insurance disputes?",
      answer:
        "Yes, banks and insurance companies are covered under Consumer Protection Act as service providers. Common complaints: unauthorized debits, wrong charges, loan harassment, insurance claim rejection without valid reason, mis-selling of products, poor service, or breach of terms. However, first approach internal ombudsman (Banking Ombudsman, Insurance Ombudsman) before consumer forum.",
    },
    {
      id: "cost-consumer-notice",
      question: "How much does a consumer complaint notice cost?",
      answer:
        "VakilTech offers consumer complaint notice services for ₹1,499, including consultation on your consumer rights and claim, detailed documentation of defect/deficiency, professional drafting citing Consumer Protection Act 2019, calculation of refund and compensation claim, unlimited revisions, registered post delivery to company, and guidance on filing consumer complaint if company doesn't respond satisfactorily.",
    },
  ],
};
