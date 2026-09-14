import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CustomCursor } from './components/CustomCursor';
import { CurrencyProvider } from './context/CurrencyContext';

function ScrollHandler() {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#ff5500] via-orange-400 to-white z-[9999] transition-all duration-75 ease-out shadow-[0_0_10px_#ff5500]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

function AppShell() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const openContact = (planId?: string) => {
    setSelectedPlan(planId || null);
    setIsContactOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white font-sans selection:bg-[#ff5500] selection:text-white">
      {/* Sleek Minimal Custom Cursor */}
      <CustomCursor />

      {/* 2026 Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Persistent Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[650px] h-[650px] glow-orb-orange rounded-full animate-pulse-glow" />
        <div className="absolute top-[35%] -right-40 w-[700px] h-[700px] glow-orb-purple rounded-full opacity-60" />
        <div className="absolute top-[70%] left-[20%] w-[600px] h-[600px] glow-orb-orange rounded-full opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Top Scroll Indicator */}
      <ScrollHandler />

      {/* Navigation */}
      <Navbar onOpenContact={openContact} />

      {/* Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={openContact} />} />
          <Route path="/services" element={<ServicesPage onOpenContact={openContact} />} />
          <Route path="/templates" element={<TemplatesPage onOpenContact={openContact} />} />
          <Route path="/about" element={<AboutPage onOpenContact={openContact} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer onOpenContact={openContact} />
      </div>

      {/* Interactive Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => { setIsContactOpen(false); setSelectedPlan(null); }}
        selectedPlanId={selectedPlan}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <AppShell />
      </CurrencyProvider>
    </BrowserRouter>
  );
}
