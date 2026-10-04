import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_CATALOG, RestaurantDish } from '@/data/restaurantCatalogData';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface MenuSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDish: (dish: RestaurantDish) => void;
}

export const MenuSearchOverlay: React.FC<MenuSearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectDish
}) => {
  const { t, translateDish, formatPrice, toArabicDigits, isRtl } = useRestaurantLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (!isOpen) return null;

  const results = query.trim()
    ? RESTAURANT_CATALOG.filter(dish => {
        const q = query.toLowerCase().trim();
        const dishAr = translateDish(dish);
        return (
          dish.title.toLowerCase().includes(q) ||
          dishAr.title.toLowerCase().includes(q) ||
          dish.categoryName.toLowerCase().includes(q) ||
          dishAr.categoryName.toLowerCase().includes(q) ||
          dish.originRegion.toLowerCase().includes(q) ||
          dishAr.originRegion.toLowerCase().includes(q) ||
          dish.executiveChef.name.toLowerCase().includes(q) ||
          dishAr.executiveChef.name.toLowerCase().includes(q) ||
          dish.shortDescription.toLowerCase().includes(q) ||
          dishAr.shortDescription.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : RESTAURANT_CATALOG.slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-zinc-950 border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-amber-950/70 text-zinc-100 z-10">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center p-4 border-b border-zinc-800">
          <Search className={`w-5 h-5 text-amber-400 ${isRtl ? 'ml-3' : 'mr-3'} shrink-0`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search_overlay_placeholder')}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className={`p-1 rounded text-zinc-400 hover:text-white ${isRtl ? 'ml-2' : 'mr-2'}`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-[11px] font-mono text-zinc-400 hover:text-white bg-zinc-900 rounded border border-zinc-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-2 divide-y divide-zinc-900">
          <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 px-3 py-1">
            {query.trim() ? `${t('found_matches')} (${toArabicDigits(results.length)})` : t('curated_chef_recommendations')}
          </div>

          {results.map(dish => {
            const localizedDish = translateDish(dish);
            return (
              <div
                key={dish.id}
                onClick={() => {
                  onClose();
                  onSelectDish(dish);
                }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-zinc-900/90 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden shrink-0 bg-zinc-900">
                    <img src={dish.heroImage} alt={localizedDish.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-serif font-bold text-zinc-100 group-hover:text-amber-300 transition-colors truncate">
                      {localizedDish.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-400 mt-0.5">
                      <span className="text-amber-400">{localizedDish.categoryName}</span>
                      <span>•</span>
                      <span>{localizedDish.originRegion}</span>
                    </div>
                  </div>
                </div>

                <div className={`flex items-center gap-3 shrink-0 ${isRtl ? 'text-left' : 'text-right'}`}>
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-300">
                      {formatPrice(dish.priceAED)}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono">
                      {toArabicDigits(dish.caloriesKcal)} {t('calories')}
                    </div>
                  </div>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:-translate-x-1 transition-all" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </div>
            );
          })}

          {results.length === 0 && (
            <div className="py-12 text-center text-zinc-500">
              <UtensilsCrossed className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <div className="text-xs">{t('no_matching_dishes')}</div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-zinc-900/50 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
          <span>{t('al_sultan_footer_brand')}</span>
          <span>{t('press_esc_close')}</span>
        </div>

      </div>
    </div>
  );
};

