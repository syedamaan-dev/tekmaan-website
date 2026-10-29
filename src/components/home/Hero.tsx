"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#090909] text-white flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-hero-grid"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#4878E8]/10 via-[#7864C9]/15 to-[#D64B89]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#4878E8]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Top subtle eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full pt-2 sm:pt-4"
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans font-medium">
            INDEPENDENT DIGITAL STUDIO — EST. 2026
          </span>
        </div>
      </motion.div>

      {/* Main Hero Headline */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-14"
      >
        <h1 className="font-editorial-serif text-hero-giant select-none">
          {/* Line 1: CRAFTING DIGITAL */}
          <div className="overflow-hidden py-1">
            <motion.div
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-7"
            >
              <span className="text-white">CRAFTING</span>
              <span className="gradient-accent">DIGITAL</span>
            </motion.div>
          </div>

          {/* Line 2: EXPERIENCES */}
          <div className="overflow-hidden py-1 mt-1 sm:mt-2">
            <motion.div
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="text-white"
            >
              EXPERIENCES
            </motion.div>
          </div>
        </h1>

        {/* Supporting description & Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="mt-8 sm:mt-12 max-w-4xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 pt-6 border-t border-white/10"
        >
          <p className="text-sm sm:text-base text-[#858585] leading-relaxed font-editorial-sans max-w-lg">
            We design and build websites, business platforms, and AI-powered solutions for ambitious teams.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white text-[#090909] font-editorial-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#work"
              className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.03] text-white font-editorial-sans text-xs uppercase tracking-[0.2em] font-semibold hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 active:scale-95"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar: Ambient status, studio location, and scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-white/10 text-xs font-editorial-sans text-[#858585]"
      >
        <div className="flex items-center gap-6">
          <span className="uppercase tracking-[0.2em] text-[#858585]">
            FOUNDER-LED STUDIO
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
          <span className="uppercase tracking-[0.2em] text-[#858585]">
            DIRECT SENIOR ENGINEERING
          </span>
        </div>

        <Link
          href="#work"
          className="group inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs text-white/60 hover:text-white transition-colors"
        >
          <span>SCROLL TO WORK</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce transition-transform group-hover:translate-y-1" />
        </Link>
      </motion.div>
    </section>
  );
}
