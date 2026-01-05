import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const evictionNoticeData: NoticeTypeData = {
  slug: "eviction-notice",
  title: "Eviction Notice",
  cluster: "tenant-property",

  seo: {
    title: "Eviction Notice to Tenant India | Legal Process to Vacate",
    description:
      "Need to evict a tenant? Send a strict Eviction Notice. 100% legal compliance with Rent Control Act. Get tenant to vacate peacefully. Starts ₹1499.",
    keywords: [
      "eviction legal notice",
      "tenant eviction notice format",
      "eviction notice",
      "legal notice for eviction of tenant",
      "notice to vacate house by landlord",
      "15 days notice to vacate",
      "eviction letter from landlord to tenant",
      "grounds for eviction in india",
    ],
  },

  hero: {
    badge: "Process of Law",
    headline: "Evict Tenants Legally & Peacefully",
    subheadline: "Strict legal notices to terminate tenancy and demand vacant possession.",
    flipWords: [
      "Terminate Lease",
      "Demand Vacation",
      "Regain Possession",
      "Follow Law",
    ],
    badges: [
      { icon: "shield", text: "Rent Act\nCompliant" },
      { icon: "clock", text: "Notice Period\nGuidance" },
    ],
  },

  content: {
    h1: "Legal Notice for Eviction of Tenant in India",
    introduction:
      "Evicting a tenant is a legal process, not a physical act. You cannot simply throw a tenant out. To regain possession of your property, you must first serve a formal **Eviction Notice** terminating the tenancy and strictly complying with the Rent Control Act applicable in your state. A flawed notice is the most common reason for eviction suits to fail in court.",
    sections: [
      {
        heading: "Valid Grounds for Eviction Under Rent Control Acts",
        content: `While grounds vary by state (e.g., Delhi vs. Maharashtra), common valid reasons for eviction include:
        
        *   **Bona Fide Requirement:** You honestly need the property for yourself or your family members.
        *   **Subletting:** Tenant has sublet the property without your written consent.
        *   **Non-Use:** Tenant has not resided in the property for a continuous period (e.g., 6 months).
        *   **Acquisition of Alternate Property:** Tenant has bought or built their own residence in the same city.
        *   **Material Alterations:** Tenant made structural changes without permission.
        *   **Nuisance & Illegal Use:** Using residential property for commercial purposes or illegal activities.`,
      },
      {
        heading: "Termination of Tenancy vs. Eviction",
        content: `It's crucial to understand the difference:
        
        *   **Termination of Tenancy:** This is the act of ending the lease agreement (e.g., by sending a Section 106 notice under Transfer of Property Act).
        *   **Eviction:** This is the process of recovering physical possession *after* the tenancy has been terminated.
        *   **The Rule:** You cannot file for eviction unless you have first validly terminated the tenancy through a legal notice.`,
      },
      {
        heading: "Steps to File an Eviction Suit",
        content: `If the tenant ignores your notice:
        1.  **File Petition:** Submit an eviction petition in the Rent Control Court / Civil Court.
        2.  **Summons:** Court sends summons to the tenant.
        3.  **Written Statement:** Tenant files their defense.
        4.  **Evidence:** Both parties prove their claims (rent receipts, agreement, photos).
        5.  **Arguments & Judgment:** Court passes an eviction decree.
        6.  **Execution:** If tenant still refuses, court bailiff helps take possession.`,
      },
    ],
    finalCta: {
      text: "Avoid the long court battle. A strong notice usually convinces tenants to leave voluntarily.",
      buttonText: "Start Eviction Process",
    },
  },

  story: {
    badge: "Possession Regained",
    title: "How Kavita reclaimed her home for",
    titleHighlight: "Self-Use",
    description:
      "Kavita needed her rented apartment in Delhi for her son's marriage. Her tenant of 5 years refused to move. VakilTalk drafted a precise notice citing 'Bona Fide Requirement' under the Delhi Rent Control Act, detailing her son's upcoming wedding and lack of other accommodation. The tenant, advised by his own lawyer that Kavita's ground was legally undeniable, agreed to vacate within 3 months amicably.",
    features: [
      {
        icon: "document",
        title: "Bona Fide Proven",
        description:
          "Notice established genuine personal need, a strong ground for eviction.",
      },
      {
        icon: "speedometer",
        title: "No Litigation",
        description:
          "Matter resolved through notice negotiation, saving 2+ years of court time.",
      },
      {
        icon: "wallet",
        title: "Smooth Handover",
        description:
          "Tenant handed over keys peacefully on the agreed date.",
      },
    ],
  },

  legalFramework: {
    badge: "State Laws",
    title: "Rent Control",
    titleHighlight: "Acts",
    description:
      "Every state has its own Rent Control Act (e.g., MRCA 1999, DRCA 1958) which overrides general contract terms.",
    expertInsight: {
      quote:
        "Drafting an eviction notice requires knowing specifically which State Act applies. Using a generic template often leads to invalid notices.",
    },
    accordionSections: [
      {
        id: "maharashtra-rent-act",
        title: "Maharashtra Rent Control Act, 1999",
        icon: <span className="text-primary">🏛️</span>,
        items: [
          { text: "Sec 16: Landlord can recover if they need premises for self-occupation." },
          { text: "Sec 16(1)(g): Bona fide requirement is the most used ground." },
        ],
      },
      {
        id: "delhi-rent-act",
        title: "Delhi Rent Control Act, 1958",
        icon: <span className="text-primary">🏛️</span>,
        items: [
          { text: "Highly tenant-friendly." },
          { text: "Sec 14(1)(e): Eviction for bona fide need of owner." },
          { text: "Requires Summary Procedure (leave to defend) for faster disposal." },
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
            title: "Vacation",
            description: "The tenant agrees to vacate. Ensure you check utility bills and condition before taking keys.",
          },
          {
            title: "Time Extension",
            description: "They might ask for 1-2 months more. If agreed, sign a 'Vacation Undertaking' to ensure they leave.",
          },
        ],
      },
      {
        situation: "If NO Reply / Refusal",
        actions: [
          {
            title: "File Case",
            description: "File an Eviction Suit in the Rent Control Court / Civil Court.",
          },
          {
            title: "Tip",
            description: "Do not cut electricity or water. It's illegal and weakens your case.",
          },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["tenant-eviction"],

  faqs: [
    {
      id: "evict-senior-citizen",
      question: "Is it harder to evict a senior citizen tenant?",
      answer:
        "Legally, the grounds for eviction remain the same (non-payment, bona fide need, etc.) regardless of age. However, courts may be sympathetic to senior citizens regarding valid 'alternative accommodation.' Conversely, many states have 'Senior Citizen' acts that speed up eviction *if the landlord* is a senior citizen needing their property back.",
    },
    {
      id: "locked-house-left",
      question: "Tenant locked the house and disappeared. Can I break the lock?",
      answer:
        "No. Even if they are gone, breaking the lock is illegal. You must file a suit and get a court order for 'Inspection' or appointment of a 'Court Commissioner' to break the lock in official presence. This protects you from future claims that 'valuables were stolen' by you.",
    },
    {
      id: "commercial-vs-residential",
      question: "Is commercial eviction different from residential?",
      answer:
        "Yes but the process is similar. Grounds like bona fide need apply to both (in most states). However, for commercial eviction, courts may scrutinize the 'hardship' caused to the tenant's business more closely. Contracts for commercial leases often have stricter termination clauses.",
    },
    {
      id: "notice-period-mandatory",
      question: "Is the 15-day notice mandatory?",
      answer:
        "Yes, under Section 106 of the Transfer of Property Act, a 15-day notice ending with the tenancy month is the standard requirement for month-to-month tenancies (unless a contract says otherwise). In Rent Control areas, this might be 1-3 months. Failure to give the exact notice period makes the entire eviction suit void.",
    },
    {
      id: "tenant-harassment",
      question: "Tenant is filing false police complaints. What to do?",
      answer:
        "Tenants often file false harassment complaints to counter eviction. Anticipate this. Communicate only in writing/email. Install CCTV in common areas. File a 'Caveat Petition' in court so that if they seek an injunction against you, the court hears you first. Mention their behavior in your legal notice.",
    },
    {
      id: "sell-rented-property",
      question: "Can I sell a property that has a tenant?",
      answer:
        "Yes, you can sell 'tenanted property.' The tenancy transfers to the new owner (Attornment of Tenancy). The new owner becomes the landlord and can then send an eviction notice for their own bona fide requirement. However, properties with sitting tenants usually sell for a lower price.",
    },
  ],
};
