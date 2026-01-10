import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const divorceNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-divorce",
  title: "Legal Notice for Divorce",
  cluster: "family",

  seo: {
    title: "Affordable Divorce Legal Notice Online | VakilTech - Get Notice Drafted & Sent",
    description:
      "Initiate divorce proceedings with a professionally drafted legal notice. clear, affordable, and sensitive handling of your case.",
    keywords: [
      "legal notice for divorce",
      "divorce notice format india",
      "send divorce notice online",
      "mutual consent divorce notice",
      "contested divorce notice",
      "Notice for Dissolution of Marriage",
      "Divorce under Hindu Marriage Act",
    ],
  },

  hero: {
    badge: "FAMILY LAW - DIVORCE",
    headline: "Professional Legal Notice for Divorce Proceedings",
    subheadline: "Initiate your separation process with dignity and legal precision. Expert-drafted notices for both mutual consent and contested divorce.",
    flipWords: [
      "Mutual Consent",
      "Contested Divorce",
      "Cruelty Grounds",
      "Desertion Cases",
    ],
    badges: [
      { icon: "shield", text: "100% Confidential" },
      { icon: "users", text: "Family Law Experts" },
    ],
  },

  content: {
    h1: "Legal Notice for Divorce in India",
    introduction:
      "A legal notice for divorce is the first formal step in ending a marriage. It communicates your intent to separate and outlines the grounds for divorce to your spouse. Whether you are seeking a mutual consent divorce or proceeding with a contested divorce due to cruelty, desertion, or adultery, a well-drafted legal notice sets the tone for the entire legal process. It demonstrates your serious intent and often opens the door for an amicable settlement without prolonged litigation.",
    sections: [
      {
        heading: "Why Send a Legal Notice for Divorce?",
        content:
          "Sending a legal notice is not just a formality but a strategic move that serves multiple legal and practical purposes:",
        listItems: [
          "Clear Communication of Intent: It formally informs your spouse of your decision to end the marriage and the specific reasons (grounds).",
          "Opportunity for Mutual Settlement: A notice often prompts the other party to consider a Mutual Consent Divorce, which is faster (6-18 months) and less expensive.",
          "Legal Requirement: For grounds like desertion or restitution of conjugal rights, a notice serves as crucial evidence that you attempted to resolve the matter.",
        ],
      },
      {
        heading: "Types of Divorce Notices We Handle",
        content:
          "Our experienced family law advocates can draft notices tailored to your specific situation and desired outcome:",
        listItems: [
          "Mutual Consent Notice: Proposing an amicable separation where both parties agree on terms like alimony, child custody, and assets.",
          "Contested Divorce Notice: Based on specific legal grounds such as Cruelty, Adultery, Desertion, or Conversion, when one party does not agree.",
        ],
      },
      {
        heading: "Legal Framework & Acts",
        content:
          "Divorce laws in India vary based on religion, and your legal notice will be drafted under the specific act applicable to you:",
        listItems: [
          "Hindu Marriage Act, 1955: For Hindus, Buddhists, Jains, and Sikhs (Sec 13B for Mutual, Sec 13(1) for Contested).",
          "Special Marriage Act, 1954: For inter-religion marriages or civil marriages registered under this act.",
          "Indian Divorce Act, 1869: Applicable to Christians.",
          "Dissolution of Muslim Marriages Act, 1939: Applicable to Muslim women seeking divorce.",
        ],
      },
      {
        heading: "Our Divorce Notice Process",
        content:
          "We follow a systematic, confidential, and client-centric process to ensure your notice is legally sound:",
        listItems: [
          "1. Consultation: Discuss your case details and grounds for divorce with our family law advocate.",
          "2. Drafting: Our lawyer drafts a comprehensive notice citing relevant sections of the law.",
          "3. Review & Approval: You review the draft to ensure all facts are accurate. Unlimited revisions provided.",
          "4. Dispatch: The notice is sent via Registered Post Acknowledgment Due  for legal proof.",
        ],
      },
    ],
    finalCta: {
      text: "Divorce is legally complex and emotionally taxing. Let our experts handle the legal formalities while you focus on your future.",
      buttonText: "Book Confidential Consultation",
    },
  },

  story: {
    badge: "CLIENT SUCCESS STORY",
    title: "From Contested Threat to",
    titleHighlight: "Mutual Consent",
    description:
      "Rohan (name changed) was facing a toxic marriage but feared a long court battle. His wife threatened false cases if he filed for divorce. We drafted a balanced legal notice highlighting 'Mental Cruelty' while simultaneously offering a fair Mutual Consent settlement. The notice, devoid of aggressive language but strong on legal facts, helped bring her to the negotiation table. Instead of a 5-year battle, they signed a Mutual Consent agreement within 3 months.",
    features: [
      {
        icon: "shield",
        title: "Protected Against False Claims",
        description:
          "The legal notice proactively documented facts, protecting Rohan from potential false allegations later.",
      },
      {
        icon: "chat",
        title: "Opened Proper Dialogue",
        description:
          "Shifted the conversation from emotional arguments to legal realities and settlement terms.",
      },
      {
        icon: "clock",
        title: "Saved Years of Litigation",
        description:
          "Mutual consent divorce was filed immediately after the cooling-off period discussions.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL KNOWLEDGE",
    title: "Grounds for Divorce in",
    titleHighlight: "India",
    description:
      "Under Section 13(1) of the Hindu Marriage Act, 1955, and similar provisions in other personal laws, you can seek divorce on specific grounds if mutual consent is not possible.",
    expertInsight: {
      quote:
        "The specific wording of your 'grounds' in the legal notice is critical. If you allege 'Cruelty', specific instances must be cited to stand up in court later.",
    },
    accordionSections: [
      {
        id: "grounds-detailed",
        title: "Common Grounds Explained",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Adultery: Voluntary sexual intercourse with another person." },
          { text: "Cruelty: Conduct causing reasonable apprehension of harm (mental or physical)." },
          { text: "Desertion: Abandonment without cause for a continuous period of 2 years." },
          { text: "Conversion: Spouse ceased to be a Hindu by converting to another religion." },
          { text: "Unsoundness of Mind: Incurable mental disorder making it impossible to live together." },
        ],
      },
    ],
  },
  
  postNoticeRoadmap: {
    title: "Roadmap: What Happens After Sending the Notice?",
    scenarios: [
      {
        situation: "If Reply Received (Positive)",
        actions: [
          {
            title: "Mediation",
            description:
              "Arrange a joint meeting to discuss terms (alimony, child custody).",
          },
          {
            title: "File Case",
            description:
              "File a Mutual Consent Divorce (Section 13B HMA). This is faster (6-18 months).",
          },
        ],
      },
      {
        situation: "If Reply Received (Hostile)",
        actions: [
          {
            title: "Mediation",
            description:
              "Attempt pre-litigation mediation center counseling (optional but recommended).",
          },
          {
            title: "File Case",
            description:
              "File a Contested Divorce petition (Cruelty, Desertion, etc.).",
          },
          {
            title: "Maintenance",
            description:
              "Simultaneously file Section 125 CrPC / Section 144 BNSS for interim maintenance.",
          },
        ],
      },
      {
        situation: "If NO Reply",
        actions: [
          {
            title: "File Case",
            description:
              "File for Restitution of Conjugal Rights (Section 9) if you want them back, OR file for Contested Divorce.",
          },
          {
            title: "Authority Complaint",
            description:
              "If violence was involved, file a complaint with the Women’s Cell or Protection Officer (DV Act).",
          },
        ],
      },
    ],
  },
  
  sampleNotice: realSampleNotices["divorce"],

  faqs: [
    {
      id: "mandatory-notice",
      question: "Is it mandatory to send a legal notice before filing for divorce?",
      answer:
        "While not strictly mandatory by law for all types of divorce petitions, sending a legal notice is highly recommended. It serves as a final warning, officially records the date of separation/desertion, and often pushes the other party to agree to a Mutual Consent Divorce to avoid court battles. For 'Restitution of Conjugal Rights', a notice is a prerequisite.",
    },
    {
      id: "mutual-vs-contested-diff",
      question: "What is the difference between Mutual Consent and Contested Divorce?",
      answer: (
        <div className="space-y-2">
          <p>
            <strong>Mutual Consent (Sec 13B HMA):</strong> Both husband and wife agree to separate peacefully. They mutually decide on alimony, child custody, and assets. It is the fastest way (6-18 months).
          </p>
          <p>
            <strong>Contested Divorce (Sec 13(1) HMA):</strong> Filed by one spouse on specific grounds like cruelty or adultery, while the other opposes it. It involves proving allegations in court and can take 3-5 years to resolve.
          </p>
        </div>
      ),
    },
    {
      id: "alimony-maintenance",
      question: "How is alimony or maintenance decided?",
      answer:
        "Alimony (permanent) or interim maintenance is decided based on the husband's income/assets, the wife's earning capacity, the standard of living during marriage, and the duration of the marriage. There is no fixed formula (e.g., '50% of salary'), but courts generally aim for a fair amount that allows the dependent spouse to maintain a similar lifestyle.",
    },
    {
      id: "child-custody-divorce",
      question: "Who gets child custody after divorce?",
      answer:
        "The paramount consideration for the court is the 'Welfare of the Child'. For children under 5, custody usually goes to the mother. For older children, the court looks at who can better provide for the child's emotional and educational needs. Joint custody or visitation rights for the non-custodial parent are common outcomes.",
    },
    {
      id: "stridhan-recovery",
      question: "Can I claim my jewelry (Stridhan) in the divorce notice?",
      answer:
        "Yes, absolutely. A wife has absolute ownership over her Stridhan (gifts, jewelry given to her during marriage). You should explicitly demand the return of all Stridhan items in the legal notice. Failure to return them can lead to a criminal complaint under Section 406 IPC (Criminal Breach of Trust).",
    },
    {
      id: "husband-rights",
      question: "Does a husband have any rights to file for divorce?",
      answer:
        "Yes, a husband can file for divorce on the same grounds as a wife under the Hindu Marriage Act, such as Cruelty (mental harassment by wife), Desertion, Adultery, or Unsoundness of Mind. He can also seek custody of children if he can prove it's in their best interest.",
    },
    {
      id: "divorce-cost-timeline",
      question: "What is the cost and timeline for a divorce notice?",
      answer:
        "At VakilTech, a professionally drafted Divorce Legal Notice costs ₹1,499. The draft is typically ready within 24-48 hours after consultation. Once approved, it is sent via Registered Post, which takes 3-5 days for delivery. The response time given to the spouse is usually 15 days.",
    },
    {
      id: "nri-divorce",
      question: "Can I send a divorce notice if I am living abroad (NRI)?",
      answer:
        "Yes, NRIs can send a legal notice for divorce to their spouse in India. You do not need to be physically present to send the notice. Our lawyers can coordinate with you via video call/email, draft the notice, and dispatch it from India to your spouse's address securely.",
    },
  ],
};
