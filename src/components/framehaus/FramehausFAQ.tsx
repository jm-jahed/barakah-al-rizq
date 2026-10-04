'use client';

import React, { useState } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA, FAQItem } from '@/data/framehausData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FramehausFAQ: React.FC = () => {
  const { language } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const categories = [
    { id: 'all', label: t.faq.categories.all },
    { id: 'booking', label: t.faq.categories.booking },
    { id: 'production', label: t.faq.categories.production },
    { id: 'licensing', label: t.faq.categories.licensing },
    { id: 'turnaround', label: t.faq.categories.turnaround },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? FRAMEHAUS_DATA.faqs
      : FRAMEHAUS_DATA.faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#08080A] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.faq.title}
          </h2>
          <p className="text-base text-zinc-400 font-light max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-zinc-950 border border-zinc-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white font-serif">
                    {faq.question[language]}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500/20 border-amber-500/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 font-sans font-light leading-relaxed border-t border-zinc-900 animate-fadeIn">
                    <p>{faq.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
