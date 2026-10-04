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
        stage: {
          dark: "#232323",
          outer: "#D2CECE",
          board: "#F1EBEB",
          preview: "#F6F3E8",
        },
        brand: {
          bio: "#7F84D0",
          aura: "#E2AFEC",
          mint: "#7DCCAD",
          butter: "#FFEAB8",
          pink: "#F599C6",
          contact: "#545454",
          resume: "#FEE85B",
          products: "#FF3F33",
          metrics: "#9FC87E",
        },
        ink: {
          dark: "#1C2733",
          muted: "#383838",
          light: "#F0F0FB",
          cyan: "#CDFFF1",
          forest: "#023325",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sansita: ["var(--font-sansita)", "Georgia", "serif"],
      },
      borderRadius: {
        outer: "33px",
        board: "35px",
        card: "14px",
        btn: "4px",
      },
      animation: {
        scan: "scan 4s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%, 100%": { top: "12px" },
          "50%": { top: "110px" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
