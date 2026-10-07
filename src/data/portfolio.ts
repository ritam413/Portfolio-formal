import { projectCardsList, mediaAssets } from "./assets";
import { socialsList, socialLinks, navigationLinks, musicLink, SocialLink, NavigationLink } from "./links";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  iconBg: string;
  iconText: string;
  hook?: string;
  problemSolved?: string;
  color?: string;
  textColor?: string;
  previewImage?: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    greeting?: string;
    badgeTitle?: string;
    handle: string;
    role: string;
    location: string;
    tagline: string;
    bioIntro: string;
    avatar: string;
    email: string;
    university: string;
    degree: string;
    cgpa: string;
    year: string;
    highlight?: string;
    bio?: string;
    summaryBullets: string[];
    music: {
      title: string;
      artist: string;
      url: string;
    };
  };
  navigation: NavigationLink[];
  socials: SocialLink[];
  skills: {
    languages: string[];
    frameworks: string[];
    aiMl: string[];
    tools: string[];
  };
  projects: ProjectItem[];
  bottomCards: {
    contact: {
      title: string;
      email: string;
      color: string;
      textColor: string;
      art: string;
      socials: Array<{ name: string; url: string }>;
    };
    resume: {
      title: string;
      color: string;
      textColor: string;
      art: string;
      skills: string[];
    };
    products: {
      title: string;
      color: string;
      textColor: string;
    };
    metrics: {
      count: number;
      label: string;
      color: string;
      textColor: string;
    };
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Ritam",
    greeting: "Im,",
    badgeTitle: "About Me",
    handle: "ritam-dev",
    role: "Full-Stack Engineer (AI/ML Web)",
    location: "Kolkata, IN",
    tagline: "Building high-performance AI systems, vision pipelines, and web apps.",
    bioIntro: "Yo! I'm Ritam. Full-stack engineer & AI builder crafting fast, visual, and intelligent web software.",
    avatar: mediaAssets.avatar,
    email: socialLinks.email.label || "ritam.contact@gmail.com",
    university: "Techno India University",
    degree: "B.Tech in Computer Science & Engineering",
    cgpa: "8.2 CGPA",
    year: "3rd Year",
    highlight: "Re-Architectured PicsY Image Engines to Reduce API Dependency by 80% | High-Performance UX via Fabric.js, Redis, & React",
    bio: "Full-Stack Engineer(AI/ML Web) | Techno India University | B.Tech ( 8.2 CGPA) | 3rd Year Re-Architectured PicsY Image Engines to Reduce API Dependency by 80% | High-Performance UX via Fabric.js, Redis, & React",
    summaryBullets: [
      "B.Tech CSE 3rd Year at Techno India University (8.2 CGPA).",
      "Re-Architectured PicsY Image Engines to reduce external API dependency by 80% using Fabric.js canvas & Redis caching.",
      "Building full-stack AI/ML web apps across PyTorch, Next.js, and FastAPI.",
      "Specialized in Edge AI Vision, OCR document pipelines, and high-performance interactive UX.",
      "Active open-source builder and hackathon competitor based in Kolkata, IN.",
    ],
    music: musicLink,
  },
  navigation: navigationLinks,
  socials: socialsList,
  skills: {
    languages: ["Python", "TypeScript", "JavaScript (ES6+)", "C/C++", "SQL"],
    frameworks: ["Next.js", "React 19", "FastAPI", "Node.js", "Tailwind CSS", "Zustand"],
    aiMl: ["PyTorch", "TensorFlow", "OpenCV", "Gemini Vision", "Tesseract OCR", "Inpainting"],
    tools: ["Fabric.js", "Redis", "MongoDB", "PostgreSQL", "Docker", "Git", "WebRTC"],
  },
  projects: projectCardsList.map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    description: p.summary,
    tags: p.tags || [p.category],
    liveUrl: p.liveUrl,
    githubUrl: p.githubUrl || "https://github.com",
    iconBg: p.color || "#F599C6",
    iconText: p.textColor || "#1A1A1A",
    hook: p.summary,
    problemSolved: p.problemSolved,
    color: p.color || "#F599C6",
    textColor: p.textColor || "#000000",
    previewImage: p.imageUrl,
  })),
  bottomCards: {
    contact: {
      title: "CONTACT ME",
      email: socialLinks.email.label || "ritam.contact@gmail.com",
      color: "#545454",
      textColor: "#CDFFF1",
      art: mediaAssets.contactArt || "/assets/contact-art.png",
      socials: socialsList
        .filter((s) => s.id !== "email")
        .map((s) => ({ name: s.name, url: s.url })),
    },
    resume: {
      title: "RESUME",
      color: "#FEE85B",
      textColor: "#1E1E1E",
      art: mediaAssets.resumeArt || "/assets/resume-art.png",
      skills: [
        "Python",
        "PyTorch",
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "Fabric.js",
        "Redis",
        "Tailwind CSS",
        "Computer Vision",
        "OCR Pipelines",
      ],
    },
    products: {
      title: "PRODUCTS",
      color: "#FF3F33",
      textColor: "#CDFFF1",
    },
    metrics: {
      count: projectCardsList.length,
      label: "PROJECTS",
      color: "#9FC87E",
      textColor: "#023325",
    },
  },
};
