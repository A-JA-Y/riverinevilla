import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { project, rera } from "@/data/project";

const META_TITLE = "Privacy Policy & Disclaimer | Embassy Riverine";
const META_DESCRIPTION =
  "Privacy policy and disclaimer for the Embassy Riverine channel-partner microsite operated by Real Revenue.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/privacy-policy",
    siteName: "Embassy Riverine",
    images: [{ url: "/og-cover.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/og-cover.webp"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy / Disclaimer"
        subtitle="Please read the following before using this website."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-[#12302a] mb-3">Disclaimer</h2>
            <p>
              Real Revenue is an authorised channel partner. This website is a marketing
              initiative and is <strong>not the official website of the developer</strong>,
              Embassy Developments Limited. All rights in the developer&rsquo;s logos,
              trademarks and images are reserved by the developer.
            </p>
            <p className="mt-3">
              All images, plans and specifications shown here are indicative and subject to
              change by the developer and the competent authority. Photography used on this
              site is representative and does not depict the actual project. The floor
              plans and master plan drawings shown are schematic illustrations prepared to
              explain the published configuration data — they are not the sanctioned
              architectural drawings.
            </p>
            <p className="mt-3">
              Prices quoted are indicative launch pricing, exclusive of taxes and statutory
              charges, and subject to revision without notice. Nothing on this site
              constitutes an offer or a contract. Please refer to the RERA-registered
              particulars and the agreement to sell before making any purchase decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#12302a] mb-3">RERA</h2>
            <p>
              Embassy Riverine is registered with Karnataka RERA under{" "}
              <strong className="break-all">{rera.villas}</strong>, registered on{" "}
              {rera.registered}. The apartment precinct, Embassy South Reserve, is
              registered under <strong className="break-all">{rera.apartments}</strong>.
            </p>
            <p className="mt-3">
              Verify both numbers at{" "}
              <a
                href={rera.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8822E] font-semibold link-wipe"
              >
                rera.karnataka.gov.in
              </a>{" "}
              before booking. Seventy per cent of all amounts collected is deposited in a
              designated escrow account as required under Section 4(2)(l)(D) of the Real
              Estate (Regulation and Development) Act, 2016.
            </p>
            {rera.agent ? (
              <p className="mt-3">Karnataka RERA Agent Registration: {rera.agent}.</p>
            ) : null}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#12302a] mb-3">Privacy Policy</h2>
            <p>
              We respect your privacy. Information submitted through enquiry forms on this
              website — your name, phone number, email address and any stated configuration
              preference — is used only to respond to your enquiry and to provide
              project-related information.
            </p>
            <p className="mt-3">
              By submitting an enquiry form you authorise Real Revenue and its
              representatives to contact you by phone, SMS, WhatsApp and email regarding
              that enquiry. This consent overrides your DND/NCPR registration. You may ask
              us to stop contacting you at any time by calling {project.phone}.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties. Data may be shared with
              the developer and with authorised representatives solely for the purpose of
              assisting you with project-related queries and processing a booking.
            </p>
            <p className="mt-3">
              This site uses Google Analytics, Google Tag Manager, Google Ads conversion
              tracking, Microsoft Clarity and Vercel Analytics to measure traffic and
              advertising performance. These services set cookies and may record
              interaction data. You can block them through your browser settings or an ad
              blocker without losing access to the site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#12302a] mb-3">
              Accuracy of Information
            </h2>
            <p>
              Project details, pricing, floor plans, distances, drive times and availability
              mentioned on this website are indicative and subject to change without prior
              notice. Distances are approximate and measured from the township gate by road;
              drive times vary with traffic conditions. Users are advised to verify all
              details with the authorised sales team before making any decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#12302a] mb-3">Contact</h2>
            <p>
              For any queries regarding this website, please visit our{" "}
              <Link href="/contact-us" className="text-[#A8822E] font-semibold link-wipe">
                Contact Us
              </Link>{" "}
              page or call{" "}
              <a
                href={`tel:${project.phoneHref}`}
                className="text-[#A8822E] font-semibold link-wipe"
              >
                {project.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
