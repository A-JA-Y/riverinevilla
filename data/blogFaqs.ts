/**
 * FAQs for the blog articles. Each article's MDX renders its list with <FAQ>,
 * and data/blogData.ts builds the FAQPage schema from the same list, so the
 * structured data always matches what the page shows.
 */
export type BlogFaq = { q: string; a: string };

/** FAQ from the "3 BHK or 4 BHK in Bangalore" content doc. */
export const bhkComparisonFaqs: BlogFaq[] = [
  {
    q: "Is a 3 BHK enough for a family of four in Bangalore?",
    a: "Yes, for most families. A master bedroom, a children’s room and one flexible room cover two adults and two children with a spare for a study or guests. It stops being enough when parents move in or both adults need a dedicated home office.",
  },
  {
    q: "How much more does a 4 BHK cost than a 3 BHK in Bangalore?",
    a: "Plan on Rs 1 crore or more extra in the same location, which adds roughly Rs 86,800 a month to a 20-year EMI at 8.5%, plus about Rs 6 to 7 lakh more in stamp duty and registration. In central areas like Koramangala the gap is wider.",
  },
  {
    q: "Which has better resale value, 3 BHK or 4 BHK?",
    a: "A 3 BHK sells faster because the buyer pool is the largest in the city. A 4 BHK holds value well in premium corridors but takes longer to sell. Location and developer matter more to resale than the bedroom count.",
  },
  {
    q: "Is a 4 BHK worth it if the fourth room will be a home office?",
    a: "Only if two people work from home regularly. One home office fits comfortably in a 3 BHK’s third room. Two means the extra Rs 1 crore is buying a room you use every working day, which is a fair trade.",
  },
  {
    q: "Are 4 BHK maintenance charges much higher?",
    a: "Yes. Maintenance is charged per square foot, so a 4 BHK pays 30 to 60% more than a 3 BHK in the same project, every month, along with higher electricity and cleaning costs.",
  },
  {
    q: "Where in Bangalore are 4 BHKs easier to find?",
    a: "North Bangalore (Hebbal, Yelahanka, the airport corridor) and East Bangalore (Whitefield, Sarjapur Road) have township projects with proper 4 BHK floor plates. Central areas mostly supply 3 BHKs; 4 BHKs there are penthouses or older resale flats at a premium.",
  },
  {
    q: "Should I upgrade from a 3 BHK to a 4 BHK or buy a villa?",
    a: "If you need one more room and want to stay central, a 4 BHK apartment. If your budget is already in the luxury bracket and you value land, privacy and no shared walls, a villa in the North Bangalore corridor is the alternative. Either way, upgrade once; selling and buying together costs 8 to 9% of the combined value in transaction charges.",
  },
  {
    q: "What is the difference between a 4 BHK apartment and a 4 BHK villa in Bangalore?",
    a: "A 4 BHK apartment is a floor in a shared tower with lower upkeep and faster resale. A 4 BHK villa is an independent home on its own plot with a garden, private parking, higher ceilings and no shared walls, at a higher price and with more upkeep. Embassy Riverine’s 4 BHK villa, for example, is 4,200 sq ft on a 2,400 sq ft plot from Rs 14.10 Cr.",
  },
];

/** FAQ from the "Is Bangalore good to live or invest in" content doc. */
export const bangaloreLiveOrInvestFaqs: BlogFaq[] = [
  {
    q: "Is Bangalore good to live or invest in 2026?",
    a: "Yes on both, with conditions. Living works if your income is earned here and you keep the commute under control; investing works in corridors with a funded growth driver, held for seven to ten years, and bought for appreciation rather than rent.",
  },
  {
    q: "Is Bangalore a good place to live for families?",
    a: "Yes. Schools, hospitals, weather and safety are among the best of any Indian metro. Choose a home within 30 to 40 minutes of work and school, and check the project’s water source before anything else.",
  },
  {
    q: "Is it worth buying a house in Bangalore now, or should I wait for a correction?",
    a: "Prices have not fallen in twenty years, and 2026 data shows them up 8% to 9% with sales still growing. Unsold stock is at a multi-year high, though, so this is a buyer’s year for terms: if you will live in the home and the EMI fits, negotiate now rather than wait.",
  },
  {
    q: "What is the rental yield in Bangalore?",
    a: "Gross residential yields are about 4% to 5% for apartments in the east and south, and 2% to 3.5% for premium homes and villas; net yields after maintenance, vacancy and tax are lower. Bangalore property is an appreciation and lifestyle purchase, not an income one.",
  },
  {
    q: "Which is the best area to invest in Bangalore in 2026?",
    a: "North Bangalore for appreciation (the airport corridor: Hebbal, Yelahanka, Thanisandra, Devanahalli), East for rental depth (Whitefield, Sarjapur Road), and South for value (Electronic City, Bannerghatta Road, Kanakapura Road). Match the zone to your purpose.",
  },
  {
    q: "Is Bangalore real estate a bubble?",
    a: "The evidence says no. Prices track office absorption, GCC hiring and migration, all still rising in 2026. The real risk is overpaying at launch in an oversupplied pocket, not a city-wide crash.",
  },
  {
    q: "What is the cost of living in Bangalore in 2026?",
    a: "A single professional spends roughly ₹60,000 to ₹65,000 a month including rent; a family of four with school fees, ₹1.3 to ₹1.6 lakh. Rent is the biggest line: ₹20,000 to ₹45,000 for a 1 BHK in the city and ₹30,000 to ₹48,000 for a 2 BHK near the tech corridors.",
  },
  {
    q: "Are villas in North Bangalore a good investment?",
    a: "On a seven-to-ten-year hold, yes: it is the only belt where low-density villa land remains, and it carries the strongest infrastructure pipeline in the city. Expect low rental yield, long possession timelines and thinner social infrastructure today; buy for land share and your own use.",
  },
];

/** schema.org FAQPage node for a list of FAQs. */
export function faqPageSchema(items: BlogFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
