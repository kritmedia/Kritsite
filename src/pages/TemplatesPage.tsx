import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, ShieldCheck, CheckCircle2, Lock, Flame, Layers, Zap, ArrowUpRight, Cpu, Check, BarChart3, Rocket } from 'lucide-react';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

interface TemplatesPageProps {
  onOpenContact: (planId?: string) => void;
}

const LAUNCH_PILLARS = [
  {
    icon: Layers,
    title: 'Pre-Engineered Conversion Architectures',
    description: 'Purpose-built layouts tailored for modern business models: SaaS, DTC, Executive Advisory, Creative Studios, and Personal Brands. Every section is engineered around buyer psychology and conversion hierarchy.',
  },
  {
    icon: Cpu,
    title: 'Hand-Coded React & Tailwind Core',
    description: 'Zero bloated visual builders, zero sluggish third-party plugins, and zero unnecessary script injection. Hand-authored modern code delivering sub-second mobile hydration and 99+ Lighthouse scores.',
  },
  {
    icon: Clock,
    title: 'White-Glove 48-Hour Deployment',
    description: 'Not a blank downloadable zip file where you are stranded. You provide your brand assets and copy; our engineers personally customize your design tokens, test responsiveness, configure DNS & SSL, and launch.',
  },
];

const CORE_BENEFITS = [
  {
    title: 'Go Live in 48 Hours, Not 8 Weeks',
    description: 'Skip the agonizing 2-month agency turnaround. Get your product, service, or personal brand in front of customers over a single weekend.',
    metric: '48h',
    metricLabel: 'Turnaround Target',
  },
  {
    title: 'Instant Category Authority',
    description: 'Look like an established, well-funded industry leader from day one. Premium Swiss typography, dark glass physics, and editorial polish that commands trust.',
    metric: '100%',
    metricLabel: 'Agency-Grade Polish',
  },
  {
    title: 'Sub-Second Mobile Hydration',
    description: 'Typical marketplace templates take 3.8s+ to load. Our framework runs on edge infrastructure with sub-0.5s paints so you never bleed paid ad traffic.',
    metric: '<0.5s',
    metricLabel: 'Mobile Paint (LCP)',
  },
  {
    title: 'AI Answer Engine (AEO & GEO) Ready',
    description: 'Built with structured Schema.org JSON-LD and semantic hierarchy out of the box so Perplexity, ChatGPT Search, Claude, and Google cite your platform.',
    metric: '2026',
    metricLabel: 'Search Architecture',
  },
  {
    title: 'Zero Platform Lock-In or Monthly Tax',
    description: 'You own 100% of your production code. No recurring $30-$80/month website builder subscription holding your digital storefront hostage.',
    metric: '0',
    metricLabel: 'Monthly Builder Fees',
  },
  {
    title: 'Founder-Level Staging & Polish',
    description: 'Our engineering team personally verifies your responsiveness across iOS, Android, macOS, and Windows before pushing to production.',
    metric: '1-on-1',
    metricLabel: 'Deployment Handoff',
  },
];

export function TemplatesPage({ onOpenContact }: TemplatesPageProps) {
  const { formatPrice } = useCurrency();

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
              We don't believe in generic marketplace themes that load 50 bloated plugins and look identical to everyone else. We are engineering the KritSite 48-Hour Website Framework — a suite of hand-coded, high-performance website foundations designed to launch your business with agency-grade authority in just 48 hours.
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

      {/* ── 02. WHAT WE ARE PLANNING TO LAUNCH ── */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#07070a] border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="problem" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <Rocket className="w-3.5 h-3.5" />
              <span>02 // What We Are Planning To Launch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              A Radical Alternative To Sluggish Themes <span className="text-white/30 block">& 8-Week Agency Backlogs.</span>
            </h2>
            <p className="text-white/75 text-base sm:text-lg font-normal leading-relaxed">
              Founders usually face a painful dilemma: either waste 8–12 weeks and thousands of dollars waiting in traditional agency backlogs, or settle for fragile drag-and-drop website builders that look generic, load at turtle speed, and hold your site hostage with recurring monthly subscriptions.
            </p>
            <p className="text-white/75 text-base sm:text-lg font-normal leading-relaxed">
              We are launching the middle path: a curated suite of pre-engineered, clean-code digital foundations paired with white-glove founder staging that gets your business live on a custom domain in just 48 hours.
            </p>
          </div>

          {/* 3 Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {LAUNCH_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl spotlight-card glass-apple space-y-5 border border-white/10 hover:border-[#ff5500]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff5500] font-bold block">
                      Core Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 03. HOW IT WILL BENEFIT YOU ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="signature" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // Tangible Commercial Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              The Speed Of A Template. <span className="text-white/30 block">The Authority Of A Bespoke Studio.</span>
            </h2>
            <p className="text-white/75 text-base sm:text-lg font-normal leading-relaxed">
              Every detail is engineered from first principles to eliminate the conversion leaks, sluggish load times, and technical headaches that hold modern founders back.
            </p>
          </div>

          {/* 6 High-Impact Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl spotlight-card glass-apple space-y-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#ff5500] font-mono">
                      {benefit.metric}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {benefit.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/60">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Verified Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04. HOW THE 48-HOUR MODEL WORKS ── */}
      <section className="py-20 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#07070a] border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="problem" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <Clock className="w-3.5 h-3.5" />
              <span>04 // The 48-Hour Model</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Agency Quality. <span className="text-white/30 block">Without The Agency Wait.</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed">
              When our framework catalog goes live, getting your platform launched will take three frictionless steps:
            </p>
          </div>

          {/* 3 Step Cards with Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-3xl spotlight-card glass-apple space-y-4 border border-white/10 hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Select Your Framework Direction
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Choose the foundation calibrated for your specific commercial model (SaaS, Studio, DTC, Advisory, or Personal Brand). Every layout is pre-engineered for conversion.
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
                Provide your logo, brand colors, and copy through our 10-minute founder intake. We inject your unique design tokens so the site feels 100% custom to your brand.
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

      {/* ── 05. PRIORITY WAITLIST CALLOUT ── */}
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
            Pre-registering reserves your priority spot in our initial 48-hour deployment queue when the frameworks go live. You lock in our special founding price of <strong className="text-white">{formatPrice('₹14,999', '$179')}</strong> before standard catalog pricing applies.
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

      {/* ── 06. CUSTOM BESPOKE BRIDGE BANNER ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="cta" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="rounded-3xl spotlight-card glass-apple-amber p-10 sm:p-14 border border-[#ff5500]/40 relative overflow-hidden shadow-[0_0_50px_rgba(255,85,0,0.18)] animate-border-breathe">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                  <span>06 // Need a Website Right Now?</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                  Don't Wait for the Catalog. <span className="text-white/30 block">Commission a Custom Platform Today.</span>
                </h2>
                <p className="text-white/80 text-base sm:text-lg font-normal max-w-xl leading-relaxed">
                  If your launch timeline is immediate or your product requires bespoke interactive architecture, we design and build 100% custom platforms from scratch in 2–3 weeks.
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

      {/* ── 07. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden">
        <AtmosphericMeshBackground variant="proof" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
              <span>07 // Framework FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Everything You Need to Know.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'When will the 48-hour framework catalog launch?',
                a: 'We are currently hand-coding and testing each framework foundation to guarantee 99+ Core Web Vitals and zero visual defects. Priority waitlist members will receive early access notification as soon as the first release is ready.',
              },
              {
                q: 'How does pre-registration work? Do I pay now?',
                a: 'Pre-registration is completely free and requires zero payment upfront. It simply locks in your early-bird founding price (₹14,999 / $179) and reserves your spot in the 48-hour deployment queue.',
              },
              {
                q: 'How are these frameworks different from WordPress or Webflow templates?',
                a: 'Marketplace templates rely on generic third-party plugins, visual builders that bloat your DOM tree with thousands of useless lines, and slow monthly hosting. KritSite frameworks are clean, hand-coded modern web applications running on ultra-fast edge infrastructure with 0.3s hydration and zero recurring builder fees.',
              },
              {
                q: 'What do I need to prepare before my 48-hour build begins?',
                a: 'All you need is your logo or brand name, color preferences, and the copy/messaging you want on your pages. Our team handles the code tailoring, asset integration, responsiveness, and domain configuration.',
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
