import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#08080a] relative flex items-center justify-center px-6 pt-24 overflow-hidden">
      <AtmosphericMeshBackground variant="cta" />

      <div className="relative z-10 text-center space-y-10 max-w-2xl">
        <div className="space-y-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#ff5500] font-bold block">
            00 // System Code 404
          </span>
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-white/10 select-none">404</h1>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
            Page Not Found. <span className="text-white/30 block">Keep Scrolling.</span>
          </h2>
          <p className="text-white/60 text-base font-light max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist. But a world-class website does — let's build yours.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-bold text-xs tracking-wider rounded-full transition-all shadow-[0_0_25px_rgba(255,85,0,0.35)] flex items-center gap-2"
          >
            Go Home <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 glass-apple border border-white/20 text-white font-bold text-xs tracking-wider rounded-full hover:border-white/40 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
