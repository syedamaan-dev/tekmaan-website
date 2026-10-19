"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[90dvh] overflow-hidden py-16 md:py-24"
    >
      {/* Background Subtle Gradient & Ambience */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255, 106, 0, 0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255, 106, 0, 0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1200px] w-full px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Eyebrow Studio Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0a0a] border border-[#1c1f26] mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-[#9ca3af] uppercase">
            Independent Digital Studio &bull; Est. 2026
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-fluid-display font-extrabold text-white font-syne select-none text-center flex flex-col items-center justify-center max-w-[900px] leading-[1.05]">
          <span className="block tracking-tight">We Build.</span>
          <span className="block mt-1 font-curvy text-[#ff6a00] text-[1.05em] font-normal tracking-normal">
            You Grow.
          </span>
        </h1>

        {/* Short Agency Intro */}
        <p className="mt-6 text-fluid-body-lg text-[#9ca3af] max-w-[620px] mx-auto text-center leading-relaxed">
          A simpler way to turn ambitious ideas into reliable, well-built digital products.
          We engineer modern websites, full-stack web applications, and thoughtful digital solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="#contact"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="#services"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Prominent Metric — Strictly 10+ Projects Done */}
        <div className="mt-14 pt-8 border-t border-[#1c1f26]/60 w-full max-w-[480px]">
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#0a0a0a]/60 border border-[#1c1f26]/80 backdrop-blur-sm">
            <div className="flex items-baseline gap-1 font-mono">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                10+
              </span>
            </div>
            <span className="font-mono text-[11px] font-bold text-[#ff6a00] uppercase tracking-[0.18em] mt-1">
              Projects Done
            </span>
            <span className="text-xs text-[#9ca3af]/70 mt-1 font-sans">
              Delivered across modern web platforms, dashboards & applications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
