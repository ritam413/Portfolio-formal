"use client";

import React from "react";
import {
  Languages,
  Eye,
  Layout,
  ScanText,
  Sparkles,
  Users,
  Layers,
  Terminal,
} from "lucide-react";

export interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-3.5 h-3.5", size = 14 }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes("python")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.91 2C6.44 2 6.78 4.38 6.78 4.38L6.79 6.86H12V7.61H4.21S2 7.36 2 12.82C2 18.28 3.93 18.04 3.93 18.04H6.28V15.75C6.28 12.51 8.94 12.51 8.94 12.51H14.24C17.06 12.51 17.06 9.87 17.06 9.87V4.38S17.39 2 11.91 2ZM9.5 4.5C10.05 4.5 10.5 4.95 10.5 5.5C10.5 6.05 10.05 6.5 9.5 6.5C8.95 6.5 8.5 6.05 8.5 5.5C8.5 4.95 8.95 4.5 9.5 4.5Z"
          fill="#3776AB"
        />
        <path
          d="M12.09 22C17.56 22 17.22 19.62 17.22 19.62L17.21 17.14H12V16.39H19.79S22 16.64 22 11.18C22 5.72 20.07 5.96 20.07 5.96H17.72V8.25C17.72 11.49 15.06 11.49 15.06 11.49H9.76C6.94 11.49 6.94 14.13 6.94 14.13V19.62S6.61 22 12.09 22ZM14.5 19.5C13.95 19.5 13.5 19.05 13.5 18.5C13.5 17.95 13.95 17.5 14.5 17.5C15.05 17.5 15.5 17.95 15.5 18.5C15.5 19.05 15.05 19.5 14.5 19.5Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  if (normalized.includes("typescript")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 10.5H5.5V12H7.5V18.5H9.5V12H11.5V10.5Z" fill="white" />
        <path
          d="M18.5 13.2C18.1 12.5 17.3 12 16.2 12C14.7 12 13.7 12.8 13.7 14.1C13.7 16.9 18.6 15.8 18.6 18C18.6 19.2 17.4 19.8 16 19.8C14.5 19.8 13.5 19 13 18.1L14.2 17C14.6 17.7 15.3 18.2 16.1 18.2C16.8 18.2 17.3 17.9 17.3 17.3C17.3 15.1 12.4 16.1 12.4 13.6C12.4 12.1 13.7 10.6 16.2 10.6C17.3 10.6 18.3 11 18.9 11.8L18.5 13.2Z"
          fill="white"
        />
      </svg>
    );
  }

  if (normalized.includes("javascript")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7.5 18.5C8.3 18.5 8.9 18.1 9.3 17.3L7.8 16.4C7.5 16.8 7.2 17 6.8 17C6.3 17 6.1 16.8 6.1 16.2V11.5H4.5V16.3C4.5 17.8 5.6 18.5 7.5 18.5ZM14.8 18.5C17 18.5 18.4 17.2 18.4 15.3C18.4 12.6 14.4 13.4 14.4 12C14.4 11.5 14.8 11.2 15.4 11.2C16 11.2 16.5 11.5 16.8 12.1L18.2 11.2C17.6 10.1 16.6 9.7 15.4 9.7C13.4 9.7 12 11 12 12.8C12 15.6 16 14.8 16 16.2C16 16.8 15.4 17.1 14.7 17.1C13.9 17.1 13.2 16.6 12.9 15.7L11.5 16.6C12 17.8 13.2 18.5 14.8 18.5Z"
          fill="#1A1A1A"
        />
      </svg>
    );
  }

  if (normalized.includes("react")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  if (normalized.includes("next")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="black" />
        <path d="M7 7.5V16.5H8.8V11.2L15.4 18.2C15.8 18 16.2 17.7 16.6 17.4L8.8 8.9H15V7.5H7Z" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("fastapi")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="#059669" />
        <path d="M13.5 3L6 13.5H11.5L10.5 21L18 10.5H12.5L13.5 3Z" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("zustand")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#443E38" />
        {/* Bear Ears */}
        <circle cx="7.5" cy="7.5" r="2.2" fill="#8D7B68" />
        <circle cx="16.5" cy="7.5" r="2.2" fill="#8D7B68" />
        {/* Bear Head */}
        <ellipse cx="12" cy="13" rx="6" ry="5" fill="#A4907C" />
        {/* Snout */}
        <ellipse cx="12" cy="14.5" rx="3" ry="2" fill="#C8B6A6" />
        {/* Nose */}
        <polygon points="12,13.5 11,14.5 13,14.5" fill="#443E38" />
        {/* Eyes */}
        <circle cx="9.8" cy="12" r="0.8" fill="#443E38" />
        <circle cx="14.2" cy="12" r="0.8" fill="#443E38" />
      </svg>
    );
  }

  if (normalized.includes("pytorch")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#EE4C2C" />
        <path d="M12 6L14 8.5C16 11 16 13 14.5 15.5C13 18 10.5 18 9 15.5C7.5 13 8.5 10 10.5 8L12 6Z" fill="white" />
        <circle cx="15.5" cy="8" r="1.2" fill="#FFD43B" />
      </svg>
    );
  }

  if (normalized.includes("tensorflow")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L7.5 14.5V9.5L12 12V22L16.5 19.5V14.5L21 17V7L12 2Z" fill="#FF6F00" />
      </svg>
    );
  }

  if (normalized.includes("opencv")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="6.5" r="4.5" stroke="#EA4335" strokeWidth="2.5" />
        <circle cx="6.5" cy="16" r="4.5" stroke="#4285F4" strokeWidth="2.5" />
        <circle cx="17.5" cy="16" r="4.5" stroke="#34A853" strokeWidth="2.5" />
      </svg>
    );
  }

  if (normalized.includes("docker")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#2496ED" />
        <path
          d="M4 14C4.5 15.5 6 17 9 17C14 17 17 14 19 12C18 11.5 16.5 11.8 15.5 12.5C15 11 13 11 11.5 11.5C11 10.5 9 10.5 8 11.5V14H4Z"
          fill="white"
        />
        <rect x="7" y="7" width="2" height="2" fill="white" />
        <rect x="10" y="7" width="2" height="2" fill="white" />
        <rect x="10" y="4.5" width="2" height="2" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("git")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.6 10.8L13.2 2.4C12.4 1.6 11.1 1.6 10.3 2.4L8.7 4L11 6.3C11.6 6.1 12.3 6.3 12.8 6.8C13.3 7.3 13.5 8 13.3 8.6L16.2 11.5C16.8 11.3 17.5 11.5 18 12C18.7 12.7 18.7 13.8 18 14.5C17.3 15.2 16.2 15.2 15.5 14.5C15 14 14.8 13.3 15 12.7L12.3 10V15.7C12.5 16 12.6 16.3 12.6 16.6C12.6 17.6 11.8 18.4 10.8 18.4C9.8 18.4 9 17.6 9 16.6C9 15.9 9.4 15.3 10 15V9.4L6.9 12.5L2.4 8C1.6 8.8 1.6 10.1 2.4 10.9L10.8 19.3C11.6 20.1 12.9 20.1 13.7 19.3L21.6 11.4C22.1 10.9 22.1 11.3 21.6 10.8Z"
          fill="#F05032"
        />
      </svg>
    );
  }

  if (normalized.includes("redis")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M2 8L12 3L22 8L12 13L2 8Z" fill="#DC382D" />
        <path d="M2 12L12 17L22 12L20 15L12 19L4 15L2 12Z" fill="#A8201A" />
        <path d="M2 16L12 21L22 16L20 19L12 23L4 19L2 16Z" fill="#751510" />
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M6 12C7.5 9 10 8.5 11.5 10C13 11.5 14.5 12 17 11C19 10 20 8.5 21 6.5C20 9 18 10.5 16.5 10C15 9.5 13.5 8.5 11.5 9C9.5 9.5 8 11 6 12ZM3 17C4.5 14 7 13.5 8.5 15C10 16.5 11.5 17 14 16C16 15 17 13.5 18 11.5C17 14 15 15.5 13.5 15C12 14.5 10.5 13.5 8.5 14C6.5 14.5 5 16 3 17Z"
          fill="#06B6D4"
        />
      </svg>
    );
  }

  if (normalized.includes("node")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#5FA04E" />
        <path d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("mongo")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 8 6 13.5C6 17.5 9 21 12 22C15 21 18 17.5 18 13.5C18 8 12 2 12 2Z" fill="#47A248" />
        <path d="M12 2V22C12 22 11.5 21 11.5 13.5C11.5 8 12 2 12 2Z" fill="#3FA037" />
      </svg>
    );
  }

  if (normalized.includes("postgres") || normalized.includes("sql")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#336791" />
        <path d="M12 6C8.5 6 7 8.5 7 11.5C7 14.5 8.5 17 12 17C14 17 15.5 16 16.2 14.8L14.5 13.8C14 14.5 13.2 15 12 15C10 15 9.2 13.5 9.2 11.5C9.2 9.5 10 8 12 8C13.2 8 14 8.5 14.5 9.2L16.2 8.2C15.5 7 14 6 12 6Z" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("gemini")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="#1A73E8" />
      </svg>
    );
  }

  if (normalized.includes("c/c++") || normalized.includes("c++") || normalized === "c") {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00599C" />
        <path d="M14.5 9.5C13.8 8.6 12.8 8 11.5 8C9.2 8 7.5 9.8 7.5 12C7.5 14.2 9.2 16 11.5 16C12.8 16 13.8 15.4 14.5 14.5L16 15.5C15 17 13.4 18 11.5 18C8.2 18 5.5 15.3 5.5 12C5.5 8.7 8.2 6 11.5 6C13.4 6 15 7 16 8.5L14.5 9.5ZM17 11V10H18V11H19V12H18V13H17V12H16V11H17ZM20.5 11V10H21.5V11H22.5V12H21.5V13H20.5V12H19.5V11H20.5Z" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("ocr") || normalized.includes("tesseract")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0284C7" />
        <path d="M4 8V5C4 4.4 4.4 4 5 4H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 4H19C19.6 4 20 4.4 20 5V8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 16V19C4 19.6 4.4 20 5 20H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 20H19C19.6 20 20 19.6 20 19V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (normalized.includes("inpainting")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#8B5CF6" />
        <path d="M15 4L19 8L8 19H4V15L15 4Z" fill="white" />
        <path d="M13.5 5.5L17.5 9.5" stroke="#8B5CF6" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes("fabric")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#EC4899" />
        <circle cx="8" cy="8" r="3" fill="white" />
        <rect x="13" y="5" width="6" height="6" rx="1" fill="white" />
        <polygon points="12,14 17,20 7,20" fill="white" />
      </svg>
    );
  }

  if (normalized.includes("webrtc")) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#10B981" />
        <path d="M6 12C6 8.7 8.7 6 12 6M18 12C18 15.3 15.3 18 12 18M9 12C9 10.3 10.3 9 12 9M15 12C15 13.7 13.7 15 12 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill="white" />
      </svg>
    );
  }

  return <Terminal className={className} style={{ width: size, height: size }} />;
};

/**
 * Bespoke App Icons for Featured Projects
 */
export const ProjectAppIcon: React.FC<{ projectId: string; className?: string }> = ({
  projectId,
  className = "w-11 h-11",
}) => {
  switch (projectId) {
    case "tax-explainer":
      return (
        <div
          className={`${className} rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shadow-sm border border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 duration-200`}
        >
          <div className="relative flex items-center justify-center">
            <ScanText className="w-5 h-5 text-white stroke-[2.2]" />
            <Sparkles className="w-2.5 h-2.5 text-yellow-300 absolute -top-1 -right-1" />
          </div>
        </div>
      );

    case "manga-translator":
      return (
        <div
          className={`${className} rounded-xl bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 flex items-center justify-center text-slate-950 shadow-sm border border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 duration-200`}
        >
          <Languages className="w-5 h-5 text-slate-950 stroke-[2.2]" />
        </div>
      );

    case "roomie":
      return (
        <div
          className={`${className} rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white shadow-sm border border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 duration-200`}
        >
          <Users className="w-5 h-5 text-white stroke-[2.2]" />
        </div>
      );

    case "iris-ai":
      return (
        <div
          className={`${className} rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-sm border border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 duration-200`}
        >
          <Eye className="w-5 h-5 text-white stroke-[2.2]" />
        </div>
      );

    case "studio-os":
      return (
        <div
          className={`${className} rounded-xl bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 flex items-center justify-center text-white shadow-sm border border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 duration-200`}
        >
          <Layout className="w-5 h-5 text-white stroke-[2.2]" />
        </div>
      );

    default:
      return (
        <div
          className={`${className} rounded-xl bg-gray-900 text-white flex items-center justify-center flex-shrink-0 shadow-sm`}
        >
          <Layers className="w-5 h-5" />
        </div>
      );
  }
};
