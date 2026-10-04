'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { RESTAURANT_FAQS, RESTAURANT_BRAND_INFO } from '@/data/restaurantData';

export const RestaurantFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(RESTAURANT_FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mb-4">
            Everything You Need To Know.
          </h2>

          <p className="text-base text-gray-400">
            Answers regarding table reservations, Halal certification, DIFC valet parking, and private events.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {RESTAURANT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#10141C] border border-amber-500/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-gray-300 leading-relaxed border-t border-white/5 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#10141C] border border-amber-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white font-serif">Need instant restaurant concierge assistance?</h4>
            <p className="text-xs text-gray-400">Our DIFC front desk is available via WhatsApp.</p>
          </div>

          <a
            href={RESTAURANT_BRAND_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
