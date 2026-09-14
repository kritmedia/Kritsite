import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  // Close mobile drawer when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileOpen && !target.closest('header')) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [mobileOpen]);

  const navLinks = [
    {
      label: 'Services',
      href: '/services',
      desc: 'Architecture, design & custom engineering',
    },
    {
      label: 'Work',
      href: '/#expertise',
      desc: 'Featured showcase & bespoke builds',
    },
    {
      label: 'About',
      href: '/about',
      desc: 'Our studio craft, standards & philosophy',
    },
    {
      label: 'Templates',
      href: '/templates',
      desc: 'Curated modern website showcase',
    },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        const el = document.getElementById(targetId) || document.getElementById('problem');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4 select-none">
      <div className="relative pointer-events-auto w-[96%] sm:w-[90%] md:w-[84%] lg:w-[72%] max-w-5xl">
        {/* Main Floating Capsule */}
        <div className="flex items-center justify-between gap-3 sm:gap-6 bg-neutral-950/70 backdrop-blur-2xl border border-white/15 hover:border-white/25 rounded-full px-4 sm:px-7 py-2 sm:py-2.5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300">
          
          {/* Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-2.5 cursor-pointer pl-1 pr-2 py-1 rounded-full hover:bg-white/10 transition-colors shrink-0 group"
          >
            <div className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer select-none">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.7)] group-hover:shadow-[0_0_25px_rgba(255,85,0,0.5)] transition-all duration-300 shrink-0 border border-white/20 bg-black">
                <img
                  alt="KritSite Logo"
                  width="80"
                  height="80"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/logo.png"
                />
              </div>
              <span className="font-sans text-lg sm:text-xl md:text-[1.35rem] tracking-tight font-extrabold text-white flex items-center leading-none">
                <span>Krit</span>
                <span className="text-neutral-300 font-semibold group-hover:text-white transition-colors">
                  Site
                </span>
              </span>
            </div>
          </Link>

          {/* Center Nav Links Pill (Matches KritVideo) */}
          <div className="hidden md:flex bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 lg:px-9 py-2 sm:py-2.5 items-center gap-7 lg:gap-11 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/#expertise' && pathname === '/' && hash === '#expertise');
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-150 cursor-pointer relative py-1 px-1.5 ${
                    isActive ? 'text-white font-bold' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-[#ff5500] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* White Pill Button with Glowing Shadow */}
            <button
              onClick={onOpenContact}
              className="px-4 sm:px-6 py-2 bg-white text-black font-bold text-[11px] sm:text-xs rounded-full hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] active:scale-95 flex items-center gap-1.5 cursor-pointer tracking-wide"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all active:scale-90 cursor-pointer"
            >
              {mobileOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Pop-out Dropdown (Matches KritVideo) */}
        <div
          className={`md:hidden absolute top-full mt-2.5 inset-x-0 bg-neutral-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-50 flex flex-col gap-1.5 overflow-hidden transition-all duration-200 ease-out origin-top ${
            mobileOpen
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
              : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="flex items-center justify-between px-4 py-3 rounded-2xl transition-colors text-left group hover:bg-white/10"
            >
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-mono tracking-wider font-bold text-white group-hover:text-[#ff5500] transition-colors">
                  {link.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-neutral-400">
                  {link.desc}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-neutral-500 group-hover:text-white" />
            </Link>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#ff5500] to-[#ff7722] hover:from-[#e64d00] hover:to-[#ff6611] text-white font-bold text-xs font-mono tracking-wide rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,85,0,0.35)] transition-all cursor-pointer"
            >
              <span>Let's Talk / Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};