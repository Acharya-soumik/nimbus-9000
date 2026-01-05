/**
 * Blog Data Types & Mock Data
 * WordPress REST API compatible interfaces for blog functionality
 */

/* =============================================================================
 * TYPE DEFINITIONS - WordPress REST API Compatible
 * ============================================================================= */

/**
 * WordPress Author embedded data structure
 */
export interface BlogAuthor {
  id: number;
  name: string;
  description?: string;
  avatar_urls?: { [key: string]: string };
  slug?: string;
}

/**
 * WordPress Category/Tag term structure
 */
export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count: number;
  parent: number;
}

/**
 * WordPress Featured Media embedded structure
 */
export interface BlogFeaturedMedia {
  source_url: string;
  alt_text: string;
  media_details?: {
    sizes?: {
      thumbnail?: { source_url: string; width: number; height: number };
      medium?: { source_url: string; width: number; height: number };
      large?: { source_url: string; width: number; height: number };
      full?: { source_url: string; width: number; height: number };
    };
  };
}

/**
 * WordPress Post _embedded structure
 */
export interface BlogPostEmbedded {
  author?: BlogAuthor[];
  "wp:featuredmedia"?: BlogFeaturedMedia[];
  "wp:term"?: BlogCategory[][];
}

/**
 * Main BlogPost interface - WordPress REST API compatible
 * Supports both direct API response and _embedded data
 */
export interface BlogPost {
  id: number;
  slug: string;
  date: string; // ISO 8601 format
  modified: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: BlogPostEmbedded;
}

/**
 * Extended post metadata (calculated/derived fields)
 */
export interface BlogPostMeta {
  readingTime: number; // in minutes
  wordCount: number;
  featuredImageUrl?: string;
  authorName?: string;
  authorAvatar?: string;
  categoryNames?: string[];
  categorySlug?: string;
}

/**
 * Helper function to calculate reading time from HTML content
 */
export function calculateReadingTime(htmlContent: string): number {
  // Strip HTML tags and count words
  const text = htmlContent.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  // Average reading speed: 200 words per minute
  return Math.max(1, Math.ceil(wordCount / 200));
}

/**
 * Helper function to extract post metadata from embedded data
 */
export function getPostMeta(post: BlogPost): BlogPostMeta {
  const readingTime = calculateReadingTime(post.content.rendered);
  const wordCount = post.content.rendered
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const author = post._embedded?.author?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] || [];

  return {
    readingTime,
    wordCount,
    featuredImageUrl:
      featuredMedia?.media_details?.sizes?.large?.source_url ||
      featuredMedia?.source_url,
    authorName: author?.name,
    authorAvatar: author?.avatar_urls?.["96"] || author?.avatar_urls?.["48"],
    categoryNames: categories.map((cat) => cat.name),
    categorySlug: categories[0]?.slug,
  };
}

/**
 * Helper function to format date for display
 */
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Helper function to strip HTML and truncate excerpt
 */
export function cleanExcerpt(htmlExcerpt: string, maxLength = 160): string {
  const text = htmlExcerpt.replace(/<[^>]*>/g, "").trim();
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

/* =============================================================================
 * MOCK DATA FOR DEVELOPMENT
 * ============================================================================= */

/**
 * Mock Authors
 */
export const mockAuthors: BlogAuthor[] = [
  {
    id: 1,
    name: "Adv. Priya Sharma",
    slug: "priya-sharma",
    description:
      "Senior Legal Consultant with 15+ years of experience in civil and family law.",
    avatar_urls: {
      "48": "https://ui-avatars.com/api/?name=Priya+Sharma&background=EF5A6F&color=fff",
      "96": "https://ui-avatars.com/api/?name=Priya+Sharma&background=EF5A6F&color=fff&size=96",
    },
  },
  {
    id: 2,
    name: "Adv. Rajesh Kumar",
    slug: "rajesh-kumar",
    description:
      "Property law expert specializing in real estate disputes and documentation.",
    avatar_urls: {
      "48": "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3B82F6&color=fff",
      "96": "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3B82F6&color=fff&size=96",
    },
  },
  {
    id: 3,
    name: "Adv. Meera Patel",
    slug: "meera-patel",
    description:
      "Consumer rights advocate with expertise in RERA and banking disputes.",
    avatar_urls: {
      "48": "https://ui-avatars.com/api/?name=Meera+Patel&background=10B981&color=fff",
      "96": "https://ui-avatars.com/api/?name=Meera+Patel&background=10B981&color=fff&size=96",
    },
  },
];

/**
 * Mock Categories
 */
export const mockCategories: BlogCategory[] = [
  {
    id: 1,
    name: "Legal Notices",
    slug: "legal-notices",
    description: "Everything about sending and responding to legal notices",
    count: 15,
    parent: 0,
  },
  {
    id: 2,
    name: "Legal Consultation",
    slug: "legal-consultation",
    description: "Tips and guides for legal consultations",
    count: 12,
    parent: 0,
  },
  {
    id: 3,
    name: "Property Law",
    slug: "property-law",
    description: "Real estate, property disputes, and documentation",
    count: 8,
    parent: 0,
  },
  {
    id: 4,
    name: "Family Law",
    slug: "family-law",
    description: "Marriage, divorce, custody, and family matters",
    count: 10,
    parent: 0,
  },
  {
    id: 5,
    name: "Consumer Rights",
    slug: "consumer-rights",
    description: "Consumer protection and complaint resolution",
    count: 6,
    parent: 0,
  },
];

/**
 * Sample HTML content for blog posts
 */
const sampleContent1 = `
<p>A legal notice is a formal written communication sent to an individual or entity to inform them about a grievance and demand appropriate action. In India, legal notices are an essential first step before initiating any civil litigation.</p>

<h2>What is a Legal Notice?</h2>
<p>A legal notice is a document sent by one party to another, either directly or through an advocate, to communicate their intention to undertake legal proceedings against the recipient. It serves as a formal warning and provides an opportunity for the recipient to settle the matter before it escalates to court.</p>

<h2>When Should You Send a Legal Notice?</h2>
<p>Legal notices are typically sent in the following situations:</p>
<ul>
  <li>Non-payment of dues or cheque bounce cases</li>
  <li>Property disputes and encroachment issues</li>
  <li>Breach of contract or agreement</li>
  <li>Defamation cases</li>
  <li>Consumer complaints</li>
  <li>Employment and salary disputes</li>
</ul>

<h2>Key Components of a Legal Notice</h2>
<p>A well-drafted legal notice should contain the following elements:</p>
<ol>
  <li><strong>Details of the sender:</strong> Name, address, and contact information</li>
  <li><strong>Details of the recipient:</strong> Complete name and address</li>
  <li><strong>Facts of the case:</strong> Clear and chronological description of events</li>
  <li><strong>Legal basis:</strong> Applicable laws and provisions</li>
  <li><strong>Relief sought:</strong> Specific demands and timeline</li>
  <li><strong>Consequences:</strong> Action to be taken if demands are not met</li>
</ol>

<blockquote>
  <p>"A legal notice is not just a letter—it's the first step towards justice. It puts the other party on notice and creates a documented trail of your attempts to resolve the matter amicably."</p>
  <cite>— Supreme Court of India</cite>
</blockquote>

<h2>How to Send a Legal Notice?</h2>
<p>Legal notices should be sent through registered post with acknowledgment due  or through a reliable courier service. This ensures you have proof of delivery, which is crucial for court proceedings.</p>

<h3>Steps to Send a Legal Notice:</h3>
<ol>
  <li>Draft the notice with all required details</li>
  <li>Get it reviewed by a qualified advocate</li>
  <li>Send it via RPAD or courier</li>
  <li>Keep a copy for your records</li>
  <li>Wait for the response (usually 15-30 days)</li>
</ol>

<p>If you need professional assistance in drafting and sending a legal notice, our team of experienced advocates can help you through the entire process.</p>
`;

const sampleContent2 = `
<p>Property disputes are among the most common legal issues faced by Indians. Whether it's a boundary dispute with a neighbor, issues with property documentation, or inheritance conflicts, understanding your rights is crucial.</p>

<h2>Common Types of Property Disputes</h2>
<p>Property disputes in India can be broadly categorized into the following types:</p>

<h3>1. Title Disputes</h3>
<p>These arise when there's ambiguity about who legally owns the property. This often happens due to:</p>
<ul>
  <li>Fraudulent sale deeds</li>
  <li>Forged documents</li>
  <li>Multiple claims on the same property</li>
  <li>Incomplete or irregular transfer of ownership</li>
</ul>

<h3>2. Boundary Disputes</h3>
<p>Neighbors often face conflicts over property boundaries. These can escalate quickly and require proper legal resolution through surveys and documentation.</p>

<h3>3. Inheritance Disputes</h3>
<p>After the death of a property owner, disputes often arise among legal heirs regarding the distribution of assets, especially when there's no clear will.</p>

<blockquote>
  <p>"Prevention is better than cure. Always verify property documents thoroughly before making any purchase."</p>
</blockquote>

<h2>Essential Documents for Property Ownership</h2>
<p>To avoid disputes, ensure you have the following documents:</p>
<ol>
  <li><strong>Sale Deed:</strong> The primary document proving ownership transfer</li>
  <li><strong>Encumbrance Certificate:</strong> Shows if the property has any legal dues</li>
  <li><strong>Property Tax Receipts:</strong> Proof of tax payment</li>
  <li><strong>Khata Certificate:</strong> Required for property registration</li>
  <li><strong>Building Plan Approval:</strong> For constructed properties</li>
</ol>

<h2>Steps to Resolve Property Disputes</h2>
<p>If you find yourself in a property dispute, here's what you should do:</p>
<ol>
  <li>Gather all relevant documents</li>
  <li>Consult a property lawyer</li>
  <li>Send a legal notice to the other party</li>
  <li>Attempt mediation or negotiation</li>
  <li>If needed, file a civil suit in court</li>
</ol>

<p>Our legal experts can help you navigate property disputes with proper documentation and legal strategy.</p>
`;

const sampleContent3 = `
<p>Consumer rights in India are protected under the Consumer Protection Act, 2019, which provides a comprehensive framework for addressing consumer grievances and ensuring fair trade practices.</p>

<h2>Your Rights as a Consumer</h2>
<p>Every consumer in India has the following fundamental rights:</p>
<ul>
  <li><strong>Right to Safety:</strong> Protection against hazardous goods and services</li>
  <li><strong>Right to Information:</strong> Access to complete product information</li>
  <li><strong>Right to Choose:</strong> Access to a variety of products at competitive prices</li>
  <li><strong>Right to be Heard:</strong> Your grievances must be addressed</li>
  <li><strong>Right to Seek Redressal:</strong> Fair settlement of disputes</li>
  <li><strong>Right to Consumer Education:</strong> Awareness about rights and responsibilities</li>
</ul>

<h2>How to File a Consumer Complaint</h2>
<p>If you face issues with a product or service, follow these steps:</p>

<h3>Step 1: Document Everything</h3>
<p>Keep all receipts, bills, warranty cards, and communication with the seller. Take photos or videos if the product is defective.</p>

<h3>Step 2: Contact the Seller/Service Provider</h3>
<p>Before taking legal action, try to resolve the issue directly. Send a written complaint and keep a copy.</p>

<h3>Step 3: Send a Legal Notice</h3>
<p>If the issue remains unresolved, send a formal legal notice demanding resolution within 15 days.</p>

<h3>Step 4: File a Complaint with Consumer Forum</h3>
<p>Based on the value of goods/services, file your complaint with:</p>
<ul>
  <li><strong>District Forum:</strong> Claims up to ₹1 crore</li>
  <li><strong>State Commission:</strong> Claims ₹1 crore to ₹10 crore</li>
  <li><strong>National Commission:</strong> Claims above ₹10 crore</li>
</ul>

<blockquote>
  <p>"Consumer protection is not just about getting compensation—it's about creating accountability and improving business practices."</p>
</blockquote>

<h2>Time Limits for Filing Complaints</h2>
<p>Consumer complaints must be filed within <strong>2 years</strong> from the date of cause of action. However, this period can be extended if there's sufficient cause for delay.</p>

<h2>Online Consumer Complaint Portal</h2>
<p>The government has launched the <strong>e-Daakhil portal</strong> for filing consumer complaints online. This makes the process faster and more accessible.</p>

  <p>Need help filing a consumer complaint? Our legal team can guide you through the entire process.</p>
`;

const sampleContentDivorce = `
<p>Blindsided by Divorce? To begin with, there are only two ways to get Divorce in India: mutual (consent) divorce and contested divorce. In a Mutual Consent Divorce, the remedy is quick and easy but the catch is both the spouses ie you and your wife must consent to the divorce i.e both of you must agree to get divorced and will have to affirm that it is not possible to cohabit together before the jurisdictional court. On the other hand, if your wife wants to end the marriage but you do not, you'll have to contest such a proceedings by appointing a lawyer before the court where she files the case.</p>


<h2>Will my wife win the divorce case?</h2>
<p>See, to win a divorce case, the petitioner must prove that there is a valid ground for divorce. Depending on the scenario and what law applies (For Eg: If you both are Hindus and have married as per Hindu Rites and Customs then Hindu Marriage Act, 1955 applies to your case), there are grounds for divorce listed. You can also check the strength of your case using our <strong><a href="/legal-notice-strength">Case Strength Calculator</a></strong>.</p>


<h3>Broadly these are the grounds for divorce under various personal laws:</h3>
<ul>
  <li><strong>Cruelty:</strong> Physical cruelty (violence, abuse, threats) or Mental cruelty (humiliation, false allegations, denial of companionship, constant harassment). Includes conduct making marital life intolerable.</li>
  <li><strong>Adultery:</strong> Voluntary sexual relationship with someone outside the marriage. May be continuous or a single proven act, depending on facts and evidence.</li>
  <li><strong>Desertion:</strong> One spouse abandons the other without reasonable cause. Must be intentional and continuous for a legally prescribed period. Includes refusal to cohabit without justification.</li>
  <li><strong>Conversion of Religion:</strong> One spouse converts to another religion without consent, resulting in breakdown of marital relationship.</li>
  <li><strong>Mental Disorder / Unsoundness of Mind:</strong> Mental illness of such nature and severity that marital life becomes impossible. Includes incurable or severe psychological conditions affecting cohabitation.</li>
  <li><strong>Venereal Disease:</strong> Communicable disease in a serious form that poses risk to the spouse or marital relationship.</li>
  <li><strong>Leprosy (historical ground):</strong> Still referenced in older statutes and precedents but largely diluted or repealed in modern application.</li>
  <li><strong>Renunciation of the World:</strong> One spouse renounces worldly life (e.g., becoming a monk or ascetic), resulting in withdrawal from marital obligations.</li>
  <li><strong>Presumption of Death:</strong> One spouse has not been heard of as alive for a long continuous period. Legal presumption arises after statutory duration.</li>
  <li><strong>Failure to Comply with Decree of Restitution of Conjugal Rights:</strong> Court orders resumption of marital cohabitation, and non-compliance for prescribed period becomes a ground for divorce.</li>
  <li><strong>No Resumption of Cohabitation After Judicial Separation:</strong> Parties remain separated even after court-ordered separation, indicating irretrievable breakdown of marriage.</li>
  <li><strong>Irretrievable Breakdown of Marriage:</strong> (not yet a statutory ground, but recognised judicially) Marriage is beyond repair. Courts may consider prolonged separation, repeated litigation, and total loss of marital bond.</li>
  <li><strong>Mutual Consent:</strong> Both spouses agree that marriage has broken down. Requires voluntary consent and completion of statutory waiting periods (subject to waiver).</li>
</ul>

<p>So, if your wife has filed an application praying for a decree of divorce, she will, through cogent evidence, have to prove that you’ve committed a matrimonial offense under one or more of such grounds.</p>


<h2>My wife sent a legal notice/told me she wants a divorce. Do I have to sign the papers?</h2>
<p>No. However, if you want to amicably end your marriage you can <strong><a href="/legal-consultation">consult a lawyer</a></strong> so he can properly check the papers before you sign them. Additionally, if you’ve received a notice from court for appearance in a divorce case (Matrimonial Suit) you have to mandatorily appear otherwise the court will in your absence pass an ex parte judgement in favour of your wife and your wife will have a divorce decree. To challenge such judgements once passed in matrimonial suits is very difficult. It is suggested that you approach/ consult a lawyer beforehand to avoid future trouble.</p>


<h2>What should I do if she threatens to file a "False 498A" or "Cruelty" case to force my consent?</h2>
<p>You should beforehand intimate the police or the commissioner of police by email of such threats. This will keep a record that you are receiving such threats from your spouse. The police authorities will ideally not take your written complaint physically hence Email is the best option. Also, It is suggested that you keep a track of your whereabout during such time so whenever a fake allegation comes up, you know what documents to show.</p>
<p>For eg: If your wife gives a fake allegation that on 01.01.2026 at about 2pm you have tried assaulting her within the four corners of your home while in reality on 01.01.2026 you were working at office or catching a flight, it would make her case fall flat. If you are predicting such incidents, another best measure is to install CCTV cameras at your residence.</p>
<p>You do not have to force a consent as anyway, even if a false case is registered against you, you can easily go and comply with the Investigating officer’s investigation, explain to him your case and scenario and avoid arrest. In reality, in a very small percentage of cases, police are likely to arrest the husband. The majority of arrests happen where there is actual violence involved.</p>

<h2>What are the stages in divorce proceedings in court?</h2>
<h3>The Roadmap to get a decree of divorce from court.</h3>
<ol>
  <li><strong>Filing & Notice:</strong> The process begins with filing a Petition at the Family Court. The court then issues a Summons (notice) to the other spouse to appear. If the other spouse fails to appear, the court proceeds to decide the case ex parte (one sided) and if the other spouse appears then…</li>
  <li><strong>Reconciliation/Mediation:</strong> Before trial, the court mandatorily refers the couple to a Marriage Counselor or mediator to explore settlement or reconciliation.</li>
  <li><strong>Pleadings:</strong> If mediation fails, the respondent files a Written Statement (reply to the plaint). The petitioner may then file a Rejoinder to answer new points.</li>
  <li><strong>Interim Orders:</strong> At this stage, the court decides on Interim Maintenance and temporary child custody (If prayed for by the petitioner).</li>
  <li><strong>Trial (Evidence & Arguments):</strong> Both sides lead evidence, call witnesses, and undergo Cross-Examination.</li>
  <li><strong>Final Decree:</strong> After hearing Final Arguments, the Judge passes a judgment granting or dismissing the divorce.</li>
</ol>
<p>Such contested divorce proceedings can take anywhere between 3 year to 5 years depending on the court and jurisdiction.</p>

<h2>If I fight the divorce, will I still have to pay her maintenance every month?</h2>
<p>Yes. Maintenance is inevitable. No matter what your friends, family or even your lawyer says. However, the quantum of maintenance is what matters. Consult a lawyer for better understanding this.</p>


<h2>Your Immediate Legal Options</h2>
<h3>A. Restitution of Conjugal Rights (Section 9)</h3>
<p>If your wife has left the matrimonial home without a "reasonable cause," you can <strong><a href="/send-legal-notice">file a petition for the Restitution of Conjugal Rights (RCR)</a></strong> under Section 9 of the Hindu Marriage Act. Ideally, the court intervenes to encourage the spouse to return and live with the other spouse. While the court would not force or pressurise someone to live with the other spouse, a decree of Restitution of Conjugal Rights serves as a formal legal statement that you are willing to maintain the marriage. By filing Restitution of Conjugal Rights you would have proved before the court that you are ready and willing to reside and maintain her while her statements about neglect to provide or maintain in her divorce/maintainance proceedings are false.</p>



<h3>B. Mediation and Counselling</h3>
<p>The Indian judicial system prioritizes the preservation of marriage. In almost every divorce case, the Family Court will mandate mediation. You can participate in the process and <a href="/legal-consultation">amicably resolve the matrimonial dispute</a> between you and your spouse. Out of every 10 cases sent to mediation, almost 4-5 are resolved.</p>

<h3>C. Common Friends</h3>
<p>This is not a very widely used method, but we trust and have seen that if the friends, family members and well wishers intervene on the request of one spouse, the disputes can easily be resolved by setting aside one’s ego. Most of the time, this method is effective if you reach out to a person that the other spouse has high regards for. Eg: This could be a godman, a very good friend, some family member who your spouse respects a lot.</p>


<h2>Crucial "Dos and Don'ts" for husbands</h2>
<h3>The "Dos": Proactive and Protective Steps</h3>
<ol>
  <li><strong>Respond to every notice:</strong> Ignoring a legal notice maybe seen as an admission of the allegations. Always reply via a lawyer expressing your desire to reconcile.</li>
  <li><strong>File for Section 9 (RCR):</strong> If your wife has left the house, filing for Restitution of Conjugal Rights formally documents that you want her back and are not the one deserting. You are not negligent.</li>
  <li><strong>Maintain a 'Diary of Truth':</strong> Try saving screenshots of friendly chats, photos of family outings, and receipts of gifts or household expenses to disprove claims of cruelty. If you are on a trip with her, there is a good possibility that she is happy with you.</li>
  <li><strong>Consult a lawyer:</strong> Online or Offline, but you need to.</li>
</ol>

<h3>The "Don'ts": Common Pitfalls to Avoid</h3>
<ol>
  <li><strong>Don’t Threaten or Intimidate your spouse.</strong></li>
  <li><strong>Don’t Hide Assets Impulsively:</strong> It will be of no use. Because the court usually want to see the last 3 years data for calculating your income and liabilities.</li>
  <li><strong>Don’t Sign "Blank" papers.</strong></li>
  <li><strong>Hide sensitive personal information</strong> from your spouse like ITR file, Company documents, property documents, Cheque Books, Bank Account details, fixed deposit and other asset details, Medical papers, etc. These may be used against you in court.</li>
</ol>

<h2>5 FAQs</h2>
<dl>
 <dt><strong>Q1: Can my wife get a "One-Sided" divorce?</strong></dt>
 <dd>A: No. In India, "No-Fault" divorce isn't a standard law yet. She must prove a specific legal ground (like cruelty) in court. If she fails to prove it and you contest it, the court can dismiss her petition.</dd>
 
 <dt><strong>Q2: What happens if I ignore the legal notice she sent?</strong></dt>
 <dd>A: Never ignore it. If you don't respond, the court may eventually pass an ex-parte (one-sided) decree, meaning she gets the divorce because you didn't show up to defend yourself.</dd>
 
 <dt><strong>Q3: Can she claim my parents' property during the divorce proceedings?</strong></dt>
 <dd>A: No. A wife can only claim maintenance based on the husband's income/assets and potentially a "Right to Residence" in the matrimonial home. She has no legal claim over your parents' self-earned property.</dd>
 
 <dt><strong>Q4: Will filing for Restitution of Conjugal Rights (RCR) make things worse?</strong></dt>
 <dd>A: It depends. If you genuinely want to save the marriage, it is your primary legal remedy. Legally, it shows you are "ready and willing" to perform your marital duties, which is a strong defense against desertion and negligence charges.</dd>
 
 <dt><strong>Q5: How long do I have to wait before the court decides the case?</strong></dt>
 <dd>A: Contested divorces in India are notorious for taking time—typically 3 to 7 years, sometimes longer if appealed. This long duration often leads to settlements or reconciliation.</dd>
</dl>
`;

/**
 * Mock Blog Posts
 */
export const mockPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-send-legal-notice-in-india",
    date: "2024-12-10T10:00:00",
    modified: "2024-12-12T14:30:00",
    title: {
      rendered: "How to Send a Legal Notice in India: A Complete Guide",
    },
    excerpt: {
      rendered:
        "<p>Learn the step-by-step process of sending a legal notice in India, including format, requirements, and best practices for effective legal communication.</p>",
    },
    content: { rendered: sampleContent1 },
    author: 1,
    featured_media: 1,
    categories: [1],
    tags: [1, 2],
    _embedded: {
      author: [mockAuthors[0]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop",
          alt_text: "Legal documents and gavel on desk",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[0]]],
    },
  },
  {
    id: 2,
    slug: "property-disputes-india-complete-guide",
    date: "2024-12-08T09:00:00",
    modified: "2024-12-09T11:00:00",
    title: {
      rendered: "Property Disputes in India: Types, Resolution & Legal Options",
    },
    excerpt: {
      rendered:
        "<p>Understanding property disputes in India - from boundary conflicts to inheritance issues. Learn how to protect your property rights and resolve disputes effectively.</p>",
    },
    content: { rendered: sampleContent2 },
    author: 2,
    featured_media: 2,
    categories: [3],
    tags: [3, 4],
    _embedded: {
      author: [mockAuthors[1]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
          alt_text: "Modern house with property documents",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[2]]],
    },
  },
  {
    id: 3,
    slug: "consumer-rights-protection-india",
    date: "2024-12-05T08:30:00",
    modified: "2024-12-06T10:00:00",
    title: {
      rendered: "Consumer Rights in India: How to File Complaints & Get Justice",
    },
    excerpt: {
      rendered:
        "<p>Know your consumer rights under the Consumer Protection Act, 2019. Learn how to file complaints, seek redressal, and protect yourself from unfair trade practices.</p>",
    },
    content: { rendered: sampleContent3 },
    author: 3,
    featured_media: 3,
    categories: [5],
    tags: [5, 6],
    _embedded: {
      author: [mockAuthors[2]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
          alt_text: "Shopping cart and consumer protection",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[4]]],
    },
  },
  {
    id: 4,
    slug: "cheque-bounce-legal-notice-guide",
    date: "2024-12-01T11:00:00",
    modified: "2024-12-02T09:00:00",
    title: {
      rendered: "Cheque Bounce Notice: Legal Process Under Section 138 NI Act",
    },
    excerpt: {
      rendered:
        "<p>Complete guide to handling cheque bounce cases under Section 138 of the Negotiable Instruments Act. Learn the legal procedure, time limits, and remedies available.</p>",
    },
    content: { rendered: sampleContent1 },
    author: 1,
    featured_media: 4,
    categories: [1],
    tags: [1, 7],
    _embedded: {
      author: [mockAuthors[0]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
          alt_text: "Bank cheque and legal documents",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[0]]],
    },
  },
  {
    id: 5,
    slug: "divorce-legal-process-india",
    date: "2024-11-28T14:00:00",
    modified: "2024-11-29T16:30:00",
    title: {
      rendered: "Divorce in India: Legal Process, Types & Documentation Required",
    },
    excerpt: {
      rendered:
        "<p>Understanding the divorce process in India - mutual consent, contested divorce, legal grounds, and documentation required. Expert guidance for family law matters.</p>",
    },
    content: { rendered: sampleContent2 },
    author: 1,
    featured_media: 5,
    categories: [4],
    tags: [8, 9],
    _embedded: {
      author: [mockAuthors[0]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop",
          alt_text: "Family law and legal consultation",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[3]]],
    },
  },
  {
    id: 6,
    slug: "online-legal-consultation-benefits",
    date: "2024-11-25T10:00:00",
    modified: "2024-11-26T12:00:00",
    title: {
      rendered:
        "5 Benefits of Online Legal Consultation: Why It's the Future of Law",
    },
    excerpt: {
      rendered:
        "<p>Discover the advantages of online legal consultation - convenience, affordability, expert access, and more. Learn how technology is transforming legal services in India.</p>",
    },
    content: { rendered: sampleContent3 },
    author: 2,
    featured_media: 6,
    categories: [2],
    tags: [10, 11],
    _embedded: {
      author: [mockAuthors[1]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&h=630&fit=crop",
          alt_text: "Online legal consultation with laptop",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[1]]],
    },
  },
  {
    id: 7,
    slug: "tenant-eviction-legal-notice",
    date: "2024-11-20T09:30:00",
    modified: "2024-11-21T11:00:00",
    title: {
      rendered: "Tenant Eviction Notice: Legal Process for Landlords in India",
    },
    excerpt: {
      rendered:
        "<p>A comprehensive guide for landlords on the tenant eviction process in India. Learn about legal grounds, notice requirements, and court procedures for property recovery.</p>",
    },
    content: { rendered: sampleContent1 },
    author: 2,
    featured_media: 7,
    categories: [1, 3],
    tags: [1, 3],
    _embedded: {
      author: [mockAuthors[1]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=630&fit=crop",
          alt_text: "Rental property and keys",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[0], mockCategories[2]]],
    },
  },
  {
    id: 8,
    slug: "rera-complaint-homebuyers-guide",
    date: "2024-11-15T12:00:00",
    modified: "2024-11-16T14:00:00",
    title: {
      rendered: "RERA Complaint: How Homebuyers Can File Complaints Against Builders",
    },
    excerpt: {
      rendered:
        "<p>Step-by-step guide to filing RERA complaints against builders and developers. Know your rights as a homebuyer and the remedies available under the Real Estate Act.</p>",
    },
    content: { rendered: sampleContent2 },
    author: 3,
    featured_media: 8,
    categories: [3, 5],
    tags: [3, 5],
    _embedded: {
      author: [mockAuthors[2]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop",
          alt_text: "Building construction and real estate",
          media_details: {
            sizes: {
              thumbnail: {
                source_url:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop",
                width: 150,
                height: 150,
              },
              medium: {
                source_url:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
                width: 300,
                height: 200,
              },
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
              full: {
                source_url:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[2], mockCategories[4]]],
    },
  },
  {
    id: 9,
    slug: "legal-options-if-wife-wants-divorce",
    date: "2025-01-05T09:00:00",
    modified: "2025-01-05T09:00:00",
    title: {
      rendered: "My Wife Wants Divorce but I Don’t – What Are My Legal Options?",
    },
    excerpt: {
      rendered:
        "<p>Blindsided by a divorce notice from your wife? Learn about your legal options, contesting the case, RCR (Section 9), and how to protect yourself from false allegations.</p>",
    },
    content: { rendered: sampleContentDivorce },
    author: 1,
    featured_media: 9,
    categories: [4], // Family Law
    tags: [4, 8, 9], // Family Law, Divorce (matching post #5 tags)
    _embedded: {
      author: [mockAuthors[0]], // Adv. Priya Sharma
      "wp:featuredmedia": [
        {
          source_url: "/assets/blog/divorce-consultation.png",
          alt_text: "Legal consultation for divorce matters",
          media_details: {
            sizes: {
              thumbnail: {
                source_url: "/assets/blog/divorce-consultation.png",
                width: 150,
                height: 150,
              },
              medium: {
                source_url: "/assets/blog/divorce-consultation.png",
                width: 300,
                height: 200,
              },
              large: {
                source_url: "/assets/blog/divorce-consultation.png",
                width: 1024,
                height: 683,
              },
              full: {
                source_url: "/assets/blog/divorce-consultation.png",
                width: 1200,
                height: 630,
              },
            },
          },
        },
      ],
      "wp:term": [[mockCategories[3]]], // Family Law
    },
  },
];

/**
 * Helper to get posts by category
 */
export function getPostsByCategory(
  categorySlug: string | null
): BlogPost[] {
  if (!categorySlug) return mockPosts;
  
  const category = mockCategories.find((cat) => cat.slug === categorySlug);
  if (!category) return mockPosts;
  
  return mockPosts.filter((post) => post.categories.includes(category.id));
}

/**
 * Helper to get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return mockPosts.find((post) => post.slug === slug);
}

/**
 * Helper to get related posts (same category, excluding current post)
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const categoryIds = post.categories;
  return mockPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.categories.some((catId) => categoryIds.includes(catId))
    )
    .slice(0, limit);
}

/**
 * Helper to get popular posts (mock: returns first N posts)
 */
export function getPopularPosts(limit = 5): BlogPost[] {
  return mockPosts.slice(0, limit);
}











