'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Wine, ShieldCheck, MapPin, Users, ArrowRight, CheckCircle2, Phone, Mail, MessageSquare, Building2, Sliders, X, Send, Award, Compass, Heart, Star, BookOpen, ChefHat, Clock, ChevronRight, Flame, FileText } from 'lucide-react';

// 12 Unique Chefs Data (Function 2)
const CHEF_COLLECTION = [
  {
    id: 'chef-1',
    name: 'Chef Antoine Laurent',
    title: '3 Michelin-Star Master',
    nationality: 'French',
    cuisine: 'Modern French & Haute Gastronomy',
    signatureDish: 'Brittany Blue Lobster with Imperial Caviar Emulsion',
    fee: 'AED 35,000 / event',
    experience: '22 Years (Le Meurice Paris, DIFC Atelier)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Deconstructing classic French Escoffier techniques with ultra-rare Middle Eastern botanicals.'
  },
  {
    id: 'chef-2',
    name: 'Chef Kenji Takahashi',
    title: 'Omakase Master Artisan',
    nationality: 'Japanese',
    cuisine: 'Edomae Sushi & Kaiseki',
    signatureDish: 'A5 Miyazaki Wagyu & Otoro Nigiri with Gold Leaf',
    fee: 'AED 42,000 / event',
    experience: '18 Years (Ginza Tokyo, Dubai Royal Palaces)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Perfection through simplicity. Wild-caught Tokyo fish flown in daily via private cold-chain.'
  },
  {
    id: 'chef-3',
    name: 'Chef Elena Rostova',
    title: 'Pastry & Dessert Atelier Director',
    nationality: 'Italian-Swiss',
    cuisine: 'Haute Pastry & Molecular Confections',
    signatureDish: 'Spherical Venezuelan Chocolate Dome with Gold Dust',
    fee: 'AED 22,000 / event',
    experience: '15 Years (Hotel de Paris Monaco, DIFC)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Architecture on a plate. Sculptural desserts engineered with micro-gastronomy precision.'
  },
  {
    id: 'chef-4',
    name: 'Chef Tariq Al-Mansoor',
    title: 'Royal Heritage Master',
    nationality: 'Emirati',
    cuisine: 'Levantine & Contemporary Arabian',
    signatureDish: 'Slow-Braised Camel Ribs with Black Truffle Harees',
    fee: 'AED 38,000 / event',
    experience: '20 Years (Royal Household Dining, Abu Dhabi)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Elevating centuries-old Gulf culinary traditions to 3-Michelin star global standards.'
  },
  {
    id: 'chef-5',
    name: 'Chef Marco Bellini',
    title: 'Italian Riviera Specialist',
    nationality: 'Italian',
    cuisine: 'Coastal Italian & Truffle Atelier',
    signatureDish: 'Hand-Rolled Tagliolini with White Alba Truffle',
    fee: 'AED 28,000 / event',
    experience: '16 Years (Osteria Francescana alumnus)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Celebrating fresh Mediterranean sea bass and seasonal Italian white truffles.'
  },
  {
    id: 'chef-6',
    name: 'Chef Vikram Kapoor',
    title: 'Modern Indian Gastronomer',
    nationality: 'Indian',
    cuisine: 'Progressive Royal Indian',
    signatureDish: 'Smoked Tandoori Wild Salmon with Saffron Foam',
    fee: 'AED 30,000 / event',
    experience: '17 Years (Gaggan Bangkok alumnus, DIFC)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Spices as liquid art. Alchemy of ancient royal Indian recipes reinvented.'
  },
  {
    id: 'chef-7',
    name: 'Chef Lars Lindqvist',
    title: 'Nordic Foraging Specialist',
    nationality: 'Swedish',
    cuisine: 'Nordic & Botanical Gastronomy',
    signatureDish: 'Cured Arctic Char with Sea Buckthorn & Pine Oils',
    fee: 'AED 26,000 / event',
    experience: '14 Years (Noma Copenhagen alumnus)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Pure clean flavors. Wild coastal foraging combined with Scandinavian smoking technique.'
  },
  {
    id: 'chef-8',
    name: 'Chef Mateo Santos',
    title: 'Molecular Fire Master',
    nationality: 'Spanish',
    cuisine: 'Basque Fire & Molecular Dining',
    signatureDish: 'Charcoal-Grilled Turbot with Nitrogen Olive Oil Caviar',
    fee: 'AED 32,000 / event',
    experience: '19 Years (Asador Etxebarri, San Sebastian)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Mastery over open wood fires and liquid nitrogen texturizers.'
  },
  {
    id: 'chef-9',
    name: 'Chef Mei-Ling Zhang',
    title: 'Imperial Cantonese Specialist',
    nationality: 'Hong Kong',
    cuisine: 'Imperial Dim Sum & Peking Duck',
    signatureDish: '24k Gold Leaf Peking Duck with Beluga Caviar',
    fee: 'AED 36,000 / event',
    experience: '21 Years (Lung King Heen Hong Kong)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Uncompromising imperial Cantonese techniques perfected for royal banquets.'
  },
  {
    id: 'chef-10',
    name: 'Chef Pierre Dubois',
    title: 'Sommelier & Wine Pairing Director',
    nationality: 'French',
    cuisine: 'Grand Cru Cellar & Beverage Pairing',
    signatureDish: 'Vintage Dom Pérignon & Petrossian Caviar Pairing',
    fee: 'AED 20,000 / event',
    experience: '25 Years (Master Sommelier Guild Paris)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Harmonizing rare 100-point Grand Cru vintages with Michelin culinary art.'
  },
  {
    id: 'chef-11',
    name: 'Chef Sarah Jenkins',
    title: 'Plant-Based Gastronomer',
    nationality: 'British',
    cuisine: 'Organic Botanical Fine Dining',
    signatureDish: 'Roasted Morel Mushrooms with Truffled Potato Emulsion',
    fee: 'AED 24,000 / event',
    experience: '13 Years (Eleven Madison Park alumnus)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Celebrating pure organic earth produce with 3-Michelin star complexity.'
  },
  {
    id: 'chef-12',
    name: 'Chef Hassan Al-Thani',
    title: 'Private Aviation & Yacht Specialist',
    nationality: 'Qatari',
    cuisine: 'High-Altitude & Maritime Gastronomy',
    signatureDish: 'Pan-Seared Sea Bass with Saffron-Infused Beurre Blanc',
    fee: 'AED 34,000 / event',
    experience: '16 Years (Royal Flight Operations Concierge)',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    philosophy: 'Precision high-altitude and offshore maritime culinary execution.'
  }
];

// 20 Distinct Services
const ECLAT_SERVICES_20 = [
  { id: 's-1', title: 'Private Chef Residencies', cat: 'Residences', desc: 'Dedicated Michelin-starred chefs stationed in private UAE luxury villas for extended engagements.' },
  { id: 's-2', title: 'Royal Household Dining', cat: 'Sovereign', desc: 'Bespoke banqueting for royal protocol, state dinners, and diplomatic receptions.' },
  { id: 's-3', title: 'Yacht Dining Experiences', cat: 'Maritime', desc: 'High-end maritime gastronomy and galley management for superyacht charters in Dubai & Monaco.' },
  { id: 's-4', title: 'Private Aviation Catering', cat: 'Aviation', desc: 'Pressurized high-altitude gourmet menus prepared for Gulfstream & Bombardier jets.' },
  { id: 's-5', title: 'Chef’s Table Experiences', cat: 'Intimate', desc: 'Exclusive 10-course live cooking counter set inside our private DIFC gastronomy studio.' },
  { id: 's-6', title: 'Bespoke Tasting Menus', cat: 'Gastronomy', desc: 'Customized multi-course tasting menus tailored to client flavor preferences and allergies.' },
  { id: 's-7', title: 'Destination Gastronomy', cat: 'Travel', desc: 'Pop-up culinary experiences on isolated desert sandbanks, private islands, or mountain peaks.' },
  { id: 's-8', title: 'Corporate Executive Dining', cat: 'Corporate', desc: 'Private C-suite board dinners and confidential corporate partnership celebrations.' },
  { id: 's-9', title: 'Luxury Villa Catering', cat: 'Residences', desc: 'Turnkey full-service dining with service team, sommelier, and floral tablescapes.' },
  { id: 's-10', title: 'Culinary Brand Events', cat: 'Events', desc: 'Custom gastronomy concepts for haute couture launches and luxury jewelry galas.' },
  { id: 's-11', title: 'Michelin Chef Residencies', cat: 'Residencies', desc: 'Flying in world-famous 3-Michelin-star chefs for exclusive private weekend dinners.' },
  { id: 's-12', title: 'Imperial Omakase Counter', cat: 'Specialized', desc: 'Authentic 18-course Edomae sushi experience with Tokyo fish flown in via cold chain.' },
  { id: 's-13', title: 'Arabian Heritage Gastronomy', cat: 'Heritage', desc: 'Elevated contemporary Levantine & Gulf royal cuisine using local camel milk and truffles.' },
  { id: 's-14', title: 'Caviar & Oyster Bar Service', cat: 'Specialized', desc: 'Petrossian Beluga caviar ice sculptures and sommelier Champagne pairings.' },
  { id: 's-15', title: 'White & Black Truffle Season', cat: 'Seasonal', desc: 'Shaved Italian Alba white truffle courses paired with aged Barolo vintages.' },
  { id: 's-16', title: 'Wine & Master Sommelier Pairing', cat: 'Cellar', desc: 'Grand Cru wine selection curated by 25-year Master Sommeliers.' },
  { id: 's-17', title: 'Private Pastry & Chocolate Atelier', cat: 'Pastry', desc: 'Sculptural dessert domes, 24k gold leaf pralines, and wedding cake showpieces.' },
  { id: 's-18', title: 'Bespoke Wedding Gastronomy', cat: 'Celebrations', desc: 'Custom 5-course banquet production for high-profile luxury weddings in the GCC.' },
  { id: 's-19', title: 'Private Cooking Masterclasses', cat: 'Education', desc: 'Interactive hands-on culinary workshops with Michelin-trained master chefs.' },
  { id: 's-20', title: '24/7 Executive Dining Concierge', cat: 'Concierge', desc: 'Round-the-clock emergency culinary dispatch for last-minute VIP entertaining.' }
];

export const EclatShowcase: React.FC = () => {
  // ── ADVANCED FUNCTION 1: PRIVATE DINING COST CALCULATOR ──
  const [eventType, setEventType] = useState<'residence' | 'yacht' | 'corporate' | 'royal'>('residence');
  const [guestCount, setGuestCount] = useState<number>(10);
  const [selectedChefId, setSelectedChefId] = useState<string>('chef-1');
  const [includeSommelier, setIncludeSommelier] = useState<boolean>(true);
  const [includeFloral, setIncludeFloral] = useState<boolean>(true);

  // ── ADVANCED FUNCTION 2: CHEF DISCOVERY MODAL STATE ──
  const [activeChefModal, setActiveChefModal] = useState<any>(null);

  // ── ADVANCED FUNCTION 3: BESPOKE MENU BUILDER ──
  const [culinaryDirection, setCulinaryDirection] = useState<string>('Modern French');
  const [courseCount, setCourseCount] = useState<number>(7);
  const [includeCaviar, setIncludeCaviar] = useState<boolean>(true);
  const [includeTruffle, setIncludeTruffle] = useState<boolean>(true);

  // ── ADVANCED FUNCTION 4: BOOKING PROPOSAL DISPATCH ──
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bName, setBName] = useState<string>('');
  const [bPhone, setBPhone] = useState<string>('');
  const [bEmail, setBEmail] = useState<string>('');
  const [bLocation, setBLocation] = useState<string>('Palm Jumeirah Villa');
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);

  // ── CONTACT FORM STATE ──
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [cName, setCName] = useState<string>('');
  const [cEmail, setCEmail] = useState<string>('');
  const [cPhone, setCPhone] = useState<string>('');
  const [cCompany, setCCompany] = useState<string>('');
  const [cMessage, setCMessage] = useState<string>('');

  // Calculations for Function 1 (Calculator)
  const activeChefObj = CHEF_COLLECTION.find(c => c.id === selectedChefId) || CHEF_COLLECTION[0];
  const baseChefFee = parseInt(activeChefObj.fee.replace(/[^0-9]/g, '')) || 35000;
  const foodCostPerGuest = 1800;
  const totalFoodCost = guestCount * foodCostPerGuest;
  const sommelierFee = includeSommelier ? 12000 : 0;
  const floralFee = includeFloral ? 15000 : 0;
  const totalCalcBudgetAed = Math.round(baseChefFee + totalFoodCost + sommelierFee + floralFee);

  // Calculations for Function 3 (Menu Builder)
  const baseMenuValue = courseCount * 350 * 10;
  const caviarAddon = includeCaviar ? 18000 : 0;
  const truffleAddon = includeTruffle ? 14000 : 0;
  const totalMenuValAed = Math.round(baseMenuValue + caviarAddon + truffleAddon);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0908] text-gray-100 font-sans selection:bg-amber-600/30 selection:text-amber-200">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#0C0908]/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-700 to-amber-950 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full bg-[#0C0908] rounded-[10px] flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-serif">
                MAISON <span className="text-amber-400">ÉCLAT</span>
              </span>
              <span className="block text-[10px] font-mono text-amber-400/80 tracking-widest uppercase">
                DIFC Gate Village 8 • Dubai
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#calc-section" className="hover:text-amber-400 transition-colors">DINING CALCULATOR</a>
            <a href="#chefs-section" className="hover:text-amber-400 transition-colors">CHEF COLLECTION</a>
            <a href="#menu-builder" className="hover:text-amber-400 transition-colors">MENU BUILDER</a>
            <a href="#services-20" className="hover:text-amber-400 transition-colors">20 SERVICES</a>
            <a href="#booking-flow" className="hover:text-amber-400 transition-colors">COMMISSION EXPERIENCE</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">ATELIER CONTACT</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#booking-flow"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>COMMISSION GASTRONOMY</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden border-b border-amber-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Michelin-Starred Private Gastronomy Atelier • DIFC</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] font-serif">
                Private Gastronomy, <br />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Composed Without Limits.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl font-sans">
                Dubai and Abu Dhabi's premier ultra-luxury private dining atelier. 3-Michelin star chef residencies, royal household banqueting, superyacht gastronomy, and bespoke tasting menus.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#booking-flow"
                  className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>COMMISSION A PRIVATE EXPERIENCE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#chefs-section"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <ChefHat className="w-4 h-4 text-amber-400" />
                  <span>EXPLORE THE CHEF COLLECTION</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">12 Chefs</span>
                  <span className="text-xs text-gray-400 font-mono">Michelin-Star Master Resident</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">100% Bespoke</span>
                  <span className="text-xs text-gray-400 font-mono">Tailored Tasting Menus</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">24/7 Desk</span>
                  <span className="text-xs text-gray-400 font-mono">Executive Dining Concierge</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 via-amber-700/10 to-transparent border border-amber-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80" 
                    alt="Maison Eclat Fine Gastronomy Plating" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0908] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0C0908]/90 border border-amber-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                        <ChefHat className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">DIFC Gate Village 8 • Level 4</h4>
                        <p className="text-[11px] text-gray-400">24/7 Culinary Concierge Desk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVANCED FUNCTION 1: PRIVATE DINING COST CALCULATOR ── */}
      <section id="calc-section" className="py-24 bg-[#140F0D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 1: PRIVATE DINING BUDGET CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Private Dining Budget Estimator
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Select event environment, guest count, master chef selection, and sommelier pairings to calculate instant turnkey gastronomy estimates in AED.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#1A1412] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Event Type */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Dining Environment</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'residence', label: 'Private Residence' },
                    { id: 'yacht', label: 'Superyacht Galley' },
                    { id: 'corporate', label: 'Executive Boardroom' },
                    { id: 'royal', label: 'Royal State Dinner' },
                  ].map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setEventType(t.id as any)}
                      className={`p-3 rounded-xl font-mono text-xs font-bold text-left transition-all cursor-pointer border ${
                        eventType === t.id
                          ? 'bg-amber-500 text-black border-amber-400 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Master Chef Selector */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Select Master Chef</label>
                <select
                  value={selectedChefId}
                  onChange={(e) => setSelectedChefId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                >
                  {CHEF_COLLECTION.map(c => (
                    <option key={c.id} value={c.id} className="bg-[#1A1412]">{c.name} ({c.title}) - {c.fee}</option>
                  ))}
                </select>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Guest Count</label>
                  <span className="text-sm font-mono font-extrabold text-amber-400">{guestCount} Guests</span>
                </div>
                <input 
                  type="range"
                  min={2}
                  max={50}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">Master Sommelier & Grand Cru Pairings (+AED 12k)</span>
                  <input 
                    type="checkbox"
                    checked={includeSommelier}
                    onChange={(e) => setIncludeSommelier(e.target.checked)}
                    className="w-4 h-4 accent-amber-400 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <span className="text-xs font-mono font-bold text-gray-300 uppercase">Haute Tablescape & Floral Architecture (+AED 15k)</span>
                  <input 
                    type="checkbox"
                    checked={includeFloral}
                    onChange={(e) => setIncludeFloral(e.target.checked)}
                    className="w-4 h-4 accent-amber-400 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#2A1E19] to-[#0C0908] p-8 rounded-3xl border border-amber-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                Estimated Turnkey Gastronomy Investment
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                AED {totalCalcBudgetAed.toLocaleString()}
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Chef: {activeChefObj.name} ({guestCount} Guests)
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Includes Full Brigade, Ingredients & White-Glove Butler Service</span>
                <span className="text-2xl font-extrabold text-white font-mono">100% Turnkey Execution</span>
              </div>

              <a
                href="#booking-flow"
                className="block w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer"
              >
                PROPOSE THIS PRIVATE GASTRONOMY
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 2: CHEF & CUISINE DISCOVERY (12 CHEFS) ── */}
      <section id="chefs-section" className="py-24 bg-[#0C0908] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <ChefHat className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 2: CHEF COLLECTION (12 UNIQUE MASTERS)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Master Chef Resident Collection
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Explore 12 Michelin-starred master chefs available for private residence, superyacht, and royal household engagements. Click any chef for full profile credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {CHEF_COLLECTION.map((ch) => (
              <div 
                key={ch.id}
                onClick={() => setActiveChefModal(ch)}
                className="bg-[#181210] rounded-3xl border border-amber-500/30 overflow-hidden flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all hover:scale-[1.02]"
              >
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <img src={ch.image} alt={ch.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 text-amber-400 font-mono text-[10px] font-bold">
                      {ch.title}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white font-serif">{ch.name}</h3>
                    <p className="text-xs text-amber-400 font-mono font-bold">{ch.cuisine}</p>
                    <p className="text-xs text-gray-300 font-sans line-clamp-2">{ch.signatureDish}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10">
                  <span className="text-xs font-mono font-bold text-white">{ch.fee}</span>
                  <span className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1">
                    PROFILE <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CHEF PROFILE MODAL */}
      <AnimatePresence>
        {activeChefModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#181210] border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative space-y-6"
            >
              <button 
                onClick={() => setActiveChefModal(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img src={activeChefModal.image} alt={activeChefModal.name} className="w-20 h-20 rounded-2xl object-cover border border-amber-500/30" />
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">{activeChefModal.name}</h3>
                  <span className="text-xs font-mono text-amber-400 font-bold block">{activeChefModal.title}</span>
                  <span className="text-xs font-mono text-gray-400 block">{activeChefModal.nationality} • {activeChefModal.experience}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-b border-white/10 py-4">
                <p><strong>Cuisine Style:</strong> {activeChefModal.cuisine}</p>
                <p><strong>Signature Dish:</strong> {activeChefModal.signatureDish}</p>
                <p><strong>Culinary Philosophy:</strong> "{activeChefModal.philosophy}"</p>
                <p><strong>Engagement Fee:</strong> <span className="text-amber-400 font-bold">{activeChefModal.fee}</span></p>
              </div>

              <div className="flex gap-3">
                <a
                  href="#booking-flow"
                  onClick={() => setActiveChefModal(null)}
                  className="w-full py-3.5 rounded-xl bg-amber-500 text-black font-extrabold font-mono text-xs uppercase text-center hover:bg-amber-400 transition-all"
                >
                  REQUEST THIS CHEF FOR YOUR EVENT →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── ADVANCED FUNCTION 3: BESPOKE MENU BUILDER ── */}
      <section id="menu-builder" className="py-24 bg-[#140F0D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 3: BESPOKE MENU BUILDER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Multi-Course Menu Configurator
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Select your culinary direction, course count, and luxury delicacy upgrades to preview live menu values in AED.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#1A1412] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Culinary Direction */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Culinary Direction</label>
                <select
                  value={culinaryDirection}
                  onChange={(e) => setCulinaryDirection(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                >
                  <option value="Modern French" className="bg-[#1A1412]">Modern French & Haute Gastronomy</option>
                  <option value="Japanese Kaiseki" className="bg-[#1A1412]">Japanese Kaiseki & Imperial Omakase</option>
                  <option value="Mediterranean Contemporary" className="bg-[#1A1412]">Mediterranean Coastal Fine Dining</option>
                  <option value="Levantine Renaissance" className="bg-[#1A1412]">Levantine & Arabian Royal Heritage</option>
                  <option value="Molecular Gastronomy" className="bg-[#1A1412]">Molecular Chemistry Gastronomy</option>
                </select>
              </div>

              {/* Course Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Tasting Courses</label>
                  <span className="text-sm font-mono font-extrabold text-amber-400">{courseCount} Courses</span>
                </div>
                <input 
                  type="range"
                  min={5}
                  max={12}
                  value={courseCount}
                  onChange={(e) => setCourseCount(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* Upgrades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                <span className="text-xs font-mono font-bold text-gray-300 uppercase">Imperial Beluga Caviar Amuse-Bouche (+AED 18k)</span>
                <input 
                  type="checkbox"
                  checked={includeCaviar}
                  onChange={(e) => setIncludeCaviar(e.target.checked)}
                  className="w-4 h-4 accent-amber-400 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                <span className="text-xs font-mono font-bold text-gray-300 uppercase">Fresh Italian Alba White Truffle Shavings (+AED 14k)</span>
                <input 
                  type="checkbox"
                  checked={includeTruffle}
                  onChange={(e) => setIncludeTruffle(e.target.checked)}
                  className="w-4 h-4 accent-amber-400 cursor-pointer"
                />
              </label>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C0908] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-xs font-mono text-gray-400 block uppercase">Configured Custom Menu Package Value</span>
                <span className="text-2xl font-extrabold text-amber-400 font-mono">AED {totalMenuValAed.toLocaleString()}</span>
              </div>
              <a
                href="#booking-flow"
                className="px-6 py-3 rounded-xl bg-amber-500 text-black font-mono text-xs font-bold uppercase hover:bg-amber-400 transition-all"
              >
                ATTACH TO PROPOSAL REQUEST →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── 20 DISTINCT CULINARY SERVICES DIRECTORY ── */}
      <section id="services-20" className="py-24 bg-[#0C0908] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ATELIER SERVICES DIRECTORY — 20 BESPOKE OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Full Culinary Service Directory
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Explore all 20 dedicated luxury gastronomy services available for private residences, superyachts, and royal occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ECLAT_SERVICES_20.map((s) => (
              <div key={s.id} className="p-6 rounded-2xl bg-[#181210] border border-amber-500/30 flex flex-col justify-between space-y-4 hover:border-amber-400 transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">{s.cat}</span>
                  <h3 className="text-base font-bold text-white font-serif">{s.title}</h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">{s.desc}</p>
                </div>
                <a
                  href="#booking-flow"
                  className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold hover:text-amber-300 transition-colors pt-2 border-t border-white/10"
                >
                  <span>INQUIRE SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ADVANCED FUNCTION 4: MULTI-STEP BOOKING PROPOSAL DISPATCH ── */}
      <section id="booking-flow" className="py-24 bg-[#140F0D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Utensils className="w-3.5 h-3.5" />
              <span>ADVANCED FUNCTION 4: PROPOSAL DISPATCH FLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Commission Private Gastronomy Proposal
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Complete the 3-step proposal request flow to transmit event dates, chef preferences, and location details to our DIFC culinary desk.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#1A1412] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 font-mono text-xs">
              <div className={`flex items-center gap-2 ${bookingStep >= 1 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Event Location</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 2 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Chef & Menu</span>
              </div>
              <div className={`flex items-center gap-2 ${bookingStep >= 3 ? 'text-amber-400 font-bold' : 'text-gray-500'}`}>
                <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Contact Details</span>
              </div>
            </div>

            {bookingComplete ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white font-serif">Gastronomy Proposal Transmitted</h3>
                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                  Thank you, <strong>{bName}</strong>. Our Lead Culinary Concierge at DIFC Gate Village will transmit your proposal via <strong>{bPhone}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setBookingComplete(false);
                    setBookingStep(1);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all"
                >
                  NEW PROPOSAL REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* STEP 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 1: Event Location & Environment</label>
                    <select 
                      value={bLocation}
                      onChange={(e) => setBLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                    >
                      <option value="Palm Jumeirah Villa" className="bg-[#1A1412]">Palm Jumeirah Luxury Villa</option>
                      <option value="Emirates Hills Estate" className="bg-[#1A1412]">Emirates Hills Private Estate</option>
                      <option value="Dubai Harbour Superyacht" className="bg-[#1A1412]">Dubai Harbour Superyacht Galley</option>
                      <option value="DIFC Penthouse" className="bg-[#1A1412]">DIFC Executive Penthouse</option>
                    </select>

                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all mt-4"
                    >
                      NEXT STEP: CHEF & MENU →
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 2: Selected Master Chef</label>
                    
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <span className="text-xs font-mono font-bold text-white">Chef: {activeChefObj.name} ({activeChefObj.title})</span>
                      <p className="text-[11px] font-mono text-gray-400">Signature Style: {activeChefObj.cuisine}</p>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="w-1/3 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingStep(3)}
                        className="w-2/3 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase"
                      >
                        NEXT: CONTACT DETAILS →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bookingStep === 3 && (
                  <div className="space-y-4">
                    <label className="text-xs font-mono font-bold text-amber-400 uppercase block">Step 3: Primary Client Details</label>
                    
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. H.E. Sheikh Tariq Al-Nuaimi"
                        value={bName}
                        onChange={(e) => setBName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                        <input 
                          type="tel"
                          required
                          placeholder="+971 50 663 9922"
                          value={bPhone}
                          onChange={(e) => setBPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-mono text-gray-300 block mb-1">Corporate Email *</label>
                        <input 
                          type="email"
                          required
                          placeholder="tariq@sovereign.ae"
                          value={bEmail}
                          onChange={(e) => setBEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="w-1/3 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase"
                      >
                        ← BACK
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                      >
                        TRANSMIT GASTRONOMY PROPOSAL ✓
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD CONTACT HUB ── */}
      <section id="contact" className="py-24 bg-[#0C0908] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>24/7 PRIVATE CULINARY CONCIERGE HUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
              Atelier Offices & Desks
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Connect with our Dubai DIFC atelier headquarters or Abu Dhabi Galleria concierge desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Locations */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dubai HQ */}
              <div className="p-6 rounded-3xl bg-[#181210] border border-amber-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Dubai DIFC Atelier HQ</h3>
                    <p className="text-xs font-mono text-gray-400">DIFC Gate Village 8, Level 4, Dubai</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <p>Gate Village 8, Level 4, DIFC, Dubai, UAE</p>
                  <p>Concierge Phone: <a href="tel:+97145208800" className="text-amber-400 font-bold">+971 4 520 8800</a></p>
                  <p>WhatsApp Concierge: <a href="https://wa.me/971506639922" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold">+971 50 663 9922</a></p>
                  <p>Email: <a href="mailto:concierge@maisoneclat.ae" className="text-amber-400">concierge@maisoneclat.ae</a></p>
                </div>
              </div>

              {/* Abu Dhabi Desk */}
              <div className="p-6 rounded-3xl bg-[#181210] border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-white/5 text-gray-300 border border-white/10">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-serif">Abu Dhabi Galleria Desk</h3>
                    <p className="text-xs font-mono text-gray-400">Al Maryah Island, Abu Dhabi, UAE</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-mono text-gray-300 border-t border-white/10 pt-3">
                  <p>Galleria Luxury Collection Level 2, Al Maryah Island, Abu Dhabi</p>
                  <p>Desk Phone: <a href="tel:+97126117733" className="text-white font-bold">+971 2 611 7733</a></p>
                  <p>Hours: 24/7 Executive Dining Concierge</p>
                </div>
              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-[#181210] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
              
              {contactSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-serif">Inquiry Logged</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{cName}</strong>. Our DIFC Atelier Concierge will contact you within 15 minutes.
                  </p>
                  <button 
                    onClick={() => setContactSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-serif">Atelier Gastronomy Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Direct request for private dining, chef residency, or yacht gastronomy.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Mansoor Al-Futtaim"
                        value={cName}
                        onChange={(e) => setCName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="mansoor@alfuttaim.ae"
                        value={cEmail}
                        onChange={(e) => setCEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 663 9922"
                        value={cPhone}
                        onChange={(e) => setCPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Company / Household</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Al-Futtaim Private Office"
                        value={cCompany}
                        onChange={(e) => setCCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Culinary Requirements & Event Details</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify event date, guest count, location (villa/yacht), preferred chef style, and dietary requirements..."
                      value={cMessage}
                      onChange={(e) => setCMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT ATELIER INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#070504] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ChefHat className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-serif">
                MAISON <span className="text-amber-400">ÉCLAT</span> DUBAI
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Gate Village 8, Level 4 • DIFC, Dubai, United Arab Emirates
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 MAISON ÉCLAT PRIVATE GASTRONOMY ATELIER LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-amber-400">MICHELIN-CERTIFIED CHEF RESIDENCY</span>
              <span>DIFC AUTHORIZED ATELIER</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default EclatShowcase;
