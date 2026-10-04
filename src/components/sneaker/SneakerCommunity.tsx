'use client';
import React from 'react';

export const SneakerCommunity: React.FC<any> = (props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#0A0908] text-[#E8E2D5] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">
            SOLE//DISTRICT • SNEAKER MARKETPLACE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-4">
            Sneaker Community
          </h2>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            100% authenticated grails, retro high-tops, and 480GSM Dubai streetwear.
          </p>
        </div>

        <div className="bg-[#141210] p-8 rounded-3xl border border-amber-500/20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#0A0908] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">12-Point Authentication</span>
              <p className="text-xs text-gray-300">UV light inspection, stitching audits, and physical outsole checks by Dubai authenticators.</p>
            </div>
            <div className="p-5 bg-[#0A0908] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">Realistic UAE AED Pricing</span>
              <p className="text-xs text-gray-300">Sneakers AED 299–1,299, Streetwear AED 99–599, Heat grails AED 1,499–2,499.</p>
            </div>
            <div className="p-5 bg-[#0A0908] rounded-2xl border border-amber-500/15">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">Same-Day Dubai Express</span>
              <p className="text-xs text-gray-300">Express 24h delivery across Dubai, Abu Dhabi, Sharjah, Ajman with COD option.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
