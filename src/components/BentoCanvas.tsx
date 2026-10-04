"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { Navigation } from "./Navigation";
import { AboutCard } from "./AboutCard";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectAccordion } from "./ProjectAccordion";
import { BottomBentoGrid } from "./BottomBentoGrid";
import { ProjectModal } from "./ProjectModal";
import { ContactDrawer } from "./ContactDrawer";
import { ResumeModal } from "./ResumeModal";

export const BentoCanvas: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const fitRef = useRef<HTMLDivElement>(null);

  const activeProject = portfolioData.projects[activeProjectIdx] || portfolioData.projects[0];

  // Stage scaling algorithm for desktop pixel-perfect fixed-ratio bento matching reference HTML
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        const stageW = 676;
        const stageH = 459;
        const padX = 40;
        const padY = 40;
        const s = Math.min(
          (window.innerWidth - padX) / stageW,
          (window.innerHeight - padY) / stageH,
          1.8
        );
        setScale(Math.max(s, 0.8));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === "resume") setIsResumeOpen(true);
    else if (id === "skills") setIsResumeOpen(true);
    else if (id === "about") setIsContactOpen(true);
    else if (id === "projects") {
      const el = document.getElementById("projects-section");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-[100dvh] bg-[#232323] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-x-hidden">
      {/* ---------------- MOBILE / TABLET RESPONSIVE FLOW (< 768px) ---------------- */}
      <div className="w-full max-w-md mx-auto md:hidden flex flex-col gap-4 py-4">
        {/* Mobile Header Nav */}
        <div className="w-full bg-[#D2CECE] p-1.5 rounded-[22px] shadow-lg">
          <div className="w-full bg-[#F1EBEB] p-4 rounded-[18px] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#D2CECE] pb-3">
              <h1 className="text-2xl font-extrabold text-[#1C2733] font-outfit tracking-tight">
                Portfolio ⌝
              </h1>
              <Navigation
                isVertical={false}
                onSelectNav={handleNavClick}
                className="gap-3"
              />
            </div>

            {/* About Bio Card Mobile */}
            <div className="w-full h-[320px]">
              <AboutCard onOpenAbout={() => setIsContactOpen(true)} />
            </div>

            {/* Project Preview Mobile */}
            <div id="projects-section" className="w-full h-[220px]">
              <ProjectPreview
                project={activeProject}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </div>

            {/* Project Accordion Stack Mobile */}
            <div className="w-full min-h-[160px]">
              <ProjectAccordion
                projects={portfolioData.projects}
                activeIndex={activeProjectIdx}
                onSelectProject={(idx) => setActiveProjectIdx(idx)}
              />
            </div>

            {/* Bottom 4-Card Bento Grid */}
            <BottomBentoGrid
              onOpenContact={() => setIsContactOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* ---------------- DESKTOP FIXED-RATIO BENTO STAGE (>= 768px) ---------------- */}
      <div
        ref={fitRef}
        className="hidden md:block relative transition-all duration-300 select-none"
        style={{
          width: `${676 * scale}px`,
          height: `${459 * scale}px`,
        }}
      >
        <div
          ref={stageRef}
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: "676px",
            height: "459px",
            transform: `scale(${scale})`,
          }}
        >
          {/* Outer Rounded Stage (#d9d5d4 / #D2CECE) */}
          <div className="absolute left-[24px] top-[48px] w-[638px] height-[360px] h-[360px] rounded-[22px] bg-[#D2CECE] shadow-2xl" />

          {/* Master Bento Board (#efebea / #F1EBEB) */}
          <div className="absolute left-[45px] top-[59px] w-[596px] height-[325px] h-[325px] rounded-[16px] bg-[#F1EBEB]" />

          {/* Left Vertical Navigation */}
          <div className="absolute left-[62px] top-[140px] z-30">
            <Navigation isVertical={true} onSelectNav={handleNavClick} />
          </div>

          {/* 1. Chamfered Periwinkle Bio Card */}
          <div className="absolute left-[79px] top-[80px] w-[206px] h-[289px] z-20">
            <AboutCard onOpenAbout={() => setIsContactOpen(true)} />
          </div>

          {/* 2. Top Title Typography */}
          <h1 className="absolute left-[303px] top-[70px] text-[56px] font-normal tracking-[1.5px] text-[#22252E] leading-[1.1] z-10 font-outfit select-none">
            Portfolio
          </h1>
          {/* Title Corner Bracket ⌝ */}
          <div className="absolute left-[597px] top-[84px] w-[17px] h-[17px] border-t-[2.5px] border-r-[2.5px] border-[#22252E] z-10" />

          {/* 3. Interactive Split Project Preview (Left) */}
          <div className="absolute left-[306px] top-[145px] w-[191px] h-[133px] z-20">
            <ProjectPreview
              project={activeProject}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          </div>

          {/* 4. Interactive Project Stack Accordion (Right) */}
          <div className="absolute left-[516px] top-[144px] w-[122px] h-[134px] z-20">
            <ProjectAccordion
              projects={portfolioData.projects}
              activeIndex={activeProjectIdx}
              onSelectProject={(idx) => setActiveProjectIdx(idx)}
            />
          </div>

          {/* 5. Bottom 4 Bento Cards */}
          <div className="absolute left-[306px] top-[294px] w-[332px] h-[76px] z-20">
            <BottomBentoGrid
              onOpenContact={() => setIsContactOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Accessible Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
};
