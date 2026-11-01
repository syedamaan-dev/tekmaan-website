"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "motion/react";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const step = Math.min(3, Math.max(0, Math.floor(latest * 4)));
      setActiveStep(step);
    });
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
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
              <Magnetic strength={0.2}>
                <Link
                  href="/about"
                  className="text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-1 py-1"
                >
                  <span>STUDIO MANIFESTO</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
              <span className="text-white/20">•</span>
              <Magnetic strength={0.2}>
                <Link
                  href="/process"
                  className="text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-1 py-1"
                >
                  <span>DETAILED PROCESS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Compact Manifesto Highlight with Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 border border-white/10 bg-white/[0.015] hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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
            <span className="px-3 py-1.5 border border-[#7864C9]/40 bg-[#7864C9]/10 text-white font-medium">
              [ 100% DIRECT COLLABORATION ]
            </span>
            <span className="px-3 py-1.5 border border-white/10 bg-white/[0.02] text-white/80">
              [ 0% MIDDLEMEN ]
            </span>
          </div>
        </motion.div>

        {/* Dynamic Execution Pipeline with Scroll-Activated Progress */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] font-editorial-sans">
              EXECUTION PIPELINE // SCROLL ACTIVE
            </span>
            <div className="flex items-center gap-2">
              {processSteps.map((s, i) => (
                <span
                  key={s.number}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === i
                      ? "bg-[#7864C9] scale-125 shadow-[0_0_8px_#7864C9]"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative border p-5 sm:p-6 transition-all duration-400 flex flex-col justify-between rounded-sm ${
                    isActive
                      ? "border-[#7864C9] bg-gradient-to-b from-[#7864C9]/15 to-white/[0.02] shadow-[0_10px_30px_rgba(120,100,201,0.15)]"
                      : "border-white/10 bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.025]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          isActive ? "text-[#7864C9]" : "text-[#858585]"
                        }`}
                      >
                        STEP {step.number}
                      </span>
                      {idx < processSteps.length - 1 && (
                        <ArrowRight
                          className={`hidden lg:block w-4 h-4 transition-colors ${
                            isActive ? "text-[#7864C9]" : "text-white/20"
                          }`}
                        />
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

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] uppercase font-mono text-white/50">
                    <CheckCircle2
                      className={`w-3 h-3 ${
                        isActive ? "text-[#7864C9]" : "text-white/30"
                      }`}
                    />
                    <span>STAGE {step.number} MILESTONE</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom link to full process with Magnetic wrapper */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-sans text-[#858585]">
          <span className="uppercase tracking-[0.2em]">
            CLEAR MILESTONES • WEEKLY REVIEWS • ZERO SURPRISE DELIVERABLES
          </span>

          <Magnetic strength={0.25}>
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors py-1"
            >
              <span>VIEW DETAILED 4-PHASE DELIVERY BLUEPRINT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
