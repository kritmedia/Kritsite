import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowUpRight, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6 sm:px-8 lg:px-12 text-white/50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="KritSite Logo"
                className="w-11 h-11 rounded-xl object-contain shadow-[0_0_20px_rgba(255,85,0,0.35)]"
              />
              <span className="text-2xl font-black tracking-tight text-white">
                Krit<span className="text-[#ff5500]">Site</span>
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-xs font-light leading-relaxed">
              Design-first websites that convert. SEO, AEO & GEO optimized. Signature frameworks in incubation · Custom bespoke platforms. A KritMedia studio.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/[0.08] transition-all">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-wider text-white/60 block font-bold">Services</span>
              <div className="space-y-3">
                <Link to="/services" className="block text-white/60 hover:text-white transition-colors">Custom Bespoke</Link>
                <Link to="/services" className="block text-white/60 hover:text-white transition-colors">Enterprise Platform</Link>
                <Link to="/services" className="block text-white/60 hover:text-white transition-colors">AEO / GEO Indexing</Link>
                <Link to="/services" className="block text-white/60 hover:text-white transition-colors">Performance Audit</Link>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-wider text-white/60 block font-bold">Templates</span>
              <div className="space-y-3">
                <Link to="/templates" className="block text-white/60 hover:text-white transition-colors">Framework Teaser</Link>
                <Link to="/templates" className="block text-white/60 hover:text-white transition-colors">SaaS & DevTools (Soon)</Link>
                <Link to="/templates" className="block text-white/60 hover:text-white transition-colors">Creative Studio (Soon)</Link>
                <Link to="/templates" className="block text-white/60 hover:text-white transition-colors">Join Early Waitlist</Link>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-wider text-white/60 block font-bold">Company</span>
              <div className="space-y-3">
                <Link to="/about" className="block text-white/60 hover:text-white transition-colors">About Studio</Link>
                <Link to="/contact" className="block text-white/60 hover:text-white transition-colors">Direct Desk</Link>
                <a href="https://kritvideo.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white/60 hover:text-white transition-colors">
                  KritVideo <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-wider text-white/60 block font-bold">Initiate</span>
              <button
                onClick={onOpenContact}
                className="block w-full sm:w-auto px-6 py-3 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold text-xs tracking-wider rounded-full shadow-[0_0_20px_rgba(255,85,0,0.35)] transition-all cursor-pointer text-center"
              >
                Start a Project →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs sm:text-sm text-white/40 font-mono">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} KritSite. A KritMedia Studio.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline text-white/50">Global Boutique Engineering</span>
          </div>
          
          <div className="flex items-center gap-6 tracking-wider">
            <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
