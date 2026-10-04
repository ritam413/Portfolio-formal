"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

interface AboutCardProps {
  onOpenAbout?: () => void;
  className?: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({ onOpenAbout, className = "" }) => {
  const { profile } = portfolioData;

  return (
    <div
      className={`relative w-full h-full bg-[#7F84D0] rounded-br-[18px] rounded-bl-[18px] rounded-tr-[18px] rounded-tl-none overflow-hidden text-white shadow-sm flex flex-col justify-between p-4 md:p-5 select-none ${className}`}
      onClick={onOpenAbout}
    >
      {/* Top Chamfered "About Me" Tab */}
      <div className="absolute top-0 left-0 z-20 flex items-center">
        <div className="h-[22px] px-3 bg-[#F1EBEB] rounded-t-[10px] flex items-center gap-1.5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#111111] animate-pulse" />
          <span className="text-[10px] font-bold text-[#383838] tracking-tight">
            {profile.badgeTitle}
          </span>
        </div>
        {/* Chamfer convex/concave smooth curve join */}
        <div className="w-3 h-3 bg-[#7F84D0] relative">
          <div className="w-3 h-3 rounded-bl-[10px] bg-[#F1EBEB]" />
        </div>
      </div>

      {/* Concentric Avatar Aura & Halo */}
      <div className="relative z-10 flex justify-end mt-2 md:mt-3 pr-1">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-[124px] md:h-[124px] rounded-full bg-[#F1EBEB] p-1.5 shadow-sm flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <div className="w-full h-full rounded-full bg-[#E2AFEC] overflow-hidden relative flex items-center justify-center">
            {/* High-fidelity Vector Avatar Illustration matching Figma */}
            <svg viewBox="0 0 112 112" className="w-full h-full">
              <path d="M18 112c2-22 18-30 38-30s36 8 38 30z" fill="#ffffff" />
              <rect x="47" y="62" width="20" height="24" rx="8" fill="#e9b99a" />
              <ellipse cx="57" cy="46" rx="21" ry="26" fill="#f1c7aa" />
              <path
                d="M33 44c-4-22 8-34 26-33 16 1 24 12 20 32-3-9-8-13-12-14-8 3-22 2-26 6-3 2-5 5-8 9z"
                fill="#1c1a1f"
              />
              <path d="M36 40c-2 8-1 14 1 20" stroke="#1c1a1f" strokeWidth="4" fill="none" />
              <circle cx="66" cy="46" r="1.6" fill="#2a2a2a" />
              <path d="M60 62q5 2 9 0" stroke="#bb9977" fill="none" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Greeting & Name Headlines */}
      <div className="relative z-10 mt-1 md:mt-2">
        <span className="block text-2xl sm:text-3xl font-light text-[#F0F0FB] tracking-tight leading-none">
          {profile.greeting}
        </span>
        <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-wide leading-none mt-0.5">
          {profile.name}
        </span>
      </div>

      {/* Bio Description with Academic and Engineering Accolades */}
      <div className="relative z-10 mt-2 md:mt-3">
        <p className="text-[9px] sm:text-[10px] md:text-[10.5px] leading-relaxed text-[#F0F0FB] font-normal line-clamp-4 md:line-clamp-none">
          <strong className="font-semibold text-white">Full-Stack Engineer (AI/ML Web)</strong> | {profile.university} | B.Tech ({profile.cgpa}) | {profile.year}
          <br />
          {profile.highlight}
        </p>
      </div>
    </div>
  );
};
