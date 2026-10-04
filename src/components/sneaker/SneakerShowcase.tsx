'use client';

import React, { useState } from 'react';
import { SneakerNav } from './SneakerNav';
import { SneakerHero } from './SneakerHero';
import { SneakerDisciplineExplorer } from './SneakerDisciplineExplorer';
import { SneakerDiscovery } from './SneakerDiscovery';
import { SneakerProductModal } from './SneakerProductModal';
import { SoleVaultBagDrawer } from './SoleVaultBagDrawer';
import { NewDrops } from './NewDrops';
import { BrandWall } from './BrandWall';
import { AISneakerFinder } from './AISneakerFinder';
import { StreetwearCollection } from './StreetwearCollection';
import { OutfitBuilder } from './OutfitBuilder';
import { SneakerSizeGuide } from './SneakerSizeGuide';
import { SneakerComparison } from './SneakerComparison';
import { CompleteTheLook } from './CompleteTheLook';
import { SneakerQuiz } from './SneakerQuiz';
import { LimitedDrops } from './LimitedDrops';
import { SneakerJournal } from './SneakerJournal';
import { SneakerCare } from './SneakerCare';
import { SneakerWishlist } from './SneakerWishlist';
import { SneakerReviews } from './SneakerReviews';
import { SneakerCommunity } from './SneakerCommunity';
import { SneakerPricing } from './SneakerPricing';
import { SneakerDelivery } from './SneakerDelivery';
import { SneakerReturns } from './SneakerReturns';
import { SneakerFAQ } from './SneakerFAQ';
import { SneakerFinalCTA } from './SneakerFinalCTA';
import { SneakerContact } from './SneakerContact';
import { SneakerFooter } from './SneakerFooter';
import { SOLE_VAULT_CATALOG, SoleVaultCatalogItem } from '@/data/sneakerCatalogData';
import { SneakerItem } from '@/data/sneakerData';

export const SneakerShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{ item: SoleVaultCatalogItem; quantity: number }[]>([]);
  const [savedItems, setSavedItems] = useState<SoleVaultCatalogItem[]>([]);
  
  // Modals & Drawers
  const [selectedItem, setSelectedItem] = useState<SoleVaultCatalogItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: SoleVaultCatalogItem) => {
    setCart(prev => {
      const exists = prev.find(e => e.item.id === item.id);
      if (exists) {
        return prev.map(e => e.item.id === item.id ? { ...e, quantity: e.quantity + 1 } : e);
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleLegacyAddToCart = (legacyItem: SneakerItem) => {
    const matched = SOLE_VAULT_CATALOG[0];
    handleAddToCart(matched);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(e => e.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleSave = (item: SoleVaultCatalogItem) => {
    setSavedItems(prev => {
      const exists = prev.some(si => si.id === item.id);
      if (exists) {
        return prev.filter(si => si.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const totalCartCount = cart.reduce((sum, e) => sum + e.quantity, 0);

  return (
    <div className="bg-[#0A0908] min-h-screen text-[#E8E2D5] font-sans selection:bg-amber-500/30 overflow-x-clip max-w-full">
      {/* Brand Navigation */}
      <SneakerNav
        cartCount={totalCartCount}
        wishlistCount={savedItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenFinder={() => {
          const el = document.getElementById('finder');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <SneakerHero
        onShopClick={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onDropClick={() => {
          const el = document.getElementById('disciplines');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 8 Disciplines Explorer */}
      <div id="disciplines" className="scroll-mt-20">
        <SneakerDisciplineExplorer
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => {
            setSelectedCategory(id);
            const el = document.getElementById('catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* 160 Grails Catalog with Progressive See More */}
      <section id="catalog" className="scroll-mt-20">
        <SneakerDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCart={handleAddToCart}
          savedItems={savedItems}
          onToggleSave={handleToggleSave}
        />
      </section>

      {/* Supporting Streetwear & Lifestyle Sections */}
      <NewDrops
        onSelectProduct={(p: SneakerItem) => {
          const matched = SOLE_VAULT_CATALOG.find(c => c.title.toLowerCase().includes(p.name.toLowerCase())) || SOLE_VAULT_CATALOG[0];
          setSelectedItem(matched);
        }}
        onAddToCart={handleLegacyAddToCart}
      />

      <BrandWall />

      <div id="finder" className="scroll-mt-20">
        <AISneakerFinder 
          onSelectProduct={(p: SneakerItem) => {
            const matched = SOLE_VAULT_CATALOG.find(c => c.title.toLowerCase().includes(p.name.toLowerCase())) || SOLE_VAULT_CATALOG[0];
            setSelectedItem(matched);
          }} 
        />
      </div>

      <StreetwearCollection />
      <OutfitBuilder />
      <SneakerSizeGuide />
      <SneakerComparison />
      <CompleteTheLook />
      <SneakerQuiz />
      <LimitedDrops />

      <div id="journal" className="scroll-mt-20">
        <SneakerJournal />
      </div>

      <SneakerCare />
      <SneakerReviews />
      <SneakerCommunity />
      <SneakerPricing />
      <SneakerDelivery />
      <SneakerReturns />
      <SneakerFAQ />
      <SneakerFinalCTA />
      <SneakerContact />
      <SneakerFooter />

      {/* Product Detail Modal */}
      {selectedItem && (
        <SneakerProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
          isSaved={savedItems.some(si => si.id === selectedItem.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      {/* Cart Drawer */}
      <SoleVaultBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
        onSelectItem={(item) => {
          setIsCartOpen(false);
          setSelectedItem(item);
        }}
      />

      {/* Wishlist Drawer */}
      <SneakerWishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={savedItems.map(s => s.id)}
        onAddToCart={handleLegacyAddToCart}
      />
    </div>
  );
};
