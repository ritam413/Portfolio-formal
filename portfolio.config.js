// portfolio.config.js — Centralized Portfolio Configuration
// Update your project details, images, socials, and bio here!

const portfolioConfig = {
  profile: {
    greeting: "Im,",
    firstName: "Jon",
    lastName: "Daniel",
    aboutTabLabel: "About Me",
    email: "inquiry@jondaniel.design",
    avatar: "assets/avatar.jpg",
    badgeYear: "2023",
    badgeText: "MY DESIGN PORTFOLIO",
  },
  navigation: [
    { id: "podcast", label: "Podcast", href: "#podcast" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio", active: true },
    { id: "research", label: "Research", href: "#research" },
    { id: "clients", label: "Clients", href: "#clients" },
  ],
  featuredProject: {
    id: "spatial-papercraft",
    title: "Aura 3D — Spatial Papercraft",
    category: "Featured Case Study",
    image: "assets/flamingo-showcase.jpg",
    description: "A physical-digital exploration of 3D layered paper sculptures with procedural depth and interactive lighting dynamics.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  stackedProjects: [
    {
      id: "deck-1",
      number: "251",
      label: "Projects",
      category: "Full-Stack Web & AI",
      bgColor: "#9CE0D7",
      textColor: "#0F172A",
    },
    {
      id: "deck-2",
      number: "156",
      label: "Awards",
      category: "Awwwards & FWA Honors",
      bgColor: "#8E82DA",
      textColor: "#FFFFFF",
    },
    {
      id: "deck-3",
      number: "48",
      label: "Keynotes",
      category: "Design Systems & Talks",
      bgColor: "#F7C268",
      textColor: "#0F172A",
    },
  ],
  contact: {
    label: "Clients",
    sublabel: "Fortune 500 & Startups",
    email: "inquiry@jondaniel.design",
    socials: [
      { name: "GitHub", url: "https://github.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Twitter/X", url: "https://twitter.com" },
    ],
  },
  gallery: [
    {
      id: "gal-1",
      title: "Ribbed Spiral Sphere",
      category: "3D Procedural Art",
      type: "sphere",
    },
    {
      id: "gal-2",
      number: "172",
      title: "Global Design Awards.",
      category: "International Accolades",
      type: "awards",
    },
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioConfig;
}
