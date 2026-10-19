"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Layers,
  Palette,
  LayoutDashboard,
  Cpu,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceIcons = {
  "01": Globe,
  "02": Layers,
  "03": Palette,
  "04": LayoutDashboard,
  "05": Cpu,
  "06": Wrench,
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-36 relative">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[12px] text-[#ff6a00] font-mono font-medium tracking-[0.2em] uppercase block mb-3">
              Capabilities &amp; Services
            </span>
            <h2 className="text-fluid-h1 font-bold text-white font-playfair max-w-[580px] leading-tight">
              Engineered for impact.<br />
              <span className="text-[#ff6a00]">Built to scale.</span>
            </h2>
          </div>
          <p className="text-fluid-body text-[#9ca3af] max-w-[380px] md:text-right">
            From bespoke interactive websites to complex multi-tenant web applications, we provide end-to-end technical execution.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => {
            const Icon = serviceIcons[service.number as keyof typeof serviceIcons] || Globe;
            return (
              <div
                key={service.id}
                className="group rounded-2xl border border-[#1c1f26] bg-[#0a0a0a]/80 p-7 flex flex-col justify-between hover:border-[#ff6a00]/50 hover:bg-[#0c0d11] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Subtle top corner gradient on hover */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 106, 0, 0.12) 0%, transparent 70%)",
                  }}
                />

                <div>
                  {/* Top line: Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#ff6a00] tracking-widest">
                      // {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#14171d] border border-[#262626] flex items-center justify-center text-[#ff6a00] group-hover:border-[#ff6a00]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-syne text-white mb-3 group-hover:text-[#ff6a00] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-[#1c1f26]">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#eaeaea]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Tags & Action */}
                <div className="pt-4 border-t border-[#1c1f26]/80 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#14171d] text-[#9ca3af] border border-[#222630]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#9ca3af] group-hover:text-white group-hover:border-[#ff6a00] group-hover:bg-[#ff6a00]/10 transition-all shrink-0"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
