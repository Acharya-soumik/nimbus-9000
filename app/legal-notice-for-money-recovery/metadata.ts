import type { Metadata } from "next";
import { moneyRecoveryData } from "@/lib/legal-notice/notice-types-data";

export const metadata: Metadata = {
  title: moneyRecoveryData.seo.title,
  description: moneyRecoveryData.seo.description,
  keywords: moneyRecoveryData.seo.keywords,
  openGraph: {
    title: moneyRecoveryData.seo.title,
    description: moneyRecoveryData.seo.description,
    type: "website",
    url: `https://vakiltech.in/${moneyRecoveryData.slug}`,
  },
  twitter: {
    card: "summary_large_image",
    title: moneyRecoveryData.seo.title,
    description: moneyRecoveryData.seo.description,
  },
};
