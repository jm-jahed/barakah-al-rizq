"use client";

import React from "react";
import {
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
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { ProductCategory } from "../../types/restaurantPos";

export const CategoryTabs: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory, products, lang } =
    useRestaurantPos();

  const activeCategories = categories.filter((c) => c.isActive);

  const getCategoryCount = (slug: string) => {
    if (slug === "all") return products.length;
    return products.filter((p) => p.category === slug).length;
  };

  const renderIcon = (iconName: string, isSelected: boolean) => {
    const cls = "w-3.5 h-3.5";
    switch (iconName) {
      case "Flame":
        return <Flame className={cls} />;
      case "Pizza":
        return <Pizza className={cls} />;
      case "Wheat":
        return <Wheat className={cls} />;
      case "Beef":
        return <Beef className={cls} />;
      case "Utensils":
        return <Utensils className={cls} />;
      case "Salad":
        return <Salad className={cls} />;
      case "Wine":
        return <Wine className={cls} />;
      case "Coffee":
        return <Coffee className={cls} />;
      case "IceCream":
        return <IceCream className={cls} />;
      case "ChefHat":
        return <ChefHat className={cls} />;
      case "Sparkles":
        return <Sparkles className={cls} />;
      default:
        return <UtensilsCrossed className={cls} />;
    }
  };

  return (
    <div className="w-full bg-[#10121A] border-b border-[#1E2230] px-3.5 py-2 select-none">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {activeCategories.map((cat) => {
          const isActive = selectedCategory === cat.slug;
          const count = getCategoryCount(cat.slug);

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug as ProductCategory)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                isActive
                  ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/25 scale-[1.02]"
                  : "bg-[#161924] text-slate-300 border border-[#262B3B] hover:border-slate-500 hover:text-white"
              }`}
            >
              <span className={isActive ? "text-black" : "text-[#D4AF37]"}>
                {renderIcon(cat.icon, isActive)}
              </span>
              <span>{lang === "ar" ? cat.arabicName : cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-extrabold ${
                  isActive
                    ? "bg-black/20 text-black"
                    : "bg-[#222736] text-slate-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
