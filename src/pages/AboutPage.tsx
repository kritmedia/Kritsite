import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Globe, Film, Sparkles, Shield, Cpu, Compass } from 'lucide-react';
import { DESIGN_PRINCIPLES } from '../data/content';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';

interface AboutPageProps {
  onOpenContact: () => void;
}

export function AboutPage({ onOpenContact }: AboutPageProps) {
  const stats = [
    { label: 'Websites Launched', value: '40+', detail: 'Global & domestic clients' },
    { label: 'Industries Served', value: '12+', detail: 'Tech, SaaS, Luxury, Creators' },
    { label: 'Avg. Lighthouse Score', value: '99', detail: 'Zero bloat architecture' },
    { label: 'Fastest Delivery', value: '24h', detail: 'Signature template launch' },
  ];

  return (
    <div className="pt-24 bg-black text-white selection:bg-[#ff5500] selection:text-white">
      {/* ── HERO ── */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 overflow-hidden">
        {/* Atmospheric Subtle Smoky Mesh Background */}
        <AtmosphericMeshBackground variant="signature" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          {/* Top Ticker */}
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-white/40">
            01 // The KritMedia Studio Philosophy
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono tracking-wider text-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The KritMedia Studio Philosophy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-white">
              Built by Creators. <span className="block text-white/30">For Visionary Founders.</span>
            </h1>
            <p className="text-white/70 text-base sm:text-xl font-light max-w-2xl leading-relaxed">
              KritSite is the web engineering division of KritMedia. We reject disposable, mass-market website templates in favor of bespoke architectural digital systems that convert.
            </p>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO & METRICS ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Ticker */}
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-white/40">
            02 // Origin Manifesto
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
              <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#ff5500] block font-mono">
                  Origin Manifesto
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[0.95] text-white">
                  Why We <span className="text-white/30">Exist.</span>
                </h2>
              </div>

              <div className="space-y-6 text-white/70 font-light leading-relaxed text-base sm:text-lg pl-6 sm:pl-8 border-l border-white/10">
                <p>
                  The internet is saturated with forgettable websites. Drag-and-drop page builders promise instant results but deliver bloated code, sluggish mobile performance, and zero consideration for how search engines actually crawl content today.
                </p>
                <p>
                  Under our parent brand, <strong>KritMedia</strong> (which also powers the high-end post-production house <em>KritVideo</em>), we approached web development from an entirely different angle: <strong>treat web design like an architectural commission.</strong>
                </p>
                <p>
                  Every website begins with intentional layout physics, mathematical type scales, and structured semantic tags. We build websites that load in milliseconds, command instant authority, and rank organically across both Google and generative AI engines.
                </p>
              </div>
            </div>

            {/* Metrics & Studio Standards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl glass-apple glass-apple-hover p-6 space-y-2">
                    <div className="text-3xl sm:text-4xl font-black font-mono text-white">{stat.value}</div>
                    <div className="text-[10px] font-mono tracking-wider text-[#ff5500] font-bold">
                      {stat.label}
                    </div>
                    <p className="text-[11px] font-mono text-white/50">{stat.detail}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl glass-apple-amber p-8 space-y-4 relative overflow-hidden shadow-[0_0_40px_rgba(255,85,0,0.15)]">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#ff5500]" />
                  <span className="text-xs font-mono tracking-wider text-white font-bold">
                    Zero-Bloat Studio Guarantee
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  We don't install heavy, unvetted third-party plugins or rely on bloated themes. Every client receives cleanly authored, high-performance code ready for production scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN PRINCIPLES ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Ticker */}
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-white/40">
            03 // Core Tenets & Foundation
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff5500] block font-mono">
              Core Tenets
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white">
              Our Design <span className="block text-white/30">Principles.</span>
            </h2>
            <p className="text-white/50 text-base font-light">
              The four foundational rules that every project must satisfy before deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DESIGN_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="rounded-3xl glass-apple glass-apple-hover p-8 sm:p-10 space-y-5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-mono text-white/15 group-hover:text-[#ff5500] transition-colors">
                    {principle.number}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {principle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-wider border border-[#ff5500]/30 text-[#ff5500] px-2.5 py-0.5 rounded-full bg-[#ff5500]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE KRITMEDIA UNIVERSE ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Ticker */}
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-white/40">
            04 // The Creative Syndicate
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff5500] block font-mono">
              The Creative Syndicate
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] text-white">
              The KritMedia <span className="block text-white/30">Ecosystem.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* KritSite Active */}
            <div className="rounded-3xl glass-apple-amber p-8 space-y-5 relative shadow-[0_0_40px_rgba(255,85,0,0.15)]">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="KritSite Logo"
                  className="w-10 h-10 rounded-xl object-contain shadow-[0_0_20px_rgba(255,85,0,0.4)]"
                />
                <div>
                  <span className="text-[9px] font-mono text-[#ff5500] tracking-wider block font-bold">
                    Active Studio
                  </span>
                  <span className="text-xl font-black tracking-tight text-white">
                    Krit<span className="text-[#ff5500]">Site</span>
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Design-first web development. 48h signature template launches and bespoke multi-page commissions with native AEO/GEO indexing.
              </p>
              <div className="pt-2 text-[10px] font-mono text-[#ff5500] tracking-wider font-bold">
                Web Architecture & Design
              </div>
            </div>

            {/* KritVideo Sister Service */}
            <a
              href="https://kritvideo.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl glass-apple glass-apple-hover p-8 space-y-5 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center group-hover:border-white transition-colors bg-white/5">
                    <Film className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-white/40 tracking-wider block">
                      Sister Studio
                    </span>
                    <span className="text-xl font-black tracking-tight text-white">KritVideo</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                High-retention post-production, ACEScg DaVinci color grading, spatial audio mastering, and 48-hour turnarounds for top creators.
              </p>
              <div className="pt-2 text-[10px] font-mono text-white/40 tracking-wider">
                Video Post-Production
              </div>
            </a>

            {/* Future Incubator */}
            <div className="rounded-3xl glass-apple p-8 space-y-5 opacity-60 border-dashed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-white/15 flex items-center justify-center bg-white/5">
                  <Compass className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-white/30 tracking-wider block">
                    In Incubation
                  </span>
                  <span className="text-xl font-black tracking-tight text-white/50">KritBrand</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/40 font-light leading-relaxed">
                Comprehensive brand identity systems, corporate typography, and digital guideline design for next-generation brands.
              </p>
              <div className="pt-2 text-[10px] font-mono text-white/30 tracking-wider">
                Brand Strategy (Q1 2027)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-xs font-mono tracking-[0.3em] text-[#ff5500] font-bold">
            05 // Begin Your Engagement
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Ready to Collaborate?
          </h2>
          <p className="text-white/50 text-base font-light max-w-lg mx-auto leading-relaxed">
            Reach out with your project parameters and receive a direct scope proposal from our lead architect.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="px-10 py-5 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs tracking-wider rounded-full transition-all flex items-center gap-3 cursor-pointer shadow-[0_0_30px_rgba(255,85,0,0.35)] hover:scale-[1.03]"
            >
              <span>Schedule Project Kickoff</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
