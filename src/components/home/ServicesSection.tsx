"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Offering {
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  link: string;
}

const offerings: Offering[] = [
  {
    number: "01",
    category: "DIGITAL FLAGSHIPS",
    title: "Websites & E-commerce",
    description:
      "High-impact editorial websites, brand flagships, and e-commerce platforms engineered with bespoke typography, fluid motion, and sub-second load times.",
    deliverables: [
      "Custom editorial design & typography",
      "Next.js App Router & fluid motion",
      "Core Web Vitals 95+ speed targets",
      "Technical SEO & schema architecture",
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Motion"],
    link: "/services#website-design",
  },
  {
    number: "02",
    category: "SOFTWARE ENGINEERING",
    title: "Business Platforms & Custom Software",
    description:
      "Mission-critical web applications, operational portals, high-throughput jury evaluation consoles, and scalable backend infrastructure built for daily reliability.",
    deliverables: [
      "Type-safe full-stack architecture",
      "Custom admin & telemetry consoles",
      "Role-based access & secure sessions",
      "PostgreSQL & Supabase data layers",
    ],
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "FastAPI"],
    link: "/services#fullstack-dev",
  },
  {
    number: "03",
    category: "APPLIED INTELLIGENCE",
    title: "AI & Automation",
    description:
      "Practical AI integrations, production LLM pipelines, model reliability wrappers, drift diagnostics, and event-driven automation for real workflows.",
    deliverables: [
      "Model reliability & telemetry wrappers",
      "Structured JSON & document pipelines",
      "Production LLM API integrations",
      "Automated event-driven webhooks",
    ],
    techStack: ["Python", "FastAPI", "LLM APIs", "JSON Validation"],
    link: "/services#ai-automation",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#090909] text-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#7864C9]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-3">
              02 // THREE CORE DISCIPLINES
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              WHAT WE
              <br />
              <span className="gradient-accent">BUILD.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3 max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              Consolidated into three focused offerings. Direct senior engineering and design
              partnership without agency overhead.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-[#7864C9] transition-colors"
            >
              <span>EXPLORE ALL 6 SERVICES &amp; SPECS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Consolidated Offerings Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-white/10 p-6 sm:p-8 bg-white/[0.015] hover:border-[#7864C9]/60 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <span className="font-mono text-sm font-bold text-[#7864C9]">
                    {offering.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#858585]">
                    {offering.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-white group-hover:text-white mb-3">
                  {offering.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#858585] leading-relaxed font-editorial-sans mb-6">
                  {offering.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 block font-semibold mb-2">
                    CORE DELIVERABLES
                  </span>
                  {offering.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#858585]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7864C9] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack & Link */}
              <div className="pt-5 border-t border-white/10 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {offering.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-white/10 text-[#858585]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={offering.link}
                  className="inline-flex items-center justify-between w-full pt-2 text-xs uppercase tracking-[0.2em] font-semibold text-white group-hover:text-[#4878E8] transition-colors"
                >
                  <span>VIEW SERVICE DETAILS</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar linking to expanded services */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-sans text-[#858585]">
          <span className="uppercase tracking-[0.2em]">
            FULL TECHNICAL MATRIX, SLA OPTIONS &amp; DETAILED BREAKDOWNS AVAILABLE
          </span>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white hover:text-[#7864C9] uppercase tracking-[0.2em] font-semibold transition-colors"
          >
            <span>BROWSE COMPLETE SERVICES &amp; SPECS ↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
