import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {/* Category Pill */}
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-4",
          "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 backdrop-blur-sm"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
        {badge}
      </div>

      {/* Main Headline */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-primary inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-zinc-600 dark:text-zinc-400 text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
