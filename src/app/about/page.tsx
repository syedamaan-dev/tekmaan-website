import React from "react";
import type { Metadata } from "next";
import Image from "next/image";


import { siteConfig } from "@/config/site";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";

export const metadata: Metadata = {
  title: "About TEKMAAN | Independent Digital Technology Studio",
  description:
    "Discover TEKMAAN's founder-led approach to website development, software engineering, AI solutions and thoughtful digital product creation.",
  alternates: {
    canonical: "https://www.tekmaan.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
              STUDIO MANIFESTO &amp; LEADERSHIP
            </span>
          </div>

          <h1 className="font-editorial-serif text-hero-giant text-white max-w-5xl">
            Small Studio.
            <br />
            <span className="gradient-accent">Big Ideas.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#858585] max-w-2xl font-editorial-sans leading-relaxed">
            TEKMAAN is an independent digital studio founded on the premise that the best
            products come from direct senior engineering ownership without bureaucratic dilution.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Grid */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold">
                OUR OPERATING PHILOSOPHY
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-[#090909]">
                Architectural rigor meets relentless execution.
              </h2>
              <div className="space-y-4 text-sm text-[#858585] font-editorial-sans leading-relaxed">
                <p>
                  Most software projects suffer from poor communication, misaligned incentives,
                  and handoff loss. By keeping our studio lean and founder-led, we ensure that every
                  strategic decision, UI detail, and database schema aligns directly with your goals.
                </p>
                <p>
                  We build for production resilience. Whether deploying high-throughput event portals
                  like SR University&apos;s PRAGATHI Expo or architecting AI reliability testbeds like AEGIS-X,
                  we write code that withstands real-world stress.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] w-full bg-[#EAEAE8] border border-black/15 overflow-hidden shadow-sm">
                <Image
                  src="/images/studio-banner.jpg"
                  alt="TEKMAAN Studio Architecture"
                  fill
                  className="object-cover filter grayscale contrast-115"
                />
              </div>
              <p className="text-xs text-[#858585] font-editorial-sans text-center">
                STUDIO IDENTITY MATRIX — EST. {siteConfig.identity.established}
              </p>
            </div>
          </div>

          {/* Core Studio Principles */}
          <div className="pt-12 border-t border-black/10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold mb-8">
              STUDIO OPERATIONAL PRINCIPLES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.principles.map((principle, idx) => (
                <div key={principle.title} className="p-8 border border-black/10 bg-white space-y-3">
                  <span className="font-mono text-xs text-[#7864C9]">0{idx + 1}</span>
                  <h3 className="font-editorial-sans text-xl font-bold text-[#090909]">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <GiantCtaSection />
    </div>
  );
}
