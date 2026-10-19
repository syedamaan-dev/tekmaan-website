import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — TEKMAAN",
  description: "Privacy policy and client data handling commitments for TEKMAAN Studio.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-[#000000] text-[#eaeaea] min-h-screen">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9ca3af] hover:text-[#ff6a00] transition-colors mb-8 group font-mono"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <h1 className="font-syne text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy.
          </h1>

          <p className="text-xs uppercase tracking-[0.2em] text-[#ff6a00] mb-12 font-mono">
            Last Revised: 2026 // TEKMAAN Studio
          </p>

          <div className="space-y-10 text-sm sm:text-base text-[#9ca3af] leading-relaxed border-t border-[#1c1f26] pt-10">
            <section className="space-y-3">
              <h2 className="font-syne text-xl font-bold text-white">
                01. Information Collection
              </h2>
              <p>
                We only collect necessary project details, contact email, and operational context submitted voluntarily via our contact form or direct communication channels. We never sell, rent, or monetize your contact information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-syne text-xl font-bold text-white">
                02. Data Security &amp; Confidentiality
              </h2>
              <p>
                All communications, architectural discussions, and proprietary code repositories shared with TEKMAAN are held in strict commercial confidence under standard non-disclosure terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-syne text-xl font-bold text-white">
                03. Contact Regarding Privacy
              </h2>
              <p>
                For questions regarding data privacy or record deletion, contact us directly at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#ff6a00] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
