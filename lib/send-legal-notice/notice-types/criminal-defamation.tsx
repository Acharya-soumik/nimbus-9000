import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { criminalDefamationSections } from "../notice-seo-content";

export const criminalDefamationData: NoticeTypeData = {
  slug: "criminal-defamation-legal-notice",
  title: "Legal Notice for Criminal Defamation",
  cluster: "criminal",

  seo: {
    title:
      "Defamation Case? | Send Section 356 Notice | Start ₹499",
    description:
      "False statements harming your reputation? Get a Section 356 defamation notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
    keywords: [
      "criminal defamation legal notice",
      "defamation notice",
      "legal notice for defamation",
      "cyber defamation notice",
      "section 356 bns notice",
    ],
  },

  hero: {
    badge: "REPUTATION PROTECTION",
    headline: "Defend Your Reputation with Legal Action!",
    subheadline:
      "Professional defamation notices for false statements and online attacks",
    flipWords: [
      "Reputation Defense",
      "Criminal Action",
      "Fast Removal",
      "Compensation Claims",
    ],
    badges: [
      { icon: "shield", text: "Criminal Law\nProtection" },
      { icon: "clock", text: "Immediate\nAction" },
    ],
  },

  content: {
    h1: "Legal Notice for Criminal Defamation in India",
    introduction:
      "If someone has made false and defamatory statements that damage your reputation, you have the right to send a legal notice demanding retraction, apology, and compensation. Under Section 356 of BNS 2023, criminal defamation is punishable with imprisonment up to 2 years and fine. This notice is your first step toward protecting your reputation and seeking legal remedies.",
    sections: criminalDefamationSections,
    finalCta: {
      text: "Your reputation is your most valuable asset. Don't let false statements destroy it. Take legal action today.",
      buttonText: "Send Defamation Notice Now",
    },
  },

  story: {
    badge: "REPUTATION RESTORED",
    title: "Defamation Content Removed in",
    titleHighlight: "48 Hours",
    description:
      "Amit, a business owner, found false reviews and social media posts accusing him of fraud. After sending a legal notice through VakilTech threatening criminal defamation action, all defamatory content was removed within 48 hours and a public apology was posted.",
    features: [
      {
        icon: "document",
        title: "Criminal & Civil Remedies",
        description:
          "Defamation allows both criminal prosecution and civil compensation claims.",
        badge: { text: "Dual Action", color: "primary" },
      },
      {
        icon: "speedometer",
        title: "Fast Content Removal",
        description:
          "Cyber defamation cases often result in immediate removal to avoid prosecution.",
      },
      {
        icon: "wallet",
        title: "Substantial Damages",
        description:
          "Courts award significant compensation for reputational harm, sometimes crores.",
        badge: { text: "High Damages", color: "success" },
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Defamation Laws in",
    titleHighlight: "India",
    description:
      "Criminal defamation is governed by Section 356 of Bharatiya Nyaya Sanhita 2023 (formerly Section 499-500 IPC). Civil defamation suits can claim monetary damages under tort law.",
    expertInsight: {
      quote:
        "60-70% of defamation cases are settled after the legal notice when the defamer realizes the serious consequences of criminal prosecution.",
    },
    accordionSections: [
      {
        id: "legal-grounds",
        title: "Legal Grounds for Defamation",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Criminal defamation under",
            highlight: "Section 356 BNS 2023",
          },
          {
            text: "Punishment:",
            highlight: "Up to 2 years imprisonment + fine",
          },
          { text: "Civil suit for damages under tort law" },
          { text: "IT Act 2000 for cyber defamation" },
          { text: "Immediate injunction to remove defamatory content" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["money-recovery"], // Placeholder - will create proper sample

  faqs: [
    {
      id: "what-is-defamation",
      question: "What is criminal defamation?",
      answer:
        "Criminal defamation under Section 356 of BNS 2023 occurs when someone makes false statements (spoken, written, or published) that harm your reputation in society. The statement must be false, made intentionally, published to third parties, and damage your standing. Punishment includes imprisonment up to 2 years and/or fine.",
    },
    {
      id: "cyber-defamation",
      question: "What is cyber defamation?",
      answer:
        "Cyber defamation is defamation committed through digital platforms—social media posts, tweets, blogs, reviews, WhatsApp messages, or websites. It's covered under both Section 356 BNS and IT Act 2000. Social media platforms can be compelled to remove defamatory content and disclose the defamer's identity.",
    },
    {
      id: "difference-civil-criminal",
      question: "What's the difference between civil and criminal defamation?",
      answer:
        "Criminal defamation (Section 356 BNS) can result in imprisonment and fine. It's prosecuted before Magistrate Court. Civil defamation is a tort lawsuit claiming monetary damages for reputational harm, filed in Civil Court. You can pursue both remedies simultaneously.",
    },
    {
      id: "what-is-not-defamation",
      question: "What is not considered defamation?",
      answer:
        "These are legal defenses: truth (if statement is substantially true), fair comment or opinion (not presented as fact), absolute privilege (statements in Parliament, court proceedings), qualified privilege (official reports, feedback to authorities), consent (you authorized the statement). Criticism of public figures has higher threshold to prove defamation.",
    },
    {
      id: "notice-mandatory",
      question: "Is sending a legal notice mandatory?",
      answer:
        "While not legally mandatory, sending a defamation notice is highly recommended. It gives the defamer a chance to retract and apologize, avoiding litigation. It creates documentary evidence of your claim. Courts view it favorably as attempt at resolution. Many defamers comply after receiving the notice, settling the matter quickly.",
    },
    {
      id: "what-to-demand",
      question: "What can I demand in a defamation notice?",
      answer:
        "You can demand: immediate removal/deletion of defamatory content, unconditional public apology with equal prominence, retraction and clarification of false statements, compensation for reputational and financial damage, undertaking to not repeat such statements, and warning of criminal complaint under Section 356 BNS if demands not met.",
    },
    {
      id: "compensation-amount",
      question: "How much compensation can I claim?",
      answer:
        "Compensation depends on: severity of defamation, extent of publication/reach, damage to reputation and business, your social/professional standing, malicious intent of defamer. Courts have awarded anywhere from ₹50,000 to several crores in high-profile cases. Your notice should quantify damages based on actual business/professional losses plus reputational harm.",
    },
    {
      id: "time-limit",
      question: "Is there a time limit for filing defamation case?",
      answer:
        "For criminal defamation, the complaint must be filed within 1 year from when the defamatory statement was made/published. For civil defamation suits, the limitation period is 1 year from publication under Limitation Act. Act quickly, especially for online defamation where content spreads rapidly.",
    },
    {
      id: "against-media",
      question: "Can I send defamation notice to media/newspapers?",
      answer:
        "Yes, media outlets are liable for defamatory content they publish. However, they have 'qualified privilege' for fair reporting of public interest matters. You should first demand a right to reply or correction. If they refuse and the content is false and defamatory, you can send legal notice and file case.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a defamation notice cost?",
      answer:
        "VakilTech offers criminal defamation notice services for ₹1,499, including consultation on your defamation claim, analysis of defamatory statements, professional drafting citing Section 356 BNS and relevant laws, calculation of damages and compensation, demand for retraction and apology, unlimited revisions, and registered post delivery with evidence of service.",
    },
  ],
};
