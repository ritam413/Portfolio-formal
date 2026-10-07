# context.md — Ritam Minimalist One-Page Resume & Portfolio Architecture

## Project Purpose
Clean, minimalist, high-craft one-page personal resume and portfolio site inspired by the aesthetic, layout, and typography of `thatsmeadarsh.com`. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Features Ritam's bio, executive summary, categorized technical skills, 5 featured projects, education credentials, dynamic local Kolkata time indicator, one-click email copying, and print/PDF resume stylesheet optimizations.

## Architecture & Technology Stack
- **Framework**: Next.js 15 App Router (`src/app/`) with React 19 & TypeScript.
- **Styling & Design System**: Tailwind CSS configured with Typewolf's editorial tokens:
  - Canvas: `#f8f5f5` (Parchment Rose — warm paper atmosphere).
  - Cards & Plates: `#ffffff` (Specimen White) with `#cfc6c7` (Hairline Ash) borders.
  - Typography: `#443235` (Ink Brown) headlines and body, `#654a4e` (Walnut) secondary text, `#916a70` (Dusty Rose) badges/accents.
  - Font Pairing: `Newsreader` / `DomaineText` (transitional editorial serif) + `Plus Jakarta Sans` / `Dia` (all-caps micro-labels).
- **Icons**: `lucide-react`.
- **Print Optimization**: Embedded `@media print` rules for clean single-page CV printing without web navigation artifacts.

## Key Modules
- `src/app/page.tsx`: Home route rendering `ResumePage`.
- `src/components/Header.tsx`: Sticky minimalist navbar with logo, anchor links, Kolkata time, Copy Email, and Print / PDF button.
- `src/components/ResumePage.tsx`: Main one-page resume layout containing Bio, Summary bullets, Social links, Music widget, Technical Skills, Projects, and Education.
- `src/data/portfolio.ts`: Single source of truth for Ritam's portfolio and resume data.
- `public/assets/`: Media assets including avatar image.
