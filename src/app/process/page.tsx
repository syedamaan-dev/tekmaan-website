import React from "react";
import type { Metadata } from "next";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";


export const metadata: Metadata = {
  title: "Our Development Process | TEKMAAN",
  description:
    "Explore TEKMAAN's disciplined 4-stage delivery process from initial discovery and visual architecture to full-stack engineering and production launch.",
  alternates: {
    canonical: "https://www.tekmaan.in/process",
  },
};

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
              EXECUTION BLUEPRINT
            </span>
          </div>

          <h1 className="font-editorial-serif text-hero-giant text-white max-w-5xl">
            Disciplined. Swift.
            <br />
            <span className="gradient-accent">Accountable.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#858585] max-w-2xl font-editorial-sans leading-relaxed">
            We operate with zero fluff. Every engagement is mapped to explicit milestones,
            continuous staging demonstrations, and direct technical review.
          </p>
        </div>
      </section>

      {/* Main Interactive Process Timeline */}
      <ProcessSection />

      {/* Studio Model Comparison Table */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909] border-t border-black/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold mb-3">
              COMPARATIVE ARCHITECTURE
            </span>
            <h2 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-[#090909]">
              Independent Studio vs. Traditional Agency
            </h2>
          </div>

          <div className="border border-black/10 bg-white overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-editorial-sans">
              <thead>
                <tr className="border-b border-black/10 bg-[#F8F8F6]">
                  <th className="p-5 font-bold uppercase tracking-wider text-[#858585]">Dimension</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-[#090909]">TEKMAAN Studio</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-[#858585]">Traditional Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 text-[#242424]">
                <tr>
                  <td className="p-5 font-semibold text-[#090909]">Communication Layer</td>
                  <td className="p-5 text-[#090909] font-medium">Direct with senior engineer &amp; designer</td>
                  <td className="p-5 text-[#858585]">Account managers &amp; middlemen</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#090909]">Code Quality</td>
                  <td className="p-5 text-[#090909] font-medium">Strict TypeScript, 95+ Core Web Vitals</td>
                  <td className="p-5 text-[#858585]">Often outsourced to junior contractors</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#090909]">Delivery Speed</td>
                  <td className="p-5 text-[#090909] font-medium">2–4 weeks average launch cadence</td>
                  <td className="p-5 text-[#858585]">3–6 months bloated committee review</td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-[#090909]">IP &amp; Code Ownership</td>
                  <td className="p-5 text-[#090909] font-medium">100% full code &amp; design transfer</td>
                  <td className="p-5 text-[#858585]">Locked into proprietary platforms / retainers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <GiantCtaSection />
    </div>
  );
}
