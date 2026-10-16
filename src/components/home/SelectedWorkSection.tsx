"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, ProjectItem } from "@/config/site";
import { cn } from "@/lib/utils";

const filterCategories = [
  { label: "ALL", value: "all" },
  { label: "WEB DESIGN", value: "web-design" },
  { label: "DEVELOPMENT", value: "development" },
  { label: "AI", value: "ai" },
  { label: "DASHBOARDS", value: "dashboards" },
];

export function SelectedWorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = siteConfig.projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categoryFilter === activeFilter;
  });

  return (
    <section
      id="work"
      className="relative w-full bg-[#F8F8F6] text-[#090909] pt-20 sm:pt-32 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Reference 1 style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-black/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              02 / SELECTED WORK
            </span>
            <h2 className="font-editorial-serif text-section-giant text-[#090909]">
              Bold Ideas,
              <br />
              Stunning Results.
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#858585] leading-relaxed font-editorial-sans">
            A curated portfolio spanning verified client engagements, AI reliability platforms,
            and digital exhibition frameworks. Meticulously built from architecture to deployment.
          </p>
        </div>

        {/* Filter Navigation Bar (Reference 1 style) */}
        <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-8 border-b border-black/10 scrollbar-none">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={cn(
                  "relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-editorial-sans font-medium transition-colors shrink-0",
                  isActive
                    ? "text-[#090909] font-bold"
                    : "text-[#858585] hover:text-[#090909]"
                )}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="workFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#090909]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Large Two-Column Portfolio Gallery (Reference 1 layout) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 sm:gap-y-24 pt-12 sm:pt-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem, index) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group flex flex-col"
              >
                {/* Large Visual Thumbnail with Zoom on Hover */}
                <Link
                  href={`/work/${project.slug}`}
                  className="editorial-image-container w-full aspect-[16/10] bg-[#EAEAE8] rounded-none border border-black/10 overflow-hidden relative block shadow-sm"
                  aria-label={`View ${project.title} Case Study`}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={cn(
                        "inline-block px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold backdrop-blur-md border",
                        project.isClientProject
                          ? "bg-white/90 text-[#090909] border-black/15 shadow-sm"
                          : "bg-[#090909]/80 text-white border-white/20"
                      )}
                    >
                      {project.badge}
                    </span>
                  </div>
                </Link>

                {/* Project Details Below Thumbnail */}
                <div className="pt-6 flex items-start justify-between gap-4">
                  <div className="space-y-2 max-w-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#858585] font-editorial-sans">
                        {project.categoryLabel}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-black/20" />
                      <span className="text-[11px] text-[#858585]">
                        {project.clientOrContext}
                      </span>
                    </div>

                    <Link href={`/work/${project.slug}`} className="block group-hover:text-[#4878E8] transition-colors">
                      <h3 className="font-editorial-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#090909] group-hover:text-[#4878E8] transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 border border-black/10 bg-black/[0.02] text-[#242424]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Arrow Icon */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-[#090909] group-hover:bg-[#090909] group-hover:text-white transition-all duration-300 shrink-0 mt-1"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Portfolio Link */}
        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#858585]">
            ALL PROJECTS BUILT WITH ARCHITECTURAL DISCIPLINE &amp; ZERO SHORTCUTS
          </p>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#090909] hover:text-[#4878E8] transition-colors"
          >
            <span>VIEW FULL ARCHIVE (6 CASE STUDIES)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
