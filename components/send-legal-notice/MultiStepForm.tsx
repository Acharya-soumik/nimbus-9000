"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";
import { validatePhoneNumber } from "@/lib/validators/phone-validation";
import { countryCodes, defaultCountryCode } from "@/lib/data/country-codes";
import type { CountryCode } from "@/lib/validators/phone-validation";
import { CitySelect } from "@/components/ui/city-select";
import { getCityOptions } from "@/lib/data/indian-cities";
import {
  trackFormStart,
  trackFormStep,
  trackFormSubmission,
} from "@/lib/analytics/dataLayer";
import { trackEvent } from "@/lib/mixpanel";

/* =============================================================================
 * LAZY-LOADED COMPONENTS
 * ============================================================================= */

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="h-16 w-16 animate-pulse rounded-full bg-warning-gold/20" />
  ),
});

const ExitIntentModal = dynamic(
  () =>
    import("./ExitIntentModal").then((mod) => ({
      default: mod.ExitIntentModal,
    })),
  { ssr: false }
);

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

// Step 1 validation schema
const step1Schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  whatsappNumber: z.string().min(1, "Phone number is required"),
});

// Step 2 validation schema
const step2Schema = z.object({
  noticeType: z.string().min(1, "Please select an option"),
  description: z.string().max(1000, "Description must be less than 1000 characters").optional().or(z.literal("")),
  city: z.string().min(1, "Please enter your city"),
});

type Step1Values = z.infer<typeof step1Schema>;
type Step2Values = z.infer<typeof step2Schema>;
type AllFormValues = Step1Values & Step2Values;

export interface FormStepData {
  fullName: string;
  whatsappNumber: string;
  noticeType: string;
  description: string;
  city: string;
}

export interface MultiStepFormProps {
  className?: string;
  onSubmit?: (data: FormStepData) => void;
  onStepChange?: (step: number) => void;
  initialData?: Partial<FormStepData>;
  serviceType?: string;
  servicePrice?: number;
  planDetails?: {
    id: string;
    name: string;
    price: number;
    advanceAmount: number;
  };
  onPaymentStart?: () => void;
  onPaymentEnd?: () => void;
}

/* =============================================================================
 * PROGRESS BAR COMPONENT
 * ============================================================================= */

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className={cn("w-full", className)}>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${percentage}%`,
            background: "linear-gradient(90deg, #EF5A6F 0%, #E8505B 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

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

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

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

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

/* =============================================================================
 * DEADLINE ANIMATION COMPONENT
 * ============================================================================= */

interface DeadlineAnimationProps {
  className?: string;
}

function DeadlineAnimation({ className }: DeadlineAnimationProps) {
  const [animationData, setAnimationData] = React.useState<object | null>(null);

  React.useEffect(() => {
    import("@/public/assets/animations/DeadlineLoading.json")
      .then((data) => setAnimationData(data.default))
      .catch(() => {
        console.warn("Failed to load deadline animation");
      });
  }, []);

  if (!animationData) {
    return (
      <div
        className={cn(
          "h-16 w-16 animate-pulse rounded-full bg-warning-gold/20",
          className
        )}
      />
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className={cn("h-20 w-20", className)}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
  );
}

/* =============================================================================
 * STEP 1 COMPONENT - INLINE FORM
 * ============================================================================= */

interface Step1Props {
  form: ReturnType<typeof useForm<Step1Values>>;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  selectedCountryCode: CountryCode;
  setSelectedCountryCode: (value: CountryCode) => void;
  phoneValidationError: string;
  setPhoneValidationError: (value: string) => void;
  onNext: () => void;
  formTitle: string;
  onFormStart: () => void;
}

function FormStep1({
  form,
  phoneNumber,
  setPhoneNumber,
  selectedCountryCode,
  setSelectedCountryCode,
  phoneValidationError,
  setPhoneValidationError,
  onNext,
  formTitle,
  onFormStart,
}: Step1Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.formState.isValid && !phoneValidationError && phoneNumber) {
      onNext();
    }
  };

  const handlePhoneChange = (value: string) => {
    // Remove country code if user enters it manually
    let cleanedValue = value;
    countryCodes.forEach((country) => {
      if (cleanedValue.startsWith(country.dialCode)) {
        cleanedValue = cleanedValue.replace(country.dialCode, "");
      }
    });

    // Remove non-digits
    cleanedValue = cleanedValue.replace(/\D/g, "");
    setPhoneNumber(cleanedValue);

    // Validate
    const validation = validatePhoneNumber(cleanedValue, selectedCountryCode);
    setPhoneValidationError(validation.error || "");

    if (validation.isValid && validation.formattedNumber) {
      form.setValue("whatsappNumber", validation.formattedNumber, {
        shouldValidate: true,
      });
    } else {
      form.setValue(
        "whatsappNumber",
        selectedCountryCode.dialCode + cleanedValue,
        {
          shouldValidate: true,
        }
      );
    }
  };

  return (
    <div className="relative">
      {/* Gradient Glow Border Effect */}
      <div
        className="absolute -inset-[2px] rounded-[1.25rem] opacity-60 blur-[6px]"
        style={{
          background:
            "linear-gradient(135deg, #FFD54F 0%, #FFA366 25%, #FF8C69 50%, #EF5A6F 75%, #FFB74D 100%)",
        }}
      />

      {/* Gradient Border Layer */}
      <div
        className="absolute -inset-[1.5px] rounded-[1.125rem]"
        style={{
          background:
            "linear-gradient(145deg, #FEF3C7 0%, #FFE8E0 30%, #FDE8E8 60%, #FFE8E0 100%)",
        }}
      />

      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Yellow Top Banner */}
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
            VERIFIED BY BAR COUNCIL LAWYERS
          </span>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          {/* Form Title */}
          <div className="mb-4 text-center">
            <h3 className="font-serif text-xl font-bold italic text-text-heading sm:text-2xl">
              {formTitle}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              Takes less than 2 minutes to file
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 flex justify-center">
            <ProgressBar current={1} total={3} className="max-w-[140px]" />
          </div>

          {/* Full Name Input */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading"
            >
              FULL NAME
            </label>
            <div className="relative">
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...form.register("fullName")}
                className={cn(
                  "w-full rounded-xl border bg-gray-50/50 px-4 py-3.5 pr-12 text-base text-text-body placeholder:text-text-muted focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                  form.formState.errors.fullName
                    ? "border-red-500"
                    : "border-gray-200"
                )}
                onFocus={onFormStart}
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

          {/* WhatsApp Number Input */}
          <div className="mb-6">
            <label
              htmlFor="whatsappNumber"
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading"
            >
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
                id="whatsappNumber"
                type="tel"
                placeholder="98765 43210"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                onFocus={onFormStart}
                className="flex-1 bg-transparent px-4 py-3.5 text-base text-text-body placeholder:text-text-muted focus:outline-none"
              />
            </div>
            {phoneValidationError && (
              <p className="mt-1 text-sm text-red-500">
                {phoneValidationError}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // disabled={
            //   !form.formState.isValid || !!phoneValidationError || !phoneNumber
            // }
            className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(135deg, #EF5A6F 0%, #E8505B 50%, #DC2626 100%)",
              boxShadow:
                "0 4px 14px rgba(239, 90, 111, 0.4), 0 2px 6px rgba(239, 90, 111, 0.2)",
            }}
          >
            Proceed
            <ArrowRightIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

/* =============================================================================
 * STEP 2 COMPONENT - NOTICE DETAILS MODAL
 * ============================================================================= */

interface Step2Props {
  form: ReturnType<typeof useForm<Step2Values>>;
  onBack: () => void;
  onNext: () => void;
  isSubmitting: boolean;
  serviceType: string;
}

// Field configuration based on service type
const getFieldConfig = (serviceType: string) => {
  const serviceKey = serviceType.toLowerCase();

  const configMap: Record<
    string,
    {
      fieldLabel: string;
      fieldPlaceholder: string;
      options: string[];
    }
  > = {
    "legal notice": {
      fieldLabel: "LEGAL NOTICE TYPE",
      fieldPlaceholder: "Select notice type",
      options: [
        "Divorce Notice",
        "Cheque Bounce Notice",
        "Recovery Notice",
        "Property Dispute Notice",
        "Employment Notice",
        "Consumer Complaint Notice",
        "Other Legal Notice",
      ],
    },
    "legal consultation": {
      fieldLabel: "CONSULTATION TYPE",
      fieldPlaceholder: "Select consultation type",
      options: [
        "Family Law",
        "Property Dispute",
        "Employment Law",
        "Consumer Rights",
        "Criminal Law",
        "Civil Matter",
        "Other Legal Matter",
      ],
    },
    "agreement drafting": {
      fieldLabel: "AGREEMENT TYPE",
      fieldPlaceholder: "Select agreement type",
      options: [
        "Rental Agreement",
        "Employment Agreement",
        "Partnership Deed",
        "NDA Agreement",
        "Service Agreement",
        "Sale Agreement",
        "Other Agreement",
      ],
    },
  };

  return configMap[serviceKey] || configMap["legal notice"];
};

function FormStep2({ form, onBack, onNext, isSubmitting, serviceType }: Step2Props) {
  const fieldConfig = getFieldConfig(serviceType);

  // City autocomplete state
  const [selectedCity, setSelectedCity] = React.useState<string>(
    form.getValues("city") || ""
  );
  const [customCity, setCustomCity] = React.useState<string>("");
  const cityOptions = React.useMemo(() => getCityOptions(), []);

  // Character counter state
  const MAX_DESCRIPTION_LENGTH = 1000;
  const [descriptionLength, setDescriptionLength] = React.useState<number>(
    form.getValues("description")?.length || 0
  );

  // Check if "Others" is selected
  const isOthersSelected = selectedCity === "Others";

  // Update form value when custom city changes
  React.useEffect(() => {
    if (isOthersSelected && customCity) {
      form.setValue("city", customCity, {
        shouldValidate: true,
      });
    }
  }, [isOthersSelected, customCity, form]);

  return (
    <>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary">
        {/* Progress Section */}
        <div className="mb-6">
          <ProgressBar current={2} total={3} className="mb-2" />
          <p className="text-center text-sm text-text-muted">Step 2 of 3</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Service Type Field (Dynamic) */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading">
              {fieldConfig.fieldLabel}
            </label>
            <div className="relative">
              <select
                {...form.register("noticeType")}
                className={cn(
                  "w-full appearance-none rounded-xl border bg-gray-50/50 px-4 py-3.5 pr-12 text-base text-text-body focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                  form.formState.errors.noticeType
                    ? "border-red-500"
                    : "border-gray-200"
                )}
              >
                <option value="">{fieldConfig.fieldPlaceholder}</option>
                {fieldConfig.options.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <ChevronDownIcon className="text-text-muted" />
              </div>
            </div>
            {form.formState.errors.noticeType && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.noticeType.message}
              </p>
            )}
          </div>

          {/* Brief Description */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading">
              BRIEF DESCRIPTION{" "}
              <span className="font-normal text-text-muted">(Optional)</span>
            </label>
            <textarea
              {...form.register("description")}
              placeholder="Briefly describe your situation..."
              rows={4}
              maxLength={MAX_DESCRIPTION_LENGTH}
              onChange={(e) => {
                form.register("description").onChange(e);
                setDescriptionLength(e.target.value.length);
              }}
              className={cn(
                "w-full rounded-xl border bg-gray-50/50 px-4 py-3.5 text-base text-text-body placeholder:text-text-muted focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none",
                form.formState.errors.description
                  ? "border-red-500"
                  : "border-gray-200"
              )}
            />
            <div className="mt-1 flex items-center justify-between">
              <div>
                {form.formState.errors.description && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.description.message}
                  </p>
                )}
              </div>
              <p
                className={cn(
                  "text-xs",
                  descriptionLength > MAX_DESCRIPTION_LENGTH * 0.9
                    ? "text-warning-gold font-semibold"
                    : "text-text-muted"
                )}
              >
                {descriptionLength}/{MAX_DESCRIPTION_LENGTH}
              </p>
            </div>
          </div>

          {/* City */}
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-text-heading">
              CITY
            </label>
            <CitySelect
              options={cityOptions}
              value={selectedCity}
              onValueChange={(value) => {
                setSelectedCity(value);
                if (value !== "Others") {
                  // If not "Others", set the city value directly
                  setCustomCity("");
                  form.setValue("city", value, {
                    shouldValidate: true,
                  });
                } else {
                  // If "Others", clear the form value until custom city is entered
                  form.setValue("city", "", {
                    shouldValidate: true,
                  });
                }
              }}
              placeholder="Search your city"
              searchPlaceholder="Search cities..."
              emptyMessage="No cities found"
              error={!!form.formState.errors.city && !isOthersSelected}
            />
            {form.formState.errors.city && !isOthersSelected && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.city.message}
              </p>
            )}

            {/* Custom City Input - shown when "Others" is selected */}
            {isOthersSelected && (
              <div className="mt-3">
                <input
                  type="text"
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  placeholder="Enter your city name"
                  className={cn(
                    "w-full rounded-xl border bg-gray-50/50 px-4 py-3.5 text-base text-text-body placeholder:text-text-muted focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                    form.formState.errors.city || (!customCity && isOthersSelected)
                      ? "border-red-500"
                      : "border-gray-200"
                  )}
                />
                {!customCity && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter your city name
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Footer - Navigation Buttons */}
      <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3.5 text-base font-semibold text-text-body transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!form.formState.isValid || isSubmitting || (isOthersSelected && !customCity)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(135deg, #EF5A6F 0%, #E8505B 50%, #DC2626 100%)",
              boxShadow:
                "0 4px 14px rgba(239, 90, 111, 0.4), 0 2px 6px rgba(239, 90, 111, 0.2)",
            }}
          >
            {isSubmitting ? "Saving..." : "Submit"}
            {!isSubmitting && <ArrowRightIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </>
  );
}

/* =============================================================================
 * STEP 3 COMPONENT - PAYMENT SUMMARY
 * ============================================================================= */

interface Step3Props {
  data: AllFormValues;
  currentPrice: number;
  isDiscounted: boolean;
  onBack: () => void;
  onSubmit: () => void;
  onEdit: () => void;
  isProcessing: boolean;
  advanceLabel: string;
  originalPrice: number;
  serviceType: string;
  planDetails?: {
    id: string;
    name: string;
    price: number;
    advanceAmount: number;
  };
}

function RazorpayEmbedButton() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
    script.defer = true;
    script.id = "razorpay-embed-btn-js";
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("razorpay-embed-btn-js");
      if (
        existingScript &&
        existingScript.parentNode &&
        existingScript.parentNode === document.body
      ) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div
      className="razorpay-embed-btn"
      data-url="https://pages.razorpay.com/pl_S1NONleX2sVIiZ/view"
      data-text="Pay Now"
      data-color="#EF5A6F"
      data-size="large"
    />
  );
}

function FormStep3({
  data,
  currentPrice,
  isDiscounted,
  onBack,
  onSubmit,
  onEdit,
  isProcessing,
  advanceLabel,
  originalPrice,
  serviceType,
  planDetails,
}: Step3Props) {
  const fieldConfig = getFieldConfig(serviceType);
  return (
    <>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary">
        {/* Progress Section */}
        <div className="mb-6">
          <ProgressBar current={3} total={3} className="mb-2" />
          <p className="text-center text-sm text-text-muted">Step 3 of 3</p>
        </div>

        {/* Visual Header */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="flex items-center justify-center">
              <DeadlineAnimation />
              <span className="absolute -right-2 -top-1 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">
                NOW
              </span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-text-heading">
            You&apos;re Almost There!
          </h3>
          <p className="mt-1 text-sm text-text-medium">
            Complete your payment to get your legal notice drafted within 24
            hours
          </p>
        </div>

        {/* Price Card */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50/50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-text-muted block">
                {advanceLabel}
              </span>
              <span className="text-xs text-text-muted font-medium">
                To start lawyer work
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-success">
                ₹{currentPrice.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Balance Nudge */}
          {((planDetails && planDetails.advanceAmount < planDetails.price) || (!planDetails && serviceType.toLowerCase() === "legal notice")) && (
             <div className="mt-4 rounded-xl bg-blue-50/50 border border-blue-100 p-3 flex items-start gap-3">
                <div className="mt-0.5 shrink-0 text-blue-600">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                   </svg>
                </div>
                <div>
                   <p className="text-sm font-bold text-blue-900">
                      Balance ₹{planDetails ? (planDetails.price - planDetails.advanceAmount).toLocaleString('en-IN') : "1,000"} due later
                   </p>
                   <p className="text-xs text-blue-700 mt-0.5 leading-relaxed">
                      You pay the remaining amount <strong>ONLY</strong> after you approve the legal draft.
                   </p>
                </div>
             </div>
          )}

          {isDiscounted && (
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-sm text-text-muted line-through">
                Original Price ₹{originalPrice}
              </span>
              <span className="rounded bg-success-light px-2 py-0.5 text-xs font-bold text-success-darker">
                YOU SAVE ₹{originalPrice - currentPrice}
              </span>
            </div>
          )}

          {/* Payment Logos */}
          <div className="mt-4 flex items-center gap-3 border-t border-gray-200 pt-4">
            <span className="text-xs text-text-muted">Pay with:</span>
            <div className="flex items-center gap-2">
              <span className="rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                Razorpay
              </span>
              <span className="text-lg">💳</span>
              <span className="text-lg">📱</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-3 flex items-center gap-1.5 text-xs text-success-darker">
            <LockIcon className="h-3.5 w-3.5" />
            <span>Secure & Refundable</span>
          </div>
        </div>

        {/* Review Details */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-text-heading">
              Review Your Details
            </span>
            <button
              onClick={onEdit}
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <EditIcon className="h-3.5 w-3.5" />
              Edit
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-muted">Name</span>
              <span className="text-text-body">{data.fullName || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">Phone</span>
              <span className="text-text-body">
                {data.whatsappNumber || "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">
                {fieldConfig.fieldLabel
                  .split(" ")
                  .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
                  .join(" ")}
              </span>
              <span className="text-text-body">{data.noticeType || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">City</span>
              <span className="text-text-body">{data.city || "-"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer - Navigation Buttons & Terms */}
      <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="flex gap-3">

          <button
            type="button"
            onClick={onBack}
            disabled={isProcessing}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3.5 text-base font-semibold text-text-body transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back
          </button>
          
          {/* Temporary Replacement: Razorpay Embed Button */}
          <div className="flex-2 w-full">
            <RazorpayEmbedButton />
          </div>

          {/* Commented out original payment button for rollback
          <button
            type="button"
            onClick={onSubmit}
            disabled={isProcessing}
            className="flex flex-2 items-center justify-center gap-2 rounded-xl py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background:
                "linear-gradient(135deg, #EF5A6F 0%, #E8505B 50%, #DC2626 100%)",
              boxShadow:
                "0 4px 14px rgba(239, 90, 111, 0.4), 0 2px 6px rgba(239, 90, 111, 0.2)",
            }}
          >
            {isProcessing ? "Processing..." : `Pay ₹${currentPrice} Securely`}
            {!isProcessing && <LockIcon className="h-4 w-4" />}
          </button>
          */}
        </div>

        {/* Terms */}
        <p className="mt-3 text-center text-xs text-text-muted">
          By proceeding, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms & Conditions
          </a>
        </p>
      </div>
    </>
  );
}

/* =============================================================================
 * MAIN MULTI-STEP FORM COMPONENT
 * ============================================================================= */

export function MultiStepForm({
  className,
  onSubmit,
  onStepChange,
  initialData = {},
  serviceType = "Legal Notice",
  servicePrice = 499,
  planDetails,
  onPaymentStart,
  onPaymentEnd,
}: MultiStepFormProps) {
  // Helper function to generate dynamic text based on service type
  const getServiceText = (type: string) => {
    const serviceKey = type.toLowerCase();

    const textMap: Record<string, {
      formTitle: string;
      advanceLabel: string;
      apiService: string;
      paymentDescription: string;
    }> = {
      "legal notice": {
        formTitle: "Start Your " + (planDetails?.name || "Legal Notice"),
        advanceLabel: planDetails ? "INITIAL PAYMENT" : "LEGAL NOTICE ADVANCE",
        apiService: "legal-notice",
        paymentDescription: planDetails?.name || "Legal Notice",
      },
      "legal consultation": {
        formTitle: "Book Your Consultation",
        advanceLabel: "CONSULTATION FEE",
        apiService: "legal-consultation",
        paymentDescription: "Legal Consultation",
      },
      "agreement drafting": {
        formTitle: "Start Agreement Drafting",
        advanceLabel: "AGREEMENT ADVANCE",
        apiService: "agreement-drafting",
        paymentDescription: "Agreement Drafting",
      },
    };

    return textMap[serviceKey] || textMap["legal notice"];
  };

  const serviceText = getServiceText(serviceType);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [leadId, setLeadId] = React.useState<string | null>(null);
  const [isCreatingLead, setIsCreatingLead] = React.useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = React.useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);

  // Exit intent state
  const [showExitIntent, setShowExitIntent] = React.useState(false);
  const [exitOfferShown, setExitOfferShown] = React.useState(false);
  
  // Initialize price based on planDetails if available, otherwise use servicePrice
  const [currentPrice, setCurrentPrice] = React.useState(
    planDetails ? planDetails.advanceAmount : servicePrice
  );
  
  // Update price when planDetails changes
  React.useEffect(() => {
    if (planDetails) {
      setCurrentPrice(planDetails.advanceAmount);
    } else {
      setCurrentPrice(servicePrice);
    }
  }, [planDetails, servicePrice]);

  const [isDiscounted, setIsDiscounted] = React.useState(false);

  // Phone validation state
  const [selectedCountryCode, setSelectedCountryCode] =
    React.useState<CountryCode>(defaultCountryCode);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [phoneValidationError, setPhoneValidationError] = React.useState("");

  // Form for Step 1
  const step1Form = useForm<Step1Values>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      fullName: initialData.fullName || "",
      whatsappNumber: initialData.whatsappNumber || "",
    },
    mode: "onChange",
  });

  // Form for Step 2
  const step2Form = useForm<Step2Values>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      noticeType: initialData.noticeType || "",
      description: initialData.description || "",
      city: initialData.city || "",
    },
    mode: "onChange",
  });

  // Combined form data
  const [formData, setFormData] = React.useState<Partial<AllFormValues>>({});

  // Load Razorpay script when reaching Step 3
  React.useEffect(() => {
    if (currentStep !== 3 || isRazorpayLoaded) return;

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => {
      toast.error("Payment system failed to load. Please refresh the page.");
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [currentStep, isRazorpayLoaded]);

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackFormStart(serviceType, serviceText.formTitle);
    }
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    onStepChange?.(step);

    // Track form step progression
    if (step === 2) {
      trackFormStep(serviceType, serviceText.formTitle, 2, "Notice Details");
    } else if (step === 3) {
      trackFormStep(serviceType, serviceText.formTitle, 3, "Payment Review");
    }

    if (step > 1) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleStep1Next = () => {
    const data = step1Form.getValues();
    setFormData((prev) => ({ ...prev, ...data }));

    // Track form step 1 completion
    trackFormStep(serviceType, serviceText.formTitle, 1, "Contact Info", {
      phone: data.whatsappNumber,
      name: data.fullName,
    });

    handleStepChange(2);
  };

  const handleStep2Submit = async () => {
    const step2Data = step2Form.getValues();
    const completeData = { ...formData, ...step2Data } as AllFormValues;
    setFormData(completeData);

    if (leadId) {
      handleStepChange(3);
      return;
    }

    setIsCreatingLead(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: completeData.fullName,
          whatsappNumber: completeData.whatsappNumber,
          location: completeData.city,
          service: serviceText.apiService,
          description: completeData.description,
          legalNoticeType: completeData.noticeType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (
          errorData.error === "Duplicate lead" ||
          errorData.error === "Duplicate unpaid lead"
        ) {
          toast.success("Details already saved! Proceeding to payment.");
          handleStepChange(3);
          return;
        }
        throw new Error(errorData.message || "Failed to create lead");
      }

      const data = await response.json();
      setLeadId(data.leadId);

      // Track form submission (Lead event) with Advanced Matching data
      trackFormSubmission(
        serviceType,
        serviceText.formTitle,
        currentPrice,
        {
          phone: completeData.whatsappNumber,
          name: completeData.fullName,
          city: completeData.city,
        }
      );

      toast.success("Details saved! Now proceed to payment.");
      handleStepChange(3);
    } catch (error) {
      console.error("Lead creation error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to save your details. Please try again."
      );
    } finally {
      setIsCreatingLead(false);
    }
  };

  const handlePayment = async () => {
    if (!leadId) {
      toast.error("Please go back and complete the previous step first.");
      handleStepChange(2);
      return;
    }

    if (
      !isRazorpayLoaded ||
      typeof window === "undefined" ||
      !(window as Window & typeof globalThis & { Razorpay?: unknown }).Razorpay
    ) {
      toast.error(
        "Payment system is still loading. Please wait and try again."
      );
      return;
    }

    setIsProcessingPayment(true);
    onPaymentStart?.();

    trackEvent("Payment Initiated", {
        service_type: serviceType,
        amount: currentPrice,
        currency: "INR",
        provider: "razorpay"
    });

    try {
      const amountInPaise = currentPrice * 100;

      const orderResponse = await fetch("/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise,
          currency: "INR",
          receipt: `${serviceText.apiService}_${Date.now()}`,
          notes: {
            leadId: leadId || "",
            service: serviceText.apiService,
            discounted: isDiscounted,
            planId: planDetails?.id,
            planName: planDetails?.name,
          },
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create order");
      }

      const orderData = await orderResponse.json();
      const orderId = orderData.id;
      const amount = orderData.amount;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount,
        currency: "INR",
        name: "Vakil Tech",
        description: `${serviceText.paymentDescription} - ${formData.noticeType}`,
        order_id: orderId,
        modal: {
          escape: false,
          ondismiss: () => {
            toast.error("Payment cancelled.");
            setIsProcessingPayment(false);
            onPaymentEnd?.();
            setIsModalOpen(true); // Reopen modal when payment is cancelled
          },
        },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          await handlePaymentSuccess(response);
        },
        prefill: {
          name: formData.fullName,
          contact: formData.whatsappNumber,
        },
        theme: {
          color: "#EF5A6F",
        },
      };

      // Close our modal before opening Razorpay
      setIsModalOpen(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      trackEvent("Payment Failed", {
        service_type: serviceType,
        amount: currentPrice,
        error_type: "initiation_failed",
        error_message: error instanceof Error ? error.message : "Unknown error"
      });
      toast.error("Payment failed. Please try again.");
      setIsProcessingPayment(false);
      onPaymentEnd?.();
    }
  };

  const handlePaymentSuccess = async (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => {
    try {
      const verifyResponse = await fetch("/api/payment/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        }),
      });

      const verifyData = await verifyResponse.json();

      if (verifyData.verified) {
        toast.success(
          "Payment successful! Our lawyer will contact you within 3 hours."
        );
        onSubmit?.(formData as FormStepData);

        setTimeout(() => {
          window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}`;
        }, 2000);
      } else {
        throw new Error("Payment verification failed");
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      trackEvent("Payment Failed", {
        service_type: serviceType,
        error_type: "verification_failed",
        error_message: error instanceof Error ? error.message : "Unknown error"
      });
      toast.error("Payment verification failed. Contact support.");
    } finally {
      setIsProcessingPayment(false);
      onPaymentEnd?.();
    }
  };

  const handleCloseAttempt = () => {
    // Don't allow closing if payment was successful
    if (currentStep === 3 && !exitOfferShown) {
      setShowExitIntent(true);
      setExitOfferShown(true);
      return;
    }
    handleStepChange(1);
  };

  const handleClaimDiscount = (discountedPrice: number) => {
    setCurrentPrice(discountedPrice);
    setIsDiscounted(true);
    setShowExitIntent(false);
    toast.success(`Special offer applied! Pay only ₹${discountedPrice}`);
  };

  const handleBookConsultation = (consultationPrice: number) => {
    setCurrentPrice(consultationPrice);
    setIsDiscounted(false);
    setShowExitIntent(false);
    toast.success(`Consultation booked! Pay only ₹${consultationPrice}`);
  };

  const handleEdit = () => {
    handleStepChange(1);
  };

  const handleModalClose = () => {
    handleCloseAttempt();
  };

  const handleBackFromPayment = () => {
    // Show exit intent instead of going back directly (only if not shown)
    if (!exitOfferShown) {
      setShowExitIntent(true);
      setExitOfferShown(true);
    } else {
      // If already shown, go back to step 2
      handleStepChange(2);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Step 1 - Inline Form */}
      {currentStep === 1 && (
        <FormStep1
          form={step1Form}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          selectedCountryCode={selectedCountryCode}
          setSelectedCountryCode={setSelectedCountryCode}
          phoneValidationError={phoneValidationError}
          setPhoneValidationError={setPhoneValidationError}
          onNext={handleStep1Next}
          formTitle={serviceText.formTitle}
          onFormStart={handleFormStart}
        />
      )}

      {/* Responsive Modal for Steps 2-3 */}
      <Modal open={isModalOpen} onOpenChange={handleModalClose}>
        <ModalContent
          className={cn(
            "flex h-auto max-h-[85vh] flex-col p-0 sm:h-auto sm:max-h-[90vh] sm:max-w-md",
            isProcessingPayment && "pointer-events-none"
          )}
          overlayClassName={isProcessingPayment ? "pointer-events-none" : undefined}
          showCloseButton={true}
          drawerProps={{
            className: cn(
              "!max-h-[85vh] !mt-0 !rounded-t-3xl flex flex-col !fixed !bottom-0",
              isProcessingPayment && "pointer-events-none"
            ),
          }}
        >
          <ModalHeader className="sr-only">
            <ModalTitle>
              {currentStep === 2
                ? `${serviceType} Details`
                : "Secure Payment"}
            </ModalTitle>
          </ModalHeader>

          {/* Visible Header - Fixed */}
          <div className="shrink-0 px-4 pt-4 pb-2 text-center">
            <h2 className="text-lg font-bold text-text-heading">
              {currentStep === 2
                ? `${serviceType} Details`
                : "Secure Payment"}
            </h2>
          </div>

          {currentStep === 2 && (
            <FormStep2
              form={step2Form}
              onBack={() => handleStepChange(1)}
              onNext={handleStep2Submit}
              isSubmitting={isCreatingLead}
              serviceType={serviceType}
            />
          )}

          {currentStep === 3 && (
            <FormStep3
              data={formData as AllFormValues}
              currentPrice={currentPrice}
              isDiscounted={isDiscounted}
              onBack={handleBackFromPayment}
              onSubmit={handlePayment}
              onEdit={handleEdit}
              isProcessing={isProcessingPayment}
              advanceLabel={serviceText.advanceLabel}
              originalPrice={servicePrice}
              serviceType={serviceType}
              planDetails={planDetails}
            />
          )}
        </ModalContent>
      </Modal>

      {/* Exit Intent Modal */}
      <ExitIntentModal
        isOpen={showExitIntent}
        onClose={() => setShowExitIntent(false)}
        onClaimOffer={handleClaimDiscount}
        onBookConsultation={handleBookConsultation}
        onDismiss={() => {
          setShowExitIntent(false);
          handleStepChange(1);
        }}
        originalPrice={servicePrice}
      />
    </div>
  );
}

export default MultiStepForm;
