import React from "react";
import type { FAQItem } from "@/components/ui/faq-section";
import type { AccordionSection } from "@/components/send-legal-notice/InfoSectionVariant2";
import type { SampleNoticeContent } from "@/components/send-legal-notice/SampleNoticeModal";
import {
  moneyRecoverySections,
  chequeBounceSections,
  outstandingPaymentSections,
  childCustodySections,
  criminalDefamationSections,
  wrongfulTerminationSections,
  propertyPartitionSections,
  workplaceHarassmentSections,
  employeeMisconductSections,
  domesticViolenceSections,
  breachOfContractSections,
} from "./notice-seo-content";
import { realSampleNotices } from "./real-sample-notices";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export interface NoticeTypeData {
  slug: string;
  title: string;
  cluster: "money-recovery" | "family" | "tenant-property" | "builder-consumer" | "criminal" | "employment" | "contract";

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    flipWords: string[];
    badges: Array<{
      icon: "clock" | "shield" | "users" | "check";
      text: string;
    }>;
  };

  content: {
    h1: string;
    introduction: string;
    sections: Array<{
      heading: string;
      content: string;
      listItems?: string[];
    }>;
    finalCta: {
      text: string;
      buttonText: string;
    };
  };

  story: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      badge?: { text: string; color: "success" | "warning" | "primary" };
    }>;
  };

  legalFramework: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    expertInsight?: { quote: string };
    accordionSections: AccordionSection[];
  };

  sampleNotice: SampleNoticeContent;
  faqs: FAQItem[];
}

/* =============================================================================
 * MONEY RECOVERY DATA
 * ============================================================================= */

export const moneyRecoveryData: NoticeTypeData = {
  slug: "legal-notice-for-money-recovery",
  title: "Legal Notice for Money Recovery",
  cluster: "money-recovery",

  seo: {
    title:
      "Legal Notice for Recovery of Money | Online Drafting ₹1499 | VakilTech",
    description:
      "Send money recovery notice online. Professionally drafted by Licensed Advocates. Sent via Speed Post. 24-48 hour delivery. ₹1499 all inclusive.",
    keywords: [
      "legal notice for recovery of money",
      "money recovery legal notice",
      "legal notice for non payment",
    ],
  },

  hero: {
    badge: "MONEY RECOVERY",
    headline: "We Don't Just Send Notices. We Help You Recover Money!",
    subheadline:
      "Professional legal notices drafted by expert advocates to recover your unpaid dues",
    flipWords: [
      "Fast Recovery",
      "Legal Protection",
      "Expert Lawyers",
      "₹12.3 Cr Recovered",
    ],
    badges: [
      { icon: "clock", text: "48-Hour Drafting" },
      { icon: "shield", text: "Drafted by Licensed Advocates" },
    ],
  },

  content: {
    h1: "Legal Notice for Recovery of Money in India",
    introduction:
      "If someone has failed to repay money owed to you—whether it is a personal loan, unpaid invoice, salary dues, or business payment—the first and most effective legal step is to send a legal notice for recovery of money. A properly drafted legal notice puts the opposite party on formal legal notice, creates documentary evidence, and often leads to recovery without going to court.",
    sections: moneyRecoverySections,
    finalCta: {
      text: "If someone owes you money, delay only weakens your position. A professionally drafted legal notice is often enough to recover dues quickly and legally.",
      buttonText: "Start Your Money Recovery Notice",
    },
  },

  story: {
    badge: "REAL SUCCESS STORY",
    title: "How Legal Notice Recovered",
    titleHighlight: "₹8 Lakhs in 21 Days",
    description:
      "Rajesh, a small business owner from Mumbai, was owed ₹8 lakhs by a client who kept delaying payment for 6 months. After sending a professionally drafted legal notice through Vakiltech, the client cleared the full amount within 21 days to avoid court proceedings.",
    features: [
      {
        icon: "document",
        title: "Creates Strong Evidence",
        description:
          "Serves as admissible proof in court that you attempted to resolve the dispute before litigation.",
      },
      {
        icon: "speedometer",
        title: "Faster Settlement",
        description:
          "Most disputes are settled immediately after receiving a notice, avoiding court entirely.",
        badge: { text: "65% Success Rate", color: "success" },
      },
      {
        icon: "wallet",
        title: "Saves Money",
        description:
          "Reduces litigation costs significantly by forcing a pre-litigation settlement.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Understanding Money Recovery",
    titleHighlight: "Laws in India",
    description:
      "Money recovery cases in India are governed by the Indian Contract Act, 1872, and the Code of Civil Procedure, 1908.",
    expertInsight: {
      quote:
        "A well-drafted legal notice settles 65% of money recovery disputes without ever stepping foot inside a courtroom.",
    },
    accordionSections: [
      {
        id: "legal-grounds",
        title: "Legal Grounds for Money Recovery",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Contract breach under",
            highlight: "Indian Contract Act, 1872",
          },
          { text: "Loan agreements and promissory notes" },
          { text: "Service contracts and payment terms" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["money-recovery"],

  faqs: [
    {
      id: "what-is-money-recovery-notice",
      question: "What is a legal notice for recovery of money?",
      answer: (
        <div className="space-y-2">
          <p>
            A legal notice for recovery of money is a formal written document
            sent by a creditor to a debtor demanding payment of outstanding
            dues. It serves as an official warning before filing a civil suit
            and gives the recipient a final opportunity to settle the debt out
            of court.
          </p>
          <p>
            The notice must contain details of the debt, amount owed, legal
            basis for the claim, and a specific timeframe for payment.
          </p>
        </div>
      ),
    },
    {
      id: "when-to-send",
      question: "When should I send a money recovery legal notice?",
      answer:
        "You should send a legal notice when someone owes you money and has failed to repay despite reminders. This includes personal loans, business payments, unpaid invoices, security deposits, or any contractual payment obligations. It's the first formal legal step before approaching court.",
    },
    {
      id: "how-long-response",
      question:
        "How long does the other party get to pay after receiving the notice?",
      answer:
        "Typically, the recipient is given 7-30 days to respond and make payment, depending on the nature of the case and the amount involved. The exact period will be clearly mentioned in the notice. If they fail to pay within this period, you can proceed with legal action.",
    },
    {
      id: "is-notice-mandatory",
      question: "Is sending a legal notice mandatory before filing a case?",
      answer: (
        <div className="space-y-2">
          <p>
            While not always legally mandatory, sending a legal notice is highly
            recommended and often required by courts. It demonstrates that you
            attempted to resolve the matter amicably before litigation.
          </p>
          <p>
            In many cases, courts may ask if you sent a notice before filing
            suit. A properly sent legal notice strengthens your case and shows
            good faith.
          </p>
        </div>
      ),
    },
    {
      id: "what-happens-after",
      question: "What happens after sending the legal notice?",
      answer:
        "After receiving the notice, the debtor may: (1) Pay the full amount and settle the dispute, (2) Respond with their objections or propose a settlement, or (3) Ignore the notice entirely. If there's no satisfactory response within the specified time, you can proceed to file a civil suit for recovery.",
    },
    {
      id: "cost-of-notice",
      question: "How much does it cost to send a money recovery notice?",
      answer: (
        <div className="space-y-2">
          <p>
            With VakilTech, our money recovery legal notice service costs just{" "}
            <span className="font-semibold text-primary">₹1,499</span>, which
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Professional drafting by Licensed Advocates</li>
            <li>Unlimited revisions until you're satisfied</li>
            <li>Sending via Speed Post with tracking</li>
            <li>48-hour delivery guaranteed</li>
            <li>Legal consultation support</li>
          </ul>
        </div>
      ),
    },
    {
      id: "what-information-needed",
      question: "What information do I need to provide for drafting?",
      answer:
        "You'll need to provide: (1) Your complete details and the debtor's details, (2) Amount owed and reason for the debt, (3) Date when the debt was incurred, (4) Any agreements, invoices, or proof of transaction, (5) Previous communication attempts (emails, messages, etc.). Our team will guide you through the entire process.",
    },
    {
      id: "success-rate",
      question: "What is the success rate of legal notices for money recovery?",
      answer:
        "Approximately 65-70% of money recovery disputes are settled after sending a professionally drafted legal notice, without going to court. The formal legal language and threat of litigation often motivates debtors to clear their dues quickly to avoid court cases, legal costs, and damage to their reputation.",
    },
    {
      id: "can-send-without-lawyer",
      question: "Can I send a legal notice without a lawyer?",
      answer: (
        <div className="space-y-2">
          <p>
            Technically yes, but it's strongly not recommended. A legal notice
            must follow specific legal format, language, and procedures to be
            valid and effective in court.
          </p>
          <p>
            A notice drafted by a qualified advocate carries much more weight,
            uses proper legal terminology, cites relevant laws, and is more
            likely to result in payment or be admissible as evidence if you need
            to file a lawsuit later.
          </p>
        </div>
      ),
    },
    {
      id: "how-long-takes",
      question: "How long does the drafting and sending process take?",
      answer:
        "With VakilTech, our advocates draft your legal notice within 24-48 hours after you provide all necessary details. Once you review and approve the draft, we send it via Speed Post (RPAD), which typically takes 5-7 business days for delivery. You'll receive tracking updates throughout the process.",
    },
  ],
};

/* =============================================================================
 * CHEQUE BOUNCE DATA
 * ============================================================================= */

export const chequeBounceData: NoticeTypeData = {
  slug: "cheque-bounce-legal-notice",
  title: "Cheque Bounce Legal Notice",
  cluster: "money-recovery",

  seo: {
    title: "Cheque Bounce Legal Notice | Section 138 Notice ₹1499 | VakilTech",
    description:
      "Send cheque bounce notice under Section 138 of NI Act. Professionally drafted by experts. Mandatory 15-day notice period. ₹1499 all inclusive.",
    keywords: [
      "cheque bounce legal notice",
      "section 138 legal notice",
      "cheque dishonour notice",
    ],
  },

  hero: {
    badge: "CHEQUE BOUNCE - SECTION 138",
    headline: "Cheque Bounced? Take Legal Action Now!",
    subheadline:
      "Expert legal notices for dishonoured cheques under Section 138 of NI Act",
    flipWords: [
      "Criminal Action",
      "Mandatory Notice",
      "15-Day Deadline",
      "Expert Drafting",
    ],
    badges: [
      { icon: "clock", text: "Time-Sensitive\nAction" },
      { icon: "shield", text: "Section 138\nCompliance" },
    ],
  },

  content: {
    h1: "Cheque Bounce Legal Notice Under Section 138 of NI Act",
    introduction:
      "When a cheque is dishonoured due to insufficient funds or other reasons, you have the legal right to send a notice under Section 138 of the Negotiable Instruments Act, 1881. This notice is mandatory and must be sent within 30 days of receiving the cheque return memo. Failure to send a proper notice can invalidate your case.",
    sections: chequeBounceSections,
    finalCta: {
      text: "Time is critical in cheque bounce cases. Don't miss the 30-day deadline. Send your Section 138 notice today.",
      buttonText: "Draft Cheque Bounce Notice Now",
    },
  },

  story: {
    badge: "SUCCESS STORY",
    title: "How Section 138 Notice Recovered",
    titleHighlight: "₹12 Lakhs",
    description:
      "Priya received a bounced cheque of ₹12 lakhs. She sent a legally compliant Section 138 notice through VakilTech. Within 15 days, the drawer paid the full amount plus compensation to avoid criminal prosecution.",
    features: [
      {
        icon: "document",
        title: "Criminal Prosecution Threat",
        description:
          "Section 138 allows both civil and criminal action, making it highly effective for recovery.",
        badge: { text: "Strong Deterrent", color: "warning" },
      },
      {
        icon: "speedometer",
        title: "Mandatory Timeline",
        description:
          "Notice must be sent within 30 days of cheque dishonour, giving 15 days to pay.",
      },
      {
        icon: "wallet",
        title: "Double Recovery",
        description:
          "Recover the cheque amount plus compensation up to twice the cheque value.",
        badge: { text: "2x Compensation", color: "success" },
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Section 138 of",
    titleHighlight: "Negotiable Instruments Act",
    description:
      "Cheque bounce is a criminal offence under Section 138 of the Negotiable Instruments Act, 1881. The drawer can face imprisonment up to 2 years and/or fine up to twice the cheque amount.",
    expertInsight: {
      quote:
        "A Section 138 notice has a 90% success rate because the threat of criminal prosecution motivates quick payment.",
    },
    accordionSections: [
      {
        id: "legal-requirements",
        title: "Legal Requirements for Section 138",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Notice must be sent within",
            highlight: "30 days of cheque return",
          },
          {
            text: "Drawer gets",
            highlight: "15 days to make payment",
          },
          { text: "Criminal complaint if payment not made within 15 days" },
          { text: "Punishment: Up to 2 years imprisonment and/or fine" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["cheque-bounce"],

  faqs: [
    {
      id: "what-is-section-138",
      question: "What is Section 138 of the Negotiable Instruments Act?",
      answer:
        "Section 138 makes it a criminal offence to issue a cheque that bounces due to insufficient funds or other reasons. The drawer (issuer) can face imprisonment up to 2 years and/or a fine up to twice the cheque amount. This provision ensures cheque payment honesty.",
    },
    {
      id: "deadline-for-notice",
      question: "What is the deadline for sending a cheque bounce notice?",
      answer:
        "You must send the legal notice within 30 days of receiving the cheque return memo from your bank. This is a strict statutory deadline. If you miss this 30-day window, you may lose your right to file a criminal complaint under Section 138.",
    },
    {
      id: "response-time",
      question: "How much time does the drawer get to pay?",
      answer:
        "After receiving your notice, the drawer has 15 days to make the payment. If payment is not made within these 15 days, you can file a criminal complaint in court within 30 days of the expiry of the 15-day period.",
    },
    {
      id: "what-if-no-payment",
      question: "What happens if the drawer doesn't pay after the notice?",
      answer:
        "If the drawer fails to pay within 15 days of receiving the notice, you can file a criminal complaint under Section 138 in the appropriate Magistrate court. If convicted, the drawer can face imprisonment and/or fine. The court can also order payment of the cheque amount plus compensation.",
    },
    {
      id: "compensation-amount",
      question: "Can I claim compensation in addition to the cheque amount?",
      answer:
        "Yes. Under Section 138, if the drawer is convicted, the court can order payment of the cheque amount plus compensation up to twice the cheque amount. This is in addition to any fine or imprisonment imposed.",
    },
    {
      id: "criminal-or-civil",
      question: "Is cheque bounce a criminal or civil matter?",
      answer:
        "Cheque bounce under Section 138 is primarily a criminal offence, but it also has civil implications. You can pursue both criminal prosecution (under Section 138) and civil recovery (through a civil suit). Most people prefer criminal action as it's faster and more effective.",
    },
    {
      id: "reasons-for-bounce",
      question: "What reasons for cheque bounce are covered under Section 138?",
      answer:
        "Section 138 covers cheques that bounce due to insufficient funds or if the amount exceeds the arrangement with the bank. It does not cover cheques bounced due to signature mismatch, overwriting, or post-dated cheques presented before the date (though these may have other remedies).",
    },
    {
      id: "cost-of-notice",
      question: "How much does a Section 138 notice cost?",
      answer:
        "VakilTech offers Section 138 cheque bounce notice drafting and sending for ₹1,499, including professional drafting by advocates experienced in negotiable instruments law, unlimited revisions, registered post delivery, and legal support throughout the process.",
    },
  ],
};

/* =============================================================================
 * OUTSTANDING PAYMENT DATA
 * ============================================================================= */

export const outstandingPaymentData: NoticeTypeData = {
  slug: "legal-notice-for-outstanding-payment",
  title: "Legal Notice for Outstanding Payment",
  cluster: "money-recovery",

  seo: {
    title: "Legal Notice for Outstanding Payment | B2B Recovery ₹1499",
    description:
      "Recover outstanding business payments and unpaid invoices. Professional legal notice for MSMEs and service providers. ₹1499 all inclusive.",
    keywords: [
      "legal notice for outstanding payment",
      "unpaid invoice legal notice",
      "business payment recovery",
    ],
  },

  hero: {
    badge: "BUSINESS PAYMENT RECOVERY",
    headline: "Recover Outstanding Business Payments Fast!",
    subheadline:
      "Specialized legal notices for unpaid invoices and business dues",
    flipWords: [
      "B2B Recovery",
      "Invoice Payment",
      "MSME Protection",
      "Quick Settlement",
    ],
    badges: [
      { icon: "clock", text: "Fast\nRecovery" },
      { icon: "shield", text: "MSMED Act\nProtection" },
    ],
  },

  content: {
    h1: "Legal Notice for Outstanding Payment - Business Recovery",
    introduction:
      "If your business is owed payment for goods or services delivered, a legal notice for outstanding payment is your first step toward recovery. This notice formally demands payment and creates legal grounds for further action if payment is not received.",
    sections: outstandingPaymentSections,
    finalCta: {
      text: "Don't let unpaid invoices hurt your business cash flow. Send a professional payment demand notice today.",
      buttonText: "Draft Payment Recovery Notice",
    },
  },

  story: {
    badge: "BUSINESS SUCCESS",
    title: "Recovered Outstanding Dues of",
    titleHighlight: "₹15 Lakhs",
    description:
      "A Mumbai-based IT company was owed ₹15 lakhs by a client for 8 months. After sending a legal notice through VakilTech citing MSMED Act provisions, they received full payment within 30 days plus interest.",
    features: [
      {
        icon: "document",
        title: "MSMED Act Protection",
        description:
          "For MSMEs, you can claim interest on delayed payments under MSMED Act.",
        badge: { text: "18% Interest", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Faster Than Court",
        description:
          "Most B2B disputes settle within 15-30 days after receiving a formal notice.",
      },
      {
        icon: "wallet",
        title: "Preserve Relationship",
        description:
          "Resolve payment disputes professionally without burning business bridges.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Business Payment",
    titleHighlight: "Recovery Laws",
    description:
      "Business payment recovery is governed by the Indian Contract Act, MSMED Act, 2006 (for MSMEs), and commercial contract terms.",
    expertInsight: {
      quote:
        "80% of B2B payment disputes are resolved after sending a professionally drafted legal notice, avoiding costly litigation.",
    },
    accordionSections: [
      {
        id: "legal-rights",
        title: "Legal Rights for Payment Recovery",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Contract breach under",
            highlight: "Indian Contract Act, 1872",
          },
          {
            text: "MSME can claim",
            highlight: "compound interest at 18% per annum",
          },
          { text: "Right to approach MSME Facilitation Council" },
          { text: "Civil suit for recovery of dues and damages" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["outstanding-payment"],

  faqs: [
    {
      id: "what-is-outstanding-payment",
      question: "What is an outstanding payment legal notice?",
      answer:
        "An outstanding payment legal notice is a formal demand sent to a business or individual who has failed to pay for goods or services as per agreed terms. It's commonly used by MSMEs, freelancers, and service providers to recover unpaid invoices and business dues.",
    },
    {
      id: "when-to-send",
      question: "When should I send an outstanding payment notice?",
      answer:
        "Send a notice when payment is overdue beyond the agreed credit period, typically 30-90 days after the invoice date, and after your informal reminders have been ignored. The earlier you send a formal notice, the better your chances of quick recovery.",
    },
    {
      id: "msme-benefits",
      question: "What are the benefits for MSMEs?",
      answer:
        "MSMEs (Micro, Small & Medium Enterprises) have special protection under the MSMED Act, 2006. You can claim compound interest at 18% per annum on delayed payments and approach the MSME Facilitation Council for speedy dispute resolution without court.",
    },
    {
      id: "response-time",
      question: "How long should I give for payment?",
      answer:
        "Typically, give 15-30 days for payment from the date of notice receipt. However, in urgent cases or when payment is severely delayed, you can give a shorter period of 7-10 days. The timeline should be reasonable and mentioned clearly in the notice.",
    },
    {
      id: "interest-claim",
      question: "Can I claim interest on delayed payments?",
      answer:
        "Yes. If your contract specifies interest on delayed payments, you can claim it. For MSMEs, even without a contract clause, you can claim compound interest at 18% per annum under Section 16 of the MSMED Act from the date the payment became due.",
    },
    {
      id: "preserve-relationship",
      question: "Will sending a notice damage the business relationship?",
      answer:
        "A professionally worded legal notice can actually preserve relationships by showing you're serious about payment while still open to resolution. Many businesses understand it's a standard process and respond positively. It's far better than direct litigation.",
    },
    {
      id: "what-documents-needed",
      question: "What documents do I need to provide?",
      answer:
        "You'll need: invoice copies, purchase orders or work agreements, proof of delivery (if goods), email correspondence about payment, bank statements showing payment not received, and any terms & conditions agreed upon.",
    },
    {
      id: "cost-for-b2b",
      question: "How much does a business payment notice cost?",
      answer:
        "VakilTech offers outstanding payment legal notice services for ₹1,499, including drafting by advocates experienced in commercial law, unlimited revisions, registered post delivery, and legal consultation throughout the recovery process.",
    },
  ],
};

/* =============================================================================
 * UNPAID SALARY DATA
 * ============================================================================= */

export const unpaidSalaryData: NoticeTypeData = {
  slug: "legal-notice-for-unpaid-salary",
  title: "Legal Notice for Unpaid Salary",
  cluster: "money-recovery",

  seo: {
    title: "Legal Notice for Unpaid Salary | Employee Rights ₹1499",
    description:
      "Recover unpaid salary, wages, and employment dues. Legal notice for salary non-payment by employer. Fast and effective. ₹1499 all inclusive.",
    keywords: [
      "legal notice for unpaid salary",
      "salary recovery legal notice",
      "non payment of salary",
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
      buttonText: "Draft Salary Recovery Notice",
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
      "Employee salary rights are protected under the Payment of Wages Act, 1936, Industrial Disputes Act, 1947, and various labour laws.",
    expertInsight: {
      quote:
        "Employers settle 75% of unpaid salary cases after receiving legal notice to avoid labour court proceedings and penalties.",
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
          { text: "Can approach Labour Commissioner or Labour Court" },
          { text: "Claim interest and compensation for delay" },
          { text: "Protection against wrongful termination" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["unpaid-salary"],

  faqs: [
    {
      id: "what-is-unpaid-salary-notice",
      question: "What is a legal notice for unpaid salary?",
      answer:
        "A legal notice for unpaid salary is a formal demand sent by an employee to their employer for non-payment of salary, wages, or other employment dues. It asserts the employee's rights under labour laws and demands immediate payment, failing which legal action will be initiated.",
    },
    {
      id: "when-to-send-notice",
      question: "When should I send a salary recovery notice?",
      answer:
        "Send a notice when your employer fails to pay salary on the due date or within 7 days of the pay day as per the Payment of Wages Act. If you've already given verbal or email reminders without success, it's time for a formal legal notice.",
    },
    {
      id: "what-can-i-claim",
      question: "What can I claim in a salary recovery notice?",
      answer:
        "You can claim: unpaid salary for the months worked, bonus and incentives due, provident fund contributions, gratuity (if applicable), notice period salary if terminated without notice, and compensation for delay and mental harassment.",
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
        "For salary disputes, Labour Court is usually faster and more employee-friendly. It's the preferred forum for salary recovery up to certain amounts. For very large amounts or complex employment disputes, civil courts may be approached. Your lawyer will guide you on the best forum.",
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
        "Yes. While the Payment of Wages Act doesn't explicitly provide for interest, you can claim compensation for delay and mental harassment. Courts often award interest at 9-12% per annum on delayed salary payments. If you have an employment contract specifying interest, you can claim that rate.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a salary recovery notice cost?",
      answer:
        "VakilTech charges ₹1,499 for drafting and sending a comprehensive salary recovery legal notice, including consultation with labour law experts, unlimited revisions, registered post delivery, and guidance on further legal steps if needed.",
    },
  ],
};

/* =============================================================================
 * DIVORCE LEGAL NOTICE DATA (FAMILY CLUSTER)
 * ============================================================================= */

export const divorceNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-divorce",
  title: "Legal Notice for Divorce",
  cluster: "family",

  seo: {
    title: "Legal Notice for Divorce | Mutual & Contested Divorce ₹1499",
    description:
      "Send legal notice for divorce proceedings. Expert family law advocates for mutual consent and contested divorce. Confidential and professional. ₹1499.",
    keywords: [
      "legal notice for divorce",
      "divorce legal notice online",
      "divorce notice format",
    ],
  },

  hero: {
    badge: "FAMILY LAW - DIVORCE",
    headline: "Navigate Divorce with Dignity and Legal Clarity",
    subheadline: "Professional legal notices for divorce proceedings",
    flipWords: [
      "Mutual Consent",
      "Contested Divorce",
      "Legal Grounds",
      "Expert Guidance",
    ],
    badges: [
      { icon: "shield", text: "Confidential\nProcess" },
      { icon: "users", text: "Family Law\nExperts" },
    ],
  },

  content: {
    h1: "Legal Notice for Divorce in India",
    introduction:
      "A legal notice for divorce is a formal communication sent by one spouse to another expressing the intention to seek divorce and stating the grounds for divorce. While not always mandatory, sending a divorce notice is an important step that demonstrates your serious intent and can facilitate either mutual consent divorce or contested divorce proceedings.",
    sections: [],
    finalCta: {
      text: "Taking the step toward divorce is difficult. Let our experienced family law advocates guide you through the process with sensitivity and legal expertise.",
      buttonText: "Draft Divorce Notice Now",
    },
  },

  story: {
    badge: "CLIENT SUCCESS",
    title: "Achieved Mutual Consent Divorce in",
    titleHighlight: "6 Months",
    description:
      "Anjali sent a divorce notice through VakilTech citing irreconcilable differences. The professionally worded notice led to productive discussions, and the couple agreed to mutual consent divorce, completing the process in just 6 months instead of years of contested litigation.",
    features: [
      {
        icon: "document",
        title: "Multiple Grounds Available",
        description:
          "Adultery, cruelty, desertion, conversion, mental disorder, or mutual consent.",
      },
      {
        icon: "speedometer",
        title: "Mutual Consent is Faster",
        description:
          "Mutual consent divorce takes 6-18 months vs. 2-5 years for contested divorce.",
        badge: { text: "Save Time", color: "success" },
      },
      {
        icon: "wallet",
        title: "Professional Handling",
        description:
          "Sensitive approach that preserves dignity while protecting your legal rights.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Divorce Laws in",
    titleHighlight: "India",
    description:
      "Divorce in India is governed by personal laws: Hindu Marriage Act 1955, Special Marriage Act 1954, Indian Divorce Act 1869 (Christians), Dissolution of Muslim Marriages Act 1939, and Parsi Marriage and Divorce Act 1936.",
    expertInsight: {
      quote:
        "A well-drafted divorce notice often converts a potentially contested divorce into mutual consent, saving years of litigation and emotional stress.",
    },
    accordionSections: [
      {
        id: "grounds-for-divorce",
        title: "Legal Grounds for Divorce",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Adultery - sexual relationship outside marriage" },
          { text: "Cruelty - physical or mental cruelty" },
          { text: "Desertion - abandonment for 2+ years" },
          { text: "Conversion - change of religion" },
          {
            text: "Mutual Consent - both parties agree",
            highlight: "(fastest option)",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["divorce"],

  faqs: [
    {
      id: "what-is-divorce-notice",
      question: "What is a legal notice for divorce?",
      answer:
        "A legal notice for divorce is a formal written communication sent by one spouse to another stating the intention to file for divorce and the grounds for seeking divorce. It serves as an official intimation before filing a divorce petition in court and can sometimes lead to mutual consent divorce through negotiation.",
    },
    {
      id: "is-notice-mandatory",
      question: "Is sending a divorce notice mandatory?",
      answer:
        "No, sending a divorce notice is not strictly mandatory before filing a divorce petition. However, it's highly recommended as it: (1) shows your serious intent, (2) provides an opportunity for reconciliation or mutual consent, (3) gives the other party fair notice, and (4) demonstrates to the court that you attempted resolution before approaching court.",
    },
    {
      id: "mutual-vs-contested",
      question:
        "What's the difference between mutual consent and contested divorce?",
      answer: (
        <div className="space-y-2">
          <p>
            <strong>Mutual Consent Divorce:</strong> Both spouses agree to
            divorce. It's faster (6-18 months), less expensive, and less
            stressful. Requires a joint petition after living separately for 1
            year.
          </p>
          <p>
            <strong>Contested Divorce:</strong> One spouse seeks divorce and the
            other opposes it. Requires proving legal grounds. Takes 2-5 years,
            involves more court appearances, and is more expensive and
            emotionally taxing.
          </p>
        </div>
      ),
    },
    {
      id: "grounds-for-divorce",
      question: "What are valid grounds for divorce in India?",
      answer:
        "Under Hindu Marriage Act: adultery, cruelty (physical/mental), desertion for 2+ years, conversion to another religion, mental disorder, communicable disease (leprosy/VD), renunciation of world, and presumption of death (missing for 7+ years). Additionally, wives can seek divorce for husband's remarriage, rape/sodomy/bestiality after marriage, or non-resumption of cohabitation after maintenance order.",
    },
    {
      id: "how-long-divorce-takes",
      question: "How long does the divorce process take?",
      answer:
        "Mutual consent divorce typically takes 6-18 months, with a mandatory 6-month cooling-off period (can be waived by court in exceptional cases). Contested divorce takes 2-5 years or longer depending on case complexity, grounds, evidence, court backlogs, and whether either party appeals.",
    },
    {
      id: "can-stop-divorce",
      question: "Can the other spouse stop the divorce?",
      answer:
        "In mutual consent divorce, both parties must agree, so either can stop it by withdrawing consent. In contested divorce, the other spouse can defend the case, but if you prove valid legal grounds, the court can grant divorce even if they oppose. However, they can delay the process by filing counter-claims, seeking evidence, or appealing.",
    },
    {
      id: "what-about-children-property",
      question: "What happens to children and property during divorce?",
      answer:
        "Child custody, visitation rights, and child support are decided based on the child's best interests. Property division depends on ownership - jointly owned property is typically divided, while self-acquired property remains with the owner. Alimony/maintenance may be awarded to the financially weaker spouse. All these matters can be settled mutually or decided by the court.",
    },
    {
      id: "privacy-concerns",
      question: "Is the divorce process confidential?",
      answer:
        "Court proceedings are generally public records, but family courts try to maintain some privacy. The initial notice and consultation process with VakilTech is completely confidential. We handle all divorce matters with utmost sensitivity and discretion, ensuring your privacy is protected throughout the legal process.",
    },
    {
      id: "what-if-spouse-abroad",
      question: "Can I send a divorce notice if my spouse is abroad?",
      answer:
        "Yes, you can send a divorce notice to a spouse living abroad. The notice should be sent to their last known address or current foreign address via registered international post or courier. You may also need to serve notice through diplomatic channels or at their last Indian address. Our advocates can guide you on proper service procedures.",
    },
    {
      id: "cost-of-divorce-notice",
      question: "How much does a divorce legal notice cost?",
      answer:
        "VakilTech offers divorce legal notice drafting and sending for ₹1,499, including consultation with experienced family law advocates, drafting based on your specific grounds and circumstances, unlimited revisions, confidential handling, registered post delivery, and guidance on next steps in the divorce process.",
    },
  ],
};

/* =============================================================================
 * MAINTENANCE LEGAL NOTICE DATA (FAMILY CLUSTER)
 * ============================================================================= */

export const maintenanceNoticeData: NoticeTypeData = {
  slug: "maintenance-legal-notice",
  title: "Maintenance Legal Notice",
  cluster: "family",

  seo: {
    title: "Maintenance Legal Notice | Wife/Child Maintenance ₹1499",
    description:
      "Send legal notice for maintenance claim under Section 125 CrPC. Recover alimony and financial support for wife, children, or parents. ₹1499 all inclusive.",
    keywords: [
      "maintenance legal notice",
      "wife maintenance legal notice",
      "alimony legal notice",
    ],
  },

  hero: {
    badge: "MAINTENANCE CLAIMS",
    headline: "Claim Your Right to Financial Support",
    subheadline: "Legal notices for maintenance and alimony claims",
    flipWords: [
      "Section 125 CrPC",
      "Wife's Rights",
      "Child Support",
      "Fair Maintenance",
    ],
    badges: [
      { icon: "shield", text: "Legal\nProtection" },
      { icon: "users", text: "Family Law\nExperts" },
    ],
  },

  content: {
    h1: "Maintenance Legal Notice in India",
    introduction:
      "A maintenance legal notice is sent to claim financial support from a spouse, parent, or adult child who has neglected or refused to maintain their dependent family members. Under Section 125 of CrPC, wives, children, and parents have the legal right to claim maintenance for their basic needs and standard of living.",
    sections: [],
    finalCta: {
      text: "Financial support is your legal right, not a favor. Send a maintenance notice to claim what you're entitled to under law.",
      buttonText: "Draft Maintenance Notice",
    },
  },

  story: {
    badge: "SUCCESSFUL CLAIM",
    title: "Secured Monthly Maintenance of",
    titleHighlight: "₹40,000",
    description:
      "Meera, a homemaker with two children, was abandoned by her husband who stopped providing financial support. After sending a maintenance notice under Section 125 CrPC through VakilTech, the family court ordered her husband to pay ₹40,000 monthly maintenance.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Right",
        description:
          "Section 125 CrPC provides strong rights to wives, children, and parents for maintenance.",
      },
      {
        icon: "speedometer",
        title: "Interim Maintenance Available",
        description:
          "Courts can order interim maintenance within 2-3 months while case is pending.",
        badge: { text: "Quick Relief", color: "success" },
      },
      {
        icon: "wallet",
        title: "Covers All Needs",
        description:
          "Maintenance includes housing, food, clothing, medical care, and education expenses.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Maintenance Laws in",
    titleHighlight: "India",
    description:
      "Maintenance rights are governed by Section 125 CrPC (applicable to all), Hindu Marriage Act, Hindu Adoption and Maintenance Act, Muslim Women Act, and personal laws of different religions.",
    expertInsight: {
      quote:
        "90% of maintenance notices result in either voluntary payment or court-ordered maintenance, ensuring financial security for dependents.",
    },
    accordionSections: [
      {
        id: "who-can-claim",
        title: "Who Can Claim Maintenance",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Wife - if unable to maintain herself",
            highlight: "(Section 125 CrPC)",
          },
          { text: "Children - minor children and adult disabled children" },
          { text: "Parents - elderly parents unable to maintain themselves" },
          { text: "Divorced wife - within limitations period" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["maintenance"],

  faqs: [
    {
      id: "what-is-maintenance-notice",
      question: "What is a maintenance legal notice?",
      answer:
        "A maintenance legal notice is a formal demand sent to a person (usually spouse) claiming financial support under Section 125 of CrPC or personal laws. It requests regular monthly payments to cover living expenses including food, shelter, clothing, medical care, and education for dependents who cannot maintain themselves.",
    },
    {
      id: "who-can-claim-maintenance",
      question: "Who can claim maintenance in India?",
      answer:
        "Under Section 125 CrPC: (1) Wife - if she cannot maintain herself and has not committed adultery, (2) Minor children - legitimate or illegitimate, (3) Major children - if physically or mentally disabled, (4) Parents - if unable to maintain themselves. Each category has specific eligibility conditions that must be met.",
    },
    {
      id: "how-much-maintenance",
      question: "How much maintenance can I claim?",
      answer:
        "There's no fixed formula. Maintenance amount depends on: husband's income and capacity to pay, wife's needs and standard of living during marriage, dependent children's needs, wife's own income (if any), and cost of living in that area. Typically, courts award 25-30% of husband's net income for wife and children combined.",
    },
    {
      id: "when-to-send-notice",
      question: "When should I send a maintenance notice?",
      answer:
        "Send a maintenance notice when: your spouse refuses to provide financial support, you're separated or living apart without maintenance, you're divorced and entitled to alimony, your spouse is earning but not sharing expenses, or immediate financial crisis requires urgent action. The notice can be sent during marriage, separation, or after divorce.",
    },
    {
      id: "interim-maintenance",
      question: "What is interim maintenance?",
      answer:
        "Interim maintenance is temporary financial support ordered by the court during the pendency of the main maintenance case or divorce proceedings. Courts typically grant interim maintenance within 2-3 months of filing, ensuring the dependent doesn't suffer financial hardship while the final case is being decided. It continues until final orders are passed.",
    },
    {
      id: "what-if-husband-unemployed",
      question: "Can I claim maintenance if my husband is unemployed?",
      answer:
        "Yes, unemployment doesn't automatically bar maintenance claims. The court examines: his educational qualifications, age, health, ability to earn, any assets or property owned, and whether unemployment is genuine or deliberate to avoid maintenance. If he's capable of earning but deliberately unemployed, courts can impute income and order maintenance based on his potential earnings.",
    },
    {
      id: "maintenance-after-divorce",
      question: "Can I claim maintenance after divorce?",
      answer:
        "Yes. Under Section 125 CrPC, a divorced woman can claim maintenance if she hasn't remarried and cannot maintain herself. Under Hindu Marriage Act, permanent alimony can be claimed during or after divorce proceedings. Muslim divorced women can claim under Muslim Women Act. Time limits and conditions vary by personal law applicable.",
    },
    {
      id: "how-long-to-get-maintenance",
      question: "How long does it take to get maintenance?",
      answer:
        "Interim maintenance can be granted within 2-3 months of filing the case. Final maintenance orders typically take 6-18 months depending on case complexity, evidence, and court schedules. If the husband voluntarily agrees to pay after receiving the notice, it can be much faster - even within 1-2 months.",
    },
    {
      id: "what-if-not-paid",
      question: "What if maintenance is ordered but not paid?",
      answer:
        "If court-ordered maintenance is not paid, the court can: issue arrest warrant, impose jail sentence up to 1 month for each month's default, attach and sell property, garnish salary directly from employer, or order additional compensation. Continued non-payment can lead to contempt of court charges and stricter penalties.",
    },
    {
      id: "cost-of-maintenance-notice",
      question: "How much does a maintenance legal notice cost?",
      answer:
        "VakilTech offers maintenance legal notice services for ₹1,499, including consultation with family law experts, assessment of your maintenance claim amount, professional drafting citing applicable laws, unlimited revisions, registered post delivery, and guidance on filing maintenance petition if needed.",
    },
  ],
};

/* =============================================================================
 * CRUELTY/DESERTION LEGAL NOTICE DATA (FAMILY CLUSTER)
 * ============================================================================= */

export const crueltyDesertionNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-cruelty-or-desertion",
  title: "Legal Notice for Cruelty or Desertion",
  cluster: "family",

  seo: {
    title: "Legal Notice for Cruelty/Desertion | Matrimonial Cruelty ₹1499",
    description:
      "Send legal notice for matrimonial cruelty, harassment, or desertion. Protect your rights under family law. Expert advocates. ₹1499 all inclusive.",
    keywords: [
      "cruelty legal notice",
      "desertion legal notice",
      "matrimonial cruelty notice",
    ],
  },

  hero: {
    badge: "MATRIMONIAL DISPUTES",
    headline: "Stand Against Cruelty and Desertion",
    subheadline: "Legal protection against harassment and abandonment",
    flipWords: [
      "Mental Cruelty",
      "Physical Abuse",
      "Desertion Cases",
      "Legal Protection",
    ],
    badges: [
      { icon: "shield", text: "Legal\nProtection" },
      { icon: "users", text: "Sensitive\nHandling" },
    ],
  },

  content: {
    h1: "Legal Notice for Cruelty or Desertion",
    introduction:
      "If you're facing physical or mental cruelty from your spouse, or if your spouse has deserted you without reasonable cause, you have strong legal remedies. A legal notice for cruelty or desertion formally documents the abuse or abandonment and can be grounds for divorce, maintenance, or criminal action depending on the severity.",
    sections: [],
    finalCta: {
      text: "Don't suffer in silence. Cruelty and desertion are valid legal grounds for action. Protect yourself and your rights today.",
      buttonText: "Send Cruelty/Desertion Notice",
    },
  },

  story: {
    badge: "PROTECTION GRANTED",
    title: "Escaped Abusive Marriage with",
    titleHighlight: "Legal Protection",
    description:
      "Deepa faced continuous mental harassment and threats from her husband and in-laws. After sending a legal notice documenting the cruelty through VakilTech, she filed for divorce and obtained protection orders. The court granted her divorce along with maintenance within 18 months.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Grounds",
        description:
          "Cruelty and desertion are valid grounds for divorce under all personal laws.",
      },
      {
        icon: "speedometer",
        title: "Protection Orders Available",
        description:
          "Can obtain protection orders and maintenance even before divorce is granted.",
        badge: { text: "Immediate Relief", color: "warning" },
      },
      {
        icon: "wallet",
        title: "Criminal Action Possible",
        description:
          "Severe cruelty can lead to criminal cases under IPC Section 498A (dowry harassment).",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Cruelty & Desertion",
    titleHighlight: "Laws",
    description:
      "Cruelty and desertion are covered under Hindu Marriage Act 1955, Special Marriage Act 1954, and IPC Section 498A for dowry-related cruelty. Evidence and documentation are crucial.",
    expertInsight: {
      quote:
        "Proper documentation of cruelty incidents strengthens your case tremendously. A legal notice creates formal record before approaching court.",
    },
    accordionSections: [
      {
        id: "what-constitutes-cruelty",
        title: "What Constitutes Cruelty",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Physical violence or threat of violence" },
          { text: "Mental harassment, taunts, and humiliation" },
          { text: "Dowry demands and harassment" },
          { text: "Forced unnatural acts or denial of conjugal rights" },
          {
            text: "Desertion - abandonment for",
            highlight: "2+ continuous years",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["cruelty"],

  faqs: [
    {
      id: "what-is-cruelty",
      question: "What constitutes cruelty in a marriage?",
      answer:
        "Cruelty includes both physical and mental cruelty. Physical cruelty: beating, physical violence, causing bodily harm. Mental cruelty: continuous harassment, taunts, humiliation, dowry demands, denial of basic needs, threats, false accusations, unnatural sexual acts, preventing from working, or any behavior that makes living together unbearable. Mental cruelty can be subtle but equally harmful.",
    },
    {
      id: "what-is-desertion",
      question: "What constitutes desertion under law?",
      answer:
        "Desertion means willful abandonment of one spouse by the other without reasonable cause and without consent. Key elements: (1) Factual separation - living apart, (2) Intention to desert - deliberate abandonment, (3) Without reasonable cause or consent, (4) Continuous period of 2+ years. Simply living apart due to work or mutual agreement is not desertion.",
    },
    {
      id: "need-proof",
      question: "Do I need proof of cruelty or desertion?",
      answer:
        "Yes, evidence strengthens your case. For cruelty: medical records of injuries, photographs, witness statements, WhatsApp/email messages, audio/video recordings, police complaints, and your own detailed testimony. For desertion: evidence showing spouse left voluntarily, attempts to contact them, their refusal to return, and timeline documentation. The legal notice itself serves as evidence.",
    },
    {
      id: "can-lead-to-divorce",
      question: "Can cruelty or desertion lead to divorce?",
      answer:
        "Yes, both are valid grounds for divorce under Hindu Marriage Act, Special Marriage Act, and other personal laws. For cruelty, even a single serious incident can be sufficient, or pattern of mental cruelty over time. For desertion, you must prove continuous desertion for at least 2 years. Courts take these grounds seriously and grant divorce if proved.",
    },
    {
      id: "criminal-action",
      question: "Can I file criminal charges for cruelty?",
      answer:
        "Yes, under Section 498A IPC (cruelty by husband or his relatives), if cruelty is linked to dowry demands or likely to drive woman to suicide. This is a cognizable, non-bailable offense punishable with up to 3 years imprisonment and fine. You can also file under domestic violence act for protection orders. Physical assault can be charged under IPC assault provisions.",
    },
    {
      id: "maintenance-during-cruelty",
      question: "Can I claim maintenance while suffering cruelty?",
      answer:
        "Absolutely. You can send a cruelty notice and simultaneously or subsequently file for maintenance under Section 125 CrPC or personal laws. If you've left the matrimonial home due to cruelty, you're still entitled to maintenance. The court can grant interim maintenance within 2-3 months while the main case is pending.",
    },
    {
      id: "what-if-in-laws-harass",
      question: "What if in-laws are causing the cruelty?",
      answer:
        "You can send notices to both your spouse and in-laws. Under Section 498A IPC, relatives of the husband are also liable for cruelty and harassment. In divorce proceedings, cruelty by in-laws is considered if your spouse didn't protect you or was complicit. You can name all parties involved in the legal notice and any criminal complaint.",
    },
    {
      id: "protection-orders",
      question: "Can I get immediate protection from cruelty?",
      answer:
        "Yes. Under the Protection of Women from Domestic Violence Act, 2005, you can obtain: protection orders (prohibiting violence), residence orders (right to stay in matrimonial home), monetary relief (maintenance), custody orders (for children), and compensation orders. These can be obtained relatively quickly, within 1-2 months of filing.",
    },
    {
      id: "reconciliation-possible",
      question: "What if I want to reconcile after sending the notice?",
      answer:
        "Sending a legal notice doesn't close the door to reconciliation. In fact, many notices lead to realization and positive change. If genuine reconciliation occurs, you can withdraw or not proceed with legal action. However, maintain documentation in case the behavior repeats. Courts also encourage reconciliation through mediation and counseling.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a cruelty/desertion notice cost?",
      answer:
        "VakilTech charges ₹1,499 for drafting and sending cruelty or desertion legal notices, including sensitive consultation with family law experts, detailed documentation of incidents, professional drafting with legal grounds, unlimited revisions, confidential handling, registered post delivery, and guidance on further legal steps including protection orders if needed.",
    },
  ],
};

/* =============================================================================
 * TENANT LEGAL NOTICE DATA (TENANT-PROPERTY CLUSTER)
 * ============================================================================= */

export const tenantNoticeData: NoticeTypeData = {
  slug: "legal-notice-to-tenant",
  title: "Legal Notice to Tenant",
  cluster: "tenant-property",

  seo: {
    title: "Legal Notice to Tenant | Eviction Notice Format ₹1499",
    description:
      "Send legal notice to tenant for eviction, rent default, or property damage. Lawful tenant eviction process. Professional drafting. ₹1499 all inclusive.",
    keywords: [
      "legal notice to tenant",
      "tenant eviction notice",
      "eviction notice format",
    ],
  },

  hero: {
    badge: "LANDLORD RIGHTS",
    headline: "Protect Your Property Rights as a Landlord",
    subheadline: "Legal notices for tenant eviction and rent recovery",
    flipWords: [
      "Lawful Eviction",
      "Rent Recovery",
      "Property Rights",
      "Legal Protection",
    ],
    badges: [
      { icon: "shield", text: "Rent Act\nCompliance" },
      { icon: "clock", text: "Proper Legal\nProcess" },
    ],
  },

  content: {
    h1: "Legal Notice to Tenant in India",
    introduction:
      "If you're a landlord facing issues with a tenant—whether it's non-payment of rent, property damage, unauthorized subletting, or you need the property for personal use—a legal notice to tenant is the first formal step toward resolution or eviction. Following the proper legal process is crucial to avoid illegal eviction charges.",
    sections: [],
    finalCta: {
      text: "Don't risk illegal eviction charges. Follow the lawful process and send a proper legal notice to your tenant today.",
      buttonText: "Send Tenant Eviction Notice",
    },
  },

  story: {
    badge: "LANDLORD SUCCESS",
    title: "Evicted Non-Paying Tenant in",
    titleHighlight: "4 Months",
    description:
      "Ramesh's tenant hadn't paid rent for 8 months. After sending a properly drafted eviction notice through VakilTech citing rent default under Rent Control Act, followed by legal proceedings, the court granted eviction within 4 months.",
    features: [
      {
        icon: "document",
        title: "Multiple Legal Grounds",
        description:
          "Evict for rent arrears, personal use, property damage, or unauthorized subletting.",
      },
      {
        icon: "speedometer",
        title: "Notice Period Required",
        description:
          "Must give proper notice period as per rent agreement or rent control laws.",
        badge: { text: "Lawful Process", color: "warning" },
      },
      {
        icon: "wallet",
        title: "Recover Dues & Possession",
        description:
          "Can claim unpaid rent, damages, and legal costs along with eviction.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Tenant Eviction",
    titleHighlight: "Laws",
    description:
      "Tenant-landlord disputes are governed by Transfer of Property Act 1882, state-specific Rent Control Acts, and contractual rent agreement terms.",
    expertInsight: {
      quote:
        "70% of tenant eviction notices result in voluntary vacation or rent payment, avoiding lengthy court battles.",
    },
    accordionSections: [
      {
        id: "grounds-for-eviction",
        title: "Legal Grounds for Tenant Eviction",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Non-payment of rent for 2+ months" },
          {
            text: "Personal use - landlord needs property",
            highlight: "(bona fide requirement)",
          },
          { text: "Unauthorized subletting or assignment" },
          { text: "Property damage or misuse" },
          { text: "Tenant has alternative accommodation" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["tenant-eviction"],

  faqs: [
    {
      id: "when-can-evict-tenant",
      question: "When can a landlord legally evict a tenant?",
      answer:
        "A landlord can evict a tenant for: non-payment of rent beyond grace period, landlord's bona fide personal requirement of property, unauthorized subletting, property damage or misuse, tenant having alternative suitable accommodation, or expiry of lease term (in some states). Specific grounds vary by state rent control laws.",
    },
    {
      id: "notice-period-required",
      question: "What notice period must be given to tenant?",
      answer:
        "Notice period depends on: rent agreement terms (typically 1-3 months), state rent control laws (some require 15 days, others 1-3 months), and reason for eviction. For rent default, shorter notice (15-30 days) may suffice. For personal use, longer notice (3-6 months) is often required. Check your state's specific rent laws.",
    },
    {
      id: "can-evict-without-notice",
      question: "Can I evict a tenant without sending legal notice?",
      answer:
        "No, you cannot forcibly evict without proper legal process. Even if tenant has defaulted, you must: send legal notice with proper grounds, give reasonable time to vacate or rectify, and if they don't comply, file eviction suit in court. Forcible eviction without court order can lead to criminal charges against you under IPC.",
    },
    {
      id: "tenant-refuses-vacate",
      question: "What if tenant refuses to vacate after notice?",
      answer:
        "If tenant doesn't vacate after the notice period: file an eviction suit in civil court or rent control court (depending on your state), present your case with evidence, obtain court eviction order, and enforce the order with court/police assistance. Timeline varies by state—typically 6-18 months for contested cases.",
    },
    {
      id: "recover-unpaid-rent",
      question: "Can I recover unpaid rent along with eviction?",
      answer:
        "Yes, you can simultaneously claim unpaid rent and eviction. The notice should demand both payment of arrears and vacation of property. The eviction suit can include prayer for recovery of rent dues, damages, and legal costs. Court can pass combined orders for both recovery and eviction.",
    },
    {
      id: "tenant-rights",
      question: "What rights does the tenant have?",
      answer:
        "Tenant rights include: protection from illegal eviction, reasonable notice period, right to defend in court, protection under rent control acts (in applicable areas), right to reasonable rent increases, and right to basic amenities. Tenant can challenge eviction by proving: rent was paid, no alternative accommodation for landlord, or personal use is not genuine.",
    },
    {
      id: "bona-fide-requirement",
      question: "What is bona fide requirement for eviction?",
      answer:
        "Bona fide (genuine) requirement means the landlord genuinely needs the property for: personal or family residence, substantial repairs/reconstruction that require vacancy, or business premises for self. Landlord must prove: genuine need, no ulterior motive, will actually use the property, and hasn't evicted previous tenants on similar grounds repeatedly.",
    },
    {
      id: "property-damage-eviction",
      question: "Can I evict tenant for property damage?",
      answer:
        "Yes, if tenant causes willful damage, structural damage, or uses property in a manner that reduces its value or causes nuisance to neighbors. Document damage with photographs, videos, and witness statements. Include damage claim in the notice along with eviction demand. You can claim repair costs as damages.",
    },
    {
      id: "cost-tenant-notice",
      question: "How much does a tenant eviction notice cost?",
      answer:
        "VakilTech offers tenant eviction notice services for ₹1,499, including consultation on grounds and state rent laws, professional drafting citing applicable rent control acts, compliance with notice period requirements, unlimited revisions, registered post delivery with proof, and guidance on filing eviction suit if tenant doesn't vacate.",
    },
  ],
};

/* =============================================================================
 * RENT ARREARS LEGAL NOTICE DATA (TENANT-PROPERTY CLUSTER)
 * ============================================================================= */

export const rentArrearsNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-rent-arrears",
  title: "Legal Notice for Rent Arrears",
  cluster: "tenant-property",

  seo: {
    title: "Legal Notice for Rent Arrears | Unpaid Rent Recovery ₹1499",
    description:
      "Recover unpaid rent from tenant. Legal notice for rent arrears and payment default. Fast recovery or eviction. ₹1499 all inclusive.",
    keywords: [
      "legal notice for rent arrears",
      "unpaid rent legal notice",
      "rent recovery notice",
    ],
  },

  hero: {
    badge: "RENT RECOVERY",
    headline: "Recover Your Unpaid Rent Legally",
    subheadline: "Professional notices for rent arrears and payment recovery",
    flipWords: [
      "Rent Recovery",
      "Payment Default",
      "Legal Action",
      "Quick Resolution",
    ],
    badges: [
      { icon: "clock", text: "Fast\nRecovery" },
      { icon: "shield", text: "Legal\nProtection" },
    ],
  },

  content: {
    h1: "Legal Notice for Rent Arrears",
    introduction:
      "If your tenant has defaulted on rent payments, a legal notice for rent arrears is your first step toward recovery. This notice formally demands payment of outstanding rent and serves as evidence before filing eviction or recovery proceedings. Acting quickly increases your chances of recovery.",
    sections: [],
    finalCta: {
      text: "Don't let unpaid rent accumulate. Send a legal notice to recover your dues before the situation worsens.",
      buttonText: "Draft Rent Recovery Notice",
    },
  },

  story: {
    badge: "SUCCESSFUL RECOVERY",
    title: "Recovered 6 Months Rent of",
    titleHighlight: "₹2.4 Lakhs",
    description:
      "Suresh's tenant hadn't paid rent for 6 months (₹40,000/month). After sending a rent arrears notice through VakilTech, the tenant cleared ₹2.4 lakhs within 21 days to avoid eviction and court proceedings.",
    features: [
      {
        icon: "document",
        title: "Payment Before Eviction",
        description:
          "Notice gives tenant final chance to clear dues before eviction proceedings.",
      },
      {
        icon: "speedometer",
        title: "Quick Settlement",
        description:
          "Most tenants pay within 15-30 days to avoid eviction and legal costs.",
        badge: { text: "70% Success Rate", color: "success" },
      },
      {
        icon: "wallet",
        title: "Claim Interest & Costs",
        description:
          "Can claim interest on delayed rent plus legal costs and damages.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Rent Recovery",
    titleHighlight: "Laws",
    description:
      "Rent recovery is governed by Transfer of Property Act 1882, state Rent Control Acts, and contractual rent agreement terms.",
    expertInsight: {
      quote:
        "Sending a rent arrears notice recovers dues in 70% cases without eviction, preserving tenancy while protecting landlord rights.",
    },
    accordionSections: [
      {
        id: "recovery-process",
        title: "Legal Process for Rent Recovery",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Send demand notice for",
            highlight: "outstanding rent arrears",
          },
          { text: "Give 15-30 days to clear dues" },
          { text: "File rent recovery suit if not paid" },
          { text: "Can file eviction simultaneously for rent default" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["rent-arrears"],

  faqs: [
    {
      id: "what-is-rent-arrears",
      question: "What is a rent arrears notice?",
      answer:
        "A rent arrears notice is a formal demand sent to a tenant who has failed to pay rent as per the agreement. It specifies the outstanding amount, months of default, any late fees or interest, and gives a deadline for payment, failing which legal action (eviction or recovery suit) will be initiated.",
    },
    {
      id: "when-to-send",
      question: "When should I send a rent arrears notice?",
      answer:
        "Send immediately when rent is overdue beyond grace period (typically after 1-2 months default). The sooner you act, the better your recovery chances. Waiting too long weakens your position and allows arrears to accumulate. If tenant is avoiding contact or giving excuses, formal notice is necessary.",
    },
    {
      id: "how-much-arrears-for-action",
      question: "How many months of arrears justify legal action?",
      answer:
        "Even 1-2 months of rent default is sufficient grounds for legal notice and action. Most landlords act after 2-3 months of non-payment. However, the longer you wait, the harder recovery becomes. Under most rent laws, 2-3 months of consistent non-payment is strong grounds for eviction.",
    },
    {
      id: "payment-timeline",
      question: "How much time should I give for payment?",
      answer:
        "Typically give 15-30 days for payment from receipt of notice. For large arrears (6+ months), you can give 30-45 days. The timeline should be reasonable but firm. If tenant requests more time, you can negotiate, but get written commitment and partial payment upfront.",
    },
    {
      id: "interest-on-rent",
      question: "Can I claim interest on delayed rent?",
      answer:
        "Yes, if your rent agreement includes an interest clause for delayed payment, you can claim it as per the agreed rate. Even without a clause, you can claim interest at 9-12% per annum in your court suit. Include interest calculation in the notice to show the total amount due.",
    },
    {
      id: "recovery-vs-eviction",
      question: "Should I focus on recovery or eviction?",
      answer:
        "It depends on your goal. If you want to continue the tenancy and just need payment, focus on recovery first. If you want the tenant out, combine rent recovery with eviction demand. Most notices do both: demand payment within timeline, and state that eviction proceedings will be initiated if not paid. This gives maximum leverage.",
    },
    {
      id: "tenant-claims-disputes",
      question: "What if tenant disputes the arrears amount?",
      answer:
        "Tenant may claim they paid (without receipts) or dispute the amount due. This is why maintaining proper records is crucial: rent receipts, bank statements, rent agreement, and communication records. If dispute is genuine, try to reconcile accounts. If tenant is avoiding payment, proceed with legal action with your documented evidence.",
    },
    {
      id: "partial-payment",
      question: "What if tenant pays only partial rent?",
      answer:
        "You can accept partial payment while continuing the notice for balance amount. However, accepting partial payment might weaken your eviction case in some jurisdictions. Clearly state in writing that partial payment is without prejudice to your rights and full amount is still due. Consult your lawyer before accepting partial payments during eviction proceedings.",
    },
    {
      id: "cost-rent-notice",
      question: "How much does a rent arrears notice cost?",
      answer:
        "VakilTech offers rent arrears notice services for ₹1,499, including detailed calculation of outstanding rent, interest, and late fees, professional drafting citing rent agreement and applicable laws, notice period as per legal requirements, unlimited revisions, registered post delivery with proof, and guidance on filing recovery suit or eviction if needed.",
    },
  ],
};

/* =============================================================================
 * EVICTION LEGAL NOTICE DATA (TENANT-PROPERTY CLUSTER)
 * ============================================================================= */

export const evictionNoticeData: NoticeTypeData = {
  slug: "eviction-legal-notice",
  title: "Eviction Legal Notice",
  cluster: "tenant-property",

  seo: {
    title: "Eviction Legal Notice | Tenant Eviction Process ₹1499",
    description:
      "Lawful tenant eviction process with proper legal notice. Grounds, notice period, and eviction procedure. Expert drafting. ₹1499 all inclusive.",
    keywords: [
      "eviction legal notice",
      "tenant eviction notice format",
      "eviction notice",
    ],
  },

  hero: {
    badge: "LAWFUL EVICTION",
    headline: "Evict Tenants Through Proper Legal Process",
    subheadline: "Comprehensive eviction notices following rent control laws",
    flipWords: [
      "Lawful Eviction",
      "Rent Act Compliance",
      "Property Recovery",
      "Legal Process",
    ],
    badges: [
      { icon: "shield", text: "Avoid Illegal\nEviction" },
      { icon: "clock", text: "Proper Notice\nPeriod" },
    ],
  },

  content: {
    h1: "Eviction Legal Notice in India",
    introduction:
      "Evicting a tenant requires strict adherence to legal procedures. A properly drafted eviction legal notice is mandatory before filing eviction proceedings. It must state valid legal grounds, provide adequate notice period, and comply with state rent control laws. Failure to follow proper procedure can result in charges of illegal eviction against you.",
    sections: [],
    finalCta: {
      text: "Follow the law, protect your rights. Send a legally compliant eviction notice today.",
      buttonText: "Draft Eviction Notice Now",
    },
  },

  story: {
    badge: "SUCCESSFUL EVICTION",
    title: "Lawful Eviction Completed in",
    titleHighlight: "5 Months",
    description:
      "Kavita needed to evict her tenant for bona fide personal use. She sent a proper eviction notice through VakilTech giving 3 months' notice, then filed eviction suit. Following the correct legal process, court granted eviction within 5 months without complications.",
    features: [
      {
        icon: "document",
        title: "Multiple Eviction Grounds",
        description:
          "Evict for personal use, rent default, subletting, damage, or other valid grounds.",
      },
      {
        icon: "speedometer",
        title: "State-Specific Process",
        description:
          "Notice period and process vary by state rent control laws—must be complied with.",
        badge: { text: "Legal Compliance", color: "warning" },
      },
      {
        icon: "wallet",
        title: "Avoid Illegal Eviction Charges",
        description:
          "Proper notice protects you from criminal charges and tenant counter-suits.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Eviction Process",
    titleHighlight: "Laws",
    description:
      "Eviction is governed by Transfer of Property Act 1882, state-specific Rent Control Acts, and Protection from Eviction Act in some states.",
    expertInsight: {
      quote:
        "80% of eviction disputes are won by landlords who follow proper notice procedure. Illegal eviction attempts often backfire with criminal charges.",
    },
    accordionSections: [
      {
        id: "eviction-procedure",
        title: "Lawful Eviction Procedure",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Step 1: Send eviction notice with",
            highlight: "valid legal grounds",
          },
          { text: "Step 2: Give notice period as per state law (1-6 months)" },
          { text: "Step 3: If tenant doesn't vacate, file eviction suit" },
          { text: "Step 4: Obtain court eviction order" },
          { text: "Step 5: Execute order with police/court assistance" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["tenant-eviction"],

  faqs: [
    {
      id: "valid-grounds",
      question: "What are valid grounds for eviction in India?",
      answer:
        "Valid grounds include: (1) Bona fide personal requirement of landlord/family, (2) Rent arrears for 2+ months, (3) Unauthorized subletting/assignment, (4) Property damage or misuse, (5) Property needed for substantial repairs/reconstruction, (6) Tenant has alternative suitable accommodation, (7) Lease period expired (in non-rent-controlled areas). Specific grounds vary by state rent control acts.",
    },
    {
      id: "notice-period-state",
      question: "What is the notice period for eviction by state?",
      answer:
        "Notice periods vary: Maharashtra: 1 month for monthly tenancy, Delhi: 15 days minimum, Karnataka: 15 days-3 months depending on grounds, Tamil Nadu: 1 month for monthly rent, West Bengal: 15 days-3 months. Most states require 1-3 months for personal use, 15-30 days for rent default. Always check your state's specific rent control law or consult a lawyer.",
    },
    {
      id: "illegal-eviction",
      question: "What is illegal eviction?",
      answer:
        "Illegal eviction includes: forcibly removing tenant without court order, cutting off utilities (water/electricity) to force tenant out, changing locks while tenant is away, removing tenant's belongings, using violence or threats, or evicting without proper notice and legal process. Illegal eviction is a criminal offense punishable with imprisonment and fine under IPC Section 447 (criminal trespass).",
    },
    {
      id: "tenant-refuses-vacate",
      question: "What if tenant refuses to vacate after notice?",
      answer:
        "If tenant doesn't vacate after notice period: (1) File eviction suit in appropriate court (civil/rent control court), (2) Present evidence of notice, grounds, and compliance with law, (3) Attend hearings (tenant will get opportunity to defend), (4) If court rules in your favor, obtain eviction order, (5) Execute order with police/court officer. Process takes 6-24 months depending on case complexity and state.",
    },
    {
      id: "bona-fide-requirement-proof",
      question: "How to prove bona fide requirement for eviction?",
      answer:
        "To prove genuine personal need: show you don't own other suitable property in the area, demonstrate actual intention to occupy (not just to increase rent), provide affidavit of requirement, show family size requires the property, prove current residence is inadequate, and commit to occupying within reasonable time. Courts scrutinize bona fide claims carefully to prevent abuse. Merely wanting higher rent is not bona fide.",
    },
    {
      id: "can-evict-old-tenant",
      question: "Can I evict a tenant who has lived for 20+ years?",
      answer:
        "Yes, long tenancy doesn't give permanent rights (though some states have stronger tenant protections for long-term tenants). You still need valid grounds: bona fide requirement, rent arrears, or other legal grounds. However, courts may scrutinize your bona fide claim more carefully. Some states require longer notice period for long-term tenants. Follow proper legal process regardless of tenancy duration.",
    },
    {
      id: "eviction-without-rent-agreement",
      question: "Can I evict tenant without written rent agreement?",
      answer:
        "Yes, even without written agreement, if there's oral tenancy or evidence of rent payment (bank transfers, receipts), you can evict. Prove tenancy through: bank statements showing rent received, witness testimony, postal address records, or tenant's own admissions. Eviction is harder without written agreement but not impossible. Notice must give proper grounds and notice period.",
    },
    {
      id: "tenant-defense",
      question: "How can tenant defend against eviction?",
      answer:
        "Tenant can defend by: proving rent was paid (if eviction for rent default), challenging bona fide requirement (landlord has other property), showing no alternative accommodation available, proving landlord's bad faith (wants higher rent), claiming repairs can be done without eviction, or showing procedural defects in notice. Strong tenant defenses can delay or defeat eviction.",
    },
    {
      id: "cost-eviction-notice",
      question: "How much does an eviction notice cost?",
      answer:
        "VakilTech offers eviction notice services for ₹1,499, including consultation on valid grounds under your state rent control laws, proper notice period calculation, professional drafting with legal compliance, citation of applicable state rent acts, unlimited revisions, registered post delivery with acknowledgment, and guidance on filing eviction suit if tenant doesn't vacate voluntarily.",
    },
  ],
};

/* =============================================================================
 * BUILDER LEGAL NOTICE DATA (BUILDER-CONSUMER CLUSTER)
 * ============================================================================= */

export const builderNoticeData: NoticeTypeData = {
  slug: "legal-notice-to-builder",
  title: "Legal Notice to Builder",
  cluster: "builder-consumer",

  seo: {
    title: "Legal Notice to Builder | Property Delay Notice ₹1499",
    description:
      "Send legal notice to builder for possession delay, defects, or refund. RERA provisions for property buyers. Expert drafting. ₹1499 all inclusive.",
    keywords: [
      "legal notice to builder",
      "builder delay legal notice",
      "rera notice",
    ],
  },

  hero: {
    badge: "PROPERTY BUYER RIGHTS",
    headline: "Hold Builders Accountable for Delays and Defects",
    subheadline: "Legal notices for property buyers under RERA",
    flipWords: [
      "RERA Protection",
      "Possession Delay",
      "Quality Defects",
      "Refund Claims",
    ],
    badges: [
      { icon: "shield", text: "RERA\nProtection" },
      { icon: "clock", text: "Penalty &\nCompensation" },
    ],
  },

  content: {
    h1: "Legal Notice to Builder for Delay or Default",
    introduction:
      "If your builder has delayed possession, delivered a defective property, or violated the buyer-builder agreement, you have strong rights under RERA (Real Estate Regulation Act) 2016. A legal notice to builder is the first step to claim compensation, refund, or enforce your rights as a property buyer.",
    sections: [],
    finalCta: {
      text: "Don't let builders exploit you. Assert your RERA rights and send a legal notice today.",
      buttonText: "Send Builder Notice Now",
    },
  },

  story: {
    badge: "BUYER VICTORY",
    title: "Recovered ₹25 Lakhs + Compensation from",
    titleHighlight: "Delayed Project",
    description:
      "Amit's flat possession was delayed by 3 years. After sending a RERA-based legal notice through VakilTech, he filed a RERA complaint. The builder was ordered to pay ₹25 lakhs refund plus ₹8 lakhs compensation for the delay.",
    features: [
      {
        icon: "document",
        title: "Strong RERA Protection",
        description:
          "RERA provides statutory remedies for buyers against builder defaults.",
        badge: { text: "Buyer Protection", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Fast RERA Adjudication",
        description:
          "RERA authorities decide cases within 60-90 days, much faster than courts.",
      },
      {
        icon: "wallet",
        title: "Refund + Interest + Compensation",
        description:
          "Can claim full refund with interest at prescribed rate plus compensation for delay.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "RERA &",
    titleHighlight: "Property Buyer Rights",
    description:
      "Property buyer rights are protected under Real Estate (Regulation and Development) Act 2016, Consumer Protection Act 2019, and buyer-builder agreements.",
    expertInsight: {
      quote:
        "RERA has revolutionized property buyer protection. 85% of RERA complaints result in favorable orders for buyers within 6 months.",
    },
    accordionSections: [
      {
        id: "rera-rights",
        title: "Property Buyer Rights Under RERA",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to timely possession as per",
            highlight: "registered agreement",
          },
          {
            text: "Refund with interest if possession delayed beyond grace period",
          },
          { text: "Compensation for defects and quality issues" },
          { text: "Interest on delayed possession at prescribed rate" },
          { text: "Right to approach RERA authority for fast resolution" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["builder-delay"],

  faqs: [
    {
      id: "when-send-builder-notice",
      question: "When should I send a legal notice to builder?",
      answer:
        "Send a notice when: possession is delayed beyond agreed date + grace period (if any), builder is not responding to complaints, property has major defects or quality issues, builder violates buyer agreement terms, you want refund due to delay, or builder has deviated from approved plans. Notice is required before approaching RERA or consumer forum.",
    },
    {
      id: "what-is-rera",
      question: "What is RERA and how does it protect property buyers?",
      answer:
        "RERA (Real Estate Regulation Act) 2016 is a central law protecting property buyers from builder exploitation. Key protections: builders must register projects, deposit 70% of funds in escrow, complete within registered timeline, pay interest on delays, refund with interest if project fails, fix defects within defect liability period, and face penalties for violations. RERA authorities provide fast adjudication (60-90 days) compared to courts.",
    },
    {
      id: "compensation-for-delay",
      question: "What compensation can I claim for possession delay?",
      answer:
        "You can claim: (1) Refund of all amounts paid with interest at prescribed rate (typically SBI MCLR + 2%), (2) OR Possession with compensation for delay period at same interest rate, (3) Additional compensation for mental harassment and loss, (4) Litigation costs. Many buyers claim rent equivalent for the delay period as alternative accommodation cost.",
    },
    {
      id: "defective-property",
      question: "Can I send notice for defective or poor quality property?",
      answer:
        "Yes, if property has: structural defects, seepage/leakage issues, quality different from promised specifications, deviation from approved plans, amenities not provided as promised, or defects within defect liability period (5 years under RERA). Notice should detail all defects with photographs and demand rectification within timeline or compensation.",
    },
    {
      id: "refund-vs-possession",
      question: "Should I claim refund or wait for possession?",
      answer:
        "Consider: how much delay has occurred (3+ years suggests claiming refund), builder's financial health (distressed builders may never complete), whether you still want the property, and market conditions. If project is clearly delayed beyond reasonable time or builder is in financial trouble, claiming refund with interest is often better than waiting indefinitely. You can revise your claim later.",
    },
    {
      id: "rera-complaint-vs-court",
      question: "Should I approach RERA or file a court case?",
      answer:
        "Prefer RERA authority first because: it's much faster (60-90 days vs 2-5 years), no court fee (small nominal fee only), buyer-friendly forum with specialized expertise, and builder non-compliance attracts strict penalties. Court cases are for very large claims or if RERA doesn't have jurisdiction. Consumer forum is alternative for deficiency in service.",
    },
    {
      id: "builder-bankruptcy",
      question: "What if builder is bankrupt or project is stalled?",
      answer:
        "If builder is under IBC (bankruptcy code), you become a financial creditor and can: file claim in NCLT proceedings, vote on resolution plan, and recover from available assets (priority after secured creditors). RERA claims can still be filed. However, recovery may be partial. For stalled projects, check if state has taken over or if buyer association can complete using available funds.",
    },
    {
      id: "grace-period",
      question: "What is grace period for possession delay?",
      answer:
        "Grace period is the buffer time beyond committed possession date during which builder is not liable for delay. Typically 3-6 months as per buyer-builder agreement. Delay is calculated only after grace period ends. Example: Possession date June 2023, grace period 6 months, delay starts from January 2024 onward. Check your agreement for specific grace period clause.",
    },
    {
      id: "cost-builder-notice",
      question: "How much does a legal notice to builder cost?",
      answer:
        "VakilTech offers builder notice services for ₹1,499, including detailed review of buyer-builder agreement and RERA provisions, calculation of delay period and interest, professional drafting citing RERA and consumer law, demand for refund/compensation/possession, unlimited revisions, registered post delivery to builder's registered address, and guidance on filing RERA complaint or consumer case if needed.",
    },
  ],
};

/* =============================================================================
 * PROPERTY POSSESSION LEGAL NOTICE DATA (BUILDER-CONSUMER CLUSTER)
 * ============================================================================= */

export const propertyPossessionNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-property-possession",
  title: "Legal Notice for Property Possession",
  cluster: "builder-consumer",

  seo: {
    title: "Legal Notice for Property Possession | Delayed Possession ₹1499",
    description:
      "Demand timely property possession from builder. Legal notice for possession delay. RERA compensation claims. ₹1499 all inclusive.",
    keywords: [
      "legal notice for property possession",
      "possession delay notice",
      "property handover notice",
    ],
  },

  hero: {
    badge: "POSSESSION DELAY",
    headline: "Demand Your Rightful Property Possession",
    subheadline: "Legal notices for delayed possession and handover disputes",
    flipWords: [
      "Timely Possession",
      "RERA Rights",
      "Delay Compensation",
      "Force Handover",
    ],
    badges: [
      { icon: "shield", text: "RERA\nCompliance" },
      { icon: "clock", text: "Interest on\nDelay" },
    ],
  },

  content: {
    h1: "Legal Notice for Property Possession",
    introduction:
      "If your builder has delayed property possession beyond the agreed timeline, you have the legal right to demand immediate possession or claim compensation and interest for the delay. A legal notice for property possession formally demands handover and sets the stage for RERA complaints or legal action if the builder continues to delay.",
    sections: [],
    finalCta: {
      text: "Stop waiting endlessly for your property. Send a possession demand notice and claim your rights today.",
      buttonText: "Draft Possession Notice",
    },
  },

  story: {
    badge: "POSSESSION SECURED",
    title: "Got Possession After 2 Years Delay +",
    titleHighlight: "₹6L Compensation",
    description:
      "Neha's flat possession was delayed by 2 years. After sending a possession demand notice through VakilTech and filing RERA complaint, she received possession within 3 months and ₹6 lakhs compensation (interest for delay period at 10.75% per annum).",
    features: [
      {
        icon: "document",
        title: "Force Immediate Possession",
        description:
          "Notice creates legal pressure for builder to hand over possession quickly.",
      },
      {
        icon: "speedometer",
        title: "Interest for Delay Period",
        description:
          "Claim interest at prescribed rate for entire delay period beyond grace.",
        badge: { text: "RERA Interest", color: "success" },
      },
      {
        icon: "wallet",
        title: "Possession OR Refund",
        description:
          "Can choose immediate possession with compensation OR full refund with interest.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Property Possession",
    titleHighlight: "Rights",
    description:
      "Property possession rights are protected under RERA 2016, Consumer Protection Act 2019, Transfer of Property Act 1882, and buyer-builder agreements.",
    expertInsight: {
      quote:
        "Possession delay is the most common RERA complaint. 80% of cases result in either immediate possession or refund with interest within 6 months.",
    },
    accordionSections: [
      {
        id: "possession-rights",
        title: "Legal Rights for Property Possession",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to possession on",
            highlight: "committed date (+ grace period)",
          },
          { text: "Interest on delay at SBI MCLR + 2% or as per agreement" },
          { text: "Refund with interest if delay is unreasonable" },
          { text: "Compensation for mental harassment and losses" },
          { text: "File RERA complaint after notice for fast relief" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["builder-delay"],

  faqs: [
    {
      id: "when-possession-due",
      question: "When is possession legally due from builder?",
      answer:
        "Possession is due on the date mentioned in the buyer-builder agreement plus any grace period (typically 3-6 months). Example: Agreement says 'possession by December 2023' with 6-month grace means possession is due by June 2024. Any delay beyond that date entitles you to interest/compensation. If no date is mentioned, reasonable time (typically 3-4 years) is implied.",
    },
    {
      id: "calculate-delay",
      question: "How to calculate possession delay?",
      answer:
        "Delay = Current date - (Committed possession date + Grace period). Example: Committed date: Jan 2022, Grace: 6 months, So possession due: July 2022. If today is Jan 2025, delay is 30 months. Interest/compensation is calculated for these 30 months at prescribed rate (typically 10-11% per annum). Use simple interest calculation.",
    },
    {
      id: "what-if-ready-but-not-offering",
      question:
        "What if property is ready but builder is not offering possession?",
      answer:
        "If construction is complete but builder is delaying handover (often to collect additional charges or due to occupation certificate delay), send immediate possession demand notice. Threaten RERA complaint if not handed over within 15-30 days. You can also claim continued interest/rent for delay period. Builder cannot withhold possession without valid reason.",
    },
    {
      id: "possession-with-conditions",
      question: "Can builder impose conditions for possession?",
      answer:
        "Builder can only demand: pending installments as per payment schedule, property tax/stamp duty/registration (which are buyer's legal obligations), and reasonable possession charges mentioned in agreement. Builder CANNOT demand: extra charges not in agreement, club membership fees, infrastructure charges beyond agreement, or force you to take loan from specific bank. Refuse illegal demands.",
    },
    {
      id: "possession-without-oc",
      question: "Can I take possession without Occupation Certificate (OC)?",
      answer:
        "No, don't take possession without OC. Occupation Certificate certifies the building is safe for occupation and complies with approved plans. Without OC: you cannot get water/electricity connections, property insurance may be invalid, resale is difficult, and home loan disbursement may stop. Insist on OC before possession. Builder's delay in getting OC is not your problem.",
    },
    {
      id: "part-possession",
      question:
        "What if builder offers part possession (flat ready but amenities pending)?",
      answer:
        "You can: accept flat possession but don't pay full amount—hold back 10-15% until amenities are complete, take possession under protest (written statement that amenities are pending), continue claiming delay interest until full project including amenities is complete, or refuse possession until everything including amenities is ready. Document everything in writing.",
    },
    {
      id: "compensation-amount",
      question: "How much compensation can I claim for possession delay?",
      answer:
        "Under RERA: Interest at prescribed rate (SBI MCLR + 2%, currently ~10.75% per annum) calculated on all amounts paid for the entire delay period. Additionally, you can claim: rent equivalent for alternative accommodation, mental harassment compensation (₹50,000-2,00,000 typically), and litigation costs. Total compensation can be 10-20% of property value for 2-3 years delay.",
    },
    {
      id: "should-take-possession",
      question: "Should I take possession even if property has defects?",
      answer:
        "Take possession under protest: write detailed defect list, take photographs/videos of all defects, give written notice to builder about defects with rectification timeline, and mention you're taking possession without prejudice to rights. This way you get possession (stop delay interest running) but can still claim rectification. However, for major structural defects, consider refusing possession until fixed.",
    },
    {
      id: "cost-possession-notice",
      question: "How much does a property possession notice cost?",
      answer:
        "VakilTech offers property possession notice services for ₹1,499, including review of agreement and possession timeline, calculation of delay period and interest, professional drafting citing RERA and agreement clauses, demand for immediate possession with compensation, unlimited revisions, registered post delivery, and guidance on filing RERA complaint if possession is not offered within notice period.",
    },
  ],
};

/* =============================================================================
 * CONSUMER COMPLAINT LEGAL NOTICE DATA (BUILDER-CONSUMER CLUSTER)
 * ============================================================================= */

export const consumerComplaintNoticeData: NoticeTypeData = {
  slug: "consumer-complaint-legal-notice",
  title: "Consumer Complaint Legal Notice",
  cluster: "builder-consumer",

  seo: {
    title: "Consumer Complaint Legal Notice | Defective Product Notice ₹1499",
    description:
      "Send legal notice for consumer complaint. Defective products, deficiency in service. Consumer Protection Act 2019. ₹1499 all inclusive.",
    keywords: [
      "consumer complaint legal notice",
      "defective product legal notice",
      "consumer rights notice",
    ],
  },

  hero: {
    badge: "CONSUMER PROTECTION",
    headline: "Assert Your Consumer Rights Against Unfair Trade",
    subheadline: "Legal notices for product defects and service deficiency",
    flipWords: [
      "Consumer Rights",
      "Product Defects",
      "Service Issues",
      "Fair Trade",
    ],
    badges: [
      { icon: "shield", text: "Consumer Act\n2019" },
      { icon: "users", text: "Strong\nProtection" },
    ],
  },

  content: {
    h1: "Consumer Complaint Legal Notice in India",
    introduction:
      "If you've received a defective product, faced deficiency in service, been charged unfairly, or encountered any unfair trade practice, you have strong rights under the Consumer Protection Act 2019. A consumer complaint legal notice is the mandatory first step before approaching a consumer forum, demanding compensation, refund, or service rectification.",
    sections: [],
    finalCta: {
      text: "Don't let businesses exploit you. Assert your consumer rights and send a legal notice today.",
      buttonText: "Draft Consumer Complaint",
    },
  },

  story: {
    badge: "CONSUMER WIN",
    title: "Got ₹5L Compensation for",
    titleHighlight: "Defective Car",
    description:
      "Rajiv bought a new car that had recurring engine problems. After the company refused proper repairs, he sent a consumer complaint notice through VakilTech and filed a consumer case. The forum ordered full refund of ₹18 lakhs plus ₹5 lakhs compensation for deficiency in service.",
    features: [
      {
        icon: "document",
        title: "Wide Consumer Protection",
        description:
          "Covers products, services, e-commerce, real estate, and all consumer transactions.",
      },
      {
        icon: "speedometer",
        title: "Fast Consumer Forums",
        description:
          "Consumer forums decide cases faster than courts—6-12 months typically.",
        badge: { text: "Quick Justice", color: "success" },
      },
      {
        icon: "wallet",
        title: "Refund + Compensation",
        description:
          "Can claim full refund/replacement plus compensation for loss and harassment.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Consumer Protection",
    titleHighlight: "Act 2019",
    description:
      "Consumer rights are protected under Consumer Protection Act 2019, which covers goods, services, e-commerce, and provides for consumer forums at district, state, and national levels.",
    expertInsight: {
      quote:
        "Consumer forums award compensation in 75% of cases where deficiency in service or product defect is clearly established with evidence.",
    },
    accordionSections: [
      {
        id: "consumer-rights",
        title: "Consumer Rights Under Law",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Right to safety - protection from",
            highlight: "hazardous products",
          },
          { text: "Right to information - full product/service details" },
          { text: "Right to choose - fair competition and variety" },
          { text: "Right to be heard - voice grievances in consumer forum" },
          { text: "Right to redress - compensation for deficiency/defect" },
          { text: "Right to consumer education - awareness of rights" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["consumer-complaint"],

  faqs: [
    {
      id: "who-is-consumer",
      question: "Who is considered a consumer under law?",
      answer:
        "A consumer is any person who: buys goods for personal use (not for resale or commercial purpose), hires services for consideration, or is a beneficiary of such goods/services. This includes: individual buyers, online shoppers, patients (healthcare services), bank customers, insurance buyers, telecom users, and property buyers. Commercial purchases are generally not covered.",
    },
    {
      id: "what-complaints-can-file",
      question: "What types of consumer complaints can be filed?",
      answer:
        "You can file complaints for: defective products (manufacturing defect, doesn't work as promised), deficiency in service (delayed, improper, or no service), unfair trade practices (false advertising, deceptive practices), overcharging or wrong billing, poor quality not matching specifications, breach of warranty, non-delivery of goods/services paid for, and any consumer rights violation.",
    },
    {
      id: "notice-mandatory",
      question:
        "Is sending a legal notice mandatory before consumer complaint?",
      answer:
        "While not strictly mandatory under Consumer Protection Act, sending a legal notice is highly recommended because: it gives the company one last chance to resolve (avoiding litigation), creates documentary evidence of your complaint attempt, shows good faith to the consumer forum, and many companies resolve issues after receiving formal notice. Most consumer forums expect notice to have been sent first.",
    },
    {
      id: "time-limit-complaint",
      question: "What is the time limit for filing consumer complaint?",
      answer:
        "You must file complaint within 2 years from the date when the cause of action arose. Example: for defective product, 2 years from date of purchase/defect discovery. For service deficiency, 2 years from when service was supposed to be delivered or deficiency occurred. Consumer forums can condone delay if you show sufficient cause for the delay.",
    },
    {
      id: "which-forum",
      question: "Which consumer forum should I approach?",
      answer:
        "Depends on claim amount: District Consumer Forum: claims up to ₹1 crore, State Consumer Commission: claims ₹1 crore to ₹10 crore, National Consumer Commission: claims above ₹10 crore. File in the district where you reside or where the company has office or where transaction occurred. E-filing is available. Most cases are at district level.",
    },
    {
      id: "compensation-types",
      question: "What compensation can consumer forums award?",
      answer:
        "Consumer forums can order: refund of amount paid, replacement of defective product, repair or rectification of defect/deficiency, compensation for loss, injury, or damage suffered, compensation for mental harassment (typically ₹10,000-50,000), punitive damages for deliberate negligence, litigation costs, and interest on delayed payment or refund.",
    },
    {
      id: "e-commerce-complaints",
      question: "Can I file complaints against e-commerce companies?",
      answer:
        "Yes, Consumer Protection Act 2019 specifically covers e-commerce. You can complain for: product not delivered, defective/fake products, description mismatch, refund not processed, poor customer service, or unfair terms. File against both: the e-commerce platform and the seller. Consumer Protection (E-Commerce) Rules 2020 provide additional protection for online buyers.",
    },
    {
      id: "bank-insurance-complaints",
      question: "Can I send notice for banking and insurance disputes?",
      answer:
        "Yes, banks and insurance companies are covered under Consumer Protection Act as service providers. Common complaints: unauthorized debits, wrong charges, loan harassment, insurance claim rejection without valid reason, mis-selling of products, poor service, or breach of terms. However, first approach internal ombudsman (Banking Ombudsman, Insurance Ombudsman) before consumer forum.",
    },
    {
      id: "cost-consumer-notice",
      question: "How much does a consumer complaint notice cost?",
      answer:
        "VakilTech offers consumer complaint notice services for ₹1,499, including consultation on your consumer rights and claim, detailed documentation of defect/deficiency, professional drafting citing Consumer Protection Act 2019, calculation of refund and compensation claim, unlimited revisions, registered post delivery to company, and guidance on filing consumer complaint if company doesn't respond satisfactorily.",
    },
  ],
};

/* =============================================================================
 * CRIMINAL DEFAMATION DATA
 * ============================================================================= */

export const criminalDefamationData: NoticeTypeData = {
  slug: "criminal-defamation-legal-notice",
  title: "Legal Notice for Criminal Defamation",
  cluster: "criminal",

  seo: {
    title:
      "Criminal Defamation Legal Notice | Section 356 BNS ₹1499 | VakilTech",
    description:
      "Send criminal defamation notice for false statements damaging reputation. Demands apology, retraction & compensation. Section 356 BNS 2023. ₹1499 all inclusive.",
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

/* =============================================================================
 * WRONGFUL TERMINATION DATA
 * ============================================================================= */

export const wrongfulTerminationData: NoticeTypeData = {
  slug: "wrongful-termination-legal-notice",
  title: "Legal Notice for Wrongful Termination",
  cluster: "employment",

  seo: {
    title:
      "Wrongful Termination Legal Notice | Employee Rights ₹1499 | VakilTech",
    description:
      "Challenge illegal termination. Demand reinstatement or compensation. Professional notice for unfair dismissal. Industrial Disputes Act protection. ₹1499 all inclusive.",
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

/* =============================================================================
 * PROPERTY PARTITION DATA
 * ============================================================================= */

export const propertyPartitionData: NoticeTypeData = {
  slug: "property-partition-legal-notice",
  title: "Legal Notice for Property Partition",
  cluster: "tenant-property",

  seo: {
    title:
      "Property Partition Legal Notice | Ancestral Property Division ₹1499",
    description:
      "Demand partition of joint family property. Professional notice for property division. Absolute legal right. HUF, ancestral, co-owned property. ₹1499 all inclusive.",
    keywords: [
      "property partition legal notice",
      "ancestral property partition",
      "joint property division notice",
      "HUF property partition",
    ],
  },

  hero: {
    badge: "PROPERTY RIGHTS",
    headline: "Claim Your Share of Ancestral Property!",
    subheadline:
      "Professional legal notices for property partition and division",
    flipWords: [
      "Absolute Right",
      "Fair Division",
      "Legal Entitlement",
      "Property Freedom",
    ],
    badges: [
      { icon: "shield", text: "Absolute\nLegal Right" },
      { icon: "check", text: "Cannot Be\nDenied" },
    ],
  },

  content: {
    h1: "Legal Notice for Property Partition in India",
    introduction:
      "If you're a co-owner or coparcener of joint family property, you have an absolute legal right to demand partition. A legal notice for property partition formally demands division of the property through physical partition or sale and distribution. This right cannot be denied by other co-owners, making partition notices highly effective.",
    sections: propertyPartitionSections,
    finalCta: {
      text: "Your share of family property is your legal right. Don't let others deny it. Demand partition today.",
      buttonText: "Send Partition Notice Now",
    },
  },

  story: {
    badge: "PARTITION SUCCESS",
    title: "Received Property Share Worth",
    titleHighlight: "₹2.5 Crores",
    description:
      "Rajiv's father left ancestral property jointly to three sons. Other brothers refused partition for 5 years. After sending a legal notice and filing partition suit, the court ordered partition by sale. Rajiv received ₹2.5 crores as his one-third share.",
    features: [
      {
        icon: "document",
        title: "Absolute Legal Right",
        description:
          "Co-owners cannot deny your partition demand—it's an absolute right under law.",
        badge: { text: "Cannot Be Denied", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Physical or Sale Partition",
        description:
          "Court decides best method—divide property physically or sell and divide proceeds.",
      },
      {
        icon: "wallet",
        title: "Fair Market Value",
        description:
          "Court ensures partition at fair market value, protecting your financial interests.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Property Partition",
    titleHighlight: "Laws in India",
    description:
      "Property partition is governed by Partition Act 1893, Hindu Succession Act 1956 (for Hindus), and general property law principles.",
    expertInsight: {
      quote:
        "Partition is an absolute right of co-owners. Courts cannot refuse partition—only the mode (physical or sale) is discretionary.",
    },
    accordionSections: [
      {
        id: "partition-rights",
        title: "Legal Rights in Partition",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Absolute right under",
            highlight: "Partition Act 1893",
          },
          {
            text: "Daughters have equal rights since",
            highlight: "2005 Amendment",
          },
          { text: "Physical partition or partition by sale" },
          { text: "Court appoints commissioner for valuation" },
          { text: "Right to accounts if property generates income" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["money-recovery"], // Placeholder - will create proper sample

  faqs: [
    {
      id: "what-is-partition",
      question: "What is property partition?",
      answer:
        "Property partition is the division of jointly owned or co-owned property into separate shares for each co-owner. It converts joint ownership into individual ownership, giving each person exclusive rights over their share. Partition can be done amicably through family settlement or through court via partition suit.",
    },
    {
      id: "who-can-demand",
      question: "Who can demand property partition?",
      answer:
        "Any co-owner can demand partition: coparceners in Hindu Undivided Family (HUF) for ancestral property, legal heirs who inherited property jointly, persons who purchased property jointly as co-owners, tenants-in-common or joint tenants. Since 2005, daughters have equal coparcenary rights in ancestral property.",
    },
    {
      id: "can-be-denied",
      question: "Can other co-owners deny my partition demand?",
      answer:
        "No. Partition is an absolute legal right that cannot be denied. If co-owners refuse amicable partition, you can file a partition suit in Civil Court. Courts are bound to grant partition—the only question is the mode (physical division or sale). No co-owner can force you to remain in joint ownership.",
    },
    {
      id: "ancestral-vs-selfacquired",
      question: "What's the difference between ancestral and self-acquired property?",
      answer:
        "Ancestral property: inherited from father, grandfather, great-grandfather without a will. Coparceners (children) get rights by birth and can demand partition anytime. Self-acquired property: earned/purchased by person during their lifetime. Owner has full rights, can will it to anyone. Legal heirs get rights only after owner's death.",
    },
    {
      id: "daughter-rights",
      question: "Do daughters have partition rights in ancestral property?",
      answer:
        "Yes. Since Hindu Succession (Amendment) Act 2005, daughters are coparceners by birth with equal rights as sons in ancestral property. They can demand partition, have a share in partition, and their rights cannot be denied. This applies even if father died before 2005, as long as property exists.",
    },
    {
      id: "physical-vs-sale",
      question: "How does the court decide between physical partition and sale?",
      answer:
        "Court considers: size of property (large enough to divide meaningfully?), nature of property (land can be divided, building harder), number of co-owners, whether division destroys property value, feasibility of physical demarcation. If physical partition not feasible without value destruction, court orders partition by sale and distribution of proceeds.",
    },
    {
      id: "valuation-process",
      question: "How is property valued for partition?",
      answer:
        "Court appoints a commissioner (surveyor, valuer) to: inspect and measure the property, determine current market value, suggest mode of partition, demarcate boundaries if physical partition. Both parties can engage their own valuers. Final valuation is based on fair market value at time of partition, not historical value.",
    },
    {
      id: "partition-with-income",
      question: "What if property generates rental income?",
      answer:
        "You can demand accounts from co-owners who collected rent. They must account for all income received and expenses incurred. Your share of net income must be paid. If they refuse, court can order accounts as part of partition proceedings. Rent accounting is often done for past 12 years from filing date.",
    },
    {
      id: "timeline-for-partition",
      question: "How long does partition litigation take?",
      answer:
        "After sending legal notice, if co-owners don't agree, file partition suit. Timeline: preliminary decree determining shares (1-2 years), commissioner's report on partition mode (6 months-1 year), final decree actually partitioning property (6 months-1 year). Total: 2-5 years depending on property complexity and disputes. However, notice often leads to settlement avoiding full litigation.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a partition notice cost?",
      answer:
        "VakilTech offers property partition notice services for ₹1,499, including consultation on your partition rights, analysis of property ownership and co-owner shares, professional drafting citing Partition Act and succession laws, demand for physical partition or sale, accounts demand if property generates income, unlimited revisions, and registered post delivery with guidance on next steps if partition suit needed.",
    },
  ],
};

/* =============================================================================
 * CHILD CUSTODY DATA
 * ============================================================================= */

export const childCustodyData: NoticeTypeData = {
  slug: "child-custody-legal-notice",
  title: "Legal Notice for Child Custody",
  cluster: "family",

  seo: {
    title:
      "Child Custody Legal Notice | Claim Custody Rights ₹1499 | VakilTech",
    description:
      "Send legal notice for child custody or visitation rights. Professional drafting for custody disputes. Guardians & Wards Act protection. ₹1499 all inclusive.",
    keywords: [
      "child custody legal notice",
      "legal notice for child custody",
      "custody notice format",
      "visitation rights notice",
      "parental rights legal notice",
    ],
  },

  hero: {
    badge: "CHILD CUSTODY",
    headline: "Protect Your Parental Rights Legally!",
    subheadline:
      "Professional legal notices for child custody claims and visitation rights",
    flipWords: [
      "Custody Rights",
      "Best Interest of Child",
      "Legal Protection",
      "Family Court",
    ],
    badges: [
      { icon: "shield", text: "Child Welfare\nFirst" },
      { icon: "check", text: "Parent-Child\nBond" },
    ],
  },

  content: {
    h1: "Legal Notice for Child Custody in India",
    introduction:
      "If you're seeking custody of your child or facing denial of visitation rights, a legal notice is the first step toward asserting your parental rights. Under the Guardians and Wards Act 1890 and personal laws, courts prioritize the child's welfare above all else. This notice formally claims your custody rights and proposes arrangements for your child's care and upbringing.",
    sections: childCustodySections,
    finalCta: {
      text: "Your child needs you. Don't let anyone deny your parental rights. Take legal action today.",
      buttonText: "Send Custody Notice Now",
    },
  },

  story: {
    badge: "CUSTODY GRANTED",
    title: "Custody Awarded to Father After",
    titleHighlight: "8 Months",
    description:
      "Rahul was denied access to his 6-year-old daughter after separation. After sending a legal notice and filing custody petition, the Family Court interviewed the child, assessed both homes, and awarded joint custody with primary physical custody to Rahul within 8 months.",
    features: [
      {
        icon: "document",
        title: "Child's Welfare Paramount",
        description:
          "Courts decide based solely on what's best for the child, not parental preferences.",
        badge: { text: "Best Interest", color: "primary" },
      },
      {
        icon: "speedometer",
        title: "Interim Custody Orders",
        description:
          "Courts can grant temporary custody immediately while case is pending.",
      },
      {
        icon: "wallet",
        title: "Visitation Rights Protected",
        description:
          "Even if sole custody is granted, non-custodial parent gets visitation rights.",
        badge: { text: "Both Parents Matter", color: "success" },
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Child Custody",
    titleHighlight: "Laws in India",
    description:
      "Child custody is governed by Guardians and Wards Act 1890, Hindu Minority and Guardianship Act 1956, and personal laws. The paramount consideration is the child's welfare.",
    expertInsight: {
      quote:
        "Courts prefer joint custody arrangements that maintain the child's relationship with both parents, unless one parent is clearly unfit.",
    },
    accordionSections: [
      {
        id: "custody-rights",
        title: "Legal Rights in Custody",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Governed by",
            highlight: "Guardians and Wards Act 1890",
          },
          {
            text: "Child's welfare is",
            highlight: "paramount consideration",
          },
          { text: "Mother preferred for children below 5 years (tender years)" },
          { text: "Child's preference considered if mature enough (9+ years)" },
          { text: "Joint custody and visitation rights protected" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["money-recovery"], // Placeholder - will create proper sample

  faqs: [
    {
      id: "what-is-custody",
      question: "What is child custody?",
      answer:
        "Child custody refers to the legal right and responsibility to care for and make decisions about a minor child. Physical custody determines where the child lives, while legal custody involves decision-making rights regarding education, health, religion, and upbringing. Custody can be sole (one parent), joint (shared), or split.",
    },
    {
      id: "types-of-custody",
      question: "What are the types of custody in India?",
      answer:
        "Physical Custody: where child physically resides. Legal Custody: right to make decisions about child's life. Joint Custody: both parents share custody and decision-making. Sole Custody: one parent has exclusive physical and legal custody. Visitation Rights: non-custodial parent's right to spend time with child. Courts prefer joint custody unless one parent is unfit.",
    },
    {
      id: "who-gets-custody",
      question: "Who usually gets custody of the child?",
      answer:
        "Courts decide based on child's best interest, not automatic preference. General guidelines: mother preferred for children below 5 years (tender years doctrine), child's preference given weight from age 9 onwards, parent providing stable home and better care, emotional bond with each parent, continuity in child's life (school, friends). Neither parent has automatic right—each case decided on facts.",
    },
    {
      id: "father-custody-rights",
      question: "Can fathers get custody of children?",
      answer:
        "Yes, absolutely. While mothers have preference for very young children, fathers have equal legal rights to seek custody. Courts award custody to fathers when: mother is unfit or unable to care, child expresses preference for father (if mature), father provides better environment, child's welfare best served. Many fathers successfully obtain joint or sole custody based on circumstances.",
    },
    {
      id: "when-to-send-notice",
      question: "When should I send a child custody notice?",
      answer:
        "Send custody notice when: other parent denies you access or visitation, child taken away without your consent, you're seeking primary custody during divorce/separation, change in circumstances requires custody modification, other parent is unfit (abuse, neglect, substance abuse), grandparents wrongfully withholding child, international parental child abduction. Notice establishes your intent before filing custody petition.",
    },
    {
      id: "what-notice-contains",
      question: "What should a custody notice contain?",
      answer:
        "Notice should include: details of both parents and child (age, current residence), current custody arrangement and what you're seeking, your relationship and emotional bond with child, your ability to provide stable home and upbringing, other parent's unfitness or inability to care (if applicable), child's preference (if old enough), evidence: school records, medical records, witness statements, proposed visitation for non-custodial parent, demand for specific custody arrangement.",
    },
    {
      id: "visitation-rights",
      question: "What are visitation rights?",
      answer:
        "Visitation rights allow the non-custodial parent to spend time with the child through: scheduled visits (weekends, holidays), overnight stays, phone/video calls, participation in child's activities. Courts almost always grant visitation unless parent poses danger to child. Denying court-ordered visitation is contempt of court and can lead to custody modification.",
    },
    {
      id: "child-preference",
      question: "At what age can a child choose which parent to live with?",
      answer:
        "There's no fixed age, but courts consider child's preference from age 9 onwards, with increasing weight as child matures. Teenagers' wishes are generally respected if reasonable. However, child's preference is just one factor—courts still decide based on child's best interest. Even if child prefers one parent, court may decide otherwise if that parent is unfit or child's reasoning is immature.",
    },
    {
      id: "custody-timeline",
      question: "How long does custody litigation take?",
      answer:
        "After legal notice, if parents can't agree, file custody petition in Family Court. Timeline: interim custody order (within 1-2 months of filing), social worker assessment and home visits (2-3 months), child interview by court (if applicable), final hearing and order (6 months to 2 years total). Many cases settle during proceedings through mediation. Courts prioritize child custody cases for faster resolution.",
    },
    {
      id: "cost-of-notice",
      question: "How much does a child custody notice cost?",
      answer:
        "VakilTech offers child custody notice services for ₹1,499, including consultation on your custody rights, analysis of child's best interest factors, professional drafting citing Guardians & Wards Act, custody claim with supporting grounds, proposed visitation schedule, unlimited revisions, and registered post delivery with guidance on custody petition if needed.",
    },
  ],
};


/* =============================================================================
 * TIER 1 ARTICLES - NEW ADDITIONS (Employment & Family & Contract)
 * ============================================================================= */

/* =============================================================================
 * TIER 1 ARTICLES - NEW ADDITIONS
 * ============================================================================= */

// WORKPLACE HARASSMENT DATA
export const workplaceHarassmentData: NoticeTypeData = {
  slug: "workplace-harassment-legal-notice",
  title: "Legal Notice for Workplace Harassment",
  cluster: "employment",

  seo: {
    title:
      "Workplace Harassment Legal Notice | POSH Act Protection ₹1499 | VakilTech",
    description:
      "Send legal notice for workplace sexual harassment or bullying. POSH Act 2013 compliance. ICC investigation demand. ₹1499 all inclusive.",
    keywords: [
      "workplace harassment legal notice",
      "sexual harassment notice",
      "POSH Act notice",
      "workplace bullying notice",
      "hostile work environment",
    ],
  },

  hero: {
    badge: "WORKPLACE HARASSMENT",
    headline: "Stop Workplace Harassment. Assert Your Rights!",
    subheadline:
      "Legal notices for sexual harassment and hostile work environment under POSH Act 2013",
    flipWords: [
      "POSH Act Protection",
      "ICC Investigation",
      "Career Protection",
      "Legal Action",
    ],
    badges: [
      { icon: "shield", text: "POSH Act\\n2013" },
      { icon: "check", text: "ICC Investigation\\nMandatory" },
    ],
  },

  content: {
    h1: "Legal Notice for Workplace Harassment in India",
    introduction:
      "If you're facing sexual harassment, bullying, or hostile work environment, the law protects you. Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013 (POSH Act), employers must investigate complaints and take action. This notice demands immediate investigation, disciplinary action against harassers, and compensation for the trauma you've suffered.",
    sections: workplaceHarassmentSections,
    finalCta: {
      text: "No one should face harassment at work. Take legal action to protect your dignity and career.",
      buttonText: "File Harassment Notice Now",
    },
  },

  story: {
    badge: "JUSTICE SERVED",
    title: "Harasser Terminated. Compensation of",
    titleHighlight: "₹12 Lakhs",
    description:
      "Priya faced persistent sexual harassment from her manager for 8 months. After filing a legal notice demanding ICC inquiry, the company conducted investigation, terminated the harasser, and paid ₹12 lakhs compensation to Priya for mental trauma and career damage.",
    features: [
      {
        icon: "shield",
        title: "POSH Act Protection",
        description:
          "Employers must constitute ICC and investigate all complaints within 90 days.",
        badge: { text: "Mandatory", color: "warning" },
      },
      {
        icon: "speedometer",
        title: "Fast Resolution",
        description:
          "Most employers act immediately after legal notice to avoid penalties and litigation.",
      },
      {
        icon: "wallet",
        title: "Compensation Rights",
        description:
          "Can claim compensation for mental agony, medical expenses, and career loss.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "POSH Act 2013 and",
    titleHighlight: "Harassment Laws",
    description:
      "Workplace harassment is prohibited under POSH Act 2013, Constitution (equality and dignity), and criminal laws. Employers face penalties up to ₹50,000 for non-compliance.",
    expertInsight: {
      quote:
        "55-65% of workplace harassment complaints result in action against the harasser when proper legal notice is sent.",
    },
    accordionSections: [
      {
        id: "legal-protections",
        title: "Legal Protections Against Harassment",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "POSH Act 2013 protection for",
            highlight: "all women at workplace",
          },
          { text: "ICC must investigate within 90 days" },
          { text: "Employer liable for not preventing harassment" },
          {
            text: "Can approach Local Complaints Committee if ICC absent",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["workplace-harassment"],

  faqs: [
    {
      id: "what-is-posh-act",
      question: "What is the POSH Act 2013?",
      answer:
        "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 is a law that protects women from sexual harassment at workplace. It mandates all organizations with 10+ employees to constitute an Internal Complaints Committee (ICC) to address harassment complaints. Sexual harassment includes unwelcome physical contact, sexually colored remarks, demand for sexual favors, showing pornography, and any other unwelcome sexual conduct.",
    },
    {
      id: "when-to-send",
      question: "When should I send a workplace harassment notice?",
      answer:
        "Send a legal notice when you face sexual harassment by colleague/supervisor/client, employer fails to take action despite internal complaints, ICC doesn't exist or is non-functional, you experience workplace bullying or discrimination, or face retaliation for refusing advances or filing complaints. The earlier you send the notice, the better for evidence and quick resolution.",
    },
    {
      id: "what-is-covered",
      question: "What types of harassment does POSH Act cover?",
      answer:
        "POSH Act covers sexual harassment including: unwelcome physical contact or advances, demand for sexual favors (quid pro quo), sexually colored remarks about appearance/body/personal life, showing pornography, unwelcome sexual jokes or comments, and any other unwelcome physical, verbal, or non-verbal conduct of sexual nature. It also covers harassment creating hostile, intimidating, or offensive work environment.",
    },
    {
      id: "icc-investigation",
      question: "How does ICC investigation work?",
      answer:
        "After filing complaint, ICC must conduct inquiry within 90 days. The process includes: recording statements of complainant and witnesses, giving harasser opportunity to respond and defend, examining evidence (emails, messages, CCTVfootage), preparing inquiry report with findings, and recommending action if harassment is proved. ICC can recommend termination, suspension, withholding promotion/increment, or other disciplinary action. Employer must implement recommendations within 60 days.",
    },
    {
      id: "can-men-file",
      question: "Can men file harassment complaints?",
      answer:
        "POSH Act 2013 specifically covers sexual harassment of women. However, men facing workplace bullying, discrimination, or harassment can file complaints under general employment laws, service rules, labor laws, or approach labor authorities. For sexual harassment of men, criminal complaints under relevant BNS sections can be filed.",
    },
    {
      id: "retaliation-protection",
      question: "What if my employer retaliates against me?",
      answer:
        "Retaliation for filing harassment complaint is illegal under Section 14 of POSH Act. Any adverse action like termination, demotion, denial of promotion, or hostile treatment after filing complaint is prohibited and punishable. If you face retaliation, immediately file complaint with Local Complaints Committee and labor authorities. Courts take retaliatory actions very seriously.",
    },
    {
      id: "compensation-amount",
      question: "How much compensation can I claim?",
      answer:
        "Compensation depends on: mental trauma suffered, medical expenses incurred, loss of career opportunities, income lost during proceedings, and severity of harassment. Typical compensation ranges from ₹2-15 lakhs depending on these factors. In severe cases with prolonged harassment, forced resignation, or significant career damage, compensation can be higher.",
    },
    {
      id: "cost-of-notice",
      question: "How much does workplace harassment notice cost?",
      answer:
        "VakilTech offers workplace harassment legal notice services for ₹1,499, including: consultation on POSH Act rights, professional drafting citing relevant laws, demand for ICC investigation and action, compensation calculation, unlimited revisions, registered post delivery, and guidance on further legal steps if needed.",
    },
  ],
};

// EMPLOYEE MISCONDUCT DATA  
export const employeeMisconductData: NoticeTypeData = {
  slug: "employee-misconduct-legal-notice",
  title: "Legal Notice for Employee Misconduct",
  cluster: "employment",

  seo: {
    title:
      "Employee Misconduct Legal Notice | Disciplinary Action ₹1499 | VakilTech",
    description:
      "Send show cause notice for employee misconduct. Professional drafting for disciplinary proceedings. Due process compliance. ₹1499 all inclusive.",
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


// DOMESTIC VIOLENCE DATA
export const domesticViolenceData: NoticeTypeData = {
  slug: "domestic-violence-legal-notice",
  title: "Legal Notice for Domestic Violence",
  cluster: "family",

  seo: {
    title:
      "Domestic Violence Legal Notice | PWDVA Protection ₹1499 | VakilTech",
    description:
      "Send legal notice for domestic violence under PWDVA 2005. Protection orders, residence rights, maintenance claims. Fast legal action. ₹1499 all inclusive.",
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

// BREACH OF CONTRACT DATA
export const breachOfContractData: NoticeTypeData = {
  slug: "breach-of-contract-legal-notice",
  title: "Legal Notice for Breach of Contract",
  cluster: "contract",

  seo: {
    title:
      "Breach of Contract Legal Notice | Contract Enforcement ₹1499 | VakilTech",
    description:
      "Send legal notice for breach of contract. Demand specific performance or damages. Business and service contracts. ₹1499 all inclusive.",
    keywords: [
      "breach of contract legal notice",
      "contract violation notice",
      "specific performance notice",
      "contract enforcement",
      "contract dispute",
    ],
  },

  hero: {
    badge: "BREACH OF CONTRACT",
    headline: "Enforce Your Contracts. Protect Your Business!",
    subheadline:
      "Legal notices for breach of contract and demand for specific performance or damages",
    flipWords: [
      "Contract Enforcement",
      "Specific Performance",
      "Damages Recovery",
      "Legal Protection",
    ],
    badges: [
      { icon: "shield", text: "Contract Act\\n1872" },
      { icon: "check", text: "Performance or\\nDamages" },
    ],
  },

  content: {
    h1: "Legal Notice for Breach of Contract in India",
    introduction:
      "When a party fails to fulfill contractual obligations, you have legal remedies under the Indian Contract Act 1872. A breach of contract notice formally demands performance or compensation and is prerequisite before filing suit for specific performance or damages. This notice applies to all contracts—business agreements, service contracts, sale agreements, employment contracts, and partnership agreements.",
    sections: breachOfContractSections,
    finalCta: {
      text: "Don't let contract breaches harm your business. Take legal action to enforce your rights and recover losses.",
      buttonText: "Send Breach of Contract Notice",
    },
  },

  story: {
    badge: "CONTRACT ENFORCED",
    title: "Recovered Damages of",
    titleHighlight: "₹45 Lakhs",
    description:
      "A vendor failed to deliver goods worth ₹18 lakhs despite receiving full payment, then abandoned the contract. After sending legal notice demanding refund plus damages, the vendor paid ₹18 lakhs (principal) plus ₹27 lakhs (damages for business losses and delay) within 45 days to avoid lengthy litigation.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Basis",
        description:
          "Well-drafted notice establishes breach, your performance, and quantified damages.",
        badge: { text: "60-70% Settle", color: "success" },
      },
      {
        icon: "speedometer",
        title: "Specific Performance",
        description:
          "Can demand court order forcing the party to perform the contract as agreed.",
      },
      {
        icon: "wallet",
        title: "Damages Recovery",
        description:
          "Can claim actual losses, consequential damages, interest, and legal costs.",
      },
    ],
  },

  legalFramework: {
    badge: "LEGAL FRAMEWORK",
    title: "Indian Contract Act 1872 and",
    titleHighlight: "Specific Relief Act 1963",
    description:
      "Contract breaches are governed by Contract Act 1872 (damages) and Specific Relief Act 1963 (specific performance). Courts can order performance of contract or award monetary damages.",
    expertInsight: {
      quote:
        "60-70% of contract disputes settle after legal notice as breaching party realizes litigation costs and time involved.",
    },
    accordionSections: [
      {
        id: "legal-remedies",
        title: "Legal Remedies for Breach of Contract",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Specific Performance:",
            highlight: "court orders party to perform",
          },
          {
            text: "Damages:",
            highlight: "compensatory and consequential losses",
          },
          { text: "Injunction: restraining order against breach" },
          { text: "Rescission: contract cancelled, parties restored" },
          { text: "Quantum Meruit: payment for work done before breach" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["breach-of-contract"],

  faqs: [
    {
      id: "what-is-breach",
      question: "What constitutes breach of contract?",
      answer:
        "Breach of contract occurs when a party: fails to perform obligations on due date (actual breach), indicates in advance they won't perform (anticipatory breach), performs defectively not meeting contract standards (material breach), or partially performs some but not all obligations. The breach must be of a valid, enforceable contract.",
    },
    {
      id: "specific-performance-vs-damages",
      question: "What is difference between specific performance and damages?",
      answer:
        "Specific performance: court order forcing the breaching party to perform the contract as agreed. Granted for unique contracts (sale of specific property, rare goods). Damages: monetary compensation for losses suffered. Granted when specific performance not feasible or appropriate. You can demand specific performance as primary relief and damages as alternative.",
    },
    {
      id: "what-damages",
      question: "What damages can I claim?",
      answer:
        "You can claim: actual/compensatory damages (direct financial loss), consequential damages (indirect losses like lost profits, business disruption), liquidated damages (pre-agreed amount in contract), interest on amount due from breach date, and legal costs. Must prove damages are direct result of breach and reasonably foreseeable.",
    },
    {
      id: "notice-mandatory",
      question: "Is legal notice mandatory before filing suit?",
      answer:
        "While not always legally mandatory, sending legal notice is highly recommended and often required by courts. It demonstrates you attempted amicable resolution before litigation. Many contracts have clauses requiring notice before suit. Proper notice strengthens your case significantly and often leads to settlement without court.",
    },
    {
      id: "contract-types",
      question: "What types of contracts can be enforced?",
      answer:
        "All legally valid contracts: business agreements (supply, service, partnership), sale agreements (goods, property), employment contracts (non-compete, notice period), franchise agreements, construction/contractor agreements, loan agreements, and license agreements. Contract must have valid offer, acceptance, consideration, lawful object, and capacity to contract.",
    },
    {
      id: "timeline",
      question: "How long does breach of contract litigation take?",
      answer:
        "If notice doesn't resolve the matter, suit for specific performance or damages typically takes 2-4 years in civil court. However, 60-70% of cases settle during litigation through compromise. For commercial disputes over ₹3 lakhs, Commercial Courts Act provides for faster disposal (target 1 year). Arbitration, if contract has clause, can be faster (6-18 months).",
    },
    {
      id: "force-majeure",
      question: "What if they claim force majeure or impossibility?",
      answer:
        "Force majeure (act of God, pandemic, war) or impossibility of performance can be valid defenses to breach. However, burden of  proof is on the breaching party to show: event was unforeseeable, beyond their control, made performance impossible (not just difficult or expensive), and they took reasonable steps to mitigate. Most force majeure defenses fail as contracts only become difficult, not impossible.",
    },
    {
      id: "cost-of-notice",
      question: "How much does breach of contract notice cost?",
      answer:
        "VakilTech offers breach of contract legal notice services for ₹1,499, including: contract analysis and breach identification, professional drafting citing Contract Act provisions, documentation of your complete performance, quantification of damages and losses, demand for specific performance or compensation, unlimited revisions, and guidance on filing suit if needed.",
    },
  ],
};


export const noticeTypesData: Record<string, NoticeTypeData> = {
  "legal-notice-for-money-recovery": moneyRecoveryData,
  "cheque-bounce-legal-notice": chequeBounceData,
  "legal-notice-for-outstanding-payment": outstandingPaymentData,
  "legal-notice-for-unpaid-salary": unpaidSalaryData,
  "legal-notice-for-divorce": divorceNoticeData,
  "maintenance-legal-notice": maintenanceNoticeData,
  "legal-notice-for-cruelty-or-desertion": crueltyDesertionNoticeData,
  "legal-notice-to-tenant": tenantNoticeData,
  "legal-notice-for-rent-arrears": rentArrearsNoticeData,
  "eviction-legal-notice": evictionNoticeData,
  "legal-notice-to-builder": builderNoticeData,
  "legal-notice-for-property-possession": propertyPossessionNoticeData,
  "consumer-complaint-legal-notice": consumerComplaintNoticeData,
  "criminal-defamation-legal-notice": criminalDefamationData,
  "wrongful-termination-legal-notice": wrongfulTerminationData,
  "property-partition-legal-notice": propertyPartitionData,
  "child-custody-legal-notice": childCustodyData,
  "workplace-harassment-legal-notice": workplaceHarassmentData,
  "employee-misconduct-legal-notice": employeeMisconductData,
  "domestic-violence-legal-notice": domesticViolenceData,
  "breach-of-contract-legal-notice": breachOfContractData,
};

export function getNoticeData(slug: string): NoticeTypeData | null {
  return noticeTypesData[slug] || null;
}

export function getAllNoticeSlugs(): string[] {
  return Object.keys(noticeTypesData);
}
