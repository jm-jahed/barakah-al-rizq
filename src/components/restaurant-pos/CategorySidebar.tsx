"use client";

import React from "react";
import {
  LayoutGrid,
  UtensilsCrossed,
  Flame,
  Pizza,
  Utensils,
  Beef,
  Wheat,
  Coffee,
  IceCream,
  Wine,
  Sparkles,
  ChefHat,
  Salad,
  CakeSlice,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { ProductCategory } from "../../types/restaurantPos";

export const CategorySidebar: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory, products, lang } =
    useRestaurantPos();

  const activeCategories = categories.filter((c) => c.isActive);

  const getCategoryCount = (slug: string) => {
    if (slug === "all") return products.length;
    return products.filter((p) => p.category === slug).length;
  };

  const renderIcon = (slug: string, isActive: boolean) => {
    const cls = "w-4 h-4 flex-shrink-0";
    switch (slug) {
      case "all":
        return <LayoutGrid className={cls} />;
      case "appetizers":
        return <UtensilsCrossed className={cls} />;
      case "main_course":
        return <ChefHat className={cls} />;
      case "burgers":
        return <Flame className={cls} />;
      case "pizza":
        return <Pizza className={cls} />;
      case "pasta":
        return <Wheat className={cls} />;
      case "salads":
        return <Salad className={cls} />;
      case "grill":
        return <Beef className={cls} />;
      case "rice":
        return <Utensils className={cls} />;
      case "beverages":
      case "drinks":
        return <Wine className={cls} />;
      case "coffee":
        return <Coffee className={cls} />;
      case "desserts":
        return <IceCream className={cls} />;
      default:
        return <Sparkles className={cls} />;
    }
  };

  return (
    <aside className="w-44 xl:w-48 bg-white dark:bg-[#0F1118] border-r border-slate-200 dark:border-[#1E2230] flex flex-col p-2.5 gap-1.5 overflow-y-auto select-none flex-shrink-0">
      {activeCategories.map((cat) => {
        const isActive = selectedCategory === cat.slug;
        const count = getCategoryCount(cat.slug);

        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.slug as ProductCategory)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
              isActive
                ? "bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 font-black scale-[1.01]"
                : "bg-slate-50 dark:bg-[#141722] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#222736] hover:border-amber-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className={isActive ? "text-black" : "text-amber-600 dark:text-[#D4AF37]"}>
                {renderIcon(cat.slug, isActive)}
              </span>
              <span className="truncate text-left">
                {lang === "ar" ? cat.arabicName : cat.name}
              </span>
            </div>

            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                isActive ? "bg-black/20 text-black" : "bg-slate-200 dark:bg-[#202534] text-slate-600 dark:text-slate-400"
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
