'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, HelpCircle, ChevronDown, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { TENSORIS_FAQS, FaqItem } from '@/data/tensorisData';

interface TensorisTestimonialsProps {
  onOpenModal: (intent?: string) => void;
}

export const TensorisTestimonials: React.FC<TensorisTestimonialsProps> = ({ onOpenModal }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');

  const testimonials = [
    {
      quote: "TENSORIS solved the exact sovereign compliance dilemma our board had struggled with for 18 months: achieving bleeding-edge reasoning performance while ensuring 100% of our financial training data remains physically in the UAE.",
      author: "Mubarak Al-Husseini",
      role: "Chief Information Officer",
      company: "Emirates Sovereign Investment Fund (ADGM)",
      sector: "Sovereign Finance & Asset Management"
    },
    {
      quote: "The autonomous multi-agent swarm transformed our Jebel Ali Port freight customs clearance from a 3-day paperwork bottleneck into a 4-minute automated workflow with zero regulatory fines across 85,000 shipments.",
      author: "Dr. Laila Rostom",
      role: "VP of Global Supply Chain & Technology",
      company: "GCC Maritime & Freight Logistics",
      sector: "Maritime & Multi-Modal Freight"
    },
    {
      quote: "The mathematical explainability and SHAP attribution proofs gave the UAE Central Bank full confidence in our automated algorithmic credit decisioning engine. We deployed in under 3 weeks.",
      author: "Farhan Siddiqui",
      role: "Head of Quantitative Risk",
      company: "DIFC Corporate Banking Consortium",
      sector: "Institutional Banking"
    }
  ];

  const categories = ['All', 'Sovereignty & Security', 'Platform', 'Integration', 'Economics'];

  const filteredFaqs = activeFaqCategory === 'All' 
    ? TENSORIS_FAQS 
    : TENSORIS_FAQS.filter(f => f.category === activeFaqCategory);

  return (
    <section className="relative py-24 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* PART 1: Enterprise Testimonials */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              <span>ENTERPRISE TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Validated by Chief Technology Officers Across the GCC
            </h2>
            <p className="text-base text-slate-400 font-normal leading-relaxed">
              Real testimonials from fictional enterprise portfolio scenarios showcasing how TENSORIS resolves mission-critical operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 flex flex-col justify-between gap-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-cyan-500/50" />
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-850 space-y-1">
                  <div className="text-sm font-bold text-white font-mono">{t.author}</div>
                  <div className="text-xs text-cyan-400 font-mono">{t.role}</div>
                  <div className="text-[11px] text-slate-500">{t.company} · {t.sector}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PART 2: Enterprise FAQs */}
        <div id="faqs" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Architecture & Sovereignty Governance
            </h2>
            <p className="text-base text-slate-400 font-normal">
              Technical, legal, and operational inquiries regarding enterprise TENSORIS deployment.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFaqCategory(cat);
                  setActiveFaqIndex(null);
                }}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeFaqCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950/50'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-950 border border-slate-850 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
