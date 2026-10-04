'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Clock } from 'lucide-react';

export const RestaurantJournal: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: "rj-1",
      title: "The Art of Modern Middle Eastern Dining",
      category: "Culinary Heritage",
      readTime: "5 Min Read",
      excerpt: "How traditional Levantine and Gulf recipes are being reinterpreted through high-heat mesquite wood grilling.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      content: "For centuries, Middle Eastern cooking has revolved around patience, charcoal embers, and warm communal gatherings. Today, high-end Dubai dining marries these ancestral traditions with French culinary precision."
    },
    {
      id: "rj-2",
      title: "Understanding Middle Eastern Spices: Saffron, Sumac & Za'atar",
      category: "Spices",
      readTime: "4 Min Read",
      excerpt: "An exploration into Khorasan saffron threads, wild mountain sumac, and hand-blended wild za'atar.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
      content: "Spices in Arabian gastronomy are not merely seasonings; they represent centuries of trade routes along the Silk Road. Khorasan saffron brings honeyed floral warmth to Wagyu marinades."
    },
    {
      id: "rj-3",
      title: "How To Pair Food & Specialty Arabic Coffee",
      category: "Pairings",
      readTime: "6 Min Read",
      excerpt: "Guide to matching green cardamom dallah coffee with rich pistachio kunafa and dark chocolate fondant.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      content: "Arabic coffee (Dallah) served with green cardamom and saffron possesses a delicate, tea-like clarity that cuts through sweet kataifi pastry and rich goat cheese fatteh."
    }
  ];

  return (
    <section id="journal" className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            EDITORIAL GASTRONOMY JOURNAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            The Culinary Journal.
          </h2>
          <p className="text-base text-gray-400">
            Articles exploring open-fire charcoal techniques, saffron sourcing, and Arabian hospitality heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedArticle(art)}
              className="rounded-3xl bg-[#10141C] border border-amber-500/20 hover:border-amber-400/50 transition-all overflow-hidden cursor-pointer shadow-2xl group flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 font-bold uppercase border border-amber-500/30">
                  {art.category} • {art.readTime}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 mt-1">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article Reading Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-3xl w-full bg-[#0E131A] border border-amber-500/40 rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] space-y-4 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h3 className="text-2xl font-extrabold text-white font-serif">{selectedArticle.title}</h3>

                <div className="relative h-64 rounded-2xl overflow-hidden bg-black border border-white/10">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans pt-2">
                  {selectedArticle.content}
                </p>

                <div className="pt-4 border-t border-white/10 text-right">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-extrabold text-xs"
                  >
                    Close Article
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
