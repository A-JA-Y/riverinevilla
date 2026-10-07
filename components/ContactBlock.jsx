import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import EnquiryButton from "./EnquiryButton";
import { project } from "@/data/project";

const MESSAGE =
  "Hi, I am interested in Embassy Riverine villas at Embassy Origins, North Bangalore. Please share the price sheet and availability.";

/**
 * The "Contact Us" close that ends every content page: a page-specific intro
 * paragraph, then the contact number, email and site address.
 */
export default function ContactBlock({
  title = "Contact Us",
  intro,
  cta = "Book a Site Visit",
  className = "bg-[#FAF8F3]",
}) {
  const rows = [
    {
      icon: FaPhoneAlt,
      label: "Embassy Riverine contact number",
      value: `${project.phone} (call or WhatsApp)`,
      href: `tel:${project.phoneHref}`,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: project.phone,
      href: `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(MESSAGE)}`,
      external: true,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: project.email,
      href: `mailto:${project.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Site address",
      value: `${project.township}, ${project.street}, ${project.city} ${project.postalCode}`,
    },
  ];

  return (
    <section className={`w-full py-16 md:py-20 px-6 ${className}`} id="contact">
      <Reveal variant="up" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">{title}</h2>
          {intro ? (
            <div className="text-[15px] leading-relaxed text-gray-700 space-y-4">{intro}</div>
          ) : null}
          {cta ? (
            <div className="mt-7">
              <EnquiryButton>{cta}</EnquiryButton>
            </div>
          ) : null}
        </div>

        <ul className="space-y-4 self-center">
          {rows.map(({ icon: Icon, label, value, href, external }) => (
            <li
              key={label}
              className="flex items-start gap-4 bg-white border border-[#e5dcc5] rounded-lg p-4"
            >
              <Icon className="text-[#C8A24A] mt-1 flex-shrink-0" size={16} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A8822E]">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-[15px] text-[#12302a] font-medium break-words hover:text-[#A8822E] transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[15px] text-[#12302a] font-medium">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
