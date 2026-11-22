"use client";

import React, { useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { X, Printer, Download, Mail, GraduationCap, Code2, FolderGit2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, VercelIcon } from "@/components/ui/SocialIcons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const { personal, education, skills, projects } = PORTFOLIO_DATA;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-10 shadow-2xl border border-white/10 dark:border-white/10 bg-white dark:bg-zinc-950 text-foreground transition-all">
        {/* Floating Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Curriculum Vitae / Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv/Rohan_Ali_CV.pdf"
              download="Rohan_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Official Rohan Ali CV (PDF)"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="space-y-8 text-zinc-800 dark:text-zinc-200" id="resume-printable-area">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h1 id="resume-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {personal.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-violet-600 dark:text-violet-400 mt-1">
              {personal.title}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {personal.department} • {personal.university}
            </p>

            {/* Contact Details Links */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 text-xs text-zinc-600 dark:text-zinc-400">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-violet-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-violet-500" />
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-violet-500 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-violet-500" />
                LinkedIn Profile
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-violet-500 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-violet-500" />
                GitHub
              </a>
              <a
                href={personal.vercel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-violet-500 transition-colors"
              >
                <VercelIcon className="w-3.5 h-3.5 text-violet-500" />
                Vercel
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {personal.bioLong}
            </p>
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mt-2">
              Goal: {personal.careerGoal}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-violet-500" />
              Education
            </h2>
            <div className="rounded-xl p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  {education.institution}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  {education.period}
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-0.5">
                {education.degree} — {education.department}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Batch: {education.batch} • {education.location}
              </p>

              <div className="mt-3">
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                  Relevant Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded text-[11px] bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-500" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((category) => (
                <div
                  key={category.name}
                  className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <span className="text-xs font-bold text-violet-600 dark:text-violet-400 block mb-1.5">
                    {category.name}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {category.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2 py-0.5 rounded text-[11px] bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-500" />
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 2).map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                      {proj.title}
                    </span>
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-violet-500/10 text-violet-600 dark:text-violet-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            Close
          </button>
          <a
            href="/cv/Rohan_Ali_CV.pdf"
            download="Rohan_Ali_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            Download Official CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
