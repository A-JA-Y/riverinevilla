/**
 * Embassy Riverine — single source of truth for project facts.
 * Every page and component reads from here so a figure is only ever changed once.
 * Content version 1.1 · 7 October 2026 (aligned with the SEO copy for the home page).
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
  /** Real Revenue's Karnataka RERA agent registration. Shown in the footer once filled in. */
  agent: "",
} as const;

/** Hero price strip. */
export const priceStrip = [
  { config: "4 BHK", area: "4,200 sq ft", price: "Rs 14.10 Cr onwards" },
  { config: "4.5 BHK", area: "5,200 sq ft", price: "Rs 17.43 Cr onwards" },
  { config: "5 BHK", area: "6,800 sq ft", price: "Price on request" },
];

/** Hero trust line, as written in the home-page copy. */
export const trustStrip = [
  `RERA ${rera.villas}`,
  "40,000 sq ft clubhouse",
  "19 acres open space",
  "IGBC Gold targeted",
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

/** Home page — "At a glance" figures under About Embassy Riverine. */
export const atAGlance = [
  { value: "85", unit: "Acres", label: "Embassy Origins township" },
  { value: "217", unit: "Villas", label: "4, 4.5 and 5 BHK" },
  { value: "50", unit: "Acres", label: "villa precinct, under 4.5 villas per acre" },
  { value: "19", unit: "Acres", label: "reserved open space" },
  { value: "4,000", unit: "Trees", label: "100 to 120 species" },
  { value: "40,000", unit: "Sq Ft", label: "clubhouse" },
  { value: "3.4", unit: "Metres", label: "floor-to-floor height" },
  { value: "15", unit: "Km", label: "Kempegowda International Airport" },
  { value: "IGBC", unit: "Gold", label: "certification targeted" },
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
    price: "Rs 14.10 – 14.97 Cr",
    priceFrom: "Rs 14.10 Cr",
    blurb:
      "The entry format, and the one families moving up from a large apartment ask for first. 48 units, 3 car parks. If you want a 4 BHK villa for sale near Bangalore airport with a proper plot rather than a row-house footprint, this is the one to see.",
    features: ["4 Bedrooms", "3 Car Parks", "48 Units"],
  },
  {
    id: "45bhk",
    type: "4.5 BHK Villa",
    short: "4.5 BHK",
    plot: "3,500 sq ft",
    builtUp: "5,200 sq ft",
    units: 137,
    parking: 4,
    price: "Rs 17.43 – 19.87 Cr",
    priceFrom: "Rs 17.43 Cr",
    blurb:
      "137 units, so most of the precinct is this format. The half room works as a study, a home office or a puja room, and the 3,500 sq ft plot leaves room for a private deck or pool.",
    features: ["4 Bedrooms + Half Room", "4 Car Parks", "137 Units"],
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
      "32 units with 6 car parks on 5,400 sq ft plots, the largest in the precinct. Anyone searching for a 5 BHK villa for sale in North Bangalore at this scale should ask early; it is the smallest release.",
    features: ["5 Bedrooms", "6 Car Parks", "32 Units"],
  },
];

export const workingRate =
  "approximately Rs 33,100 to Rs 37,700 per sq ft on built-up area";

/** What the base price does not include (home and price copy). */
export const additionalCharges = [
  "GST at 5% on the under-construction value",
  "Karnataka stamp duty of about 5–6%",
  "Registration at 1%",
  "Khata and municipal transfer charges",
  "Infrastructure and development charges",
  "Water, electricity and sewerage deposits",
  "The corpus fund and maintenance advance",
  "Clubhouse membership, where applicable",
  "Corner, end-unit and view premiums on specific plots",
  "Additional car parks, charged separately",
];

/** Section 7 — amenities, in the four groups of the home-page copy. */
export const amenityGroups = [
  {
    id: "clubhouse",
    title: "Embassy Riverine clubhouse (40,000 sq ft)",
    intro:
      "The clubhouse sits at the centre of the villa precinct, on the lake, within walking distance of every cluster.",
    items: [
      "Heated indoor swimming pool",
      "Gymnasium and yoga pavilion",
      "Spa with steam and sauna",
      "Squash court",
      "Business lounge and library",
      "Lounge bar and cafe",
      "Indoor games room",
      "Banquet hall with guest rooms",
    ],
  },
  {
    id: "sport",
    title: "Sport",
    intro:
      "The courts are outdoors and distributed through the precinct, so no cluster is far from one.",
    items: [
      "Outdoor resort pool",
      "Floodlit tennis court",
      "Padel and pickleball courts",
      "Basketball and badminton courts",
      "Cricket practice nets",
      "Putting green",
      "Skating rink",
    ],
  },
  {
    id: "family",
    title: "Family and outdoors",
    intro:
      "Nineteen acres of the 85 are reserved open space, spread through the layout instead of walled into one park.",
    items: [
      "Central lake",
      "Kids' club and adventure play park",
      "Family pavilions and function lawn",
      "Barbecue pavilion and cabanas",
      "Open-air amphitheatre",
      "Riparian jogging and cycling trails",
      "Elevated sky walk and tree walk",
      "Pet park",
      "Senior citizens' zone",
    ],
  },
  {
    id: "estate",
    title: "Estate",
    intro:
      "The part of the amenities list nobody photographs and everyone depends on in year ten.",
    items: [
      "24x7 gated security with CCTV",
      "Fully underground cabling",
      "Power backup for essential circuits",
      "Sewage treatment with water reuse",
      "Rainwater harvesting of 5.37 crore litres",
      "EV charging provision",
      "Solar hot water",
      "Zero-discharge water planning",
    ],
  },
];

/** Section 8 — specifications (indicative; the agreement annexure binds). */
export const specifications = [
  {
    title: "Structure",
    body: "RCC frame with shear walls to IS code; 3.4 m floor-to-floor height",
  },
  {
    title: "Flooring",
    body: "Premium marble in living, dining and formal areas; engineered wood in bedrooms over an acoustic underlay; anti-skid tiles in balconies and wet areas",
  },
  {
    title: "Doors and windows",
    body: "2.4 m doors with oak veneer; double-glazed panoramic sliding systems in heat-strengthened laminated glass; UPVC windows elsewhere",
  },
  {
    title: "Kitchen",
    body: "Stone counter with under-mount sink, tiled dado, points for chimney, hob, purifier and dishwasher",
  },
  {
    title: "Electrical",
    body: "Concealed copper wiring, modular switches, backup for essential circuits, EV-ready parking, home automation provision",
  },
  {
    title: "Bathrooms",
    body: "Grohe, Kohler or TOTO fittings or equivalent; rain shower in the master bath",
  },
];

/** Section 9 — distance table (by road from the project gate, approximate). */
export const distances = [
  { destination: "Stonehill International School", distance: "2.5 km", time: "5–7 min" },
  { destination: "Padukone-Dravid Centre for Sports Excellence", distance: "3 km", time: "6–8 min" },
  { destination: "Prestige Tech Cloud office park", distance: "6.5 km", time: "12–15 min" },
  { destination: "Doddajala (proposed Metro Blue Line)", distance: "7.5 km", time: "14–17 min" },
  { destination: "Manipal Hospital, Yelahanka", distance: "11.5 km", time: "22–27 min" },
  { destination: "Yelahanka Junction Railway Station", distance: "12 km", time: "24–28 min" },
  { destination: "Kempegowda International Airport", distance: "15 km", time: "20–25 min" },
  { destination: "Phoenix Mall of Asia", distance: "17 km", time: "30–35 min" },
  { destination: "Hebbal flyover / ORR", distance: "21 km", time: "35–42 min" },
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
    body: "Low-density villa land in the corridor is finite and increasingly institutionally held. At roughly Rs 33,100 to Rs 37,700 per sq ft on built-up area, Embassy Riverine sits at the top end of luxury villas in North Bangalore — a bet on the corridor closing the gap with Whitefield and Sarjapur.",
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

/** Home-page FAQ, reused for both the UI and the FAQPage schema. */
export const faqs = [
  {
    question: "What is the Embassy Riverine price?",
    answer:
      "Embassy Riverine price starts at Rs 14.10 Cr for a 4 BHK villa (4,200 sq ft) and Rs 17.43 Cr for a 4.5 BHK villa (5,200 sq ft). The 5 BHK villa (6,800 sq ft) is priced on request. All figures exclude GST, stamp duty and registration.",
  },
  {
    question: "Where is Embassy Riverine located?",
    answer:
      "On Chapparkallu Road at Tarahunise, in the Bettahalsur belt north of Yelahanka, just off NH-44. It is the villa precinct of the 85-acre Embassy Origins township, about 15 km from Kempegowda International Airport.",
  },
  {
    question: "What villa configurations and sizes are available?",
    answer:
      "Three formats: 4 BHK (2,400 sq ft plot, 4,200 sq ft built-up, 48 units), 4.5 BHK (3,500 sq ft plot, 5,200 sq ft built-up, 137 units) and 5 BHK (5,400 sq ft plot, 6,800 sq ft built-up, 32 units). 217 villas in total.",
  },
  {
    question: "What is the Embassy Riverine RERA number and possession date?",
    answer:
      "PRM/KA/RERA/1251/309/PR/090926/008924, registered on 9 September 2026. The RERA-filed completion date is 30 September 2032, with phased handover indicated from 2030.",
  },
  {
    question: "What is the booking amount and payment plan?",
    answer:
      "Around 10% of the villa price at booking, with the balance on a construction-linked schedule. Ask us for the current Embassy Riverine payment plan and cost sheet in writing.",
  },
  {
    question: "How far is Embassy Riverine from Kempegowda International Airport?",
    answer:
      "About 15 km by road, a 20 to 25 minute drive on NH-44 without entering the city.",
  },
  {
    question: "What amenities does Embassy Riverine have?",
    answer:
      "A 40,000 sq ft clubhouse with a heated indoor pool, gym, spa, squash court, business lounge and banquet hall, plus an outdoor pool, central lake, floodlit tennis, padel and pickleball courts, cricket nets, a putting green, a skating rink, riparian trails, a sky walk and a pet park.",
  },
  {
    question: "How do I book an Embassy Riverine site visit?",
    answer:
      "Call or WhatsApp +91 63566 63535, or use the form on this page. Visits run seven days a week with pickup from Hebbal or Yelahanka, and you get the price sheet the same day.",
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
