export interface EveraService {
  id: string;
  num: string;
  title: string;
  desc: string;
  idealFor: string;
  deliverables: string[];
  image: string;
}

export interface RealWedding {
  id: string;
  title: string;
  couple: string;
  style: 'beach' | 'desert' | 'ballroom' | 'garden';
  location: string;
  guestCount: number;
  budgetAed: string;
  image: string;
  gallery: string[];
  conceptNotes: string;
  palette: string[];
  keyVendors: string[];
}

export interface EveraLeader {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface EveraInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const EVERA_SERVICES: EveraService[] = [
  {
    id: 'full-planning',
    num: '01',
    title: 'Full Wedding Planning',
    desc: 'Complete end-to-end wedding design, budget allocation, vendor curation, and logistics management from engagement to post-wedding brunch.',
    idealFor: 'Couples desiring a stress-free 100% turnkey luxury wedding experience.',
    deliverables: ['Budget Architecture & Cashflow Tracker', 'Full Vendor & Venue Curation', '3D Floorplan & Spatial Layouts', '24/7 Unlimited Concierge Access'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'partial-planning',
    num: '02',
    title: 'Partial Planning & Coordination',
    desc: 'Designed for couples who have booked key venues but require expert direction for styling, vendor alignment, and production execution.',
    idealFor: 'Couples with initial bookings who want professional refinement and design integration.',
    deliverables: ['Vendor Audit & Contracting Review', 'Design Moodboard & Floral Curation', 'Detailed 60-Day Master Timeline', 'Rehearsal Dinner Coordination'],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456802381?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'day-of-coordination',
    num: '03',
    title: 'Day-of Execution & Management',
    desc: 'On-site lead planner and production team to oversee vendor arrivals, timeline precision, guest flow, and immediate crisis management.',
    idealFor: 'Couples who planned their wedding but require flawless execution on the big day.',
    deliverables: ['Lead Planner + 2 Assistant Managers', 'Vendor Load-In & Technical Direction', 'Cueing Ceremony & Entertainment', 'Emergency Bride & Groom Kit'],
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'destination-weddings',
    num: '04',
    title: 'Destination Wedding Planning',
    desc: 'Specialized logistics for international couples bringing guests to Dubai or Abu Dhabi, including flight concierges, luxury hotel blocks, and multi-day itinerary design.',
    idealFor: 'Overseas couples desiring a luxury UAE celebration for global attendees.',
    deliverables: ['Guest Accommodations & Airport VIP Transfers', '3-Day Event Itinerary (Welcome Cocktail to Brunch)', 'Multi-Language Guest Liaison Desk', 'Custom Guest Welcome Gift Bags'],
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'design-styling',
    num: '05',
    title: 'Wedding Design & Floral Styling',
    desc: 'Curating custom color palettes, custom tablescapes, architectural lighting, ambient candles, and bespoke floral sculptures.',
    idealFor: 'Couples seeking an editorial, Instagram-worthy aesthetic transformation.',
    deliverables: ['Bespoke Floral Installation Design', 'Custom Table Linen & Charger Curation', 'Architectural Mood Lighting Scheme', 'Stationery & Calligraphy Integration'],
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'venue-sourcing',
    num: '06',
    title: 'Venue Sourcing & Site Inspection',
    desc: 'Discreet access to private beachfront resorts, desert dune sanctuaries, palatial ballrooms, and private UAE estates.',
    idealFor: 'Couples searching for the perfect location matching guest capacity and style.',
    deliverables: ['Curated Venue Comparison Dossier', 'Privileged Pricing & Contract Negotiation', 'On-Site Guided Site Inspections', 'Capacity & Acoustic Feasibility'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vendor-management',
    num: '07',
    title: 'Vendor Management & Contracting',
    desc: 'Vetting top-tier UAE photographers, Michelin-trained caterers, celebrity DJs, sound engineers, and international floral artisans.',
    idealFor: 'Couples wanting the best creative talent with transparent contract terms.',
    deliverables: ['Contract Review & Negotiations', 'Vendor Schedule Synchronization', 'Catering Tasting & Menu Curation', 'Payment Milestone Management'],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pre-wedding-events',
    num: '08',
    title: 'Pre-Wedding & Engagement Events',
    desc: 'Planning intimate proposal setups, Henna nights, sunset yacht welcome parties, and post-wedding recovery brunches.',
    idealFor: 'Couples extending their wedding celebration into a multi-day experience.',
    deliverables: ['Yacht Charter Welcome Parties', 'Desert Sunset Henna Evenings', 'Private Beach Club Recovery Brunches', 'Romantic Proposal Architecture'],
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80'
  }
];

export const REAL_WEDDINGS: RealWedding[] = [
  {
    id: 'sunset-palace-beach',
    title: 'Golden Hour Sunset Ceremony',
    couple: 'Sara & Omar',
    style: 'beach',
    location: 'Jumeirah Beach Resort, Dubai',
    guestCount: 180,
    budgetAed: 'AED 480,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456802381?auto=format&fit=crop&w=800&q=80'
    ],
    conceptNotes: 'An organic beachfront setup utilizing white peonies, brushed gold cutlery, and floating candle mirrors under a starry canopy.',
    palette: ['#FAF6F0', '#C5A059', '#E8D3C5', '#8A9A86'],
    keyVendors: ['EverBloom Floral Atelier', 'Dubai Symphony Strings', 'Grand Beach Resort Gourmet']
  },
  {
    id: 'desert-dune-sanctuary',
    title: 'Starlight Desert Oasis Celebration',
    couple: 'Maya & Julian',
    style: 'desert',
    location: 'Al Marmoom Desert Reserve, Dubai',
    guestCount: 140,
    budgetAed: 'AED 390,000',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80'
    ],
    conceptNotes: 'Deep terracotta hues, woven cane lanterns, and modern Bedouin lounge seating set against sweeping natural desert dunes.',
    palette: ['#D8B4A0', '#C5A059', '#3D2E28', '#FAF6F0'],
    keyVendors: ['Dune Luxury Caterers', 'Oasis Acoustic Ensemble', 'Desert Lights Dubai']
  },
  {
    id: 'grand-palace-ballroom',
    title: 'Royal Crystal Ballroom Gala',
    couple: 'Layla & Tariq',
    style: 'ballroom',
    location: 'Emirates Palace Collection, Abu Dhabi',
    guestCount: 350,
    budgetAed: 'AED 850,000',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80'
    ],
    conceptNotes: 'Opulent white hydrangeas, Baccarat crystal chandeliers, custom gold mirrored dancefloor, and 7-tier wedding cake showpiece.',
    palette: ['#FFFDF9', '#D4AF37', '#E5E0D8', '#2C2623'],
    keyVendors: ['Imperial Florals', 'Abu Dhabi Philharmonic Orchestra', 'Michelin Pastry Studio']
  },
  {
    id: 'botanical-garden-estate',
    title: 'Ethereal Glasshouse Garden Nuptials',
    couple: 'Chloe & Alexander',
    style: 'garden',
    location: 'Al Barari Botanical Sanctuary, Dubai',
    guestCount: 120,
    budgetAed: 'AED 320,000',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80'
    ],
    conceptNotes: 'Cascading ivy, wild garden roses, velvet sage napkins, and romantic fairy-light ceiling inside a glass pavilion.',
    palette: ['#8A9A86', '#FAF6F0', '#E8D3C5', '#556B2F'],
    keyVendors: ['Botanica Floral Design', 'Acoustic Soul Quartet', 'Green Gourmet Dubai']
  }
];

export const EVERA_LEADERSHIP: EveraLeader[] = [
  {
    name: 'Elena Rostova',
    role: 'Founder & Lead Wedding Architect',
    bio: '12 years of luxury event design across Paris, Monaco, and Dubai. Specializing in high-budget royal and destination weddings.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Head of Creative Design & Styling',
    bio: 'Former architectural designer focused on spatial transformations, lighting scapes, and bespoke floral installations.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Sophie Laurent',
    role: 'Head of Destination Weddings',
    bio: 'Oversees VIP international client concierges, multi-day guest travel, and luxury resort takeovers.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Nadia El-Sayed',
    role: 'Senior Wedding Logistics Manager',
    bio: 'Master of timeline execution, vendor contracting, and on-site day-of production management.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  }
];

export const EVERA_INSIGHTS: EveraInsight[] = [
  {
    id: 'uae-wedding-budgeting',
    title: 'How to Budget for a Luxury UAE Wedding in 2026',
    category: 'Budgeting & Finance',
    readTime: '6 Min Read',
    excerpt: 'Understanding realistic venue minimum spends, floral import costs, and catering allocations across Dubai and Abu Dhabi.',
    content: 'Planning a wedding in the UAE requires careful balance between venue rental fees, food and beverage commitments, and floral imports...',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'venue-style-guide',
    title: 'Beachfront vs Desert Dune vs Royal Ballroom: Choosing Your UAE Venue',
    category: 'Venue Selection',
    readTime: '8 Min Read',
    excerpt: 'Comparing weather windows, guest comfort, acoustic feasibility, and design flexibility across top UAE wedding settings.',
    content: 'The UAE offers three distinct wedding environments, each presenting unique logistical considerations and aesthetic opportunities...',
    image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'destination-dubai-guide',
    title: 'Planning a Destination Wedding in Dubai: The Complete International Guide',
    category: 'Destination Weddings',
    readTime: '10 Min Read',
    excerpt: 'Essential advice for overseas couples: legal registration, seasonal timing, guest travel concierges, and multi-event weekends.',
    content: 'Dubai has become the ultimate global destination for multi-cultural weddings, uniting families from Europe, Asia, and the Americas...',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'full-planning-vs-coordination',
    title: 'Full Planning vs Day-of Coordination: Which Service Level Do You Need?',
    category: 'Planning Advice',
    readTime: '5 Min Read',
    excerpt: 'A honest breakdown of workload, vendor management, and stress prevention to help you choose the right planner commitment.',
    content: 'Deciding whether to hire a full-service planner or a day-of coordinator depends on your schedule, vendor connections, and vision...',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456802381?auto=format&fit=crop&w=800&q=80'
  }
];

export const EVERA_TESTIMONIALS = [
  {
    quote: "EVERA turned our vision into a wedding more beautiful than we imagined — and we didn't stress about a single detail.",
    couple: "Sara & Omar",
    location: "Jumeirah Beach Resort, Dubai",
    rating: 5
  },
  {
    quote: "Coordinating 160 guests flying in from London and Mumbai seemed impossible until Elena and her team stepped in.",
    couple: "Maya & Julian",
    location: "Al Marmoom Desert, Dubai",
    rating: 5
  },
  {
    quote: "The floral design and lighting in the Emirates Palace ballroom left our guests speechless. Pure perfection.",
    couple: "Layla & Tariq",
    location: "Emirates Palace, Abu Dhabi",
    rating: 5
  },
  {
    quote: "From our first consultation to the midnight fireworks, EVERA executed every minute with military precision and immense warmth.",
    couple: "Chloe & Alexander",
    location: "Al Barari, Dubai",
    rating: 5
  },
  {
    quote: "Their vendor connections saved us over AED 60,000 on catering and decor while delivering top 3-Michelin quality.",
    couple: "Nour & Faris",
    location: "Saadiyat Island, Abu Dhabi",
    rating: 5
  }
];

export const EVERA_FAQS = [
  {
    q: "How far in advance should we book a wedding planner?",
    a: "We recommend booking EVERA 8 to 14 months before your intended wedding date, especially for peak UAE wedding season (October through April). For day-of coordination, 3 to 6 months in advance is ideal."
  },
  {
    q: "Do you offer day-of coordination only?",
    a: "Yes! Our Day-Of Execution package begins 60 days before your wedding date. We audit all vendor contracts, finalize the master 24-hour timeline, and provide full on-site lead direction on your wedding day."
  },
  {
    q: "Can you plan destination weddings for international guests?",
    a: "Absolutely. Over 40% of our weddings are destination celebrations. We handle VIP flight concierges, luxury hotel room blocks, visa coordination, and multi-day itinerary events (welcome cruises, henna nights, recovery brunches)."
  },
  {
    q: "Do you handle vendor contracts and payments?",
    a: "Yes. We review all vendor contracts for transparent pricing and client protection, synchronize payment schedules, and manage milestone dispatches on your behalf."
  },
  {
    q: "What's included in full wedding planning?",
    a: "Full planning includes complete budget architecture, venue sourcing, bespoke 3D design and floral curation, vendor procurement, rehearsal dinner coordination, guest travel management, and 24/7 lead planner access."
  },
  {
    q: "Can you work within our specific budget?",
    a: "We manage weddings ranging from AED 250,000 up to AED 3,000,000+. During our initial consultation, we build a transparent budget framework aligned with your priorities."
  },
  {
    q: "Do you offer engagement or pre-wedding event planning?",
    a: "Yes. We curate romantic surprise proposals, engagement galas, Henna and Sangeet celebrations, sunset yacht welcome parties, and post-wedding beach brunches."
  },
  {
    q: "How many weddings do you take on at once?",
    a: "To ensure absolute dedication, EVERA limits our portfolio to a maximum of 18 full-planning weddings per year, and never more than one wedding per weekend."
  },
  {
    q: "Can we choose our own vendors?",
    a: "Of course! While we provide a vetted list of top-tier UAE creative partners, we are always delighted to work with vendors you personally select or bring internationally."
  },
  {
    q: "How do I book a planning consultation?",
    a: "Simply complete our online consultation form or reach out directly via WhatsApp (+971 50 771 8844). Our lead planner will connect with you within 4 hours to schedule your private session."
  }
];
