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
import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { trackLandingPageView, trackEvent } from "@/lib/mixpanel";

// Reusable Components
import MultiStepForm from "@/components/send-legal-notice/MultiStepForm";
import { AdvocateShowcase } from "@/components/start-legal-notice/AdvocateShowcase";
import { 
  PopularLegalNotices, 
  SampleNoticeSection, 
  SampleNoticeModal,
  HowWeWorkTimeline,
  TestimonialsSection, 
  type SampleNoticeContent
} from "@/components/send-legal-notice";
import { PostNoticeClarity } from "@/components/send-legal-notice/PostNoticeClarity";
import { WhatsAppFloater } from "@/components/ui/whatsapp-floater";
import { realSampleNotices } from "@/lib/send-legal-notice/real-sample-notices";

const moneyRecoveryNotice: SampleNoticeContent = realSampleNotices["money-recovery"];

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
 * CUSTOM TESTIMONIALS (Selected Strongest)
 * ============================================================================= */
const landingPageTestimonials = [
  {
    quote: "I was not getting my salary dues from my previous employer. The legal notice drafted by VakilTech showed I was serious. They cleared my dues to avoid court trouble. Thank you!",
    name: "Anjali Desai",
    title: "Marketing Executive, Mumbai",
  },
  {
    quote: "My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through VakilTech, he returned the full amount within 10 days.",
    name: "Rohan Malhotra",
    title: "Software Engineer, Bangalore",
  },
  {
    quote: "A builder in Noida was delaying possession by 2 years. I sent a legal notice for refund with interest. They finally called me for a settlement meeting.",
    name: "Suresh Gupta",
    title: "Government Employee, Delhi",
  },
  {
    quote: "Standard legal notice for cheque bounce. The process was simple, and the lawyer added all necessary sections under the NI Act. Very professional service.",
    name: "Vikramjit Singh",
    title: "Business Owner, Ludhiana",
  },
];

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */
export default function LandingPage() {
  const [showSampleNoticeModal, setShowSampleNoticeModal] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const scrollToForm = () => {
    trackEvent("CTA Clicked", {
        section: "Hero/Sticky",
        action: "Scroll to Form"
    });
    document.getElementById("start-notice-form")?.scrollIntoView({ behavior: "smooth" });
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

             {/* Sub-headline (Above Fold Optimisation) */}
             <motion.p variants={itemVariants} className="text-lg md:text-xl font-medium text-gray-800 max-w-2xl mx-auto border-b-2 border-[#EF5A6F]/20 pb-4">
                Every legal notice is personally drafted by a licensed advocate — <span className="font-bold text-[#EF5A6F] italic">not templates or AI.</span>
             </motion.p>
            
            {/* USP Price */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
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
                onClick={scrollToForm}
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
              
              <div className="mt-4 space-y-1">
                  <p className="text-sm font-bold text-[#E8505B] animate-pulse">
                      Every delay reduces your legal leverage.
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                     Most disputes resolve only after a legal notice is sent.
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

        {/* NEW ADVOCATE SHOWCASE */}
        <AdvocateShowcase />

        {/* HOW IT WORKS (Reusable Component) */}
        <HowWeWorkTimeline />
        
        {/* SAMPLE NOTICE (Reusable Component) - MOVED UP HERE */}
        <SampleNoticeSection
          noticeCategory="Money Recovery"
          title="See a Real Legal Notice Format"
          subtitle="Preview a real advocate-drafted legal notice used in actual cases."
          buttonText="View Sample Notice"
          onButtonClick={() => setShowSampleNoticeModal(true)}
        />

        {/* WHAT HAPPENS AFTER (Reusable Component) */}
        <PostNoticeClarity />

        {/* TYPES OF NOTICES (Reusable Component) */}
        <PopularLegalNotices
          notices={[
            {
              id: "recovery-of-money",
              title: "Money Recovery",
              description: "Recover pending dues, salary, or payments legally.",
              iconType: "rupee",
              href: "#start-notice-form",
            },
            {
              id: "cheque-bounce",
              title: "Cheque Bounce",
              description: "Legal action under Section 138 of NI Act.",
              iconType: "cheque",
              href: "#start-notice-form",
            },
            {
              id: "property-dispute",
              title: "Property & Tenant",
              description: "Disputes regarding possession, rent, or eviction.",
              iconType: "loan",
              href: "#start-notice-form",
            },
            {
              id: "consumer-complaint",
              title: "Consumer & Defect",
              description: "For defective goods or deficient services.",
              iconType: "cheque",
              href: "#start-notice-form",
            },
            {
              id: "matrimonial",
              title: "Divorce & Matrimonial",
              description: "Divorce, restitution, or custody notices.",
              iconType: "loan",
              href: "#start-notice-form",
            },
            {
              id: "employment",
              title: "Employment Issues",
              description: "Unpaid salary, wrongful termination, or harassment.",
              iconType: "cheque",
              href: "#start-notice-form",
            },
          ]}
        />

        {/* TESTIMONIALS (Reusable Component) - USING CUSTOM TESTIMONIALS */}
        <TestimonialsSection 
            className="bg-background-gray"
            testimonials={landingPageTestimonials} 
        />

        {/* EMBEDDED FORM SECTION */}
        <section id="start-notice-form" className="px-4 py-12 md:py-16 max-w-xl mx-auto relative z-10">
             <div className="text-center mb-8">
                 <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Legal Notice</h2>
                 <p className="text-gray-600">Fill the details below to assign a lawyer to your case.</p>
             </div>
             
             <div className={cn("bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", isPaymentProcessing && "pointer-events-none opacity-80")}>
                 <div className="bg-[#EF5A6F] p-4 text-center text-white">
                     <h3 className="font-bold text-lg">Pay ₹499 Advance to Start</h3>
                     <p className="text-xs opacity-90">Secure Payment • Fully Refundable</p>
                 </div>
                 <div className="p-4 md:p-6">
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
        </section>

        {/* FAQ - Accordion Style (Keeping existing simple FAQ for focused landing page) */}
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


       {/* LEGAL LINKS SECTION WITH WHATSAPP LINK */}
       <section className="px-4 py-12 mt-8 border-t border-gray-200/60">
          <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* WhatsApp Text Link as requested */}
              <div className="pb-4">
                  <a 
                    href="https://wa.me/917047683995?text=Hi! I have a question about sending a legal notice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#EF5A6F] font-semibold hover:underline"
                  >
                     <span className="bg-[#EF5A6F]/10 p-1 rounded-full"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-4 h-4"/></span>
                     Need help? Chat with us on WhatsApp
                  </a>
              </div>

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
            onClick={scrollToForm}
            className="w-full bg-[#EF5A6F] text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-lg active:scale-[0.98] transition-transform"
        >
            <Lock className="w-4 h-4" />
            🔒 Start Notice — Pay ₹499
        </button>
      </div>

       {/* SAMPLE NOTICE MODAL */}
       <SampleNoticeModal
          open={showSampleNoticeModal}
          onOpenChange={setShowSampleNoticeModal}
          noticeCategory="Money Recovery"
          noticeContent={moneyRecoveryNotice}
          ctaLabel="Need a notice like this?"
          ctaSubtitle="Our lawyers draft & send it for you."
          ctaButtonText="Start Lawyer Review"
          onCtaClick={() => {
            setShowSampleNoticeModal(false);
            scrollToForm();
          }}
        />

    </div>
  );
}
