"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";
import submitForm from "../api/submitform";
import { reportLeadConversion } from "@/utils/gtagConversion";
import { downloadBrochure } from "@/utils/downloadBrochure";
import { configurations } from "@/data/project";

const EMPTY = { name: "", phone: "", email: "", config: "", intent: "", visitDay: "" };

/** Today as YYYY-MM-DD in the visitor's own time zone (for the date picker's `min`). */
const localToday = () => {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

/**
 * Lead form. Field labels, button and consent line follow the contact-page doc
 * ("Enquiry Form").
 * - `variant="wide"` (default): the contact page. Pitch on top, then a
 *   three-column grid of labelled fields, including the optional
 *   "Preferred site visit day".
 * - `variant="stacked"`: the card in the home-page hero. Compact: labels are
 *   screen-reader only (the placeholders carry the same text), and the visit
 *   day is left out so the card stays within the hero.
 */
export default function ContactForm({ variant = "wide" }) {
  const stacked = variant === "stacked";
  const router = useRouter();
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "This field is required.";
    if (!/^[\d+\-\s()]{8,}$/.test(formData.phone.trim()))
      e.phone = "Enter a valid phone number.";
    if (!/\S+@\S+\.\S+/.test(formData.email.trim()))
      e.email = "Enter a valid email address.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      setStatus(null);

      // The visit day is optional and only asked on the contact page: send it
      // only when given, so every other lead keeps the original payload.
      const { visitDay, ...rest } = formData;
      await submitForm({ data: visitDay ? formData : rest });
      await reportLeadConversion();
      downloadBrochure();

      setFormData(EMPTY);
      router.push("/thank-you");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 ${stacked ? "py-3 lg:py-2.5" : "py-3 min-h-[46px]"} text-sm border rounded-md outline-none placeholder-gray-400 text-[#12302a] bg-white transition-colors duration-200 focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/25 ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  // Visible on the contact page, screen-reader only in the compact hero card.
  const labelClass = stacked
    ? "sr-only"
    : "block text-[13px] font-semibold text-[#12302a] mb-1.5";
  const req = stacked ? null : (
    <span aria-hidden="true" className="text-[#A8822E]">
      {" "}
      *
    </span>
  );

  const consent = (
    <p
      className={`text-[11px] text-gray-400 leading-relaxed ${
        stacked ? "mt-3" : "sm:col-span-2 order-last lg:order-none lg:self-center"
      }`}
    >
      By submitting, you authorise Real Revenue and its representatives to contact you by
      phone, SMS, WhatsApp and email regarding this enquiry. This consent overrides your
      DND/NCPR registration.
    </p>
  );

  return (
    <div
      className={
        stacked
          ? "bg-white rounded-xl shadow-[0_28px_60px_-30px_rgba(6,20,15,0.65)] border border-[#efe7d6] border-t-[3px] border-t-[#C8A24A] px-5 py-6 sm:px-7 sm:py-7 w-full"
          : "bg-white rounded-xl shadow-[0_18px_46px_-24px_rgba(18,48,42,0.45)] border border-[#efe7d6] px-5 py-6 md:p-10 w-full"
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className={stacked ? "flex flex-col gap-5" : "flex flex-col gap-6"}>
          {/* Pitch */}
          <div className={stacked ? "" : "pb-6 border-b border-[#efe7d6]"}>
            {/* a form title, not a content heading — keeps the page outline clean */}
            <p className="text-lg md:text-xl font-bold text-[#12302a] leading-snug">
              Embassy Riverine – Villas at Embassy Origins,{" "}
              <span className="text-[#A8822E]">Tarahunise, North Bangalore</span>
            </p>
            <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
              4, 4.5 and 5 BHK from Rs 14.10 Cr. Cost sheet and floor plans sent the same
              day.
            </p>
          </div>

          {/* Fields */}
          <div
            className={
              stacked
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5"
            }
          >
            <div>
              <label htmlFor="cf-name" className={labelClass}>
                Your name{req}
              </label>
              <input
                id="cf-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={stacked ? "Your name *" : undefined}
                maxLength={100}
                aria-required="true"
                aria-invalid={!!errors.name}
                className={inputClass(errors.name)}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="cf-phone" className={labelClass}>
                Phone number{req}
              </label>
              <input
                id="cf-phone"
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={stacked ? "Phone number *" : undefined}
                maxLength={15}
                aria-required="true"
                aria-invalid={!!errors.phone}
                className={inputClass(errors.phone)}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="cf-email" className={labelClass}>
                Email address{req}
              </label>
              <input
                id="cf-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={stacked ? "Email address *" : undefined}
                aria-required="true"
                aria-invalid={!!errors.email}
                className={inputClass(errors.email)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="cf-config" className={labelClass}>
                Preferred villa &amp; configuration
              </label>
              <select
                id="cf-config"
                name="config"
                value={formData.config}
                onChange={handleChange}
                className={`${inputClass(false)} ${formData.config ? "" : "text-gray-400"}`}
              >
                <option value="">
                  {stacked ? "Preferred villa & configuration" : "Select a configuration"}
                </option>
                {configurations.map((c) => (
                  <option key={c.id} value={c.short}>
                    {c.short} · {c.builtUp}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-intent" className={labelClass}>
                Buying to live in, to invest, or both
              </label>
              <select
                id="cf-intent"
                name="intent"
                value={formData.intent}
                onChange={handleChange}
                className={`${inputClass(false)} ${formData.intent ? "" : "text-gray-400"}`}
              >
                <option value="">
                  {/* short in the hero card so it never truncates on narrow phones */}
                  {stacked ? "Live in, invest, or both?" : "Select one"}
                </option>
                <option value="End use">To live in</option>
                <option value="Investment">To invest</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {!stacked && (
              <div>
                <label htmlFor="cf-visit" className={labelClass}>
                  Preferred site visit day{" "}
                  <span className="font-normal text-gray-500">(optional)</span>
                </label>
                <input
                  id="cf-visit"
                  type="date"
                  name="visitDay"
                  value={formData.visitDay}
                  onChange={handleChange}
                  onFocus={(e) => {
                    if (!e.currentTarget.min) e.currentTarget.min = localToday();
                  }}
                  className={`${inputClass(false)} text-left ${
                    formData.visitDay ? "" : "text-gray-400"
                  }`}
                />
              </div>
            )}

            {!stacked && consent}

            <button
              type="submit"
              disabled={loading}
              className={`btn-sheen w-full bg-[#C8A24A] hover:bg-[#A8822E] disabled:opacity-70 disabled:cursor-not-allowed text-white text-xs font-bold tracking-[0.16em] uppercase px-6 rounded-md transition-colors duration-300 ${
                stacked ? "py-3" : "py-4 sm:col-span-2 lg:col-span-1 lg:self-center"
              }`}
            >
              {loading ? "Submitting…" : "Book a Site Visit"}
            </button>
          </div>
        </div>

        {status === "error" && (
          <p role="alert" className="flex items-center gap-2 text-red-600 mt-4 text-sm">
            <FaTimesCircle aria-hidden="true" />
            Something went wrong. Please try again, or call us directly.
          </p>
        )}

        {stacked && consent}
      </form>
    </div>
  );
}
