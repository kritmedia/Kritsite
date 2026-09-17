import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Globe, Mail, Clock, ArrowUpRight, 
  Sparkles, Sliders, ShieldCheck, Zap
} from 'lucide-react';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

const CONTACT_FAQS = [
  { 
    q: 'How quickly does the studio respond to new project briefs?', 
    a: 'Every inquiry receives a comprehensive reply with initial timeline estimates within 24 hours (or under 4 hours during IST business hours).' 
  },
  { 
    q: 'Can the studio work with international clients outside India?', 
    a: 'Yes, seamlessly. We engineer platforms for international brands (including clients like Big Bear Vans in California, USA). Contracts, communications, and payments are fully supported in USD and INR with asynchronous sprint updates.' 
  },
  { 
    q: 'What is required from our side to begin the engagement?', 
    a: 'Your brand assets (logo/colors if existing), target customer description, and rough page list. For Custom builds, we write the copy and plan the content architecture for you.' 
  },
];

export function ContactPage() {
  const { currency, formatPrice } = useCurrency();

  const ESTIMATOR_DATA = {
    'template-waitlist': {
      tierName: 'Signature Framework',
      turnaround: '48 Hours Guaranteed',
      budgetLabel: formatPrice('₹14,999', '$179'),
      inclusions: [
        'Up to 5 Pages (Home, About, Services, Work, Contact)',
        'Custom Brand Token Calibration (Colors & Type)',
        'Sub-Second Mobile Paint (<0.5s LCP)',
        'Core Web Vitals 99+ Green Standard',
        'On-Page SEO Meta & OpenGraph Integration',
      ],
    },
    'custom-build': {
      tierName: 'Custom Bespoke Platform',
      turnaround: '2–3 Weeks Dedicated',
      budgetLabel: `Starting at ${formatPrice('₹44,999', '$549')}`,
      inclusions: [
        '100% Bespoke Figma Design System',
        'Copywriting & Conversion Storytelling From Scratch',
        'Interactive Bento Modules & Micro-Interactions',
        'AEO & GEO Knowledge Graph (JSON-LD)',
        '30 Days Dedicated Lead Architect Warranty',
      ],
    },
    'enterprise': {
      tierName: 'Enterprise Flagship',
      turnaround: '4–6 Weeks Comprehensive',
      budgetLabel: `Starting at ${formatPrice('₹1,19,999+', '$1,499+')}`,
      inclusions: [
        'Multi-Brand / Multi-Market Architecture',
        'Headless CMS & Dynamic Ingestion Pipelines',
        'Custom Canvas & Glass Micro-Physics',
        'Full Multi-Engine AEO/GEO Indexing Stack',
        '60 Days Priority Engineering SLA',
      ],
    },
    'consultation': {
      tierName: 'Strategic Teardown & Advisory',
      turnaround: '24–48 Hours Feasibility Brief',
      budgetLabel: 'Complimentary Initial Audit',
      inclusions: [
        'Diagnostic Teardown of Current Site Defects',
        'Core Web Vitals & Hydration Profiling',
        'AEO/GEO Indexing Readiness Assessment',
        'Custom Strategic Scope Roadmap',
      ],
    },
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'custom-build',
    industry: '',
    budget: '',
    timeline: '1-month',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="pt-24 bg-black text-white selection:bg-[#ff5500] selection:text-white">
      {/* ── HERO ── */}
      <section className="relative py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 overflow-hidden">
        <AtmosphericMeshBackground variant="cta" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 // Direct Studio Access</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] text-white">
              Commission Your <span className="block text-white/30">Next-Gen Platform.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-xl font-normal max-w-2xl leading-relaxed">
              Whether you want priority access to our upcoming signature templates or an end-to-end bespoke platform, share your requirements below for a rapid feasibility assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM & STUDIO CONTACT DESK ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black border-b border-white/10 relative overflow-hidden">
        <AtmosphericMeshBackground variant="problem" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="glass-apple rounded-3xl border border-[#ff5500]/40 p-10 sm:p-14 text-center space-y-8 shadow-[0_0_50px_rgba(255,85,0,0.15)] animate-border-breathe">
                  <div className="w-16 h-16 rounded-2xl bg-[#ff5500] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                      Brief Ingested.
                    </h2>
                    <p className="text-white/70 text-base font-normal max-w-md mx-auto">
                      Our lead design architect will evaluate your specifications and reply with milestone scopes within 24 hours.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl glass-apple border border-white/10 text-left font-mono text-xs sm:text-sm space-y-2 max-w-xs mx-auto text-white/80">
                    <div className="flex justify-between">
                      <span className="text-white/50">Client:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Email:</span>
                      <span className="truncate max-w-[150px]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Tier:</span>
                      <span className="capitalize text-[#ff5500] font-bold">
                        {formData.projectType.replace(/-/g, ' ')}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all cursor-pointer shadow-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-apple rounded-3xl p-8 sm:p-12 space-y-8 border border-white/10">
                  <div className="border-l-2 border-[#ff5500] pl-4 py-1 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                      <span>02 // Project Directives</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      Project Directives.
                    </h2>
                  </div>

                  <div className="space-y-5 font-mono text-xs sm:text-sm">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                          Client / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan / Studio Apex"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                          Direct Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@studioapex.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone & Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                          Phone / WhatsApp <span className="text-white/40 lowercase font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                          Industry / Domain
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Fintech, Luxury E-Com, AI SaaS"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Engagement Tier & Target Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                          Engagement Tier *
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white focus:outline-none transition-colors text-sm"
                        >
                          <option value="template-waitlist">Signature Template (Coming Soon · Early Access, {formatPrice('₹14,999', '$179')})</option>
                          <option value="custom-build">Full Custom Bespoke Build (Starting at {formatPrice('₹44,999', '$549')})</option>
                          <option value="enterprise">Enterprise Platform (Starting at {formatPrice('₹1,19,999+', '$1,499+')})</option>
                          <option value="consultation">Strategic Advisory / Undecided</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                          Target Budget Band
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white focus:outline-none transition-colors text-sm"
                        >
                          {currency === 'INR' ? (
                            <>
                              <option value="₹14,999">₹14,999 (Signature Template Waitlist)</option>
                              <option value="₹44,999–₹75,000">₹44,999–₹75,000 (Custom Build)</option>
                              <option value="₹75,000–₹1,20,000">₹75,000–₹1,20,000 (Advanced Bespoke)</option>
                              <option value="₹1,20,000+">₹1,20,000+ (Enterprise Platform)</option>
                            </>
                          ) : (
                            <>
                              <option value="$179">$179 (Signature Template Waitlist)</option>
                              <option value="$549–$950">$549–$950 (Custom Build)</option>
                              <option value="$950–$1,500">$950–$1,500 (Advanced Bespoke)</option>
                              <option value="$1,500+">$1,500+ (Enterprise Platform)</option>
                            </>
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Timeline Priority */}
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                        Launch Horizon
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { value: '48h', label: 'Express (48h)' },
                          { value: '1-month', label: '< 1 Month' },
                          { value: '2-3-months', label: '2–3 Months' },
                          { value: 'flexible', label: 'Flexible' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: opt.value })}
                            className={`py-3 px-3 text-xs font-bold tracking-wider rounded-full border transition-all cursor-pointer ${
                              formData.timeline === opt.value
                                ? 'bg-[#ff5500] text-white border-[#ff5500] shadow-[0_0_20px_rgba(255,85,0,0.35)]'
                                : 'glass-apple text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Vision notes */}
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block font-mono">
                        Directives & Scope Notes
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you are looking to build — reference websites, target conversions, or specific pain points of your current setup..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors resize-none text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-5 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold text-xs sm:text-sm tracking-wider transition-all rounded-full flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 shadow-[0_0_30px_rgba(255,85,0,0.35)]"
                  >
                    {submitting ? (
                      <span>Scheduling Project Ingest...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Studio Desk Column with Dynamic Estimator */}
            <div className="lg:col-span-5 space-y-6">
              {/* Dynamic Scope & Horizon Estimator */}
              {(() => {
                const currentType = (formData.projectType as keyof typeof ESTIMATOR_DATA) in ESTIMATOR_DATA 
                  ? (formData.projectType as keyof typeof ESTIMATOR_DATA)
                  : 'custom-build';
                const est = ESTIMATOR_DATA[currentType];
                return (
                  <div className="rounded-3xl spotlight-card glass-apple-amber p-8 space-y-5 border border-[#ff5500]/40 shadow-[0_0_40px_rgba(255,85,0,0.15)] animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-wider text-[#ff5500] font-bold">
                          Scope & Timeline Estimator
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                        Live Calibration
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono text-white/50">Selected Architecture</div>
                      <h4 className="text-2xl font-black text-white tracking-tight">
                        {est.tierName}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-1">
                      <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                        <div className="text-white/40 text-[11px]">Turnaround Horizon</div>
                        <div className="text-white font-bold text-sm">{est.turnaround}</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                        <div className="text-white/40 text-[11px]">Expected Fee</div>
                        <div className="text-[#ff5500] font-bold text-sm">{est.budgetLabel}</div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                        Included In This Milestone:
                      </div>
                      <div className="space-y-2">
                        {est.inclusions.map((inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-mono text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="glass-apple rounded-3xl p-8 space-y-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <span className="text-xs font-mono tracking-wider text-white/60">
                    Studio Status // Online
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Guaranteed 24h Response
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
                  Every inquiry is reviewed directly by our core creative leads. No automated marketing loops.
                </p>
              </div>

              <div className="glass-apple rounded-3xl p-8 space-y-5 border border-white/10">
                <span className="text-xs font-mono tracking-wider text-white/50 block">
                  Studio Channels
                </span>
                <div className="space-y-4 text-xs sm:text-sm font-mono">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-white/90">hello@kritsite.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-white/90">Mon–Sat // 10:00 – 19:00 IST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-white/90">Serving Clients Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl glass-apple-amber p-8 space-y-3 relative overflow-hidden shadow-[0_0_40px_rgba(255,85,0,0.15)] animate-border-breathe">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-[#ff5500] font-bold">
                    KritMedia Network
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">Need Video As Well?</h4>
                <p className="text-sm text-white/70 font-normal leading-relaxed">
                  Check out <strong>KritVideo</strong> for high-retention video post-production, commercial editing, and ACES color grading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-black relative overflow-hidden">
        <AtmosphericMeshBackground variant="proof" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
              <span>03 // Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Common Inquiry Questions.
            </h2>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, idx) => (
              <div key={idx} className="glass-apple rounded-2xl p-6 space-y-2 border border-white/10 hover:border-white/20 transition-all">
                <h4 className="text-base sm:text-lg font-bold text-white/95">{faq.q}</h4>
                <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
