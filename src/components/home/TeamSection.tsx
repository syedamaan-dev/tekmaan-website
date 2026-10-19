"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  isFounder: boolean;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "syed-amaan",
    number: "01",
    name: "Syed Amaan",
    role: "Founder & Full-Stack Developer",
    isFounder: true,
    image: "/team/syed-amaan.png",
  },
  {
    id: "mohammed-khaja-fakruddin",
    number: "02",
    name: "Mohammed Khaja Fakruddin",
    role: "UI/UX Designer",
    isFounder: false,
    image: "/team/mohammed-khaja-fakruddin.jpg",
  },
  {
    id: "abul-ala-hamza",
    number: "03",
    name: "Abul Ala Hamza",
    role: "Backend Developer",
    isFounder: false,
    image: "/team/abul-ala-hamza.png",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative w-full bg-[#090909] text-white pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle ambient gradient highlight matching original theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#4878E8]/10 via-[#7864C9]/15 to-[#D64B89]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              STUDIO LEADERSHIP &amp; ENGINEERING
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              THE PEOPLE
              <br />
              BEHIND <span className="gradient-accent">TEKMAAN.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              An independent, founder-led studio of engineers and designers dedicated to
              architectural discipline, flawless performance, and modern digital craft.
            </p>
          </div>
        </div>

        {/* 3 Profile Cards in Exact Order:
            01 — Syed Amaan (Founder & Full-Stack Developer)
            02 — Mohammed Khaja Fakruddin (UI/UX Designer)
            03 — Abul Ala Hamza (Backend Developer)
        */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="border border-white/10 p-6 sm:p-7 hover:border-[#7864C9]/60 transition-all duration-300 bg-white/[0.015] hover:bg-white/[0.03] flex flex-col justify-between group"
            >
              {/* Card Header: Number & Founder Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-sm text-[#7864C9] font-bold">
                  {member.number}
                </span>
                {member.isFounder ? (
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#7864C9] font-editorial-sans px-3 py-1 rounded-full border border-[#7864C9]/40 bg-[#7864C9]/10 font-semibold">
                    FOUNDER
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#858585] font-editorial-sans">
                    STUDIO TEAM
                  </span>
                )}
              </div>

              {/* Photograph with consistent natural framing */}
              <div className="relative w-full aspect-[4/4.8] overflow-hidden border border-white/10 rounded-sm mb-6 bg-white/[0.02]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_15%] transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={member.isFounder}
                />
              </div>

              {/* Identity & Designation */}
              <div className="pt-2">
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-white mb-2 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-editorial-sans text-[#7864C9] tracking-wide font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
