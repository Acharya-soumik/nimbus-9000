import { NoticeTypeData } from "./types";
import { realSampleNotices } from "../real-sample-notices";

export const childCustodyData: NoticeTypeData = {
  slug: "legal-notice-for-child-custody",
  title: "Legal Notice for Child Custody",
  cluster: "family",

  seo: {
    title: "Legal Notice for Child Custody | Visitation Rights | ₹499",
    description:
      "Fighting for child custody? Send a legal notice for custody or visitation rights. Expert family lawyers, 'Best Interest of Child' focus. Start now.",
    keywords: [
      "legal notice for child custody",
      "visitation rights notice",
      "father custody rights india",
      "child custody laws india",
      "guardianship legal notice",
    ],
  },

  hero: {
    badge: "PROTECT YOUR CHILD",
    headline: "Secure Your Child's Future",
    subheadline: "Child custody battles are emotional. A legal notice is the first step to claim your parental rights and visitation access formally.",
    flipWords: [
      "Sole Custody",
      "Joint Custody",
      "Visitation Rights",
      "Father's Rights",
    ],
    badges: [
      { icon: "users", text: "Child Welfare\nPriority" },
      { icon: "shield", text: "Legal\nGuardian" },
    ],
  },

  content: {
    h1: "Legal Notice for Child Custody in India",
    introduction:
      "In any separation or divorce, the most critical issue is the welfare of the child. If you are being denied access to your child, or if you believe the other parent is unfit to care for them, sending a legal notice for child custody is imperative. It formally asserts your rights under the Guardians and Wards Act, 1890, and sets the stage for obtaining either full custody, joint custody, or visitation rights.",
    sections: [
      {
        heading: "Why Send a Custody Notice?",
        content: "Sending a legal notice is a proactive step that protects your parental rights:",
        listItems: [
          "Asserts Your Rights: It puts on record that you are actively seeking custody and not abandoning your child.",
          "Demands Visitation: If you are being denied access, the notice formally demands a structured visitation schedule.",
          "Precursor to Court: It is often a necessary preliminary step to show you tried to resolve the issue before filing a Custody Petition.",
        ],
      },
      {
        heading: "Types of Custody You Can Claim",
        content: "Understanding the different forms of custody helps in drafting a precise notice:",
        listItems: [
          "Physical Custody: The child lives with you primarily.",
          "Joint Custody: The child splits time between both parents (increasingly preferred by courts for the child's welfare).",
          "Legal Custody: You have the right to make decisions about the child's education, health, and religious upbringing.",
        ],
      },
      {
        heading: "Legal Basis for Custody",
        content: "Courts in India decide custody based on specific legal principles:",
        listItems: [
          "Welfare of Child: The 'Paramount Consideration' for courts is not the parent's right, but solely the child's best interest.",
          "Tender Years Doctrine: Usually, custody of children under 5 years is given to the mother, unless she is proven unfit.",
          "Preference of Child: For older children (usually 9+), courts may consider the child's own preference.",
        ],
      },
    ],
    finalCta: {
      text: "Your child deserves the best care. Don't delay in asserting your parental rights.",
      buttonText: "Draft Custody Notice Now",
    },
  },

  story: {
    badge: "CLIENT SUCCESS STORY",
    title: "Father Won Visitation Rights in",
    titleHighlight: "2 Weeks",
    description:
      "Rahul (name changed) was completely denied access to his 5-year-old daughter by his estranged wife for 6 months. He felt helpless. We drafted a strong legal notice citing the 'welfare of the child' and his natural rights as a father. The notice made it clear that denying access is a violation of the child's rights too. Fearing a court battle where she might look unreasonable, the wife agreed to a visitation schedule (every weekend) within 2 weeks of receiving the notice.",
    features: [
      {
        icon: "clock",
        title: "Immediate Access",
        description:
          "Visitation started even before the divorce was finalized.",
      },
      {
        icon: "users",
        title: "Joint Parenting",
        description:
          "Established a framework for co-parenting despite personal differences.",
      },
      {
        icon: "shield",
        title: "Avoided Toxicity",
        description:
          "Solved the issue without dragging the child to court hearings.",
      },
    ],
  },

  legalFramework: {
    badge: "CUSTODY LAWS",
    title: "Custody Laws in",
    titleHighlight: "India",
    description:
      "Custody laws are gender-neutral in theory but focus heavily on who can provide better care.",
    expertInsight: {
      quote:
        "Financial capacity is NOT the only factor. A father cannot 'buy' custody just because he earns more. Emotional bonding and daily care matter more.",
    },
    accordionSections: [
      {
        id: "factors-considered",
        title: "Factors Courts Consider",
        icon: <span className="text-primary">👶</span>,
        items: [
          { text: "Emotional bond between child and parent" },
          { text: "Educational and medical needs of the child" },
          { text: "Safety and moral upbringing" },
          { text: "Child's own preference (if old enough, usually 9+)" },
          { text: "Conduct of the parents" },
        ],
      },
    ],
  },

  sampleNotice: realSampleNotices["child-custody"] || realSampleNotices["divorce"], // Fallback if specific sample missing

  faqs: [
    {
      id: "father-custody",
      question: "Can a father get full custody of the child?",
      answer:
        "Yes, absolutely. While courts often favor mothers for young children (under 5), a father can get full custody if he proves the mother is unfit (abusive, neglecting, mentally unstable) or if the child (if older) prefers the father. Increasing number of fathers are winning custody battles in India today.",
    },
    {
      id: "visitation-rights",
      question: "What if I just want to see my child, not full custody?",
      answer:
        "You should seek 'Visitation Rights'. Even if the other parent has physical custody, you have a legal right to meet your child regularly (e.g., weekends, birthdays, holidays). A legal notice is the best way to demand a structured visitation schedule.",
    },
    {
      id: "child-preference",
      question: "Does the child's wish matter?",
      answer:
        "Yes. If the child is old enough (usually 9 years or older) to form an intelligent preference, the court will interview the child and give significant weight to their wish. However, the court strictly ensures the child hasn't been tutored or brainwashed by one parent.",
    },
    {
      id: "mother-custody",
      question: "Is mother's custody automatic?",
      answer:
        "No. While there is a presumption in favor of the mother for infants and toddlers ('Tender Years Doctrine'), it is not absolute. If the mother cannot provide a safe or stable environment, custody can be given to the father or grandparents.",
    },
    {
      id: "joint-custody",
      question: "What is Joint Custody? Is it allowed in India?",
      answer:
        "Joint Custody means both parents share the responsibility. While the child effectively lives with one parent (primary custodian), the other parent gets significant visitation time and decision-making power. Indian courts are increasingly moving towards this model to ensure the child gets love from both parents.",
    },
    {
      id: "custody-cost",
      question: "How much does a custody notice cost?",
      answer:
        "VakilTech charges ₹1,499. This includes a consultation to understand your specific situation (denial of access, unfit spouse, etc.), drafting a notice prioritizing the 'Best Interest of the Child', and dispatch via Registered Post.",
    },
    {
      id: "grandparents-rights",
      question: "Can grandparents claim custody?",
      answer:
        "Yes, in certain tragic circumstances (death of parents) or if both parents are proven unfit/abusive, a court can award custody to grandparents to ensure the child's safety and welfare.",
    },
    {
      id: "move-abroad",
      question: "Can my spouse take the child abroad without my consent?",
      answer:
        "No. Taking a child out of the court's jurisdiction or to another country without the other parent's consent (or court permission) can be considered child abduction. You should immediately send a legal notice and file for an injunction to stop this.",
    },
  ],
};
