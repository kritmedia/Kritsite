import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Globe, Mail, Clock, ArrowUpRight, 
  Sparkles, Sliders, ShieldCheck, Zap
} from 'lucide-react';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';

const CONTACT_FAQS = [
  { 
    q: 'How quickly does the studio respond to new project briefs?', 
    a: 'Every inquiry receives a comprehensive reply with initial timeline estimates within 24 hours (or under 4 hours during IST business hours).' 
  },
  { 
    q: 'Can the studio work with international clients outside India?', 
    a: 'Yes. Over 45% of our client base spans the United States, UK, UAE, and Europe. Invoices and payments are fully supported in USD and INR.' 
  },
  { 
    q: 'What is required from our side to begin the engagement?', 
    a: 'Your brand assets (logo/colors if existing), target customer description, and rough page list. For Custom builds, we write the copy and plan the content architecture for you.' 
  },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'custom-build',
    industry: '',
    budget: '₹49,999 / $599 (Custom Build)',
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
    <div className="pt-24 bg-[#08080a] text-white">
      {/* ── HERO ── */}
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black border-b border-white/10 overflow-hidden">
        <AtmosphericMeshBackground variant="cta" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-6 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#ff5500] font-bold block">
              01 // DIRECT STUDIO ACCESS
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.92] text-white">
              COMMISSION YOUR <span className="block text-white/30">NEXT-GEN PLATFORM.</span>
            </h1>
            <p className="text-white/70 text-base sm:text-xl font-light max-w-2xl leading-relaxed">
              Whether you need a signature template deployed in 48 hours or an end-to-end bespoke platform, share your requirements below for a rapid feasibility assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM & STUDIO CONTACT DESK ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#08080a] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="glass-apple rounded-3xl border border-[#ff5500]/40 p-10 sm:p-14 text-center space-y-8 shadow-[0_0_50px_rgba(255,85,0,0.15)]">
                  <div className="w-16 h-16 rounded-2xl bg-[#ff5500] flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                      BRIEF INGESTED.
                    </h2>
                    <p className="text-white/60 text-base font-light max-w-md mx-auto">
                      Our lead design architect will evaluate your specifications and reply with milestone scopes within 24 hours.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl glass-apple border border-white/10 text-left font-mono text-xs space-y-2 max-w-xs mx-auto text-white/80">
                    <div className="flex justify-between">
                      <span className="text-white/40">CLIENT:</span>
                      <span>{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">EMAIL:</span>
                      <span className="truncate max-w-[150px]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">TIER:</span>
                      <span className="uppercase text-[#ff5500] font-bold">
                        {formData.projectType.replace(/-/g, ' ')}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold uppercase text-xs tracking-widest rounded-full transition-all cursor-pointer shadow-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-apple rounded-3xl p-8 sm:p-12 space-y-8 border border-white/10">
                  <div className="border-l-2 border-[#ff5500] pl-4 py-1 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#ff5500] font-bold">
                      02 // PROJECT DIRECTIVES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                      PROJECT DIRECTIVES.
                    </h2>
                  </div>

                  <div className="space-y-5 font-mono text-xs">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                          Client / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Morgan / Studio Apex"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                          Direct Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@studioapex.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Industry */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                          Phone / WhatsApp <span className="text-white/30 lowercase">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                          Industry / Domain
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Fintech, Luxury E-Com, AI SaaS"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Engagement Tier & Target Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                          Engagement Tier *
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white focus:outline-none transition-colors"
                        >
                          <option value="template-launch">Signature Template Launch (1–2 Days, ₹14,999)</option>
                          <option value="custom-build">Full Custom Build (2–3 Weeks, ₹49,999)</option>
                          <option value="enterprise">Enterprise Platform (4–8 Weeks, ₹1,49,999+)</option>
                          <option value="consultation">Strategic Advisory / Undecided</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                          Target Budget Band
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3.5 input-apple rounded-xl text-white focus:outline-none transition-colors"
                        >
                          <option value="₹14,999 / $179">₹14,999 / $179 (Template Launch)</option>
                          <option value="₹49,999 / $599 (Custom Build)">₹49,999 / $599 (Custom Build)</option>
                          <option value="₹1,00,000–₹2,00,000 / $1,200–$2,400">₹1,00,000–₹2,00,000 / $1,200–$2,400</option>
                          <option value="₹2,00,000+ / $2,500+">₹2,00,000+ / $2,500+ (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    {/* Timeline Priority */}
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
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
                            className={`py-3 px-3 text-[10px] font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
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
                      <label className="text-[10px] uppercase font-bold text-white/70 tracking-wider block">
                        Directives & Scope Notes
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you are looking to build — reference websites, target conversions, or specific pain points of your current setup..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3.5 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-5 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold uppercase text-xs tracking-widest transition-all rounded-full flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 shadow-[0_0_30px_rgba(255,85,0,0.35)]"
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

            {/* Studio Desk Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-apple rounded-3xl p-8 space-y-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                    Studio Status // Online
                  </span>
                </div>
                <h3 className="text-xl font-bold uppercase text-white">
                  Guaranteed 24h Response
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Every inquiry is reviewed directly by our core creative leads. No automated marketing loops.
                </p>
              </div>

              <div className="glass-apple rounded-3xl p-8 space-y-5 border border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                  Studio Channels
                </span>
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-white/80">hello@kritsite.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-white/80">Mon–Sat // 10:00 – 19:00 IST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#ff5500]" />
                    <span className="text-white/80">Serving Clients Worldwide</span>
                  </div>
                </div>
              </div>

              <div className="glass-apple-amber rounded-3xl p-8 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">
                    KritMedia Network
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </div>
                <h4 className="text-base font-bold uppercase text-white">Need Video As Well?</h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Check out <strong>KritVideo</strong> for high-retention video post-production, commercial editing, and ACES color grading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 py-2 space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#ff5500] font-bold block">
              03 // COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white">
              COMMON INQUIRY QUESTIONS.
            </h2>
          </div>

          <div className="space-y-4">
            {CONTACT_FAQS.map((faq, idx) => (
              <div key={idx} className="glass-apple rounded-2xl p-6 space-y-2 border border-white/10 hover:border-white/20 transition-all">
                <h4 className="text-sm font-bold uppercase text-white/90">{faq.q}</h4>
                <p className="text-xs text-white/60 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
