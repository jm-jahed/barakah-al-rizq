import React, { useState, useMemo } from 'react';
import { Crown, Zap, Check, ShieldCheck, Clock, ArrowRight, Award, Flame, Users } from 'lucide-react';

interface ClubTier {
  id: string;
  name: string;
  pricePerMonthAED: number;
  highlight: string;
  features: string[];
}

const CLUB_TIERS: ClubTier[] = [
  {
    id: 'gold-arena',
    name: 'Gold Arena Access',
    pricePerMonthAED: 950,
    highlight: 'DIFC or Palm Jumeirah Single Club',
    features: [
      'Full access to Eleiko Olympic lifting & Keiser pneumatic floor',
      'Unlimited group Reformer Pilates & HYROX conditioning classes',
      'Finnish cedarwood sauna, steam room & 4°C ice plunge access',
      'Locker room amenities & Malin+Goetz luxury grooming bar'
    ]
  },
  {
    id: 'black-sovereign',
    name: 'Black Sovereign 24/7 Dual-Club',
    pricePerMonthAED: 1650,
    highlight: '24/7 All-Access DIFC + Palm Sanctuary',
    features: [
      'Dual-club 24/7 biometric access across DIFC & Palm Jumeirah',
      'Dedicated VIP Valet parking at all locations',
      '4x Monthly -110°C Sub-Zero Cryo or Hyperbaric Oxygen sessions',
      'Priority booking window for master guest coaches & workshops',
      'Rooftop magnesium recovery pool & private athlete lounge'
    ]
  },
  {
    id: 'private-sanctum',
    name: 'Private Athlete Sanctum',
    pricePerMonthAED: 2800,
    highlight: 'Ultra-Exclusive C-Suite Performance Suite',
    features: [
      'Private keycard training suite with bespoke Eleiko rack setup',
      'Complimentary daily workout apparel wash & press laundry service',
      'Unlimited biohacking recovery suite (Cryo, HBOT, Red Light)',
      'Permanent executive personalized locker with custom brass nameplate',
      'Direct line to Head of Sports Science & Clinical Nutritionist'
    ]
  }
];

interface AddonOption {
  id: string;
  name: string;
  priceAED: number;
  description: string;
}

const ADDONS: AddonOption[] = [
  {
    id: 'pt-8-sessions',
    name: '8x 1-on-1 Master Coach PT Sessions',
    priceAED: 1800,
    description: 'Dedicated Olympic mentor with EMG velocity tracking'
  },
  {
    id: 'unlimited-cryo',
    name: 'Unlimited -110°C Cryo & Hyperbaric Pass',
    priceAED: 650,
    description: 'Daily sub-zero nitrogen pod & 1.5 ATA oxygen chamber'
  },
  {
    id: 'dexa-scans',
    name: 'Monthly DEXA & VO2 Max Clinical Lab Scan',
    priceAED: 250,
    description: 'Medical-grade body fat, bone density & metabolic benchmark'
  },
  {
    id: 'meal-delivery',
    name: 'Daily High-Protein UAE Macro Meal Sync',
    priceAED: 1400,
    description: 'Chef-prepared organic macros delivered daily to your door'
  },
  {
    id: 'valet-laundry',
    name: 'Private Valet & Workout Kit Laundry Service',
    priceAED: 350,
    description: 'Same-day wash, dry, fold & locker placement'
  }
];

interface MembershipEstimatorProps {
  onOpenBookingWithQuote?: (quoteDetails: any) => void;
}

export const MembershipEstimator: React.FC<MembershipEstimatorProps> = ({
  onOpenBookingWithQuote
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('black-sovereign');
  const [durationMonths, setDurationMonths] = useState<1 | 6 | 12>(12);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['pt-8-sessions', 'unlimited-cryo']);

  const selectedTier = CLUB_TIERS.find(t => t.id === selectedTierId) || CLUB_TIERS[1];

  const handleToggleAddon = (id: string) => {
    setSelectedAddonIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const discountPercent = durationMonths === 12 ? 0.25 : durationMonths === 6 ? 0.15 : 0;

  const calculations = useMemo(() => {
    const rawTierMonthly = selectedTier.pricePerMonthAED;
    const discountedTierMonthly = Math.round(rawTierMonthly * (1 - discountPercent));
    
    let addonsMonthly = 0;
    selectedAddonIds.forEach(id => {
      const a = ADDONS.find(item => item.id === id);
      if (a) addonsMonthly += a.priceAED;
    });

    const totalMonthlyNet = discountedTierMonthly + addonsMonthly;
    const vat5Percent = Math.round(totalMonthlyNet * 0.05);
    const totalMonthlyAED = totalMonthlyNet + vat5Percent;
    const upfrontCommitmentAED = totalMonthlyAED * durationMonths;

    return {
      rawTierMonthly,
      discountedTierMonthly,
      addonsMonthly,
      totalMonthlyNet,
      vat5Percent,
      totalMonthlyAED,
      upfrontCommitmentAED,
      savingsAED: Math.round((rawTierMonthly * discountPercent) * durationMonths)
    };
  }, [selectedTier, durationMonths, selectedAddonIds, discountPercent]);

  const handleProceed = () => {
    if (onOpenBookingWithQuote) {
      onOpenBookingWithQuote({
        tier: selectedTier.name,
        duration: `${durationMonths} Months (${Math.round(discountPercent * 100)}% Discount)`,
        monthlyAED: calculations.totalMonthlyAED,
        addons: selectedAddonIds.map(id => ADDONS.find(a => a.id === id)?.name)
      });
    }
  };

  return (
    <section id="membership-estimator" className="py-20 bg-zinc-950 border-t border-b border-yellow-900/30 text-zinc-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            Sovereign Membership Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Athletic Club & Performance Membership Simulator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Customize your 24/7 dual-club access, personal Olympic coaching modules, sub-zero biohacking recovery, and macro nutrition delivery with transparent UAE pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/70 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
            
            {/* Step 1: Club Tier */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-yellow-400 mb-3 block">
                1. Select Club Membership Tier
              </label>
              <div className="space-y-3">
                {CLUB_TIERS.map(tier => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                        isSelected
                          ? 'border-yellow-500 bg-yellow-500/10 shadow-lg shadow-yellow-950/40'
                          : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-serif font-bold text-zinc-100">{tier.name}</h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-yellow-300">
                            {tier.highlight}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-bold font-serif text-yellow-200">
                            AED {tier.pricePerMonthAED.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-zinc-500"> / month</span>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-400 mt-3 pt-3 border-t border-zinc-900">
                        {tier.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-yellow-400 mb-3 block">
                2. Commitment Horizon
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { months: 1, label: 'Monthly Rolling', badge: 'Standard' },
                  { months: 6, label: '6 Months', badge: 'Save 15%' },
                  { months: 12, label: '12 Months Annual', badge: 'Save 25%' }
                ].map(opt => (
                  <button
                    key={opt.months}
                    type="button"
                    onClick={() => setDurationMonths(opt.months as 1 | 6 | 12)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border flex flex-col items-center justify-center gap-1 ${
                      durationMonths === opt.months
                        ? 'border-yellow-500 bg-yellow-500 text-zinc-950 shadow-md'
                        : 'border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      durationMonths === opt.months ? 'bg-zinc-950 text-yellow-300' : 'bg-zinc-800 text-yellow-400'
                    }`}>
                      {opt.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-yellow-400 mb-3 block">
                3. High-Performance Add-ons & Biohacking
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map(addon => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'border-yellow-500/80 bg-yellow-500/10'
                          : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-yellow-500 border-yellow-500 text-zinc-950' : 'border-zinc-700 bg-zinc-900'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-200">{addon.name}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">{addon.description}</div>
                        <div className="text-[11px] font-mono text-yellow-400 font-bold mt-1">
                          +AED {addon.priceAED.toLocaleString()} / mo
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Pricing Summary (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-yellow-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-yellow-950/50">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-yellow-400">
                  Membership Proposal
                </span>
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  Monthly Performance Investment
                </h3>
              </div>
              <Crown className="w-6 h-6 text-yellow-400" />
            </div>

            {/* Specs Summary */}
            <div className="py-4 space-y-2 text-xs border-b border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-400">Access Tier:</span>
                <span className="font-semibold text-zinc-200">{selectedTier.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Duration Commitment:</span>
                <span className="font-semibold text-zinc-200">{durationMonths} Months</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-mono">
                  <span>Annual Commitment Discount:</span>
                  <span>{Math.round(discountPercent * 100)}% OFF</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-zinc-400">Performance Add-ons:</span>
                <span className="font-semibold text-zinc-200">{selectedAddonIds.length} Active Modules</span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="py-4 space-y-2.5 text-xs text-zinc-300 font-mono border-b border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">Base Membership</span>
                <span>AED {calculations.discountedTierMonthly.toLocaleString()} / mo</span>
              </div>
              {calculations.addonsMonthly > 0 && (
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-sans">Coaching & Biohacking Addons</span>
                  <span>AED {calculations.addonsMonthly.toLocaleString()} / mo</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-400 font-sans pt-1">
                <span>Monthly Net Subtotal</span>
                <span className="font-mono text-zinc-200">AED {calculations.totalMonthlyNet.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500 font-sans">
                <span>UAE VAT (5%)</span>
                <span className="font-mono">AED {calculations.vat5Percent.toLocaleString()}</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="py-5">
              <div className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                Total Monthly Investment (All Inclusive)
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-yellow-300">
                  AED {calculations.totalMonthlyAED.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  / month
                </span>
              </div>
              {calculations.savingsAED > 0 && (
                <div className="text-[11px] text-emerald-400 font-mono mt-1">
                  Total Annual Savings: AED {calculations.savingsAED.toLocaleString()}
                </div>
              )}
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-[11px] text-zinc-400 mb-6 font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dubai Sports Council (DSC) Accredited Olympic Center</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Complimentary 1-hour VIP Movement Assessment & DEXA Scan</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleProceed}
              className="w-full py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-zinc-950 shadow-xl shadow-yellow-950/60 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Apply for Membership with This Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-[10px] text-zinc-500 mt-3 font-sans">
              Instant VIP concierge confirmation via WhatsApp with complimentary private tour
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
