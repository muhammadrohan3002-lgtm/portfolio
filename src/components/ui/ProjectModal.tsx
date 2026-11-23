"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Layers, Sparkles, Smartphone, Globe } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
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

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl border border-white/10 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 text-foreground transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 font-medium">
          {project.tagline}
        </p>

        {/* Thumbnail Preview */}
        {project.thumbnailUrl && (
          <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden mt-4 border border-zinc-200/80 dark:border-zinc-800">
            <Image
              src={project.thumbnailUrl}
              alt={`${project.title} live screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </div>
        )}

        {/* Detailed Description */}
        <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <h4 className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-200 uppercase mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-500" /> Project Overview
          </h4>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-200 uppercase mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-500" /> Core Features & Architecture
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/80 text-sm text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-200 uppercase mb-3 flex items-center gap-2">
            {project.category === "Mobile" ? (
              <Smartphone className="w-4 h-4 text-cyan-500" />
            ) : (
              <Globe className="w-4 h-4 text-cyan-500" />
            )}
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              View Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
