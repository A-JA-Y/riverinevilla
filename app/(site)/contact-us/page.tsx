import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquirySection from "@/components/EnquirySection";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import StickyDownloadButton from "@/components/StickyButton";
import { project, rera, agentSchema, breadcrumb } from "@/data/project";

export const metadata: Metadata = {
  title: "Contact Us | Embassy Riverine, North Bangalore",
  description:
    "Speak to an authorised channel partner for Embassy Riverine — pricing, live inventory, site visits and home-loan assistance. Site visits seven days a week.",
  alternates: { canonical: "/contact-us" },
};

const helps = [
  {
    title: "The live cost sheet",
    body: "Indicative pricing moves between releases. We send the current sheet for the configuration you are looking at, with the statutory charges worked through.",
  },
  {
    title: "Inventory position",
    body: "Which villas are actually available, and where they sit relative to the corridor and the clubhouse. Only 32 of the 217 are 5 BHK.",
  },
  {
    title: "Site visits, seven days a week",
    body: "We arrange pickup from Hebbal or Yelahanka, walk you through the master plan on site, and send the price sheet the same day.",
  },
  {
    title: "Home loan and NRI paperwork",
    body: "Pre-approval and lender comparison at no cost to you. For overseas buyers we handle documentation and power-of-attorney arrangements.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    agentSchema,
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact-us" },
    ]),
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Real Revenue is an authorised channel partner for Embassy Riverine. Speak to us for pricing, availability, site visits and personalised assistance."
      />

      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Direct contact */}
      <section className="w-full px-6 pb-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal
            as="a"
            variant="up"
            href={`tel:${project.phoneHref}`}
            className="card-lift block bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-6 text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E] mb-2">
              Call
            </p>
            <p className="text-[#12302a] font-semibold">{project.phone}</p>
            <p className="text-xs text-gray-500 mt-1">Mon–Sun, 9am–8pm IST</p>
          </Reveal>

          <Reveal
            as="a"
            variant="up"
            delay={80}
            href={`https://wa.me/${project.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift block bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-6 text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E] mb-2">
              WhatsApp
            </p>
            <p className="text-[#12302a] font-semibold">{project.phone}</p>
            <p className="text-xs text-gray-500 mt-1">Fastest for the cost sheet</p>
          </Reveal>

          <Reveal
            as="a"
            variant="up"
            delay={120}
            href={`mailto:${project.email}`}
            className="card-lift block bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-6 text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E] mb-2">
              Email
            </p>
            <p className="text-[#12302a] font-semibold text-sm break-all">{project.email}</p>
            <p className="text-xs text-gray-500 mt-1">We reply within a working day</p>
          </Reveal>

          <Reveal
            variant="up"
            delay={160}
            className="bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-6 text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E] mb-2">
              Site Address
            </p>
            <address className="not-italic text-[13px] text-gray-600 leading-relaxed">
              Embassy Origins, {project.street}, {project.city} {project.postalCode}
            </address>
          </Reveal>
        </div>
      </section>

      {/* How we help */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
        <div className="max-w-4xl mx-auto">
          <Reveal variant="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight">
              What we can help with
            </h2>
          </Reveal>

          <dl className="grid sm:grid-cols-2 gap-5">
            {helps.map((h, i) => (
              <Reveal
                key={h.title}
                variant="up"
                delay={i * 80}
                className="bg-white rounded-lg p-6 border-l-[3px] border-[#C8A24A] shadow-sm"
              >
                <dt className="font-bold text-[#12302a] mb-2">{h.title}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{h.body}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal variant="up" className="mt-8 text-center">
            <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Verify the project at{" "}
              <a
                href={rera.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8822E] font-semibold link-wipe"
              >
                rera.karnataka.gov.in
              </a>{" "}
              under {rera.villas} before booking.
            </p>
          </Reveal>
        </div>
      </section>

      <EnquirySection />
      <FaqAccordion />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
