'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface SupermarketThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const SupermarketThemeContext = createContext<SupermarketThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  isDark: false,
});

export function SupermarketThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('mirqab_supermarket_theme') as Theme;
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
        if (saved === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        setTheme('light'); // Default to light mode
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // ignore in SSR
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('mirqab_supermarket_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('mirqab_supermarket_theme', 'light');
      }
    } catch {
      // ignore
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const isDark = mounted && theme === 'dark';

  return (
    <SupermarketThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      <div className={`${isDark ? 'dark bg-zinc-950 text-white' : 'light bg-white text-zinc-900'} min-h-screen transition-colors duration-200`}>
        {children}
      </div>
    </SupermarketThemeContext.Provider>
  );
}

export function useSupermarketTheme() {
  return useContext(SupermarketThemeContext);
}
