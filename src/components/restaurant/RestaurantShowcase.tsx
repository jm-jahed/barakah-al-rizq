'use client';

import React, { useState, useEffect } from 'react';
import { RESTAURANT_CATALOG, RestaurantDish } from '@/data/restaurantCatalogData';
import { RestaurantLanguageProvider, useRestaurantLanguage } from '@/context/RestaurantLanguageContext';
import { RestaurantNav } from './RestaurantNav';
import { RestaurantHero } from './RestaurantHero';
import { DiningDisciplineExplorer } from './DiningDisciplineExplorer';
import { MenuDiscovery } from './MenuDiscovery';
import { PrivateDiningEstimator } from './PrivateDiningEstimator';
import { MenuItemModal } from './MenuItemModal';
import { MenuComparator } from './MenuComparator';
import { TableReservationDrawer } from './TableReservationDrawer';
import { SavedMenuDrawer } from './SavedMenuDrawer';
import { MenuSearchOverlay } from './MenuSearchOverlay';
import { RestaurantFooter } from './RestaurantFooter';

interface RestaurantShowcaseProps {
  standalone?: boolean;
}

const RestaurantShowcaseContent: React.FC<RestaurantShowcaseProps> = () => {
  const { isRtl } = useRestaurantLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDishForModal, setSelectedDishForModal] = useState<RestaurantDish | null>(null);
  const [selectedDishForReservation, setSelectedDishForReservation] = useState<RestaurantDish | null>(null);
  const [customQuoteForReservation, setCustomQuoteForReservation] = useState<any>(null);

  const [comparedDishes, setComparedDishes] = useState<RestaurantDish[]>([]);
  const [isComparatorOpen, setIsComparatorOpen] = useState<boolean>(false);

  const [savedDishes, setSavedDishes] = useState<RestaurantDish[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  // Initialize with 2 default saved items for immediate delight
  useEffect(() => {
    if (RESTAURANT_CATALOG.length >= 2) {
      setSavedDishes([RESTAURANT_CATALOG[0], RESTAURANT_CATALOG[4]]);
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

  // Handlers
  const handleToggleCompare = (dish: RestaurantDish) => {
    setComparedDishes(prev => {
      const exists = prev.some(d => d.id === dish.id);
      if (exists) {
        return prev.filter(d => d.id !== dish.id);
      } else {
        if (prev.length >= 3) {
          alert(isRtl ? 'يمكنك مقارنة حتى ٣ ابتكارات طهوية كحد أقصى في وقت واحد.' : 'You can compare up to 3 culinary creations simultaneously.');
          return prev;
        }
        return [...prev, dish];
      }
    });
  };

  const handleToggleSave = (dish: RestaurantDish) => {
    setSavedDishes(prev => {
      const exists = prev.some(d => d.id === dish.id);
      if (exists) {
        return prev.filter(d => d.id !== dish.id);
      } else {
        return [...prev, dish];
      }
    });
  };

  const handleOpenReservationForDish = (dish: RestaurantDish) => {
    setSelectedDishForReservation(dish);
    setCustomQuoteForReservation(null);
    setIsReservationOpen(true);
  };

  const handleOpenReservationWithQuote = (quoteDetails: any) => {
    setCustomQuoteForReservation(quoteDetails);
    setSelectedDishForReservation(null);
    setIsReservationOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950 ${isRtl ? 'font-arabic' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Navigation Header */}
      <RestaurantNav
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        comparedCount={comparedDishes.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        savedCount={savedDishes.length}
        onOpenReservation={() => {
          setSelectedDishForReservation(null);
          setCustomQuoteForReservation(null);
          setIsReservationOpen(true);
        }}
      />

      {/* Hero Section */}
      <main>
        <RestaurantHero
          onExploreMenu={() => scrollToSection('menu-catalog')}
          onOpenEstimator={() => scrollToSection('private-dining-estimator')}
          onOpenReservation={() => {
            setSelectedDishForReservation(null);
            setCustomQuoteForReservation(null);
            setIsReservationOpen(true);
          }}
        />

        {/* 8 Disciplines Explorer */}
        <div id="disciplines">
          <DiningDisciplineExplorer
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId);
              scrollToSection('menu-catalog');
            }}
          />
        </div>

        {/* 160 Dishes Catalog Discovery */}
        <MenuDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectDish={(dish) => setSelectedDishForModal(dish)}
          onReserveDish={handleOpenReservationForDish}
          comparedDishes={comparedDishes}
          onToggleCompare={handleToggleCompare}
          savedDishes={savedDishes}
          onToggleSave={handleToggleSave}
        />

        {/* Private Dining Estimator */}
        <PrivateDiningEstimator
          onOpenReservationWithQuote={handleOpenReservationWithQuote}
        />
      </main>

      {/* Footer */}
      <RestaurantFooter />

      {/* Overlays, Drawers & Modals */}
      <MenuItemModal
        dish={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onReserve={handleOpenReservationForDish}
        isSaved={selectedDishForModal ? savedDishes.some(d => d.id === selectedDishForModal.id) : false}
        onToggleSave={handleToggleSave}
        isCompared={selectedDishForModal ? comparedDishes.some(d => d.id === selectedDishForModal.id) : false}
        onToggleCompare={handleToggleCompare}
      />

      {isComparatorOpen && (
        <MenuComparator
          dishes={comparedDishes}
          onRemove={(id) => setComparedDishes(prev => prev.filter(d => d.id !== id))}
          onClear={() => setComparedDishes([])}
          onClose={() => setIsComparatorOpen(false)}
          onReserve={handleOpenReservationForDish}
        />
      )}

      <TableReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        selectedDish={selectedDishForReservation}
        customQuote={customQuoteForReservation}
      />

      <SavedMenuDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedDishes={savedDishes}
        onRemove={(id) => setSavedDishes(prev => prev.filter(d => d.id !== id))}
        onClear={() => setSavedDishes([])}
        onReserveAll={() => {
          setIsSavedDrawerOpen(false);
          setIsReservationOpen(true);
        }}
      />

      <MenuSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDish={(dish) => setSelectedDishForModal(dish)}
      />

    </div>
  );
};

export const RestaurantShowcase: React.FC<RestaurantShowcaseProps> = (props) => {
  return (
    <RestaurantLanguageProvider>
      <RestaurantShowcaseContent {...props} />
    </RestaurantLanguageProvider>
  );
};

