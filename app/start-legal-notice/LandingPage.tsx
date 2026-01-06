"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  CheckCircle2, 
  FileText, 
  Lock, 
  ChevronDown,
  ArrowRight,
  Sparkles
} from "lucide-react";
import MultiStepForm from "@/components/send-legal-notice/MultiStepForm";
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { trackLandingPageView } from "@/lib/mixpanel";

/* =============================================================================
 * ANIMATION VARIANTS
 * ============================================================================= */
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/* =============================================================================
 * COMPONENT: STAR RATING
 * ============================================================================= */
const StarRating = () => (
  <div className="flex items-center gap-0.5 text-[#FBBF24]">
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} className="w-4 h-4 fill-current drop-shadow-sm" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */
export default function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  React.useEffect(() => {
    trackLandingPageView("Legal Notice (Ads)", undefined, { 
        source: 'google_ads_landing_page' 
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F2]/40 font-sans text-gray-900 selection:bg-[#EF5A6F]/20 selection:text-[#EF5A6F]">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFE8E0] rounded-full blur-[100px] opacity-70 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#FEF3C7] rounded-full blur-[80px] opacity-60 translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#FEE2E2] rounded-full blur-[100px] opacity-50 translate-y-1/3" />
      </div>

      {/* HEADER - Minimal & Glassmorphic */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm h-16 flex items-center justify-center supports-[backdrop-filter]:bg-white/60">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-32">
            <Image 
              src="/assets/logo.png" 
              alt="VakilTech" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="h-4 w-px bg-gray-300/50 mx-1" />
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-[#166534] bg-[#D4F4DD] px-3 py-1 rounded-full shadow-sm border border-[#166534]/10">
            <Lock className="w-3 h-3" />
            <span>SECURE PAYMENT</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-24">
        {/* HERO SECTION */}
        <section className="px-4 py-8 md:py-16 max-w-4xl mx-auto text-center relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
               <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold bg-white/80 backdrop-blur border border-[#EF5A6F]/20 text-[#EF5A6F] shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  Trusted by 15,000+ Indians for Legal Notices
               </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Send a Lawyer-Drafted <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF5A6F] to-[#E8505B]">Legal Notice</span>
            </motion.h1>
            
            {/* Subheadline & USP */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-xl md:text-2xl font-medium text-gray-700">
                Start with just <span className="inline-block bg-[#FEF3C7] px-2 rounded-md transform -rotate-1 border border-[#FBBF24]">₹499</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base text-gray-600 font-medium pt-2">
                <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-lg border border-gray-200/50 shadow-sm">
                   <CheckCircle2 className="w-5 h-5 text-[#10B981]" /> Verified Advocates
                </span>
                <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-lg border border-gray-200/50 shadow-sm">
                   <MapPin className="w-5 h-5 text-[#3B82F6]" /> Nationwide Service
                </span>
                <span className="flex items-center gap-1.5 bg-white/60 px-3 py-1 rounded-lg border border-gray-200/50 shadow-sm">
                   <FileText className="w-5 h-5 text-[#8B5CF6]" /> No Court Visit
                </span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-6">
              <button 
                onClick={openForm}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-br from-[#EF5A6F] to-[#DC2626] rounded-2xl shadow-[0_10px_20px_-10px_rgba(239,90,111,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(239,90,111,0.6)] hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto"
              >
                <Lock className="w-5 h-5" />
                🔒 Start Legal Notice — Pay ₹499
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
              </button>
              
              <div className="mt-3 space-y-2">
                  <p className="text-sm font-semibold text-[#EF5A6F] animate-pulse">
                      Delaying legal action weakens your case.
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                     Secure payment · Razorpay protected · 100% refund if lawyer declines
                  </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* TRUST SIGNALS - Glass Cards */}
        <section className="px-4 py-8">
          <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="flex justify-center mb-2"><StarRating /></div>
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Customer Rating</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-2"><Users className="w-6 h-6 text-gray-400" /></div>
              <div className="text-2xl font-bold text-gray-900">15,000+</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Clients Served</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-2"><ShieldCheck className="w-6 h-6 text-gray-400" /></div>
              <div className="text-xl font-bold text-gray-900 pt-0.5">Verified</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bar Council Lawyers</div>
            </div>
             <div className="space-y-1">
              <div className="flex justify-center mb-2 text-2xl">🇮🇳</div>
              <div className="text-xl font-bold text-gray-900 pt-0.5">Pan-India</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service Coverage</div>
            </div>
          </div>
        </section>

        {/* WHY ₹499? (FEAR REMOVAL) */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-8 md:p-12 border border-blue-100/50 shadow-lg">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                           Why pay <span className="text-blue-600">₹499</span> to start?
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                <h4 className="font-bold text-gray-900 text-lg">Risk-Free Start</h4>
                                <p className="text-gray-600 leading-relaxed">Lawyer reviews your case first. If they decline, you get a <span className="font-semibold text-gray-900">100% refund</span> instantly.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                <h4 className="font-bold text-gray-900 text-lg">Review Before Paying Full</h4>
                                <p className="text-gray-600 leading-relaxed">We share the draft with you first. You pay the remaining balance <span className="font-semibold text-gray-900">ONLY if you approve</span> the draft.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                
                    {/* Visual Card */}
                    <div className="w-full max-w-xs bg-white p-6 rounded-2xl shadow-xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-300">
                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-semibold uppercase">Guarantee</div>
                                <div className="font-bold text-gray-900">Total Safety</div>
                            </div>
                        </div>
                        <p className="text-lg font-medium text-gray-800 text-center italic">
                            &quot;Nothing is sent without your specific confirmation.&quot;
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - Step Cards */}
        <section className="px-4 py-16">
           <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 opacity-50 group-hover:text-[#EF5A6F]/10 transition-colors">1</div>
                    <div className="w-14 h-14 bg-[#FFF5F2] rounded-2xl flex items-center justify-center text-[#EF5A6F] mb-6 group-hover:scale-110 transition-transform">
                        <Lock className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Pay ₹499 Advance</h3>
                    <p className="text-gray-600 leading-relaxed">Fill the form and pay the advance. A verified lawyer is assigned to your case instantly.</p>
                </div>

                {/* Step 2 */}
                <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 opacity-50 group-hover:text-[#EF5A6F]/10 transition-colors">2</div>
                    <div className="w-14 h-14 bg-[#FFF5F2] rounded-2xl flex items-center justify-center text-[#EF5A6F] mb-6 group-hover:scale-110 transition-transform">
                        <FileText className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Get Draft in 24h</h3>
                    <p className="text-gray-600 leading-relaxed">Lawyer drafts your notice and shares it on WhatsApp. You get <span className="font-semibold text-gray-900">unlimited revisions</span>.</p>
                </div>

                {/* Step 3 */}
                <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 opacity-50 group-hover:text-[#EF5A6F]/10 transition-colors">3</div>
                    <div className="w-14 h-14 bg-[#FFF5F2] rounded-2xl flex items-center justify-center text-[#EF5A6F] mb-6 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Approve & Send</h3>
                    <p className="text-gray-600 leading-relaxed">Pay the balance only when you are 100% happy. We dispatch via Speed Post.</p>
                </div>
            </div>
           </div>
        </section>

        {/* PRICING CARD */}
        <section className="px-4 py-8">
          <div className="max-w-[400px] mx-auto">
             <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
                {/* Banner */}
                <div className="bg-gradient-to-r from-[#EF5A6F] to-[#DC2626] text-white p-4 text-center">
                    <span className="text-sm font-bold tracking-widest uppercase">Simple Transparent Pricing</span>
                </div>
                
                <div className="p-8">
                    <div className="flex justify-center items-end mb-2">
                        <span className="text-5xl font-bold text-gray-900 tracking-tight">₹499</span>
                        <span className="text-gray-500 font-medium mb-1.5 ml-2">to start</span>
                    </div>
                    <p className="text-sm text-center text-gray-500 mb-8 bg-gray-50 py-2 rounded-lg">Balance ₹1000 payable <strong>after approval</strong></p>
                    
                    <div className="space-y-4 mb-8">
                       {[
                           "Drafted by Bar Council Advocate",
                           "Unlimited Revisions included",
                           "Sent via Govt Speed Post",
                           "Valid in all Indian Courts",
                           "Fully Refundable Assurance"
                       ].map((item, i) => (
                           <div key={i} className="flex gap-3 text-sm font-medium text-gray-700">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                {item}
                           </div>
                       ))}
                    </div>

                    <button 
                        onClick={openForm}
                        className="w-full bg-[#1A1A1A] hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
                    >
                        <Lock className="w-5 h-5" />
                        🔒 Start Legal Notice — Pay ₹499
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                        <Lock className="w-3 h-3" /> Secure Payment via Razorpay
                    </p>
                </div>
             </div>
          </div>
        </section>

        {/* FAQ - Accordion Style */}
        <section className="px-4 py-16 max-w-2xl mx-auto">
           <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Common Questions</h2>
           <div className="space-y-4">
              {[
                  { q: "Is the ₹499 refundable?", a: "Yes. If our lawyer declines your case for any reason, we verify it and issue a 100% refund instantly to your source account." },
                  { q: "Will I have to visit a lawyer personally?", a: "No. The entire process is 100% online. You can chat with the lawyer, review drafts, and request changes from your phone." },
                  { q: "When will the notice be sent?", a: "Once you approve the draft and pay the balance, we print, sign, and dispatch it via Speed Post within 24 hours." }
              ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                     <h3 className="font-bold text-gray-900 mb-2 flex items-start justify-between gap-4">
                        {faq.q}
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                     </h3>
                     <p className="text-sm text-gray-600 leading-relaxed pl-0">{faq.a}</p>
                  </div>
              ))}
           </div>
        </section>


       {/* LEGAL LINKS SECTION */}
       <section className="px-4 py-12 mt-8 border-t border-gray-200/60">
          <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm font-medium text-gray-500">
                  <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
                  <Link href="/terms-and-conditions" className="hover:text-gray-900 transition-colors">Terms & Conditions</Link>
                  <Link href="/terms-of-use" className="hover:text-gray-900 transition-colors">Terms of Use</Link>
              </div>
              <p className="text-[10px] text-gray-400">
                  &copy; {new Date().getFullYear()} VakilTech. All rights reserved.
              </p>
          </div>
       </section>

      </main>

      {/* STICKY CTA MOBILE */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
         <button 
            onClick={openForm}
            className="w-full bg-[#EF5A6F] text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-lg active:scale-[0.98] transition-transform"
        >
            <Lock className="w-4 h-4" />
            🔒 Start Notice — Pay ₹499
        </button>
      </div>

       {/* HIDDEN FORM MODAL */}
       <Modal open={isFormOpen} onOpenChange={setIsFormOpen}>
        <ModalContent 
          className={cn("max-w-md h-[85vh] p-0 overflow-hidden", isPaymentProcessing && "invisible pointer-events-none")}
          overlayClassName={isPaymentProcessing ? "invisible pointer-events-none" : undefined}
        >
          <ModalHeader className="sr-only">
            <ModalTitle>Start Legal Notice</ModalTitle>
          </ModalHeader>
          <div className="h-full overflow-y-auto bg-gray-50">
             <div className="bg-[#EF5A6F] p-4 text-center text-white">
                <h3 className="font-bold text-lg">Just one step away!</h3>
                 <p className="text-xs opacity-90">Fill details to start your legal notice</p>
             </div>
             <div className="p-4">
               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                   <MultiStepForm 
                        serviceType="Legal Notice"
                        servicePrice={1499} 
                        planDetails={{
                            id: "legal-notice-start",
                            name: "Legal Notice Service",
                            price: 1499,
                            advanceAmount: 499
                        }}
                        onPaymentStart={() => setIsPaymentProcessing(true)}
                        onPaymentEnd={() => setIsPaymentProcessing(false)}
                    />
               </div>
             </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
