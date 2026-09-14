import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AtmosphericMeshBackground } from '../components/AtmosphericMeshBackground';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center px-6 pt-24 overflow-hidden selection:bg-[#ff5500] selection:text-white">
      <AtmosphericMeshBackground variant="cta" />

      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-wider text-[#ff5500]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
            <span>00 // System Code 404</span>
          </div>
          <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-white/10 select-none">404</h1>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Page Not Found. <span className="text-white/30 block">Keep Scrolling.</span>
          </h2>
          <p className="text-white/75 text-base sm:text-lg font-normal max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist. But a world-class website does — let's build yours.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all shadow-[0_0_25px_rgba(255,85,0,0.35)] hover:scale-[1.02] flex items-center gap-2"
          >
            Go Home <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 glass-apple glass-apple-hover text-white font-bold text-xs sm:text-sm tracking-wider rounded-full transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
