import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const rentArrearsNoticeData: NoticeTypeData = {
  slug: "legal-notice-for-rent-arrears",
  title: "Legal Notice for Rent Arrears",
  cluster: "tenant-property",

  seo: {
    title: "Legal Notice for Non-Payment of Rent | Recover Arrears & Evict",
    description:
      "Tenant defaulted on rent? Send a strict Legal Notice for Rent Arrears & Eviction. Demand payment with interest. Drafted by expert lawyers. Starts ₹1499.",
    keywords: [
      "legal notice for rent arrears",
      "unpaid rent legal notice",
      "rent recovery notice",
      "rent default notice format",
      "demand notice for unpaid rent",
      "tenant late rent notice",
      "notice to pay rent or quit india",
      "recovery of outstanding rent",
    ],
  },

  hero: {
    badge: "For Due Recovery",
    headline: "Recover Unpaid Rent & Protect Your Income",
    subheadline: "Professional legal notices to demand outstanding rent, interest, and eviction for default.",
    flipWords: [
      "Recover Dues",
      "Demand Interest",
      "Evict Defaulters",
      "Enforce Terms",
    ],
    badges: [
      { icon: "clock", text: "Fast\nTurnaround" },
      { icon: "shield", text: "Legal\nCompliance" },
    ],
  },

  content: {
    h1: "Legal Notice for Recovery of Rent Arrears",
    introduction:
      "Consistent non-payment of rent is a breach of the lease agreement and a primary ground for eviction. If your tenant has defaulted on payments despite reminders, sending a **Legal Notice for Rent Arrears** is critical. It formally puts the tenant on notice to clear the dues within a specific period or face legal consequences, including eviction and a suit for recovery of money with interest.",
    sections: [
      {
        heading: "How to Recover Unpaid Rent Legally?",
        content: `Don't let arrears pile up. Follow this legal escalation matrix:
        
        1.  **Written Reminder:** Send a polite email or WhatsApp message documenting the default.
        2.  **Formal Legal Notice:** If they ignore reminders, send a lawyer-signed notice demanding full payment + interest.
        3.  **Termination of Lease:** If the notice period expires without payment, the lease stands terminated.
        4.  **Summary Suit (Order 37 CPC):** For pure money recovery (without eviction), you can file a 'Summary Suit' which is faster than regular trials.
        5.  **Eviction Suit:** If you want possession back, file for eviction on the ground of non-payment.`,
      },
      {
        heading: "What This Notice Must Include",
        content: `A defective notice can delay your recovery. Our experts ensure your notice contains:
        
        *   **Calculation of Dues:** Month-wise breakdown of unpaid rent.
        *   **Interest Claim:** Market rate interest (usually 15-18% p.a.) on the delayed amount.
        *   **Adjustment Warning:** Clause regarding adjustment against security deposit (if applicable) or why deposit is forfeited.
        *   **Ultimatum:** A clear deadline (e.g., 15 days) to credit the amount to your bank account.
        *   **Eviction Warning:** Explicit statement that failure to pay leads to lease termination.`,
      },
      {
        heading: "Can You Adjust Against Security Deposit?",
        content: `Many landlords make the mistake of just adjusting arrears against the security deposit without notice. **Avoid this.** The security deposit is usually for property damages and is refundable *after* vacation. Always demand the rent first. If they vacate and still owe money, *then* adjust against the deposit and claim the remaining balance legally.`,
      },
    ],
    finalCta: {
      text: "Stop chasing your tenant. Make them pay with a formal legal demand.",
      buttonText: "Recover Rent Now",
    },
  },

  story: {
    badge: "Recovery Success",
    title: "How Mrs. Gupta recovered",
    titleHighlight: "₹2.4 Lakhs",
    description:
      "Mrs. Gupta's commercial tenant in Bangalore owed 6 months of rent and kept making false promises. Fearing he would run away, she sent a legal notice through VakilTalk demanding the principal amount plus 18% interest. The tenant, realizing that a lawsuit would ruin his business credit, arranged for funds and cleared the entire pending amount of ₹2.4 Lakhs within 15 days of receiving the notice.",
    features: [
      {
        icon: "document",
        title: "Interest Claimed",
        description:
          "Successfully demanded 18% p.a. interest on the delayed payments.",
      },
      {
        icon: "speedometer",
        title: "15-Day Payment",
        description:
          "Tenant paid immediately to avoid civil litigation and business reputation loss.",
      },
      {
        icon: "wallet",
        title: "Lease Continued",
        description:
          "Since dues were cleared, the tenancy continued with stricter terms.",
      },
    ],
  },

  legalFramework: {
    badge: "Legal Recourse",
    title: "Laws on Rent",
    titleHighlight: "Default",
    description:
      "Indian laws provide specific remedies for landlords to recover money and possession from defaulting tenants.",
    expertInsight: {
      quote:
        "A 'Notice to Pay or Quit' is a powerful tool. In most states, if a tenant pays arrears within the notice period, they can save their tenancy. If not, eviction is almost guaranteed.",
    },
    accordionSections: [
      {
        id: "cpc-recovery",
        title: "Civil Procedure Code (Order 37)",
        icon: <span className="text-primary">⚖️</span>,
        items: [
          { text: "Allows filing 'Summary Suits' for debt recovery based on written contracts." },
          { text: "Defendant (tenant) cannot defend automatically; they need court permission." },
          { text: "Much faster than ordinary civil suits." },
        ],
      },
      {
        id: "rent-acts-default",
        title: "Rent Control Acts",
        icon: <span className="text-primary">🏠</span>,
        items: [
          { text: "Defines 'Habitual Defaulter' as a valid ground for eviction." },
          { text: "Mandates a specific notice period (e.g., 2 months in some states) to cure the default." },
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
            description: "Tenant pays the arrears. You can then choose to continue or terminate the lease.",
          },
          {
            title: "Partial Payment",
            description: "If they pay partially, issue a receipt 'Without Prejudice' to your right to evict.",
          },
        ],
      },
      {
        situation: "If NO Reply / Default",
        actions: [
          {
            title: "File Case (Money)",
            description: "File a Summary Suit (Order 37 CPC) just to recover the money quickly.",
          },
          {
            title: "File Case (Eviction)",
            description: "File an Eviction Suit on ground of 'Non-Payment of Rent'.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["rent-arrears"],

  faqs: [
    {
      id: "deduct-security-deposit",
      question: "Can I just deduct unpaid rent from the security deposit?",
      answer:
        "You can, but it leaves you vulnerable if the tenant refuses to vacate later or causes damages. The security deposit is primarily for property safety. It is legally safer to demand the rent first. If the lease ends and they leave, you can settle the accounts. Using the deposit to cover rent while the tenant stays effectively leaves you with zero security.",
    },
    {
      id: "cheque-bounce-rent",
      question: "Tenant gave a cheque for rent but it bounced. What now?",
      answer:
        "This gives you a double advantage. You can send a Rent Arrears Notice for the dues AND a Cheque Bounce Notice (Section 138 NI Act) for the dishonored cheque. The threat of criminal prosecution under the Cheque Bounce law is often faster and more effective than civil recovery suits.",
    },
    {
      id: "whatsapp-notice-valid",
      question: "Is a WhatsApp message valid as a legal notice for rent?",
      answer:
        "Courts in India have started accepting WhatsApp/Email notices as valid *evidence* of communication, but they are not a substitute for a formal legal notice sent via Registered Post, especially for eviction purposes. A formal notice on a lawyer's letterhead carries statutory weight that a WhatsApp text does not.",
    },
    {
      id: "tenant-partial-payment",
      question: "Tenant is paying small amounts partially. Should I accept?",
      answer:
        "Only accept it 'without prejudice.' Issue a receipt stating clearly that this is a partial payment and the balance is still due. If you accept rent without objection, the tenant can claim in court that you waived your right to evict them for that month's default. Consult a lawyer on how to document these receipts.",
    },
    {
      id: "recovery-time-limit",
      question: "Is there a time limit to claim unpaid rent?",
      answer:
        "Yes, the Limitation Act imposes a 3-year limit. You can only sue to recover rent dues that are less than 3 years old. If you wait for 4 years to claim old rent, the court will dismiss it as 'time-barred.' Send a notice immediately to stop the clock.",
    },
    {
      id: "lock-out-defaulter",
      question: "Can I lock out a tenant who hasn't paid for 6 months?",
      answer:
        "No. Even if they are defaulters, you cannot take the law into your own hands. Illegal dispossession is a criminal offense. You must follow the due process: Notice -> Eviction Suit -> Court decree -> Bailiff execution over the property.",
    },
  ],
};
