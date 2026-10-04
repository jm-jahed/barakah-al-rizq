'use strict';
import React from 'react';
import { ArrowRight, Crown, Award, Wrench, Truck, ShieldCheck, Zap, Droplets } from 'lucide-react';

interface MaintenanceDisciplineExplorerProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const DISCIPLINES = [
  {
    id: 'hvac-vrv-chiller',
    name: 'Precision HVAC & VRV Climate',
    subtitle: 'Daikin & Carrier Coil Hydro-Wash',
    description: 'Deep pressure chemical coil washing, Freon R410A digital recharging, and duct antibacterial disinfection for zero mold.',
    startingPriceAED: 850,
    responseTime: '30 - 45 Mins',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'electrical-thermal-db',
    name: 'High-Voltage Electrical & Thermal',
    subtitle: 'FLIR Thermal Diagnostic Imaging',
    description: 'DEWA certified load balancing, breaker temperature audits, whole-villa surge protection, and circuit breaker diagnostics.',
    startingPriceAED: 650,
    responseTime: '30 - 60 Mins',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'plumbing-water-sterilization',
    name: 'Sanitary Plumbing & Tank Sterilization',
    subtitle: 'Dubai Municipality DM-HEALTH-7721',
    description: 'High-pressure water tank bio-washes, acoustic ultrasonic non-invasive leak locating, and whole-house filtration overhaul.',
    startingPriceAED: 950,
    responseTime: '45 Mins',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'villa-amc-retainers',
    name: 'Ultra-Luxury Villa Annual Contracts (AMC)',
    subtitle: '365-Day Palatial Peace of Mind',
    description: 'Unlimited 24/7 callouts, quarterly scheduled deep preventative overhauls, dedicated mobile workshop van, and 100% parts covered.',
    startingPriceAED: 8500,
    responseTime: 'VIP Priority Unlimited',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'emergency-rapid-dispatch',
    name: 'Emergency Rapid Response Fleet',
    subtitle: 'Sub-30 Mins Guaranteed Arrival',
    description: 'Immediate critical dispatch for total power blackouts, major burst pipes, AC compressor failure, and smart lockouts.',
    startingPriceAED: 450,
    responseTime: 'Under 30 Mins SLA',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'smart-iot-irrigation',
    name: 'Smart Home IoT & Automatic Irrigation',
    subtitle: 'KNX, Hunter & Crestron Recalibration',
    description: 'Solar-sync automated garden sprinkler tuning, smart leak cutoff valves, motorized blinds, and architectural garden lighting repair.',
    startingPriceAED: 750,
    responseTime: 'Same-Day Dispatch',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'pool-chiller-maintenance',
    name: 'Swimming Pool Chemistry & Heat-Pumps',
    subtitle: 'Dual Heat/Cool Chiller Tuning',
    description: 'Automated chemical dosing calibration, activated AFM glass filter media replacement, and high-pressure pipe leak testing.',
    startingPriceAED: 1100,
    responseTime: 'Bi-Weekly / On-Demand',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    count: 20
  },
  {
    id: 'facade-masonry-pressure',
    name: 'Façade Deep Wash & Masonry Sealing',
    subtitle: '350-Bar Industrial Rotary Clean',
    description: 'Limestone & travertine exterior hydro-washing, interlock polymeric sand joint sealing, and teak decking marine oil restoration.',
    startingPriceAED: 1450,
    responseTime: 'Scheduled 48h Window',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    count: 20
  }
];

export const MaintenanceDisciplineExplorer: React.FC<MaintenanceDisciplineExplorerProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section id="disciplines" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold tracking-widest text-emerald-400 uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Full-Stack MEP & Facility Management</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Eight Pillars of <span className="text-emerald-400 italic font-normal">Technical Perfection</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Managed 24/7 by DEWA-certified chartered engineers and mobile workshop vans stationed across Palm Jumeirah and Emirates Hills.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              160 Technical Maintenance Scopes
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCIPLINES.map((disc) => {
            const isSelected = activeCategory === disc.id;

            return (
              <div
                key={disc.id}
                onClick={() => onSelectCategory(disc.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-500/30 shadow-2xl shadow-emerald-500/10 -translate-y-1'
                    : 'border-neutral-800/90 hover:border-emerald-500/50 hover:-translate-y-1'
                } bg-neutral-900/60`}
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={disc.image}
                    alt={disc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Starting Price Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
                    From AED {disc.startingPriceAED.toLocaleString()}
                  </div>

                  {/* Count */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[10px] font-medium text-neutral-300">
                    {disc.count} Scopes
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-emerald-300 transition-colors mb-1 line-clamp-1">
                    {disc.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium mb-2 line-clamp-1">
                    {disc.subtitle}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {disc.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-400 truncate font-mono flex items-center gap-1">
                      <Truck className="w-3 h-3 text-emerald-400" />
                      {disc.responseTime}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                      View <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
