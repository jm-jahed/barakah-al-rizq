'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAKE_BUILDER_STEPS, CAKE_BUILDER_BASE_PRICE, CakeBuilderStep, CakeBuilderOption } from '@/data/flavorsData';
import { formatBDT } from '@/data/flavorsCatalogData';
import { FlavorsBranch } from '@/data/flavorsData';

interface FlavorsCustomCakeBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: { id: string; name: string; price: number; images: string[]; description: string; weight: string; serving: string; rating: number; reviewCount: number; tags: string[]; ingredients: string[]; allergens: string[]; categoryId: string; subcategory: string; isAvailable: boolean; isFeatured: boolean; isBestseller: boolean; isNew: boolean; deliveryAvailable: boolean; occasion: string[]; availableBranches: string[]; estimatedPrepTime: string; sku: string; preparationInfo: string; }) => void;
  selectedBranch: FlavorsBranch | null;
}

export const FlavorsCustomCakeBuilder: React.FC<FlavorsCustomCakeBuilderProps> = ({ isOpen, onClose, onAddToCart, selectedBranch }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, CakeBuilderOption>>({});
  const [message, setMessage] = useState('');
  const [added, setAdded] = useState(false);

  const totalPrice = CAKE_BUILDER_BASE_PRICE + Object.values(selections).reduce((s, o) => s + o.priceModifier, 0);

  const currentStepData = CAKE_BUILDER_STEPS[currentStep];
  const totalSteps = CAKE_BUILDER_STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const select = (step: CakeBuilderStep, option: CakeBuilderOption) => {
    setSelections(s => ({ ...s, [step.id]: option }));
  };

  const canProceed = currentStepData && selections[currentStepData.id];
  const isLastStep = currentStep === totalSteps - 1;

  const getCakeName = () => {
    const flavor = selections['flavor']?.label ?? 'Custom';
    const type = selections['type']?.label ?? 'Cake';
    const occasion = selections['occasion']?.label ?? '';
    return `Custom ${flavor} ${type}${occasion ? ` (${occasion})` : ''}`;
  };

  const getCakeDescription = () => {
    return Object.entries(selections).map(([key, opt]) => {
      const step = CAKE_BUILDER_STEPS.find(s => s.id === key);
      return `${step?.title}: ${opt.label}`;
    }).join(' · ');
  };

  const handleAddToCart = () => {
    const cake = {
      id: `custom-cake-${Date.now()}`,
      sku: `FLV-CUSTOM-${Date.now()}`,
      name: getCakeName(),
      categoryId: 'custom-cakes',
      subcategory: 'Custom Cakes',
      description: getCakeDescription() + (message ? `. Message: "${message}"` : ''),
      price: totalPrice,
      images: ['https://loremflickr.com/600/600/cake,custom?lock=999'],
      rating: 5.0,
      reviewCount: 0,
      tags: ['custom', 'made-to-order'],
      ingredients: ['Premium ingredients as per selections'],
      allergens: ['Gluten','Dairy','Eggs'],
      weight: selections['size']?.label ?? '1 kg',
      serving: '8–12 pax',
      preparationInfo: '48 hours advance order required',
      isAvailable: true,
      isFeatured: false,
      isBestseller: false,
      isNew: false,
      deliveryAvailable: true,
      occasion: [selections['occasion']?.value ?? 'celebration'],
      availableBranches: ['gulshan-1','gulshan-2','banani','dhanmondi-27','bashundhara'],
      estimatedPrepTime: '48 hours',
    };
    onAddToCart(cake as any);
    setAdded(true);
    setTimeout(() => { setAdded(false); onClose(); setCurrentStep(0); setSelections({}); setMessage(''); }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} style={{ position:'fixed', inset:0, zIndex:4000, background:'rgba(0,0,0,0.9)', backdropFilter:'blur(16px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px', fontFamily:'Inter, system-ui, sans-serif' }} onClick={onClose}>
          <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.9, opacity:0 }} transition={{ type:'spring', damping:25 }} onClick={e => e.stopPropagation()} style={{ width:'100%', maxWidth:'640px', maxHeight:'90vh', overflowY:'auto', background:'#0f1f14', borderRadius:'24px', border:'1px solid rgba(245,197,24,0.2)', boxShadow:'0 40px 80px rgba(0,0,0,0.6)' }}>
            {/* Header */}
            <div style={{ padding:'24px 24px 0', position:'sticky', top:0, background:'#0f1f14', zIndex:1, borderRadius:'24px 24px 0 0' }}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px' }}>
                <div>
                  <div style={{ fontSize:'11px', color:'#f5c518', letterSpacing:'2px', textTransform:'uppercase', fontWeight:600 }}>✦ Custom Cake Builder</div>
                  <h2 style={{ fontSize:'22px', fontWeight:800, color:'#ffffff', margin:'6px 0 0' }}>Design Your Dream Cake</h2>
                </div>
                <button onClick={onClose} style={{ width:'36px', height:'36px', borderRadius:'50%', background:'rgba(255,255,255,0.06)', border:'none', color:'#ffffff', cursor:'pointer', fontSize:'16px' }}>✕</button>
              </div>

              {/* Progress */}
              <div style={{ marginBottom:'20px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:'12px', color:'rgba(255,255,255,0.4)', marginBottom:'8px' }}>
                  <span>Step {currentStep + 1} of {totalSteps}: {currentStepData?.title}</span>
                  <span style={{ color:'#f5c518', fontWeight:600 }}>{formatBDT(totalPrice)}</span>
                </div>
                <div style={{ height:'4px', background:'rgba(255,255,255,0.08)', borderRadius:'2px', overflow:'hidden' }}>
                  <motion.div animate={{ width:`${progress}%` }} transition={{ duration:0.4 }} style={{ height:'100%', background:'linear-gradient(90deg, #f5c518, #e6a800)', borderRadius:'2px' }} />
                </div>
              </div>

              {/* Step dots */}
              <div style={{ display:'flex', gap:'4px', marginBottom:'24px', flexWrap:'wrap' }}>
                {CAKE_BUILDER_STEPS.map((s, i) => (
                  <div key={s.id} style={{ width:'6px', height:'6px', borderRadius:'3px', background: i < currentStep ? '#f5c518' : i === currentStep ? '#f5c518' : 'rgba(255,255,255,0.15)', opacity: i === currentStep ? 1 : i < currentStep ? 0.7 : 0.3, transition:'all 0.3s' }} />
                ))}
              </div>
            </div>

            {/* Options */}
            <div style={{ padding:'0 24px 24px' }}>
              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }} transition={{ duration:0.3 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:'10px', marginBottom:'24px' }}>
                    {currentStepData?.options.map(opt => {
                      const isSelected = selections[currentStepData.id]?.id === opt.id;
                      return (
                        <motion.button key={opt.id} whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }} onClick={() => select(currentStepData, opt)} style={{ padding:'14px 12px', background: isSelected ? 'rgba(245,197,24,0.12)' : 'rgba(255,255,255,0.04)', border:`2px solid ${isSelected ? '#f5c518' : 'rgba(255,255,255,0.08)'}`, borderRadius:'12px', cursor:'pointer', textAlign:'left', transition:'all 0.2s' }}>
                          {opt.icon && <div style={{ fontSize:'22px', marginBottom:'6px' }}>{opt.icon}</div>}
                          <div style={{ fontSize:'13px', fontWeight:600, color: isSelected ? '#f5c518' : '#ffffff', marginBottom:'4px' }}>{opt.label}</div>
                          {opt.priceModifier !== 0 && (
                            <div style={{ fontSize:'11px', color: isSelected ? '#f5c518' : 'rgba(255,255,255,0.35)', fontWeight:500 }}>
                              {opt.priceModifier > 0 ? `+${formatBDT(opt.priceModifier)}` : formatBDT(opt.priceModifier)}
                            </div>
                          )}
                          {opt.priceModifier === 0 && <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.25)' }}>Included</div>}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Message field on last step */}
                  {isLastStep && (
                    <div style={{ marginBottom:'20px' }}>
                      <label style={{ fontSize:'12px', color:'rgba(255,255,255,0.55)', display:'block', marginBottom:'8px', fontWeight:500 }}>Message on Cake (optional)</label>
                      <input type="text" placeholder='e.g. "Happy Birthday Raihan! 🎂"' value={message} onChange={e => setMessage(e.target.value)} style={{ width:'100%', padding:'11px 14px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'10px', color:'#ffffff', fontSize:'14px', outline:'none', fontFamily:'Inter, sans-serif', boxSizing:'border-box' }} />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Preview */}
              {Object.keys(selections).length > 0 && (
                <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'14px', marginBottom:'20px', fontSize:'12px', color:'rgba(255,255,255,0.5)' }}>
                  <div style={{ fontWeight:600, color:'rgba(255,255,255,0.7)', marginBottom:'8px' }}>Your Cake So Far</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                    {Object.entries(selections).map(([key, opt]) => {
                      const step = CAKE_BUILDER_STEPS.find(s => s.id === key);
                      return <span key={key} style={{ background:'rgba(245,197,24,0.08)', border:'1px solid rgba(245,197,24,0.15)', borderRadius:'6px', padding:'3px 8px', color:'#f5c518' }}>{step?.title}: {opt.label}</span>;
                    })}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div style={{ display:'flex', gap:'10px' }}>
                {currentStep > 0 && (
                  <button onClick={() => setCurrentStep(s => s - 1)} style={{ flex:'0 0 80px', padding:'13px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'12px', color:'rgba(255,255,255,0.7)', fontSize:'14px', cursor:'pointer' }}>← Back</button>
                )}
                {!isLastStep ? (
                  <motion.button whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }} onClick={() => canProceed && setCurrentStep(s => s + 1)} disabled={!canProceed} style={{ flex:1, padding:'13px', background: canProceed ? 'linear-gradient(135deg, #f5c518, #e6a800)' : 'rgba(255,255,255,0.06)', border:'none', borderRadius:'12px', color: canProceed ? '#0a1f12' : 'rgba(255,255,255,0.3)', fontSize:'14px', fontWeight:700, cursor: canProceed ? 'pointer' : 'not-allowed' }}>
                    Next: {CAKE_BUILDER_STEPS[currentStep + 1]?.title} →
                  </motion.button>
                ) : (
                  <motion.button whileHover={{ scale: canProceed ? 1.02 : 1 }} whileTap={{ scale: canProceed ? 0.98 : 1 }} onClick={() => canProceed && handleAddToCart()} disabled={!canProceed || added} style={{ flex:1, padding:'13px', background: added ? 'linear-gradient(135deg, #4caf7d, #27ae60)' : (canProceed ? 'linear-gradient(135deg, #f5c518, #e6a800)' : 'rgba(255,255,255,0.06)'), border:'none', borderRadius:'12px', color: canProceed ? '#0a1f12' : 'rgba(255,255,255,0.3)', fontSize:'14px', fontWeight:700, cursor: canProceed ? 'pointer' : 'not-allowed' }}>
                    {added ? '✓ Added to Cart!' : `ADD TO CART · ${formatBDT(totalPrice)}`}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
