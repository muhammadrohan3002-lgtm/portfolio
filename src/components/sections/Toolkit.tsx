"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Toolkit() {
  const { toolkit } = PORTFOLIO_DATA;

  return (
    <section id="toolkit" className="py-24 sm:py-32 border-t border-zinc-200/80 dark:border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
          <span className="text-emerald-500 font-semibold">04</span>
          <span>/</span>
          <span>Toolkit</span>
        </div>

        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Tools & Technologies
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            The programming languages, frameworks, runtime environments, and development tools I use to build modern software.
          </p>
        </div>

        {/* Clean Categorized Minimalist List */}
        <div className="space-y-10 sm:space-y-12">
          {toolkit.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80 last:border-0"
            >
              {/* Category Name (4 cols) */}
              <div className="md:col-span-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-mono">
                  {group.category}
                </h3>
              </div>

              {/* Skills Tags (8 cols) */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
