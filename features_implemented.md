# features_implemented.md

## Current Functionality Status

### 1. Minimalist One-Page Resume Architecture (`thatsmeadarsh.com` Style)
- **Status**: Implemented
- **Details**: Single-page resume and portfolio application built in Next.js 15 App Router & Tailwind CSS, matching the clean editorial design, typography, and layout of `thatsmeadarsh.com`.

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
  - Bio intro, role title: `Full-Stack Engineer (AI/ML Web)`.
  - High-resolution profile avatar.
  - Bulleted summary detailing 3rd Year B.Tech CSE at Techno India University (8.2 CGPA), PicsY Image Engine re-architecture (80% API dependency reduction), and AI/ML stack expertise.
  - Social icons row (Email, GitHub, LinkedIn, Twitter/X, Telegram).
  - Dynamic "♪ Listening to Starboy by The Weeknd" pulse status badge.

### 4. Categorized Technical Skills Matrix
- **Status**: Implemented
- **Details**:
  - Languages (Python, TypeScript, JavaScript, C/C++, SQL).
  - Frameworks & Web (Next.js, React 19, FastAPI, Node.js, Tailwind CSS, Electron).
  - AI / ML & Computer Vision (PyTorch, TensorFlow, OpenCV, Gemini Vision, Tesseract OCR, Inpainting).
  - Architecture & Datastores (Fabric.js, Redis, MongoDB, PostgreSQL, Docker, Git, WebRTC).

### 5. Featured Projects Showcase
- **Status**: Implemented
- **Details**:
  - 5 core projects (`Tax Explainer`, `Manga Translator`, `Roomie`, `IRIS ai`, `Studio OS`).
  - Distinct colored category badge icons, external link arrow hover transitions, problem descriptions, and tech stack tags.

### 6. Education & Academic Standing
- **Status**: Implemented
- **Details**:
  - University: Techno India University (B.Tech CSE, 3rd Year).
  - Highlighted `8.2 CGPA` standing pill.

### 7. Print / PDF Optimization
- **Status**: Implemented
- **Details**: Dedicated `@media print` stylesheet rules hiding interactive web chrome and formatting clean standard A4/Letter margins.
