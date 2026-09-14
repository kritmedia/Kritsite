import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'INR' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  toggleCurrency: () => void;
  currencySymbol: string;
  isIndia: boolean;
  formatPrice: (inr: string, usd: string) => string;
  formatAmount: (inrNum: number, usdNum: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = 'kritsite_currency_override';
const SESSION_GEO_KEY = 'kritsite_geo_detected';

// Instant zero-lag heuristic detection based on system timezone & locale
function getInitialCurrency(): Currency {
  if (typeof window === 'undefined') return 'INR';

  // 1. Check user manual override in localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'INR' || saved === 'USD') {
    return saved;
  }

  // 2. Check session geo detection cache
  const cachedGeo = sessionStorage.getItem(SESSION_GEO_KEY);
  if (cachedGeo === 'IN') return 'INR';
  if (cachedGeo && cachedGeo !== 'IN') return 'USD';

  // 3. Instant Tier-1 Heuristic (0ms): Timezone & Locale
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz.includes('India')) {
      return 'INR';
    }

    const lang = (navigator.language || '').toLowerCase();
    const languages = (navigator.languages || []).map((l) => l.toLowerCase());
    if (lang.endsWith('-in') || languages.some((l) => l.endsWith('-in'))) {
      return 'INR';
    }
  } catch {
    // fallback gracefully
  }

  // Default outside India to USD
  return 'USD';
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(getInitialCurrency);

  useEffect(() => {
    // Check if user already manually selected a currency
    const manualOverride = localStorage.getItem(STORAGE_KEY);
    if (manualOverride) return;

    // Check if geo was already fetched this session
    const cachedGeo = sessionStorage.getItem(SESSION_GEO_KEY);
    if (cachedGeo) {
      setCurrencyState(cachedGeo === 'IN' ? 'INR' : 'USD');
      return;
    }

    // Tier 2: Background IP Geolocation check (lightweight, non-blocking)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    fetch('https://api.country.is', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timeoutId);
        if (data && data.country) {
          sessionStorage.setItem(SESSION_GEO_KEY, data.country);
          // Only update if user hasn't touched the toggle in the meantime
          if (!localStorage.getItem(STORAGE_KEY)) {
            const detected: Currency = data.country === 'IN' ? 'INR' : 'USD';
            setCurrencyState(detected);
          }
        }
      })
      .catch(() => {
        // Silently fall back to initial timezone detection on error/offline
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem(STORAGE_KEY, c);
  };

  const toggleCurrency = () => {
    const next: Currency = currency === 'INR' ? 'USD' : 'INR';
    setCurrency(next);
  };

  const formatPrice = (inr: string, usd: string) => {
    return currency === 'INR' ? inr : usd;
  };

  const formatAmount = (inrNum: number, usdNum: number) => {
    if (currency === 'INR') {
      return `₹${inrNum.toLocaleString('en-IN')}`;
    }
    return `$${usdNum.toLocaleString('en-US')}`;
  };

  const value: CurrencyContextType = {
    currency,
    setCurrency,
    toggleCurrency,
    currencySymbol: currency === 'INR' ? '₹' : '$',
    isIndia: currency === 'INR',
    formatPrice,
    formatAmount,
  };

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
