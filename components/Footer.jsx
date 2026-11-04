import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt } from "react-icons/fa";
import { footerNavLinks } from "@/data/siteNav";
import { project, rera } from "@/data/project";
import logoLight from "@/assets/logo-light.webp";
import credaiKarnataka from "@/assets/credai-karnataka.png";

/** Long slash-separated IDs (RERA numbers) wrap after a slash, never mid-segment;
    <wbr> adds no characters, so the number still copies intact. */
function SlashBreaks({ text }) {
  return text.split("/").map((part, i) => (
    <Fragment key={i}>
      {i > 0 ? (
        <>
          /<wbr />
        </>
      ) : null}
      {part}
    </Fragment>
  ));
}

export default function Footer() {
  const half = Math.ceil(footerNavLinks.length / 2);
  const col1 = footerNavLinks.slice(0, half);
  const col2 = footerNavLinks.slice(half);

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0b1f1a] border-t border-[#C8A24A]/20 px-6 md:px-[30px] py-8 md:py-[30px] font-[400]">
      <div className="flex flex-col m-auto max-w-5xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-2">
          {/* Brand */}
          <div>
            <Image
              src={logoLight}
              alt="Embassy Riverine"
              className="h-9 w-auto mb-3"
              sizes="200px"
            />
            <p className="text-white/55 text-xs leading-relaxed">
              217 luxury 4, 4.5 and 5 BHK villas across the 85-acre Embassy Origins
              township at Tharahunise, North Bangalore, by Embassy Developments Limited.
            </p>
            {/* Karnataka RERA: the registration number and the authority's website,
                which K-RERA asks project advertising to show */}
            <div className="mt-4">
              <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                Karnataka RERA
              </p>
              <a
                href={rera.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5"
                aria-label={`Karnataka RERA registration ${rera.villas}, verify at rera.karnataka.gov.in`}
              >
                {/* TODO(K-RERA logo): swap this icon for the official logo image once supplied */}
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 grid place-items-center w-9 h-9 rounded-md bg-white text-[#12302a]"
                >
                  <FaShieldAlt size={16} />
                </span>
                <span className="min-w-0 text-[11px] leading-relaxed">
                  <span className="block text-white/70">
                    Reg. No. <SlashBreaks text={rera.villas} />
                  </span>
                  <span className="block text-white/45 group-hover:text-[#C8A24A] transition-colors">
                    rera.karnataka.gov.in
                  </span>
                </span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
                Member Of
              </p>
              <span className="inline-flex bg-white rounded-md p-1.5">
                <Image
                  src={credaiKarnataka}
                  alt="CREDAI Karnataka"
                  className="h-12 w-auto"
                  sizes="100px"
                />
              </span>
            </div>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2" aria-label="Footer">
            <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-6">
              {[col1, col2].map((col, i) => (
                <ul key={i} className="flex flex-col gap-2">
                  {col.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-white/70 text-xs hover:text-[#C8A24A] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
              Site Address
            </p>
            <address className="not-italic flex items-start gap-1.5 text-white/70 text-xs mb-4 leading-relaxed">
              <svg className="w-3 h-3 text-[#C8A24A] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                Embassy Origins, {project.street}, {project.city}, {project.region}{" "}
                {project.postalCode}
              </span>
            </address>

            <p className="text-[#C8A24A] text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
              Talk to Us
            </p>
            <a
              href={`tel:${project.phoneHref}`}
              className="flex items-center gap-1.5 text-white/80 text-xs hover:text-[#C8A24A] transition-colors mb-2"
            >
              <svg className="w-3 h-3 text-[#C8A24A] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {project.phone}
            </a>
            <a
              href={`mailto:${project.email}`}
              className="flex items-center gap-1.5 text-white/80 text-xs hover:text-[#C8A24A] transition-colors mb-2 break-all"
            >
              <svg className="w-3 h-3 text-[#C8A24A] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              {project.email}
            </a>
            <p className="text-white/40 text-[11px]">Site visits, seven days a week</p>
          </div>
        </div>



        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          
        
          <Link
            href="/privacy-policy"
            className="text-white/80 text-xs hover:text-[#C8A24A] transition-colors"
          >
            Privacy Policy / Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
