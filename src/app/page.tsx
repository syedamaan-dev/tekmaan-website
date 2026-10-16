import React from "react";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { GiantCtaSection } from "@/components/home/GiantCtaSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 01 — CINEMATIC HERO (#090909 Dark, Reference 2) */}
      <Hero />

      {/* SECTION 02 — INTRODUCTION (#090909 to #F8F8F6 transition) */}
      <IntroSection />

      {/* SECTION 03 — SELECTED WORK (#F8F8F6 White Minimalist, Reference 1) */}
      <SelectedWorkSection />

      {/* SECTION 04 — SERVICES (#090909 Dark Editorial Rows) */}
      <ServicesSection />

      {/* SECTION 05 — ABOUT TEKMAAN (#F8F8F6 White Editorial) */}
      <AboutSection />

      {/* SECTION 06 — CREATIVE PROCESS (#090909 Dark 4-Step Timeline) */}
      <ProcessSection />

      {/* SECTION 07 — TECHNOLOGY & CAPABILITIES (#F8F8F6 White Minimal Matrix) */}
      <CapabilitiesSection />

      {/* SECTION 08 — WHY WORK WITH US (#090909 Editorial B&W Composition) */}
      <WhyUsSection />

      {/* SECTION 09 — GIANT CALL TO ACTION (#090909 Near-black with gradient on EXTRAORDINARY) */}
      <GiantCtaSection />

      {/* SECTION 10 — CONTACT (#F8F8F6 Clean Light Form & Direct Reach) */}
      <ContactSection />
    </div>
  );
}
