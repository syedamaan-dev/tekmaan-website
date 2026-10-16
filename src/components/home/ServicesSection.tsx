"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig, ServiceItem } from "@/config/site";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative w-full bg-[#090909] text-white pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#7864C9]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              03 / CAPABILITIES &amp; SPECIALISATIONS
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              WHAT WE
              <br />
              DO BEST.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              We bridge aesthetic elegance and rock-solid software engineering. Every engagement
              receives direct architectural leadership and end-to-end execution.
            </p>
          </div>
        </div>

        {/* Six Animated Service Rows */}
        <div className="mt-8 flex flex-col divide-y divide-white/10 border-b border-white/10">
          {siteConfig.services.map((service: ServiceItem, index: number) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative py-10 sm:py-14 transition-colors duration-300"
              >
                {/* Background hover light highlight */}
                <div
                  className={cn(
                    "absolute inset-0 bg-white/[0.015] pointer-events-none transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start sm:items-center">
                  {/* Service Number & Category */}
                  <div className="lg:col-span-2 flex items-baseline gap-4">
                    <span className="text-sm font-mono text-[#858585] group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#858585] group-hover:text-[#7864C9] transition-colors">
                      {service.category}
                    </span>
                  </div>

                  {/* Giant Title */}
                  <div className="lg:col-span-5">
                    <h3 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-white transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Short description & Key Deliverables */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-sm text-[#858585] group-hover:text-[#F8F8F6] leading-relaxed transition-colors duration-300 font-editorial-sans">
                      {service.shortDesc}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 text-[#858585] group-hover:border-white/20 group-hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Arrow Button */}
                  <div className="lg:col-span-1 flex justify-start lg:justify-end">
                    <Link
                      href="#contact"
                      className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:border-white group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Expanded deliverables on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 pt-6 mt-6 border-t border-white/5 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#858585]">
                        {service.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7864C9] shrink-0" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom studio CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 text-xs font-editorial-sans text-[#858585]">
          <span className="uppercase tracking-[0.2em]">
            HAVE A BESPOKE ARCHITECTURAL OR SOFTWARE REQUIREMENT?
          </span>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-white hover:text-[#7864C9] transition-colors uppercase tracking-[0.2em] font-semibold"
          >
            <span>START A CONVERSATION ↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
