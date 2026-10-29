"use client";

import React from "react";
import Image from "next/image";

import { motion } from "motion/react";

import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#F8F8F6] text-[#090909] pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
            04 / STUDIO IDENTITY &amp; PHILOSOPHY
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#090909] font-editorial-sans font-semibold">
            FOUNDER-LED STUDIO
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial-serif text-section-giant text-[#090909]"
          >
            SMALL STUDIO.
            <br />
            BIG IDEAS.
          </motion.h2>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-editorial-sans text-2xl sm:text-3xl font-light text-[#242424] leading-relaxed">
              We operate deliberately as an independent, high-craft digital studio.
              We believe the most remarkable software is forged when creative direction
              and technical engineering are held by the same disciplined hands.
            </h3>

            <div className="space-y-6 text-sm text-[#858585] leading-relaxed font-editorial-sans max-w-xl">
              <p>
                Traditional digital agencies operate like assembly lines: your vision is sold
                by an executive, handed to an account manager, delegated to junior contractors,
                and diluted across layers of bureaucracy. The result is bloated code, sluggish
                timelines, and forgotten nuance.
              </p>
              <p>
                At <strong className="text-[#090909]">TEKMAAN</strong>, the model is completely
                inverted. You collaborate directly with a senior engineer and designer who builds
                your digital flagship from architectural foundation to pixel polish. We take on
                only a curated handful of projects simultaneously to guarantee undivided attention.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10 flex flex-wrap gap-8 text-xs font-editorial-sans">
              <div>
                <span className="block uppercase text-[#858585] mb-1">FOUNDED</span>
                <span className="font-bold text-[#090909]">{siteConfig.identity.established}</span>
              </div>
              <div>
                <span className="block uppercase text-[#858585] mb-1">STRUCTURE</span>
                <span className="font-bold text-[#090909]">{siteConfig.identity.type}</span>
              </div>
              <div>
                <span className="block uppercase text-[#858585] mb-1">LOCATION</span>
                <span className="font-bold text-[#090909]">{siteConfig.identity.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] w-full bg-[#EAEAE8] border border-black/15 overflow-hidden shadow-sm">
              <Image
                src="/images/studio-banner.jpg"
                alt="TEKMAAN Studio Architecture"
                fill
                className="object-cover filter grayscale contrast-115 hover:filter-none transition-all duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-[#090909]/90 text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                STUDIO IDENTITY MATRIX
              </div>
            </div>

            {/* Studio Commitments */}
            <div className="border border-black/10 p-6 space-y-4 bg-white/60">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#858585] block font-semibold">
                OUR OPERATIONAL COMMITMENTS
              </span>
              <ul className="space-y-3 text-xs text-[#242424] font-editorial-sans">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#090909] mt-1 shrink-0" />
                  <span><strong>Zero Junior Handoffs:</strong> You interface exclusively with senior practitioners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#090909] mt-1 shrink-0" />
                  <span><strong>Full IP Ownership:</strong> 100% intellectual property &amp; repositories transferred.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#090909] mt-1 shrink-0" />
                  <span><strong>Engineered for Speed:</strong> Sub-second Core Web Vitals target across all viewports.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
