"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Toolkit } from "@/components/sections/Toolkit";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main Content Sections in Editorial Hierarchy */}
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Toolkit />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </>
  );
}
