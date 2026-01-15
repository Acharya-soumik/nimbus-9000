import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const maintenanceNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-maintenance",
  title: "Legal Notice for Maintenance",
  cluster: "family",

  seo: {
    title: "Send Maintenance Legal Notice to Husband Online | VakilTech",
    description:
      "Seeking maintenance? Get a legal notice drafted & sent by experts. secure your rights for spousal and child support.",
    keywords: [
      "legal notice for maintenance",
      "maintenance claim section 125 crpc",
      "wife maintenance notice format",
      "child support legal notice",
      "alimony notice india",
      "maintenance for parents notice",
    ],
  },

  hero: {
    badge: "MAINTENANCE & ALIMONY",
    headline: "Claim Your Right to Financial Support",
    subheadline: "Don't suffer in silence. Legal notices for maintenance are a powerful tool to secure your financial future under Section 125 CrPC.",
    flipWords: [
      "Wife's Right",
      "Child Support",
      "Parental Care",
      "Interim Relief",
    ],
    badges: [
      { icon: "shield", text: "Section 125 CrPC" },
      { icon: "users", text: "Family Law Experts" },
    ],
  },

  content: {
    h1: "Legal Notice for Maintenance in India",
    introduction:
      "Seeking Maintenance? Get a Legal Notice Drafted & Sent by Experts. A legal notice for maintenance is a formal demand for financial support sent to a person who is legally bound to support their dependents but has refused or neglected to do so. Under Indian law (specifically Section 125 of the Code of Criminal Procedure), wives, children (legitimate or illegitimate), and aging parents have a strong legal right to claim maintenance. Sending a legal notice is often the first and most effective step to secure these rights without immediately stepping into a courtroom.",
    sections: [
      {
        heading: "Who Can Claim Maintenance?",
        content:
          "Our laws provide robust protection for dependents who are unable to maintain themselves. The following categories can claim support:",
        listItems: [
          "Wife: A wife unable to maintain herself can claim maintenance from her husband, even if living separately due to valid reasons.",
          "Children: Minor children (legitimate or illegitimate) are entitled to maintenance. Daughters (until marriage) and disabled children (lifetime) can also claim.",
          "Parents: Elderly or infirm parents who cannot support themselves can claim maintenance from their adult children.",
        ],
      },
      {
        heading: "Why Start with a Legal Notice?",
        content:
          "Before jumping into a long court battle, a legal notice often yields faster results:",
        listItems: [
          "Immediate Pressure: A formal legal notice signals serious intent and often prompts the defaulter to start paying.",
          "Proof of Neglect: If the matter goes to court, the notice serves as documentary evidence that you demanded support and were refused.",
          "Cost-Effective: It is far cheaper and faster than a full-blown court case, with many disputes settling at this stage.",
        ],
      },
      {
        heading: "Key Legal Provisions",
        content: "Maintenance can be claimed under various acts depending on your situation:",
        listItems: [
          "Section 125 CrPC: The primary secular law providing a quick remedy for wives, children, and parents of all religions.",
          "Hindu Adoptions and Maintenance Act, 1956: Section 18 for Hindu wives, and Section 20 for children and aged parents.",
          "Domestic Violence Act, 2005: Empowers courts to grant monetary relief to meet expenses and compensates for losses.",
        ],
      },
    ],
    finalCta: {
      text: "Stop requesting and start claiming. Your financial dignity is protected by law.",
      buttonText: "Send Maintenance Notice",
    },
  },

  story: {
    badge: "CLIENT SUCCESS STORY",
    title: "Secured Monthly Support of",
    titleHighlight: "₹45,000",
    description:
      "Meera (name changed) was abandoned by her husband with a 4-year-old child. He stopped sending money, claiming he had 'no savings'. Desperate, she contacted VakilTech. We drafted a stern legal notice under Section 125 CrPC, detailing his lifestyle and actual income sources. Fearing a court summons and potential wage garnishment, he agreed to a settlement within 20 days. Meera now receives ₹45,000/month regularly without ever stepping into a court.",
    features: [
      {
        icon: "file",
        title: "Evidence Based",
        description:
          "The notice cited specific details of his income, making it hard for him to plead poverty.",
      },
      {
        icon: "users",
        title: "Child's Future Secured",
        description:
          "The amount covered school fees and medical expenses for the child separately.",
      },
      {
        icon: "flash",
        title: "Fast Resolution",
        description:
          "Matter resolved in <3 weeks via notice, avoiding the 1-2 year court timeline.",
      },
    ],
  },

  legalFramework: {
    badge: "KNOW YOUR RIGHTS",
    title: "Maintenance Laws in",
    titleHighlight: "India",
    description:
      "Indian law is very protective of dependents. Courts look at the standard of living you were used to, not just basic survival needs.",
    expertInsight: {
      quote:
        "Even if a wife is working, she can claim maintenance if her income is insufficient to maintain the standard of living she enjoyed in her matrimonial home.",
    },
    accordionSections: [
      {
        id: "calculation-factors",
        title: "How is Maintenance Calculated?",
        icon: <span className="text-primary">₹</span>,
        items: [
          { text: "Husband's Net Income & Assets" },
          { text: "Standard of living of the family" },
          { text: "Reasonable wants of the claimant" },
          { text: "Income of the claimant (if any)" },
          { text: "Number of other persons dependent on the husband" },
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
            title: "Settlement",
            description: "If they agree to pay, sign a formal Maintenance Agreement to avoid court.",
          },
          {
            title: "One-Time Settlement",
            description: "Sometimes a lump-sum amount (Permanent Alimony) is better than monthly payments.",
          },
        ],
      },
      {
        situation: "If NO Reply / Refusal",
        actions: [
          {
            title: "File Case",
            description: "File a Maintenance Petition under Section 125 CrPC (fastest remedy).",
          },
          {
            title: "Interim Relief",
            description: "Ask the court for 'Interim Maintenance' to get financial support immediately while the case runs.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["maintenance"],

  faqs: [
    {
      id: "working-wife",
      question: "Can a working wife claim maintenance?",
      answer:
        "Yes, absolutely. The Supreme Court has ruled that a wife is entitled to the same standard of living she enjoyed in her matrimonial home. If her earnings are not sufficient to maintain that lifestyle, the husband must make up the deficit. Earning money does not disqualify a wife from claiming maintenance.",
    },
    {
      id: "husband-unemployed",
      question: "Can my husband avoid paying by saying he is unemployed?",
      answer:
        "No. Courts have held that an able-bodied man has a legal and moral duty to support his wife and children. He cannot hide behind unemployment (unless due to severe disability). The court can assume a 'notional income' based on his qualifications and order him to pay.",
    },
    {
      id: "interim-maintenance",
      question: "What is Interim Maintenance?",
      answer:
        "Since court cases can take time, you can ask for 'Interim Maintenance' immediately after filing the petition. This is a temporary monthly amount paid by the husband while the case is pending ensuring you don't suffer financially during the legal battle. Most notices demand this explicitly.",
    },
    {
      id: "maintenance-calculation",
      question: "How much percentage of salary is usually given as maintenance?",
      answer:
        "While there is no fixed percentage in law, the Supreme Court has observed in recent judgments that a figure of 25% of the husband's net salary is a 'just and proper' amount for maintenance to the wife. This can vary based on specific circumstances and number of dependents.",
    },
    {
      id: "maintenance-time",
      question: "How long does it take to get maintenance after sending notice?",
      answer:
        "The notice gives a period of 15 days to comply. If the husband agrees, payments can start immediately. If he refuses and you file a case under Sec 125, you can get an order for Interim Maintenance within 2-4 months of filing, depending on the court's schedule.",
    },
    {
      id: "child-support-age",
      question: "Until what age can children claim maintenance?",
      answer:
        "Sons can claim maintenance until they attain majority (18 years). In some cases, until they finish basic education. Daughters are entitled to maintenance until they get married. Children with physical or mental disabilities can claim maintenance for life if they cannot support themselves.",
    },
    {
      id: "second-marriage",
      question: "If I remarry, does the maintenance stop?",
      answer:
        "Yes, maintenance to a wife usually stops upon her remarriage. However, the maintenance for the child continues regardless of the mother's remarriage, as the father is still obligated to support his child.",
    },
    {
      id: "denial-grounds",
      question: "On what grounds can maintenance be denied to a wife?",
      answer:
        "Maintenance can be denied if: (1) The wife is living in adultery, (2) She refuses to live with her husband without any sufficient reason, or (3) The couple is living separately by mutual consent (unless the agreement specifies maintenance).",
    },
  ],
};
