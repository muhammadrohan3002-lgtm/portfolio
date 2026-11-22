"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = ["All", "Mobile", "Full-Stack", "Upcoming"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Work"
          title="Practical Projects with"
          highlight="Real Impact"
          description="Explore applications engineered using Flutter, Next.js, MongoDB, and modern full-stack workflows."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                selectedCategory === tab
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/25 scale-105"
                  : "bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10"
              )}
            >
              {tab === "All" ? "All Projects" : tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Project Modal for Architectural Deep Dive */}
        <ProjectModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
