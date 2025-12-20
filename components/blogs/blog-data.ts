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
<p>Legal notices should be sent through registered post with acknowledgment due (RPAD) or through a reliable courier service. This ensures you have proof of delivery, which is crucial for court proceedings.</p>

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








