# features_implemented.md

## Current Functionality Status

### 1. Typewolf Parchment Rose & Ink Brown Editorial Architecture
- **Status**: Implemented
- **Details**: Single-page resume and portfolio application typeset with Typewolf's editorial design system: Parchment Rose (`#f8f5f5`) warm paper canvas, Specimen White (`#ffffff`) card plates, Hairline Ash (`#cfc6c7`) borders, Ink Brown (`#443235`) primary copy, Walnut (`#654a4e`) secondary metadata, and Dusty Rose (`#916a70`) badges. Uses `Newsreader`/`Domaine` serif and `Plus Jakarta Sans`/`Dia` all-caps micro-labels.

### 2. Sticky Minimalist Header (`Header.tsx`)
- **Status**: Implemented
- **Details**:
  - Name logo link to top.
  - Section navigation links (`about`, `skills`, `projects`).
  - Live Kolkata, IN local time ticker & sun icon.
  - One-click **Copy Email** action with copied feedback badge.
  - One-click **Print / PDF** action invoking `window.print()`.

### 3. Bio & Executive Summary Section (`ResumePage.tsx`)
- **Status**: Implemented
- **Details**:
  - 70/30 Two-Column responsive layout (70% Name, Role, Bio narrative, Tagline, and Summary bullets; 30% Avatar photo with integrated music player, Social contact bar, and categorized Skills matrix).
  - **GSAP Animated Typewriter Availability Badge (`TypewriterBadge.tsx`)**: Replaced static availability text with a GSAP-driven typewriter animation cycling continuously between `internship`, `collaborator`, and `freelancing` with a pulsing live signal dot, smooth character deletion/typing timeline, and a blinking cursor.
  - Refined top vertical spacing (`pt-3 sm:pt-5`, `gap-6 lg:gap-8`) eliminating dead whitespace between the sticky header and hero content.
  - High-resolution profile avatar featuring an integrated **bottom 30% dark gradient** (`h-[30%] bg-gradient-to-t from-black/95 via-black/60 to-transparent`) preserving 100% clarity on the top 70% of the image while displaying the **spinning custom vinyl record disk and right-aligned track typography (`Starboy by The Weeknd`) positioned on the bottom-right corner** with outbound YouTube link.
  - Bulleted summary detailing 3rd Year B.Tech CSE at Techno India University (8.2 CGPA), PicsY Image Engine re-architecture (80% API dependency reduction), and AI/ML stack expertise.
  - Social icons row (Email, GitHub, LinkedIn, Twitter/X, Telegram).

### 4. Compact Icon-Only Technical Skills Dock (Sidebar / Under Avatar)
- **Status**: Implemented
- **Details**:
  - Integrated directly under the avatar photo and contact links in the 30% right column.
  - High-density visual icon dock showing only crisp brand SVGs (no text clutter), allowing all 24 skills to fit cleanly on one screen without requiring reviewer scrolling.
  - Interactive hover tooltips: hovering any icon displays a floating dark badge with the full technology name (`title` and animated CSS floating tooltip pill with pointer arrow).
  - Categorized into Languages, Frameworks & State, AI / ML & Vision, and Datastores & Infra.

### 5. Aceternity UI Expandable Card Grid for Projects (`ExpandableCardGrid.tsx`)
- **Status**: Implemented
- **Details**:
  - Implemented exact Aceternity UI Expandable Card Grid component (`ExpandableCardDemo`) powered by `motion/react` with fluid `layoutId` shared-element morphing animations between grid cards and modal views.
  - 2-column responsive layout showcasing all 5 projects (`Tax Explainer`, `Manga Translator`, `Roomie`, `IRIS ai`, `Studio OS`).
  - Interactive expanded modal: clicking any card morphs smoothly into the expanded modal with problem-solution narrative, architecture stack breakdown, and live "Visit" CTA button.
  - Direct project launch icon button: Added a sleek circular external link icon button (`w-7 h-7`) on the top-right corner of each card image in the grid view (with click event propagation stopped) allowing immediate 1-click project navigation without opening the modal.
  - Keyboard accessibility (Esc to close) and outside-click dismissal via `useOutsideClick` hook with body scroll lock.

### 6. Education & Academic Standing
- **Status**: Implemented
- **Details**:
  - University: Techno India University (B.Tech CSE, 3rd Year).
  - Highlighted `8.2 CGPA` standing pill.

### 8. Centralized Asset & Project Configuration (`assets.ts` / `assets.js`)
- **Status**: Implemented
- **Details**:
  - Created centralized configuration modules [assets.ts](file:///d:/Games/Hckthons/Portfolio/src/data/assets.ts) and [assets.js](file:///d:/Games/Hckthons/Portfolio/assets.js).
  - All project thumbnails (`taxExplainer`, `mangaTranslator`, `roomie`, `irisAi`, `studioOs`), live URLs, summaries, problem-solved statements, and architecture stacks are defined in a single source of truth.
  - Ready for dropping in Cloudinary CDN image URLs (`https://res.cloudinary.com/...`).
  - Synced with [ExpandableCardGrid.tsx](file:///d:/Games/Hckthons/Portfolio/src/components/ExpandableCardGrid.tsx) and [portfolio.ts](file:///d:/Games/Hckthons/Portfolio/src/data/portfolio.ts).

### 9. Interactive Multi-Step Persona Contact Modal & Resend API Dispatch (`ContactModal.tsx` & `/api/contact`)
- **Status**: Implemented
- **Details**:
  - **Frictionless Segmented Flows**: Features 3 tailored inquiry tracks:
    - **Recruiter**: Step 1 (Company & Role Title + Engagement chips) $\to$ Step 2 (Job ID / URL & Description) $\to$ Step 3 (Work Email) $\to$ Step 4 (Compiled Summary & Dual Dispatch).
    - **Freelancing**: Step 1 (Project Type & Scope) $\to$ Step 2 (Timeframe & Budget chips) $\to$ Step 3 (Client Email) $\to$ Step 4 (Compiled Summary & Dual Dispatch).
    - **Collaborator**: Step 1 (Name & Project Repo) $\to$ Step 2 (Structure: Paid/Unpaid & Stack needed) $\to$ Step 3 (Contact Handle & Vision pitch) $\to$ Step 4 (Compiled Summary & Dual Dispatch).
  - **21st.dev Card-26 LinkCard Design**: Step 0 renders rich visual cards with gradient media headers, hover zoom badges, and 2-line descriptions.
  - **Spring Physics & Micro-Interactions**: Powered by `motion/react` spring physics, linear top progress bar, auto-focus single-field inputs, 1-click selectable chips, <kbd>Enter</kbd> step advance, and <kbd>Esc</kbd> / outside-click dismissal.
  - **Dual Dispatch Mechanism**:
    - Primary action: Direct in-app email sending via Next.js serverless route (`/api/contact`) powered by `resend` SDK with fallback simulation.
    - Secondary actions: 1-Click structured Markdown brief copy to clipboard and standard `mailto:` fallback link.
  - **Triggers**: Clickable "Get in Touch" button in sticky Header and clickable GSAP Typewriter availability badge in Hero.

