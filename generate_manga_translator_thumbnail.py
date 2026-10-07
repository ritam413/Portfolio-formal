"""
Manga Translator Devpost & Portfolio Thumbnail Generator
Generates high-res 4:3 (1200x900) and 3:2 (1200x800) PNG thumbnails + SVG vector assets.
Features an anime/manga comic split canvas: Japanese raw manga panel on the left morphing via cyan neural scanlines into translated English inpainting on the right with interactive Fabric.js HUD telemetry.
"""

import os
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "public"
ARTIFACT_DIR = r"C:\Users\ritam\.gemini\antigravity-ide\brain\f06a25ef-42a5-4ecd-b62f-77a644026deb"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(ARTIFACT_DIR, exist_ok=True)

def create_manga_translator_thumbnail(width, height, filename_prefix, aspect_label="4:3"):
    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <!-- Background & Gradients -->
    <radialGradient id="bgGlow" cx="20%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#1E1B4B" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#0F172A" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#050811" stop-opacity="1"/>
    </radialGradient>
    <radialGradient id="neonPinkAura" cx="85%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#EC4899" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#BE185D" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cyberCyanAura" cx="15%" cy="85%" r="50%">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.25"/>
      <stop offset="70%" stop-color="#0284C7" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Linear Gradients -->
    <linearGradient id="textMangaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F472B6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22D3EE"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <linearGradient id="bubbleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F1F5F9"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#22D3EE" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#334155" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="glowPink" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <!-- Base Canvas -->
  <rect width="{width}" height="{height}" fill="#050811" />
  <rect width="{width}" height="{height}" fill="url(#bgGlow)" />
  <rect width="{width}" height="{height}" fill="url(#neonPinkAura)" />
  <rect width="{width}" height="{height}" fill="url(#cyberCyanAura)" />

  <!-- Manga Speedline / Halftone Dot Texture -->
  <g opacity="0.08" fill="#F472B6">
    {' '.join([f'<circle cx="{x}" cy="{y}" r="1.5" />' for x in range(30, width, 50) for y in range(30, height, 50)])}
  </g>

  <!-- Cyber Anime Corner Brackets -->
  <g stroke="#EC4899" stroke-width="2" opacity="0.6">
    <path d="M 40 70 L 40 40 L 70 40" fill="none" />
    <path d="M {width-70} 40 L {width-40} 40 L {width-40} 70" fill="none" />
    <path d="M 40 {height-70} L 40 {height-40} L 70 {height-40}" fill="none" />
    <path d="M {width-70} {height-40} L {width-40} {height-40} L {width-40} {height-70}" fill="none" />
  </g>

  <!-- TOP HEADER / BADGE -->
  <g transform="translate(60, 50)">
    <rect width="330" height="34" rx="6" fill="#1E293B" stroke="#EC4899" stroke-opacity="0.5" stroke-width="1.2" />
    <circle cx="20" cy="17" r="5" fill="#EC4899" />
    <circle cx="20" cy="17" r="8" fill="#EC4899" opacity="0.3" />
    <text x="36" y="22" fill="#FDF2F8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="1.5">NEURAL MANGA INPAINTING OCR</text>

    <!-- LIVE AI PIPELINE Indicator -->
    <g transform="translate({width - 320}, 0)">
      <rect width="200" height="34" rx="6" fill="#1E293B" stroke="#06B6D4" stroke-opacity="0.5" stroke-width="1.2" />
      <circle cx="20" cy="17" r="5" fill="#06B6D4">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="36" y="22" fill="#A5F3FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="1.5">SUB-200MS SCANLATION</text>
    </g>
  </g>

  <!-- LEFT HERO SECTION: BRAND & PROBLEM -->
  <g transform="translate(60, 115)">
    <!-- LOGO ICON: Manga Speech Bubble + Katakana AI Lens -->
    <g transform="translate(0, 5)">
      <rect x="0" y="0" width="80" height="76" rx="16" fill="#0F172A" stroke="url(#textMangaGrad)" stroke-width="2.5" filter="url(#glowPink)"/>
      <path d="M 22 24 C 22 18 58 18 58 24 C 58 36 44 42 38 42 L 28 54 L 32 42 C 24 42 22 36 22 24 Z" fill="#F472B6" opacity="0.3"/>
      <circle cx="40" cy="38" r="16" fill="#1E293B" stroke="#22D3EE" stroke-width="2" />
      <text x="32" y="44" fill="#FFFFFF" font-family="sans-serif" font-size="16" font-weight="900">文</text>
    </g>

    <!-- Brand Name -->
    <text x="100" y="58" fill="url(#textMangaGrad)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="54" font-weight="900" letter-spacing="-1.5">Manga<tspan fill="#22D3EE">Translator</tspan></text>
    <text x="105" y="92" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" letter-spacing="2">REAL-TIME CV INPAINTING &amp; NMT ENGINE</text>

    <!-- Problem Box -->
    <g transform="translate(0, 120)">
      <rect width="490" height="120" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
      <text x="24" y="34" fill="#EC4899" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">SCANLATION BOTTLENECK SOLVED</text>
      <text x="24" y="64" fill="#F1F5F9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="700">
        Multi-day manual redraws ➔ Instant AI Inpaint
      </text>
      <text x="24" y="92" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500">
        Bubble detection, MangaOCR, neural translation &amp; texture healing.
      </text>
    </g>

    <!-- 3 Core Feature Cards -->
    <g transform="translate(0, 260)">
      <!-- Card 1 -->
      <g transform="translate(0, 0)">
        <rect width="155" height="85" rx="8" fill="#111827" stroke="#EC4899" stroke-width="1.2" opacity="0.95"/>
        <text x="14" y="26" fill="#EC4899" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">YOLOv8 + OCR</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">💬 Bubble Locate</text>
        <text x="14" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Vertical Kana/Kanji</text>
      </g>
      <!-- Card 2 -->
      <g transform="translate(165, 0)">
        <rect width="155" height="85" rx="8" fill="#111827" stroke="#22D3EE" stroke-width="1.2" opacity="0.95"/>
        <text x="14" y="26" fill="#22D3EE" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">LaMa INPAINT</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">🎨 Screentone Heal</text>
        <text x="14" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Zero artifact redraw</text>
      </g>
      <!-- Card 3 -->
      <g transform="translate(330, 0)">
        <rect width="160" height="85" rx="8" fill="#111827" stroke="#A855F7" stroke-width="1.2" opacity="0.95"/>
        <text x="14" y="26" fill="#A855F7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">FABRIC.JS</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">📐 Canvas Typeset</text>
        <text x="14" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Auto-flow typography</text>
      </g>
    </g>

    <!-- Tech Stack line -->
    <g transform="translate(0, 365)">
      <text x="0" y="22" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">STACK &amp; MODELS:</text>
      <g transform="translate(150, 5)">
        <rect width="76" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">PyTorch</text>
      </g>
      <g transform="translate(234, 5)">
        <rect width="76" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">OpenCV</text>
      </g>
      <g transform="translate(318, 5)">
        <rect width="78" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Fabric.js</text>
      </g>
      <g transform="translate(404, 5)">
        <rect width="76" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">FastAPI</text>
      </g>
    </g>
  </g>

  <!-- RIGHT HERO SECTION: SPLIT MANGA INPAINTING WORKBENCH -->
  <g transform="translate({width - 615}, 115)" filter="url(#cardShadow)">
    <!-- Dashboard Card Frame -->
    <rect width="555" height="{height - 230}" rx="16" fill="#0E1626" stroke="url(#borderGrad)" stroke-width="2" />
    
    <!-- Card Top Header Bar -->
    <rect width="555" height="42" rx="16" fill="#162238" />
    <circle cx="25" cy="21" r="5" fill="#EF4444" />
    <circle cx="42" cy="21" r="5" fill="#F59E0B" />
    <circle cx="59" cy="21" r="5" fill="#10B981" />
    <text x="80" y="26" fill="#94A3B8" font-family="monospace" font-size="12" font-weight="600">MangaTranslator // InpaintingPipeline.py</text>
    <rect x="420" y="10" width="115" height="22" rx="4" fill="#BE185D" />
    <text x="430" y="25" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">MODEL INFERENCE</text>

    <!-- Stat Strip -->
    <g transform="translate(20, 56)">
      <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#EC4899" stroke-width="1.2" />
      <text x="14" y="22" fill="#F472B6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">DETECTION</text>
      <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">4 Bubbles</text>

      <g transform="translate(130, 0)">
        <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#22D3EE" stroke-width="1.2" />
        <text x="14" y="22" fill="#67E8F9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">OCR ACCURACY</text>
        <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">99.2%</text>
      </g>

      <g transform="translate(260, 0)">
        <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#A855F7" stroke-width="1.2" />
        <text x="14" y="22" fill="#D8B4FE" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">INPAINT SPEED</text>
        <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">180 ms</text>
      </g>

      <g transform="translate(390, 0)">
        <rect width="125" height="60" rx="8" fill="#1E293B" stroke="#10B981" stroke-width="1.2" />
        <text x="14" y="22" fill="#6EE7B7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">STAGE</text>
        <text x="14" y="47" fill="#6EE7B7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">TRANSLATED</text>
      </g>
    </g>

    <!-- Interactive Manga Split Preview Canvas -->
    <g transform="translate(20, 130)">
      <rect width="515" height="195" rx="10" fill="#0B111E" stroke="#1E293B" stroke-width="1.5" />
      
      <!-- Left Panel: Raw Japanese Manga -->
      <g transform="translate(18, 18)">
        <rect width="220" height="160" rx="8" fill="#18181B" stroke="#EC4899" stroke-width="1.5" />
        <text x="12" y="22" fill="#F472B6" font-family="sans-serif" font-size="10" font-weight="800">RAW JAPANESE (INPUT)</text>
        
        <!-- Speech Bubble Japanese -->
        <path d="M 40 40 C 40 30 180 30 180 40 C 180 90 140 100 120 100 L 100 130 L 110 100 C 50 100 40 90 40 40 Z" fill="#FFFFFF" />
        <text x="65" y="65" fill="#000000" font-family="'MS Gothic', sans-serif" font-size="15" font-weight="900">「待ってくれ！</text>
        <text x="65" y="85" fill="#000000" font-family="'MS Gothic', sans-serif" font-size="15" font-weight="900">諦めるな！」</text>
        
        <!-- Bounding Box Scan Overlay -->
        <rect x="35" y="25" width="155" height="110" rx="4" fill="none" stroke="#22D3EE" stroke-width="2" stroke-dasharray="4" />
        <rect x="35" y="15" width="80" height="16" rx="2" fill="#22D3EE" />
        <text x="40" y="27" fill="#000000" font-family="monospace" font-size="9" font-weight="800">OCR_TARGET [99%]</text>
      </g>

      <!-- Center Morphing Arrow -->
      <g transform="translate(244, 90)">
        <circle cx="12" cy="0" r="14" fill="#1E293B" stroke="#22D3EE" stroke-width="1.5" />
        <path d="M 6 0 L 16 0 M 12 -4 L 16 0 L 12 4" stroke="#22D3EE" stroke-width="2" stroke-linecap="round" />
      </g>

      <!-- Right Panel: Inpainted & Typeset English -->
      <g transform="translate(275, 18)">
        <rect width="220" height="160" rx="8" fill="#18181B" stroke="#22D3EE" stroke-width="1.5" />
        <text x="12" y="22" fill="#22D3EE" font-family="sans-serif" font-size="10" font-weight="800">INPAINTED ENGLISH (OUTPUT)</text>
        
        <!-- Restored Screentone Bubble with English Typesetting -->
        <path d="M 40 40 C 40 30 180 30 180 40 C 180 90 140 100 120 100 L 100 130 L 110 100 C 50 100 40 90 40 40 Z" fill="#FFFFFF" />
        <text x="60" y="65" fill="#000000" font-family="'Comic Sans MS', sans-serif" font-size="13" font-weight="900">"HOLD ON!</text>
        <text x="50" y="83" fill="#000000" font-family="'Comic Sans MS', sans-serif" font-size="13" font-weight="900">DON'T GIVE UP!"</text>
        
        <!-- Fabric.js Canvas Transform Handles -->
        <circle cx="40" cy="30" r="4" fill="#EC4899" />
        <circle cx="180" cy="30" r="4" fill="#EC4899" />
        <circle cx="40" cy="100" r="4" fill="#EC4899" />
        <circle cx="180" cy="100" r="4" fill="#EC4899" />
      </g>
    </g>

    <!-- Bottom Action CTA -->
    <g transform="translate(20, 345)">
      <rect width="515" height="95" rx="10" fill="#152033" stroke="#253552" stroke-width="1.5" />
      <g transform="translate(18, 16)">
        <rect width="235" height="42" rx="6" fill="#BE185D" />
        <text x="45" y="26" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800">⚡ AUTO TRANSLATE PAGE</text>

        <g transform="translate(250, 0)">
          <rect width="230" height="42" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.2" />
          <text x="35" y="26" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">🎨 EDIT IN FABRIC.JS</text>
        </g>
        <text x="0" y="68" fill="#94A3B8" font-family="monospace" font-size="11">⚡ PyTorch LaMa Inpainting • Zero Screentone Artifacts</text>
      </g>
    </g>
  </g>

  <!-- BOTTOM FOOTER CALLOUT BAR -->
  <g transform="translate(60, {height - 65})">
    <rect width="{width - 120}" height="48" rx="8" fill="#0A0F1D" stroke="#1E293B" stroke-width="1.5" />
    <g transform="translate(20, 30)">
      <circle cx="0" cy="-4" r="4" fill="#EC4899" />
      <text x="15" y="0" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">
        MangaTranslator • End-to-End Deep Learning Scanlation &amp; Inpainting Workbench
      </text>
    </g>
    <g transform="translate({width - 340}, 30)">
      <rect x="0" y="-18" width="200" height="28" rx="5" fill="#EC4899" fill-opacity="0.15" stroke="#EC4899" stroke-width="1"/>
      <text x="16" y="0" fill="#F472B6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">★ DEVPOST PROJECT</text>
    </g>
  </g>
</svg>"""

    # Save SVG
    svg_filename = f"{filename_prefix}.svg"
    svg_path_public = os.path.join(OUTPUT_DIR, svg_filename)
    svg_path_artifact = os.path.join(ARTIFACT_DIR, svg_filename)
    with open(svg_path_public, "w", encoding="utf-8") as f:
        f.write(svg_content)
    with open(svg_path_artifact, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Saved SVG to {svg_path_public}")

    # Render PNG using Pillow
    img = Image.new("RGBA", (width, height), (5, 8, 17, 255))
    draw = ImageDraw.Draw(img)

    for y in range(height):
        factor = y / height
        r = int(25 * (1 - factor) + 5 * factor)
        g = int(18 * (1 - factor) + 8 * factor)
        b = int(45 * (1 - factor) + 17 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    def get_font(size, bold=False):
        font_names = [
            "arialbd.ttf" if bold else "arial.ttf",
            "segui_sb.ttf" if bold else "segoeui.ttf",
            "tahoma.ttf",
            "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
        ]
        for font_name in font_names:
            try:
                return ImageFont.truetype(font_name, size)
            except Exception:
                continue
        return ImageFont.load_default()

    title_font = get_font(52, bold=True)
    subtitle_font = get_font(15, bold=True)
    card_title_font = get_font(13, bold=True)
    stat_font = get_font(20, bold=True)
    body_font = get_font(13, bold=False)
    bold_body = get_font(12, bold=True)
    small_font = get_font(10, bold=True)

    # Corner Accents
    draw.line([(40, 70), (40, 40), (70, 40)], fill=(236, 72, 153, 180), width=3)
    draw.line([(width - 70, 40), (width - 40, 40), (width - 40, 70)], fill=(236, 72, 153, 180), width=3)
    draw.line([(40, height - 70), (40, height - 40), (70, height - 40)], fill=(236, 72, 153, 180), width=3)
    draw.line([(width - 70, height - 40), (width - 40, height - 40), (width - 40, height - 70)], fill=(236, 72, 153, 180), width=3)

    # Top Header Badges
    draw.rounded_rectangle([60, 45, 390, 79], radius=6, fill=(30, 41, 59, 240), outline=(236, 72, 153, 160), width=1)
    draw.ellipse([75, 57, 85, 67], fill=(236, 72, 153, 255))
    draw.text((95, 55), "NEURAL MANGA INPAINTING OCR", font=small_font, fill=(253, 242, 248))

    draw.rounded_rectangle([width - 290, 45, width - 60, 79], radius=6, fill=(30, 41, 59, 240), outline=(6, 182, 212, 180), width=1)
    draw.ellipse([width - 275, 57, width - 265, 67], fill=(6, 182, 212, 255))
    draw.text((width - 255, 55), "SUB-200MS SCANLATION", font=small_font, fill=(165, 243, 252))

    # Left Section: Brand Logo & Typography
    draw.rounded_rectangle([60, 115, 140, 191], radius=14, fill=(15, 23, 42, 255), outline=(236, 72, 153, 255), width=3)
    draw.ellipse([85, 137, 115, 167], fill=(30, 41, 59), outline=(34, 211, 238), width=2)
    draw.text((93, 142), "文", font=get_font(18, bold=True), fill=(244, 114, 182))

    draw.text((160, 115), "Manga", font=title_font, fill=(244, 114, 182))
    draw.text((330, 115), "Translator", font=title_font, fill=(34, 211, 238))
    draw.text((165, 180), "REAL-TIME CV INPAINTING & NMT ENGINE", font=subtitle_font, fill=(148, 163, 184))

    # Problem Box
    draw.rounded_rectangle([60, 225, 550, 345], radius=12, fill=(20, 29, 47, 240), outline=(51, 65, 85, 255), width=2)
    draw.text((80, 240), "SCANLATION BOTTLENECK SOLVED", font=card_title_font, fill=(236, 72, 153))
    draw.text((80, 266), "Multi-day manual redraws -> Instant AI Inpaint", font=get_font(17, bold=True), fill=(241, 245, 249))
    draw.text((80, 296), "Bubble detection, MangaOCR, neural translation & texture healing.", font=body_font, fill=(148, 163, 184))

    # 3 Feature Badges
    badges = [
        (60, "YOLOv8 + OCR", "💬 Bubble Locate", "Vertical Kana/Kanji", (236, 72, 153)),
        (230, "LaMa INPAINT", "🎨 Screentone Heal", "Zero redraw artifacts", (34, 211, 238)),
        (400, "FABRIC.JS", "📐 Canvas Typeset", "Interactive typography", (168, 85, 247))
    ]
    for bx, btag, btitle, bsub, bcol in badges:
        draw.rounded_rectangle([bx, 365, bx + 155, 445], radius=8, fill=(17, 24, 39, 240), outline=bcol, width=1)
        draw.text((bx + 14, 377), btag, font=small_font, fill=bcol)
        draw.text((bx + 14, 397), btitle, font=bold_body, fill=(255, 255, 255))
        draw.text((bx + 14, 419), bsub, font=get_font(10), fill=(100, 116, 139))

    # Tech Stack line
    draw.text((60, 470), "STACK & MODELS:", font=small_font, fill=(100, 116, 139))
    techs = [(175, "PyTorch"), (265, "OpenCV"), (355, "Fabric.js"), (445, "FastAPI")]
    for tx, tname in techs:
        draw.rounded_rectangle([tx, 465, tx + 78, 489], radius=4, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
        draw.text((tx + 8, 470), tname, font=get_font(10, bold=True), fill=(203, 213, 225))

    # Right Section: Dashboard Mockup Card
    card_right = width - 60
    card_left = width - 615
    card_bottom = height - 100
    draw.rounded_rectangle([card_left, 115, card_right, card_bottom], radius=16, fill=(14, 22, 38, 250), outline=(236, 72, 153, 140), width=2)
    
    # Card Header
    draw.rounded_rectangle([card_left, 115, card_right, 157], radius=16, fill=(22, 34, 56))
    draw.ellipse([card_left + 15, 131, card_left + 25, 141], fill=(239, 68, 68))
    draw.ellipse([card_left + 32, 131, card_left + 42, 141], fill=(245, 158, 11))
    draw.ellipse([card_left + 49, 131, card_left + 59, 141], fill=(16, 185, 129))
    draw.text((card_left + 70, 129), "MangaTranslator // InpaintingPipeline.py", font=get_font(11, bold=True), fill=(148, 163, 184))

    draw.rounded_rectangle([card_right - 155, 125, card_right - 15, 147], radius=4, fill=(190, 24, 93))
    draw.text((card_right - 145, 129), "MODEL INFERENCE", font=small_font, fill=(255, 255, 255))

    # Stat strip
    stats = [
        (card_left + 20, "DETECTION", "4 Bubbles", (244, 114, 182)),
        (card_left + 150, "OCR ACCURACY", "99.2%", (34, 211, 238)),
        (card_left + 280, "INPAINT SPEED", "180 ms", (168, 85, 247)),
        (card_left + 410, "STAGE", "TRANSLATED", (16, 185, 129))
    ]
    for sx, stitle, sval, scol in stats:
        draw.rounded_rectangle([sx, 170, sx + 120, 230], radius=8, fill=(30, 41, 59), outline=scol, width=1)
        draw.text((sx + 10, 180), stitle, font=get_font(9, bold=True), fill=scol)
        draw.text((sx + 10, 200), sval, font=stat_font, fill=(255, 255, 255))

    # Split Manga Compare Canvas
    draw.rounded_rectangle([card_left + 20, 245, card_right - 20, 405], radius=10, fill=(11, 17, 30), outline=(30, 41, 59), width=2)
    
    # Left Box (Japanese)
    draw.rounded_rectangle([card_left + 35, 260, card_left + 250, 390], radius=6, fill=(24, 24, 27), outline=(236, 72, 153), width=1)
    draw.text((card_left + 45, 268), "RAW JAPANESE (INPUT)", font=get_font(9, bold=True), fill=(244, 114, 182))
    draw.rounded_rectangle([card_left + 50, 290, card_left + 235, 365], radius=16, fill=(255, 255, 255))
    draw.text((card_left + 65, 308), "「待ってくれ！", font=get_font(13, bold=True), fill=(0, 0, 0))
    draw.text((card_left + 65, 332), "諦めるな！」", font=get_font(13, bold=True), fill=(0, 0, 0))

    # Right Box (English)
    draw.rounded_rectangle([card_left + 275, 260, card_right - 35, 390], radius=6, fill=(24, 24, 27), outline=(34, 211, 238), width=1)
    draw.text((card_left + 285, 268), "INPAINTED ENGLISH (OUTPUT)", font=get_font(9, bold=True), fill=(34, 211, 238))
    draw.rounded_rectangle([card_left + 290, 290, card_right - 50, 365], radius=16, fill=(255, 255, 255))
    draw.text((card_left + 305, 308), "\"HOLD ON!", font=get_font(13, bold=True), fill=(0, 0, 0))
    draw.text((card_left + 305, 332), "DON'T GIVE UP!\"", font=get_font(13, bold=True), fill=(0, 0, 0))

    # Bottom CTA Box
    draw.rounded_rectangle([card_left + 20, 420, card_right - 20, 485], radius=10, fill=(21, 32, 51), outline=(37, 53, 82), width=1)
    draw.rounded_rectangle([card_left + 35, 432, card_left + 265, 472], radius=6, fill=(190, 24, 93))
    draw.text((card_left + 50, 444), "⚡ AUTO TRANSLATE PAGE", font=bold_body, fill=(255, 255, 255))

    draw.rounded_rectangle([card_left + 280, 432, card_right - 35, 472], radius=6, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
    draw.text((card_left + 300, 444), "🎨 EDIT IN FABRIC.JS", font=bold_body, fill=(203, 213, 225))

    # Bottom Footer Ribbon
    draw.rounded_rectangle([60, height - 60, width - 60, height - 15], radius=8, fill=(10, 15, 29), outline=(30, 41, 59), width=1)
    draw.ellipse([80, height - 42, 90, height - 32], fill=(236, 72, 153))
    draw.text((100, height - 44), "MangaTranslator • End-to-End Deep Learning Scanlation & Inpainting Workbench", font=bold_body, fill=(226, 232, 240))

    draw.rounded_rectangle([width - 260, height - 52, width - 80, height - 22], radius=5, fill=(236, 72, 153, 40), outline=(236, 72, 153), width=1)
    draw.text((width - 245, height - 42), "★ DEVPOST PROJECT", font=small_font, fill=(244, 114, 182))

    # Save PNG
    png_filename = f"{filename_prefix}.png"
    png_path_public = os.path.join(OUTPUT_DIR, png_filename)
    png_path_artifact = os.path.join(ARTIFACT_DIR, png_filename)
    img.save(png_path_public, "PNG", quality=95)
    img.save(png_path_artifact, "PNG", quality=95)
    print(f"Saved {aspect_label} PNG to {png_path_public} and {png_path_artifact}")

if __name__ == "__main__":
    create_manga_translator_thumbnail(1200, 900, "manga-translator-thumbnail-4x3", "4:3")
    create_manga_translator_thumbnail(1200, 800, "manga-translator-thumbnail-3x2", "3:2")
