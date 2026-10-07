import Reveal from "./Reveal";
import { rera } from "@/data/project";

const reraRows = [
  { label: "Embassy Riverine RERA number", value: rera.villas, mono: true },
  { label: "Embassy South Reserve (apartments)", value: rera.apartments, mono: true },
  { label: "Registered", value: rera.registered },
  { label: "RERA-filed completion", value: rera.completion },
  {
    label: "Embassy Riverine possession date",
    value: "Developer indicates phased handover from 2030; the RERA date is the enforceable one",
  },
];

/** Home page — "RERA and Possession": registration numbers, dates and escrow. */
export default function HomeRera() {
  return (
    <section id="rera" className="w-full bg-[#0b1f1a] py-16 md:py-20 px-6 text-[#F6F2E8]">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#C8A24A] mb-3">
            Karnataka RERA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">RERA and Possession</h2>
          <span className="rule-grow mt-3" data-shown="" />
        </Reveal>

        <Reveal variant="up" className="mt-10">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            {reraRows.map((r, i) => (
              <div
                key={r.label}
                className={`bg-[#0b1f1a] p-5 ${
                  i === reraRows.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8A24A]">
                  {r.label}
                </dt>
                <dd
                  className={`mt-1.5 text-[15px] leading-relaxed ${
                    r.mono ? "font-semibold break-all text-white" : "text-white/85"
                  }`}
                >
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal variant="up" className="mt-8 max-w-3xl">
          <p className="text-[15px] leading-relaxed text-white/80">
            Seventy per cent of all amounts collected from allottees goes into a designated
            escrow account under Section 4(2)(l)(D) of the RERA Act, 2016. Verify the
            registration at{" "}
            <a
              href={rera.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A24A] font-semibold link-wipe"
            >
              rera.karnataka.gov.in
            </a>{" "}
            before paying any booking amount.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
