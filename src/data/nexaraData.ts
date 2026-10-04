export interface NexaraGame {
  id: string;
  title: string;
  genre: 'Action' | 'RPG' | 'Strategy' | 'Racing' | 'Survival' | 'Adventure' | 'Simulation' | 'Esports FPS';
  world: 'VOID' | 'NEXUS' | 'FRONTIER' | 'ECLIPSE' | 'ORBIT' | 'AFTERLIGHT';
  tagline: string;
  description: string;
  coverImage: string;
  heroBanner: string;
  rating: number;
  playersCount: string;
  developer: string;
  platforms: ('PC' | 'Console' | 'Cloud' | 'VR')[];
  modes: ('Single Player' | 'Multiplayer' | 'Co-op' | 'Competitive Ranked')[];
  status: 'Live' | 'Season 04' | 'Tournament Active' | 'Early Access';
  tags: string[];
  systemReqs: {
    os: string;
    gpu: string;
    ram: string;
    storage: string;
  };
}

export interface NexaraTournament {
  id: string;
  title: string;
  gameTitle: string;
  format: '5v5 Double Elimination' | '1v1 Solo Duel' | 'Squad Battle Royale' | 'Time Attack Grand Prix' | '3v3 Tactical Arena';
  startDate: string;
  prizePoolAED: number;
  participants: string;
  status: 'LIVE' | 'Registration Open' | 'Upcoming' | 'Completed';
  region: 'UAE & MENA' | 'Global Prime' | 'Asia Pacific' | 'Europe Central';
  rankRequirement: string;
  tierBadge: string;
}

export interface NexaraPlayer {
  rank: number;
  username: string;
  tag: string;
  avatar: string;
  rating: number;
  tier: 'Apex Grandmaster' | 'Master Prime' | 'Diamond Elite' | 'Platinum Pro';
  wins: number;
  matches: number;
  winRate: string;
  level: number;
  region: string;
  favoriteGame: string;
}

export interface NexaraAchievement {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  unlocked: boolean;
  progress: number;
  category: 'Combat' | 'Exploration' | 'Strategy' | 'Mastery';
  icon: string;
}

export interface NexaraStoreItem {
  id: string;
  name: string;
  category: 'Cosmetic Skin' | 'Avatar Frame' | 'Weapon Charm' | 'Battle Pass' | 'Profile Banner' | 'Emote Pack';
  game: string;
  rarity: 'Mythic' | 'Legendary' | 'Epic' | 'Rare';
  priceAED: number;
  image: string;
  description: string;
}

export interface NexaraCommunity {
  id: string;
  name: string;
  category: string;
  membersCount: string;
  activeNow: string;
  description: string;
  tags: string[];
}

export const NEXARA_METADATA = {
  name: 'NEXARA',
  eyebrow: 'THE NEXT GAMING FRONTIER',
  tagline: 'Enter. Compete. Evolve.',
  positioning: 'The Next Generation Gaming Universe',
  subheading: 'A connected gaming universe built for discovery, competition, progression, and the players who never stop moving forward.',
  location: 'Dubai Esports Hub & Middle East Cloud Node, UAE',
  demoNotice: 'NEXARA GAMING UNIVERSE DEMONSTRATION · Fictional Interactive Entertainment Platform'
};

// -------------------------------------------------------------
// 24 DISTINCT GAMES CATALOG
// -------------------------------------------------------------
export const NEXARA_GAMES: NexaraGame[] = [
  {
    id: 'game-01',
    title: 'VOID//ASCENT',
    genre: 'Action',
    world: 'VOID',
    tagline: 'Vertical cybernetic arena combat in a collapsing megastructure.',
    description: 'Master gravity-defying movement, energy blades, and kinetic railguns as squads duel across shattered orbital sky bridges.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    rating: 4.96,
    playersCount: '2.4M Active',
    developer: 'Aetherion Interactive',
    platforms: ['PC', 'Console', 'Cloud'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Season 04',
    tags: ['Fast-Paced', 'Cyberpunk', 'Competitive', 'Movement'],
    systemReqs: { os: 'Windows 11 (64-bit)', gpu: 'RTX 4070 / RX 7800 XT', ram: '16 GB DDR5', storage: '85 GB NVMe' }
  },
  {
    id: 'game-02',
    title: 'NEON FRONTIER',
    genre: 'RPG',
    world: 'FRONTIER',
    tagline: 'Open-world synthwave rogue planet exploration.',
    description: 'Roam neon-drenched desert canyons, trade rare mineral isotopes, and pilot customizable hovercrafts across lawless frontier outposts.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
    rating: 4.92,
    playersCount: '1.8M Active',
    developer: 'Neon Forge Studios',
    platforms: ['PC', 'Console'],
    modes: ['Single Player', 'Co-op'],
    status: 'Live',
    tags: ['Open World', 'Sci-Fi RPG', 'Customization', 'Story Rich'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3060 Ti', ram: '16 GB', storage: '120 GB SSD' }
  },
  {
    id: 'game-03',
    title: 'ECLIPSE PROTOCOL',
    genre: 'Esports FPS',
    world: 'ECLIPSE',
    tagline: 'Tactical 5v5 tactical shooter where light and shadow dictate vision.',
    description: 'Deploy optical cloaks, photon disruptors, and precision ballistics in high-stakes counter-tactical bomb defusal tournaments.',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    rating: 4.98,
    playersCount: '4.1M Active',
    developer: 'Apex Grid Systems',
    platforms: ['PC'],
    modes: ['Competitive Ranked', 'Multiplayer'],
    status: 'Tournament Active',
    tags: ['Tactical FPS', 'Esports', 'Ranked 5v5', 'Precision'],
    systemReqs: { os: 'Windows 10/11', gpu: 'RTX 2060 or better', ram: '16 GB', storage: '45 GB SSD' }
  },
  {
    id: 'game-04',
    title: 'TITAN CIRCUIT',
    genre: 'Racing',
    world: 'ORBIT',
    tagline: 'Anti-gravity supersonic racing on maglev orbital highways.',
    description: 'Break the sound barrier at Mach 3 through magnetic loops and dynamic weather vortexes across lunar ring tracks.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    rating: 4.88,
    playersCount: '890K Active',
    developer: 'Veloce Dynamics',
    platforms: ['PC', 'Console', 'VR'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Live',
    tags: ['Anti-Gravity', 'Hyper-Speed', 'VR Supported', 'Leaderboards'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 4080', ram: '32 GB', storage: '60 GB' }
  },
  {
    id: 'game-05',
    title: 'SHADOW//ZERO',
    genre: 'Action',
    world: 'VOID',
    tagline: 'Next-gen stealth combat and neural infiltration.',
    description: 'Hack security drones, manipulate quantum shadows, and execute silent takedowns in corporate arcologies.',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1600&q=80',
    rating: 4.94,
    playersCount: '1.2M Active',
    developer: 'Specter Logic',
    platforms: ['PC', 'Console'],
    modes: ['Single Player', 'Co-op'],
    status: 'Live',
    tags: ['Stealth', 'Cyberpunk', 'Tactical', 'Immersive Sim'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3070', ram: '16 GB', storage: '70 GB SSD' }
  },
  {
    id: 'game-06',
    title: 'AETHER FALL',
    genre: 'Survival',
    world: 'AFTERLIGHT',
    tagline: 'Floating sky island survival and airship construction.',
    description: 'Build majestic wooden and brass skyships, brave electrostatic tempest storms, and colonize unexplored drifting sky islands.',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    rating: 4.91,
    playersCount: '1.5M Active',
    developer: 'Stratus Works',
    platforms: ['PC', 'Cloud'],
    modes: ['Multiplayer', 'Co-op'],
    status: 'Live',
    tags: ['Survival Craft', 'Airships', 'Base Building', 'Atmospheric'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3060', ram: '16 GB', storage: '50 GB' }
  },
  {
    id: 'game-07',
    title: 'RIFTBOUND',
    genre: 'Strategy',
    world: 'NEXUS',
    tagline: 'Planetary Grand Strategy and dimensional fleet conquest.',
    description: 'Command interstellar dreadnoughts, manage orbital hyper-lanes, and outwit enemy admirals in real-time hex grid warfare.',
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80',
    rating: 4.95,
    playersCount: '750K Active',
    developer: 'Hexagon Core',
    platforms: ['PC'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Season 04',
    tags: ['4X Strategy', 'Space Fleet', 'Grand Warfare', 'Tactical'],
    systemReqs: { os: 'Windows 10/11', gpu: 'GTX 1660 Super', ram: '16 GB', storage: '35 GB' }
  },
  {
    id: 'game-08',
    title: 'CHRONO//DRIVE',
    genre: 'Racing',
    world: 'NEXUS',
    tagline: 'Time-rewind hyper-car street combat racing.',
    description: 'Equip temporal boosters to manipulate track trajectory, dodge supersonic plasma traps, and cross the line at zero seconds.',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    rating: 4.87,
    playersCount: '920K Active',
    developer: 'Velocity Engine',
    platforms: ['PC', 'Console'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Live',
    tags: ['Arcade Racing', 'Time Travel', 'Street Battles', 'Fast-Paced'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3070', ram: '16 GB', storage: '65 GB' }
  },
  {
    id: 'game-09',
    title: 'IRON VEIL',
    genre: 'Strategy',
    world: 'FRONTIER',
    tagline: 'Dieselpunk mech warfare and industrial siege simulation.',
    description: 'Construct titanic walking fortresses, command trench divisions, and manage munitions logistics across desolate iron battlegrounds.',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1600&q=80',
    rating: 4.93,
    playersCount: '680K Active',
    developer: 'Vulcan Forge',
    platforms: ['PC'],
    modes: ['Single Player', 'Multiplayer'],
    status: 'Live',
    tags: ['Mecha', 'RTS', 'Dieselpunk', 'Resource Management'],
    systemReqs: { os: 'Windows 10/11', gpu: 'RTX 2070', ram: '16 GB', storage: '40 GB' }
  },
  {
    id: 'game-10',
    title: 'STARFORGE',
    genre: 'Simulation',
    world: 'ORBIT',
    tagline: 'Deep space station engineering and megastructure builder.',
    description: 'Design Dyson swarm collectors, manage zero-gravity life support systems, and trade with automated alien mining freighters.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    rating: 4.97,
    playersCount: '1.1M Active',
    developer: 'Orbital Architect Inc',
    platforms: ['PC'],
    modes: ['Single Player', 'Co-op'],
    status: 'Live',
    tags: ['Space Sim', 'Base Building', 'Physics Sandbox', 'Hard Sci-Fi'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3080', ram: '32 GB', storage: '55 GB' }
  },
  {
    id: 'game-11',
    title: 'BLACK HORIZON',
    genre: 'Survival',
    world: 'VOID',
    tagline: 'Deep-abyss deep-sea horror and planetary ocean survival.',
    description: 'Submerge 8,000 meters into alien hydrothermal trenches. Pilot submersible rovers while avoiding bioluminescent leviathans.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    rating: 4.94,
    playersCount: '1.4M Active',
    developer: 'Benthic Realm',
    platforms: ['PC', 'Console', 'VR'],
    modes: ['Single Player'],
    status: 'Live',
    tags: ['Underwater', 'Survival Horror', 'Atmospheric', 'Exploration'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3070', ram: '16 GB', storage: '60 GB' }
  },
  {
    id: 'game-12',
    title: 'VECTOR PRIME',
    genre: 'Action',
    world: 'NEXUS',
    tagline: 'Hypersonic aerial dogfighting across floating megalopolises.',
    description: 'Engage in 360-degree jet interceptor skirmishes, weaving between skyscraper spires at Mach 2 with customizable plasma armaments.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
    rating: 4.89,
    playersCount: '810K Active',
    developer: 'Vector Wing Lab',
    platforms: ['PC', 'Console'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Season 04',
    tags: ['Flight Combat', 'Dogfighting', 'Fast-Paced', 'Esports'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3060 Ti', ram: '16 GB', storage: '48 GB' }
  },
  {
    id: 'game-13',
    title: 'LAST SIGNAL',
    genre: 'Adventure',
    world: 'AFTERLIGHT',
    tagline: 'Mystery exploration of an abandoned interstellar relay station.',
    description: 'Decipher alien radio waveforms, restore dying fusion reactors, and uncover the truth behind humanity’s lost colony ship.',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    rating: 4.96,
    playersCount: '620K Active',
    developer: 'Echo Signal Studios',
    platforms: ['PC', 'Console'],
    modes: ['Single Player'],
    status: 'Live',
    tags: ['Narrative', 'Atmospheric', 'Sci-Fi Mystery', 'Audio Driven'],
    systemReqs: { os: 'Windows 10/11', gpu: 'GTX 1660', ram: '16 GB', storage: '30 GB' }
  },
  {
    id: 'game-14',
    title: 'NOVA//RUSH',
    genre: 'Esports FPS',
    world: 'ECLIPSE',
    tagline: 'Fast-paced 3v3 arena shooter with fluid parkour wall-running.',
    description: 'Unleash devastating kinetic abilities, slide into hyper-fast gunfights, and master high-velocity vertical map layouts.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    rating: 4.93,
    playersCount: '3.2M Active',
    developer: 'Kinetic Shift',
    platforms: ['PC', 'Console'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Tournament Active',
    tags: ['Arena FPS', 'Hero Shooter', 'Parkour', 'Ranked'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3060', ram: '16 GB', storage: '40 GB SSD' }
  },
  {
    id: 'game-15',
    title: 'WRAITH SECTOR',
    genre: 'RPG',
    world: 'VOID',
    tagline: 'Dark fantasy soulslike set in a dying gothic space station.',
    description: 'Wield runic greatswords and grav-shields against colossal mechanical seraphs in a decaying celestial cathedral.',
    coverImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=1600&q=80',
    rating: 4.98,
    playersCount: '2.1M Active',
    developer: 'Gothic Void Works',
    platforms: ['PC', 'Console'],
    modes: ['Single Player', 'Co-op'],
    status: 'Live',
    tags: ['Soulslike', 'Dark Fantasy', 'Challenging', 'Boss Battles'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 4070', ram: '32 GB', storage: '90 GB SSD' }
  },
  {
    id: 'game-16',
    title: 'SKYBREAK',
    genre: 'Action',
    world: 'FRONTIER',
    tagline: 'Aerial monster hunting and grapple-hook combat.',
    description: 'Grapple onto ancient Leviathan cloud beasts, harvest celestial storm cores, and forge legendary crystal weapon sets.',
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80',
    rating: 4.91,
    playersCount: '1.6M Active',
    developer: 'Zenith Apex',
    platforms: ['PC', 'Console'],
    modes: ['Multiplayer', 'Co-op'],
    status: 'Live',
    tags: ['Monster Hunting', 'Co-op Action', 'Grappling Hook', 'Epic Scale'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3070', ram: '16 GB', storage: '75 GB' }
  },
  {
    id: 'game-17',
    title: 'PHANTOM GRID',
    genre: 'Strategy',
    world: 'NEXUS',
    tagline: 'Cyber-espionage matrix hacking and turn-based squad tactics.',
    description: 'Direct covert strike teams through neon-lit corporate datacenters, deploying malware icebreakers and tactical overwatch.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
    rating: 4.89,
    playersCount: '540K Active',
    developer: 'Synapse Grid',
    platforms: ['PC', 'Cloud'],
    modes: ['Single Player', 'Competitive Ranked'],
    status: 'Live',
    tags: ['Turn-Based Tactics', 'Hacking', 'Cyberpunk', 'Grid Strategy'],
    systemReqs: { os: 'Windows 10/11', gpu: 'GTX 1650', ram: '8 GB', storage: '25 GB' }
  },
  {
    id: 'game-18',
    title: 'DUSK//REIGN',
    genre: 'Survival',
    world: 'ECLIPSE',
    tagline: 'Perpetual twilight open-world survival with mutated biomes.',
    description: 'Scavenge fallen orbital debris, construct fortified geothermal shelters, and withstand hordes of shadow-stalkers when the eclipses trigger.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
    rating: 4.90,
    playersCount: '1.3M Active',
    developer: 'Duskfall Interactive',
    platforms: ['PC', 'Console'],
    modes: ['Multiplayer', 'Co-op'],
    status: 'Live',
    tags: ['Survival Craft', 'Open World', 'Horror Elements', 'Multiplayer'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3060', ram: '16 GB', storage: '80 GB' }
  },
  {
    id: 'game-19',
    title: 'ORBITAL ZERO',
    genre: 'Simulation',
    world: 'ORBIT',
    tagline: 'Hard-physics astronaut EVA repair and orbital station salvage.',
    description: 'Experience true zero-G inertia with physics-calculated thruster physics. Repair space telescopes, weld solar arrays, and avoid orbital debris storms.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    rating: 4.95,
    playersCount: '780K Active',
    developer: 'Zero G Dynamics',
    platforms: ['PC', 'VR'],
    modes: ['Single Player', 'Co-op'],
    status: 'Live',
    tags: ['Space Physics', 'VR Ready', 'Simulation', 'Zero Gravity'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3080', ram: '32 GB', storage: '45 GB' }
  },
  {
    id: 'game-20',
    title: 'CRIMSON VECTOR',
    genre: 'Racing',
    world: 'FRONTIER',
    tagline: 'Off-road dune rally across irradiated Martian craters.',
    description: 'Strap into heavy all-terrain turbine buggies. Navigate shifting volcanic sands, steep crater rims, and solar flares in brutal endurance rallies.',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    rating: 4.86,
    playersCount: '620K Active',
    developer: 'Red Planet Rally',
    platforms: ['PC', 'Console'],
    modes: ['Multiplayer', 'Competitive Ranked'],
    status: 'Live',
    tags: ['Off-Road Racing', 'Martian Dunes', 'Physics Suspension', 'Endurance'],
    systemReqs: { os: 'Windows 10/11', gpu: 'RTX 2060 Super', ram: '16 GB', storage: '50 GB' }
  },
  {
    id: 'game-21',
    title: 'ZERO HOUR',
    genre: 'Esports FPS',
    world: 'NEXUS',
    tagline: 'Time-distortion tactical battle royale for 60 solo operatives.',
    description: 'Manipulate time fields to reverse lethal sniper rounds, clone temporal decoys, and extract with high-value neural relics.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80',
    rating: 4.97,
    playersCount: '5.2M Active',
    developer: 'Nexus Core Labs',
    platforms: ['PC', 'Console', 'Cloud'],
    modes: ['Competitive Ranked', 'Multiplayer'],
    status: 'Tournament Active',
    tags: ['Battle Royale', 'Time Mechanics', 'High Skill Floor', 'Esports'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 4070', ram: '16 GB', storage: '65 GB SSD' }
  },
  {
    id: 'game-22',
    title: 'ARC//NEXUS',
    genre: 'RPG',
    world: 'NEXUS',
    tagline: 'Massive multiplayer cyberpunk MMO with player-driven economy.',
    description: 'Found corporate syndicates, build neon arcology penthouses, manufacture weapons, and engage in territory wars across 12 cyber districts.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
    rating: 4.92,
    playersCount: '2.8M Active',
    developer: 'Arc Interactive',
    platforms: ['PC'],
    modes: ['Multiplayer'],
    status: 'Season 04',
    tags: ['MMORPG', 'Player Economy', 'Guild Wars', 'Cyberpunk'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3080', ram: '32 GB', storage: '110 GB SSD' }
  },
  {
    id: 'game-23',
    title: 'AFTERLIGHT',
    genre: 'Adventure',
    world: 'AFTERLIGHT',
    tagline: 'Atmospheric journey through frozen solar system outposts.',
    description: 'Awaken an ancient AI network across the moons of Jupiter using light refraction prisms and holographic memory archives.',
    coverImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80',
    rating: 4.99,
    playersCount: '950K Active',
    developer: 'Solarium Art Lab',
    platforms: ['PC', 'Console'],
    modes: ['Single Player'],
    status: 'Live',
    tags: ['Atmospheric', 'Puzzle Adventure', 'Artistic', 'Masterpiece'],
    systemReqs: { os: 'Windows 10/11', gpu: 'GTX 1660 Ti', ram: '16 GB', storage: '35 GB' }
  },
  {
    id: 'game-24',
    title: 'SINGULARITY RUN',
    genre: 'Action',
    world: 'VOID',
    tagline: 'Infinite black hole parkour and physics survival.',
    description: 'Outrun the accretion disk of supermassive black hole Gargantua. Leap between collapsing starships in a heart-pounding sprint against entropy.',
    coverImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    heroBanner: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=80',
    rating: 4.94,
    playersCount: '1.7M Active',
    developer: 'Event Horizon Devs',
    platforms: ['PC', 'Console', 'VR'],
    modes: ['Single Player', 'Competitive Ranked'],
    status: 'Live',
    tags: ['Speedrun', 'Parkour', 'Hardcore', 'Leaderboards'],
    systemReqs: { os: 'Windows 11', gpu: 'RTX 3070', ram: '16 GB', storage: '40 GB' }
  }
];

// -------------------------------------------------------------
// 20 ACTUAL TOURNAMENTS / EVENTS
// -------------------------------------------------------------
export const NEXARA_TOURNAMENTS: NexaraTournament[] = [
  {
    id: 'tourn-01',
    title: 'NEXARA DUBAI OPEN 2026',
    gameTitle: 'ECLIPSE PROTOCOL',
    format: '5v5 Double Elimination',
    startDate: '18 Oct 2026',
    prizePoolAED: 350000,
    participants: '64 Teams',
    status: 'LIVE',
    region: 'UAE & MENA',
    rankRequirement: 'Diamond Elite+',
    tierBadge: 'PREMIER MAJOR'
  },
  {
    id: 'tourn-02',
    title: 'VOID CIRCUIT GRAND FINALS',
    gameTitle: 'VOID//ASCENT',
    format: '3v3 Tactical Arena',
    startDate: '24 Oct 2026',
    prizePoolAED: 200000,
    participants: '32 Teams',
    status: 'Registration Open',
    region: 'Global Prime',
    rankRequirement: 'Master Prime+',
    tierBadge: 'GLOBAL CHAMPIONSHIP'
  },
  {
    id: 'tourn-03',
    title: 'NIGHTFALL CUP: SHADOW DIVISION',
    gameTitle: 'ZERO HOUR',
    format: 'Squad Battle Royale',
    startDate: '01 Nov 2026',
    prizePoolAED: 120000,
    participants: '100 Operatives',
    status: 'Upcoming',
    region: 'UAE & MENA',
    rankRequirement: 'Platinum Pro+',
    tierBadge: 'REGIONAL CUP'
  },
  {
    id: 'tourn-04',
    title: 'APEX GRID SUPER SERIES',
    gameTitle: 'NOVA//RUSH',
    format: '3v3 Tactical Arena',
    startDate: '08 Nov 2026',
    prizePoolAED: 180000,
    participants: '48 Teams',
    status: 'Registration Open',
    region: 'Europe Central',
    rankRequirement: 'Diamond Elite+',
    tierBadge: 'SUPER SERIES'
  },
  {
    id: 'tourn-05',
    title: 'RIFT CHALLENGE: MASTERS',
    gameTitle: 'RIFTBOUND',
    format: '1v1 Solo Duel',
    startDate: '15 Nov 2026',
    prizePoolAED: 95000,
    participants: '128 Players',
    status: 'Upcoming',
    region: 'Global Prime',
    rankRequirement: 'Master Prime+',
    tierBadge: 'MASTERS INVITATIONAL'
  },
  {
    id: 'tourn-06',
    title: 'VECTOR SPEED SERIES',
    gameTitle: 'TITAN CIRCUIT',
    format: 'Time Attack Grand Prix',
    startDate: '20 Nov 2026',
    prizePoolAED: 75000,
    participants: '256 Racers',
    status: 'Registration Open',
    region: 'UAE & MENA',
    rankRequirement: 'Open to All Ranks',
    tierBadge: 'SPEED CHAMPIONSHIP'
  },
  {
    id: 'tourn-07',
    title: 'TITAN LEAGUE AUTUMN CLASH',
    gameTitle: 'ECLIPSE PROTOCOL',
    format: '5v5 Double Elimination',
    startDate: '27 Nov 2026',
    prizePoolAED: 220000,
    participants: '32 Teams',
    status: 'Upcoming',
    region: 'Asia Pacific',
    rankRequirement: 'Apex Grandmaster',
    tierBadge: 'TITAN LEAGUE'
  },
  {
    id: 'tourn-08',
    title: 'ECLIPSE ARENA SHOWDOWN',
    gameTitle: 'ECLIPSE PROTOCOL',
    format: '5v5 Double Elimination',
    startDate: '05 Dec 2026',
    prizePoolAED: 150000,
    participants: '16 Pro Squads',
    status: 'Upcoming',
    region: 'UAE & MENA',
    rankRequirement: 'Diamond Elite+',
    tierBadge: 'PRO ARENA'
  },
  {
    id: 'tourn-09',
    title: 'STARFORGE CUP CREATIVE',
    gameTitle: 'STARFORGE',
    format: '1v1 Solo Duel',
    startDate: '10 Dec 2026',
    prizePoolAED: 50000,
    participants: '80 Builders',
    status: 'Registration Open',
    region: 'Global Prime',
    rankRequirement: 'Open to All Ranks',
    tierBadge: 'COMMUNITY SHOWCASE'
  },
  {
    id: 'tourn-10',
    title: 'ZERO HOUR OPEN INVITATIONAL',
    gameTitle: 'ZERO HOUR',
    format: 'Squad Battle Royale',
    startDate: '18 Dec 2026',
    prizePoolAED: 280000,
    participants: '60 Squads',
    status: 'Upcoming',
    region: 'Global Prime',
    rankRequirement: 'Master Prime+',
    tierBadge: 'MAJOR INVITATIONAL'
  },
  {
    id: 'tourn-11',
    title: 'CHRONO SPRINT GRAND PRIX',
    gameTitle: 'CHRONO//DRIVE',
    format: 'Time Attack Grand Prix',
    startDate: '22 Dec 2026',
    prizePoolAED: 60000,
    participants: '128 Racers',
    status: 'Upcoming',
    region: 'UAE & MENA',
    rankRequirement: 'Platinum Pro+',
    tierBadge: 'SPRINT CUP'
  },
  {
    id: 'tourn-12',
    title: 'ARC SYNDICATE WARFARE',
    gameTitle: 'ARC//NEXUS',
    format: '5v5 Double Elimination',
    startDate: '28 Dec 2026',
    prizePoolAED: 175000,
    participants: '24 Guilds',
    status: 'Registration Open',
    region: 'Global Prime',
    rankRequirement: 'Diamond Elite+',
    tierBadge: 'GUILD CLASH'
  },
  {
    id: 'tourn-13',
    title: 'SINGULARITY SPEEDRUN CUP',
    gameTitle: 'SINGULARITY RUN',
    format: '1v1 Solo Duel',
    startDate: '04 Jan 2027',
    prizePoolAED: 45000,
    participants: '500 Runners',
    status: 'Upcoming',
    region: 'Global Prime',
    rankRequirement: 'Open to All Ranks',
    tierBadge: 'SPEEDRUN LEAGUE'
  },
  {
    id: 'tourn-14',
    title: 'WRAITH GAUNTLET TOURNAMENT',
    gameTitle: 'WRAITH SECTOR',
    format: '1v1 Solo Duel',
    startDate: '10 Jan 2027',
    prizePoolAED: 90000,
    participants: '64 Duelists',
    status: 'Upcoming',
    region: 'Europe Central',
    rankRequirement: 'Master Prime+',
    tierBadge: 'DUEL ARENA'
  },
  {
    id: 'tourn-15',
    title: 'DUSK REIGN GUILD BATTLE',
    gameTitle: 'DUSK//REIGN',
    format: 'Squad Battle Royale',
    startDate: '16 Jan 2027',
    prizePoolAED: 110000,
    participants: '32 Clans',
    status: 'Registration Open',
    region: 'UAE & MENA',
    rankRequirement: 'Platinum Pro+',
    tierBadge: 'CLAN CLASH'
  },
  {
    id: 'tourn-16',
    title: 'CRIMSON DUNE RALLY TROPHY',
    gameTitle: 'CRIMSON VECTOR',
    format: 'Time Attack Grand Prix',
    startDate: '22 Jan 2027',
    prizePoolAED: 55000,
    participants: '96 Drivers',
    status: 'Upcoming',
    region: 'UAE & MENA',
    rankRequirement: 'Open to All Ranks',
    tierBadge: 'DUNE TROPHY'
  },
  {
    id: 'tourn-17',
    title: 'PHANTOM PROTOCOL HACKATHON',
    gameTitle: 'PHANTOM GRID',
    format: '1v1 Solo Duel',
    startDate: '28 Jan 2027',
    prizePoolAED: 80000,
    participants: '128 Tacticians',
    status: 'Upcoming',
    region: 'Global Prime',
    rankRequirement: 'Diamond Elite+',
    tierBadge: 'TACTICAL MATRIX'
  },
  {
    id: 'tourn-18',
    title: 'IRON MECH SIEGE MASTERS',
    gameTitle: 'IRON VEIL',
    format: '3v3 Tactical Arena',
    startDate: '03 Feb 2027',
    prizePoolAED: 130000,
    participants: '32 Squads',
    status: 'Upcoming',
    region: 'Europe Central',
    rankRequirement: 'Master Prime+',
    tierBadge: 'SIEGE MASTERS'
  },
  {
    id: 'tourn-19',
    title: 'SKYBREAK LEVIATHAN DERBY',
    gameTitle: 'SKYBREAK',
    format: '3v3 Tactical Arena',
    startDate: '10 Feb 2027',
    prizePoolAED: 70000,
    participants: '48 Crews',
    status: 'Registration Open',
    region: 'Asia Pacific',
    rankRequirement: 'Platinum Pro+',
    tierBadge: 'CREW DERBY'
  },
  {
    id: 'tourn-20',
    title: 'NEXARA WORLD CHAMPIONSHIP 2027',
    gameTitle: 'ECLIPSE PROTOCOL',
    format: '5v5 Double Elimination',
    startDate: '20 Feb 2027',
    prizePoolAED: 1000000,
    participants: '32 Global Flagships',
    status: 'Upcoming',
    region: 'Global Prime',
    rankRequirement: 'Apex Grandmaster',
    tierBadge: 'WORLD PINNACLE'
  }
];

// -------------------------------------------------------------
// 20 ACTUAL LEADERBOARD PLAYERS
// -------------------------------------------------------------
export const NEXARA_LEADERBOARD: NexaraPlayer[] = [
  { rank: 1, username: 'VOIDRUNNER_77', tag: '#NEX1', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', rating: 3840, tier: 'Apex Grandmaster', wins: 412, matches: 489, winRate: '84.2%', level: 98, region: 'UAE (Dubai)', favoriteGame: 'ECLIPSE PROTOCOL' },
  { rank: 2, username: 'CYBER_VALKYRIE', tag: '#DXB9', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', rating: 3795, tier: 'Apex Grandmaster', wins: 389, matches: 470, winRate: '82.7%', level: 94, region: 'UAE (Abu Dhabi)', favoriteGame: 'ZERO HOUR' },
  { rank: 3, username: 'AETHER_PULSE', tag: '#GLO3', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', rating: 3740, tier: 'Apex Grandmaster', wins: 360, matches: 442, winRate: '81.4%', level: 91, region: 'South Korea (Seoul)', favoriteGame: 'VOID//ASCENT' },
  { rank: 4, username: 'SHADOW_SPECTER', tag: '#EU77', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', rating: 3680, tier: 'Apex Grandmaster', wins: 345, matches: 430, winRate: '80.2%', level: 89, region: 'Sweden (Stockholm)', favoriteGame: 'NOVA//RUSH' },
  { rank: 5, username: 'ORBITAL_KNIGHT', tag: '#UAE4', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80', rating: 3620, tier: 'Apex Grandmaster', wins: 330, matches: 420, winRate: '78.5%', level: 86, region: 'UAE (Sharjah)', favoriteGame: 'TITAN CIRCUIT' },
  { rank: 6, username: 'HYPER_NOVA', tag: '#US01', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80', rating: 3580, tier: 'Master Prime', wins: 310, matches: 405, winRate: '76.5%', level: 82, region: 'USA (Austin)', favoriteGame: 'ECLIPSE PROTOCOL' },
  { rank: 7, username: 'NEO_PHANTOM', tag: '#JP44', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80', rating: 3540, tier: 'Master Prime', wins: 295, matches: 390, winRate: '75.6%', level: 80, region: 'Japan (Tokyo)', favoriteGame: 'RIFTBOUND' },
  { rank: 8, username: 'SOLAR_STORM', tag: '#UAE2', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80', rating: 3510, tier: 'Master Prime', wins: 288, matches: 382, winRate: '75.3%', level: 79, region: 'UAE (Dubai)', favoriteGame: 'ZERO HOUR' },
  { rank: 9, username: 'QUANTUM_DRIFT', tag: '#UK88', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', rating: 3480, tier: 'Master Prime', wins: 275, matches: 370, winRate: '74.3%', level: 77, region: 'UK (London)', favoriteGame: 'CHRONO//DRIVE' },
  { rank: 10, username: 'TITAN_FANG', tag: '#GER1', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80', rating: 3450, tier: 'Master Prime', wins: 260, matches: 355, winRate: '73.2%', level: 75, region: 'Germany (Berlin)', favoriteGame: 'IRON VEIL' },
  { rank: 11, username: 'ECHO_BLADE', tag: '#UAE8', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80', rating: 3410, tier: 'Master Prime', wins: 252, matches: 348, winRate: '72.4%', level: 74, region: 'UAE (Ras Al Khaimah)', favoriteGame: 'VOID//ASCENT' },
  { rank: 12, username: 'PULSE_VIPER', tag: '#SG05', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', rating: 3380, tier: 'Diamond Elite', wins: 240, matches: 335, winRate: '71.6%', level: 72, region: 'Singapore', favoriteGame: 'NOVA//RUSH' },
  { rank: 13, username: 'CHRONO_LOCK', tag: '#KSA3', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80', rating: 3350, tier: 'Diamond Elite', wins: 232, matches: 326, winRate: '71.1%', level: 70, region: 'Saudi Arabia (Riyadh)', favoriteGame: 'ECLIPSE PROTOCOL' },
  { rank: 14, username: 'WRAITH_KING', tag: '#CA12', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', rating: 3320, tier: 'Diamond Elite', wins: 220, matches: 312, winRate: '70.5%', level: 69, region: 'Canada (Toronto)', favoriteGame: 'WRAITH SECTOR' },
  { rank: 15, username: 'DUNE_RIDER', tag: '#UAE7', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', rating: 3290, tier: 'Diamond Elite', wins: 215, matches: 308, winRate: '69.8%', level: 67, region: 'UAE (Al Ain)', favoriteGame: 'CRIMSON VECTOR' },
  { rank: 16, username: 'AURA_SYNC', tag: '#AUS9', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', rating: 3260, tier: 'Diamond Elite', wins: 205, matches: 298, winRate: '68.7%', level: 65, region: 'Australia (Sydney)', favoriteGame: 'STARFORGE' },
  { rank: 17, username: 'NEON_HAWK', tag: '#UAE3', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', rating: 3230, tier: 'Diamond Elite', wins: 198, matches: 290, winRate: '68.2%', level: 64, region: 'UAE (Dubai)', favoriteGame: 'VECTOR PRIME' },
  { rank: 18, username: 'ZERO_FLUX', tag: '#FR04', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80', rating: 3190, tier: 'Platinum Pro', wins: 188, matches: 280, winRate: '67.1%', level: 61, region: 'France (Paris)', favoriteGame: 'SINGULARITY RUN' },
  { rank: 19, username: 'RAIL_STORM', tag: '#BR77', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', rating: 3150, tier: 'Platinum Pro', wins: 179, matches: 270, winRate: '66.2%', level: 59, region: 'Brazil (São Paulo)', favoriteGame: 'VOID//ASCENT' },
  { rank: 20, username: 'NEXUS_VIPER', tag: '#UAE5', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80', rating: 3120, tier: 'Platinum Pro', wins: 170, matches: 260, winRate: '65.3%', level: 58, region: 'UAE (Fujairah)', favoriteGame: 'ARC//NEXUS' }
];

// -------------------------------------------------------------
// ACHIEVEMENTS GALLERY
// -------------------------------------------------------------
export const NEXARA_ACHIEVEMENTS: NexaraAchievement[] = [
  { id: 'ach-01', title: 'FIRST BLOOD', description: 'Win your first competitive ranked 5v5 match.', xpReward: 500, unlocked: true, progress: 100, category: 'Combat', icon: 'Sword' },
  { id: 'ach-02', title: 'NIGHT RUNNER', description: 'Complete 10 high-stakes midnight missions in SHADOW//ZERO.', xpReward: 750, unlocked: true, progress: 100, category: 'Combat', icon: 'Moon' },
  { id: 'ach-03', title: 'STRATEGIST SUPREME', description: 'Win 25 tactical hex-grid matches in RIFTBOUND.', xpReward: 1200, unlocked: true, progress: 100, category: 'Strategy', icon: 'Cpu' },
  { id: 'ach-04', title: 'UNSTOPPABLE STREAK', description: 'Achieve a 10-match consecutive victory streak in ranked play.', xpReward: 2000, unlocked: false, progress: 70, category: 'Mastery', icon: 'Activity' },
  { id: 'ach-05', title: 'UNIVERSE EXPLORER', description: 'Discover and play at least one title in every NEXARA world.', xpReward: 1500, unlocked: true, progress: 100, category: 'Exploration', icon: 'Compass' },
  { id: 'ach-06', title: 'APEX CHAMPION', description: 'Climb to the top 100 on the Global Premier Leaderboard.', xpReward: 5000, unlocked: false, progress: 45, category: 'Mastery', icon: 'Crown' }
];

// -------------------------------------------------------------
// STORE ITEMS (NEXARA MARKET)
// -------------------------------------------------------------
export const NEXARA_STORE_ITEMS: NexaraStoreItem[] = [
  { id: 'item-01', name: 'Cybernetic Dragon Foil Skin', category: 'Cosmetic Skin', game: 'ECLIPSE PROTOCOL', rarity: 'Mythic', priceAED: 180, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80', description: 'Animated holographic dragon scale finish with reactive kill counters.' },
  { id: 'item-02', name: 'Void Walker Hologram Frame', category: 'Avatar Frame', game: 'NEXARA Universal', rarity: 'Legendary', priceAED: 65, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', description: 'Prismatic rotating particle boundary for player identity cards.' },
  { id: 'item-03', name: 'Maglev Soundwave Boost Pack', category: 'Cosmetic Skin', game: 'TITAN CIRCUIT', rarity: 'Epic', priceAED: 95, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80', description: 'Custom reactive audio exhaust effects synced to player speed.' },
  { id: 'item-04', name: 'Season 04 Battle Pass: Singularity', category: 'Battle Pass', game: 'NEXARA Universal', rarity: 'Legendary', priceAED: 120, image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80', description: '100 tiers of exclusive weapon cosmetics, titles, and XP boosts.' },
  { id: 'item-05', name: 'Neon Glitch Emote Wheel', category: 'Emote Pack', game: 'ZERO HOUR', rarity: 'Rare', priceAED: 40, image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80', description: '6 high-framerate holographic taunts with spatial audio.' },
  { id: 'item-06', name: 'Black Hole Event Horizon Banner', category: 'Profile Banner', game: 'NEXARA Universal', rarity: 'Epic', priceAED: 50, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', description: 'Deep space animated banner with gravitational lensing physics.' }
];

// -------------------------------------------------------------
// GAMING COMMUNITIES
// -------------------------------------------------------------
export const NEXARA_COMMUNITIES: NexaraCommunity[] = [
  { id: 'comm-01', name: 'Dubai Esports Vanguard', category: 'Competitive Esports', membersCount: '48.5K', activeNow: '4,210', description: 'The official UAE flagship hub for ranked scrimmages, LAN party meetups, and tournament tryouts.', tags: ['UAE Hub', 'Ranked Scrims', 'Tournaments'] },
  { id: 'comm-02', name: 'Hypersonic Racers Club', category: 'Racing', membersCount: '22.1K', activeNow: '1,890', description: 'Anti-gravity time-trialists and maglev custom vehicle tuners sharing optimal trajectory telemetry.', tags: ['Time Trials', 'Veloce', 'Telemetry'] },
  { id: 'comm-03', name: 'Void Architects Collective', category: 'Creative & Modding', membersCount: '35.4K', activeNow: '2,940', description: 'Custom map creators, shader engineers, and procedural world modders across NEXARA titles.', tags: ['Modding', 'Map Design', 'Shaders'] },
  { id: 'comm-04', name: 'Shadow Syndicate Tactical', category: 'Competitive FPS', membersCount: '62.8K', activeNow: '7,450', description: 'High-tier competitive 5v5 tactical squads recruiting for the UAE and MENA regional majors.', tags: ['5v5 Pro', 'Voice Comms', 'Tactical'] }
];

// -------------------------------------------------------------
// LIVE GAMING OPERATIONS TELEMETRY (Demo Data)
// -------------------------------------------------------------
export const NEXARA_OPERATIONS = {
  activePlayersOnline: '1,482,920',
  activeMatchSessions: '142,390',
  liveTournamentsInFlight: 8,
  serverClustersOperational: '48 / 48 (100%)',
  averageLatencyDubaiNode: '4.2 ms',
  globalPacketLoss: '< 0.01%',
  antiCheatScansPerSec: '2,450,000',
  lastSyncTime: '3 seconds ago · Real-Time Game State Synchronized'
};
