'use strict';
'use client';

import React, { useState } from 'react';
import { SalonNav } from './SalonNav';
import { SalonHero } from './SalonHero';
import { BeautyCategoryExplorer } from './BeautyCategoryExplorer';
import { SalonTreatmentDiscovery } from './SalonTreatmentDiscovery';
import { SalonCustomizer } from './SalonCustomizer';
import { SalonStylistsRoster } from './SalonStylistsRoster';
import { SalonFooter } from './SalonFooter';
import { SalonTreatmentModal } from './SalonTreatmentModal';
import { SalonComparator } from './SalonComparator';
import { SalonBookingDrawer } from './SalonBookingDrawer';
import { SalonSavedDrawer } from './SalonSavedDrawer';
import { SalonSearchOverlay } from './SalonSearchOverlay';
import { SalonTreatment, SalonStylist, SALON_TREATMENTS_CATALOG } from '@/data/salonData';

interface SalonShowcaseProps {
  standalone?: boolean;
}

export const SalonShowcase: React.FC<SalonShowcaseProps> = ({ standalone = true }) => {
  // State
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>(['treat-1', 'treat-21']);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [selectedTreatment, setSelectedTreatment] = useState<SalonTreatment | null>(null);
  const [bookingTreatment, setBookingTreatment] = useState<SalonTreatment | null>(null);
  const [customPackagePayload, setCustomPackagePayload] = useState<any | null>(null);
  
  // Modals & Drawers
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSavedOpen, setIsSavedOpen] = useState<boolean>(false);
  const [isComparatorOpen, setIsComparatorOpen] = useState<boolean>(false);

  // Toggle Save
  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle Compare
  const handleToggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        return [prev[1], prev[2], id]; // max 3
      }
      return [...prev, id];
    });
  };

  // Select Treatment for Detailed Modal
  const handleSelectTreatment = (treatment: SalonTreatment) => {
    setSelectedTreatment(treatment);
  };

  // Book Single Treatment
  const handleBookTreatment = (treatment: SalonTreatment) => {
    setCustomPackagePayload(null);
    setBookingTreatment(treatment);
    setIsBookingOpen(true);
  };

  // Book Custom Package from Estimator
  const handleBookPackage = (payload: any) => {
    setBookingTreatment(null);
    setCustomPackagePayload(payload);
    setIsBookingOpen(true);
  };

  // Book with specific stylist
  const handleBookWithStylist = (stylist: SalonStylist) => {
    setCustomPackagePayload(null);
    setBookingTreatment(SALON_TREATMENTS_CATALOG[0]);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <SalonNav
        onOpenBooking={() => {
          setCustomPackagePayload(null);
          setBookingTreatment(null);
          setIsBookingOpen(true);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        savedCount={savedIds.length}
        compareCount={comparedIds.length}
      />

      <main>
        {/* Fullscreen Haute Hero */}
        <SalonHero
          onOpenBooking={() => {
            setCustomPackagePayload(null);
            setBookingTreatment(null);
            setIsBookingOpen(true);
          }}
          onExploreTreatments={() => {
            const el = document.getElementById('treatments');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCustomizer={() => {
            const el = document.getElementById('customizer');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8 Disciplines Explorer */}
        <BeautyCategoryExplorer
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const el = document.getElementById('treatments');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 160+ Treatments Discovery Catalog */}
        <SalonTreatmentDiscovery
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          savedIds={savedIds}
          comparedIds={comparedIds}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onSelectTreatment={handleSelectTreatment}
          onBookTreatment={handleBookTreatment}
        />

        {/* Interactive Bridal & VIP Customizer */}
        <SalonCustomizer onBookPackage={handleBookPackage} />

        {/* Master Stylists & Directors Roster */}
        <SalonStylistsRoster onBookWithStylist={handleBookWithStylist} />
      </main>

      {/* Footer */}
      <SalonFooter />

      {/* PDP Treatment Details Modal */}
      {selectedTreatment && (
        <SalonTreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
          isSaved={savedIds.includes(selectedTreatment.id)}
          isCompared={comparedIds.includes(selectedTreatment.id)}
          onToggleSave={handleToggleSave}
          onToggleCompare={handleToggleCompare}
          onBook={handleBookTreatment}
        />
      )}

      {/* Side-by-Side Comparator Modal */}
      {isComparatorOpen && (
        <SalonComparator
          comparedIds={comparedIds}
          onClose={() => setIsComparatorOpen(false)}
          onRemove={(id) => setComparedIds((prev) => prev.filter((i) => i !== id))}
          onClear={() => setComparedIds([])}
          onBook={handleBookTreatment}
        />
      )}

      {/* VIP Booking Drawer */}
      <SalonBookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTreatment={bookingTreatment}
        customPackagePayload={customPackagePayload}
      />

      {/* Saved Wishlist Drawer */}
      <SalonSavedDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedIds={savedIds}
        onRemoveSave={handleToggleSave}
        onClearAll={() => setSavedIds([])}
        onSelectTreatment={handleSelectTreatment}
        onBookTreatment={handleBookTreatment}
      />

      {/* Instant ⌘K Search Overlay */}
      <SalonSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTreatment={handleSelectTreatment}
      />
    </div>
  );
};
