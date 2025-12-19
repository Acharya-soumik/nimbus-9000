import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SuccessHeroProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * Success icon with checkmark
 */
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-16 w-16', className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 12 15 16 10" strokeWidth="2.5" />
    </svg>
  );
}

/**
 * SuccessHero Component
 *
 * Displays a professional success message with a checkmark icon
 * and service-specific title and description.
 */
export function SuccessHero({
  title,
  description,
  className,
}: SuccessHeroProps) {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-gradient-to-b from-success-light/30 to-white py-12',
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-success-light p-4">
            <CheckCircleIcon className="text-success" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-3 text-3xl font-bold text-text-heading sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-base text-text-medium sm:text-lg">
          {description}
        </p>

        {/* Decorative element */}
        <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-success to-success-dark" />
      </div>
    </section>
  );
}
