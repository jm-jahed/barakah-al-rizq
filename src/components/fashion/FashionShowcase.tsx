'use client';

import React, { useState } from 'react';
import { FashionNav } from './FashionNav';
import { FashionHero } from './FashionHero';
import { FashionDisciplineExplorer } from './FashionDisciplineExplorer';
import { FashionDiscovery } from './FashionDiscovery';
import { FashionProductModal } from './FashionProductModal';
import { CoutureBagDrawer } from './CoutureBagDrawer';
import { NewArrivals } from './NewArrivals';
import { TrendingCollection } from './TrendingCollection';
import { StyleFinder } from './StyleFinder';
import { FashionQuiz } from './FashionQuiz';
import { CompleteTheLook } from './CompleteTheLook';
import { FashionSizeGuide } from './FashionSizeGuide';
import { MaterialColorExplorer } from './MaterialColorExplorer';
import { FashionLookbook } from './FashionLookbook';
import { SeasonalCollection } from './SeasonalCollection';
import { OccasionEdit } from './OccasionEdit';
import { FashionComparison } from './FashionComparison';
import { FashionDelivery } from './FashionDelivery';
import { FashionReturns } from './FashionReturns';
import { FashionJournal } from './FashionJournal';
import { FashionReviews } from './FashionReviews';
import { FashionStory } from './FashionStory';
import { AtelierSection } from './AtelierSection';
import { FashionAppointmentModal } from './FashionAppointmentModal';
import { FashionFAQ } from './FashionFAQ';
import { FashionFinalCTA } from './FashionFinalCTA';
import { FashionContact } from './FashionContact';
import { FashionFooter } from './FashionFooter';
import { FASHION_CATALOG, FashionCatalogItem } from '@/data/fashionCatalogData';
import { FASHION_PRODUCTS, FashionProduct } from '@/data/fashionData';

export const FashionShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{ item: FashionCatalogItem; quantity: number }[]>([]);
  const [savedItems, setSavedItems] = useState<FashionCatalogItem[]>([]);
  
  // Drawers & Modals
  const [selectedItem, setSelectedItem] = useState<FashionCatalogItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: FashionCatalogItem) => {
    setCart(prev => {
      const exists = prev.find(e => e.item.id === item.id);
      if (exists) {
        return prev.map(e => e.item.id === item.id ? { ...e, quantity: e.quantity + 1 } : e);
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleLegacyAddToCart = (legacyProduct: FashionProduct) => {
    const matched = FASHION_CATALOG[0];
    handleAddToCart(matched);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(e => e.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleSave = (item: FashionCatalogItem) => {
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
    <div className="bg-[#090807] min-h-screen text-[#F3EFEA] font-sans selection:bg-amber-500/30 selection:text-white overflow-x-clip max-w-full">
      {/* Brand Navigation */}
      <FashionNav
        cartCount={totalCartCount}
        wishlistCount={savedItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenStyling={() => setIsAppointmentOpen(true)}
        onOpenStyleFinder={() => {
          const el = document.getElementById('style-finder');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <FashionHero
        onShopClick={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreClick={() => {
          const el = document.getElementById('disciplines');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onAppointmentClick={() => setIsAppointmentOpen(true)}
      />

      {/* 8 Disciplines Explorer */}
      <div id="disciplines" className="scroll-mt-20">
        <FashionDisciplineExplorer
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => {
            setSelectedCategory(id);
            const el = document.getElementById('catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* 160 Haute Couture Pieces with Progressive See More */}
      <section id="catalog" className="scroll-mt-20">
        <FashionDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCart={handleAddToCart}
          savedItems={savedItems}
          onToggleSave={handleToggleSave}
        />
      </section>

      {/* Additional Curated Editorial Modules */}
      <NewArrivals 
        onSelectProduct={(p: FashionProduct) => {
          const matched = FASHION_CATALOG.find(c => c.title.toLowerCase().includes(p.name.toLowerCase())) || FASHION_CATALOG[0];
          setSelectedItem(matched);
        }} 
        onAddToCart={handleLegacyAddToCart} 
      />

      <TrendingCollection />

      <div id="style-finder" className="scroll-mt-20">
        <StyleFinder 
          onSelectProduct={(p: FashionProduct) => {
            const matched = FASHION_CATALOG.find(c => c.title.toLowerCase().includes(p.name.toLowerCase())) || FASHION_CATALOG[0];
            setSelectedItem(matched);
          }} 
        />
      </div>

      <FashionQuiz />
      <CompleteTheLook onAddToCart={handleLegacyAddToCart} />
      <FashionSizeGuide />
      <MaterialColorExplorer />

      <div id="lookbook" className="scroll-mt-20">
        <FashionLookbook />
      </div>

      <SeasonalCollection />
      <OccasionEdit />
      <FashionComparison />
      <FashionDelivery />
      <FashionReturns />

      <div id="journal" className="scroll-mt-20">
        <FashionJournal />
      </div>

      <FashionReviews />
      <FashionStory />
      <AtelierSection />
      <FashionFAQ />

      <FashionFinalCTA
        onShopClick={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onStylingClick={() => setIsAppointmentOpen(true)}
      />

      <FashionContact />
      <FashionFooter />

      {/* Product Detail Modal */}
      {selectedItem && (
        <FashionProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
          isSaved={savedItems.some(si => si.id === selectedItem.id)}
          onToggleSave={handleToggleSave}
          onBookFitting={() => {
            setSelectedItem(null);
            setIsAppointmentOpen(true);
          }}
        />
      )}

      {/* Wardrobe Bag Drawer */}
      <CoutureBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
        onSelectItem={(item) => {
          setIsCartOpen(false);
          setSelectedItem(item);
        }}
        onOpenFitting={() => {
          setIsCartOpen(false);
          setIsAppointmentOpen(true);
        }}
      />

      {/* Appointment Modal */}
      <FashionAppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
};
