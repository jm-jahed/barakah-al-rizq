'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface FrozenSupplyThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const FrozenSupplyThemeContext = createContext<FrozenSupplyThemeContextType | undefined>(undefined);

export function FrozenSupplyThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('frozen_supply_theme') as Theme | null;
    if (saved && (saved === 'light' || saved === 'dark')) {
      setTheme(saved);
    } else {
      // Default to dark mode for cinematic cold-chain feel
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('frozen_supply_theme', theme);
    } catch {
      // Ignore
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <FrozenSupplyThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isDark: theme === 'dark'
      }}
    >
      <div className={theme === 'dark' ? 'dark' : 'light'}>
        {children}
      </div>
    </FrozenSupplyThemeContext.Provider>
  );
}

export function useFrozenSupplyTheme() {
  const context = useContext(FrozenSupplyThemeContext);
  if (!context) {
    throw new Error('useFrozenSupplyTheme must be used within a FrozenSupplyThemeProvider');
  }
  return context;
}
