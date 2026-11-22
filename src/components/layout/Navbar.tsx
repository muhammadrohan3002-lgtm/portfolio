"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "glass-nav py-3 shadow-md shadow-black/5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
          aria-label="Rohan Ali Home"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600" />
          </span>
          <span className="font-extrabold tracking-tighter text-xl sm:text-2xl">
            ROHAN
            <span className="text-violet-600 dark:text-violet-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-200/50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/10 backdrop-blur-md"
        >
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-500",
                  isActive
                    ? "text-white bg-violet-600 shadow-sm shadow-violet-500/30"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={onOpenResume}
            aria-label="Open Curriculum Vitae / Resume"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-300/80 dark:border-white/10 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-violet-500" />
            <span>Download CV</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-md shadow-violet-500/20 transition-all hover:scale-[1.02] active:scale-95 focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu & Theme button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-3 top-20 z-50 glass-panel border border-zinc-200/80 dark:border-zinc-800 p-5 shadow-2xl rounded-2xl max-h-[calc(100vh-6rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between min-h-[44px]",
                    isActive
                      ? "bg-violet-500/10 text-violet-600 dark:text-violet-400 font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-violet-500" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium bg-violet-600 text-white min-h-[44px]"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
