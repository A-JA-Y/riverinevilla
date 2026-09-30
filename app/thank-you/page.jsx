"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.webp";
import { project } from "@/data/project";
import { markLeadCaptured, downloadBrochure } from "@/utils/downloadBrochure";

const REDIRECT_AFTER = 8;

export default function ThankYouPage() {
  const router = useRouter();
  const [left, setLeft] = useState(REDIRECT_AFTER);

  useEffect(() => {
    markLeadCaptured();

    const tick = setInterval(() => setLeft((n) => n - 1), 1000);
    const timeout = setTimeout(() => router.push("/"), REDIRECT_AFTER * 1000);

    return () => {
      clearInterval(tick);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F2E8] px-5 py-16">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_18px_46px_-24px_rgba(18,48,42,0.45)] border border-[#e5dcc5] max-w-lg w-full text-center flex flex-col items-center">
        <Image
          src={logo}
          alt="Embassy Riverine"
          className="h-10 w-auto object-contain mb-7"
          sizes="220px"
          priority
        />

        <div className="w-16 h-16 bg-[#C8A24A]/12 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-[#C8A24A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3 leading-tight">
          Thank you — your brochure is on its way.
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          If you do not see it in five minutes, check your promotions folder. One of our
          Embassy Riverine specialists will call you shortly to answer questions on
          pricing, inventory and the payment plan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            type="button"
            onClick={downloadBrochure}
            className="btn-sheen flex-1 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-6 py-3.5 rounded transition-colors cursor-pointer"
          >
            Download Again
          </button>
          <a
            href={`tel:${project.phoneHref}`}
            className="flex-1 inline-flex items-center justify-center border border-[#C8A24A] text-[#A8822E] hover:bg-[#C8A24A] hover:text-white text-xs font-bold uppercase tracking-[0.16em] px-6 py-3.5 rounded transition-colors"
          >
            Call {project.phone}
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-7">
          Returning home in {Math.max(left, 0)}s ·{" "}
          <Link href="/" className="text-[#A8822E] font-semibold link-wipe">
            go now
          </Link>
        </p>
      </div>
    </div>
  );
}
