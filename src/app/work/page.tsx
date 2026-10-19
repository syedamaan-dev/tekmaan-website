import React from "react";
import type { Metadata } from "next";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies — TEKMAAN",
  description:
    "Explore TEKMAAN's verified portfolio: SR University PRAGATHI Expo & Jury Portal, AEGIS-X AI reliability platform, and AEGIS-PRISM neural stress engine.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white">
      {/* Header */}
      <section className="relative pt-36 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
              STUDIO PORTFOLIO ARCHIVE
            </span>
          </div>

          <h1 className="font-editorial-serif text-hero-giant text-white max-w-4xl">
            Selected Works &amp;
            <br />
            <span className="gradient-accent">Case Studies.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#858585] max-w-2xl font-editorial-sans leading-relaxed">
            Every project presented here is built with architectural discipline. We clearly
            distinguish verified client engagements from independent platforms and technical research.
          </p>
        </div>
      </section>

      {/* Selected Work Grid (Reference 1 style) */}
      <SelectedWorkSection />

      {/* Bottom CTA */}
      <GiantCtaSection />
    </div>
  );
}
