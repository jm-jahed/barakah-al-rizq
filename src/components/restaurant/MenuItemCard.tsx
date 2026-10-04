import React from 'react';
import { Award, Clock, Heart, Plus, Check, UtensilsCrossed, Users, Flame, Wine } from 'lucide-react';
import { RestaurantDish } from '@/data/restaurantCatalogData';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface MenuItemCardProps {
  dish: RestaurantDish;
  onSelect: (dish: RestaurantDish) => void;
  onReserve: (dish: RestaurantDish) => void;
  isCompared: boolean;
  onToggleCompare: (dish: RestaurantDish) => void;
  isSaved: boolean;
  onToggleSave: (dish: RestaurantDish) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  dish,
  onSelect,
  onReserve,
  isCompared,
  onToggleCompare,
  isSaved,
  onToggleSave
}) => {
  const { t, translateDish, translateCategory, translateDietary, formatPrice, toArabicDigits, isRtl } = useRestaurantLanguage();
  const localizedDish = translateDish(dish);

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-zinc-950/80 border border-amber-900/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-950/30">
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={() => onSelect(dish)}>
        <img
          src={dish.heroImage}
          alt={localizedDish.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 backdrop-blur-md text-amber-300 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            {localizedDish.originRegion}
          </span>
          
          <div className="flex items-center gap-1.5">
            {/* Compare Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(dish);
              }}
              title={isCompared ? t('remove_compare') : t('add_compare')}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isCompared
                  ? 'bg-amber-500 text-zinc-950 font-bold'
                  : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90'
              }`}
            >
              {isCompared ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            </button>

            {/* Save Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(dish);
              }}
              title={isSaved ? t('remove_wishlist') : t('add_wishlist')}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                isSaved
                  ? 'bg-red-500/90 text-white'
                  : 'bg-black/60 text-zinc-300 hover:text-red-400 hover:bg-black/90'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Dietary / Signature Badges */}
        <div className={`absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'} flex flex-wrap gap-1.5 z-10`}>
          {dish.isSignature && (
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/90 text-zinc-950 uppercase tracking-wider">
              {t('chef_signature')}
            </span>
          )}
          {dish.dietaryTags.map((tag, i) => (
            <span key={i} className="px-2 py-0.5 rounded text-[10px] font-medium bg-black/70 backdrop-blur-sm text-zinc-300 border border-zinc-700/50">
              {translateDietary(tag)}
            </span>
          ))}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-amber-400/90 font-mono">
            <span>{translateCategory(dish.categoryId)}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {toArabicDigits(dish.preparationMinutes)} {t('minutes')}
            </span>
          </div>

          <h3
            onClick={() => onSelect(dish)}
            className="text-lg font-serif font-bold text-zinc-100 hover:text-amber-300 cursor-pointer transition-colors line-clamp-1"
          >
            {localizedDish.title}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {localizedDish.shortDescription}
          </p>
        </div>

        {/* Specs Pill Matrix */}
        <div className="grid grid-cols-3 gap-2 py-2 border-y border-zinc-900 text-[11px] text-zinc-300">
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{toArabicDigits(dish.caloriesKcal)} {t('calories')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{t('serves')} {toArabicDigits(dish.servesPersons)}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Wine className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate" title={localizedDish.sommelierPairing}>{t('pairing')}</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-400">{t('tasting_price')}</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold font-serif text-amber-200">
                {formatPrice(dish.priceAED)}
              </span>
              {dish.originalPriceAED && (
                <span className="text-xs text-zinc-400 line-through">
                  {formatPrice(dish.originalPriceAED)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(dish)}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60 transition-colors"
            >
              {t('details')}
            </button>
            <button
              onClick={() => onReserve(dish)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-sans shadow-md shadow-amber-950/50 transition-all flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              {t('reserve')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

