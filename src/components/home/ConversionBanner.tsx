"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ConversionBanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1020] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5266F5]/20 via-[#41C9D7]/15 to-[#5266F5]/20 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative rounded-3xl bg-gradient-to-br from-[#182548] via-[#101932] to-[#0A1020] border border-white/15 p-8 sm:p-12 lg:p-16 overflow-hidden text-center shadow-2xl">
          {/* Decorative SVG grid lines */}
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#41C9D7] uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Initiate Your Project</span>
            </div>

            <h2 className="text-section-title font-heading font-black text-white tracking-tight mb-6">
              Ready to engineer your <br />
              <span className="bg-gradient-to-r from-[#41C9D7] via-white to-[#5266F5] bg-clip-text text-transparent">
                next digital breakthrough?
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto font-body leading-relaxed">
              We take on a limited number of select engagements to guarantee meticulous craftsmanship and direct senior engineer collaboration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-white bg-gradient-to-r from-[#5266F5] to-[#41C9D7] hover:shadow-[0_0_30px_rgba(82,102,245,0.4)] transition-all active:scale-95"
              >
                <span>Start a Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-4 h-4 text-[#41C9D7]" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Code & IP Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#41C9D7]" />
                Fixed Milestone Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#5266F5]" />
                Direct Senior Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
