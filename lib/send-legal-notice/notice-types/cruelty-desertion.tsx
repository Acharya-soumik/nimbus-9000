import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const crueltyDesertionNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-cruelty-or-desertion",
  title: "Legal Notice for Cruelty or Desertion",
  cluster: "family",

  seo: {
    title: "Legal Notice for Cruelty & Desertion | 498A & Divorce | ₹499",
    description:
      "Facing mental cruelty or desertion? Send a strong legal notice. Valid grounds for divorce & 498A complaints. Expert drafting by family lawyers.",
    keywords: [
      "legal notice for cruelty",
      "legal notice for desertion",
      "mental cruelty divorce notice",
      "section 498a notice",
      "matrimonial harassment notice",
    ],
  },

  hero: {
    badge: "AGAINST DOMESTIC ABUSE",
    headline: "Stand Against Cruelty & Desertion",
    subheadline: "Don't suffer in silence. A legal notice creates a formal record of abuse or abandonment—a crucial first step for your protection.",
    flipWords: [
      "Mental Cruelty",
      "Physical Abuse",
      "2+ Years Desertion",
      "Dowry Harassment",
    ],
    badges: [
      { icon: "shield", text: "Legal Protection" },
      { icon: "users", text: "Confidential Support" },
    ],
  },

  content: {
    h1: "Legal Notice for Cruelty & Desertion in India",
    introduction:
      "Cruelty (mental or physical) and Desertion are the two most common grounds for contested divorce in India. Sending a legal notice documents the abuse or abandonment formally. It serves as a strong warning to the offending spouse and creates vital evidence for future legal proceedings—whether for divorce, maintenance, or criminal complaints under Section 498A IPC or the Domestic Violence Act.",
    sections: [
      {
        heading: "What Constitutes 'Cruelty'?",
        content:
          "Cruelty under Indian law includes both physical harm and mental suffering that makes living together impossible:",
        listItems: [
          "Mental Cruelty: Constant humiliation, false accusations, restricting freedom, or prolonged silence that causes mental agony.",
          "Physical Cruelty: Any act causing bodily harm, injury, or danger to life, limb, or health.",
          "Legal Significance: Under Section 13(1)(ia) of the Hindu Marriage Act, 'Cruelty' is a valid ground for divorce.",
        ],
      },
      {
        heading: "What Constitutes 'Desertion'?",
        content:
          "Desertion refers to the intentional abandonment of one spouse by the other without sufficient cause:",
        listItems: [
          "Willful Abandonment: Leaving the spouse without reasonable cause and without consent.",
          "Duration: Must be for a continuous period of at least 2 years immediately preceding the divorce petition.",
          "Constructive Desertion: If one spouse is forced to leave home due to the other's cruelty, the aggressive spouse is considered the deserter.",
        ],
      },
      {
        heading: "Why Send a Notice Now?",
        content: "Drafting and sending a legal notice immediately serves crucial strategic purposes:",
        listItems: [
          "Stops the Abuse: A legal notice shows you have legal backing, acting as a strong deterrent to further harassment.",
          "Creates Evidence: It puts on record specific incidents of cruelty or the exact date of desertion, which is vital for court cases.",
          "Option for Settlement: It gives the spouse a chance to rectify their behavior or agree to a mutual separation to avoid litigation.",
        ],
      },
    ],
    finalCta: {
      text: "You deserve safety and dignity. Take the first legal step to protect yourself today.",
      buttonText: "Draft Cruelty/Desertion Notice",
    },
  },

  story: {
    badge: "CLIENT SUCCESS STORY",
    title: "Documenting Cruelty Led to",
    titleHighlight: "Favorable Divorce",
    description:
      "Deepa (name changed) faced constant mental harassment and dowry taunts from her in-laws but had no physical proof. On our advice, she sent a detailed legal notice listing specific incidents and dates of harassment. When her husband filed a false 'Restitution of Conjugal Rights' case later, this notice served as primary evidence that she had valid reasons to live separately. The court ruled in her favor, granting divorce and alimony.",
    features: [
      {
        icon: "file",
        title: "Created Paper Trail",
        description:
          "The noticed proved that the harassment was ongoing and not an afterthought.",
      },
      {
        icon: "shield",
        title: "Countered False Cases",
        description:
          "prevented the husband from claiming she left the home without reason.",
      },
      {
        icon: "check",
        title: "Alimony Granted",
        description:
          "Cruelty was established as the ground for divorce, ensuring she received maintenance.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL PROVISIONS",
    title: "Cruelty Laws in",
    titleHighlight: "India",
    description:
      "Indian law provides both civil (divorce) and criminal remedies for cruelty.",
    expertInsight: {
      quote:
        "For a divorce based on desertion, the period must be 2 continuous years. However, you don't need to wait 2 years to send a legal notice—send it immediately to mark the start date.",
    },
    accordionSections: [
      {
        id: "legal-sections",
        title: "Key Legal Sections",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Sec 13(1)(ia) HMA: Cruelty as ground for divorce" },
          { text: "Sec 13(1)(ib) HMA: Desertion as ground for divorce" },
          { text: "Sec 498A IPC: Criminal law for cruelty by husband/relatives" },
          { text: "DV Act 2005: Protection from Domestic Violence" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["cruelty"],

  faqs: [
    {
      id: "mental-cruelty-proof",
      question: "How do I prove mental cruelty?",
      answer:
        "Mental cruelty is harder to prove than physical injury but is equally valid. Proof can include: abusive text messages/emails, audio recordings, testimony of neighbors or relatives, medical records of treatment for depression/anxiety caused by the marriage, and crucially, a detailed legal notice sent at the time of incidents.",
    },
    {
      id: "498a-notice",
      question: "Is this notice the same as filing a 498A case?",
      answer:
        "No. A legal notice is a civil warning sent by a lawyer. Section 498A is a criminal complaint filed with the police. However, sending a notice acts as a final warning. If the harassment stops, you may avoid a criminal case. If not, the notice shows you tried to resolve it civilly first.",
    },
    {
      id: "desertion-time",
      question: "Do I have to wait 2 years to send a desertion notice?",
      answer:
        "No! You should send the notice as soon as your spouse leaves or you are forced to leave. The notice will document the *start date* of the separation. While you may need to wait 2 years to file for divorce on this specific ground, the notice prevents the spouse from later claiming they never left.",
    },
    {
      id: "constructive-desertion",
      question: "I left home because he beat me. Can he claim I deserted him?",
      answer:
        "No. This is called 'Constructive Desertion'. Since his cruelty *forced* you to leave for your safety, *he* is considered the deserter in the eyes of the law. Your legal notice must clearly state that you were compelled to leave due to his conduct.",
    },
    {
      id: "dwory-return",
      question: "Can I demand return of dowry/gifts in this notice?",
      answer:
        "Yes. The notice should list all Stridhan (jewelry, gifts, dowry items) that are in the possession of your spouse/in-laws and demand their return within 7-15 days. Failure to return them is a criminal offense under Section 406 IPC (Criminal Breach of Trust).",
    },
    {
      id: "inlaws-harassment",
      question: "Can I send notice to my in-laws too?",
      answer:
        "Yes, if the in-laws are participating in the cruelty or holding your property. In Indian law (especially Sec 498A and DV Act), husband's relatives are also liable for cruelty. The notice can address them specifically.",
    },
    {
      id: "false-case-protection",
      question: "Will sending a notice provoke him to file a false case?",
      answer:
        "Usually, it's the opposite. A well-drafted notice shows you have legal counsel and successful evidence. It serves as a deterrent. Moreover, if he files a false case *after* receiving your notice, your notice proves his case is a counter-blast (retaliation) and helps you get bail or quash his case.",
    },
    {
      id: "cost-cruelty-notice",
      question: "What is the cost of a Cruelty/Desertion notice?",
      answer:
        "We charge ₹1,499. This covers a detailed consultation to understand your specific incidents of cruelty, drafting a strong legal notice citing relevant High Court/Supreme Court judgments, and dispatch via Registered Post.",
    },
  ],
};
