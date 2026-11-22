"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calendar, MapPin, BookOpen, CheckCircle2, Building } from "lucide-react";

export function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          title="Computer Science &"
          highlight="Engineering"
          description="Formal computer science education providing fundamental principles in algorithms, data structures, and software engineering."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Academic Card */}
          <div className="relative rounded-2xl glass-panel p-6 sm:p-10 border border-zinc-200/80 dark:border-white/[0.08] shadow-xl overflow-hidden">
            {/* Ambient accent light */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header with University Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                    <Building className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                      {education.institution}
                    </h3>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mt-0.5">
                      {education.department}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {education.batch}
                  </span>
                </div>
              </div>

              {/* Degree & Location */}
              <div className="py-6 border-b border-zinc-200/80 dark:border-zinc-800 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-base sm:text-lg font-bold text-foreground">
                    {education.degree}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-violet-500" />
                    <span>{education.location}</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Relevant Coursework Badges */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-3">
                  <BookOpen className="w-4 h-4 text-violet-500" />
                  Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Academic Commitments */}
              <div className="mt-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 block mb-3">
                  Key Academic Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {education.keyHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
