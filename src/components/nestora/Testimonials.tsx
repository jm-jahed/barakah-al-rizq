'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      name: 'Arthur Pendelton',
      role: 'Overseas Landlord (12 Units)',
      city: 'Dubai Marina & Downtown',
      rating: 5,
      text: 'NESTORA turned our 12 Dubai apartments from a stressful headache into a smooth, hands-free income machine. Their quarterly owner reports and direct SWIFT payouts are second to none.'
    },
    {
      name: 'Suhail Al-Maktoum',
      role: 'Private Villa Investor',
      city: 'Palm Jumeirah',
      rating: 5,
      text: 'Extremely professional 24/7 maintenance response and perfect Ejari compliance. Our tenants have renewed for three consecutive years without a single dispute.'
    },
    {
      name: 'Dr. Katherine Schmidt',
      role: 'Expats Property Investor (Zurich)',
      city: 'Dubai Hills Estate',
      rating: 5,
      text: 'Living in Switzerland, I need 100% remote reliability. NESTORA handles rent collection, maintenance, and direct wire disbursements flawlessly.'
    },
    {
      name: 'Fariq Mansoor',
      role: 'Commercial Portfolio Manager',
      city: 'DIFC & Business Bay',
      rating: 5,
      text: 'Their Mollak service charge auditing caught AED 42,000 in unauthorized chiller fees across our office suites. Truly institutional-grade stewardship.'
    },
    {
      name: 'Elena Rostova',
      role: 'Luxury Penthouse Owner',
      city: 'City Walk & Downtown',
      rating: 5,
      text: 'From pre-handover 250-point snagging to finding a corporate tenant within 10 days, NESTORA exceeded every expectation.'
    },
    {
      name: 'Rashid Al-Nuaimi',
      role: 'Residential Tower Owner',
      city: 'Abu Dhabi Saadiyat Island',
      rating: 5,
      text: 'Managing 48 units under Abu Dhabi Tawtheeq system was seamless. Occupancy remained at 98.4% throughout the entire contract year.'
    }
  ];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);

  const current = reviews[currentIdx];

  return (
    <section className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              LANDLORD TESTIMONIALS & REPUTATION
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
              Trusted by UAE Landlords.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button 
              type="button" 
              onClick={handlePrev} 
              className="p-3 rounded-xl bg-[#0C2D31] hover:bg-stone-800 border border-stone-700 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              type="button" 
              onClick={handleNext} 
              className="p-3 rounded-xl bg-[#0C2D31] hover:bg-stone-800 border border-stone-700 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Review Hero Card */}
        <div className="bg-[#0C2D31] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl relative font-sans mb-8">
          <div className="flex text-[#C5A059] mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A059]" />
            ))}
          </div>

          <p className="text-xl sm:text-3xl font-serif font-bold text-white leading-relaxed mb-8 max-w-4xl">
            "{current.text}"
          </p>

          <div className="pt-6 border-t border-stone-800 flex items-center justify-between font-mono text-xs">
            <div>
              <h4 className="text-base font-bold text-white font-serif">{current.name}</h4>
              <p className="text-stone-400 text-[11px]">{current.role}</p>
            </div>

            <span className="text-[#C5A059] font-bold px-3 py-1 rounded-full bg-[#082023] border border-[#C5A059]/30 text-[11px]">
              {current.city}
            </span>
          </div>
        </div>

        {/* See More Reviews Grid */}
        {showAllReviews && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {reviews.map((rev, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#0C2D31]/90 border border-stone-800 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-[#C5A059] mb-3">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-200 font-light leading-relaxed mb-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800 flex justify-between items-center text-xs font-mono">
                  <div>
                    <span className="font-bold text-white block">{rev.name}</span>
                    <span className="text-[10px] text-stone-400">{rev.role}</span>
                  </div>
                  <span className="text-[10px] text-[#C5A059]">{rev.city}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toggle Button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C2D31] hover:bg-stone-800 border border-stone-700 text-[#F4EFE6] hover:text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
          >
            {showAllReviews ? (
              <>
                <span>Show Single Review</span>
                <ChevronUp className="w-4 h-4 text-[#C5A059]" />
              </>
            ) : (
              <>
                <span>See More Landlord Reviews ({reviews.length} Verified)</span>
                <ChevronDown className="w-4 h-4 text-[#C5A059]" />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
