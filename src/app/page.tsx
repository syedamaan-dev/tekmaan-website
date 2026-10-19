import React from "react";
import { Hero } from "@/components/home/Hero";
import { ServiceTicker } from "@/components/home/ServiceTicker";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TeamSection } from "@/components/home/TeamSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 01. Hero Section */}
      <Hero />

      {/* 02. Studio Values Marquee Ticker */}
      <ServiceTicker />

      {/* 03. About Us Section */}
      <AboutSection />

      {/* 04. Services Section (6 Official Services) */}
      <ServicesSection />

      {/* 05. Process Section (5 Step Timeline) */}
      <ProcessSection />

      {/* 06. Team Section ("People behind the pixels" with 3 Real Photos) */}
      <TeamSection />

      {/* 07. Contact Section (Closing CTA & Working SMTP Form) */}
      <ContactSection />
    </div>
  );
}
