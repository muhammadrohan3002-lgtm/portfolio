"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 border-t border-zinc-200/80 dark:border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker & Heading */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3">
            <span className="text-emerald-500 font-semibold">01</span>
            <span>/</span>
            <span>Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Featured Projects & Case Studies
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Curated web and mobile applications engineered with React, Next.js, Flutter, and modern full-stack architectures.
          </p>
        </div>

        {/* Projects Editorial Showcase */}
        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 p-5 sm:p-7 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Visual Preview / Thumbnail (7 cols) */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="lg:col-span-7 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800/90 bg-zinc-950 cursor-pointer shadow-sm group-hover:shadow-md transition-shadow"
                >
                  <Image
                    src={project.thumbnailUrl}
                    alt={`${project.title} live screenshot`}
                    fill
                    className="object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 58vw, 620px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Subtle hover overlay badge */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-black/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Project Information & Actions (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3
                      onClick={() => setActiveProject(project)}
                      className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors" />
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions: Live Demo, GitHub, Details */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5 border-t border-zinc-200/80 dark:border-zinc-800">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}

                    <button
                      onClick={() => setActiveProject(project)}
                      type="button"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors ml-auto"
                    >
                      <span>Case Details →</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for In-depth Case Study */}
        <ProjectModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
