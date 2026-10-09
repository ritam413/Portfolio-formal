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
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 112px, 124px"
              className="object-cover"
              priority
            />
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
