"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Send, FileText } from "lucide-react";

interface BottomBentoGridProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  className?: string;
}

export const BottomBentoGrid: React.FC<BottomBentoGridProps> = ({
  onOpenContact,
  onOpenResume,
  className = "",
}) => {
  const { bottomCards } = portfolioData;
  const [count, setCount] = useState(0);

  // Animated Count-Up on mount for 5 PROJECTS
  useEffect(() => {
    let start = 0;
    const target = bottomCards.metrics.count;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 120);

    return () => clearInterval(timer);
  }, [bottomCards.metrics.count]);

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 select-none ${className}`}>
      {/* 1. CONTACT ME Card */}
      <button
        onClick={onOpenContact}
        className="relative group w-full h-[76px] sm:h-[82px] bg-[#545454] rounded-[10px] p-2.5 flex flex-col items-center justify-center gap-1.5 text-white transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 active:scale-95 cursor-pointer shadow-xs"
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
          <svg viewBox="0 0 64 64" className="w-5 h-5 fill-white">
            <path d="M58 8 6 28c-3 1-3 4 0 5l13 4 5 16c1 3 4 3 6 1l7-7 13 10c2 1 4 0 5-3L62 11c1-3-2-5-4-3z" />
            <path d="M24 37 52 18 29 41 28 52z" fill="#BFD4E6" />
          </svg>
        </div>
        <span
          className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#CDFFF1] font-sansita uppercase"
        >
          {bottomCards.contact.title}
        </span>
      </button>

      {/* 2. RESUME Card */}
      <button
        onClick={onOpenResume}
        className="relative group w-full h-[76px] sm:h-[82px] bg-[#FEE85B] rounded-[10px] p-2.5 flex flex-col items-center justify-center gap-1 text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:rotate-1 active:scale-95 cursor-pointer shadow-xs"
      >
        {/* Stylized CV Icon */}
        <div className="w-7 h-9 bg-white border-[1.5px] border-[#111111] rounded-[3px] p-1 flex flex-col justify-between shadow-2xs group-hover:scale-105 transition-transform">
          <span className="text-[7.5px] font-extrabold leading-none">CV</span>
          <div className="space-y-0.5">
            <div className="h-[1.5px] bg-[#111111] w-full rounded-full" />
            <div className="h-[1.5px] bg-[#111111] w-3/4 rounded-full" />
            <div className="h-[1.5px] bg-[#111111] w-1/2 rounded-full" />
          </div>
        </div>
        <span
          className="text-[9.5px] sm:text-[10.5px] font-extrabold tracking-wider font-sansita uppercase"
        >
          {bottomCards.resume.title}
        </span>
      </button>

      {/* 3. PRODUCTS Card (Vertical Text Badge) */}
      <div className="relative w-full h-[76px] sm:h-[82px] bg-[#FF3F33] rounded-[10px] flex items-center justify-center overflow-hidden shadow-xs">
        <span
          className="text-[12px] sm:text-[13px] font-extrabold tracking-[2px] text-[#CDFFF1] font-sansita uppercase transform -rotate-90 sm:rotate-0"
        >
          {bottomCards.products.title}
        </span>
      </div>

      {/* 4. 5 PROJECTS Counter Card */}
      <div className="relative w-full h-[76px] sm:h-[82px] bg-[#9FC87E] border-[1.5px] border-[#333333]/20 rounded-[10px] p-2 flex flex-col items-center justify-center text-[#023325] shadow-xs">
        <span className="text-3xl sm:text-4xl font-extrabold leading-none tracking-tight font-outfit">
          {count}
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-wider mt-0.5 font-sansita uppercase">
          {bottomCards.metrics.label}
        </span>
      </div>
    </div>
  );
};
