"use client";

import React from "react";
import { ExternalLink, CheckCircle, Shield, Sparkles, Activity, Layers, Cpu, Award } from "lucide-react";

interface ProjectPreviewProps {
  slug: string;
}

export function ProjectPreviewVisual({ slug }: ProjectPreviewProps) {
  if (slug === "pragathi-expo") {
    return (
      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#0A192F] via-[#002852] to-[#001733] rounded-2xl p-5 border border-white/10 flex flex-col justify-between font-sans text-white overflow-hidden relative group">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#004182]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Mock Browser Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-slate-300 font-mono ml-2">sruprojectexpo.in / jury-portal</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Deployment
          </span>
        </div>

        {/* Split Expo Hub & Tablet Jury Interface Simulation */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 flex-1">
          {/* Left Column: Expo Event Information */}
          <div className="sm:col-span-6 bg-[#001F3F]/60 rounded-xl p-4 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400">SR University</span>
                <span className="text-[10px] text-slate-300">Warangal, India</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-1">PRAGATHI 2K26</h4>
              <p className="text-xs text-slate-300 leading-snug">National Level Project Expo & Grand Hackathon Platform</p>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-white/5 p-2 rounded-lg">
                <p className="text-slate-400 text-[10px]">Architecture</p>
                <p className="font-semibold text-white">Dual Interface</p>
              </div>
              <div className="bg-white/5 p-2 rounded-lg">
                <p className="text-slate-400 text-[10px]">Judging System</p>
                <p className="font-semibold text-[#41C9D7]">Real-Time Rubrics</p>
              </div>
            </div>
          </div>

          {/* Right Column: Tablet Jury Scorecard Simulation */}
          <div className="sm:col-span-6 bg-[#001830]/90 rounded-xl p-4 border border-[#41C9D7]/30 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] font-bold bg-[#004182] text-white uppercase tracking-wider">
              Jury Tablet View
            </div>

            <div>
              <span className="text-[10px] text-[#41C9D7] font-mono">STALL #A-14 • SMART HEALTHCARE</span>
              <p className="text-xs font-semibold text-white mt-0.5">Non-Invasive Diagnostic Sensor</p>
            </div>

            {/* Simulated Live Rubric Stepper */}
            <div className="space-y-2 my-2 text-[11px]">
              <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                <span className="text-slate-300 text-[10px]">Innovation & Novelty</span>
                <span className="font-mono font-bold text-[#41C9D7]">24 / 25</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                <span className="text-slate-300 text-[10px]">Technical Depth</span>
                <span className="font-mono font-bold text-[#41C9D7]">23 / 25</span>
              </div>
            </div>

            {/* Total Score & Grade Tier */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-[10px] text-slate-400">Aggregate Score</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">GRADE A+</span>
                <span className="font-mono font-bold text-white text-sm">94/100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlights Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" /> Zero Lag Mobile Judging
            </span>
            <span className="flex items-center gap-1 text-[#41C9D7]">
              <Award className="w-3.5 h-3.5" /> High-Concurrency Expo Portal
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Next.js • Tailwind • Firebase</span>
        </div>
      </div>
    );
  }

  if (slug === "aegis-x") {
    return (
      <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#0B1020] via-[#111A33] to-[#0D152A] rounded-2xl p-5 border border-white/10 flex flex-col justify-between font-sans text-white overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5266F5]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Mock Browser Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-slate-300 font-mono ml-2">aegis-x / telemetry / model-v1</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
            <Shield className="w-3 h-3" />
            Engineering R&D Platform
          </span>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 mb-4">
          <div className="bg-[#182548]/60 p-3.5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">OOD Score</span>
              <Activity className="w-3.5 h-3.5 text-[#41C9D7]" />
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-white">0.038</p>
              <p className="text-[10px] text-emerald-400 font-medium">In-Distribution Safe</p>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-[#41C9D7] h-full w-[24%]" />
            </div>
          </div>

          <div className="bg-[#182548]/60 p-3.5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Uncertainty</span>
              <Sparkles className="w-3.5 h-3.5 text-[#5266F5]" />
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-white">0.12</p>
              <p className="text-[10px] text-indigo-300 font-medium">Epistemic Bound</p>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-[#5266F5] h-full w-[38%]" />
            </div>
          </div>

          <div className="bg-[#182548]/60 p-3.5 rounded-xl border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Feature Drift</span>
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div>
              <p className="font-mono text-xl font-bold text-white">K-S 0.04</p>
              <p className="text-[10px] text-slate-300 font-medium">No Drift Detected</p>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-emerald-400 h-full w-[16%]" />
            </div>
          </div>
        </div>

        {/* Bottom Signal Fusion Banner */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] text-slate-300">Model Reliability Wrapper: Active</span>
          </div>
          <span className="text-[11px] text-[#41C9D7] font-semibold">Model-Agnostic Adapter</span>
        </div>
      </div>
    );
  }

  // Default: AEGIS-PRISM
  return (
    <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#080D1A] via-[#101A33] to-[#0A1224] rounded-2xl p-5 border border-white/10 flex flex-col justify-between font-sans text-white overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Mock Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-slate-300 font-mono ml-2">aegis-prism / stress-testing / boundary</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
          <Cpu className="w-3 h-3" />
          Research & Development
        </span>
      </div>

      {/* Simulated Boundary Rupture Graph */}
      <div className="bg-[#14203D]/70 p-4 rounded-xl border border-white/10 flex-1 flex flex-col justify-between mb-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-200">Neural Boundary Perturbation Response</span>
          <span className="text-[10px] text-slate-400 font-mono">ε = 0.05 ... 0.35</span>
        </div>

        {/* Visual Simulated SVG Curves */}
        <div className="w-full h-24 relative overflow-hidden flex items-end">
          <svg className="w-full h-full" viewBox="0 0 300 80" fill="none" preserveAspectRatio="none">
            {/* Guide lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            {/* Safe Model Boundary */}
            <path
              d="M0,65 C60,60 120,40 180,35 C240,30 270,25 300,20"
              stroke="#41C9D7"
              strokeWidth="2.5"
            />
            {/* Perturbed Stress Collapse */}
            <path
              d="M0,68 C70,66 140,55 190,48 C230,65 270,72 300,75"
              stroke="#5266F5"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-0.5 bg-[#41C9D7]" />
            <span>Robust Decision Margin</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-0.5 bg-[#5266F5]" />
            <span>Adversarial Stress Curve</span>
          </div>
        </div>
      </div>

      {/* Footer Details */}
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="text-[11px] text-slate-400">High-dimensional mathematical verification</span>
        <span className="text-[11px] font-mono text-[#41C9D7]">PyTorch • Neuromorphic AI</span>
      </div>
    </div>
  );
}
