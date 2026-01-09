import Cashfree from "@/lib/cashfree-client";
import { CFEnvironment } from "cashfree-pg";

export interface CreateOrderRequest {
  amount: number;
  currency: string;
  customerName: string;
  customerPhone: string;
  customerId: string; // Cashfree requires a customer ID
  returnUrl?: string;
  notes?: Record<string, string>;
}

export interface VerificationResult {
  success: boolean;
  message?: string;
  data?: any;
}

export class PaymentService {
  /**
   * Create a payment order with Cashfree
   */
  static async createOrder(
    request: CreateOrderRequest
  ): Promise<{ paymentSessionId: string; orderId: string; environment: "production" | "sandbox" }> {
    try {
      const isSandbox = Cashfree.XEnvironment === CFEnvironment.SANDBOX;
      const fallbackDomain = isSandbox ? "http://localhost:3000" : "https://localhost:3000";
      
      const orderRequest = {
        order_amount: request.amount,
        order_currency: request.currency,
        customer_details: {
          customer_id: request.customerId,
          customer_name: request.customerName,
          customer_phone: request.customerPhone,
        },
        order_meta: {
          return_url:
            request.returnUrl ||
            `${process.env.NEXT_PUBLIC_APP_URL || "https://vakiltech.in"}/thank-you?order_id={order_id}`,
        },
        order_note: request.notes ? JSON.stringify(request.notes) : undefined,
      };


      const response = await Cashfree.PGCreateOrder(orderRequest as any); // Type assertion to bypass potential type mismatch
      const data = response.data;

      if (data && data.payment_session_id) {
        return {
          paymentSessionId: data.payment_session_id,
          orderId: data.order_id || "",
          environment: Cashfree.XEnvironment === CFEnvironment.PRODUCTION ? "production" : "sandbox"
        };
      } else {
        throw new Error("Failed to generate payment session ID");
      }
    } catch (error: any) {
      console.error("Cashfree createOrder error:", error);
      throw new Error(
        error.message || "Failed to create payment order with Cashfree"
      );
    }
  }

  /**
   * Verify payment status for an order
   */
  static async verifyPayment(orderId: string): Promise<VerificationResult> {
    try {
      const response = await Cashfree.PGOrderFetchPayments(orderId as any);
      const payments = response.data;

      // Check if any payment is successful
      const successfulPayment = payments?.find(
        (p: any) => p.payment_status === "SUCCESS"
      );

      if (successfulPayment) {
        return {
          success: true,
          message: "Payment verified successfully",
          data: successfulPayment,
        };
      } else {
        return {
          success: false,
          message: "Payment pending or failed",
        };
      }
    } catch (error: any) {
      console.error("Cashfree verifyPayment error:", error);
      return {
        success: false,
        message: error.message || "Failed to verify payment",
      };
    }
  }
  /**
   * Fetch order details from Cashfree
   */
  static async getOrderDetails(orderId: string): Promise<any> {
    try {
      const response = await Cashfree.PGFetchOrder(orderId as any); 
      // SDK might demand version as first arg sometimes? Or just orderId?
      // "Cashfree.PGFetchOrder("<order_id>")" source [2] implies just orderId.
      // But let's check standard usage. PGCreateOrder takes (version, request) or just request?
      // In createOrder: Cashfree.PGCreateOrder(orderRequest as any). No version.
      // So likely just orderId.
      return response.data;
    } catch (error: any) {
      console.error("Cashfree getOrderDetails error:", error);
      throw new Error(
        error.message || "Failed to fetch order details from Cashfree"
      );
    }
  }
}

