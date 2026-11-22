"use client";

import React, { useSyncExternalStore } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, VercelIcon } from "@/components/ui/SocialIcons";

const emptySubscribe = () => () => {};

export function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-200/80 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Introduction */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-600" />
              <span className="font-extrabold tracking-tighter text-xl text-foreground">
                ROHAN
                <span className="text-violet-600 dark:text-violet-400">.</span>
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              Full-Stack Developer and Computer Science & Engineering student at City University. Dedicated to engineering fast, accessible, and user-centric web and mobile solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rohan's LinkedIn profile"
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 transition-colors shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rohan's GitHub profile"
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.vercel}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rohan's Vercel profile"
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white hover:border-violet-500/30 transition-colors shadow-sm"
              >
                <VercelIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email Rohan"
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  What I Do
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a
                  href="/cv/Rohan_Ali_CV.pdf"
                  download="Rohan_Ali_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-violet-600 dark:text-violet-400 font-medium"
                >
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Academic & Collaboration status */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              Status & Openings
            </h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 block mb-1">
                  Internships & Roles
                </span>
                {personal.careerGoal}
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {personal.department} • {personal.university}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} {personal.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 transition-colors shadow-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
