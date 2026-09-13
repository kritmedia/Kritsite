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
            <p className="text-xs sm:text-sm text-white/40 max-w-xs font-light leading-relaxed">
              Design-first websites that convert. SEO, AEO & GEO optimized. Templates live in 1–2 days, or fully custom. A KritMedia studio.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 block font-bold">Services</span>
              <div className="space-y-3">
                <Link to="/services" className="block text-white/50 hover:text-white transition-colors">Template Launch</Link>
                <Link to="/services" className="block text-white/50 hover:text-white transition-colors">Custom Build</Link>
                <Link to="/services" className="block text-white/50 hover:text-white transition-colors">Enterprise</Link>
                <Link to="/services" className="block text-white/50 hover:text-white transition-colors">SEO + AEO + GEO</Link>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 block font-bold">Templates</span>
              <div className="space-y-3">
                <Link to="/templates" className="block text-white/50 hover:text-white transition-colors">Obsidian (SaaS)</Link>
                <Link to="/templates" className="block text-white/50 hover:text-white transition-colors">Studio (Agency)</Link>
                <Link to="/templates" className="block text-white/50 hover:text-white transition-colors">Luxe (E-Commerce)</Link>
                <Link to="/templates" className="block text-white/50 hover:text-white transition-colors">Persona (Brand)</Link>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 block font-bold">Company</span>
              <div className="space-y-3">
                <Link to="/about" className="block text-white/50 hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="block text-white/50 hover:text-white transition-colors">Contact</Link>
                <a href="https://kritvideo.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white/50 hover:text-white transition-colors">
                  KritVideo <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/30 block font-bold">Start</span>
              <button
                onClick={onOpenContact}
                className="block px-5 py-3 bg-[#ff5500] text-white font-bold uppercase text-[10px] tracking-widest hover:bg-[#e64d00] transition-all cursor-pointer text-left"
              >
                Start a Project →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs text-white/30 font-mono">
          <div>© {new Date().getFullYear()} KRITSITE. A KRITMEDIA STUDIO. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6 uppercase tracking-wider text-[11px]">
            <span className="text-white/20">Privacy Policy</span>
            <span className="text-white/20">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
