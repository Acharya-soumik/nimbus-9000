import type { FAQItem } from "@/components/ui/faq-section";
import type { AccordionSection } from "@/components/send-legal-notice/InfoSectionVariant2";
import type { SampleNoticeContent } from "@/components/send-legal-notice/SampleNoticeModal";

export interface NoticeTypeData {
  slug: string;
  title: string;
  cluster: "money-recovery" | "family" | "tenant-property" | "builder-consumer" | "criminal" | "employment" | "contract";

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    flipWords: string[];
    badges: Array<{
      icon: "clock" | "shield" | "users" | "check";
      text: string;
    }>;
  };

  content: {
    h1: string;
    introduction: string;
    sections: Array<{
      heading: string;
      content: string;
      listItems?: string[];
    }>;
    finalCta: {
      text: string;
      buttonText: string;
    };
  };

  story: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      badge?: { text: string; color: "success" | "warning" | "primary" };
    }>;
  };

  legalFramework: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    expertInsight?: { quote: string };
    accordionSections: AccordionSection[];
  };

  postNoticeRoadmap?: {
    title: string;
    scenarios: Array<{
      situation: string;
      actions: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };

  sampleNotice: SampleNoticeContent;
  faqs: FAQItem[];
}
