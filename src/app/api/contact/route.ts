import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate body against Zod schema
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

    // Honeypot spam mitigation
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Suspected spam bot filled hidden input
      return NextResponse.json(
        { error: "Spam detection triggered." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    // When RESEND_API_KEY is supplied, execute real delivery
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const fromEmail = process.env.RESEND_FROM_EMAIL || "TEKMAAN Inquiries <onboarding@resend.dev>";
        const targetEmail = process.env.STUDIO_INBOX_EMAIL || process.env.NEXT_PUBLIC_STUDIO_EMAIL || "contact@tekmaan.com";

        const { data: resendData, error: resendError } = await resend.emails.send({
          from: fromEmail,
          to: [targetEmail],
          replyTo: data.email,
          subject: `New Client Inquiry: ${data.fullName} [${data.service}]`,
          text: `
TEKMAAN Studio — New Client Enquiry
-----------------------------------
Name: ${data.fullName}
Email: ${data.email}
Company: ${data.company || "Not provided"}
Service Required: ${data.service}
Budget Range: ${data.budget || "Not specified"}

Project Details:
${data.message}
-----------------------------------
Timestamp: ${new Date().toISOString()}
          `,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
              <h2 style="color: #0b1020; margin-top: 0;">TEKMAAN Studio — New Client Enquiry</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Name:</td><td style="padding: 8px 0; font-weight: 600; color: #0b1020;">${data.fullName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0; color: #5266f5;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Company:</td><td style="padding: 8px 0; color: #0b1020;">${data.company || "Not provided"}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Service:</td><td style="padding: 8px 0; font-weight: 600; color: #0b1020;">${data.service}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;">Budget Range:</td><td style="padding: 8px 0; color: #0b1020;">${data.budget || "Not specified"}</td></tr>
              </table>
              <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; font-weight: 600; color: #0b1020; margin-bottom: 8px;">Project Details:</p>
                <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
              </div>
            </div>
          `,
        });

        if (resendError) {
          console.error("[TEKMAAN Resend Error]:", resendError);
          return NextResponse.json(
            {
              error: "Delivery failed",
              message: "We encountered an error transmitting your message through our email gateway. Please contact us directly at " + (process.env.NEXT_PUBLIC_STUDIO_EMAIL || "contact@tekmaan.com"),
              details: resendError.message,
            },
            { status: 502 }
          );
        }

        return NextResponse.json({
          success: true,
          mode: "resend_delivered",
          message: "Your inquiry has been transmitted directly to our senior engineering team. We will respond within 24 hours.",
        });
      } catch (err: any) {
        console.error("[TEKMAAN Email Gateway Exception]:", err);
        return NextResponse.json(
          {
            error: "Email delivery failure",
            message: "Failed to dispatch email. Please reach out directly to " + (process.env.NEXT_PUBLIC_STUDIO_EMAIL || "contact@tekmaan.com"),
          },
          { status: 500 }
        );
      }
    }

    // Fallback when RESEND_API_KEY is not yet configured in environment
    console.log(
      "[TEKMAAN CONTACT API] New Inquiry Recorded (Dev/Unconfigured Resend Mode):",
      {
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        service: data.service,
        budget: data.budget,
        messageLength: data.message.length,
        receivedAt: new Date().toISOString(),
      }
    );

    return NextResponse.json({
      success: true,
      mode: "dev_logged",
      message:
        "Thank you! Your project inquiry has been securely received by our studio system. (Note: RESEND_API_KEY environment variable is optional to route directly to an email inbox).",
    });
  } catch (error: any) {
    console.error("[TEKMAAN Contact API Error]:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
