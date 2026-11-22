"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import { ExternalLink, ArrowUpRight, Smartphone, Laptop, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isMobile = project.category === "Mobile";
  const isUpcoming = project.status === "Planned";

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl glass-panel p-6 sm:p-7 transition-all duration-300",
        "hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10",
        "border border-zinc-200/80 dark:border-white/[0.08]"
      )}
    >
      {/* Background Accent subtle glow on hover */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-20",
          project.accentColor
        )}
      />

      {/* Top Meta Bar */}
      <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
            {isMobile ? <Smartphone className="w-4 h-4" /> : <Laptop className="w-4 h-4" />}
          </span>
          <span className="text-xs font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
              isUpcoming
                ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                isUpcoming ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
              )}
            />
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Visual / Thumbnail Representation */}
      <div
        onClick={() => onSelect(project)}
        className="relative z-10 w-full h-44 rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/60 dark:border-zinc-800 flex flex-col justify-between p-4 cursor-pointer group/thumb"
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            {isMobile ? "flutter-app / rohan-ali" : "nextjs-web / rohan-ali"}
          </span>
        </div>

        {/* Center UI Preview Element */}
        <div className="flex flex-col items-center justify-center text-center py-2">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-2 group-hover/thumb:scale-110 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
            {project.title}
          </span>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
            {project.technologies.slice(0, 3).join(" • ")}
          </span>
        </div>

        {/* View Details Hover Overlay Banner */}
        <div className="flex items-center justify-between text-[11px] font-medium text-violet-600 dark:text-violet-400 pt-2 border-t border-zinc-200/50 dark:border-zinc-800/80">
          <span>Click to explore architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/thumb:translate-x-0.5 group-hover/thumb:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Project Title & Short Description */}
      <div className="relative z-10 flex-1">
        <h3
          onClick={() => onSelect(project)}
          className="text-xl font-bold tracking-tight text-foreground hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer transition-colors"
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* Key Highlight Bullets */}
        <div className="mt-4 space-y-1.5">
          {project.features.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Badges */}
      <div className="relative z-10 mt-5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 py-1.5 transition-colors"
          >
            Overview & Specs →
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View on GitHub"
              aria-label={`View ${project.title} source code on GitHub`}
              className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo / Preview"
                aria-label={`View ${project.title} live demo`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white shadow-sm shadow-violet-500/20 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
