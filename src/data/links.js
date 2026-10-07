// src/data/links.js — Centralized Social, Contact & Navigation Links (JS module)
// Update your social media handles, portfolio links, and contact URLs here!

export const socialLinks = {
  email: {
    id: "email",
    name: "Email",
    label: "ritam",
    url: "mailto:ritamm413@gmail.com",
    icon: "mail",
  },
  github: {
    id: "github",
    name: "GitHub",
    label: "github.com/ritam413",
    url: "https://github.com/ritam413",
    icon: "github",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    label: "linkedin.com/in/ritam-mondal413",
    url: "https://www.linkedin.com/in/ritam-mondal413",
    icon: "linkedin",
  },
  twitter: {
    id: "twitter",
    name: "Twitter / X",
    label: "@ritamm413",
    url: "https://x.com/ritamm413",
    icon: "twitter",
  },
  telegram: {
    id: "telegram",
    name: "Telegram",
    label: "t.me/ritam4132",
    url: "https://t.me/ritam4132",
    icon: "telegram",
  },
};

export const socialsList = Object.values(socialLinks);

export const navigationLinks = [
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "skills", label: "SKILLS", href: "#skills" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
];

export const musicLink = {
  title: "Starboy",
  artist: "The Weeknd",
  url: "https://www.youtube.com/watch?v=34Na4j8AVgA",
};

export default {
  socialLinks,
  socialsList,
  navigationLinks,
  musicLink,
};
