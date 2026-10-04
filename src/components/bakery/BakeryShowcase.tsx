'use client';

import React, { useState } from 'react';
import { BakeryNav } from './BakeryNav';
import { BakeryHero } from './BakeryHero';
import { PatisserieDisciplineExplorer } from './PatisserieDisciplineExplorer';
import { BakeryDiscovery } from './BakeryDiscovery';
import { BakeryProductModal } from './BakeryProductModal';
import { BakeryOrderDrawer } from './BakeryOrderDrawer';
import { CakeBuilder } from './CakeBuilder';
import { WeddingCakes } from './WeddingCakes';
import { BirthdayCollection } from './BirthdayCollection';
import { CupcakeStudio } from './CupcakeStudio';
import { DessertBoxBuilder } from './DessertBoxBuilder';
import { GiftHamperBuilder } from './GiftHamperBuilder';
import { CelebrationPackages } from './CelebrationPackages';
import { CorporateGifting } from './CorporateGifting';
import { CakeConsultation } from './CakeConsultation';
import { BakeryIngredients } from './BakeryIngredients';
import { DietaryInfo } from './DietaryInfo';
import { CakeTransformation } from './CakeTransformation';
import { BakeryGallery } from './BakeryGallery';
import { BakeryExperience } from './BakeryExperience';
import { PastryChef } from './PastryChef';
import { BakeryStory } from './BakeryStory';
import { BakeryJournal } from './BakeryJournal';
import { BakeryReviews } from './BakeryReviews';
import { BakeryEvents } from './BakeryEvents';
import { BakeryGiftCards } from './BakeryGiftCards';
import { BakeryPricing } from './BakeryPricing';
import { BakeryFAQ } from './BakeryFAQ';
import { BakeryFinalCTA } from './BakeryFinalCTA';
import { BakeryContact } from './BakeryContact';
import { BakeryDelivery } from './BakeryDelivery';
import { BakeryFooter } from './BakeryFooter';
import { BAKERY_CATALOG, BakeryCatalogItem } from '@/data/bakeryCatalogData';

export const BakeryShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<{ item: BakeryCatalogItem; quantity: number }[]>([]);
  const [savedItems, setSavedItems] = useState<BakeryCatalogItem[]>([]);
  
  // Modals & Drawers
  const [selectedItem, setSelectedItem] = useState<BakeryCatalogItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (item: BakeryCatalogItem) => {
    setCart(prev => {
      const exists = prev.find(e => e.item.id === item.id);
      if (exists) {
        return prev.map(e => e.item.id === item.id ? { ...e, quantity: e.quantity + 1 } : e);
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(e => e.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist actions
  const handleToggleSave = (item: BakeryCatalogItem) => {
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
    <div className="bg-[#070605] min-h-screen text-[#EAE2D7] font-sans selection:bg-amber-500/30 selection:text-white overflow-x-clip max-w-full">
      {/* Brand Navigation */}
      <BakeryNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenSearch={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
        onOpenConsultation={() => {
          const el = document.getElementById('consultation');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* Hero Section */}
      <BakeryHero 
        onOpenCatalog={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBuilder={() => {
          const el = document.getElementById('builder');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
        onOpenConsultation={() => {
          const el = document.getElementById('consultation');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* 8 Arenas Pastry Explorer */}
      <PatisserieDisciplineExplorer
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 160 Haute Pâtisserie Creations Catalog with Progressive See More */}
      <section id="catalog" className="scroll-mt-20">
        <BakeryDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCart={handleAddToCart}
          savedItems={savedItems}
          onToggleSave={handleToggleSave}
        />
      </section>

      {/* Custom Cake Builder Studio */}
      <section id="builder" className="scroll-mt-20">
        <CakeBuilder />
      </section>

      {/* Weddings & Bespoke */}
      <section id="weddings" className="scroll-mt-20">
        <WeddingCakes />
      </section>

      <BirthdayCollection />
      <CupcakeStudio />
      <DessertBoxBuilder />

      <section id="gifting" className="scroll-mt-20">
        <GiftHamperBuilder />
      </section>

      <CelebrationPackages />
      <CorporateGifting />

      <section id="consultation" className="scroll-mt-20">
        <CakeConsultation />
      </section>

      <section id="ingredients" className="scroll-mt-20">
        <BakeryIngredients />
      </section>

      <DietaryInfo />
      <CakeTransformation />
      <BakeryGallery />
      <BakeryExperience />
      <PastryChef />
      <BakeryStory />

      <section id="journal" className="scroll-mt-20">
        <BakeryJournal />
      </section>

      <BakeryReviews />
      <BakeryEvents />
      <BakeryGiftCards />
      <BakeryPricing />
      <BakeryFAQ />
      <BakeryFinalCTA />

      <section id="contact" className="scroll-mt-20">
        <BakeryContact />
      </section>

      <BakeryDelivery />
      <BakeryFooter />

      {/* Product Detail Modal */}
      {selectedItem && (
        <BakeryProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
          isSaved={savedItems.some(si => si.id === selectedItem.id)}
          onToggleSave={handleToggleSave}
          onBookConsultation={() => {
            setSelectedItem(null);
            const el = document.getElementById('consultation');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      {/* Order Cart Drawer */}
      <BakeryOrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
        onSelectItem={(item) => {
          setIsCartOpen(false);
          setSelectedItem(item);
        }}
        onOpenConsultation={() => {
          setIsCartOpen(false);
          const el = document.getElementById('consultation');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
};
