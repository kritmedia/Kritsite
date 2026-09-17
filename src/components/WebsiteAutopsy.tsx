import React, { useState } from 'react';
import { Sparkles, AlertTriangle, CheckCircle2, Zap, Search, Eye, ShieldCheck, ArrowRight, Gauge, Cpu } from 'lucide-react';

interface DiagnosticPin {
  id: string;
  label: string;
  defect: string;
  cure: string;
  impact: string;
  position: { top: string; left: string };
}

const DIAGNOSTIC_PINS: DiagnosticPin[] = [
  {
    id: 'headline',
    label: 'Positioning & Headline',
    defect: 'Vague generic statement ("Welcome to our site"). 73% drop-off in first 3 seconds.',
    cure: 'Commanding outcome-driven proposition with high-contrast dual-tone typography.',
    impact: '+42% Initial Session Engagement',
    position: { top: '24%', left: '22%' },
  },
  {
    id: 'speed',
    label: 'Core Web Vitals LCP',
    defect: '3.8s LCP, bloated 4.2MB bundles, heavy uncompressed media, render-blocking scripts.',
    cure: '0.34s edge-cached hydration, zero unused JavaScript, sub-second visual stability.',
    impact: '99+ Verified Lighthouse Velocity',
    position: { top: '28%', left: '82%' },
  },
  {
    id: 'design',
    label: 'Brand Hierarchy & Layout',
    defect: 'Cookie-cutter theme template, uncalibrated margins, low-contrast washed-out text.',
    cure: 'Bespoke Swiss luxury dark-mode, custom font pairing, subtle 2026 ambient glass glow.',
    impact: 'Executive Tier Brand Credibility',
    position: { top: '64%', left: '30%' },
  },
  {
    id: 'value',
    label: 'Commercial Value Architecture',
    defect: 'Feature dump without pricing transparency or proof. Zero reason to buy now.',
    cure: 'Inverted-pyramid value model leading directly into primary conversion action.',
    impact: '3.2x Lead-to-Call Conversion Rate',
    position: { top: '64%', left: '72%' },
  },
  {
    id: 'search',
    label: 'AEO & GEO Search Graph',
    defect: 'Invisible to AI search engines. Missing Schema.org JSON-LD and semantic hierarchy.',
    cure: 'Full entity graph, schema injection for Perplexity, ChatGPT Search, and Google Overviews.',
    impact: 'LLM Citation & Top-Tier Ranking',
    position: { top: '88%', left: '76%' },
  },
];

export const WebsiteAutopsy: React.FC = () => {
  const [isCured, setIsCured] = useState<boolean>(false);
  const [activePin, setActivePin] = useState<string | null>(null);

  const selectedPinData = DIAGNOSTIC_PINS.find((p) => p.id === activePin);

  return (
    <div className="relative w-full max-w-[640px] mx-auto py-6 sm:py-8 px-2 sm:px-6 select-none">
      {/* ── Top Interactive Mode Switcher ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">
            Interactive Diagnostic Station
          </span>
        </div>

        {/* 2026 Segmented Pill Switcher */}
        <div className="inline-flex p-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <button
            type="button"
            onClick={() => {
              setIsCured(false);
              setActivePin(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              !isCured
                ? 'bg-[#ef4444]/20 border border-[#ef4444]/40 text-[#ef4444] shadow-[0_0_15px_rgba(239,68,68,0.25)] font-bold'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3 h-3" />
            <span>✕ Typical Bloat</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setIsCured(true);
              setActivePin(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              isCured
                ? 'bg-[#ff5500] text-white shadow-[0_0_20px_rgba(255,85,0,0.4)] font-bold'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>✦ KritSite Standard</span>
          </button>
        </div>
      </div>

      {/* ── Browser Mockup Window ── */}
      <div
        className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.95)] transition-all duration-500 overflow-hidden ${
          isCured
            ? 'bg-[#090a0f] border border-[#ff5500]/30 shadow-[0_30px_90px_rgba(255,85,0,0.15)] ring-1 ring-[#ff5500]/20'
            : 'bg-[#0c0d12] border border-white/15 ring-1 ring-white/5'
        }`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-700 ${
            isCured ? 'bg-[#ff5500]/15' : 'bg-red-600/10'
          }`}
        />

        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-white/[0.08] relative z-10">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${isCured ? 'bg-[#ff5500]' : 'bg-[#ef4444]'}`} />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]/50" />
          </div>

          {/* Faux Address Pill with Status */}
          <div className="h-5 sm:h-6 px-3 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${isCured ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
            <span className="text-[10px] sm:text-xs font-mono tracking-wide text-white/70">
              {isCured ? 'kritsite.com/production · 0.34s LCP' : 'typical-agency-site.com · 3.8s LCP'}
            </span>
          </div>

          {/* Telemetry pill */}
          <div className="flex items-center gap-1 text-[10px] font-mono text-white/40">
            <Gauge className="w-3 h-3" />
            <span className={isCured ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
              {isCured ? '99+' : '48'}
            </span>
          </div>
        </div>

        {/* Browser Body Content Area */}
        <div className="pt-6 sm:pt-7 space-y-6 sm:space-y-7 relative z-10">
          {/* Top Section: Headline + Speed Indicator */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3.5 flex-1">
              {isCured ? (
                /* Cured Headline */
                <div className="space-y-2 animate-fadeIn">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#ff5500]/10 border border-[#ff5500]/30 text-[10px] font-mono text-[#ff5500] font-bold">
                    <span>✦ BESPOKE PLATFORM</span>
                  </div>
                  <h4 className="text-white text-base sm:text-xl font-bold tracking-tight leading-snug">
                    Architectural Websites. <span className="text-white/40">Engineered To Win Trust.</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                    Sub-second edge velocity, high-contrast Swiss typography, and native AI search optimization.
                  </p>
                </div>
              ) : (
                /* Bloated Headline */
                <div className="space-y-3.5">
                  <div className="text-white/85 text-base sm:text-xl font-normal tracking-tight">
                    Welcome to our website
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="h-2 w-48 sm:w-56 bg-white/10 rounded-full" />
                    <div className="h-2 w-36 sm:w-44 bg-white/[0.06] rounded-full" />
                    <div className="h-2 w-24 sm:w-28 bg-white/[0.04] rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Speed Benchmark Visualizer */}
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border flex flex-col items-center justify-center shrink-0 transition-all duration-500 ${
              isCured 
                ? 'bg-[#ff5500]/10 border-[#ff5500]/30 shadow-[0_0_25px_rgba(255,85,0,0.2)]'
                : 'bg-white/[0.02] border-white/[0.06]'
            }`}>
              {isCured ? (
                <div className="text-center space-y-1 animate-scaleIn">
                  <Zap className="w-5 h-5 text-[#ff5500] mx-auto animate-bounce" />
                  <div className="text-xs font-mono font-black text-white">0.34s</div>
                  <div className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest font-bold">LCP PASS</div>
                </div>
              ) : (
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex flex-col items-center justify-center">
                  <svg
                    className="w-full h-full animate-spin text-[#ef4444]/70"
                    style={{ animationDuration: '2.8s' }}
                    viewBox="0 0 24 24"
                  >
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={i}
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="5.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        transform={`rotate(${i * 30} 12 12)`}
                        opacity={(i + 1) / 12}
                      />
                    ))}
                  </svg>
                  <span className="text-[8px] font-mono text-[#ef4444] mt-1">3.8s wait</span>
                </div>
              )}
            </div>
          </div>

          {/* Section Divider Line */}
          <div className="border-t border-white/[0.08]" />

          {/* Bottom Cards Section */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
            {isCured ? (
              /* Cured High-Fidelity Modules */
              <>
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 hover:border-[#ff5500]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#ff5500] font-bold">01 // CONVERSION</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Proof-First Narrative
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 leading-relaxed">
                    Quantifiable outcomes, high-trust client validation, zero empty filler.
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-emerald-400 w-[94%]" />
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 hover:border-[#ff5500]/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#ff5500] font-bold">02 // SEARCH & AEO</span>
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    Entity Knowledge Graph
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 leading-relaxed">
                    JSON-LD schema structured for Perplexity, Claude, and Google AI Overviews.
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-cyan-400 w-[98%]" />
                  </div>
                </div>
              </>
            ) : (
              /* Bloated Placeholder Cards */
              <>
                <div className="space-y-3">
                  <div className="h-22 sm:h-26 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11 text-white/15" viewBox="0 0 48 48" fill="currentColor">
                      <circle cx="24" cy="14" r="3.5" opacity="0.8" />
                      <path d="M 6 36 L 20 18 L 30 31 L 36 24 L 44 36 Z" opacity="0.6" />
                      <path d="M 4 38 L 44 38" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-28 sm:w-32 bg-white/10 rounded-full" />
                    <div className="h-2 w-16 sm:w-20 bg-white/[0.05] rounded-full" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-22 sm:h-26 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                    <svg className="w-10 h-10 sm:w-11 sm:h-11 text-white/15" viewBox="0 0 48 48" fill="currentColor">
                      <circle cx="24" cy="14" r="3.5" opacity="0.8" />
                      <path d="M 6 36 L 20 18 L 30 31 L 36 24 L 44 36 Z" opacity="0.6" />
                      <path d="M 4 38 L 44 38" stroke="currentColor" strokeWidth="2" opacity="0.4" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-28 sm:w-32 bg-white/10 rounded-full" />
                    <div className="h-2 w-16 sm:w-20 bg-white/[0.05] rounded-full" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Diagnostic Pins (Interactive Hotspots) ── */}
      <div className="absolute inset-0 pointer-events-none">
        {DIAGNOSTIC_PINS.map((pin) => {
          const isActive = activePin === pin.id;
          return (
            <div
              key={pin.id}
              style={{ top: pin.position.top, left: pin.position.left }}
              className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <button
                type="button"
                onClick={() => setActivePin(isActive ? null : pin.id)}
                title={`Inspect: ${pin.label}`}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] font-mono font-black transition-transform duration-200 hover:scale-125 cursor-pointer shadow-lg ${
                  isCured
                    ? 'bg-[#ff5500] text-white shadow-[0_0_15px_rgba(255,85,0,0.8)]'
                    : 'bg-[#ef4444] text-white shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse'
                } ${isActive ? 'ring-4 ring-white/50 scale-125' : ''}`}
              >
                {isCured ? '✓' : '!'}
              </button>
            </div>
          );
        })}
      </div>

      {/* ── Hand-Drawn Editorial Annotations (When Bloat Mode Active) ── */}
      {!isCured && (
        <>
          {/* 1. Weak Headline */}
          <div className="absolute top-14 sm:top-18 -left-2 sm:-left-16 flex flex-col items-end rotate-[-6deg] pointer-events-none z-20">
            <div className="font-handwritten text-[#ff5500] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)] text-right">
              <span>Weak</span>
              <span className="block">Headline</span>
            </div>
            <svg className="w-8 h-7 sm:w-11 sm:h-9 text-[#ff5500] translate-x-3 translate-y-0.5" viewBox="0 0 52 40" fill="none">
              <path d="M 4 4 Q 26 10, 46 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 36 32 L 47 32 L 46 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* 2. Slow Loading */}
          <div className="absolute top-16 sm:top-20 -right-2 sm:-right-18 flex items-start gap-1 rotate-[4deg] pointer-events-none z-20">
            <svg className="w-8 h-7 sm:w-11 sm:h-9 text-[#ff5500] translate-y-1" viewBox="0 0 52 40" fill="none">
              <path d="M 48 10 Q 24 16, 6 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 18 14 L 6 22 L 18 29" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-handwritten text-[#ff5500] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
              <span>Slow</span>
              <span className="block">Loading</span>
            </div>
          </div>

          {/* 3. Generic Design */}
          <div className="absolute top-[60%] -left-2 sm:-left-16 flex flex-col items-end rotate-[-5deg] pointer-events-none z-20">
            <div className="font-handwritten text-[#ff5500] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)] text-right">
              <span>Generic</span>
              <span className="block">Design</span>
            </div>
            <svg className="w-8 h-7 sm:w-12 sm:h-9 text-[#ff5500] translate-x-3 translate-y-0.5" viewBox="0 0 56 40" fill="none">
              <path d="M 4 4 Q 28 14, 50 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 39 32 L 51 32 L 49 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* 4. Doesn't Explain Value */}
          <div className="absolute top-[52%] -right-2 sm:-right-20 flex items-center gap-1 rotate-[2deg] pointer-events-none z-20">
            <svg className="w-8 h-7 sm:w-11 sm:h-8 text-[#ff5500]" viewBox="0 0 52 36" fill="none">
              <path d="M 48 18 Q 26 18, 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 17 9 L 6 18 L 17 27" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-handwritten text-[#ff5500] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
              <span>Doesn't</span>
              <span className="block">Explain</span>
              <span className="block">Value</span>
            </div>
          </div>

          {/* 5. Hard to Find on Search */}
          <div className="absolute bottom-6 sm:bottom-8 -right-2 sm:-right-20 flex items-center gap-1 rotate-[-2deg] pointer-events-none z-20">
            <svg className="w-8 h-7 sm:w-11 sm:h-8 text-[#ff5500]" viewBox="0 0 52 36" fill="none">
              <path d="M 48 24 Q 26 24, 6 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 16 9 L 6 16 L 18 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-handwritten text-[#ff5500] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
              <span>Hard to Find</span>
              <span className="block">on Search</span>
            </div>
          </div>
        </>
      )}

      {/* ── Cured Hand-Drawn Praise Annotations (When Cured Mode Active) ── */}
      {isCured && (
        <>
          <div className="absolute top-14 sm:top-18 -left-2 sm:-left-20 flex flex-col items-end rotate-[-4deg] pointer-events-none z-20 animate-fadeIn">
            <div className="font-handwritten text-emerald-400 font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(52,211,153,0.6)] text-right">
              <span>Outcome</span>
              <span className="block">Hook ✦</span>
            </div>
            <svg className="w-8 h-7 sm:w-11 sm:h-9 text-emerald-400 translate-x-3 translate-y-0.5" viewBox="0 0 52 40" fill="none">
              <path d="M 4 4 Q 26 10, 46 32" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 36 32 L 47 32 L 46 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="absolute top-16 sm:top-20 -right-2 sm:-right-20 flex items-start gap-1 rotate-[3deg] pointer-events-none z-20 animate-fadeIn">
            <svg className="w-8 h-7 sm:w-11 sm:h-9 text-[#ff5500] translate-y-1" viewBox="0 0 52 40" fill="none">
              <path d="M 48 10 Q 24 16, 6 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 18 14 L 6 22 L 18 29" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-handwritten text-[#ff5500] font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
              <span>0.34s Edge</span>
              <span className="block">Instant ⚡</span>
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-8 -right-2 sm:-right-22 flex items-center gap-1 rotate-[-2deg] pointer-events-none z-20 animate-fadeIn">
            <svg className="w-8 h-7 sm:w-11 sm:h-8 text-cyan-400" viewBox="0 0 52 36" fill="none">
              <path d="M 48 24 Q 26 24, 6 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 16 9 L 6 16 L 18 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-handwritten text-cyan-400 font-bold text-xs sm:text-sm tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(34,211,238,0.6)]">
              <span>Perplexity &</span>
              <span className="block">AI Primed ✦</span>
            </div>
          </div>
        </>
      )}

      {/* ── Active Pin Diagnostic Popup Modal / Card ── */}
      {selectedPinData && (
        <div className="mt-4 p-4 rounded-2xl bg-black/90 border border-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-fadeIn relative z-40">
          <div className="flex items-start justify-between gap-3 pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isCured ? 'bg-emerald-400' : 'bg-[#ef4444]'}`} />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                {selectedPinData.label}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setActivePin(null)}
              className="text-xs font-mono text-white/40 hover:text-white px-1.5 py-0.5 rounded bg-white/5 cursor-pointer"
            >
              ✕ Close
            </button>
          </div>

          <div className="pt-3 space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-[#ef4444] font-mono font-bold shrink-0">DEFECT:</span>
              <span className="text-white/70">{selectedPinData.defect}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-mono font-bold shrink-0">CURE:</span>
              <span className="text-white/90 font-medium">{selectedPinData.cure}</span>
            </div>
            <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
              <span className="text-white/40">COMMERCIAL IMPACT</span>
              <span className="text-[#ff5500] font-bold">{selectedPinData.impact}</span>
            </div>
          </div>
        </div>
      )}

      {/* Hint prompt */}
      <div className="mt-3 text-center">
        <p className="text-[11px] font-mono text-white/40 tracking-wider">
          {activePin ? 'Click "✕ Close" or click another pin to inspect' : 'Click the glowing pins or toggle above to diagnose'}
        </p>
      </div>
    </div>
  );
};
