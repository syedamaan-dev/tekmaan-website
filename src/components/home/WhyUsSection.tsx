"use client";

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-[#090909] text-white pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              07 / STUDIO COMMITMENTS
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              WHY PARTNER
              <br />
              WITH US.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              We operate on absolute transparency, uncompromising code standards, and genuine
              partnership. No agency bloat, no artificial promises.
            </p>
          </div>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 p-8 sm:p-12 hover:border-white/30 transition-colors bg-white/[0.015] flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-sm text-[#7864C9]">
                  0{index + 1}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#858585]">
                  CORE PRINCIPLE
                </span>
              </div>

              <div>
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-[#858585] font-editorial-sans leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Direct Guarantee Statement */}
        <div className="mt-16 p-8 sm:p-12 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7864C9] block font-mono">
              DIRECT ENGAGEMENT GUARANTEE
            </span>
            <p className="text-base text-white font-editorial-sans">
              Every client communicates directly with senior technical leadership. No account
              liaisons, no outsourced code, and no hidden subcontractors.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#858585] uppercase tracking-widest font-mono">
            <span>[ 100% DIRECT ]</span>
            <span>[ 0% MIDDLEMEN ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
