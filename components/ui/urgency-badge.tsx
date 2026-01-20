import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, CheckCircle2 } from 'lucide-react';

interface UrgencyBadgeProps {
  text?: string;
  type?: 'time' | 'trust' | 'live';
  className?: string;
}

/**
 * UrgencyBadge component to display trust signals and time-sensitivity
 * used for conversion optimization
 */
export const UrgencyBadge = ({ 
  text = "Drafted within 24 hours", 
  type = 'time',
  className 
}: UrgencyBadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border animate-in fade-in zoom-in duration-300",
      type === 'time' && "bg-amber-50 text-amber-700 border-amber-200",
      type === 'trust' && "bg-blue-50 text-blue-700 border-blue-200",
      type === 'live' && "bg-green-50 text-green-700 border-green-200",
      className
    )}>
      {type === 'time' && <Clock className="w-3.5 h-3.5" />}
      {type === 'trust' && <CheckCircle2 className="w-3.5 h-3.5" />}
      {type === 'live' && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
      )}
      {text}
    </div>
  );
};
