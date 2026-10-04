'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ReeferThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ReeferThemeContext = createContext<ReeferThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  isDark: false,
});

export function ReeferThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('khaleej_reefer_theme') as Theme;
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      localStorage.setItem('khaleej_reefer_theme', nextTheme);
    } catch {
      // ignore
    }
  };

  const isDark = mounted && theme === 'dark';

  return (
    <ReeferThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      <div className={isDark ? 'dark bg-[#0B0F17] text-white min-h-screen transition-colors duration-200' : 'bg-white text-[#111111] min-h-screen transition-colors duration-200'}>
        {children}
      </div>
    </ReeferThemeContext.Provider>
  );
}

export function useReeferTheme() {
  return useContext(ReeferThemeContext);
}
