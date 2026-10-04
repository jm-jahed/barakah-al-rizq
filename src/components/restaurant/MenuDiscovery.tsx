import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, UtensilsCrossed, Crown, ChevronDown } from 'lucide-react';
import { RESTAURANT_CATALOG, RestaurantDish } from '@/data/restaurantCatalogData';
import { MenuItemCard } from './MenuItemCard';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface MenuDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectDish: (dish: RestaurantDish) => void;
  onReserveDish: (dish: RestaurantDish) => void;
  comparedDishes: RestaurantDish[];
  onToggleCompare: (dish: RestaurantDish) => void;
  savedDishes: RestaurantDish[];
  onToggleSave: (dish: RestaurantDish) => void;
}

const CATEGORY_IDS = [
  { id: 'all' },
  { id: 'royal-emirates-heritage' },
  { id: 'levant-coastal-seafood' },
  { id: 'persian-saffron-grills' },
  { id: 'ottoman-palace-meze' },
  { id: 'artisanal-flatbreads' },
  { id: 'majlis-confectionery' },
  { id: 'botanical-infusions-mocktails' },
  { id: 'private-imperial-banqueting' }
];

export const MenuDiscovery: React.FC<MenuDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectDish,
  onReserveDish,
  comparedDishes,
  onToggleCompare,
  savedDishes,
  onToggleSave
}) => {
  const { t, translateCategory, translateDietary, translateDish, formatPrice, formatNumber, isRtl } = useRestaurantLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(1200);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'calories' | 'rating' | 'prep-time'>('featured');
  const [onlySignatures, setOnlySignatures] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const dietaryOptions = ['Halal Certified', 'Gluten Free', 'Contains Shellfish', 'Organic Ingredients', 'Vegetarian Option'];

  const handleToggleDietary = (tag: string) => {
    setSelectedDietary(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setVisibleCount(16);
  };

  const filteredDishes = useMemo(() => {
    return RESTAURANT_CATALOG.filter(dish => {
      // Category filter
      if (selectedCategory !== 'all' && dish.categoryId !== selectedCategory) {
        return false;
      }
      // Price filter
      if (dish.priceAED > maxPrice) {
        return false;
      }
      // Signature filter
      if (onlySignatures && !dish.isSignature) {
        return false;
      }
      // Dietary filter
      if (selectedDietary.length > 0) {
        const hasAllDietary = selectedDietary.every(tag => dish.dietaryTags.includes(tag));
        if (!hasAllDietary) return false;
      }
      // Search query (support matching both English and Arabic)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const dishAr = translateDish(dish);
        const matchesTitle = dish.title.toLowerCase().includes(query) || dishAr.title.toLowerCase().includes(query);
        const matchesDesc = dish.shortDescription.toLowerCase().includes(query) || dishAr.shortDescription.toLowerCase().includes(query);
        const matchesOrigin = dish.originRegion.toLowerCase().includes(query) || dishAr.originRegion.toLowerCase().includes(query);
        const matchesChef = dish.executiveChef.name.toLowerCase().includes(query) || dishAr.executiveChef.name.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesOrigin && !matchesChef) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'calories') return a.caloriesKcal - b.caloriesKcal;
      if (sortBy === 'prep-time') return a.preparationMinutes - b.preparationMinutes;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, maxPrice, selectedDietary, searchQuery, sortBy, onlySignatures, translateDish]);

  const displayedDishes = useMemo(() => {
    return filteredDishes.slice(0, visibleCount);
  }, [filteredDishes, visibleCount]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setMaxPrice(1200);
    setSelectedDietary([]);
    setSortBy('featured');
    setOnlySignatures(false);
    setVisibleCount(16);
  };

  const hasMore = visibleCount < filteredDishes.length;
  const progressPercent = Math.min(100, Math.round((displayedDishes.length / (filteredDishes.length || 1)) * 100));

  return (
    <section id="menu-catalog" className="py-16 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-1">
              {t('menu_badge')}
            </div>
            <h2 className="text-3xl font-serif font-bold text-zinc-100">
              {t('menu_title')}
            </h2>
          </div>
          <div className="text-xs text-zinc-400 font-mono">
            {t('displaying')}{' '}
            <span className="text-amber-400 font-bold">{formatNumber(displayedDishes.length)}</span>{' '}
            {t('of')} {formatNumber(filteredDishes.length)} {t('artisanal_dishes')}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-zinc-800">
          {CATEGORY_IDS.map(cat => {
            const isActive = selectedCategory === cat.id;
            const categoryName = cat.id === 'all' ? t('category_all') : translateCategory(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setVisibleCount(16);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-950/40'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                }`}
              >
                {categoryName}
              </button>
            );
          })}
        </div>

        {/* Controls Filter Bar */}
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md mb-8 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className={`w-4 h-4 text-zinc-400 absolute ${isRtl ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(16);
                }}
                placeholder={t('search_placeholder')}
                className={`w-full ${isRtl ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute ${isRtl ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Max Slider */}
            <div className="p-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl flex flex-col justify-center">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-zinc-400 font-mono">{t('max_price')}:</span>
                <span className="text-amber-400 font-bold font-mono">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={45}
                max={1200}
                step={25}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(16);
                }}
                className="w-full accent-amber-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className={`w-full ${isRtl ? 'pr-4 pl-10' : 'px-4'} py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500 appearance-none font-mono`}
              >
                <option value="featured">{t('sort_featured')}</option>
                <option value="price-asc">{t('sort_price_asc')}</option>
                <option value="price-desc">{t('sort_price_desc')}</option>
                <option value="rating">{t('sort_rating')}</option>
                <option value="calories">{t('sort_calories')}</option>
                <option value="prep-time">{t('sort_prep_time')}</option>
              </select>
              <ArrowUpDown className={`w-3.5 h-3.5 text-zinc-400 absolute ${isRtl ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 pointer-events-none`} />
            </div>

            {/* Signature Tag Button */}
            <button
              onClick={() => {
                setOnlySignatures(prev => !prev);
                setVisibleCount(16);
              }}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                onlySignatures
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-md'
                  : 'bg-zinc-950/80 border-zinc-700/60 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('chef_signatures_only')}</span>
            </button>

          </div>

          {/* Dietary Checkboxes */}
          <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-mono text-zinc-400 ${isRtl ? 'ml-2' : 'mr-2'} flex items-center gap-1`}>
              <SlidersHorizontal className="w-3 h-3 text-amber-400" /> {t('dietary_protocols')}:
            </span>
            {dietaryOptions.map(tag => {
              const isSelected = selectedDietary.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleToggleDietary(tag)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {translateDietary(tag)}
                </button>
              );
            })}
          </div>

          {/* Active Filters Summary */}
          {(selectedCategory !== 'all' || searchQuery || maxPrice < 1200 || selectedDietary.length > 0 || onlySignatures) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-500">{t('active_filters')}:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  {translateCategory(selectedCategory)}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => onSelectCategory('all')} />
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  &quot;{searchQuery}&quot;
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setSearchQuery('')} />
                </span>
              )}
              {maxPrice < 1200 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  {formatPrice(maxPrice)}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setMaxPrice(1200)} />
                </span>
              )}
              {onlySignatures && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  {t('chef_signatures_only')}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setOnlySignatures(false)} />
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" /> {t('reset_filters')}
              </button>
            </div>
          )}
        </div>

        {/* Menu Grid */}
        {displayedDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedDishes.map(dish => (
              <MenuItemCard
                key={dish.id}
                dish={dish}
                onSelect={onSelectDish}
                onReserve={onReserveDish}
                isCompared={comparedDishes.some(d => d.id === dish.id)}
                onToggleCompare={onToggleCompare}
                isSaved={savedDishes.some(d => d.id === dish.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <UtensilsCrossed className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-zinc-200">{t('no_dishes_found')}</h3>
            <p className="mt-1 text-xs text-zinc-400">{t('try_adjusting_filters')}</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-zinc-950 font-bold"
            >
              {t('reset_filters')}
            </button>
          </div>
        )}

        {/* "See More" Progressive Loading Section */}
        {filteredDishes.length > 0 && (
          <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>{t('displaying')} <strong className="text-amber-400 font-bold">{formatNumber(displayedDishes.length)}</strong> {t('of')} <strong className="text-zinc-200 font-bold">{formatNumber(filteredDishes.length)}</strong> {t('artisanal_dishes')}</span>
                <span className="text-amber-400 font-bold">{formatNumber(progressPercent)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            {hasMore ? (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(filteredDishes.length, prev + 16))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                  <span>{t('see_more_creations')} (+{formatNumber(Math.min(16, filteredDishes.length - visibleCount))})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredDishes.length)}
                  className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  {t('show_all')} {formatNumber(filteredDishes.length)} {t('creations')}
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  {t('all_dishes_displayed')}
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('menu-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-amber-400 hover:underline inline-block pt-1"
                >
                  {t('return_to_top')}
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

