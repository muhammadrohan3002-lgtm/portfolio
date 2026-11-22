"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>Error 404 // Page Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-foreground">
          4<span className="text-gradient-primary">0</span>4
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          The digital route you requested does not exist or has been relocated to another endpoint.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-500/25 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
