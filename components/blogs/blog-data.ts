export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: number;
  cluster?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export const mockCategories: BlogCategory[] = [
  {
    id: "legal-notices",
    name: "Legal Notices",
    slug: "legal-notices",
    description: "Legal notice formats and guides",
  },
  {
    id: "property-law",
    name: "Property Law",
    slug: "property-law",
    description: "Property disputes and real estate",
  },
  {
    id: "family-law",
    name: "Family Law",
    slug: "family-law",
    description: "Divorce, custody, and family matters",
  },
  {
    id: "consumer-rights",
    name: "Consumer Rights",
    slug: "consumer-rights",
    description: "Consumer protection laws",
  },
  {
    id: "criminal-law",
    name: "Criminal Law",
    slug: "criminal-law",
    description: "BNS, IPC, and criminal defense",
  },
];

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function cleanExcerpt(excerpt: string, limit: number = 100): string {
  // Remove HTML tags
  const text = excerpt.replace(/<[^>]*>/g, "");
  // Truncate
  return text.substring(0, limit).trim() + "...";
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  // Fallback for empty content
  if (!text) return 1;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.max(1, Math.ceil(minutes));
}











