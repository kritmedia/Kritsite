import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, ShieldCheck, CheckCircle2, Eye, Lock, Flame, Layers, Zap, Compass, Check, ArrowUpRight, Cpu } from 'lucide-react';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

interface TemplatesPageProps {
  onOpenContact: (planId?: string) => void;
}

interface ConceptualArchetype {
  id: string;
  name: string;
  industry: string;
  focus: string;
  blueprintFeatures: string[];
  targetSpeed: string;
  status: string;
  gradient: string;
}

const CONCEPTUAL_ARCHETYPES: ConceptualArchetype[] = [
  {
    id: 'apex-saas',
    name: 'Apex SaaS',
    industry: 'SaaS, DevTools & Software',
    focus: 'Product-led conversion with live terminal demos, interactive bento features, and tier comparisons.',
    blueprintFeatures: ['Interactive Feature Bento', 'Tiered Pricing Matrix', 'Product Telemetry Mockup', 'Sub-Second Hydration'],
    targetSpeed: '0.34s LCP',
    status: 'In Design Lab',
    gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'monolith-studio',
    name: 'Monolith Studio',
    industry: 'Creative Agencies & Design Studios',
    focus: 'Swiss editorial minimalism with oversized typography, full-bleed case study reels, and kinetic hover motion.',
    blueprintFeatures: ['Kinetic Work Reel', 'Editorial Dual-Tone Type', 'Architecture Inspector', 'Client Proof Metrics'],
    targetSpeed: '0.28s LCP',
    status: 'In Design Lab',
    gradient: 'from-[#ff5500]/20 via-amber-500/10 to-transparent',
  },
  {
    id: 'aura-dtc',
    name: 'Aura DTC',
    industry: 'Luxury E-Commerce & DTC Brands',
    focus: 'High-end editorial storefront aesthetic crafted for premium perception and rapid checkout funnels.',
    blueprintFeatures: ['High-Velocity Product Grid', 'Editorial Brand Story', 'Instant Mobile Checkout', 'Zero-Shift Layouts'],
    targetSpeed: '0.38s LCP',
    status: 'In Design Lab',
    gradient: 'from-purple-600/20 via-pink-500/10 to-transparent',
  },
  {
    id: 'advisory-pro',
    name: 'Advisory Pro',
    industry: 'High-Ticket Consultants & Legal',
    focus: 'Executive authority architecture engineered for immediate trust, fee defense, and friction-free booking.',
    blueprintFeatures: ['Executive Outcome Proof', 'Direct Calendar Integration', 'Validated Social Trust', 'Clean Single-Page Flow'],
    targetSpeed: '0.29s LCP',
    status: 'In Design Lab',
    gradient: 'from-emerald-600/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'signature-persona',
    name: 'Signature Persona',
    industry: 'Founders, Authors & Keynote Speakers',
    focus: 'Personal authority platform with newsletter lead magnets, media press kits, and thought leadership archives.',
    blueprintFeatures: ['High-Converting Lead Funnel', 'Press & Media Reel', 'Thought Leadership Archive', 'Speaker One-Sheet'],
    targetSpeed: '0.31s LCP',
    status: 'In Design Lab',
    gradient: 'from-amber-600/20 via-yellow-500/10 to-transparent',
  },
  {
    id: 'vanguard-ai',
    name: 'Vanguard AI',
    industry: 'AI Agents & DeepTech Startups',
    focus: 'Futuristic technical interface with real-time prompt playground previews and developer documentation tabs.',
    blueprintFeatures: ['Prompt Playground Mockup', 'Interactive API Spec', 'Entity Schema Injection', 'Dark Glass Physics'],
    targetSpeed: '0.35s LCP',
    status: 'In Design Lab',
    gradient: 'from-violet-600/20 via-indigo-500/10 to-transparent',
  },
];

export function TemplatesPage({ onOpenContact }: TemplatesPageProps) {
  const { formatPrice } = useCurrency();
  const [selectedConcept, setSelectedConcept] = useState<ConceptualArchetype | null>(null);

  return (
    <div className="pt-24 bg-black text-white selection:bg-[#ff5500] selection:text-white">
      {/* ── 01. PROMOTIONAL HERO / COMING SOON TEASER ── */}
      <section className="relative py-20 sm:py-32 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 overflow-hidden">
        {/* Atmospheric Subtle Smoky Mesh Background */}
        <AtmosphericMeshBackground variant="services" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-6 max-w-4xl">
            {/* Pulsing Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#ff5500]/10 border border-[#ff5500]/30 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
              <span>01 // In Incubation · Coming Soon</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-white">
              The 48-Hour Website Framework. <span className="block text-white/30">Launch Fast. Zero Compromise.</span>
            </h1>

            <p className="text-white/80 text-base sm:text-xl font-normal max-w-2xl leading-relaxed">
              We don't believe in generic marketplace themes that load 50 bloated plugins and look identical to everyone else. We are currently engineering a suite of 6 high-performance website frameworks — hand-coded in modern React/Vite, optimized for sub-second Core Web Vitals, and designed to launch in just 48 hours.
            </p>

            {/* Value Highlights Pill Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm font-mono text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Lock className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>Launch Waitlist Price: {formatPrice('₹14,999', '$179')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sub-Second Mobile Velocity Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Builder Lock-In · Clean Code</span>
              </div>
            </div>

            {/* Dual CTAs: Waitlist vs Custom Build */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('template-waitlist')}
                className="px-8 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Priority Launch Waitlist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onOpenContact('custom-build')}
                className="px-8 py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Need It Now? Request Custom Build</span>
                <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. HOW THE 48-HOUR MODEL WILL WORK ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#07070a] border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="problem" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span>02 // The 48-Hour Model</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Agency Quality. <span className="text-white/30 block">Without The Agency Wait.</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed">
              When our framework catalog launches, getting a world-class website will take three simple steps:
            </p>
          </div>

          {/* 3 Step Cards with Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-3xl spotlight-card glass-apple space-y-4 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Select Your Archetype
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Choose the framework tailored to your business model (SaaS, Studio, DTC, Advisory, Personal Brand, or AI). Every archetype is pre-engineered for your specific conversion goals.
              </p>
            </div>

            <div className="p-8 rounded-3xl spotlight-card glass-apple space-y-4 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Drop In Brand Assets & Copy
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Send your logo, color preferences, and copy through our 10-minute founder intake. We inject your unique design tokens so the site feels 100% custom to your brand.
              </p>
            </div>

            <div className="p-8 rounded-3xl spotlight-card glass-apple space-y-4 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Live on Custom Domain in 48h
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                We handle responsive QA, connect your custom domain, set up SSL, configure SEO meta headers, and launch. Zero technical headaches on your end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. CONCEPTUAL ARCHETYPES (IN DESIGN LAB) ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="signature" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
                <Flame className="w-3.5 h-3.5" />
                <span>03 // Conceptual Blueprint Teasers</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                6 Archetypes in Incubation. <span className="text-white/30 block">Engineered From Scratch.</span>
              </h2>
              <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed">
                Here is a preview of the blueprints currently inside our design lab. Pre-register for any archetype below to lock in early-bird launch pricing.
              </p>
            </div>

            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Catalog Status: Active Prototyping</span>
              </div>
            </div>
          </div>

          {/* Archetypes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONCEPTUAL_ARCHETYPES.map((arch) => (
              <div
                key={arch.id}
                className="rounded-3xl spotlight-card glass-apple flex flex-col justify-between overflow-hidden group transition-all duration-300 border border-white/10 hover:border-white/25 relative"
              >
                {/* Visual Blueprint Wireframe Header */}
                <div className={`relative h-48 bg-gradient-to-br ${arch.gradient} p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden`}>
                  {/* Wireframe background grid */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* Blueprint Tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{arch.status}</span>
                    </span>
                    <span className="text-[10px] font-mono text-white/60 bg-black/40 px-2 py-0.5 rounded">
                      Target: {arch.targetSpeed}
                    </span>
                  </div>

                  {/* Wireframe Mockup UI Skeleton */}
                  <div className="relative z-10 space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="h-3 w-28 bg-white/40 rounded-full" />
                    <div className="h-2 w-44 bg-white/20 rounded-full" />
                    <div className="h-2 w-32 bg-white/15 rounded-full" />
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-8 space-y-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff5500] font-bold">
                        {arch.industry}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-white transition-colors">
                        {arch.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                      {arch.focus}
                    </p>

                    {/* Features Badges */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                        Included Blueprint Systems:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {arch.blueprintFeatures.map((f, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono text-white/80 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full"
                          >
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white/50">Early-Bird Waitlist Fee:</span>
                      <span className="text-white font-bold text-sm sm:text-base">
                        {formatPrice('₹14,999', '$179')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenContact(`template-waitlist-${arch.id}`)}
                      className="w-full py-3.5 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
                    >
                      <span>Pre-Register For {arch.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. PRIORITY WAITLIST CALLOUT ── */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#08090d] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ff5500]/10 border border-[#ff5500]/30 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP Launch Pre-Registration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Lock In Launch Pricing. <span className="text-white/30 block">Zero Risk. Zero Upfront Payment.</span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Pre-registering reserves your spot in our initial 48-hour deployment queue when the frameworks go live. You lock in our special founding price of <strong className="text-white">{formatPrice('₹14,999', '$179')}</strong> before public catalog pricing goes up.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => onOpenContact('template-waitlist')}
              className="px-10 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-sm tracking-wider rounded-full transition-all shadow-[0_0_40px_rgba(255,85,0,0.35)] hover:scale-[1.03] flex items-center gap-3 cursor-pointer"
            >
              <span>Join Priority Waitlist Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 05. CUSTOM BESPOKE BRIDGE BANNER ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="cta" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="rounded-3xl spotlight-card glass-apple-amber p-10 sm:p-14 border border-[#ff5500]/40 relative overflow-hidden shadow-[0_0_50px_rgba(255,85,0,0.18)] animate-border-breathe">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                  <span>04 // Need a Website Right Now?</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                  Don't Wait for the Catalog. <span className="text-white/30 block">Commission a Custom Platform Today.</span>
                </h2>
                <p className="text-white/80 text-base sm:text-lg font-normal max-w-xl leading-relaxed">
                  If your launch timeline is immediate or your product requires custom interactive architecture, we design and build 100% bespoke platforms from scratch in 2–3 weeks.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenContact('custom-build')}
                  className="w-full py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:scale-[1.02]"
                >
                  <span>Commission Custom Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/services"
                  className="w-full py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all text-center"
                >
                  Explore Bespoke Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden">
        <AtmosphericMeshBackground variant="proof" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
              <span>05 // Framework FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Everything You Need to Know.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'When will the 48-hour framework catalog launch?',
                a: 'We are currently hand-coding and testing all 6 archetypes to guarantee 99+ Core Web Vitals and zero visual defects. Priority waitlist members will get early access notification as soon as the first wave is ready.',
              },
              {
                q: 'How does pre-registration work? Do I pay now?',
                a: 'Pre-registration is completely free and requires zero payment upfront. It simply locks in your early-bird founding price (₹14,999 / $179) and reserves your spot in the 48-hour deployment queue.',
              },
              {
                q: 'How are these frameworks different from WordPress or Webflow templates?',
                a: 'Marketplace templates rely on generic third-party plugins, visual builders that bloat your DOM tree with thousands of useless lines, and slow monthly hosting. KritSite frameworks are clean, hand-coded modern web applications running on ultra-fast edge infrastructure with 0.3s hydration.',
              },
              {
                q: 'Can I request a custom bespoke build right now?',
                a: 'Yes, absolutely. Our custom bespoke commissions are open and actively booking. We build full custom platforms in 2–3 weeks with dedicated 1-on-1 founder access.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl glass-apple glass-apple-hover overflow-hidden transition-all duration-300">
                <details className="group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-base sm:text-lg tracking-tight text-white/90 group-hover:text-white">
                    <span>{faq.q}</span>
                    <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 font-mono text-xs group-open:rotate-45 transition-transform text-[#ff5500]">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm sm:text-base text-white/75 font-normal leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
