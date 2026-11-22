"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDown, FileText, Mail, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  "Full-Stack Web Developer",
  "Cross-Platform Mobile Developer",
  "CSE Student @ City University",
  "Problem Solver & Tech Explorer",
];

export function Hero({ onOpenResume }: HeroProps) {
  const { personal } = PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Opportunity Status Pill */}
            {personal.availableForOpportunities && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Opportunities & Internships</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              Building Digital Experiences That{" "}
              <span className="text-gradient-primary inline-block">
                Make an Impact.
              </span>
            </h1>

            {/* Dynamic Role Cycling Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:base font-mono font-medium text-violet-600 dark:text-violet-400 min-h-[28px]">
              <Terminal className="w-4 h-4 text-violet-500 shrink-0" />
              <span>role:</span>
              <span className="transition-all duration-300 font-semibold text-zinc-900 dark:text-zinc-100">
                &quot;{ROLES[roleIndex]}&quot;
              </span>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personal.bioShort}
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02]"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300/80 dark:border-white/10 shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-violet-500" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & University Tag */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send Email"
                  className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>

              <div className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>{personal.department} • {personal.university}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Profile & Code Terminal Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-20 blur-xl" />

              <div className="relative rounded-2xl glass-panel p-6 shadow-2xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/85">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800/80 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      developer.config.ts
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    v2.5
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-violet-500/20">
                    <span>RA</span>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      {personal.name}
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      City University • CSE
                    </p>
                    <p className="text-xs font-medium text-violet-600 dark:text-violet-400 mt-0.5">
                      Full-Stack & Mobile Development
                    </p>
                  </div>
                </div>

                <div className="rounded-xl p-4 bg-zinc-900 text-zinc-300 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-zinc-800">
                  <p className="text-zinc-500">{"// Personal Architecture Specs"}</p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">name:</span>{" "}
                    <span className="text-emerald-400">&quot;Rohan Ali&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">focus:</span> [
                    <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Flutter&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;MongoDB&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">status:</span>{" "}
                    <span className="text-cyan-400">&quot;Seeking Opportunities&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-zinc-400">mindset:</span>{" "}
                    <span className="text-pink-400">() =&gt;</span>{" "}
                    <span className="text-emerald-400">&quot;Continuous Growth&quot;</span>,
                  </p>
                  <p>&#125;;</p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-violet-500" />
                    <span>Clean Code</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Cross-Platform</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Modern Stack</span>
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
