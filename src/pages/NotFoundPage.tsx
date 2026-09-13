import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 pt-24">
      <div className="text-center space-y-10 max-w-2xl">
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff5500]">Error 404</span>
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-white/10">404</h1>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">
            PAGE NOT FOUND. <span className="text-white/30">KEEP SCROLLING.</span>
          </h2>
          <p className="text-white/50 text-base font-light">
            The page you're looking for doesn't exist. But a world-class website does — let's build yours.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="px-8 py-4 bg-[#ff5500] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#e64d00] transition-all flex items-center gap-2">
            Go Home <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/contact" className="px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:border-white transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
