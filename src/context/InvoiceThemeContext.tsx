"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface InvoiceThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const InvoiceThemeContext = createContext<InvoiceThemeContextType>({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
  isDark: false,
});

export function InvoiceThemeProvider({ children }: { children: React.ReactNode }) {
  // CRITICAL REQUIREMENT: Default MUST be light mode
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("nabta_invoice_theme") as Theme;
      if (saved === "dark" || saved === "light") {
        setThemeState(saved);
        if (saved === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // DEFAULT IS STRICTLY LIGHT MODE
        setThemeState("light");
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // Ignore in SSR
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("nabta_invoice_theme", newTheme);
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDark = theme === "dark";

  return (
    <InvoiceThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark }}>
      <div className={isDark ? "dark" : ""}>
        {children}
      </div>
    </InvoiceThemeContext.Provider>
  );
}

export function useInvoiceTheme() {
  return useContext(InvoiceThemeContext);
}
