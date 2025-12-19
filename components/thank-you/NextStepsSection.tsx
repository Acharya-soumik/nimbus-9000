import * as React from 'react';
import { cn } from '@/lib/utils';

export interface NextStepsSectionProps {
  steps: string[];
  className?: string;
}

/**
 * Step number badge component
 */
function StepBadge({ number }: { number: number }) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
      {number}
    </div>
  );
}

/**
 * Clock icon for timeline visual
 */
function ClockIcon() {
  return (
    <svg
      className="h-6 w-6 text-primary"
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

/**
 * NextStepsSection Component
 *
 * Displays a timeline of what happens next after successful payment.
 * Shows service-specific steps in a professional, easy-to-read format.
 */
export function NextStepsSection({
  steps,
  className,
}: NextStepsSectionProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md',
        className
      )}
    >
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
        <div className="flex items-center gap-3">
          <ClockIcon />
          <h2 className="text-lg font-semibold text-text-heading">
            What Happens Next?
          </h2>
        </div>
      </div>

      {/* Steps List */}
      <div className="p-6">
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Step Number */}
              <StepBadge number={index + 1} />

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <p className="text-sm leading-relaxed text-text-body">
                  {step}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute ml-4 mt-10 h-4 w-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-6 rounded-xl bg-info-light p-4">
          <p className="text-sm text-text-medium">
            <span className="font-semibold text-text-heading">
              Need help?
            </span>{' '}
            Our support team is available 24/7 to assist you. Use the WhatsApp
            button below to reach out anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
