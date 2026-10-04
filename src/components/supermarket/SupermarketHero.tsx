'use client';

import React, { useState, useEffect } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import {
  ShoppingBag,
  Flame,
  Clock,
  Truck,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
  Plus
} from 'lucide-react';

interface HeroProps {
  onShopClick?: () => void;
  onDealsClick?: () => void;
}

export default function SupermarketHero({ onShopClick, onDealsClick }: HeroProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { addToCart, setIsCartOpen } = useSupermarketCart();

  // Deal countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-zinc-950 to-zinc-950 text-white py-10 lg:py-16 px-4">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Value Proposition & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-start">
          
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-700/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{isRtl ? 'أكبر تشكيلة بقالة في الإمارات — أكثر من 1,000 منتج طازج' : 'UAE Premier Digital Supermarket — 1,000+ Fresh Groceries'}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
            {isRtl ? (
              <>
                طازج <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">ليومك.</span>
                <br />
                بأسعار تناسب كل عائلة.
              </>
            ) : (
              <>
                Fresh for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Today.</span>
                <br />
                Priced for Every Family.
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
            {isRtl
              ? 'تسوق خضروات وفواكه المزارع، اللحوم الطازجة، الألبان، والمنتجات المنزلية بأقل أسعار بالدرهم مع توصيل سريع في نفس اليوم لكافة الإمارات.'
              : 'Direct-from-farm produce, butchery, pantry essentials, and household goods at guaranteed affordable AED prices with rapid cold-chain delivery.'}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onShopClick}
              className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-95 transition-all text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isRtl ? 'تسوق البقالة الآن' : 'Shop Groceries'}</span>
            </button>

            <button
              onClick={onDealsClick}
              className="flex items-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold px-5 py-3.5 rounded-xl border border-zinc-700/60 hover:border-amber-400/50 transition-all text-sm"
            >
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{isRtl ? 'اكتشف عروض اليوم' : "Explore Today's Deals"}</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80">
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">1,000+</div>
              <div className="text-[11px] text-zinc-400 font-medium">
                {isRtl ? 'منتج معتمد' : 'Catalog Items'}
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400">45-60 min</div>
              <div className="text-[11px] text-zinc-400 font-medium">
                {isRtl ? 'توصيل مبرد سريع' : 'Cold Express Van'}
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-teal-400">AED 50</div>
              <div className="text-[11px] text-zinc-400 font-medium">
                {isRtl ? 'حد التوصيل المجاني' : 'Free Delivery Tier'}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Composition with Layered Grocery Deals */}
        <div className="lg:col-span-5 relative">
          
          {/* Main Visual Card */}
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden group">
            
            {/* Tag */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="bg-rose-500/20 text-rose-400 border border-rose-500/40 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-rose-400" />
                {isRtl ? 'صفقة اليوم الكبرى' : "Today's Mega Deal"}
              </span>

              {/* Countdown Timer */}
              <div className="flex items-center gap-1 text-xs font-mono text-amber-300 bg-zinc-900 px-2.5 py-1 rounded-lg border border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Featured Image with Badges */}
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                alt="UAE Supermarket Basket"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-600 text-white font-black text-xs px-2.5 py-1 rounded-lg shadow">
                {isRtl ? 'وفر 25 درهم' : 'SAVE AED 25.00'}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                🇦🇪 {isRtl ? 'منتجات إماراتية طازجة' : 'UAE Local Harvest'}
              </div>
            </div>

            {/* Product Meta */}
            <div className="space-y-1.5 mb-4">
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                {isRtl ? 'سلة الخيرات الأسبوعية للعائلة' : 'Al Mirqab Weekly Family Fresh Basket'}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-2">
                {isRtl
                  ? 'تشمل حليب الروابي، بيض مزارع العين 30 حبة، طماطم وخيار محلي، دجاج طازج وأرز بسمتي.'
                  : 'Includes 2L Fresh Milk, 30 Farm Eggs, 2kg Greenhouse Veggies, 1kg Poultry & 5kg Rice.'}
              </p>
            </div>

            {/* Pricing & Add Button */}
            <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
              <div>
                <div className="text-xs text-zinc-400 line-through">AED 114.00</div>
                <div className="text-2xl font-black text-emerald-400">
                  AED 89.00
                </div>
              </div>

              <button
                onClick={() => {
                  addToCart({
                    id: 'hero-bundle-deal',
                    slug: 'hero-weekly-basket',
                    nameEn: 'Al Mirqab Weekly Family Fresh Basket',
                    nameAr: 'سلة الخيرات الأسبوعية للعائلة',
                    descEn: 'Weekly essential family grocery basket with dairy, eggs, poultry and fresh produce.',
                    descAr: 'سلة البقالة الأسبوعية المتكاملة للعائلة من الحليب والبيض والدواجن والخضار.',
                    category: 'Weekly Bundles',
                    categoryAr: 'الباقات العائلية',
                    categorySlug: 'family-bundles',
                    brand: 'Al Mirqab',
                    origin: 'UAE',
                    unit: 'Family Pack (7 Items)',
                    price: 89.00,
                    originalPrice: 114.00,
                    discountPercent: 22,
                    discountAmount: 25.00,
                    rating: 4.9,
                    reviewsCount: 312,
                    inStock: true,
                    stockQuantity: 50,
                    badge: 'Mega Deal',
                    featured: true,
                    bestseller: true,
                    isNew: false,
                    isUnder10: false,
                    isUnder20: false,
                    isUaeLocal: true,
                    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'
                  });
                  setIsCartOpen(true);
                }}
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>{isRtl ? 'أضف السلة بضغطة واحدة' : 'Add Bundle'}</span>
              </button>
            </div>

          </div>

          {/* Floating Trust Badge */}
          <div className={`absolute -bottom-4 ${isRtl ? '-left-3' : '-right-3'} bg-zinc-900/90 border border-emerald-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3`}>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-start">
              <div className="text-xs font-bold text-white">
                {isRtl ? 'توصيل مبرد سريع' : 'Cold-Chain Chilled Vans'}
              </div>
              <div className="text-[10px] text-emerald-400 font-medium">
                {isRtl ? 'تغطية لكافة مناطق الإمارات' : '100% Guaranteed Freshness'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
