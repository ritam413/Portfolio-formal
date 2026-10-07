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
  - Keyboard accessibility (Esc to close) and outside-click dismissal via `useOutsideClick` hook with body scroll lock.

### 6. Education & Academic Standing
- **Status**: Implemented
- **Details**:
  - University: Techno India University (B.Tech CSE, 3rd Year).
  - Highlighted `8.2 CGPA` standing pill.

### 7. Print / PDF Optimization
- **Status**: Implemented
- **Details**: Dedicated `@media print` stylesheet rules hiding interactive web chrome and formatting clean standard A4/Letter margins.
