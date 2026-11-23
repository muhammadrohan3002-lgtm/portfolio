"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDownToLine, MapPin, GraduationCap, Code2, Target } from "lucide-react";

export function About() {
  const { about, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-zinc-200/80 dark:border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
          <span className="text-emerald-500 font-semibold">02</span>
          <span>/</span>
          <span>About</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-10 sm:mb-12">
          {about.heading}
        </h2>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I am an undergraduate <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Computer Science & Engineering student at City University</strong> (64th Batch). I am deeply passionate about building practical, user-focused applications using modern web technologies.
            </p>

            <p>
              My development experience spans modern frontend architectures with React and Next.js, cross-platform mobile apps with Flutter, and robust backend integrations with Node.js and MongoDB. I focus on writing maintainable, clean code that translates complex product requirements into reliable software.
            </p>

            <p>
              Alongside software engineering, I am actively engaged in <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Competitive Programming using C++</strong>. I continuously work on strengthening my foundation in <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Data Structures and Algorithms</strong>, practicing analytical problem-solving under strict time and space constraints.
            </p>

            <p>
              My long-term goal is to grow into a skilled <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Software Engineer</strong>, designing and contributing to high-impact systems that deliver real-world value.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={personal.resumeDownloadUrl}
                download="Rohan_Ali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors shadow-xs"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Facts / Highlights Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 p-6 space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                Key Background Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 block">
                      City University
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                      B.Sc. in Computer Science & Engineering • 64th Batch
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 block">
                      Core Discipline
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                      Full-Stack Web Development & Cross-Platform Apps
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 block">
                      Problem Solving
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                      C++ Competitive Programming • Data Structures & Algorithms
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 block">
                      Location
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs">
                      Savar, Dhaka, Bangladesh (UTC+6)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
