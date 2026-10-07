"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Printer, Check, Copy, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#cfc6c7]/60 bg-[#f8f5f5]/90 backdrop-blur-md transition-all print:hidden">
      <div className="mx-auto w-full max-w-[960px] px-4 sm:px-6">
        <div className="flex h-[54px] items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg font-bold tracking-tight text-[#443235] hover:text-[#2e2c2c] transition-colors"
          >
            {portfolioData.profile.name}
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-5 font-dia text-xs font-black uppercase tracking-wider text-[#654a4e]">
              <a href="#about" className="hover:text-[#443235] transition-colors">
                about
              </a>
              <a href="#skills" className="hover:text-[#443235] transition-colors">
                skills
              </a>
              <a href="#projects" className="hover:text-[#443235] transition-colors">
                projects
              </a>
            </nav>

            <span className="hidden md:block text-[#cfc6c7]">|</span>

            {/* Location & Time */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#654a4e]">
              <span className="font-dia font-extrabold uppercase tracking-tight text-[#443235]">
                {portfolioData.profile.location}
              </span>
              <Sun className="h-3.5 w-3.5 text-[#916a70]" />
              {time && <span className="font-mono text-xs text-[#654a4e]">{time}</span>}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 font-dia">
              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  title="Open Interactive Contact Modal"
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold tracking-tight text-white bg-[#443235] hover:bg-[#2e2c2c] border border-[#443235] rounded-md transition-all shadow-typewolf-subtle cursor-pointer active:scale-95"
                >
                  <Send className="h-3 w-3" />
                  <span>Get in Touch</span>
                </button>
              )}

              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-xs font-extrabold tracking-tight text-[#443235] bg-white hover:bg-[#f8f5f5] border border-[#cfc6c7] rounded-md transition-all shadow-typewolf-subtle cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#916a70]" />
                    <span className="text-[#916a70]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#654a4e]" />
                    <span className="hidden sm:inline">Email</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                title="Print or Save PDF Resume"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-extrabold tracking-tight text-[#443235] bg-white hover:bg-[#f8f5f5] border border-[#cfc6c7] rounded-md transition-all shadow-typewolf-subtle cursor-pointer active:scale-95"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
