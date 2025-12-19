"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Award,
  CreditCard,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface TrustBadge {
  icon: string;
  text: string;
  subtext?: string;
}

export interface TrustBadgesBarProps {
  badges?: TrustBadge[];
  variant?: "horizontal" | "floating";
  className?: string;
}

// =============================================================================
// ICON MAP
// =============================================================================

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Award,
  CreditCard,
  Lock,
};

// =============================================================================
// DEFAULT BADGES
// =============================================================================

const defaultBadges: TrustBadge[] = [
  {
    icon: "ShieldCheck",
    text: "100% Secure",
    subtext: "256-bit encryption",
  },
  {
    icon: "Award",
    text: "Bar Council Verified",
    subtext: "All advocates registered",
  },
  {
    icon: "CreditCard",
    text: "Money-Back Guarantee",
    subtext: "No questions asked",
  },
  {
    icon: "Lock",
    text: "Confidential",
    subtext: "Your data never shared",
  },
];

// =============================================================================
// BADGE ITEM COMPONENT
// =============================================================================

interface BadgeItemProps {
  badge: TrustBadge;
}

function BadgeItem({ badge }: BadgeItemProps) {
  const IconComponent = iconMap[badge.icon] || ShieldCheck;

  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap px-6">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <IconComponent className="h-4 w-4 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-text-heading">
          {badge.text}
        </span>
        {badge.subtext && (
          <span className="text-xs text-text-muted">{badge.subtext}</span>
        )}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function TrustBadgesBar({
  badges = defaultBadges,
  variant = "horizontal",
  className,
}: TrustBadgesBarProps) {
  if (variant === "floating") {
    return (
      <div
        className={cn(
          "fixed bottom-20 left-4 z-40 hidden lg:block",
          "rounded-xl bg-white/90 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50",
          className
        )}
      >
        <div className="flex flex-col gap-1 p-2">
          {badges.map((badge, index) => (
            <BadgeItem key={index} badge={badge} />
          ))}
        </div>
      </div>
    );
  }

  // Horizontal variant with infinite marquee scroll
  return (
    <div
      className={cn(
        "w-full border-y border-gray-100 py-3 bg-white mb-2",
        className
      )}
    >
      <Marquee pauseOnHover speed={25}>
        {badges.map((badge, index) => (
          <BadgeItem key={index} badge={badge} />
        ))}
      </Marquee>
    </div>
  );
}

export default TrustBadgesBar;
