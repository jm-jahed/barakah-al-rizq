'use client';

import React, { useState } from 'react';
import { LuxuryProperty, FloorPlan, PaymentMilestone } from '@/data/realEstateData';
import { 
  X, 
  Bed, 
  Bath, 
  Maximize2, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  PhoneCall, 
  Mail, 
  Check, 
  Scale, 
  Bookmark, 
  Share2, 
  Layers, 
  Compass, 
  Award,
  ChevronRight,
  ExternalLink,
  Car,
  FileCheck
} from 'lucide-react';

interface RealEstatePropertyModalProps {
  property: LuxuryProperty | null;
  onClose: () => void;
  isSaved: boolean;
  isCompared: boolean;
  onToggleSave: (prop: LuxuryProperty) => void;
  onToggleCompare: (prop: LuxuryProperty) => void;
  onBookViewing: (prop: LuxuryProperty) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const RealEstatePropertyModal: React.FC<RealEstatePropertyModalProps> = ({
  property,
  onClose,
  isSaved,
  isCompared,
  onToggleSave,
  onToggleCompare,
  onBookViewing,
  currency
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplans' | 'payment' | 'virtual3d'>('overview');
  const [activeFloorPlanIndex, setActiveFloorPlanIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!property) return null;

  // Currency conversions
  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];
  const convertedPrice = Math.round(property.priceAED * currentRate);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-zinc-950 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase">
              {property.id}
            </span>
            <span className="text-zinc-400 text-xs font-mono hidden sm:inline">
              {property.communityName}, {property.emirate}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all text-xs flex items-center gap-1.5"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Compare Toggle */}
            <button
              onClick={() => onToggleCompare(property)}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 font-semibold'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-amber-400'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span className="hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
            </button>

            {/* Save Toggle */}
            <button
              onClick={() => onToggleSave(property)}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                isSaved
                  ? 'bg-amber-500 text-zinc-950 border-amber-400 font-semibold'
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:text-amber-400'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Main Showcase Hero Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Active High-Res Photo */}
            <div className="lg:col-span-8 space-y-3">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src={property.gallery[activeImageIndex] || property.heroImage}
                  alt={property.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                    Photo {activeImageIndex + 1} of {property.gallery.length}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300">
                    {property.furnishing}
                  </span>
                </div>
              </div>

              {/* Thumbnail Bar */}
              <div className="grid grid-cols-4 gap-3">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-amber-500 ring-2 ring-amber-500/40'
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Acquisition Summary Card */}
            <div className="lg:col-span-4 bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.communityName}, {property.emirate}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-snug">
                  {property.title}
                </h1>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 mb-6">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Acquisition Guide Price
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                    {currency} {convertedPrice.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center justify-between">
                    <span>AED {property.pricePerSqftAED.toLocaleString()} / sqft</span>
                    <span className="text-emerald-400 font-semibold">{property.rentalYieldPct}% Gross Yield</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Bed className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{property.bedrooms} Beds</div>
                    <div className="text-[10px] text-zinc-500">Suites</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Bath className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{property.bathrooms} Baths</div>
                    <div className="text-[10px] text-zinc-500">Luxury</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                    <Maximize2 className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="text-white font-bold">{property.builtUpAreaSqft.toLocaleString()}</div>
                    <div className="text-[10px] text-zinc-500">BUA Sqft</div>
                  </div>
                </div>

                {/* Regulatory & Security Pill */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10-Yr UAE Golden Visa Guaranteed + DLD Escrow</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => onBookViewing(property)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  Book Private VIP Viewing
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${property.assignedBroker.phone}`}
                    className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Broker</span>
                  </a>
                  <a
                    href={`https://wa.me/${property.assignedBroker.phone.replace(/[^0-9]/g, '')}?text=Inquiry%20regarding%20${encodeURIComponent(property.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-200 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors border border-emerald-500/30"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="border-b border-zinc-800 flex gap-4 text-xs font-mono uppercase tracking-wider">
            {[
              { id: 'overview', label: 'Architectural Specs & Highlights' },
              { id: 'floorplans', label: `Floor Plans (${property.floorPlans.length})` },
              { id: 'payment', label: 'Payment Plan & Escrow' },
              { id: 'virtual3d', label: '3D Virtual Immersion' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 border-b-2 font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview & Specs */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              {/* Description */}
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-3">Curatorial Overview</h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-4">Master Finishes & Engineering</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.architecturalHighlights.map((highlight, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-4">Curated Estate Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 font-mono flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assigned Private Client Broker */}
              <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-serif text-xl font-bold text-zinc-950">
                    {property.assignedBroker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{property.assignedBroker.name}</div>
                    <div className="text-xs text-zinc-400 font-mono">Senior Private Client Advisor • {property.assignedBroker.brn}</div>
                    <div className="text-xs text-amber-400 font-mono mt-0.5">{property.assignedBroker.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${property.assignedBroker.phone}`}
                    className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs flex items-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>{property.assignedBroker.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Floor Plans */}
          {activeTab === 'floorplans' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-wrap gap-2">
                {property.floorPlans.map((fp: FloorPlan, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFloorPlanIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                      activeFloorPlanIndex === idx
                        ? 'bg-amber-500 text-zinc-950 font-bold'
                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white'
                    }`}
                  >
                    {fp.level} ({fp.areaSqft.toLocaleString()} sqft)
                  </button>
                ))}
              </div>

              {property.floorPlans[activeFloorPlanIndex] && (
                <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-serif font-bold text-white">
                      {property.floorPlans[activeFloorPlanIndex].level}
                    </h4>
                    <span className="font-mono text-amber-400 text-xs">
                      {property.floorPlans[activeFloorPlanIndex].areaSqft.toLocaleString()} Sq. Ft.
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs leading-relaxed font-mono">
                    {property.floorPlans[activeFloorPlanIndex].description}
                  </p>

                  {/* Architectural Blueprint Diagram Simulation */}
                  <div className="aspect-[16/8] rounded-2xl bg-zinc-950 border border-amber-500/20 p-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b10_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <Layers className="w-12 h-12 text-amber-400/40 mb-3 relative z-10" />
                    <div className="text-white font-mono text-xs font-semibold relative z-10">
                      Bespoke CAD Vector Layout — {property.floorPlans[activeFloorPlanIndex].level}
                    </div>
                    <div className="text-zinc-500 text-[11px] font-mono mt-1 relative z-10">
                      Approved by Dubai Municipality & Civil Defense
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Payment Plan */}
          {activeTab === 'payment' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-mono">
                All off-plan milestone disbursements are held in secure Dubai Land Department (DLD) escrow accounts in accordance with UAE Law No. 8 of 2007.
              </div>

              <div className="space-y-3">
                {property.paymentPlan.map((step: PaymentMilestone, idx: number) => (
                  <div key={idx} className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-zinc-800 font-mono text-xs text-amber-400 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{step.milestone}</div>
                        <div className="text-xs text-zinc-400 font-mono">{step.dueTiming}</div>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-base font-bold text-amber-400">{step.percentage}%</div>
                      <div className="text-[11px] text-zinc-400">
                        {currency} {Math.round((property.priceAED * (step.percentage / 100)) * currentRate).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: 3D Virtual Immersion */}
          {activeTab === 'virtual3d' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="aspect-[16/9] rounded-3xl bg-zinc-950 border border-amber-500/30 relative overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                <img
                  src={property.heroImage}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />

                <div className="relative z-10 max-w-md space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/30 animate-pulse">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Matterport 4K Spatial Walkthrough
                  </h3>
                  <p className="text-xs text-zinc-300 font-light">
                    Experience ultra-high-definition dollhouse spatial views, LiDAR laser room dimensions, and 360° Arabian Gulf horizon sunset views.
                  </p>
                  <button
                    onClick={() => onBookViewing(property)}
                    className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-bold uppercase tracking-wider text-xs font-mono hover:bg-amber-400 transition-colors"
                  >
                    Launch Live Stream with Advisor
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
