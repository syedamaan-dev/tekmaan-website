import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";

export const metadata: Metadata = {
  title: "Services & Specialisations — TEKMAAN",
  description:
    "Explore TEKMAAN's 6 core disciplines: Website Design, Full-Stack Development, UI/UX Design, Custom Portals & Dashboards, AI Integration, and Ongoing SLA Maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white">
      {/* Header */}
      <section className="relative pt-36 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7864C9]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#858585] font-editorial-sans">
              STUDIO SERVICES &amp; SPECIALISATIONS
            </span>
          </div>

          <h1 className="font-editorial-serif text-hero-giant text-white max-w-5xl">
            Bespoke Engineering.
            <br />
            <span className="gradient-accent">Architectural Design.</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-[#858585] max-w-2xl font-editorial-sans leading-relaxed">
            Every engagement receives direct senior engineering ownership. We craft high-impact
            digital platforms that turn complex requirements into effortless elegance.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909]">
        <div className="max-w-7xl mx-auto space-y-16">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="border border-black/10 bg-white p-8 sm:p-14 shadow-sm scroll-mt-24 space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-base font-bold text-[#7864C9]">
                    {service.number}
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#858585] font-semibold">
                    {service.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 border border-black/10 bg-[#F8F8F6] text-[#090909]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <h2 className="font-editorial-serif text-2xl sm:text-3xl text-[#090909]">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#858585] font-editorial-sans leading-relaxed mt-4">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="lg:col-span-7 bg-[#F8F8F6] p-8 border border-black/10 space-y-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] block">
                    DELIVERABLES &amp; CAPABILITIES
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#242424] font-editorial-sans">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#090909] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#858585] uppercase tracking-wider">
                  DIRECT COLLABORATION • 100% INTELLECTUAL PROPERTY TRANSFERRED
                </span>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white bg-[#090909] hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] transition-all"
                >
                  <span>INQUIRE ABOUT {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <GiantCtaSection />
    </div>
  );
}
