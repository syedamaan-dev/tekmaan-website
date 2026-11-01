"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/ui/Magnetic";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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
            <ul className="space-y-3 text-xs font-editorial-sans text-[#858585]">
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
                <span className="block text-[10px] uppercase tracking-wider text-[#858585] mb-2">
                  OFFICIAL SOCIAL &amp; NETWORKS
                </span>
                <div className="flex flex-wrap items-center gap-3 pt-0.5">
                  <Magnetic strength={0.25}>
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-white hover:border-[#D64B89]/50 hover:bg-[#D64B89]/10 hover:text-white transition-all duration-300"
                      aria-label="TEKMAAN Official Instagram profile (opens in new tab)"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[#D64B89] group-hover:scale-110 transition-transform" />
                      <span className="font-editorial-sans text-[11px] font-medium">INSTAGRAM ↗</span>
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <a
                      href={siteConfig.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-white hover:border-[#4878E8]/50 hover:bg-[#4878E8]/10 hover:text-white transition-all duration-300"
                      aria-label="TEKMAAN Official LinkedIn page (opens in new tab)"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-[#4878E8] group-hover:scale-110 transition-transform" />
                      <span className="font-editorial-sans text-[11px] font-medium">LINKEDIN ↗</span>
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <a
                      href={siteConfig.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-white hover:border-[#7864C9]/50 hover:bg-[#7864C9]/10 hover:text-white transition-all duration-300"
                      aria-label="TEKMAAN GitHub repository and development profiles (opens in new tab)"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-[#7864C9] group-hover:scale-110 transition-transform" />
                      <span className="font-editorial-sans text-[11px] font-medium">GITHUB ↗</span>
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
