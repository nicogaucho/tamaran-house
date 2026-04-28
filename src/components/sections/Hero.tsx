import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ height: "100vh", minHeight: 700, padding: "0 48px 72px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/uploads/ImageHero.jpg"
          alt="Las Canteras Beach"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(10,16,24,0.42)" }} />
      </div>

      {/* Gradient overlay bottom */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(10,16,24,0.72) 0%, transparent 55%)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 grid gap-10 items-end"
        style={{ gridTemplateColumns: "1fr auto" }}
      >
        <div>
          <Image
            src="/uploads/logo.png"
            alt="Tamaran House"
            width={300}
            height={100}
            style={{ height: 100, width: "auto", marginBottom: 28, display: "block" }}
            priority
          />
          <p
            className="text-[11px] font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--coral)" }}
          >
            Las Palmas de Gran Canaria
          </p>
          <h1
            className="text-white leading-[0.92] tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "clamp(56px, 7.5vw, 120px)",
            }}
          >
            Your Home
            <br />
            Between
            <br />
            <span style={{ color: "var(--coral)" }}>Sand &amp; Sky</span>
          </h1>
          <p
            className="mt-5 max-w-[520px]"
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            A surf hostel where travelers, surfers,
            <br />
            and dreamers become family.
          </p>
        </div>
        <div className="flex flex-col items-end gap-4 pb-1">
          {[
            { num: "50m", label: "From the beach" },
            { num: "4.9★", label: "Guest rating" },
            { num: "200+", label: "Happy guests" },
          ].map(({ num, label }) => (
            <div key={label} className="text-right pr-[18px]" style={{ borderRight: "2px solid var(--terra)" }}>
              <div
                className="text-white leading-none"
                style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 36 }}
              >
                {num}
              </div>
              <div className="text-[10px] tracking-[0.14em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute left-1/2 bottom-7 z-10 flex flex-col items-center gap-2"
        style={{
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.4)",
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          animation: "bounceScroll 2s ease-in-out infinite",
        }}
      >
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
        scroll
      </div>
    </section>
  );
}
