"use client";

import React from "react";

interface NavigationProps {
  onSelectNav?: (id: string) => void;
  className?: string;
  isVertical?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  onSelectNav,
  className = "",
  isVertical = true,
}) => {
  const navItems = [
    { id: "resume", label: "RESUME" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
  ];

  if (!isVertical) {
    return (
      <nav className={`flex items-center gap-6 ${className}`} aria-label="Mobile Navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectNav?.(item.id)}
            className="text-xs font-bold tracking-wider text-[#111111] hover:text-[#7F84D0] transition-colors uppercase font-sansita"
          >
            {item.label}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className={`relative select-none ${className}`} aria-label="Vertical Desktop Navigation">
      <div className="flex flex-col gap-14">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectNav?.(item.id)}
            className="text-[9px] font-bold tracking-[0.4px] text-[#111111] hover:text-[#7F84D0] transition-all -rotate-90 origin-left whitespace-nowrap uppercase cursor-pointer hover:scale-105 active:scale-95"
            style={{ fontFamily: "'Sansita', Georgia, serif" }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
