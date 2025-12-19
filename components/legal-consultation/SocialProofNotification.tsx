"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { X, User } from "lucide-react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface NotificationData {
  name: string;
  city: string;
  type: string;
  timeAgo: string;
}

export interface SocialProofNotificationProps {
  notifications?: NotificationData[];
  intervalMs?: number;
  displayDurationMs?: number;
  enabled?: boolean;
  className?: string;
}

// =============================================================================
// DEFAULT DATA
// =============================================================================

const defaultNotifications: NotificationData[] = [
  {
    name: "Rahul M.",
    city: "Mumbai",
    type: "Property Consultation",
    timeAgo: "2 min ago",
  },
  {
    name: "Priya S.",
    city: "Delhi",
    type: "Family Consultation",
    timeAgo: "5 min ago",
  },
  {
    name: "Amit K.",
    city: "Bangalore",
    type: "Business Consultation",
    timeAgo: "8 min ago",
  },
  {
    name: "Neha G.",
    city: "Pune",
    type: "Employment Consultation",
    timeAgo: "12 min ago",
  },
  {
    name: "Vikram R.",
    city: "Chennai",
    type: "Consumer Dispute",
    timeAgo: "15 min ago",
  },
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function SocialProofNotification({
  notifications = defaultNotifications,
  intervalMs, // Will be randomized between 30-60 seconds
  displayDurationMs = 5000,
  enabled = true,
  className,
}: SocialProofNotificationProps) {
  const [currentNotification, setCurrentNotification] =
    useState<NotificationData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  // Get random interval between 30-60 seconds
  const getRandomInterval = useCallback(() => {
    return intervalMs || Math.floor(Math.random() * 30000) + 30000;
  }, [intervalMs]);

  // Show notification
  const showNotification = useCallback(() => {
    if (!enabled || notifications.length === 0) return;

    const notification = notifications[notificationIndex % notifications.length];
    setCurrentNotification(notification);
    setIsVisible(true);

    // Hide after display duration
    setTimeout(() => {
      setIsVisible(false);
      setNotificationIndex((prev) => prev + 1);
    }, displayDurationMs);
  }, [enabled, notifications, notificationIndex, displayDurationMs]);

  // Schedule next notification
  useEffect(() => {
    if (!enabled) return;

    // Initial delay before first notification (5-10 seconds)
    const initialDelay = Math.floor(Math.random() * 5000) + 5000;

    const initialTimer = setTimeout(() => {
      showNotification();
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, [enabled, showNotification]);

  // Set up recurring notifications
  useEffect(() => {
    if (!enabled || notificationIndex === 0) return;

    const timer = setTimeout(() => {
      showNotification();
    }, getRandomInterval());

    return () => clearTimeout(timer);
  }, [enabled, notificationIndex, showNotification, getRandomInterval]);

  // Dismiss handler
  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!currentNotification) return null;

  return (
    <div
      className={cn(
        // Base styles
        "fixed bottom-24 left-4 z-40 max-w-xs",
        "rounded-xl bg-white shadow-lg ring-1 ring-gray-200/50",
        // Animation
        "transition-all duration-300 ease-out",
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0 pointer-events-none",
        // Hide on mobile (too intrusive)
        "hidden sm:block",
        className
      )}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Avatar */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
          <User className="h-5 w-5 text-primary" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-heading">
            {currentNotification.name} from {currentNotification.city}
          </p>
          <p className="text-xs text-text-muted mt-0.5">
            booked a {currentNotification.type}
          </p>
          <p className="text-xs text-primary font-medium mt-1">
            {currentNotification.timeAgo}
          </p>
        </div>

        {/* Dismiss button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default SocialProofNotification;
