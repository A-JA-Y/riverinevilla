/**
 * Embassy Riverine — single source of truth for project facts.
 * Every page and component reads from here so a figure is only ever changed once.
 * Content version 1.0 · 21 September 2026.
 */

export const SITE_URL = "https://embassyriverinevilla.in";

export const project = {
  name: "Embassy Riverine",
  township: "Embassy Origins",
  developer: "Embassy Developments Limited",
  group: "Embassy Group",
  tagline: "Where a River Decided the Master Plan",
  locality: "Tarahunise, North Bangalore",
  street: "Chapparkallu Road, Tarahunise, Bettahalsur, Jala Hobli",
  city: "Bengaluru",
  region: "Karnataka",
  postalCode: "562157",
  lat: 13.187,
  lng: 77.596,
  phone: "+91 63566 63535",
  phoneHref: "+916356663535",
  whatsapp: "916356663535",
  email: "vishalajitsaria1988@gmail.com",
  brochure: "/embassy-riverine-brochure.pdf",
} as const;

export const rera = {
  villas: "PRM/KA/RERA/1251/309/PR/090926/008924",
  apartments: "PRM/KA/RERA/1251/309/PR/090926/008925",
  registered: "9 September 2026",
  completion: "30 September 2032",
  handover: "from 2030 onwards",
  portal: "https://rera.karnataka.gov.in",
} as const;

/** Hero price strip. */
export const priceStrip = [
  { config: "4 BHK", area: "4,200 sq ft", price: "Rs 14.10 Cr onwards" },
  { config: "4.5 BHK", area: "5,200 sq ft", price: "Rs 17.43 Cr onwards" },
  { config: "5 BHK", area: "6,800 sq ft", price: "Price on request" },
];

export const trustStrip = [
  "RERA Approved",
  "85-Acre Township",
  "40,000 Sq Ft Clubhouse",
  "19 Acres Open Space",
  "IGBC Gold Targeted",
];

/** Section 4 — key highlights icon grid. */
export const highlights = [
  { value: "85", unit: "Acres", label: "Embassy Origins master township" },
  { value: "217", unit: "Villas", label: "4, 4.5 and 5 BHK formats only" },
  { value: "50", unit: "Acres", label: "dedicated to the villa precinct" },
  { value: "19", unit: "Acres", label: "reserved landscape and open space" },
  { value: "4,000", unit: "Trees", label: "across 100 to 120 species" },
  { value: "40,000", unit: "Sq Ft", label: "Riverine clubhouse" },
  { value: "3.4", unit: "Metres", label: "floor-to-floor height" },
  { value: "6", unit: "Car Parks", label: "up to, on the 5 BHK villas" },
  { value: "5.37", unit: "Cr Litres", label: "rainwater harvesting storage" },
  { value: "IGBC", unit: "Gold", label: "green certification targeted" },
  { value: "15", unit: "Km", label: "to Kempegowda International Airport" },
  { value: "2.5", unit: "Km", label: "to Stonehill International School" },
];

/** Section 5 — price & configuration table. */
export const configurations = [
  {
    id: "4bhk",
    type: "4 BHK Villa",
    short: "4 BHK",
    plot: "2,400 sq ft",
    builtUp: "4,200 sq ft",
    units: 48,
    parking: 3,
    price: "Rs 14.10 - 14.97 Cr",
    priceFrom: "Rs 14.10 Cr",
    blurb:
      "The entry format, and the only one under 5,000 sq ft. Four bedrooms, three car parks and a 2,400 sq ft plot — the most efficient way into the enclave without giving up the township.",
    features: ["4 Bedrooms", "3 Car Parks", "Private Deck", "Study"],
  },
  {
    id: "45bhk",
    type: "4.5 BHK Villa",
    short: "4.5 BHK",
    plot: "3,500 sq ft",
    builtUp: "5,200 sq ft",
    units: 137,
    parking: 4,
    price: "Rs 17.43 - 19.87 Cr",
    priceFrom: "Rs 17.43 Cr",
    blurb:
      "The largest release at 137 homes, and the configuration most buyers settle on. The half suite works as a study, a guest room or a second home office without eating into the bedroom count.",
    features: ["4.5 Bedrooms", "4 Car Parks", "Family Lounge", "Garden Deck"],
  },
  {
    id: "5bhk",
    type: "5 BHK Villa",
    short: "5 BHK",
    plot: "5,400 sq ft",
    builtUp: "6,800 sq ft",
    units: 32,
    parking: 6,
    price: "On request",
    priceFrom: "On request",
    blurb:
      "Only 32 of the 217 villas. A 5,400 sq ft plot, six car parks and a double-height foyer — the format that runs out first, and the one worth asking about early.",
    features: ["5 Bedrooms", "6 Car Parks", "Pool Deck", "Double-Height Foyer"],
  },
];

export const workingRate =
  "approximately Rs 33,100 to Rs 37,700 per sq ft on built-up area";

export const additionalCharges = [
  "GST at 5% on under-construction consideration",
  "Stamp duty at approximately 5% to 6% of agreement value",
  "Registration charges at 1%",
  "Khata, infrastructure, corpus and maintenance deposits as per the agreement",
  "Floor rise, corner and view premiums where applicable",
];

/** Section 7 — amenities, grouped. */
export const amenityGroups = [
  {
    title: "The Clubhouse — 40,000 Sq Ft",
    intro:
      "The clubhouse anchors the centre of the villa precinct, beside the central lake and within walking distance of every cluster.",
    items: [
      "Heated indoor swimming pool",
      "Fully equipped gymnasium",
      "Yoga and meditation pavilion",
      "Spa with steam and sauna",
      "Squash court",
      "Business lounge and co-working space",
      "Library and quiet reading rooms",
      "Lounge bar",
      "Café",
      "Indoor games room",
      "Banquet hall with attached guest rooms",
    ],
  },
  {
    title: "Sports & Outdoor",
    intro:
      "Courts and greens are distributed through the precinct rather than stacked in one corner, so no cluster is far from a place to play.",
    items: [
      "Outdoor resort-style swimming pool",
      "Central lake with landscaped edge",
      "Floodlit tennis court",
      "Padel court",
      "Pickleball court",
      "Basketball court",
      "Badminton court",
      "Cricket practice nets",
      "Multipurpose court",
      "Putting green",
      "Skating rink",
    ],
  },
  {
    title: "Family & Social",
    intro:
      "The social programme is built for a community that will live here for decades, not for a launch-day photograph.",
    items: [
      "Kids' club",
      "Adventure play park",
      "Family pavilions",
      "Function lawn",
      "Barbecue pavilion",
      "Garden cabanas",
      "Open-air amphitheatre",
    ],
  },
  {
    title: "Landscape & Wellness",
    intro:
      "Nineteen acres of reserved open space, threaded through the street network rather than consolidated into a single park.",
    items: [
      "19 acres of reserved open space",
      "Riparian jogging and cycling trails",
      "Elevated sky walk",
      "Tree walk through the retained canopy",
      "Pet park",
      "Senior citizens' activity zone",
      "Themed landscaped gardens",
    ],
  },
  {
    title: "Infrastructure & Sustainability",
    intro:
      "The unglamorous half of the specification, and the half that decides what the enclave feels like in year ten.",
    items: [
      "24x7 gated security with CCTV surveillance",
      "Fully underground cabling — no overhead lines",
      "Power backup for common areas and essential circuits",
      "Sewage treatment plant with treated water reuse",
      "Rainwater harvesting with 5.37 crore litre storage capacity",
      "EV charging provision",
      "Solar hot water systems",
      "IGBC Green Homes Gold certification targeted",
      "Zero-discharge water planning",
    ],
  },
];

/** Section 8 — specifications. */
export const specifications = [
  {
    title: "Structure",
    body: "RCC framed structure with shear walls, designed to IS code requirements for the applicable seismic zone. Floor-to-floor height of 3.4 metres, delivering finished ceiling heights of approximately 2.9 metres in the main living volumes.",
  },
  {
    title: "Flooring",
    body: "Premium marble across living, dining and formal areas. Engineered wood flooring in bedrooms, laid over an acoustic underlay. Anti-skid tiles in balconies, utility and wet areas.",
  },
  {
    title: "Doors",
    body: "Main and internal doors at 2.4 metres in height, tubular timber core with 0.8 mm oak veneer finish and quality hardware.",
  },
  {
    title: "Windows & Glazing",
    body: "Double-glazed panoramic sliding door systems in heat-strengthened laminated glass to the principal living spaces. UPVC window systems elsewhere, with provision for insect screens.",
  },
  {
    title: "Kitchen",
    body: "Homogeneous tile flooring, granite or engineered stone counter with under-mount sink, tiled dado above the counter, and provision for chimney, hob, water purifier and dishwasher points.",
  },
  {
    title: "Electrical",
    body: "Concealed copper wiring in conduit with modular switches from a reputed make. Power backup for common services and essential circuits within each villa. EV-ready point in the villa parking. Provision for home automation and structured cabling.",
  },
  {
    title: "Sanitary & Plumbing",
    body: "CP fittings and sanitaryware from Grohe, Kohler or TOTO or equivalent. Rain shower in the master bathroom. CPVC supply lines and PVC drainage. Solar-assisted hot water supply.",
  },
];

/** Section 9 — distance table. */
export const distances = [
  { destination: "Stonehill International School", distance: "2.5 km", time: "5-7 min" },
  { destination: "Padukone-Dravid Centre for Sports Excellence", distance: "3 km", time: "6-8 min" },
  { destination: "Prestige Tech Cloud office park", distance: "6.5 km", time: "12-15 min" },
  { destination: "Doddajala (proposed Metro Blue Line station)", distance: "7.5 km", time: "14-17 min" },
  { destination: "Manipal Hospital, Yelahanka", distance: "11.5 km", time: "22-27 min" },
  { destination: "Yelahanka Junction Railway Station", distance: "12 km", time: "24-28 min" },
  { destination: "Kempegowda International Airport", distance: "15 km", time: "20-25 min" },
  { destination: "Phoenix Mall of Asia, Byatarayanapura", distance: "17 km", time: "30-35 min" },
  { destination: "Hebbal flyover / ORR gateway", distance: "21 km", time: "35-42 min" },
];

export const neighbourhood = {
  schools: [
    "Stonehill International School",
    "Canadian International School",
    "Vidyashilp Academy",
    "Ryan International School",
    "Delhi Public School North",
    "Padukone-Dravid Centre for Sports Excellence",
  ],
  healthcare: [
    "Manipal Hospital Yelahanka",
    "Aster CMI Hospital Hebbal",
    "Columbia Asia Hebbal",
    "Cytecare Cancer Hospital",
    "Sparsh Hospital Yelahanka",
  ],
  workplaces: [
    "Prestige Tech Cloud",
    "KIADB Aerospace Park",
    "Devanahalli Business Park",
    "Manyata Tech Park",
    "Hebbal office cluster",
  ],
  retail: [
    "Phoenix Mall of Asia",
    "Elements Mall",
    "Esteem Mall",
    "RMZ Galleria",
    "Nandi Hills weekend drive",
  ],
};

/** Section 10 — investment case. */
export const investmentCase = [
  {
    title: "The infrastructure arrived before the density did",
    body: "Most Bangalore micro-markets got their roads and metro after the buildings. North Bangalore got a six-lane expressway, an international airport, an elevated corridor and a planned metro line while there was still land left to build on.",
  },
  {
    title: "The employment mix is not the software cycle",
    body: "The east and south of the city run on IT services. North Bangalore runs on aerospace, hardware, defence electronics, logistics and the airport economy — sectors less correlated with the software hiring cycle. That matters for rental stability.",
  },
  {
    title: "Supply discipline at the top end",
    body: "Low-density villa land in the corridor is finite and increasingly institutionally held. At a working rate of Rs 33,000 to Rs 38,000 per sq ft, Embassy Riverine is the most expensive villa product in North Bangalore — a bet on the corridor closing the gap with Whitefield and Sarjapur.",
  },
];

export const competitors = [
  "Embassy Boulevard, Yelahanka",
  "Total Environment — After the Rain",
  "True Blue Napa Valley",
  "Keya Life by the Lake, Jakkur",
  "Sobha Lifestyle Legacy",
  "Fortius Under the Sun, IVC Road",
];

/** Section 13 — FAQ, reused for both UI and FAQPage schema. */
export const faqs = [
  {
    question: "Where exactly is Embassy Riverine located?",
    answer:
      "Embassy Riverine is on Chapparkallu Road at Tarahunise, in the Bettahalsur belt of Jala Hobli, North Bangalore, just off NH-44. It forms the villa precinct of the 85-acre Embassy Origins township, approximately 15 km from Kempegowda International Airport.",
  },
  {
    question: "What configurations are available at Embassy Riverine?",
    answer:
      "Three villa formats — 4 BHK on a 2,400 sq ft plot with 4,200 sq ft built-up, 4.5 BHK on a 3,500 sq ft plot with 5,200 sq ft built-up, and 5 BHK on a 5,400 sq ft plot with 6,800 sq ft built-up. There are 48, 137 and 32 units respectively, totalling 217 villas.",
  },
  {
    question: "What is the price of Embassy Riverine villas?",
    answer:
      "Indicative launch pricing starts at Rs 14.10 crore for the 4 BHK and Rs 17.43 crore for the 4.5 BHK. The 5 BHK is available on request. That works out to approximately Rs 33,100 to Rs 37,700 per sq ft on built-up area, exclusive of GST, stamp duty and registration.",
  },
  {
    question: "Is Embassy Riverine RERA approved?",
    answer:
      "Yes. Embassy Riverine is registered with Karnataka RERA under PRM/KA/RERA/1251/309/PR/090926/008924, registered on 9 September 2026.",
  },
  {
    question: "When is possession for Embassy Riverine?",
    answer:
      "The RERA-filed completion date is 30 September 2032. The developer has indicated phased handover beginning from 2030. The RERA date is the contractually enforceable one.",
  },
  {
    question: "How far is Embassy Riverine from Kempegowda International Airport?",
    answer:
      "Approximately 15 km, or a 20 to 25 minute drive via NH-44, without entering city traffic.",
  },
  {
    question: "How big is the clubhouse at Embassy Riverine?",
    answer:
      "The clubhouse extends to approximately 40,000 sq ft and includes a heated indoor pool, gymnasium, spa with steam and sauna, squash court, business lounge, library, lounge bar, café and a banquet hall with guest rooms.",
  },
  {
    question: "How many villas are there and what is the density?",
    answer:
      "217 villas across approximately 50 acres of the villa precinct, which is roughly 4.4 villas per acre — a low density by Bangalore standards.",
  },
  {
    question: "Are there schools near Embassy Riverine?",
    answer:
      "Stonehill International School is 2.5 km away, a five to seven minute drive. Canadian International School, Vidyashilp Academy and Delhi Public School North also serve the corridor.",
  },
  {
    question: "Who is the developer of Embassy Riverine?",
    answer:
      "Embassy Developments Limited, the listed residential arm of Embassy Group. Embassy Group was founded in 1993 and has delivered roughly 85 to 100 million sq ft across commercial, residential, hospitality and industrial assets.",
  },
  {
    question: "Is home loan available for Embassy Riverine?",
    answer:
      "Yes. The project is expected to be approved by leading banks and housing finance companies. Our team can arrange loan pre-approval and compare offers across lenders at no cost to you.",
  },
  {
    question: "Can NRIs buy at Embassy Riverine?",
    answer:
      "Yes. Non-Resident Indians and Persons of Indian Origin may purchase residential property in India under the general permission granted by the Reserve Bank of India, with payment routed through normal banking channels or NRE/NRO accounts. We handle documentation and power of attorney arrangements for overseas buyers.",
  },
];

/** Shared JSON-LD graph node for the project itself. */
export const projectSchema = {
  "@type": "ApartmentComplex",
  "@id": `${SITE_URL}/#project`,
  name: project.name,
  url: `${SITE_URL}/`,
  description:
    "Embassy Riverine is a 217-villa luxury enclave of 4, 4.5 and 5 BHK homes within the 85-acre Embassy Origins township at Tarahunise, North Bangalore, developed by Embassy Developments Limited.",
  numberOfAccommodationUnits: 217,
  petsAllowed: true,
  image: `${SITE_URL}/og-cover.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: project.street,
    addressLocality: project.city,
    addressRegion: project.region,
    postalCode: project.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: project.lat,
    longitude: project.lng,
  },
  amenityFeature: [
    "40,000 sq ft Clubhouse",
    "Heated Indoor Swimming Pool",
    "Tennis Court",
    "Padel and Pickleball Courts",
    "Gymnasium",
    "Spa with Steam and Sauna",
    "19 Acres Open Space",
    "Central Lake",
    "24x7 Gated Security",
    "EV Charging",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
};

export const agentSchema = {
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: "Real Revenue",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/og-cover.webp`,
  telephone: project.phone,
  email: project.email,
  areaServed: "Bengaluru",
  parentOrganization: {
    "@type": "Organization",
    name: "Earlydays Innovations Private Limited",
  },
};

export const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}
