"use client";

import { useEffect, useRef } from "react";
import { trackEvent, identifyUser, trackPaymentCompleted } from "@/lib/mixpanel";

interface PaymentSuccessTrackerProps {
  paymentId: string;
  amount: number;
  serviceType: string;
  planId?: string;
  email?: string;
  phone?: string;
}

export function PaymentSuccessTracker({
  paymentId,
  amount,
  serviceType,
  planId,
  email,
  phone
}: PaymentSuccessTrackerProps) {
  const trackedRef = useRef(false);

  useEffect(() => {
    if (trackedRef.current) return;
    trackedRef.current = true;

    // Track Payment Success using new helper
    trackPaymentCompleted({
      amount: amount,
      currency: "INR",
      product: serviceType,
      payment_method: "online", // Default fallback
      payment_id: paymentId,
      plan_id: planId
    });

  }, [paymentId, amount, serviceType, planId, email, phone]);

  return null;
}
