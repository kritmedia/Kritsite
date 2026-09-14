import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, X, Check, Sparkles, Monitor, Smartphone } from 'lucide-react';
import { SITE_TEMPLATES, TEMPLATES_FAQS } from '../data/content';
import { SiteTemplate } from '../types';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

interface TemplatesPageProps {
  onOpenContact: (planId?: string) => void;
}

const CATEGORIES = [
  'All',
  'SaaS / Tech',
  'Agency / Portfolio',
  'E-Commerce',
  'Personal Brand',
  'Local Business',
  'Startup',
];

/* ── Realistic Template Mockup Card Component ── */
function TemplateMockup({
  template,
  onPreview,
}: {
  template: SiteTemplate;
  onPreview: (t: SiteTemplate) => void;
}) {
  return (
    <div className="relative h-64 overflow-hidden bg-neutral-950 group cursor-pointer border-b border-white/10">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-white/10 bg-black/75 backdrop-blur-md relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
        </div>
        <div className="h-4 px-3 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/50 flex items-center">
          {template.id}.kritsite.com
        </div>
        <span className="text-[9px] font-mono text-[#ff5500] font-bold">48H</span>
      </div>

      {/* Real High-Resolution Preview Screen */}
      <div className="relative w-full h-[calc(100%-33px)] overflow-hidden bg-black">
        {template.previewImg ? (
          <img
            src={template.previewImg}
            alt={template.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${template.mockupBg}`} />
        )}
        {/* Subtle Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Hover Reveal Overlay with Pill Action */}
      <div 
        onClick={() => onPreview(template)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2.5 z-20"
      >
        <span className="px-5 py-2.5 bg-white text-black text-xs font-bold font-mono tracking-wider rounded-full flex items-center gap-2 shadow-2xl hover:bg-neutral-200 transition-all">
          <Eye className="w-3.5 h-3.5" />
          <span>Interactive Preview</span>
        </span>
        <span className="text-[10px] font-mono text-white/60 tracking-wider">
          Click to inspect specs
        </span>
      </div>
    </div>
  );
}

export function TemplatesPage({ onOpenContact }: TemplatesPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewTemplate, setPreviewTemplate] = useState<SiteTemplate | null>(null);
  const { currency, formatPrice } = useCurrency();

  const filtered =
    activeCategory === 'All'
      ? SITE_TEMPLATES
      : SITE_TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <div className="pt-24 bg-black text-white selection:bg-[#ff5500] selection:text-white">
      {/* ── HERO ── */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 overflow-hidden">
        {/* Atmospheric Subtle Smoky Mesh Background */}
        <AtmosphericMeshBackground variant="services" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-6">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-[0.2em] text-white/50">
            01 // 48-Hour Signature Catalog
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>48-Hour Signature Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-white">
              Signature Designs. <span className="block text-white/30">Live in 1–2 Days.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-xl font-normal max-w-2xl leading-relaxed">
              We engineered a catalog of 6 architectural web templates across high-growth industries. We customize your brand colors, typography, and copy — and deploy to production within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-mono text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span>Transparent {formatPrice('₹14,999', '$179')} Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>On-Page SEO & Mobile Polish Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER & TEMPLATE GALLERY ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-[0.2em] text-white/50">
            02 // Curated Template Architecture
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider font-mono rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-[1.02]'
                    : 'glass-apple glass-apple-hover text-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Template Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((template) => (
              <div
                key={template.id}
                className="rounded-3xl glass-apple glass-apple-hover flex flex-col justify-between overflow-hidden group transition-all duration-300"
              >
                {/* Visual Mockup Preview */}
                <TemplateMockup
                  template={template}
                  onPreview={(t) => setPreviewTemplate(t)}
                />

                {/* Card Content Area */}
                <div className="p-6 sm:p-8 space-y-5 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#ff5500] transition-colors">
                          {template.name}
                        </h3>
                        <p className="text-sm text-white/70 font-normal mt-1">
                          {template.tagline}
                        </p>
                      </div>
                      <span className="text-xs font-mono tracking-wider border border-white/15 px-3 py-1 rounded-full text-white/80 bg-white/5 shrink-0">
                        {template.pages} Pages
                      </span>
                    </div>

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {template.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs font-mono text-white/75 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                      <span className="text-white/50">Setup Fee:</span>
                      <span className="text-white font-bold text-sm sm:text-base">{formatPrice('₹14,999', '$179')}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => onOpenContact('template-launch')}
                        className="flex-1 py-3.5 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
                      >
                        <span>Launch in 48h</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreviewTemplate(template)}
                        className="w-11 h-11 glass-apple glass-apple-hover text-white/70 hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all shrink-0"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM COMMISSION BANNER ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl glass-apple-amber p-10 sm:p-14 border border-[#ff5500]/40 relative overflow-hidden shadow-[0_0_50px_rgba(255,85,0,0.18)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono tracking-[0.2em] text-[#ff5500] font-bold">
                  03 // Need a Different Direction?
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                  Every Brand Has Unique Goals. <span className="text-white/30 block">We Build Bespoke Platforms.</span>
                </h2>
                <p className="text-white/80 text-base sm:text-lg font-normal max-w-xl leading-relaxed">
                  If none of our templates match your exact architectural vision, we'll design a 100% custom platform tailored to your audience.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenContact('custom-build')}
                  className="w-full py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:scale-[1.02]"
                >
                  <span>Request Custom Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/services"
                  className="w-full py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all text-center"
                >
                  View Custom Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMPLATES FAQ ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Top Ticker */}
          <div className="text-xs font-mono tracking-[0.2em] text-white/50">
            04 // Template Inquiries
          </div>

          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff5500] block font-mono">
              Template Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Frequently Asked Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {TEMPLATES_FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl glass-apple glass-apple-hover overflow-hidden transition-all duration-300">
                <details className="group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-base sm:text-lg tracking-tight text-white/90 group-hover:text-white">
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

      {/* ── INTERACTIVE MODAL PREVIEW DIALOG ── */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="rounded-3xl glass-apple border border-white/20 w-full max-w-3xl p-6 sm:p-10 relative shadow-[0_30px_90px_rgba(0,0,0,0.95)] my-8 space-y-6">
            <button
              type="button"
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full glass-apple flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-wider text-[#ff5500] px-3 py-1 bg-white/5 border border-white/10 rounded-full inline-block">
                Template Specification
              </span>
              <h3 className="text-3xl font-black tracking-tight text-white">
                {previewTemplate.name} // {previewTemplate.industry}
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-normal">
                {previewTemplate.tagline}
              </p>
            </div>

            {/* High-Resolution Screen Preview in Modal */}
            <div className="rounded-2xl overflow-hidden border border-white/15 relative h-64 sm:h-72 bg-black">
              {previewTemplate.previewImg ? (
                <img
                  src={previewTemplate.previewImg}
                  alt={previewTemplate.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${previewTemplate.mockupBg}`} />
              )}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Included in 48h launch */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <span className="text-xs font-mono tracking-wider text-white/50 block">
                Included in 48h Turnaround:
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-mono text-white/90">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Your Brand Logo & Colors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Complete Copy Insertion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>Mobile-First Testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff5500]" />
                  <span>On-Page SEO Tags</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  setPreviewTemplate(null);
                  onOpenContact('template-launch');
                }}
                className="flex-1 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all cursor-pointer shadow-[0_0_25px_rgba(255,85,0,0.3)] hover:scale-[1.02] text-center"
              >
                Proceed With {previewTemplate.name} ({formatPrice('₹14,999', '$179')})
              </button>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className="px-8 py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full hover:border-white transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
