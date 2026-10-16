import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service — TEKMAAN",
  description: "Terms of service and engagement standards for TEKMAAN Studio.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white min-h-screen">
      <section className="pt-36 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#858585] hover:text-white transition-colors mb-8 group font-editorial-sans"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO HOME</span>
          </Link>

          <h1 className="font-editorial-serif text-4xl sm:text-5xl text-white mb-4">
            Terms of Service.
          </h1>

          <p className="text-xs uppercase tracking-[0.2em] text-[#858585] mb-12 font-mono">
            LAST REVISED: OCTOBER 2026 // TEKMAAN STUDIO
          </p>

          <div className="space-y-10 text-sm sm:text-base text-[#858585] font-editorial-sans leading-relaxed border-t border-white/10 pt-10">
            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                01. Engagement Framework
              </h2>
              <p>
                All client projects with TEKMAAN are conducted under explicit, written Statements of Work (SOW) defining milestones, deliverables, payment terms, and technical specifications.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                02. 100% Intellectual Property Transfer
              </h2>
              <p>
                Upon receipt of final milestone payment, full intellectual property, source code, repositories, and custom design assets are transferred cleanly to the client organization without licensing encumbrances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                03. Post-Launch Warranty
              </h2>
              <p>
                Every bespoke deployment includes a 30-day post-launch warranty covering bug remediation and edge case tuning at zero additional charge.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
