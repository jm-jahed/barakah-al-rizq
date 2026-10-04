'use client';

import React from 'react';
import { ShieldCheck, Compass, Clock, UserCheck, Sliders, DollarSign, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Real-Time Telemetry',
      description: 'Continuous satellite & cellular GPS tracking with automated SMS/WhatsApp alerts for both sender and recipient.',
      icon: <Compass className="w-5 h-5 text-cyan-400" />
    },
    {
      title: '24/7 Operations Concierge',
      description: 'Human dispatch managers on standby around the clock to handle priority rerouting, customs clearances, and emergency orders.',
      icon: <Clock className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Vetted & Verified Drivers',
      description: 'Every courier and heavy truck driver undergoes rigorous background verification, DHA medical checks, and safety training.',
      icon: <UserCheck className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Flexible Delivery Windows',
      description: '2-hour customer window selection, instant rerouting, and smart locker drops for zero-friction last-mile fulfillment.',
      icon: <Sliders className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Transparent Instant Pricing',
      description: 'No hidden fuel surcharges or surprise handling fees. Clear volume tiers and predictable invoice billing.',
      icon: <DollarSign className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section className="py-24 bg-[#0B1120] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                OUR OPERATIONAL GUARANTEE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
                Built around reliability.
              </h2>
              <p className="text-base text-gray-300 mt-2">
                We combine AI route optimization software with a dedicated logistics fleet to ensure your promises to customers are kept every single time.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-5 rounded-2xl bg-[#0F172A] border border-blue-500/20 hover:border-cyan-400/50 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-[#070B14] border border-white/10 flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{b.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Asymmetric Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-[#0F172A]">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
                alt="Velox Operations"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/30 to-transparent" />

              {/* Floating Stat Card Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0F172A]/95 backdrop-blur-xl border border-white/15">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">FLEET ACCREDITATION</span>
                    <span className="text-lg font-bold text-white block">ISO 9001 & TAPA Certified</span>
                    <span className="text-xs text-gray-400">Insured up to AED 10,000,000 per commercial shipment</span>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
