"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Code2,
  Layers,
  Cpu,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { Header } from "./Header";

export const ResumePage: React.FC = () => {
  const { profile, socials, skills, projects } = portfolioData;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-gray-200">
      <Header />

      <main className="mx-auto w-full max-w-[960px] px-4 sm:px-6 py-8 sm:py-14 space-y-12">
        {/* HERO / BIO SECTION */}
        <section id="about" className="space-y-6">
          <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                  {profile.name}
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-600">
                  {profile.role}
                </p>
              </div>

              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                {profile.bioIntro} {profile.tagline}
              </p>
            </div>

            {/* Profile Avatar / Photo */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0 shadow-xs">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 80px, 112px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* SUMMARY BULLETS */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Summary & Background</span>
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600 marker:text-gray-300 leading-relaxed">
              {profile.summaryBullets.map((bullet, idx) => (
                <li key={idx} className="pl-1">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL LINKS & MUSIC STATUS */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <a
                href={profile.email ? `mailto:${profile.email}` : "#"}
                title="Send Email"
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter / X"
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="text-gray-400 hover:text-gray-900 transition-colors p-1"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

            {/* Now Playing Widget */}
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>♪ Listening to</span>
              <a
                href={profile.music.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-0.5 font-medium text-gray-700 hover:text-gray-900"
              >
                <span className="border-b border-gray-300 group-hover:border-gray-900 transition-colors">
                  {profile.music.title}
                </span>
                <span className="text-gray-400">by {profile.music.artist}</span>
                <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-4 pt-4 border-t border-gray-200">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-500" />
            <span>Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Languages */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-2xs space-y-2">
              <span className="text-xs font-medium text-gray-500 block">Languages</span>
              <div className="flex flex-wrap gap-1.5">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Web */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-2xs space-y-2">
              <span className="text-xs font-medium text-gray-500 block">Frameworks & Web</span>
              <div className="flex flex-wrap gap-1.5">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI / ML & Computer Vision */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-2xs space-y-2">
              <span className="text-xs font-medium text-gray-500 block">AI / ML & Computer Vision</span>
              <div className="flex flex-wrap gap-1.5">
                {skills.aiMl.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture & Tools */}
            <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-2xs space-y-2">
              <span className="text-xs font-medium text-gray-500 block">Architecture & Datastores</span>
              <div className="flex flex-wrap gap-1.5">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>Projects ({projects.length})</span>
            </h2>
            <span className="text-xs text-gray-400">All live & open-source</span>
          </div>

          <div className="space-y-5">
            {projects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="group p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:border-gray-300 hover:shadow-xs transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {/* Project Avatar Pill */}
                    <div
                      style={{ backgroundColor: project.iconBg, color: project.iconText }}
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 border border-black/10 shadow-2xs"
                    >
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-1 font-semibold text-base text-gray-900 hover:text-black"
                        >
                          <span className="border-b border-gray-300 group-hover/link:border-gray-900 transition-colors">
                            {project.title}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover/link:text-gray-900 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                        <span className="text-xs text-gray-400 font-normal">
                          · {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Outbound Quick Links */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source Code"
                      className="text-gray-400 hover:text-gray-900 p-1 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pl-[52px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CREDENTIALS SECTION */}
        <section className="space-y-4 pt-4 border-t border-gray-200">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
            <span>Education & Academic Standing</span>
          </h2>

          <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="space-y-0.5">
              <div className="font-semibold text-gray-900">{profile.university}</div>
              <div className="text-gray-600">{profile.degree}</div>
              <div className="text-xs text-gray-400">Class of 2026 · {profile.year}</div>
            </div>

            <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Grade
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-sm">
                {profile.cgpa}
              </span>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400 space-y-1 print:hidden">
          <p>© 2026 {profile.name}. Single-page portfolio & resume.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
};
