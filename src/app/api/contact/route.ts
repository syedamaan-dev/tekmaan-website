import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { sendEnquiryEmail } from "@/lib/email";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate body against Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot spam mitigation
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Suspected spam bot filled hidden input
      return NextResponse.json(
        {
          success: true,
          message: "Your project inquiry has been received.",
        },
        { status: 200 }
      );
    }

    // 3. Dispatch real email via configured service (SMTP or Resend)
    const result = await sendEnquiryEmail({
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      message: data.message,
    });

    if (!result.success) {
      if (result.error?.startsWith("NO_CREDENTIALS")) {
        console.warn("[TEKMAAN CONTACT API] Missing email credentials:", result.error);
        return NextResponse.json(
          {
            error: "Service configuration pending",
            message:
              "Email service credentials are not yet configured in .env.local. Please email us directly at tekmaan.connect@gmail.com or WhatsApp +91 9063127547.",
            details: "Missing RESEND_API_KEY or SMTP credentials in .env.local",
          },
          { status: 503 }
        );
      }

      console.error(
        `[TEKMAAN CONTACT API] Email delivery failed via ${result.provider}:`,
        result.error
      );
      return NextResponse.json(
        {
          error: "Delivery failed",
          message:
            "We were unable to deliver your message through the automated gateway. Please reach out directly to tekmaan.connect@gmail.com or via WhatsApp at +91 9063127547.",
          details: result.error,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      provider: result.provider,
      messageId: result.messageId,
      message:
        "Your inquiry has been successfully transmitted directly to tekmaan.connect@gmail.com. We will respond within 24 hours.",
    });
  } catch (error: any) {
    console.error("[TEKMAAN Contact API Error]:", error);
    return NextResponse.json(
      {
        error: "Internal server error occurred.",
        message:
          "An unexpected error occurred while processing your inquiry. Please reach out directly to tekmaan.connect@gmail.com.",
      },
      { status: 500 }
    );
  }
}
