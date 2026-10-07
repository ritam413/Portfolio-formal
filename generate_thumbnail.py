"""
StudioOS Devpost Thumbnail & Brand Asset Generator
Generates high-res 1200x800 (3:2 ratio) thumbnail PNG and scalable SVG assets.
"""

import os
import math
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "public"
os.makedirs(OUTPUT_DIR, exist_ok=True)

WIDTH = 1200
HEIGHT = 800  # 3:2 ratio

# 1. Generate SVG Thumbnail
svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {WIDTH} {HEIGHT}" width="{WIDTH}" height="{HEIGHT}">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="20%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#0F172A" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#050811" stop-opacity="1"/>
    </radialGradient>
    <radialGradient id="amberAura" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#D97706" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cyanAura" cx="15%" cy="85%" r="45%">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.2"/>
      <stop offset="70%" stop-color="#0284C7" stop-opacity="0.03"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Linear Gradients -->
    <linearGradient id="textGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#FDE68A"/>
      <stop offset="100%" stop-color="#F59E0B"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.9"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#F59E0B" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#334155" stop-opacity="0.2"/>
    </linearGradient>

    <!-- Drop Shadows -->
    <filter id="glowGold" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Base Canvas -->
  <rect width="{WIDTH}" height="{HEIGHT}" fill="#070B14" />
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#bgGlow)" />
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#amberAura)" />
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#cyanAura)" />

  <!-- Grid Blueprint Overlay -->
  <g opacity="0.12" stroke="#64748B" stroke-width="1">
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" />
    </pattern>
    <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#grid)" />
  </g>

  <!-- Cinema Letterbox / Viewfinder HUD Frame -->
  <g stroke="#38BDF8" stroke-width="2" opacity="0.4">
    <!-- Top-Left Corner -->
    <path d="M 40 70 L 40 40 L 70 40" fill="none" />
    <!-- Top-Right Corner -->
    <path d="M 1130 40 L 1160 40 L 1160 70" fill="none" />
    <!-- Bottom-Left Corner -->
    <path d="M 40 730 L 40 760 L 70 760" fill="none" />
    <!-- Bottom-Right Corner -->
    <path d="M 1130 760 L 1160 760 L 1160 730" fill="none" />
  </g>

  <!-- Viewfinder Crosshairs & Markers -->
  <g opacity="0.3" stroke="#F59E0B" stroke-width="1.5">
    <line x1="600" y1="35" x2="600" y2="50" />
    <line x1="600" y1="750" x2="600" y2="765" />
    <line x1="35" y1="400" x2="50" y2="400" />
    <line x1="1150" y1="400" x2="1165" y2="400" />
  </g>

  <!-- TOP HEADER / BADGE -->
  <g transform="translate(60, 55)">
    <!-- Pill Badge -->
    <rect width="270" height="34" rx="6" fill="#1E293B" stroke="#0EA5E9" stroke-opacity="0.4" stroke-width="1.2" />
    <circle cx="20" cy="17" r="5" fill="#10B981" />
    <circle cx="20" cy="17" r="8" fill="#10B981" opacity="0.3" />
    <text x="36" y="22" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">FILM SET INTELLIGENCE</text>

    <!-- REC Indicator -->
    <g transform="translate(930, 0)">
      <rect width="150" height="34" rx="6" fill="#1E293B" stroke="#EF4444" stroke-opacity="0.5" stroke-width="1.2" />
      <circle cx="22" cy="17" r="5" fill="#EF4444">
        <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="38" y="22" fill="#F87171" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="800" letter-spacing="2">REC • LIVE 24FPS</text>
    </g>
  </g>

  <!-- LEFT HERO SECTION: BRAND & LOGO -->
  <g transform="translate(60, 130)">
    <!-- LOGO ICON: Geometric Cyber-Clapperboard & Aperture -->
    <g transform="translate(0, 5)">
      <!-- Clapperboard Container -->
      <rect x="0" y="0" width="80" height="76" rx="14" fill="#0F172A" stroke="url(#goldGrad)" stroke-width="2.5" filter="url(#glowGold)"/>
      
      <!-- Clapper Top Sticks (Angled stripes) -->
      <path d="M 12 16 L 24 16 L 36 32 L 24 32 Z" fill="#F59E0B" />
      <path d="M 36 16 L 48 16 L 60 32 L 48 32 Z" fill="#F59E0B" />
      <path d="M 60 16 L 70 16 L 70 20 L 68 32 Z" fill="#F59E0B" />
      
      <!-- Central Aperture Iris / AI Node -->
      <circle cx="40" cy="52" r="14" fill="#1E293B" stroke="#38BDF8" stroke-width="2" />
      <polygon points="36,44 48,52 36,60" fill="#FCD34D" />
    </g>

    <!-- Brand Name -->
    <text x="100" y="58" fill="url(#textGoldGrad)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" letter-spacing="-1.5">Studio<tspan fill="#38BDF8">OS</tspan></text>
    
    <!-- Subtitle / Category -->
    <text x="105" y="92" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" letter-spacing="3.5">AUTONOMOUS FILM PRODUCTION OS</text>

    <!-- Elevator Pitch Highlight Box -->
    <g transform="translate(0, 120)">
      <rect width="490" height="110" rx="12" fill="url(#cardGrad)" stroke="#334155" stroke-width="1.5" />
      
      <text x="24" y="38" fill="#F59E0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" letter-spacing="1.5">MISSION-CRITICAL PROBLEM</text>
      
      <text x="24" y="68" fill="#F1F5F9" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="700">
        Film sets lose ₹50,000–₹5,00,000 / hr
      </text>
      <text x="24" y="92" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500">
        When rain, illness, or gear crashes hit mid-shoot.
      </text>
    </g>

    <!-- 3 Core Feature Badges -->
    <g transform="translate(0, 255)">
      <!-- Feature 1 -->
      <g transform="translate(0, 0)">
        <rect width="155" height="74" rx="8" fill="#111827" stroke="#38BDF8" stroke-width="1.2" opacity="0.9"/>
        <text x="14" y="28" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">MULTI-AGENT</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">Real-time Fixes</text>
        <text x="14" y="62" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10">Auto-routes tasks</text>
      </g>
      <!-- Feature 2 -->
      <g transform="translate(165, 0)">
        <rect width="155" height="74" rx="8" fill="#111827" stroke="#F59E0B" stroke-width="1.2" opacity="0.9"/>
        <text x="14" y="28" fill="#F59E0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">COST GUARD</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">Budget Impact</text>
        <text x="14" y="62" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10">Instant INR calc</text>
      </g>
      <!-- Feature 3 -->
      <g transform="translate(330, 0)">
        <rect width="160" height="74" rx="8" fill="#111827" stroke="#10B981" stroke-width="1.2" opacity="0.9"/>
        <text x="14" y="28" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1">PRODUCER HITL</text>
        <text x="14" y="48" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">1-Click Approve</text>
        <text x="14" y="62" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10">Advisory / Auto</text>
      </g>
    </g>

    <!-- Tech Stack Pill Ribbon -->
    <g transform="translate(0, 350)">
      <text x="0" y="22" fill="#64748B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">STACK &amp; ARCHITECTURE:</text>
      
      <g transform="translate(160, 5)">
        <rect width="70" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="12" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Next.js</text>
      </g>
      <g transform="translate(238, 5)">
        <rect width="88" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Tailwind v4</text>
      </g>
      <g transform="translate(334, 5)">
        <rect width="68" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Agents</text>
      </g>
      <g transform="translate(410, 5)">
        <rect width="75" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1" />
        <text x="10" y="16" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600">Gemini</text>
      </g>
    </g>
  </g>

  <!-- RIGHT HERO SECTION: INTERACTIVE TACTICAL UI DASHBOARD PREVIEW -->
  <g transform="translate(585, 120)" filter="url(#cardShadow)">
    <!-- Main Dashboard Card Frame -->
    <rect width="555" height="475" rx="16" fill="#0E1626" stroke="url(#borderGrad)" stroke-width="2" />
    
    <!-- Card Top Header Bar -->
    <rect width="555" height="42" rx="16" fill="#162238" />
    <circle cx="25" cy="21" r="5" fill="#EF4444" />
    <circle cx="42" cy="21" r="5" fill="#F59E0B" />
    <circle cx="59" cy="21" r="5" fill="#10B981" />
    <text x="80" y="26" fill="#94A3B8" font-family="monospace" font-size="12" font-weight="600">StudioOS // Incident_Resolver_Agent.ts</text>
    <rect x="440" y="10" width="95" height="22" rx="4" fill="#0284C7" />
    <text x="450" y="25" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">AGENT ACTIVE</text>

    <!-- Metric Stat Strip -->
    <g transform="translate(20, 56)">
      <!-- Delay -->
      <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#D97706" stroke-width="1.2" />
      <text x="14" y="22" fill="#F59E0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">NET DELAY</text>
      <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">45 min</text>

      <!-- Cost Impact -->
      <g transform="translate(130, 0)">
        <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#EF4444" stroke-width="1.2" />
        <text x="14" y="22" fill="#F87171" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">SAVED COST</text>
        <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">₹3.85 L</text>
      </g>

      <!-- Confidence -->
      <g transform="translate(260, 0)">
        <rect width="120" height="60" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.2" />
        <text x="14" y="22" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">AI CONFIDENCE</text>
        <text x="14" y="47" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">96.4%</text>
      </g>

      <!-- Approval -->
      <g transform="translate(390, 0)">
        <rect width="125" height="60" rx="8" fill="#1E293B" stroke="#10B981" stroke-width="1.2" />
        <text x="14" y="22" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">STAGE</text>
        <text x="14" y="47" fill="#34D399" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">READY [✓]</text>
      </g>
    </g>

    <!-- Pipeline Workflow Visualizer -->
    <g transform="translate(20, 130)">
      <rect width="515" height="175" rx="10" fill="#0B111E" stroke="#1E293B" stroke-width="1.5" />
      <text x="18" y="25" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1">AGENT WORKFLOW ROUTE</text>
      
      <!-- Node 1: Weather Incident -->
      <g transform="translate(18, 45)">
        <rect width="95" height="95" rx="8" fill="#1E293B" stroke="#F59E0B" stroke-width="1.5" />
        <text x="10" y="24" fill="#F59E0B" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">DISRUPTION</text>
        <text x="10" y="46" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">🌧️ Rain Alert</text>
        <text x="10" y="66" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10">Set B Outdoor</text>
        <text x="10" y="82" fill="#EF4444" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700">HOLD APPLIED</text>
      </g>

      <!-- Arrow 1 -->
      <path d="M 120 92 L 145 92" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4" />
      <polygon points="145,89 152,92 145,95" fill="#38BDF8" />

      <!-- Node 2: AI Optimization -->
      <g transform="translate(155, 45)">
        <rect width="95" height="95" rx="8" fill="#1E293B" stroke="#38BDF8" stroke-width="1.5" />
        <text x="10" y="24" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">AGENT</text>
        <text x="10" y="46" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">🧠 Reroute</text>
        <text x="10" y="66" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10">Stage 4 Indoor</text>
        <text x="10" y="82" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700">SCENE 14 SWAP</text>
      </g>

      <!-- Arrow 2 -->
      <path d="M 257 92 L 282 92" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4" />
      <polygon points="282,89 289,92 282,95" fill="#38BDF8" />

      <!-- Node 3: Budget Guard -->
      <g transform="translate(292, 45)">
        <rect width="95" height="95" rx="8" fill="#1E293B" stroke="#10B981" stroke-width="1.5" />
        <text x="10" y="24" fill="#10B981" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800">BUDGET</text>
        <text x="10" y="46" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700">💰 Cost Guard</text>
        <text x="10" y="66" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10">Cast in Overtime</text>
        <text x="10" y="82" fill="#38BDF8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700">SAVINGS ₹3.8L</text>
      </g>

      <!-- Arrow 3 -->
      <path d="M 394 92 L 419 92" stroke="#10B981" stroke-width="2" />
      <polygon points="419,89 426,92 419,95" fill="#10B981" />

      <!-- Node 4: Call Sheet Publish -->
      <g transform="translate(428, 45)">
        <rect width="75" height="95" rx="8" fill="#065F46" stroke="#34D399" stroke-width="1.5" />
        <text x="8" y="24" fill="#A7F3D0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="800">DISPATCH</text>
        <text x="8" y="46" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700">📋 Crew</text>
        <text x="8" y="64" fill="#D1FAE5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9">Call Sheet</text>
        <text x="8" y="82" fill="#6EE7B7" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700">UPDATED</text>
      </g>

      <text x="18" y="160" fill="#38BDF8" font-family="monospace" font-size="11">⚡ Execution Latency: 420ms | Producer Auto-Resolution Active</text>
    </g>

    <!-- Interactive Producer Action Bar -->
    <g transform="translate(20, 320)">
      <!-- Producer Board Container -->
      <rect width="515" height="135" rx="10" fill="#152033" stroke="#253552" stroke-width="1.5" />
      
      <!-- Summary Line -->
      <text x="18" y="30" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">
        AI Proposed Action: <tspan fill="#F59E0B">Swap Schedule ➔ Advance Scene 14 on Stage 4</tspan>
      </text>
      <text x="18" y="52" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12">
        Averts 4.5hr production downtime • Prevents ₹4,25,000 crew overtime penalty
      </text>

      <!-- Buttons -->
      <g transform="translate(18, 75)">
        <!-- Approve Button -->
        <rect width="235" height="42" rx="6" fill="#10B981" />
        <text x="50" y="26" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="800" letter-spacing="0.5">✓ APPROVE ACTION</text>

        <!-- Alternative Plans -->
        <g transform="translate(250, 0)">
          <rect width="230" height="42" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.2" />
          <text x="40" y="26" fill="#CBD5E1" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">EXPLORE OPTIONS (3)</text>
        </g>
      </g>
    </g>
  </g>

  <!-- BOTTOM FOOTER CALLOUT BAR -->
  <g transform="translate(60, 680)">
    <rect width="1080" height="55" rx="10" fill="#0A0F1D" stroke="#1E293B" stroke-width="1.5" />
    
    <g transform="translate(25, 33)">
      <circle cx="0" cy="-4" r="4" fill="#38BDF8" />
      <text x="15" y="0" fill="#E2E8F0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700">
        StudioOS • Intelligent Cinema Set Continuity &amp; Dynamic Disruption Mitigation
      </text>
    </g>

    <g transform="translate(850, 33)">
      <rect x="0" y="-18" width="205" height="30" rx="6" fill="#F59E0B" fill-opacity="0.15" stroke="#F59E0B" stroke-width="1"/>
      <text x="18" y="1" fill="#FCD34D" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="800" letter-spacing="1.5">★ DEVPOST SUBMISSION</text>
    </g>
  </g>
</svg>"""

# Save SVG to public directory
svg_path = os.path.join(OUTPUT_DIR, "studioos-thumbnail.svg")
with open(svg_path, "w", encoding="utf-8") as f:
    f.write(svg_content)
print(f"Saved SVG thumbnail to {svg_path}")

# 2. Render High-Resolution PNG with PIL
img = Image.new("RGBA", (WIDTH, HEIGHT), (7, 11, 20, 255))
draw = ImageDraw.Draw(img)

# Background subtle gradient
for y in range(HEIGHT):
    factor = y / HEIGHT
    r = int(10 * (1 - factor) + 5 * factor)
    g = int(18 * (1 - factor) + 8 * factor)
    b = int(32 * (1 - factor) + 16 * factor)
    draw.line([(0, y), (WIDTH, y)], fill=(r, g, b, 255))

# Draw Grid overlay
grid_spacing = 40
for x in range(0, WIDTH, grid_spacing):
    draw.line([(x, 0), (x, HEIGHT)], fill=(30, 41, 59, 60))
for y in range(0, HEIGHT, grid_spacing):
    draw.line([(0, y), (WIDTH, y)], fill=(30, 41, 59, 60))

# Try loading standard system fonts or fallback
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

title_font = get_font(60, bold=True)
subtitle_font = get_font(18, bold=True)
card_title_font = get_font(14, bold=True)
stat_font = get_font(22, bold=True)
body_font = get_font(13, bold=False)
bold_body = get_font(13, bold=True)
small_font = get_font(11, bold=True)
badge_font = get_font(12, bold=True)

# Draw Cinema Viewfinder Frame Corners
draw.line([(40, 70), (40, 40), (70, 40)], fill=(56, 189, 248, 140), width=3)
draw.line([(1130, 40), (1160, 40), (1160, 70)], fill=(56, 189, 248, 140), width=3)
draw.line([(40, 730), (40, 760), (70, 760)], fill=(56, 189, 248, 140), width=3)
draw.line([(1130, 760), (1160, 760), (1160, 730)], fill=(56, 189, 248, 140), width=3)

# Top Header Badges
draw.rounded_rectangle([60, 55, 330, 89], radius=6, fill=(30, 41, 59, 240), outline=(14, 165, 233, 150), width=1)
draw.ellipse([75, 67, 85, 77], fill=(16, 185, 129, 255))
draw.text((95, 65), "FILM SET INTELLIGENCE", font=badge_font, fill=(226, 232, 240))

draw.rounded_rectangle([990, 55, 1140, 89], radius=6, fill=(30, 41, 59, 240), outline=(239, 68, 68, 180), width=1)
draw.ellipse([1005, 67, 1015, 77], fill=(239, 68, 68, 255))
draw.text((1025, 65), "REC • LIVE 24FPS", font=badge_font, fill=(248, 113, 113))

# Left Section: Brand Logo & Typography
# Logo Box
draw.rounded_rectangle([60, 135, 140, 211], radius=14, fill=(15, 23, 42, 255), outline=(245, 158, 11, 255), width=3)
# Clapperboard stripes
draw.polygon([(72, 148), (84, 148), (96, 166), (84, 166)], fill=(245, 158, 11))
draw.polygon([(96, 148), (108, 148), (120, 166), (108, 166)], fill=(245, 158, 11))
draw.polygon([(120, 148), (128, 148), (128, 154), (126, 166)], fill=(245, 158, 11))
# Center Iris / Play
draw.ellipse([88, 172, 112, 196], fill=(30, 41, 59), outline=(56, 189, 248), width=2)
draw.polygon([(96, 178), (106, 184), (96, 190)], fill=(252, 211, 77))

# Title
draw.text((160, 135), "Studio", font=title_font, fill=(253, 230, 138))
draw.text((345, 135), "OS", font=title_font, fill=(56, 189, 248))
draw.text((165, 205), "AUTONOMOUS FILM PRODUCTION OS", font=subtitle_font, fill=(148, 163, 184))

# Problem Callout Box
draw.rounded_rectangle([60, 250, 550, 360], radius=12, fill=(20, 29, 47, 240), outline=(51, 65, 85, 255), width=2)
draw.text((80, 268), "MISSION-CRITICAL PROBLEM", font=card_title_font, fill=(245, 158, 11))
draw.text((80, 294), "Film sets lose ₹50,000–₹5,00,000 / hr", font=get_font(18, bold=True), fill=(241, 245, 249))
draw.text((80, 324), "When rain, illness, or gear crashes hit mid-shoot.", font=body_font, fill=(148, 163, 184))

# 3 Feature Badges
badges = [
    (60, "MULTI-AGENT", "Real-time Fixes", "Auto-routes tasks", (56, 189, 248)),
    (230, "COST GUARD", "Budget Impact", "Instant INR calc", (245, 158, 11)),
    (400, "PRODUCER HITL", "1-Click Approve", "Advisory / Auto", (16, 185, 129))
]
for bx, btag, btitle, bsub, bcol in badges:
    draw.rounded_rectangle([bx, 385, bx + 155, 460], radius=8, fill=(17, 24, 39, 240), outline=bcol, width=1)
    draw.text((bx + 14, 397), btag, font=small_font, fill=bcol)
    draw.text((bx + 14, 417), btitle, font=bold_body, fill=(255, 255, 255))
    draw.text((bx + 14, 437), bsub, font=get_font(10), fill=(100, 116, 139))

# Tech Stack line
draw.text((60, 485), "STACK & ARCHITECTURE:", font=small_font, fill=(100, 116, 139))
techs = [(220, "Next.js 15"), (305, "Tailwind v4"), (395, "Multi-Agent"), (485, "Gemini AI")]
for tx, tname in techs:
    draw.rounded_rectangle([tx, 480, tx + 75, 504], radius=4, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
    draw.text((tx + 8, 485), tname, font=get_font(10, bold=True), fill=(203, 213, 225))

# Right Section: Dashboard Mockup Card
draw.rounded_rectangle([580, 120, 1140, 600], radius=16, fill=(14, 22, 38, 250), outline=(56, 189, 248, 120), width=2)
# Card Header
draw.rounded_rectangle([580, 120, 1140, 162], radius=16, fill=(22, 34, 56))
draw.ellipse([595, 136, 605, 146], fill=(239, 68, 68))
draw.ellipse([612, 136, 622, 146], fill=(245, 158, 11))
draw.ellipse([629, 136, 639, 146], fill=(16, 185, 129))
draw.text((650, 134), "StudioOS // Incident_Resolver_Agent.ts", font=get_font(11, bold=True), fill=(148, 163, 184))

draw.rounded_rectangle([1020, 130, 1125, 152], radius=4, fill=(2, 132, 199))
draw.text((1030, 134), "AGENT ACTIVE", font=small_font, fill=(255, 255, 255))

# Stat strip
stats = [
    (600, "NET DELAY", "45 min", (217, 119, 6)),
    (730, "SAVED COST", "₹3.85 L", (239, 68, 68)),
    (860, "AI CONFIDENCE", "96.4%", (56, 189, 248)),
    (990, "STAGE", "READY [✓]", (16, 185, 129))
]
for sx, stitle, sval, scol in stats:
    draw.rounded_rectangle([sx, 175, sx + 120, 235], radius=8, fill=(30, 41, 59), outline=scol, width=1)
    draw.text((sx + 12, 185), stitle, font=small_font, fill=scol)
    draw.text((sx + 12, 205), sval, font=stat_font, fill=(255, 255, 255))

# Workflow Node Box
draw.rounded_rectangle([600, 250, 1120, 420], radius=10, fill=(11, 17, 30), outline=(30, 41, 59), width=2)
draw.text((618, 265), "AGENT WORKFLOW ROUTE", font=small_font, fill=(148, 163, 184))

# 4 Pipeline Nodes
nodes = [
    (618, "DISRUPTION", "🌧️ Rain Alert", "Set B Outdoor", "HOLD APPLIED", (245, 158, 11)),
    (745, "AGENT", "🧠 Reroute", "Stage 4 Indoor", "SCENE 14 SWAP", (56, 189, 248)),
    (872, "BUDGET", "💰 Cost Guard", "Cast in Overtime", "SAVINGS ₹3.8L", (16, 185, 129)),
    (999, "DISPATCH", "📋 Crew", "Call Sheet", "UPDATED", (52, 211, 153))
]
for nx, ntag, ntitle, nsub, nstat, ncol in nodes:
    draw.rounded_rectangle([nx, 290, nx + 110, 385], radius=8, fill=(30, 41, 59), outline=ncol, width=1)
    draw.text((nx + 10, 300), ntag, font=get_font(9, bold=True), fill=ncol)
    draw.text((nx + 10, 320), ntitle, font=bold_body, fill=(255, 255, 255))
    draw.text((nx + 10, 342), nsub, font=get_font(10), fill=(148, 163, 184))
    draw.text((nx + 10, 362), nstat, font=get_font(9, bold=True), fill=ncol)

# Connecting arrows
draw.line([(730, 337), (742, 337)], fill=(56, 189, 248), width=2)
draw.line([(857, 337), (869, 337)], fill=(56, 189, 248), width=2)
draw.line([(984, 337), (996, 337)], fill=(16, 185, 129), width=2)

draw.text((618, 398), "⚡ Execution Latency: 420ms | Producer Auto-Resolution Active", font=get_font(10), fill=(56, 189, 248))

# Bottom Producer Board
draw.rounded_rectangle([600, 435, 1120, 580], radius=10, fill=(21, 32, 51), outline=(37, 53, 82), width=1)
draw.text((618, 452), "AI Proposed Action: Swap Schedule -> Advance Scene 14 on Stage 4", font=bold_body, fill=(253, 230, 138))
draw.text((618, 475), "Averts 4.5hr production downtime • Prevents ₹4,25,000 crew overtime penalty", font=body_font, fill=(148, 163, 184))

draw.rounded_rectangle([618, 510, 855, 555], radius=6, fill=(16, 185, 129))
draw.text((660, 524), "✓ APPROVE ACTION", font=bold_body, fill=(255, 255, 255))

draw.rounded_rectangle([875, 510, 1105, 555], radius=6, fill=(30, 41, 59), outline=(71, 85, 105), width=1)
draw.text((915, 524), "EXPLORE OPTIONS (3)", font=bold_body, fill=(203, 213, 225))

# Bottom Footer Ribbon
draw.rounded_rectangle([60, 680, 1140, 735], radius=10, fill=(10, 15, 29), outline=(30, 41, 59), width=1)
draw.ellipse([80, 703, 90, 713], fill=(56, 189, 248))
draw.text((100, 700), "StudioOS • Intelligent Cinema Set Continuity & Dynamic Disruption Mitigation", font=bold_body, fill=(226, 232, 240))

draw.rounded_rectangle([920, 690, 1120, 725], radius=6, fill=(245, 158, 11, 40), outline=(245, 158, 11), width=1)
draw.text((935, 702), "★ DEVPOST SUBMISSION", font=small_font, fill=(252, 211, 77))

# Save PNG image
png_path = os.path.join(OUTPUT_DIR, "studioos-thumbnail.png")
img.save(png_path, "PNG", quality=95)
print(f"Saved High-Res 1200x800 PNG thumbnail to {png_path}")
