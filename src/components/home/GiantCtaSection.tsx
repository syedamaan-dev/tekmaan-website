"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function GiantCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#090909] text-white py-32 sm:py-48 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#4878E8]/10 via-[#7864C9]/15 to-[#D64B89]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.03] mb-8 sm:mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D64B89] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans font-medium">
            NOW ACCEPTING Q1/Q2 SELECT ENGAGEMENTS
          </span>
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          style={{ y: yTransform }}
          className="font-editorial-serif text-hero-giant max-w-6xl select-none"
        >
          <span>LET'S CREATE</span>
          <br />
          <span>SOMETHING</span>
          <br />
          <span className="gradient-accent">EXTRAORDINARY.</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="mt-8 sm:mt-12 max-w-xl text-base sm:text-lg text-[#858585] font-editorial-sans leading-relaxed">
          Tell us about your product, platform, or digital ambition.
          We respond within 24 hours with architectural thoughts and timeline estimates.
        </p>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-14">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-white text-[#090909] font-editorial-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95"
          >
            <span>START YOUR PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
