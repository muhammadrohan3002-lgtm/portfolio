"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Layers, Code2, Terminal, Cpu, CheckCircle2 } from "lucide-react";

export function Experience() {
  const { learningJourney } = PORTFOLIO_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5 text-zinc-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-zinc-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-zinc-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-zinc-400" />;
      default:
        return <Code2 className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-zinc-200/80 dark:border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
          <span className="text-emerald-500 font-semibold">03</span>
          <span>/</span>
          <span>Experience</span>
        </div>

        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Learning Journey & Engineering Focus
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A truthful track record of technical growth, software engineering projects, and algorithmic problem solving as a student developer.
          </p>
        </div>

        {/* 2x2 Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {learningJourney.map((milestone, idx) => (
            <div
              key={milestone.id}
              className="rounded-2xl bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Header with icon and index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60">
                    {getIcon(milestone.icon)}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100">
                  {milestone.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 mb-3">
                  {milestone.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {milestone.description}
                </p>
              </div>

              {/* Focus Area Badges */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {milestone.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
