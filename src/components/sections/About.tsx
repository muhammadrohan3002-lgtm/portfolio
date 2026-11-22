"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Code2, Layers, BookOpen, CheckCircle2 } from "lucide-react";

export function About() {
  const { personal, about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Background & Philosophy"
          title="Engineered with Discipline."
          highlight="Driven by Curiosity."
          description="A look into my academic journey in Computer Science & Engineering, technical values, and problem-solving focus."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Identity & Key Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

              {/* Profile Card Header with Actual Photograph */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-xl bg-zinc-900 shrink-0">
                  <Image
                    src={personal.avatarUrl}
                    alt={`${personal.name} portrait`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{personal.name}</h3>
                  <p className="text-xs text-violet-600 dark:text-violet-400 font-medium">
                    {personal.title}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {personal.university}
                  </p>
                </div>
              </div>

              {/* Core Philosophy Statement */}
              <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 block mb-1">
                  Core Philosophy
                </span>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                  &ldquo;Great software emerges from disciplined architectural principles and obsessive attention to user experience.&rdquo;
                </p>
              </div>

              {/* Quick Academic & Project Signals */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  <GraduationCap className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <span>
                    B.Sc. in Computer Science & Engineering,{" "}
                    <strong className="text-foreground">City University</strong>
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  <Code2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>Hands-on experience in full-stack web and mobile apps</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  <Layers className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Emphasis on clean architecture, REST APIs, and databases</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  <BookOpen className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Continuous learning with modern web ecosystems & AI tooling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & 4 Strength Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4">
              <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200">
                {personal.bioLong}
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                As a Computer Science & Engineering undergraduate, I treat software engineering as both an intellectual discipline and a craft. I thrive on translating abstract theoretical concepts — such as object-oriented system design, relational and document data modeling, and algorithmic complexity — into practical, tangible software that users enjoy navigating.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                My development experience is grounded in building end-to-end applications through rigorous academic coursework and self-initiated projects. Whether designing responsive client interfaces with Next.js and Tailwind CSS, structuring cross-platform mobile experiences with Flutter, or building persistent REST APIs on Node.js and MongoDB, I prioritize maintainability and thoughtful UX.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {about.coreStrengths.map((strength, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl glass-panel border border-zinc-200/60 dark:border-white/[0.06] hover:border-violet-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
                    <h4 className="font-semibold text-sm text-foreground">
                      {strength.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
