// assets.js — Centralized Portfolio & Project Asset Links (Cloudinary CDN)
// Update your project details, Cloudinary image URLs, and live links here!

export const mediaAssets = {
  avatar: "/assets/avatar.png",
  heroShowcase: "/assets/hero-showcase.png",
  contactArt: "/assets/contact-art.png",
  resumeArt: "/assets/resume-art.png",
};

export const projectAssets = {
  taxExplainer: {
    id: "tax-explainer",
    title: "Tax Explainer",
    category: "AI / Fintech",
    imageUrl: "https://res.cloudinary.com/dcfhgjazu/image/upload/v1791389387/fiscalquant_thumbnail_1791388643688_a5apoj.jpg",
    liveUrl: "https://tax-explainer.vercel.app",
    githubUrl: "https://github.com/ritam413/Tax-Explainer",
    ctaText: "Visit",
    summary:
      "Transforms complex financial documents into an interactive, visual AI-explained dashboard with automated deduction discovery.",
    problemSolved:
      "Eliminates tax jargon and calculation confusion for freelancers & small businesses via OCR document analysis, Gemini Vision reasoning, and automated visual deductions.",
    stack: "Python, OCR, Next.js, FastAPI, PyTorch",
    tags: ["Python", "OCR", "Next.js", "FastAPI"],
    color: "#F599C6",
    textColor: "#000000",
  },
  mangaTranslator: {
    id: "manga-translator",
    title: "Manga Translator",
    category: "Computer Vision",
    imageUrl: "https://res.cloudinary.com/dcfhgjazu/image/upload/v1791390313/Manga_Translator_jdyjpb.jpg",
    liveUrl: "https://mangatranslator.vercel.app",
    githubUrl: "https://github.com/ritam413/Manga-Translator-AI",
    ctaText: "Visit",
    summary:
      "Instant in-image speech bubble detection, OCR, neural machine translation, and inpainting background restoration on Fabric.js canvas.",
    problemSolved:
      "Solves multi-day translation bottlenecks for international scanlation communities with instant speech bubble OCR and inpainting.",
    stack: "PyTorch, FastAPI, Fabric.js, OpenCV, Inpainting",
    tags: ["PyTorch", "FastAPI", "Fabric.js", "OpenCV"],
    color: "#FFEAB8",
    textColor: "#1C2733",
  },
  roomie: {
    id: "roomie",
    title: "Roomie",
    category: "Full-Stack Web",
    imageUrl: "https://res.cloudinary.com/dcfhgjazu/image/upload/v1791391323/Roomie_Ops_uz80mp.png",
    liveUrl: "https://all-things-agentic.vercel.app",
    githubUrl: "https://github.com/ritam413/All-Things-Agentic",
    ctaText: "Visit",
    summary:
      "Smart roommate matchmaking platform with vector habit matching and graph-based pairwise debt settlement algorithms.",
    problemSolved:
      "Solves off-campus roommate incompatibility and bill friction using vector habit matchmaking and automated split settlement.",
    stack: "React, Node.js, MongoDB, Express, Graph Algorithms",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    color: "#7DCCAD",
    textColor: "#1C2733",
  },
  irisAi: {
    id: "iris-ai",
    title: "IRIS ai",
    category: "Edge AI Vision",
    imageUrl: "https://res.cloudinary.com/dcfhgjazu/image/upload/v1791391313/Railway_Surkash_AI_nqnyor.jpg",
    liveUrl: "https://rail-suraksha-ai.vercel.app/",
    githubUrl: "https://github.com/ritam413/RailSuraksha-AI-",
    ctaText: "Visit",
    summary:
      "Autonomous computer vision pipeline with sub-50ms real-time CCTV video anomaly detection and alert dispatching.",
    problemSolved:
      "Solves critical transit and rail safety latency with automated edge CCTV anomaly detection and autonomous operator alerts.",
    stack: "TensorFlow, WebRTC, FastAPI, Python, Edge AI",
    tags: ["TensorFlow", "WebRTC", "FastAPI", "Python"],
    color: "#FFEAB8",
    textColor: "#1C2733",
  },
  studioOs: {
    id: "studio-os",
    title: "Studio OS",
    category: "Productivity OS",
    imageUrl: "https://res.cloudinary.com/dcfhgjazu/image/upload/v1791389989/Studio_OS_THumbnail_cfg6o7.jpg",
    liveUrl: "https://studio-os-lyart-six.vercel.app/",
    githubUrl: "https://github.com/ritam413/Studio-OS",
    ctaText: "Visit",
    summary:
      "Minimalist graphic workspace with multi-layer canvas composition, Redis state synchronization, and high-throughput asset rendering.",
    problemSolved:
      "Solves fragmented client feedback and delivery chaos for boutique creative engineering agencies.",
    stack: "TypeScript, Fabric.js, Redis, Next.js, Tailwind CSS",
    tags: ["TypeScript", "Fabric.js", "Redis", "Tailwind"],
    color: "#7DCCAD",
    textColor: "#1C2733",
  },
};

export const projectCardsList = Object.values(projectAssets);

export default {
  mediaAssets,
  projectAssets,
  projectCardsList,
};
