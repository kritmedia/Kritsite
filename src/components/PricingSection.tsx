import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AtmosphericMeshBackground } from './AtmosphericMeshBackground';
import { useCurrency } from '../context/CurrencyContext';

interface PricingSectionProps {
  onOpenContact: (planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  const { currency, formatPrice, toggleCurrency } = useCurrency();

  return (
    <section
      id="services"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-black border-t border-white/10 relative overflow-hidden select-none"
    >
      {/* ── Atmospheric Smoky Mesh Background in KritSite Brand Colors ── */}
      <AtmosphericMeshBackground variant="services" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6 sm:space-y-8">
        {/* Currency Switcher Pill */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={toggleCurrency}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-xl text-xs font-mono tracking-wider text-white/80 hover:text-white transition-all cursor-pointer shadow-lg hover:border-white/40"
            title="Switch currency viewing mode"
          >
            <span className={currency === 'INR' ? 'text-[#ff5500] font-bold' : 'text-white/40'}>₹ INR</span>
            <span className="text-white/20">/</span>
            <span className={currency === 'USD' ? 'text-[#ff5500] font-bold' : 'text-white/40'}>$ USD</span>
          </button>
        </div>

        {/* ── 3-Column Minimal Split Layout Frame ── */}
        <div className="rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#08080a]/95 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* ── COLUMN 1: INTRO & VALUE PROPOSITION ── */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-12">
              {/* Vertical Orange Line + Story Narrative */}
              <div className="border-l-2 border-[#ff5500] pl-6 sm:pl-8 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#ff5500]">
                  <span>04 // Services</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-[1.08]">
                  Choose Your<br />Starting Point.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-sm pt-2">
                  <p>A proven foundation or a completely blank canvas.</p>
                  <p>Either way, we build the website your business has actually grown into.</p>
                </div>
              </div>

              {/* Bottom Explore Services Link */}
              <div className="pt-6 sm:pt-10">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#ff5500] hover:text-white transition-colors group cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* ── COLUMN 2: 01 TEMPLATE LAUNCH ── */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
              <div className="space-y-6">
                {/* Monospace Tag Header */}
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-[#ff5500]">01</div>
                  <div className="text-xs font-mono tracking-wider text-white/60">
                    Template Launch
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-black tracking-tight text-white leading-tight">
                  Launch.<br />Look Sharp.<br />Move Faster.
                </h3>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
                  A premium website, customized to your brand. Live in 48 hours.
                </p>

                {/* Pricing */}
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white pt-1">
                  {formatPrice('₹14,999', '$179')}
                </div>

                {/* CTA Link / Button */}
                <div className="pt-1">
                  <button
                    onClick={() => onOpenContact('template-launch')}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold tracking-wide text-[#ff5500] hover:text-white transition-colors group cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Visual Preview (Angled 3D Fanned Template Cards) */}
              <div className="pt-4 mt-auto relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="/images/split_template_launch.jpg?v=2"
                    alt="48H Template Launch Preview"
                    className="w-full aspect-[3/2] object-cover block rounded-2xl"
                    loading="eager"
                  />
                  {/* Subtle Orange Horizon Glow Reflection */}
                  <div className="absolute -bottom-4 inset-x-8 h-10 bg-[#ff5500]/20 blur-xl pointer-events-none" />
                </div>
              </div>
            </div>

            {/* ── COLUMN 3: 02 CUSTOM WEBSITE ── */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
              <div className="space-y-6">
                {/* Monospace Tag Header */}
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-[#ff5500]">02</div>
                  <div className="text-xs font-mono tracking-wider text-white/60">
                    Custom Website
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-black tracking-tight text-white leading-tight">
                  Built For<br />What's Next.
                </h3>

                {/* Subtitle / Description */}
                <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed">
                  A fully custom website designed around your goals, your brand and your audience.
                </p>

                {/* Pricing */}
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white pt-1">
                  {formatPrice('₹49,999', '$599')}
                </div>

                {/* CTA Link / Button */}
                <div className="pt-1">
                  <button
                    onClick={() => onOpenContact('custom-build')}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold tracking-wide text-[#ff5500] hover:text-white transition-colors group cursor-pointer"
                  >
                    <span>Build Custom</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Visual Preview (Cinematic Mountain & Glass Interface) */}
              <div className="pt-4 mt-auto relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="/images/split_custom_website.jpg?v=2"
                    alt="Custom Website Architecture"
                    className="w-full aspect-[3/2] object-cover block rounded-2xl"
                    loading="eager"
                  />
                  {/* Subtle Volcanic Magma Orange Glow */}
                  <div className="absolute -bottom-4 inset-x-8 h-10 bg-[#ff5500]/25 blur-xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
