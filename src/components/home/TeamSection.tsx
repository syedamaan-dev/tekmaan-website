"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-36 relative border-t border-[#1c1f26]/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Section Header matching StackForge */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <span className="text-[12px] text-[#ff6a00] font-mono font-medium tracking-[0.2em] uppercase block mb-3">
            The Team
          </span>
          <h2 className="text-fluid-h1 font-bold text-white font-playfair max-w-[550px] leading-tight">
            People behind the<br />
            <span className="text-[#ff6a00]"> pixels.</span>
          </h2>
        </div>

        {/* 3 Profile Cards in Exact Required Order:
            1. Syed Amaan — Founder (FIRST)
            2. Mohammed Khaja Fakruddin — Team Member
            3. Abul Ala Hamza — Team Member
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center max-w-[1080px] mx-auto">
          {siteConfig.team.map((member) => (
            <div
              key={member.id}
              className="profile-card group mx-auto w-full max-w-[320px] select-none"
              aria-label={`${member.name} — ${member.role}`}
            >
              {/* Photo Image Wrap with Consistent Aspect Ratio */}
              <div className="card-image-wrap relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={480}
                  className="transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={member.isFounder}
                />
                {member.isFounder && (
                  <div className="absolute top-3 left-3 bg-[#000000]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#ff6a00]/40 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      Studio Lead
                    </span>
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <section className="flex flex-col mt-4 px-2 pb-2">
                <h3 className="text-base sm:text-lg font-bold font-syne text-white tracking-tight group-hover:text-[#ff6a00] transition-colors">
                  {member.name}
                </h3>

                <p className="role text-xs font-mono font-bold text-[#ff6a00] tracking-wider uppercase mt-1">
                  {member.role}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
