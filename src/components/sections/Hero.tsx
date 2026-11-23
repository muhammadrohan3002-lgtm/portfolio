"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowDown,
  FileText,
  Mail,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Copy,
  Check,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, VercelIcon } from "@/components/ui/SocialIcons";

const ROLES = [
  "Full-Stack Web Developer",
  "Cross-Platform Mobile Engineer",
  "Computer Science & Engineering Student",
  "Crafting Clean, Practical Software",
];

type ActiveTab = "config" | "stack" | "academic";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<ActiveTab>("config");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Profile Avatar, Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Row: Prominent Profile Photograph & Status Pill */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-2">
              {/* Prominent Profile Portrait Image */}
              <div className="relative group shrink-0">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/20 dark:border-zinc-800 shadow-2xl bg-zinc-900">
                  <Image
                    src={personal.avatarUrl}
                    alt={`${personal.name} - ${personal.title}`}
                    width={112}
                    height={112}
                    priority
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Online pulse indicator */}
                <span className="absolute bottom-1 right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background" />
                </span>
              </div>

              {/* Status Pill & Identity Meta */}
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                {personal.availableForOpportunities && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for Opportunities</span>
                  </div>
                )}
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {personal.department} • {personal.university}
                </span>
              </div>
            </div>

            {/* Main Headline with balanced typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12] text-balance">
              Building Digital Experiences That{" "}
              <span className="text-gradient-primary inline-block">
                Make an Impact.
              </span>
            </h1>

            {/* Dynamic Role Cycling Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-sm sm:text-base font-mono font-medium min-h-[30px]">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 text-xs">
                <Terminal className="w-3.5 h-3.5 text-violet-500" />
                <span>role</span>
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">=</span>
              <span className="transition-all duration-300 font-semibold text-zinc-900 dark:text-zinc-100">
                &quot;{ROLES[roleIndex]}&quot;
              </span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personal.bioShort}
            </p>

            {/* Call to Actions & Social Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Featured Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/cv/Rohan_Ali_CV.pdf"
                download="Rohan_Ali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Rohan Ali CV (PDF)"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300/80 dark:border-white/10 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-violet-500" />
                <span>Download CV</span>
              </a>

              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy Rohan's email"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300/70 dark:border-zinc-800 transition-colors shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Social Links: GitHub, LinkedIn, Vercel & Mailto */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Connect & Follow:
              </span>

              <div className="flex items-center gap-2">
                {/* GitHub Button */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rohan's GitHub Profile"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-violet-500 transition-colors text-xs font-medium shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn Button */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rohan's LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-blue-500 transition-colors text-xs font-medium shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                {/* Vercel Button */}
                <a
                  href={personal.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rohan's Vercel Deployments"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:text-white transition-colors text-xs font-medium shadow-xs"
                >
                  <VercelIcon className="w-3.5 h-3.5" />
                  <span>Vercel</span>
                </a>

                {/* Direct Mailto Contact */}
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email directly"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Cockpit IDE (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Corner crosshairs */}
              <div className="absolute -top-2 -left-2 text-zinc-400 dark:text-zinc-600 text-xs font-mono select-none">+</div>
              <div className="absolute -top-2 -right-2 text-zinc-400 dark:text-zinc-600 text-xs font-mono select-none">+</div>
              <div className="absolute -bottom-2 -left-2 text-zinc-400 dark:text-zinc-600 text-xs font-mono select-none">+</div>
              <div className="absolute -bottom-2 -right-2 text-zinc-400 dark:text-zinc-600 text-xs font-mono select-none">+</div>

              {/* Ambient radial glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/30 to-cyan-500/30 opacity-30 blur-2xl pointer-events-none" />

              {/* Developer Cockpit Card */}
              <div className="relative rounded-2xl glass-panel p-5 sm:p-6 shadow-2xl border border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-zinc-950/90 transition-all">
                {/* IDE Tab Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Clickable Interactive Tabs */}
                  <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800">
                    <button
                      onClick={() => setActiveTab("config")}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                        activeTab === "config"
                          ? "bg-white dark:bg-zinc-800 text-violet-600 dark:text-violet-400 font-semibold shadow-xs"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      config.ts
                    </button>
                    <button
                      onClick={() => setActiveTab("stack")}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                        activeTab === "stack"
                          ? "bg-white dark:bg-zinc-800 text-cyan-600 dark:text-cyan-400 font-semibold shadow-xs"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      stack.json
                    </button>
                    <button
                      onClick={() => setActiveTab("academic")}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                        activeTab === "academic"
                          ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs"
                          : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                      }`}
                    >
                      city-uni.log
                    </button>
                  </div>
                </div>

                {/* Developer Profile Header inside Cockpit */}
                <div className="flex items-center gap-3.5 mb-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/80">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-md shrink-0 bg-zinc-900">
                    <Image
                      src={personal.avatarUrl}
                      alt={personal.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-foreground flex items-center gap-1.5 truncate">
                      {personal.name}
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {personal.department} • {personal.university}
                    </p>
                    <p className="text-[11px] font-medium text-violet-600 dark:text-violet-400 mt-0.5">
                      Full-Stack & Mobile Development
                    </p>
                  </div>
                </div>

                {/* Code Body based on activeTab */}
                <div className="rounded-xl p-4 bg-zinc-950 text-zinc-300 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-zinc-800/80 min-h-[175px]">
                  {activeTab === "config" && (
                    <div className="space-y-1">
                      <p className="text-zinc-500">{"// developer.config.ts"}</p>
                      <p>
                        <span className="text-purple-400">export default</span>{" "}
                        <span className="text-blue-300">&#123;</span>
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">engineer:</span>{" "}
                        <span className="text-emerald-400">&quot;Rohan Ali&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">university:</span>{" "}
                        <span className="text-emerald-400">&quot;City University&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">stack:</span> [
                        <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                        <span className="text-amber-300">&quot;Flutter&quot;</span>,{" "}
                        <span className="text-amber-300">&quot;MongoDB&quot;</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">github:</span>{" "}
                        <span className="text-blue-300">&quot;muhammadrohan3002-lgtm&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">seeking:</span>{" "}
                        <span className="text-cyan-400">&quot;Software Internships / Dev Roles&quot;</span>,
                      </p>
                      <p className="text-blue-300">&#125;;</p>
                    </div>
                  )}

                  {activeTab === "stack" && (
                    <div className="space-y-1">
                      <p className="text-zinc-500">{"// tech-stack.json"}</p>
                      <p className="text-blue-300">&#123;</p>
                      <p className="pl-4">
                        <span className="text-zinc-400">&quot;frontend&quot;:</span> [
                        <span className="text-emerald-400">&quot;React.js&quot;</span>,{" "}
                        <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                        <span className="text-emerald-400">&quot;Tailwind CSS&quot;</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">&quot;mobile&quot;:</span> [
                        <span className="text-cyan-400">&quot;Flutter&quot;</span>,{" "}
                        <span className="text-cyan-400">&quot;Dart&quot;</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">&quot;backend&quot;:</span> [
                        <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                        <span className="text-amber-300">&quot;REST APIs&quot;</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">&quot;database&quot;:</span> [
                        <span className="text-emerald-400">&quot;MongoDB&quot;</span>]
                      </p>
                      <p className="text-blue-300">&#125;</p>
                    </div>
                  )}

                  {activeTab === "academic" && (
                    <div className="space-y-1">
                      <p className="text-zinc-500">{"// academic.log"}</p>
                      <p className="text-zinc-400">
                        [INSTITUTION] <span className="text-white">City University</span>
                      </p>
                      <p className="text-zinc-400">
                        [DEGREE] <span className="text-emerald-400">B.Sc. in Computer Science & Eng.</span>
                      </p>
                      <p className="text-zinc-400">
                        [BATCH] <span className="text-amber-300">64th Batch (CSE)</span>
                      </p>
                      <p className="text-zinc-400">
                        [CORE COURSES] Algorithms, OOP, DBMS, Software Engineering, Networks
                      </p>
                      <p className="text-zinc-400">
                        [STATUS] <span className="text-cyan-400">Active Undergraduate Student</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Capability Tags */}
                <div className="mt-4 pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-violet-500" />
                    <span>Clean Code</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Cross-Platform</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
