import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[#1c1f26] bg-[#000000] py-14 md:py-16 text-[#9ca3af]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#1c1f26]/60">
          {/* Col 1: Wordmark & Studio Tag */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="#home" className="inline-flex items-center gap-1.5 focus:outline-none mb-3">
                <span className="font-syne font-extrabold text-2xl text-white tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] inline-block shadow-[0_0_8px_#ff6a00]" />
              </Link>
              <p className="text-xs text-[#9ca3af] max-w-[340px] leading-relaxed mt-2">
                An independent, founder-led digital studio delivering thoughtfully designed, high-performance web applications and modern digital products.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span className="font-mono text-[11px] text-[#9ca3af]/80 uppercase tracking-widest">
                Available for New Engagements &bull; 2026
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] font-bold text-white uppercase tracking-widest block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="font-mono text-xs text-[#9ca3af] hover:text-[#ff6a00] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-4">
            <span className="font-mono text-[11px] font-bold text-white uppercase tracking-widest block mb-4">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs font-mono">
              <p className="text-[#9ca3af]/70">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white hover:text-[#ff6a00] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-[#9ca3af]/70">
                WhatsApp:{" "}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ff6a00] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="text-[#9ca3af]/70">
                Domain:{" "}
                <a
                  href={siteConfig.contact.website}
                  className="text-white hover:text-[#ff6a00] transition-colors"
                >
                  {siteConfig.contact.displayWebsite}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9ca3af]/60">
          <p>
            &copy; 2026 {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
