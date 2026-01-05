import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { wrongfulTerminationSections } from "../notice-seo-content";

export const wrongfulTerminationData: NoticeTypeData = {
  slug: "wrongful-termination-legal-notice",
  title: "Legal Notice for Wrongful Termination",
  cluster: "employment",

  seo: {
    title:
      "Wrongfully Terminated? | Challenge Dismissal | Start ₹499",
    description:
      "Unfairly dismissed from work? Get a lawyer-drafted wrongful termination notice sent today. Pay ₹499 to start + 2-hr callback. Approve before paying ₹1000.",
    keywords: [
      "wrongful termination legal notice",
      "illegal termination notice",
      "unfair dismissal notice",
      "termination without notice legal action",
    ],
  },

  hero: {
    badge: "EMPLOYEE RIGHTS",
    headline: "Fired Illegally? Fight Back with Legal Action!",
    subheadline:
      "Professional legal notices for wrongful termination and unfair dismissal",
    flipWords: [
      "Reinstatement Rights",
      "Full Back Wages",
      "Labor Law Protection",
      "Justice Delivered",
    ],
    badges: [
      { icon: "shield", text: "Labor Law\nProtection" },
      { icon: "check", text: "High Success\nRate" },
    ],
  },

  content: {
    h1: "Legal Notice for Wrongful Termination in India",
    introduction:
      "If you've been terminated without proper procedure, notice period, or valid cause, you have strong legal rights under the Industrial Disputes Act and labor laws. A legal notice for wrongful termination challenges your dismissal, demands reinstatement with full back wages, or seeks substantial compensation for illegal termination.",
    sections: wrongfulTerminationSections,
    finalCta: {
      text: "Don't accept illegal termination. Assert your rights and demand justice. Send a legal notice today.",
      buttonText: "Challenge Wrongful Termination",
    },
  },

  story: {
    badge: "EMPLOYEE VICTORY",
    title: "Reinstated with Back Wages of",
    titleHighlight: "₹18 Lakhs",
    description:
      "Deepa was terminated without notice during maternity leave. After sending a legal notice citing Industrial Disputes Act violation, her employer agreed to reinstate her with full back wages of ₹18 lakhs plus continuity of service to avoid Labor Court case.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Protection",
        description:
          "Industrial Disputes Act and labor laws protect employees from arbitrary termination.",
        badge: { text: "Employee Favored", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Reinstatement Possible",
        description:
          "Courts can order employer to take you back with full back wages and benefits.",
      },
      {
        icon: "wallet",
        title: "Substantial Compensation",
        description:
          "If reinstatement not feasible, courts award significant compensation.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Employee Termination",
    titleHighlight: "Laws in India",
    description:
      "Wrongful termination cases are governed by Industrial Disputes Act 1947, Standing Orders, employment contracts, and principles of natural justice.",
    expertInsight: {
      quote:
        "40-50% of wrongful termination cases settle after legal notice, with employers offering reinstatement or compensation to avoid litigation.",
    },
    accordionSections: [
      {
        id: "legal-rights",
        title: "Employee Rights in Termination",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Termination requires",
            highlight: "valid cause and due process",
          },
          {
            text: "Notice period or",
            highlight: "payment in lieu mandatory",
          },
          { text: "Domestic inquiry for workmen before termination" },
          { text: "Reinstatement with full back wages if illegal" },
          { text: "Compensation for mental agony and future losses" },
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
            description: "Negotiate a severance package or clearance of dues. Employers often settle to avoid bad PR.",
          },
          {
            title: "Closure",
            description: "If settled, sign a 'Full and Final Settlement' deed.",
          },
        ],
      },
      {
        situation: "If NO Reply / Refusal",
        actions: [
          {
            title: "Authority Complaint",
            description: "File a formal complaint with the Labour Commissioner of the area. They will summon the employer for conciliation.",
          },
          {
            title: "File Case",
            description: "1. Labour Court: If the employee is a 'workman'. 2. Civil Court: If the employee is a 'Manager/Executive' (Labour laws may not apply).",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["unpaid-salary"], // Placeholder - will create proper sample

  faqs: [
    {
      id: "what-is-wrongful-termination",
      question: "What is wrongful termination?",
      answer:
        "Wrongful termination is dismissal from employment that violates labor laws, contract terms, or principles of natural justice. This includes: termination without valid cause, dismissal without notice or inquiry, termination during protected periods (maternity leave, medical leave), discriminatory firing, retaliation for complaints, or constructive dismissal.",
    },
    {
      id: "who-can-challenge",
      question: "Who can challenge termination?",
      answer:
        "Any employee can challenge wrongful termination. For 'workmen' (employees earning below ₹18,000/month under Industrial Disputes Act), protection is strongest with mandatory inquiry procedures. Other employees can challenge under contract law and natural justice. Government employees have additional constitutional protections.",
    },
    {
      id: "notice-period-law",
      question: "What are the legal requirements for notice period?",
      answer:
        "Employment contract or Standing Orders specify notice period (typically 1-3 months). If contract doesn't specify, reasonable notice must be given. Employer must either: allow you to serve full notice period, or pay salary for entire notice period in lieu. Terminating without notice or payment is wrongful unless there's proven gross misconduct.",
    },
    {
      id: "what-is-natural-justice",
      question: "What is natural justice in termination?",
      answer:
        "Natural justice requires: you must be informed of allegations against you (show cause notice), given opportunity to defend yourself and present evidence, domestic inquiry must be fair with right to cross-examine witnesses, decision must be based on evidence, not arbitrary. Skipping any step makes termination wrongful.",
    },
    {
      id: "remedies-available",
      question: "What remedies can I get for wrongful termination?",
      answer:
        "You can claim: reinstatement (get your job back), full back wages from termination to settlement date, continuity of service for benefits, notice period payment if not given, all statutory dues (PF, gratuity, leave encashment), compensation for mental agony and harassment, damages for future loss of earnings. Choice between reinstatement or compensation depends on circumstances.",
    },
    {
      id: "maternity-termination",
      question: "Can I be terminated during maternity leave?",
      answer:
        "No. Maternity Benefit Act 1961 prohibits termination during pregnancy or maternity leave. If terminated during this protected period, it's automatically wrongful. You can claim reinstatement, full wages for entire maternity period, and compensation. Such cases have very high success rates.",
    },
    {
      id: "medical-leave-protection",
      question: "Am I protected during medical leave?",
      answer:
        "Yes, to an extent. While there's no absolute bar on termination during medical leave, courts view such termination very unfavorably. If you're on approved medical leave for genuine illness, termination without proper cause is likely wrongful. Document your medical condition properly and inform employer.",
    },
    {
      id: "constructive-dismissal",
      question: "What is constructive dismissal?",
      answer:
        "Constructive dismissal occurs when employer makes working conditions so intolerable that you're forced to resign. Examples: constant harassment, demotion without cause, hostile work environment, transfer to impossible locations, substantial reduction in salary. If forced to resign, you can claim it as wrongful termination.",
    },
    {
      id: "where-to-file-case",
      question: "Where should I file wrongful termination case?",
      answer:
        "Options depend on your category: Labor Court or Industrial Tribunal (for workmen under Industrial Disputes Act—strongest protection), Civil Court (for breach of contract damages—for non-workmen), Labor Commissioner (for conciliation before litigation), High Court (writ petition for government employees). A legal notice is prerequisite for all forums.",
    },
    {
      id: "cost-of-notice",
      question: "How much does wrongful termination notice cost?",
      answer:
        "VakilTech offers wrongful termination notice services for ₹1,499, including consultation on your termination and legal rights, analysis of employment contract and termination process, professional drafting citing Industrial Disputes Act and labor laws, calculation of dues and compensation, demand for reinstatement or compensation, unlimited revisions, and registered post delivery with legal guidance on next steps.",
    },
  ],
};
