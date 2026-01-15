import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";
import { workplaceHarassmentSections } from "../notice-seo-content";

export const workplaceHarassmentData: NoticeTypeData = {
  slug: "workplace-harassment-legal-notice",
  title: "Legal Notice for Workplace Harassment",
  cluster: "employment",

  seo: {
    title: "Send Legal Notice for Workplace Harassment - Get Justice | VakilTech",
    description:
      "Face workplace harassment? Take legal action with a strong notice. Confidential, professional, and supportive assistance.",
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
      "Facing harassment? Sending a legal notice for mental harassment or workplace sexual harassment is a critical step to assert your rights. Under the POSH Act 2013, this notice compels the employer to constitute an Internal Complaints Committee (ICC) and investigate the matter within 90 days.",
    sections: workplaceHarassmentSections,
    finalCta: {
      text: "No one should face harassment at work. Take legal action to protect your dignity and career.",
      buttonText: "Send Harassment Legal Notice",
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
  
  postNoticeRoadmap: {
    title: "Roadmap: What Happens After Sending the Notice?",
    scenarios: [
      {
        situation: "If Reply Received",
        actions: [
          {
            title: "ICC Inquiry",
            description: "The company must constitute an ICC (Internal Complaints Committee) to investigate within 90 days.",
          },
          {
            title: "Resolution",
            description: "If proven, the harasser can be terminated, suspended, or asked to apologize.",
          },
        ],
      },
      {
        situation: "If NO Reply / Retaliation",
        actions: [
          {
            title: "File Complaint",
            description: "Complain to the District Officer (LCC) or Ministry of Women & Child Development (She-Box).",
          },
          {
            title: "Labor Court",
            description: "Approach the Labor Court for wrongful treatment or failure to implement POSH Act.",
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
