import Link from "next/link";
import Reveal from "./Reveal";

const groupFacts = [
  { value: "1993", label: "Founded; headquartered in Bengaluru" },
  { value: "85–100 million sq ft", label: "Built over three decades (approx.) across offices, homes, hotels, industrial, retail and education" },
  { value: "2019", label: "Sponsored Embassy Office Parks REIT, India’s first listed REIT" },
  { value: "Rs 10,300 crore", label: "Combined GDV of six North Bengaluru launches guided for FY26" },
];

/** Home page — "About Embassy Group": the developer behind Embassy Riverine. */
export default function HomeEmbassyGroup() {
  return (
    <section id="embassy-group" className="w-full bg-white py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] gap-10 lg:gap-14 items-start">
        <Reveal variant="up">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            The developer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            About Embassy Group
          </h2>
          <span className="rule-grow mt-3" data-shown="" />

          <div className="space-y-5 mt-5 text-gray-700 text-[15px] md:text-base leading-relaxed">
            <p>
              <Link href="/about-embassy-group" className="text-[#A8822E] font-semibold link-wipe">
                Embassy Group
              </Link>{" "}
              was founded in 1993 and is headquartered in Bengaluru under Chairman and
              Managing Director Jitendra Virwani. Over three decades it has built roughly 85
              to 100 million sq ft across office parks, homes, hotels, industrial, retail and
              education assets in Bengaluru, Chennai, Hyderabad, Pune, Coimbatore and
              Trivandrum, with projects in Serbia and Malaysia. Manyata Embassy Business Park,
              Embassy TechVillage and Embassy GolfLinks are its best-known work, and in 2019 it
              sponsored Embassy Office Parks REIT, India&apos;s first listed REIT.
            </p>
            <p>
              Embassy Developments Limited is the group&apos;s listed residential arm, with six
              North Bengaluru launches guided for FY26 at a combined gross development value
              of Rs 10,300 crore. Among{" "}
              <Link href="/about-embassy-group" className="text-[#A8822E] font-semibold link-wipe">
                Embassy Group
              </Link>{" "}
              new launch villas,{" "}
              <Link
                href="/about-embassy-riverine"
                className="text-[#A8822E] font-semibold link-wipe"
              >
                Embassy Riverine
              </Link>{" "}
              is the 2026 release in the Yelahanka belt and the latest of the Embassy villas in
              North Bangalore after Embassy Boulevard. The group also runs Stonehill
              International School, 2.5 km from the project.
            </p>
          </div>
        </Reveal>

        {/* Key figures from the paragraphs above */}
        <Reveal variant="right" delay={100}>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-px bg-[#e0d6bd] rounded-xl overflow-hidden border border-[#e0d6bd]">
            {groupFacts.map((f) => (
              <div key={f.value} className="bg-[#FAF8F3] p-5 flex flex-col-reverse">
                <dt className="text-[13px] text-gray-600 leading-snug mt-1">{f.label}</dt>
                <dd className="text-xl font-bold text-[#12302a]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
