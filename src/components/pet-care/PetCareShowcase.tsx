'use client';
import React, { useState } from 'react';
import { PetCareNav } from './PetCareNav';
import { PetCareHero } from './PetCareHero';
import { PetCareMetrics } from './PetCareMetrics';
import { EmergencyCareSection } from './EmergencyCareSection';
import { PetCareServices } from './PetCareServices';
import { PetCareServiceModal } from './PetCareServiceModal';
import { PetHealthMatcher } from './PetHealthMatcher';
import { VeterinarianDirectory } from './VeterinarianDirectory';
import { VeterinarianProfileModal } from './VeterinarianProfileModal';
import { PetAppointmentModal } from './PetAppointmentModal';
import { PetProfileBuilder } from './PetProfileBuilder';
import { VaccinationPlanner } from './VaccinationPlanner';
import { PetWellnessCalculator } from './PetWellnessCalculator';
import { PetGrooming } from './PetGrooming';
import { PetBoarding } from './PetBoarding';
import { PetNutrition } from './PetNutrition';
import { NutritionMatcher } from './NutritionMatcher';
import { PetProducts } from './PetProducts';
import { PetProductModal } from './PetProductModal';
import { PetCartDrawer } from './PetCartDrawer';
import { PetWishlistDrawer } from './PetWishlistDrawer';
import { PetCheckout } from './PetCheckout';
import { PetHealthDashboard } from './PetHealthDashboard';
import { ClinicFacilityTour } from './ClinicFacilityTour';
import { PetBeforeAfter } from './PetBeforeAfter';
import { PetGallery } from './PetGallery';
import { PetJournal } from './PetJournal';
import { PetReviews } from './PetReviews';
import { PetWellnessMembership } from './PetWellnessMembership';
import { PetLocations } from './PetLocations';
import { PetFAQ } from './PetFAQ';
import { PetFinalCTA } from './PetFinalCTA';
import { PetContact } from './PetContact';
import { PetCareFooter } from './PetCareFooter';
import { VetService, Veterinarian, PetProduct } from '@/data/petCareData';

export const PetCareShowcase: React.FC<any> = () => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<VetService | null>(null);
  const [selectedVetModal, setSelectedVetModal] = useState<Veterinarian | null>(null);
  const [selectedProductModal, setSelectedProductModal] = useState<PetProduct | null>(null);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialVet, setBookingInitialVet] = useState<string | undefined>(undefined);

  const [cart, setCart] = useState<PetProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product: PetProduct) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleOpenBooking = (vetId?: string) => {
    setBookingInitialVet(vetId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0C151D] text-white font-sans selection:bg-emerald-400 selection:text-slate-950">
      <PetCareNav
        onOpenBooking={() => handleOpenBooking()}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        cartCount={cart.length}
        wishlistCount={0}
        onSearch={(q: string) => setSearchQuery(q)}
      />
      <PetCareHero onOpenBooking={() => handleOpenBooking()} />
      <PetCareMetrics />
      <EmergencyCareSection />
      <PetCareServices onSelectService={(s: VetService) => setSelectedServiceModal(s)} onOpenBooking={() => handleOpenBooking()} searchQuery={searchQuery} />
      <PetHealthMatcher onSelectService={(s: VetService) => setSelectedServiceModal(s)} onOpenBooking={() => handleOpenBooking()} />
      <VeterinarianDirectory onSelectVet={(v: Veterinarian) => setSelectedVetModal(v)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <PetProfileBuilder />
      <VaccinationPlanner />
      <PetWellnessCalculator />
      <PetGrooming onOpenBooking={() => handleOpenBooking()} />
      <PetBoarding />
      <PetNutrition />
      <NutritionMatcher />
      <PetProducts onSelectProduct={(p: PetProduct) => setSelectedProductModal(p)} onAddToCart={handleAddToCart} />
      <PetHealthDashboard />
      <ClinicFacilityTour />
      <PetBeforeAfter />
      <PetGallery />
      <PetJournal />
      <PetReviews />
      <PetWellnessMembership />
      <PetLocations />
      <PetFAQ />
      <PetFinalCTA onOpenBooking={() => handleOpenBooking()} />
      <PetContact />
      <PetCareFooter />

      {/* Modals & Drawers */}
      <PetCareServiceModal item={selectedServiceModal} onClose={() => setSelectedServiceModal(null)} onOpenBooking={() => handleOpenBooking()} />
      <VeterinarianProfileModal vet={selectedVetModal} onClose={() => setSelectedVetModal(null)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <PetProductModal item={selectedProductModal} onClose={() => setSelectedProductModal(null)} onAddToCart={handleAddToCart} />
      <PetAppointmentModal isOpen={isBookingOpen} initialVetId={bookingInitialVet} onClose={() => setIsBookingOpen(false)} />
      <PetCartDrawer isOpen={isCartOpen} cart={cart} onClose={() => setIsCartOpen(false)} onRemove={handleRemoveFromCart} onOpenCheckout={() => setIsCheckoutOpen(true)} />
      <PetWishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <PetCheckout isOpen={isCheckoutOpen} cart={cart} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};
