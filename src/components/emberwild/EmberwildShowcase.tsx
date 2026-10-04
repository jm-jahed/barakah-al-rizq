'use client';

import React, { useState } from 'react';
import { EmberwildHero } from './EmberwildHero';
import { EmberwildStaySearch } from './EmberwildStaySearch';
import { EmberwildWildFinder } from './EmberwildWildFinder';
import { EmberwildStayCatalog } from './EmberwildStayCatalog';
import { EmberwildDestinationExplorer } from './EmberwildDestinationExplorer';
import { EmberwildStepInside } from './EmberwildStepInside';
import { EmberwildExperienceBuilder } from './EmberwildExperienceBuilder';
import { EmberwildEscapePlanner } from './EmberwildEscapePlanner';
import { EmberwildCampfire } from './EmberwildCampfire';
import { EmberwildNightSky } from './EmberwildNightSky';
import { EmberwildWeather } from './EmberwildWeather';
import { EmberwildPackingGuide } from './EmberwildPackingGuide';
import { EmberwildStayComparison } from './EmberwildStayComparison';
import { EmberwildDashboard } from './EmberwildDashboard';
import { EmberwildSustainable } from './EmberwildSustainable';
import { EmberwildJourneyTimeline } from './EmberwildJourneyTimeline';
import { EmberwildStory } from './EmberwildStory';
import { EmberwildOperationsCenter } from './EmberwildOperationsCenter';
import { EmberwildArchitecture } from './EmberwildArchitecture';
import { EmberwildClosingCTA } from './EmberwildClosingCTA';
import { EmberwildStayModal } from './EmberwildStayModal';
import { EmberwildBookingModal } from './EmberwildBookingModal';
import { EmberwildTripBag, TripBagItem } from './EmberwildTripBag';
import { EMBERWILD_STAYS, EmberwildStay, ExperienceAddon } from '@/data/emberwildData';

export const EmberwildShowcase: React.FC = () => {
  const [selectedStay, setSelectedStay] = useState<EmberwildStay | null>(null);
  const [stayModalOpen, setStayModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [tripBagOpen, setTripBagOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState<any>(null);

  const [tripBagItems, setTripBagItems] = useState<TripBagItem[]>([
    {
      id: 'item-init-1',
      type: 'stay',
      title: 'Ember Ridge Dome (2 Nights)',
      subtitle: 'Hatta Mountain Ridge · 2 Guests',
      priceAED: 3300,
      image: EMBERWILD_STAYS[0].image
    },
    {
      id: 'item-init-2',
      type: 'experience',
      title: 'Astronomical Stargazing & Celestron Scope',
      subtitle: 'Night Exploration · 2 Hours',
      priceAED: 450,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const handleInspectStay = (stay: EmberwildStay) => {
    setSelectedStay(stay);
    setStayModalOpen(true);
  };

  const handleQuickBook = (stay: EmberwildStay) => {
    setSelectedStay(stay);
    setBookingModalOpen(true);
  };

  const handleAddItemToBag = (item: TripBagItem) => {
    setTripBagItems(prev => [item, ...prev]);
    setTripBagOpen(true);
  };

  const handleRemoveBagItem = (id: string) => {
    setTripBagItems(prev => prev.filter(i => i.id !== id));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080c08] text-stone-100 selection:bg-amber-500 selection:text-stone-950 overflow-x-clip max-w-full">
      {/* Hero Experience */}
      <EmberwildHero
        onExploreStays={() => scrollToSection('stays-catalog')}
        onPlanEscape={() => scrollToSection('escape-planner')}
        onOpenTripBag={() => setTripBagOpen(true)}
        tripBagCount={tripBagItems.length}
      />

      {/* Interactive Search Bar */}
      <EmberwildStaySearch onSearch={(filters) => {
        setSearchFilter(filters);
        scrollToSection('stays-catalog');
      }} />

      {/* The Wild Finder (Signature Discovery System) */}
      <div id="wild-finder">
        <EmberwildWildFinder onSelectStay={handleInspectStay} />
      </div>

      {/* 24 Distinct Wilderness Stays Catalog */}
      <div id="stays-catalog">
        <EmberwildStayCatalog
          onSelectStay={handleInspectStay}
          onQuickBook={handleQuickBook}
          activeFilter={searchFilter}
        />
      </div>

      {/* Destination Explorer */}
      <div id="destinations">
        <EmberwildDestinationExplorer onSelectDestination={(type) => {
          setSearchFilter({ destination: type, stayType: 'ALL', guests: 2 });
          scrollToSection('stays-catalog');
        }} />
      </div>

      {/* Step Inside: 3D Cross-Section Showroom */}
      <EmberwildStepInside />

      {/* Experience Builder Customizer */}
      <div id="experience-builder">
        <EmberwildExperienceBuilder
          onBookFullEscape={(total, addons) => {
            handleAddItemToBag({
              id: `custom-escape-${Date.now()}`,
              type: 'stay',
              title: 'Custom Ember Ridge Retreat',
              subtitle: `${addons.length} Add-on experiences included`,
              priceAED: total,
              image: EMBERWILD_STAYS[0].image
            });
          }}
        />
      </div>

      {/* Smart Escape Planner */}
      <div id="escape-planner">
        <EmberwildEscapePlanner onReserveItinerary={() => handleQuickBook(EMBERWILD_STAYS[0])} />
      </div>

      {/* Signature Micro-Interaction: The Fire */}
      <EmberwildCampfire />

      {/* Night Sky Astronomical Experience */}
      <EmberwildNightSky />

      {/* Real-Time Weather Conditions */}
      <EmberwildWeather />

      {/* Smart Packing Guide */}
      <EmberwildPackingGuide />

      {/* Side-by-side Stay Comparison */}
      <EmberwildStayComparison onSelectStay={handleInspectStay} />

      {/* Guest Sanctuary Dashboard */}
      <EmberwildDashboard onViewStay={handleInspectStay} />

      {/* Leave Less Behind Sustainability */}
      <EmberwildSustainable />

      {/* Wilderness 6-Stage Journey Timeline */}
      <EmberwildJourneyTimeline />

      {/* Signature Story */}
      <EmberwildStory />

      {/* Live Operations Center Simulation */}
      <EmberwildOperationsCenter />

      {/* Technology & Architecture Ecosystem */}
      <EmberwildArchitecture />

      {/* Closing Call to Action */}
      <EmberwildClosingCTA
        onPlanEscape={() => scrollToSection('escape-planner')}
        onExploreStays={() => scrollToSection('stays-catalog')}
      />

      {/* Stay Detail Modal */}
      {selectedStay && (
        <EmberwildStayModal
          stay={selectedStay}
          onClose={() => setSelectedStay(null)}
          onReserve={(stay) => {
            setSelectedStay(stay);
            setBookingModalOpen(true);
          }}
        />
      )}

      {/* 5-Step Booking Flow Modal */}
      {selectedStay && (
        <EmberwildBookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          selectedStay={selectedStay}
          onBookingComplete={(passData) => {
            // Add to trip pass records if needed
          }}
        />
      )}

      {/* Closable Cart / Trip Bag Drawer */}
      <EmberwildTripBag
        isOpen={tripBagOpen}
        onClose={() => setTripBagOpen(false)}
        items={tripBagItems}
        onRemoveItem={handleRemoveBagItem}
        onProceedToCheckout={() => {
          setSelectedStay(EMBERWILD_STAYS[0]);
          setBookingModalOpen(true);
        }}
      />
    </div>
  );
};
