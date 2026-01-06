"use client";

import { useEffect, useRef } from "react";
import { trackEvent, identifyUser } from "@/lib/mixpanel";

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

    // Track Payment Success
    trackEvent("Payment Success", {
      payment_id: paymentId,
      amount: amount,
      service_type: serviceType,
      plan_id: planId,
      currency: "INR"
    });

    // If we have contact info, we can identify or set people properties
    if (email || phone) {
        // We typically identify on login. Here we might just set properties associated with the current session/user
        // If we want to treat this as a "Signup", we could identify here.
        // For safely, let's just track the event. 
        // If we really want to identify:
        // identifyUser(email || phone || paymentId); 
    }

  }, [paymentId, amount, serviceType, planId, email, phone]);

  return null;
}
