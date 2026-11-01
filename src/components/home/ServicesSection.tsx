"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "@/components/ui/Magnetic";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only apply pinned sequential 3D animation on desktop/tablets (min-width: 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pinContainer = pinContainerRef.current;
      const cards = gsap.utils.toArray<HTMLElement>(".service-stacked-card");
      if (!pinContainer || cards.length < 3) return;

      // Set initial positions: Card 0 is in focus, Card 1 & 2 are placed in 3D queue
      gsap.set(cards[0], {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        rotateX: 0,
        z: 0,
        transformOrigin: "center top",
      });

      gsap.set(cards[1], {
        opacity: 0,
        yPercent: 80,
        scale: 0.92,
        rotateX: 12,
        z: -100,
        transformOrigin: "center top",
      });

      gsap.set(cards[2], {
        opacity: 0,
        yPercent: 120,
        scale: 0.86,
        rotateX: 18,
        z: -180,
        transformOrigin: "center top",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainer,
          pin: true,
          start: "top top",
          end: "+=2200",
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update progress bar
            if (progressBarRef.current) {
              progressBarRef.current.style.height = `${self.progress * 100}%`;
            }
            // Update active index
            const step = Math.min(2, Math.floor(self.progress * 3));
            setActiveStep(step);
          },
        },
      });

      // Transition from Card 1 -> Card 2
      tl.to(cards[0], {
        scale: 0.94,
        yPercent: -15,
        rotateX: -8,
        z: -80,
        opacity: 0.35,
        filter: "blur(2px)",
        duration: 1,
        ease: "power2.inOut",
      }, "step1")
      .to(cards[1], {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        rotateX: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "step1");

      // Transition from Card 2 -> Card 3
      tl.to(cards[1], {
        scale: 0.94,
        yPercent: -15,
        rotateX: -8,
        z: -80,
        opacity: 0.35,
        filter: "blur(2px)",
        duration: 1,
        ease: "power2.inOut",
      }, "step2")
      .to(cards[0], {
        scale: 0.88,
        yPercent: -25,
        rotateX: -14,
        z: -150,
        opacity: 0.15,
        duration: 1,
        ease: "power2.inOut",
      }, "step2")
      .to(cards[2], {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        rotateX: 0,
        z: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "step2");

      // Small holding buffer at the end before releasing pin smoothly
      tl.to({}, { duration: 0.4 });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#090909] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#7864C9]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Desktop Pinned Scroll Area */}
      <div
        ref={pinContainerRef}
        className="hidden lg:flex min-h-screen w-full flex-col justify-between pt-24 pb-14 px-8 lg:px-14 relative z-10"
      >
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
          {/* Section Header */}
          <div className="flex items-end justify-between gap-6 pb-6 border-b border-white/10 shrink-0">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-2">
                02 // THREE CORE DISCIPLINES
              </span>
              <h2 className="font-editorial-serif text-section-giant text-white leading-none">
                WHAT WE <span className="gradient-accent">BUILD.</span>
              </h2>
            </div>

            <div className="flex items-center gap-8">
              {/* Step indicator pills */}
              <div className="flex items-center gap-2">
                {offerings.map((off, idx) => (
                  <button
                    key={off.number}
                    onClick={() => setActiveStep(idx)}
                    className={`px-3 py-1 text-xs font-mono transition-all rounded-full border ${
                      activeStep === idx
                        ? "border-[#7864C9] bg-[#7864C9]/20 text-white font-bold"
                        : "border-white/10 text-[#858585] hover:text-white"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <Magnetic strength={0.25}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-[#7864C9] transition-colors py-1"
                >
                  <span>ALL 6 SERVICES &amp; SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Main 3D Stage & Progress Bar */}
          <div className="grid grid-cols-12 gap-10 items-center my-auto py-8">
            {/* Left Column: Vertical Progress Bar & Category Description */}
            <div className="col-span-4 flex items-start gap-6">
              {/* Vertical Progress Line */}
              <div className="relative w-1 h-64 bg-white/10 rounded-full overflow-hidden shrink-0">
                <div
                  ref={progressBarRef}
                  className="w-full bg-gradient-to-b from-[#4878E8] via-[#7864C9] to-[#D64B89] transition-all duration-100 ease-out h-[33%]"
                />
              </div>

              {/* Dynamic metadata for active card */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
                  <Sparkles className="w-3.5 h-3.5 text-[#7864C9]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#7864C9] uppercase">
                    PHASE {offerings[activeStep].number} OF 03
                  </span>
                </div>

                <h3 className="font-editorial-serif text-3xl text-white">
                  {offerings[activeStep].title}
                </h3>

                <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
                  {offerings[activeStep].description}
                </p>

                <div className="pt-2">
                  <Magnetic strength={0.2}>
                    <Link
                      href={offerings[activeStep].link}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-[#4878E8] transition-colors"
                    >
                      <span>EXPLORE ARCHITECTURE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Stacked Sequential Cards */}
            <div
              ref={cardsContainerRef}
              className="col-span-8 relative h-[440px] perspective-1500 transform-style-3d"
            >
              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="service-stacked-card absolute inset-0 border border-white/10 p-8 sm:p-10 bg-[#101010]/95 backdrop-blur-md rounded-md flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] backface-hidden will-change-transform"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-base font-bold text-[#7864C9]">
                          {offering.number}
                        </span>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#858585]">
                          {offering.category}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-white/40">
                        DIRECT EXECUTION
                      </span>
                    </div>

                    <h4 className="font-editorial-serif text-3xl sm:text-4xl text-white mb-4">
                      {offering.title}
                    </h4>

                    {/* Deliverables Grid */}
                    <div className="grid grid-cols-2 gap-3.5 pt-2 mb-6">
                      {offering.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#858585]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7864C9] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer with Tech & CTA */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {offering.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded-sm border border-white/10 bg-white/[0.02] text-[#858585]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Magnetic strength={0.3}>
                      <Link
                        href={offering.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#090909] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#7864C9] hover:text-white transition-all duration-300"
                      >
                        <span>DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-editorial-sans text-[#858585] shrink-0">
            <span className="uppercase tracking-[0.2em]">
              SCROLL DRIVEN ARCHITECTURAL STACK // LENIS + GSAP TRIGGER
            </span>
            <span className="font-mono text-[#7864C9]">
              0{activeStep + 1} / 03
            </span>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Fallback: Natural Responsive Stacking (no blocking pin) */}
      <div className="lg:hidden py-16 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 pb-8 border-b border-white/10 mb-8">
          <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
            02 // THREE CORE DISCIPLINES
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-4xl text-white">
            WHAT WE <span className="gradient-accent">BUILD.</span>
          </h2>
          <p className="text-sm text-[#858585] font-editorial-sans">
            Consolidated into three focused offerings. Direct senior engineering and design partnership.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="border border-white/10 p-6 bg-white/[0.015] rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="font-mono text-sm font-bold text-[#7864C9]">
                    {offering.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#858585]">
                    {offering.category}
                  </span>
                </div>

                <h3 className="font-editorial-serif text-2xl text-white mb-2">
                  {offering.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans mb-4">
                  {offering.description}
                </p>

                <div className="space-y-2 mb-6">
                  {offering.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#858585]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7864C9] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {offering.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] uppercase px-2 py-0.5 border border-white/10 text-[#858585]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={offering.link}
                  className="text-xs uppercase tracking-wider text-white font-bold flex items-center gap-1"
                >
                  <span>SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
