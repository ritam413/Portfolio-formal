"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectAccordionProps {
  projects: ProjectItem[];
  activeIndex: number;
  onSelectProject: (index: number) => void;
  className?: string;
}

export const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  projects,
  activeIndex,
  onSelectProject,
  className = "",
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 2800; // 2.8 seconds per project card
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    startTimeRef.current = performance.now();
  }, [activeIndex]);

  useEffect(() => {
    const animate = (now: number) => {
      if (!isPaused) {
        const elapsed = now - startTimeRef.current;
        const p = Math.min(elapsed / duration, 1);
        setProgress(p * 100);

        if (elapsed >= duration) {
          onSelectProject((activeIndex + 1) % projects.length);
          startTimeRef.current = now;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [activeIndex, isPaused, projects.length, onSelectProject]);

  return (
    <div
      className={`relative w-full h-full flex flex-col rounded-[8px] sm:rounded-[10px] overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        startTimeRef.current = performance.now() - (progress / 100) * duration;
      }}
    >
      {projects.map((project, idx) => {
        const isActive = idx === activeIndex;

        return (
          <button
            key={project.id}
            onClick={() => onSelectProject(idx)}
            onFocus={() => onSelectProject(idx)}
            className="relative w-full text-left transition-all duration-500 ease-[cubic-bezier(0.6,0.05,0.2,1)] flex flex-col justify-start px-2 sm:px-2.5 py-1 sm:py-1.5 overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#111111]"
            style={{
              backgroundColor: project.color,
              flexGrow: isActive ? 2.8 : 0.8,
              flexShrink: 0,
              minHeight: isActive ? "52px" : "18px",
            }}
          >
            {/* Title Row */}
            <div className="flex items-center justify-between w-full">
              <span
                className={`text-[9.5px] sm:text-[11px] font-bold tracking-tight text-[#111111] transition-all font-sansita ${
                  isActive ? "underline decoration-[#111111] underline-offset-2" : "hover:opacity-90"
                }`}
              >
                {project.title}
              </span>
              <span className="text-[7px] font-semibold text-[#111111]/70 uppercase tracking-wider">
                0{idx + 1}
              </span>
            </div>

            {/* Expanded Description & Tags */}
            {isActive && (
              <div className="mt-1 transition-all duration-300">
                <p className="text-[7.5px] sm:text-[8px] text-[#111111]/90 leading-tight font-normal line-clamp-2">
                  {project.hook}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[6.5px] sm:text-[7px] font-bold text-[#111111]/80 font-mono">
                    {project.tags.join(" · ")}
                  </span>
                </div>
              </div>
            )}

            {/* Linear Progress Bar for active cycling card */}
            {isActive && (
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-[#111111] transition-none"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
