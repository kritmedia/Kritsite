import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  ShieldCheck, 
  Check, 
  X, 
  Sparkles
} from 'lucide-react';

export interface ExpertiseItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  desc: string;
  metric: string;
  score: string;
  image: string;
  domain: string;
  liveUrl?: string;
  techStack: string[];
  specs: {
    framework: string;
    motion: string;
    speed: string;
    search: string;
  };
  highlights: string[];
}

export const SHOWCASE_BUILDS: ExpertiseItem[] = [
  {
    id: 'big-bear-vans',
    title: 'Big Bear Vans',
    tagline: 'Custom Mercedes Sprinter & Ford Transit Camper Vans in California',
    category: 'Automotive & Custom Manufacturing',
    badge: 'CALIFORNIA, USA · 100% BESPOKE',
    desc: 'Engineered a bespoke digital platform for California’s premier custom camper van builder. Features high-resolution interactive consultation booking, van layout showcase, floor plans, and off-grid adventure branding.',
    metric: '<0.5s LCP',
    score: '100/100',
    image: '/images/showcase/bigbearvans.png',
    domain: 'www.bigbearvans.com',
    liveUrl: 'https://www.bigbearvans.com/',
    techStack: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'Interactive Booking Flow', 'AEO Local Schema'],
    specs: {
      framework: 'Next.js 15 App Router + React Server Components',
      motion: 'Hardware-accelerated fluid scroll with zero layout shifts',
      speed: 'Sub-second mobile LCP · 100/100 Core Web Vitals',
      search: 'Local Business, Automotive & Service Schema.org graph',
    },
    highlights: [
      'Interactive multi-step consultation booking flow with calendar sync',
      'Architectural van layout & custom build floor plan viewer',
      'High-converting California local SEO & luxury adventure brand identity',
    ],
  },
  {
    id: 'isni-plus',
    title: 'ISNI+',
    tagline: 'National Healthcare Union & Medical Platform',
    category: 'Healthcare & Institutional',
    badge: 'SOLIDARITY · JUSTICE · STRENGTH',
    desc: 'High-impact national union platform uniting and supporting local unions. Warm high-contrast electric amber visual architecture, secure member portals, and instant emergency hotlines.',
    metric: '<0.6s LCP',
    score: '100/100',
    image: '/images/showcase/isni_plus.png',
    domain: 'isni.france.kritsite.com',
    techStack: ['React 19', 'Tailwind CSS', 'Headless CMS', 'A11y Compliant'],
    specs: {
      framework: 'Next.js App Router + Server Side Generation',
      motion: 'Hardware-accelerated CSS transforms with 60FPS fluid scroll',
      speed: '0.58s Mobile LCP · 0ms Cumulative Layout Shift',
      search: 'NGO & Organization Structured Schema markup',
    },
    highlights: [
      'Instant-access SOS Interne emergency response action flow',
      'High-contrast accessible typography designed for all viewing conditions',
      'National union branch directory with instant geolocation search',
    ],
  },
  {
    id: 'almanac',
    title: 'ALMANAC',
    tagline: 'The Agent With A Company Brain (YC Backed)',
    category: 'AI & Autonomous Systems',
    badge: 'Y COMBINATOR BACKED · AI AGENT',
    desc: 'Always-on AI agent platform with dedicated computer and tool integrations. Expressive tactile watercolor canvas background, mobile iMessage interface mockup, and clean serif typography.',
    metric: '<0.5s INP',
    score: '100/100',
    image: '/images/showcase/almanac.png',
    domain: 'almanac.systems.kritsite.com',
    techStack: ['React 19', 'Next.js SSR', 'Canvas Shaders', 'Tailwind CSS'],
    specs: {
      framework: 'Next.js 15 App Router + React Server Components',
      motion: 'Generative watercolor pigment shader simulation',
      speed: '0.48s First Contentful Paint with sub-second asset hydration',
      search: 'SoftwareApplication & AI Agent JSON-LD structured schema',
    },
    highlights: [
      'Interactive SMS & Slack integration preview simulator',
      'Bespoke editorial serif typography paired with Swiss mono telemetry',
      'Zero cold start serverless edge deployment with low latency',
    ],
  },
  {
    id: 'keepmates',
    title: 'KEEP MATES',
    tagline: 'Visual Web Bookmarking & Chrome Extension Platform',
    category: 'Developer Tools & SaaS',
    badge: '1-CLICK CAPTURE · CLOUD SYNC',
    desc: 'Product platform for saving websites, visual references, articles, and design palettes in one click. Atmospheric azure cloudscape backdrop, 3D card tilt physics, and instant Chrome Web Store install.',
    metric: '60 FPS',
    score: '99/100',
    image: '/images/showcase/keepmates.png',
    domain: 'keepmates.app.kritsite.com',
    techStack: ['React 19', 'Framer Motion', 'Chrome API', 'Tailwind CSS'],
    specs: {
      framework: 'React 19 SPA + Chrome Extension V3 Bridge',
      motion: 'Framer Motion spring physics with 3D tilt interaction',
      speed: 'Sub-120KB initial JS payload with lazy asset delivery',
      search: 'WebApplication & ChromeExtension Schema.org metadata',
    },
    highlights: [
      'Floating multi-card visual inspiration stack with hover dispersion',
      'Instant color palette extractor interactive simulator',
      'Responsive cloudscape particle layer with low CPU overhead',
    ],
  },
  {
    id: 'flash-co',
    title: 'FLASH.CO',
    tagline: 'The Ultimate Next-Gen Shopping & Rewards Hub',
    category: 'Consumer Tech & FinTech',
    badge: 'HIGH CONVERSION · 0 LAYOUT SHIFTS',
    desc: 'Next-generation shopping ecosystem. Pristine white aesthetic, concentric radar wave typography background, tactile hand-held mobile device preview, and dual App Store / Google Play conversion funnel.',
    metric: '0 CLS',
    score: '100/100',
    image: '/images/showcase/flash_co.png',
    domain: 'flash.shopping.kritsite.com',
    techStack: ['React 19', 'Tailwind CSS', 'SVG Motion', 'App Store API'],
    specs: {
      framework: 'Headless App Landing Architecture with Instant Validation',
      motion: 'Harmonic concentric radar wave animation in pure CSS',
      speed: '0.52s Mobile LCP · 0ms Cumulative Layout Shift',
      search: 'MobileApplication & Review Schema markup',
    },
    highlights: [
      'Interactive mobile inbox simulator showing real-time order tracking',
      'Zero spam guarantee visual badge system with trust micro-copy',
      'Frictionless SMS reserve ID intake flow with instant feedback',
    ],
  },
  {
    id: 'quso-ai',
    title: 'QUSO.AI',
    tagline: 'World\'s First AI-Powered Social Media Co-Pilot',
    category: 'AI & Social Automation',
    badge: '4M+ TRUSTED USERS · 10X GROWTH',
    desc: 'Automated social media growth and AI video editing platform. Deep purple primary accent, interactive neural connectivity grid with node branches, floating caption widgets, and multi-channel social integration.',
    metric: '100/100',
    score: '100/100',
    image: '/images/showcase/quso_ai.jpg',
    domain: 'quso.ai.kritsite.com',
    techStack: ['React 19', 'Canvas Node Graph', 'Tailwind CSS', 'Social APIs'],
    specs: {
      framework: 'Next.js Enterprise Stack + Real-Time Video Preview',
      motion: 'Interactive dotted canvas matrix with node branch physics',
      speed: '0.61s First Contentful Paint with compressed asset pipelines',
      search: 'SoftwareApplication + AggregateRating Schema',
    },
    highlights: [
      'Interactive social channel pill selector (TikTok, IG, LinkedIn, X, YT)',
      'Drag-and-drop caption editor widget preview with live timestamps',
      '4M+ user trust social proof ticker with live community avatars',
    ],
  },
];

// Sequence of the 5 builds for the single showcase row
const ROW_ORDER = [
  SHOWCASE_BUILDS[0], // ISNI+
  SHOWCASE_BUILDS[1], // Almanac
  SHOWCASE_BUILDS[2], // Keep Mates
  SHOWCASE_BUILDS[3], // Flash.co
  SHOWCASE_BUILDS[4], // Quso.ai
];

interface ExpertiseShowcaseProps {
  onOpenContact: (planId?: string) => void;
}

export const ExpertiseShowcase: React.FC<ExpertiseShowcaseProps> = ({ onOpenContact }) => {
  const [inspectingItem, setInspectingItem] = useState<ExpertiseItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const rowRef = useRef<HTMLDivElement | null>(null);

  // 4 sets for seamless infinite horizontal loop
  const displayRow = [...ROW_ORDER, ...ROW_ORDER, ...ROW_ORDER, ...ROW_ORDER];

  // Manual scroll shift via chevrons < > (matching Morphic controls)
  const handleScroll = (direction: 'left' | 'right') => {
    const amount = direction === 'left' ? -420 : 420;
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Continuous slow auto-slide: stays active, slows gently on hover, pauses only on modal inspection
  useEffect(() => {
    if (inspectingItem) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Gentle, stately slow drift: 34px/sec normally, 16px/sec on hover
      const speed = isHovered ? 16 : 34;
      const pixels = Math.min(delta, 0.1) * speed;

      if (rowRef.current) {
        rowRef.current.scrollLeft += pixels;

        const children = rowRef.current.children;
        if (children.length >= 10) {
          const firstCard = children[0] as HTMLElement;
          const sixthCard = children[5] as HTMLElement;
          if (firstCard && sixthCard) {
            const singleSetWidth = sixthCard.offsetLeft - firstCard.offsetLeft;
            if (singleSetWidth > 0 && rowRef.current.scrollLeft >= singleSetWidth) {
              rowRef.current.scrollLeft -= singleSetWidth;
            }
          }
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, inspectingItem]);

  return (
    <div className="w-full relative z-10 flex flex-col justify-center pt-16 sm:pt-24 pb-16 overflow-hidden pointer-events-auto select-none">
      <div id="work" className="absolute -top-24" />
      <div id="expertise" className="absolute -top-24" />

      {/* ── 1. HEADER SECTION (EXACT COMPOSITION AS MORPHIC REFERENCE) ── */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 w-full mb-6 sm:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
          {/* Left Column: Pill Badge + Big 2-Line Headline */}
          <div className="space-y-4 max-w-2xl">
            {/* Morphic-style subtle accent pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.06] border border-white/15 rounded-full text-[11px] font-mono tracking-wide text-white/90">
              <span className="text-[#ff5500] font-bold">New</span>
              <span className="text-white/20">|</span>
              <span className="text-white/80">Production flagships & web systems</span>
              <span className="text-white/40">›</span>
            </div>
            
            {/* Morphic-style Headline with White Line 1 and Muted Line 2 + Glowing Love */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.98]">
              <span className="block text-white">
                Good Websites Get Attention.
              </span>
              <span className="block text-white/40 mt-1">
                Great Ones Win{' '}
                <span className="text-[#ff5500] drop-shadow-[0_0_35px_rgba(255,85,0,0.85)] font-black">
                  Love
                </span>{' '}
                & Keep It.
              </span>
            </h2>
          </div>

          {/* Right Column: Morphic-style Narrative & Pill Buttons */}
          <div className="max-w-md lg:pt-2 space-y-5">
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              We engineer high-performance digital flagships, fluid 60FPS physics, sub-second web applications, and semantic AI search architectures.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenContact()}
                className="px-6 py-2.5 rounded-full bg-[#ff5500] hover:bg-[#ff661a] text-white text-xs font-mono font-semibold tracking-wide shadow-[0_0_25px_rgba(255,85,0,0.4)] transition-all cursor-pointer"
              >
                Start a Project
              </button>

              <a
                href="#problem"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/90 text-xs font-mono tracking-wide transition-colors cursor-pointer"
              >
                Our Approach
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. SUB-BAR: "Made with KritSite" + Sleek < > Arrows (Exact Morphic Layout) ── */}
        <div className="flex items-center justify-between pt-8 sm:pt-10">
          {/* Left: Brand / Section Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold text-white tracking-wide flex items-center gap-2">
              <span className="text-[#ff5500] font-black text-sm">✦</span>
              <span>Made with KritSite</span>
            </span>
            <a 
              href="#expertise" 
              onClick={(e) => { e.preventDefault(); handleScroll('right'); }}
              className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              See more
            </a>
          </div>

          {/* Right: Sleek < > Chevron Buttons */}
          <div className="flex items-center gap-3 text-white/50">
            <button
              onClick={() => handleScroll('left')}
              className="p-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous builds"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Next builds"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. TWO-ROW FULL-BLEED IMAGE TILES (ONLY USER-PROVIDED BUILDS) ── */}
      <div 
        className="space-y-3.5 sm:space-y-4 w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left and Right Edge Gradient Masks for Seamless Full-Bleed Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

        {/* ── SINGLE ROW: Pure Full-Bleed Rounded Visual Tiles ── */}
        <div 
          ref={rowRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-8 sm:px-16 py-2"
        >
          {displayRow.map((item, index) => (
            <div
              key={`row-${item.id}-${index}`}
              onClick={() => setInspectingItem(item)}
              className="group relative shrink-0 w-[280px] sm:w-[380px] lg:w-[440px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#0a0a0a] cursor-pointer transition-all duration-300 ring-1 ring-white/10 hover:ring-[#ff5500]/80 hover:shadow-[0_12px_35px_rgba(255,85,0,0.35)] hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Subtle hover vignette & quick inspect reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#ff5500] font-bold border border-[#ff5500]/30">
                    {item.metric}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-wider text-white/50 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. MORPHIC-STYLE BOTTOM QUOTE & AVATAR ROW ── */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 w-full mt-10 sm:mt-12">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Overlapping Avatar Stack */}
          <div className="flex -space-x-2 overflow-hidden shrink-0">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-[#ff5500] to-[#ff9900] text-black font-black text-[11px] ring-2 ring-black">
              K
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#202024] text-white font-bold text-[10px] ring-2 ring-black border border-white/20">
              60
            </span>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black text-[#ff5500] font-mono text-[10px] ring-2 ring-black border border-[#ff5500]/40">
              100
            </span>
          </div>

          {/* Quote text exactly matching Morphic bottom line */}
          <p className="text-xs sm:text-sm text-white/60 font-light italic truncate sm:whitespace-normal">
            "Every interface is hand-crafted from a blank canvas. Zero themes, sub-second speed, built to win love." <span className="not-italic text-white/40 font-mono text-[11px]">KritSite Engineering Standard</span>
          </p>
        </div>
      </div>

      {/* ── 5. INTERACTIVE ARCHITECTURE INSPECTOR MODAL ── */}
      {inspectingItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setInspectingItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-apple-amber p-6 sm:p-9 border border-[#ff5500]/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] space-y-6 sm:space-y-8 animate-scale-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setInspectingItem(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Architecture Inspector"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#ff5500]/15 border border-[#ff5500]/40 text-[#ff5500] text-[10px] font-mono tracking-wider font-bold">
                  {inspectingItem.category}
                </span>
                <span className="text-xs font-mono text-white/40">
                  {inspectingItem.domain}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-mono font-bold">
                  Lighthouse 100/100
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {inspectingItem.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl leading-relaxed">
                {inspectingItem.tagline}. {inspectingItem.desc}
              </p>
            </div>

            {/* Modal Body: Side-by-side Image + Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column (Image Preview Mockup) */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.06] border-b border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  {inspectingItem.liveUrl ? (
                    <a
                      href={inspectingItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-[#ff5500] hover:underline flex items-center gap-1 tracking-wider"
                    >
                      <span>https://{inspectingItem.domain}</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-white/60 tracking-wider">
                      https://{inspectingItem.domain}
                    </span>
                  )}
                  <span className="text-[9px] font-mono text-white/40 tracking-wider">
                    Live Build
                  </span>
                </div>

                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <img
                    src={inspectingItem.image}
                    alt={inspectingItem.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Right Column: Telemetry & Architecture Specs */}
              <div className="lg:col-span-6 space-y-4">
                {/* Technical Specs Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono font-semibold tracking-wider text-[#ff5500]">
                    <Cpu className="w-4 h-4" />
                    <span>Technical Architecture</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-white/40 font-mono block text-[9px] tracking-wider">Framework & Runtime</span>
                      <span className="text-white font-medium text-[11px] leading-snug block">{inspectingItem.specs.framework}</span>
                    </div>
                    <div>
                      <span className="text-white/40 font-mono block text-[9px] tracking-wider">Motion & Physics</span>
                      <span className="text-white font-medium text-[11px] leading-snug block">{inspectingItem.specs.motion}</span>
                    </div>
                    <div>
                      <span className="text-white/40 font-mono block text-[9px] tracking-wider">Performance Metrics</span>
                      <span className="text-[#ff5500] font-mono font-bold text-[11px] leading-snug block">{inspectingItem.specs.speed}</span>
                    </div>
                    <div>
                      <span className="text-white/40 font-mono block text-[9px] tracking-wider">Search & AI Discovery</span>
                      <span className="text-white font-medium text-[11px] leading-snug block">{inspectingItem.specs.search}</span>
                    </div>
                  </div>
                </div>

                {/* Engineering Highlights Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono font-semibold tracking-wider text-[#ff5500]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Engineering Highlights</span>
                  </div>

                  <ul className="space-y-2 text-xs text-white/80">
                    {inspectingItem.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#ff5500] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1 flex items-center gap-1.5 flex-wrap">
                    {inspectingItem.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/80 border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/15">
              <div className="text-xs text-white/60 font-mono text-center sm:text-left">
                Want a custom digital platform engineered to this exact standard?
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                {inspectingItem.liveUrl && (
                  <a
                    href={inspectingItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-full glass-apple glass-apple-hover text-white font-mono text-xs font-semibold tracking-wide flex items-center justify-center gap-2 border border-white/15 transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ff5500]" />
                  </a>
                )}
                <button
                  onClick={() => {
                    const id = inspectingItem.id;
                    setInspectingItem(null);
                    onOpenContact(id);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#ff5500] hover:bg-[#ff661a] text-white font-mono text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,85,0,0.5)] transition-all cursor-pointer"
                >
                  <span>Request a Build Like This</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
