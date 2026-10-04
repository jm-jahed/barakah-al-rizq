'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  BookOpen, 
  Clock, 
  Calendar, 
  Share2, 
  Sparkles 
} from 'lucide-react';
import { Article } from '@/data/travelData';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
}) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0C1018] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-200"
        >
          {/* Header Banner */}
          <div className="relative aspect-[21/9] w-full bg-slate-950 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] via-[#0C1018]/50 to-transparent" />

            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Close Article"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 inset-x-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                  {article.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {article.date} • {article.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {article.title}
              </h2>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
            <div className="text-xs font-mono text-amber-400">
              Authored by {article.author}
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-[#090C12] border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              © 2026 AURELIA Editorial Intelligence
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs font-bold"
            >
              Close Article
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
