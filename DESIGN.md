# DESIGN.md — Ritam Bento Portfolio Design System

Derived from Figma Design (`29:3` - `29:51`) & `/awesome-design` Token Architecture.

---

## 1. Color Palette Tokens

### Canvas & Structural Surfaces
| Token Name | Hex Code | RGB | Figma Node Reference | Usage |
|---|---|---|---|---|
| `--bg-stage` | `#232323` | `rgb(35, 35, 35)` | Background Canvas | Full viewport backdrop |
| `--surface-outer` | `#D2CECE` | `rgb(210, 206, 206)` | `29:3` (Rectangle 20) | Outer rounded stage (radius: 33px) |
| `--surface-board` | `#F1EBEB` | `rgb(241, 235, 235)` | `29:4` (Rectangle 21) | Master interior bento board (radius: 35px) |
| `--card-preview` | `#F6F3E8` | `rgb(246, 243, 232)` | `29:6` (Rectangle 23) | Active project browser preview card |

### Brand & Accent Colors
| Token Name | Hex Code | RGB | Figma Node Reference | Usage |
|---|---|---|---|---|
| `--color-bio-card` | `#7F84D0` | `rgb(127, 132, 208)` | `29:41` (Union) | Chamfered Periwinkle Bio Card |
| `--color-aura-ring` | `#E2AFEC` | `rgb(226, 175, 236)` | `29:49` (Ellipse 4) | Concentric avatar inner aura |
| `--color-project-mint` | `#7DCCAD` | `rgb(125, 204, 173)` | `29:12` (Rectangle 28) | Mint project card (Roomie, Studio OS) |
| `--color-project-butter` | `#FFEAB8` | `rgb(255, 234, 184)` | `29:14` (Rectangle 30) | Butter yellow card (Manga Translator, IRIS ai) |
| `--color-project-pink` | `#F599C6` | `rgb(245, 153, 198)` | `29:16` (Rectangle 32) | Active expanded pink card (Tax Explainer) |
| `--color-contact-bg` | `#545454` | `rgb(84, 84, 84)` | `29:7` (Rectangle 24) | Dark slate Contact Me card |
| `--color-resume-bg` | `#FEE85B` | `rgb(254, 232, 91)` | `29:8` (Rectangle 25) | Canary yellow Resume card |
| `--color-products-bg` | `#FF3F33` | `rgb(255, 63, 51)` | `29:9` (Rectangle 26) | Products vertical tab |
| `--color-metrics-bg` | `#9FC87E` | `rgb(159, 200, 126)` | `29:11` (Rectangle 27) | Sage green Projects Counter card |

### Text & Ink Tokens
| Token Name | Hex Code | RGB | Usage |
|---|---|---|---|
| `--text-ink-dark` | `#1C2733` | `rgb(28, 39, 51)` | Primary dark headlines, "Portfolio", Nav |
| `--text-ink-muted` | `#383838` | `rgb(56, 56, 56)` | Secondary labels, "About Me" tab text |
| `--text-cyan-accent` | `#CDFFF1` | `rgb(205, 255, 241)` | Cyan typography on dark/red surfaces |
| `--text-green-dark` | `#023325` | `rgb(2, 51, 37)` | High-contrast dark text on metrics card |
| `--text-light-bio` | `#F0F0FB` | `rgb(240, 240, 251)` | Bio text and headlines on periwinkle |

---

## 2. Typography System

- **Primary Font**: `Outfit` (`next/font/google`)
  - Headlines: `Outfit Regular (400)` / `Outfit SemiBold (600)`
  - Bio & Numbers: `Outfit Bold (700)`
- **Accent Display Font**: `Sansita` (`next/font/google` or `@font-face`)
  - Navigation links: `Sansita Bold (700)`, uppercase, tracking `0.45px`
  - Project Accordion titles: `Sansita Regular (400)` & `Sansita Bold (700)`
  - Bottom card headers: `Sansita Bold (700)`
- **Reading / Paragraph Font**: `Outfit` / `Oxygen`
  - Body descriptions: `15px`, line-height `1.3 - 1.45`, letter-spacing `0.05em`

---

## 3. Geometry & Corner Radii Scale (Zero-Pill Rule)

- **Outer Stage (`#D2CECE`)**: `33px` radius
- **Master Board (`#F1EBEB`)**: `35px` radius
- **Bento Feature Cards**: `12px - 14px` radius
- **Chamfered Bio Tab**: `18px` top curvature + concave arc transition
- **Buttons / Micro Chips**: `4px - 6px` radius (**NO full-pill geometry**)
- **Avatar Ring**: `50%` circular concentric dual-ring

---

## 4. Motion & Micro-Interactions

- **Accordion Expansion**: Spring ease `cubic-bezier(0.6, 0.05, 0.2, 1)`, duration `0.7s`
- **Auto-Cycle Timer**: `2800ms` with live linear progress bar
- **Hover Micro-Tilt**: `-3px` Y-translate + `±1deg` rotation on Contact/Resume cards
- **Laser Scanline**: Continuous vertical 4s scan wave across project preview
- **Projects Count-Up**: Spring counter `0 → 5` on initial mount
