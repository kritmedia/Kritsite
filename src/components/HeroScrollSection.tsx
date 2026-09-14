import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { ExpertiseShowcase } from './ExpertiseShowcase';

interface HeroScrollSectionProps {
  onOpenContact: (planId?: string) => void;
}

const TOTAL_FRAMES = 180;

const getFramePath = (index: number) => {
  const paddedIndex = String(index).padStart(3, '0');
  return `/frames/ezgif-frame-${paddedIndex}.jpg`;
};

export const HeroScrollSection: React.FC<HeroScrollSectionProps> = ({ onOpenContact }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastDrawnFrameRef = useRef<number>(-1);

  const [currentFrameNum, setCurrentFrameNum] = useState<number>(1);
  const [, setLoadedCount] = useState<number>(0);

  // Preload all 180 frames progressively
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (i === 1 && lastDrawnFrameRef.current === -1) {
          drawFrame(1);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const imgIndex = frameIndex - 1;
    let img = imagesRef.current[imgIndex];

    // Fallback to nearest loaded frame if current frame is buffering
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[imgIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[imgIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Solid black base
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Aspect-ratio preserving cover scaling
    const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
    const drawWidth = img.naturalWidth * scale;
    const drawHeight = img.naturalHeight * scale;
    const drawX = (width - drawWidth) / 2;
    const drawY = (height - drawHeight) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, drawX, drawY, drawWidth, drawHeight);

    lastDrawnFrameRef.current = frameIndex;
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      const frame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)) + 1)
      );
      drawFrame(frame);
    }
  };

  useEffect(() => {
    resizeCanvas();

    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) {
        targetProgressRef.current = 0;
        return;
      }

      // Compute progress 0.0 -> 1.0 across the combined Section 01 + Section 02 container
      const progress = -rect.top / scrollableDistance;
      const clamped = Math.min(1, Math.max(0, progress));
      targetProgressRef.current = clamped;
    };

    const handleResize = () => {
      resizeCanvas();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const LERP_FACTOR = 0.14;
    let isRunning = true;

    const renderLoop = () => {
      if (!isRunning) return;

      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * LERP_FACTOR;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const frameIndex = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)) + 1)
      );

      if (frameIndex !== lastDrawnFrameRef.current) {
        drawFrame(frameIndex);
        setCurrentFrameNum(frameIndex);
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    handleScroll();
    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full bg-black text-white">
      {/* ── Sticky Viewport Window for Image Scroll Animation ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block"
          style={{ backgroundColor: '#000000' }}
        />

        {/* Ambient Dark Vignette & Gradient Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/80 pointer-events-none lg:from-black/75 lg:via-transparent lg:to-black/60" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* ── Technical Live Frame Badge (Top-Right) ── */}
        <div className="absolute top-24 right-6 sm:right-12 z-20 hidden md:flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full shadow-2xl">
          <div className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider text-white/80">
            Frame {String(currentFrameNum).padStart(3, '0')} / {TOTAL_FRAMES}
          </span>
          <span className="text-[10px] font-mono text-white/50 border-l border-white/20 pl-2">
            {currentFrameNum < 70 ? '01 // Hero' : '02 // Production Expertise'}
          </span>
        </div>
      </div>

      {/* ── CONTENT LAYERS SCROLLING OVER THE CONTINUOUS CANVAS ANIMATION ── */}
      <div className="relative z-10 -mt-[100vh]">
        {/* ── 01. HERO SECTION ── */}
        <div className="min-h-screen flex flex-col justify-between pt-20 sm:pt-28 pb-0">
          {/* Main Hero Container: Left Column + Clear Center + Right Column */}
          <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-18 flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 lg:gap-16 relative my-auto">
            {/* Left Column: Massive Typography & Sub-Keywords */}
            <div className="relative w-full lg:max-w-[500px] xl:max-w-[560px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[0.95] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Websites That Make Your Business
                <span className="block">Look The Part.</span>
              </h1>

              {/* Sub-Keywords with Star Bullets */}
              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                <span>48h Launches</span>
                <span className="text-[#ff5500]">✦</span>
                <span>Custom Builds</span>
                <span className="text-[#ff5500]">✦</span>
                <span>Built for Search</span>
                <span className="text-[#ff5500]">✦</span>
                <span>Built to Perform</span>
              </div>
            </div>

            {/* Center Area: Natural open clearance for hand & spotlight cone */}

            {/* Right Column: Narrative Copy & Rounded Pill CTA */}
            <div className="relative w-full lg:max-w-[400px] xl:max-w-[440px] flex items-center lg:justify-end">
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base font-normal text-white/90 leading-relaxed max-w-sm drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                  We design and build fast, high-converting websites for businesses that have outgrown the boring stuff.
                </p>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  No bloated themes. No endless meetings. No website that looks like it was made during a lunch break.
                </p>

                <div className="flex items-center gap-3 sm:gap-4 pt-1 pointer-events-auto">
                  <button
                    onClick={() => onOpenContact()}
                    className="group pl-5 sm:pl-6 pr-2 py-2.5 sm:py-3 bg-white text-black font-bold text-xs sm:text-sm tracking-wide rounded-full shadow-2xl inline-flex items-center gap-3 hover:bg-white/90 hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Start a Project</span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ff5500] text-white flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  <a
                    href="#expertise"
                    className="text-xs sm:text-sm font-mono tracking-wider text-white/70 hover:text-white inline-flex items-center gap-1 transition-colors group/link py-1 px-1 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>See Our Builds</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/50 group-hover/link:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Ribbon */}
          <div className="w-full bg-black/75 backdrop-blur-md border-t border-white/10 py-3 sm:py-4 px-4 sm:px-10 lg:px-14 xl:px-18 pointer-events-auto">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono tracking-wider text-white/80 overflow-x-auto no-scrollbar whitespace-nowrap py-1">
                <span className="text-white font-medium">48h Launches</span>
                <span className="text-[#ff5500]">·</span>
                <span className="text-white font-medium">Custom Builds</span>
                <span className="text-[#ff5500]">·</span>
                <span className="text-white font-medium">Built for Search</span>
                <span className="text-[#ff5500]">·</span>
                <span className="text-white font-medium">Built to Perform</span>
              </div>

              <a href="#expertise" className="hidden lg:flex items-center gap-2 text-xs font-mono tracking-wider text-white/60 hover:text-white transition-colors shrink-0">
                <span>Scroll to discover</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#ff5500] animate-bounce" />
              </a>
            </div>
          </div>
        </div>

        {/* ── 02. PRODUCTION EXPERTISE (INTERACTIVE MORPHIC-STYLE SHOWCASE) ── */}
        <section id="expertise" className="min-h-screen py-16 sm:py-24 flex flex-col justify-center relative">
          <div id="work" className="absolute -top-24" />
          <div id="templates" className="absolute -top-24" />
          
          {/* Frosted Dark Gradient Overlay for Continuous Canvas Visibility & Maximum Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/55 to-black/90 pointer-events-none" />

          <ExpertiseShowcase onOpenContact={onOpenContact} />
        </section>
      </div>
    </div>
  );
};
