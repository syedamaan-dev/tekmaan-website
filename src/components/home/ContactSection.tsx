"use client";

import React, { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageSquare,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "Website Design & Development",
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
          result.message || "Failed to send your message. Please check the form and try again."
        );
      } else {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you! Your inquiry has been delivered directly to our team. We will get back to you promptly."
        );
        setFormData({
          fullName: "",
          email: "",
          company: "",
          service: "Website Design & Development",
          budget: "",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(
        "Network error. Please try again or reach out directly at tekmaan.connect@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative border-t border-[#1c1f26]/60">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[12px] text-[#ff6a00] font-mono font-medium tracking-[0.2em] uppercase block mb-3">
                Start a Conversation
              </span>
              <h2 className="text-fluid-h1 font-bold text-white font-playfair leading-tight mb-6">
                Let&apos;s build something<br />
                <span className="text-[#ff6a00]"> extraordinary.</span>
              </h2>
              <p className="text-fluid-body text-[#9ca3af] leading-relaxed mb-8">
                Ready to elevate your digital presence or engineer your next web application? Share your vision with us and receive direct founder-level technical guidance.
              </p>

              {/* Direct Reach Cards */}
              <div className="space-y-4">
                {/* Email Channel */}
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry%20-%20TEKMAAN`}
                  className="flex items-center justify-between p-4 rounded-xl border border-[#1c1f26] bg-[#0a0a0a] hover:border-[#ff6a00]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#14171d] border border-[#262626] flex items-center justify-center text-[#ff6a00]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#9ca3af]/60 uppercase tracking-widest block">
                        Email Us Directly
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-[#ff6a00] transition-colors">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9ca3af] group-hover:text-white transition-colors" />
                </a>

                {/* WhatsApp Channel */}
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-[#1c1f26] bg-[#0a0a0a] hover:border-[#22c55e]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#14171d] border border-[#262626] flex items-center justify-center text-[#22c55e]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#9ca3af]/60 uppercase tracking-widest block">
                        WhatsApp Fast Chat
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-white group-hover:text-[#22c55e] transition-colors">
                        {siteConfig.contact.phone}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9ca3af] group-hover:text-white transition-colors" />
                </a>

                {/* Official Domain */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl border border-[#1c1f26] bg-[#0a0a0a]">
                  <div className="w-10 h-10 rounded-lg bg-[#14171d] border border-[#262626] flex items-center justify-center text-[#ff6a00]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9ca3af]/60 uppercase tracking-widest block">
                      Official Web Studio
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-white">
                      {siteConfig.contact.displayWebsite}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7 rounded-2xl border border-[#1c1f26] bg-[#0a0a0a] p-6 sm:p-8 lg:p-10 shadow-2xl relative">
            <h3 className="text-xl font-bold font-syne text-white mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs text-[#9ca3af] mb-6">
              Fill out the details below. We typically respond within 24 hours.
            </p>

            {/* Honeypot for bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg bg-[#14171d] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#ff6a00] transition-colors"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#14171d] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#ff6a00] transition-colors"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company / Brand */}
                <div>
                  <label className="block text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider mb-1.5">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Studio"
                    className="w-full px-4 py-3 rounded-lg bg-[#14171d] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#ff6a00] transition-colors"
                  />
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#14171d] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#ff6a00] transition-colors"
                  >
                    {siteConfig.services.map((svc) => (
                      <option key={svc.id} value={svc.title} className="bg-[#0a0a0a] text-white">
                        {svc.title}
                      </option>
                    ))}
                    <option value="Other Consultation" className="bg-[#0a0a0a] text-white">
                      Other / Consultation
                    </option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-mono text-[#9ca3af] uppercase tracking-wider mb-1.5">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and key requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-[#14171d] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#ff6a00] transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Status Message Alerts */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center gap-3 text-xs text-[#22c55e]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-12 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
