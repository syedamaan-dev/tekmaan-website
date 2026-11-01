"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/ui/Magnetic";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#090909] text-white pt-16 sm:pt-20 pb-10 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: Columns for Navigation, Direct Reach, Studio Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-14 border-b border-white/10">
          {/* Studio positioning */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <Image
                src="/assets/brand/tekmaan-symbol.svg"
                alt="TEKMAAN Symbol"
                width={26}
                height={26}
                className="w-6.5 h-6.5 object-contain"
              />
              <span className="font-editorial-serif text-3xl font-extrabold tracking-tight text-white">
                TEKMAAN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9]" />
            </div>
            <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed max-w-sm">
              Independent digital technology studio crafting high-performance websites, bespoke platforms,
              and intelligent software interfaces.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#858585] pt-1 font-mono">
              EST. {siteConfig.identity.established} — {siteConfig.identity.location}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white block font-semibold">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-[0.2em] font-editorial-sans text-[#858585]">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  01 // WORK
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  02 // SERVICES
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  03 // ABOUT
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  04 // PROCESS
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  05 // CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Reach */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-white block font-semibold">
              DIRECT CHANNELS
            </span>
            <ul className="space-y-2.5 text-xs font-editorial-sans text-[#858585]">
              <li>
                <span className="block text-[10px] uppercase tracking-wider text-[#858585]">EMAIL</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white hover:text-[#7864C9] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-wider text-[#858585]">PHONE &amp; WHATSAPP</span>
                <a
                  href="https://wa.me/919063127547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#7864C9] transition-colors flex items-center gap-2"
                >
                  <span>+91 9063127547</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                    WHATSAPP ↗
                  </span>
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-wider text-[#858585]">NETWORKS</span>
                <div className="flex items-center gap-5 pt-0.5 uppercase tracking-wider">
                  <Magnetic strength={0.25}>
                    <a
                      href={siteConfig.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#7864C9] transition-colors py-1 inline-block"
                    >
                      GITHUB ↗
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <a
                      href={siteConfig.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#7864C9] transition-colors py-1 inline-block"
                    >
                      LINKEDIN ↗
                    </a>
                  </Magnetic>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial TEKMAAN Wordmark */}
        <div className="py-8 sm:py-12 select-none overflow-hidden">
          <h2 className="font-editorial-serif text-[13vw] leading-[1] tracking-normal text-white/10 hover:text-white/20 transition-colors duration-700 text-center uppercase whitespace-nowrap">
            TEKMAAN
          </h2>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Control */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858585] font-editorial-sans">
          <p>© 2026 TEKMAAN STUDIO. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              TERMS OF SERVICE
            </Link>

            {/* Back to top control */}
            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-white hover:text-[#7864C9] transition-colors cursor-pointer py-1"
                aria-label="Back to top"
              >
                <span className="uppercase tracking-[0.2em]">BACK TO TOP</span>
                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
