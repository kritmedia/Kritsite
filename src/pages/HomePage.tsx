import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Eye, Zap, Search, Sparkles, Clock, Compass, Layers, ShieldCheck } from 'lucide-react';
import { HeroScrollSection } from '../components/HeroScrollSection';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { WebsiteAutopsy } from '../components/WebsiteAutopsy';
import { PricingSection } from '../components/PricingSection';
import { SignatureBentoGrid } from '../components/SignatureBentoGrid';

interface HomePageProps {
  onOpenContact: (planId?: string) => void;
}

export function HomePage({ onOpenContact }: HomePageProps) {
  return (
    <div className="pt-0 bg-black text-white selection:bg-[#ff5500] selection:text-white">
      {/* ── 01. HERO + 02. SELECTED WORK (CONTINUOUS 180-FRAME CANVASS SCROLL ANIMATION) ── */}
      <HeroScrollSection onOpenContact={() => onOpenContact()} />

      {/* ── 03. THE PROBLEM / POINT OF VIEW ── */}
      <section id="problem" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/10 relative overflow-hidden">
        {/* Dark Smoky Fluid Silk Atmospheric Background in KritSite Brand Colors */}
        <AtmosphericMeshBackground variant="problem" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* The Editorial Narrative & Website Autopsy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Section Header with Left Orange Bar */}
              <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#ff5500]">
                  <span>03 // Point of View</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[0.95]">
                  <span className="text-white block">Your Business Grew.</span>
                  <span className="text-[#ff5500] block mt-1">Your Website Didn't.</span>
                </h2>
              </div>

              {/* Narrative Copy */}
              <div className="space-y-4 text-base sm:text-lg text-white/80 font-normal leading-relaxed pl-6 sm:pl-8">
                <p>
                  Maybe your website looked fine two years ago.
                </p>
                <p>
                  Now your brand is better, your offer is stronger, and your prices have gone up.
                </p>
                <p className="text-white font-semibold">
                  But the website still feels like a template.
                </p>
              </div>

              {/* Punchline & Action CTA */}
              <div className="pl-6 sm:pl-8 space-y-6 pt-2">
                <div className="text-base sm:text-lg font-mono font-bold tracking-wider text-[#ff5500]">
                  We fix that.
                </div>

                <div>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 bg-white text-black font-bold text-xs sm:text-sm tracking-wider rounded-full shadow-2xl hover:bg-white/90 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>See How We Work</span>
                    <div className="w-7 h-7 rounded-full bg-[#ff5500] text-white flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Website Autopsy Browser Mockup with Hand-Drawn Annotations */}
            <div className="lg:col-span-7 flex justify-center">
              <WebsiteAutopsy />
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. PLANS & PRICING (STOCKBOARD-INSPIRED BRAND ARCHITECTURE) ── */}
      <PricingSection onOpenContact={onOpenContact} />


      {/* ── 05. THE KRITSITE SIGNATURE ── */}
      <section id="signature" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/10 relative overflow-hidden">
        {/* Atmospheric Gradient Mesh with Organic Scroll Breathing */}
        <AtmosphericMeshBackground variant="signature" hasBorderFrame />

        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10 sm:pb-12">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
                <span>05 // The KritSite Signature</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[0.92]">
                Looks Good. <span className="block text-white/30">Works Hard.</span>
              </h2>
            </div>
            <div className="max-w-md space-y-2">
              <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed">
                A website has one job: help your business win more attention and trust.
              </p>
              <p className="text-xs sm:text-sm font-mono tracking-wider text-white/60">
                So we build around three things:
              </p>
            </div>
          </div>

          {/* 2026 Interactive Bento Grid */}
          <SignatureBentoGrid />
        </div>
      </section>

      {/* ── 06. PROOF ── */}
      <section id="proof" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        {/* Atmospheric Gradient Mesh with Organic Scroll Breathing */}
        <AtmosphericMeshBackground variant="proof" />

        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span>06 // Proof</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[0.92]">
              No Six-Month <span className="block text-white/30">Website Drama.</span>
            </h2>
            <div className="pt-2 space-y-2 text-sm sm:text-base text-white/80 font-normal leading-relaxed">
              <p>We built KritSite around a simple idea: <strong className="text-white font-bold">Good work should not take forever.</strong></p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                That means clear pricing, clear timelines, and a lean process without five people joining a call just to say hello.
              </p>
            </div>
          </div>

          {/* 4 Minimalist Stat Cards with Spotlight and Glassmorphism */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { stat: '48h', label: 'Signature Framework', desc: 'In incubation · Coming soon' },
              { stat: '2–3 Weeks', label: 'Custom Platforms', desc: 'Zero templates, pure bespoke' },
              { stat: '<0.5s', label: 'Mobile Paint', desc: 'Sub-second edge LCP' },
              { stat: '99+', label: 'Lighthouse Target', desc: 'Core Web Vitals green' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl spotlight-card glass-apple glass-apple-hover space-y-3 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-3xl sm:text-5xl font-black font-mono text-white tracking-tight">
                  {item.stat}
                </div>
                <div className="space-y-1">
                  <div className="text-sm sm:text-base font-bold tracking-wide text-white">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white/60">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Remark */}
          <div className="text-center pt-4">
            <p className="text-sm sm:text-base font-mono tracking-wider text-white/70">
              And yes, we actually care about what happens after the site goes live.
            </p>
          </div>
        </div>
      </section>

      {/* ── 07. FINAL CTA ── */}
      <section id="cta" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/10 relative overflow-hidden">
        {/* Atmospheric Gradient Mesh with Organic Scroll Breathing */}
        <AtmosphericMeshBackground variant="cta" hasBorderFrame />

        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 relative z-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span>07 // Your Move</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.92]">
              Your Website Could Be <span className="block text-white/30">Doing a Lot More.</span>
            </h2>
          </div>

          {/* Playful Stagger Points with Apple Glassmorphism & Breathing Border */}
          <div className="space-y-3.5 max-w-xl mx-auto text-left font-mono text-sm sm:text-base text-white/90 p-6 sm:p-8 rounded-3xl glass-apple animate-border-breathe">
            <div className="flex items-start gap-3">
              <span className="text-[#ff5500]">✦</span>
              <span>It could make people stop scrolling.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#ff5500]">✦</span>
              <span>It could explain your offer before you get on the call.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#ff5500]">✦</span>
              <span>It could make your business look as good online as it does in real life.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#ff5500]">✦</span>
              <span>It could even show up when someone asks an AI who they should hire.</span>
            </div>
          </div>

          {/* The Closer & CTA */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-base sm:text-lg text-white/75 font-normal tracking-wide">
                Or... It could stay the same.
              </p>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Your call.
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center gap-3">
              <button
                onClick={() => onOpenContact()}
                className="group px-8 sm:px-12 py-4 sm:py-5 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-sm sm:text-base tracking-wider rounded-full shadow-2xl hover:scale-[1.03] transition-all cursor-pointer inline-flex items-center gap-3"
              >
                <span>Start a Project →</span>
              </button>
              <p className="text-xs sm:text-sm font-mono tracking-wider text-white/60">
                Tell us what you're building. We'll take it from there.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}