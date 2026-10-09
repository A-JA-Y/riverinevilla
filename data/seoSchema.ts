import { configurations, project, rera, SITE_URL } from "@/data/project";

const siteAddress = {
  "@type": "PostalAddress",
  "@id": `${SITE_URL}/#site-address`,
  streetAddress: project.street,
  addressLocality: project.city,
  addressRegion: project.region,
  postalCode: project.postalCode,
  addressCountry: "IN",
};

const geo = {
  "@type": "GeoCoordinates",
  "@id": `${SITE_URL}/#geo`,
  latitude: project.lat,
  longitude: project.lng,
};

const logo = {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#logo`,
  url: `${SITE_URL}/_next/static/media/logo.17w-_53j93myd.webp`,
  contentUrl: `${SITE_URL}/_next/static/media/logo.17w-_53j93myd.webp`,
  caption: "Embassy Riverine",
};

export const villaProductSchemas = configurations.map((configuration) => {
  const id = configuration.id;
  const builtUp = Number(configuration.builtUp.replace(/[^0-9]/g, ""));
  const plot = Number(configuration.plot.replace(/[^0-9]/g, ""));
  const imageName = id === "4bhk" ? "plan-4bhk.15g.bgwnto9ag.webp" : id === "45bhk" ? "plan-45bhk.03.gna0~qp-8r.webp" : "plan-5bhk.0njv5.qe9a8fi.webp";
  const product = {
    "@type": id === "5bhk" ? "House" : ["Product", "House"],
    "@id": `${SITE_URL}/villas-configurations#${id}`,
    name: `Embassy Riverine ${configuration.short} Villa`,
    description: `${configuration.type} on a ${configuration.plot} plot with ${configuration.builtUp} built-up area, ${configuration.parking} car parks and ${configuration.units} units. ${configuration.price === "On request" ? "Price on request." : `Price ${configuration.price}, excluding GST, stamp duty and registration.`}`,
    url: `${SITE_URL}/villas-configurations#${id}`,
    image: `${SITE_URL}/_next/static/media/${imageName}`,
    category: "Luxury villa",
    brand: { "@id": `${SITE_URL}/#embassy-developments` },
    numberOfBedrooms: id === "45bhk" ? 4.5 : id === "5bhk" ? 5 : 4,
    floorSize: {
      "@type": "QuantitativeValue",
      value: builtUp,
      unitCode: "FTK",
      unitText: "sq ft built-up",
    },
    accommodationFloorPlan: {
      "@type": "FloorPlan",
      name: `Embassy Riverine ${configuration.short} floor plan`,
      numberOfBedrooms: id === "45bhk" ? 4.5 : id === "5bhk" ? 5 : 4,
      floorSize: {
        "@type": "QuantitativeValue",
        value: builtUp,
        unitCode: "FTK",
        unitText: "sq ft built-up",
      },
      numberOfAccommodationUnits: { "@type": "QuantitativeValue", value: configuration.units },
      image: `${SITE_URL}/_next/static/media/${imageName}`,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Plot area", value: plot, unitCode: "FTK", unitText: "sq ft" },
      { "@type": "PropertyValue", name: "Built-up area", value: builtUp, unitCode: "FTK", unitText: "sq ft" },
      { "@type": "PropertyValue", name: "Car parks", value: configuration.parking },
      { "@type": "PropertyValue", name: "Units", value: configuration.units },
      ...(id === "5bhk"
        ? [
            { "@type": "PropertyValue", name: "Price", value: "On request" },
            { "@type": "PropertyValue", name: "Availability", value: "Limited" },
          ]
        : []),
    ],
    ...(id === "5bhk"
      ? { containedInPlace: { "@id": `${SITE_URL}/#project` } }
      : {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: id === "4bhk" ? 141000000 : 174300000,
            highPrice: id === "4bhk" ? 149700000 : 198700000,
            offerCount: configuration.units,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            url: `${SITE_URL}/price`,
            seller: { "@id": `${SITE_URL}/#realrevenue` },
            availableAtOrFrom: { "@id": `${SITE_URL}/#project` },
          },
        }),
  };

  return product;
});

const projectNode = {
  "@type": "GatedResidenceCommunity",
  "@id": `${SITE_URL}/#project`,
  name: "Embassy Riverine",
  alternateName: ["Embassy Riverine Villas", "Embassy Riverine, Embassy Origins", "Embassy Riverine Tarahunise", "Embassy Riverine Bettahalsur"],
  description: "217 independent 4, 4.5 and 5 BHK luxury villas on about 50 acres inside the 85-acre Embassy Origins township at Tarahunise, North Bangalore, by Embassy Developments Limited. Fewer than 4.5 villas per acre, 19 acres of reserved open space, around 4,000 trees, a 40,000 sq ft clubhouse and a central lake, 15 km from Kempegowda International Airport. Price from Rs 14.10 Cr.",
  url: `${SITE_URL}/`,
  image: [`${SITE_URL}/og-cover.webp`, `${SITE_URL}/_next/static/media/riverine-hero.0r_ex.hdcqolf.webp`, `${SITE_URL}/_next/static/media/villa-exterior-1.0sh-dic7ehru5.webp`, `${SITE_URL}/_next/static/media/township-aerial.08uyn37k_v8zt.webp`],
  telephone: project.phoneHref,
  address: { "@id": `${SITE_URL}/#site-address` },
  geo: { "@id": `${SITE_URL}/#geo` },
  hasMap: "https://www.google.com/maps/search/?api=1&query=13.187,77.596",
  containedInPlace: { "@id": `${SITE_URL}/#embassy-origins` },
  publicAccess: false,
  identifier: { "@type": "PropertyValue", propertyID: "Karnataka RERA Registration Number", value: rera.villas },
  additionalProperty: [
    ["Developer", "Embassy Developments Limited (Embassy Group)"],
    ["Master planner", "Bhumiputra Architecture"],
    ["Property type", "Independent villas on individual plots; 4, 4.5 and 5 BHK"],
    ["Total villas", 217],
    ["Villa precinct area", "About 50 acres, under 4.5 villas per acre"],
    ["Township area", "85 acres"],
    ["Reserved open space", "19 acres"],
    ["Trees", "About 4,000 across 100 to 120 species"],
    ["Clubhouse", "40,000 sq ft"],
    ["Plot sizes", "2,400 to 5,400 sq ft"],
    ["Built-up areas", "4,200 to 6,800 sq ft"],
    ["Floor-to-floor height", "3.4 m"],
    ["Green certification", "IGBC Gold targeted"],
    ["Rainwater harvesting", "5.37 crore litres storage"],
    ["Price", "Rs 14.10 Cr to 19.87 Cr (5 BHK on request)"],
    ["Payment plan", "Construction-linked, about 10% at booking"],
    ["RERA registration date", "2026-09-09"],
    ["Launch date", "2026-09-15"],
    ["RERA-filed completion date", "2032-09-30"],
    ["Possession", "Phased handover indicated from 2030; the RERA date, 30 September 2032, is the enforceable one"],
    ["Distance to Kempegowda International Airport", "15 km, 20 to 25 min"],
    ["Distance to Stonehill International School", "2.5 km"],
    ["Distance to Doddajala (proposed Metro Blue Line)", "7.5 km"],
    ["Distance to Yelahanka Junction Railway Station", "12 km"],
    ["Distance to Hebbal flyover", "21 km"],
  ].map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
  amenityFeature: [
    "Heated indoor swimming pool", "Fully equipped gymnasium", "Yoga and meditation pavilion", "Spa with steam and sauna", "Squash court", "Business lounge and co-working space", "Library and reading rooms", "Lounge bar and café", "Indoor games room", "Banquet hall with guest rooms", "Outdoor resort-style swimming pool", "Central lake with landscaped edge", "Floodlit tennis court", "Padel court", "Pickleball court", "Basketball court", "Badminton court", "Cricket practice nets", "Multipurpose court", "Putting green", "Skating rink", "Kids' club and adventure play park", "Open-air amphitheatre", "Function lawn and barbecue pavilion", "Riparian jogging and cycling trails", "Elevated sky walk and tree walk", "Pet park", "Senior citizens' activity zone", "24x7 gated security with CCTV", "Fully underground cabling", "Power backup for common areas and essential circuits", "Sewage treatment plant with treated water reuse", "EV charging provision", "Solar hot water",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
};

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    siteAddress,
    geo,
    logo,
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#realrevenue`,
      name: "Real Revenue",
      description: "Authorised channel partner for Embassy Riverine at Embassy Origins, North Bangalore: live cost sheet and inventory, site visits seven days a week with pickup from Hebbal or Yelahanka, home-loan comparison across lenders and NRI documentation support.",
      url: `${SITE_URL}/`,
      logo: { "@id": `${SITE_URL}/#logo` },
      image: `${SITE_URL}/og-cover.webp`,
      telephone: project.phoneHref,
      email: project.email,
      areaServed: { "@type": "City", name: "Bengaluru" },
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "20:00" },
      contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: project.phoneHref, email: project.email, areaServed: "IN", availableLanguage: "en" },
      knowsAbout: ["Embassy Riverine", "Embassy Origins", "Luxury villas in North Bangalore"],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#embassy-group`,
      name: "Embassy Group",
      url: "https://www.embassyindia.com/",
      description: "Bengaluru-based real estate group founded in 1993 with roughly 85 to 100 million sq ft delivered across office parks, homes, hotels, industrial, retail and education assets.",
      foundingDate: "1993",
      foundingLocation: { "@type": "Place", name: "Bengaluru, Karnataka, India" },
      founder: { "@type": "Person", name: "Jitendra Virwani", jobTitle: "Chairman and Managing Director" },
      subOrganization: { "@id": `${SITE_URL}/#embassy-developments` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#embassy-developments`,
      name: "Embassy Developments Limited",
      alternateName: "Embassy Developments",
      description: "Listed residential arm of Embassy Group and developer of Embassy Riverine and the Embassy Origins township at Tarahunise, North Bangalore.",
      parentOrganization: { "@id": `${SITE_URL}/#embassy-group` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Embassy Riverine",
      alternateName: "Embassy Riverine Villas – Embassy Origins, North Bangalore",
      description: "Embassy Riverine villas at Embassy Origins, North Bangalore. 217 RERA-approved 4, 4.5 & 5 BHK villas from Rs 14.10 Cr. Price, floor plan, master plan, amenities, location and site visits.",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#realrevenue` },
      about: { "@id": `${SITE_URL}/#project` },
    },
    {
      "@type": "Place",
      "@id": `${SITE_URL}/#embassy-origins`,
      name: "Embassy Origins",
      alternateName: "Embassy Origins Township",
      description: "85-acre gated township by Embassy Developments Limited at Tarahunise, North Bangalore, master-planned by Bhumiputra Architecture around a protected riparian corridor.",
      url: `${SITE_URL}/master-plan`,
      image: `${SITE_URL}/_next/static/media/master-plan.07afn0e5r.3t9.webp`,
      address: { "@id": `${SITE_URL}/#site-address` },
      geo: { "@id": `${SITE_URL}/#geo` },
      hasMap: "https://www.google.com/maps/search/?api=1&query=13.187,77.596",
    },
    projectNode,
  ],
};
