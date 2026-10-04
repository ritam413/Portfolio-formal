"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, bottomCards } = portfolioData;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#F1EBEB] rounded-[20px] border border-[#D2CECE] shadow-2xl p-6 text-[#1C2733] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#D2CECE] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FEE85B] border border-[#111111]" />
            <h3 className="text-xl font-extrabold tracking-tight font-outfit">
              Resume & Credentials
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#D2CECE]/50 hover:bg-[#D2CECE] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-[#1C2733]" />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {/* Header Summary */}
          <div className="bg-white p-4 rounded-[10px] border border-[#D2CECE]">
            <h4 className="text-base font-extrabold text-[#1C2733]">
              {profile.name} — Full-Stack Engineer (AI/ML Web)
            </h4>
            <p className="text-xs text-[#555555] mt-1">{profile.email}</p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7F84D0] uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="bg-white p-3 rounded-[8px] border border-[#D2CECE] text-xs">
              <div className="font-bold text-[#1C2733]">{profile.university}</div>
              <div className="text-[#555555] flex justify-between mt-0.5">
                <span>B.Tech in Computer Science & Engineering</span>
                <span className="font-semibold text-[#14301F]">{profile.cgpa}</span>
              </div>
              <div className="text-[11px] text-[#777777] mt-1">Status: {profile.year}</div>
            </div>
          </div>

          {/* Engineering Experience / Impact */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7F84D0] uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Key Impact</span>
            </div>
            <div className="bg-white p-3 rounded-[8px] border border-[#D2CECE] text-xs space-y-1.5">
              <div className="font-bold text-[#1C2733]">PicsY Image Engines</div>
              <p className="text-[11.5px] text-[#444444] leading-relaxed">
                Re-architectured core image processing pipeline reducing external API dependency by 80%. Implemented client-side Fabric.js vector canvas operations coupled with Redis caching for ultra-low latency rendering.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7F84D0] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {bottomCards.resume.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 rounded-[4px] bg-white border border-[#D2CECE] text-[11px] font-semibold text-[#1C2733]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Download Action */}
          <div className="pt-3 border-t border-[#D2CECE] flex justify-end">
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Ritam's official curriculum vitae (PDF)...");
              }}
              className="px-4 py-2 rounded-[6px] bg-[#FEE85B] text-[#111111] text-xs font-extrabold hover:bg-[#FADB3B] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
