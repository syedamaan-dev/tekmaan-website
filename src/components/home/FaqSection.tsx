"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ArrowUpRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Engagement", "Technical", "Pricing & Timelines"];

  const filteredFaqs = (siteConfig.faqs || []).filter((faq: { question: string; answer: string; category: string }) => {
    if (selectedCategory === "All") return true;
    return faq.category === selectedCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1020] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#5266F5]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182548] border border-white/10 text-xs font-semibold text-[#41C9D7] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Transparency</span>
          </div>

          <h2 className="text-section-title font-heading font-bold text-white tracking-tight mb-4">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-white via-[#41C9D7] to-[#5266F5] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-body">
            Straight answers about how we operate, code ownership, technical stacks, and engagement timelines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-colors",
                selectedCategory === cat
                  ? "bg-[#5266F5] text-white shadow-md shadow-indigo-500/20"
                  : "bg-[#182548]/60 text-slate-300 hover:text-white border border-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq: { question: string; answer: string; category: string }, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl transition-all duration-200 border",
                  isOpen
                    ? "bg-[#131E38] border-[#41C9D7]/40 shadow-lg shadow-black/40"
                    : "bg-[#182548]/40 border-white/[0.08] hover:border-white/15"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#41C9D7] rounded-2xl"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "bg-[#41C9D7]/20 text-[#41C9D7] rotate-180"
                        : "bg-white/5 text-slate-400"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.05] font-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#182548] to-[#131E38] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5266F5]/20 text-[#5266F5] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-sm">Have a unique technical question?</p>
              <p className="text-xs text-slate-400">Ask the senior engineer directly before committing to anything.</p>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={() => trackEvent("contact_cta_click", { button_location: "faq" })}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#5266F5] hover:bg-[#4355DE] transition-colors shrink-0"
          >
            <span>Reach Out Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
