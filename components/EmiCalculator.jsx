"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { useModal } from "./ModalContext";

function SliderField({ label, min, max, step, value, onChange, pillLabel, rightLabel }) {
  const pct = (value - min) / (max - min);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-1.5">
        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">{label}</p>
        <div className="flex items-baseline gap-2">{rightLabel}</div>
      </div>

      <div className="relative h-9">
        <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 -translate-y-1/2 rounded" />
        <div
          className="absolute top-1/2 left-0 h-[3px] bg-[#C8A24A] -translate-y-1/2 rounded transition-[width] duration-150"
          style={{ width: `${pct * 100}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border border-[#e0d6bd] shadow-sm rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap pointer-events-none text-[#12302a] transition-[left] duration-150"
          style={{ left: `${pct * 100}%` }}
        >
          {pillLabel}
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

/** Formats paise-free rupees in the Indian numbering system. */
const fmt = (n) => Math.round(n).toLocaleString("en-IN");

/** Renders 141000000 as "14.10 Cr". */
const crores = (n) => `${(n / 1e7).toFixed(2)} Cr`;

export default function EmiCalculator() {
  const { openModal } = useModal();

  // Defaults sit at the 4 BHK entry price with a 25% down payment.
  const [price, setPrice] = useState(141000000);
  const [downPercent, setDownPercent] = useState(25);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8.5);

  const principal = price * (1 - downPercent / 100);

  const emi = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    if (!n) return 0;
    if (r === 0) return Math.round(principal / n);
    return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [principal, years, rate]);

  const totalPayable = emi * years * 12;
  const totalInterest = Math.max(totalPayable - principal, 0);

  return (
    <section className="w-full bg-[#F6F2E8] py-16 md:py-20 px-6" id="emi">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="text-center mb-10">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Plan the Purchase
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            EMI Calculator
          </h2>
          <p className="text-gray-600 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Indicative only. Actual rates depend on your lender and profile, and the figures
            below exclude GST, stamp duty and registration.
          </p>
        </Reveal>

        {/* grid-cols-1 (minmax(0,1fr)) rather than an implicit auto column: the
            number input's intrinsic width otherwise stretched both cards past
            the edge of small phones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Inputs */}
          <Reveal
            variant="left"
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_2px_24px_rgba(18,48,42,0.08)] border border-[#efe7d6]"
          >
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 mb-1.5">
                Property Price
              </p>
              <div className="flex items-center border-b-2 border-[#12302a] pb-1">
                <span className="text-gray-400 text-lg mr-1.5">₹</span>
                <input
                  type="number"
                  value={price}
                  min={10000000}
                  step={100000}
                  onChange={(e) => setPrice(Math.max(Number(e.target.value) || 0, 0))}
                  aria-label="Property price in rupees"
                  className="flex-1 min-w-0 border-none outline-none text-[clamp(18px,4.6vw,26px)] font-bold bg-transparent text-[#12302a] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-[#A8822E] text-sm font-semibold whitespace-nowrap">
                  {crores(price)}
                </span>
              </div>
            </div>

            <SliderField
              label="Down Payment"
              min={10}
              max={90}
              step={1}
              value={downPercent}
              onChange={setDownPercent}
              pillLabel={`${downPercent}%`}
              rightLabel={
                <>
                  <span className="text-sm font-bold text-[#12302a]">{downPercent}%</span>
                  <span className="text-xs text-gray-400">
                    ₹{fmt((price * downPercent) / 100)}
                  </span>
                </>
              }
            />

            <SliderField
              label="Tenure"
              min={1}
              max={30}
              step={1}
              value={years}
              onChange={setYears}
              pillLabel={`${years} Yrs`}
              rightLabel={<span className="text-sm font-bold text-[#12302a]">{years} Years</span>}
            />

            <SliderField
              label="Interest Rate"
              min={6}
              max={14}
              step={0.05}
              value={rate}
              onChange={setRate}
              pillLabel={`${rate.toFixed(2)}%`}
              rightLabel={
                <span className="text-sm font-bold text-[#12302a]">{rate.toFixed(2)}%</span>
              }
            />
          </Reveal>

          {/* Result */}
          <Reveal
            variant="right"
            delay={100}
            className="bg-[#12302a] text-[#F6F2E8] p-6 sm:p-8 rounded-2xl shadow-lg"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#C8A24A] mb-2">
              Estimated Monthly EMI
            </p>
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-[clamp(28px,7vw,44px)] font-bold tabular-nums leading-none">
                ₹{fmt(emi)}
              </span>
              <span className="text-white/50 text-sm">/ month</span>
            </div>

            <dl className="mt-7 space-y-3.5 text-sm border-t border-white/12 pt-5">
              {[
                ["Loan amount", `₹${fmt(principal)}`],
                ["Down payment", `₹${fmt((price * downPercent) / 100)}`],
                ["Total interest", `₹${fmt(totalInterest)}`],
                ["Total repayable", `₹${fmt(totalPayable)}`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-white/55">{k}</dt>
                  <dd className="font-semibold tabular-nums text-right">{v}</dd>
                </div>
              ))}
            </dl>

            {/* principal vs interest split */}
            <div className="mt-6">
              <div
                className="flex h-2.5 rounded-full overflow-hidden bg-white/10"
                role="img"
                aria-label={`Principal is ₹${fmt(principal)}, interest is ₹${fmt(totalInterest)}`}
              >
                <span
                  className="bg-[#C8A24A] transition-[width] duration-300"
                  style={{ width: `${(principal / Math.max(totalPayable, 1)) * 100}%` }}
                />
                <span className="bg-[#4E8C9E] flex-1 transition-[width] duration-300" />
              </div>
              <div className="flex justify-between text-[11px] text-white/50 mt-2">
                <span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#C8A24A] mr-1.5 align-middle" />
                  Principal
                </span>
                <span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#4E8C9E] mr-1.5 align-middle" />
                  Interest
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openModal()}
              className="btn-sheen w-full mt-7 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] py-3.5 rounded transition-colors cursor-pointer"
            >
              Get a Personalised Cost Sheet
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
