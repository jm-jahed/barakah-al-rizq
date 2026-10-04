'use client';

import React, { useState } from 'react';
import { JewelryNav } from './JewelryNav';
import { JewelryHero } from './JewelryHero';
import { JewelryDisciplineExplorer } from './JewelryDisciplineExplorer';
import { JewelryDiscovery } from './JewelryDiscovery';
import { JewelryItemCard } from './JewelryItemCard';
import { CustomBespokeBuilder } from './CustomBespokeBuilder';
import { JewelryComparator } from './JewelryComparator';
import { JewelryProductModal } from './JewelryProductModal';
import { JewelryCartDrawer } from './JewelryCartDrawer';
import { WishlistDrawer } from './WishlistDrawer';
import { JewelrySearchOverlay } from './JewelrySearchOverlay';
import { JewelryConsultationModal } from './JewelryConsultationModal';
import { JewelryFooter } from './JewelryFooter';
import { JEWELRY_CATALOG, JewelryItem } from '@/data/jewelryCatalogData';

export const JewelryShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartItems, setCartItems] = useState<{ item: JewelryItem; quantity: number }[]>([]);
  const [savedItems, setSavedItems] = useState<JewelryItem[]>([]);
  const [comparedItems, setComparedItems] = useState<JewelryItem[]>([]);
  
  // Modals & Overlays
  const [selectedItem, setSelectedItem] = useState<JewelryItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: JewelryItem) => {
    setCartItems(prev => {
      const exists = prev.find(ci => ci.item.id === item.id);
      if (exists) {
        return prev.map(ci => ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci);
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(ci => ci.item.id === itemId ? { ...ci, quantity: ci.quantity + delta } : ci)
        .filter(ci => ci.quantity > 0)
    );
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(ci => ci.item.id !== itemId));
  };

  // Wishlist operations
  const handleToggleSave = (item: JewelryItem) => {
    setSavedItems(prev => {
      const exists = prev.some(si => si.id === item.id);
      if (exists) {
        return prev.filter(si => si.id !== item.id);
      }
      return [...prev, item];
    });
  };

  // Comparator operations
  const handleToggleCompare = (item: JewelryItem) => {
    setComparedItems(prev => {
      const exists = prev.some(ci => ci.id === item.id);
      if (exists) {
        return prev.filter(ci => ci.id !== item.id);
      }
      if (prev.length >= 4) {
        alert("You can compare up to 4 pieces at once.");
        return prev;
      }
      return [...prev, item];
    });
  };

  const totalCartCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className="bg-[#070503] min-h-screen text-[#E8E2D5] font-sans selection:bg-amber-500/30 selection:text-white overflow-x-clip max-w-full">
      {/* Sovereign Header Navigation */}
      <JewelryNav
        cartCount={totalCartCount}
        wishlistCount={savedItems.length}
        compareCount={comparedItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Haute Joaillerie Hero Section */}
      <JewelryHero
        onExploreClick={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onBespokeClick={() => {
          const el = document.getElementById('bespoke-atelier');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onBookSalon={() => setIsConsultationOpen(true)}
      />

      {/* 8 High Jewelry Disciplines Visual Explorer */}
      <JewelryDisciplineExplorer
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 160 Sovereign Masterpieces Catalog with Progressive See More */}
      <section id="catalog" className="scroll-mt-20">
        <JewelryDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCart={handleAddToCart}
          comparedItems={comparedItems}
          onToggleCompare={handleToggleCompare}
          savedItems={savedItems}
          onToggleSave={handleToggleSave}
        />
      </section>

      {/* Interactive Bespoke Solitaire Commissioner */}
      <section id="bespoke-atelier" className="scroll-mt-20">
        <CustomBespokeBuilder
          onAcquireBespoke={(quote: any) => {
            const customItem: JewelryItem = {
              id: `bespoke-${Date.now()}`,
              name: `Bespoke ${quote.diamond.carat} ${quote.setting.name}`,
              title: `Bespoke ${quote.diamond.carat} ${quote.setting.name}`,
              subtitle: `${quote.metal.name} • Personalized`,
              disciplineId: 'bespoke-sovereign-masterpieces',
              disciplineName: 'Sovereign Parures & Bespoke',
              category: 'High Jewelry',
              description: `Bespoke solitaire commission with ${quote.diamond.cut}, ${quote.diamond.colorClarity}. Engraving: "${quote.engraving}". Size: ${quote.ringSize}.`,
              priceAED: quote.totalPriceAED,
              material: quote.metal.name,
              gemstone: `${quote.diamond.carat} ${quote.diamond.cut}`,
              caratWeight: quote.diamond.carat,
              certificationLab: 'GIA D-Color Registry Inscribed',
              dimensions: `Custom Ring Size ${quote.ringSize}`,
              weightGrams: '6.5g 18K Solid',
              availableSizes: [quote.ringSize],
              inStock: true,
              isSignature: true,
              isVaultExclusive: true,
              heroImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
              images: [
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop'
              ],
              gallery: [
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
              ],
              boutiqueZone: 'Place Vendôme & Dubai DIFC Atelier',
              craftsmanship: 'Hand-forged and microscopic prong-set in Dubai DIFC Gate Village private salon.',
              careInstructions: 'Complimentary annual sonic ultrasonic bath, prong tightening, and GIA laser inscription inspection.',
              shippingInfo: 'Armed courier hand delivery across Dubai, Abu Dhabi, and UAE.'
            };
            handleAddToCart(customItem);
          }}
        />
      </section>

      {/* Side-by-Side Gemological Matrix Comparator */}
      <JewelryComparator
        items={comparedItems}
        onRemove={(id) => setComparedItems(prev => prev.filter(item => item.id !== id))}
        onClear={() => setComparedItems([])}
        onClose={() => setComparedItems([])}
        onAddToCart={handleAddToCart}
      />

      {/* Sovereign Footer */}
      <JewelryFooter />

      {/* Product Detail Modal */}
      {selectedItem && (
        <JewelryProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
          onToggleSave={handleToggleSave}
          isSaved={savedItems.some(si => si.id === selectedItem.id)}
          onToggleCompare={handleToggleCompare}
          isCompared={comparedItems.some(ci => ci.id === selectedItem.id)}
        />
      )}

      {/* Cart Drawer */}
      <JewelryCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cartItems}
        onRemove={handleRemoveFromCart}
        onClear={() => setCartItems([])}
        onSelectItem={(item) => {
          setIsCartOpen(false);
          setSelectedItem(item);
        }}
        onBookConsultation={() => {
          setIsCartOpen(false);
          setIsConsultationOpen(true);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        savedItems={savedItems}
        onRemove={(id) => setSavedItems(prev => prev.filter(si => si.id !== id))}
        onClear={() => setSavedItems([])}
        onSelectItem={(item) => {
          setIsWishlistOpen(false);
          setSelectedItem(item);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* ⌘K Search Overlay */}
      <JewelrySearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={(item) => {
          setIsSearchOpen(false);
          setSelectedItem(item);
        }}
      />

      {/* Private Salon Booking Modal */}
      <JewelryConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};
