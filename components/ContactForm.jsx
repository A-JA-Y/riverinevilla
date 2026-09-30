"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";
import submitForm from "../api/submitform";
import { reportLeadConversion } from "@/utils/gtagConversion";
import { downloadBrochure } from "@/utils/downloadBrochure";
import { configurations } from "@/data/project";

const EMPTY = { name: "", phone: "", email: "", config: "", intent: "" };

export default function ContactForm() {
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

      await submitForm({ data: formData });
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
    `w-full px-4 py-3 text-sm border rounded-md outline-none placeholder-gray-400 text-[#12302a] bg-white transition-colors duration-200 focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/25 ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="bg-white rounded-xl shadow-[0_18px_46px_-24px_rgba(18,48,42,0.45)] border border-[#efe7d6] px-5 py-6 md:p-10 w-full">
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
          {/* Left: pitch */}
          <div className="lg:w-[30%] flex-shrink-0">
            <h3 className="text-lg md:text-xl font-bold text-[#12302a] leading-tight">
              Embassy Riverine — Villas at Embassy Origins
            </h3>
            <p className="text-[#A8822E] mt-1 text-sm font-semibold">
              Tarahunise, North Bangalore
            </p>
            <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
              4, 4.5 &amp; 5 BHK from Rs 14.10 Cr. Cost sheet and floor plans sent the same
              day.
            </p>
          </div>

          {/* Right: fields */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label htmlFor="cf-name" className="sr-only">Your name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                maxLength={100}
                aria-invalid={!!errors.name}
                className={inputClass(errors.name)}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="cf-phone" className="sr-only">Phone number</label>
              <input
                id="cf-phone"
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                maxLength={15}
                aria-invalid={!!errors.phone}
                className={inputClass(errors.phone)}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="cf-email" className="sr-only">Email address</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID *"
                aria-invalid={!!errors.email}
                className={inputClass(errors.email)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="cf-config" className="sr-only">Preferred configuration</label>
              <select
                id="cf-config"
                name="config"
                value={formData.config}
                onChange={handleChange}
                className={`${inputClass(false)} ${formData.config ? "" : "text-gray-400"}`}
              >
                <option value="">Preferred configuration</option>
                {configurations.map((c) => (
                  <option key={c.id} value={c.short}>
                    {c.short} · {c.builtUp}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-intent" className="sr-only">Buying to live in or to invest</label>
              <select
                id="cf-intent"
                name="intent"
                value={formData.intent}
                onChange={handleChange}
                className={`${inputClass(false)} ${formData.intent ? "" : "text-gray-400"}`}
              >
                <option value="">Live in or invest?</option>
                <option value="End use">To live in</option>
                <option value="Investment">To invest</option>
                <option value="Both">Both</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-sheen w-full bg-[#C8A24A] hover:bg-[#A8822E] disabled:opacity-70 disabled:cursor-not-allowed text-white text-xs font-bold tracking-[0.16em] uppercase px-6 py-3 rounded-md transition-colors duration-300"
            >
              {loading ? "Submitting…" : "Book Site Visit"}
            </button>
          </div>
        </div>

        {status === "error" && (
          <p role="alert" className="flex items-center gap-2 text-red-600 mt-4 text-sm">
            <FaTimesCircle aria-hidden="true" />
            Something went wrong. Please try again, or call us directly.
          </p>
        )}

        <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
          By submitting, you authorise Real Revenue and its representatives to contact you
          by phone, SMS, WhatsApp and email regarding this enquiry. This consent overrides
          your DND/NCPR registration.
        </p>
      </form>
    </div>
  );
}
