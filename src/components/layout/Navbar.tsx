"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["contact", "team", "about", "services", "home"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out flex justify-center w-full ${
          isScrolled
            ? "bg-[#000000]/90 backdrop-blur-md border-b border-[#1c1f26]/80 shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
            : "bg-[#000000]/60 backdrop-blur-sm border-b border-white/[0.06]"
        }`}
      >
        <div className="w-full max-w-[1240px] px-6 md:px-12 h-16 md:h-[72px] flex items-center justify-between">
          {/* TEKMAAN Wordmark */}
          <Link
            href="#home"
            className="flex items-center gap-1.5 group focus:outline-none select-none"
            aria-label="TEKMAAN Studio Home"
          >
            <span className="font-syne font-extrabold tracking-tight text-xl md:text-2xl text-white group-hover:text-white/90 transition-colors">
              TEKMAAN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] inline-block shadow-[0_0_8px_#ff6a00]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {siteConfig.nav.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`font-mono tracking-widest text-[11px] uppercase transition-all duration-200 relative py-1 ${
                    isActive
                      ? "text-[#ff6a00] font-bold"
                      : "text-[#9ca3af]/80 hover:text-white font-medium"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff6a00] rounded-full shadow-[0_0_6px_#ff6a00]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 bg-[#ff6a00] hover:bg-[#e55f00] text-white font-mono text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 shadow-[0_2px_12px_rgba(255,106,0,0.3)] active:translate-y-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#ff6a00]/50 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#ff6a00]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-[#000000]/98 backdrop-blur-xl md:hidden flex flex-col p-6 border-t border-[#1c1f26]">
          <nav className="flex flex-col gap-5 mt-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne text-2xl font-bold text-white hover:text-[#ff6a00] transition-colors py-2 border-b border-[#1c1f26]/50 flex items-center justify-between"
              >
                <span>{item.title}</span>
                <span className="font-mono text-xs text-[#9ca3af]/40 uppercase">
                  {item.href.replace("#", "// ")}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 flex flex-col gap-4">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6a00] text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 rounded-md shadow-lg"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="text-center mt-4">
              <span className="font-mono text-[11px] text-[#9ca3af]/60 uppercase tracking-widest block">
                Direct Contact
              </span>
              <a
                href="mailto:tekmaan.connect@gmail.com"
                className="font-mono text-xs text-[#eaeaea] hover:text-[#ff6a00] mt-1 block"
              >
                tekmaan.connect@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
