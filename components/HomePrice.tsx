import Link from "next/link";
import Reveal from "./Reveal";
import EnquiryButton from "./EnquiryButton";

const priceList = [
  { label: "Embassy Riverine 4 BHK villa price", value: "Rs 14.10 – 14.97 Cr" },
  { label: "Embassy Riverine 4.5 BHK villa price", value: "Rs 17.43 – 19.87 Cr" },
  { label: "Embassy Riverine 5 BHK villa price", value: "On request" },
];

/** Home page — "Price": starting prices, what the base price excludes, payment plan. */
export default function HomePrice() {
  return (
    <section
      id="price"
      className="w-full bg-white py-16 md:py-20 px-6 border-t border-[#e5dcc5]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            From Rs 14.10 Cr
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">Price</h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mt-5">
            Embassy Riverine{" "}
            <Link href="/price" className="text-[#A8822E] font-semibold link-wipe">
              price
            </Link>{" "}
            starts at <strong className="text-[#12302a]">Rs 14.10 Cr</strong> for the 4 BHK
            villa and <strong className="text-[#12302a]">Rs 17.43 Cr</strong> for the 4.5 BHK
            villa. The 5 BHK villa{" "}
            <Link href="/price" className="text-[#A8822E] font-semibold link-wipe">
              price
            </Link>{" "}
            is shared on request. On built-up area that works out to roughly Rs 33,100 to Rs
            37,700 per sq ft, which puts it at the top end of luxury villas in North
            Bangalore.
          </p>
        </Reveal>

        {/* Price by format */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {priceList.map((p, i) => (
            <Reveal
              as="li"
              key={p.label}
              variant="up"
              delay={i * 100}
              className="card-lift bg-[#FAF8F3] rounded-xl p-6 border border-[#e5dcc5] border-t-[3px] border-t-[#C8A24A]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A8822E]">
                {p.label}
              </p>
              <p className="text-xl md:text-2xl font-bold text-[#12302a] mt-2 tabular-nums">
                {p.value}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <Reveal variant="up">
            <h3 className="text-xl md:text-2xl font-bold text-[#12302a] mb-4">
              What the base price does not include
            </h3>
            {/* The doc's own wording, kept as running text */}
            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                GST at 5% on the under-construction value, Karnataka stamp duty of about 5–6%,
                registration at 1%, khata and municipal transfer charges, infrastructure and
                development charges, water, electricity and sewerage deposits, the corpus fund
                and maintenance advance, and clubhouse membership where applicable.
              </p>
              <p>
                Corner, end-unit and view premiums apply to specific plots, and additional car
                parks are charged separately.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h3 className="text-xl md:text-2xl font-bold text-[#12302a] mb-4">Payment plan</h3>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Construction-linked, with about{" "}
              <strong className="text-[#12302a]">10%</strong> as the Embassy Riverine booking
              amount and the balance tied to construction milestones. The cost sheet moves
              with inventory, so take the all-inclusive working in writing before you decide.
              We send it the same day.
            </p>
            <div className="mt-7">
              <EnquiryButton>Request the Cost Sheet</EnquiryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
