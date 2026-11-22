"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Layout, Server, Smartphone, Check } from "lucide-react";

export function WhatIDo() {
  const { services } = PORTFOLIO_DATA;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-6 h-6 text-violet-500" />;
      case "Server":
        return <Server className="w-6 h-6 text-indigo-500" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-cyan-500" />;
      default:
        return <Layout className="w-6 h-6 text-violet-500" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Areas of Capability"
          title="What I Bring to the"
          highlight="Table"
          description="Areas of technical focus and capability developed through engineering projects and practical implementations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl glass-panel p-6 sm:p-8 border border-zinc-200/80 dark:border-white/[0.08] hover:border-violet-500/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/10"
            >
              {/* Top Section */}
              <div>
                {/* Icon Card & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 border border-violet-500/20 flex items-center justify-center transition-transform group-hover:scale-110">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities List */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                    Core Capabilities:
                  </span>
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pill Badges Footer */}
              <div className="mt-8 pt-5 border-t border-zinc-200/60 dark:border-zinc-800/80">
                <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 block mb-2">
                  Key Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Framing notice (aligned with instructions: not claims of commercial clients) */}
        <div className="mt-10 p-4 rounded-xl text-center max-w-xl mx-auto bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
          💡 These services highlight verified areas of technical capability demonstrated through academic, personal, and collaborative software projects.
        </div>
      </div>
    </section>
  );
}
