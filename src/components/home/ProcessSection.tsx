"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig, ProcessStep } from "@/config/site";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process"
      className="relative w-full bg-[#090909] text-white pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#4878E8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              05 / CREATIVE &amp; TECHNICAL BLUEPRINT
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              THE 4-STEP
              <br />
              PROCESS.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              From strategic deconstruction to flawless production deployment. A battle-tested
              roadmap engineered for absolute velocity, clarity, and zero surprise deliverables.
            </p>
          </div>
        </div>

        {/* Step Selector Horizontal Bar (Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
          {siteConfig.processSteps.map((step: ProcessStep, index: number) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "text-left p-6 sm:p-8 border transition-all duration-300 relative group cursor-pointer",
                  isActive
                    ? "border-white bg-white/[0.04] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    : "border-white/10 hover:border-white/30 bg-transparent"
                )}
              >
                {/* Active Indicator Top Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessLine"
                    className="absolute -top-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#4878E8] via-[#7864C9] to-[#D64B89]"
                  />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={cn(
                      "font-mono text-sm tracking-wider",
                      isActive ? "text-[#7864C9]" : "text-[#858585]"
                    )}
                  >
                    STEP {step.number}
                  </span>
                  <span
                    className={cn(
                      "text-xs uppercase tracking-widest",
                      isActive ? "text-white" : "text-[#858585] group-hover:text-white"
                    )}
                  >
                    PHASE
                  </span>
                </div>

                <h3 className="font-editorial-serif text-xl sm:text-2xl text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#858585] font-editorial-sans">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="mt-8 border border-white/10 p-8 sm:p-14 bg-white/[0.015]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Number & Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#7864C9] font-mono">
                    STAGE {siteConfig.processSteps[activeStep].number} OF 04
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#858585]">
                    {siteConfig.processSteps[activeStep].subtitle}
                  </span>
                </div>

                <h4 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-white">
                  {siteConfig.processSteps[activeStep].title}
                </h4>

                <p className="text-base sm:text-lg text-[#F8F8F6]/90 font-editorial-sans leading-relaxed">
                  {siteConfig.processSteps[activeStep].description}
                </p>
              </div>

              {/* Right Column: Key Concrete Deliverables */}
              <div className="lg:col-span-5 border-l border-white/10 lg:pl-10 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold">
                  CONCRETE STAGE DELIVERABLES
                </span>
                <ul className="space-y-3.5">
                  {siteConfig.processSteps[activeStep].deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-[#858585]">
                      <CheckCircle2 className="w-4 h-4 text-[#7864C9] shrink-0 mt-0.5" />
                      <span className="text-[#F8F8F6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
