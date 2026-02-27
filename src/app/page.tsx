"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WritingSection } from "@/components/WritingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function HomePage() {
  const [lang, setLang] = useState<"cn" | "en">("cn");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation lang={lang} onLangChange={setLang} />
      <main>
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <WorkSection lang={lang} />
        <ResearchSection lang={lang} />
        <ProjectsSection lang={lang} />
        <WritingSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
      <Toaster />
    </div>
  );
}
