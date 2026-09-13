import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, X, Check, Sparkles, Monitor, Smartphone } from 'lucide-react';
import { SITE_TEMPLATES, TEMPLATES_FAQS } from '../data/content';
import { SiteTemplate } from '../types';

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
    <div className={`relative bg-gradient-to-br ${template.mockupBg} h-56 overflow-hidden border border-white/10 group cursor-pointer`}>
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
        </div>
        <div className="h-3.5 px-3 bg-white/5 border border-white/10 text-[9px] font-mono text-white/40 flex items-center">
          {template.id}.preview.kritsite.com
        </div>
        <div className="w-2" />
      </div>

      {/* Mock Layout Body */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded-sm" style={{ backgroundColor: template.accentColor }} />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 bg-white/20 rounded-full" />
            <div className="h-1.5 w-8 bg-white/20 rounded-full" />
            <div className="h-1.5 w-8 bg-white/20 rounded-full" />
          </div>
        </div>

        {/* Hero mockup */}
        <div className="space-y-1.5 pt-2">
          <div className="h-5 w-4/5 bg-white/25 rounded-sm" />
          <div className="h-5 w-3/5 bg-white/15 rounded-sm" />
          <div className="h-2 w-full bg-white/10 rounded-sm mt-1" />
        </div>

        {/* Action buttons mockup */}
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-20 rounded-sm" style={{ backgroundColor: template.accentColor }} />
          <div className="h-6 w-16 border border-white/20 rounded-sm" />
        </div>
      </div>

      {/* Hover Reveal Overlay */}
      <div 
        onClick={() => onPreview(template)}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2"
      >
        <span className="px-5 py-2.5 bg-white text-black text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2 shadow-2xl">
          <Eye className="w-3.5 h-3.5" />
          <span>Interactive Preview</span>
        </span>
        <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
          Click to inspect specs
        </span>
      </div>
    </div>
  );
}

export function TemplatesPage({ onOpenContact }: TemplatesPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewTemplate, setPreviewTemplate] = useState<SiteTemplate | null>(null);

  const filtered =
    activeCategory === 'All'
      ? SITE_TEMPLATES
      : SITE_TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#030303] border-b border-white/10 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 right-20 w-[500px] h-[500px] glow-orb-orange opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border-l-2 border-[#ff5500]/60 pl-6 sm:pl-10 py-2 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/15 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>48-Hour Signature Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] text-white">
              SIGNATURE DESIGNS. <span className="block text-white/30">LIVE IN 1–2 DAYS.</span>
            </h1>
            <p className="text-white/70 text-base sm:text-xl font-light max-w-2xl leading-relaxed">
              We engineered a catalog of 6 architectural web templates across high-growth industries. We customize your brand colors, typography, and copy — and deploy to production within 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span>Transparent ₹14,999 / $179 Pricing</span>
              </div>
              <div className="flex items-center gap-2">
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
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest font-mono transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'glass-card text-white/50 border-white/15 hover:border-white/40 hover:text-white'
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
                className="glass-card flex flex-col justify-between overflow-hidden hover:border-white/40 transition-all duration-300 group"
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
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#ff5500] transition-colors">
                          {template.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/50 font-light mt-0.5">
                          {template.tagline}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider border border-white/20 px-2.5 py-1 text-white/60 shrink-0">
                        {template.pages} Pages
                      </span>
                    </div>

                    {/* Features Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {template.features.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-mono text-white/50 bg-white/[0.03] border border-white/10 px-2 py-0.5"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white/40 uppercase">Setup Fee:</span>
                      <span className="text-white font-bold text-sm">₹14,999 / $179</span>
                    </div>

                    <div className="flex gap-2.5">
                      <button
                        type="button"
                        onClick={() => onOpenContact('template-launch')}
                        className="flex-1 py-3.5 bg-[#ff5500] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#e64d00] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>Launch in 48h</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreviewTemplate(template)}
                        className="px-4 py-3.5 glass-card text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest hover:border-white transition-all cursor-pointer"
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
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-10 sm:p-16 border-white/20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#ff5500]">
                  Need a Different Direction?
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight text-white">
                  EVERY BRAND HAS UNIQUE GOALS. <span className="text-white/30">WE BUILD BESPOKE PLATFORMS.</span>
                </h2>
                <p className="text-white/60 text-base font-light max-w-xl leading-relaxed">
                  If none of our templates match your exact architectural vision, we'll design a 100% custom platform tailored to your audience.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => onOpenContact('custom-build')}
                  className="w-full py-5 bg-[#ff5500] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#e64d00] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(255,85,0,0.3)]"
                >
                  <span>Request Custom Build</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/services"
                  className="w-full py-4 glass-card text-white font-bold uppercase text-xs tracking-widest hover:border-white transition-all text-center"
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
          <div className="border-l border-white/20 pl-6 py-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              Template Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>

          <div className="space-y-4">
            {TEMPLATES_FAQS.map((faq, idx) => (
              <div key={idx} className="glass-card overflow-hidden">
                <details className="group">
                  <summary className="p-6 cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-base uppercase tracking-tight text-white/90 group-hover:text-white">
                    <span>{faq.question}</span>
                    <span className="w-7 h-7 border border-white/20 flex items-center justify-center shrink-0 font-mono text-xs group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-white/60 font-light leading-relaxed border-t border-white/10 pt-4">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="glass-card border border-white/20 w-full max-w-3xl p-6 sm:p-8 relative shadow-2xl my-8 space-y-6">
            <button
              type="button"
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-6 right-6 p-2 glass-card text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
                Template Specification
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                {previewTemplate.name} // {previewTemplate.industry}
              </h3>
              <p className="text-sm text-white/60 font-light">
                {previewTemplate.tagline}
              </p>
            </div>

            {/* Mockup Preview in Modal */}
            <div className={`p-8 bg-gradient-to-br ${previewTemplate.mockupBg} border border-white/10 space-y-4`}>
              <div className="flex justify-between items-center text-xs font-mono text-white/40 border-b border-white/10 pb-3">
                <span>LAYOUT ANATOMY</span>
                <span>{previewTemplate.pages} KEY SECTION TEMPLATES</span>
              </div>
              <div className="space-y-2">
                <div className="h-6 w-3/4 bg-white/20 rounded-sm" />
                <div className="h-4 w-1/2 bg-white/10 rounded-sm" />
              </div>
              <div className="flex gap-2 pt-2">
                <div className="h-8 w-24 rounded-sm" style={{ backgroundColor: previewTemplate.accentColor }} />
                <div className="h-8 w-20 border border-white/20 rounded-sm" />
              </div>
            </div>

            {/* Included in 48h launch */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                Included in 48h Turnaround:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-white/80">
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

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setPreviewTemplate(null);
                  onOpenContact('template-launch');
                }}
                className="flex-1 py-4 bg-[#ff5500] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#e64d00] transition-all cursor-pointer shadow-lg text-center"
              >
                Proceed With {previewTemplate.name} (₹14,999)
              </button>
              <button
                type="button"
                onClick={() => setPreviewTemplate(null)}
                className="px-6 py-4 glass-card text-white font-bold uppercase text-xs tracking-widest hover:border-white transition-all cursor-pointer"
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
