import Link from "next/link";
import Image from "next/image";
import { footerNavLinks } from "@/data/siteNav";
import { project, rera } from "@/data/project";
import logoLight from "@/assets/logo-light.webp";

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
              township at Tarahunise, North Bangalore, by Embassy Developments Limited.
            </p>
            <p className="text-white/40 text-[11px] leading-relaxed mt-3 break-all">
              RERA: {rera.villas}
            </p>
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

        {/* Disclaimer */}
        <div className="text-center mb-4">
          <p className="text-[11px] text-white/45 leading-relaxed">
            Disclaimer: Real Revenue is an authorised channel partner. This website is a
            marketing initiative and is not the official website of the developer. All
            images, plans and specifications are indicative and subject to change by the
            developer and the competent authority. Photography used on this site is
            representative and does not depict the actual project. Prices quoted are
            indicative, exclusive of taxes and statutory charges, and subject to revision
            without notice. Nothing on this site constitutes an offer or a contract. Please
            refer to the RERA-registered particulars and the agreement to sell before
            making any purchase decision.
            {rera.agent ? ` Karnataka RERA Agent Registration: ${rera.agent}.` : null}
          </p>
          <hr className="border-t border-white/10 mt-3" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <p className="text-white/80 text-xs tracking-wide">
            Copyright &copy; {year} <span className="font-bold text-white">Real Revenue</span>{" "}
            &mdash; Authorised Channel Partner
          </p>
          <span className="text-white/20 hidden sm:inline">|</span>
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
