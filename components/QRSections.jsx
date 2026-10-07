import { rera, project } from "@/data/project";

/** Desktop RERA / statutory block above the footer. */
export default function QRSection() {
  return (
    <section className="w-full bg-[#0b1f1a] px-6 md:px-[30px] py-10 md:py-[45px]">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 text-[#F6F2E8]">
        <div>
          <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            RERA Registration
          </p>

          <dl className="text-[13px] leading-[1.75] space-y-1.5">
            <div>
              <dt className="inline text-white/55">Embassy Riverine (villas): </dt>
              <dd className="inline font-semibold break-all">{rera.villas}</dd>
            </div>
            <div>
              <dt className="inline text-white/55">Embassy South Reserve (apartments): </dt>
              <dd className="inline font-semibold break-all">{rera.apartments}</dd>
            </div>
            <div>
              <dt className="inline text-white/55">Registered: </dt>
              <dd className="inline">{rera.registered}</dd>
            </div>
            <div>
              <dt className="inline text-white/55">RERA-filed completion: </dt>
              <dd className="inline">{rera.completion}</dd>
            </div>
            <div>
              <dt className="inline text-white/55">Marketed handover: </dt>
              <dd className="inline">{rera.handover}</dd>
            </div>
          </dl>

          <a
            href={rera.portal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[12px] text-[#C8A24A] hover:text-[#e7ce92] transition-colors link-wipe"
          >
            Verify at rera.karnataka.gov.in →
          </a>
        </div>

        <div className="md:text-right">
          <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            Escrow &amp; Statutory
          </p>
          <p className="text-[13px] leading-[1.75] text-white/75">
            Seventy per cent of all amounts collected from allottees is deposited in a
            designated escrow account, as required under Section 4(2)(l)(D) of the Real
            Estate (Regulation and Development) Act, 2016.
          </p>
          <p className="text-[13px] leading-[1.75] text-white/75 mt-3">
            Developer: <span className="text-white font-semibold">{project.developer}</span>
            <br />
            Project address: {project.street}, {project.city} {project.postalCode}
          </p>
          {rera.agent ? (
            <p className="text-[12px] text-white/45 mt-3">
              Karnataka RERA Agent Registration: {rera.agent}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
