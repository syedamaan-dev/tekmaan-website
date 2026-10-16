"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when fullscreen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4878E8] via-[#7864C9] to-[#D64B89] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Main Header Bar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out",
          isScrolled
            ? "py-4 bg-[#090909]/85 backdrop-blur-md border-b border-white/[0.06]"
            : "py-7 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left: TEKMAAN Wordmark */}
            <Link
              href="/"
              className="group flex items-baseline gap-2 focus:outline-none"
              aria-label="TEKMAAN Home"
            >
              <span className="font-editorial-serif text-2xl sm:text-3xl text-white transition-opacity group-hover:opacity-90">
                TEKMAAN
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9] inline-block mb-1" />
            </Link>

            {/* Centre: WORK / SERVICES / ABOUT / CONTACT */}
            <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.25em] text-[#858585] hover:text-white transition-colors duration-200 font-editorial-sans"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Right: LET'S TALK pill button + Animated Menu Icon */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] font-editorial-sans text-white hover:border-white/60 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
              </Link>

              {/* Animated Menu Icon / Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 rounded-full border border-white/10 hover:border-white/30 text-white focus:outline-none transition-colors"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxurious Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#090909] text-white flex flex-col justify-between p-8 sm:p-12 lg:p-20 overflow-y-auto"
          >
            {/* Header placeholder spacer */}
            <div className="h-16" />

            {/* Giant Navigation Links */}
            <div className="max-w-5xl mx-auto w-full my-auto py-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#858585] block mb-8">
                NAVIGATION — EST. 2026
              </span>
              <div className="flex flex-col gap-6 sm:gap-8">
                {siteConfig.nav.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline justify-between border-b border-white/10 pb-4 text-3xl sm:text-5xl lg:text-6xl font-editorial-serif text-white hover:text-[#7864C9] transition-colors"
                    >
                      <span className="group-hover:translate-x-3 transition-transform duration-300">
                        {item.title}
                      </span>
                      <span className="text-sm font-sans tracking-widest text-[#858585] group-hover:text-white">
                        0{idx + 1} ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info inside Overlay */}
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-xs tracking-wider text-[#858585]">
              <div>
                <span className="block uppercase text-white mb-1">STUDIO</span>
                <p>Independent Freelance Studio</p>
                <p>Direct Engineer Collaboration</p>
              </div>
              <div>
                <span className="block uppercase text-white mb-1">DIRECT INQUIRIES</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors block"
                >
                  {siteConfig.contact.email}
                </a>
                <a
                  href="https://wa.me/919063127547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors block mt-1"
                >
                  WhatsApp: +91 9063127547 ↗
                </a>
              </div>
              <div className="flex sm:justify-end items-center gap-6">
                <a
                  href={siteConfig.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors uppercase"
                >
                  GITHUB ↗
                </a>
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors uppercase"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
