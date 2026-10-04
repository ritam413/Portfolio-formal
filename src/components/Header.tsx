"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Printer, Check, Copy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Header: React.FC = () => {
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md transition-all print:hidden">
      <div className="mx-auto w-full max-w-[960px] px-4 sm:px-6">
        <div className="flex h-[52px] items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
          >
            {portfolioData.profile.name}
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden sm:flex items-center gap-5 text-sm text-gray-500">
              <a href="#about" className="hover:text-gray-900 transition-colors">
                about
              </a>
              <a href="#skills" className="hover:text-gray-900 transition-colors">
                skills
              </a>
              <a href="#projects" className="hover:text-gray-900 transition-colors">
                projects
              </a>
            </nav>

            <span className="hidden sm:block text-gray-300">|</span>

            {/* Location & Time */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="font-medium text-gray-700">{portfolioData.profile.location}</span>
              <Sun className="h-3.5 w-3.5 text-amber-500" />
              {time && <span className="text-gray-400 font-mono text-xs">{time}</span>}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Email</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                title="Print or Save PDF Resume"
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-gray-900 bg-gray-900 hover:bg-black text-white rounded-md transition-colors cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
