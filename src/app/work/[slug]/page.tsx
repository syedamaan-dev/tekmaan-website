import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,



} from "lucide-react";
import { siteConfig } from "@/config/site";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study — TEKMAAN`,
    description: project.summary,
    alternates: {
      canonical: `https://www.tekmaan.in/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = siteConfig.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = siteConfig.projects[projectIndex];
  const nextProject = siteConfig.projects[(projectIndex + 1) % siteConfig.projects.length];
  const prevProject =
    siteConfig.projects[(projectIndex - 1 + siteConfig.projects.length) % siteConfig.projects.length];

  return (
    <div className="flex flex-col w-full bg-[#090909] text-white">
      {/* Editorial Header */}
      <section className="relative pt-36 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Back Link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#858585] hover:text-white transition-colors mb-8 group font-editorial-sans"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO SELECTED WORK</span>
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
              {project.badge}
            </span>

            <span className="text-[11px] px-3.5 py-1 rounded-full bg-white/5 text-[#858585] border border-white/10 uppercase tracking-wider">
              {project.clientOrContext}
            </span>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="font-editorial-serif text-hero-giant text-white max-w-5xl mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#858585] font-editorial-sans leading-relaxed max-w-3xl mb-8">
            {project.tagline}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {project.officialUrl && (
              <a
                href={project.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#090909] bg-white hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] hover:text-white transition-all duration-300"
              >
                <span>VISIT LIVE DEPLOYMENT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
            >
              <span>INQUIRE ABOUT SIMILAR ARCHITECTURE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#7864C9]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Large Visual Showcase Image */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/10] w-full bg-[#EAEAE8] border border-black/15 overflow-hidden shadow-lg">
            <Image
              src={project.heroImage}
              alt={`${project.title} — ${project.tagline}`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Case Study Details Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909] border-t border-black/10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Executive Overview */}
          <div className="border-b border-black/10 pb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block mb-3 font-semibold font-editorial-sans">
              EXECUTIVE CONTEXT &amp; SCOPE
            </span>
            <p className="font-editorial-sans text-xl sm:text-2xl font-light text-[#242424] leading-relaxed max-w-4xl">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
            {/* The Challenge */}
            <div className="border border-black/10 p-8 sm:p-12 bg-white space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-mono">
                [ 01 ] THE CHALLENGE
              </span>
              <h3 className="font-editorial-sans text-2xl font-bold text-[#090909]">
                Architectural Constraints &amp; Friction
              </h3>
              <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="border border-black/10 p-8 sm:p-12 bg-white space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-mono">
                [ 02 ] THE ARCHITECTURAL SOLUTION
              </span>
              <h3 className="font-editorial-sans text-2xl font-bold text-[#090909]">
                System Design &amp; Implementation
              </h3>
              <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="border border-black/10 p-8 sm:p-12 bg-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold mb-6">
              SYSTEM ARCHITECTURE HIGHLIGHTS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#090909] shrink-0 mt-1" />
                  <span className="text-sm text-[#242424] font-editorial-sans leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Outcomes */}
          <div className="border border-black/10 p-8 sm:p-12 bg-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold mb-6">
              VERIFIED DELIVERABLES &amp; IMPACT
            </span>
            <div className="space-y-4">
              {project.verifiedOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#090909] mt-2 shrink-0" />
                  <span className="text-sm text-[#242424] font-editorial-sans leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-6 border-t border-black/10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold mb-4">
              TECHNOLOGIES EMPLOYED
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 border border-black/10 text-xs font-mono text-[#090909] bg-black/[0.02]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-black/10">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-8 border border-black/10 hover:border-black/40 transition-colors bg-white group flex flex-col justify-between"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#858585] flex items-center gap-1.5 mb-2">
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                PREVIOUS PROJECT
              </span>
              <span className="font-editorial-sans text-xl font-bold text-[#090909]">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="p-8 border border-black/10 hover:border-black/40 transition-colors bg-white group flex flex-col justify-between text-right"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#858585] flex items-center justify-end gap-1.5 mb-2">
                NEXT PROJECT
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-editorial-sans text-xl font-bold text-[#090909]">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <GiantCtaSection />
    </div>
  );
}
