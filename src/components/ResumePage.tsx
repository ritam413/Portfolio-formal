"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Code2,
  Layers,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Header } from "./Header";
import { TechIcon } from "./TechIcons";
import { ExpandableCardDemo } from "./ExpandableCardGrid";

export const ResumePage: React.FC = () => {
  const { profile, skills, projects } = portfolioData;

  return (
    <div className="min-h-screen bg-[#f8f5f5] text-[#443235] selection:bg-[#916a70] selection:text-white">
      <Header />

      <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 pt-4 sm:pt-6 pb-12 sm:pb-16 space-y-8 sm:space-y-10">
        {/* TWO-COLUMN TOP SECTION (70% Bio/Summary/Projects, 30% Avatar/Contacts/Skills) */}
        <section id="about" className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
          {/* LEFT COLUMN: 70% Width (Name, Role, Bio, Summary, Projects) */}
          <div className="w-full md:w-[68%] space-y-4 sm:space-y-5 flex-1">
            {/* Name & Role Header */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#916a70]/10 border border-[#916a70]/25 text-[#916a70] font-dia text-[11px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#916a70] animate-ping" />
                Available for Roles & Collabs
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#443235]">
                {profile.name}
              </h1>
              <p className="font-serif text-lg sm:text-xl font-normal text-[#654a4e] italic">
                {profile.role}
              </p>
            </div>

            {/* Bio Narrative */}
            <div className="space-y-2.5 text-base text-[#443235] leading-relaxed font-serif">
              <p className="font-normal text-[#443235]">
                {profile.bioIntro}
              </p>
              <p className="text-sm text-[#654a4e]">
                {profile.tagline}
              </p>
            </div>

            {/* Summary Bullets */}
            <div className="space-y-3 pt-2">
              <h2 className="font-dia text-xs font-black uppercase tracking-wider text-[#654a4e] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#916a70]" />
                <span>Summary & Background</span>
              </h2>
              <ul className="space-y-2 text-sm text-[#443235] leading-relaxed">
                {profile.summaryBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#916a70] flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROJECTS SECTION DIRECTLY UNDER SUMMARY */}
            <div id="projects" className="space-y-3.5 pt-5 border-t border-[#cfc6c7]/60">
              <div className="flex items-center justify-between">
                <h2 className="font-dia text-xs font-black uppercase tracking-wider text-[#654a4e] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#916a70]" />
                  <span>Projects ({projects.length})</span>
                </h2>
                <span className="font-dia text-[11px] font-bold text-[#654a4e] uppercase tracking-wider">
                  Click to Expand
                </span>
              </div>

              <ExpandableCardDemo />
            </div>
          </div>

          {/* RIGHT COLUMN: 30% Width (Avatar with Music Disk & Gradient, Contacts, Skills) */}
          <div className="w-full md:w-[32%] md:min-w-[270px] space-y-4">
            {/* Avatar Photo with Integrated Music Vinyl Player Overlay & Gradient */}
            <div className="relative w-full aspect-square max-w-[280px] mx-auto md:mx-0 rounded-md overflow-hidden border border-[#cfc6c7] shadow-typewolf-subtle bg-[#2e2c2c] group">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 280px, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Bottom-to-Top Black Gradient restricted to only bottom 30% */}
              <div className="absolute bottom-0 inset-x-0 h-[30%] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

              {/* Overlaid Music Playing Card at the Bottom Right of Avatar */}
              <div className="absolute bottom-0 inset-x-0 p-3 z-10 flex items-center justify-end gap-2.5">
                {/* Track Text on the Right (beside the Vinyl Disk) */}
                <a
                  href={profile.music.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/music text-right min-w-0"
                >
                  <div className="flex items-center justify-end gap-1 text-xs font-bold text-white group-hover/music:text-rose-200 transition-colors font-serif">
                    <span className="truncate max-w-[155px]">{profile.music.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/70 group-hover/music:text-rose-200 transition-transform group-hover/music:translate-x-0.5 group-hover/music:-translate-y-0.5 flex-shrink-0" />
                  </div>
                  <div className="text-[11px] text-zinc-300 truncate max-w-[155px] font-sans">
                    {profile.music.artist}
                  </div>
                </a>

                {/* Real Vinyl Record Disk on the Far Right */}
                <a
                  href={profile.music.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Listen to Starboy by The Weeknd"
                  className="relative flex-shrink-0"
                >
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-xl animate-[spin_5s_linear_infinite] ring-1 ring-white/30">
                    <Image
                      src="/assets/vinyl-disk.png"
                      alt="Vinyl Record Disk"
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </div>
                  {/* Glowing Pulse Dot */}
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping opacity-75" />
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#916a70] border border-black" />
                </a>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div>
              <div className="flex items-center justify-between gap-1 p-1 rounded-md bg-white border border-[#cfc6c7] shadow-typewolf-subtle">
                <a
                  href={profile.email ? `mailto:${profile.email}` : "#"}
                  title="Send Email"
                  className="flex items-center justify-center w-9 h-9 rounded-md text-[#654a4e] hover:text-[#443235] hover:bg-[#f8f5f5] transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="flex items-center justify-center w-9 h-9 rounded-md text-[#654a4e] hover:text-[#443235] hover:bg-[#f8f5f5] transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="flex items-center justify-center w-9 h-9 rounded-md text-[#654a4e] hover:text-[#443235] hover:bg-[#f8f5f5] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter / X"
                  className="flex items-center justify-center w-9 h-9 rounded-md text-[#654a4e] hover:text-[#443235] hover:bg-[#f8f5f5] transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Telegram"
                  className="flex items-center justify-center w-9 h-9 rounded-md text-[#654a4e] hover:text-[#443235] hover:bg-[#f8f5f5] transition-all"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* SKILLS SECTION UNDER IMAGE & CONTACTS - COMPACT ICON DOCK WITH HOVER TOOLTIPS */}
            <div id="skills" className="space-y-2.5 pt-1">
              <h2 className="font-dia text-xs font-black uppercase tracking-wider text-[#654a4e] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#916a70]" />
                <span>Technical Skills</span>
              </h2>

              <div className="space-y-2 font-dia">
                {/* Languages */}
                <div className="p-2.5 rounded-md bg-white border border-[#cfc6c7] shadow-typewolf-subtle space-y-1.5">
                  <span className="text-[10px] font-black text-[#654a4e] uppercase tracking-wider block">
                    Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.languages.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill relative w-8 h-8 rounded-md bg-[#f8f5f5] border border-[#cfc6c7]/80 hover:bg-white hover:border-[#916a70] hover:shadow-xs flex items-center justify-center transition-all duration-150 cursor-pointer"
                        title={skill}
                      >
                        <TechIcon name={skill} className="w-4 h-4" size={16} />
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#443235] text-white text-[10px] font-extrabold shadow-md whitespace-nowrap opacity-0 group-hover/skill:opacity-100 pointer-events-none transition-all duration-150 transform group-hover/skill:-translate-y-0.5 z-40">
                          {skill}
                          <div className="w-1.5 h-1.5 bg-[#443235] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Web */}
                <div className="p-2.5 rounded-md bg-white border border-[#cfc6c7] shadow-typewolf-subtle space-y-1.5">
                  <span className="text-[10px] font-black text-[#654a4e] uppercase tracking-wider block">
                    Frameworks & State
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.frameworks.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill relative w-8 h-8 rounded-md bg-[#f8f5f5] border border-[#cfc6c7]/80 hover:bg-white hover:border-[#916a70] hover:shadow-xs flex items-center justify-center transition-all duration-150 cursor-pointer"
                        title={skill}
                      >
                        <TechIcon name={skill} className="w-4 h-4" size={16} />
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#443235] text-white text-[10px] font-extrabold shadow-md whitespace-nowrap opacity-0 group-hover/skill:opacity-100 pointer-events-none transition-all duration-150 transform group-hover/skill:-translate-y-0.5 z-40">
                          {skill}
                          <div className="w-1.5 h-1.5 bg-[#443235] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI / ML & Vision */}
                <div className="p-2.5 rounded-md bg-white border border-[#cfc6c7] shadow-typewolf-subtle space-y-1.5">
                  <span className="text-[10px] font-black text-[#654a4e] uppercase tracking-wider block">
                    AI / ML & Vision
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.aiMl.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill relative w-8 h-8 rounded-md bg-[#f8f5f5] border border-[#cfc6c7]/80 hover:bg-white hover:border-[#916a70] hover:shadow-xs flex items-center justify-center transition-all duration-150 cursor-pointer"
                        title={skill}
                      >
                        <TechIcon name={skill} className="w-4 h-4" size={16} />
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#443235] text-white text-[10px] font-extrabold shadow-md whitespace-nowrap opacity-0 group-hover/skill:opacity-100 pointer-events-none transition-all duration-150 transform group-hover/skill:-translate-y-0.5 z-40">
                          {skill}
                          <div className="w-1.5 h-1.5 bg-[#443235] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture & Tools */}
                <div className="p-2.5 rounded-md bg-white border border-[#cfc6c7] shadow-typewolf-subtle space-y-1.5">
                  <span className="text-[10px] font-black text-[#654a4e] uppercase tracking-wider block">
                    Datastores & Infra
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.tools.map((skill) => (
                      <div
                        key={skill}
                        className="group/skill relative w-8 h-8 rounded-md bg-[#f8f5f5] border border-[#cfc6c7]/80 hover:bg-white hover:border-[#916a70] hover:shadow-xs flex items-center justify-center transition-all duration-150 cursor-pointer"
                        title={skill}
                      >
                        <TechIcon name={skill} className="w-4 h-4" size={16} />
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#443235] text-white text-[10px] font-extrabold shadow-md whitespace-nowrap opacity-0 group-hover/skill:opacity-100 pointer-events-none transition-all duration-150 transform group-hover/skill:-translate-y-0.5 z-40">
                          {skill}
                          <div className="w-1.5 h-1.5 bg-[#443235] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CREDENTIALS SECTION */}
        <section className="space-y-4 pt-6 border-t border-[#cfc6c7]/60">
          <h2 className="font-dia text-xs font-black uppercase tracking-wider text-[#654a4e] flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#916a70]" />
            <span>Education & Academic Standing</span>
          </h2>

          <div className="p-4 rounded-md bg-white border border-[#cfc6c7] shadow-typewolf-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="space-y-0.5">
              <div className="font-serif font-bold text-base text-[#443235]">{profile.university}</div>
              <div className="text-[#654a4e] font-serif">{profile.degree}</div>
              <div className="font-dia text-xs font-bold text-[#654a4e] tracking-tight">Class of 2026 · {profile.year}</div>
            </div>

            <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0 font-dia">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#654a4e]">
                Grade
              </span>
              <span className="px-3 py-1 rounded-md bg-[#916a70]/10 border border-[#916a70]/30 text-[#443235] font-black text-sm">
                {profile.cgpa}
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-[#cfc6c7]/60 text-center text-xs text-[#654a4e] space-y-1 font-dia print:hidden">
          <p>© 2026 {profile.name}. Single-page portfolio & resume.</p>
          <p>Typeset in Domaine & Dia aesthetic.</p>
        </footer>
      </main>
    </div>
  );
};
