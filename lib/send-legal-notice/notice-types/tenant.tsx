import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const tenantNoticeData: NoticeTypeData = {
  slug: "legal-notice-to-tenant",
  title: "Legal Notice to Tenant",
  cluster: "tenant-property",

  seo: {
    title: "Legal Notice to Tenant for Eviction | Draft & Send in 24 Hrs",
    description:
      "Tenant not vacating or paying rent? Send a strong legal notice for eviction to tenant under Rent Control Act. Professional drafting by expert lawyers. Starts ₹1499.",
    keywords: [
      "legal notice to tenant",
      "tenant eviction notice",
      "eviction notice format",
      "notification to tenant to vacate",
      "lease termination notice",
      "landlord legal notice format",
      "eviction notice to tenant sample india",
      "legal notice for rental property",
    ],
  },

  hero: {
    badge: "For Landlords",
    headline: "Legally Evict a Tenant & Recover Your Property",
    subheadline: "Expert-drafted legal notices for eviction, rent recovery, and lease termination.",
    flipWords: [
      "Evict Legally",
      "Recover Possession",
      "End Tenancy",
      "Claim Arrears",
    ],
    badges: [
      { icon: "shield", text: "Rent Act\nCompliant" },
      { icon: "clock", text: "Dispatch in\n24 Hours" },
    ],
  },

  content: {
    h1: "Legal Notice to Tenant for Eviction in India",
    introduction:
      "Dealing with a difficult tenant can be stressful. Whether they are defaulting on rent, refusing to vacate after the lease expires, or damaging your property, sending a **Legal Notice to Tenant** is the mandatory first step to initiate eviction proceedings. In India, you cannot forcibly evict a tenant without following due process. A well-drafted legal notice, citing the specific grounds under the *Transfer of Property Act, 1882* or your state's *Rent Control Act*, formally warns the tenant of legal action and often resolves the issue without going to court.",
    sections: [
      {
        heading: "When Can You Send an Eviction Notice?",
        content: `A landlord cannot evict a tenant arbitrarily. You must have valid legal grounds. Common reasons to send a legal notice to a tenant include:
        
        *   **Non-Payment of Rent:** If the tenant has not paid rent for more than 15 days or as stipulated in the agreement.
        *   **Expiry of Lease Agreement:** If the rental agreement has expired and the tenant refuses to renew or vacate.
        *   **Breach of Contract:** Violation of terms like unauthorized subletting, keeping pets (if prohibited), or commercial use of residential property.
        *   **Property Damage:** Causing structural damage or major alterations without permission.
        *   **Personal Requirement:** The landlord genuinely needs the property for their own occupation (Bona Fide requirement).
        *   **Nuisance:** Creating a nuisance for neighbors or conducting illegal activities on the premises.`,
      },
      {
        heading: "Essential Elements of a Valid Tenant Notice",
        content: `To be legally valid and effective in court, your eviction notice must contain specific details:
        
        1.  **Clear Description:** Full address and description of the tenanted property.
        2.  **Tenancy Details:** Start date, current rent, and lease expiry date.
        3.  **Grounds for Eviction:** Clearly state *why* you are asking them to leave (e.g., Section 106 of Transfer of Property Act).
        4.  **Demand:** Specific demand to vacate and hand over peaceful possession.
        5.  **Notice Period:** A reasonable time to vacate (typically 15 to 30 days, depending on the law and agreement).
        6.  **Consequences:** Warning of civil suit and claim for damages/mesne profits if they fail to comply.`,
      },
      {
        heading: "Procedure to Evict a Tenant in India",
        content: `The legal process for eviction safeguards both landlord and tenant rights:
        
        1.  **Draft the Notice:** A lawyer drafts the notice citing relevant laws (Rent Control Act or TPA).
        2.  **Send via Registered Post:** It must be sent via Registered Post AD (RPAD) to prove delivery.
        3.  **Wait for Response:** The tenant is given time (e.g., 15-30 days) to reply or vacate.
        4.  **File an Eviction Suit:** If they refuse to leave, you file an eviction petition in the Rent Control Court or Civil Court.
        5.  **Court Order:** The court hears both sides and issues an eviction order if your grounds are valid.
        6.  **Execution:** If they still stay, police assistance can be sought to enforce the court order.`,
      },
    ],
    finalCta: {
      text: "Don't take the law into your own hands. Start the legal eviction process correctly today.",
      buttonText: "Draft Eviction Notice Now",
    },
  },

  story: {
    badge: "Landlord Success Story",
    title: "How Mr. Sharma reclaimed his flat in",
    titleHighlight: "30 Days",
    description:
      "Mr. Sharma's tenant in Pune stopped paying rent and refused to leave after the agreement expired. Worried about property grabbing, he contacted VakilTalk. We drafted a strong legal notice citing the Maharashtra Rent Control Act and the expiry of the license period. The tenant, realizing the legal seriousness and potential liability for 'mesne profits' (market rate damages), vacated the property within the 30-day notice period without a court battle.",
    features: [
      {
        icon: "document",
        title: "Strong Legal Grounds",
        description:
          "Cited specific sections of Rent Control Act to establish illegal possession.",
      },
      {
        icon: "speedometer",
        title: "30-Day Resolution",
        description:
          "Tenant vacated voluntarily to avoid litigation costs and damages.",
      },
      {
        icon: "wallet",
        title: "Recovered Pending Rent",
        description:
          "Notice included a demand for all rent arrears, which were paid upon vacating.",
      },
    ],
  },

  legalFramework: {
    badge: "Know the Law",
    title: "Laws Governing Tenant",
    titleHighlight: "Eviction",
    description:
      "Eviction laws in India are tenant-friendly, making procedural compliance critical for landlords.",
    expertInsight: {
      quote:
        "Sending a defective notice is the #1 reason eviction suits get dismissed. Always ensure your notice lists the correct legal grounds.",
    },
    accordionSections: [
      {
        id: "transfer-property-act",
        title: "Transfer of Property Act, 1882",
        icon: <span className="text-primary">📜</span>,
        items: [
          { text: "Section 106: Mandates serving a notice to terminate a lease." },
          { text: "Governs tenancies not covered by Rent Control Acts." },
          { text: "Typically requires 15 days notice expiring with the end of a tenancy month." },
        ],
      },
      {
        id: "rent-control-acts",
        title: "State Rent Control Acts",
        icon: <span className="text-primary">🏛️</span>,
        items: [
          { text: "Specific to each state (e.g., Delhi Rent Control Act, Maharashtra Rent Control Act)." },
          { text: "Protects tenants from arbitrary eviction." },
          { text: "Specifies valid grounds like bonafide requirement or non-payment." },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["tenant-eviction"],

  faqs: [
    {
      id: "evict-without-agreement",
      question: "Can I evict a tenant without a rental agreement?",
      answer:
        "Yes, you can. Even without a written agreement, a tenancy is presumed to be month-to-month under the Transfer of Property Act. You can terminate this oral tenancy by sending a valid legal notice giving 15 days' time to vacate. If they refuse, you can file an eviction suit based on the termination of oral tenancy.",
    },
    {
      id: "police-help-eviction",
      question: "Can police help me evict a tenant?",
      answer:
        "Generally, no. The police treat tenancy disputes as civil matters and will ask you to go to court. They will only intervene if there is a law and order situation (e.g., violence). You cannot use police influence to forcibly throw out a tenant; that is illegal. However, once you have a court order for eviction, police assistance can be officially requested to execute it.",
    },
    {
      id: "tenant-not-paying",
      question: "Tenant is not paying rent and not vacating. What to do?",
      answer:
        "You should immediately send a legal notice demanding the unpaid rent and asking them to vacate. Under many Rent Control Acts, if a tenant pays the arrears within the notice period (usually 2 months), they cannot be evicted for that default. If they don't pay or vacate, this notice becomes the foundation for your eviction suit.",
    },
    {
      id: "time-to-evict",
      question: "How long does the eviction process take?",
      answer:
        "The first step—sending a legal notice—takes only 24-48 hours. The notice period given to the tenant is usually 15-30 days. If they vacate, it's over. If you must go to court, it can take 1-3 years depending on the case backlog and whether the tenant contests it. However, Summary Proceedings (faster track) are available in some states for specific grounds like bonafide requirement.",
    },
    {
      id: "cost-of-notice",
      question: "How much does it cost to send a legal notice to a tenant?",
      answer:
        "At VakilTalk, we draft and send a professional Legal Notice to Tenant starting at ₹1,499. This includes drafting by an experienced property lawyer, review, and dispatch via Registered Post AD. This small investment often saves you lakhs in potential litigation fees by resolving the matter early.",
    },
    {
      id: "lock-property",
      question: "Can I lock the property to stop the tenant from entering?",
      answer:
        "No, absolutely not. Locking out a tenant, cutting off electricity/water, or throwing their goods out is illegal in India. The tenant can file a police complaint against you for wrongful restraint and even get a court order to restore their possession. Always follow the due process of law.",
    },
  ],
};
