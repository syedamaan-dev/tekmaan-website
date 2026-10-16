import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries — TEKMAAN",
  description:
    "Direct client inquiry channel for TEKMAAN Studio. Connect directly with our senior engineer to discuss your website, application, or digital portal.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
              DIRECT CLIENT INQUIRIES
            </span>
          </div>

          <h1 className="font-editorial-serif text-hero-giant text-white max-w-5xl">
            Start Your
            <br />
            <span className="gradient-accent">Project.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#858585] max-w-2xl font-editorial-sans leading-relaxed">
            Every inquiry is handled directly by senior technical leadership. Tell us about
            your timeline, goals, and technical scope.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection />
    </div>
  );
}
