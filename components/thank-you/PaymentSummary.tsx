'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PaymentSummaryProps {
  paymentId: string;
  amount: number;
  date: string;
  service: string;
  className?: string;
}

/**
 * Icon components for payment summary
 */
function PaymentIcon() {
  return (
    <svg
      className="h-5 w-5 text-text-muted"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-5 w-5 text-text-muted"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg
      className="h-5 w-5 text-text-muted"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * PaymentSummary Component
 *
 * Displays payment details in a clean, professional card format.
 */
export function PaymentSummary({
  paymentId,
  amount,
  date,
  service,
  className,
}: PaymentSummaryProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyPaymentId = async () => {
    try {
      await navigator.clipboard.writeText(paymentId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy payment ID:', error);
    }
  };

  // Format amount with comma separators
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount); // Amount is already in rupees

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md',
        className
      )}
    >
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
        <h2 className="text-lg font-semibold text-text-heading">
          Payment Summary
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Payment ID */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <PaymentIcon />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-muted">Payment ID</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-mono text-sm text-text-body break-all">
                {paymentId}
              </p>
              <button
                onClick={handleCopyPaymentId}
                className="shrink-0 rounded-md p-1.5 text-primary hover:bg-primary/10 transition-colors"
                aria-label="Copy payment ID"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            {copied && (
              <p className="mt-1 text-xs text-success">Copied!</p>
            )}
          </div>
        </div>

        {/* Amount */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <svg
              className="h-5 w-5 text-text-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-muted">Amount Paid</p>
            <p className="mt-1 text-2xl font-bold text-success">
              {formattedAmount}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <CalendarIcon />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-muted">Payment Date</p>
            <p className="mt-1 text-sm text-text-body">{date}</p>
          </div>
        </div>

        {/* Service */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <ServiceIcon />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-muted">Service</p>
            <p className="mt-1 text-sm font-medium text-text-body capitalize">
              {service.replace(/-/g, ' ')}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 bg-success-light/30 px-6 py-3">
        <p className="text-xs text-success-darker flex items-center gap-1.5">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 12 15 16 10" />
          </svg>
          Payment verified and confirmed
        </p>
      </div>
    </div>
  );
}
