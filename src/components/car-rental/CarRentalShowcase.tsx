'use client';

import React, { useState } from 'react';
import { ExoticVehicle } from '@/data/carRentalCatalogData';
import { EXOTIC_VEHICLES_CATALOG } from '@/data/carRentalCatalogData';
import { CarRentalNav } from './CarRentalNav';
import { CarRentalHero } from './CarRentalHero';
import { VehicleCategoryExplorer } from './VehicleCategoryExplorer';
import { ExoticFleetDiscovery } from './ExoticFleetDiscovery';
import { ExoticRentalCalculator } from './ExoticRentalCalculator';
import { ExoticVehicleModal } from './ExoticVehicleModal';
import { ExoticVehicleComparator } from './ExoticVehicleComparator';
import { ChauffeurTarmacProtocol } from './ChauffeurTarmacProtocol';
import { ExoticBookingDrawer } from './ExoticBookingDrawer';
import { ExoticSavedDrawer } from './ExoticSavedDrawer';
import { ExoticSearchOverlay } from './ExoticSearchOverlay';
import { ExoticFooter } from './ExoticFooter';

interface CarRentalShowcaseProps {
  standalone?: boolean;
}

export const CarRentalShowcase: React.FC<CarRentalShowcaseProps> = ({ standalone = true }) => {
  // Global State
  const [currency, setCurrency] = useState<'AED' | 'USD' | 'EUR' | 'GBP'>('AED');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVehicle, setSelectedVehicle] = useState<ExoticVehicle | null>(null);
  const [bookingTargetVehicle, setBookingTargetVehicle] = useState<ExoticVehicle | null>(null);

  // Drawers & Overlays
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);

  // Saved & Compared Lists
  const [savedVehicles, setSavedVehicles] = useState<ExoticVehicle[]>([
    EXOTIC_VEHICLES_CATALOG[0],
    EXOTIC_VEHICLES_CATALOG[24]
  ]);
  const [comparedVehicles, setComparedVehicles] = useState<ExoticVehicle[]>([
    EXOTIC_VEHICLES_CATALOG[0],
    EXOTIC_VEHICLES_CATALOG[48]
  ]);

  // Search keyword passed from Hero
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [heroBrandFilter, setHeroBrandFilter] = useState('all');

  // Handlers
  const handleToggleSave = (v: ExoticVehicle) => {
    setSavedVehicles((prev) => {
      const exists = prev.some((item) => item.id === v.id);
      if (exists) {
        return prev.filter((item) => item.id !== v.id);
      } else {
        return [...prev, v];
      }
    });
  };

  const handleToggleCompare = (v: ExoticVehicle) => {
    setComparedVehicles((prev) => {
      const exists = prev.some((item) => item.id === v.id);
      if (exists) {
        return prev.filter((item) => item.id !== v.id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare a maximum of 4 supercars simultaneously.');
          return prev;
        }
        return [...prev, v];
      }
    });
  };

  const handleRemoveCompare = (id: string) => {
    setComparedVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleRemoveSaved = (id: string) => {
    setSavedVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const handleHeroSearch = (query: string, category: string, brand: string) => {
    setHeroSearchQuery(query);
    if (category) setActiveCategory(category);
    if (brand) setHeroBrandFilter(brand);
  };

  const handleBookReserve = (v?: ExoticVehicle) => {
    if (v) {
      setBookingTargetVehicle(v);
    } else {
      setBookingTargetVehicle(null);
    }
    setBookingDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-500 selection:text-zinc-950">
      {/* Navigation */}
      <CarRentalNav
        savedCount={savedVehicles.length}
        compareCount={comparedVehicles.length}
        onOpenSearch={() => setSearchOverlayOpen(true)}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        onOpenCompare={() => setCompareModalOpen(true)}
        onOpenBooking={() => handleBookReserve()}
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Hero */}
      <CarRentalHero
        onSearchSubmit={handleHeroSearch}
        onSelectCategory={(id) => setActiveCategory(id)}
        onOpenBooking={() => handleBookReserve()}
      />

      {/* 8 Fleet Categories Explorer */}
      <VehicleCategoryExplorer
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
      />

      {/* 192+ Supercar Discovery & Filters */}
      <ExoticFleetDiscovery
        vehicles={EXOTIC_VEHICLES_CATALOG}
        activeCategory={activeCategory}
        onSelectCategory={(id) => setActiveCategory(id)}
        savedIds={savedVehicles.map((v) => v.id)}
        compareIds={comparedVehicles.map((v) => v.id)}
        onToggleSave={handleToggleSave}
        onToggleCompare={handleToggleCompare}
        onSelectVehicle={(v) => setSelectedVehicle(v)}
        currency={currency}
        searchFilter={heroSearchQuery}
        selectedBrandFilter={heroBrandFilter}
      />

      {/* Supercar Lease & Rate Estimator */}
      <ExoticRentalCalculator
        onOpenBooking={() => handleBookReserve()}
        currency={currency}
      />

      {/* VIP Tarmac & Chauffeur Protocol */}
      <ChauffeurTarmacProtocol
        onOpenBooking={() => handleBookReserve()}
      />

      {/* Footer */}
      <ExoticFooter
        onSelectCategory={(id) => setActiveCategory(id)}
        onOpenBooking={() => handleBookReserve()}
      />

      {/* Modals & Drawers */}
      {/* 1. PDP Vehicle Modal */}
      {selectedVehicle && (
        <ExoticVehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          isSaved={savedVehicles.some((v) => v.id === selectedVehicle.id)}
          isCompared={comparedVehicles.some((v) => v.id === selectedVehicle.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onBookReserve={handleBookReserve}
          currency={currency}
        />
      )}

      {/* 2. Side-by-Side Supercar Comparator */}
      {compareModalOpen && (
        <ExoticVehicleComparator
          vehicles={comparedVehicles}
          onClose={() => setCompareModalOpen(false)}
          onRemove={handleRemoveCompare}
          onSelectVehicle={(v) => setSelectedVehicle(v)}
          onBookReserve={handleBookReserve}
          currency={currency}
        />
      )}

      {/* 3. VIP Reservation Drawer */}
      <ExoticBookingDrawer
        isOpen={bookingDrawerOpen}
        onClose={() => setBookingDrawerOpen(false)}
        selectedVehicle={bookingTargetVehicle}
      />

      {/* 4. Saved Fleet Drawer */}
      <ExoticSavedDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedVehicles={savedVehicles}
        onRemove={handleRemoveSaved}
        onSelectVehicle={(v) => setSelectedVehicle(v)}
        onBookReserve={handleBookReserve}
        currency={currency}
      />

      {/* 5. ⌘K Instant Search Overlay */}
      <ExoticSearchOverlay
        isOpen={searchOverlayOpen}
        onClose={() => setSearchOverlayOpen(false)}
        vehicles={EXOTIC_VEHICLES_CATALOG}
        onSelectVehicle={(v) => setSelectedVehicle(v)}
        onSelectCategory={(id) => setActiveCategory(id)}
        currency={currency}
      />
    </div>
  );
};
