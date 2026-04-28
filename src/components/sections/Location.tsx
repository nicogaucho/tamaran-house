import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  {
    num: "50m",
    title: "Las Canteras Beach",
    desc: "The city's main beach — right on your doorstep",
  },
  {
    num: "900m",
    title: "Best Surfing Spot",
    desc: "El Confital, perfect waves year round",
  },
  {
    num: "1.2km",
    title: "Main Bus Station",
    desc: "Easy access to the whole island",
  },
];

export default function Location() {
  return (
    <section style={{ background: "var(--cream)", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
        <div
          className="grid gap-20 items-center"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left: text + stats */}
          <div>
            <RevealOnScroll>
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: "var(--terra)" }}>
                Find Us
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2
                className="leading-[0.94] tracking-[0.02em]"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(56px, 7vw, 100px)",
                  color: "var(--ink)",
                }}
              >
                It Doesn&apos;t
                <br />
                Get More
                <br />
                Central
              </h2>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="text-[13px] mt-6 mb-10 tracking-[0.02em]" style={{ color: "var(--muted)" }}>
                <strong className="font-medium" style={{ color: "var(--ink)" }}>C. Sgto. Llagas, 34</strong>
                <br />
                35007 Las Palmas de Gran Canaria
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="flex flex-col">
                {stats.map((stat, i) => (
                  <div
                    key={stat.num}
                    className="flex items-center gap-6 py-6"
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                    }}
                  >
                    <div
                      className="leading-none min-w-[120px]"
                      style={{
                        fontFamily: "var(--font-bebas), sans-serif",
                        fontSize: 44,
                        color: "var(--terra)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-[13px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                      <strong className="font-medium" style={{ color: "var(--ink)" }}>{stat.title}</strong>
                      <br />
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: map */}
          <RevealOnScroll>
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <iframe
                src="https://www.google.com/maps?q=Calle+Sargento+Llagas+34,+35007+Las+Palmas+de+Gran+Canaria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: 420 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tamaran House location"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
