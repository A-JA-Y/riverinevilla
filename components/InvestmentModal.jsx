"use client";

import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import submitForm from "../api/submitform";
import { reportLeadConversion } from "@/utils/gtagConversion";
import { downloadBrochure } from "@/utils/downloadBrochure";
import { configurations } from "@/data/project";

const EMPTY = { name: "", phone: "", email: "", config: "" };

export default function InvestmentModal({ isOpen, onClose, setIsSubmitted }) {
  const router = useRouter();
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Escape to dismiss + lock background scroll while open. */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "This field is required.";
    if (!/^[\d+\-\s()]{8,}$/.test(formData.phone.trim()))
      e.phone = "Enter a valid phone number.";
    if (!/\S+@\S+\.\S+/.test(formData.email.trim()))
      e.email = "Enter a valid email address.";
    setErrors(e);
    const hasError = Object.keys(e).length > 0;
    setSubmitError(hasError);
    return !hasError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await submitForm({ data: formData });
      await reportLeadConversion();

      setIsSubmitted?.(true);
      downloadBrochure();

      onClose?.();
      router.push("/thank-you");
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full px-3.5 py-3 text-base md:text-sm bg-[#FAF8F3] border border-[#e0d6bd] rounded-md outline-none placeholder-[#9aa8a2] text-[#12302a] transition-colors duration-200 focus:border-[#C8A24A] focus:ring-2 focus:ring-[#C8A24A]/25";

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-[#06140f]/75 backdrop-blur-sm px-4 py-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <div className="relative bg-white w-full max-w-md rounded-xl shadow-2xl border-t-4 border-[#C8A24A] p-7 sm:p-8 my-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#12302a] text-white text-sm font-bold flex items-center justify-center hover:bg-[#C8A24A] transition-colors z-10"
        >
          ✕
        </button>

        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8822E] mb-2">
          Embassy Riverine
        </p>
        <h2 id="brochure-modal-title" className="text-lg font-bold leading-snug text-[#12302a]">
          Cost sheet, floor plans &amp; master plan
        </h2>
        <p className="text-gray-600 text-sm mt-2 mb-5 leading-relaxed">
          One PDF, sent to your inbox in under a minute. We will also unlock the plans on
          this page.
        </p>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {submitError && (
            <p role="alert" className="flex items-start gap-2 text-red-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 6v3.5M9 12h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Please check the highlighted fields and try again.</span>
            </p>
          )}

          <div>
            <label htmlFor="im-name" className="sr-only">Your name</label>
            <input
              id="im-name"
              className={`${inputBase} ${errors.name ? "border-red-500" : ""}`}
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name *"
              maxLength={100}
              aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="im-phone" className="sr-only">Phone number</label>
            <input
              id="im-phone"
              className={`${inputBase} ${errors.phone ? "border-red-500" : ""}`}
              type="tel"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number *"
              maxLength={15}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="im-email" className="sr-only">Email address</label>
            <div className="relative">
              <input
                id="im-email"
                className={`${inputBase} pr-10 ${errors.email ? "border-red-500" : ""}`}
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID *"
                aria-invalid={!!errors.email}
              />
              <FaEnvelope
                aria-hidden="true"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C8A24A] text-base pointer-events-none"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="im-config" className="sr-only">Preferred configuration</label>
            <select
              id="im-config"
              name="config"
              value={formData.config}
              onChange={handleChange}
              className={`${inputBase} ${formData.config ? "" : "text-[#9aa8a2]"}`}
            >
              <option value="">Preferred configuration (optional)</option>
              {configurations.map((c) => (
                <option key={c.id} value={c.short}>
                  {c.short} · {c.builtUp} · {c.priceFrom}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-sheen bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold tracking-[0.16em] uppercase px-6 py-3.5 rounded-md transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending…" : "Send Me the Brochure"}
          </button>

          <p className="text-[11px] text-gray-400 leading-relaxed">
            I authorise Real Revenue and its representatives to contact me by phone, SMS,
            WhatsApp and email regarding this enquiry. This consent overrides my DND/NCPR
            registration.
          </p>
        </form>
      </div>
    </div>
  );
}
