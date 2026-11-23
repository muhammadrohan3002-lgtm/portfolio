"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, VercelIcon } from "@/components/ui/SocialIcons";
import confetti from "canvas-confetti";

export function Contact() {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [directMailtoUrl, setDirectMailtoUrl] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setFeedbackMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      setStatus("error");
      setFeedbackMessage("Please enter a subject (at least 3 characters).");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setFeedbackMessage("Please write a message with at least 10 characters.");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");
    setDirectMailtoUrl(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(data.message);
        if (data.directMailtoUrl) {
          setDirectMailtoUrl(data.directMailtoUrl);
        }

        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.7 },
          });
        } catch {
          // ignore
        }

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.error || "Unable to send message right now. Please use the direct email link."
        );
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setFeedbackMessage(
        "A network error occurred. Please contact Rohan directly at " + personal.email
      );
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Have an Idea? Let's"
          highlight="Build Something Great."
          description="Whether you have an internship opportunity, project collaboration, or engineering inquiry, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-zinc-200/80 dark:border-white/[0.08] shadow-lg">
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                I am actively seeking software engineering opportunities, internships, and collaborative projects. Feel free to send an email, submit the form, or reach out on LinkedIn.
              </p>

              {/* Direct Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
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

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                  Professional Profiles:
                </span>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all shadow-sm group"
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
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all shadow-sm group"
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
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personal.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-violet-500/40 hover:text-white transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <VercelIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block">Vercel Deployments</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        muhammadrohan3002-lgtms-projects
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-zinc-200/80 dark:border-white/[0.08] shadow-lg">
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                Fill in the details below. Responses typically sent within 24 hours.
              </p>

              {/* Status Banner */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-sm space-y-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </div>
                  {directMailtoUrl && (
                    <div className="pt-2 pl-7">
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open Pre-filled Email Client</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-300/80 dark:border-zinc-800 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-300/80 dark:border-zinc-800 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Enter subject (e.g. Internship opportunity, project collaboration)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-300/80 dark:border-zinc-800 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-300/80 dark:border-zinc-800 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all placeholder:text-zinc-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
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
