import { Resend } from "resend";
import nodemailer from "nodemailer";

export interface EnquiryPayload {
  fullName: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface EmailSendResult {
  success: boolean;
  provider: "resend" | "smtp";
  messageId?: string;
  error?: string;
}

/**
 * Generates plain-text fallback content
 */
function generatePlainText(data: EnquiryPayload, targetEmail: string): string {
  return `
=============================================================
TEKMAAN STUDIO — NEW CLIENT PROJECT ENQUIRY
=============================================================

Client Details:
- Name: ${data.fullName}
- Email: ${data.email}
- Company: ${data.company || "Not provided"}

Engagement Specifications:
- Selected Service: ${data.service}
- Budget Range: ${data.budget || "Not specified / Flexible"}

Project Description:
-------------------------------------------------------------
${data.message}
-------------------------------------------------------------

Metadata:
- Destination Inbox: ${targetEmail}
- Reply-To Configured: ${data.email} (Hit 'Reply' directly to respond)
- Received At: ${new Date().toUTCString()}
=============================================================
`.trim();
}

/**
 * Generates modern, high-contrast, responsive HTML email
 */
function generateHtmlContent(data: EnquiryPayload, targetEmail: string): string {
  const replyMailto = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(
    `Re: TEKMAAN Inquiry — ${data.service}`
  )}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TEKMAAN Studio Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #111827; border: 1px solid #1f2937; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px; background: linear-gradient(135deg, #111827 0%, #1e1b4b 100%); border-bottom: 1px solid #1f2937;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #a5b4fc; font-weight: 700; margin-bottom: 8px;">
                      DIRECT CLIENT ENQUIRY
                    </span>
                    <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                      TEKMAAN <span style="color: #818cf8;">STUDIO</span>
                    </h1>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; padding: 4px 10px; background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 999px; font-size: 11px; color: #c7d2fe; font-weight: 600;">
                      PRIORITY
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Summary Fields -->
          <tr>
            <td style="padding: 28px 32px 16px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Client Name</td>
                  <td style="padding: 8px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Client Email</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">
                    <a href="mailto:${data.email}" style="color: #818cf8; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
                  <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px;">${data.company || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td>
                  <td style="padding: 8px 0; color: #f1f5f9; font-size: 15px; font-weight: 600;">${data.service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Budget Range</td>
                  <td style="padding: 8px 0; color: #34d399; font-size: 15px; font-weight: 700;">${data.budget || "Not specified / Flexible"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 8px 32px 28px;">
              <div style="background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 20px;">
                <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #94a3b8; font-weight: 700; margin-bottom: 12px;">
                  Project Description
                </span>
                <p style="margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Action -->
          <tr>
            <td style="padding: 0 32px 32px;" align="center">
              <a href="${replyMailto}" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 999px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);">
                Reply Directly to ${data.fullName}
              </a>
              <p style="margin: 12px 0 0; font-size: 12px; color: #64748b;">
                Hitting 'Reply' in your email client will also directly address <strong>${data.email}</strong>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0d121f; border-top: 1px solid #1f2937; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #64748b; letter-spacing: 0.05em;">
                TEKMAAN Studio &bull; Sent to ${targetEmail} &bull; ${new Date().toUTCString()}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

/**
 * Sends enquiry email via SMTP (Nodemailer) or Resend depending on available environment configuration.
 */
export async function sendEnquiryEmail(data: EnquiryPayload): Promise<EmailSendResult> {
  const targetEmail =
    process.env.STUDIO_INBOX_EMAIL ||
    process.env.NEXT_PUBLIC_STUDIO_EMAIL ||
    "tekmaan.connect@gmail.com";

  const subject = `New Project Enquiry: ${data.fullName} [${data.service}]`;
  const plainText = generatePlainText(data, targetEmail);
  const htmlContent = generateHtmlContent(data, targetEmail);

  // Check 1: SMTP Configuration (e.g. Gmail SMTP or custom host)
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const smtpSecure = process.env.SMTP_SECURE === "false" ? false : smtpPort === 465;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"TEKMAAN Studio" <${smtpUser}>`,
        to: targetEmail,
        replyTo: data.email,
        subject: subject,
        text: plainText,
        html: htmlContent,
      });

      return {
        success: true,
        provider: "smtp",
        messageId: info.messageId,
      };
    } catch (err: any) {
      console.error("[TEKMAAN SMTP Delivery Error]:", err);
      // If Resend is also configured, let it fall through to Resend; otherwise return error
      if (!process.env.RESEND_API_KEY) {
        return {
          success: false,
          provider: "smtp",
          error: err.message || "Failed to dispatch email via SMTP server.",
        };
      }
    }
  }

  // Check 2: Resend API Configuration
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey && resendApiKey.trim() !== "") {
    try {
      const resend = new Resend(resendApiKey);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "TEKMAAN Inquiries <onboarding@resend.dev>";

      const resendResult = await resend.emails.send({
        from: fromEmail,
        to: [targetEmail],
        replyTo: data.email,
        subject: subject,
        text: plainText,
        html: htmlContent,
      });

      if (resendResult.error) {
        console.error("[TEKMAAN Resend Error]:", resendResult.error);
        return {
          success: false,
          provider: "resend",
          error: resendResult.error.message,
        };
      }

      return {
        success: true,
        provider: "resend",
        messageId: resendResult.data?.id,
      };
    } catch (err: any) {
      console.error("[TEKMAAN Resend Exception]:", err);
      return {
        success: false,
        provider: "resend",
        error: err.message || "Failed to dispatch email via Resend gateway.",
      };
    }
  }

  // Neither transport configured
  return {
    success: false,
    provider: "smtp",
    error:
      "NO_CREDENTIALS: Email service credentials are not configured in environment variables. Please provide RESEND_API_KEY or SMTP credentials in .env.local to enable live delivery.",
  };
}
