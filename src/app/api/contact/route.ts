import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { sendEnquiryEmail, getSmtpConfig } from "@/lib/email";

// Serverless-compatible sliding window rate limiter
interface RateLimitEntry {
  count: number;
  firstRequest: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Periodic cleanup if map grows
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now - value.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Serverless-compatible rate limit check
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "anonymous";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error: "Rate limit reached",
          message:
            "Too many requests received from this connection. Please wait a few moments or email us directly at tekmaan.connect@gmail.com.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & validate request body with Zod
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        {
          error: "Invalid payload",
          message: "Request body must be valid JSON.",
        },
        { status: 400 }
      );
    }

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          message: "Please complete all required fields correctly.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Honeypot anti-spam defense
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Spam bot filled hidden input; return simulated success without sending
      return NextResponse.json(
        {
          success: true,
          message: "Your project inquiry has been received.",
        },
        { status: 200 }
      );
    }

    // 4. Send enquiry via production SMTP
    const result = await sendEnquiryEmail({
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      service: data.service,
      budget: data.budget,
      message: data.message,
    });

    if (!result.success) {
      if (result.error === "SMTP_NOT_CONFIGURED") {
        console.error(
          "[TEKMAAN SMTP API] Missing production environment variables:",
          result.missingVariables
        );
        return NextResponse.json(
          {
            error: "Service configuration pending",
            message:
              "Unable to deliver your enquiry at this moment. Please reach out to us directly at tekmaan.connect@gmail.com or via WhatsApp at +91 9063127547.",
            missingVariables: result.missingVariables,
          },
          { status: 503 }
        );
      }

      console.error("[TEKMAAN SMTP API] Delivery error:", result.error);
      return NextResponse.json(
        {
          error: "Delivery failed",
          message:
            "We were unable to deliver your message at this time. Please contact us directly at tekmaan.connect@gmail.com or on WhatsApp at +91 9063127547.",
          details: result.error,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        smtpAccepted: true,
        messageId: result.messageId,
        message:
          "Your inquiry has been successfully transmitted directly to tekmaan.connect@gmail.com. We will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[TEKMAAN Contact API Unexpected Error]:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          "An unexpected error occurred. Please reach out directly to tekmaan.connect@gmail.com or via WhatsApp at +91 9063127547.",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to verify SMTP configuration availability (non-sensitive verification)
export async function GET() {
  const config = getSmtpConfig();
  return NextResponse.json({
    status: "ok",
    smtpConfigured: config.isConfigured,
    smtpHost: config.host,
    smtpPort: config.port,
    smtpUserConfigured: !!config.user,
    smtpPassConfigured: !!config.pass,
    smtpTo: config.to,
    missingVariables: config.missing,
  });
}
