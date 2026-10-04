'use client';

import React, { useState } from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { CLEANING_CATALOG } from '@/data/cleaningCatalogData';
import { CleaningNav } from './CleaningNav';
import { CleaningHero } from './CleaningHero';
import { CleaningCategoryExplorer } from './CleaningCategoryExplorer';
import { CleaningServiceDiscovery } from './CleaningServiceDiscovery';
import { CleaningCalculator } from './CleaningCalculator';
import { CleaningServiceModal } from './CleaningServiceModal';
import { CleaningComparator } from './CleaningComparator';
import { CleaningCorporateFM } from './CleaningCorporateFM';
import { CleaningTrustHub } from './CleaningTrustHub';
import { CleaningDispatchDrawer } from './CleaningDispatchDrawer';
import { CleaningSavedDrawer } from './CleaningSavedDrawer';
import { CleaningSearchOverlay } from './CleaningSearchOverlay';
import { CleaningFooter } from './CleaningFooter';

interface CleaningShowcaseProps {
  standalone?: boolean;
}

export const CleaningShowcase: React.FC<CleaningShowcaseProps> = ({ standalone = true }) => {
  // Global State
  const [currency, setCurrency] = useState<'AED' | 'USD' | 'EUR' | 'GBP'>('AED');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<CleaningService | null>(null);
  const [dispatchTargetService, setDispatchTargetService] = useState<CleaningService | null>(null);

  // Drawers & Overlays
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [dispatchDrawerOpen, setDispatchDrawerOpen] = useState(false);

  // Saved & Compared Lists
  const [savedServices, setSavedServices] = useState<CleaningService[]>([
    CLEANING_CATALOG[0],
    CLEANING_CATALOG[20]
  ]);
  const [comparedServices, setComparedServices] = useState<CleaningService[]>([
    CLEANING_CATALOG[0],
    CLEANING_CATALOG[40]
  ]);

  // Search filter passed from Hero
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Handlers
  const handleToggleSave = (s: CleaningService) => {
    setSavedServices((prev) => {
      const exists = prev.some((item) => item.id === s.id);
      if (exists) {
        return prev.filter((item) => item.id !== s.id);
      } else {
        return [...prev, s];
      }
    });
  };

  const handleToggleCompare = (s: CleaningService) => {
    setComparedServices((prev) => {
      const exists = prev.some((item) => item.id === s.id);
      if (exists) {
        return prev.filter((item) => item.id !== s.id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare a maximum of 4 cleaning services simultaneously.');
          return prev;
        }
        return [...prev, s];
      }
    });
  };

  const handleRemoveCompare = (id: string) => {
    setComparedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleRemoveSaved = (id: string) => {
    setSavedServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleHeroSearch = (query: string, category: string, propertyType: string) => {
    setHeroSearchQuery(query);
    if (category) setActiveCategory(category);
  };

  const handleBookDispatch = (s?: CleaningService) => {
    if (s) {
      setDispatchTargetService(s);
    } else {
      setDispatchTargetService(null);
    }
    setDispatchDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-emerald-500 selection:text-zinc-950">
      {/* Fixed Navigation */}
      <CleaningNav
        savedCount={savedServices.length}
        compareCount={comparedServices.length}
        onOpenSearch={() => setSearchOverlayOpen(true)}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onOpenCompare={() => setCompareModalOpen(true)}
        onOpenDispatch={() => handleBookDispatch()}
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Hero Section */}
      <CleaningHero
        onSearchSubmit={handleHeroSearch}
        onSelectCategory={(id) => setActiveCategory(id)}
        onOpenDispatch={() => handleBookDispatch()}
      />

      {/* 8 Prime Disciplines Explorer */}
      <CleaningCategoryExplorer
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
      />

      {/* 160+ Precision Cleaning Discovery & Filters */}
      <CleaningServiceDiscovery
        services={CLEANING_CATALOG}
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
        savedIds={savedServices.map((s) => s.id)}
        compareIds={comparedServices.map((s) => s.id)}
        onToggleSave={handleToggleSave}
        onToggleCompare={handleToggleCompare}
        onSelectService={(s) => setSelectedService(s)}
        currency={currency}
        searchFilter={heroSearchQuery}
      />

      {/* Interactive UAE Villa & Commercial Quote Estimator */}
      <CleaningCalculator
        onOpenDispatch={() => handleBookDispatch()}
        currency={currency}
      />

      {/* B2B Corporate & Clinical Facility Management */}
      <CleaningCorporateFM
        onOpenDispatch={() => handleBookDispatch()}
      />

      {/* Institutional Trust & BICSc Standards Hub */}
      <CleaningTrustHub
        onOpenDispatch={() => handleBookDispatch()}
      />

      {/* Corporate Footer */}
      <CleaningFooter
        onSelectCategory={(id) => setActiveCategory(id)}
        onOpenDispatch={() => handleBookDispatch()}
      />

      {/* Modals & Drawers */}
      {/* 1. PDP Service Modal */}
      {selectedService && (
        <CleaningServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          isSaved={savedServices.some((s) => s.id === selectedService.id)}
          isCompared={comparedServices.some((s) => s.id === selectedService.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onBookDispatch={handleBookDispatch}
          currency={currency}
        />
      )}

      {/* 2. Side-by-Side Comparator Modal */}
      {compareModalOpen && (
        <CleaningComparator
          services={comparedServices}
          onClose={() => setCompareModalOpen(false)}
          onRemove={handleRemoveCompare}
          onSelectService={(s) => setSelectedService(s)}
          onBookDispatch={handleBookDispatch}
          currency={currency}
        />
      )}

      {/* 3. VIP Van Dispatch Drawer */}
      <CleaningDispatchDrawer
        isOpen={dispatchDrawerOpen}
        onClose={() => setDispatchDrawerOpen(false)}
        selectedService={dispatchTargetService}
      />

      {/* 4. Saved Services Portfolio Drawer */}
      <CleaningSavedDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedServices={savedServices}
        onRemove={handleRemoveSaved}
        onSelectService={(s) => setSelectedService(s)}
        onBookDispatch={handleBookDispatch}
        currency={currency}
      />

      {/* 5. ⌘K Instant Search Overlay */}
      <CleaningSearchOverlay
        isOpen={searchOverlayOpen}
        onClose={() => setSearchOverlayOpen(false)}
        services={CLEANING_CATALOG}
        onSelectService={(s) => setSelectedService(s)}
        onSelectCategory={(id) => setActiveCategory(id)}
        currency={currency}
      />
    </div>
  );
};
