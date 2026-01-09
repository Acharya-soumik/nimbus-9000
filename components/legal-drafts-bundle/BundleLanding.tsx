"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BundleSelector } from "./BundleSelector";
import { FAQSection } from "@/components/ui/faq-section";
import {
  bundleOptions,
  legalCategories,
  bundleTestimonials,
  whyChooseUs,
  bundleFAQs,
} from "@/lib/legal-drafts-bundle/bundle-data";
import { load } from "@cashfreepayments/cashfree-js";
import {
  Check,
  Download,
  FileText,
  Shield,
  Clock,
  Star,
  TrendingUp,
  Loader2,
  CreditCard,
  Smartphone,
  Landmark,
  Wallet,
} from "lucide-react";

export function BundleLanding() {
  const [selectedBundle, setSelectedBundle] = useState<string>(
    "hindi-english-marathi"
  );
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);

  const selectedBundleData = bundleOptions.find(
    (bundle) => bundle.id === selectedBundle
  );

  const handleBuyNow = async () => {
    setIsProcessingPayment(true);

    try {
      // Generate a proper UUID for the lead ID
      const tempLeadId = crypto.randomUUID();
      const bundleData = bundleOptions.find(b => b.id === selectedBundle);
      const price = bundleData ? bundleData.price : 499;
      
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: price,
          customerName: "Bundle Customer",
          customerPhone: "9999999999",
          customerId: tempLeadId,
          notes: {
             bundleId: selectedBundle,
             type: "legal-drafts-bundle"
          }
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create order");
      }

      const { paymentSessionId, environment } = await orderResponse.json();

      // Initialize Cashfree
      const cashfree = await load({
        mode: environment,
      });

      cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
      });

    } catch (error) {
      console.error("Payment initialization error:", error);
      setIsProcessingPayment(false);
      alert("Failed to initialize payment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Full Screen Verification Loader */}
      {isVerifyingPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-md mx-4 text-center">
            <div className="mb-6 flex justify-center">
              <Loader2 className="w-16 h-16 text-primary animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Verifying Payment...
            </h2>
            <p className="text-muted-foreground mb-2">
              Please wait while we verify your payment
            </p>
            <p className="text-sm text-muted-foreground">
              This will only take a moment
            </p>
          </div>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <span className="font-semibold flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            +500 New Templates Added This Month
          </span>
          <span className="font-bold flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Limited Time Offer - 80% OFF
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Product Showcase */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/legal-bundle/3500-Legal-Drafts-Cover.jpg"
                  alt="3500+ Legal Drafts Templates Bundle"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  80% OFF
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center bg-background border rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary">3500+</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Templates
                  </div>
                </div>
                <div className="text-center bg-background border rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Happy Users
                  </div>
                </div>
                <div className="text-center bg-background border rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Bundle Selection */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Professional Legal Templates
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                3500+ Legal Drafts Templates Bundle
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Instant access to professionally drafted legal documents in
                Hindi, English & Marathi. Perfect for lawyers, law students, and
                businesses.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Instant Download</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Free Updates</span>
                </div>
              </div>
            </div>

            {/* Bundle Selection Cards */}
            <BundleSelector
              bundleOptions={bundleOptions}
              selectedBundle={selectedBundle}
              onSelectBundle={setSelectedBundle}
            />

            {/* Buy Now Button */}
            <Button
              onClick={handleBuyNow}
              disabled={isProcessingPayment}
              size="lg"
              className="w-full text-lg py-6 shadow-lg hover:shadow-xl"
            >
              {isProcessingPayment ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Buy Now - ₹{selectedBundleData?.price}
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              <Shield className="w-4 h-4 inline mr-1" />
              100% Secure Payment • 7-Day Money Back Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Bundle?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of legal professionals across India
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Legal Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              30+ categories covering all your legal documentation needs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {legalCategories.map((category, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-lg p-3 text-center hover:bg-muted/50 transition-colors"
              >
                <FileText className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Legal Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Security Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              100% Secure Payment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your payment information is safe with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">256-bit SSL Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security for all transactions
                </p>
              </div>
              <div className="text-center">
                <Check className="w-12 h-12 mx-auto mb-3 text-green-600" />
                <h3 className="font-bold mb-2">PCI DSS Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Industry-standard payment security
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <p className="text-center font-semibold mb-4">
                Powered by Razorpay - India's Most Trusted Payment Gateway
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  <span className="text-sm">Credit/Debit Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-sm">UPI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5" />
                  <span className="text-sm">Net Banking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5" />
                  <span className="text-sm">Wallets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our legal drafts bundle
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQSection
              faqs={bundleFAQs.map((faq) => ({
                question: faq.question,
                answer: faq.answer,
                id: faq.question,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Save Time & Money?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get instant access to 3500+ professionally drafted legal templates
            </p>
            <Button
              onClick={handleBuyNow}
              disabled={isProcessingPayment}
              size="lg"
              className="text-lg py-6 px-12 shadow-xl hover:shadow-2xl"
            >
              {isProcessingPayment ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Get Started Now - ₹{selectedBundleData?.price}
                </>
              )}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              7-Day Money Back Guarantee • No Questions Asked
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
