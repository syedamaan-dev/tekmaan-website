"use client";

import React from "react";
import { motion } from "motion/react";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative w-full bg-[#F8F8F6] text-[#090909] pt-24 sm:pt-36 pb-20 sm:pb-32 px-6 sm:px-8 lg:px-12 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top small category label */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans font-medium">
            01 / MANIFESTO & IDENTITY
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#090909] font-editorial-sans font-semibold">
            TEKMAAN STUDIO
          </span>
        </div>

        {/* Oversized Editorial Heading */}
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial-serif text-section-giant text-[#090909]"
          >
            GOOD DESIGN.
            <br />
            SERIOUS TECHNOLOGY.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-black/10"
          >
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] text-[#858585] font-editorial-sans font-semibold">
                THE INDEPENDENT ADVANTAGE
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="font-editorial-sans text-xl sm:text-2xl lg:text-3xl font-light text-[#242424] leading-relaxed">
                TEKMAAN is an independent digital studio operating at the intersection
                of high aesthetic discipline and rigorous software engineering. We partner
                directly with ambitious founders and teams to craft distinctive websites,
                mission-critical web applications, and thoughtful technology solutions.
              </p>
              <p className="font-editorial-sans text-base text-[#858585] leading-relaxed mt-6">
                No corporate layers, no junior handoffs, and no generic templates. Every line
                of code and typographic rhythm is shaped directly by senior engineering hands.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Studio Pillars Row */}
        <div className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-black/10">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block">
              [ 01 ] AESTHETIC INTEGRITY
            </span>
            <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">
              Editorial Swiss Typography
            </h3>
            <p className="text-sm text-[#858585] leading-relaxed">
              We design digital spaces inspired by architectural proportions, bold editorial type,
              and uncluttered whitespace that commands authority.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block">
              [ 02 ] DEEP ARCHITECTURE
            </span>
            <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">
              Production-Grade Engineering
            </h3>
            <p className="text-sm text-[#858585] leading-relaxed">
              Type-safe codebases built on Next.js, FastAPI, and robust data layers. Sub-second
              load times and zero technical debt.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block">
              [ 03 ] DIRECT OWNERSHIP
            </span>
            <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">
              Full Intellectual Property
            </h3>
            <p className="text-sm text-[#858585] leading-relaxed">
              100% intellectual property ownership transferred cleanly to you upon delivery,
              backed by direct engineer support and ongoing SLA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
