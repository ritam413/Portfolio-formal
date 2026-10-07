"""
StudioOS Retro Cinema Edition - Devpost Thumbnail & Brand Asset Generator
Generates high-res 4:3 (1200x900) and 3:2 (1200x800) PNG thumbnails + SVG vector assets matching the exact Warm Espresso, Parchment Cream, Ochre, and Burgundy Cinema design system.
"""

import os
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "public"
ARTIFACT_DIR = r"C:\Users\ritam\.gemini\antigravity-ide\brain\f06a25ef-42a5-4ecd-b62f-77a644026deb"
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(ARTIFACT_DIR, exist_ok=True)

def create_studioos_retro(width, height, filename_prefix, aspect_label="4:3"):
    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">
  <defs>
    <!-- Background & Gradients -->
    <linearGradient id="espressoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2B1810"/>
      <stop offset="50%" stop-color="#21120B"/>
      <stop offset="100%" stop-color="#180C07"/>
    </linearGradient>
    <linearGradient id="parchmentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FBF4E2"/>
      <stop offset="100%" stop-color="#EFE3C3"/>
    </linearGradient>
    <linearGradient id="ochreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E59A3D"/>
      <stop offset="100%" stop-color="#B86E20"/>
    </linearGradient>
    <linearGradient id="burgundyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991B1B"/>
      <stop offset="100%" stop-color="#6B1212"/>
    </linearGradient>

    <!-- Filters -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Base Canvas -->
  <rect width="{width}" height="{height}" fill="url(#espressoGrad)" />

  <!-- Film Strip Perforation Top Bar -->
  <rect width="{width}" height="32" fill="#150B06" />
  <g fill="#F4ECD8" opacity="0.9">
    <!-- Film sprockets -->
    {' '.join([f'<rect x="{x}" y="8" width="16" height="16" rx="3" />' for x in range(20, width - 20, 28)])}
  </g>

  <!-- Film Strip Perforation Bottom Bar -->
  <rect y="{height - 32}" width="{width}" height="32" fill="#150B06" />
  <g fill="#F4ECD8" opacity="0.9">
    {' '.join([f'<rect x="{x}" y="{height - 24}" width="16" height="16" rx="3" />' for x in range(20, width - 20, 28)])}
  </g>

  <!-- TOP HEADER / BADGES -->
  <g transform="translate(60, 50)">
    <rect width="260" height="34" rx="4" fill="#3D2217" stroke="#C88236" stroke-width="1.5" />
    <circle cx="18" cy="17" r="5" fill="#E59A3D" />
    <text x="34" y="22" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', serif" font-size="12" font-weight="800" letter-spacing="2">AUTONOMOUS CINEMA OS</text>

    <g transform="translate({width - 340}, 0)">
      <rect width="220" height="34" rx="4" fill="#7A1D1D" stroke="#991B1B" stroke-width="1.5" />
      <circle cx="20" cy="17" r="5" fill="#EF4444" />
      <text x="36" y="22" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', serif" font-size="12" font-weight="800" letter-spacing="1.5">PRODUCER HITL ACTIVE</text>
    </g>
  </g>

  <!-- LEFT HERO SECTION: BRAND & PROBLEM -->
  <g transform="translate(60, 115)">
    <!-- LOGO ICON: Retro Clapper / Aperture in Ochre & Burgundy -->
    <g transform="translate(0, 5)">
      <rect x="0" y="0" width="80" height="76" rx="10" fill="#180C07" stroke="#C88236" stroke-width="2.5"/>
      <path d="M 12 16 L 24 16 L 36 32 L 24 32 Z" fill="#C88236" />
      <path d="M 36 16 L 48 16 L 60 32 L 48 32 Z" fill="#C88236" />
      <path d="M 60 16 L 70 16 L 70 20 L 68 32 Z" fill="#C88236" />
      <circle cx="40" cy="52" r="14" fill="#3D2217" stroke="#F4ECD8" stroke-width="2" />
      <polygon points="36,44 48,52 36,60" fill="#E59A3D" />
    </g>

    <!-- Brand Name -->
    <text x="100" y="58" fill="#F4ECD8" font-family="Georgia, serif" font-size="58" font-weight="900" letter-spacing="-1">Studio<tspan fill="#E59A3D">OS</tspan></text>
    <text x="105" y="90" fill="#C88236" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="16" font-weight="700" letter-spacing="3">INTELLIGENT FILM CONTINUITY</text>

    <!-- Problem Box (Warm Parchment Plate) -->
    <g transform="translate(0, 120)">
      <rect width="490" height="120" rx="8" fill="url(#parchmentGrad)" stroke="#C88236" stroke-width="2" filter="url(#cardShadow)" />
      
      <text x="24" y="34" fill="#7A1D1D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="12" font-weight="800" letter-spacing="2">MISSION CRITICAL CRISIS</text>
      
      <text x="24" y="66" fill="#24140E" font-family="Georgia, serif" font-size="19" font-weight="800">
        Sets lose $10,000–$50,000 / hr
      </text>
      <text x="24" y="94" fill="#5C3D2E" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="600">
        When weather, gear failure, or schedule gaps hit mid-shoot.
      </text>
    </g>

    <!-- 3 Retro Ochre Feature Cards -->
    <g transform="translate(0, 265)">
      <!-- Card 1 -->
      <g transform="translate(0, 0)">
        <rect width="155" height="85" rx="6" fill="#3A2116" stroke="#C88236" stroke-width="1.5"/>
        <text x="14" y="26" fill="#E59A3D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">WEATHER AGENT</text>
        <text x="14" y="48" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" font-weight="700">🌧️ Rain Reshuffle</text>
        <text x="14" y="68" fill="#BFA79B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11">Stage swap in 420ms</text>
      </g>
      <!-- Card 2 -->
      <g transform="translate(165, 0)">
        <rect width="155" height="85" rx="6" fill="#3A2116" stroke="#C88236" stroke-width="1.5"/>
        <text x="14" y="26" fill="#E59A3D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">COST GUARD</text>
        <text x="14" y="48" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" font-weight="700">💰 Budget Impact</text>
        <text x="14" y="68" fill="#BFA79B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11">Saves $11,600 OT</text>
      </g>
      <!-- Card 3 -->
      <g transform="translate(330, 0)">
        <rect width="160" height="85" rx="6" fill="#7A1D1D" stroke="#991B1B" stroke-width="1.5"/>
        <text x="14" y="26" fill="#FCA5A5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">1-CLICK HITL</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="13" font-weight="700">🎬 Approve Plan</text>
        <text x="14" y="68" fill="#FCA5A5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11">Direct call sheet sync</text>
      </g>
    </g>

    <!-- Tech Stack Pill Ribbon -->
    <g transform="translate(0, 370)">
      <text x="0" y="22" fill="#BFA79B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">STACK &amp; RUNTIME:</text>
      
      <g transform="translate(150, 5)">
        <rect width="80" height="24" rx="4" fill="#3D2217" stroke="#C88236" stroke-width="1" />
        <text x="10" y="16" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="600">Next.js 15</text>
      </g>
      <g transform="translate(240, 5)">
        <rect width="85" height="24" rx="4" fill="#3D2217" stroke="#C88236" stroke-width="1" />
        <text x="10" y="16" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="600">Multi-Agent</text>
      </g>
      <g transform="translate(335, 5)">
        <rect width="80" height="24" rx="4" fill="#3D2217" stroke="#C88236" stroke-width="1" />
        <text x="10" y="16" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="600">Gemini AI</text>
      </g>
      <g transform="translate(425, 5)">
        <rect width="65" height="24" rx="4" fill="#3D2217" stroke="#C88236" stroke-width="1" />
        <text x="10" y="16" fill="#F4ECD8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="600">Tailwind</text>
      </g>
    </g>
  </g>

  <!-- RIGHT HERO SECTION: PARCHMENT DASHBOARD HUD (MATCHING SCREENSHOT) -->
  <g transform="translate({width - 615}, 115)" filter="url(#cardShadow)">
    <!-- Parchment Canvas Plate -->
    <rect width="555" height="{height - 230}" rx="16" fill="#EFE3C3" stroke="#C88236" stroke-width="2.5" />

    <!-- 4 Metric Cards (Ochre Rounded Plates) -->
    <g transform="translate(20, 25)">
      <!-- DELAY -->
      <rect width="115" height="65" rx="8" fill="#B56F28" />
      <text x="12" y="20" fill="#FDF6E2" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">DELAY</text>
      <text x="12" y="46" fill="#FFFFFF" font-family="Georgia, serif" font-size="19" font-weight="900">45 min</text>
      <text x="12" y="58" fill="#FDE68A" font-family="sans-serif" font-size="9" font-weight="700">ACTIVE DELAY</text>

      <!-- COST -->
      <g transform="translate(125, 0)">
        <rect width="115" height="65" rx="8" fill="#B56F28" />
        <text x="12" y="20" fill="#FDF6E2" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">COST</text>
        <text x="12" y="46" fill="#FFFFFF" font-family="Georgia, serif" font-size="19" font-weight="900">$11,600</text>
        <text x="12" y="58" fill="#FDE68A" font-family="sans-serif" font-size="9" font-weight="700">SAVED OT</text>
      </g>

      <!-- CONFIDENCE -->
      <g transform="translate(250, 0)">
        <rect width="125" height="65" rx="8" fill="#B56F28" />
        <text x="12" y="20" fill="#FDF6E2" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">CONFIDENCE</text>
        <text x="12" y="46" fill="#FFFFFF" font-family="Georgia, serif" font-size="19" font-weight="900">96%</text>
        <!-- Mini progress bar -->
        <rect x="12" y="52" width="100" height="5" rx="2" fill="#7A3D0A" />
        <rect x="12" y="52" width="96" height="5" rx="2" fill="#FDE68A" />
      </g>

      <!-- APPROVAL -->
      <g transform="translate(385, 0)">
        <rect width="130" height="65" rx="8" fill="#B56F28" />
        <text x="12" y="20" fill="#FDF6E2" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="11" font-weight="800">APPROVAL</text>
        <text x="12" y="46" fill="#FFFFFF" font-family="Georgia, serif" font-size="17" font-weight="900">PENDING</text>
        <text x="12" y="58" fill="#FDE68A" font-family="sans-serif" font-size="9" font-weight="700">PRODUCER HITL</text>
      </g>
    </g>

    <!-- Center Agent Pipeline / Disruption Node Inset (Dark Espresso Box) -->
    <g transform="translate(20, 105)">
      <rect width="250" height="230" rx="10" fill="#24140E" stroke="#B56F28" stroke-width="1.5" />
      
      <!-- Disruption Badge -->
      <g transform="translate(15, 15)">
        <rect width="105" height="22" rx="4" fill="#C88236" />
        <text x="8" y="15" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="900">⚠️ RISK DETECTED</text>
      </g>
      <text x="15" y="62" fill="#E59A3D" font-family="sans-serif" font-size="11" font-weight="800">INCIDENT DISRUPTION</text>
      <text x="15" y="85" fill="#F4ECD8" font-family="Georgia, serif" font-size="14" font-weight="800">Cascading Rain &amp; Overtime Risk</text>
      
      <rect x="15" y="102" width="220" height="2" fill="#B56F28" opacity="0.4" />
      
      <text x="15" y="125" fill="#C88236" font-family="sans-serif" font-size="11" font-weight="800">AI PROPOSED RESOLUTION:</text>
      <text x="15" y="145" fill="#F4ECD8" font-family="sans-serif" font-size="12">Swap Scene 14 to Stage 4 Indoor</text>
      <text x="15" y="165" fill="#86EFAC" font-family="sans-serif" font-size="11" font-weight="700">✓ Schedule &amp; SAG Compliant</text>
      
      <rect x="15" y="185" width="220" height="28" rx="4" fill="#3A2116" />
      <text x="25" y="203" fill="#E59A3D" font-family="monospace" font-size="10" font-weight="700">AGENT LATENCY: 420ms</text>
    </g>

    <!-- Right Result Clipboard Inset (Matching Screenshot Exactly) -->
    <g transform="translate(285, 105)">
      <rect width="250" height="230" rx="10" fill="#FAF6ED" stroke="#B56F28" stroke-width="1.5" />
      
      <!-- Top Clipboard Tab -->
      <g transform="translate(90, -10)">
        <rect width="70" height="20" rx="4" fill="#D48C3D" />
        <circle cx="35" cy="10" r="4" fill="#7A1D1D" />
      </g>

      <!-- Bold RESULT Header -->
      <text x="15" y="32" fill="#24140E" font-family="Georgia, serif" font-size="20" font-weight="900" letter-spacing="1">RESULT</text>

      <!-- Producer Board Section -->
      <rect x="15" y="42" width="220" height="20" rx="3" fill="#7A1D1D" />
      <text x="22" y="56" fill="#FFFFFF" font-family="sans-serif" font-size="10" font-weight="900">THE PRODUCER BOARD</text>

      <!-- Key Value Pairs -->
      <g transform="translate(15, 72)" font-family="sans-serif" font-size="11" fill="#4A2E1B">
        <text x="0" y="12" font-weight="700">Director Continuity:</text>
        <text x="140" y="12" fill="#B56F28" font-weight="800">Plan Matched</text>

        <text x="0" y="32" font-weight="700">Scheduling SAG:</text>
        <text x="140" y="32" fill="#16A34A" font-weight="800">Compliant</text>

        <text x="0" y="52" font-weight="700">Cost Savings:</text>
        <text x="140" y="52" fill="#B56F28" font-weight="800">+$11,600</text>
      </g>

      <!-- APPROVE & REJECT Buttons (Matching Screenshot) -->
      <g transform="translate(15, 155)">
        <rect width="105" height="32" rx="4" fill="#7A1D1D" />
        <text x="18" y="21" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="900">✓ APPROVE</text>

        <rect x="115" width="105" height="32" rx="4" fill="#B56F28" />
        <text x="135" y="21" fill="#FFFFFF" font-family="sans-serif" font-size="12" font-weight="900">⊗ REJECT</text>
      </g>

      <!-- Alternative Option Sheet -->
      <g transform="translate(15, 195)">
        <rect width="220" height="24" rx="4" fill="#3D2217" />
        <text x="22" y="16" fill="#E59A3D" font-family="sans-serif" font-size="10" font-weight="800">📋 Compare Alternative Plans (3)</text>
      </g>
    </g>

    <!-- Bottom Full Width Execution Callout -->
    <g transform="translate(20, 350)">
      <rect width="515" height="85" rx="8" fill="#3D2217" stroke="#B56F28" stroke-width="1.5" />
      <text x="18" y="28" fill="#F4ECD8" font-family="Georgia, serif" font-size="13" font-weight="800">
        Autonomous Continuity Guard: <tspan fill="#E59A3D">No Shoot Stoppage Guaranteed</tspan>
      </text>
      <text x="18" y="52" fill="#D5C4B5" font-family="sans-serif" font-size="12">
        Averts 4.5hr production downtime • Prevents overtime penalties • Updates Call Sheets in 420ms
      </text>
      <text x="18" y="72" fill="#E59A3D" font-family="monospace" font-size="10" font-weight="700">⚡ SEQUENTIAL AGENT ROUTE EXECUTED</text>
    </g>
  </g>

  <!-- BOTTOM FOOTER -->
  <g transform="translate(60, {height - 60})">
    <rect width="{width - 120}" height="45" rx="6" fill="#180C07" stroke="#3D2217" stroke-width="1.5" />
    <circle cx="20" cy="22" r="4" fill="#E59A3D" />
    <text x="35" y="26" fill="#F4ECD8" font-family="Georgia, serif" font-size="13" font-weight="700">
      StudioOS • Autonomous Film Production OS with Multi-Agent Human-In-The-Loop
    </text>
    <g transform="translate({width - 320}, 22)">
      <rect x="0" y="-14" width="180" height="26" rx="4" fill="#7A1D1D" />
      <text x="14" y="3" fill="#FFFFFF" font-family="sans-serif" font-size="11" font-weight="800">★ DEVPOST PROJECT</text>
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
    img = Image.new("RGBA", (width, height), (33, 18, 11, 255))
    draw = ImageDraw.Draw(img)

    # Background gradient
    for y in range(height):
        factor = y / height
        r = int(43 * (1 - factor) + 24 * factor)
        g = int(24 * (1 - factor) + 12 * factor)
        b = int(16 * (1 - factor) + 7 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    def get_font(size, bold=False):
        font_names = [
            "georgiab.ttf" if bold else "georgia.ttf",
            "arialbd.ttf" if bold else "arial.ttf",
            "segui_sb.ttf" if bold else "segoeui.ttf",
            "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"
        ]
        for font_name in font_names:
            try:
                return ImageFont.truetype(font_name, size)
            except Exception:
                continue
        return ImageFont.load_default()

    title_font = get_font(54, bold=True)
    subtitle_font = get_font(15, bold=True)
    card_title_font = get_font(13, bold=True)
    stat_font = get_font(19, bold=True)
    body_font = get_font(13, bold=False)
    bold_body = get_font(12, bold=True)
    small_font = get_font(10, bold=True)

    # Film strip sprockets top & bottom
    draw.rectangle([0, 0, width, 30], fill=(21, 11, 6))
    for x in range(20, width - 20, 28):
        draw.rounded_rectangle([x, 7, x + 16, 23], radius=3, fill=(244, 236, 216))

    draw.rectangle([0, height - 30, width, height], fill=(21, 11, 6))
    for x in range(20, width - 20, 28):
        draw.rounded_rectangle([x, height - 23, x + 16, height - 7], radius=3, fill=(244, 236, 216))

    # Top Header Badges
    draw.rounded_rectangle([60, 45, 340, 79], radius=4, fill=(61, 34, 23), outline=(200, 130, 54), width=1)
    draw.ellipse([75, 57, 85, 67], fill=(229, 154, 61))
    draw.text((95, 55), "AUTONOMOUS CINEMA OS", font=bold_body, fill=(244, 236, 216))

    draw.rounded_rectangle([width - 300, 45, width - 60, 79], radius=4, fill=(122, 29, 29), outline=(153, 27, 27), width=1)
    draw.ellipse([width - 285, 57, width - 275, 67], fill=(239, 68, 68))
    draw.text((width - 265, 55), "PRODUCER HITL ACTIVE", font=bold_body, fill=(255, 255, 255))

    # Left Brand Section
    # Clapper Logo Box
    draw.rounded_rectangle([60, 115, 140, 191], radius=10, fill=(24, 12, 7), outline=(200, 130, 54), width=2)
    # Clapper stripes
    draw.polygon([(72, 128), (84, 128), (96, 144), (84, 144)], fill=(200, 130, 54))
    draw.polygon([(96, 128), (108, 128), (120, 144), (108, 144)], fill=(200, 130, 54))
    draw.polygon([(120, 128), (128, 128), (128, 134), (126, 144)], fill=(200, 130, 54))
    # Iris
    draw.ellipse([88, 152, 112, 176], fill=(61, 34, 23), outline=(244, 236, 216), width=2)
    draw.polygon([(96, 158), (106, 164), (96, 170)], fill=(229, 154, 61))

    # Brand Title
    draw.text((160, 115), "Studio", font=title_font, fill=(244, 236, 216))
    draw.text((325, 115), "OS", font=title_font, fill=(229, 154, 61))
    draw.text((165, 180), "INTELLIGENT FILM CONTINUITY", font=subtitle_font, fill=(200, 130, 54))

    # Parchment Problem Box
    draw.rounded_rectangle([60, 225, 550, 345], radius=8, fill=(244, 236, 216), outline=(200, 130, 54), width=2)
    draw.text((80, 238), "MISSION CRITICAL CRISIS", font=small_font, fill=(122, 29, 29))
    draw.text((80, 260), "Sets lose $10,000–$50,000 / hr", font=get_font(18, bold=True), fill=(36, 20, 14))
    draw.text((80, 292), "When weather, gear failure, or schedule gaps hit mid-shoot.", font=body_font, fill=(92, 61, 46))

    # 3 Retro Feature Cards
    badges = [
        (60, "WEATHER AGENT", "🌧️ Rain Reshuffle", "Stage swap 420ms", (200, 130, 54), (61, 34, 23)),
        (230, "COST GUARD", "💰 Budget Impact", "Saves $11,600 OT", (200, 130, 54), (61, 34, 23)),
        (400, "1-CLICK HITL", "🎬 Approve Plan", "Call Sheet Sync", (153, 27, 27), (122, 29, 29))
    ]
    for bx, btag, btitle, bsub, bcol, bfill in badges:
        draw.rounded_rectangle([bx, 365, bx + 155, 445], radius=6, fill=bfill, outline=bcol, width=1)
        draw.text((bx + 12, 377), btag, font=small_font, fill=(229, 154, 61) if bfill != (122, 29, 29) else (252, 165, 165))
        draw.text((bx + 12, 397), btitle, font=bold_body, fill=(255, 255, 255))
        draw.text((bx + 12, 419), bsub, font=get_font(10), fill=(191, 167, 155))

    # Tech stack
    draw.text((60, 470), "STACK & RUNTIME:", font=small_font, fill=(191, 167, 155))
    techs = [(180, "Next.js 15"), (275, "Multi-Agent"), (375, "Gemini AI"), (465, "Tailwind")]
    for tx, tname in techs:
        draw.rounded_rectangle([tx, 465, tx + 80, 489], radius=4, fill=(61, 34, 23), outline=(200, 130, 54), width=1)
        draw.text((tx + 8, 470), tname, font=get_font(10, bold=True), fill=(244, 236, 216))

    # Right Section: Parchment Dashboard Plate
    card_right = width - 60
    card_left = width - 615
    card_bottom = height - 80
    draw.rounded_rectangle([card_left, 115, card_right, card_bottom], radius=16, fill=(239, 227, 195), outline=(200, 130, 54), width=3)

    # 4 Metric Cards across top of parchment
    stats = [
        (card_left + 15, "DELAY", "45 min", "ACTIVE DELAY"),
        (card_left + 145, "COST", "$11,600", "SAVED OT"),
        (card_left + 275, "CONFIDENCE", "96%", "HIGH QUALITY"),
        (card_left + 405, "APPROVAL", "PENDING", "PRODUCER HITL")
    ]
    for sx, stitle, sval, ssub in stats:
        draw.rounded_rectangle([sx, 135, sx + 120, 195], radius=8, fill=(181, 111, 40))
        draw.text((sx + 10, 142), stitle, font=small_font, fill=(253, 246, 226))
        draw.text((sx + 10, 158), sval, font=stat_font, fill=(255, 255, 255))
        draw.text((sx + 10, 180), ssub, font=get_font(8, bold=True), fill=(253, 230, 138))

    # Center Inset 1: Dark Espresso Incident Box
    draw.rounded_rectangle([card_left + 15, 210, card_left + 265, 410], radius=10, fill=(36, 20, 14), outline=(181, 111, 40), width=1)
    draw.rounded_rectangle([card_left + 25, 222, card_left + 140, 242], radius=4, fill=(200, 130, 54))
    draw.text((card_left + 32, 227), "⚠️ RISK DETECTED", font=small_font, fill=(255, 255, 255))
    draw.text((card_left + 25, 252), "Cascading Rain & Overtime Risk", font=bold_body, fill=(244, 236, 216))
    draw.text((card_left + 25, 280), "AI PROPOSED RESOLUTION:", font=small_font, fill=(229, 154, 61))
    draw.text((card_left + 25, 298), "Swap Scene 14 to Stage 4 Indoor", font=body_font, fill=(244, 236, 216))
    draw.text((card_left + 25, 320), "✓ Schedule & SAG Compliant", font=small_font, fill=(134, 239, 172))
    
    draw.rounded_rectangle([card_left + 25, 355, card_left + 255, 390], radius=4, fill=(61, 34, 23))
    draw.text((card_left + 35, 367), "AGENT LATENCY: 420ms", font=get_font(10, bold=True), fill=(229, 154, 61))

    # Center Inset 2: White/Parchment RESULT Clipboard (Matching User's Screenshot)
    draw.rounded_rectangle([card_left + 280, 210, card_right - 15, 410], radius=10, fill=(250, 246, 237), outline=(181, 111, 40), width=1)
    # Clip tab
    draw.rounded_rectangle([card_left + 370, 202, card_left + 440, 220], radius=4, fill=(212, 140, 61))
    draw.ellipse([card_left + 400, 206, card_left + 410, 216], fill=(122, 29, 29))

    draw.text((card_left + 295, 230), "RESULT", font=get_font(20, bold=True), fill=(36, 20, 14))

    # Producer Board Header
    draw.rounded_rectangle([card_left + 295, 258, card_right - 25, 278], radius=3, fill=(122, 29, 29))
    draw.text((card_left + 302, 263), "THE PRODUCER BOARD", font=small_font, fill=(255, 255, 255))

    draw.text((card_left + 295, 290), "Director Continuity: Matched", font=small_font, fill=(74, 46, 27))
    draw.text((card_left + 295, 310), "Scheduling SAG: Compliant", font=small_font, fill=(22, 163, 74))
    draw.text((card_left + 295, 330), "Cost Impact: Saved $11,600", font=small_font, fill=(181, 111, 40))

    # APPROVE & REJECT Buttons
    draw.rounded_rectangle([card_left + 295, 355, card_left + 395, 390], radius=4, fill=(122, 29, 29))
    draw.text((card_left + 310, 367), "✓ APPROVE", font=bold_body, fill=(255, 255, 255))

    draw.rounded_rectangle([card_left + 405, 355, card_right - 25, 390], radius=4, fill=(181, 111, 40))
    draw.text((card_left + 420, 367), "⊗ REJECT", font=bold_body, fill=(255, 255, 255))

    # Bottom Execution Callout
    draw.rounded_rectangle([card_left + 15, 425, card_right - 15, 480], radius=8, fill=(61, 34, 23), outline=(181, 111, 40), width=1)
    draw.text((card_left + 25, 437), "Autonomous Continuity Guard • Call Sheets Updated in 420ms", font=bold_body, fill=(244, 236, 216))
    draw.text((card_left + 25, 457), "⚡ SEQUENTIAL AGENT ROUTE EXECUTED", font=get_font(10, bold=True), fill=(229, 154, 61))

    # Bottom Footer
    draw.rounded_rectangle([60, height - 55, width - 60, height - 15], radius=6, fill=(24, 12, 7), outline=(61, 34, 23), width=1)
    draw.ellipse([80, height - 38, 90, height - 28], fill=(229, 154, 61))
    draw.text((100, height - 40), "StudioOS • Autonomous Film Production OS with Multi-Agent Human-In-The-Loop", font=bold_body, fill=(244, 236, 216))

    draw.rounded_rectangle([width - 240, height - 48, width - 80, height - 20], radius=4, fill=(122, 29, 29))
    draw.text((width - 225, height - 38), "★ DEVPOST PROJECT", font=small_font, fill=(255, 255, 255))

    # Save PNG
    png_filename = f"{filename_prefix}.png"
    png_path_public = os.path.join(OUTPUT_DIR, png_filename)
    png_path_artifact = os.path.join(ARTIFACT_DIR, png_filename)
    img.save(png_path_public, "PNG", quality=95)
    img.save(png_path_artifact, "PNG", quality=95)
    print(f"Saved {aspect_label} PNG to {png_path_public} and {png_path_artifact}")

if __name__ == "__main__":
    # Generate 4:3 (1200x900)
    create_studioos_retro(1200, 900, "studioos-retro-thumbnail-4x3", "4:3")
    # Generate 3:2 (1200x800)
    create_studioos_retro(1200, 800, "studioos-retro-thumbnail-3x2", "3:2")
