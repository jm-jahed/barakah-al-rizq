import React, { useState } from 'react';
import { X, Award, Clock, Users, Flame, Wine, Heart, Plus, Check, UtensilsCrossed } from 'lucide-react';
import { RestaurantDish } from '@/data/restaurantCatalogData';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface MenuItemModalProps {
  dish: RestaurantDish | null;
  onClose: () => void;
  onReserve: (dish: RestaurantDish) => void;
  isSaved: boolean;
  onToggleSave: (dish: RestaurantDish) => void;
  isCompared: boolean;
  onToggleCompare: (dish: RestaurantDish) => void;
}

export const MenuItemModal: React.FC<MenuItemModalProps> = ({
  dish,
  onClose,
  onReserve,
  isSaved,
  onToggleSave,
  isCompared,
  onToggleCompare
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t, translateDish, formatPrice, toArabicDigits, isRtl } = useRestaurantLanguage();

  if (!dish) return null;

  const localizedDish = translateDish(dish);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/60 my-auto text-zinc-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white backdrop-blur-md border border-zinc-700/50 transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          
          {/* Left Column: Media & Gallery */}
          <div className={`p-6 sm:p-8 bg-zinc-900/50 flex flex-col justify-between border-b md:border-b-0 ${isRtl ? 'md:border-l' : 'md:border-r'} border-zinc-800`}>
            <div>
              {/* Main Image */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-zinc-950 mb-4 border border-zinc-800">
                <img
                  src={dish.gallery[activeImageIndex] || dish.heroImage}
                  alt={localizedDish.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'}`}>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    {localizedDish.originRegion}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {dish.gallery && dish.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {dish.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-16 rounded-xl overflow-hidden cursor-pointer border transition-all ${
                        activeImageIndex === idx
                          ? 'border-amber-500 ring-2 ring-amber-500/40'
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Chef Attribution Box */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-serif font-bold text-zinc-100">
                    {localizedDish.executiveChef.name}
                  </div>
                  <div className="text-[11px] text-amber-400 font-mono">
                    {localizedDish.executiveChef.title}
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    {localizedDish.executiveChef.accolades}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Details & Booking */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            
            <div className="space-y-5">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
                  {localizedDish.categoryName}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {t('rating')}: <span className="text-amber-300 font-bold">{toArabicDigits(dish.rating)} / {toArabicDigits(5)}.0</span> ({toArabicDigits(dish.reviewsCount)} {t('reviews')})
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-100 leading-tight">
                {localizedDish.title}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-amber-300">
                  {formatPrice(dish.priceAED)}
                </span>
                {dish.originalPriceAED && (
                  <span className="text-sm font-mono text-zinc-400 line-through">
                    {formatPrice(dish.originalPriceAED)}
                  </span>
                )}
                <span className="text-xs text-zinc-400 font-mono">
                  ({t('vat_exclusive')})
                </span>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs">
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-[10px]">{t('calories_label')}</span>
                  <span className="font-mono text-zinc-200 flex items-center gap-1 mt-0.5">
                    <Flame className="w-3 h-3 text-amber-500" /> {toArabicDigits(dish.caloriesKcal)} {t('calories')}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-[10px]">{t('prep_label')}</span>
                  <span className="font-mono text-zinc-200 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-amber-500" /> {toArabicDigits(dish.preparationMinutes)} {t('minutes')}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-[10px]">{t('serves_label')}</span>
                  <span className="font-mono text-zinc-200 flex items-center gap-1 mt-0.5">
                    <Users className="w-3 h-3 text-amber-500" /> {toArabicDigits(dish.servesPersons)} {dish.servesPersons === 1 ? t('person') : t('persons')}
                  </span>
                </div>
              </div>

              {/* Sommelier Pairing Highlight */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Wine className="w-4 h-4 text-amber-400" />
                  <span>{t('sommelier_pairing_label')}</span>
                </div>
                <p className="text-zinc-300 text-[11px] leading-relaxed font-sans">
                  {localizedDish.sommelierPairing}
                </p>
              </div>

              {/* Tasting Notes */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                  {t('tasting_progression_label')}
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {localizedDish.tastingNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-500 text-sm leading-none">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients & Source */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">
                  {t('master_ingredients_label')}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {localizedDish.ingredients.map((ing, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-[11px] bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => onToggleCompare(dish)}
                  className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                    isCompared
                      ? 'bg-amber-500 text-zinc-950 border-amber-500'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white'
                  }`}
                >
                  {isCompared ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{isCompared ? t('compared') : t('compare')}</span>
                </button>

                <button
                  onClick={() => onToggleSave(dish)}
                  className={`flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors flex items-center justify-center gap-1.5 ${
                    isSaved
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? t('saved') : t('save')}</span>
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onReserve(dish);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>{t('reserve_for_dish')}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

