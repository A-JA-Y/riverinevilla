import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import EnquiryButton from "@/components/EnquiryButton";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { project, rera, agentSchema, projectSchema, breadcrumb } from "@/data/project";

const META_TITLE = "Embassy Riverine Contact Number | Site Visit & Booking";
const META_DESCRIPTION =
  "Embassy Riverine contact number +91 63566 63535 (call or WhatsApp). Book a site visit 7 days a week, get the cost sheet, floor plans and booking details.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/contact-us" },
  keywords: [
    "Embassy Riverine contact number",
    "Embassy Riverine site visit",
    "Embassy Riverine sales office",
    "Embassy Riverine booking amount",
    "Embassy Riverine EOI",
    "Embassy Riverine brochure PDF download",
    "Embassy Riverine price",
    "Embassy Riverine villa for sale",
    "buy a villa in Embassy Riverine",
    "home loans for Embassy Riverine",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/contact-us",
    siteName: "Embassy Riverine",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-cover.webp",
        width: 1200,
        height: 630,
        alt: "Embassy Riverine — luxury villas at Embassy Origins, North Bangalore",
      },
    ],
  },
};

const linkCls = "text-[#A8822E] font-semibold link-wipe";
const labelCls =
  "block text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-2";

const WHATSAPP_MESSAGE =
  "Hi, I am interested in Embassy Riverine villas at Embassy Origins, North Bangalore. Please share the price sheet and availability.";
const telHref = `tel:${project.phoneHref}`;
const whatsappHref = `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

/** "Contact Us" bullets from the doc; number, email and address come from data/project.ts. */
const contactDetails: { icon: IconType; label: string; body: ReactNode }[] = [
  {
    icon: FaPhoneAlt,
    label: "Call or WhatsApp",
    body: (
      <>
        <a
          href={telHref}
          className="block text-lg font-semibold text-[#12302a] hover:text-[#A8822E] transition-colors whitespace-nowrap"
        >
          {project.phone}
        </a>
        <span className="block mt-1">Monday to Sunday, 9 am to 8 pm IST</span>
      </>
    ),
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp is fastest",
    body: <>for the cost sheet, floor plans and the brochure PDF</>,
  },
  {
    icon: FaEnvelope,
    label: "Email",
    body: (
      <>
        <a
          href={`mailto:${project.email}`}
          className="block font-semibold text-[#12302a] break-all hover:text-[#A8822E] transition-colors"
        >
          {project.email}
        </a>
        <span className="block mt-1">reply within one working day</span>
      </>
    ),
  },
  {
    icon: FaCalendarCheck,
    label: "Site visits",
    body: <>seven days a week, by appointment, with pickup from Hebbal or Yelahanka</>,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Project site",
    body: (
      <address className="not-italic">
        {project.township}, {project.street}, {project.city} {project.postalCode}
      </address>
    ),
  },
  {
    icon: FaBuilding,
    label: "Embassy Riverine sales office",
    body: (
      <>
        visits are held at the project site on Chapparkallu Road; we meet you at the
        township gate or pick you up
      </>
    ),
  },
];

const whatWeSend: { label: string; body: ReactNode }[] = [
  {
    label: "Price",
    body: (
      <>
        the live{" "}
        <Link href="/price" className={linkCls}>
          price list
        </Link>{" "}
        and the all-inclusive cost sheet for your format, with GST, stamp duty, registration
        and deposits worked through. Embassy Riverine price starts at{" "}
        <strong className="text-[#12302a]">Rs 14.10 Cr</strong> for the 4 BHK and{" "}
        <strong className="text-[#12302a]">Rs 17.43 Cr</strong> for the 4.5 BHK; the 5 BHK is
        on request.
      </>
    ),
  },
  {
    label: "Villa & configuration",
    body: (
      <>
        which of the 48 four-bedroom, 137 four-and-a-half-bedroom and 32 five-bedroom{" "}
        <Link href="/villas-configurations" className={linkCls}>
          villas
        </Link>{" "}
        are open, and where they sit.
      </>
    ),
  },
  {
    label: "Floor plan",
    body: (
      <>
        the{" "}
        <Link href="/floor-plans" className={linkCls}>
          4,200, 5,200 and 6,800 sq ft layouts
        </Link>
        , with RERA carpet areas on request.
      </>
    ),
  },
  {
    label: "Master plan",
    body: (
      <>
        the{" "}
        <Link href="/master-plan" className={linkCls}>
          township drawing
        </Link>{" "}
        with clusters, the corridor, the lake and the clubhouse.
      </>
    ),
  },
  {
    label: "Amenities",
    body: (
      <>
        the{" "}
        <Link href="/amenities" className={linkCls}>
          full list
        </Link>
        , clubhouse and outdoors, as filed.
      </>
    ),
  },
  {
    label: "Location",
    body: (
      <>
        map,{" "}
        <Link href="/location-connectivity" className={linkCls}>
          distance table
        </Link>{" "}
        and the route from Hebbal and the airport.
      </>
    ),
  },
  {
    label: "Payment plan",
    body: (
      <>
        the construction-linked schedule, EOI terms where a release is open, and the booking
        amount.
      </>
    ),
  },
  {
    label: "Brochure",
    body: <>the Embassy Riverine brochure PDF download, sent on WhatsApp or email.</>,
  },
];

const bookingSteps: { id: string; body: ReactNode }[] = [
  {
    id: "shortlist",
    body: (
      <>
        <strong className="text-[#12302a]">Shortlist</strong>{" "}a villa &amp; configuration
        from the{" "}
        <Link href="/price" className={linkCls}>
          price list
        </Link>{" "}
        and the{" "}
        <Link href="/floor-plans" className={linkCls}>
          floor plan
        </Link>
        .
      </>
    ),
  },
  {
    id: "cost-sheet",
    body: (
      <>
        <strong className="text-[#12302a]">Cost sheet</strong> in writing for that format, so
        you compare the real number, not the base price.
      </>
    ),
  },
  {
    id: "site-visit",
    body: (
      <>
        <strong className="text-[#12302a]">Site visit</strong> to see the plot, the facing and
        the corridor, and to mark your shortlist on the master plan.
      </>
    ),
  },
  {
    id: "eoi-or-booking",
    body: (
      <>
        <strong className="text-[#12302a]">EOI or booking.</strong> Where a release is open,
        the Embassy Riverine EOI secures priority allotment; the Embassy Riverine booking
        amount is <strong className="text-[#12302a]">about 10% of the villa price</strong> on
        a construction-linked plan, with the balance against construction milestones.
      </>
    ),
  },
  {
    id: "agreement",
    body: (
      <>
        <strong className="text-[#12302a]">Agreement.</strong> Read the specification
        annexure and the RERA carpet area before you sign. Seventy per cent of what you pay
        goes into the RERA escrow account.
      </>
    ),
  },
];

const contactFaqs = [
  {
    question: "What is the Embassy Riverine contact number?",
    answer: "+91 63566 63535, on call or WhatsApp, Monday to Sunday from 9 am to 8 pm IST.",
  },
  {
    question: "How do I book an Embassy Riverine site visit?",
    answer:
      "Call or WhatsApp the number above, or use the form on this page. We confirm a slot and arrange pickup from Hebbal or Yelahanka. Visits run seven days a week.",
  },
  {
    question: "Is there an Embassy Riverine sales office?",
    answer:
      "Site visits and plot selection happen at the project site on Chapparkallu Road, Tarahunise. We meet you at the township gate or pick you up.",
  },
  {
    question: "What is the booking amount?",
    answer:
      "About 10% of the villa price on a construction-linked plan, with EOI terms varying by release. The current working is in the cost sheet we send.",
  },
  {
    question: "How quickly will I get the cost sheet?",
    answer:
      "The same day on WhatsApp. Form enquiries get a call back within working hours and the sheet immediately after.",
  },
  {
    question: "Can NRIs buy a villa in Embassy Riverine?",
    answer:
      "Yes, under the RBI's general permission, with payment through NRE or NRO accounts or normal banking channels. We handle the paperwork and power of attorney.",
  },
  {
    question: "Which banks give home loans for Embassy Riverine?",
    answer:
      "Leading banks and housing finance companies are expected to approve the project. We compare offers across lenders rather than push one; ask for the current list.",
  },
  {
    question: "Is every Embassy Riverine villa for sale a primary allotment?",
    answer:
      "Yes. The project launched in September 2026, so every villa is a fresh allotment from the developer. There is no resale inventory yet.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    agentSchema,
    {
      "@type": "FAQPage",
      mainEntity: contactFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
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
        title="Contact Us – Embassy Riverine Contact Number, Site Visits and Booking"
        subtitle={
          <>
            <Link href="/" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            contact number:{" "}
            <a
              href={telHref}
              className="font-bold text-[#12302a] whitespace-nowrap hover:text-[#A8822E] transition-colors"
            >
              {project.phone}
            </a>
            , on call or WhatsApp, seven days a week from 9 am to 8 pm IST. Real Revenue is an
            authorised channel partner for Embassy Riverine, the 217-villa precinct of Embassy
            Origins at Tarahunise, North Bangalore. Contact us for the current price list and
            cost sheet, availability by villa &amp; configuration, the floor plan and master
            plan set, and an Embassy Riverine site visit with pickup from Hebbal or Yelahanka.
          </>
        }
      />

      {/* Response-time promise (closes the intro) */}
      <section className="w-full bg-white pt-14 md:pt-16 px-6">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <p className="bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-5 sm:p-6 text-[17px] leading-relaxed text-gray-700">
            <strong className="text-[#12302a]">One promise on response time:</strong> a
            WhatsApp enquiry gets the cost sheet the same day, and a form enquiry gets a call
            back within working hours. Nothing is sent that is not in writing from the
            developer.
          </p>
        </Reveal>
      </section>

      {/* Contact Us */}
      <section className="w-full bg-white py-14 md:py-16 px-6" id="contact-details">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">Contact Us</h2>
          </Reveal>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactDetails.map(({ icon: Icon, label, body }, i) => (
              <Reveal
                as="li"
                key={label}
                variant="up"
                delay={(i % 3) * 80}
                className="flex items-start gap-4 bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-5 sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 grid place-items-center w-9 h-9 rounded-full bg-white border border-[#e5dcc5] text-[#C8A24A]"
                >
                  <Icon size={14} />
                </span>
                <div className="min-w-0 text-[15px] text-gray-700 leading-relaxed">
                  <strong className={labelCls}>{label}</strong>{" "}
                  {body}
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={telHref}
              className="btn-sheen inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
            >
              <FaPhoneAlt size={12} aria-hidden="true" />
              Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#C8A24A] text-[#12302a] hover:bg-[#C8A24A] hover:text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
            >
              <FaWhatsapp size={15} aria-hidden="true" />
              WhatsApp Us
            </a>
          </Reveal>
        </div>
      </section>

      {/* Enquiry Form */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5] scroll-mt-24"
        id="enquiry-form"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Enquiry Form
            </h2>
          </Reveal>
          <ContactForm />
        </div>
      </section>

      {/* Site Visit */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="site-visit">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">Site Visit</h2>
            <p className="text-[17px] text-gray-700 leading-relaxed">
              An Embassy Riverine site visit takes about ninety minutes on site, plus the drive.
              We pick you up from Hebbal or Yelahanka, or meet you at the township gate on
              Chapparkallu Road if you are driving yourself.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <Reveal
              variant="up"
              className="bg-[#FAF8F3] rounded-lg p-6 border-l-[3px] border-[#C8A24A] text-[15px] text-gray-700 leading-relaxed space-y-3"
            >
              <p>
                <strong className={labelCls}>What you will see:</strong>{" "}
                the stream corridor and the retained tree cover, which are already there; the
                location of the clubhouse and the central lake on the ground; the position of
                the villa clusters against the{" "}
                <Link href="/master-plan" className={linkCls}>
                  master plan
                </Link>
                ; and the plots currently available in the villa &amp; configuration you are
                considering, including which face the water.
              </p>
              <p>
                Bring the questions you want answered on the drawing rather than the brochure,
                especially facing and the rear boundary of your shortlisted plots.
              </p>
            </Reveal>

            <Reveal
              variant="up"
              delay={90}
              className="bg-[#FAF8F3] rounded-lg p-6 border-l-[3px] border-[#C8A24A] text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                <strong className={labelCls}>What you get the same day:</strong>{" "}
                the current cost sheet for your format, the floor plan and master plan set, the
                amenities list as filed with RERA, and the location map with your shortlisted
                plots marked.
              </p>
            </Reveal>
          </div>

          <Reveal
            variant="up"
            className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5 bg-[#F6F2E8] border border-[#e0d6bd] rounded-lg p-6"
          >
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Visits run <strong className="text-[#12302a]">seven days a week</strong>. Weekend
              slots fill first; book two or three days ahead.
            </p>
            <EnquiryButton className="flex-shrink-0">Book a Site Visit</EnquiryButton>
          </Reveal>
        </div>
      </section>

      {/* What We Send */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="what-we-send"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              What We Send
            </h2>
          </Reveal>

          <ul className="grid sm:grid-cols-2 gap-5">
            {whatWeSend.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                variant="up"
                delay={(i % 2) * 70}
                className="bg-white rounded-lg p-6 border-l-[3px] border-[#C8A24A] shadow-sm text-gray-700 text-[15px] leading-relaxed"
              >
                <strong className={labelCls}>{item.label}:</strong>{" "}
                {item.body}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="how-booking-works">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
              How Booking Works
            </h2>
            <p className="text-[17px] text-gray-700 leading-relaxed mb-10">
              To buy a villa in Embassy Riverine, the sequence is short.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
            <ol className="md:col-span-3 relative border-l-2 border-[#e0d6bd] ml-4 space-y-8">
              {bookingSteps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.id}
                  variant="left"
                  delay={i * 80}
                  className="relative pl-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[17px] top-0 grid place-items-center w-8 h-8 rounded-full bg-[#C8A24A] text-white text-xs font-bold tabular-nums ring-4 ring-white"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] text-gray-700 leading-relaxed pt-1">{step.body}</p>
                </Reveal>
              ))}
            </ol>

            <Reveal
              variant="up"
              delay={120}
              className="md:col-span-2 bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-6"
            >
              <p className="text-[15px] text-gray-700 leading-relaxed">
                Verify the project at{" "}
                <a
                  href={rera.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  rera.karnataka.gov.in
                </a>{" "}
                under{" "}
                <strong className="text-[#12302a] break-all">{rera.villas}</strong> before you
                pay anything. The RERA-filed completion date is{" "}
                <strong className="text-[#12302a]">{rera.completion}</strong>, with phased
                handover indicated from 2030.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Home Loans and NRI Buyers */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="home-loans-nri-buyers"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Home Loans and NRI Buyers
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            <Reveal
              variant="up"
              className="bg-white rounded-lg p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                Leading banks and housing finance companies are expected to approve{" "}
                <Link href="/about-embassy-riverine" className={linkCls}>
                  Embassy Riverine
                </Link>
                . We arrange pre-approval and compare offers across lenders at no cost; at this
                ticket size a small difference in rate is a large difference over twenty years.
              </p>
            </Reveal>

            <Reveal
              variant="up"
              delay={90}
              className="bg-white rounded-lg p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                Non-resident buyers can purchase under the RBI&apos;s general permission with
                payment through NRE or NRO accounts or normal banking channels; we handle the
                documentation and the power of attorney so the booking and registration can
                proceed while you are overseas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={contactFaqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-white"
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
