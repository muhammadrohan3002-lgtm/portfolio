"use client";

import React, { useSyncExternalStore } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, ArrowDownToLine } from "lucide-react";
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
    <footer className="border-t border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-[#070708] py-14 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80 dark:border-zinc-800">
          <div>
            <h3 className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {personal.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Computer Science Student & Aspiring Full-Stack Developer • City University
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan's GitHub"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan's LinkedIn"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.vercel}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan's Vercel Deployments"
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <VercelIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.resumeDownloadUrl}
              download="Rohan_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <nav className="flex flex-wrap items-center gap-5">
            <a href="#work" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#toolkit" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Toolkit
            </a>
            <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <span>© {currentYear} Rohan Ali. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors"
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
