"use client";

import React, { useEffect, useState } from "react";
import { useMounted } from "@/lib/useMounted";

export function BackgroundBeams() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mounted = useMounted();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-700">
      {/* Dynamic interactive cursor spotlight */}
      <div
        className="absolute -inset-px opacity-40 transition-opacity duration-300 dark:opacity-25"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.12), transparent 80%)`,
        }}
      />

      {/* Ambient static gradient orbs */}
      <div className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/15 via-indigo-500/10 to-transparent blur-[120px]" />
      <div className="absolute top-[35%] -left-40 -z-10 h-[450px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-transparent blur-[120px]" />
      <div className="absolute top-[65%] -right-40 -z-10 h-[500px] w-[550px] rounded-full bg-gradient-to-bl from-purple-600/10 via-fuchsia-600/10 to-transparent blur-[140px]" />

      {/* Grid Pattern overlay */}
      <div className="bg-grid-pattern absolute inset-0 opacity-[0.6] dark:opacity-[0.4]" />

      {/* Subtle top edge vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      {/* Bottom edge vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
