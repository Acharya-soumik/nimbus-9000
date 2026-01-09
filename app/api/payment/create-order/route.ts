import { NextRequest, NextResponse } from "next/server";
import { PaymentService } from "@/services/payment-service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, customerName, customerPhone, customerId, notes } = body;

    if (!amount || !customerName || !customerPhone || !customerId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { paymentSessionId, orderId, environment } = await PaymentService.createOrder({
      amount,
      currency: "INR",
      customerName,
      customerPhone,
      customerId,
      notes,
    });

    return NextResponse.json({ paymentSessionId, orderId, environment });
  } catch (error: any) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}
