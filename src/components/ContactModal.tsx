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
              <h3 className="text-3xl font-bold tracking-tight">Request Received.</h3>
              <p className="text-white/70 text-base max-w-md mx-auto font-normal leading-relaxed">
                We'll review your project details and get back to you within 24 hours with a clear plan and honest pricing.
              </p>
            </div>
            <div className="p-5 rounded-2xl glass-apple border border-white/15 text-left font-mono text-xs sm:text-sm space-y-2 max-w-md mx-auto text-white/80">
              <div className="flex justify-between"><span className="text-white/50">NAME:</span><span>{formData.name}</span></div>
              <div className="flex justify-between"><span className="text-white/50">PROJECT:</span><span className="capitalize text-[#ff5500] font-bold">{formData.projectType.replace(/-/g, ' ')}</span></div>
              <div className="flex justify-between"><span className="text-white/50">TIMELINE:</span><span className="text-white font-bold">{formData.timeline}</span></div>
            </div>
            <button 
              onClick={handleClose} 
              className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-colors cursor-pointer shadow-lg"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5 border-l-2 border-[#ff5500] pl-4 py-1">
              <span className="text-xs font-mono font-bold tracking-wider text-[#ff5500] block">01 // Project Intake</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Start Your Project.</h3>
              <p className="text-sm text-white/70 font-normal">Tell us about what you need — we'll come back with a clear plan.</p>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block">Your Name / Brand</label>
                  <input type="text" required placeholder="e.g. Ananya Mehta" value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block">Email Address</label>
                  <input type="email" required placeholder="hello@yourbrand.com" value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block">Project Type</label>
                  <select value={formData.projectType} onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white focus:outline-none transition-colors text-sm" >
                    <option value="template-waitlist">Signature Template (Coming Soon · Early Access, {formatPrice('₹14,999', '$179')})</option>
                    <option value="custom-build">Custom Bespoke Build (Starting at {formatPrice('₹44,999', '$549')})</option>
                    <option value="enterprise">Enterprise Custom (Starting at {formatPrice('₹1,19,999+', '$1,499+')})</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block">Timeline</label>
                  <select value={formData.timeline} onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 input-apple rounded-xl text-white focus:outline-none transition-colors text-sm" >
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="2-3-months">2–3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block">Business / Industry</label>
                <input type="text" placeholder="e.g. SaaS startup, e-commerce brand, coaching business..." value={formData.businessType}
                  onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors text-sm" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-white/85 tracking-wide block">Tell Us About Your Project</label>
                <textarea rows={3} placeholder="What do you sell, who is your customer, what should the website achieve..."
                  value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 input-apple rounded-xl text-white placeholder:text-white/25 focus:outline-none transition-colors resize-none text-sm" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}
              className="w-full py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold text-xs sm:text-sm tracking-wider transition-all rounded-full shadow-[0_0_25px_rgba(255,85,0,0.35)] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50">
              {isSubmitting ? <span>Sending...</span> : <><span>Submit Project Request</span><ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
