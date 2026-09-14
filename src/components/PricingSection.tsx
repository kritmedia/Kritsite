import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { AtmosphericMeshBackground } from './AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

interface PricingSectionProps {
  onOpenContact: (planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  const { currency, formatPrice, setCurrency } = useCurrency();

  return (
    <section
      id="services"
      className="scroll-mt-24 py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-t border-white/10 relative overflow-hidden select-none"
    >
      {/* ── Atmospheric Smoky Mesh Background in KritSite Brand Colors ── */}
      <AtmosphericMeshBackground variant="services" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 sm:space-y-20">
        {/* ── Apple-Grade Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10 sm:pb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
              <span>04 // Choose Your Starting Point</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
              Two Ways to Build. <span className="text-white/30 block sm:inline">Both World-Class.</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl font-normal leading-relaxed pt-1">
              Whether you need high-velocity deployment or a blank-canvas architectural commission, every platform is engineered with intentional layout physics, zero bloat, and organic search indexing.
            </p>
          </div>

          {/* ── Apple-Style Segmented Pill Currency Switcher ── */}
          <div className="shrink-0 flex items-center">
            <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg">
              <button
                type="button"
                onClick={() => setCurrency('INR')}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-white text-black shadow-md scale-[1.02]'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                ₹ INR (Domestic)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-white text-black shadow-md scale-[1.02]'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                $ USD (Global)
              </button>
            </div>
          </div>
        </div>

        {/* ── Apple Dual Flagship Product Comparison Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* ── CARD 01: TEMPLATE LAUNCH (Speed & Precision) ── */}
          <div className="group rounded-[32px] sm:rounded-[40px] glass-apple glass-apple-hover p-8 sm:p-12 flex flex-col justify-between space-y-10 relative overflow-hidden transition-all duration-500 border border-white/10 hover:border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* Top Eyebrow Badges */}
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#ff5500] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>48-Hour Turnaround</span>
              </span>
              <span className="text-xs font-mono text-white/40 tracking-wider">
                01 // Express Architecture
              </span>
            </div>

            {/* Titles & Tagline */}
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-white transition-colors">
                Template Launch.
              </h3>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white/50">
                Launch fast. Look world-class.
              </p>
              <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed pt-1">
                A curated architectural framework customized to your brand palette, type scale, and copy — live and indexing in 48 hours.
              </p>
            </div>

            {/* Apple-Style Hero Interface Graphic */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-white/20 transition-all duration-500">
              <img
                src="/images/split_template_launch.jpg"
                alt="48-Hour Template Launch Architecture"
                className="w-full aspect-[16/10] object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Production-Ready Framework</span>
                </span>
                <span className="text-[#ff5500] font-bold">1–2 Days</span>
              </div>
            </div>

            {/* Apple Pricing & CTA */}
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
                  {formatPrice('₹14,999', '$179')}
                </div>
                <p className="text-xs font-mono text-white/50 tracking-wider">
                  One-time setup fee. Zero recurring platform lock-in.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenContact('template-launch')}
                  className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <span>Launch in 48h</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/templates"
                  className="px-6 py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Browse 6 Catalog Niches</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Apple Specs Breakdown Table */}
            <div className="border-t border-white/10 pt-8 space-y-4">
              <div className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase">
                Technical Specifications
              </div>
              <div className="space-y-3 text-xs sm:text-sm font-mono">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Delivery Horizon</span>
                  <span className="text-white font-bold">48 Hours Guaranteed</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Core Structure</span>
                  <span className="text-white">Up to 5 Pages</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Design System</span>
                  <span className="text-white">Custom Brand Tokens</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Lighthouse Velocity</span>
                  <span className="text-emerald-400 font-bold">99+ Mobile & Desktop</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Search Engine Indexing</span>
                  <span className="text-white">On-Page Meta & OpenGraph</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/50">Post-Launch Care</span>
                  <span className="text-white">14 Days Direct Studio Care</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── CARD 02: CUSTOM PLATFORM (Flagship Pro Tier) ── */}
          <div className="group rounded-[32px] sm:rounded-[40px] glass-apple-amber p-8 sm:p-12 flex flex-col justify-between space-y-10 relative overflow-hidden transition-all duration-500 border border-[#ff5500]/30 hover:border-[#ff5500]/50 shadow-[0_0_60px_rgba(255,85,0,0.18)] animate-border-breathe">
            {/* Top Eyebrow Badges */}
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#ff5500]/10 border border-[#ff5500]/30 rounded-full text-xs font-mono text-[#ff5500] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship Bespoke Commission</span>
              </span>
              <span className="text-xs font-mono text-[#ff5500] font-bold tracking-wider">
                02 // Studio Pro
              </span>
            </div>

            {/* Titles & Tagline */}
            <div className="space-y-3">
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-white transition-colors">
                Custom Platform.
              </h3>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#ff5500]">
                Bespoke architecture. Zero compromise.
              </p>
              <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed pt-1">
                Designed from a blank canvas around your distinct market positioning, customer psychology, and high-ticket revenue model.
              </p>
            </div>

            {/* Apple-Style Hero Interface Graphic */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ff5500]/25 bg-black/60 shadow-[0_20px_50px_rgba(255,85,0,0.15)] group-hover:border-[#ff5500]/50 transition-all duration-500">
              <img
                src="/images/split_custom_website.jpg"
                alt="Bespoke Custom Web Architecture"
                className="w-full aspect-[16/10] object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
                  <span>100% Bespoke Engineering</span>
                </span>
                <span className="text-white font-bold">2–3 Weeks</span>
              </div>
            </div>

            {/* Apple Pricing & CTA */}
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
                  {formatPrice('₹49,999', '$599')}
                </div>
                <p className="text-xs font-mono text-[#ff5500]/80 tracking-wider">
                  Full custom commission. Strategy, copy, design & production code.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenContact('custom-build')}
                  className="px-8 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all shadow-[0_0_30px_rgba(255,85,0,0.35)] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <span>Build Custom</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/services"
                  className="px-6 py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>Compare Full Scope</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Apple Specs Breakdown Table */}
            <div className="border-t border-white/10 pt-8 space-y-4">
              <div className="text-xs font-mono font-bold tracking-widest text-[#ff5500] uppercase">
                Technical Specifications
              </div>
              <div className="space-y-3 text-xs sm:text-sm font-mono">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Delivery Horizon</span>
                  <span className="text-white font-bold">2–3 Weeks Dedicated</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Core Structure</span>
                  <span className="text-white font-bold">Multi-Page & Bespoke Funnels</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Design System</span>
                  <span className="text-white">Custom Physics & Micro-Motion</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Lighthouse Velocity</span>
                  <span className="text-emerald-400 font-bold">Sub-Second Asset Hydration</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-white/50">Search Engine Indexing</span>
                  <span className="text-[#ff5500] font-bold">Deep Semantic AEO & GEO Indexing</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/50">Post-Launch Care</span>
                  <span className="text-white">30 Days Priority Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Apple Enterprise & Advisory Footnote Bar ── */}
        <div className="rounded-3xl glass-apple p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff5500]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Need Enterprise Scale or Retainer Support?
              </h4>
              <p className="text-xs sm:text-sm text-white/60 font-normal">
                We partner with venture-backed startups and established brands requiring ongoing architecture, A/B experimentation, and multi-market scale.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenContact('enterprise')}
            className="px-6 py-3.5 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full shrink-0 flex items-center gap-2 hover:border-white transition-all cursor-pointer"
          >
            <span>Consult Lead Architect</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
