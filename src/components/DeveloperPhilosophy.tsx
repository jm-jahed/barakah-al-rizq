'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DeveloperPhilosophy() {
  const quotes = [
    {
      quote: "Clean architecture is not a luxury — it is the foundation of scale, speed, and long-term maintainability.",
      author: "Md Jahedul Islam",
      role: "Founder & Lead Engineer",
    },
    {
      quote: "A premium website shouldn't just look expensive. It must load instantly, convert visitors, and perform flawlessly.",
      author: "Web Studio AE Principle",
      role: "Engineering Standard",
    },
    {
      quote: "AI doesn't replace software engineering; it amplifies precision, automates build workflows, and accelerates execution.",
      author: "AI Engineering Insight",
      role: "Development Strategy",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Developer Insights & Philosophy
        </span>

        <div className="h-32 flex items-center justify-center my-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <p className="text-lg sm:text-xl font-medium text-slate-200 italic max-w-2xl mx-auto">
                "{quotes[index].quote}"
              </p>
              <div className="text-xs text-amber-400 font-semibold">
                — {quotes[index].author} <span className="text-slate-500 font-normal">({quotes[index].role})</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === idx ? 'bg-amber-400 w-6' : 'bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
