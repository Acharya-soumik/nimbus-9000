import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const unpaidSalaryData: NoticeTypeData = {
  slug: "legal-notice-for-unpaid-salary",
  title: "Legal Notice for Unpaid Salary",
  cluster: "money-recovery",

  seo: {
    title: "Unpaid Salary Legal Notice – Recover Employment Dues | 24hr Draft",
    description:
      "Employer not paying? Send legal notice for salary & dues under Labour Laws. Expert advocate drafting. ₹1,499 | Confidential service. Recover fees.",
    keywords: [
      "legal notice for unpaid salary format",
      "non payment of salary legal notice",
      "wages recovery notice",
      "salary dues legal notice",
      "complaint against employer for non payment of salary",
    ],
  },

  hero: {
    badge: "EMPLOYEE RIGHTS",
    headline: "Your Salary is Your Right. We'll Help You Get It!",
    subheadline: "Legal notices for unpaid salary and employment dues",
    flipWords: [
      "Employee Rights",
      "Salary Recovery",
      "Labour Law Protection",
      "Fast Action",
    ],
    badges: [
      { icon: "shield", text: "Labour Law\nProtection" },
      { icon: "clock", text: "Quick\nRecovery" },
    ],
  },

  content: {
    h1: "Legal Notice for Unpaid Salary in India",
    introduction:
      "If your employer has failed to pay your salary, wages, or other employment dues, you have strong legal rights under Indian labour laws. A legal notice for unpaid salary is the first formal step to recover your hard-earned money and assert your rights as an employee.",
    sections: [],
    finalCta: {
      text: "Don't let employers exploit you. Your salary is your legal right. Send a notice today to recover what you're owed.",
      buttonText: "Send Legal Notice - ₹1,499",
    },
  },

  story: {
    badge: "EMPLOYEE VICTORY",
    title: "Recovered 6 Months Salary of",
    titleHighlight: "₹3.6 Lakhs",
    description:
      "Rahul, a software engineer, wasn't paid for 6 months when his startup faced financial issues. After sending a legal notice through VakilTech citing Payment of Wages Act and threatening labour court action, he received full payment within 45 days.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Protection",
        description:
          "Payment of Wages Act and labour laws strongly protect employee salary rights.",
      },
      {
        icon: "speedometer",
        title: "Labour Court Option",
        description:
          "Can approach labour courts or civil courts depending on the case nature.",
        badge: { text: "Dual Routes", color: "primary" },
      },
      {
        icon: "wallet",
        title: "Interest & Compensation",
        description:
          "Can claim interest on delayed salary plus compensation for mental harassment.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Employee Salary",
    titleHighlight: "Protection Laws",
    description:
      "Employee salary rights are protected under the Payment of Wages Act, 1936, the Industrial Disputes Act, 1947, and State Shops & Establishments Acts.",
    expertInsight: {
      quote:
        "Non-payment of salary is a serious offense. Employers often settle immediately upon receiving a legal notice to avoid Labour Commissioner inspections.",
    },
    accordionSections: [
      {
        id: "legal-rights",
        title: "Employee Rights for Salary Recovery",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to timely salary under",
            highlight: "Payment of Wages Act, 1936",
          },
          { text: "Approaching Labour Commissioner under Industrial Disputes Act" },
          { text: "Claim for Full and Final Settlement (FnF)" },
          { text: "Penalties for non-payment under employment laws" },
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

  sampleNotice: realSampleNotices["unpaid-salary"],

  faqs: [
    {
      id: "what-is-unpaid-salary-notice",
      question: "What is a legal notice for unpaid salary?",
      answer: (
        <div className="space-y-2">
          <p>
            A legal notice for unpaid salary is a formal demand sent by an employee to their employer. It asserts the employee's rights under labour laws and demands clear payment of pending salary, bonuses, or full and final settlement within a specified period.
          </p>
        </div>
      ),
    },
    {
      id: "when-to-send-notice",
      question: "When should I send a salary recovery notice?",
      answer:
        "You should consider sending a notice if your salary is delayed beyond the 7th or 10th of the month (as per applicable state laws) and informal follow-ups with HR/Management have yielded no results. Early action prevents accumulation of dues.",
    },
    {
      id: "what-can-i-claim",
      question: "What can I claim in a salary recovery notice?",
      answer:
        "You can claim: unpaid monthly salary, overtime wages, pending bonuses, encashment of leave, gratuity (if eligible), and full & final (FnF) settlement amounts. You can also claim interest on the delayed amount.",
    },
    {
      id: "notice-period-salary",
      question: "Can I claim salary for the notice period?",
      answer: "Yes, if you have served your notice period or if your employment contract requires the employer to pay for the notice period (in case of immediate termination by them), you are legally entitled to receive that salary.",
    },
    {
      id: "response-time",
      question: "How long should I give the employer to pay?",
      answer:
        "Typically give 7-15 days for payment from receipt of notice. In urgent cases where financial hardship is severe, you can give a shorter 7-day period. The timeline should be reasonable and clearly stated in the notice.",
    },
    {
      id: "labour-court-vs-civil",
      question: "Should I approach Labour Court or Civil Court?",
      answer:
        "For salary disputes, the Labour Commissioner or Labour Court is usually the appropriate authority. It is designed to be faster and more accessible for employees compared to civil courts.",
    },
    {
      id: "terminated-employee",
      question: "Can I send a notice even after termination?",
      answer:
        "Absolutely yes. Even if you've been terminated or resigned, you have the right to recover all unpaid salary, dues, and benefits owed to you for the period you worked. Termination doesn't waive the employer's obligation to pay.",
    },
    {
      id: "interest-on-salary",
      question: "Can I claim interest on delayed salary?",
      answer:
        "Yes. While the Payment of Wages Act doesn't explicitly provide for interest, you can claim compensation for delay. Courts often award interest at reasonable market rates (e.g., 6-9%) on delayed salary payments.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a salary recovery notice cost?",
      answer:
        "VakilTech charges ₹1,499 for drafting and sending a comprehensive salary recovery legal notice, including consultation with labour law experts, unlimited revisions, registered post delivery, and guidance on further legal steps if needed.",
    },
  ],
};
