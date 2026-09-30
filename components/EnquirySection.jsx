"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import submitForm from "@/api/submitform";
import { reportLeadConversion } from "@/utils/gtagConversion";
import { downloadBrochure } from "@/utils/downloadBrochure";
import { InputField } from "@/components/form/InputFields";
import Reveal from "./Reveal";
import logo from "@/assets/logo.webp";
import backdrop from "@/assets/enquiry-backdrop.webp";

export default function EnquirySection({
  logoSrc = logo,
  logoAlt = "Embassy Riverine",
  heading = "See the riverine corridor before it is landscaped.",
  body = "Site visits run seven days a week. We arrange pickup from Hebbal or Yelahanka, walk you through the master plan on site, and send the price sheet the same day. Real Revenue is an authorised channel partner for Embassy Riverine — we handle the cost sheet, the inventory position, home-loan pre-approval and, for overseas buyers, the power-of-attorney paperwork.",
}) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "This field is required.";
    if (!/^[\d+\-\s()]{8,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!/\S+@\S+\.\S+/.test(form.email.trim())) e.email = "Enter a valid email address.";
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    try {
      setLoading(true);
      setApiError("");

      await submitForm({ data: form });
      await reportLeadConversion();
      downloadBrochure();

      router.push("/thank-you");
    } catch {
      setApiError("Something went wrong. Please try again, or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="book-site-visit"
      className="relative w-full px-6 py-14 md:px-[30px] md:py-[60px] overflow-hidden bg-[#12302a]"
    >
      <Image
        src={backdrop}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        quality={62}
        className="object-cover opacity-[0.14]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#0b1f1a]/90 via-[#12302a]/85 to-[#12302a]/95"
      />

      <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row lg:gap-16">
        {/* Left: brand */}
        <Reveal variant="left" className="flex flex-col gap-5 lg:w-1/2">
          <Image
            src={logoSrc}
            alt={logoAlt}
            className="h-11 w-auto object-contain self-start"
            sizes="220px"
          />

          <h2 className="text-[#F6F2E8] text-2xl md:text-3xl font-semibold leading-tight">
            {heading}
          </h2>

          <p className="text-sm leading-relaxed text-[#F6F2E8]/75">{body}</p>

          <ul className="flex flex-wrap gap-2 mt-1">
            {["Cost sheet", "Floor plans", "Master plan", "Payment schedule"].map((t) => (
              <li
                key={t}
                className="text-[11px] uppercase tracking-[0.12em] text-[#F6F2E8]/70 border border-white/20 rounded-full px-3 py-1.5"
              >
                {t}
              </li>
            ))}
          </ul>

          <hr className="border-[#C8A24A]/40 w-[30%] mt-2 hidden lg:block" />
        </Reveal>

        <hr className="border-white/15 my-8 lg:hidden" />

        {/* Right: form */}
        <Reveal variant="right" className="lg:w-1/2">
          <h6 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A24A] mb-3">
            Book a Site Visit
          </h6>
          <p className="text-[#F6F2E8] text-sm mb-5">
            Leave your details and one of our Embassy Riverine specialists will call you
            back.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
            <InputField
              id="enq-name"
              type="text"
              placeholder="Enter your name *"
              value={form.name}
              onChange={handleChange("name")}
              error={errors.name}
              autoComplete="name"
              maxLength={100}
            />

            <InputField
              id="enq-phone"
              type="tel"
              inputMode="tel"
              placeholder="Phone number *"
              value={form.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
              autoComplete="tel"
              maxLength={15}
            />

            <InputField
              id="enq-email"
              type="email"
              placeholder="Email ID *"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
              autoComplete="email"
            />

            {apiError && (
              <p role="alert" className="text-red-300 text-sm">
                {apiError}
              </p>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={loading}
                className="btn-sheen px-8 py-3.5 rounded bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting…" : "Book a Site Visit"}
              </button>
            </div>

            <p className="text-[11px] text-[#F6F2E8]/45 leading-relaxed mt-1">
              I authorise Real Revenue and its representatives to contact me by phone, SMS,
              WhatsApp and email regarding this enquiry. This consent overrides my DND/NCPR
              registration.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
