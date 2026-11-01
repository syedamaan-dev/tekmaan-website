"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth springs for scroll transforms
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3D Scroll transformations inspired by Eduard Bodak reference
  const yHeadline = useTransform(smoothProgress, [0, 1], ["0%", "35%"]);
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 18]); // Tilts back into 3D space
  const zDepth = useTransform(smoothProgress, [0, 1], [0, -220]); // Recedes in z-space
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(smoothProgress, [0, 0.75, 1], [1, 0.8, 0]);

  // Directional parallax layers
  const floatY1 = useTransform(smoothProgress, [0, 1], [0, -120]);
  const floatY2 = useTransform(smoothProgress, [0, 1], [0, 150]);
  const floatRotate1 = useTransform(smoothProgress, [0, 1], [0, -12]);
  const floatRotate2 = useTransform(smoothProgress, [0, 1], [0, 16]);

  // Subtle mouse perspective tracking on desktop
  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] sm:min-h-screen w-full bg-[#090909] text-white flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-hero-grid perspective-1500"
    >
      {/* Dynamic ambient background light gradients with directional counter-shift */}
      <motion.div
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#4878E8]/12 via-[#7864C9]/18 to-[#D64B89]/12 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: -mousePos.x * 25,
          y: -mousePos.y * 25,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#4878E8]/10 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Floating 3D Accent Badge 1: Top Right */}
      <motion.div
        style={{
          y: floatY1,
          rotate: floatRotate1,
        }}
        animate={{
          x: mousePos.x * 18,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="hidden lg:flex items-center gap-2.5 absolute top-36 right-16 xl:right-28 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#4878E8] animate-ping" />
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/70">
          CORE SPEED // 95+
        </span>
      </motion.div>

      {/* Floating 3D Accent Badge 2: Mid Left */}
      <motion.div
        style={{
          y: floatY2,
          rotate: floatRotate2,
        }}
        animate={{
          x: -mousePos.x * 20,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="hidden lg:flex items-center gap-2.5 absolute top-[58%] left-10 xl:left-20 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#7864C9]" />
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/70">
          ARCHITECTURAL DISCIPLINE
        </span>
      </motion.div>

      {/* Top subtle eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full pt-2 sm:pt-4 relative z-10"
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans font-medium">
            INDEPENDENT DIGITAL STUDIO — EST. 2026
          </span>
        </div>
      </motion.div>

      {/* Main 3D Hero Stage */}
      <motion.div
        style={{
          y: yHeadline,
          rotateX,
          z: zDepth,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-14 transform-style-3d will-change-transform"
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
            <Magnetic strength={0.25}>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white text-[#090909] font-editorial-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link
                href="#work"
                className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.03] text-white font-editorial-sans text-xs uppercase tracking-[0.2em] font-semibold hover:border-white/50 hover:bg-white/[0.08] transition-all duration-300 active:scale-95"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar: Ambient status, studio location, and scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-white/10 text-xs font-editorial-sans text-[#858585] relative z-10"
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

        <Magnetic strength={0.3}>
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs text-white/60 hover:text-white transition-colors py-1"
          >
            <span>SCROLL TO WORK</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce transition-transform group-hover:translate-y-1" />
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}
