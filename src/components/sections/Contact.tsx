"use client";

import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
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
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
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
        setStatus("success");
        setFeedbackMessage(data.message || "Your message has been sent successfully! Rohan will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFieldErrors({});
      } else if (data.configured === false) {
        setStatus("unconfigured");
        setFeedbackMessage(
          data.message ||
            "Automated email delivery is not yet configured on this deployment. Please click the button below to send your pre-filled message directly via your email client."
        );
        if (data.directMailtoUrl) {
          setDirectMailtoUrl(data.directMailtoUrl);
        }
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.error || "Unable to send message at this moment. Please use the direct email link."
        );
        if (data.directMailtoUrl) {
          setDirectMailtoUrl(data.directMailtoUrl);
        }
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("A network error occurred. Please contact Rohan directly at " + personal.email);
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
    <section id="contact" className="py-24 sm:py-32 border-t border-zinc-200/80 dark:border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
          <span className="text-emerald-500 font-semibold">05</span>
          <span>/</span>
          <span>Contact</span>
        </div>

        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Have a project idea, an internship opportunity, or just want to connect? I&apos;d love to hear from you. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Let's Connect (5 cols)                          */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-7 space-y-5">
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open to Opportunities</span>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Let&apos;s Build Something Together.
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                  Have a project idea, an opportunity, or just want to connect? I&apos;d love to hear from you. Feel free to reach out.
                </p>
              </div>

              {/* Direct Email Card with Copy Button */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Email</span>
                  </span>
                  <span>Primary</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-mono">
                      Location
                    </span>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {personal.location}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400">UTC+6</span>
              </div>

              {/* Professional Profiles */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                  Profiles:
                </span>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-blue-500 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span className="text-xs sm:text-sm font-medium">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-medium">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Contact Form (7 cols)                          */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                Fill in the details below. Responses are typically sent within 24 hours.
              </p>

              {/* Status Feedback: Success */}
              {status === "success" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-sm space-y-2 animate-in fade-in duration-200"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message Delivered!</p>
                      <p className="text-xs mt-0.5">{feedbackMessage}</p>
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

              {/* Status Feedback: Unconfigured fallback */}
              {status === "unconfigured" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-sm space-y-3 animate-in fade-in duration-200"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Delivery Fallback Available</p>
                      <p className="text-xs mt-0.5">{feedbackMessage}</p>
                    </div>
                  </div>
                  {directMailtoUrl && (
                    <div className="pt-1 pl-7 flex flex-wrap items-center gap-3">
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open Pre-filled Email</span>
                      </a>
                      <button
                        type="button"
                        onClick={resetStatus}
                        className="text-xs text-zinc-500 hover:underline"
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
                      <p className="text-xs mt-0.5">{feedbackMessage}</p>
                    </div>
                  </div>
                  {directMailtoUrl && (
                    <div className="pt-1 pl-7">
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold underline"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send directly via email client</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for bot spam prevention */}
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
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
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
                      className={`w-full h-11 px-3.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all placeholder:text-zinc-400 ${
                        fieldErrors.name
                          ? "border-red-500"
                          : "border-zinc-300/80 dark:border-zinc-800"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
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
                      className={`w-full h-11 px-3.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all placeholder:text-zinc-400 ${
                        fieldErrors.email
                          ? "border-red-500"
                          : "border-zinc-300/80 dark:border-zinc-800"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
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
                    className={`w-full h-11 px-3.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all placeholder:text-zinc-400 ${
                      fieldErrors.subject
                        ? "border-red-500"
                        : "border-zinc-300/80 dark:border-zinc-800"
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-xs text-red-500 mt-1">{fieldErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
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
                    className={`w-full p-3.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-all placeholder:text-zinc-400 resize-none ${
                      fieldErrors.message
                        ? "border-red-500"
                        : "border-zinc-300/80 dark:border-zinc-800"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-red-500 mt-1">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
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
