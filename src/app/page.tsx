import React from "react";
import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TeamSection } from "@/components/home/TeamSection";
import { StudioApproachSection } from "@/components/home/StudioApproachSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#090909]">
      {/* A. HERO — Crafting Digital Experiences */}
      <Hero />

      {/* B. THIN PROOF STRIP — Refined horizontal validation */}
      <ProofStrip />

      {/* C. SELECTED WORK — Top 3 genuine projects near the top */}
      <SelectedWorkSection isHomepage={true} />

      {/* D. SERVICES — 3 consolidated offerings */}
      <ServicesSection />

      {/* E. PEOPLE BEHIND THIS — Real studio team */}
      <TeamSection />

      {/* F. COMPACT STUDIO APPROACH — Manifesto + 1-row process */}
      <StudioApproachSection />

      {/* G. ONE FINAL CTA + INQUIRY FORM */}
      <ContactSection />
    </div>
  );
}
