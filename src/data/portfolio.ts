import { projectCardsList, mediaAssets } from "./assets";

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
  navigation: Array<{
    id: string;
    label: string;
  }>;
  socials: Array<{
    name: string;
    label: string;
    url: string;
    icon: string;
  }>;
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
    email: "ritam.contact@gmail.com",
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
    music: {
      title: "Starboy",
      artist: "The Weeknd",
      url: "https://www.youtube.com/watch?v=34Na4j8AVgA",
    },
  },
  navigation: [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
  ],
  socials: [
    {
      name: "Email",
      label: "ritam.contact@gmail.com",
      url: "mailto:ritam.contact@gmail.com",
      icon: "mail",
    },
    {
      name: "GitHub",
      label: "github.com/ritam-dev",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      label: "linkedin.com/in/ritam-dev",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Twitter / X",
      label: "@ritam_dev",
      url: "https://x.com",
      icon: "twitter",
    },
    {
      name: "Telegram",
      label: "t.me/ritam_dev",
      url: "https://t.me",
      icon: "telegram",
    },
  ],
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
      email: "ritam.contact@gmail.com",
      color: "#545454",
      textColor: "#CDFFF1",
      art: mediaAssets.contactArt || "/assets/contact-art.png",
      socials: [
        { name: "GitHub", url: "https://github.com" },
        { name: "LinkedIn", url: "https://linkedin.com" },
        { name: "Twitter / X", url: "https://twitter.com" },
        { name: "Telegram", url: "https://t.me" },
      ],
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
