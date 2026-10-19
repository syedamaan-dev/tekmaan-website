"use client";

import React from "react";
import { Sparkles, Award, ShieldCheck, Zap, Code2 } from "lucide-react";

export function ServiceTicker() {
  const values = [
    {
      tag: "CODE QUALITY",
      title: "Zero Template Bloat",
      desc: "tailored Next.js builds",
      icon: Code2,
    },
    {
      tag: "PARTNERSHIP",
      title: "Direct Engineer Access",
      desc: "zero account manager filters",
      icon: Award,
    },
    {
      tag: "OWNERSHIP",
      title: "100% IP & Code Ownership",
      desc: "clean perpetual delivery",
      icon: ShieldCheck,
    },
    {
      tag: "SPEED",
      title: "Sub-Second Page Loads",
      desc: "optimized core web vitals",
      icon: Zap,
    },
    {
      tag: "CRAFTSMANSHIP",
      title: "Pixel-Perfect Responsive UI",
      desc: "fluid across every screen",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-[#0a0a0a]/60 border-y border-[#1c1f26] overflow-hidden py-6 select-none relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse" />
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#9ca3af]/80 uppercase">
          Studio Engineering Values
        </span>
      </div>

      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee py-2 flex items-center gap-4">
          {[...values, ...values].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3.5 px-5 py-2.5 bg-[#000000] border border-[#262626] rounded-md hover:border-[#ff6a00]/60 transition-all duration-300 cursor-default mx-2 shadow-[2px_2px_0px_0px_rgba(255,106,0,0.6)]"
              >
                <div className="w-6 h-6 rounded-full border border-[#262626] flex items-center justify-center bg-[#0a0a0a]">
                  <Icon className="w-3.5 h-3.5 text-[#ff6a00]" />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-[#ff6a00] text-white uppercase rounded">
                    {item.tag}
                  </span>
                  <span className="font-syne font-bold text-xs text-white">
                    {item.title}
                  </span>
                  <span className="text-[#9ca3af]/60 text-[11px] font-medium font-mono hidden sm:inline">
                    — {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
