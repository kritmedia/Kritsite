import React, { useEffect, useRef } from 'react';

interface AtmosphericMeshBackgroundProps {
  variant?: 'problem' | 'services' | 'signature' | 'proof' | 'cta' | 'default';
  hasBorderFrame?: boolean;
  className?: string;
}

export const AtmosphericMeshBackground: React.FC<AtmosphericMeshBackgroundProps> = ({
  variant = 'default',
  hasBorderFrame = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let targetOffset = 0;
    let currentOffset = 0;
    let targetScale = 1;
    let currentScale = 1;
    let animationFrameId: number;
    let isTicking = true;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight / 2 - (rect.top + rect.height / 2)) / (viewportHeight + rect.height);
        targetOffset = progress * 60; // Smooth parallax drift
        targetScale = 1 + Math.abs(progress) * 0.05;
      }
    };

    const renderLoop = () => {
      const LERP = 0.08;
      currentOffset += (targetOffset - currentOffset) * LERP;
      currentScale += (targetScale - currentScale) * LERP;

      if (scrollLayerRef.current) {
        scrollLayerRef.current.style.transform = `translate3d(0, ${currentOffset}px, 0) scale(${currentScale})`;
      }

      if (isTicking) {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      isTicking = false;
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Smoky fluid pattern configuration tailored for each section in KritSite brand colors
  const getConfig = () => {
    switch (variant) {
      case 'problem':
        return {
          image: '/images/section3_smoke_orange_bg_hd.png',
          alt: 'Atmospheric dark smoky silk background in KritSite brand colors',
          animation: 'animate-smoke-drift',
          opacity: 'opacity-45',
          transform: 'scale-105',
          extraOverlay: null,
        };
      case 'services':
        return {
          image: '/images/section4_smoke_wave_hd.png',
          alt: 'Atmospheric dark smoky silk wave across pricing pathways',
          animation: 'animate-smoke-drift-reverse',
          opacity: 'opacity-40',
          transform: 'scale-105',
          extraOverlay: (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff5500]/06 via-transparent to-transparent pointer-events-none" />
          ),
        };
      case 'signature':
        return {
          image: '/images/section5_smoke_pillars_hd.png',
          alt: 'Atmospheric dark smoky silk plume behind signature pillars',
          animation: 'animate-smoke-drift',
          opacity: 'opacity-45',
          transform: 'scale-105',
          extraOverlay: null,
        };
      case 'proof':
        return {
          image: '/images/section6_smoke_proof_hd.png',
          alt: 'Atmospheric dark smoky silk embers under metrics',
          animation: 'animate-smoke-drift-reverse',
          opacity: 'opacity-40',
          transform: 'scale-105',
          extraOverlay: null,
        };
      case 'cta':
        return {
          image: '/images/section3_smoke_orange_bg_hd.png',
          alt: 'Atmospheric dark smoky silk crescendo plume behind final CTA',
          animation: 'animate-smoke-drift',
          opacity: 'opacity-50',
          transform: 'scale-110',
          extraOverlay: (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff5500]/12 via-transparent to-transparent pointer-events-none" />
          ),
        };
      default:
        return {
          image: '/images/section3_smoke_orange_bg_hd.png',
          alt: 'Atmospheric dark smoky silk background',
          animation: 'animate-smoke-drift',
          opacity: 'opacity-45',
          transform: 'scale-105',
          extraOverlay: null,
        };
    }
  };

  const config = getConfig();

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* ── Parallax Smoky Silk Fluid Layer in KritSite Brand Colors ── */}
      <div ref={scrollLayerRef} className="absolute inset-0 will-change-transform">
        <img
          src={config.image}
          alt={config.alt}
          className={`w-full h-full object-cover object-center select-none ${config.opacity} ${config.transform} ${config.animation}`}
        />
        {config.extraOverlay}
      </div>

      {/* ── Tactile Micro-Grain Film Overlay (Eliminates Banding) ── */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Seamless Edge Vignettes for Pristine Section Transitions ── */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* ── Optional Architectural Border Frame with Breathing Amber Glow ── */}
      {hasBorderFrame && (
        <div className="absolute inset-4 sm:inset-8 lg:inset-12 rounded-[28px] sm:rounded-[36px] border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] animate-frame-breathe pointer-events-none" />
      )}
    </div>
  );
};
