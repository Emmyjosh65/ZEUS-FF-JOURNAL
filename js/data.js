// ========== EVO GUNS DATABASE ==========
const evoGuns = [
  {
    name: 'AK47 — Blue Flame Draco',
    icon: '🔫',
    desc: 'The legendary EVO AK47 skin with dragon-themed fire effects and enhanced damage.',
    price: '₦3,500',
    rating: 5,
    featured: true,
    stats: { damage: '+25%', fireRate: '+15%', range: '+10%', reload: '-10%' },
    news: [
      'Released October 2020 — the very first EVO gun in Free Fire history.',
      'OB34 update increased damage output by 5% making it a top-tier AR.',
      'Blue Flame Draco returned in September 2025 Evo Vault with boosted stats.',
      'Popular in ranked matches due to its high armor penetration.',
      'Featured in multiple Faded Wheel events with exclusive upgrade tokens.'
    ]
  },
  {
    name: 'SCAR — Megalodon Alpha',
    icon: '🔫',
    desc: 'Shark-themed EVO SCAR with aggressive appearance and powerful attributes.',
    price: '₦3,200',
    rating: 5,
    featured: true,
    stats: { damage: '+20%', fireRate: '+20%', stability: '+15%' },
    news: [
      'Released January 2021 — received huge attention for its unique shark design.',
      'Megalodon Alpha has distinctive hit effects and kill feed animations.',
      'Returned in Evo Vault September 2025 with Rate of Fire ++ bonus.',
      'Often paired with the Megalodon bundle for a complete shark theme.',
      'Considered one of the most visually impressive EVO skins in FF.'
    ]
  },
  {
    name: 'MP40 — Predatory Cobra',
    icon: '🔫',
    desc: 'Deadly SMG EVO skin with cobra-themed effects and devastating damage.',
    price: '₦2,800',
    rating: 5,
    featured: true,
    stats: { damage: '+22%', fireRate: '+18%', mobility: '+12%' },
    news: [
      'The Predatory Cobra is the most popular EVO SMG skin in Free Fire.',
      'Known for aggressive snake-themed visual effects on the battlefield.',
      'OB42 update gave it a significant damage boost for close quarters.',
      'Featured in the January 2025 Evo Vault as MP40 Chromasonic variant.',
      'Dominates close-range combat with insane fire rate and mobility.'
    ]
  },
  {
    name: 'XM8 — Destiny Guardian',
    icon: '🔫',
    desc: 'The most powerful XM8 EVO skin with guardian-themed protection effects.',
    price: '₦3,000',
    rating: 4,
    featured: true,
    stats: { damage: '+28%', fireRate: '+12%', accuracy: '+18%' },
    news: [
      'Destiny Guardian is the strongest EVO XM8 skin available in FF.',
      'OB38 patch increased its damage output making it a top-tier weapon.',
      'Returned in multiple Evo Vault events with upgrade token bundles.',
      'Features unique guardian angel visual effects on kills and headshots.',
      'Highly recommended for players preferring mid-to-long range combat.'
    ]
  },
  {
    name: 'M4A1 — Griffin\'s Fury',
    icon: '🔫',
    desc: 'Mythical griffin-themed EVO M4A1 with powerful bird effects.',
    price: '₦3,300',
    rating: 5,
    featured: true,
    stats: { accuracy: '+22%', stability: '+20%', damage: '+15%' },
    news: [
      'Griffin\'s Fury brought mythical bird effects to the M4A1 platform.',
      'OB40 update gave it improved accuracy making it a laser beam weapon.',
      'Featured in the Mythology-themed event with exclusive tokens.',
      'The kill effect shows a majestic griffin soaring from defeated enemies.',
      'One of the most accurate EVO weapons in Free Fire history.'
    ]
  },
  {
    name: 'UMP — Booyah Day 2021',
    icon: '🔫',
    desc: 'Celebration-themed UMP EVO skin from Booyah Day event.',
    price: '₦2,500',
    rating: 4,
    featured: false,
    stats: { damage: '+18%', fireRate: '+15%', magazine: '+8' },
    news: [
      'Released during Free Fire\'s anniversary Booyah Day celebrations.',
      'OB35 update balanced the UMP making this skin highly competitive.',
      'Returned in Evo Vault September 2025 with Damage ++ stats.',
      'Features festive particle effects and unique kill animations.',
      'Affordable EVO option for players who prefer SMG gameplay.'
    ]
  },
  {
    name: 'M1014 — Green Flame Draco',
    icon: '🔫',
    desc: 'The second Flame Draco EVO — a devastating shotgun with green flames.',
    price: '₦2,900',
    rating: 4,
    featured: false,
    stats: { damage: '+30%', spread: '-15%', range: '+12%' },
    news: [
      'Released May 2021 as Free Fire\'s fifth evolutionary weapon skin.',
      'Green Flame Draco brought fiery dragon effects to shotguns.',
      'OB39 update increased its one-shot kill potential dramatically.',
      'Part of the original Flame Draco collection alongside the AK version.',
      'Dominates in Clash Squad mode with its high burst damage.'
    ]
  },
  {
    name: 'FAMAS — Demonic Grin',
    icon: '🔫',
    desc: 'Deadly burst-fire rifle EVO with demonic themed animations.',
    price: '₦3,100',
    rating: 4,
    featured: false,
    stats: { burstSpeed: '+25%', damage: '+20%', accuracy: '+12%' },
    news: [
      'Demonic Grin brought evil-themed animations to the burst rifle.',
      'OB41 update improved burst speed making it deadly in skilled hands.',
      'Features unique demonic grin kill feed and hit effects.',
      'Popular among competitive players for its high skill ceiling.',
      'Requires precise aim but rewards with devastating burst damage.'
    ]
  },
  {
    name: 'Thompson — Cindered Colossus',
    icon: '🔫',
    desc: 'Massive Thompson SMG EVO with volcanic fire and colossus effects.',
    price: '₦2,700',
    rating: 4,
    featured: false,
    stats: { magazine: '+15', damage: '+18%', fireRate: '+12%' },
    news: [
      'Cindered Colossus features volcanic fire effects on a heavy SMG.',
      'OB36 update increased magazine capacity making it a bullet hose.',
      'Part of the January 2025 Evo Vault with exclusive tokens.',
      'Excellent for supp// ========== EVO GUNS DATABASE ==========
const evoGuns = [
  {
    name: 'AK47 — Blue Flame Draco',
    icon: '🔫',
    desc: 'The legendary EVO AK47 skin with dragon-themed fire effects and enhanced damage.',
    price: '₦3,500',
    rating: 5,
    featured: true,
    stats: { damage: '+25%', fireRate: '+15%', range: '+10%', reload: '-10%' },
    news: [
      'Released October 2020 as the very first EVO gun in Free Fire history.',
      'OB34 update increased damage output by 5% making it a top-tier AR.',
      'Returned in September 2025 Evo Vault with boosted stats and new tokens.',
      'Popular in ranked matches due to its high armor penetration abilities.',
      'Featured in multiple Faded Wheel events with exclusive upgrade tokens.'
    ]
  },
  {
    name: 'SCAR — Megalodon Alpha',
    icon: '🔫',
    desc: 'Shark-themed EVO SCAR with aggressive appearance and powerful attributes.',
    price: '₦3,200',
    rating: 5,
    featured: true,
    stats: { damage: '+20%', fireRate: '+20%', stability: '+15%' },
    news: [
      'Released January 2021 and received huge attention for its shark design.',
      'Megalodon Alpha has distinctive hit effects and unique kill feed animations.',
      'Returned in Evo Vault September 2025 with Rate of Fire ++ bonus.',
      'Often paired with the Megalodon bundle for a complete shark theme.',
      'Considered one of the most visually impressive EVO skins in FF.'
    ]
  },
  {
    name: 'MP40 — Predatory Cobra',
    icon: '🔫',
    desc: 'Deadly SMG EVO skin with cobra-themed effects and devastating damage.',
    price: '₦2,800',
    rating: 5,
    featured: true,
    stats: { damage: '+22%', fireRate: '+18%', mobility: '+12%' },
    news: [
      'The Predatory Cobra is the most popular EVO SMG skin in Free Fire.',
      'Known for aggressive snake-themed visual effects on the battlefield.',
      'OB42 update gave it a significant damage boost for close quarters combat.',
      'Featured in the January 2025 Evo Vault as MP40 Chromasonic variant.',
      'Dominates close-range combat with insane fire rate and mobility boost.'
    ]
  },
  {
    name: 'XM8 — Destiny Guardian',
    icon: '🔫',
    desc: 'The most powerful XM8 EVO skin with guardian-themed protection effects.',
    price: '₦3,000',
    rating: 4,
    featured: true,
    stats: { damage: '+28%', fireRate: '+12%', accuracy: '+18%' },
    news: [
      'Destiny Guardian is the strongest EVO XM8 skin available in Free Fire.',
      'OB38 patch increased its damage output making it a top-tier weapon choice.',
      'Returned in multiple Evo Vault events with upgrade token bundles.',
      'Features unique guardian angel visual effects on kills and headshots.',
      'Highly recommended for players preferring mid-to-long range combat.'
    ]
  },
  {
    name: 'M4A1 — Griffin\'s Fury',
    icon: '🔫',
    desc: 'Mythical griffin-themed EVO M4A1 with powerful bird effects.',
    price: '₦3,300',
    rating: 5,
    featured: true,
    stats: { accuracy: '+22%', stability: '+20%', damage: '+15%' },
    news: [
      'Griffin\'s Fury brought mythical bird effects to the M4A1 platform.',
      'OB40 update gave it improved accuracy making it a laser beam weapon.',
      'Featured in the Mythology-themed event with exclusive upgrade tokens.',
      'The kill effect shows a majestic griffin soaring from defeated enemies.',
      'One of the most accurate EVO weapons in Free Fire history ever created.'
    ]
  },
  {
    name: 'UMP — Booyah Day 2021',
    icon: '🔫',
    desc: 'Celebration-themed UMP EVO skin from Booyah Day anniversary event.',
    price: '₦2,500',
    rating: 4,
    featured: false,
    stats: { damage: '+18%', fireRate: '+15%', magazine: '+8' },
    news: [
      'Released during Free Fire\'s anniversary Booyah Day celebrations worldwide.',
      'OB35 update balanced the UMP making this skin highly competitive in rank.',
      'Returned in Evo Vault September 2025 with Damage ++ stat bonuses.',
      'Features festive particle effects and unique kill animations on use.',
      'Affordable EVO option for players who prefer SMG gameplay style.'
    ]
  },
  {
    name: 'M1014 — Green Flame Draco',
    icon: '🔫',
    desc: 'The second Flame Draco EVO — a devastating shotgun with green flames.',
    price: '₦2,900',
    rating: 4,
    featured: false,
    stats: { damage: '+30%', spread: '-15%', range: '+12%' },
    news: [
      'Released May 2021 as Free Fire\'s fifth evolutionary weapon skin overall.',
      'Green Flame Draco brought fiery dragon effects to the shotgun category.',
      'OB39 update increased its one-shot kill potential dramatically in close range.',
      'Part of the original Flame Draco collection alongside the AK version.',
      'Dominates in Clash Squad mode with its high burst damage output.'
    ]
  },
  {
    name: 'FAMAS — Demonic Grin',
    icon: '🔫',
    desc: 'Deadly burst-fire rifle EVO with demonic themed animations and effects.',
    price: '₦3,100',
    rating: 4,
    featured: false,
    stats: { burstSpeed: '+25%', damage: '+20%', accuracy: '+12%' },
    news: [
      'Demonic Grin brought evil-themed animations to the burst rifle platform.',
      'OB41 update improved burst speed making it deadly in skilled hands only.',
      'Features unique demonic grin kill feed and hit effects on each kill.',
      'Popular among competitive players for its high skill ceiling potential.',
      'Requires precise aim but rewards with devastating burst damage output.'
    ]
  },
  {
    name: 'Thompson — Cindered Colossus',
    icon: '🔫',
    desc: 'Massive Thompson SMG EVO with volcanic fire and colossus effects.',
    price: '₦2,700',
    rating: 4,
    featured: false,
    stats: { magazine: '+15', damage: '+18%', fireRate: '+12%' },
    news: [
      'Cindered Colossus features volcanic fire effects on a heavy SMG platform.',
      'OB36 update increased magazine capacity making it a bullet hose weapon.',
      'Part of the January 2025 Evo Vault with exclusive token upgrade crates.',
      'Excellent for suppressive fire and extended engagements without reloading.',
      'The volcanic eruption kill effect is one of the most visual in the game.'
    ]
  },
  {
    name: 'AN94 — Evil Howler',
    icon: '🔫',
    desc: 'EVO AN94 with howling wolf effects and high damage per shot.',
    price: '₦3,400',
    rating: 4,
    featured: false,
    stats: { damage: '+24%', range: '+18%', accuracy: '+14%' },
    news: [
      'Evil Howler brought wolf-themed howling effects to the AN94 platform.',
      'Known for its high damage per shot making it a marksman rifle alternative.',
      'OB43 update increased its range making it viable for long-range fights.',
      'The howling wolf kill effect is visually stunning and intimidating online.',
      'Gaining popularity among competitive Free Fire players worldwide.'
    ]
  },
  {
    name: 'MP5 — Platinum Divinity',
    icon: '🔫',
    desc: 'Smooth and elegant MP5 EVO with platinum divine effects.',
    price: '₦2,600',
    rating: 4,
    featured: false,
    stats: { fireRate: '+22%', mobility: '+18%', accuracy: '+10%' },
    news: [
      'Platinum Divinity features smooth elegant effects on the MP5 SMG.',
      'OB37 update gave it improved mobility making it great for rushers.',
      'The platinum divine theme matches many premium character bundles.',
      'Excellent for aggressive close-quarter combat and fast-paced gameplay.',
      'One of the smoothest SMG EVO skins with minimal visual clutter overall.'
    ]
  },
  {
    name: 'M1887 — Sterling Conqueror',
    icon: '🔫',
    desc: 'Premium EVO M1887 shotgun with conquering royal effects.',
    price: '₦3,200',
    rating: 5,
    featured: false,
    stats: { damage: '+35%', range: '+15%', reload: '-20%' },
    news: [
      'Sterling Conqueror brought royal conquering themes to the M1887 shotgun.',
      'OB44 update made it one of the most powerful shotguns in Free Fire.',
      'Features unique crown kill effect and golden particle trails on shots.',
      'Highly sought after in the Evo Vault events for its devastating power.',
      'One-shot potential is among the highest of any shotgun EVO skin made.'
    ]
  },
  {
    name: 'Vector — Aquablaze Wrath',
    icon: '🔫',
    desc: 'Dual Vector EVO skin with water-fire mixed elemental effects.',
    price: '₦2,900',
    rating: 4,
    featured: false,
    stats: { fireRate: '+30%', mobility: '+15%', reload: '-15%' },
    news: [
      'Aquablaze Wrath features unique water and fire mixed elemental effects.',
      'The dual Vector concept brings a fresh visual approach to EVO weapons.',
      'OB40 update increased fire rate making it the fastest firing SMG in FF.',
      'Popular in Clash Squad for its insane close-range time-to-kill speed.',
      'The elemental kill effects change between water and fire randomly.'
    ]
  },
  {
    name: 'Woodpecker — Majestic Prowler',
    icon: '🔫',
    desc: 'EVO marksman rifle with prowling predator effects and precision.',
    price: '₦3,600',
    rating: 5,
    featured: true,
    stats: { damage: '+30%', range: '+22%', accuracy: '+20%' },
    news: [
      'Majestic Prowler brought predator hunting themes to the Woodpecker gun.',
      'The most expensive EVO marksman rifle with incredible precision stats.',
      'OB45 update made it a two-shot kill to the body at any range possible.',
      'Features unique prowler paw print kill effects and predator growl sounds.',
      'Dominates in long-range engagements and is feared by opponents online.'
    ]
  },
  {
    name: 'GROZA — Bang!',
    icon: '🔫',
    desc: 'Airdrop exclusive EVO GROZA with explosive bang effects.',
    price: '₦4,000',
    rating: 5,
    featured: true,
    stats: { damage: '+32%', fireRate: '+18%', range: '+15%' },
    news: [
      'GROZA Bang! brings explosive comic-style effects to the airdrop rifle.',
      'The most powerful assault rifle EVO available exclusively in airdrops.',
      'OB42 update gave it armor penetration making it deadly against tanks.',
      'Extremely rare and highly coveted by competitive Free Fire players.',
      'The comic-style BANG! kill effect is unique among all EVO weapons.'
    ]
  }
];

// ========== ENTRY ANIMATIONS DATABASE ==========
const entries = [
  {
    name: 'Cyber Onslaught',
    icon: '🤖',
    desc: 'Enter the battlefield with a cybernetic assault animation and holographic effects.',
    price: '₦2,500',
    type: 'Epic',
    featured: true,
    effects: ['Holographic Entrance', 'Energy Waves', 'Digital Particles', 'Cyber Sound FX']
  },
  {
    name: 'Dragon Fury',
    icon: '🐉',
    desc: 'Soar in with dragon fire and fury with legendary dragon wing effects.',
    price: '₦3,500',
    type: 'Legendary',
    featured: true,
    effects: ['Dragon Wings Spread', 'Fire Trail Blaze', 'Roar Sound Effect', 'Ash Cloud Burst']
  },
  {
    name: 'Shadow Strike',
    icon: '👤',
    desc: 'Materialize from the shadows with stealthy ninja-style entry effects.',
    price: '₦2,200',
    type: 'Epic',
    featured: true,
    effects: ['Shadow Formation', 'Smoke Burst Exit', 'Stealth Glow Aura', 'Ninja Footsteps']
  },
  {
    name: 'Golden Emperor',
    icon: '👑',
    desc: 'Enter like royalty with golden flares and royal crown entrance effects.',
    price: '₦4,000',
    type: 'Legendary',
    featured: true,
    effects: ['Golden Sparkle Trail', 'Royal Banner Drop', 'Crown Flare Burst', 'Trumpet Sound FX']
  },
  {
    name: 'Neon Rush',
    icon: '💠',
    desc: 'Blast in with neon energy trails and colorful light burst effects.',
    price: '₦2,800',
    type: 'Epic',
    featured: false,
    effects: ['Neon Light Trail', 'Color Shift Aura', 'Light Burst Explosion', 'Synth Wave Sound']
  },
  {
    name: 'Thunder God',
    icon: '⚡',
    desc: 'Descend with lightning strikes and thunder clap with storm effects.',
    price: '₦4,500',
    type: 'Legendary',
    featured: true,
    effects: ['Lightning Strike Down', 'Thunder Clap Wave', 'Storm Cloud Formation', 'Rain Particle Effect']
  },
  {
    name: 'Phantom Walk',
    icon: '👻',
    desc: 'Phase through dimensions with ghostly phantom walk entry animation.',
    price: '₦3,000',
    type: 'Epic',
    featured: false,
    effects: ['Phase Shift Effect', 'Ghost Trail Afterimage', 'Dimension Rift Portal', 'Ethereal Sound']
  },
  {
    name: 'Firestorm',
    icon: '🔥',
    desc: 'Explode onto the battlefield with massive firestorm and heat wave effects.',
    price: '₦3,800',
    type: 'Legendary',
    featured: false,
    effects: ['Fire Explosion Burst', 'Ash Rain Falling', 'Heat Wave Distortion', 'Crackling Fire Sound']
  },
  {
    name: 'Ice Emperor',
    icon: '❄️',
    desc: 'Freeze the ground as you enter with arctic emperor ice effects.',
    price: '₦3,600',
    type: 'Legendary',
    featured: false,
    effects: ['Ice Shatter Break', 'Snow Storm Swirl', 'Frost Trail Freeze', 'Crystal Sound FX']
  },
  {
    name: 'Space Walker',
    icon: '🌌',
    desc: 'Teleport in from outer space with cosmic wormhole entrance effects.',
    price: '₦4,800',
    type: 'Mythic',
    featured: true,
    effects: ['Wormhole Portal', 'Star Burst Explosion', 'Gravity Distortion', 'Cosmic Ambient Sound']
  },
  {
    name: 'Demon Lord',
    icon: '👿',
    desc: 'Rise from the underworld with demonic power and hellfire effects.',
    price: '₦5,000',
    type: 'Mythic',
    featured: true,
    effects: ['Demonic Wings Spread', 'Hellfire Eruption', 'Soul Drain Aura', 'Demonic Roar Sound']
  },
  {
    name: 'Angel Wings',
    icon: '👼',
    desc: 'Descend with holy light and angelic grace with divine effects.',
    price: '₦3,500',
    type: 'Legendary',
    featured: false,
    effects: ['Feather Fall Gently', 'Holy Light Beam', 'Divine Aura Glow', 'Celestial Choir Sound']
  },
  {
    name: 'Ninja Dash',
    icon: '🥷',
    desc: 'Perform a ninja-style stealth entrance with smoke bomb effects.',
    price: '₦2,000',
    type: 'Epic',
    featured: false,
    effects: ['Smoke Bomb Explosion', 'Shuriken Spin Trail', 'Speed Dash Afterimage', 'Wind Rush Sound']
  },
  {
    name: 'Galaxy Burst',
    icon: '🌠',
    desc: 'Explode with cosmic energy on arrival with galaxy swirl effects.',
    price: '₦4,200',
    type: 'Mythic',
    featured: true,
    effects: ['Galaxy Swirl Portal', 'Nova Burst Explosion', 'Cosmic Dust Trail', 'Stellar Sound FX']
  },
  {
    name: 'Ghost Rider',
    icon: '🏍️',
    desc: 'Ride in on a spectral motorcycle with flame trail effects.',
    price: '₦3,900',
    type: 'Legendary',
    featured: false,
    effects: ['Motorcycle Drift In', 'Flame Trail Burn', 'Ghost Wheel Spin', 'Engine Rev Sound']
  }
];

// ========== STORE ITEMS ==========
const storeItems = [
  { name: 'EVO Gun Setup — Premium', desc: 'Custom EVO weapon setup with sensitivity tuning for your chosen gun.', price: '₦2,500', icon: '🔫' },
  { name: 'Entry Animation Setup', desc: 'Custom entry animation configuration with effects matching your style.', price: '₦3,000', icon: '🎬' },
  { name: 'Sensitivity Setup — Pro', desc: 'Custom sensitivity settings optimized for your specific device model.', price: '₦1,500', icon: '🎯' },
  { name: 'HUD Layout Setup', desc: 'Custom HUD layout designed for your gameplay style and device screen.', price: '₦2,000', icon: '🎮' },
  { name: '1-on-1 Coaching Session', desc: 'Personal coaching with ZEUS — learn pro strategies and improve skills.', price: '₦5,000', icon: '📚' },
  { name: 'Full Account Review', desc: 'Complete account analysis with tips to improve your gameplay performance.', price: '₦3,500', icon: '📊' },
  { name: 'Tournament Registration', desc: 'Register for Free Fire tournaments organized by ZEUS FF community.', price: '₦1,000', icon: '🏆' },
  { name: 'Redeem Code Request', desc: 'Request working redeem codes for Free Fire rewards and items.', price: '₦500', icon: '🎁' }
];// ========== DEVICE DATABASE (100+ phones) ==========
const deviceDB = [
  // === APPLE iPhones ===
  { name: 'iPhone 15 Pro Max', brand: 'Apple', chipset: 'A17 Pro', ram: '8GB', display: '6.7" Super Retina XDR OLED', os: 'iOS 17', gpu: 'Apple GPU (6-core)', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'iPhone 15 Pro', brand: 'Apple', chipset: 'A17 Pro', ram: '8GB', display: '6.1" Super Retina XDR OLED', os: 'iOS 17', gpu: 'Apple GPU (6-core)', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'iPhone 15 Plus', brand: 'Apple', chipset: 'A16 Bionic', ram: '6GB', display: '6.7" Super Retina XDR OLED', os: 'iOS 17', gpu: 'Apple GPU (5-core)', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'iPhone 15', brand: 'Apple', chipset: 'A16 Bionic', ram: '6GB', display: '6.1" Super Retina XDR OLED', os: 'iOS 17', gpu: 'Apple GPU (5-core)', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'iPhone 14 Pro Max', brand: 'Apple', chipset: 'A16 Bionic', ram: '6GB', display: '6.7" Super Retina XDR OLED', os: 'iOS 16', gpu: 'Apple GPU (5-core)', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'iPhone 14 Pro', brand: 'Apple', chipset: 'A16 Bionic', ram: '6GB', display: '6.1" Super Retina XDR OLED', os: 'iOS 16', gpu: 'Apple GPU (5-core)', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'iPhone 14', brand: 'Apple', chipset: 'A15 Bionic', ram: '6GB', display: '6.1" Super Retina XDR OLED', os: 'iOS 16', gpu: 'Apple GPU (4-core)', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'iPhone 13 Pro Max', brand: 'Apple', chipset: 'A15 Bionic', ram: '6GB', display: '6.7" Super Retina XDR OLED', os: 'iOS 15', gpu: 'Apple GPU (5-core)', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'iPhone 13', brand: 'Apple', chipset: 'A15 Bionic', ram: '4GB', display: '6.1" Super Retina XDR OLED', os: 'iOS 15', gpu: 'Apple GPU (4-core)', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'iPhone 12 Pro Max', brand: 'Apple', chipset: 'A14 Bionic', ram: '6GB', display: '6.7" Super Retina XDR OLED', os: 'iOS 14', gpu: 'Apple GPU (4-core)', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'iPhone 12', brand: 'Apple', chipset: 'A14 Bionic', ram: '4GB', display: '6.1" Super Retina XDR OLED', os: 'iOS 14', gpu: 'Apple GPU (4-core)', tier: 'high', rating: '8/10', graphics: 'High', fps: '60' },
  { name: 'iPhone SE (3rd Gen)', brand: 'Apple', chipset: 'A15 Bionic', ram: '4GB', display: '4.7" Retina IPS LCD', os: 'iOS 15', gpu: 'Apple GPU (4-core)', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'iPhone 11 Pro Max', brand: 'Apple', chipset: 'A13 Bionic', ram: '4GB', display: '6.5" Super Retina XDR OLED', os: 'iOS 13', gpu: 'Apple GPU (4-core)', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'iPhone 11', brand: 'Apple', chipset: 'A13 Bionic', ram: '4GB', display: '6.1" Liquid Retina LCD', os: 'iOS 13', gpu: 'Apple GPU (4-core)', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },

  // === SAMSUNG Galaxy ===
  { name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', chipset: 'Snapdragon 8 Gen 3', ram: '12GB', display: '6.8" Dynamic AMOLED 2X', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Samsung Galaxy S24+', brand: 'Samsung', chipset: 'Exynos 2400 / SD 8 Gen 3', ram: '8GB', display: '6.7" Dynamic AMOLED 2X', os: 'Android 14', gpu: 'Xclipse 940 / Adreno 750', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Samsung Galaxy S24', brand: 'Samsung', chipset: 'Exynos 2400 / SD 8 Gen 3', ram: '8GB', display: '6.2" Dynamic AMOLED 2X', os: 'Android 14', gpu: 'Xclipse 940 / Adreno 750', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Samsung Galaxy S23 Ultra', brand: 'Samsung', chipset: 'Snapdragon 8 Gen 2', ram: '8GB/12GB', display: '6.8" Dynamic AMOLED 2X', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Samsung Galaxy S23+', brand: 'Samsung', chipset: 'Snapdragon 8 Gen 2', ram: '8GB', display: '6.6" Dynamic AMOLED 2X', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Samsung Galaxy S23', brand: 'Samsung', chipset: 'Snapdragon 8 Gen 2', ram: '8GB', display: '6.1" Dynamic AMOLED 2X', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Samsung Galaxy S22 Ultra', brand: 'Samsung', chipset: 'Exynos 2200 / SD 8 Gen 1', ram: '8GB/12GB', display: '6.8" Dynamic AMOLED 2X', os: 'Android 12', gpu: 'Xclipse 920 / Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Samsung Galaxy S22', brand: 'Samsung', chipset: 'Exynos 2200 / SD 8 Gen 1', ram: '8GB', display: '6.1" Dynamic AMOLED 2X', os: 'Android 12', gpu: 'Xclipse 920 / Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Samsung Galaxy S21 Ultra', brand: 'Samsung', chipset: 'Exynos 2100 / SD 888', ram: '12GB', display: '6.8" Dynamic AMOLED 2X', os: 'Android 11', gpu: 'Mali-G78 / Adreno 660', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Samsung Galaxy S21', brand: 'Samsung', chipset: 'Exynos 2100 / SD 888', ram: '8GB', display: '6.2" Dynamic AMOLED 2X', os: 'Android 11', gpu: 'Mali-G78 / Adreno 660', tier: 'high', rating: '8/10', graphics: 'High', fps: '60' },
  { name: 'Samsung Galaxy S20 Ultra', brand: 'Samsung', chipset: 'Exynos 990 / SD 865', ram: '12GB', display: '6.9" Dynamic AMOLED 2X', os: 'Android 10', gpu: 'Mali-G77 / Adreno 650', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'Samsung Galaxy S20 FE', brand: 'Samsung', chipset: 'Exynos 990 / SD 865', ram: '6GB/8GB', display: '6.5" Super AMOLED', os: 'Android 10', gpu: 'Mali-G77 / Adreno 650', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'Samsung Galaxy Note 20 Ultra', brand: 'Samsung', chipset: 'Exynos 990 / SD 865+', ram: '12GB', display: '6.9" Dynamic AMOLED 2X', os: 'Android 10', gpu: 'Mali-G77 / Adreno 650', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'Samsung Galaxy A54', brand: 'Samsung', chipset: 'Exynos 1380', ram: '6GB/8GB', display: '6.4" Super AMOLED', os: 'Android 13', gpu: 'Mali-G68 MP5', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Samsung Galaxy A53', brand: 'Samsung', chipset: 'Exynos 1280', ram: '6GB/8GB', display: '6.5" Super AMOLED', os: 'Android 12', gpu: 'Mali-G68', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Samsung Galaxy A34', brand: 'Samsung', chipset: 'Dimensity 1080', ram: '6GB/8GB', display: '6.6" Super AMOLED', os: 'Android 13', gpu: 'Mali-G68', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Samsung Galaxy A33', brand: 'Samsung', chipset: 'Exynos 1280', ram: '6GB/8GB', display: '6.4" Super AMOLED', os: 'Android 12', gpu: 'Mali-G68', tier: 'mid', rating: '5/10', graphics: 'Medium', fps: '60' },
  { name: 'Samsung Galaxy A14', brand: 'Samsung', chipset: 'Mediatek Helio G80', ram: '4GB/6GB', display: '6.6" PLS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Samsung Galaxy A04', brand: 'Samsung', chipset: 'Mediatek Helio P35', ram: '3GB/4GB', display: '6.5" PLS LCD', os: 'Android 12', gpu: 'PowerVR GE8320', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },
  { name: 'Samsung Galaxy M34', brand: 'Samsung', chipset: 'Exynos 1280', ram: '6GB/8GB', display: '6.5" Super AMOLED', os: 'Android 13', gpu: 'Mali-G68', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Samsung Galaxy M14', brand: 'Samsung', chipset: 'Exynos 1330', ram: '4GB/6GB', display: '6.6" PLS LCD', os: 'Android 13', gpu: 'Mali-G68', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Samsung Galaxy Z Fold 5', brand: 'Samsung', chipset: 'Snapdragon 8 Gen 2', ram: '12GB', display: '7.6" Dynamic AMOLED 2X', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Samsung Galaxy Z Flip 5', brand: 'Samsung', chipset: 'Snapdragon 8 Gen 2', ram: '8GB', display: '6.7" Dynamic AMOLED 2X', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },

  // === GOOGLE PIXEL ===
  { name: 'Google Pixel 8 Pro', brand: 'Google', chipset: 'Tensor G3', ram: '12GB', display: '6.7" LTPO OLED', os: 'Android 14', gpu: 'Mali-G715', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Google Pixel 8', brand: 'Google', chipset: 'Tensor G3', ram: '8GB', display: '6.2" OLED', os: 'Android 14', gpu: 'Mali-G715', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Google Pixel 7 Pro', brand: 'Google', chipset: 'Tensor G2', ram: '12GB', display: '6.7" LTPO OLED', os: 'Android 13', gpu: 'Mali-G710', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Google Pixel 7', brand: 'Google', chipset: 'Tensor G2', ram: '8GB', display: '6.3" OLED', os: 'Android 13', gpu: 'Mali-G710', tier: 'high', rating: '8/10', graphics: 'High', fps: '60' },
  { name: 'Google Pixel 6 Pro', brand: 'Google', chipset: 'Tensor', ram: '12GB', display: '6.71" LTPO OLED', os: 'Android 12', gpu: 'Mali-G78', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'Google Pixel 6', brand: 'Google', chipset: 'Tensor', ram: '8GB', display: '6.4" OLED', os: 'Android 12', gpu: 'Mali-G78', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'Google Pixel 6a', brand: 'Google', chipset: 'Tensor', ram: '6GB', display: '6.1" OLED', os: 'Android 12', gpu: 'Mali-G78', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'Google Pixel 5', brand: 'Google', chipset: 'Snapdragon 765G', ram: '8GB', display: '6.0" OLED', os: 'Android 11', gpu: 'Adreno 620', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },

  // === XIAOMI & REDMI ===
  { name: 'Xiaomi 14 Pro', brand: 'Xiaomi', chipset: 'Snapdragon 8 Gen 3', ram: '12GB/16GB', display: '6.73" LTPO AMOLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Xiaomi 14', brand: 'Xiaomi', chipset: 'Snapdragon 8 Gen 3', ram: '12GB', display: '6.36" LTPO AMOLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Xiaomi 13 Pro', brand: 'Xiaomi', chipset: 'Snapdragon 8 Gen 2', ram: '8GB/12GB', display: '6.73" LTPO AMOLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Xiaomi 13', brand: 'Xiaomi', chipset: 'Snapdragon 8 Gen 2', ram: '8GB/12GB', display: '6.36" AMOLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Xiaomi 13T Pro', brand: 'Xiaomi', chipset: 'Dimensity 9200+', ram: '12GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Mali-G715', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Xiaomi 12 Pro', brand: 'Xiaomi', chipset: 'Snapdragon 8 Gen 1', ram: '8GB/12GB', display: '6.73" LTPO AMOLED', os: 'Android 12', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Xiaomi 12', brand: 'Xiaomi', chipset: 'Snapdragon 8 Gen 1', ram: '8GB/12GB', display: '6.28" AMOLED', os: 'Android 12', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Redmi Note 13 Pro+', brand: 'Redmi', chipset: 'Dimensity 7200 Ultra', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Mali-G610', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Redmi Note 13 Pro', brand: 'Redmi', chipset: 'Snapdragon 7s Gen 2', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Adreno 710', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'Redmi Note 13', brand: 'Redmi', chipset: 'Dimensity 6080', ram: '6GB/8GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Redmi Note 12 Pro+', brand: 'Redmi', chipset: 'Dimensity 1080', ram: '6GB/8GB', display: '6.67" AMOLED', os: 'Android 12', gpu: 'Mali-G68', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Redmi Note 12 Pro', brand: 'Redmi', chipset: 'Dimensity 1080', ram: '6GB/8GB', display: '6.67" AMOLED', os: 'Android 12', gpu: 'Mali-G68', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Redmi Note 12', brand: 'Redmi', chipset: 'Snapdragon 685/4 Gen 1', ram: '4GB/6GB/8GB', display: '6.67" AMOLED', os: 'Android 12', gpu: 'Adreno 610', tier: 'budget', rating: '5/10', graphics: 'Smooth', fps: '60' },
  { name: 'Redmi Note 11 Pro', brand: 'Redmi', chipset: 'Helio G96', ram: '6GB/8GB', display: '6.67" AMOLED', os: 'Android 11', gpu: 'Mali-G57', tier: 'mid', rating: '5/10', graphics: 'Medium', fps: '60' },
  { name: 'Redmi Note 11', brand: 'Redmi', chipset: 'Snapdragon 680', ram: '4GB/6GB', display: '6.43" AMOLED', os: 'Android 11', gpu: 'Adreno 610', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Redmi 12', brand: 'Redmi', chipset: 'Helio G88', ram: '4GB/6GB/8GB', display: '6.79" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Redmi 10', brand: 'Redmi', chipset: 'Helio G88', ram: '4GB/6GB', display: '6.5" IPS LCD', os: 'Android 11', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Redmi 9', brand: 'Redmi', chipset: 'Helio G80', ram: '3GB/4GB', display: '6.53" IPS LCD', os: 'Android 10', gpu: 'Mali-G52', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },

  // === POCO ===
  { name: 'POCO F6', brand: 'POCO', chipset: 'Snapdragon 8s Gen 3', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 14', gpu: 'Adreno 735', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'POCO F5 Pro', brand: 'POCO', chipset: 'Snapdragon 8+ Gen 1', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'POCO F5', brand: 'POCO', chipset: 'Snapdragon 7+ Gen 2', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Adreno 725', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'POCO X6 Pro', brand: 'POCO', chipset: 'Dimensity 8300 Ultra', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 14', gpu: 'Mali-G615', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'POCO X6', brand: 'POCO', chipset: 'Snapdragon 7s Gen 2', ram: '8GB/12GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Adreno 710', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'POCO X5 Pro', brand: 'POCO', chipset: 'Snapdragon 778G', ram: '6GB/8GB', display: '6.67" AMOLED', os: 'Android 12', gpu: 'Adreno 642L', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'POCO M6 Pro', brand: 'POCO', chipset: 'Helio G99', ram: '6GB/8GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'POCO M5', brand: 'POCO', chipset: 'Helio G99', ram: '4GB/6GB', display: '6.58" IPS LCD', os: 'Android 12', gpu: 'Mali-G57', tier: 'budget', rating: '5/10', graphics: 'Smooth', fps: '60' },
  { name: 'POCO C65', brand: 'POCO', chipset: 'Helio G85', ram: '4GB/6GB/8GB', display: '6.74" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },

  // === OPPO ===
  { name: 'OPPO Find X7 Ultra', brand: 'OPPO', chipset: 'Snapdragon 8 Gen 3', ram: '12GB/16GB', display: '6.82" LTPO AMOLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'OPPO Find N3', brand: 'OPPO', chipset: 'Snapdragon 8 Gen 2', ram: '12GB/16GB', display: '7.82" Foldable AMOLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'OPPO Reno 11 Pro', brand: 'OPPO', chipset: 'Snapdragon 8+ Gen 1', ram: '12GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'OPPO Reno 11', brand: 'OPPO', chipset: 'Dimensity 8200', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Mali-G610', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'OPPO Reno 10 Pro+', brand: 'OPPO', chipset: 'Snapdragon 8+ Gen 1', ram: '12GB', display: '6.74" AMOLED', os: 'Android 13', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'OPPO Reno 10 Pro', brand: 'OPPO', chipset: 'Dimensity 8200', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Mali-G610', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'OPPO Reno 10', brand: 'OPPO', chipset: 'Snapdragon 778G', ram: '8GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Adreno 642L', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'OPPO A78', brand: 'OPPO', chipset: 'Helio G85', ram: '4GB/6GB/8GB', display: '6.56" IPS LCD', os: 'Android 12', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'OPPO A58', brand: 'OPPO', chipset: 'Dimensity 700', ram: '4GB/6GB/8GB', display: '6.56" IPS LCD', os: 'Android 12', gpu: 'Mali-G57', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'OPPO A57', brand: 'OPPO', chipset: 'Helio G35', ram: '3GB/4GB', display: '6.56" IPS LCD', os: 'Android 12', gpu: 'PowerVR GE8320', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },
  { name: 'OPPO A17', brand: 'OPPO', chipset: 'Helio G35', ram: '3GB/4GB', display: '6.56" IPS LCD', os: 'Android 12', gpu: 'PowerVR GE8320', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },

  // === VIVO ===
  { name: 'vivo X100 Pro', brand: 'vivo', chipset: 'Dimensity 9300', ram: '12GB/16GB', display: '6.78" LTPO AMOLED', os: 'Android 14', gpu: 'Mali-G720', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'vivo X100', brand: 'vivo', chipset: 'Dimensity 9300', ram: '12GB', display: '6.78" AMOLED', os: 'Android 14', gpu: 'Mali-G720', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'vivo X90 Pro+', brand: 'vivo', chipset: 'Snapdragon 8 Gen 2', ram: '12GB', display: '6.78" AMOLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'vivo V30 Pro', brand: 'vivo', chipset: 'Snapdragon 7 Gen 3', ram: '8GB/12GB', display: '6.78" AMOLED', os: 'Android 14', gpu: 'Adreno 720', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'vivo V30', brand: 'vivo', chipset: 'Snapdragon 7 Gen 3', ram: '8GB/12GB', display: '6.78" AMOLED', os: 'Android 14', gpu: 'Adreno 720', tier: 'high', rating: '7/10', graphics: 'High', fps: '60-90' },
  { name: 'vivo V29 Pro', brand: 'vivo', chipset: 'Dimensity 8200', ram: '8GB/12GB', display: '6.78" AMOLED', os: 'Android 13', gpu: 'Mali-G610', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'vivo V29', brand: 'vivo', chipset: 'Snapdragon 778G', ram: '8GB/12GB', display: '6.78" AMOLED', os: 'Android 13', gpu: 'Adreno 642L', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'vivo Y36', brand: 'vivo', chipset: 'Snapdragon 680', ram: '4GB/6GB/8GB', display: '6.64" IPS LCD', os: 'Android 13', gpu: 'Adreno 610', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'vivo Y22', brand: 'vivo', chipset: 'Helio G85', ram: '4GB/6GB', display: '6.55" IPS LCD', os: 'Android 12', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'vivo Y16', brand: 'vivo', chipset: 'Helio P35', ram: '3GB/4GB', display: '6.51" IPS LCD', os: 'Android 12', gpu: 'PowerVR GE8320', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },

  // === TECNO ===
  { name: 'Tecno Phantom V Fold', brand: 'TECNO', chipset: 'Dimensity 9000+', ram: '12GB', display: '7.85" Foldable LTPO AMOLED', os: 'Android 13', gpu: 'Mali-G710', tier: 'premium', rating: '8/10', graphics: 'Ultra', fps: '60-90' },
  { name: 'Tecno Phantom X2 Pro', brand: 'TECNO', chipset: 'Dimensity 9000', ram: '12GB', display: '6.8" AMOLED', os: 'Android 12', gpu: 'Mali-G710', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Tecno Camon 20 Premier', brand: 'TECNO', chipset: 'Dimensity 1200', ram: '8GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Mali-G77', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'Tecno Camon 20 Pro', brand: 'TECNO', chipset: 'Dimensity 810', ram: '8GB', display: '6.67" AMOLED', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Tecno Camon 20', brand: 'TECNO', chipset: 'Helio G85', ram: '8GB', display: '6.67" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'mid', rating: '5/10', graphics: 'Medium', fps: '60' },
  { name: 'Tecno Spark 20 Pro', brand: 'TECNO', chipset: 'Helio G99', ram: '8GB', display: '6.78" IPS LCD', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Tecno Spark 20', brand: 'TECNO', chipset: 'Helio G85', ram: '8GB', display: '6.73" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '5/10', graphics: 'Smooth', fps: '60' },
  { name: 'Tecno Spark 10 Pro', brand: 'TECNO', chipset: 'Helio G88', ram: '8GB', display: '6.8" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Tecno Spark 10', brand: 'TECNO', chipset: 'Helio G37', ram: '4GB/8GB', display: '6.6" IPS LCD', os: 'Android 12', gpu: 'PowerVR GE8320', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },
  { name: 'Tecno Pop 8', brand: 'TECNO', chipset: 'Helio A22', ram: '2GB/3GB', display: '6.6" IPS LCD', os: 'Android 12', gpu: 'PowerVR GE8300', tier: 'budget', rating: '2/10', graphics: 'Smooth', fps: '30' },

  // === INFINIX ===
  { name: 'Infinix Zero 30 5G', brand: 'Infinix', chipset: 'Dimensity 8020', ram: '8GB/12GB', display: '6.78" AMOLED', os: 'Android 13', gpu: 'Mali-G77', tier: 'high', rating: '7/10', graphics: 'High', fps: '60-90' },
  { name: 'Infinix Zero 30', brand: 'Infinix', chipset: 'Helio G99', ram: '8GB', display: '6.78" AMOLED', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Infinix Note 30 Pro', brand: 'Infinix', chipset: 'Helio G99', ram: '8GB', display: '6.78" IPS LCD', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Infinix Note 30', brand: 'Infinix', chipset: 'Helio G85', ram: '4GB/8GB', display: '6.78" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Infinix Hot 40 Pro', brand: 'Infinix', chipset: 'Helio G99', ram: '8GB', display: '6.78" IPS LCD', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '5/10', graphics: 'Medium', fps: '60' },
  { name: 'Infinix Hot 40', brand: 'Infinix', chipset: 'Helio G88', ram: '8GB', display: '6.78" IPS LCD', os: 'Android 13', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Infinix Smart 8', brand: 'Infinix', chipset: 'Helio G36', ram: '3GB/4GB', display: '6.6" IPS LCD', os: 'Android 12', gpu: 'PowerVR GE8320', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },

  // === HUAWEI ===
  { name: 'Huawei P60 Pro', brand: 'Huawei', chipset: 'Snapdragon 8+ Gen 1', ram: '8GB/12GB', display: '6.67" LTPO OLED', os: 'HarmonyOS 3.1', gpu: 'Adreno 730', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'Huawei P60', brand: 'Huawei', chipset: 'Snapdragon 778G', ram: '8GB', display: '6.67" LTPO OLED', os: 'HarmonyOS 3.1', gpu: 'Adreno 642L', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'Huawei Mate 60 Pro', brand: 'Huawei', chipset: 'Kirin 9000S', ram: '12GB', display: '6.82" LTPO OLED', os: 'HarmonyOS 4', gpu: 'Maleoon 910', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Huawei Mate 50 Pro', brand: 'Huawei', chipset: 'Snapdragon 8+ Gen 1', ram: '8GB', display: '6.74" LTPO OLED', os: 'HarmonyOS 3', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Huawei Nova 11 Pro', brand: 'Huawei', chipset: 'Snapdragon 778G', ram: '8GB', display: '6.78" OLED', os: 'HarmonyOS 3', gpu: 'Adreno 642L', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'Huawei Nova 10', brand: 'Huawei', chipset: 'Snapdragon 778G', ram: '8GB', display: '6.67" OLED', os: 'HarmonyOS 2', gpu: 'Adreno 642L', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Huawei Y6p', brand: 'Huawei', chipset: 'Mediatek Helio P22', ram: '3GB/4GB', display: '6.3" IPS LCD', os: 'Android 10', gpu: 'PowerVR GE8320', tier: 'budget', rating: '2/10', graphics: 'Smooth', fps: '30' },

  // === HONOR ===
  { name: 'Honor Magic6 Pro', brand: 'Honor', chipset: 'Snapdragon 8 Gen 3', ram: '12GB/16GB', display: '6.8" LTPO OLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'Honor 90', brand:{ name: 'Honor 90', brand: 'Honor', chipset: 'Snapdragon 7 Gen 1', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Adreno 644', tier: 'high', rating: '7/10', graphics: 'High', fps: '60-90' },
  { name: 'Honor 70', brand: 'Honor', chipset: 'Snapdragon 778G+', ram: '8GB', display: '6.67" OLED', os: 'Android 12', gpu: 'Adreno 642L', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Honor X8a', brand: 'Honor', chipset: 'Helio G88', ram: '6GB/8GB', display: '6.7" IPS LCD', os: 'Android 12', gpu: 'Mali-G52', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Honor X7', brand: 'Honor', chipset: 'Snapdragon 680', ram: '4GB', display: '6.74" IPS LCD', os: 'Android 12', gpu: 'Adreno 610', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },

  // === ONEPLUS ===
  { name: 'OnePlus 12', brand: 'OnePlus', chipset: 'Snapdragon 8 Gen 3', ram: '12GB/16GB', display: '6.82" LTPO AMOLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'OnePlus 12R', brand: 'OnePlus', chipset: 'Snapdragon 8 Gen 2', ram: '8GB/16GB', display: '6.78" LTPO AMOLED', os: 'Android 14', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'OnePlus 11', brand: 'OnePlus', chipset: 'Snapdragon 8 Gen 2', ram: '8GB/16GB', display: '6.7" LTPO AMOLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90' },
  { name: 'OnePlus 10T', brand: 'OnePlus', chipset: 'Snapdragon 8+ Gen 1', ram: '8GB/16GB', display: '6.7" AMOLED', os: 'Android 12', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'OnePlus Nord 3', brand: 'OnePlus', chipset: 'Dimensity 9000', ram: '8GB/16GB', display: '6.74" AMOLED', os: 'Android 13', gpu: 'Mali-G710', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'OnePlus Nord CE 3', brand: 'OnePlus', chipset: 'Snapdragon 782G', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Adreno 642L', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'OnePlus Nord 2T', brand: 'OnePlus', chipset: 'Dimensity 1300', ram: '8GB', display: '6.43" AMOLED', os: 'Android 12', gpu: 'Mali-G77', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'OnePlus 9 Pro', brand: 'OnePlus', chipset: 'Snapdragon 888', ram: '8GB/12GB', display: '6.7" LTPO AMOLED', os: 'Android 11', gpu: 'Adreno 660', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'OnePlus 9', brand: 'OnePlus', chipset: 'Snapdragon 888', ram: '8GB/12GB', display: '6.55" AMOLED', os: 'Android 11', gpu: 'Adreno 660', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'OnePlus 8 Pro', brand: 'OnePlus', chipset: 'Snapdragon 865', ram: '8GB/12GB', display: '6.78" AMOLED', os: 'Android 10', gpu: 'Adreno 650', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },

  // === ASUS ROG ===
  { name: 'ROG Phone 8 Pro', brand: 'ASUS', chipset: 'Snapdragon 8 Gen 3', ram: '16GB/24GB', display: '6.78" AMOLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '120-144' },
  { name: 'ROG Phone 7 Ultimate', brand: 'ASUS', chipset: 'Snapdragon 8 Gen 2', ram: '16GB', display: '6.78" AMOLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'premium', rating: '10/10', graphics: 'Ultra', fps: '120-144' },
  { name: 'ROG Phone 6 Pro', brand: 'ASUS', chipset: 'Snapdragon 8+ Gen 1', ram: '12GB/16GB', display: '6.78" AMOLED', os: 'Android 12', gpu: 'Adreno 730', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'ROG Phone 6', brand: 'ASUS', chipset: 'Snapdragon 8+ Gen 1', ram: '8GB/12GB/16GB', display: '6.78" AMOLED', os: 'Android 12', gpu: 'Adreno 730', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },

  // === MOTOROLA ===
  { name: 'Motorola Edge 50 Pro', brand: 'Motorola', chipset: 'Snapdragon 7 Gen 3', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 14', gpu: 'Adreno 720', tier: 'high', rating: '7/10', graphics: 'High', fps: '60-90' },
  { name: 'Motorola Edge 40 Pro', brand: 'Motorola', chipset: 'Snapdragon 8 Gen 2', ram: '12GB', display: '6.67" OLED', os: 'Android 13', gpu: 'Adreno 740', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'Motorola Edge 30', brand: 'Motorola', chipset: 'Snapdragon 778G+', ram: '8GB', display: '6.5" AMOLED', os: 'Android 12', gpu: 'Adreno 642L', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'Motorola Moto G84', brand: 'Motorola', chipset: 'Snapdragon 695', ram: '8GB/12GB', display: '6.55" AMOLED', os: 'Android 13', gpu: 'Adreno 619', tier: 'mid', rating: '5/10', graphics: 'Medium', fps: '60' },
  { name: 'Motorola Moto G54', brand: 'Motorola', chipset: 'Dimensity 7020', ram: '4GB/8GB/12GB', display: '6.5" IPS LCD', os: 'Android 13', gpu: 'IMG BXM-8-256', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'Motorola Moto G14', brand: 'Motorola', chipset: 'Unisoc T616', ram: '4GB', display: '6.5" IPS LCD', os: 'Android 13', gpu: 'Mali-G57', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' },

  // === REALME ===
  { name: 'realme GT 5', brand: 'realme', chipset: 'Snapdragon 8 Gen 3', ram: '12GB/16GB', display: '6.74" AMOLED', os: 'Android 14', gpu: 'Adreno 750', tier: 'premium', rating: '9/10', graphics: 'Ultra', fps: '90-120' },
  { name: 'realme GT 3', brand: 'realme', chipset: 'Snapdragon 8+ Gen 1', ram: '8GB/12GB', display: '6.74" AMOLED', os: 'Android 13', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'realme GT 2 Pro', brand: 'realme', chipset: 'Snapdragon 8 Gen 1', ram: '8GB/12GB', display: '6.7" LTPO AMOLED', os: 'Android 12', gpu: 'Adreno 730', tier: 'high', rating: '8/10', graphics: 'High', fps: '60-90' },
  { name: 'realme GT Neo 3', brand: 'realme', chipset: 'Dimensity 8100', ram: '6GB/8GB/12GB', display: '6.7" AMOLED', os: 'Android 12', gpu: 'Mali-G610', tier: 'high', rating: '7/10', graphics: 'High', fps: '60' },
  { name: 'realme 12 Pro+', brand: 'realme', chipset: 'Snapdragon 7s Gen 2', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 14', gpu: 'Adreno 710', tier: 'mid', rating: '7/10', graphics: 'Medium', fps: '60' },
  { name: 'realme 12 Pro', brand: 'realme', chipset: 'Snapdragon 6 Gen 1', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 14', gpu: 'Adreno 610', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'realme 11 Pro+', brand: 'realme', chipset: 'Dimensity 7050', ram: '8GB/12GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Mali-G68', tier: 'mid', rating: '6/10', graphics: 'Medium', fps: '60' },
  { name: 'realme 11 Pro', brand: 'realme', chipset: 'Helio G99', ram: '8GB', display: '6.7" AMOLED', os: 'Android 13', gpu: 'Mali-G57', tier: 'mid', rating: '5/10', graphics: 'Medium', fps: '60' },
  { name: 'realme C67', brand: 'realme', chipset: 'Snapdragon 685', ram: '4GB/8GB', display: '6.72" IPS LCD', os: 'Android 13', gpu: 'Adreno 610', tier: 'budget', rating: '4/10', graphics: 'Smooth', fps: '60' },
  { name: 'realme C53', brand: 'realme', chipset: 'Unisoc T612', ram: '4GB/6GB', display: '6.74" IPS LCD', os: 'Android 13', gpu: 'Mali-G57', tier: 'budget', rating: '3/10', graphics: 'Smooth', fps: '30-60' }
];

// ========== HELPER: Get sensitivity values based on device tier ==========
function getSensiByTier(tier) {
  const presets = {
    premium: { gen: 90, rd: 85, sc2x: 75, sc4x: 60, sc6x: 45, sc8x: 35, sn: 50, fl: 75, dpi: 400, hud: '4-Finger Claw' },
    high:    { gen: 85, rd: 80, sc2x: 70, sc4x: 55, sc6x: 40, sc8x: 30, sn: 45, fl: 70, dpi: 380, hud: '3-Finger Claw' },
    mid:     { gen: 80, rd: 75, sc2x: 65, sc4x: 50, sc6x: 35, sc8x: 25, sn: 40, fl: 65, dpi: 360, hud: '3-Finger' },
    budget:  { gen: 75, rd: 70, sc2x: 60, sc4x: 45, sc6x: 30, sc8x: 20, sn: 35, fl: 60, dpi: 340, hud: '2-Finger' }
  };
  return presets[tier] || presets.mid;
}

// ========== SENSITIVITY LABELS (for display) ==========
const sensiLabels = [
  { key: 'gen', label: 'General Sensitivity' },
  { key: 'rd', label: 'Red Dot Sight' },
  { key: 'sc2x', label: '2x Scope' },
  { key: 'sc4x', label: '4x Scope' },
  { key: 'sc6x', label: '6x Scope' },
  { key: 'sc8x', label: '8x Scope' },
  { key: 'sn', label: 'Sniper Scope' },
  { key: 'fl', label: 'Free Look' },
  { key: 'dpi', label: 'DPI (Android)' },
  { key: 'hud', label: 'Recommended HUD' }
];
