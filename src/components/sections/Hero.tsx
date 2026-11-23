"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, ArrowDownToLine, Copy, Check, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, VercelIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Heading, Title, Narrative & Actions */}
          <div className="flex-1 space-y-6">
            {/* Status indicator pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-zinc-700 dark:text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for internships & software roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1]">
                {personal.headline}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300">
                {personal.title}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {personal.intro}
            </p>

            {/* University & Location meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                <span>{personal.university} (CSE, 64th Batch)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors shadow-xs active:scale-[0.98]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-white/5 transition-colors active:scale-[0.98]"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeDownloadUrl}
                download="Rohan_Ali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Rohan Ali CV (PDF)"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 dark:text-zinc-200 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors active:scale-[0.98]"
              >
                <ArrowDownToLine className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                aria-label="Copy email address"
                title="Copy email to clipboard"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Profile Social Links */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-white/5 flex items-center gap-4 text-xs">
              <span className="text-zinc-500 dark:text-zinc-400">Find me on:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  aria-label="Rohan's GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="underline underline-offset-4">GitHub</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label="Rohan's LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span className="underline underline-offset-4">LinkedIn</span>
                </a>

                <a
                  href={personal.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  aria-label="Rohan's Vercel Deployments"
                >
                  <VercelIcon className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4">Vercel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Profile Photo */}
          <div className="shrink-0 self-center md:self-auto">
            <div className="relative group">
              {/* Outer delicate frame */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
                <Image
                  src={personal.avatarUrl}
                  alt={`${personal.name} - ${personal.title}`}
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 192px"
                />
              </div>

              {/* Status dot */}
              <div className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-[#0b0b0c]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
