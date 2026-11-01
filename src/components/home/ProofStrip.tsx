"use client";

import React from "react";
import { motion } from "motion/react";

interface ProofItem {
  label: string;
  sub?: string;
  highlight?: boolean;
}

const proofItems: ProofItem[] = [
  { label: "Production Platforms", sub: "Web, AI & Software" },
  { label: "Direct Engineering", sub: "Zero Middleman Dilution" },
  { label: "100% IP Ownership", sub: "Clean Repository Transfer", highlight: true },
  { label: "Now Accepting Work", sub: "Selected Client Projects" },
];

export function ProofStrip() {
  return (
    <section
      id="proof"
      className="relative w-full bg-[#090909] text-white border-y border-white/10 py-5 sm:py-6 px-6 sm:px-8 lg:px-12 overflow-hidden z-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/10"
        >
          {proofItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col justify-center ${idx !== 0 ? "pt-4 lg:pt-0 lg:pl-8" : ""}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.highlight ? "bg-[#7864C9] animate-pulse" : "bg-[#4878E8]"
                  }`}
                />
                <span className="font-editorial-serif text-base sm:text-lg text-white font-normal tracking-wide">
                  {item.label}
                </span>
              </div>
              {item.sub && (
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#858585] font-editorial-sans pl-3.5">
                  {item.sub}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
