import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact TEKMAAN | Start Your Digital Project",
  description:
    "Get in touch with TEKMAAN to discuss your upcoming website, custom software, business dashboard or AI solution with our founder and senior engineers.",
  alternates: {
    canonical: "https://www.tekmaan.in/contact",
  },
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

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-editorial-sans uppercase tracking-[0.2em] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#7864C9]" />
              <span>{siteConfig.contact.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#858585]" />
            </a>
            <a
              href="https://wa.me/919063127547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-editorial-sans uppercase tracking-[0.2em] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 9063127547</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection />
    </div>
  );
}
