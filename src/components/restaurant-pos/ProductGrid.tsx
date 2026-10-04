"use client";

import React from "react";
import { Plus, Check, AlertCircle } from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { Product } from "../../types/restaurantPos";

export const ProductGrid: React.FC = () => {
  const { filteredProducts, addToCart, cartItems, formatDhs, lang } = useRestaurantPos();

  const getCartQuantity = (productId: string) => {
    const found = cartItems.find((item) => item.productId === productId);
    return found ? found.quantity : 0;
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-slate-500">
        <AlertCircle className="w-12 h-12 text-slate-600 mb-3 stroke-[1.5]" />
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-300">
          {lang === "ar" ? "لم يتم العثور على أطباق مطابقة" : "No matching menu items found"}
        </h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm">
          {lang === "ar"
            ? "يرجى تجربة كلمة بحث أخرى أو اختيار تصنيف مختلف من الأعلى."
            : "Try a different search keyword or switch categories above."}
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-2 sm:p-3.5 overflow-y-auto min-h-0 bg-slate-100 dark:bg-[#0B0D14]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 sm:gap-3 pb-8">
        {filteredProducts.map((product) => {
          const qtyInCart = getCartQuantity(product.id);
          const isSelected = qtyInCart > 0;

          return (
            <div
              key={product.id}
              onClick={() => product.isAvailable && addToCart(product)}
              className={`group relative flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-150 select-none ${
                product.isAvailable
                  ? "cursor-pointer active:scale-[0.98] hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-black/50"
                  : "opacity-50 cursor-not-allowed"
              } ${
                isSelected
                  ? "bg-amber-500/10 dark:bg-[#181C28] border-amber-500 dark:border-[#D4AF37] shadow-lg shadow-amber-500/15 ring-1 ring-amber-500/60"
                  : "bg-white dark:bg-[#12141C] border-slate-200 dark:border-[#202434] hover:border-amber-500 dark:hover:border-slate-500 shadow-sm"
              }`}
            >
              {/* Product Visual */}
              <div className="relative w-full h-32 sm:h-36 bg-slate-200 dark:bg-[#1A1D2A] overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* SKU badge */}
                <div className="absolute top-1.5 start-1.5 sm:top-2 sm:start-2 px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded-md bg-black/75 backdrop-blur text-white text-[9px] sm:text-[10px] font-mono font-medium border border-white/10 z-10">
                  {product.sku}
                </div>

                {/* Active in-cart indicator */}
                {isSelected && (
                  <div className="absolute top-1.5 end-1.5 sm:top-2 sm:end-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#D4AF37] text-black text-base sm:text-lg font-black font-mono shadow-2xl flex items-center gap-1 border-2 border-black/20 z-10 animate-in zoom-in-50">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 stroke-[4]" />
                    <span>{qtyInCart}</span>
                  </div>
                )}

                {/* Sold Out badge if unavailable */}
                {!product.isAvailable && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <span className="px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] sm:text-[11px] font-black tracking-wide">
                      {lang === "ar" ? "نفدت الكمية" : "OUT OF STOCK"}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Content Details */}
              <div className="p-2 sm:p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {lang === "ar" ? product.arabicName : product.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal">
                    {lang === "ar" ? product.name : product.arabicName}
                  </p>
                </div>

                {/* Footer: Price in Dhs & Add Button */}
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-slate-200 dark:border-[#1C202C] flex items-center justify-between">
                  <div>
                    <div className="text-base sm:text-lg font-black text-amber-700 dark:text-[#D4AF37] font-mono tracking-tight">
                      {formatDhs(product.price)}
                    </div>
                  </div>

                  <button
                    disabled={!product.isAvailable}
                    aria-label={`Add ${product.name}`}
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[#D4AF37] text-black shadow-sm font-bold"
                        : "bg-[#1C202E] text-slate-300 group-hover:bg-[#D4AF37] group-hover:text-black"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
