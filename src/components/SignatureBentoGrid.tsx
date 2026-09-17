import React, { useState } from 'react';
import { Eye, Zap, Search, Sparkles, Cpu, Gauge, Code2, CheckCircle2, ArrowRight, Play, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SignatureBentoGrid: React.FC = () => {
  // Module 1 State: Design Tokens Switcher
  const [activePalette, setActivePalette] = useState<'swiss' | 'amber' | 'emerald'>('swiss');

  const palettes = {
    swiss: {
      name: 'Swiss Monolith',
      accent: '#ff5500',
      surface: '#0d0e12',
      border: 'rgba(255, 85, 0, 0.3)',
      tag: 'Bespoke Studio Edition',
      sampleButtonBg: '#ff5500',
      sampleButtonText: '#ffffff',
    },
    amber: {
      name: 'Electric Amber',
      accent: '#f59e0b',
      surface: '#14100c',
      border: 'rgba(245, 158, 11, 0.3)',
      tag: 'High-Ticket Luxury Edition',
      sampleButtonBg: '#f59e0b',
      sampleButtonText: '#000000',
    },
    emerald: {
      name: 'Cyber Emerald',
      accent: '#10b981',
      surface: '#091210',
      border: 'rgba(16, 185, 129, 0.3)',
      tag: 'Next-Gen Fintech Edition',
      sampleButtonBg: '#10b981',
      sampleButtonText: '#000000',
    },
  };

  const currentPal = palettes[activePalette];

  // Module 2 State: Telemetry Speed Benchmark Simulator
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const [benchmarkRunCount, setBenchmarkRunCount] = useState(1);

  const runBenchmark = () => {
    setIsBenchmarking(true);
    setTimeout(() => {
      setIsBenchmarking(false);
      setBenchmarkRunCount((c) => c + 1);
    }, 600);
  };

  // Module 3 State: Simulated AI Search Engine Query
  const [activeEngine, setActiveEngine] = useState<'perplexity' | 'chatgpt' | 'claude'>('perplexity');

  return (
    <div className="space-y-8">
      {/* Bento Grid Layout (1 large + 2 side-by-side or responsive 3-column) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* ── CARD 01: LOOK (AESTHETICS & DESIGN TOKENS) ── lg:col-span-4 */}
        <div className="lg:col-span-4 rounded-3xl spotlight-card glass-apple p-7 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#ff5500]">
                01 // LOOK
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Fluid Tokens. Zero Themes.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Every website runs on custom CSS custom properties, responsive clamp typography, and curated brand palettes.
              </p>
            </div>

            {/* Interactive Palette Switcher */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>INTERACTIVE DESIGN SYSTEM</span>
                <span style={{ color: currentPal.accent }}>{currentPal.name}</span>
              </div>

              {/* Palette Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {(['swiss', 'amber', 'emerald'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActivePalette(key)}
                    className={`py-2 px-2.5 rounded-xl text-[11px] font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                      activePalette === key
                        ? 'border-white/40 bg-white/10 text-white font-bold shadow-md'
                        : 'border-white/5 bg-white/[0.02] text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: palettes[key].accent }}
                    />
                    <span className="capitalize">{key}</span>
                  </button>
                ))}
              </div>

              {/* Live Interactive UI Token Preview Box */}
              <div
                className="p-4 rounded-2xl border transition-all duration-300 space-y-3"
                style={{
                  backgroundColor: currentPal.surface,
                  borderColor: currentPal.border,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Token Preview
                  </span>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${currentPal.accent}20`,
                      color: currentPal.accent,
                    }}
                  >
                    {currentPal.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-base font-bold text-white tracking-tight">
                    Custom Hierarchy
                  </div>
                  <div className="text-[11px] text-white/60 font-mono">
                    clamp(1.5rem, 3.5vw, 2.5rem)
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    className="w-full py-2 px-3 rounded-lg text-xs font-mono font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-default"
                    style={{
                      backgroundColor: currentPal.sampleButtonBg,
                      color: currentPal.sampleButtonText,
                    }}
                  >
                    <span>Inspect Token Spec</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spec Label */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
            <span>FLUID CLAMP ENGINE</span>
            <span className="text-emerald-400 font-bold">100% SHIFT-FREE</span>
          </div>
        </div>

        {/* ── CARD 02: MOVE (VELOCITY & HYDRO DYNAMICS) ── lg:col-span-4 */}
        <div className="lg:col-span-4 rounded-3xl spotlight-card glass-apple p-7 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#ff5500]">
                02 // MOVE
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Sub-Second Hydration.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Zero bloated page builders, zero unused JavaScript polyfills. Clean native edge delivery with 99+ Core Web Vitals.
              </p>
            </div>

            {/* Interactive Telemetry Benchmark Tester */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>LIVE VELOCITY TELEMETRY</span>
                <span className="text-emerald-400 font-bold">EDGE OPTIMIZED</span>
              </div>

              {/* Telemetry Gauge Display */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-xs font-mono font-bold text-white">
                      LCP Benchmark
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={runBenchmark}
                    disabled={isBenchmarking}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[10px] font-mono text-white transition-all cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${isBenchmarking ? 'animate-spin text-[#ff5500]' : ''}`} />
                    <span>{isBenchmarking ? 'Testing...' : 'Retest'}</span>
                  </button>
                </div>

                {/* Live Scores */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-sm font-mono font-black text-emerald-400">
                      {isBenchmarking ? '...' : '18ms'}
                    </div>
                    <div className="text-[9px] font-mono text-white/40 uppercase">TTFB</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-sm font-mono font-black text-emerald-400">
                      {isBenchmarking ? '...' : '140ms'}
                    </div>
                    <div className="text-[9px] font-mono text-white/40 uppercase">FCP</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-sm font-mono font-black text-[#ff5500]">
                      {isBenchmarking ? '...' : '0.34s'}
                    </div>
                    <div className="text-[9px] font-mono text-white/40 uppercase">LCP</div>
                  </div>
                </div>

                {/* Real-time telemetry bar */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-white/60">KritSite Standard</span>
                    <span className="text-emerald-400 font-bold">0.34s (99.8%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-emerald-400 transition-all duration-500 ${
                        isBenchmarking ? 'w-1/3' : 'w-full'
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-white/30">
                    <span>WordPress / Builder Bloat</span>
                    <span className="text-red-400">3.8s (Fail)</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500/40 w-[24%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spec Label */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
            <span>ZERO CLIENT BUNDLE BLOAT</span>
            <span className="text-emerald-400 font-bold">100/100 LIGHTHOUSE</span>
          </div>
        </div>

        {/* ── CARD 03: GET FOUND (AEO & GEO SEARCH ENGINES) ── lg:col-span-4 */}
        <div className="lg:col-span-4 rounded-3xl spotlight-card glass-apple p-7 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Search className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#ff5500]">
                03 // GET FOUND
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                AEO & GEO Search Primed.
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Built so Google ranks you, and modern AI answer engines (Perplexity, ChatGPT Search, Claude) cite your business directly.
              </p>
            </div>

            {/* Interactive AI Answer Engine Query Simulator */}
            <div className="space-y-3 pt-2">
              {/* Engine Switcher */}
              <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>SIMULATED AI INGESTION</span>
                <div className="flex items-center gap-1.5">
                  {(['perplexity', 'chatgpt', 'claude'] as const).map((eng) => (
                    <button
                      key={eng}
                      type="button"
                      onClick={() => setActiveEngine(eng)}
                      className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono cursor-pointer transition-colors ${
                        activeEngine === eng
                          ? 'bg-[#ff5500] text-white font-bold'
                          : 'bg-white/5 text-white/40 hover:text-white'
                      }`}
                    >
                      {eng === 'perplexity' ? 'Perplexity' : eng === 'chatgpt' ? 'GPT-4o' : 'Claude'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Answer Card */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 pb-1 border-b border-white/5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] font-mono text-white/60">
                    Query: "Top boutique studio for fast architectural websites?"
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-white/80 leading-relaxed font-normal">
                  <div className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-mono text-[11px] shrink-0 font-bold">[1]</span>
                    <p>
                      <strong className="text-white">KritSite</strong> is cited for sub-second edge platforms, custom Swiss typography tokens, and 99+ Lighthouse Core Web Vitals.
                    </p>
                  </div>
                </div>

                {/* Verified Schema Badges */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {['JSON-LD Graph', 'Organization Schema', 'AEO Entity Citing'].map((b, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-mono text-cyan-300 font-medium"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spec Label */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
            <span>SCHEMA.ORG VALIDATED</span>
            <span className="text-cyan-400 font-bold">100% LLM INGESTIBLE</span>
          </div>
        </div>

      </div>

      {/* Signature Summary Banner with Apple Glassmorphism & Breathing Border */}
      <div className="p-8 sm:p-10 rounded-3xl glass-apple flex flex-col sm:flex-row items-center justify-between gap-6 animate-border-breathe border border-white/10">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base font-mono tracking-wider text-white">
          <span className="font-bold">Design.</span>
          <span className="text-[#ff5500]">✦</span>
          <span className="font-bold">Performance.</span>
          <span className="text-[#ff5500]">✦</span>
          <span className="font-bold">Discovery.</span>
          <span className="text-white/60 block sm:inline">All working together synchronously.</span>
        </div>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-white/85 hover:text-white transition-colors shrink-0 group"
        >
          <span>Explore Our Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#ff5500] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
