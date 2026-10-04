'use client';

import React, { useState } from 'react';
import { FreshauraLanguageProvider, useFreshauraLanguage } from '@/context/FreshauraLanguageContext';
import { FreshauraNav } from './FreshauraNav';
import { FreshauraHero } from './FreshauraHero';
import { CategoryShowcase } from './CategoryShowcase';
import { ProductGrid } from './ProductGrid';
import { ProductQuickView } from './ProductQuickView';
import { FruitBoxBuilder } from './FruitBoxBuilder';
import { VegetableBoxes } from './VegetableBoxes';
import { FreshnessGuarantee } from './FreshnessGuarantee';
import { UaeDelivery } from './UaeDelivery';
import { DealsSection } from './DealsSection';
import { HorecaWholesaleEnquiry } from './HorecaWholesaleEnquiry';
import { HowItWorks } from './HowItWorks';
import { TrustSection } from './TrustSection';
import { Testimonials } from './Testimonials';
import { FreshauraFAQ } from './FreshauraFAQ';
import { FreshauraFinalCTA } from './FreshauraFinalCTA';
import { FreshauraFooter } from './FreshauraFooter';
import { FreshauraCart, GroceryCartItem } from './FreshauraCart';
import { ProduceProduct, VegetableBox } from '@/data/freshauraCatalogData';

interface FreshauraShowcaseProps {
  standalone?: boolean;
}

const FreshauraShowcaseContent: React.FC<FreshauraShowcaseProps> = () => {
  const { isRtl } = useFreshauraLanguage();

  // State for Cart, Wishlist, QuickView, Search, City Filter, Category Filter
  const [cartItems, setCartItems] = useState<GroceryCartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProduceProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Dubai');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Cart Handlers
  const handleAddToCart = (product: ProduceProduct, qty: number = 1) => {
    const name = isRtl ? product.nameAr || product.nameEn : product.nameEn;
    const unit = isRtl ? product.unitAr || product.unitEn : product.unitEn;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === product.id);

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += qty;
        return copy;
      }

      return [
        ...prev,
        {
          id: product.id,
          name,
          priceAED: product.priceAED,
          unit,
          quantity: qty,
          image: product.image,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleAddCustomBoxToCart = (boxName: string, price: number, weight: string, fruits: string[]) => {
    const boxId = `custom-fruit-box-${Date.now()}`;
    setCartItems((prev) => [
      ...prev,
      {
        id: boxId,
        name: `${boxName} (${fruits.length} ${isRtl ? 'أصناف فواكه' : 'Fruits'})`,
        priceAED: price,
        unit: weight,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=600&auto=format&fit=crop',
      },
    ]);
    setIsCartOpen(true);
  };

  const handleAddVegBoxToCart = (box: VegetableBox) => {
    const name = isRtl ? box.nameAr : box.nameEn;
    const weight = isRtl ? box.weightAr : box.weightEn;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === box.id);

      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      }

      return [
        ...prev,
        {
          id: box.id,
          name,
          priceAED: box.priceAED,
          unit: weight,
          quantity: 1,
          image: box.image,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as GroceryCartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handler
  const handleToggleWishlist = (product: ProduceProduct) => {
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const scrollToCatalog = (cat?: string) => {
    if (cat) setSelectedCategoryFilter(cat);
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#042F2E] text-[#FBF9F5] font-sans selection:bg-emerald-400 selection:text-black">
      
      {/* Navigation */}
      <FreshauraNav
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => scrollToCatalog()}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      <main id="top">
        
        {/* Farm Fresh Hero */}
        <FreshauraHero
          onShopProduce={() => scrollToCatalog()}
          onExploreFruitBoxes={() => {
            const el = document.getElementById('fruit-builder');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 10 Category Cards */}
        <CategoryShowcase
          onSelectCategory={(catName: string) => scrollToCatalog(catName)}
        />

        {/* 210 Authentic Items Catalog Grid */}
        <ProductGrid
          onQuickView={(p: ProduceProduct) => setQuickViewProduct(p)}
          onAddToCart={(p: ProduceProduct) => handleAddToCart(p, 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          searchQuery={searchQuery}
          externalCategoryFilter={selectedCategoryFilter}
        />

        {/* Interactive Custom Fruit Box Builder */}
        <FruitBoxBuilder
          onAddCustomBoxToCart={handleAddCustomBoxToCart}
        />

        {/* Pre-Built Family Veg Boxes */}
        <VegetableBoxes
          onAddVegBoxToCart={handleAddVegBoxToCart}
        />

        {/* Daily Harvest Deals */}
        <DealsSection
          onQuickView={(p: ProduceProduct) => setQuickViewProduct(p)}
          onAddToCart={(p: ProduceProduct) => handleAddToCart(p, 1)}
        />

        {/* 4 Pillars Freshness Guarantee */}
        <FreshnessGuarantee />

        {/* UAE Emirates 7-Zones Delivery Schedule */}
        <UaeDelivery
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />

        {/* HORECA B2B Wholesale Section */}
        <HorecaWholesaleEnquiry />

        {/* How It Works 4 Steps */}
        <HowItWorks />

        {/* Trust Statistics Banner */}
        <TrustSection />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Accordion FAQ */}
        <FreshauraFAQ />

        {/* Final CTA */}
        <FreshauraFinalCTA
          onShopProduce={() => scrollToCatalog()}
        />

      </main>

      {/* Footer */}
      <FreshauraFooter />

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p: ProduceProduct, qty: number) => handleAddToCart(p, qty)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Shopping Cart Drawer */}
      <FreshauraCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        selectedCity={selectedCity}
      />

    </div>
  );
};

export const FreshauraShowcase: React.FC<FreshauraShowcaseProps> = (props) => {
  return (
    <FreshauraLanguageProvider>
      <FreshauraShowcaseContent {...props} />
    </FreshauraLanguageProvider>
  );
};
