"use client";

import React from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative w-full bg-[#F8F8F6] text-[#090909] pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              06 / TECHNOLOGY MATRIX
            </span>
            <h2 className="font-editorial-serif text-section-giant text-[#090909]">
              BUILT WITH
              <br />
              PURPOSE.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              We select tools based on longevity, speed, and architectural resilience.
              No fad frameworks or unnecessary dependencies.
            </p>
          </div>
        </div>

        {/* Typographic Technology Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {siteConfig.technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#F8F8F6] p-8 sm:p-10 flex flex-col justify-between group hover:bg-white transition-colors duration-300 min-h-[220px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#858585] group-hover:text-[#090909] transition-colors">
                  0{idx + 1}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-0.5 border border-black/10 text-[#858585]">
                  {tech.category}
                </span>
              </div>

              <div>
                <h3 className="font-editorial-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#090909] group-hover:translate-x-1 transition-transform duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs text-[#858585] mt-2 font-editorial-sans leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              <div className="h-[1px] w-8 bg-black/15 group-hover:w-full group-hover:bg-[#090909] transition-all duration-500 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
