"use client";

import React from "react";
import { ProjectItem } from "@/data/portfolio";
import { ExternalLink, Github, Sparkles } from "lucide-react";

interface ProjectPreviewProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
  className?: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
  onOpenDetails,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full h-full bg-[#F6F3E8] rounded-[10px] sm:rounded-[12px] shadow-sm border border-[#E5E2D6] overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 select-none transition-all duration-300 ${className}`}
    >
      {/* Top Browser Bar */}
      <div className="h-4 sm:h-5 bg-white -mx-3 -mt-3 px-3 border-b border-[#E5E2D6] flex items-center justify-between text-[7px] sm:text-[8px] font-bold text-[#1C2733]">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
          <span className="ml-1 font-semibold text-[#555555]">{project.title}</span>
        </div>
        <div className="flex items-center gap-1.5 font-normal text-[#888888]">
          <span>AI Engine</span>
          <span>·</span>
          <span className="text-[#27C93F] font-semibold">Live</span>
        </div>
      </div>

      {/* Pill Badge */}
      <div className="text-center mt-2 sm:mt-2.5">
        <span className="inline-flex items-center gap-1 bg-[#FBE45B] text-[#14141B] font-bold text-[7px] sm:text-[8px] px-2 py-0.5 rounded-[4px] border border-[#14141B]/10 shadow-2xs">
          <Sparkles className="w-2 h-2 text-[#14141B]" />
          Google Gemini Hackathon 2026 · Top Track
        </span>
      </div>

      {/* Dynamic Headline Hook */}
      <div className="text-center my-1 sm:my-2">
        <h4 className="text-sm sm:text-base font-extrabold text-[#14141B] leading-tight tracking-tight">
          {project.title === "Tax Explainer" ? (
            <>
              Split expenses.
              <br />
              Settle debts.
              <br />
              <mark className="bg-[#FBE45B] text-[#14141B] px-1 py-0.2 border border-[#14141B] rounded-[2px]">
                Say Briefly.
              </mark>
            </>
          ) : (
            <>
              {project.category}
              <br />
              <mark className="bg-[#FBE45B] text-[#14141B] px-1 py-0.2 border border-[#14141B] rounded-[2px]">
                {project.title}
              </mark>
            </>
          )}
        </h4>
        <p className="text-[7px] sm:text-[8px] text-[#555555] mt-1.5 max-w-[240px] mx-auto leading-relaxed line-clamp-3">
          {project.problemSolved}
        </p>
      </div>

      {/* Action Buttons & Links */}
      <div className="flex items-center justify-center gap-1.5 mt-1">
        <button
          onClick={() => onOpenDetails(project)}
          className="px-2.5 py-1 rounded-[4px] bg-[#14301F] text-white text-[7.5px] sm:text-[8.5px] font-bold hover:bg-[#1E472E] active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Explore Details</span>
          <ExternalLink className="w-2 h-2" />
        </button>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1 rounded-[4px] bg-white text-[#14301F] border border-[#CFCAB5] text-[7.5px] sm:text-[8.5px] font-bold hover:bg-[#FAF8F2] active:scale-95 transition-all flex items-center gap-1"
        >
          <span>Live App</span>
          <ExternalLink className="w-2 h-2" />
        </a>
      </div>

      {/* Tech Chips */}
      <div className="flex flex-wrap items-center justify-center gap-1 mt-1.5 text-[6.5px] sm:text-[7.5px] text-[#666666]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-1.5 py-0.5 rounded-[3px] bg-white border border-[#DDDDDD] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Laser Scanline Beam Animation */}
      <div className="absolute left-0 right-0 h-4 bg-gradient-to-b from-transparent via-[#FBE45B]/40 to-transparent animate-scan pointer-events-none" />
    </div>
  );
};
