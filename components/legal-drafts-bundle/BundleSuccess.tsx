"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Download,
  FileText,
  Mail,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export function BundleSuccess() {
  const searchParams = useSearchParams();
  const [bundleType, setBundleType] = useState<string>("hindi-english-marathi");
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState<Array<{ url: string; fileName: string }>>([]);
  const [isLoadingUrl, setIsLoadingUrl] = useState(true);
  const [urlError, setUrlError] = useState<string>("");

  useEffect(() => {
    // Get bundle type from URL params
    const bundle = searchParams.get("bundle") || "hindi-english-marathi";
    setBundleType(bundle);

    // Fetch download URL from API
    const fetchDownloadUrl = async () => {
      try {
        setIsLoadingUrl(true);
        const transactionId = searchParams.get("transaction_id") || "";

        const response = await fetch("/api/download-bundle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bundleType: bundle,
            transactionId: transactionId,
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setDownloadUrls(data.downloads || []);
        } else {
          setUrlError(data.error || "Failed to generate download URLs");
        }
      } catch (error) {
        console.error("Error fetching download URL:", error);
        setUrlError("Failed to generate download URL. Please contact support.");
      } finally {
        setIsLoadingUrl(false);
      }
    };

    fetchDownloadUrl();
  }, [searchParams]);

  const handleDownload = () => {
    if (!downloadUrls || downloadUrls.length === 0) {
      alert("Download URLs not available. Please contact support.");
      return;
    }

    // Trigger downloads for all files
    downloadUrls.forEach((download, index) => {
      // Add slight delay between downloads to avoid browser blocking
      setTimeout(() => {
        window.open(download.url, "_blank");
      }, index * 300); // 300ms delay between each download
    });

    setDownloadStarted(true);
  };

  const getBundleName = () => {
    switch (bundleType) {
      case "hindi-english":
        return "Hindi + English Bundle";
      case "marathi-only":
        return "Marathi Only Bundle";
      case "hindi-english-marathi":
        return "Hindi + English + Marathi Bundle";
      default:
        return "Legal Drafts Bundle";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-blue-50">
      {/* Success Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation/Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="mb-8 border-2 border-primary/20 shadow-xl rounded-lg bg-background">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Order Confirmed
                  </h2>
                  <p className="text-muted-foreground">
                    Transaction ID: {searchParams.get("transaction_id") || "N/A"}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">Amount Paid</div>
                  <div className="text-3xl font-bold text-primary">
                    ₹{searchParams.get("amount") || "499"}
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/legal-bundle/3500-Legal-Drafts-Cover.jpg"
                      alt="Legal Drafts Bundle"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{getBundleName()}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>3500+ Legal Templates</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Editable Word Format</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Lifetime Access</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Free Updates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                {urlError ? (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-600 font-medium mb-2">⚠️ {urlError}</p>
                    <p className="text-sm text-red-500">
                      Please contact support at +91 70476 83995
                    </p>
                  </div>
                ) : (
                  <Button
                    size="lg"
                    onClick={handleDownload}
                    disabled={isLoadingUrl || downloadUrls.length === 0}
                    className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Download className="w-6 h-6 mr-2" />
                    {isLoadingUrl
                      ? "Preparing Download..."
                      : `Download Your Bundle Now ${downloadUrls.length > 1 ? `(${downloadUrls.length} files)` : ""}`}
                  </Button>
                )}
                {downloadStarted && (
                  <p className="text-sm text-green-600 mt-3 font-medium">
                    ✓ Download{downloadUrls.length > 1 ? "s" : ""} started! Check your browser downloads.
                  </p>
                )}
                {!urlError && downloadUrls.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Your download link{downloadUrls.length > 1 ? "s are" : " is"} valid for 1 hour
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* What's Next Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 hover:border-primary/50 transition-all rounded-lg bg-background shadow-sm">
              <div className="pt-6 pb-6 px-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Check Your Email</h3>
                <p className="text-sm text-muted-foreground">
                  We've sent your download link and receipt to your email address
                </p>
              </div>
            </div>

            <div className="border-2 hover:border-primary/50 transition-all rounded-lg bg-background shadow-sm">
              <div className="pt-6 pb-6 px-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Access Anytime</h3>
                <p className="text-sm text-muted-foreground">
                  Save the download link for future access whenever you need
                </p>
              </div>
            </div>

            <div className="border-2 hover:border-primary/50 transition-all rounded-lg bg-background shadow-sm">
              <div className="pt-6 pb-6 px-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us anytime at +91 70476 83995 for support
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 border-2 border-primary/20 rounded-lg bg-background">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                How to Use Your Legal Drafts Bundle
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Extract the Files</h4>
                    <p className="text-muted-foreground">
                      Unzip the downloaded file to access all 3500+ templates organized in folders
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Choose Your Template</h4>
                    <p className="text-muted-foreground">
                      Browse through categories like Agreements, Notices, Contracts, etc. to find what you need
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Customize & Use</h4>
                    <p className="text-muted-foreground">
                      Open in Microsoft Word, customize the details, and use for your legal work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Section - Expert Drafting Service */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Legal Documents?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              For complex legal matters, get your documents drafted by Bar Council registered lawyers
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Expert Lawyers</h3>
                <p className="text-sm opacity-90">
                  Bar Council registered advocates
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Custom Drafting</h3>
                <p className="text-sm opacity-90">
                  Tailored to your specific needs
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Quick Delivery</h3>
                <p className="text-sm opacity-90">
                  24-48 hours turnaround time
                </p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-xl font-bold shadow-xl"
              onClick={() => (window.location.href = "/legal-notice")}
            >
              Get Expert Legal Notice Drafted
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-sm mt-4 opacity-80">
              Starting at just ₹499 • Free consultation included
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions or face any issues with your download, our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/917047683995", "_blank")}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+917047683995", "_blank")}
              >
                <span className="text-xl mr-2">📞</span>
                Call: +91 70476 83995
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
