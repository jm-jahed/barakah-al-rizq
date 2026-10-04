import React from 'react';
import { X, Trash2, Heart, UtensilsCrossed, MessageSquare } from 'lucide-react';
import { RestaurantDish } from '@/data/restaurantCatalogData';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface SavedMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedDishes: RestaurantDish[];
  onRemove: (dishId: string) => void;
  onClear: () => void;
  onReserveAll: () => void;
}

export const SavedMenuDrawer: React.FC<SavedMenuDrawerProps> = ({
  isOpen,
  onClose,
  savedDishes,
  onRemove,
  onClear,
  onReserveAll
}) => {
  const { t, translateDish, formatPrice, formatNumber, isRtl } = useRestaurantLanguage();

  if (!isOpen) return null;

  const totalTastingAED = savedDishes.reduce((acc, dish) => acc + dish.priceAED, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className={`fixed inset-y-0 ${isRtl ? 'left-0 pr-10' : 'right-0 pl-10'} max-w-full flex`}>
        <div className={`w-screen max-w-md bg-zinc-950 ${isRtl ? 'border-r' : 'border-l'} border-amber-500/40 text-zinc-100 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl`}>
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  {t('shortlist_title')} ({formatNumber(savedDishes.length)})
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {savedDishes.length > 0 && (
                  <button
                    onClick={onClear}
                    className="text-xs text-zinc-500 hover:text-red-400 font-mono underline mr-2"
                  >
                    {t('clear_all')}
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dish List */}
            {savedDishes.length > 0 ? (
              <div className="mt-6 space-y-4">
                {savedDishes.map(dish => {
                  const localizedDish = translateDish(dish);
                  return (
                    <div key={dish.id} className="relative flex items-center gap-3 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden shrink-0 bg-zinc-950">
                        <img src={dish.heroImage} alt={localizedDish.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-serif font-bold text-zinc-100 truncate">
                          {localizedDish.title}
                        </h4>
                        <div className="text-[11px] text-zinc-400 truncate">{localizedDish.categoryName}</div>
                        <div className="text-xs font-bold font-serif text-amber-300 mt-1">
                          {formatPrice(dish.priceAED)}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(dish.id)}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-20 text-center text-zinc-500 space-y-3">
                <Heart className="w-12 h-12 mx-auto text-zinc-700 stroke-1" />
                <div className="text-sm font-serif text-zinc-400">{t('shortlist_empty_title')}</div>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                  {t('shortlist_empty_desc')}
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {savedDishes.length > 0 && (
            <div className="pt-6 border-t border-zinc-900 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-zinc-400 uppercase font-mono">{t('tasting_menu_total')}</span>
                <span className="text-2xl font-serif font-bold text-amber-300">
                  {formatPrice(totalTastingAED)}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={onReserveAll}
                  className="w-full py-3.5 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-950/60 transition-all flex items-center justify-center gap-2"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>{t('reserve_for_shortlist')}</span>
                </button>

                <a
                  href={`https://wa.me/971508889999?text=${encodeURIComponent(isRtl ? `مرحباً كونسيرج السلطان، أود الاستفسار عن حجز قائمة التذوق المخصصة التالية: ${savedDishes.map(d => translateDish(d).title).join('، ')} (الإجمالي: ${formatPrice(totalTastingAED)}).` : `Hello Al Sultan Concierge, I am interested in reserving the following custom tasting menu: ${savedDishes.map(d => d.title).join(', ')} (Total: ${formatPrice(totalTastingAED)}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('whatsapp_shortlist_btn')}</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

