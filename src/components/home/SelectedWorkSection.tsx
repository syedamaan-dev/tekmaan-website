"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, ProjectItem } from "@/config/site";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

const filterCategories = [
  { label: "ALL", value: "all" },
  { label: "WEB DESIGN", value: "web-design" },
  { label: "DEVELOPMENT", value: "development" },
  { label: "AI", value: "ai" },
  { label: "DASHBOARDS", value: "dashboards" },
];

const HOMEPAGE_PROJECT_SLUGS = ["pragathi-expo", "aegis-x", "atelier-monochrome"];

interface SelectedWorkSectionProps {
  isHomepage?: boolean;
}

// 3D Tilt Project Card Component inspired by Eduard Bodak's interactive project grid
function ProjectCard3D({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, active: false });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax image displacement as user scrolls past the card
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalised from -1 to 1
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    // Max rotation 8 degrees for sophisticated editorial feel
    setTilt({
      x: -normY * 8,
      y: normX * 8,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({ ...prev, x: 0, y: 0, active: false }));
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 flex flex-col h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.active ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="group relative flex flex-col justify-between h-full border border-white/10 p-5 sm:p-6 bg-white/[0.015] hover:border-[#7864C9]/60 hover:bg-white/[0.03] transition-colors duration-400 transform-style-3d overflow-hidden rounded-sm"
      >
        {/* Dynamic interactive glare highlight */}
        {tilt.active && (
          <div
            className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 320px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.12), transparent 70%)`,
            }}
          />
        )}

        <div>
          {/* Visual Thumbnail with Parallax Overflow */}
          <Link
            href={`/work/${project.slug}`}
            className="editorial-image-container w-full aspect-[16/10] bg-[#141414] border border-white/10 overflow-hidden relative block mb-5"
            aria-label={`View ${project.title} Case Study`}
          >
            <motion.div
              style={{ y: imageParallaxY, scale: 1.12 }}
              className="relative w-full h-full will-change-transform"
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover object-top filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* Corner Project Type Badge */}
            <div className="absolute top-3 left-3 z-10">
              <span
                className={cn(
                  "inline-block px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-semibold backdrop-blur-md border",
                  project.isClientProject
                    ? "bg-white/95 text-[#090909] border-white/40 shadow-sm"
                    : project.badge === "Engineering Platform"
                    ? "bg-[#4878E8]/90 text-white border-[#4878E8]"
                    : "bg-[#090909]/90 text-[#F8F8F6] border-white/20"
                )}
              >
                {project.badge}
              </span>
            </div>
          </Link>

          {/* Context and Category */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#7864C9] font-editorial-sans font-medium">
              {project.categoryLabel}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[10px] text-[#858585] truncate">
              {project.clientOrContext}
            </span>
          </div>

          {/* Title */}
          <Link href={`/work/${project.slug}`} className="block">
            <h3 className="font-editorial-serif text-xl sm:text-2xl text-white group-hover:text-[#4878E8] transition-colors mb-2">
              {project.title}
            </h3>
          </Link>

          {/* Concise Description */}
          <p className="text-xs sm:text-sm text-[#858585] leading-relaxed font-editorial-sans line-clamp-3 mb-4">
            {project.tagline}
          </p>
        </div>

        {/* Footer with Tech Stack & Magnetic Action Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-white/10 bg-white/[0.02] text-[#858585]"
              >
                {tech}
              </span>
            ))}
          </div>

          <Magnetic strength={0.35}>
            <Link
              href={`/work/${project.slug}`}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-[#090909] group-hover:border-white transition-all duration-300 shrink-0"
              aria-label={`Open ${project.title} Case Study`}
            >
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWorkSection({ isHomepage = true }: SelectedWorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const homepageProjects = HOMEPAGE_PROJECT_SLUGS.map((slug) =>
    siteConfig.projects.find((p) => p.slug === slug)
  ).filter((p): p is ProjectItem => Boolean(p));

  const filteredProjects = isHomepage
    ? homepageProjects
    : siteConfig.projects.filter((project) => {
        if (activeFilter === "all") return true;
        return project.categoryFilter === activeFilter;
      });

  return (
    <section
      id="work"
      className="relative w-full bg-[#090909] text-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#4878E8]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-3">
              01 // SELECTED WORK
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              ENGINEERED TO
              <br />
              <span className="gradient-accent">PERFORM.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3 max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              Verified client deployments, deep engineering platforms, and studio design frameworks.
              Built from architecture to production.
            </p>
            <Magnetic strength={0.25}>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-[#7864C9] transition-colors py-1"
              >
                <span>VIEW ALL WORK (6 PROJECTS)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Filter Navigation Bar (Shown on Full Archive /work page) */}
        {!isHomepage && (
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto py-6 border-b border-white/10 scrollbar-none">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={cn(
                    "relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-editorial-sans font-medium transition-colors shrink-0",
                    isActive ? "text-white font-bold" : "text-[#858585] hover:text-white"
                  )}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="workFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7864C9]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid with 3D Tilt and Parallax */}
        <motion.div
          layout
          className={cn(
            "pt-10 sm:pt-12",
            isHomepage
              ? "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
              : "grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem, index: number) => (
              <ProjectCard3D key={project.slug} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Archive Link Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-sans text-[#858585]">
          <span className="uppercase tracking-[0.2em]">
            CLEAR DISTINCTION: CLIENT SYSTEMS • INDEPENDENT R&amp;D • STUDIO FRAMEWORKS
          </span>

          <Magnetic strength={0.25}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white hover:text-[#7864C9] font-semibold uppercase tracking-[0.22em] transition-colors py-1"
            >
              <span>EXPLORE COMPLETE PORTFOLIO (6 CASE STUDIES)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
