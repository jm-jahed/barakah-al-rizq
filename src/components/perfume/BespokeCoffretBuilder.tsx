import React, { useState, useMemo } from 'react';
import { Crown, Check, Sparkle, ShoppingBag, ShieldCheck, Clock, ArrowRight, Gift, Droplets, Award } from 'lucide-react';
import { PERFUME_CATALOG, PerfumeItem } from '@/data/perfumeCatalogData';

interface BoxOption {
  id: string;
  name: string;
  material: string;
  priceAED: number;
  description: string;
}

const BOX_OPTIONS: BoxOption[] = [
  {
    id: 'piano-lacquer',
    name: 'Piano-Lacquered Obsidian Chest',
    material: 'High-Gloss Ebony with Crimson Silk Velvet Lining',
    priceAED: 950,
    description: '12-layer hand-polished black lacquer box with 24K gold magnetic clasp and bespoke brass nameplate.'
  },
  {
    id: 'gold-cedar',
    name: 'Gold-Inlaid Atlas Cedar Vault',
    material: 'Natural Aromatic Cedarwood & Gold Leaf Filigree',
    priceAED: 1600,
    description: 'Aromatic solid wood humidor box that naturally perfumes flacons with dry cedar resin and amber.'
  },
  {
    id: 'mother-of-pearl',
    name: 'Royal Mother-of-Pearl Damascene Casket',
    material: 'Hand-Cut Arabian Gulf Pearl Inlay & Walnut',
    priceAED: 2800,
    description: 'Museum-grade artisanal master casket hand-inlaid by hereditary master craftsmen over 45 days.'
  }
];

interface Addon {
  id: string;
  name: string;
  priceAED: number;
  description: string;
}

const LUXURY_ADDONS: Addon[] = [
  {
    id: 'crystal-burner',
    name: 'Hand-Carved Heavy Crystal Bakhoor Burner',
    priceAED: 650,
    description: 'Bespoke crystal mabkhara with gold-plated charcoal grate'
  },
  {
    id: 'wild-chips',
    name: '100g Wild Royal Cambodian Agarwood Chips',
    priceAED: 1200,
    description: 'Triple-A grade wild resinous agarwood for ceremonial burning'
  },
  {
    id: 'gold-tassel',
    name: '24K Gold Scented Silk Tassel & Pouch',
    priceAED: 300,
    description: 'Infused with Dehn Al Oud for wardrobe or vehicle fragrance'
  },
  {
    id: 'white-glove-chauffeur',
    name: 'White-Glove VIP Chauffeur Same-Day Delivery',
    priceAED: 250,
    description: 'Uniformed concierge hand-delivery across Dubai & Abu Dhabi'
  }
];

interface BespokeCoffretBuilderProps {
  onAddToCartWithCustomCoffret?: (coffretDetails: any) => void;
}

export const BespokeCoffretBuilder: React.FC<BespokeCoffretBuilderProps> = ({
  onAddToCartWithCustomCoffret
}) => {
  const [selectedBoxId, setSelectedBoxId] = useState<string>('piano-lacquer');
  const [coffretSize, setCoffretSize] = useState<3 | 4>(3);
  const [selectedPerfumeIds, setSelectedPerfumeIds] = useState<string[]>([
    PERFUME_CATALOG[0]?.id || 'OR-001',
    PERFUME_CATALOG[20]?.id || 'OR-021',
    PERFUME_CATALOG[40]?.id || 'OR-041'
  ]);
  const [engravingText, setEngravingText] = useState('H.H. Sheikh Zayed Collection');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['white-glove-chauffeur', 'crystal-burner']);

  const selectedBox = BOX_OPTIONS.find(b => b.id === selectedBoxId) || BOX_OPTIONS[0];

  const handleSelectPerfumeForSlot = (slotIndex: number, perfumeId: string) => {
    const updated = [...selectedPerfumeIds];
    updated[slotIndex] = perfumeId;
    setSelectedPerfumeIds(updated);
  };

  const handleToggleAddon = (id: string) => {
    setSelectedAddonIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculations = useMemo(() => {
    const boxPrice = selectedBox.priceAED;
    
    // Sum prices of selected flacons
    let flaconsTotal = 0;
    for (let i = 0; i < coffretSize; i++) {
      const pId = selectedPerfumeIds[i];
      const p = PERFUME_CATALOG.find(item => item.id === pId);
      if (p) flaconsTotal += p.priceAED;
    }

    // Addons
    let addonsTotal = 0;
    selectedAddonIds.forEach(id => {
      const a = LUXURY_ADDONS.find(item => item.id === id);
      if (a) addonsTotal += a.priceAED;
    });

    const netSubtotal = boxPrice + flaconsTotal + addonsTotal;
    const vat5Percent = Math.round(netSubtotal * 0.05);
    const grandTotalAED = netSubtotal + vat5Percent;

    return {
      boxPrice,
      flaconsTotal,
      addonsTotal,
      netSubtotal,
      vat5Percent,
      grandTotalAED
    };
  }, [selectedBox, coffretSize, selectedPerfumeIds, selectedAddonIds]);

  const handleProceed = () => {
    if (onAddToCartWithCustomCoffret) {
      onAddToCartWithCustomCoffret({
        box: selectedBox.name,
        flaconsCount: coffretSize,
        engraving: engravingText,
        grandTotalAED: calculations.grandTotalAED,
        flacons: selectedPerfumeIds.slice(0, coffretSize).map(id => PERFUME_CATALOG.find(p => p.id === id)?.title)
      });
    }
  };

  return (
    <section id="coffret-builder" className="py-20 bg-zinc-950 border-t border-b border-amber-900/30 text-zinc-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            Royal Presentation Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100 tracking-tight">
            Bespoke Royal Coffret & Engraving Simulator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Curate an ultra-exclusive multi-flacon master presentation box in high-gloss piano lacquer or mother-of-pearl, customized with 24K gold calligraphy nameplates and white-glove delivery across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-zinc-900/70 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
            
            {/* Step 1: Box Chest Selection */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                1. Select Master Presentation Box
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BOX_OPTIONS.map(box => {
                  const isSelected = selectedBoxId === box.id;
                  return (
                    <div
                      key={box.id}
                      onClick={() => setSelectedBoxId(box.id)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-950/40'
                          : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-serif font-bold text-zinc-100">{box.name}</h4>
                        <p className="text-[10px] text-zinc-400 mt-1 leading-tight">{box.material}</p>
                      </div>
                      <div className="text-xs font-mono text-amber-300 font-bold mt-3">
                        +AED {box.priceAED.toLocaleString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Coffret Size (3 or 4 Flacons) */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                2. Number of Flacons in Coffret
              </label>
              <div className="flex gap-4">
                {[3, 4].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setCoffretSize(size as 3 | 4);
                      if (size === 4 && selectedPerfumeIds.length < 4) {
                        setSelectedPerfumeIds([...selectedPerfumeIds, PERFUME_CATALOG[60]?.id || 'OR-061']);
                      }
                    }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold font-serif transition-all border ${
                      coffretSize === size
                        ? 'border-amber-500 bg-amber-500 text-zinc-950 shadow-md'
                        : 'border-zinc-800 bg-zinc-950/80 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {size} Master Flacons (30ml – 100ml)
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Select Flacons for Slots */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                3. Choose Flacons for Your Curated Set
              </label>
              <div className="space-y-3">
                {Array.from({ length: coffretSize }).map((_, slotIndex) => {
                  const currentId = selectedPerfumeIds[slotIndex] || PERFUME_CATALOG[slotIndex * 15]?.id;
                  const currentPerfume = PERFUME_CATALOG.find(p => p.id === currentId);

                  return (
                    <div key={slotIndex} className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-mono flex items-center justify-center font-bold">
                          {slotIndex + 1}
                        </span>
                        <span className="text-xs font-serif font-bold text-zinc-200">
                          {currentPerfume ? currentPerfume.title : 'Select Flacon'}
                        </span>
                      </div>

                      <select
                        value={currentId}
                        onChange={(e) => handleSelectPerfumeForSlot(slotIndex, e.target.value)}
                        className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500 max-w-[220px] truncate"
                      >
                        {PERFUME_CATALOG.slice(0, 30).map(p => (
                          <option key={p.id} value={p.id}>
                            {p.title} (AED {p.priceAED.toLocaleString()})
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Complimentary Gold Engraving */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-mono tracking-widest text-amber-400">
                  4. 24K Gold Brass Plate Engraving (Complimentary)
                </label>
                <span className="text-[10px] text-emerald-400 font-mono">COMPLIMENTARY</span>
              </div>
              <input
                type="text"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                placeholder="Inscribe Name, Title, or Personal Dedication..."
                className="w-full px-4 py-3 bg-zinc-950/90 border border-amber-500/30 rounded-xl text-xs text-amber-200 placeholder-zinc-600 font-serif tracking-wider focus:outline-none focus:border-amber-500"
              />
              <p className="text-[10px] text-zinc-500 mt-1">
                Precision diamond-cut engraving in English or Arabic script onto hand-buffed brass.
              </p>
            </div>

            {/* Step 5: Add-ons */}
            <div>
              <label className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-3 block">
                5. Royal Incense & Chauffeur Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LUXURY_ADDONS.map(addon => {
                  const isChecked = selectedAddonIds.includes(addon.id);
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
                        <div className="text-xs font-semibold text-zinc-200">{addon.name}</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">{addon.description}</div>
                        <div className="text-[11px] font-mono text-amber-400 font-bold mt-1">
                          +AED {addon.priceAED.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Pricing & Checkout Summary (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/40 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-amber-950/50">
            
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-mono text-amber-400">
                  Custom Masterpiece
                </span>
                <h3 className="text-lg font-serif font-bold text-zinc-100">
                  Coffret Investment Summary
                </h3>
              </div>
              <Crown className="w-6 h-6 text-amber-400" />
            </div>

            {/* Configuration Specs */}
            <div className="py-4 space-y-2 text-xs border-b border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-400">Presentation Chest:</span>
                <span className="font-semibold text-zinc-200">{selectedBox.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Flacons Curated:</span>
                <span className="font-semibold text-zinc-200">{coffretSize} Master Flacons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Engraving Inscription:</span>
                <span className="font-serif italic text-amber-300 truncate max-w-[170px]">&quot;{engravingText}&quot;</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Enhancements:</span>
                <span className="font-semibold text-zinc-200">{selectedAddonIds.length} Selected</span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="py-4 space-y-2.5 text-xs text-zinc-300 font-mono border-b border-zinc-800">
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">Artisanal Presentation Box</span>
                <span>AED {calculations.boxPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400 font-sans">Curated Fragrance Flacons ({coffretSize})</span>
                <span>AED {calculations.flaconsTotal.toLocaleString()}</span>
              </div>
              {calculations.addonsTotal > 0 && (
                <div className="flex justify-between">
                  <span className="text-zinc-400 font-sans">Incense & Chauffeur Delivery</span>
                  <span>AED {calculations.addonsTotal.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-400 font-sans pt-1">
                <span>Net Subtotal</span>
                <span className="font-mono text-zinc-200">AED {calculations.netSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[11px] text-zinc-500 font-sans">
                <span>UAE VAT (5%)</span>
                <span className="font-mono">AED {calculations.vat5Percent.toLocaleString()}</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="py-5">
              <div className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
                Total Bespoke Set Investment
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-amber-300">
                  AED {calculations.grandTotalAED.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  (Includes all taxes & delivery)
                </span>
              </div>
            </div>

            {/* Security Guarantees */}
            <div className="space-y-2 text-[11px] text-zinc-400 mb-6 font-sans">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Grasse & Gulf Distillation Authenticity Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Same-day hand delivery across Dubai & Abu Dhabi emirates</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleProceed}
              className="w-full py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-xl shadow-amber-950/60 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Dispatch Bespoke Master Coffret</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-[10px] text-zinc-500 mt-3 font-sans">
              Instant VIP concierge confirmation via WhatsApp with packaging video preview
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
