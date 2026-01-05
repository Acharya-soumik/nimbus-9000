"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PricingPlan {
  id: "basic" | "smart";
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  missingFeatures?: string[];
  advanceAmount: number;
  bannerText?: string;
}

interface PricingPlansProps {
  onPlanSelect: (plan: PricingPlan) => void;
  selectedPlanId?: string;
}

export function PricingPlans({ onPlanSelect, selectedPlanId = "smart" }: PricingPlansProps) {
  const plans: PricingPlan[] = [
    {
      id: "basic",
      name: "Legal Notice Only",
      price: 1499,
      originalPrice: 2499, // Assuming a higher original price for display
      description: "Document-Focused",
      advanceAmount: 499,
      bannerText: undefined,
      features: [
        "Case review by lawyer",
        "Custom legal notice drafting",
        "One-time lawyer consultation",
        "Sending via advocate",
        "Speed Post delivery proof",
      ],
      missingFeatures: [
        "Reply review",
        "Follow-up calls",
        "Ongoing guidance",
      ]
    },
    {
      id: "smart",
      name: "Guided Dispute Resolution",
      price: 4999,
      originalPrice: 7999,
      description: "Recommended for Results",
      advanceAmount: 799,
      bannerText: "Recommended",
      features: [
        "Everything in Legal Notice Only",
        "15-day active follow-up",
        "Reply review & explanation",
        "Lawyer guidance if no reply",
        "Status updates",
        "Optional lawyer calls",
        "10% discount on future services"
      ]
    }
  ];

  return (
    <section id="pricing-plans" className="py-12 lg:py-16 bg-background-gray">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-text-heading sm:text-3xl lg:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-2 text-text-medium">
            Select the level of support you need
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => {
                // Track plan selection
                if (typeof window !== "undefined" && (window as any).dataLayer) {
                  (window as any).dataLayer.push({
                    event: "select_plan",
                    plan_id: plan.id,
                    plan_name: plan.name,
                    value: plan.price,
                    currency: "INR"
                  });
                }
                onPlanSelect(plan);
              }}
              className={cn(
                "relative flex flex-col rounded-2xl border-2 transition-all cursor-pointer overflow-hidden",
                selectedPlanId === plan.id || (!!plan.bannerText && !selectedPlanId)
                  ? "border-primary bg-white shadow-xl scale-[1.02]"
                  : "border-gray-200 bg-white/50 hover:border-primary/50"
              )}
            >
              {plan.bannerText && (
                <div className="absolute top-0 right-0 bg-warning-yellow text-warning-brown text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                  {plan.bannerText}
                </div>
              )}

              <div className="p-6 lg:p-8 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-text-heading">{plan.name}</h3>
                  <p className="text-sm text-text-muted mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-text-heading">
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-text-muted line-through">
                      ₹{plan.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  {plan.advanceAmount < plan.price && (
                    <div className="mt-2 inline-block rounded-lg bg-success-light px-3 py-1 text-sm font-semibold text-success-darker">
                      Pay only ₹{plan.advanceAmount} to start
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {/* Included Features */}
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className={cn(
                          "h-5 w-5 shrink-0 mt-0.5",
                          plan.id === "smart" ? "text-success" : "text-gray-400"
                        )}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="green"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="9 12 12 15 16 10" />
                      </svg>
                      <span className="text-sm text-text-body">{feature}</span>
                    </li>
                  ))}
                  
                  {/* Missing Features (Strikethrough) */}
                  {plan.missingFeatures?.map((feature, idx) => (
                    <li key={`missing-${idx}`} className="flex items-start gap-3 opacity-60">
                      <svg
                        className="h-5 w-5 shrink-0 mt-0.5 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="red"
                        strokeWidth="2.5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <span className="text-sm text-black line-through decoration-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "w-full rounded-xl py-3.5 text-base font-bold transition-all",
                    selectedPlanId === plan.id
                      ? "bg-primary text-white shadow-lg hover:bg-primary-dark"
                      : "bg-gray-100 text-text-heading hover:bg-gray-200"
                  )}
                >
                  {selectedPlanId === plan.id ? "Selected" : (plan.id === "smart" ? "Get Guided Resolution" : "Start Lawyer Review")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
            <p className="text-sm font-medium text-text-medium bg-yellow-50 inline-block px-4 py-2 rounded-full border border-yellow-100">
                💡 Advance payment confirms lawyer allocation. Remaining amount is paid only after draft approval.
            </p>
        </div>
      </div>
    </section>
  );
}