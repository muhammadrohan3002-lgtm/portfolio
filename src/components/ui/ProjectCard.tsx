"use client";

import React from "react";
import { Project } from "@/data/portfolioData";
import {
  ExternalLink,
  ArrowUpRight,
  Smartphone,
  Laptop,
  CheckCircle2,
  Calendar,
  BookOpen,
  Wifi,
  Battery,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isMobile = project.category === "Mobile";
  const isUpcoming = project.status === "Planned";
  const isSkillSphere = project.id === "skillsphere";

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl glass-panel p-5 sm:p-7 transition-all duration-300",
        "hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10",
        "border border-zinc-200/90 dark:border-white/[0.08]"
      )}
    >
      {/* Background Accent glow on hover */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25 pointer-events-none",
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

      {/* Visually Impressive UI Preview Mockup */}
      <div
        onClick={() => onSelect(project)}
        className="relative z-10 w-full h-48 rounded-xl overflow-hidden mb-5 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between bg-zinc-950 text-white cursor-pointer group/thumb select-none"
      >
        {/* Project 1: Smart Routine (Flutter Mobile Frame) */}
        {isMobile && (
          <div className="w-full h-full flex flex-col p-3 bg-gradient-to-b from-zinc-900 to-zinc-950 font-sans">
            {/* Mobile Status Bar */}
            <div className="flex items-center justify-between text-[10px] text-zinc-400 pb-1.5 border-b border-zinc-800">
              <span className="font-semibold">9:41</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-3 h-3" />
              </div>
            </div>

            {/* Mobile App Header */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                  SR
                </div>
                <span className="text-xs font-bold text-white tracking-tight">Smart Routine</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                Flutter 3.x
              </span>
            </div>

            {/* Simulated Live Routine Card */}
            <div className="flex-1 rounded-lg bg-zinc-900/90 border border-zinc-800 p-2.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>Next Class: CSE 311</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  10:00 AM
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1">
                <span>Room 402 • City University</span>
                <span className="text-zinc-500">Attendance: 92%</span>
              </div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-emerald-500 h-full w-[92%]" />
              </div>
            </div>

            {/* Bottom inspection trigger */}
            <div className="flex items-center justify-between text-[10px] text-cyan-400 pt-1.5">
              <span className="font-mono">Routine & Task Suite</span>
              <span className="group-hover/thumb:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Specs <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}

        {/* Project 2: SkillSphere (Next.js Web SaaS Preview) */}
        {isSkillSphere && (
          <div className="w-full h-full flex flex-col p-3 bg-gradient-to-b from-zinc-900 to-zinc-950 font-sans">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono text-zinc-400">skillsphere.app/dashboard</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono">
                Next.js 15
              </span>
            </div>

            {/* Web Dashboard Content */}
            <div className="flex-1 rounded-lg bg-zinc-900/90 border border-zinc-800 p-2.5 my-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                  <BookOpen className="w-3 h-3 text-purple-400" />
                  <span>Enrolled: Full-Stack Web Dev</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                  Module 4/12
                </span>
              </div>
              <p className="text-[10px] text-zinc-400">
                Better Auth • MongoDB Database • Modular Curriculum
              </p>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-[68%]" />
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between text-[10px] text-purple-400 pt-1">
              <span className="font-mono">Organized Learning Hub</span>
              <span className="group-hover/thumb:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Architecture <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}

        {/* Project 3: Upcoming / Future Lab */}
        {isUpcoming && (
          <div className="w-full h-full flex flex-col justify-between p-3.5 bg-gradient-to-b from-zinc-900 to-zinc-950 font-mono">
            <div className="flex items-center justify-between pb-1 border-b border-zinc-800">
              <span className="text-[10px] text-amber-400 flex items-center gap-1">
                <Terminal className="w-3 h-3" /> blueprint.spec
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                In Development
              </span>
            </div>

            <div className="py-2 space-y-1 text-[10px] text-zinc-400">
              <p className="text-zinc-500">{"// Target Pipeline:"}</p>
              <p className="text-white">&gt; Microservice Gateway</p>
              <p className="text-cyan-400">&gt; Real-Time Reactive State</p>
              <p className="text-emerald-400">&gt; Distributed Caching</p>
            </div>

            <div className="flex items-center justify-between text-[10px] text-amber-400 pt-1 border-t border-zinc-800">
              <span>Next-Gen Full-Stack</span>
              <span className="group-hover/thumb:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Roadmap <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}
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
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
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
