import React from 'react';

export const WebsiteAutopsy: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] mx-auto py-10 sm:py-14 px-4 sm:px-16 select-none">
      {/* ── 01. Browser Mockup Window (Dark Minimalist Slate) ── */}
      <div className="relative bg-[#0c0d12] border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300">
        
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-white/[0.08]">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444]" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b]/50" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#10b981]/50" />
          </div>

          {/* Faux Address Pill */}
          <div className="h-4 sm:h-5 w-40 sm:w-56 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center px-2">
            <div className="w-16 sm:w-28 h-1.5 bg-white/10 rounded-full" />
          </div>

          {/* Faux Actions */}
          <div className="flex items-center gap-1.5 opacity-30">
            <div className="w-2 h-2 rounded-full bg-white/50" />
            <div className="w-4 h-2 rounded-full bg-white/40" />
          </div>
        </div>

        {/* Browser Body Content Area */}
        <div className="pt-6 sm:pt-8 space-y-6 sm:space-y-7">
          {/* Top Section: Dull Headline & Slow Segmented Spinner */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3.5 flex-1">
              <div className="text-white/85 text-base sm:text-xl font-normal tracking-tight">
                Welcome to our website
              </div>
              <div className="space-y-2 pt-1">
                <div className="h-2 w-48 sm:w-56 bg-white/10 rounded-full" />
                <div className="h-2 w-36 sm:w-44 bg-white/[0.06] rounded-full" />
                <div className="h-2 w-24 sm:w-28 bg-white/[0.04] rounded-full" />
              </div>
            </div>

            {/* Slow Segmented Loading Indicator Box */}
            <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                {/* 12-Blade Segmented Wheel Loading Spinner */}
                <svg
                  className="w-full h-full animate-spin text-white/50"
                  style={{ animationDuration: '2.5s' }}
                  viewBox="0 0 24 24"
                >
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="5.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      transform={`rotate(${i * 30} 12 12)`}
                      opacity={(i + 1) / 12}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Section Divider Line */}
          <div className="border-t border-white/[0.08]" />

          {/* Bottom Section: Generic Placeholder Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {/* Generic Card 1 */}
            <div className="space-y-3">
              <div className="h-24 sm:h-28 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                {/* Silhouette mountains + sun icon */}
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white/15"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <circle cx="24" cy="14" r="3.5" opacity="0.8" />
                  <path
                    d="M 6 36 L 20 18 L 30 31 L 36 24 L 44 36 Z"
                    opacity="0.6"
                  />
                  <path
                    d="M 4 38 L 44 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-28 sm:w-32 bg-white/10 rounded-full" />
                <div className="h-2 w-16 sm:w-20 bg-white/[0.05] rounded-full" />
              </div>
            </div>

            {/* Generic Card 2 */}
            <div className="space-y-3">
              <div className="h-24 sm:h-28 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                {/* Silhouette mountains + sun icon */}
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white/15"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <circle cx="24" cy="14" r="3.5" opacity="0.8" />
                  <path
                    d="M 6 36 L 20 18 L 30 31 L 36 24 L 44 36 Z"
                    opacity="0.6"
                  />
                  <path
                    d="M 4 38 L 44 38"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-28 sm:w-32 bg-white/10 rounded-full" />
                <div className="h-2 w-16 sm:w-20 bg-white/[0.05] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. Five Hand-Drawn Orange Annotations with Curved Pointers ── */}

      {/* 1. Weak Headline (Top-Left) */}
      <div className="absolute top-2 sm:top-6 -left-1 sm:-left-14 flex flex-col items-end rotate-[-6deg] pointer-events-none">
        <div className="font-handwritten text-[#ff5500] font-bold text-sm sm:text-base tracking-wide leading-none drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)] text-right">
          <span>Weak</span>
          <span className="block mt-0.5">Headline</span>
        </div>
        <svg
          className="w-10 h-8 sm:w-13 sm:h-10 text-[#ff5500] translate-x-4 sm:translate-x-6 translate-y-0.5"
          viewBox="0 0 52 40"
          fill="none"
        >
          <path
            d="M 4 4 Q 26 10, 46 32"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 36 32 L 47 32 L 46 21"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 2. Slow Loading (Top-Right) */}
      <div className="absolute top-9 sm:top-12 -right-1 sm:-right-16 flex items-start gap-1 sm:gap-2 rotate-[4deg] pointer-events-none">
        <svg
          className="w-10 h-9 sm:w-13 sm:h-10 text-[#ff5500] translate-y-1 sm:translate-y-2"
          viewBox="0 0 52 40"
          fill="none"
        >
          <path
            d="M 48 10 Q 24 16, 6 22"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 18 14 L 6 22 L 18 29"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="font-handwritten text-[#ff5500] font-bold text-sm sm:text-base tracking-wide leading-none drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
          <span>Slow</span>
          <span className="block mt-0.5">Loading</span>
        </div>
      </div>

      {/* 3. Generic Design (Mid-Left) */}
      <div className="absolute top-[58%] sm:top-[56%] -left-1 sm:-left-16 flex flex-col items-end rotate-[-5deg] pointer-events-none">
        <div className="font-handwritten text-[#ff5500] font-bold text-sm sm:text-base tracking-wide leading-none drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)] text-right">
          <span>Generic</span>
          <span className="block mt-0.5">Design</span>
        </div>
        <svg
          className="w-11 h-8 sm:w-14 sm:h-10 text-[#ff5500] translate-x-5 sm:translate-x-7 translate-y-0.5"
          viewBox="0 0 56 40"
          fill="none"
        >
          <path
            d="M 4 4 Q 28 14, 50 32"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 39 32 L 51 32 L 49 21"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 4. Doesn't Explain Value (Mid-Right) */}
      <div className="absolute top-[52%] sm:top-[50%] -right-1 sm:-right-18 flex items-center gap-1 sm:gap-2 rotate-[2deg] pointer-events-none">
        <svg
          className="w-10 h-8 sm:w-13 sm:h-9 text-[#ff5500]"
          viewBox="0 0 52 36"
          fill="none"
        >
          <path
            d="M 48 18 Q 26 18, 6 18"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 17 9 L 6 18 L 17 27"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="font-handwritten text-[#ff5500] font-bold text-sm sm:text-base tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
          <span>Doesn't</span>
          <span className="block">Explain</span>
          <span className="block">Value</span>
        </div>
      </div>

      {/* 5. Hard to Find on Search (Bottom-Right) */}
      <div className="absolute bottom-2 sm:bottom-4 -right-1 sm:-right-18 flex items-center gap-1 sm:gap-2 rotate-[-2deg] pointer-events-none">
        <svg
          className="w-10 h-8 sm:w-13 sm:h-9 text-[#ff5500]"
          viewBox="0 0 52 36"
          fill="none"
        >
          <path
            d="M 48 24 Q 26 24, 6 16"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 16 9 L 6 16 L 18 24"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="font-handwritten text-[#ff5500] font-bold text-sm sm:text-base tracking-wide leading-tight drop-shadow-[0_2px_10px_rgba(255,85,0,0.6)]">
          <span>Hard to Find</span>
          <span className="block">on Search</span>
        </div>
      </div>
    </div>
  );
};
