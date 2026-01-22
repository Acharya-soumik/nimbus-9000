import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const bankLoanSettlementData: NoticeTypeData = {
  slug: "bank-loan-settlement",
  title: "Legal Notice for Bank Loan Settlement",
  cluster: "money-recovery",

  seo: {
    title: "Bank Loan Settlement Notice – Stop Harassment | OTS Help | ₹1,499",
    description:
      "Facing recovery agent harassment? Send a legal notice for one-time settlement (OTS). Stop illegal recovery tactics. Expert-drafted. ₹1,499. Act now.",
    keywords: [
      "bank loan settlement legal notice",
      "one time settlement legal notice",
      "recovery agent harassment notice",
      "bank harassment legal notice",
      "loan settlement notice format",
      "stop recovery agent harassment",
    ],
  },

  hero: {
    badge: "BANK LOAN SETTLEMENT",
    headline: "Stop Recovery Agent Harassment Legally",
    subheadline:
      "Send a legal notice to negotiate one-time settlement (OTS) or stop illegal recovery tactics by banks and agents.",
    flipWords: [
      "Stop Harassment",
      "Negotiate OTS",
      "Legal Protection",
      "Expert Drafted",
    ],
    badges: [
      { icon: "shield", text: "RBI Guidelines\nProtection" },
      { icon: "clock", text: "24-Hour\nDrafting" },
    ],
  },

  content: {
    h1: "Legal Notice for Bank Loan Settlement in India",
    introduction:
      "If you're facing harassment from bank recovery agents, receiving threatening calls, or want to negotiate a one-time settlement (OTS) for your outstanding loan, a legal notice is your first line of defense. Under RBI guidelines, banks and recovery agents must follow strict protocols. A legal notice puts them on notice that you know your rights and will take legal action if harassment continues. It also opens the door for formal settlement negotiations.",
    sections: [
      {
        heading: "What is a Bank Loan Settlement Legal Notice?",
        content:
          "A legal notice for bank loan settlement is a formal communication sent to the bank or financial institution to either: (1) Demand cessation of illegal recovery practices and harassment by agents, or (2) Propose a one-time settlement (OTS) to clear outstanding dues at a reduced amount. This notice is governed by RBI's Fair Practices Code and SARFAESI Act provisions.",
        listItems: [
          "Stops illegal recovery agent harassment immediately",
          "Demands compliance with RBI Fair Practices Code",
          "Proposes structured settlement or OTS terms",
          "Protects you from defamation and public shaming",
          "Creates legal record for future court proceedings",
        ],
      },
      {
        heading: "When Should You Send This Notice?",
        content:
          "You should send a legal notice to your bank or NBFC in the following situations:",
        listItems: [
          "Recovery agents are calling you at odd hours (before 7 AM or after 7 PM)",
          "Agents are threatening you with physical harm or arrest",
          "Bank is publicly shaming you by pasting notices at your home/office",
          "Agents are contacting your employer, family, or friends",
          "You want to negotiate a one-time settlement (OTS) formally",
          "Bank is charging excessive penalty interest or hidden charges",
        ],
      },
      {
        heading: "RBI Guidelines on Loan Recovery",
        content:
          "The Reserve Bank of India has issued strict Fair Practices Code guidelines that all banks and NBFCs must follow:",
        listItems: [
          "**No harassment**: Recovery agents cannot use abusive language or threaten borrowers",
          "**Timing restrictions**: Calls only between 7 AM to 7 PM",
          "**Privacy protection**: Cannot contact third parties (employer, relatives) without borrower consent",
          "**No public shaming**: Cannot paste notices or publicly disclose loan default",
          "**Proper identification**: Agents must carry authorization letters from the bank",
        ],
      },
      {
        heading: "What is One-Time Settlement (OTS)?",
        content:
          "One-Time Settlement is a negotiated agreement where the bank agrees to accept a lump sum payment (usually 40-70% of outstanding amount) to close the loan account. Banks offer OTS to recover at least partial dues instead of writing off the entire loan. Your legal notice can formally propose OTS terms.",
        listItems: [
          "Typically offered for NPA (Non-Performing Asset) accounts",
          "Settlement amount ranges from 40% to 70% of outstanding dues",
          "Requires lump sum payment (not installments)",
          "Bank issues No Objection Certificate (NOC) after payment",
          "Credit score impact: Shows 'Settled' status (not 'Paid')",
        ],
      },
      {
        heading: "What to Include in Your Notice",
        content:
          "An effective bank loan settlement notice must contain:",
        listItems: [
          "Details of the loan account and outstanding amount",
          "Specific instances of harassment with dates and times",
          "Reference to violated RBI guidelines",
          "Demand to stop illegal recovery practices immediately",
          "Proposal for OTS with specific settlement amount (if applicable)",
          "Warning of legal action under IPC Sections 503, 506 (criminal intimidation)",
        ],
      },
      {
        heading: "Legal Remedies Available",
        content:
          "If the bank or recovery agents continue harassment after your notice, you can:",
        listItems: [
          "**File FIR**: Under IPC Sections 503 (criminal intimidation), 506 (threatening), 509 (outraging modesty of women)",
          "**Complaint to RBI**: File complaint on RBI's CMS Portal (Complaint Management System)",
          "**Banking Ombudsman**: Free dispute resolution mechanism",
          "**Civil Suit**: For damages due to mental harassment and defamation",
          "**SARFAESI Challenge**: If bank has violated SARFAESI Act procedures",
        ],
      },
    ],
    finalCta: {
      text: "Don't suffer harassment silently. Assert your legal rights and negotiate settlement on your terms.",
      buttonText: "Send Bank Settlement Notice - ₹1,499",
    },
  },

  story: {
    badge: "SUCCESS STORY",
    title: "How Legal Notice Stopped Harassment & Got",
    titleHighlight: "50% OTS",
    description:
      "Amit, a small business owner from Pune, was facing severe harassment from recovery agents for a ₹15 lakh business loan. Agents were calling his family and clients, damaging his reputation. After sending a legal notice citing RBI violations, the bank immediately stopped the harassment and offered a 50% OTS (₹7.5 lakhs) which Amit accepted.",
    features: [
      {
        icon: "shield-check",
        title: "Immediate Relief",
        description:
          "Harassment stopped within 48 hours of bank receiving the notice.",
        badge: { text: "RBI Compliance", color: "primary" },
      },
      {
        icon: "handshake",
        title: "Favorable Settlement",
        description:
          "Bank offered 50% OTS to avoid legal action and RBI complaint.",
        badge: { text: "50% Waiver", color: "success" },
      },
      {
        icon: "document",
        title: "Clean Closure",
        description:
          "Received NOC and loan closure certificate after settlement payment.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Protected by",
    titleHighlight: "RBI Fair Practices Code & SARFAESI Act",
    description:
      "Your rights as a borrower are protected under multiple regulations including RBI's Fair Practices Code, SARFAESI Act 2002, and Indian Penal Code provisions against harassment.",
    expertInsight: {
      quote:
        "Banks fear RBI complaints more than court cases. A well-drafted legal notice citing specific RBI guideline violations often results in immediate settlement offers.",
    },
    accordionSections: [
      {
        id: "rbi-guidelines",
        title: "RBI Fair Practices Code",
        icon: <span className="text-primary">🏦</span>,
        items: [
          {
            text: "Recovery calls only between",
            highlight: "7 AM to 7 PM",
          },
          {
            text: "No contact with third parties without borrower consent",
          },
          {
            text: "No abusive language or threats",
            highlight: "Violation = RBI penalty",
          },
          {
            text: "Recovery agents must carry proper authorization",
          },
        ],
      },
      {
        id: "criminal-provisions",
        title: "Criminal Law Protection",
        icon: <span className="text-secondary">⚖️</span>,
        items: [
          {
            text: "IPC Section 503:",
            highlight: "Criminal intimidation (2 years jail)",
          },
          {
            text: "IPC Section 506:",
            highlight: "Threatening (7 years jail)",
          },
          {
            text: "IPC Section 509:",
            highlight: "Outraging modesty (if female borrower)",
          },
        ],
      },
    ],
  },

  postNoticeRoadmap: {
    title: "Roadmap: What Happens After Sending the Notice?",
    scenarios: [
      {
        situation: "If Bank Responds Positively",
        actions: [
          {
            title: "Harassment Stops",
            description: "Bank immediately instructs recovery agents to cease illegal practices.",
          },
          {
            title: "OTS Offer",
            description: "Bank may propose a one-time settlement amount (typically 40-70% of dues).",
          },
          {
            title: "Negotiation",
            description: "You can counter-propose a lower settlement amount with proper justification.",
          },
        ],
      },
      {
        situation: "If Bank Ignores Notice",
        actions: [
          {
            title: "RBI Complaint",
            description: "File formal complaint on RBI's CMS Portal with copy of your legal notice.",
          },
          {
            title: "Banking Ombudsman",
            description: "Approach Banking Ombudsman for free dispute resolution.",
          },
          {
            title: "Criminal Complaint",
            description: "File FIR against recovery agents under IPC Sections 503, 506.",
          },
        ],
      },
      {
        situation: "If Harassment Continues",
        actions: [
          {
            title: "Civil Suit",
            description: "File suit for damages due to mental harassment and defamation.",
          },
          {
            title: "Injunction",
            description: "Seek court injunction to restrain bank from illegal recovery practices.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["money-recovery"], // Placeholder

  faqs: [
    {
      id: "can-bank-harass",
      question: "Can banks legally harass borrowers for loan recovery?",
      answer:
        "No. RBI's Fair Practices Code strictly prohibits harassment. Banks and recovery agents cannot use abusive language, threaten borrowers, call at odd hours (before 7 AM or after 7 PM), or contact third parties without consent. Violation of these guidelines can result in RBI penalties and criminal action.",
    },
    {
      id: "what-is-ots",
      question: "What is One-Time Settlement (OTS)?",
      answer:
        "OTS is a negotiated settlement where the bank agrees to accept a lump sum payment (usually 40-70% of outstanding dues) to close your loan account. This is offered for NPA accounts where the bank prefers partial recovery over complete write-off. After OTS payment, the bank issues an NOC.",
    },
    {
      id: "ots-credit-score",
      question: "How does OTS affect my credit score?",
      answer:
        "OTS will be marked as 'Settled' (not 'Paid in Full') on your credit report. This negatively impacts your credit score and may affect future loan applications. However, it's better than 'Written Off' status. After 7 years, the settled account is removed from your credit report.",
    },
    {
      id: "can-file-fir",
      question: "Can I file an FIR against recovery agents?",
      answer:
        "Yes. If recovery agents are threatening you, using abusive language, or harassing your family, you can file an FIR under IPC Sections 503 (criminal intimidation), 506 (threatening), and 509 (if female borrower). Keep evidence like call recordings and messages.",
    },
    {
      id: "rbi-complaint-process",
      question: "How do I file a complaint with RBI?",
      answer:
        "Visit RBI's CMS Portal (cms.rbi.org.in), register your complaint against the bank, attach your legal notice and evidence of harassment. RBI typically responds within 30 days and directs the bank to resolve the issue. This is a powerful tool as banks fear RBI penalties.",
    },
    {
      id: "can-bank-arrest",
      question: "Can banks get me arrested for loan default?",
      answer:
        "No. Loan default is a civil matter, not a criminal offense (unless fraud is involved). Banks cannot get you arrested. If recovery agents threaten arrest, it's illegal intimidation. You can file an FIR against them and send a legal notice to the bank.",
    },
    {
      id: "notice-cost",
      question: "How much does this legal notice cost?",
      answer:
        "VakilTech offers bank loan settlement legal notice drafting for ₹1,499, including expert drafting by advocates specializing in banking law, unlimited revisions, registered post delivery, and guidance on RBI complaint process if needed.",
    },
  ],
};
