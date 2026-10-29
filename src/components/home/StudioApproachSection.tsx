"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Scope & Strategy",
    summary: "Deconstruct business objectives, define architecture roadmap, and fix milestones.",
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Visual Architecture",
    summary: "Bespoke typography, Swiss layout grids, design tokens, and clickable prototypes.",
  },
  {
    number: "03",
    title: "DEVELOP",
    subtitle: "Precision Engineering",
    summary: "Strict TypeScript, Next.js App Router, resilient APIs, and sub-second performance.",
  },
  {
    number: "04",
    title: "LAUNCH",
    subtitle: "Deployment & Guard",
    summary: "Edge network cutover, Core Web Vitals audit, 100% IP transfer, and warranty.",
  },
];

export function StudioApproachSection() {
  return (
    <section
      id="approach"
      className="relative w-full bg-[#090909] text-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#4878E8]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-3">
              04 // STUDIO PHILOSOPHY &amp; DELIVERY CADENCE
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              DISCIPLINED
              <br />
              <span className="gradient-accent">APPROACH.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3 max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              Direct technical partnership without agency overhead. You collaborate directly with
              the builder executing your platform from day zero to production.
            </p>
            <div className="flex items-center gap-4 text-xs font-editorial-sans">
              <Link
                href="/about"
                className="text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-1"
              >
                <span>STUDIO MANIFESTO</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/process"
                className="text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-1"
              >
                <span>DETAILED PROCESS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Manifesto Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 border border-white/10 bg-white/[0.015] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-3xl">
            <h3 className="font-editorial-serif text-xl sm:text-2xl text-white mb-2">
              The Founder-Led Studio Advantage
            </h3>
            <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed">
              Traditional agencies delegate projects across account managers and junior contractors,
              diluting vision and code quality. At TEKMAAN, every line of code, design token, and
              database schema is shaped directly by senior engineering hands with 100% IP ownership
              transferred to you upon launch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs font-mono text-[#858585] shrink-0">
            <span className="px-3 py-1.5 border border-white/10 bg-white/[0.02] text-[#7864C9]">
              [ 100% DIRECT COLLABORATION ]
            </span>
            <span className="px-3 py-1.5 border border-white/10 bg-white/[0.02] text-white">
              [ 0% MIDDLEMEN ]
            </span>
          </div>
        </motion.div>

        {/* Single Compact Process Row: DISCOVER → DESIGN → DEVELOP → LAUNCH */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] font-editorial-sans">
              EXECUTION PIPELINE
            </span>
            <span className="text-xs font-mono text-[#7864C9]">
              DISCOVER → DESIGN → DEVELOP → LAUNCH
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative border border-white/10 p-5 sm:p-6 bg-white/[0.015] hover:border-[#7864C9]/60 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#7864C9] font-bold">
                      STEP {step.number}
                    </span>
                    {idx < processSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-white/30" />
                    )}
                  </div>

                  <h4 className="font-editorial-serif text-lg sm:text-xl text-white mb-1">
                    {step.title}
                  </h4>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#858585] block mb-3 font-editorial-sans">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom link to full process */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-sans text-[#858585]">
          <span className="uppercase tracking-[0.2em]">
            CLEAR MILESTONES • WEEKLY REVIEWS • ZERO SURPRISE DELIVERABLES
          </span>

          <Link
            href="/process"
            className="inline-flex items-center gap-1.5 text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors"
          >
            <span>VIEW DETAILED 4-PHASE DELIVERY BLUEPRINT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

