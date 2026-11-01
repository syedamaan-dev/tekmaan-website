"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Loader2, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/ui/Magnetic";
import { trackEvent } from "@/lib/analytics";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Websites & E-commerce",
    budget: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.details) {
          const fieldErrors: Record<string, string> = {};
          for (const key of Object.keys(result.details)) {
            fieldErrors[key] = result.details[key][0];
          }
          setErrors(fieldErrors);
        }
        setSubmitStatus("error");
        setStatusMessage(
          result.message || result.error || "Unable to send inquiry. Please try again or reach out by email."
        );
        return;
      }

      setSubmitStatus("success");
      setStatusMessage(result.message || "Your project inquiry has been received!");
      trackEvent("generate_lead", {
        button_location: "home_contact_section",
        service_category: formData.service || "Websites & E-commerce",
        lead_type: "contact_inquiry",
      });
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Network error encountered. Please check your connection or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      service: "Websites & E-commerce",
      budget: "",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setSubmitStatus("idle");
    setStatusMessage("");
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#090909] text-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#4878E8]/10 via-[#7864C9]/15 to-[#D64B89]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-3">
              05 // DIRECT INQUIRIES &amp; ESTIMATES
            </span>
            <h2 className="font-editorial-serif text-section-giant text-white">
              LET&apos;S START
              <br />
              <span className="gradient-accent">A PROJECT.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              Have an upcoming product launch, website build, or custom platform?
              Connect directly with our senior engineer via the form below, email, or WhatsApp.
            </p>
          </div>
        </div>

        {/* Content Layout: Direct Details Left, Form Right */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct channels and reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-white/10 p-6 sm:p-7 bg-white/[0.015] hover:border-white/25 transition-colors duration-300">
              <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block mb-2 font-semibold">
                DIRECT STUDIO EMAIL
              </span>
              <Magnetic strength={0.2}>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => trackEvent("email_click", { button_location: "contact_section" })}
                  className="font-editorial-sans text-xl sm:text-2xl font-bold text-white hover:text-[#7864C9] transition-colors flex items-center gap-2 group py-1"
                >
                  <span>{siteConfig.contact.email}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#858585] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
              <p className="text-xs text-[#858585] mt-2">
                Average response time: under 24 hours. Directly handled by senior engineering.
              </p>
            </div>

            <div className="border border-white/10 p-6 sm:p-7 bg-white/[0.015] hover:border-white/25 transition-colors duration-300">
              <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block mb-2 font-semibold">
                PHONE &amp; WHATSAPP
              </span>
              <Magnetic strength={0.2}>
                <a
                  href={siteConfig.contact.whatsappLink}
                  onClick={() => trackEvent("whatsapp_click", { button_location: "contact_section" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-editorial-sans text-xl sm:text-2xl font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2 py-1"
                >
                  <span>+91 9063127547</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    WHATSAPP ↗
                  </span>
                </a>
              </Magnetic>
              <p className="text-xs text-[#858585] mt-2">
                Available for direct calls and instant project discussions on WhatsApp.
              </p>
            </div>

            <div className="border border-white/10 p-6 space-y-3 bg-white/[0.01]">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white block">
                WHAT HAPPENS NEXT?
              </span>
              <ol className="space-y-2 text-xs text-[#858585] font-editorial-sans list-decimal list-inside">
                <li>We review your goals, scope, and target launch window.</li>
                <li>We schedule a 20-minute direct technical discussion.</li>
                <li>You receive a fixed-price architectural proposal within 48h.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Functional Clean Dark Form */}
          <div className="lg:col-span-7 border border-white/10 p-6 sm:p-10 bg-white/[0.015]">
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-white">
                  Inquiry Transmitted.
                </h3>
                <p className="text-sm text-[#858585] font-editorial-sans max-w-md mx-auto leading-relaxed">
                  {statusMessage}
                </p>
                <Magnetic strength={0.3}>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:bg-white hover:text-[#090909] transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </Magnetic>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot for spam bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {submitStatus === "error" && (
                  <div className="p-4 rounded-none border border-red-500/30 bg-red-500/10 text-red-200 text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white/10 bg-white/[0.03] text-sm text-white placeholder:text-[#858585]/60 focus:outline-none focus:border-[#7864C9] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alexander@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white/10 bg-white/[0.03] text-sm text-white placeholder:text-[#858585]/60 focus:outline-none focus:border-[#7864C9] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Type & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90 block">
                      Service Category *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white/10 bg-[#121212] text-sm text-white focus:outline-none focus:border-[#7864C9] transition-colors"
                    >
                      <option value="Websites & E-commerce">Websites &amp; E-commerce</option>
                      <option value="Business Platforms & Custom Software">Business Platforms &amp; Custom Software</option>
                      <option value="AI & Automation">AI &amp; Automation</option>
                      <option value="Full-Stack Web App">Full-Stack Web App</option>
                      <option value="UI/UX Prototyping">UI/UX Design &amp; Tokens</option>
                      <option value="Maintenance & SLA">Maintenance &amp; SLA Support</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90 block">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-white/10 bg-[#121212] text-sm text-white focus:outline-none focus:border-[#7864C9] transition-colors"
                    >
                      <option value="">Select budget range (optional)</option>
                      <option value="Under ₹10,000">Under ₹10,000</option>
                      <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90 block">
                    Project Scope &amp; Ambition *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about the project: primary objectives, current state, key features, and desired timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-white/10 bg-white/[0.03] text-sm text-white placeholder:text-[#858585]/60 focus:outline-none focus:border-[#7864C9] transition-colors resize-y min-h-[100px]"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Magnetic strength={0.15}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-[#090909] font-editorial-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.99] shadow-[0_0_30px_rgba(255,255,255,0.15)] group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>TRANSMITTING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
