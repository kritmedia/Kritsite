import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Eye, Zap, Search, Sparkles, Clock, Compass, Layers, ShieldCheck } from 'lucide-react';
import { HeroScrollSection } from '../components/HeroScrollSection';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { WebsiteAutopsy } from '../components/WebsiteAutopsy';
import { PricingSection } from '../components/PricingSection';

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

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
          {/* Top Section Category Ticker */}
          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
            03 // WEBSITE AUTOPSY
          </div>

          {/* The Editorial Narrative & Website Autopsy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Section Header with Left Orange Bar */}
              <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
                  <span>03 // POINT OF VIEW</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black uppercase tracking-tight leading-[0.95]">
                  <span className="text-white block">YOUR BUSINESS GREW.</span>
                  <span className="text-[#ff5500] block mt-1">YOUR WEBSITE DIDN'T.</span>
                </h2>
              </div>

              {/* Narrative Copy */}
              <div className="space-y-4 text-base sm:text-lg text-white/70 font-light leading-relaxed pl-6 sm:pl-8">
                <p>
                  Maybe your website looked fine two years ago.
                </p>
                <p>
                  Now your brand is better, your offer is stronger, and your prices have gone up.
                </p>
                <p className="text-white font-medium">
                  But the website still feels like a template.
                </p>
              </div>

              {/* Punchline & Action CTA */}
              <div className="pl-6 sm:pl-8 space-y-6 pt-2">
                <div className="text-base sm:text-lg font-mono font-black uppercase tracking-widest text-[#ff5500]">
                  WE FIX THAT.
                </div>

                <div>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-3 bg-white text-black font-bold uppercase text-xs tracking-wider rounded-full shadow-2xl hover:bg-white/90 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <span>SEE HOW WE WORK</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
                <span>05 // THE KRITSITE SIGNATURE</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.92]">
                LOOKS GOOD. <span className="block text-white/30">WORKS HARD.</span>
              </h2>
            </div>
            <div className="max-w-md space-y-2">
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                A website has one job: help your business win more attention and trust.
              </p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40">
                So we build around three things:
              </p>
            </div>
          </div>

          {/* 3 Signature Pillars with Apple Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1: LOOK */}
            <div className="p-8 sm:p-10 rounded-3xl glass-apple glass-apple-hover space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff5500]">
                  01 // LOOK
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Clear layouts. Strong type. Thoughtful motion.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                Your website should feel like your brand, not like a theme with your logo pasted on it.
              </p>
            </div>

            {/* Pillar 2: MOVE */}
            <div className="p-8 sm:p-10 rounded-3xl glass-apple glass-apple-hover space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff5500]">
                  02 // MOVE
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  Fast pages. Light code. Smooth interactions.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                Because nobody enjoys staring at a loading spinner. Especially your customers.
              </p>
            </div>

            {/* Pillar 3: GET FOUND */}
            <div className="p-8 sm:p-10 rounded-3xl glass-apple glass-apple-hover space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff5500]">
                  03 // GET FOUND
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  SEO, AEO and GEO built into the site from the start.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                So Google can understand you. And AI search tools can understand you too.
              </p>
            </div>
          </div>

          {/* Signature Summary Banner with Apple Glassmorphism & Breathing Border */}
          <div className="p-8 sm:p-10 rounded-3xl glass-apple flex flex-col sm:flex-row items-center justify-between gap-6 animate-border-breathe">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-white">
              <span className="font-bold">DESIGN.</span>
              <span className="text-[#ff5500]">✦</span>
              <span className="font-bold">PERFORMANCE.</span>
              <span className="text-[#ff5500]">✦</span>
              <span className="font-bold">DISCOVERY.</span>
              <span className="text-white/40 block sm:inline">ALL WORKING TOGETHER.</span>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors shrink-0"
            >
              <span>EXPLORE OUR APPROACH</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff5500]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 06. PROOF ── */}
      <section id="proof" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        {/* Atmospheric Gradient Mesh with Organic Scroll Breathing */}
        <AtmosphericMeshBackground variant="proof" />

        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 relative z-10">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
              <span>06 // PROOF</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[0.92]">
              NO SIX-MONTH <span className="block text-white/30">WEBSITE DRAMA.</span>
            </h2>
            <div className="pt-2 space-y-2 text-sm sm:text-base text-white/70 font-light leading-relaxed">
              <p>We built KritSite around a simple idea: <strong className="text-white font-bold">Good work should not take forever.</strong></p>
              <p className="text-white/50 text-xs sm:text-sm">
                That means clear pricing, clear timelines, and a lean process without five people joining a call just to say hello.
              </p>
            </div>
          </div>

          {/* 4 Minimalist Stat Cards with Apple Glassmorphism */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { stat: '48H', label: 'LAUNCH WEBSITES', desc: 'FROM SIGNUP TO LIVE DOMAIN' },
              { stat: '2–3 WEEKS', label: 'CUSTOM BUILDS', desc: 'ZERO TEMPLATES, PURE BESPOKE' },
              { stat: '<0.8S', label: 'TARGET LOAD TIME', desc: 'SUB-SECOND MOBILE LCP' },
              { stat: '100/100', label: 'LIGHTHOUSE TARGET', desc: 'CORE WEB VITALS GREEN' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-apple glass-apple-hover space-y-3"
              >
                <div className="text-3xl sm:text-5xl font-black font-mono text-white tracking-tight">
                  {item.stat}
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-white/40 uppercase">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Remark */}
          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/50">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
              <span>07 // YOUR MOVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.92]">
              YOUR WEBSITE COULD BE <span className="block text-white/30">DOING A LOT MORE.</span>
            </h2>
          </div>

          {/* Playful Stagger Points with Apple Glassmorphism & Breathing Border */}
          <div className="space-y-3.5 max-w-xl mx-auto text-left font-mono text-xs sm:text-sm text-white/80 p-6 sm:p-8 rounded-3xl glass-apple animate-border-breathe">
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
              <p className="text-base sm:text-lg text-white/60 font-light uppercase tracking-wider">
                OR... IT COULD STAY THE SAME.
              </p>
              <p className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                YOUR CALL.
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center gap-3">
              <button
                onClick={() => onOpenContact()}
                className="group px-8 sm:px-12 py-4 sm:py-5 bg-[#ff5500] hover:bg-[#e64d00] text-white font-black uppercase text-xs sm:text-sm tracking-widest rounded-full shadow-2xl hover:scale-[1.03] transition-all cursor-pointer inline-flex items-center gap-3"
              >
                <span>START A PROJECT →</span>
              </button>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white/40">
                TELL US WHAT YOU'RE BUILDING. WE'LL TAKE IT FROM THERE.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}