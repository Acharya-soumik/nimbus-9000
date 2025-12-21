"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "@/components/ui/modal";

/* =============================================================================
 * TYPE DEFINITIONS
 * ============================================================================= */

export type ExitReasonId =
  | "price-high"
  | "need-discussion"
  | "not-sure"
  | "think-about"
  | "no-trust"
  | "comparing"
  | null;

export type OfferType = "discount" | "consultation" | null;

export interface ExitReason {
  id: ExitReasonId;
  icon: React.ReactNode;
  text: string;
}

export interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  headline?: string;
  subheadline?: string;
  reasons?: ExitReason[];
  onClaimOffer: (discountedPrice: number) => void;
  onBookConsultation?: (consultationPrice: number) => void;
  dismissText?: string;
  onDismiss?: () => void;
  className?: string;
  originalPrice?: number;
}

/* =============================================================================
 * COUNTDOWN TIMER HOOK
 * ============================================================================= */

function useCountdown(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = React.useState(initialSeconds);
  const [isExpired, setIsExpired] = React.useState(false);

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return {
    minutes,
    seconds,
    timeLeft,
    isExpired,
    formatted: `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
  };
}

/* =============================================================================
 * ICON COMPONENTS
 * ============================================================================= */

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CurrencyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

/* =============================================================================
 * DEFAULT EXIT REASONS
 * ============================================================================= */

const defaultExitReasons: ExitReason[] = [
  { id: "price-high", icon: <span className="text-xl">💰</span>, text: "Price is too high" },
  { id: "need-discussion", icon: <span className="text-xl">💬</span>, text: "Need to discuss first" },
  { id: "not-sure", icon: <span className="text-xl">❓</span>, text: "Not sure if it works" },
  { id: "think-about", icon: <span className="text-xl">⏳</span>, text: "Want to think about it" },
  { id: "no-trust", icon: <span className="text-xl">🔒</span>, text: "Don't trust online services" },
  { id: "comparing", icon: <span className="text-xl">🔍</span>, text: "Just comparing prices" },
];

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function ExitIntentModal({
  isOpen,
  onClose,
  headline = "Wait! Before You Go",
  subheadline = "We noticed you're about to leave. Help us understand why:",
  reasons = defaultExitReasons,
  onClaimOffer,
  onBookConsultation,
  dismissText = "Actually, just close",
  onDismiss,
  className,
  originalPrice = 499,
}: ExitIntentModalProps) {
  // View state management
  const [currentView, setCurrentView] = React.useState<
    "reason-capture" | "discount-offer" | "consultation-offer"
  >("reason-capture");
  const [selectedReason, setSelectedReason] = React.useState<ExitReasonId>(null);

  // Determine offer type based on reason
  const getOfferType = (reason: ExitReasonId): OfferType => {
    if (
      reason === "price-high" ||
      reason === "comparing" ||
      reason === "think-about"
    ) {
      return "discount";
    }
    if (
      reason === "need-discussion" ||
      reason === "not-sure" ||
      reason === "no-trust"
    ) {
      return "consultation";
    }
    return null;
  };

  const handleReasonSelect = (reasonId: ExitReasonId) => {
    const offerType = getOfferType(reasonId);

    setSelectedReason(reasonId);

    // Show appropriate offer
    if (offerType === "discount") {
      setCurrentView("discount-offer");
    } else if (offerType === "consultation") {
      setCurrentView("consultation-offer");
    } else {
      // No offer, just close
      handleDismiss();
    }
  };

  const handleClaimDiscount = () => {
    const discountedPrice = 299;
    onClaimOffer(discountedPrice);
    resetAndClose();
  };

  const handleBookConsultation = () => {
    const consultationPrice = 99;
    onBookConsultation?.(consultationPrice);
    resetAndClose();
  };

  const handleSkipToFullService = () => {
    // Return to payment with original price
    resetAndClose();
  };

  const resetAndClose = () => {
    setCurrentView("reason-capture");
    setSelectedReason(null);
    onClose();
  };

  const handleDismiss = () => {
    onDismiss?.();
    resetAndClose();
  };

  const handleModalClose = () => {
    // Only allow closing from reason-capture view
    if (currentView === "reason-capture") {
      resetAndClose();
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={handleModalClose}>
      <ModalContent
        className={cn(
          "flex h-full max-h-dvh flex-col border-0 p-0 sm:h-auto sm:max-h-[90vh] sm:max-w-md",
          className
        )}
        showCloseButton={currentView === "reason-capture"}
        drawerProps={{
          className: cn(
            "!max-h-dvh !h-dvh !mt-0 !rounded-t-3xl flex flex-col",
            className
          ),
        }}
      >
        <ModalHeader className="sr-only">
          <ModalTitle>Before You Go</ModalTitle>
        </ModalHeader>

        {/* Reason Capture View */}
        {currentView === "reason-capture" && (
          <>
            {/* Yellow/Orange Gradient Header Banner - Fixed */}
            <div
              className="relative shrink-0 rounded-t-3xl px-6 py-4 md:rounded-t-lg"
              style={{
                background:
                  "linear-gradient(90deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)",
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold text-warning-brown">
                  {headline}
                </span>
                <WarningIcon className="h-5 w-5 text-warning-dark" />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 pb-4 min-h-0">
              {/* Subheadline */}
              <p className="mb-5 text-center text-sm text-text-medium">
                {subheadline}
              </p>

              {/* Exit Reasons */}
              <div className="space-y-2.5">
                {reasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() => handleReasonSelect(reason.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all",
                      selectedReason === reason.id
                        ? "border-primary bg-background-pink-light/50"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                    )}
                  >
                    <span className="flex-shrink-0">{reason.icon}</span>
                    <span
                      className={cn(
                        "text-sm font-medium",
                        selectedReason === reason.id
                          ? "text-text-heading"
                          : "text-text-medium"
                      )}
                    >
                      {reason.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-4">
              {/* Dismiss Link */}
              <button
                onClick={handleDismiss}
                className="w-full text-center text-sm text-text-muted hover:text-text-medium hover:underline"
              >
                {dismissText}
              </button>
            </div>
          </>
        )}

        {/* Discount Offer View */}
        {currentView === "discount-offer" && (
          <DiscountOfferView
            originalPrice={originalPrice}
            discountedPrice={299}
            onClaimOffer={handleClaimDiscount}
            onDecline={handleDismiss}
          />
        )}

        {/* Consultation Offer View */}
        {currentView === "consultation-offer" && (
          <ConsultationOfferView
            consultationPrice={99}
            regularPrice={originalPrice}
            onBookConsultation={handleBookConsultation}
            onSkipToFullService={handleSkipToFullService}
          />
        )}
      </ModalContent>
    </Modal>
  );
}

/* =============================================================================
 * DISCOUNT OFFER VIEW COMPONENT
 * ============================================================================= */

interface DiscountOfferViewProps {
  originalPrice: number;
  discountedPrice: number;
  onClaimOffer: () => void;
  onDecline: () => void;
}

function DiscountOfferView({
  originalPrice,
  discountedPrice,
  onClaimOffer,
  onDecline,
}: DiscountOfferViewProps) {
  const savings = originalPrice - discountedPrice;
  const countdown = useCountdown(360); // 6 minutes

  return (
    <div className="flex h-full flex-col">
      {/* Orange Header */}
      <div
        className="shrink-0 rounded-t-3xl px-6 py-4 text-center md:rounded-t-lg"
        style={{
          background: "linear-gradient(90deg, #FB923C 0%, #F97316 50%, #EA580C 100%)",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-bold uppercase tracking-wide text-white">
            SPECIAL ONE-TIME OFFER
          </span>
          <SparklesIcon className="h-5 w-5 text-warning-yellow-bright" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-4 min-h-0">
        {/* Headline */}
        <h2 className="mb-4 text-center text-2xl font-bold text-text-heading">
          Trust Our Process
        </h2>

        {/* Limited Time Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-warning-yellow/20 px-4 py-2">
            <BoltIcon className="h-4 w-4 text-warning-gold-dark" />
            <span className="text-sm font-semibold text-warning-gold-dark">
              LIMITED TIME • EXPIRES IN {Math.ceil(countdown.timeLeft / 60)} MIN
            </span>
          </div>
        </div>

        {/* Price Card */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50/50 p-5">
          <div className="mb-2 flex items-center justify-between text-sm text-text-muted">
            <span>Regular Price:</span>
            <span className="line-through">₹{originalPrice}</span>
          </div>

          <div className="mb-3">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">
              YOUR PRICE TODAY
            </p>
            <p className="text-4xl font-bold text-success">₹{discountedPrice}</p>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-success-light px-3 py-1.5">
            <span className="text-sm font-bold text-success-darker">
              YOU SAVE ₹{savings} INSTANTLY
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5">
            <StarIcon className="h-4 w-4 text-warning-gold" />
            <span className="text-xs font-medium text-text-medium">500+ notices</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5">
            <CurrencyIcon className="h-4 w-4 text-success" />
            <span className="text-xs font-medium text-text-medium">15,000+ customers</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5">
            <BoltIcon className="h-4 w-4 text-warning-bright" />
            <span className="text-xs font-medium text-text-medium">24hr service</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-bold text-text-heading">Why act now:</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <BoltIcon className="h-4 w-4 text-warning-gold" />
              <span className="text-sm text-text-medium">Lawyer assigned in 30 mins</span>
            </div>
            <div className="flex items-center gap-3">
              <DocumentIcon className="h-4 w-4 text-info" />
              <span className="text-sm text-text-medium">Notice ready in 24 hrs</span>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-background-pink-light/50 px-4 py-3">
          <ClockIcon className="h-5 w-5 text-primary" />
          <span
            className={cn(
              "text-base font-semibold text-primary",
              countdown.timeLeft <= 30 && "animate-pulse"
            )}
          >
            Offer expires in {countdown.formatted}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-4">
        <button
          onClick={onClaimOffer}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(135deg, #EF5A6F 0%, #E8505B 50%, #DC2626 100%)",
            boxShadow:
              "0 4px 14px rgba(239, 90, 111, 0.4), 0 2px 6px rgba(239, 90, 111, 0.2)",
          }}
        >
          Claim ₹{discountedPrice} Offer Now
          <ArrowRightIcon />
        </button>

        <button
          onClick={onDecline}
          className="w-full text-center text-sm text-text-muted hover:text-text-medium hover:underline"
        >
          No thanks, I&apos;ll close
        </button>
      </div>
    </div>
  );
}

/* =============================================================================
 * CONSULTATION OFFER VIEW COMPONENT
 * ============================================================================= */

interface ConsultationOfferViewProps {
  consultationPrice: number;
  regularPrice: number;
  onBookConsultation: () => void;
  onSkipToFullService: () => void;
}

function ConsultationOfferView({
  consultationPrice,
  regularPrice,
  onBookConsultation,
  onSkipToFullService,
}: ConsultationOfferViewProps) {
  const savings = 299 - consultationPrice;
  const countdown = useCountdown(360); // 6 minutes

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div
        className="shrink-0 rounded-t-3xl px-6 py-4 text-center md:rounded-t-lg"
        style={{
          background: "linear-gradient(90deg, #FEF3C7 0%, #FDE68A 50%, #FCD34D 100%)",
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-bold text-warning-brown">
            💡 Smart! Let&apos;s Talk First
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-4 min-h-0">
        <p className="mb-4 text-center text-sm font-semibold text-text-heading">
          Get clarity before you commit for a notice
        </p>

        {/* Limited Time Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <BoltIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              LIMITED TIME • EXPIRES IN {Math.ceil(countdown.timeLeft / 60)} MIN
            </span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-bold text-text-heading">What you get:</h4>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <span className="text-sm text-text-medium">Detailed call with expert lawyer</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">💪</span>
              <span className="text-sm text-text-medium">Understand your case strength</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">✅</span>
              <span className="text-sm text-text-medium">Know if legal notice will help</span>
            </div>
          </div>
        </div>

        {/* Price Card */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50/50 p-5">
          <div className="mb-3 text-center">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">
              CONSULTATION PRICE
            </p>
            <p className="text-4xl font-bold text-primary">₹{consultationPrice}</p>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg bg-green-50 px-3 py-2">
            <span className="text-base">🎁</span>
            <span className="text-xs font-bold text-green-700">
              Save ₹{savings} (Regular: ₹299)
            </span>
          </div>
        </div>

        {/* Trust Message */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
          <p className="text-xs text-text-medium">
            <span className="font-bold text-primary">Honesty Promise:</span> If notice won&apos;t
            work, we&apos;ll tell you upfront. Full refund guaranteed.
          </p>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-2 rounded-xl bg-background-pink-light/50 px-4 py-3">
          <ClockIcon className="h-5 w-5 text-primary" />
          <span
            className={cn(
              "text-base font-semibold text-primary",
              countdown.timeLeft <= 30 && "animate-pulse"
            )}
          >
            Offer expires in {countdown.formatted}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-4">
        <button
          onClick={onBookConsultation}
          className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 active:scale-[0.98]"
          style={{
            background:
              "linear-gradient(135deg, #EF5A6F 0%, #E8505B 50%, #DC2626 100%)",
            boxShadow:
              "0 4px 14px rgba(239, 90, 111, 0.4), 0 2px 6px rgba(239, 90, 111, 0.2)",
          }}
        >
          Book Consultation - ₹{consultationPrice}
          <ArrowRightIcon />
        </button>

        <button
          onClick={onSkipToFullService}
          className="w-full text-center text-sm text-text-muted hover:text-text-medium hover:underline"
        >
          Skip to full service - ₹{regularPrice}
        </button>
      </div>
    </div>
  );
}

export default ExitIntentModal;

