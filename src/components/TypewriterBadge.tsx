"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin, useGSAP);
}

interface TypewriterBadgeProps {
  prefix?: string;
  words?: string[];
  className?: string;
}

export const TypewriterBadge: React.FC<TypewriterBadgeProps> = ({
  prefix = "Available for",
  words = ["internship", "collaborator", "freelancing"],
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      // Blinking cursor
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.45,
        ease: "power2.inOut",
      });

      // Typewriter master timeline
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.2,
      });

      words.forEach((word) => {
        // Type word
        tl.to(textRef.current, {
          text: { value: word, delimiter: "" },
          duration: Math.max(0.4, word.length * 0.08),
          ease: "none",
        });

        // Hold while readable
        tl.to({}, { duration: 1.8 });

        // Erase word
        tl.to(textRef.current, {
          text: { value: "", delimiter: "" },
          duration: Math.max(0.2, word.length * 0.04),
          ease: "none",
        });

        // Short pause between words
        tl.to({}, { duration: 0.25 });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#916a70]/10 border border-[#916a70]/25 text-[#916a70] font-dia text-[11px] font-black uppercase tracking-wider ${className}`}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#916a70] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#916a70]"></span>
      </span>
      <span className="inline-flex items-center">
        <span>{prefix}&nbsp;</span>
        <span ref={textRef} className="inline-block text-[#916a70] min-w-[4px]">
          {words[0]}
        </span>
        <span
          ref={cursorRef}
          className="inline-block w-[1.5px] h-[11px] bg-[#916a70] ml-0.5 align-middle"
        />
      </span>
    </div>
  );
};
