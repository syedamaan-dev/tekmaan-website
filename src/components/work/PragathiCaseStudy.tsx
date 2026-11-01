"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Smartphone,
  Database,
  BarChart3,
  QrCode,
  Sparkles,
  Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnalyticsLink } from "@/components/ui/AnalyticsLink";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";

export function PragathiCaseStudy() {
  const project = siteConfig.projects.find((p) => p.slug === "pragathi-expo");
  const projectIndex = siteConfig.projects.findIndex((p) => p.slug === "pragathi-expo");
  const nextProject = siteConfig.projects[(projectIndex + 1) % siteConfig.projects.length];
  const prevProject =
    siteConfig.projects[(projectIndex - 1 + siteConfig.projects.length) % siteConfig.projects.length];

  if (!project) return null;

  return (
    <article className="flex flex-col w-full bg-[#090909] text-white">
      {/* 1. Header & Hero Section */}
      <header className="relative pt-36 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Back Link */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#858585] hover:text-white transition-colors group font-editorial-sans"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>BACK TO SELECTED WORK</span>
            </Link>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-white text-[#090909] border border-white font-editorial-sans shadow-sm">
              INSTITUTIONAL CLIENT PROJECT
            </span>
            <span className="text-[11px] px-3.5 py-1 rounded-full bg-white/5 text-[#858585] border border-white/10 uppercase tracking-wider font-editorial-sans">
              SR University, Warangal
            </span>
            <span className="text-[11px] px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider font-editorial-sans flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Production Deployment Verified
            </span>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="font-editorial-serif text-hero-giant text-white max-w-5xl mb-6">
            Pragathi Expo Jury Management Portal
          </h1>

          <p className="text-lg sm:text-xl text-[#858585] font-editorial-sans leading-relaxed max-w-3xl mb-8">
            National Innovation Expo Web Hub &amp; Live Mobile Jury Evaluation Console engineered for SR University&apos;s flagship project exposition.
          </p>

          {/* Institutional Role Notice */}
          <div className="p-4 rounded-sm border border-white/15 bg-white/[0.02] max-w-3xl mb-8 text-xs font-editorial-sans text-[#858585] leading-relaxed">
            <span className="text-white font-semibold block mb-1 uppercase tracking-wider">
              Institutional Context &amp; Attribution:
            </span>
            PRAGATHI 2K26 was hosted and operated by SR University, Warangal. TEKMAAN operated as the independent technology engineering partner, architecting and deploying the public event hub, the mobile-first evaluation interface, and the real-time scoring backend.
          </div>

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

            <AnalyticsLink
              href="/contact"
              event="contact_cta_click"
              eventParams={{ button_location: "case_study_hero" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all"
            >
              <span>DISCUSS SIMILAR ARCHITECTURE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#7864C9]" />
            </AnalyticsLink>
          </div>
        </div>
      </header>

      {/* 2. Visual Showcase Image */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909]">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/10] w-full bg-[#EAEAE8] border border-black/15 overflow-hidden shadow-lg">
            <Image
              src="/images/projects/pragathi-expo.jpg"
              alt="SR University PRAGATHI Expo Jury Management Portal — TEKMAAN"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
          <p className="mt-3 text-xs text-[#858585] font-editorial-sans text-center">
            Figure 1: SR University PRAGATHI 2K26 Public Portal and Live Jury Scoring Interface
          </p>
        </div>
      </section>

      {/* 3. Deep-Dive Technical Case Study Body */}
      <main className="py-24 px-6 sm:px-8 lg:px-12 bg-[#F8F8F6] text-[#090909] border-t border-black/10">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Section 01: Project Overview */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              01 // PROJECT OVERVIEW
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Digitizing a High-Concurrency National University Expo
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#242424] font-editorial-sans leading-relaxed">
                <p>
                  SR University&apos;s PRAGATHI is a flagship national-level project exposition and hackathon uniting hundreds of student innovators, faculty advisors, and distinguished industry delegates. The event presents multi-disciplinary prototypes spanning Artificial Intelligence, IoT, Mechanical Systems, and Biotechnology.
                </p>
                <p>
                  TEKMAAN was commissioned to engineer a synchronized digital platform capable of operating in two distinct operational environments: a high-traffic public web hub handling student registrations, problem statements, and schedules, paired with an isolated, touch-optimized Jury Evaluation System deployed on handheld mobile devices across physical exhibition stalls.
                </p>
              </div>
              <div className="lg:col-span-4 bg-white p-6 border border-black/10 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#858585] block">
                  AT A GLANCE
                </span>
                <ul className="space-y-3 text-xs font-editorial-sans text-[#242424]">
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-[#858585]">Institution:</span>
                    <span className="font-semibold">SR University, Warangal</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-[#858585]">Domain:</span>
                    <span className="font-semibold">Higher Education / Expo</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-[#858585]">Role:</span>
                    <span className="font-semibold">Lead Software Architect</span>
                  </li>
                  <li className="flex justify-between border-b border-black/5 pb-2">
                    <span className="text-[#858585]">Primary Client Interface:</span>
                    <span className="font-semibold">Vite + React (Tablet-First)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#858585]">Deployment Status:</span>
                    <span className="text-emerald-700 font-semibold">Active Production</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 02: Problem Being Solved */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              02 // THE PROBLEM BEING SOLVED
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              The Friction of Physical Clipboards and Spreadsheet Delays
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="p-8 bg-white border border-black/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#090909] font-mono text-xs font-bold">
                  01
                </div>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">
                  Paper Scoring Latency
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Traditional evaluation relied on printed sheets physically transported to a data-entry room. Compiling final rankings across dozens of judges took hours after the expo ended, frequently causing award ceremony delays.
                </p>
              </div>

              <div className="p-8 bg-white border border-black/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#090909] font-mono text-xs font-bold">
                  02
                </div>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">
                  In-Venue Wi-Fi Fragility
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Convention centers packed with hundreds of laptops and mobile phones experience extreme cellular congestion and intermittent Wi-Fi drops. Standard cloud forms lose filled scores when connections flicker mid-evaluation.
                </p>
              </div>

              <div className="p-8 bg-white border border-black/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#090909] font-mono text-xs font-bold">
                  03
                </div>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">
                  Jury Assignment Overlap
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Without live coordination, judges often accidentally visited the same stall twice while other stalls remained unjudged until closing time. Real-time stall completion visibility was critical.
                </p>
              </div>
            </div>
          </section>

          {/* Section 03: System Architecture */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              03 // SYSTEM ARCHITECTURE
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Decoupled Dual-Portal Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#242424] font-editorial-sans max-w-3xl leading-relaxed">
              To eliminate single-point-of-failure risks, the system was decoupled into independent public and operational subsystems. Public event surges cannot degrade or slow down the critical live jury scoring pipeline.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="p-8 bg-white border border-black/10 space-y-4">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-[#4878E8]" />
                  <h3 className="font-editorial-sans text-xl font-bold text-[#090909]">
                    Public Event &amp; Schedule Portal
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed">
                  High-speed responsive web hub serving thousands of student visitors. Delivers registration details, track rules, interactive stall directories, venue floor maps, and real-time announcement banners with zero database round-trips for static assets.
                </p>
                <div className="pt-3 border-t border-black/5 flex flex-wrap gap-2 text-[11px] font-mono text-[#090909]">
                  <span className="px-2.5 py-1 bg-black/5">Edge CDN</span>
                  <span className="px-2.5 py-1 bg-black/5">Static Prerendering</span>
                  <span className="px-2.5 py-1 bg-black/5">Sub-50ms TTFB</span>
                </div>
              </div>

              <div className="p-8 bg-white border border-black/10 space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-[#7864C9]" />
                  <h3 className="font-editorial-sans text-xl font-bold text-[#090909]">
                    Mobile-First Jury Evaluation Engine
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed">
                  Standalone, token-authenticated mobile web application engineered explicitly for tablet and smartphone viewports. Features local state caching, rapid touch scoring steppers, and asynchronous write queues to guarantee zero loss of scores during connection drops.
                </p>
                <div className="pt-3 border-t border-black/5 flex flex-wrap gap-2 text-[11px] font-mono text-[#090909]">
                  <span className="px-2.5 py-1 bg-black/5">Firestore Write Queues</span>
                  <span className="px-2.5 py-1 bg-black/5">Offline Resilient</span>
                  <span className="px-2.5 py-1 bg-black/5">No Horizontal Scroll</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 04: Jury Assignment & Evaluation Workflow */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              04 // JURY ASSIGNMENT &amp; EVALUATION WORKFLOW
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Frictionless In-Aisle Evaluation Cycle
            </h2>
            <p className="text-sm sm:text-base text-[#242424] font-editorial-sans max-w-3xl leading-relaxed">
              Jurors are allocated distinct domains aligned with their academic and industry specializations. When evaluating a project in the physical hall, the workflow is streamlined into four swift actions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 bg-white border border-black/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#7864C9] font-bold">STEP 01</span>
                  <QrCode className="w-4 h-4 text-[#858585]" />
                </div>
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Stall Identification
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Juror taps the stall number (e.g. A-14) or scans the physical QR code on the stall badge to immediately pull up the project card, abstract, and student names.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#7864C9] font-bold">STEP 02</span>
                  <Award className="w-4 h-4 text-[#858585]" />
                </div>
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Rubric Steppers
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Touch-friendly +/- increment steppers and quick preset pills (+5, +10, Max) allow scoring across Innovation, Technical Depth, Feasibility, and Presentation in seconds.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#7864C9] font-bold">STEP 03</span>
                  <Sparkles className="w-4 h-4 text-[#858585]" />
                </div>
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Real-Time Tier Grade
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  The client engine computes aggregate marks on-the-fly, displaying live grade badges (A+, A, B, C) ensuring evaluators spot accidental outliers before submission.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#7864C9] font-bold">STEP 04</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Synchronous Commit
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Submission instantly writes to local device storage and simultaneously commits to Firestore, updating the central admin completion counter without page reloads.
                </p>
              </div>
            </div>
          </section>

          {/* Section 05: Domain-Based Evaluation & Team Management */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              05 // DOMAIN TAXONOMY &amp; PARTICIPANT MANAGEMENT
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Multi-Disciplinary Stall Organization
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
              <div className="lg:col-span-6 space-y-4 text-sm text-[#242424] font-editorial-sans leading-relaxed">
                <p>
                  To manage hundreds of diverse participant teams across engineering disciplines, TEKMAAN implemented a structured domain taxonomy:
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white border border-black/10 text-xs font-semibold">
                    • AI, Data &amp; Neural Systems
                  </div>
                  <div className="p-3 bg-white border border-black/10 text-xs font-semibold">
                    • IoT &amp; Embedded Hardware
                  </div>
                  <div className="p-3 bg-white border border-black/10 text-xs font-semibold">
                    • Robotics &amp; Mechanical Design
                  </div>
                  <div className="p-3 bg-white border border-black/10 text-xs font-semibold">
                    • Smart Healthcare Devices
                  </div>
                  <div className="p-3 bg-white border border-black/10 text-xs font-semibold">
                    • Sustainable Energy &amp; EV
                  </div>
                  <div className="p-3 bg-white border border-black/10 text-xs font-semibold">
                    • Web, Mobile &amp; FinTech
                  </div>
                </div>
                <p className="text-xs text-[#858585] pt-2">
                  Each physical stall was mapped to a unique identifier (e.g. B-08) encoding domain code, row location, and assigned juror team to prevent confusion during judging rounds.
                </p>
              </div>

              <div className="lg:col-span-6 bg-white p-8 border border-black/10 space-y-4">
                <h3 className="font-editorial-sans text-xl font-bold text-[#090909]">
                  Standardized 4-Pillar Scoring Rubric
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans">
                  Scored out of 100 points to ensure equitable judging across theoretical and hardware projects:
                </p>
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Innovation &amp; Novelty</span>
                      <span className="font-mono">25 Points</span>
                    </div>
                    <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#4878E8] h-full w-[25%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Technical Execution &amp; Depth</span>
                      <span className="font-mono">25 Points</span>
                    </div>
                    <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#7864C9] h-full w-[25%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Practical Feasibility &amp; Impact</span>
                      <span className="font-mono">25 Points</span>
                    </div>
                    <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#D64B89] h-full w-[25%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Presentation &amp; Stall Demonstration</span>
                      <span className="font-mono">25 Points</span>
                    </div>
                    <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[25%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 06: Admin Control & Live Dashboard */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              06 // ADMIN CONTROLS &amp; LIVE AUDIT
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Centralized Operational Command
            </h2>
            <p className="text-sm sm:text-base text-[#242424] font-editorial-sans max-w-3xl leading-relaxed">
              While jurors walked the venue, event coordinators utilized the administrative console to oversee the expo in real time:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-white border border-black/10 space-y-2">
                <BarChart3 className="w-5 h-5 text-[#090909]" />
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Live Completion Tracker
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans">
                  Real-time progress bars indicating which departments and stalls had completed primary and secondary jury evaluations.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-2">
                <ShieldAlert className="w-5 h-5 text-[#090909]" />
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Variance &amp; Outlier Alerts
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans">
                  Automated flag triggers when two independent jurors scored the same stall with a variance exceeding 20%, prompting lead judge reviews.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-2">
                <Database className="w-5 h-5 text-[#090909]" />
                <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                  Instant Ledger Export
                </h3>
                <p className="text-xs text-[#858585] font-editorial-sans">
                  One-click export of sanitized CSV score tallies, category winners, and juror audit trails for the university executive committee.
                </p>
              </div>
            </div>
          </section>

          {/* Section 07: Actual Technology Stack */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              07 // ACTUAL TECHNOLOGY STACK
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Engineered for Speed, Reliability, and Zero Bloat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="p-6 bg-white border border-black/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7864C9]">FRONTEND ENGINE</span>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">React 19 &amp; Vite</h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Chosen for instant HMR during rapid field iterations and an ultra-lean bundle footprint that boots in milliseconds on mobile browsers.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7864C9]">TYPE INTEGRITY</span>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">TypeScript</h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Strict type contracts defining juror permissions, stall attributes, and scoring limits, eliminating runtime null pointer bugs.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7864C9]">REAL-TIME CLOUD</span>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">Firebase Firestore</h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Serverless document datastore providing snapshot listeners for real-time admin metrics and partitioned document concurrency.
                </p>
              </div>

              <div className="p-6 bg-white border border-black/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7864C9]">STYLING &amp; LAYOUT</span>
                <h3 className="font-editorial-sans text-lg font-bold text-[#090909]">Tailwind CSS</h3>
                <p className="text-xs text-[#858585] font-editorial-sans leading-relaxed">
                  Utility-first design delivering an ergonomically calibrated mobile experience with zero layout shift and touch target compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 08: Engineering Challenges & Technical Solutions */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              08 // CHALLENGES &amp; TECHNICAL SOLUTIONS
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Solving Real-World Venue Constraints
            </h2>

            <div className="space-y-6 pt-4">
              <div className="p-8 bg-white border border-black/10 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#7864C9]">
                  <span>CHALLENGE 01</span>
                  <span>{"//"}</span>
                  <span className="text-[#090909] font-bold">Unstable Venue Connectivity &amp; Packet Loss</span>
                </div>
                <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed">
                  <strong className="text-[#090909]">Technical Solution:</strong> Engineered a two-tier persistence layer. Every rubric adjustment immediately writes to the browser&apos;s Web Storage before initiating a network request. If Firestore connectivity drops, scores are queued locally and synchronized automatically once network signals recover, guaranteeing zero lost marks.
                </p>
              </div>

              <div className="p-8 bg-white border border-black/10 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#7864C9]">
                  <span>CHALLENGE 02</span>
                  <span>{"//"}</span>
                  <span className="text-[#090909] font-bold">Database Contention on Simultaneous Submissions</span>
                </div>
                <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed">
                  <strong className="text-[#090909]">Technical Solution:</strong> Instead of writing scores into a shared mutable stall document where simultaneous judges could overwrite each other, each evaluation was partitioned into an independent document keyed by <code className="bg-black/5 px-1 py-0.5 rounded text-[11px] font-mono">evaluations/[stallId_jurorId]</code>. Aggregate scores are computed idempotently by Firestore aggregation queries.
                </p>
              </div>

              <div className="p-8 bg-white border border-black/10 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#7864C9]">
                  <span>CHALLENGE 03</span>
                  <span>{"//"}</span>
                  <span className="text-[#090909] font-bold">Evaluator Fatigue in Bright Outdoor Stalls</span>
                </div>
                <p className="text-xs sm:text-sm text-[#858585] font-editorial-sans leading-relaxed">
                  <strong className="text-[#090909]">Technical Solution:</strong> Designed a dedicated high-contrast layout specifically calibrated for glare and bright ambient outdoor light. Implemented minimum 48px touch targets, quick +5/+10 increment pills, and eliminated nested multi-step modals that cause frustration during rapid walkthroughs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 09: Verified Outcomes */}
          <section className="border-b border-black/10 pb-16 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block font-semibold font-editorial-sans">
              09 // VERIFIED PROJECT OUTCOMES
            </span>
            <h2 className="font-editorial-serif text-3xl sm:text-4xl text-[#090909]">
              Documented Technical Delivery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white border border-black/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                    Official Live Production Deployment
                  </h3>
                  <p className="text-xs text-[#858585] font-editorial-sans mt-1">
                    Deployed at <a href="https://www.sruprojectexpo.in/" target="_blank" rel="noopener noreferrer" className="underline text-[#090909] font-medium">sruprojectexpo.in</a>, serving live traffic throughout the national university expo cycle.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-black/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                    Zero Data Loss Across All Evaluated Stalls
                  </h3>
                  <p className="text-xs text-[#858585] font-editorial-sans mt-1">
                    100% of mobile jury scorecards were captured and securely committed to Firestore despite dense venue network fluctuations.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-black/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                    Immediate Post-Expo Finalization
                  </h3>
                  <p className="text-xs text-[#858585] font-editorial-sans mt-1">
                    Automated real-time scoring eliminated hours of manual spreadsheet reconciliation, enabling the valedictory award committee to finalize rankings immediately.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-black/10 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-editorial-sans text-base font-bold text-[#090909]">
                    Handheld Tablet Optimization
                  </h3>
                  <p className="text-xs text-[#858585] font-editorial-sans mt-1">
                    Delivered a zero-horizontal-overflow layout that enabled 50+ faculty and external judges to evaluate walking between physical stalls.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Natural Conversion Section (Requirement 3) */}
          <section className="p-8 sm:p-12 border border-black/15 bg-gradient-to-br from-white via-white to-black/[0.03] space-y-6">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#7864C9] block font-semibold font-editorial-sans">
                STUDIO COLLABORATION
              </span>
              <h2 className="font-editorial-serif text-2xl sm:text-4xl text-[#090909]">
                Need a Custom Evaluation Platform or University Dashboard?
              </h2>
              <p className="text-sm sm:text-base text-[#858585] font-editorial-sans leading-relaxed">
                Whether orchestrating a national academic hackathon, technical conference evaluation system, or enterprise operational dashboard, TEKMAAN engineers high-reliability, custom platforms built to withstand real-world stress.
              </p>
              <div className="pt-2">
                <AnalyticsLink
                  href="/contact"
                  event="contact_cta_click"
                  eventParams={{ button_location: "case_study_conversion" }}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#090909] text-white hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] font-editorial-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-lg"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </AnalyticsLink>
              </div>
            </div>
          </section>

          {/* Section 11: Navigation Between Projects */}
          <nav aria-label="Project pagination" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/10">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-8 border border-black/10 hover:border-black/40 transition-colors bg-white group flex flex-col justify-between"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#858585] flex items-center gap-1.5 mb-2 font-editorial-sans">
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
              <span className="text-xs uppercase tracking-[0.2em] text-[#858585] flex items-center justify-end gap-1.5 mb-2 font-editorial-sans">
                NEXT PROJECT
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-editorial-sans text-xl font-bold text-[#090909]">
                {nextProject.title}
              </span>
            </Link>
          </nav>
        </div>
      </main>

      {/* Global Bottom Giant CTA */}
      <GiantCtaSection />
    </article>
  );
}

