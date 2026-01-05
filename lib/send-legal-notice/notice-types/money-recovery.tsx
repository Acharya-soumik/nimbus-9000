import { NoticeTypeData } from "./types";
import { moneyRecoverySections } from "../notice-seo-content";
import { realSampleNotices } from "../real-sample-notices";

export const moneyRecoveryData: NoticeTypeData = {
  slug: "legal-notice-for-money-recovery",
  title: "Legal Notice for Money Recovery",
  cluster: "money-recovery",

  seo: {
    title: "Legal Notice for Money Recovery Format | Recover Dues | Start ₹499",
    description:
      "Draft & send a legal notice for money recovery in India. Expert lawyers, 24hrs drafting, valid in court. Recover your personal loans & business dues fast.",
    keywords: [
      "legal notice for recovery of money",
      "money recovery legal notice format",
      "legal notice for non payment of dues",
      "recovery of money suit",
      "legal notice format for recovery of money",
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
      "If someone has failed to repay money owed to you—whether it is a personal loan, unpaid invoice, salary dues, or business payment—the first and most effective legal step is to send a legal notice for recovery of money. A properly drafted legal notice puts the opposite party on formal legal notice, creates documentary evidence, and often leads to recovery without going to court. It serves as a precursor to filing a Summary Suit under Order 37 of the CPC if the debt remains unpaid.",
    sections: moneyRecoverySections,
    finalCta: {
      text: "If someone owes you money, delay only weakens your position. A professionally drafted legal notice is often enough to recover dues quickly and legally.",
      buttonText: "Start Your Money Recovery Notice",
    },
  },

  story: {
    badge: "REAL SUCCESS STORY",
    title: "How Legal Notice Recovered",
    titleHighlight: "₹8.5 Lakhs in 21 Days",
    description:
      "Rajesh, a textile distributor from Surat, was owed ₹8.5 lakhs by a client who kept delaying payment for 6 months. After sending a professionally drafted legal notice through VakilTech citing the transaction details and intent to file a summary suit, the client cleared the full survivor amount within 21 days to avoid litigation.",
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
      "Money recovery cases in India are governed by the Indian Contract Act, 1872, the Code of Civil Procedure (Order 37), and the Limitation Act, 1963.",
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
          { text: "Summary Suits under Order 37 of CPC" },
          {
             text: "Limitation period of 3 years under",
             highlight: "Limitation Act, 1963"
          },
          { text: "Loan agreements and promissory notes" },
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
      id: "limitation-period",
      question: "What is the limitation period for money recovery?",
      answer:
        "Under the Limitation Act, 1963, the limitation period for filing a suit for recovery of money is 3 years from the date the cause of action arises (e.g., the date the debt became due or the last payment was made). Sending a legal notice does not extend this period, so it is crucial to act within this timeline.",
    },
    {
      id: "evidence-needed",
      question: "What evidence is required for a money recovery notice?",
      answer:
        "Key evidence includes: (1) Written agreement or contract, (2) Promissory note or cheques, (3) Bank statements showing funds transfer, (4) Invoices or bills, (5) Communications acknowledging the debt (emails, WhatsApp chats, recordings). Even without a formal contract, other proofs can establish the debt.",
    },
    {
      id: "how-long-response",
      question:
        "How long does the other party get to pay after receiving the notice?",
      answer:
        "Typically, the recipient is given 15-30 days to respond and make payment, depending on the nature of the case and the amount involved. The exact period will be clearly mentioned in the notice. If they fail to pay within this period, you can proceed with legal action.",
    },
    {
      id: "is-notice-mandatory",
      question: "Is sending a legal notice mandatory before filing a case?",
      answer: (
        <div className="space-y-2">
          <p>
            While not always legally mandatory for all civil suits, sending a legal notice is highly
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
        "With VakilTech, our advocates draft your legal notice within 24-48 hours after you provide all necessary details. Once you review and approve the draft, we send it via Speed Post , which typically takes 5-7 business days for delivery. You'll receive tracking updates throughout the process.",
    },
  ],
};