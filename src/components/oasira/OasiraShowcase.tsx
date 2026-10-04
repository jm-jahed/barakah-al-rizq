'use client';

import React, { useState } from 'react';
import { OasiraNav } from './OasiraNav';
import { OasiraHero } from './OasiraHero';
import { ResortSearch } from './ResortSearch';
import { EscapeCategories } from './EscapeCategories';
import { FeaturedResorts } from './FeaturedResorts';
import { ResortDetail } from './ResortDetail';
import { RoomSuites } from './RoomSuites';
import { StaycationOffers } from './StaycationOffers';
import { DestinationGuide } from './DestinationGuide';
import { ExperiencesSection } from './ExperiencesSection';
import { EscapeBuilder } from './EscapeBuilder';
import { PriceCalculator } from './PriceCalculator';
import { UaeMap } from './UaeMap';
import { TravelTimeSection } from './TravelTimeSection';
import { FamilyEscapes } from './FamilyEscapes';
import { CouplesEscapes } from './CouplesEscapes';
import { WellnessRetreats } from './WellnessRetreats';
import { RewardsSection } from './RewardsSection';
import { GuestReviews } from './GuestReviews';
import { TravelGuide } from './TravelGuide';
import { OasiraFAQ } from './OasiraFAQ';
import { BookingFlow } from './BookingFlow';
import { OasiraFinalCTA } from './OasiraFinalCTA';
import { OasiraFooter } from './OasiraFooter';
import { OasiraResort, OasiraRoom, OasiraStaycationOffer, OasiraExperience, OASIRA_RESORTS, OASIRA_ROOMS } from '@/data/oasiraData';

interface OasiraShowcaseProps {
  standalone?: boolean;
}

export const OasiraShowcase: React.FC<OasiraShowcaseProps> = ({ standalone = true }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedResortIds, setSavedResortIds] = useState<string[]>(['azure-palm', 'dune-mirage']);
  const [selectedResortDetail, setSelectedResortDetail] = useState<OasiraResort | null>(null);
  
  // Booking state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialBookingResort, setInitialBookingResort] = useState<OasiraResort | null>(null);
  const [initialBookingRoom, setInitialBookingRoom] = useState<OasiraRoom | null>(null);
  const [customTotalPrice, setCustomTotalPrice] = useState<number | null>(null);
  const [customSummaryText, setCustomSummaryText] = useState<string | null>(null);

  const handleToggleSaveResort = (resortId: string) => {
    if (savedResortIds.includes(resortId)) {
      setSavedResortIds(savedResortIds.filter((id) => id !== resortId));
    } else {
      setSavedResortIds([...savedResortIds, resortId]);
    }
  };

  const handleOpenBooking = (resort?: OasiraResort | null, room?: OasiraRoom | null) => {
    setInitialBookingResort(resort || OASIRA_RESORTS[0]);
    setInitialBookingRoom(room || OASIRA_ROOMS[1]);
    setCustomTotalPrice(null);
    setCustomSummaryText(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithCustomEscape = (totalPrice: number, summaryText: string) => {
    setCustomTotalPrice(totalPrice);
    setCustomSummaryText(summaryText);
    setIsBookingOpen(true);
  };

  const scrollToResorts = () => {
    const el = document.getElementById('resorts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A2920] text-[#FAF6EE] font-sans selection:bg-[#D4B382] selection:text-black">
      
      {/* Sticky Luxury Navbar */}
      <OasiraNav
        savedCount={savedResortIds.length}
        onOpenSavedDrawer={scrollToResorts}
        onOpenBookingModal={() => handleOpenBooking()}
      />

      <main id="top">
        
        {/* Cinematic UAE Resort Hero */}
        <OasiraHero
          onExploreResorts={scrollToResorts}
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* Smart Travel Search */}
        <ResortSearch
          onSearch={(params) => {
            scrollToResorts();
          }}
        />

        {/* Escape Category Selector */}
        <EscapeCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* 8 Featured UAE Resorts */}
        <FeaturedResorts
          activeCategory={activeCategory}
          savedResortIds={savedResortIds}
          onToggleSaveResort={handleToggleSaveResort}
          onSelectResortDetail={(resort) => setSelectedResortDetail(resort)}
          onBookResort={(resort) => handleOpenBooking(resort)}
        />

        {/* Accommodations & Suites */}
        <RoomSuites
          onSelectRoomForBooking={(room) => handleOpenBooking(null, room)}
        />

        {/* UAE Staycation Packages */}
        <StaycationOffers
          onBookStaycation={(offer) => handleOpenBooking()}
        />

        {/* 7 Emirates Interactive Guide */}
        <DestinationGuide />

        {/* Curated UAE Experiences */}
        <ExperiencesSection
          onBookExperience={(exp) => handleOpenBooking()}
        />

        {/* Custom Trip Architect */}
        <EscapeBuilder
          onOpenBookingWithCustomEscape={handleOpenBookingWithCustomEscape}
        />

        {/* Stay Price Calculator */}
        <PriceCalculator />

        {/* Interactive UAE Map */}
        <UaeMap />

        {/* Highway Travel Times */}
        <TravelTimeSection />

        {/* Family Staycations */}
        <FamilyEscapes
          onExploreFamilyResorts={scrollToResorts}
        />

        {/* Romantic Couples Getaways */}
        <CouplesEscapes
          onOpenBookingModal={() => handleOpenBooking()}
        />

        {/* Somatic & Thermal Wellness */}
        <WellnessRetreats />

        {/* OASIRA Rewards Loyalty Club */}
        <RewardsSection />

        {/* Verified Staycation Reviews */}
        <GuestReviews />

        {/* Editorial Travel Journal */}
        <TravelGuide />

        {/* Accordion FAQ */}
        <OasiraFAQ />

        {/* Final CTA */}
        <OasiraFinalCTA
          onOpenBookingModal={() => handleOpenBooking()}
        />

      </main>

      {/* Footer */}
      <OasiraFooter />

      {/* Resort Details Inspector Modal */}
      <ResortDetail
        resort={selectedResortDetail}
        onClose={() => setSelectedResortDetail(null)}
        onBookResort={(resort) => handleOpenBooking(resort)}
      />

      {/* Online Reservation Drawer */}
      <BookingFlow
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialResort={initialBookingResort}
        initialRoom={initialBookingRoom}
        customTotalPrice={customTotalPrice}
        customSummaryText={customSummaryText}
      />

    </div>
  );
};
