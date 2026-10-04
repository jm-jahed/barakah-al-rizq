'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Cpu, 
  CreditCard, 
  MessageCircle,
  ArrowUp
} from 'lucide-react';
import { AGENCY_BUSINESS } from '@/data/siteData';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isExternal?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Overview', icon: Compass, href: '#home' },
  { id: 'work', label: 'Projects', icon: Layers, href: '#work' },
  { id: 'services', label: 'Services', icon: Cpu, href: '#services' },
  { id: 'pricing', label: 'Pricing', icon: CreditCard, href: '#pricing' },
  { id: 'contact', label: 'WhatsApp', icon: MessageCircle, href: AGENCY_BUSINESS.whatsapp, isExternal: true },
];

export const SectionNavFloating: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Show dock only after scrolling 280px down
          setIsVisible(scrollY > 280);

          // Detect active anchor based on scroll position
          const scrollPos = scrollY + 240;
          const sectionIds = ['pricing', 'services', 'work', 'home'];
          
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.95 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-fit pointer-events-auto select-none"
          role="navigation"
          aria-label="Floating quick navigation dock"
        >
          <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-2xl bg-[#0F0C09]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.65)] ring-1 ring-white/5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = !item.isExternal && activeSection === item.id;

              if (item.isExternal) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Connect on WhatsApp"
                    className="relative flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 group cursor-pointer"
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline tracking-wider uppercase font-semibold text-[11px]">
                      {item.label}
                    </span>
                    <span className="sm:hidden font-semibold text-[11px]">
                      Chat
                    </span>
                  </a>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  title={item.label}
                  className={`relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500/15 border border-amber-500/35 text-amber-300 font-bold shadow-[0_0_15px_rgba(245,158,11,0.18)]'
                      : 'text-gray-400 hover:text-gray-100 hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-gray-400'}`} />
                  <span className="hidden md:inline tracking-wider uppercase text-[11px]">
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse md:hidden" />
                  )}
                </a>
              );
            })}

            {/* Quick Scroll To Top Pill */}
            <div className="h-4 w-px bg-white/10 mx-0.5" />
            <button
              type="button"
              onClick={scrollToTop}
              title="Scroll to Top"
              aria-label="Scroll to top"
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionNavFloating;
