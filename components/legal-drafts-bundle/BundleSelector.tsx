"use client";

import { Check } from "lucide-react";
import { BundleOption } from "@/lib/legal-drafts-bundle/bundle-data";

interface BundleSelectorProps {
  bundleOptions: BundleOption[];
  selectedBundle: string;
  onSelectBundle: (bundleId: string) => void;
}

export function BundleSelector({
  bundleOptions,
  selectedBundle,
  onSelectBundle,
}: BundleSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg mb-3">
        Choose Your Language Bundle:
      </h3>
      {bundleOptions.map((bundle) => (
        <div
          key={bundle.id}
          className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
            selectedBundle === bundle.id
              ? "border-primary bg-primary/5 shadow-md"
              : "border-border hover:border-primary/50 hover:shadow"
          } ${bundle.popular ? "ring-2 ring-primary/30" : ""}`}
          onClick={() => onSelectBundle(bundle.id)}
        >
          {bundle.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              MOST POPULAR
            </div>
          )}

          <div className="flex items-start gap-3">
            {/* Radio circle */}
            <div
              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                selectedBundle === bundle.id
                  ? "border-primary bg-primary"
                  : "border-muted-foreground/40"
              }`}
            >
              {selectedBundle === bundle.id && (
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              )}
            </div>

            {/* Bundle details */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-lg">{bundle.name}</h4>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{bundle.originalPrice}
                    </span>
                    <span className="text-xl font-bold text-primary">
                      ₹{bundle.price}
                    </span>
                  </div>
                  <span className="text-xs text-green-600 font-semibold">
                    {bundle.discount}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {bundle.description}
              </p>

              {/* Features list */}
              <ul className="space-y-1.5">
                {bundle.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
