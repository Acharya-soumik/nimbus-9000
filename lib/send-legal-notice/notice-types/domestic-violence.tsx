import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { domesticViolenceSections } from "../notice-seo-content";

export const domesticViolenceData: NoticeTypeData = {
  slug: "domestic-violence-legal-notice",
  title: "Legal Notice for Domestic Violence",
  cluster: "family",

  seo: {
    title:
      "Domestic Violence? | Send PWDVA Notice | Start at ₹499",
    description:
      "Facing domestic violence? Get a confidential PWDVA protection notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.",
    keywords: [
      "domestic violence legal notice",
      "PWDVA legal notice",
      "protection order notice",
      "dowry harassment notice",
      "domestic abuse legal action",
    ],
  },

  hero: {
    badge: "DOMESTIC VIOLENCE - PWDVA 2005",
    headline: "Stop Domestic Violence. Protect Your Rights!",
    subheadline:
      "Legal notices for domestic violence, cruelty, and dowry harassment under PWDVA 2005",
    flipWords: [
      "Protection Orders",
      "Residence Rights",
      "Maintenance Claims",
      "Legal Safety",
    ],
    badges: [
      { icon: "shield", text: "PWDVA 2005\\nProtection" },
      { icon: "check", text: "Fast Relief\\n3-7 Days" },
    ],
  },

  content: {
    h1: "Legal Notice for Domestic Violence Under PWDVA 2005",
    introduction:
      "If you're suffering physical, mental, sexual, or economic abuse from your husband or in-laws, the Protection of Women from Domestic Violence Act 2005 (PWDVA) provides comprehensive legal protection. This notice demands immediate cessation of violence, protection orders, residence rights, maintenance, and compensation. You can obtain protection orders within days from Magistrate Court.",
    sections: domesticViolenceSections,
    finalCta: {
      text: "Your safety and dignity matter. Don't suffer in silence. Take legal action to protect yourself and your children.",
      buttonText: "File Domestic Violence Notice",
    },
  },

  story: {
    badge: "PROTECTION GRANTED",
    title: "Protection Order Obtained in",
    titleHighlight: "5 Days",
    description:
      "Meera faced severe physical abuse and was thrown out of her matrimonial home. After sending legal notice and filing PWDVA complaint, she obtained protection order and residence order within 5 days, allowing her to return home safely. The court also ordered ₹40,000 monthly maintenance and ₹15 lakhs compensation.",
    features: [
      {
        icon: "shield",
        title: "Fast Protection Orders",
        description:
          "Can obtain protection and residence orders within 3-7 days as interim relief.",
        badge: { text: "Immediate Relief", color: "warning" },
      },
      {
        icon: "speedometer",
        title: "Multiple Remedies",
        description:
          "PWDVA provides protection, residence, maintenance, custody, and compensation in one proceeding.",
      },
      {
        icon: "wallet",
        title: "Financial Support",
        description:
          "Can claim maintenance, medical expenses, compensation for injuries and trauma.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "PWDVA 2005 and",
    titleHighlight: "Criminal Laws",
    description:
      "Domestic violence is covered under PWDVA 2005 (civil remedy) and BNS 2023 (criminal action). Section 85 BNS criminalizes cruelty by husband and relatives.",
    expertInsight: {
      quote:
        "70-80% of women filing PWDVA complaints obtain favorable interim orders within days. Immediate action is critical for safety.",
    },
    accordionSections: [
      {
        id: "legal-remedies",
        title: "Legal Remedies Under PWDVA 2005",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Protection Order:",
            highlight: "prohibits violence and harassment",
          },
          {
            text: "Residence Order:",
            highlight: "right to live in shared household",
          },
          {
            text: "Monetary Relief:",
            highlight: "maintenance and compensation",
          },
          { text: "Custody Order: temporary custody of children" },
          { text: "Orders obtained within days as interim relief" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["domestic-violence"],

  faqs: [
    {
      id: "what-is-domestic-violence",
      question: "What is domestic violence under PWDVA 2005?",
      answer:
        "PWDVA 2005 defines domestic violence broadly: physical abuse (hitting, slapping, burning), sexual abuse (forced sexual acts, marital rape), verbal and emotional abuse (insults, threats, intimidation), economic abuse (denying money, preventing employment), and dowry harassment. It includes any harm or injury causing danger to life, limb, health, or well-being.",
    },
    {
      id: "who-is-protected",
      question: "Who is protected under Domestic Violence Act?",
      answer:
        "PWDVA protects: wives (married or divorcing), live-in partners in relationships in the nature of marriage, sisters and mothers living in shared household, female children, and women in any domestic relationship. Protection is against violence by husband, male partners, or relatives of husband.",
    },
    {
      id: "fast-relief",
      question: "How quickly can I get protection orders?",
      answer:
        "Protection orders can be obtained within 3-7 days of filing complaint as interim relief. Magistrate can pass ex-parte protection and residence orders immediately if situation is urgent. This is much faster than other legal remedies. Final hearing typically takes 3-6 months, but interim orders provide immediate protection.",
    },
    {
      id: "residence-rights",
      question: "Can I stay in the matrimonial home?",
      answer:
        "Yes. Under PWDVA, you have absolute right to reside in the 'shared household' (matrimonial home) regardless of ownership. Husband cannot evict you. You can obtain residence order directing husband to allow you to stay or provide alternate accommodation. Violating residence order is punishable with imprisonment.",
    },
    {
      id: "maintenance-amount",
      question: "How much maintenance can I claim?",
      answer:
        "Maintenance amount depends on: husband's income and assets, your needs and standard of living during marriage, children's needs, and reasonable living expenses. Typically 25-30% of husband's income for wife plus 15-20% per child. Additionally, can claim medical expenses, compensation for injuries (₹5-20 lakhs), and cost of litigation.",
    },
    {
      id: "criminal-or-civil",
      question: "Should I file PWDVA complaint or criminal FIR?",
      answer:
        "Ideally both. PWDVA is civil remedy providing protection, residence, maintenance, custody, and compensation quickly. Criminal FIR under Section 85 BNS (cruelty) and Section 75-76 BNS (dowry) results in arrest and prosecution. PWDVA is faster for immediate relief, while criminal case adds pressure for settlement. Most lawyers recommend both simultaneously.",
    },
    {
      id: "what-if-in-laws",
      question: "Can I take action against in-laws?",
      answer:
        "Yes. PWDVA covers violence by husband's relatives. You can name mother-in-law, father-in-law, and other relatives as respondents. They can be subject to protection orders and compensation. Additionally, criminal action under Section 85 BNS specifically covers cruelty by 'husband or his relatives'.",
    },
    {
      id: "cost-of-notice",
      question: "How much does domestic violence notice cost?",
      answer:
        "VakilTech offers domestic violence legal notice services for ₹1,499, including: consultation on PWDVA rights, professional drafting with specific incidents documented, medical/evidence review, demands for protection/residence/maintenance/compensation, unlimited revisions, registered post delivery, and guidance on filing PWDVA complaint if needed.",
    },
  ],
};
