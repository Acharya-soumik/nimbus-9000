/**
 * Guide Data Types & Mock Data
 * Adapted from blog-data.ts for comprehensive legal guides
 * Reuses the same structure as blogs for consistency
 */

import { 
  BlogPost, 
  BlogCategory, 
  BlogAuthor,
  mockAuthors,
  calculateReadingTime,
  getPostMeta,
  formatPostDate,
  cleanExcerpt,
  BlogPostMeta,
} from "@/components/blogs";

/* =============================================================================
 * TYPE DEFINITIONS - Using Blog Types
 * ============================================================================= */

// Guides use the same structure as blogs
export type Guide = BlogPost;
export type GuideCategory = BlogCategory;
export type GuideAuthor = BlogAuthor;
export type GuideMeta = BlogPostMeta;

/* =============================================================================
 * GUIDE CATEGORIES
 * ============================================================================= */

export const guideCategories: GuideCategory[] = [
  {
    id: 1,
    name: "Money Recovery",
    slug: "money-recovery",
    description: "Complete guides on recovering money legally in India",
    count: 8,
    parent: 0,
  },
  {
    id: 2,
    name: "Property Law",
    slug: "property-law",
    description: "Comprehensive guides on property disputes and documentation",
    count: 6,
    parent: 0,
  },
  {
    id: 3,
    name: "Family Law",
    slug: "family-law",
    description: "In-depth guides on divorce, custody, and family matters",
    count: 7,
    parent: 0,
  },
  {
    id: 4,
    name: "Consumer Rights",
    slug: "consumer-rights",
    description: "Your complete guide to consumer protection in India",
    count: 5,
    parent: 0,
  },
  {
    id: 5,
    name: "Employment Law",
    slug: "employment-law",
    description: "Guides on employment rights and workplace disputes",
    count: 4,
    parent: 0,
  },
];

/* =============================================================================
 * SAMPLE GUIDE CONTENT
 * ============================================================================= */

const moneyRecoveryGuideContent = `
<p>Money recovery is one of the most common legal issues faced by individuals and businesses in India. Whether it's a personal loan to a friend, unpaid business invoices, or salary dues, knowing the legal process can help you recover your money effectively.</p>

<h2>Understanding Money Recovery in India</h2>
<p>Legal money recovery in India involves several mechanisms, from sending <a href="/send-legal-notice">legal notices</a> to filing civil suits and approaching specialized tribunals. The right approach depends on the amount involved, the nature of the debt, and the relationship with the debtor.</p>

<h3>Types of Money Recovery Cases</h3>
<ul>
  <li><strong>Personal Loans:</strong> Money lent to friends, family, or acquaintances</li>
  <li><strong>Business Debts:</strong> Unpaid invoices, outstanding payments to vendors</li>
  <li><strong>Salary Dues:</strong> Unpaid salary, bonus, or settlement amounts</li>
  <li><strong>Cheque Bounce:</strong> Dishonored cheques under Section 138 NI Act</li>
  <li><strong>Loan Recovery:</strong> Bank loans, financial institution dues</li>
</ul>

<h2>Legal Framework for Money Recovery</h2>
<p>Several laws govern money recovery in India:</p>

<h3>1. Indian Contract Act, 1872</h3>
<p>Governs all contractual obligations including loan agreements. Section 73 provides for compensation for breach of contract.</p>

<h3>2. Code of Civil Procedure, 1908</h3>
<p><strong>Order 37 CPC - Summary Suits:</strong> For recovery of liquidated money demands based on written contracts, promissory notes, bills of exchange, etc. This is a faster process with strict timelines.</p>

<h3>3. Negotiable Instruments Act, 1881</h3>
<p><strong>Section 138:</strong> Provides criminal remedy for <a href="/send-legal-notice/cheque-bounce-legal-notice">cheque bounce cases</a>. The dishonor of a cheque for insufficiency of funds is a criminal offense punishable with imprisonment up to 2 years or fine up to twice the cheque amount.</p>

<h3>4. Recovery of Debts and Bankruptcy Act, 1993</h3>
<p>Establishes Debt Recovery Tribunals (DRT) for cases involving debts of ₹20 lakhs or more to banks and financial institutions.</p>

<h3>5. Insolvency and Bankruptcy Code, 2016</h3>
<p>Provides a consolidated framework for insolvency resolution of companies and individuals (though individual insolvency provisions are not yet fully implemented).</p>

<h2>Step-by-Step Money Recovery Process</h2>

<h3>Step 1: Document Everything</h3>
<p>Before initiating legal action, ensure you have proper documentation:</p>
<ul>
  <li>Loan agreement or contract</li>
  <li>Payment receipts or bank transfer records</li>
  <li>Communication records (emails, messages, letters)</li>
  <li>Cheques (if applicable)</li>
  <li>Any acknowledgment of debt</li>
</ul>

<h3>Step 2: Send a Legal Notice</h3>
<p>A <a href="/send-legal-notice">legal notice</a> is mandatory before filing a civil suit. It serves as:</p>
<ul>
  <li>Formal demand for payment</li>
  <li>Evidence of your attempt to resolve the matter amicably</li>
  <li>Legal requirement under Section 80 CPC (for suits against government)</li>
</ul>

<p><strong>Timeline:</strong> The notice typically gives 15-30 days for payment. For <a href="/send-legal-notice/cheque-bounce-legal-notice">cheque bounce cases</a> under Section 138, 15 days is mandatory.</p>

<h3>Step 3: File a Civil Suit</h3>
<p>If the debtor doesn't respond or refuses to pay:</p>

<h4>For amounts under ₹20 lakhs:</h4>
<ul>
  <li><strong>Summary Suit (Order 37 CPC):</strong> Faster process for written contracts</li>
  <li><strong>Regular Civil Suit:</strong> For other money recovery cases</li>
</ul>

<h4>For amounts ₹20 lakhs and above (to banks/FIs):</h4>
<ul>
  <li><strong>Debt Recovery Tribunal (DRT)</strong></li>
</ul>

<h3>Step 4: Court Proceedings</h3>
<p>The court will:</p>
<ol>
  <li>Issue summons to the defendant</li>
  <li>Allow the defendant to file a written statement</li>
  <li>Conduct hearings and examine evidence</li>
  <li>Pass a decree in favor of the plaintiff (if proven)</li>
</ol>

<p><strong>Timeline:</strong> Summary suits: 4-6 months | Regular suits: 1-3 years | DRT: 6-12 months</p>

<h3>Step 5: Execution of Decree</h3>
<p>If you win the case but the debtor still doesn't pay:</p>
<ul>
  <li>File an execution petition</li>
  <li>Court may attach and sell the debtor's property</li>
  <li>Court may garnish bank accounts or salary</li>
  <li>In extreme cases, civil imprisonment (limited to 3 months)</li>
</ul>

<h2>Special Process: Cheque Bounce Cases</h2>
<p>Cheque bounce cases under Section 138 NI Act have a specific process:</p>

<ol>
  <li><strong>Cheque Dishonor:</strong> Bank returns cheque with memo</li>
  <li><strong>Legal Notice:</strong> Send within 30 days of memo; give 15 days to pay. <a href="/send-legal-notice/cheque-bounce-legal-notice">Draft notice now</a>.</li>
  <li><strong>File Complaint:</strong> Within 30 days of notice period expiry</li>
  <li><strong>Court Summons:</strong> Court issues summons to accused</li>
  <li><strong>Trial:</strong> Evidence must prove all elements of Section 138</li>
  <li><strong>Judgment:</strong> If convicted, punishment and compensation</li>
</ol>

<p><strong>Success Rate:</strong> 65% conviction rate with proper documentation and legal representation.</p>

<h2>Alternative Dispute Resolution</h2>

<h3>1. Mediation</h3>
<p>Voluntary process where a neutral third party helps negotiate a settlement. Faster and less expensive than court.</p>

<h3>2. Arbitration</h3>
<p>If your contract has an arbitration clause, you can approach an arbitrator instead of court. The arbitral award is binding and enforceable like a court decree.</p>

<h3>3. Lok Adalat</h3>
<p>For cases up to ₹20 lakhs, Lok Adalat offers free, fast resolution. Awards are final and binding with no appeal.</p>

<h2>Cost and Timeline Analysis</h2>

<h3>Legal Notice</h3>
<ul>
  <li><strong>Cost:</strong> ₹1,500 - ₹5,000</li>
  <li><strong>Timeline:</strong> 15-30 days for response</li>
  <li><strong>Success Rate:</strong> 40% cases settle at this stage</li>
</ul>

<h3>Summary Suit</h3>
<ul>
  <li><strong>Court Fees:</strong> Based on claim amount (typically 3-7% of claim)</li>
  <li><strong>Advocate Fees:</strong> ₹15,000 - ₹50,000+</li>
  <li><strong>Timeline:</strong> 4-6 months</li>
</ul>

<h3>Regular Civil Suit</h3>
<ul>
  <li><strong>Court Fees:</strong> 3-7% of claim value</li>
  <li><strong>Advocate Fees:</strong> ₹25,000 - ₹1,00,000+</li>
  <li><strong>Timeline:</strong> 1-3 years</li>
</ul>

<h3>Cheque Bounce Case</h3>
<ul>
  <li><strong>Court Fees:</strong> ₹200-500</li>
  <li><strong>Advocate Fees:</strong> ₹10,000 - ₹30,000</li>
  <li><strong>Timeline:</strong> 6-18 months</li>
  <li><strong>Compensation:</strong> Up to 2x cheque amount</li>
</ul>

<h2>Common Mistakes to Avoid</h2>

<h3>1. No Written Agreement</h3>
<p>Always document loans in writing, even with friends/family. Verbal agreements are hard to prove.</p>

<h3>2. Delayed Action</h3>
<p>The Limitation Act, 1963 prescribes time limits:</p>
<ul>
  <li>Debt recovery: 3 years from date due</li>
  <li>Cheque bounce: 1 year from notice period</li>
  <li>Promissory note: 3 years from date</li>
</ul>

<h3>3. Incomplete Documentation</h3>
<p>Keep all evidence: contracts, receipts, messages, bank statements.</p>

<h3>4. Wrong Forum</h3>
<p>Filing in wrong court (jurisdiction) can delay your case by months.</p>

<h2>When to Hire a Lawyer</h2>
<p>Consider <a href="/legal-consultation">legal assistance</a> when:</p>
<ul>
  <li>Amount involved is significant (₹50,000+)</li>
  <li>Debtor is unresponsive or disputes the claim</li>
  <li>Documentation is weak or incomplete</li>
  <li>Criminal remedies (cheque bounce) are needed</li>
  <li>Court proceedings are necessary</li>
</ul>

<h2>Success Stories</h2>

<blockquote>
<p><strong>Rajesh's Business Recovery:</strong> A Delhi-based vendor recovered ₹8.5 lakhs from a corporate client through Summary Suit proceedings. The entire process took 5 months with professional legal help.</p>
</blockquote>

<blockquote>
<p><strong>Priya's Personal Loan Recovery:</strong> Recovered ₹2.5 lakhs lent to a friend who refused to pay. A well-drafted <a href="/send-legal-notice/legal-notice-for-money-recovery">legal notice</a> led to full settlement within 20 days, avoiding court entirely.</p>
</blockquote>

<h2>Conclusion</h2>
<p>Money recovery through legal channels is effective when approached systematically with proper documentation and legal guidance. While the process can take time, success rates are high (60-70%) with proper evidence and professional representation.</p>

<p>Start with a <a href="/send-legal-notice">legal notice</a>—it's the most cost-effective first step and resolves 40% of cases. If unresolved, the legal framework in India provides multiple remedies from civil suits to specialized tribunals.</p>
`;

const propertyLawGuideContent = `
<p>Property law in India is complex, with multiple statutes, state-specific regulations, and evolving case law. This comprehensive guide covers everything you need to know about property rights, disputes, transactions, and <a href="/send-legal-notice">legal remedies</a>.</p>

<h2>Understanding Property Law in India</h2>
<p>Property law governs the ownership, transfer, and disputes related to immovable property (land, buildings) and movable property. Most property disputes involve land and real estate.</p>

<h3>Types of Property Ownership</h3>
<ul>
  <li><strong>Freehold:</strong> Absolute ownership with full rights</li>
  <li><strong>Leasehold:</strong> Right to use property for specified period</li>
  <li><strong>Joint Ownership:</strong> Multiple owners with equal/specified shares</li>
  <li><strong>Ancestral Property:</strong> Inherited property with specific rights</li>
  <li><strong>Self-Acquired Property:</strong> Property acquired through own funds</li>
</ul>

<h2>Key Property Laws in India</h2>

<h3>1. Transfer of Property Act, 1882</h3>
<p>Governs transfer of property through sale, mortgage, lease, exchange, and gift.</p>

<h3>2. Registration Act, 1908</h3>
<p>Mandates registration of property documents for legal validity.</p>

<h3>3. Indian Easements Act, 1882</h3>
<p>Governs rights of way, light, air, and other easements.</p>

<h3>4. Real Estate (Regulation and Development) Act, 2016 (RERA)</h3>
<p>Protects homebuyers and regulates real estate sector.</p>

<h3>5. Land Acquisition Act, 2013</h3>
<p>Governs government acquisition of private land.</p>

<h2>Common Property Disputes</h2>

<h3>1. Title Disputes</h3>
<p>Disputes over who legally owns the property. Common causes:</p>
<ul>
  <li>Forged documents</li>
  <li>Fraudulent sales</li>
  <li>Disputed wills</li>
  <li>Multiple sale deeds</li>
  <li>Boundary encroachments</li>
</ul>

<h3>2. Partition Disputes</h3>
<p>Division of jointly owned property among co-owners or legal heirs. You may need to send a <a href="/send-legal-notice/legal-notice-for-partition">partition notice</a>.</p>

<h3>3. Boundary Disputes</h3>
<p>Conflicts with neighbors over property boundaries, often requiring survey and demarcation.</p>

<h3>4. Landlord-Tenant Disputes</h3>
<p>Rent arrears, eviction, property damage, or renewal disputes. See our <a href="/send-legal-notice/legal-notice-to-tenant">tenant legal notices</a>.</p>

<h3>5. Encroachment Disputes</h3>
<p>Unauthorized occupation or construction on your property.</p>

<h2>Essential Property Documents</h2>

<h3>Before Purchase - Verification Documents</h3>
<ul>
  <li><strong>Title Deed:</strong> Proves ownership</li>
  <li><strong>Sale Deed:</strong> Document of sale transfer</li>
  <li><strong>Encumbrance Certificate:</strong> Shows property is debt-free</li>
  <li><strong>Property Tax Receipts:</strong> Last 10-15 years</li>
  <li><strong>Approved Building Plan:</strong> From municipal authority</li>
  <li><strong>Occupancy Certificate:</strong> For constructed properties</li>
  <li><strong>NOC from Society:</strong> For apartment purchases</li>
  <li><strong>Conversion Certificate:</strong> If agricultural land converted</li>
</ul>

<h3>After Purchase - Keep Safe</h3>
<ul>
  <li>Registered Sale Deed</li>
  <li>Possession Certificate</li>
  <li>All payment receipts</li>
  <li>Updated tax receipts</li>
  <li>Insurance documents</li>
</ul>

<h2>Property Dispute Resolution Process</h2>

<h3>Step 1: Document Collection</h3>
<p>Gather all property documents, photographs, and evidence of ownership/possession.</p>

<h3>Step 2: Legal Notice</h3>
<p>Send a <a href="/send-legal-notice">legal notice</a> to the other party stating your claim and demands.</p>

<h3>Step 3: Negotiation/Mediation</h3>
<p>Attempt to resolve through mutual discussion or mediation.</p>

<h3>Step 4: Civil Suit</h3>
<p>File appropriate suit based on dispute type:</p>
<ul>
  <li><strong>Declaration Suit:</strong> To establish ownership rights</li>
  <li><strong>Partition Suit:</strong> To divide joint property</li>
  <li><strong>Injunction Suit:</strong> To stop encroachment or illegal construction</li>
  <li><strong>Specific Performance:</strong> To enforce sale agreement</li>
  <li><strong>Eviction Suit:</strong> To remove unauthorized occupants</li>
</ul>

<p><strong>Timeline:</strong> Property suits typically take 3-7 years, but interim injunctions can provide immediate relief.</p>

<h2>RERA: Homebuyer Protection</h2>

<h3>Key RERA Provisions</h3>
<ul>
  <li>All projects must be registered with RERA</li>
  <li>70% of funds in escrow account</li>
  <li>Carpet area measurement (not super built-up)</li>
  <li>Mandatory disclosure of project details</li>
  <li>Defect liability period of 5 years</li>
  <li>Penalty for delay in possession</li>
</ul>

<h3>Filing RERA Complaint</h3>
<ol>
  <li>Check if project is RERA registered</li>
  <li>Raise complaint with builder</li>
  <li>File complaint on RERA portal (state-specific)</li>
  <li>RERA authority conducts hearing</li>
  <li>Order passed (usually within 60 days)</li>
  <li>Appeal to RERA Appellate Tribunal if needed</li>
</ol>

<h2>Property Purchase Checklist</h2>

<h3>Due Diligence Steps</h3>
<ol>
  <li><strong>Verify Seller's Identity:</strong> Check ID proofs, photos</li>
  <li><strong>Check Title:</strong> Review 30-year title chain</li>
  <li><strong>Encumbrance Certificate:</strong> Ensure no loans/liabilities</li>
  <li><strong>Physical Inspection:</strong> Visit property multiple times</li>
  <li><strong>Survey:</strong> Verify boundaries match documents</li>
  <li><strong>Legal Opinion:</strong> Hire lawyer for title verification</li>
  <li><strong>Tax Check:</strong> Verify all taxes paid</li>
  <li><strong>Court Case Search:</strong> Check for pending litigation</li>
</ol>

<h2>Costs and Timelines</h2>

<h3>Legal Notice for Property Dispute</h3>
<ul>
  <li><strong>Cost:</strong> ₹2,000 - ₹10,000</li>
  <li><strong>Timeline:</strong> 15-30 days response time</li>
</ul>

<h3>Property Title Verification</h3>
<ul>
  <li><strong>Cost:</strong> ₹5,000 - ₹25,000</li>
  <li><strong>Timeline:</strong> 15-30 days</li>
</ul>

<h3>Civil Suit (Property Dispute)</h3>
<ul>
  <li><strong>Court Fees:</strong> Based on property value</li>
  <li><strong>Advocate Fees:</strong> ₹50,000 - ₹5,00,000+</li>
  <li><strong>Timeline:</strong> 3-7 years for final decree</li>
  <li><strong>Interim Relief:</strong> 3-6 months for injunction</li>
</ul>

<h3>RERA Complaint</h3>
<ul>
  <li><strong>Filing Fee:</strong> ₹1,000 - ₹5,000</li>
  <li><strong>Advocate Fees:</strong> ₹15,000 - ₹50,000</li>
  <li><strong>Timeline:</strong> 60-180 days</li>
</ul>

<h2>Conclusion</h2>
<p>Property matters require careful documentation and legal due diligence. Whether buying, selling, or resolving disputes, professional <a href="/legal-consultation">legal advice</a> can save significant time and money. Always verify documents, conduct proper due diligence, and don't hesitate to seek legal help for complex matters.</p>
`;

const divorceGuideContent = `
<p>Divorce in India is a complex legal process governed by personal laws based on religion. Whether you are considering mutual consent divorce or contesting a divorce, understanding the legal framework and procedures is essential for a smooth resolution.</p>

<h2>Legal Framework for Divorce</h2>
<p>India has different divorce laws for different religions:</p>
<ul>
  <li><strong>Hindu Marriage Act, 1955:</strong> Applies to Hindus, Buddhists, Jains, and Sikhs</li>
  <li><strong>Special Marriage Act, 1954:</strong> Applies to inter-religious marriages and civil marriages</li>
  <li><strong>Indian Divorce Act, 1869:</strong> Applies to Christians</li>
  <li><strong>Muslim Personal Law (Shariat) Application Act, 1937:</strong> Applies to Muslims</li>
  <li><strong>Parsi Marriage and Divorce Act, 1936:</strong> Applies to Parsis</li>
</ul>

<h2>Types of Divorce in India</h2>

<h3>1. Mutual Consent Divorce (Section 13B of HMA)</h3>
<p>When both husband and wife agree to separate peacefully. This is the fastest and least expensive way to get divorced.</p>
<ul>
  <li><strong>Prerequisites:</strong> Separated for at least 1 year, unable to live together, mutually agreed to dissolve marriage.</li>
  <li><strong>Terms:</strong> Both parties must agree on alimony (maintenance), child custody, and property division.</li>
  <li><strong>Timeline:</strong> 6-18 months (cooling-off period of 6 months may be waived by court).</li>
</ul>

<h3>2. Contested Divorce (Section 13(1) of HMA)</h3>
<p>When one spouse wants a divorce and the other doesn't, or they cannot agree on terms. It must be filed on specific valid grounds.</p>

<h2>Grounds for Contested Divorce</h2>
<p>Under the Hindu Marriage Act, grounds include:</p>
<ul>
  <li><strong>Cruelty:</strong> Physical or mental abuse</li>
  <li><strong>Adultery:</strong> Voluntary sexual intercourse with another person</li>
  <li><strong>Desertion:</strong> Abandonment for at least 2 years without reasonable cause</li>
  <li><strong>Conversion:</strong> Spouse has converted to another religion</li>
  <li><strong>Mental Disorder:</strong> Incurable unsoundness of mind</li>
  <li><strong>Renunciation:</strong> Spouse has renounced the world (Sannyasa)</li>
  <li><strong>Presumption of Death:</strong> Spouse not heard of for 7 years</li>
</ul>

<h2>The Divorce Process: Step-by-Step</h2>

<h3>Step 1: Drafting and Filing Petition</h3>
<p>The divorce petition is drafted by a lawyer and filed in the Family Court of relevant jurisdiction (where marriage took place, or where couple last resided together).</p>

<h3>Step 2: Service of Summons</h3>
<p>The court sends a notice (summons) to the other spouse to appear in court.</p>

<h3>Step 3: Response/Counter-Statement</h3>
<p>The other spouse files a response admitting or denying the allegations.</p>

<h3>Step 4: Trial and Evidence</h3>
<p>In contested cases, both parties present evidence and witnesses. Cross-examination involves questioning opposite party's witnesses.</p>

<h3>Step 5: Arguments and Judgment</h3>
<p>Final arguments are made by lawyers. The court passes a decree of divorce if grounds are proven.</p>

<h2>Important Aspects of Divorce</h2>

<h3>1. Alimony (Maintenance)</h3>
<p>Financial support paid by one spouse to another. It can be:</p>
<ul>
  <li><strong>Interim Maintenance:</strong> Paid during court proceedings</li>
  <li><strong>Permanent Alimony:</strong> One-time settlement or monthly payments after divorce</li>
</ul>
<p>Factors deciding amount: Income of both parties, standard of living, duration of marriage, conduct.</p>

<h3>2. Child Custody</h3>
<p>The welfare of the child is the paramount consideration for the court.</p>
<ul>
  <li><strong>Physical Custody:</strong> Child lives with this parent</li>
  <li><strong>Legal Custody:</strong> Right to make decisions (education, health)</li>
  <li><strong>Joint Custody:</strong> Both parents share rights (becoming more common)</li>
</ul>

<h3>3. Property Division</h3>
<p>Only jointly owned property is divided. "Stridhan" (gifts to woman) belongs exclusively to the wife.</p>

<h2>Conclusion</h2>
<p>Divorce is emotionally and legally challenging. A Mutual Consent divorce is always preferable for its speed and dignity. In contested cases, maintaining detailed records of events and evidence is crucial. Consult an experienced family lawyer to understand your specific rights and strategy.</p>
`;

const consumerGuideContent = `
<p>The Consumer Protection Act, 2019 has revolutionized consumer rights in India, creating a powerful framework to protect buyers from unfair trade practices, defective goods, and deficient services.</p>

<h2>Who is a Consumer?</h2>
<p>Under the Act, a consumer is anyone who buying goods or avails services for consideration (payment). It includes online (e-commerce) transactions. It DOES NOT include purchases for resale or commercial purposes.</p>

<h2>Key Rights of a Consumer</h2>
<p>The Act guarantees six fundamental rights:</p>
<ol>
  <li><strong>Right to Safety:</strong> Protection against hazardous goods</li>
  <li><strong>Right to Information:</strong> Informed about quality, quantity, potency, purity, standard, and price</li>
  <li><strong>Right to Choose:</strong> Access to variety of goods at competitive prices</li>
  <li><strong>Right to be Heard:</strong> Interests will be considered at appropriate forums</li>
  <li><strong>Right to Seek Redressal:</strong> Against unfair trade practices</li>
  <li><strong>Right to Consumer Education:</strong> Awareness of rights</li>
</ol>

<h2>Grounds for filing a Complaint</h2>
<ul>
  <li><strong>Defect in Goods:</strong> Fault, imperfection, or shortcoming in quality/quantity</li>
  <li><strong>Deficiency in Services:</strong> Poor quality service (e.g., banking, telecom, medical)</li>
  <li><strong>Unfair Trade Practices:</strong> Misleading ads, false offers, hoarding</li>
  <li><strong>Restrictive Trade Practices:</strong> Price fixing, requiring purchase of other goods</li>
  <li><strong>Product Liability:</strong> Harm caused by defective product (manufacturer/seller liable)</li>
</ul>

<h2>Consumer Dispute Redressal Commissions</h2>
<p>The Act establishes a three-tier quasi-judicial system based on claim value:</p>

<h3>1. District Consumer Disputes Redressal Commission (DCDRC)</h3>
<ul>
  <li><strong>old:</strong> Up to ₹20 Lakhs | <strong>New (2019 Act):</strong> Up to ₹1 Crore</li>
  <li>Located in each district.</li>
</ul>

<h3>2. State Consumer Disputes Redressal Commission (SCDRC)</h3>
<ul>
  <li><strong>Jurisdiction:</strong> Claims between ₹1 Crore and ₹10 Crores</li>
  <li>Located in state capitals. Also hears appeals from District Commission.</li>
</ul>

<h3>3. National Consumer Disputes Redressal Commission (NCDRC)</h3>
<ul>
  <li><strong>Jurisdiction:</strong> Claims above ₹10 Crores</li>
  <li>Located in New Delhi. Apex body hearing appeals from State Commissions.</li>
</ul>

<h2>How to File a Consumer Complaint</h2>

<h3>Step 1: Legal Notice</h3>
<p>Sending a legal notice to the service provider/seller is often the first step to demand resolution before litigation.</p>

<h3>Step 2: Filing Complaint Online</h3>
<p>You can file complaints online via the <strong>edaakhil</strong> portal or directly at the District Commission.</p>

<h3>Step 3: Contents of Complaint</h3>
<ul>
  <li>Name/address of complainant and opposite party</li>
  <li>Facts of the case (date of purchase, defect details)</li>
  <li>Documents (Invoice, warranty card, correspondence photos)</li>
  <li>Relief sought (Refund, replacement, compensation, damages)</li>
</ul>

<h3>Step 4: Fees and Timeline</h3>
<p>Nominal court fees apply. The Act mandates disposal within 3 months (no testing required) or 5 months (testing required).</p>

<h2>E-Commerce Rules 2020</h2>
<p>New rules specifically target online retailers:</p>
<ul>
  <li>Must display country of origin</li>
  <li>Must have grievance officer</li>
  <li>Cannot manipulate price</li>
  <li>Responsible for returns/refunds</li>
</ul>

<h2>Conclusion</h2>
<p>Indian consumers are more empowered than ever. If you have been cheated or received poor service, do not hesitate to raise your voice. The process is consumer-friendly, inexpensive, and often does not strictly require a lawyer, though legal advice helps draft a strong complaint.</p>
`;

const employmentGuideContent = `
<p>Employment laws in India are designed to balance the rights of employees with the interests of employers. Navigating workplace disputes requires a solid understanding of your rights regarding contracts, termination, salary, and harassment.</p>

<h2>Key Employment Laws in India</h2>

<h3>1. Industrial Disputes Act, 1947</h3>
<p>Governs layoffs, retrenchment, and disputes for "workmen" (non-managerial/supervisory roles).</p>

<h3>2. Shops and Establishments Act (State-specific)</h3>
<p>Regulates working hours, leaves, holidays, and termination for office/shop employees.</p>

<h3>3. Payment of Wages Act & Minimum Wages Act</h3>
<p>Ensures timely payment and minimum standard of pay.</p>

<h3>4. Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act)</h3>
<p>Mandates procedure for handling sexual harassment complaints.</p>

<h3>5. Payment of Gratuity Act, 1972</h3>
<p>Mandates gratuity payment for employees with 5+ years of service.</p>

<h2>Employment Contracts</h2>
<p>Your employment contract is the primary document governing your relationship. Key clauses to check:</p>
<ul>
  <li><strong>Notice Period:</strong> Time required for resignation/termination (usually 30-90 days)</li>
  <li><strong>Probation Period:</strong> Rules for confirmation</li>
  <li><strong>Non-Compete Clause:</strong> Restrictions on joining competitors (enforceability is limited in India)</li>
  <li><strong>Termination Clause:</strong> Grounds for firing (misconduct vs. performance)</li>
</ul>

<h2>Common Employment Issues</h2>

<h3>1. Wrongful Termination</h3>
<p>Termination is considered wrongful if it violates the contract terms or statutory laws.</p>
<ul>
  <li><strong>Without Notice:</strong> Employer must give notice or pay salary in lieu of notice.</li>
  <li><strong>Retrenchment:</strong> "Last Come First Go" rule applies for workmen. Compensation is mandatory (15 days' pay for every year of service).</li>
  <li><strong>Misconduct:</strong> Must follow Principles of Natural Justice (show cause notice, domestic inquiry).</li>
</ul>

<h3>2. Unpaid Salary/Dues</h3>
<p>If an employer withholds salary, Full & Final (F&F) settlement, or PF:</p>
<ul>
  <li>Send a formal demand letter/legal notice.</li>
  <li>File complaint with Labour Commissioner.</li>
  <li>File civil suit for recovery (for managers).</li>
</ul>

<h3>3. Workplace Harassment</h3>
<p>Under POSH Act, every organization with 10+ employees must have an Internal Complaints Committee (ICC). Women can file written complaints to the ICC within 3 months of the incident.</p>

<h2>Legal Remedies for Employees</h2>

<h3>Step 1: Internal Grievance</h3>
<p>Raise the issue with HR or the grievance cell as per company policy.</p>

<h3>Step 2: Legal Notice</h3>
<p>Send a legal notice drafted by a lawyer to formally demand resolution (e.g., payment of dues, reinstatement).</p>

<h3>Step 3: Adjudication</h3>
<ul>
  <li><strong>Labour Court/Tribunal:</strong> For "workmen" under ID Act.</li>
  <li><strong>Civil Court:</strong> For managerial/supervisory employees for breach of contract/damages.</li>
  <li><strong>Authorities under Payment of Wages Act:</strong> For salary delays.</li>
</ul>

<h2>Resignation and Notice Period</h2>
<p>Employees are legally bound to serve the notice period. However, you can negotiate a buyout (paying salary in lieu). Absconding (leaving without notice) can lead to legal action and loss of experience letters.</p>

<h2>Conclusion</h2>
<p>Know your rights as an employee. While companies act to protect their interests, Indian law provides strong safeguards against exploitation, unfair dismissal, and harassment. Always keep copies of your appointment letter, appraisal reports, and correspondence.</p>
`;

/* =============================================================================
 * MOCK GUIDES
 * ============================================================================= */

export const mockGuides: Guide[] = [
  {
    id: 1,
    slug: "money-recovery-complete-guide-india",
    date: "2025-01-01T10:00:00",
    modified: "2025-01-15T14:30:00",
    title: {
      rendered: "Money Recovery in India: Complete Legal Guide [2025]",
    },
    excerpt: {
      rendered:
        "<p>Comprehensive guide to recovering money legally in India. Learn about legal notices, summary suits, DRT, success rates, costs, and step-by-step procedures for personal loans, business debts, and cheque bounce cases.</p>",
    },
    content: { rendered: moneyRecoveryGuideContent },
    author: 1,
    featured_media: 1,
    categories: [1],
    tags: [1, 2],
    _embedded: {
      author: [mockAuthors[0]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop",
          alt_text: "Money recovery legal documents",
          media_details: {
            sizes: {
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
            },
          },
        },
      ],
      "wp:term": [[guideCategories[0]]],
    },
  },
  {
    id: 2,
    slug: "property-disputes-resolution-guide",
    date: "2025-01-05T09:00:00",
    modified: "2025-01-18T11:00:00",
    title: {
      rendered: "Property Law in India: Complete Guide to Disputes & Rights [2025]",
    },
    excerpt: {
      rendered:
        "<p>Everything you need to know about property law in India - from buying property, resolving disputes, RERA complaints, to understanding your property rights. Expert guidance for homeowners and investors.</p>",
    },
    content: { rendered: propertyLawGuideContent },
    author: 2,
    featured_media: 2,
    categories: [2],
    tags: [3, 4],
    _embedded: {
      author: [mockAuthors[1]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
          alt_text: "Property documents and house keys",
          media_details: {
            sizes: {
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
            },
          },
        },
      ],
      "wp:term": [[guideCategories[1]]],
    },
  },
  {
    id: 3,
    slug: "divorce-process-india-guide",
    date: "2025-01-10T11:00:00",
    modified: "2025-01-20T09:30:00",
    title: {
      rendered: "Divorce Process in India: Step-by-Step Legal Guide [2025]",
    },
    excerpt: {
      rendered:
        "<p>A complete guide to understanding divorce laws in India. Covers mutual consent vs contested divorce, grounds for divorce, alimony, child custody laws, and timelines for different religions under Indian law.</p>",
    },
    content: { rendered: divorceGuideContent },
    author: 1,
    featured_media: 3,
    categories: [3],
    tags: [5, 6],
    _embedded: {
      author: [mockAuthors[0]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=1200&h=630&fit=crop",
          alt_text: "Divorce legal concept",
          media_details: {
            sizes: {
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
            },
          },
        },
      ],
      "wp:term": [[guideCategories[2]]],
    },
  },
  {
    id: 4,
    slug: "consumer-rights-protection-guide",
    date: "2025-01-12T14:00:00",
    modified: "2025-01-22T10:15:00",
    title: {
      rendered: "Consumer Rights Protection: Complete Guide to Filing Complaints [2025]",
    },
    excerpt: {
      rendered:
        "<p>Empower yourself with knowledge of the Consumer Protection Act 2019. Learn how to file complaints against defective goods, service deficiencies, and unfair trade practices in District, State, and National Commissions.</p>",
    },
    content: { rendered: consumerGuideContent },
    author: 2,
    featured_media: 4,
    categories: [4],
    tags: [7, 8],
    _embedded: {
      author: [mockAuthors[1]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=630&fit=crop",
          alt_text: "Consumer rights protection",
          media_details: {
            sizes: {
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
            },
          },
        },
      ],
      "wp:term": [[guideCategories[3]]],
    },
  },
  {
    id: 5,
    slug: "employment-law-india-guide",
    date: "2025-01-15T09:30:00",
    modified: "2025-01-25T16:45:00",
    title: {
      rendered: "Employment Law in India: Employee Rights & Workplace Disputes [2025]",
    },
    excerpt: {
      rendered:
        "<p>Essential guide for employees in India. Understand your legal rights regarding employment contracts, wrongful termination, unpaid salary recovery, workplace harassment (POSH), and gratuity laws.</p>",
    },
    content: { rendered: employmentGuideContent },
    author: 1,
    featured_media: 5,
    categories: [5],
    tags: [9, 10],
    _embedded: {
      author: [mockAuthors[0]],
      "wp:featuredmedia": [
        {
          source_url:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=630&fit=crop",
          alt_text: "Employment law workplace",
          media_details: {
            sizes: {
              large: {
                source_url:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1024&h=683&fit=crop",
                width: 1024,
                height: 683,
              },
            },
          },
        },
      ],
      "wp:term": [[guideCategories[4]]],
    },
  },
];

/* =============================================================================
 * UTILITY FUNCTIONS - Reusing blog utilities
 * ============================================================================= */

export function getGuidesByCategory(categorySlug: string | null): Guide[] {
  if (!categorySlug) return mockGuides;
  return mockGuides.filter((guide) => {
    const categories = guide._embedded?.["wp:term"]?.[0] || [];
    return categories.some((cat) => cat.slug === categorySlug);
  });
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return mockGuides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide: Guide, limit = 3): Guide[] {
  const guideCategories = guide._embedded?.["wp:term"]?.[0] || [];
  const categorySlugs = guideCategories.map((cat) => cat.slug);

  return mockGuides
    .filter((g) => {
      if (g.id === guide.id) return false;
      const gCats = g._embedded?.["wp:term"]?.[0] || [];
      return gCats.some((cat) => categorySlugs.includes(cat.slug));
    })
    .slice(0, limit);
}

export function getPopularGuides(limit = 5): Guide[] {
  return mockGuides.slice(0, limit);
}

// Re-export utilities for guides
export { calculateReadingTime, getPostMeta as getGuideMeta, formatPostDate as formatGuideDate, cleanExcerpt };
