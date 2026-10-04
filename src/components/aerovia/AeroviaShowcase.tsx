'use client';

import React, { useState } from 'react';
import { AeroviaHero } from './AeroviaHero';
import { AeroviaInteractiveBookingEngine } from './AeroviaInteractiveBookingEngine';
import { AeroviaJourneyBuilder } from './AeroviaJourneyBuilder';
import { AeroviaFlightDiscovery } from './AeroviaFlightDiscovery';
import { AeroviaFlightDetail } from './AeroviaFlightDetail';
import { AeroviaHotelDiscovery } from './AeroviaHotelDiscovery';
import { AeroviaHotelDetail } from './AeroviaHotelDetail';
import { AeroviaDestinationDiscovery } from './AeroviaDestinationDiscovery';
import { AeroviaDestinationIntelligence } from './AeroviaDestinationIntelligence';
import { AeroviaSmartPlanner } from './AeroviaSmartPlanner';
import { AeroviaPriceIntelligence } from './AeroviaPriceIntelligence';
import { AeroviaBookingSummary } from './AeroviaBookingSummary';
import { AeroviaMyJourneys } from './AeroviaMyJourneys';
import { AeroviaGlobalMap } from './AeroviaGlobalMap';
import { AeroviaOperationsCenter } from './AeroviaOperationsCenter';
import { AeroviaTrustSupport } from './AeroviaTrustSupport';
import { AeroviaArchitecture } from './AeroviaArchitecture';
import { AeroviaSignatureStory } from './AeroviaSignatureStory';
import { AeroviaCapabilities } from './AeroviaCapabilities';
import { AeroviaBookingModal } from './AeroviaBookingModal';
import { AEROVIA_METADATA, FlightResult, HotelProperty, DestinationItem } from '@/data/aeroviaData';
import { ShieldAlert } from 'lucide-react';

export const AeroviaShowcase: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightResult | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<HotelProperty | null>(null);

  const handleOpenBookingModal = (flight?: FlightResult, hotel?: HotelProperty) => {
    setSelectedFlight(flight || null);
    setSelectedHotel(hotel || null);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedFlight(null);
    setSelectedHotel(null);
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById('booking-engine');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToJourneys = () => {
    const el = document.getElementById('journey-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToFlights = () => {
    const el = document.getElementById('booking-engine');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToHotels = () => {
    const el = document.getElementById('booking-engine');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#02050b] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Simulation & Content Safety Banner */}
      <div className="sticky top-0 z-40 bg-[#060e18]/95 border-b border-amber-500/20 backdrop-blur-md px-4 py-2 text-center text-[11px] font-mono text-amber-300 flex items-center justify-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate">{AEROVIA_METADATA.conceptualNotice}</span>
      </div>

      {/* 1. Hero Section with Integrated Search Experience */}
      <AeroviaHero 
        onExploreJourneys={handleScrollToJourneys}
        onSearchFlights={handleScrollToBooking}
        onSearchHotels={handleScrollToBooking}
        onBuildJourney={handleScrollToBooking}
      />

      {/* 2. Flagship Original Multi-GDS Interactive Booking Engine (20+ Flights & 20+ Hotels) */}
      <div id="booking-engine">
        <AeroviaInteractiveBookingEngine />
      </div>

      {/* 3. Signature Journey Builder (Dubai -> Tokyo) */}
      <div id="journey-builder">
        <AeroviaJourneyBuilder />
      </div>

      {/* 4. Flight Discovery Results & Comparison */}
      <div id="flight-discovery">
        <AeroviaFlightDiscovery onSelectFlight={(fl) => handleOpenBookingModal(fl, undefined)} />
      </div>

      {/* 4. Flight Detail Specs (DXB -> HND Suite) */}
      <AeroviaFlightDetail />

      {/* 5. Luxury Hotel Discovery */}
      <div id="hotel-discovery">
        <AeroviaHotelDiscovery onSelectHotel={(ht) => handleOpenBookingModal(undefined, ht)} />
      </div>

      {/* 6. Hotel Detail Spotlight (Aman Tokyo) */}
      <AeroviaHotelDetail />

      {/* 7. Curated Destination Collections */}
      <AeroviaDestinationDiscovery onSelectDestination={() => handleScrollToJourneys()} />

      {/* 8. Destination Intelligence (AI Style Matching) */}
      <AeroviaDestinationIntelligence />

      {/* 9. Smart Travel Planner (Day-by-Day Itinerary) */}
      <AeroviaSmartPlanner />

      {/* 10. Price Intelligence & 72-Hour Fare Lock */}
      <AeroviaPriceIntelligence />

      {/* 11. Travel Wallet / Booking Summary */}
      <AeroviaBookingSummary onConfirmJourney={() => handleOpenBookingModal()} />

      {/* 12. Traveler Command Portal (My Journeys) */}
      <AeroviaMyJourneys />

      {/* 13. Global Flight Network Map */}
      <AeroviaGlobalMap />

      {/* 14. Travel Operations Center (Simulation) */}
      <AeroviaOperationsCenter />

      {/* 15. Trust, Security & 24/7 VIP Concierge */}
      <AeroviaTrustSupport />

      {/* 16. Digital Travel Architecture & Tech Stack */}
      <AeroviaArchitecture />

      {/* 17. Signature Story (“A JOURNEY STARTS BEFORE TAKEOFF”) */}
      <AeroviaSignatureStory />

      {/* 18. Core Capabilities & Final CTA */}
      <AeroviaCapabilities 
        onStartExploring={handleScrollToFlights}
        onBuildJourney={handleScrollToJourneys}
      />

      {/* Interactive Reservation & Journey Modal */}
      <AeroviaBookingModal 
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        selectedFlight={selectedFlight}
        selectedHotel={selectedHotel}
      />
    </div>
  );
};
