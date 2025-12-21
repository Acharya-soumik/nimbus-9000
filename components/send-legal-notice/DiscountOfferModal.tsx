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

export interface TrustBadge {
  icon: React.ReactNode;
  text: string;
}

export interface Benefit {
  icon: React.ReactNode;
  text: string;
}

export interface DiscountOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer?: {
    headline?: string;
    subheadline?: string;
    originalPrice?: number;
    discountedPrice?: number;
    savings?: number;
    currency?: string;
    expiresInSeconds?: number;
  };
  trustBadges?: TrustBadge[];
  benefits?: Benefit[];
  onClaimOffer: () => void;
  onDismiss?: () => void;
  dismissText?: string;
  className?: string;
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

/* =============================================================================
 * DEFAULT VALUES
 * ============================================================================= */

const defaultTrustBadges: TrustBadge[] = [
  { icon: <StarIcon className="h-4 w-4 text-warning-gold" />, text: "500+ notices" },
  { icon: <CurrencyIcon className="h-4 w-4 text-success" />, text: "15,000+ customers" },
  { icon: <BoltIcon className="h-4 w-4 text-warning-bright" />, text: "24hr service" },
];

const defaultBenefits: Benefit[] = [
  { icon: <BoltIcon className="h-4 w-4 text-warning-gold" />, text: "Lawyer assigned in 30 mins" },
  { icon: <DocumentIcon className="h-4 w-4 text-info" />, text: "Notice ready in 24 hrs" },
];

/* =============================================================================
 * MAIN COMPONENT
 * ============================================================================= */

export function DiscountOfferModal({
  isOpen,
  onClose,
  offer = {},
  trustBadges = defaultTrustBadges,
  benefits = defaultBenefits,
  onClaimOffer,
  onDismiss,
  dismissText = "No thanks, I'll close",
  className,
}: DiscountOfferModalProps) {
  const {
    headline = "Trust Our Process",
    originalPrice = 499,
    discountedPrice = 299,
    savings = 200,
    currency = "₹",
    expiresInSeconds = 360,
  } = offer;

  const countdown = useCountdown(expiresInSeconds);

  const handleDismiss = () => {
    onDismiss?.();
    onClose();
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent
        className={cn(
          "flex h-full max-h-dvh flex-col border-0 p-0 sm:h-auto sm:max-h-[90vh] sm:max-w-md",
          className
        )}
        showCloseButton={false}
        drawerProps={{
          className: cn(
            "!max-h-dvh !h-dvh !mt-0 !rounded-t-3xl flex flex-col",
            className
          ),
        }}
      >
        <ModalHeader className="sr-only">
          <ModalTitle>Special Offer</ModalTitle>
        </ModalHeader>

        {/* Orange Gradient Header Banner - Fixed */}
        <div
          className="relative shrink-0 rounded-t-3xl px-6 py-4 text-center md:rounded-t-lg"
          style={{
            background:
              "linear-gradient(90deg, #FB923C 0%, #F97316 50%, #EA580C 100%)",
          }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              SPECIAL ONE-TIME OFFER
            </span>
            <SparklesIcon className="h-5 w-5 text-warning-yellow-bright" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 pb-4 min-h-0">
          {/* Headline */}
          <h2 className="mb-4 text-center text-2xl font-bold text-text-heading">
            {headline}
          </h2>

          {/* Limited Time Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-warning-yellow/20 px-4 py-2">
              <BoltIcon className="h-4 w-4 text-warning-gold-dark" />
              <span className="text-sm font-semibold text-warning-gold-dark">
                LIMITED TIME • EXPIRES IN {Math.ceil(countdown.timeLeft / 60)}{" "}
                MIN
              </span>
            </div>
          </div>

          {/* Price Card */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-gray-50/50 p-5">
            {/* Regular Price */}
            <div className="mb-2 flex items-center justify-between text-sm text-text-muted">
              <span>Regular Price:</span>
              <span className="line-through">
                {currency}
                {originalPrice}
              </span>
            </div>

            {/* Your Price */}
            <div className="mb-3">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">
                YOUR PRICE TODAY
              </p>
              <p className="text-4xl font-bold text-success">
                {currency}
                {discountedPrice}
              </p>
            </div>

            {/* Savings Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-success-light px-3 py-1.5">
              <span className="text-sm font-bold text-success-darker">
                YOU SAVE {currency}
                {savings} INSTANTLY
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5"
              >
                {badge.icon}
                <span className="text-xs font-medium text-text-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Why Act Now Section */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-bold text-text-heading">
              Why act now:
            </h3>
            <div className="space-y-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  {benefit.icon}
                  <span className="text-sm text-text-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Countdown Timer */}
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

        {/* Sticky Footer with CTA */}
        <div className="shrink-0 border-t border-gray-100 bg-white px-6 py-4">
          {/* CTA Button */}
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
            Claim {currency}
            {discountedPrice} Offer Now
            <ArrowRightIcon />
          </button>

          {/* Dismiss Link */}
          <button
            onClick={handleDismiss}
            className="w-full text-center text-sm text-text-muted hover:text-text-medium hover:underline"
          >
            {dismissText}
          </button>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default DiscountOfferModal;

