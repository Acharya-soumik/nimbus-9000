import { notFound } from "next/navigation";
import { getNoticeData } from "@/lib/send-legal-notice/notice-types-data";
import { LegalNoticeTypePageClient } from "./page-client";

/* =============================================================================
 * PAGE COMPONENT (Server Component)
 * ============================================================================= */

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function LegalNoticeTypePage({ params }: PageProps) {
  const { type } = await params;
  const data = getNoticeData(type);

  // If notice type doesn't exist, show 404
  if (!data) {
    notFound();
  }

  return <LegalNoticeTypePageClient data={data} />;
}
