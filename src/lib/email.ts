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
  messageId?: string;
  response?: string;
  error?: string;
  missingVariables?: string[];
}

/**
 * Validates and retrieves required SMTP configuration from process.env
 */
export function getSmtpConfig() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
  const user = process.env.SMTP_USER || "syedamaan70627@gmail.com";
  const pass =
    process.env.SMTP_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.GMAIL_APP_PASSWORD ||
    "";
  const to =
    process.env.SMTP_TO ||
    process.env.STUDIO_INBOX_EMAIL ||
    "tekmaan.connect@gmail.com";

  const missing: string[] = [];
  if (!process.env.SMTP_APP_PASSWORD && !process.env.SMTP_PASS && !process.env.GMAIL_APP_PASSWORD) {
    missing.push("SMTP_APP_PASSWORD");
  }
  if (!process.env.SMTP_USER && !user) {
    missing.push("SMTP_USER");
  }

  return {
    host,
    port,
    secure: port === 465,
    user,
    pass,
    to,
    missing,
    isConfigured: missing.length === 0 && pass.trim().length > 0,
  };
}

/**
 * Generates clean plain text email representation
 */
function generatePlainText(data: EnquiryPayload, targetEmail: string, timestamp: string): string {
  return `
=============================================================
TEKMAAN STUDIO — NEW CLIENT PROJECT ENQUIRY
=============================================================

Visitor Information:
- Full Name: ${data.fullName}
- Email: ${data.email}
- Company / Organization: ${data.company || "Not provided"}

Engagement Specifications:
- Project Type / Service: ${data.service}
- Estimated Budget: ${data.budget || "Not specified / Flexible"}

Project Description:
-------------------------------------------------------------
${data.message}
-------------------------------------------------------------

Metadata:
- Delivered To: ${targetEmail}
- Reply-To: ${data.email}
- Timestamp: ${timestamp}
=============================================================
`.trim();
}

/**
 * Generates editorial luxury HTML email matching TEKMAAN branding
 */
function generateHtmlContent(data: EnquiryPayload, targetEmail: string, timestamp: string): string {
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
<body style="margin: 0; padding: 0; background-color: #090909; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #090909; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #111827; border: 1px solid #27272a; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
          
          <!-- Brand Header -->
          <tr>
            <td style="padding: 32px 32px 24px; background: linear-gradient(135deg, #111827 0%, #1e1b4b 100%); border-bottom: 1px solid #27272a;">
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
                    <span style="display: inline-block; padding: 4px 12px; background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 999px; font-size: 11px; color: #c7d2fe; font-weight: 700; letter-spacing: 0.05em;">
                      NEW LEAD
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
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Client Name</td>
                  <td style="padding: 8px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Client Email</td>
                  <td style="padding: 8px 0; font-size: 15px; font-weight: 600;">
                    <a href="mailto:${data.email}" style="color: #818cf8; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Company</td>
                  <td style="padding: 8px 0; color: #d4d4d8; font-size: 15px;">${data.company || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Project Type</td>
                  <td style="padding: 8px 0; color: #f4f4f5; font-size: 15px; font-weight: 600;">${data.service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #a1a1aa; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Budget Range</td>
                  <td style="padding: 8px 0; color: #34d399; font-size: 15px; font-weight: 700;">${data.budget || "Not specified / Flexible"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding: 8px 32px 28px;">
              <div style="background-color: #090909; border: 1px solid #27272a; border-radius: 12px; padding: 20px;">
                <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #a1a1aa; font-weight: 700; margin-bottom: 12px;">
                  Project Description
                </span>
                <p style="margin: 0; color: #e4e4e7; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>

          <!-- Direct Reply Action -->
          <tr>
            <td style="padding: 0 32px 32px;" align="center">
              <a href="${replyMailto}" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 999px; font-size: 13px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; box-shadow: 0 8px 20px rgba(79, 70, 229, 0.4);">
                Reply Directly to ${data.fullName}
              </a>
              <p style="margin: 12px 0 0; font-size: 12px; color: #71717a;">
                Reply-To is configured to <strong>${data.email}</strong>. Clicking Reply in Gmail responds directly to the client.
              </p>
            </td>
          </tr>

          <!-- Footer Metadata -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0a0a0a; border-top: 1px solid #27272a; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #71717a; letter-spacing: 0.05em;">
                TEKMAAN Studio &bull; Delivered to ${targetEmail} &bull; ${timestamp}
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
 * Dispatches the enquiry using Nodemailer with Gmail SMTP
 */
export async function sendEnquiryEmail(data: EnquiryPayload): Promise<EmailSendResult> {
  const config = getSmtpConfig();

  if (!config.isConfigured) {
    return {
      success: false,
      error: "SMTP_NOT_CONFIGURED",
      missingVariables: config.missing,
    };
  }

  const timestamp = new Date().toISOString();
  const subject = `New Project Enquiry: ${data.fullName} [${data.service}]`;
  const plainText = generatePlainText(data, config.to, timestamp);
  const htmlContent = generateHtmlContent(data, config.to, timestamp);

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
    });

    const info = await transporter.sendMail({
      from: `"TEKMAAN Studio" <${config.user}>`,
      to: config.to,
      replyTo: data.email,
      subject: subject,
      text: plainText,
      html: htmlContent,
    });

    return {
      success: true,
      messageId: info.messageId,
      response: info.response,
    };
  } catch (err: any) {
    console.error("[TEKMAAN Nodemailer Error]:", err);
    return {
      success: false,
      error: err.message || "Failed to dispatch email via SMTP.",
    };
  }
}
