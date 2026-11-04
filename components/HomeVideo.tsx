import Link from "next/link";
import Reveal from "./Reveal";
import VideoFacade from "./VideoFacade";
import { walkthroughVideo } from "@/data/project";

/** Home page — "Video walkthrough", played through the click-to-load facade. */
export default function HomeVideo() {
  return (
    <section
      id="video"
      className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-t border-[#e5dcc5]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Price &amp; site visit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Embassy Riverine Video Walkthrough
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mt-5">
            A walk through the site at Tharahunise, the villa formats and the current{" "}
            <Link href="/price" className="text-[#A8822E] font-semibold link-wipe">
              Embassy Riverine price
            </Link>
            . Watch it alongside the{" "}
            <Link href="/master-plan" className="text-[#A8822E] font-semibold link-wipe">
              master plan
            </Link>{" "}
            and the{" "}
            <Link href="/location-connectivity" className="text-[#A8822E] font-semibold link-wipe">
              location map
            </Link>
            , then{" "}
            <Link href="/contact-us" className="text-[#A8822E] font-semibold link-wipe">
              book a site visit
            </Link>{" "}
            to see it for yourself.
          </p>
        </Reveal>

        <Reveal variant="up" className="mt-10">
          <VideoFacade id={walkthroughVideo.id} title={walkthroughVideo.title} />
        </Reveal>
      </div>
    </section>
  );
}
