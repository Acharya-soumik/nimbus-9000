import { NoticeTypeData } from "./types";
import { outstandingPaymentSections } from "../notice-seo-content";
import { realSampleNotices } from "../real-sample-notices";

export const outstandingPaymentData: NoticeTypeData = {
  slug: "legal-notice-for-outstanding-payment",
  title: "Legal Notice for Outstanding Payment",
  cluster: "money-recovery",

  seo: {
    title: "Send Legal Notice for Outstanding Payment - Recover Dues Fast | VakilTech",
    description:
      "Client not paying? Send a strong legal notice to recover your outstanding dues. fast, professional drafting to get you paid.",
    keywords: [
      "legal notice for outstanding payment format",
      "legal notice for recovery of outstanding dues",
      "msme payment recovery",
      "unpaid invoice legal action",
      "demand notice for payment",
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
      "If you are looking for the correct legal notice format for non-payment of dues, our experts can help. A professionally drafted legal notice formally demands payment and creates strong legal grounds for recovery under the Indian Contract Act and MSMED Act.",
    sections: outstandingPaymentSections,
    finalCta: {
      text: "Don't let unpaid invoices hurt your business cash flow. Send a professional payment demand notice today.",
      buttonText: "Send Notice Now",
    },
  },

  story: {
    badge: "BUSINESS SUCCESS",
    title: "Recovered Outstanding Dues of",
    titleHighlight: "₹15 Lakhs",
    description:
      "A Mumbai-based web development agency was owed ₹15 lakhs by a client for 8 months. After sending a legal notice through VakilTech specifically citing the MSMED Act provisions and calculating interest, the client reached out for settlement within 5 days to avoid the Micro & Small Enterprise Facilitation Council.",
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
      "Business payment recovery is governed by the Indian Contract Act, 1872, and specifically the MSMED Act, 2006 for registered enterprises.",
    expertInsight: {
      quote:
        "Under the MSMED Act, buyers are liable to pay compound interest at 3 times the bank rate if payment is delayed beyond 45 days.",
    },
    accordionSections: [
      {
        id: "legal-rights",
        title: "Legal Rights for Payment Recovery",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          {
            text: "Breach of Contract under",
            highlight: "Indian Contract Act, 1872",
          },
          {
            text: "MSME protection for",
            highlight: "payment within 45 days",
          },
          { text: "Right to approach MSME Facilitation Council" },
          { text: "Insolvency proceedings under IBC (for companies)" },
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
            title: "Payment",
            description: "They might offer to pay in installments. Accept only if they sign a Payment Agreement.",
          },
          {
            title: "Reconciliation",
            description: "If they dispute the invoice amount, reconcile accounts immediately to avoid delay.",
          },
        ],
      },
      {
        situation: "If NO Reply",
        actions: [
          {
            title: "MSME Samadhaan",
            description: "If you are MSME registered, file a case with MSE Facilitation Council (Fast & Powerful).",
          },
          {
            title: "File Case",
            description: "File Summary Suit (Order 37 CPC) or Commercial Suit for recovery.",
          },
          {
            title: "Insolvency",
            description: "If the debt is >₹1 Cr, you can drag the company to NCLT for insolvency.",
          },
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
        "MSMEs (Micro, Small & Medium Enterprises) have special protection under the MSMED Act, 2006. If payment is not made within 45 days, you can claim compound interest at 3 times the bank rate. You can also approach the Micro & Small Enterprises Facilitation Council (MSEFC) for dispute resolution.",
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
        "Yes. If your contract specifies interest on delayed payments, you can claim it. For MSMEs, even without a contract clause, you can claim compound interest under Section 16 of the MSMED Act from the date the payment became due.",
    },
    {
      id: "preserve-relationship",
      question: "Will sending a notice damage the business relationship?",
      answer:
        "A professionally worded legal notice can actually preserve relationships by showing you're serious about payment while still open to resolution. Many businesses understand it's a standard process involving their finance department and respond positively.",
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
