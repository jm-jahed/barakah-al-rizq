import React, { useState, useMemo } from 'react';
import { Crown, Users, Check, ShieldCheck, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface VenueOption {
  id: string;
  name: string;
  location: string;
  maxGuests: number;
  baseVenueFeeAED: number;
  description: string;
}

const VENUES: VenueOption[] = [
  {
    id: 'difc-crystal-salon',
    name: 'DIFC Royal Crystal Salon',
    location: 'Gate Village 08, DIFC Dubai',
    maxGuests: 16,
    baseVenueFeeAED: 550,
    description: 'Private crystal-walled salon with dedicated kitchen pass, sommelier cellar, and discreet valet access.'
  },
  {
    id: 'palm-terrace-majlis',
    name: 'Palm Jumeirah Sea Terrace Majlis',
    location: 'Crescent West, Palm Jumeirah',
    maxGuests: 26,
    baseVenueFeeAED: 850,
    description: 'Waterfront terrace majlis overlooking Dubai Marina skyline with open wood-fired hearth and private lounge.'
  },
  {
    id: 'skyview-penthouse-salon',
    name: 'Downtown Skyview Penthouse Salon',
    location: 'Opera District, Downtown Dubai',
    maxGuests: 18,
    baseVenueFeeAED: 750,
    description: 'Elevated 54th-floor private dining sanctum with panoramic Burj Khalifa vistas and dedicated bar.'
  },
  {
    id: 'superyacht-charter-dining',
    name: 'VIP Superyacht Charter Dining',
    location: 'Dubai Harbour Yacht Club',
    maxGuests: 30,
    baseVenueFeeAED: 1600,
    description: 'Turnkey culinary brigade and service aboard a 120ft luxury yacht navigating Dubai coastline.'
  }
];

interface MenuTier {
  id: string;
  name: string;
  courses: number;
  pricePerPersonAED: number;
  highlights: string;
}

const MENU_TIERS: MenuTier[] = [
  {
    id: '5-course',
    name: '5-Course Heritage & French Signature',
    courses: 5,
    pricePerPersonAED: 245,
    highlights: 'Includes Périgord Truffle Soup, Wagyu Ribeye & Damascus Rose Pavlova'
  },
  {
    id: '8-course',
    name: '8-Course Royal Degustation Journey',
    courses: 8,
    pricePerPersonAED: 395,
    highlights: 'Includes Oscietra Caviar Tartlet, Oman Rock Lobster & A5 Kagoshima Wagyu'
  },
  {
    id: '12-course',
    name: '12-Course Sovereign Imperial Symphony',
    courses: 12,
    pricePerPersonAED: 585,
    highlights: 'Complete multi-sensory chef table with Imperial Beluga, 24K Gold cuts & rare dessert atelier'
  }
];

interface Addon {
  id: string;
  name: string;
  priceAED: number;
  type: 'per-person' | 'flat';
  description: string;
}

const ADDONS: Addon[] = [
  {
    id: 'caviar-upgrade',
    name: 'Imperial Beluga Caviar (50g) Tableside Service',
    priceAED: 380,
    type: 'flat',
    description: 'Served on ice-carved pedestal with mother-of-pearl spoons and blinis'
  },
  {
    id: 'gold-leaf-service',
    name: '24K Pure Gold Leaf Main Course Finishing',
    priceAED: 75,
    type: 'per-person',
    description: 'Florence-certified edible gold foil sheets applied tableside'
  },
  {
    id: 'sommelier-pairings',
    name: 'Sommelier Artisanal Infusion & Vintage Pairing',
    priceAED: 95,
    type: 'per-person',
    description: 'Rare vintage mocktails, barrel-aged date elixirs & botanical extracts'
  },
  {
    id: 'live-oud-lutenist',
    name: 'Private Classical Oud Master & Lutenist',
    priceAED: 450,
    type: 'flat',
    description: 'Unobtrusive live acoustic Khaleeji & Andalusian classical melodies'
  },
  {
    id: 'tableside-flambe',
    name: 'Executive Chef Tableside Flambé & Torching',
    priceAED: 280,
    type: 'flat',
    description: 'Personalized culinary presentation and storytelling by Master Chef'
  },
  {
    id: 'calligraphy-keepsakes',
    name: 'Bespoke Hand-Inscribed Gold Calligraphy Menus',
    priceAED: 35,
    type: 'per-person',
    description: 'Customized luxury silk-bound keepsake menus for every guest'
  }
];

interface PrivateDiningEstimatorProps {
  onOpenReservationWithQuote?: (quoteDetails: any) => void;
}

export const PrivateDiningEstimator: React.FC<PrivateDiningEstimatorProps> = ({
  onOpenReservationWithQuote
}) => {
  const { t, translateVenue, translateTier, translateAddon, formatPrice, toArabicDigits, isRtl } = useRestaurantLanguage();
  const [selectedVenueId, setSelectedVenueId] = useState<string>('difc-crystal-salon');
  const [guestCount, setGuestCount] = useState<number>(8);
  const [selectedTierId, setSelectedTierId] = useState<string>('8-course');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['sommelier-pairings', 'caviar-upgrade']);

  const selectedVenue = VENUES.find(v => v.id === selectedVenueId) || VENUES[0];
  const selectedTier = MENU_TIERS.find(t => t.id === selectedTierId) || MENU_TIERS[1];

  const localizedVenue = translateVenue(selectedVenue.id);
  const localizedTier = translateTier(selectedTier.id);

  const handleToggleAddon = (id: string) => {
    setSelectedAddonIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const calculations = useMemo(() => {
    const venueFee = selectedVenue.baseVenueFeeAED;
    const foodSubtotal = selectedTier.pricePerPersonAED * guestCount;
    
    let addonsTotal = 0;
    selectedAddonIds.forEach(id => {
      const addon = ADDONS.find(a => a.id === id);
      if (addon) {
        if (addon.type === 'per-person') {
          addonsTotal += addon.priceAED * guestCount;
        } else {
          addonsTotal += addon.priceAED;
        }
      }
    });

    const netSubtotal = venueFee + foodSubtotal + addonsTotal;
    const vat5Percent = Math.round(netSubtotal * 0.05);
    const municipalityFee7Percent = Math.round(netSubtotal * 0.07);
    const grandTotalAED = netSubtotal + vat5Percent + municipalityFee7Percent;

    return {
      venueFee,
      foodSubtotal,
      addonsTotal,
      netSubtotal,
      vat5Percent,
      municipalityFee7Percent,
      grandTotalAED,
      perGuestAverage: Math.round(grandTotalAED / guestCount)
    };
  }, [selectedVenue, selectedTier, guestCount, selectedAddonIds]);

  const handleProceedReservation = () => {
    if (onOpenReservationWithQuote) {
      onOpenReservationWithQuote({
        venue: localizedVenue.name,
        guestCount,
        tier: localizedTier.name,
        grandTotalAED: calculations.grandTotalAED,
        addons: selectedAddonIds.map(id => translateAddon(id).name)
      });
    }
  };

  return (
    <section id="private-dining-estimator" className="py-20 bg-zinc-950 border-t border-b border-amber-900/30 text-zinc-100 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            {t('estimator_badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            {t('estimator_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            {t('estimator_subtitle')}
          </p>
        </div>

        {/* Simulator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/70 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
            
            {/* Step 1: Venue Selection */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                {t('step_1_venue')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VENUES.map(venue => {
                  const isSelected = selectedVenueId === venue.id;
                  const vLoc = translateVenue(venue.id);
                  return (
                    <div
                      key={venue.id}
                      onClick={() => {
                        setSelectedVenueId(venue.id);
                        if (guestCount > venue.maxGuests) setGuestCount(venue.maxGuests);
                      }}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-950/40'
                          : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-sm font-serif font-bold text-zinc-100">{vLoc.name}</h4>
                        <span className="text-[10px] font-mono text-amber-400 font-semibold">
                          +{formatPrice(venue.baseVenueFeeAED)}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mb-2">{vLoc.location}</p>
                      <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                        <Users className="w-3 h-3 text-amber-500" /> {t('max_guests')} {toArabicDigits(venue.maxGuests)} {t('guests')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-mono tracking-widest text-amber-400">
                  {t('step_2_guests')}
                </label>
                <span className="text-lg font-serif font-bold text-amber-300">
                  {toArabicDigits(guestCount)} {guestCount === 1 ? t('guest') : t('guests')}
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={selectedVenue.maxGuests}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-zinc-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-1 font-mono">
                <span>{t('min_2_guests')}</span>
                <span>{t('max_guests')} {toArabicDigits(selectedVenue.maxGuests)} {t('guests')} ({localizedVenue.name})</span>
              </div>
            </div>

            {/* Step 3: Menu Tier Selection */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                {t('step_3_menu_tier')}
              </label>
              <div className="space-y-3">
                {MENU_TIERS.map(tier => {
                  const isSelected = selectedTierId === tier.id;
                  const tLoc = translateTier(tier.id);
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-950/30'
                          : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-serif font-bold text-zinc-100">{tLoc.name}</h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-amber-300">
                            {toArabicDigits(tier.courses)} {t('courses')}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">{tLoc.highlights}</p>
                      </div>
                      <div className={`shrink-0 ${isRtl ? 'sm:text-left' : 'sm:text-right'}`}>
                        <span className="text-base font-bold font-serif text-amber-200">
                          {formatPrice(tier.pricePerPersonAED)}
                        </span>
                        <div className="text-[10px] text-zinc-500">{t('per_honored_guest')}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Addons Checkboxes */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                {t('step_4_addons')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  const aLoc = translateAddon(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'border-amber-500/80 bg-amber-500/10'
                          : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-amber-500 border-amber-500 text-zinc-950' : 'border-zinc-700 bg-zinc-900'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-200">{aLoc.name}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">{aLoc.description}</div>
                        <div className="text-[11px] font-mono text-amber-400 font-bold mt-1">
                          +{formatPrice(addon.priceAED)} {addon.type === 'per-person' ? `/${t('guest')}` : `(${t('flat')})`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Price Breakdown & Booking Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-amber-950/50">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-amber-400">
                  {t('tasting_proposal')}
                </span>
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  {t('estimated_investment')}
                </h3>
              </div>
              <Crown className="w-6 h-6 text-amber-400" />
            </div>

            {/* Selected Configuration Summary */}
            <div className="py-4 space-y-2 text-xs border-b border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-400">{t('salon_label')}:</span>
                <span className="font-semibold text-zinc-200">{localizedVenue.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">{t('party_size')}:</span>
                <span className="font-semibold text-zinc-200">{toArabicDigits(guestCount)} {t('guests')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">{t('tasting_architecture')}:</span>
                <span className="font-semibold text-zinc-200">{localizedTier.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">{t('enhancements')}:</span>
                <span className="font-semibold text-zinc-200">{toArabicDigits(selectedAddonIds.length)} {t('selected')}</span>
              </div>
            </div>

            {/* Itemized Calculations */}
            <div className="py-4 space-y-2.5 text-xs text-zinc-300 font-mono border-b border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">{t('venue_reservation_fee')}</span>
                <span>{formatPrice(calculations.venueFee)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">{t('gastronomy')} ({toArabicDigits(guestCount)} × {formatPrice(selectedTier.pricePerPersonAED)})</span>
                <span>{formatPrice(calculations.foodSubtotal)}</span>
              </div>
              {calculations.addonsTotal > 0 && (
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-sans">{t('haute_enhancements')}</span>
                  <span>{formatPrice(calculations.addonsTotal)}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-400 font-sans pt-1">
                <span>{t('net_subtotal')}</span>
                <span className="font-mono text-zinc-200">{formatPrice(calculations.netSubtotal)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500 font-sans">
                <span>{t('uae_vat')}</span>
                <span className="font-mono">{formatPrice(calculations.vat5Percent)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500 font-sans">
                <span>{t('municipality_fee')}</span>
                <span className="font-mono">{formatPrice(calculations.municipalityFee7Percent)}</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="py-5">
              <div className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                {t('total_package')}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-amber-300">
                  {formatPrice(calculations.grandTotalAED)}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  (~{formatPrice(calculations.perGuestAverage)} / {t('guest')})
                </span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-[11px] text-zinc-400 mb-6 font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t('halal_guarantee')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hold_guarantee')}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleProceedReservation}
              className="w-full py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-xl shadow-amber-950/60 transition-all flex items-center justify-center gap-2 group"
            >
              <span>{t('book_salon_btn')}</span>
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </button>
            
            <p className="text-center text-[10px] text-zinc-500 mt-3 font-sans">
              {t('vip_concierge_note')}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

