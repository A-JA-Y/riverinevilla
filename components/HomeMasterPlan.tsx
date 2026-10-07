import Link from "next/link";
import Reveal from "./Reveal";
import { MasterPlanViewer } from "./FloorPlan";

const masterPlanHighlights = [
  "85-acre Embassy Origins township, villa precinct on about 50 acres",
  "Riparian corridor kept open as the green spine of the layout",
  "Central lake and clubhouse at the centre, not at the gate",
  "19 acres of reserved open space and 4,000 trees",
  "Jogging and cycling trails, sky walk and tree walk along the corridor",
  "Underground cabling and a single gated entry with 24x7 security",
];

/** Home page — "Master Plan": the layout around the riparian corridor. */
export default function HomeMasterPlan() {
  return (
    <section
      id="master-plan"
      className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-t border-[#e5dcc5]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Bhumiputra Architecture
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Master Plan
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mt-5">
            The Embassy Riverine{" "}
            <Link href="/master-plan" className="text-[#A8822E] font-semibold link-wipe">
              master plan
            </Link>
            , by Bhumiputra Architecture, is organised around the riparian corridor that
            crosses Embassy Origins. Villas take the protected inner ground along the
            stream. The Embassy South Reserve apartments sit on the outer edge towards NH-44
            and act as a buffer. The 40,000 sq ft clubhouse and the central lake are placed
            in the middle of the villa precinct, within walking distance of every cluster,
            and the 19 acres of open space are distributed through the layout rather than
            gathered into one park.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          <Reveal variant="left">
            <h3 className="text-xl md:text-2xl font-bold text-[#12302a] mb-5">
              <Link href="/master-plan" className="hover:text-[#A8822E] transition-colors">
                Master plan
              </Link>{" "}
              highlights
            </h3>
            <ul className="space-y-3">
              {masterPlanHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-[15px] leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C8A24A] flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right">
            <MasterPlanViewer label="View the Master Plan" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
