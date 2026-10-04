'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface KineticTextSliderProps {
  phrases?: string[];
  intervalMs?: number;
  className?: string;
  gradientClassName?: string;
}

const DEFAULT_PHRASES = [
  'Digital Experiences',
  'AI Web Platforms',
  'Enterprise Commerce',
  'Next.js 16 Systems',
];

const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

export const KineticTextSlider: React.FC<KineticTextSliderProps> = ({
  phrases = DEFAULT_PHRASES,
  intervalMs = 3800,
  className = '',
  gradientClassName = 'italic font-black bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)]',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [phrases.length, intervalMs, isPaused]);

  const currentText = phrases[currentIndex];
  const words = currentText.split(' ');

  return (
    <div 
      className={`relative inline-block align-middle select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Kinetic headline transition"
    >
      <div className="relative overflow-hidden py-1 min-h-[1.25em] flex items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            initial={shouldReduceMotion ? { opacity: 0 } : {
              opacity: 0,
              y: '105%',
              x: 14,
              rotateX: -22,
              scale: 0.94,
              filter: 'blur(8px)',
            }}
            animate={shouldReduceMotion ? { opacity: 1 } : {
              opacity: 1,
              y: '0%',
              x: 0,
              rotateX: 0,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration: 0.82,
                ease: EASE_CINEMATIC,
                staggerChildren: 0.05,
              },
            }}
            exit={shouldReduceMotion ? { opacity: 0 } : {
              opacity: 0,
              y: '-110%',
              x: -12,
              rotateX: 20,
              scale: 1.04,
              filter: 'blur(6px)',
              transition: {
                duration: 0.55,
                ease: [0.4, 0, 1, 1],
              },
            }}
            className={`inline-flex flex-wrap items-center gap-x-3 will-change-transform perspective-1000 ${gradientClassName}`}
          >
            {words.map((word, wIdx) => (
              <span key={`${currentIndex}-${word}-${wIdx}`} className="inline-block overflow-hidden py-0.5">
                <motion.span
                  initial={shouldReduceMotion ? {} : { y: '100%', opacity: 0 }}
                  animate={shouldReduceMotion ? {} : { y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: wIdx * 0.06,
                    ease: EASE_CINEMATIC,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Subtle Micro-Progress Track */}
      <div className="flex items-center gap-1.5 mt-1 opacity-70 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1">
          {phrases.map((phrase, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={phrase}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Switch to ${phrase}`}
                className="h-1 rounded-full transition-all duration-300 cursor-pointer overflow-hidden bg-white/10 hover:bg-white/20"
                style={{ width: isActive ? '24px' : '6px' }}
              >
                {isActive && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: intervalMs / 1000, ease: 'linear' }}
                    className="h-full w-full bg-gradient-to-r from-amber-400 to-amber-300"
                  />
                )}
              </button>
            );
          })}
        </div>
        <span className="text-[10px] font-mono text-amber-300/70 font-semibold tracking-wider ml-1">
          0{currentIndex + 1} / 0{phrases.length}
        </span>
      </div>
    </div>
  );
};

export default KineticTextSlider;
