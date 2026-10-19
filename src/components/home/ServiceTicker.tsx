"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export function ServiceTicker() {
  const items = siteConfig.serviceTicker;

  return (
    <div className="relative w-full py-4 bg-[#182548]/40 border-y border-white/[0.08] overflow-hidden backdrop-blur-md">
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0B1020] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0B1020] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee select-none whitespace-nowrap">
        {/* Render twice for seamless continuous scroll */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-5">
            <span className="font-heading font-medium text-sm tracking-wide text-slate-300 hover:text-white transition-colors uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#41C9D7]" />
          </div>
        ))}
      </div>
    </div>
  );
}
