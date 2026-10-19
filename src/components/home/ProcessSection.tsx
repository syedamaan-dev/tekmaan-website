"use client";

import React from "react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      desc: "We begin with a deep exploration into your product vision, target market, functional specifications, and business goals to map a razor-sharp technical trajectory.",
    },
    {
      number: "02",
      title: "Architecture & Wireframing",
      desc: "Creating structural blueprints, database schemas, and intuitive interaction wireframes to validate user experience and technical feasibility before writing code.",
    },
    {
      number: "03",
      title: "Visual Design Creation",
      desc: "Translating wireframes into distinctive, high-fidelity interfaces. Establishing typography scales, micro-interactions, responsive design systems, and brand elevation.",
    },
    {
      number: "04",
      title: "Engineering & Testing",
      desc: "Building clean, production-grade Next.js and full-stack software with rigorous automated testing, Core Web Vitals optimization, and strict accessibility standards.",
    },
    {
      number: "05",
      title: "Deployment & Evolution",
      desc: "Smooth launch onto resilient cloud infrastructure with continuous monitoring, zero downtime, and dedicated founder-level technical support.",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 relative border-t border-[#1c1f26]/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 md:gap-12 items-start">
          {/* Left Column: Sticky Title */}
          <div className="md:sticky md:top-28 mb-12 md:mb-0">
            <span className="text-[12px] text-[#ff6a00] font-mono font-medium tracking-[0.2em] uppercase block mb-3">
              Our Process
            </span>
            <h2 className="text-fluid-h1 font-bold text-white font-playfair max-w-[480px] leading-tight mb-6">
              Planning your<br />
              <span className="text-[#ff6a00]"> project journey.</span>
            </h2>
            <p className="text-fluid-body text-[#9ca3af] max-w-[420px] leading-relaxed">
              Every phase is executed with direct developer access and transparent milestones. No agency bloat — just thoughtful design and clean, dependable engineering.
            </p>
          </div>

          {/* Right Column: Steps Cards */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#1c1f26] bg-[#0a0a0a]/90 p-8 shadow-xl hover:border-[#ff6a00]/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white font-syne group-hover:text-[#ff6a00] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-3xl font-bold text-[#ff6a00] font-syne opacity-90">
                    {step.number}
                  </span>
                </div>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
