"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { siteConfig } from "@/config/site";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    honeypot: "", // hidden spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (preselectedService) {
      // Find matching service or keep as-is
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
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
      service: "",
      budget: "",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setSubmitStatus("idle");
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-3xl bg-[#131E38] border border-emerald-500/30 p-8 sm:p-12 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-heading font-bold text-2xl text-white mb-3">
          Inquiry Successfully Received
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8 font-body">
          {statusMessage}
        </p>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 max-w-md mx-auto mb-8 text-xs text-slate-400">
          <p className="font-semibold text-white mb-1">What happens next?</p>
          <p>
            The senior engineer will review your architecture requirements and reply with initial thoughts and availability within 24 hours.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Send Another Inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-[#131E38]/70 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-md"
      noValidate
    >
      {/* Honeypot field for anti-spam (visually hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="form-honeypot">Leave this blank</label>
        <input
          id="form-honeypot"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitStatus === "error" && (
        <div className="mb-8 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-rose-200">Submission Alert</p>
            <p className="text-xs text-rose-300/90 mt-0.5">{statusMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Full Name <span className="text-[#41C9D7]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Dr. Alex Mercer"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3.5 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#41C9D7] focus:ring-1 focus:ring-[#41C9D7] transition-colors disabled:opacity-50"
            />
            {errors.fullName && (
              <p className="text-xs text-rose-400 mt-1.5">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Email Address <span className="text-[#41C9D7]">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3.5 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#41C9D7] focus:ring-1 focus:ring-[#41C9D7] transition-colors disabled:opacity-50"
            />
            {errors.email && (
              <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Company & Service Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Company / Organization <span className="text-slate-500 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. NeuralPulse Inc."
              disabled={isSubmitting}
              className="w-full px-4 py-3.5 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#41C9D7] focus:ring-1 focus:ring-[#41C9D7] transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Service Required <span className="text-[#41C9D7]">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3.5 rounded-xl bg-[#0B1020] border border-white/10 text-white text-sm focus:outline-none focus:border-[#41C9D7] focus:ring-1 focus:ring-[#41C9D7] transition-colors disabled:opacity-50"
            >
              <option value="" disabled className="text-slate-500">
                Select an area of interest...
              </option>
              {siteConfig.services.map((svc) => (
                <option key={svc.id} value={svc.title} className="bg-[#0B1020] text-white">
                  {svc.title}
                </option>
              ))}
              <option value="Custom Technical Advisory / Architecture" className="bg-[#0B1020] text-white">
                Custom Technical Advisory / Architecture
              </option>
              <option value="Other Bespoke Requirement" className="bg-[#0B1020] text-white">
                Other Bespoke Requirement
              </option>
            </select>
            {errors.service && (
              <p className="text-xs text-rose-400 mt-1.5">{errors.service}</p>
            )}
          </div>
        </div>

        {/* Budget Range (Optional) */}
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Target Budget Range <span className="text-slate-500 font-normal lowercase">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3.5 rounded-xl bg-[#0B1020] border border-white/10 text-white text-sm focus:outline-none focus:border-[#41C9D7] focus:ring-1 focus:ring-[#41C9D7] transition-colors disabled:opacity-50"
          >
            <option value="">Select an approximate scope or leave open...</option>
            <option value="Under $2,500 (Rapid Landing Page / Advisory)">Under $2,500 (Rapid Landing Page / Advisory)</option>
            <option value="$2,500 – $5,000 (Complete Business Website)">$2,500 – $5,000 (Complete Business Website)</option>
            <option value="$5,000 – $10,000 (Full-Stack Web App / Custom Portal)">$5,000 – $10,000 (Full-Stack Web App / Custom Portal)</option>
            <option value="$10,000+ (End-to-End Enterprise Architecture / AI Suite)">$10,000+ (End-to-End Enterprise Architecture / AI Suite)</option>
            <option value="Undetermined / Let's discuss scope first">Undetermined / Let's discuss scope first</option>
          </select>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
            Project Overview & Goals <span className="text-[#41C9D7]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about what you want to build, key timeline requirements, or existing systems..."
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3.5 rounded-xl bg-[#0B1020] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#41C9D7] focus:ring-1 focus:ring-[#41C9D7] transition-colors disabled:opacity-50 resize-y"
          />
          {errors.message && (
            <p className="text-xs text-rose-400 mt-1.5">{errors.message}</p>
          )}
        </div>

        {/* Submit Button & Micro Disclaimer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Strict privacy. No spam. Direct response from senior engineer.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold text-white bg-gradient-to-r from-[#5266F5] to-[#41C9D7] hover:shadow-[0_0_25px_rgba(82,102,245,0.4)] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-3xl bg-[#131E38]/50 border border-white/10 p-12 text-center text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-[#41C9D7]" />
          <span>Loading inquiry form...</span>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
