export default function PageBanner({ title, subtitle, eyebrow, as: Tag = "h1" }) {
  return (
    <section className="w-full bg-[#F6F2E8] py-12 md:py-16 px-6 border-b border-[#e0d6bd]">
      <div className="max-w-5xl mx-auto text-center">
        {eyebrow ? (
          <p className="hero-rise uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            {eyebrow}
          </p>
        ) : null}

        <Tag
          className="hero-rise text-3xl md:text-4xl font-bold text-[#12302a] leading-tight"
          style={{ "--d": "90ms" }}
        >
          {title}
        </Tag>

        <span
          aria-hidden="true"
          className="hero-rise block h-[2px] w-16 bg-[#C8A24A] mx-auto mt-5"
          style={{ "--d": "180ms" }}
        />

        {subtitle ? (
          <p
            className="hero-rise text-gray-600 text-sm mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ "--d": "240ms" }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
