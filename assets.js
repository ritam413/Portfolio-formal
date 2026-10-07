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
    // Replace with your Cloudinary URL: e.g. "https://res.cloudinary.com/<cloud_name>/image/upload/v.../tax-explainer.png"
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    liveUrl: "https://tax-explainer.vercel.app",
    githubUrl: "https://github.com/ritam-dev/tax-explainer",
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
    // Replace with your Cloudinary URL: e.g. "https://res.cloudinary.com/<cloud_name>/image/upload/v.../manga-translator.png"
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    liveUrl: "https://manga-translator.vercel.app",
    githubUrl: "https://github.com/ritam-dev/manga-translator",
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
    // Replace with your Cloudinary URL: e.g. "https://res.cloudinary.com/<cloud_name>/image/upload/v.../roomie.png"
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    liveUrl: "https://roomie-ai.vercel.app",
    githubUrl: "https://github.com/ritam-dev/roomie",
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
    // Replace with your Cloudinary URL: e.g. "https://res.cloudinary.com/<cloud_name>/image/upload/v.../iris-ai.png"
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    liveUrl: "https://iris-ai-vision.vercel.app",
    githubUrl: "https://github.com/ritam-dev/iris-ai",
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
    // Replace with your Cloudinary URL: e.g. "https://res.cloudinary.com/<cloud_name>/image/upload/v.../studio-os.png"
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    liveUrl: "https://studio-os.vercel.app",
    githubUrl: "https://github.com/ritam-dev/studio-os",
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
