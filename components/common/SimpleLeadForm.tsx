"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { validatePhoneNumber } from "@/lib/validators/phone-validation";
import { countryCodes, defaultCountryCode } from "@/lib/data/country-codes";
import type { CountryCode } from "@/lib/validators/phone-validation";
import { trackFormSubmission, trackFormStart } from "@/lib/analytics/dataLayer";
import { load } from "@cashfreepayments/cashfree-js";

// Icons
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 12 15 16 10" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Validation Schema
const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z.string().min(1, "Phone number is required"),
});

type FormValues = z.infer<typeof schema>;

export interface SimpleLeadFormProps {
  className?: string;
  serviceName: string; // e.g., "FSSAI Registration"
  servicePrice: number;
  formTitle?: string; // e.g., "Start Your FSSAI Application"
  onSuccess?: () => void;
}

export function SimpleLeadForm({
  className,
  serviceName,
  servicePrice,
  formTitle,
  onSuccess,
}: SimpleLeadFormProps) {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);

  // Phone state
  const [selectedCountryCode, setSelectedCountryCode] = React.useState<CountryCode>(defaultCountryCode);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneValidationError, setPhoneValidationError] = React.useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      whatsappNumber: "",
    },
  });

  // Load Razorpay


  const handlePhoneChange = (value: string) => {
    let cleanedValue = value;
    countryCodes.forEach((country) => {
      if (cleanedValue.startsWith(country.dialCode)) {
        cleanedValue = cleanedValue.replace(country.dialCode, "");
      }
    });

    cleanedValue = cleanedValue.replace(/\D/g, "");
    setPhoneNumber(cleanedValue);

    const validation = validatePhoneNumber(cleanedValue, selectedCountryCode);
    setPhoneValidationError(validation.error || "");

    if (validation.isValid && validation.formattedNumber) {
      form.setValue("whatsappNumber", validation.formattedNumber, { shouldValidate: true });
    } else {
      form.setValue("whatsappNumber", selectedCountryCode.dialCode + cleanedValue, { shouldValidate: true });
    }
  };

  const onFormFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFormStart(serviceName, formTitle || `Start Your ${serviceName}`);
    }
  };

  const handlePayment = async (leadId: string, data: FormValues) => {
    try {
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: servicePrice,
          customerName: data.fullName,
          customerPhone: data.whatsappNumber,
          customerId: leadId,
          notes: {
             leadId: leadId,
             service: serviceName
          }
        }),
      });

      if (!orderResponse.ok) throw new Error("Failed to create order");
      
      const { paymentSessionId, environment } = await orderResponse.json();

      // Initialize Cashfree with correct environment
      const cashfree = await load({
        mode: environment,
      });

      cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
      });
      
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsProcessing(true);
    try {
      // 1. Create Lead
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          whatsappNumber: data.whatsappNumber,
          // service: serviceName.toLowerCase().replace(/\s/g, "-"),
          // Convert service name to kebab-case slug for API validation
          service: serviceName.toLowerCase().replace(/\s+/g, '-'), 
          location: "Online", // Default since we don't ask
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        if (err.error !== "Duplicate lead" && err.error !== "Duplicate unpaid lead") {
            throw new Error(err.message || "Failed to save details");
        }
      }

      const leadData = await response.json();
      const leadId = leadData.leadId;

      trackFormSubmission(serviceName, formTitle || `Start ${serviceName}`, servicePrice, {
          name: data.fullName,
          phone: data.whatsappNumber
      });

      // 2. Start Payment
      await handlePayment(leadId, data);

    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.message || "Something went wrong.");
      setIsProcessing(false);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Glow Effects */}
      <div
        className="absolute -inset-[2px] rounded-[1.25rem] opacity-60 blur-[6px]"
        style={{
          background:
            "linear-gradient(135deg, #FFD54F 0%, #FFA366 25%, #FF8C69 50%, #EF5A6F 75%, #FFB74D 100%)",
        }}
      />
      <div
        className="absolute -inset-[1.5px] rounded-[1.125rem]"
        style={{
          background:
            "linear-gradient(145deg, #FEF3C7 0%, #FFE8E0 30%, #FDE8E8 60%, #FFE8E0 100%)",
        }}
      />

      {/* Card Content */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Banner */}
        <div
          className="relative px-4 py-3 text-center"
          style={{
            background:
              "linear-gradient(180deg, #FEF3C7 0%, #FFF9E6 60%, #FFFFFF 100%)",
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #FFD54F 0%, #FBBF24 50%, #FFB74D 100%)",
            }}
          />
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-success-darker">
            <ShieldCheckIcon />
            VERIFIED BY EXPERTS
          </span>
        </div>

        {/* Form Body */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-5 sm:p-6">
          <div className="mb-6 text-center">
            <h3 className="font-serif text-xl font-bold italic text-text-heading sm:text-2xl">
              {formTitle || `Start Your ${serviceName}`}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              Takes less than 2 minutes to file
            </p>
          </div>

          {/* Fields */}
          <div className="mb-4">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading">
              FULL NAME
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...form.register("fullName")}
                onFocus={onFormFocus}
                className={cn(
                  "w-full rounded-xl border bg-gray-50/50 px-4 py-3.5 pr-12 text-base text-text-body placeholder:text-text-muted focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                  form.formState.errors.fullName ? "border-red-500" : "border-gray-200"
                )}
              />
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <UserIcon className="text-text-muted" />
              </div>
            </div>
             {form.formState.errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.fullName.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading">
              WHATSAPP NUMBER
            </label>
            <div
              className={cn(
                "flex overflow-hidden rounded-xl border bg-gray-50/50 transition-all focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20",
                phoneValidationError ? "border-red-500" : "border-gray-200"
              )}
            >
              <div className="flex items-center gap-2 border-r border-gray-200 bg-transparent px-3 py-3.5">
                <span className="text-lg">{selectedCountryCode.flag}</span>
                <span className="text-sm font-medium text-text-body">
                  {selectedCountryCode.dialCode}
                </span>
              </div>
              <input
                type="tel"
                placeholder="98765 43210"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={onFormFocus}
                className="flex-1 bg-transparent px-4 py-3.5 text-base text-text-body placeholder:text-text-muted focus:outline-none"
              />
            </div>
             {phoneValidationError && (
              <p className="mt-1 text-sm text-red-500">
                {phoneValidationError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isProcessing || !form.formState.isValid || !!phoneValidationError || !phoneNumber}
            className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(135deg, #EF5A6F 0%, #E8505B 50%, #DC2626 100%)",
              boxShadow:
                "0 4px 14px rgba(239, 90, 111, 0.4), 0 2px 6px rgba(239, 90, 111, 0.2)",
            }}
          >
            {isProcessing ? "Processing..." : "Proceed"}
            {!isProcessing && <ArrowRightIcon />}
          </button>
        </form>
      </div>
    </div>
  );
}
