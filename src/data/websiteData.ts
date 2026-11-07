import { ServiceItem, ProductItem, ProjectItem, TestimonialItem, ArticleItem, ClientItem } from '../types';

export const COMPANY_INFO = {
  name: "SL TEC",
  tagline: "Total Technical Solution",
  phone: "7370267",
  intlPhone: "+960 7370267",
  whatsapp: "https://wa.me/9607370267?text=Hello%20SL%20TEC,%20I%20need%20technical%20service%20assistance.",
  email: "sltecmaldives@gmail.com",
  location: "Boduthakurufaanu Magu, Malé 20026, Republic of Maldives",
  countryOps: "Maldives & Sri Lanka",
  experienceYears: 28,
  islandsCovered: "All Maldives Islands",
  projectsCompleted: "500+",
  emergencyAvailability: "24/7/365",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "generators",
    iconName: "Wrench",
    title: "All Types of Generators",
    shortDesc: "Complete installation, emergency repair, top & major overhaul, and preventive maintenance for all generator makes and models — diesel, gas, and hybrid.",
    fullDesc: "Expert technical servicing for all industrial and resort generator sets. We perform precision mechanical overhauls, fuel pump & injector calibration, alternator rewinding, and dynamic on-site load-bank testing across all atolls.",
    features: [
      "Top & Major Engine Overhauls",
      "Dynamic On-site Load Bank Testing",
      "Alternator Rotor & Stator Rewinding",
      "Fuel Injection Pump & Injector Calibration",
      "Soundproof Canopy & Exhaust Fabrication",
      "Emergency Black-Start & Breakdown Repair"
    ]
  },
  {
    id: "ship-engines",
    iconName: "Anchor",
    title: "Ship & Craft All Repairs",
    shortDesc: "Complete marine vessel and craft repairs, propulsion and auxiliary engine overhaul, hull maintenance, gearbox, transmission, and full marine servicing in Maldivian waters.",
    fullDesc: "Specialized marine mechanical, electrical, and structural repair solutions for safari yachts, resort passenger speedboats, sea crafts, cargo dhows, and inter-atoll commercial vessels. We handle marine corrosion, sea-water cooling, and classification compliance.",
    features: [
      "Ship & Craft Mechanical & Electrical Overhauls",
      "Marine Propulsion & Auxiliary Overhauls",
      "Crankshaft Grinding & Bearing Fitting",
      "Keel & Heat-Exchanger Descaling",
      "Hydraulic Transmission & Gearbox Overhauls",
      "Pre-Charter & Drydock Marine Surveys"
    ]
  },
  {
    id: "panel-boards",
    iconName: "Cpu",
    title: "Panel Boards & Control Systems",
    shortDesc: "Design, manufacturing, installation, and maintenance of main electrical switchboards, ATS panels, and advanced industrial control systems.",
    fullDesc: "Custom-engineered power distribution and motor control center (MCC) panels. We build and maintain high-grade electrical switchboards with ABB and Schneider Electric switchgear, Form 4 segregation, and surge suppression.",
    features: [
      "Automatic Transfer Switches (ATS) 100A–4000A",
      "Main Distribution Switchboards (MDB / SMDB)",
      "Motor Control Centers (MCC) & VFD Starters",
      "Circuit Breaker Retrofit & Testing",
      "Power Factor Correction (PFC) Banks",
      "Harmonic Filtering & Lightning Surge Protection"
    ]
  },
  {
    id: "engine-generator-controls",
    iconName: "Activity",
    title: "Engine & Generator Control Systems",
    shortDesc: "Advanced electronic diagnostics, controller programming, multi-genset auto-synchronizing, DSE, ComAp, and automated load sharing.",
    fullDesc: "Eliminate power outages with seamless multi-generator synchronizing and automated peak-lopping. Our senior control engineers program and troubleshoot Deep Sea Electronics (DSE), ComAp, Woodward, and DEIF controllers on-site.",
    features: [
      "Deep Sea (DSE) & ComAp Controller Programming",
      "Multi-Genset Auto-Synchronizing & Load Sharing",
      "Automatic Voltage Regulators (AVR) Tuning",
      "Electronic Speed Governor Calibration",
      "SCADA & GSM/Ethernet Remote Monitoring",
      "Fault Code Diagnostics & Sensor Calibration"
    ]
  },
  {
    id: "kitchen-equipment",
    iconName: "Flame",
    title: "Kitchen Hood & Kitchen Equipment",
    shortDesc: "Commercial resort kitchen ventilation, hood exhaust systems, fan motor overhauls, duct maintenance, and industrial kitchen equipment repair.",
    fullDesc: "Ensuring zero downtime in luxury resort culinary operations. We service commercial kitchen hood extractors, centrifugal exhaust fans, combi-ovens, commercial dishwashers, deep fryers, and industrial refrigeration equipment.",
    features: [
      "Kitchen Exhaust Fan Motor Rewinding & Balancing",
      "Kitchen Hood Grease Filtration & Airflow Balancing",
      "Commercial Combi-Ovens, Steamers & Ranges",
      "Industrial Dishwashers & Glasswashers",
      "Commercial Bakery & Food Processing Equipment",
      "Ansul Fire Suppression System Coordination"
    ]
  },
  {
    id: "industrial-machinery",
    iconName: "Settings",
    title: "All Type of Industrial Machine",
    shortDesc: "Comprehensive repair, preventive maintenance, and overhaul of all types of industrial machines, hydraulic systems, pumps, and manufacturing plant equipment.",
    fullDesc: "Heavy mechanical and electrical engineering support for all types of industrial machinery, desalination plants, cold storage facilities, island utility providers, and manufacturing yards across Thilafushi and nationwide atolls.",
    features: [
      "Industrial High-Pressure Water Pumps",
      "Hydraulic Cylinder & Valve Block Servicing",
      "Industrial Air Compressors & Blowers",
      "Heavy Machinery Gearbox & Bearing Replacement",
      "Desalination & RO High-Pressure Plant Pumps",
      "Vibration Analysis & Laser Shaft Alignment"
    ]
  }
];

export const COMMITMENTS = [
  {
    num: "01",
    title: "Expert Repair",
    desc: "Internationally trained & certified technicians with deep domain expertise across mechanical, electrical, and control systems.",
    icon: "Wrench"
  },
  {
    num: "02",
    title: "Preventive Maintenance",
    desc: "Scheduled maintenance programs specifically engineered to prevent costly breakdowns before they ever occur in tropical island climates.",
    icon: "ShieldCheck"
  },
  {
    num: "03",
    title: "24/7 Service Support",
    desc: "Round-the-clock emergency technical support — our rapid response team deploys by speedboat or seaplane whenever you need us.",
    icon: "Clock"
  },
  {
    num: "04",
    title: "Genuine Parts Fast Delivery",
    desc: "Only OEM-certified original spare parts sourced directly from authorized manufacturers, delivered rapidly to your island location.",
    icon: "Truck"
  }
];

export const WHY_US_FEATURES = [
  {
    icon: "Clock",
    title: "24/7 Emergency Response",
    desc: "Dedicated rapid emergency response team ready to deploy via speedboat or seaplane to any island atoll within hours."
  },
  {
    icon: "Award",
    title: "Certified Marine & Electrical Engineers",
    desc: "Internationally trained technical workforce holding 28 years of practical field experience across Maldives and Sri Lanka."
  },
  {
    icon: "ShieldCheck",
    title: "100% Genuine OEM Spare Parts",
    desc: "Direct supply chain from certified manufacturers guaranteeing authentic parts with complete warranty."
  },
  {
    icon: "Truck",
    title: "Rapid Islandwide Logistics",
    desc: "Specialized logistics network servicing all Maldives atolls, ensuring fast door-to-island parts and engineer delivery."
  },
  {
    icon: "ClipboardCheck",
    title: "Tailored Maintenance Contracts (AMC)",
    desc: "Customized maintenance plans designed for resort powerhouses and marine fleets to eliminate unplanned blackouts."
  },
  {
    icon: "CheckCircle2",
    title: "Transparent Pricing & Warranty",
    desc: "Upfront transparent quotation with no hidden transit charges and complete workmanship warranty on every repair."
  }
];

export const BRANDS = [
  { name: "Caterpillar (CAT)", logo: "./brands/cat.svg", logoText: "CAT" },
  { name: "Cummins", logo: "./brands/cummins.svg", logoText: "CUMMINS" },
  { name: "Perkins", logo: "./brands/perkins.svg", logoText: "PERKINS" },
  { name: "Yanmar", logo: "./brands/yanmar.svg", logoText: "YANMAR" },
  { name: "Volvo Penta", logo: "./brands/volvo-penta.svg", logoText: "VOLVO PENTA" },
  { name: "Kohler", logo: "./brands/kohler.svg", logoText: "KOHLER" },
  { name: "Stamford", logo: "./brands/stamford.svg", logoText: "STAMFORD" },
  { name: "Deep Sea Electronics", logo: "./brands/dse.svg", logoText: "DSE" },
];

export const CLIENT_LOGOS: ClientItem[] = [
  { 
    name: "Cinnamon Grand Colombo", 
    category: "5-Star Luxury Hotel & Hospitality", 
    logo: "./clients/cinnamon-grand.png",
    highlighted: true,
    badge: "VIP Partner"
  },
  { 
    name: "Shangri-La", 
    category: "Luxury International Hotel & Resorts", 
    logo: "./clients/shangri-la.webp",
    highlighted: true,
    badge: "VIP Partner"
  },
  { name: "Sri Lanka Army", category: "Armed Forces & Defence", logo: "./clients/sri-lanka-army.png" },
  { name: "Sri Lanka Navy", category: "Marine & Maritime Fleet", logo: "./clients/sri-lanka-navy.png" },
  { name: "Sri Lanka Air Force", category: "Aviation & National Security", logo: "./clients/sri-lanka-air-force.png" },
  { name: "Central Bank of Sri Lanka", category: "National Financial Institution", logo: "./clients/central-bank-of-sri-lanka.png" },
  { name: "Base Hospital Angoda (IDH)", category: "National Healthcare & Critical Power", logo: "./clients/base-hospital-angoda-idh.png" },
  { name: "Sri Lanka Tourism", category: "Tourism Development Authority", logo: "./clients/sri-lanka-tourism.png" },
  { name: "Sri Lanka Telecom", category: "National Telecom & Data Hubs", logo: "./clients/sri-lanka-telecom.png" },
  { name: "Sri Lanka Ports Authority", category: "Maritime Commercial Ports", logo: "./clients/sri-lanka-ports-authority.png" },
  { name: "Ministry of Education", category: "Government Education Ministry", logo: "./clients/ministry-of-education.png" },
  { name: "Sri Lanka Police & Defence", category: "Law Enforcement & Security", logo: "./clients/sri-lanka-police-defence.png" },
  { name: "Ceylon Petroleum Corporation", category: "Energy & Fuel Distribution (CEYPETCO)", logo: "./clients/ceylon-petroleum-corporation.png" },
  { name: "Dialog Axiata", category: "Leading Telecommunication Giant", logo: "./clients/dialog-axiata.png" },
  { name: "Commercial Bank of Ceylon", category: "Commercial Banking & Financial Network", logo: "./clients/commercial-bank.png" },
  { name: "Ceylinco Life", category: "Premier Life Insurance Company", logo: "./clients/ceylinco-life.png" },
  { name: "BOI Sri Lanka", category: "Board of Investment & Industrial Zones", logo: "./clients/boi-sri-lanka.png" },
  { name: "Mäga Engineering", category: "Premier Construction & Infrastructure", logo: "./clients/maga-engineering.png" },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "diesel-gensets",
    name: "Heavy-Duty Diesel Generators",
    category: "Power Generation",
    powerRange: "50 kVA – 2,500 kVA",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    description: "Tropicalized soundproof diesel generators powered by genuine Perkins, Cummins, or Baudouin engines. Built with anti-corrosive marine paint and heavy-duty 50°C tropical radiators.",
    specs: {
      "Prime Power": "50 kVA - 2500 kVA",
      "Engine Options": "Perkins / Cummins / Baudouin",
      "Alternator": "Stamford / Leroy Somer Class H",
      "Controller": "Deep Sea DSE7320 / ComAp AMF25",
      "Canopy": "Weatherproof & Soundproof 68 dBA @ 7m"
    },
    features: [
      "Heavy-duty marine tropical radiator rated for 50°C ambient",
      "Integrated base fuel tank with leak detection sensor",
      "Electronic governor for precise 50Hz frequency regulation",
      "Dual stage Racor fuel-water separator system"
    ]
  },
  {
    id: "marine-engines",
    name: "Marine Propulsion & Auxiliary Engines",
    category: "Marine Engineering",
    powerRange: "150 HP – 1,800 HP",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    description: "IMO Tier II & III compliant marine diesel engines suited for safari liveaboards, cargo dhows, and high-speed resort passenger transfers in Maldivian waters.",
    specs: {
      "Power Rating": "150 HP to 1800 HP @ 1800-2100 RPM",
      "Cooling": "Heat Exchanger with Cupro-Nickel Tubes",
      "Aspirations": "Turbocharged with Aftercooler",
      "Emissions": "IMO Tier II / Tier III Certified",
      "Starting": "24V Electric & Emergency Air Starter"
    },
    features: [
      "Salt-water resistant titanium & bronze sea-water pumps",
      "Wet exhaust manifolds with thermal insulation blankets",
      "High torque at low RPM for optimum vessel bollard pull",
      "Compatible with ZF, Twin Disc, and Advance gearboxes"
    ]
  },
  {
    id: "ats-sync-panels",
    name: "ATS & Synchronizing Switchboards",
    category: "Electrical Automation",
    powerRange: "100 A – 6,300 A",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Custom engineered generator synchronizing and Automatic Transfer Switch (ATS) panels. Enables seamless multi-generator load sharing and automated black-start capability.",
    specs: {
      "Current Rating": "100 Amp to 6300 Amp",
      "Switching Time": "< 100 milliseconds automatic transfer",
      "Enclosure": "IP55 / Form 4b Compartmentalized",
      "Breakers": "ABB / Schneider Electric Air Circuit Breakers",
      "Controllers": "DSE8610 MKII / ComAp InteliGen"
    },
    features: [
      "Zero-downtime synchronized bus-tie changeover",
      "Automatic generator start on mains supply failure",
      "Intelligent load-dependent start/stop algorithm",
      "Ethernet Modbus TCP/IP connectivity for SCADA"
    ]
  },
  {
    id: "spare-parts-filters",
    name: "Genuine Spare Parts & Filtration Kits",
    category: "Spare Parts",
    powerRange: "All Brands & Models",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    description: "100% genuine OEM spare parts, overhaul kits, turbochargers, fuel injectors, AVRs, electronic sensors, and Fleetguard/Donaldson filtration supplies.",
    specs: {
      "Stock Availability": "In-stock Malé warehouse with island air-freight",
      "Filtration": "Fleetguard, Donaldson, Baldwin, Racor",
      "Electrical": "Automatic Voltage Regulators (SX460, AS440, MX321)",
      "Engine Spares": "Piston liners, rings, gaskets, con-rod bearings",
      "Warranty": "Official OEM 12-month manufacturer warranty"
    },
    features: [
      "Guaranteed zero counterfeit policy with serial tracking",
      "Fast speedboat & courier dispatch to all atolls",
      "Bulk resort seasonal maintenance supply packages",
      "Free technical compatibility check before dispatch"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "3.2 MW Synchronized Powerhouse Installation",
    category: "resort",
    location: "Luxury Resort Island, Baa Atoll",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    capacity: "4 x 800 kVA Perkins Gensets",
    description: "Designed, supplied, and commissioned an automated 3.2 MW island power station with automated synchronizing switchboards, acoustic soundproofing to 65 dBA, and waste heat recovery.",
    clientType: "5-Star Luxury Resort",
    scope: ["Turnkey Powerhouse Construction", "Acoustic Attenuation", "DSE 8610 MKII Sync Panel", "Fuel Distribution Piping"],
    completedYear: "2024"
  },
  {
    id: "proj-2",
    title: "Twin Marine Auxiliary Engine Overhaul",
    category: "marine",
    location: "Malé Commercial Harbour",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    capacity: "2 x 350 kVA Cummins 6BT5.9 Marine Gensets",
    description: "Conducted full mechanical top-end and crankshaft overhaul on twin marine auxiliary sets for a 45-meter inter-atoll commercial cargo and passenger vessel under drydock conditions.",
    clientType: "Commercial Fleet Operator",
    scope: ["Crankshaft Inspection & Grinding", "Cylinder Liner Replacement", "Injector Pump Calibration", "Harbour Sea-Trial Testing"],
    completedYear: "2024"
  },
  {
    id: "proj-3",
    title: "1,500 kVA Prime Industrial Power Setup",
    category: "industrial",
    location: "Thilafushi Industrial Zone",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    capacity: "1,500 kVA Caterpillar C32 Diesel Generator",
    description: "Supplied and integrated a heavy-duty containerized genset for continuous prime power operation in a heavy fabrication and cold storage yard with automated mains synchronization.",
    clientType: "Industrial Manufacturing Group",
    scope: ["Containerized Acoustic Genset", "Automatic Synchronizing Switchgear", "Day Fuel Tank & Transfer Pumps", "Earth Pit Network"],
    completedYear: "2023"
  },
  {
    id: "proj-4",
    title: "Solar-Diesel Microgrid Integration",
    category: "resort",
    location: "Private Eco-Resort, South Ari Atoll",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    capacity: "800 kW Solar PV + 2 x 650 kVA Volvo Penta",
    description: "Integrated solar photovoltaic generation with diesel genset synchronization using ComAp InteliSys hybrid controllers to achieve a 38% reduction in annual resort fuel consumption.",
    clientType: "Eco-Friendly Boutique Resort",
    scope: ["Hybrid Microgrid Controller", "Reverse Power Protection", "Dynamic Fuel Optimization", "Online Cloud Telemetry"],
    completedYear: "2023"
  },
  {
    id: "proj-5",
    title: "Emergency Powerhouse Restoration in 48 Hours",
    category: "emergency",
    location: "Dhaalu Atoll Island Resort",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    capacity: "1,000 kVA Stamford Alternator Stator Rewind",
    description: "Emergency rapid response following a catastrophic alternator stator insulation breakdown. Rewound, baked, vacuum impregnated, and commissioned the unit within 48 hours to prevent resort guest evacuation.",
    clientType: "Resort Management",
    scope: ["Emergency Speedboat Technician Mobilization", "Rotor/Stator Rewind", "Vibration Analysis", "Full Load Verification"],
    completedYear: "2024"
  },
  {
    id: "proj-6",
    title: "Critical Hospital Backup Genset & ATS Installation",
    category: "industrial",
    location: "Regional Atoll Hospital, Haa Dhaalu",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    capacity: "500 kVA Perkins Soundproof Genset + 800A ATS",
    description: "Installed medical-grade standby generator system with ultra-rapid 8-second automatic start switchboard, medical isolation transformers, and dual redundant fuel supply lines.",
    clientType: "Ministry of Health Healthcare Facility",
    scope: ["Medical-Grade Standby Generator", "Fast ATS Switching", "Double-Skin Underground Fuel Tank", "24/7 Remote Monitoring"],
    completedYear: "2023"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "SL TEC is our primary emergency partner in Baa Atoll. When our synchronizing panel suffered a lightning surge during monsoon season, their senior engineers arrived by speedboat within 3 hours and had our powerhouse running seamlessly before dinner service.",
    author: "Ibrahim Rasheed",
    role: "Director of Engineering",
    resortOrOrg: "5-Star Luxury Resort",
    atoll: "Baa Atoll",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-2",
    quote: "Finding authentic marine generator parts and skilled marine mechanics in the Maldives used to take weeks. With SL TEC, they maintain all auxiliary engines for our 8 safari yachts. Flawless preventive maintenance and zero breakdowns all season.",
    author: "Capt. Ahmed Zahir",
    role: "Fleet Operations Manager",
    resortOrOrg: "Maldivian Marine Safaris",
    atoll: "Kaafu Atoll / Malé",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "test-3",
    quote: "Their annual maintenance contract (AMC) has reduced our diesel consumption by nearly 15% through precision fuel pump calibration and load balancing. Professional, highly transparent pricing, and always ready 24/7.",
    author: "Mohamed Shiyam",
    role: "General Manager - Operations",
    resortOrOrg: "Thilafushi Industrial Logistics",
    atoll: "Kaafu Atoll",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "guide-1",
    title: "How to Prevent Generator Overheating in Tropical Island Climates",
    category: "Maintenance Tips",
    readTime: "4 min read",
    date: "October 24, 2024",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    excerpt: "Tropical ambient temperatures combined with high humidity and salt air can degrade generator cooling efficiency by up to 30%. Here is our engineering checklist.",
    content: [
      "In island environments like the Maldives, high ambient heat (>32°C) combined with airborne salt accelerates radiator fin clogging and heat exchanger scale buildup.",
      "Always inspect radiator core differential pressure and maintain a minimum 1.5x air intake velocity. Clean salt crusts every 250 running hours using neutral enzymatic descalers rather than high-pressure acid washes that strip protective coatings.",
      "Check coolant glycol concentration monthly using an optical refractometer. Ensure water pump impeller clearances match OEM tolerances to avoid cavitation in tropical sea temperatures."
    ]
  },
  {
    id: "guide-2",
    title: "Why Fuel Polishing & Filtration is Critical for Marine Diesel Engines",
    category: "Marine Engineering",
    readTime: "5 min read",
    date: "November 08, 2024",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    excerpt: "Condensation inside tropical bulk diesel storage tanks breeds diesel bug bacteria. Learn how multi-stage centrifugal filtration prevents injector pump failure.",
    content: [
      "Due to extreme day-night temperature swings, bulk diesel tanks in the Maldives draw in humid marine air that condenses into water droplets at the bottom of the fuel tank.",
      "This water-fuel interface creates an ideal breeding ground for Cladosporium resinae bacteria, which produces acidic sludge that destroys high-pressure common rail (HPCR) injectors within 100 operating hours.",
      "Installing continuous offline fuel polishing loops with 2-micron coalescence filters will eliminate over 99.8% of free water and microbiological sediment before fuel reaches the engine."
    ]
  },
  {
    id: "guide-3",
    title: "Top 5 Signs Your Generator Synchronization Panel Needs Servicing",
    category: "Power Systems",
    readTime: "6 min read",
    date: "December 02, 2024",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    excerpt: "Frequent generator tripping, unequal reactive load (kVAR) sharing, and hunting speed governors are clear warning signs your switchgear needs urgent recalibration.",
    content: [
      "When running multiple generators in parallel on an island grid, precise voltage matching and phase angle alignment are essential before circuit breaker closure.",
      "Watch for uneven kW load distribution where one generator carries 80% while the second carries only 30%—this indicates speed governor droop maladjustment.",
      "Unequal kVAR sharing or circular currents indicate faulty Automatic Voltage Regulator (AVR) cross-current compensation transformers. Schedule an immediate thermal scan and controller firmware diagnostic."
    ]
  }
];

export const MALDIVES_ATOLLS = [
  "Malé & Kaafu Atoll",
  "North Ari Atoll (Alif Alif)",
  "South Ari Atoll (Alif Dhaal)",
  "Baa Atoll (Dharavandhoo/Eydhafushi)",
  "Lhaviyani Atoll",
  "Noonu Atoll",
  "Raa Atoll",
  "Shaviyani Atoll",
  "Haa Alif Atoll",
  "Haa Dhaalu Atoll",
  "Faafu Atoll",
  "Dhaalu Atoll",
  "Meemu Atoll",
  "Thaa Atoll",
  "Laamu Atoll",
  "Gaafu Alif Atoll",
  "Gaafu Dhaalu Atoll",
  "Gnaviyani Atoll (Fuvahmulah)",
  "Seenu Atoll (Addu City)",
];
