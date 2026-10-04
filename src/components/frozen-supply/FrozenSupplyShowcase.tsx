'use client';

import React, { useState } from 'react';
import { FrozenProduct, SupplyRequestItem, FROZEN_PRODUCTS } from '@/data/frozenSupplyData';
import { FrozenSupplyNav } from './FrozenSupplyNav';
import { FrozenSupplyHero } from './FrozenSupplyHero';
import { FrozenSupplyCategoryGrid } from './FrozenSupplyCategoryGrid';
import { FrozenSupplyCatalog } from './FrozenSupplyCatalog';
import { FrozenSupplyColdChainJourney } from './FrozenSupplyColdChainJourney';
import { FrozenSupplyTrustFaq } from './FrozenSupplyTrustFaq';
import { FrozenSupplyFinalCta } from './FrozenSupplyFinalCta';
import { FrozenSupplyProductModal } from './FrozenSupplyProductModal';
import { FrozenSupplyCompareModal } from './FrozenSupplyCompareModal';
import { FrozenSupplyRequestDrawer } from './FrozenSupplyRequestDrawer';

import { FrozenSupplyThemeProvider, useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { FrozenSupplyLanguageProvider, useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

function FrozenSupplyInner() {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl } = useFrozenSupplyLanguage();

  // Navigation & Category Filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [inspectProduct, setInspectProduct] = useState<FrozenProduct | null>(null);

  // Cart & Comparison State
  const [cartItems, setCartItems] = useState<SupplyRequestItem[]>([]);
  const [comparedProducts, setComparedProducts] = useState<FrozenProduct[]>([]);

  // Add to Supply Request
  const handleAddToCart = (product: FrozenProduct, quantity?: number) => {
    const qty = quantity || product.moq;
    
    // Find matching tier
    const activeTier = [...product.tierPricing]
      .reverse()
      .find(tier => qty >= tier.minQuantity) || product.tierPricing[0];
    const unitPrice = activeTier ? activeTier.priceAED : product.priceAED;

    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => {
          if (item.product.id === product.id) {
            const newQty = item.quantity + qty;
            const newTier = [...item.product.tierPricing]
              .reverse()
              .find(tier => newQty >= tier.minQuantity) || item.product.tierPricing[0];
            return {
              ...item,
              quantity: newQty,
              selectedTierPrice: newTier.priceAED
            };
          }
          return item;
        });
      }
      return [...prev, { product, quantity: qty, selectedTierPrice: unitPrice }];
    });

    // Auto-open supply request drawer so clients see the cart update immediately
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }

    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId) {
        const activeTier = [...item.product.tierPricing]
          .reverse()
          .find(tier => newQty >= tier.minQuantity) || item.product.tierPricing[0];
        return {
          ...item,
          quantity: newQty,
          selectedTierPrice: activeTier.priceAED
        };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Comparison Handlers
  const handleToggleCompare = (product: FrozenProduct) => {
    setComparedProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 4) {
        alert('You can compare up to 4 commercial products simultaneously.');
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromCompare = (productId: string) => {
    setComparedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleClearCompare = () => {
    setComparedProducts([]);
  };

  // Scroll to anchor section
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleCategorySelectAndScroll = (categoryId: string) => {
    setSelectedCategory(categoryId);
    handleScrollToSection('catalog');
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen transition-colors duration-200 overflow-x-clip max-w-full ${
      isDark ? 'bg-[#050B14] text-white' : 'bg-slate-50 text-slate-900'
    } ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Top Navbar */}
      <FrozenSupplyNav
        cartCount={totalCartCount}
        compareCount={comparedProducts.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onSelectCategory={handleCategorySelectAndScroll}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onScrollToSection={handleScrollToSection}
      />

      <main id="top">
        
        {/* Cinematic Hero */}
        <FrozenSupplyHero
          onExploreCatalog={() => handleScrollToSection('catalog')}
          onSelectCategory={handleCategorySelectAndScroll}
          onQuickView={(p) => setInspectProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, p.moq)}
        />

        {/* 8 Certified Temperature Zones */}
        <FrozenSupplyCategoryGrid
          onSelectCategory={handleCategorySelectAndScroll}
        />

        {/* 216+ Commercial Product Catalog Engine */}
        <FrozenSupplyCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onQuickView={(p) => setInspectProduct(p)}
          onAddToCart={(p, qty) => handleAddToCart(p, qty)}
          onToggleCompare={handleToggleCompare}
          comparedProductIds={comparedProducts.map(p => p.id)}
          cartProductIds={cartItems.map(item => item.product.id)}
        />

        {/* 5-Stage Cold-Chain Storytelling */}
        <FrozenSupplyColdChainJourney />

        {/* Regulatory Standards & FAQs */}
        <FrozenSupplyTrustFaq />

        {/* Final B2B RFP Action Banner */}
        <FrozenSupplyFinalCta
          onExploreCatalog={() => handleScrollToSection('catalog')}
          onOpenCart={() => setIsCartOpen(true)}
        />

      </main>

      {/* Product Detail Modal */}
      <FrozenSupplyProductModal
        product={inspectProduct}
        onClose={() => setInspectProduct(null)}
        onAddToCart={(p, qty) => handleAddToCart(p, qty)}
      />

      {/* Product Comparison Modal */}
      <FrozenSupplyCompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        comparedProducts={comparedProducts}
        onRemoveFromCompare={handleRemoveFromCompare}
        onClearCompare={handleClearCompare}
        onAddToCart={(p, qty) => handleAddToCart(p, qty)}
        onQuickView={(p) => {
          setIsCompareOpen(false);
          setInspectProduct(p);
        }}
      />

      {/* Commercial Supply Request Drawer */}
      <FrozenSupplyRequestDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

    </div>
  );
}

export const FrozenSupplyShowcase: React.FC = () => {
  return (
    <FrozenSupplyThemeProvider>
      <FrozenSupplyLanguageProvider>
        <FrozenSupplyInner />
      </FrozenSupplyLanguageProvider>
    </FrozenSupplyThemeProvider>
  );
};

