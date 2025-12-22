import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { employeeMisconductSections } from "../notice-seo-content";

export const employeeMisconductData: NoticeTypeData = {
  slug: "employee-misconduct-legal-notice",
  title: "Legal Notice for Employee Misconduct",
  cluster: "employment",

  seo: {
    title:
      "Employee Misconduct? | Disciplinary Notice | Start ₹499",
    description:
      "Employee misconduct issue? Get a lawyer-drafted show cause notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.",
    keywords: [
      "employee misconduct legal notice",
      "show cause notice format",
      "disciplinary action notice",
      "employee termination notice",
      "misconduct proceedings",
    ],
  },

  hero: {
    badge: "EMPLOYEE MISCONDUCT",
    headline: "Address Employee Misconduct Legally!",
    subheadline:
      "Professional show cause notices for misconduct and disciplinary action",
    flipWords: [
      "Due Process",
      "Natural Justice",
      "Legal Protection",
      "Disciplinary Action",
    ],
    badges: [
      { icon: "shield", text: "Natural Justice\\nCompliance" },
      { icon: "check", text: "Legal\\nProtection" },
    ],
  },

  content: {
    h1: "Legal Notice for Employee Misconduct in India",
    introduction:
      "When an employee commits misconduct, employers must follow due process before termination. A show cause notice formally documents the misconduct, gives the employee opportunity to explain, and initiates disciplinary inquiry. This protects employers from wrongful termination claims under Industrial Disputes Act and ensures compliance with natural justice principles.",
    sections: employeeMisconductSections,
    finalCta: {
      text: "Protect your business from wrongful termination claims. Follow proper legal process for disciplinary action.",
      buttonText: "Draft Misconduct Notice Now",
    },
  },

  story: {
    badge: "LEGAL PROTECTION",
    title: "Termination Upheld. Saved Company",
    titleHighlight: "₹25 Lakhs",
    description:
      "A company terminated an employee for theft and fraud without proper notice. Employee filed wrongful termination suit claiming ₹25 lakhs. After we helped the company issue proper show cause notice, conduct domestic inquiry, and document everything, the court upheld the termination and dismissed the employee's claim.",
    features: [
      {
        icon: "document",
        title: "Due Process Protection",
        description:
          "Proper show cause notice and inquiry protects against wrongful termination claims.",
        badge: { text: "60-70% Success", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Natural Justice Compliance",
        description:
          "Following inquiry procedure demonstrates fair process and strengthens employer's position.",
      },
      {
        icon: "wallet",
        title: "Recovery Rights",
        description:
          "Can recover damages from employee for losses caused by misconduct.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Industrial Disputes Act and",
    titleHighlight: "Employment Laws",
    description:
      "Employee termination is governed by Industrial Disputes Act 1947, Standing Orders, employment contracts, and natural justice principles. Improper termination can result in reinstatement orders and back wage liabilities.",
    expertInsight: {
      quote:
        "60-70% of wrongful termination cases succeed when employers fail to follow proper procedure. A well-documented misconduct notice is crucial.",
    },
    accordionSections: [
      {
        id: "legal-process",
        title: "Legal Process for Disciplinary Action",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Issue show cause notice",
            highlight: "detailing specific allegations",
          },
          { text: "Give 7 days for employee to respond" },
          { text: "Conduct domestic inquiry if response unsatisfactory" },
          { text: "Follow natural justice: opportunity to defend, examine witnesses" },
          { text: "Issue termination only after following full process" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["employee-misconduct"],

  faqs: [
    {
      id: "what-is-misconduct",
      question: "What constitutes employee misconduct?",
      answer:
        "Misconduct includes: gross misconduct (theft, fraud, violence, sexual harassment requiring immediate termination), serious misconduct (insubordination, negligence causing loss, breach of confidentiality), and minor misconduct (tardiness, dress code violations). Criminal misconduct includes embezzlement, forgery, and criminal breach of trust.",
    },
    {
      id: "show-cause-mandatory",
      question: "Is show cause notice mandatory before termination?",
      answer:
        "Yes, for most employees, especially 'workmen' under Industrial Disputes Act. Show cause notice is mandatory to comply with principles of natural justice. Terminating without notice makes it wrongful termination, allowing employee to file complaint before Labor Court seeking reinstatement with back wages.",
    },
    {
      id: "inquiry-process",
      question: "What is domestic inquiry and how to conduct it?",
      answer:
        "Domestic inquiry is internal investigation followed if employee's response to show cause notice is unsatisfactory. Process: appoint inquiry officer, issue charge sheet with specific allegations, allow employee to defend and cross-examine witnesses, examine evidence, prepare inquiry report, and give findings. Only after inquiry can termination order be issued.",
    },
    {
      id: "recovery-from-employee",
      question: "Can we recover damages from the employee?",
      answer:
        "Yes. If employee's misconduct caused financial loss, you can: deduct from final settlement (within Payment of Wages Act limits), file civil suit for damages, file criminal complaint for embezzlement/fraud/criminal breach of trust, and seek injunction if confidentiality breached. The legal notice should clearly quantify and demand recovery of losses.",
    },
    {
      id: "suspension-during-inquiry",
      question: "Can we suspend employee during inquiry?",
      answer:
        "Yes, pending inquiry, employee can be placed on suspension with subsistence allowance (typically 50% of wages) as per Standing Orders or employment contract. Suspension allows fair inquiry without employee's presence affecting witnesses or evidence. However, prolonged suspension without inquiry can be challenged.",
    },
    {
      id: "what-if-employee-resigns",
      question: "What if employee resigns after show cause notice?",
      answer:
        "Accepting resignation doesn't prevent you from pursuing recovery of losses or criminal action if misconduct involved theft/fraud. However, you lose ability to terminate for cause. It's advisable to complete inquiry before accepting resignation, so you can proceed with termination if proved and recover damages.",
    },
    {
      id: "timeline-for-action",
      question: "How long does the disciplinary process take?",
      answer:
        "Show cause notice: 7 days for response. Domestic inquiry: 30-60 days depending on complexity. Final decision: within 15 days of inquiry report. Total: 2-3 months typically. However, delay in taking action after discovering misconduct can weaken your case, so act promptly.",
    },
    {
      id: "cost-of-notice",
      question: "How much does employee misconduct notice cost?",
      answer:
        "VakilTech offers employee misconduct show cause notice services for ₹1,499, including: analysis of misconduct and evidence, professional drafting of show cause notice, specific allegations with dates and details, natural justice compliance, demand for recovery if applicable, and guidance on domestic inquiry process.",
    },
  ],
};
