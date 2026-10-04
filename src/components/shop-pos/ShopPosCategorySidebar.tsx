"use client";

import React from "react";
import {
  LayoutGrid,
  Coffee,
  Cookie,
  Milk,
  Croissant,
  ShoppingBag,
  Smartphone,
  Heart,
  Shirt,
  Wrench,
  Tag,
  Layers,
  Boxes,
} from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

export const ShopPosCategorySidebar: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory, products, lang } = useShopPos();

  const getCategoryCount = (catId: string) => {
    if (catId === "all") return products.length;
    return products.filter((p) => p.categoryId === catId || (p as any).category === catId).length;
  };

  const renderIcon = (catId: string, isActive: boolean) => {
    const cls = `w-3.5 h-3.5 flex-shrink-0 transition-colors ${
      isActive ? "text-black" : "text-[#CEA731]"
    }`;
    switch (catId.toLowerCase()) {
      case "all":
        return <LayoutGrid className={cls} />;
      case "beverages":
        return <Coffee className={cls} />;
      case "snacks":
        return <Cookie className={cls} />;
      case "dairy":
        return <Milk className={cls} />;
      case "bakery":
        return <Croissant className={cls} />;
      case "pantry":
      case "grocery":
        return <ShoppingBag className={cls} />;
      case "electronics":
        return <Smartphone className={cls} />;
      case "personal_care":
        return <Heart className={cls} />;
      case "clothing":
        return <Shirt className={cls} />;
      case "hardware":
        return <Wrench className={cls} />;
      default:
        return <Tag className={cls} />;
    }
  };

  const isAllActive = selectedCategory === "all" || !selectedCategory;

  return (
    <aside className="w-[180px] min-w-[180px] max-w-[180px] bg-[#0A0D14] border-r border-[#1B2130] flex flex-col p-2 gap-1.5 overflow-y-auto custom-scrollbar select-none flex-shrink-0">
      {/* Category Header */}
      <div className="px-1.5 py-1 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
        <span className="text-white font-extrabold flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#CEA731]" />
          <span>{lang === "ar" ? "الأقسام" : "CATEGORIES"}</span>
        </span>
        <span className="text-[#CEA731] font-mono bg-[#141A28] px-2 py-0.5 rounded-full border border-[#CEA731]/30 text-[10px] font-bold">
          {categories.length}
        </span>
      </div>

      {/* Universal "All Products" Button */}
      <button
        onClick={() => setSelectedCategory("all")}
        className={`w-full flex items-center justify-between px-2 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
          isAllActive
            ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B0871A] text-black shadow-md shadow-[#D4AF37]/25 font-black scale-[1.01]"
            : "bg-[#101420] text-slate-300 border border-[#1C2335] hover:border-[#CEA731]/60 hover:text-white"
        }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
              isAllActive
                ? "bg-black/20 text-black"
                : "bg-[#161D2E] text-[#CEA731] border border-[#27334A]"
            }`}
          >
            {renderIcon("all", isAllActive)}
          </div>
          <span className="truncate text-left font-bold text-xs">
            {lang === "ar" ? "كل الأصناف" : "All Products"}
          </span>
        </div>

        <span
          className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold border flex-shrink-0 ${
            isAllActive
              ? "bg-black/20 text-black border-black/20"
              : "bg-[#191F2C] text-slate-400 border-[#252E40]"
          }`}
        >
          {products.length}
        </span>
      </button>

      {/* Retail Categories */}
      {categories.filter((c) => c.id !== "all").map((cat) => {
        const isActive = selectedCategory === cat.id;
        const count = getCategoryCount(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(isActive ? "all" : cat.id)}
            className={`w-full flex items-center justify-between px-2 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B0871A] text-black shadow-md shadow-[#D4AF37]/25 font-black scale-[1.01]"
                : "bg-[#101420] text-slate-300 border border-[#1C2335] hover:border-[#CEA731]/60 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                  isActive
                    ? "bg-black/20 text-black"
                    : "bg-[#161D2E] text-[#CEA731] border border-[#27334A]"
                }`}
              >
                {renderIcon(cat.id, isActive)}
              </div>
              <span className="truncate text-left font-bold text-xs">
                {lang === "ar" ? cat.arabicName : cat.name}
              </span>
            </div>

            <span
              className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono font-bold border flex-shrink-0 ${
                isActive
                  ? "bg-black/20 text-black border-black/20"
                  : "bg-[#191F2C] text-slate-400 border-[#252E40]"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

