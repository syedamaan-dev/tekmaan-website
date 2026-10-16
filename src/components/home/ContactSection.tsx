"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Loader2, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Website Design",
    budget: "$3,000 - $5,000",
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
    } catch (err: any) {
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
      service: "Website Design",
      budget: "$3,000 - $5,000",
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
      className="relative w-full bg-[#F8F8F6] text-[#090909] pt-24 sm:pt-36 pb-24 sm:pb-36 px-6 sm:px-8 lg:px-12 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black/10">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#858585] font-editorial-sans block mb-4">
              08 / DIRECT INQUIRIES &amp; ESTIMATES
            </span>
            <h2 className="font-editorial-serif text-section-giant text-[#090909]">
              LET'S START
              <br />
              A PROJECT.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#858585] leading-relaxed font-editorial-sans">
              Have an upcoming product launch, website redesign, or bespoke portal?
              Fill out the form below or contact us directly on email or WhatsApp.
            </p>
          </div>
        </div>

        {/* Content Layout: Contact Info Left, Form Right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct channels and reassurance */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block mb-2 font-semibold">
                DIRECT EMAIL
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-editorial-sans text-xl sm:text-2xl font-bold text-[#090909] hover:text-[#4878E8] transition-colors flex items-center gap-2"
              >
                <span>{siteConfig.contact.email}</span>
                <ArrowUpRight className="w-5 h-5 text-[#858585]" />
              </a>
              <p className="text-xs text-[#858585] mt-1">Average response time: under 24 hours</p>
            </div>

            {siteConfig.contact.whatsappNumber && (
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#858585] block mb-2 font-semibold">
                  DIRECT WHATSAPP
                </span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi%20TEKMAAN,%20I'd%20like%20to%20discuss%20a%20new%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-editorial-sans text-xl sm:text-2xl font-bold text-[#090909] hover:text-[#4878E8] transition-colors flex items-center gap-2"
                >
                  <span>{siteConfig.contact.whatsappNumber}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#858585]" />
                </a>
                <p className="text-xs text-[#858585] mt-1">For urgent project requirements &amp; quick discovery</p>
              </div>
            )}

            <div className="border border-black/10 p-6 space-y-3 bg-white/50">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#090909] block">
                WHAT HAPPENS NEXT?
              </span>
              <ol className="space-y-2 text-xs text-[#242424] font-editorial-sans list-decimal list-inside">
                <li>We review your project goals, scope, and target timeline.</li>
                <li>We schedule a 20-minute direct technical discussion.</li>
                <li>You receive a fixed-price architectural proposal within 48h.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Functional Clean Light Form */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-12 shadow-sm">
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#090909]">
                  Inquiry Received.
                </h3>
                <p className="text-sm text-[#858585] font-editorial-sans max-w-md mx-auto leading-relaxed">
                  {statusMessage}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-black/20 text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] hover:bg-black hover:text-white transition-all cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="p-4 rounded-none border border-red-200 bg-red-50 text-red-800 text-xs flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-black/15 bg-[#F8F8F6] text-sm text-[#090909] placeholder:text-[#858585]/60 focus:outline-none focus:border-[#090909] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alexander@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-black/15 bg-[#F8F8F6] text-sm text-[#090909] placeholder:text-[#858585]/60 focus:outline-none focus:border-[#090909] transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Type & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] block">
                      Project Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-black/15 bg-[#F8F8F6] text-sm text-[#090909] focus:outline-none focus:border-[#090909] transition-colors"
                    >
                      <option value="Website Design">Website Design &amp; Digital Flagship</option>
                      <option value="Full-Stack Web App">Full-Stack Web Application</option>
                      <option value="UI/UX Prototyping">UI/UX Design &amp; Prototyping</option>
                      <option value="Custom Portals & Dashboards">Custom Portal &amp; Telemetry Dashboard</option>
                      <option value="AI Integration">AI Integration &amp; Model Reliability</option>
                      <option value="Maintenance & SLA">Maintenance &amp; SLA Retainer</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] block">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-black/15 bg-[#F8F8F6] text-sm text-[#090909] focus:outline-none focus:border-[#090909] transition-colors"
                    >
                      <option value="Under $3,000">Under $3,000</option>
                      <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-semibold text-[#090909] block">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about the project: primary objectives, current state, key features, and desired timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-black/15 bg-[#F8F8F6] text-sm text-[#090909] placeholder:text-[#858585]/60 focus:outline-none focus:border-[#090909] transition-colors resize-y min-h-[110px]"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#090909] text-white font-editorial-sans text-xs uppercase tracking-[0.25em] font-bold hover:bg-gradient-to-r hover:from-[#4878E8] hover:via-[#7864C9] hover:to-[#D64B89] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT INQUIRY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
