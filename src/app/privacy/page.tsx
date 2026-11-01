import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | TEKMAAN",
  description:
    "Read TEKMAAN's privacy policy and client data confidentiality practices for digital technology, web engineering, and software projects.",
  alternates: {
    canonical: "https://www.tekmaan.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-[#090909] text-white min-h-screen">
      <section className="pt-36 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#858585] hover:text-white transition-colors mb-8 group font-editorial-sans"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO HOME</span>
          </Link>

          <h1 className="font-editorial-serif text-4xl sm:text-5xl text-white mb-4">
            Privacy Policy.
          </h1>

          <p className="text-xs uppercase tracking-[0.2em] text-[#858585] mb-12 font-mono">
            LAST REVISED: OCTOBER 2026 // TEKMAAN STUDIO
          </p>

          <div className="space-y-10 text-sm sm:text-base text-[#858585] font-editorial-sans leading-relaxed border-t border-white/10 pt-10">
            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                01. Core Philosophy
              </h2>
              <p>
                TEKMAAN operates strictly as an independent digital engineering studio. We do not sell, rent, monetize, or broker personal information. Any information you share through our contact channels is used solely to evaluate, scope, and execute our client project engagements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                02. Information Collected
              </h2>
              <p>
                When you initiate an inquiry via our contact form or email, we collect the details you voluntarily provide:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#F8F8F6]">
                <li>Full name and work email address</li>
                <li>Company or organization name (if provided)</li>
                <li>Project scope, budget range, and technical requirements</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                03. Data Transmission &amp; Resend Gateway
              </h2>
              <p>
                Project inquiries submitted through our web forms are transmitted securely via TLS encryption to our private studio inbox using Resend. We do not retain marketing tracking cookies or share submissions with third-party advertising networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-editorial-sans text-xl font-bold text-white">
                04. Contact Regarding Data
              </h2>
              <p>
                To request deletion or verification of any communications, contact our studio directly at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white underline hover:text-[#7864C9]"
                >
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
