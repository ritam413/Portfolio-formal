"""
RoomieOps AI Devpost Thumbnail & Brand Asset Generator
Generates high-res 4:3 (1200x900) and 3:2 (1200x800) PNG thumbnails + SVG vector assets.
"""

import os
import shutil
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "public"
ARTIFACT_DIR = r"C:\Users\ritam\.gemini\antigravity-ide\brain\f06a25ef-42a5-4ecd-b62f-77a644026deb"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(ARTIFACT_DIR, exist_ok=True)

def create_thumbnail(width, height, filename_prefix, aspect_label="4:3"):
    # SVG definition
    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="25%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#1E1B4B" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#0F172A" stop-opacity="0.98"/>
      <stop offset="100%" stop-color="#050811" stop-opacity="1"/>
    </radialGradient>
    <radialGradient id="emeraldAura" cx="80%" cy="25%" r="55%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.28"/>
      <stop offset="60%" stop-color="#059669" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="violetAura" cx="15%" cy="85%" r="50%">
      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.22"/>
      <stop offset="70%" stop-color="#4F46E5" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Linear Gradients -->
    <linearGradient id="textEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#6EE7B7"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399"/>
      <stop offset="50%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818CF8"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34D399" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#818CF8" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#334155" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Drop Shadows -->
    <filter id="glowEmerald" x="-30%" y="-30%" width="160%" height="160%">
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
  <rect width="{width}" height="{height}" fill="url(#emeraldAura)" />
  <rect width="{width}" height="{height}" fill="url(#violetAura)" />

  <!-- Grid Blueprint Overlay -->
  <g opacity="0.1" stroke="#64748B" stroke-width="1">
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" />
    </pattern>
    <rect width="{width}" height="{height}" fill="url(#grid)" />
  </g>

  <!-- Corner Tech Accents -->
  <g stroke="#10B981" stroke-width="2" opacity="0.5">
    <path d="M 40 70 L 40 40 L 70 40" fill="none" />
    <path d="M {width-70} 40 L {width-40} 40 L {width-40} 70" fill="none" />
    <path d="M 40 {height-70} L 40 {height-40} L 70 {height-40}" fill="none" />
    <path d="M {width-70} {height-40} L {width-40} {height-40} L {width-40} {height-70}" fill="none" />
  </g>

  <!-- TOP HEADER / BADGE -->
  <g transform="translate(60, 50)">
    <!-- Category Badge -->
    <rect width="320" height="34" rx="6" fill="#1E293B" stroke="#10B981" stroke-opacity="0.4" stroke-width="1.2" />
    <circle cx="20" cy="17" r="5" fill="#10B981" />
    <circle cx="20" cy="17" r="8" fill="#10B981" opacity="0.3" />
    <text x="36" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">AUTONOMOUS EXPENSE SETTLEMENT</text>

    <!-- LIVE AGENT Indicator -->
    <g transform="translate({width - 320}, 0)">
      <rect width="200" height="34" rx="6" fill="#1E293B" stroke="#6366F1" stroke-opacity="0.5" stroke-width="1.2" />
      <circle cx="20" cy="17" r="5" fill="#6366F1">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="36" y="22" fill="#A5B4FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="1.5">GEMINI VISION + UPI</text>
    </g>
  </g>

  <!-- LEFT HERO SECTION: BRAND & PITCH -->
  <g transform="translate(60, 115)">
    <!-- LOGO ICON: Geometric Interlocking Hexagon House + Split Currency Surge -->
    <g transform="translate(0, 5)">
      <rect x="0" y="0" width="80" height="76" rx="16" fill="#0F172A" stroke="url(#brandGrad)" stroke-width="2.5" filter="url(#glowEmerald)"/>
      
      <!-- Roof / Split Geometry -->
      <path d="M 40 18 L 64 34 L 56 34 L 40 24 L 24 34 L 16 34 Z" fill="#34D399" />
      <!-- Inner Currency / Arrow Cycle -->
      <circle cx="40" cy="50" r="14" fill="#1E293B" stroke="#818CF8" stroke-width="2" />
      <text x="33" y="56" fill="#34D399" font-family="sans-serif" font-size="16" font-weight="900">₹</text>
    </g>

    <!-- Brand Name -->
    <text x="100" y="58" fill="url(#textEmeraldGrad)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="56" font-weight="900" letter-spacing="-1.5">RoomieOps <tspan fill="#818CF8">AI</tspan></text>
    
    <!-- Subtitle / Tagline -->
    <text x="104" y="92" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="600" letter-spacing="2">SPLITWISE TRACKS DEBT. WE SETTLE IT.</text>

    <!-- Elevator Pitch Highlight Box -->
    <g transform="translate(0, 120)">
      <rect width="490" height="120" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
      
      <text x="24" y="34" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="1.5">AUTONOMOUS RECONCILIATION</text>
      
      <text x="24" y="64" fill="#F1F5F9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="700">
        Drop a receipt photo ➔ AI extracts &amp; splits
      </text>
      <text x="24" y="92" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500">
        Generates 1-Tap UPI links &amp; auto-nudges roommates till paid.
      </text>
    </g>

    <!-- 3 Core Feature Cards -->
    <g transform="translate(0, 260)">
      <!-- Feature 1 -->
      <g transform="translate(0, 0)">
        <rect width="155" height="85" rx="8" fill="#111827" stroke="#10B981" stroke-width="1.2" opacity="0.95"/>
        <text x="14" y="26" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">VISION OCR</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">📸 Receipt Drop</text>
        <text x="14" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Gemini Multimodal</text>
      </g>
      <!-- Feature 2 -->
      <g transform="translate(165, 0)">
        <rect width="155" height="85" rx="8" fill="#111827" stroke="#818CF8" stroke-width="1.2" opacity="0.95"/>
        <text x="14" y="26" fill="#818CF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">INSTANT UPI</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">⚡ 1-Tap Pay Link</text>
        <text x="14" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">GPay, PhonePe, QR</text>
      </g>
      <!-- Feature 3 -->
      <g transform="translate(330, 0)">
        <rect width="160" height="85" rx="8" fill="#111827" stroke="#F59E0B" stroke-width="1.2" opacity="0.95"/>
        <text x="14" y="26" fill="#F59E0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">AUTO-NUDGE</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">🤖 WhatsApp Bot</text>
        <text x="14" y="68" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11">Autonomous follow-up</text>
      </g>
    </g>

    <!-- Tech Stack Pill Ribbon -->
    <g transform="translate(0, 365)">
      <text x="0" y="22" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">STACK &amp; INFRA:</text>
      
      <g transform="translate(140, 5)">
        <rect width="90" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Gemini 2.0</text>
      </g>
      <g transform="translate(238, 5)">
        <rect width="80" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">UPI Intent</text>
      </g>
      <g transform="translate(326, 5)">
        <rect width="82" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Next.js 15</text>
      </g>
      <g transform="translate(416, 5)">
        <rect width="74" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">FastAPI</text>
      </g>
    </g>
  </g>

  <!-- RIGHT HERO SECTION: INTERACTIVE SETTLEMENT TERMINAL MOCKUP -->
  <g transform="translate({width - 615}, 115)" filter="url(#cardShadow)">
    <!-- Main Dashboard Card Frame -->
    <rect width="555" height="{height - 230}" rx="16" fill="#0E1626" stroke="url(#borderGrad)" stroke-width="2" />
    
    <!-- Card Top Header Bar -->
    <rect width="555" height="42" rx="16" fill="#162238" />
    <circle cx="25" cy="21" r="5" fill="#EF4444" />
    <circle cx="42" cy="21" r="5" fill="#F59E0B" />
    <circle cx="59" cy="21" r="5" fill="#10B981" />
    <text x="80" y="26" fill="#94A3B8" font-family="monospace" font-size="12" font-weight="600">RoomieOps // Gemini_Reconciliation.ts</text>
    <rect x="420" y="10" width="115" height="22" rx="4" fill="#059669" />
    <text x="430" y="25" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">SETTLEMENT LIVE</text>

    <!-- Metric Stat Strip -->
    <g transform="translate(20, 56)">
      <!-- Total Bill -->
      <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#34D399" stroke-width="1.2" />
      <text x="14" y="22" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">GROCERY BILL</text>
      <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">₹3,420</text>

      <!-- Split Per Person -->
      <g transform="translate(130, 0)">
        <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#818CF8" stroke-width="1.2" />
        <text x="14" y="22" fill="#A5B4FC" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">PER ROOMIE (3)</text>
        <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">₹1,140</text>
      </g>

      <!-- Settlement Rate -->
      <g transform="translate(260, 0)">
        <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#10B981" stroke-width="1.2" />
        <text x="14" y="22" fill="#6EE7B7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">COLLECTED</text>
        <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">67% (2/3)</text>
      </g>

      <!-- Auto Bot -->
      <g transform="translate(390, 0)">
        <rect width="125" height="60" rx="8" fill="#1E293B" stroke="#F59E0B" stroke-width="1.2" />
        <text x="14" y="22" fill="#FCD34D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">NUDGE BOT</text>
        <text x="14" y="47" fill="#FCD34D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="800">FOLLOWING UP</text>
      </g>
    </g>

    <!-- Simulated Receipt + Nudge Card -->
    <g transform="translate(20, 130)">
      <rect width="515" height="185" rx="10" fill="#0B111E" stroke="#1E293B" stroke-width="1.5" />
      
      <!-- Receipt Item List -->
      <g transform="translate(18, 20)">
        <text x="0" y="10" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">🧾 GEMINI EXTRACTED ITEMS (Blinkit #9412)</text>
        <text x="0" y="32" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">• Organic Milk x 2, Eggs (12pk), Bread ................. ₹420</text>
        <text x="0" y="52" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">• Olive Oil, Basmati Rice (5kg), Spices ............. ₹1,850</text>
        <text x="0" y="72" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13">• Cleaning Supplies &amp; Detergent ......................... ₹1,150</text>
      </g>

      <!-- WhatsApp Nudge Bubble Simulation -->
      <g transform="translate(18, 110)">
        <rect width="479" height="60" rx="8" fill="#064E3B" stroke="#059669" stroke-width="1" />
        <text x="15" y="22" fill="#6EE7B7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800">💬 WHATSAPP BOT TO RITAM &amp; SAIKAT:</text>
        <text x="15" y="44" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">"Hey! Grocery bill ₹3,420 split is ₹1,140 each. Tap to pay: upi://pay?pa=roomie@okhdfcbank"</text>
      </g>
    </g>

    <!-- Bottom Settle Action CTA -->
    <g transform="translate(20, 335)">
      <rect width="515" height="105" rx="10" fill="#152033" stroke="#253552" stroke-width="1.5" />
      
      <g transform="translate(18, 18)">
        <!-- 1-Tap UPI Button -->
        <rect width="235" height="42" rx="6" fill="#10B981" />
        <text x="45" y="26" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800">⚡ 1-TAP UPI PAY (₹1,140)</text>

        <!-- Bot Status Button -->
        <g transform="translate(250, 0)">
          <rect width="230" height="42" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.2" />
          <text x="35" y="26" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">✓ AUTO-RECONCILED</text>
        </g>
        
        <text x="0" y="68" fill="#94A3B8" font-family="monospace" font-size="11">⚡ Zero manual tracking • 100% On-Chain &amp; UPI Verified</text>
      </g>
    </g>
  </g>

  <!-- BOTTOM FOOTER CALLOUT BAR -->
  <g transform="translate(60, {height - 65})">
    <rect width="{width - 120}" height="48" rx="8" fill="#0A0F1D" stroke="#1E293B" stroke-width="1.5" />
    
    <g transform="translate(20, 30)">
      <circle cx="0" cy="-4" r="4" fill="#10B981" />
      <text x="15" y="0" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">
        RoomieOps AI • Autonomous Expense Splitting &amp; UPI Settlement Engine
      </text>
    </g>

    <g transform="translate({width - 340}, 30)">
      <rect x="0" y="-18" width="200" height="28" rx="5" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1"/>
      <text x="16" y="0" fill="#6EE7B7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">★ DEVPOST PROJECT</text>
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

    # Background gradient
    for y in range(height):
        factor = y / height
        r = int(18 * (1 - factor) + 5 * factor)
        g = int(24 * (1 - factor) + 8 * factor)
        b = int(45 * (1 - factor) + 17 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # Grid overlay
    grid_spacing = 40
    for x in range(0, width, grid_spacing):
        draw.line([(x, 0), (x, height)], fill=(30, 41, 59, 50))
    for y in range(0, height, grid_spacing):
        draw.line([(0, y), (width, y)], fill=(30, 41, 59, 50))

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
    subtitle_font = get_font(16, bold=True)
    card_title_font = get_font(13, bold=True)
    stat_font = get_font(20, bold=True)
    body_font = get_font(13, bold=False)
    bold_body = get_font(13, bold=True)
    small_font = get_font(11, bold=True)
    badge_font = get_font(12, bold=True)

    # Corner Accents
    draw.line([(40, 70), (40, 40), (70, 40)], fill=(16, 185, 129, 160), width=3)
    draw.line([(width - 70, 40), (width - 40, 40), (width - 40, 70)], fill=(16, 185, 129, 160), width=3)
    draw.line([(40, height - 70), (40, height - 40), (70, height - 40)], fill=(16, 185, 129, 160), width=3)
    draw.line([(width - 70, height - 40), (width - 40, height - 40), (width - 40, height - 70)], fill=(16, 185, 129, 160), width=3)

    # Top Header Badges
    draw.rounded_rectangle([60, 45, 400, 79], radius=6, fill=(30, 41, 59, 240), outline=(16, 185, 129, 150), width=1)
    draw.ellipse([75, 57, 85, 67], fill=(16, 185, 129, 255))
    draw.text((95, 55), "AUTONOMOUS EXPENSE SETTLEMENT", font=badge_font, fill=(226, 232, 240))

    draw.rounded_rectangle([width - 270, 45, width - 60, 79], radius=6, fill=(30, 41, 59, 240), outline=(99, 102, 241, 180), width=1)
    draw.ellipse([width - 255, 57, width - 245, 67], fill=(99, 102, 241, 255))
    draw.text((width - 235, 55), "GEMINI VISION + UPI", font=badge_font, fill=(165, 180, 252))

    # Left Section: Brand Logo & Typography
    # Logo Box
    draw.rounded_rectangle([60, 115, 140, 191], radius=14, fill=(15, 23, 42, 255), outline=(16, 185, 129, 255), width=3)
    # Roof geometry
    draw.polygon([(100, 130), (124, 146), (116, 146), (100, 136), (84, 146), (76, 146)], fill=(52, 211, 153))
    # Inner rupee symbol
    draw.ellipse([88, 152, 112, 176], fill=(30, 41, 59), outline=(129, 140, 248), width=2)
    draw.text((94, 154), "₹", font=get_font(16, bold=True), fill=(52, 211, 153))

    # Title
    draw.text((160, 115), "RoomieOps", font=title_font, fill=(255, 255, 255))
    draw.text((455, 115), "AI", font=title_font, fill=(129, 140, 248))
    draw.text((165, 180), "SPLITWISE TRACKS DEBT. WE SETTLE IT.", font=subtitle_font, fill=(148, 163, 184))

    # Problem Callout Box
    draw.rounded_rectangle([60, 225, 550, 345], radius=12, fill=(20, 29, 47, 240), outline=(51, 65, 85, 255), width=2)
    draw.text((80, 240), "AUTONOMOUS RECONCILIATION", font=card_title_font, fill=(52, 211, 153))
    draw.text((80, 266), "Drop a receipt photo ➔ AI extracts & splits", font=get_font(17, bold=True), fill=(241, 245, 249))
    draw.text((80, 296), "Generates 1-Tap UPI links & auto-nudges roommates till paid.", font=body_font, fill=(148, 163, 184))

    # 3 Feature Badges
    badges = [
        (60, "VISION OCR", "📸 Receipt Drop", "Gemini Multimodal", (16, 185, 129)),
        (230, "INSTANT UPI", "⚡ 1-Tap Pay Link", "GPay, PhonePe, QR", (129, 140, 248)),
        (400, "AUTO-NUDGE", "🤖 WhatsApp Bot", "Auto follow-up", (245, 158, 11))
    ]
    for bx, btag, btitle, bsub, bcol in badges:
        draw.rounded_rectangle([bx, 365, bx + 155, 445], radius=8, fill=(17, 24, 39, 240), outline=bcol, width=1)
        draw.text((bx + 14, 377), btag, font=small_font, fill=bcol)
        draw.text((bx + 14, 397), btitle, font=bold_body, fill=(255, 255, 255))
        draw.text((bx + 14, 419), bsub, font=get_font(10), fill=(100, 116, 139))

    # Tech Stack line
    draw.text((60, 470), "STACK & INFRA:", font=small_font, fill=(100, 116, 139))
    techs = [(170, "Gemini 2.0"), (265, "UPI Intent"), (355, "Next.js 15"), (445, "FastAPI")]
    for tx, tname in techs:
        draw.rounded_rectangle([tx, 465, tx + 80, 489], radius=4, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
        draw.text((tx + 8, 470), tname, font=get_font(10, bold=True), fill=(203, 213, 225))

    # Right Section: Dashboard Mockup Card
    card_right = width - 60
    card_left = width - 615
    card_bottom = height - 100
    draw.rounded_rectangle([card_left, 115, card_right, card_bottom], radius=16, fill=(14, 22, 38, 250), outline=(52, 211, 153, 140), width=2)
    
    # Card Header
    draw.rounded_rectangle([card_left, 115, card_right, 157], radius=16, fill=(22, 34, 56))
    draw.ellipse([card_left + 15, 131, card_left + 25, 141], fill=(239, 68, 68))
    draw.ellipse([card_left + 32, 131, card_left + 42, 141], fill=(245, 158, 11))
    draw.ellipse([card_left + 49, 131, card_left + 59, 141], fill=(16, 185, 129))
    draw.text((card_left + 70, 129), "RoomieOps // Gemini_Reconciliation.ts", font=get_font(11, bold=True), fill=(148, 163, 184))

    draw.rounded_rectangle([card_right - 145, 125, card_right - 15, 147], radius=4, fill=(5, 150, 105))
    draw.text((card_right - 135, 129), "SETTLEMENT LIVE", font=small_font, fill=(255, 255, 255))

    # Stat strip
    stats = [
        (card_left + 20, "GROCERY BILL", "₹3,420", (52, 211, 153)),
        (card_left + 150, "PER ROOMIE (3)", "₹1,140", (129, 140, 248)),
        (card_left + 280, "COLLECTED", "67% (2/3)", (16, 185, 129)),
        (card_left + 410, "NUDGE BOT", "ACTIVE [✓]", (245, 158, 11))
    ]
    for sx, stitle, sval, scol in stats:
        draw.rounded_rectangle([sx, 170, sx + 120, 230], radius=8, fill=(30, 41, 59), outline=scol, width=1)
        draw.text((sx + 10, 180), stitle, font=get_font(9, bold=True), fill=scol)
        draw.text((sx + 10, 200), sval, font=stat_font, fill=(255, 255, 255))

    # Extracted Items Box
    draw.rounded_rectangle([card_left + 20, 245, card_right - 20, 395], radius=10, fill=(11, 17, 30), outline=(30, 41, 59), width=2)
    draw.text((card_left + 35, 258), "🧾 GEMINI EXTRACTED ITEMS (Blinkit #9412)", font=get_font(10, bold=True), fill=(52, 211, 153))
    draw.text((card_left + 35, 280), "• Organic Milk x 2, Eggs (12pk), Bread .................. ₹420", font=body_font, fill=(226, 232, 240))
    draw.text((card_left + 35, 300), "• Olive Oil, Basmati Rice (5kg), Spices ............... ₹1,850", font=body_font, fill=(226, 232, 240))
    draw.text((card_left + 35, 320), "• Cleaning Supplies & Detergent ........................... ₹1,150", font=body_font, fill=(226, 232, 240))

    # WhatsApp Nudge Simulation Box
    draw.rounded_rectangle([card_left + 35, 345, card_right - 35, 385], radius=6, fill=(6, 78, 59), outline=(5, 150, 105), width=1)
    draw.text((card_left + 45, 352), "💬 BOT: 'Grocery ₹3,420 split is ₹1,140 each. Tap upi://pay?pa=roomie@upi'", font=get_font(10, bold=True), fill=(110, 231, 183))

    # Bottom 1-Tap UPI CTA Box
    draw.rounded_rectangle([card_left + 20, 410, card_right - 20, 485], radius=10, fill=(21, 32, 51), outline=(37, 53, 82), width=1)
    draw.rounded_rectangle([card_left + 35, 425, card_left + 265, 467], radius=6, fill=(16, 185, 129))
    draw.text((card_left + 50, 437), "⚡ 1-TAP UPI PAY (₹1,140)", font=bold_body, fill=(255, 255, 255))

    draw.rounded_rectangle([card_left + 280, 425, card_right - 35, 467], radius=6, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
    draw.text((card_left + 300, 437), "✓ AUTO-RECONCILED", font=bold_body, fill=(203, 213, 225))

    # Bottom Footer Ribbon
    draw.rounded_rectangle([60, height - 60, width - 60, height - 15], radius=8, fill=(10, 15, 29), outline=(30, 41, 59), width=1)
    draw.ellipse([80, height - 42, 90, height - 32], fill=(16, 185, 129))
    draw.text((100, height - 44), "RoomieOps AI • Autonomous Expense Splitting & UPI Settlement Engine", font=bold_body, fill=(226, 232, 240))

    draw.rounded_rectangle([width - 260, height - 52, width - 80, height - 22], radius=5, fill=(16, 185, 129, 40), outline=(16, 185, 129), width=1)
    draw.text((width - 245, height - 42), "★ DEVPOST PROJECT", font=small_font, fill=(110, 231, 183))

    # Save PNG
    png_filename = f"{filename_prefix}.png"
    png_path_public = os.path.join(OUTPUT_DIR, png_filename)
    png_path_artifact = os.path.join(ARTIFACT_DIR, png_filename)
    img.save(png_path_public, "PNG", quality=95)
    img.save(png_path_artifact, "PNG", quality=95)
    print(f"Saved {aspect_label} PNG to {png_path_public} and {png_path_artifact}")

if __name__ == "__main__":
    # Generate 4:3 ratio (1200 x 900)
    create_thumbnail(1200, 900, "roomieops-thumbnail-4x3", "4:3")
    # Generate 3:2 ratio (1200 x 800)
    create_thumbnail(1200, 800, "roomieops-thumbnail-3x2", "3:2")
