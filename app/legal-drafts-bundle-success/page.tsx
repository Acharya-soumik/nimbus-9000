import type { Metadata } from "next";
import { Suspense } from "react";
import { BundleSuccess } from "@/components/legal-drafts-bundle";

export const metadata: Metadata = {
  title: "Order Confirmed - 3500+ Legal Drafts Bundle | Vakil Tech",
  description: "Your order for the legal drafts bundle has been confirmed. Download your templates now.",
  robots: {
    index: false,
    follow: false,
  },
};

function BundleSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BundleSuccess />
    </Suspense>
  );
}

export default BundleSuccessPage;
