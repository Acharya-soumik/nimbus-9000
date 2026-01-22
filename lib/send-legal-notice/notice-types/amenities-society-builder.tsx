import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const amenitiesSocietyBuilderData: NoticeTypeData = {
  slug: "amenities-society-builder",
  title: "Legal Notice for Amenities to Society/Builder",
  cluster: "builder-consumer",

  seo: {
    title: "Builder Amenities Legal Notice – RERA Complaint | Get Promised Facilities | ₹1,499",
    description:
      "Builder not providing promised amenities? Send RERA-backed legal notice. Gym, pool, clubhouse, park. Get compensation. ₹1,499. Act now.",
    keywords: [
      "builder amenities legal notice",
      "society amenities legal notice",
      "rera amenities complaint",
      "builder not providing amenities",
      "legal notice for missing amenities",
      "housing society amenities dispute",
    ],
  },

  hero: {
    badge: "BUILDER AMENITIES DISPUTE",
    headline: "Get Your Promised Amenities Delivered",
    subheadline:
      "Send a RERA-backed legal notice to builder/society for non-delivery of promised amenities like gym, pool, clubhouse, or parks.",
    flipWords: [
      "RERA Protection",
      "Get Amenities",
      "Claim Compensation",
      "Expert Drafted",
    ],
    badges: [
      { icon: "shield", text: "RERA Act\n2016" },
      { icon: "clock", text: "24-Hour\nDrafting" },
    ],
  },

  content: {
    h1: "Legal Notice for Amenities to Builder/Society in India",
    introduction:
      "Bought a flat with promises of world-class amenities like swimming pool, gym, clubhouse, children's play area, or landscaped gardens? But the builder hasn't delivered them even after possession? You have strong legal remedies under the Real Estate (Regulation and Development) Act (RERA), 2016. A legal notice is the first step to demand delivery of promised amenities or claim compensation for the deficiency.",
    sections: [
      {
        heading: "What is a Legal Notice for Amenities?",
        content:
          "A legal notice for amenities is a formal demand sent to the builder or housing society management for non-delivery or poor maintenance of amenities that were promised in the sale agreement, brochure, or advertisement. This notice is backed by RERA provisions and consumer protection laws.",
        listItems: [
          "Demands delivery of promised amenities as per agreement",
          "Claims compensation for deficiency in services",
          "Warns of RERA complaint and consumer court action",
          "Establishes breach of contract by builder/society",
          "Often results in immediate action to avoid RERA penalties",
        ],
      },
      {
        heading: "Common Amenities Disputes",
        content:
          "Homebuyers commonly face these amenities-related issues:",
        listItems: [
          "**Swimming pool not constructed**: Promised in brochure but not delivered",
          "**Gym equipment missing**: Gym room exists but no equipment provided",
          "**Clubhouse incomplete**: Partially constructed or not functional",
          "**Children's play area absent**: Promised park/play area not developed",
          "**Landscaping not done**: Gardens and green spaces not maintained",
          "**Security systems missing**: CCTV, intercom, or security gates not installed",
          "**Power backup insufficient**: Promised 100% backup but only partial",
          "**Parking shortage**: Fewer parking slots than promised",
        ],
      },
      {
        heading: "Legal Rights Under RERA",
        content:
          "The RERA Act, 2016 provides strong protection to homebuyers:",
        listItems: [
          "**Section 11**: Builder must develop amenities as per approved plan",
          "**Section 18**: Buyer can claim refund + interest OR compensation for deficiency",
          "**Section 31**: RERA can impose penalty up to 10% of project cost on builder",
          "**Mandatory compliance**: Amenities shown in brochure/advertisement are legally binding",
        ],
      },
      {
        heading: "When Should You Send This Notice?",
        content:
          "Send a legal notice when:",
        listItems: [
          "Possession taken but amenities not delivered within reasonable time (6-12 months)",
          "Builder/society is delaying amenities indefinitely",
          "Amenities are partially delivered or of poor quality",
          "Society is not maintaining existing amenities properly",
          "Builder is refusing to respond to complaints",
        ],
      },
      {
        heading: "What to Include in Your Notice",
        content:
          "An effective amenities notice must contain:",
        listItems: [
          "Details of flat purchase agreement and possession date",
          "List of amenities promised in brochure/agreement/advertisement",
          "Current status of each amenity (not delivered/incomplete/poor quality)",
          "Reference to RERA approved plan showing amenities",
          "Demand for immediate delivery or compensation",
          "Warning of RERA complaint and consumer court case",
          "Specific timeline for compliance (30-60 days)",
        ],
      },
      {
        heading: "Remedies Available",
        content:
          "If the builder/society doesn't comply after your notice, you can:",
        listItems: [
          "**RERA Complaint**: File complaint with State RERA Authority (free of cost)",
          "**Consumer Court**: File case for deficiency in services and claim compensation",
          "**Civil Suit**: Sue for specific performance (force builder to deliver amenities)",
          "**Residents Association**: Form/join RWA and collectively demand amenities",
          "**Occupation Certificate Challenge**: Object to OC if amenities not complete",
        ],
      },
    ],
    finalCta: {
      text: "You paid for premium amenities. Don't settle for broken promises. Demand what's rightfully yours.",
      buttonText: "Send Amenities Notice - ₹1,499",
    },
  },

  story: {
    badge: "SUCCESS STORY",
    title: "How Legal Notice Got",
    titleHighlight: "₹5 Lakh Compensation",
    description:
      "Residents of a Pune housing society sent a collective legal notice to the builder for non-delivery of swimming pool and clubhouse, 2 years after possession. Fearing RERA action, the builder offered ₹5 lakh compensation to the society, which was used to develop alternative amenities.",
    features: [
      {
        icon: "users",
        title: "Collective Action",
        description:
          "50 flat owners jointly sent the notice, increasing pressure on builder.",
        badge: { text: "United Front", color: "primary" },
      },
      {
        icon: "wallet",
        title: "Compensation Won",
        description:
          "Builder paid ₹5 lakh to avoid RERA complaint and negative publicity.",
        badge: { text: "₹5L Compensation", color: "success" },
      },
      {
        icon: "handshake",
        title: "Amicable Settlement",
        description:
          "Matter resolved without RERA litigation, saving time and effort.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Protected by",
    titleHighlight: "RERA Act, 2016",
    description:
      "The Real Estate (Regulation and Development) Act, 2016 mandates that builders must deliver all amenities shown in brochures, advertisements, and approved plans. Non-compliance attracts heavy penalties.",
    expertInsight: {
      quote:
        "RERA has shifted power to homebuyers. Builders fear RERA complaints more than court cases because RERA orders are swift and penalties are severe.",
    },
    accordionSections: [
      {
        id: "rera-provisions",
        title: "RERA Act Provisions",
        icon: <span className="text-primary">🏢</span>,
        items: [
          {
            text: "Section 11:",
            highlight: "Builder must develop amenities as per approved plan",
          },
          {
            text: "Section 18:",
            highlight: "Compensation for deficiency or delay",
          },
          {
            text: "Section 31:",
            highlight: "Penalty up to 10% of project cost",
          },
          {
            text: "Brochure is legally binding:",
            highlight: "All promised amenities must be delivered",
          },
        ],
      },
      {
        id: "consumer-protection",
        title: "Consumer Protection Act",
        icon: <span className="text-secondary">⚖️</span>,
        items: [
          {
            text: "Deficiency in services:",
            highlight: "Non-delivery of amenities is deficiency",
          },
          {
            text: "Compensation:",
            highlight: "Can claim damages for mental agony and loss",
          },
          {
            text: "Free litigation:",
            highlight: "No court fees in consumer court",
          },
        ],
      },
    ],
  },

  postNoticeRoadmap: {
    title: "Roadmap: What Happens After Sending the Notice?",
    scenarios: [
      {
        situation: "If Builder/Society Responds Positively",
        actions: [
          {
            title: "Amenities Delivered",
            description: "Builder commits to timeline for delivering pending amenities.",
          },
          {
            title: "Compensation Offered",
            description: "Builder offers monetary compensation in lieu of amenities that cannot be delivered.",
          },
          {
            title: "Settlement Agreement",
            description: "Draft formal agreement with committed timeline and penalty clause.",
          },
        ],
      },
      {
        situation: "If Builder/Society Ignores Notice",
        actions: [
          {
            title: "RERA Complaint",
            description: "File complaint with State RERA Authority. RERA typically resolves cases within 60-90 days.",
          },
          {
            title: "Consumer Court",
            description: "File case for deficiency in services and claim compensation + damages.",
          },
        ],
      },
      {
        situation: "If Builder Denies Promises",
        actions: [
          {
            title: "Evidence Collection",
            description: "Gather brochures, advertisements, sale agreement, and RERA approved plan.",
          },
          {
            title: "RERA Complaint",
            description: "RERA will compare promises with approved plan and order compliance.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["money-recovery"], // Placeholder

  faqs: [
    {
      id: "what-is-rera",
      question: "What is RERA and how does it help?",
      answer:
        "RERA (Real Estate Regulatory Authority) is a regulatory body established under the RERA Act, 2016 to protect homebuyers' rights. It mandates that builders must deliver all amenities shown in brochures and approved plans. RERA can order builders to complete amenities, pay compensation, or face penalties up to 10% of project cost. RERA complaints are free and typically resolved within 60-90 days.",
    },
    {
      id: "brochure-legally-binding",
      question: "Is the builder's brochure legally binding?",
      answer:
        "Yes. Under RERA, all information in brochures, advertisements, and promotional materials is legally binding. If the brochure shows a swimming pool, gym, or any amenity, the builder MUST deliver it. Courts have consistently held that buyers rely on brochures while making purchase decisions, so builders cannot escape liability.",
    },
    {
      id: "society-vs-builder",
      question: "Should I send notice to builder or society?",
      answer:
        "It depends on who is responsible. If amenities were never constructed by the builder, send notice to the builder. If amenities exist but are poorly maintained, send notice to the society management. In many cases, you may need to send to both - builder for construction and society for maintenance.",
    },
    {
      id: "can-claim-compensation",
      question: "Can I claim compensation instead of amenities?",
      answer:
        "Yes. If the builder cannot deliver certain amenities (e.g., space constraints), you can demand monetary compensation. The compensation should reflect the value you paid for those amenities. For example, if amenities added 10% to flat cost, you can claim that amount back with interest.",
    },
    {
      id: "time-limit-complaint",
      question: "Is there a time limit to file RERA complaint?",
      answer:
        "Generally, you should file a RERA complaint within a reasonable time after discovering the deficiency (typically 1-2 years). However, if the builder is still under obligation to deliver amenities (as per agreement), you can file even later. It's best to act quickly to strengthen your case.",
    },
    {
      id: "collective-notice",
      question: "Can multiple flat owners send a joint notice?",
      answer:
        "Yes, and it's highly recommended. A collective notice from 20-50 flat owners carries much more weight than individual notices. It shows organized resistance and increases pressure on the builder. You can also file a joint RERA complaint, which is more effective.",
    },
    {
      id: "rera-vs-consumer-court",
      question: "Should I go to RERA or Consumer Court?",
      answer:
        "RERA is faster and more effective for amenities disputes. RERA has specific expertise in real estate matters and can order builders to complete amenities. Consumer Court is better for claiming compensation for mental agony and deficiency. You can file in both forums simultaneously for different reliefs.",
    },
    {
      id: "cost-of-notice",
      question: "How much does this legal notice cost?",
      answer:
        "VakilTech offers builder/society amenities legal notice for ₹1,499, including expert drafting by advocates specializing in RERA law, unlimited revisions, registered post delivery, and guidance on RERA complaint filing if needed.",
    },
  ],
};
