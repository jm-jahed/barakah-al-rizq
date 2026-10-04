'use client';

import React, { useState, useEffect } from 'react';
import { PERFUME_CATALOG, PerfumeItem } from '@/data/perfumeCatalogData';
import { PerfumeNav } from './PerfumeNav';
import { PerfumeHero } from './PerfumeHero';
import { OlfactoryFamilyExplorer } from './OlfactoryFamilyExplorer';
import { PerfumeDiscovery } from './PerfumeDiscovery';
import { BespokeCoffretBuilder } from './BespokeCoffretBuilder';
import { PerfumeProductModal } from './PerfumeProductModal';
import { PerfumeComparator } from './PerfumeComparator';
import { PerfumeCartDrawer, CartItem } from './PerfumeCartDrawer';
import { PerfumeWishlistDrawer } from './PerfumeWishlistDrawer';
import { PerfumeSearchOverlay } from './PerfumeSearchOverlay';
import { PerfumeFooter } from './PerfumeFooter';

interface PerfumeShowcaseProps {
  standalone?: boolean;
}

export const PerfumeShowcase: React.FC<PerfumeShowcaseProps> = ({
  standalone = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPerfumeForModal, setSelectedPerfumeForModal] = useState<PerfumeItem | null>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [customCoffret, setCustomCoffret] = useState<any>(null);

  const [comparedPerfumes, setComparedPerfumes] = useState<PerfumeItem[]>([]);
  const [isComparatorOpen, setIsComparatorOpen] = useState<boolean>(false);

  const [savedPerfumes, setSavedPerfumes] = useState<PerfumeItem[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Initialize with 2 default saved items for immediate luxury feel
  useEffect(() => {
    if (PERFUME_CATALOG.length >= 2) {
      setSavedPerfumes([PERFUME_CATALOG[0], PERFUME_CATALOG[20]]);
    }
  }, []);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cart operations
  const handleAddToCart = (perfume: PerfumeItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.perfume.id === perfume.id);
      if (existing) {
        return prev.map(item =>
          item.perfume.id === perfume.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { perfume, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (perfumeId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.perfume.id !== perfumeId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.perfume.id === perfumeId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveCartItem = (perfumeId: string) => {
    setCartItems(prev => prev.filter(item => item.perfume.id !== perfumeId));
  };

  const handleAddCustomCoffretToCart = (coffretDetails: any) => {
    setCustomCoffret(coffretDetails);
    setIsCartOpen(true);
  };

  // Compare operations
  const handleToggleCompare = (perfume: PerfumeItem) => {
    setComparedPerfumes(prev => {
      const exists = prev.some(p => p.id === perfume.id);
      if (exists) {
        return prev.filter(p => p.id !== perfume.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 fragrance flacons simultaneously.');
          return prev;
        }
        return [...prev, perfume];
      }
    });
  };

  // Wishlist operations
  const handleToggleSave = (perfume: PerfumeItem) => {
    setSavedPerfumes(prev => {
      const exists = prev.some(p => p.id === perfume.id);
      if (exists) {
        return prev.filter(p => p.id !== perfume.id);
      } else {
        return [...prev, perfume];
      }
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Navigation */}
      <PerfumeNav
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        comparedCount={comparedPerfumes.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={savedPerfumes.length}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((a, b) => a + b.quantity, 0) + (customCoffret ? 1 : 0)}
        onOpenCoffretBuilder={() => scrollToSection('coffret-builder')}
      />

      {/* Main Content */}
      <main>
        <PerfumeHero
          onExploreCatalog={() => scrollToSection('perfume-catalog')}
          onOpenCoffretBuilder={() => scrollToSection('coffret-builder')}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 8 Olfactory Families */}
        <div id="families">
          <OlfactoryFamilyExplorer
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              scrollToSection('perfume-catalog');
            }}
          />
        </div>

        {/* 160 Flacons Catalog */}
        <PerfumeDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectPerfume={(perfume) => setSelectedPerfumeForModal(perfume)}
          onAddToCart={handleAddToCart}
          comparedPerfumes={comparedPerfumes}
          onToggleCompare={handleToggleCompare}
          savedPerfumes={savedPerfumes}
          onToggleSave={handleToggleSave}
        />

        {/* Bespoke Coffret Simulator */}
        <BespokeCoffretBuilder
          onAddToCartWithCustomCoffret={handleAddCustomCoffretToCart}
        />
      </main>

      {/* Footer */}
      <PerfumeFooter />

      {/* Overlays, Drawers & Modals */}
      <PerfumeProductModal
        perfume={selectedPerfumeForModal}
        onClose={() => setSelectedPerfumeForModal(null)}
        onAddToCart={handleAddToCart}
        isSaved={selectedPerfumeForModal ? savedPerfumes.some(p => p.id === selectedPerfumeForModal.id) : false}
        onToggleSave={handleToggleSave}
        isCompared={selectedPerfumeForModal ? comparedPerfumes.some(p => p.id === selectedPerfumeForModal.id) : false}
        onToggleCompare={handleToggleCompare}
      />

      {isComparatorOpen && (
        <PerfumeComparator
          perfumes={comparedPerfumes}
          onRemove={(id) => setComparedPerfumes(prev => prev.filter(p => p.id !== id))}
          onClear={() => setComparedPerfumes([])}
          onClose={() => setIsComparatorOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}

      <PerfumeCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => {
          setCartItems([]);
          setCustomCoffret(null);
        }}
        customCoffret={customCoffret}
      />

      <PerfumeWishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        savedPerfumes={savedPerfumes}
        onRemove={(id) => setSavedPerfumes(prev => prev.filter(p => p.id !== id))}
        onClear={() => setSavedPerfumes([])}
        onAddToCart={handleAddToCart}
      />

      <PerfumeSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPerfume={(perfume) => setSelectedPerfumeForModal(perfume)}
      />

    </div>
  );
};
