import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Palette, Search, Zap, Code, 
  Layers, CheckCircle2, Sliders, Cpu, Sparkles, Terminal
} from 'lucide-react';
import { SERVICE_PILLARS, WORKFLOW_STEPS, COMPARISON_POINTS, PRICING_PLANS, SERVICES_FAQS } from '../data/content';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

interface ServicesPageProps {
  onOpenContact: (planId?: string) => void;
}

const TAB_ICONS: Record<string, React.FC<{ className?: string }>> = {
  design: Palette,
  seo: Search,
  templates: Zap,
  custom: Code,
};

export function ServicesPage({ onOpenContact }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState('design');
  const { currency, setCurrency } = useCurrency();

  const activeCard = SERVICE_PILLARS.find((p) => p.id === activeTab) || SERVICE_PILLARS[0];

  return (
    <div className="pt-24 bg-black text-white selection:bg-[#ff5500] selection:text-white">
      {/* ── HERO ── */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 overflow-hidden">
        {/* Atmospheric Subtle Smoky Mesh Background */}
        <AtmosphericMeshBackground variant="services" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-wider text-white/50">
            01 // Full-Stack Web Architecture
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Web Design Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-white">
              Engineered for Aesthetics. <span className="block text-white/30">Calibrated for Search.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-xl font-normal max-w-2xl leading-relaxed">
              Every website we build is treated as a strategic digital asset. We synthesize architectural design principles with modern <strong>SEO, AEO & GEO</strong> indexing to convert casual visitors into clients.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="px-8 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full shadow-[0_0_25px_rgba(255,85,0,0.35)] hover:scale-[1.03] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Initiate Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/templates"
                className="px-8 py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full hover:border-white transition-all flex items-center gap-2"
              >
                Browse 48h Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABBED SERVICE PILLARS ── */}
      <section id="pillars" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-wider text-white/50">
            02 // 4 Pillars of Excellence
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#ff5500] block font-mono">
              The 4 Pillars of Excellence
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] text-white">
              How We Deliver <span className="block text-white/30">Unfair Advantages.</span>
            </h2>
          </div>

          {/* Tab selector buttons as Frosted Glass Capsules */}
          <div className="flex flex-wrap gap-2.5">
            {SERVICE_PILLARS.map((pillar) => {
              const Icon = TAB_ICONS[pillar.id] || Palette;
              const isSelected = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`px-6 py-3 text-xs sm:text-sm font-semibold font-mono tracking-wider rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-[1.02]'
                      : 'glass-apple glass-apple-hover text-white/70 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="rounded-3xl glass-apple p-7 sm:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-[#ff5500] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    {activeCard.tag}
                  </span>
                  <div className="px-4 py-1.5 rounded-xl bg-black/80 border border-white/20 text-right">
                    <span className="text-base font-bold font-mono text-white">{activeCard.metric}</span>
                    <span className="text-[10px] tracking-wider text-white/50 block font-mono">
                      {activeCard.metricLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {activeCard.title}
                  </h3>
                  <p className="text-base text-white/75 leading-relaxed font-normal max-w-2xl">
                    {activeCard.subtitle}
                  </p>
                </div>

                {/* Interactive Technical Visualizer */}
                <div className="p-5 bg-black/80 border border-white/15 space-y-4 font-mono text-xs">
                  {activeTab === 'design' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span className="flex items-center gap-2">
                          <Sliders className="w-3.5 h-3.5 text-[#ff5500]" />
                          Fluid Type & Spatial System
                        </span>
                        <span className="text-white/50">WCAG 2.1 AA</span>
                      </div>
                      {/* Color swatch bars */}
                      <div className="grid grid-cols-5 gap-2 h-8">
                        <div className="bg-[#ff5500] flex items-center justify-center text-[10px] font-bold text-white">
                          #ff5500
                        </div>
                        <div className="bg-white flex items-center justify-center text-[10px] font-bold text-black">
                          #ffffff
                        </div>
                        <div className="bg-[#262626] flex items-center justify-center text-[10px] text-white/70">
                          #262626
                        </div>
                        <div className="bg-[#141414] flex items-center justify-center text-[10px] text-white/70">
                          #141414
                        </div>
                        <div className="bg-[#050505] border border-white/20 flex items-center justify-center text-[10px] text-white/70">
                          #050505
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'seo' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span className="flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-[#ff5500]" />
                          Multi-Engine Optimization Stack
                        </span>
                        <span className="text-emerald-400 font-bold">100% Crawlable</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs text-white/80">
                          <span>Traditional Google SEO:</span>
                          <span className="text-white font-bold">Semantic HTML5 + Canonical</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-white/80">
                          <span>AI Answer Engine (AEO):</span>
                          <span className="text-[#ff5500] font-bold">FAQ & Entity Schemas (JSON-LD)</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-white/80">
                          <span>Generative Search (GEO):</span>
                          <span className="text-cyan-400 font-bold">Structured Citation Anchors</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'templates' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-[#ff5500]" />
                          48h Rapid Ingest Pipeline
                        </span>
                        <span className="text-white font-bold">Guaranteed</span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed font-normal">
                        Select template → Provide brand hex & copy → We customize and deploy on your domain within 2 business days.
                      </p>
                    </div>
                  )}

                  {activeTab === 'custom' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-[#ff5500]" />
                          Clean Slate Architecture
                        </span>
                        <span className="text-white font-bold">0% Template Code</span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed font-normal">
                        Full Figma design review sessions, custom micro-interactions, copy written from scratch, and 30 days of post-launch warranty.
                      </p>
                    </div>
                  )}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
                  {activeCard.specs.map((spec) => (
                    <div key={spec.label} className="bg-black/50 border border-white/10 p-3 rounded-2xl space-y-1">
                      <div className="text-xs text-white/50">{spec.label}</div>
                      <div className="text-white font-medium truncate text-sm">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Checklist Column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono tracking-wider text-white/50 block">
                Pillar Deliverables
              </span>
              <div className="space-y-2.5">
                {activeCard.features.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-2xl glass-apple glass-apple-hover p-4 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-[#ff5500] mt-0.5 shrink-0" />
                    <span className="text-sm sm:text-base text-white/90 font-normal">{f}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onOpenContact(activeCard.id)}
                className="w-full py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] mt-4"
              >
                <span>Book This Capability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-STEP DELIVERY TIMELINE ── */}
      <section id="process" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-wider text-white/50">
            03 // Linear Delivery Framework
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-[#ff5500] block font-mono">
                Linear Delivery Framework
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white">
                From Briefing <span className="block text-white/30">to Global Deployment.</span>
              </h2>
              <p className="text-white/70 text-base font-normal">
                A milestone-driven production pipeline. Every step is documented and reviewable before advancing.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact()}
              className="self-start px-8 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center gap-3 cursor-pointer shrink-0 shadow-[0_0_25px_rgba(255,85,0,0.35)] hover:scale-[1.03]"
            >
              <span>Initiate Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl glass-apple glass-apple-hover p-6 sm:p-8 flex flex-col justify-between space-y-6 group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-white/25 group-hover:text-[#ff5500] transition-colors">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono text-white/80 border border-white/15 px-3 py-1 rounded-full tracking-wider bg-white/5">
                      {step.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-white/90">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-normal">{step.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono tracking-wider text-white/50 block">
                    Verified Deliverables:
                  </span>
                  {step.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80 font-mono">
                      <Check className="w-3 h-3 text-[#ff5500] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-wider text-white/50">
            04 // Rigorous Standards
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-3xl">
            <span className="text-xs font-semibold tracking-wider text-[#ff5500] block font-mono">
              Rigorous Standards
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white">
              Ordinary Websites <span className="block text-white/30">vs. KritSite Engineering.</span>
            </h2>
          </div>

          <div className="rounded-3xl glass-apple overflow-hidden border border-white/15 shadow-2xl">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-black/40">
                  <th className="py-4 px-6 text-xs font-mono tracking-wider text-white/50 w-1/4">
                    Attribute
                  </th>
                  <th className="py-4 px-6 text-xs font-mono tracking-wider text-red-400/80">
                    Typical Agency / DIY Theme
                  </th>
                  <th className="py-4 px-6 text-xs font-mono tracking-wider text-[#ff5500]">
                    KritSite Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_POINTS.map((point, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 text-xs sm:text-sm font-bold tracking-wider text-white/80 font-mono">
                      {point.category}
                    </td>
                    <td className="py-5 px-6 text-sm text-white/50 font-normal">
                      {point.generic}
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#ff5500] mt-0.5 shrink-0" />
                        <span className="text-sm text-white font-normal">
                          {point.kritsite}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-[0.2em] text-white/50">
            05 // Transparent Engagement
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-[#ff5500] block font-mono">
                Transparent Engagement
              </span>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-white">
                Honest Pricing. <span className="block text-white/30">Maximum Conversion.</span>
              </h2>
            </div>
            <div className="flex items-center gap-1 border border-white/15 p-1 bg-black/60 backdrop-blur-xl rounded-full self-start">
              {(['INR', 'USD'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-5 py-2 text-xs sm:text-sm font-bold font-mono tracking-wider rounded-full transition-all cursor-pointer ${
                    currency === c ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {c === 'INR' ? '₹ Indian Rupee' : '$ USD Global'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const isPopular = plan.badge === 'Most Popular' || plan.badge === 'MOST POPULAR';
              return (
                <div
                  key={plan.id}
                  className={`p-7 sm:p-9 flex flex-col justify-between space-y-8 relative transition-all duration-300 rounded-3xl ${
                    isPopular 
                      ? 'glass-apple-amber ring-1 ring-[#ff5500]/40 shadow-[0_0_50px_rgba(255,85,0,0.25)]' 
                      : 'glass-apple glass-apple-hover'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-8 px-4 py-1 bg-[#ff5500] text-white text-xs font-black tracking-wider font-mono rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black tracking-tight text-white">{plan.name}</h3>
                      <p className="text-sm text-white/70 leading-relaxed font-normal">{plan.description}</p>
                    </div>

                    <div className="pt-2 pb-4 border-b border-white/10 flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                        {currency === 'INR' ? plan.inrPrice : plan.usdPrice}
                      </span>
                      <span className="text-xs sm:text-sm text-white/50 font-mono tracking-wider">{plan.period}</span>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-white/70 font-mono">
                      <div className="flex justify-between">
                        <span className="text-white/50">Turnaround:</span>
                        <span className="text-white font-bold">{plan.turnaround}</span>
                      </div>
                    </div>

                    <div className="pt-2 space-y-3">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 font-mono">
                          <Check className="w-3.5 h-3.5 text-[#ff5500] mt-0.5 shrink-0" />
                          <span className="leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenContact(plan.id)}
                    className={`w-full py-4 font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:scale-[1.02] ${
                      isPopular 
                        ? 'bg-[#ff5500] text-white hover:bg-[#e64d00]' 
                        : 'bg-white text-black hover:bg-neutral-200'
                    }`}
                  >
                    <span>Commission {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-[0.2em] text-white/50">
            06 // Knowledge Base
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3 max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff5500] block font-mono">
              Services Knowledge Base
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] text-white">
              Frequently Asked <span className="block text-white/30">Questions.</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {SERVICES_FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl glass-apple glass-apple-hover overflow-hidden transition-all duration-300">
                <details className="group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-base sm:text-lg tracking-tight text-white/95 group-hover:text-white">
                    <span>{faq.question}</span>
                    <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0 font-mono text-xs group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm sm:text-base text-white/75 font-normal leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
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
