export const GA_MEASUREMENT_ID = "G-6C54V6LV90";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      targetIdOrAction: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | "whatsapp_click"
  | "email_click"
  | "contact_cta_click"
  | "generate_lead";

export interface AnalyticsEventParams {
  button_location?: string;
  page_location?: string;
  service_category?: string;
  lead_type?: string;
  [key: string]: unknown;
}

/**
 * Dispatches a Google Analytics 4 event safely from the browser.
 * Ensures PII is never transmitted and includes page location by default.
 */
export function trackEvent(event: AnalyticsEvent, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") return;

  const eventParams: Record<string, unknown> = {
    page_location: window.location.pathname,
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", event, eventParams);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(["event", event, eventParams]);
  }
}
