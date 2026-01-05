import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { propertyPartitionSections } from "../notice-seo-content";

export const propertyPartitionData: NoticeTypeData = {
  slug: "legal-notice-for-property-partition",
  title: "Legal Notice for Property Partition",
  cluster: "tenant-property",

  seo: {
    title: "Legal Notice for Partition of Property | Ancestral & Joint Family",
    description:
      "Co-owner demanding partition? Send a specialized Legal Notice for Property Partition. Claim your share in ancestral/joint family property. Starts ₹1499.",
    keywords: [
      "legal notice for property partition",
      "property partition legal notice",
      "ancestral property partition",
      "joint property division notice",
      "HUF property partition",
      "partition deed notice",
      "legal notice for division of property",
      "ancestral property claim notice",
      "hindu succession act partition",
    ],
  },

  hero: {
    badge: "For Co-Owners",
    headline: "Claim Your Rightful Share in Property",
    subheadline: "Professional legal notices to demand partition of ancestral and joint family property.",
    flipWords: [
      "Claim Share",
      "Divide Property",
      "Exit Joint Family",
      "Secure Rights",
    ],
    badges: [
      { icon: "shield", text: "Absolute\nRight" },
      { icon: "check", text: "Succession\nAct Compliant" },
    ],
  },

  content: {
    h1: "Legal Notice for Property Partition in India",
    introduction:
      "Partition is the process of dividing a joint property into separate shares. In India, every co-owner has an **absolute right** to demand partition; you cannot be forced to remain in a joint ownership against your will. Whether it is ancestral property or a jointly purchased asset, sending a **Legal Notice for Partition** is the first step to claiming your specific share and separating your legal liability from other co-owners.",
    sections: [
      {
        heading: "Two Ways to Partition Property",
        content: `Partition effectively puts an end to joint ownership:
        
        1.  **Partition by Metes and Bounds (Physical):** The property is physically divided (e.g., land is split into plots). Each owner gets a specific portion.
        2.  **Partition by Sale:** If physical division is not practical (e.g., a single flat), the property is sold—either to a third party or one co-owner buys out the others—and the proceeds are distributed according to shares.
        
        Your legal notice can demand either mode depending on the property type.`,
      },
      {
        heading: "Ancestral vs. Self-Acquired Property",
        content: `* **Ancestral Property:** Property inherited from four generations of male lineage. You have a birthright in this. A partition notice can be sent anytime.
        * **Self-Acquired Property:** Property purchased by an individual. They can sell or gift it to anyone. Legal heirs can only claim partition *after* the owner dies (if there is no Will).`,
      },
      {
        heading: "Daughter's Right to Property",
        content: `Since the *Hindu Succession (Amendment) Act, 2005*, daughters are coparceners. This means they have the **same rights** as sons in ancestral property, including the right to ask for partition and claim an equal share. A married daughter can also send a legal notice for partition to her father or brothers.`,
      },
      ...propertyPartitionSections,
    ],
    finalCta: {
      text: "Stop waiting for others to give you your share. Demand it legally.",
      buttonText: "Draft Partition Notice",
    },
  },

  story: {
    badge: "Fair Share Secured",
    title: "Rajiv secured his 1/3rd share worth",
    titleHighlight: "₹2.5 Crores",
    description:
      "Rajiv's brothers were enjoying the rent from their ancestral commercial building while excluding him. They refused to divide the property for 5 years. VakilTalk drafted a sharp legal notice demanding partition and 'mesne profits' (share of past rent). Faced with a partition suit that would freeze the asset, the brothers agreed to a settlement. The property was sold, and Rajiv received his full legal share of ₹2.5 Crores.",
    features: [
      {
        icon: "document",
        title: "Absolute Right Enforced",
        description:
          "Notice made it clear that courts cannot deny partition, forcing a settlement.",
      },
      {
        icon: "speedometer",
        title: "Profits Recovered",
        description:
          "Successfully claimed share of the rent collected by brothers for past 3 years.",
      },
      {
        icon: "wallet",
        title: "Fair Market Exit",
        description:
          "Rajiv exited a stuck investment at current market valuation.",
      },
    ],
  },

  legalFramework: {
    badge: "Inheritance Laws",
    title: "Partition",
    titleHighlight: "Rights",
    description:
      "Your right to partition is protected under the Partition Act, 1893 and succession laws.",
    expertInsight: {
      quote:
        "In a partition suit, the court fees are often minimal (fixed fee) if you are in 'constructive possession' (i.e., you are a legal co-owner), making it an affordable remedy.",
    },
    accordionSections: [
      {
        id: "hindu-succession-act",
        title: "Hindu Succession Act, 1956",
        icon: <span className="text-primary">📜</span>,
        items: [
          { text: "Section 6 (Amended 2005): Daughters are coparceners with equal rights." },
          { text: "Governs distribution of shares in ancestral property." },
          { text: "Class I heirs get simultaneous succession." },
        ],
      },
      {
        id: "partition-act",
        title: "The Partition Act, 1893",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Empowers courts to sell property if division is impossible." },
          { text: "Gives shareholders right to buy out others' shares (Right of Pre-emption)." },
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
            description: "Most property disputes are best settled out of court to save decades of time. Draft a Family Settlement Deed or Vacation Agreement.",
          },
        ],
      },
      {
        situation: "If NO Reply",
        actions: [
          {
            title: "File Case",
            description: "Suit for Partition: To legally divide the family property by metes and bounds or by sale.",
          },
          {
            title: "File Case",
            description: "Suit for Declaration & Possession: If your title or possession is being denied.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["property-partition"] || realSampleNotices["money-recovery"], // Fallback if specific sample missing

  faqs: [
    {
      id: "sell-undivided-share",
      question: "Can I sell my undivided share without partition?",
      answer:
        "Legally, yes, you can sell your 'undivided share' to a third party. However, the buyer cannot take physical possession of any specific part of the house; they only step into your shoes and will have to file a partition suit to get possession. Practically, it’s hard to find buyers for undivided shares unless it's a family member.",
    },
    {
      id: "partition-limitation",
      question: "Is there a time limit to file for partition?",
      answer:
        "There is no strict limitation period for filing a partition suit for ancestral property as long as your right as a co-owner exists. However, if you have been 'ousted' (denied entry/rights) hostilely for more than 12 years, you might lose your right under 'Adverse Possession.' It is crucial to send a notice immediately when your rights are denied.",
    },
    {
      id: "partition-deed-registered",
      question: "Does a family partition deed need valid registration?",
      answer:
        "Yes. If you divide property by mutual agreement (Family Settlement), the Partition Deed must be registered on stamp paper to be legally valid and admissible in court. Unregistered deeds can be challenged. A court decree of partition, however, is a valid title document.",
    },
    {
      id: "property-mortgaged",
      question: "Can we partition a property that has a bank loan?",
      answer:
        "Generally, no. The bank has the first charge on the property. You must clear the loan before partitioning. However, co-owners can agree to split the loan liability along with the property, but the bank must agree to this 'novation' of contract.",
    },
    {
      id: "minor-partition",
      question: "Can a minor demand partition?",
      answer:
        "Yes, a minor coparcener can file a suit for partition through a 'next friend' or guardian if the joint family management is detrimental to the minor's interest. The court will safeguard the minor's share.",
    },
    {
      id: "cost-partition-notice",
      question: "How much does a partition legal notice cost?",
      answer:
        "VakilTalk charges ₹1,499 for a professional Partition Notice. This includes analyzing your family tree and share entitlement, drafting the notice citing relevant succession laws, demanding accounts of income (rent/profits), and dispatching via Registered Post. It serves as strict evidence of your claim.",
    },
  ],
};
