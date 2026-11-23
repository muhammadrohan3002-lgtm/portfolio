"use client";

import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Copy,
  Check,
  MapPin,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import confetti from "canvas-confetti";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmissionStatus = "idle" | "loading" | "success" | "unconfigured" | "error";

export function Contact() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const mountTimeRef = useRef<number | null>(null);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [directMailtoUrl, setDirectMailtoUrl] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Field validation errors
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const validateForm = (): boolean => {
    const errors: { name?: string; email?: string; subject?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please write a message of at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setFeedbackMessage("Please correct the highlighted fields before sending.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");
    setDirectMailtoUrl(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          honeypot,
          timestamp: mountTimeRef.current ?? Date.now(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success && data.delivered) {
        // Actual verified email delivery succeeded
        setStatus("success");
        setFeedbackMessage(data.message || "Your message has been sent successfully! Rohan will get back to you shortly.");

        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
          });
        } catch {
          // ignore
        }

        // Reset form data on actual success
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFieldErrors({});
      } else if (data.configured === false) {
        // Email service is not yet configured with API credentials
        setStatus("unconfigured");
        setFeedbackMessage(
          data.message ||
            "Automated email delivery is not yet configured on this deployment. Please click the button below to send your pre-filled message directly via your email client."
        );
        if (data.directMailtoUrl) {
          setDirectMailtoUrl(data.directMailtoUrl);
        }
      } else {
        // Generic or provider error
        setStatus("error");
        setFeedbackMessage(
          data.error || "Unable to send message at this moment. Please use the direct email link."
        );
        if (data.directMailtoUrl) {
          setDirectMailtoUrl(data.directMailtoUrl);
        }
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedbackMessage(
        "A network error occurred. Please contact Rohan directly at " + personal.email
      );
      setDirectMailtoUrl(
        `mailto:${personal.email}?subject=${encodeURIComponent(`[Inquiry] ${formData.subject}`)}&body=${encodeURIComponent(
          `Hi Rohan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`
      );
    }
  };

  const resetStatus = () => {
    setStatus("idle");
    setFeedbackMessage("");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Have an Idea? Let's"
          highlight="Build Together."
          description="Whether you have an internship opportunity, project collaboration, or engineering inquiry, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Let's Connect (5 cols)                          */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-zinc-200/80 dark:border-white/[0.08] shadow-lg relative overflow-hidden">
              {/* Subtle ambient corner glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-44 h-44 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open to Opportunities</span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Let&apos;s Build Something Together.
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-3 mb-6">
                Have a project idea, an opportunity, or just want to connect? I&apos;d love to hear from you. Feel free to reach out.
              </p>

              {/* Direct Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 mb-4 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-violet-500" />
                    Direct Email
                  </span>
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500">Primary Contact</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shrink-0 shadow-xs active:scale-95"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      Savar, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800">
                  BST (UTC+6)
                </span>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                  Professional Profiles:
                </span>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Rohan on LinkedIn"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">LinkedIn Profile</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        muhammad-rohan-094494373
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Rohan's GitHub Profile"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all shadow-xs group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-800/10 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">GitHub Profile</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        muhammadrohan3002-lgtm
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-500 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Contact Form (7 cols)                          */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-zinc-200/80 dark:border-white/[0.08] shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Fill in the details below. Responses are typically sent within 24 hours.
                </p>
              </div>

              {/* Status Feedback: Success (Verified email sent) */}
              {status === "success" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-sm space-y-3 animate-in fade-in duration-200"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-emerald-700 dark:text-emerald-300">Message Delivered!</p>
                      <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {feedbackMessage}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={resetStatus}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline pt-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Send another message</span>
                  </button>
                </div>
              )}

              {/* Status Feedback: Service Awaiting Configuration (Transparent fallback) */}
              {status === "unconfigured" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-sm space-y-3 animate-in fade-in duration-200"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-amber-700 dark:text-amber-300">
                        Email Service Configuration Note
                      </p>
                      <p className="text-xs text-amber-600/90 dark:text-amber-400">
                        {feedbackMessage}
                      </p>
                    </div>
                  </div>
                  {directMailtoUrl && (
                    <div className="pt-2 pl-7 flex flex-wrap items-center gap-3">
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-sm transition-all"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open Pre-filled Email to Rohan</span>
                      </a>
                      <button
                        type="button"
                        onClick={resetStatus}
                        className="text-xs text-zinc-500 dark:text-zinc-400 hover:underline"
                      >
                        Edit Form
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Status Feedback: Error */}
              {status === "error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 text-sm space-y-2 animate-in fade-in duration-200"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Unable to Send</p>
                      <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">
                        {feedbackMessage}
                      </p>
                    </div>
                  </div>
                  {directMailtoUrl && (
                    <div className="pt-2 pl-7">
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send directly via email client instead</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for bot spam prevention (visually and accessibility hidden) */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={status === "loading"}
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                      }}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      className={`w-full h-11 sm:h-12 px-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-zinc-400 disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-zinc-300/80 dark:border-zinc-800 focus:border-violet-500"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="text-xs text-red-500 mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      disabled={status === "loading"}
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                      }}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      className={`w-full h-11 sm:h-12 px-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-zinc-400 disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-zinc-300/80 dark:border-zinc-800 focus:border-violet-500"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-xs text-red-500 mt-1">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (fieldErrors.subject) setFieldErrors({ ...fieldErrors, subject: undefined });
                    }}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                    className={`w-full h-11 sm:h-12 px-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-zinc-400 disabled:opacity-60 disabled:cursor-not-allowed ${
                      fieldErrors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-300/80 dark:border-zinc-800 focus:border-violet-500"
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p id="subject-error" className="text-xs text-red-500 mt-1">
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    disabled={status === "loading"}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
                    }}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    className={`w-full p-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all placeholder:text-zinc-400 resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                      fieldErrors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-300/80 dark:border-zinc-800 focus:border-violet-500"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-xs text-red-500 mt-1">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
