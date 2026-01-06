"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/mixpanel";
import { Check, X, Shield, Clock, FileText, Phone } from "lucide-react";

interface PricingPlan {
  id: "basic" | "smart";
  name: string;
  bestFor: string;
  price: number;
  originalPrice: number;
  advanceAmount: number;
  bannerText?: string;
  features: string[];
  highlightedFeatures?: string[];
}

interface PricingPlansProps {
  onPlanSelect: (plan: PricingPlan) => void;
  selectedPlanId?: string;
}

export function PricingPlans({ onPlanSelect, selectedPlanId = "smart" }: PricingPlansProps) {
  const plans: PricingPlan[] = [
    {
      id: "basic",
      name: "Standard Legal Notice",
      bestFor: "Best for: Simple formalities where you just need a legal record.",
      price: 1499,
      originalPrice: 2499,
      advanceAmount: 499,
      features: [
        "Lawyer Consultation (Phone call)",
        "Professional Drafting",
        "Dispatched via Advocate",
        "Speed Post Tracking"
      ]
    },
    {
      id: "smart",
      name: "Complete Dispute Resolution",
      bestFor: "Best for: Serious disputes where you want to recover money.",
      price: 2999,
      originalPrice: 4999,
      advanceAmount: 799,
      bannerText: "RECOMMENDED FOR RECOVERY",
      features: [
        "Everything in Standard Plan",
        "15-Day Active Lawyer Follow-up",
        "Reply Review & Explanation",
        "Strategy Guidance & Support",
        "Supreme Court Lawyer Access",
      ]
    }
  ];

  return (
    <section id="pricing-plans" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4 font-display">
            Transparent, Pay-As-You-Go Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Pay a small advance to hire your lawyer. Pay the rest <span className="font-semibold text-slate-900">ONLY</span> after you approve the legal draft.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            const isRecommended = !!plan.bannerText;
            const balanceAmount = plan.price - plan.advanceAmount;

            return (
              <div
                key={plan.id}
                onClick={() => {
                  trackEvent("Payment Started", {
                    plan_id: plan.id,
                    plan_name: plan.name,
                    amount: plan.price,
                    plan_type: plan.id
                  });
                  onPlanSelect(plan);
                }}
                className={cn(
                  "relative flex flex-col rounded-2xl transition-all cursor-pointer overflow-hidden border-2",
                  isSelected || isRecommended
                    ? "border-primary shadow-xl scale-[1.02] z-10 bg-white"
                    : "border-slate-200 bg-white/50 hover:border-primary/50 hover:bg-white"
                )}
              >
                {plan.bannerText && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
                )}
                
                {plan.bannerText && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-sm">
                    {plan.bannerText}
                  </div>
                )}

                <div className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md">
                      {plan.bestFor}
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-3">
                      <span className="text-slate-600 font-medium">To Start Work</span>
                      <span className="text-xl font-bold text-primary">₹{plan.advanceAmount}</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-500 text-sm">Due after approval</span>
                      <span className="text-slate-900 font-semibold">₹{balanceAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-200/50">
                      <span className="text-xs uppercase tracking-wide font-bold text-slate-400">Total</span>
                      <div className="text-right">
                         <span className="text-sm text-slate-400 line-through mr-2">₹{plan.originalPrice.toLocaleString()}</span>
                         <span className="text-lg font-bold text-slate-900">₹{plan.price.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={cn(
                          "mt-0.5 rounded-full p-0.5 shrink-0",
                          isRecommended ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"
                        )}>
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={cn(
                      "w-full rounded-xl py-4 text-base font-bold transition-all flex items-center justify-center gap-2",
                      isSelected || isRecommended
                        ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:shadow-xl hover:translate-y-[-1px]"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    )}
                  >
                     <span>{plan.id === "smart" ? "Get Guided Resolution" : "Inform Legal Notice"}</span>
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3 font-medium">
                    Fully Refundable if Lawyer declines case
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* How Payment Works */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="bg-primary/10 text-primary h-6 w-6 rounded flex items-center justify-center text-sm">i</span>
            How Payment Works
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                   <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center border border-slate-200">1</div>
                   <h4 className="font-semibold text-slate-900">Book Lawyer</h4>
                </div>
                <p className="text-sm text-slate-600 pl-11">
                  Pay the small advance (₹499/₹799) to get a dedicated lawyer assigned.
                </p>
             </div>
             
             <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                   <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-900 font-bold flex items-center justify-center border border-slate-200">2</div>
                   <h4 className="font-semibold text-slate-900">Review Draft</h4>
                </div>
                <p className="text-sm text-slate-600 pl-11">
                  Your lawyer drafts the notice. Request unlimited changes until it's perfect.
                </p>
             </div>

             <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                   <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center border border-green-200">3</div>
                   <h4 className="font-semibold text-slate-900">Pay Balance</h4>
                </div>
                <p className="text-sm text-slate-600 pl-11">
                   Pay the remaining amount ONLY when you are ready to dispatch the notice.
                </p>
             </div>
          </div>
        </div>

        {/* Trust Reassurance */}
        <div className="text-center">
            <div className=" inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 text-[#1d1d1d] text-sm font-medium shadow-lg shadow-primary">
                <Shield className="h-4 w-4 text-green-400 fill-current" />
                <span>100% Satisfaction Guarantee. We don't send anything until you say "Yes".</span>
            </div>
        </div>

      </div>
    </section>
  );
}