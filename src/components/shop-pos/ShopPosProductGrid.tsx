"use client";

import React, { useState } from "react";
import { Plus, Check, AlertCircle, Barcode, Tag } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { RetailProduct } from "@/types/shopPos";
import { ShopPosBarcodeLabelModal } from "./ShopPosBarcodeLabelModal";

export const ShopPosProductGrid: React.FC = () => {
  const {
    filteredProducts,
    addToCart,
    cartItems,
    formatPrice,
    lang,
    setSearchQuery,
    setSelectedCategory,
  } = useShopPos();

  const [selectedProductForBarcode, setSelectedProductForBarcode] = useState<RetailProduct | null>(null);

  const getCartQuantity = (productId: string) => {
    const found = cartItems.find((item) => item.productId === productId);
    return found ? found.quantity : 0;
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-slate-500 min-h-[350px]">
        <div className="w-16 h-16 rounded-2xl bg-[#121724] border border-[#202738] flex items-center justify-center mb-3 text-[#D4AF37]">
          <AlertCircle className="w-8 h-8 stroke-[1.8]" />
        </div>
        <h3 className="text-base font-bold text-slate-200">
          {lang === "ar" ? "لم يتم العثور على منتجات مطابقة" : "No matching retail products found"}
        </h3>
        <p className="text-xs text-slate-400 mt-1 max-w-sm">
          {lang === "ar"
            ? "يرجى مسح باركود آخر أو استخدام كلمة بحث مختلفة أو تصفية الأقسام."
            : "Try scanning another barcode, searching by SKU/Name, or selecting a different category."}
        </p>
        <button
          onClick={() => {
            setSearchQuery("");
            setSelectedCategory("all");
          }}
          className="mt-4 px-4 py-2 rounded-xl bg-[#181D2A] hover:border-[#D4AF37] border border-[#222A3C] text-xs font-semibold text-slate-200 transition"
        >
          {lang === "ar" ? "إعادة ضبط البحث والأقسام" : "Reset Filters & Search"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 p-3 sm:p-4 lg:p-5 overflow-y-auto custom-scrollbar min-h-0 bg-[#07090F]">
      {/* Touch-Friendly Responsive Grid Layout (Strictly 3 columns on tablet/desktop for 3x3 view) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5 pb-16">
        {filteredProducts.map((product) => {
          const qtyInCart = getCartQuantity(product.id);
          const isSelected = qtyInCart > 0;
          const isLowStock = product.stock > 0 && product.stock <= product.minStock;
          const isMaxStockReached = product.stock > 0 && qtyInCart >= product.stock;
          const isOutOfStock = product.stock <= 0 || isMaxStockReached;

          return (
            <div
              key={product.id}
              onClick={() => !isOutOfStock && addToCart(product, 1)}
              className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-200 select-none h-full min-h-[180px] sm:min-h-[200px] xl:min-h-[210px] ${
                !isOutOfStock
                  ? "cursor-pointer active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.18)]"
                  : "opacity-60 cursor-not-allowed"
              } ${
                isSelected
                  ? "bg-[#121724] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 ring-2 ring-[#D4AF37]/60"
                  : "bg-[#0E121B] border-[#1C2333] hover:border-[#D4AF37]/70 shadow-sm"
              }`}
            >
              {/* Product Visual & Image Container - Fixed Height */}
              <div className="relative w-full h-24 sm:h-28 xl:h-28 bg-[#141A26] overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* SKU Badge Top-Left */}
                <div className="absolute top-2 start-2 px-1.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white text-[9px] font-mono font-bold border border-white/15 z-10 max-w-[100px] truncate">
                  {product.sku}
                </div>

                {/* In-Cart Count Badge Top-Right */}
                {isSelected && (
                  <div className="absolute top-2 end-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-black text-xs font-black font-mono shadow-md flex items-center gap-1 border border-black/20 z-10">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    <span>{qtyInCart}</span>
                  </div>
                )}

                {/* Out of Stock / Low Stock Overlays */}
                {isOutOfStock && (
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Barcode Label Print Trigger Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProductForBarcode(product);
                  }}
                  className="absolute bottom-2 end-2 p-1 rounded-lg bg-black/70 backdrop-blur-md text-slate-300 hover:text-[#D4AF37] border border-white/20 opacity-0 group-hover:opacity-100 transition z-20 cursor-pointer"
                  title="Print Barcode Label Sheet"
                >
                  <Barcode className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product Info & Pricing Footer - Fixed Alignment */}
              <div className="p-2.5 flex-1 flex flex-col justify-between min-w-0">
                <div className="min-w-0">
                  {/* Brand & Stock Metadata Row */}
                  <div className="flex items-center justify-between gap-1 text-[10px] text-slate-400 font-medium mb-1 min-w-0">
                    <span className="truncate flex-1 min-w-0">{product.brand || product.categoryName}</span>
                    <span className={`flex-shrink-0 font-mono ${isLowStock ? "text-amber-400 font-bold" : "text-slate-500"}`}>
                      {product.stock} {product.unit}
                    </span>
                  </div>

                  {/* Fixed 2-Line Reserved Title Area (h-8) */}
                  <div className="h-8 flex items-center min-w-0 overflow-hidden">
                    <h4 className="text-xs font-bold text-slate-100 group-hover:text-[#D4AF37] line-clamp-2 leading-tight transition-colors min-w-0">
                      {lang === "ar" && product.arabicName ? product.arabicName : product.name}
                    </h4>
                  </div>
                </div>

                {/* Anchored Bottom Pricing Row */}
                <div className="mt-2 pt-1.5 border-t border-[#1C2333] flex items-center justify-between gap-1 min-w-0 flex-shrink-0">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-xs sm:text-sm font-black text-[#D4AF37] font-mono truncate">
                      {formatPrice(product.price)}
                    </span>
                    {product.wholesalePrice && (
                      <span className="text-[9px] text-slate-500 truncate">WS: {formatPrice(product.wholesalePrice)}</span>
                    )}
                  </div>

                  <div className="p-1.5 rounded-xl bg-[#182030] group-hover:bg-[#D4AF37] text-slate-300 group-hover:text-black transition-colors flex-shrink-0 ms-1">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Barcode Label Generator Sheet Modal */}
      <ShopPosBarcodeLabelModal
        isOpen={!!selectedProductForBarcode}
        product={selectedProductForBarcode}
        onClose={() => setSelectedProductForBarcode(null)}
      />
    </div>
  );
};
