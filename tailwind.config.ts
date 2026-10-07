import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#f8f5f5",
        "parchment-rose": "#f8f5f5",
        "specimen-white": "#ffffff",
        "ink-brown": "#443235",
        walnut: "#654a4e",
        charcoal: "#2e2c2c",
        "hairline-ash": "#cfc6c7",
        "dusty-rose": "#916a70",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        display: ["var(--font-display)", "Newsreader", "Playfair Display", "Georgia", "serif"],
        dia: ["var(--font-dia)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        sans: ["var(--font-dia)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "typewolf-lg": "0 6px 24px 0 rgba(145, 106, 112, 0.15)",
        "typewolf-subtle": "rgb(245, 241, 242) 0px -3px 0px 0px inset",
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
