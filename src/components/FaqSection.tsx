'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Cpu, 
  CheckCircle2, 
  X,
  PhoneCall
} from 'lucide-react';
import { FAQS, AGENCY_BUSINESS } from '@/data/siteData';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'ALL QUESTIONS', icon: HelpCircle },
  { id: 'timeline', label: 'TIMELINE & PROCESS', icon: Clock, match: ['time', 'how long', 'deliver', 'fast', 'process', 'sprint', 'launch'] },
  { id: 'tech', label: 'NEXT.JS & AI STACK', icon: Cpu, match: ['tech', 'stack', 'next.js', 'ai', 'code', 'custom', 'legacy', 'modernize'] },
  { id: 'cloud-seo', label: 'HOSTING & INTEGRATIONS', icon: Layers, match: ['hosting', 'domain', 'cloud', 'seo', 'shopify', 'stripe', 'crm', 'international'] },
];

// Subcomponent for individual FAQ Accordion Item with Numbering & Structured Takeaway
const FaqItem: React.FC<{
  faq: typeof FAQS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  shouldReduceMotion: boolean | null;
}> = ({ faq, index, isOpen, onToggle, shouldReduceMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 200, y: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const formattedNumber = `Q${String(index + 1).padStart(2, '0')}`;

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Hello WebStudio AE! I have a question regarding: "${faq.question}". Can we discuss this for our UAE project?`
    );
    window.open(`https://wa.me/971566184509?text=${msg}`, '_blank');
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? {} : { scale: 1.008 }}
      className={`relative rounded-2xl bg-[#13100D] border transition-all duration-300 overflow-hidden backdrop-blur-md ${
        isOpen 
          ? 'border-amber-400/80 shadow-[0_16px_40px_rgba(245,158,11,0.2),0_0_20px_rgba(245,158,11,0.1)] -translate-y-1' 
          : 'border-white/10 hover:border-amber-500/50 hover:shadow-[0_12px_28px_rgba(245,158,11,0.1)]'
      }`}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered || isOpen ? 1 : 0.15,
            background: isHovered || isOpen
              ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.16), transparent 70%)`
              : `radial-gradient(180px circle at 50% 0%, rgba(245, 158, 11, 0.04), transparent 75%)`,
          }}
        />
      )}

      {/* Top Accent Line */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
          isOpen
            ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-100 shadow-[0_0_10px_rgba(245,158,11,0.6)]'
            : isHovered
            ? 'bg-gradient-to-r from-amber-500/50 via-amber-400/50 to-transparent opacity-80'
            : 'opacity-0'
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-amber-300 transition-colors cursor-pointer relative z-10 group"
      >
        <div className="flex items-center gap-3.5">
          {/* Question Index Badge */}
          <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-extrabold tracking-wider transition-colors shrink-0 ${
            isOpen
              ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30'
              : 'bg-white/5 border border-white/10 text-amber-400/80 group-hover:text-amber-300 group-hover:border-amber-500/30'
          }`}>
            {formattedNumber}
          </span>
          <span className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
            isOpen ? 'text-amber-400' : 'text-gray-100 group-hover:text-amber-200'
          }`}>
            {faq.question}
          </span>
        </div>

        <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
          isOpen 
            ? 'rotate-180 bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105' 
            : 'bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-500/20'
        }`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="px-6 pb-6 pt-2 space-y-4 border-t border-amber-500/20">
              
              {/* Detailed Engineering Answer */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                {faq.answer}
              </p>

              {/* Bottom Micro-Action Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Agency Standard (UAE)</span>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400 hover:text-amber-300 hover:underline cursor-pointer"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Discuss this question via WhatsApp &rarr;</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Compute live match count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: FAQS.length };
    FAQ_CATEGORIES.forEach((cat) => {
      if (cat.id === 'all') return;
      if (cat.match) {
        const matching = FAQS.filter((faq) => {
          const text = `${faq.question} ${faq.answer}`.toLowerCase();
          return cat.match?.some((term) => text.includes(term));
        });
        counts[cat.id] = matching.length;
      }
    });
    return counts;
  }, []);

  const filteredFaqs = useMemo(() => {
    let list = FAQS;

    // Filter by Category
    if (activeCategory !== 'all') {
      const catConfig = FAQ_CATEGORIES.find((c) => c.id === activeCategory);
      if (catConfig && catConfig.match) {
        list = list.filter((faq) => {
          const text = `${faq.question} ${faq.answer}`.toLowerCase();
          return catConfig.match?.some((term) => text.includes(term));
        });
      }
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter((faq) =>
        faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="py-28 bg-[#0B0907] relative z-10 overflow-hidden font-sans border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Engineering Knowledge Hub</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
              Frequently Asked{' '}
              <span className="italic font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Questions.
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              Clear answers regarding project sprint timelines, Next.js 16 tech stack, code ownership, and UAE SLA warranties.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar with Sliding Spring Category Pills (Design #17) */}
        <div className="mb-10 space-y-4">
          <div className="relative flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden">
            
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full md:w-auto relative z-10">
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = categoryCounts[cat.id] ?? 0;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-colors whitespace-nowrap cursor-pointer z-10 flex items-center gap-2 ${
                      isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFaqCategoryPill"
                        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/25 -z-10"
                      />
                    )}
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                      isActive ? 'bg-black/20 text-black' : 'bg-white/5 text-amber-400/80'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative flex-1 min-w-[200px] max-w-full md:max-w-xs z-10">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full bg-[#120F0C] border border-white/10 rounded-xl pl-8 pr-8 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 font-mono transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        </div>

        {/* FAQs Accordion List */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3.5 mb-12"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                index={idx}
                isOpen={openFaqId === faq.id}
                onToggle={() => toggleFaq(faq.id)}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))
          ) : (
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-2">
              <p className="text-sm font-bold text-gray-300">No questions matched &quot;{searchQuery}&quot;</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-mono text-amber-400 underline hover:text-amber-300"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </motion.div>

        {/* Direct Solutions Architect Concierge Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#14100C] to-emerald-500/5 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a specific technical question?</h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">Speak directly with our UAE lead solutions architect (+971 52 339 4001).</p>
            </div>
          </div>

          <a
            href={AGENCY_BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-black text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer shrink-0"
          >
            <span>Ask via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;