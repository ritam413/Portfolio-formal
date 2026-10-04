"use client";

import React from "react";
import { ProjectItem } from "@/data/portfolio";
import { X, ExternalLink, Github, CheckCircle2, Terminal } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#F1EBEB] rounded-[18px] border border-[#D2CECE] shadow-2xl p-6 overflow-hidden text-[#1C2733]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between border-b border-[#D2CECE] pb-3">
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <h3 className="text-xl font-extrabold tracking-tight font-outfit">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#D2CECE]/50 hover:bg-[#D2CECE] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-[#1C2733]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4">
          <div>
            <span className="text-[10px] font-bold text-[#7F84D0] uppercase tracking-wider">
              Category
            </span>
            <p className="text-sm font-semibold text-[#1C2733]">{project.category}</p>
          </div>

          <div>
            <span className="text-[10px] font-bold text-[#555555] uppercase tracking-wider">
              Problem Solved
            </span>
            <p className="text-xs text-[#383838] leading-relaxed mt-0.5">
              {project.problemSolved}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <span className="text-[10px] font-bold text-[#555555] uppercase tracking-wider">
              Architecture & Stack
            </span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-[4px] bg-white border border-[#D2CECE] text-xs font-semibold text-[#1C2733]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs with Activated Deployed Links */}
          <div className="pt-3 border-t border-[#D2CECE] flex items-center justify-end gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-[6px] bg-white border border-[#D2CECE] text-xs font-bold text-[#1C2733] hover:bg-[#FAF8F8] flex items-center gap-1.5 transition-all active:scale-95"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-[6px] bg-[#14301F] text-white text-xs font-bold hover:bg-[#1E472E] flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
              <span>Open Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
