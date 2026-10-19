"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Users,
  Code2,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhyTekmaan() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F7FC] text-[#111827] relative overflow-hidden">
      {/* Light subtle background grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5266F5]/10 border border-[#5266F5]/20 text-xs font-semibold text-[#5266F5] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Independent Advantage</span>
            </div>
            <h2 className="text-section-title font-heading font-bold text-[#111827] tracking-tight">
              Direct Senior Execution. <br />
              <span className="text-[#5266F5]">Zero Agency Bloat.</span>
            </h2>
          </div>

          <p className="text-base text-slate-600 max-w-md leading-relaxed font-body">
            Traditional agencies charge you for account managers, junior handoffs, and lavish overhead. TEKMAAN is an independent digital studio where you collaborate directly with the senior engineer building your product.
          </p>
        </div>

        {/* Sophisticated Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Builder Access (Spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2 light-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#5266F5]/10 flex items-center justify-center text-[#5266F5] mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-[#5266F5]">
                Direct Collaboration
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#111827] mt-1 mb-3">
                Talk to the Engineer, Not an Account Manager
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                When you share a requirement or give feedback, it doesn't get lost in translation through three layers of agency staff. You work side-by-side with the person writing the code and crafting the UI.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700">Daily asynchronous updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700">Immediate feedback turnaround</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-[#5266F5]">
              <span>Learn about our model</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: 100% Code Ownership */}
          <div className="light-card rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#41C9D7]/15 flex items-center justify-center text-[#0E7490] mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-[#0E7490]">
                Full Ownership
              </span>
              <h3 className="font-heading font-bold text-xl text-[#111827] mt-1 mb-3">
                100% IP & Code Ownership
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Zero proprietary lock-in. Clean Git repositories, modular architecture, and typed documentation handed over entirely to your team upon launch.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#5266F5]" />
                Clean Git commits & docs
              </span>
            </div>
          </div>

          {/* Card 3: Performance Mindset */}
          <div className="light-card rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-amber-600">
                Performance First
              </span>
              <h3 className="font-heading font-bold text-xl text-[#111827] mt-1 mb-3">
                Engineered for Sub-Second Speed
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We don't use heavy drag-and-drop page builders. Every platform is custom-built with Next.js, static rendering, and edge deployment for top-tier Lighthouse scores.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-800">
                Core Web Vitals target: 95+
              </span>
            </div>
          </div>

          {/* Card 4: Modern Technical Stack (Spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2 light-card rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#5266F5] mb-6">
                <Code2 className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-[#5266F5]">
                Production Stack
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#111827] mt-1 mb-3">
                Modern Standards. No Outdated Legacies.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We craft your products using battle-tested modern web foundations that scale effortlessly: Next.js App Router, TypeScript, Tailwind CSS, Python AI frameworks, and cloud edge infrastructure.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "React 19", "Tailwind CSS", "Python AI", "FastAPI", "Vercel", "REST & GraphQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#5266F5]">
              <Link href="/services" className="hover:underline flex items-center gap-1">
                <span>Explore all technical capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 5: Transparent Milestones (Spans 2 columns) */}
          <div className="md:col-span-1 lg:col-span-2 light-card rounded-3xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600">
                Predictable Engagements
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#111827] mt-1 mb-3">
                Fixed-Scope & Transparent Pricing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Every project begins with a clear technical roadmap and agreed milestones. You know exactly what will be delivered, when it will go live, and what it costs.
              </p>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex-1">
                  <p className="text-slate-500 font-normal">Typical Website</p>
                  <p className="text-sm font-bold text-[#111827]">2 – 3 Weeks</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex-1">
                  <p className="text-slate-500 font-normal">Full-Stack App</p>
                  <p className="text-sm font-bold text-[#111827]">4 – 8 Weeks</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#5266F5]">
              <Link href="/process" className="hover:underline flex items-center gap-1">
                <span>View our 4-phase process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
