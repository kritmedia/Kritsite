import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Globe } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, selectedPlanId }) => {
  const { formatPrice } = useCurrency();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: selectedPlanId || 'custom-build',
    businessType: '',
    timeline: '1-month',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 900);
  };

  const handleClose = () => { setSubmitted(false); onClose(); };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-apple border border-white/20 w-full max-w-xl p-6 sm:p-10 relative shadow-2xl my-8 text-white rounded-3xl">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2.5 glass-apple rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#ff5500] flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tight">REQUEST RECEIVED.</h3>
              <p className="text-white/60 text-sm max-w-md mx-auto font-light leading-relaxed">
                We'll review your project details and get back to you within 24 hours with a clear plan and honest pricing.
              </p>
            </div>
            <div className="p-5 rounded-2xl glass-apple border border-white/15 text-left font-mono text-xs space-y-2 max-w-md mx-auto text-white/80">
              <div className="flex justify-between"><span className="text-white/40">NAME:</span><span>{formData.name}</span></div>
              <div className="flex justify-between"><span className="text-white/40">PROJECT:</span><span className="uppercase text-[#ff5500] font-bold">{formData.projectType.replace(/-/g, ' ')}</span></div>
              <div className="flex justify-between"><span className="text-white/40">TIMELINE:</span><span className="text-white font-bold">{formData.timeline}</span></div>
            </div>
            <button 
              onClick={handleClose} 
              className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold uppercase text-xs tracking-widest rounded-full transition-colors cursor-pointer shadow-lg"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5 border-l-2 border-[#ff5500] pl-4 py-1">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#ff5500] block">01 // PROJECT INTAKE</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">START YOUR PROJECT.</h3>
              <p className="text-xs text-white/50 font-light">Tell us about what you need — we'll come back with a clear plan.</p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Your Name / Brand</label>
                  <input type="text" required placeholder="e.g. Ananya Mehta" value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Email Address</label>
                  <input type="email" required placeholder="hello@yourbrand.com" value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Project Type</label>
                  <select value={formData.projectType} onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white focus:outline-none transition-colors">
                    <option value="template-launch">Template Launch (1–2 Days, {formatPrice('₹14,999', '$179')})</option>
                    <option value="custom-build">Custom Build (2–3 Weeks, {formatPrice('₹49,999', '$599')})</option>
                    <option value="enterprise">Enterprise Custom ({formatPrice('₹1,49,999+', '$1,799+')})</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Timeline</label>
                  <select value={formData.timeline} onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white focus:outline-none transition-colors">
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="2-3-months">2–3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Business / Industry</label>
                <input type="text" placeholder="e.g. SaaS startup, e-commerce brand, coaching business..." value={formData.businessType}
                  onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Tell Us About Your Project</label>
                <textarea rows={3} placeholder="What do you sell, who is your customer, what should the website achieve..."
                  value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors resize-none" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}
              className="w-full py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold uppercase text-xs tracking-widest transition-all rounded-full shadow-[0_0_25px_rgba(255,85,0,0.35)] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50">
              {isSubmitting ? <span>Sending...</span> : <><span>Submit Project Request</span><ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
