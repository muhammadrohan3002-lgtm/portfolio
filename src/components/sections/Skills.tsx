"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Layers,
  Sparkles,
  Cpu,
  Network,
  Share2,
  DatabaseZap,
  Database,
  Smartphone,
  Terminal,
  GitBranch,
  Laptop,
  Zap,
  Bot,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

export function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skills.map((c) => c.name)];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-orange-500" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-blue-500" />;
      case "Braces":
        return <Braces className="w-5 h-5 text-amber-500" />;
      case "Atom":
        return <Atom className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-500" />;
      case "Network":
        return <Network className="w-5 h-5 text-indigo-400" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-violet-500" />;
      case "DatabaseZap":
        return <DatabaseZap className="w-5 h-5 text-blue-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-cyan-500" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-blue-500" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-orange-600" />;
      case "Github":
        return <GithubIcon className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />;
      case "Laptop":
        return <Laptop className="w-5 h-5 text-blue-500" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-purple-400" />;
      default:
        return <Code2 className="w-5 h-5 text-violet-500" />;
    }
  };

  const filteredCategories =
    selectedCategory === "All"
      ? skills
      : skills.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technical Skills"
          title="Technologies &"
          highlight="Developer Tools"
          description="A categorized overview of the languages, libraries, databases, and workflow tools I actively utilize."
        />

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200",
                selectedCategory === category
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/25 scale-105"
                  : "bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {filteredCategories.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {cat.name}
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                  — {cat.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-start gap-4 p-4 rounded-xl glass-panel border border-zinc-200/80 dark:border-white/[0.07] hover:border-violet-500/30 hover:bg-violet-500/[0.02] dark:hover:bg-violet-500/[0.04] transition-all duration-200"
                  >
                    <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 shrink-0 group-hover:scale-105 transition-transform">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-sm font-bold text-foreground truncate">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                        {skill.levelDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note highlighting transparency */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Focused on conceptual mastery and practical implementation rather than arbitrary percentage ratings.
          </p>
        </div>
      </div>
    </section>
  );
}
