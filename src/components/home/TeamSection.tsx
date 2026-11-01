"use client";

import React, { useRef, useState } from "react";
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

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: -y * 7,
      y: x * 7,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="perspective-1000 flex flex-col h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.active ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="border border-white/10 p-5 sm:p-6 hover:border-[#7864C9]/60 transition-colors duration-300 bg-white/[0.015] hover:bg-white/[0.03] flex flex-col justify-between group transform-style-3d rounded-sm h-full"
      >
        {/* Card Header: Number & Founder Tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm text-[#7864C9] font-bold">
            {member.number}
          </span>
          {member.isFounder ? (
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#7864C9] font-editorial-sans px-3 py-1 rounded-full border border-[#7864C9]/40 bg-[#7864C9]/10 font-semibold shadow-[0_0_15px_rgba(120,100,201,0.2)]">
              FOUNDER
            </span>
          ) : (
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#858585] font-editorial-sans">
              STUDIO TEAM
            </span>
          )}
        </div>

        {/* Photograph with consistent natural framing */}
        <div className="relative w-full aspect-[4/4.5] overflow-hidden border border-white/10 rounded-sm mb-5 bg-white/[0.02]">
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-105"
            priority={member.isFounder}
          />
        </div>

        {/* Identity & Designation */}
        <div className="pt-2 border-t border-white/5">
          <h3 className="font-editorial-serif text-xl sm:text-2xl text-white mb-1.5 transition-colors group-hover:text-white">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm font-editorial-sans text-[#7864C9] tracking-wide font-medium">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#090909] text-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Subtle ambient gradient highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#4878E8]/10 via-[#7864C9]/15 to-[#D64B89]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-3">
              03 // STUDIO LEADERSHIP &amp; ENGINEERING
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              PEOPLE BEHIND
              <br />
              <span className="gradient-accent">TEKMAAN.</span>
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
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
