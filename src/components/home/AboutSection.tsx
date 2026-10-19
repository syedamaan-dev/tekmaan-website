"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36 relative border-t border-[#1c1f26]/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-[12px] text-[#ff6a00] font-mono font-medium tracking-[0.2em] uppercase block mb-3">
            About Us
          </span>
          <h2 className="text-fluid-h1 font-bold text-white font-playfair max-w-[640px] leading-tight">
            We&apos;re an independent studio<br className="hidden md:block" /> with big{" "}
            <span className="text-[#ff6a00]">ambitions.</span>
          </h2>
        </div>

        {/* 2-Column Story & Conviction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Column 1: How it started */}
          <div className="flex flex-col">
            <h3 className="text-fluid-h2 font-bold text-white font-syne mb-5">
              How it started
            </h3>
            <div className="space-y-4 text-fluid-body text-[#9ca3af] leading-relaxed">
              <p>
                TEKMAAN was established in 2026 as an independent, founder-led digital studio. It was born out of a clear observation: ambitious founders and businesses frequently get burned by traditional agencies delivering flashy mockups without robust, production-grade engineering.
              </p>
              <p>
                Our founder, Syed Amaan, founded TEKMAAN to deliver a different model: treating{" "}
                <span className="text-white font-medium">performance, visual clarity, and reliability as core features</span>.
              </p>
              <p>
                We collaborate directly with our clients without layers of account managers, delivering thoughtfully designed, scalable digital experiences that convert and endure.
              </p>
            </div>
          </div>

          {/* Column 2: What we believe & Facts */}
          <div className="flex flex-col">
            <h3 className="text-fluid-h2 font-bold text-white font-syne mb-5">
              What we believe
            </h3>
            <div className="border border-[#ff6a00]/25 bg-[#ff6a00]/[0.02] rounded-2xl p-8 relative overflow-hidden">
              <span className="absolute -top-4 -left-2 text-[#ff6a00]/10 text-8xl font-playfair select-none pointer-events-none">
                “
              </span>
              <blockquote className="text-xl sm:text-2xl text-white/95 font-playfair relative z-10 leading-relaxed italic">
                Great websites aren&apos;t just built — they&apos;re engineered. Every millisecond of load time, every pixel of spacing, every interaction has a purpose.
              </blockquote>
              <p className="mt-5 text-xs font-mono text-[#ff6a00] uppercase tracking-widest relative z-10">
                — The TEKMAAN Standard
              </p>
            </div>

            {/* Studio Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-4 border-t border-[#1c1f26]">
              <div className="text-center p-3 rounded-xl bg-[#0a0a0a] border border-[#1c1f26]">
                <span className="text-2xl sm:text-3xl font-bold text-white font-syne block">
                  {siteConfig.founded}
                </span>
                <span className="text-[10px] font-mono text-[#9ca3af]/70 block mt-1 uppercase tracking-wider">
                  Founded
                </span>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#0a0a0a] border border-[#1c1f26]">
                <span className="text-2xl sm:text-3xl font-bold text-[#ff6a00] font-syne block">
                  Direct
                </span>
                <span className="text-[10px] font-mono text-[#9ca3af]/70 block mt-1 uppercase tracking-wider">
                  Access
                </span>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#0a0a0a] border border-[#1c1f26]">
                <span className="text-2xl sm:text-3xl font-bold text-white font-syne block">
                  Studio
                </span>
                <span className="text-[10px] font-mono text-[#9ca3af]/70 block mt-1 uppercase tracking-wider">
                  Model
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
