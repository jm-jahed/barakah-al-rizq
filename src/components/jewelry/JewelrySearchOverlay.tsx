import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Gem, Crown, ArrowRight, ShieldCheck } from 'lucide-react';
import { JEWELRY_CATALOG, JewelryItem } from '@/data/jewelryCatalogData';

interface JewelrySearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: JewelryItem) => void;
}

export const JewelrySearchOverlay: React.FC<JewelrySearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectItem
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedCategory('all');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = JEWELRY_CATALOG.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.disciplineId === selectedCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCat;

    return (
      matchesCat &&
      (item.title.toLowerCase().includes(q) ||
        item.disciplineName.toLowerCase().includes(q) ||
        item.gemstone.toLowerCase().includes(q) ||
        item.material.toLowerCase().includes(q) ||
        item.boutiqueZone.toLowerCase().includes(q) ||
        item.certificationLab.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q))
    );
  }).slice(0, 16);

  const categories = [
    { id: 'all', name: 'All 160 Jewels' },
    { id: 'solitaire-bridal-suite', name: 'Solitaires & Bridal' },
    { id: 'haute-collier-necklaces', name: 'Diamond Colliers' },
    { id: 'colombian-emeralds-rubies', name: 'Emeralds & Rubies' },
    { id: 'grand-complication-timepieces', name: 'Complication Watches' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#12100E] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-zinc-100">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center gap-3 bg-black/50">
          <Search className="w-6 h-6 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 160 diamonds, emeralds, 18K gold, tourbillons, GIA..."
            className="w-full bg-transparent border-none text-white text-base sm:text-lg focus:outline-none placeholder-zinc-500 font-mono"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400 uppercase">
            <span>ESC</span>
          </div>
        </div>

        {/* Quick Category Filters */}
        <div className="px-4 sm:px-6 py-3 border-b border-zinc-800/80 bg-white/[0.02] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-950/40'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Search Results Grid */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Gem className="w-12 h-12 text-zinc-600 mx-auto" />
              <p className="text-sm font-mono text-white font-bold uppercase">No matching creations found</p>
              <p className="text-xs text-zinc-400">Try searching &quot;Solitaire&quot;, &quot;Muzo&quot;, &quot;Tourbillon&quot;, &quot;Basra Pearl&quot; or &quot;Platinum&quot;.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  className="group p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-zinc-800 hover:border-amber-500/40 transition-all cursor-pointer flex gap-3.5 items-center"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-zinc-800 relative">
                    <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-amber-400 block truncate">
                      {item.disciplineName}
                    </span>
                    <h4 className="text-xs font-serif font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between mt-1 text-[10px] font-mono text-zinc-400">
                      <span>{item.caratWeight} • {item.material}</span>
                      <span className="text-amber-300 font-bold">AED {item.priceAED.toLocaleString()}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-black/60 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>DIFC Gate Village &amp; The Dubai Mall VIP Suites</span>
          <span className="text-amber-400 font-bold">160 Sovereign Pieces Cataloged</span>
        </div>

      </div>
    </div>
  );
};
