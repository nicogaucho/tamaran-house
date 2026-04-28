import RevealOnScroll from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    text: '"A beach location in a larger city is simply unbeatable. The individual room with private balcony is a star if you prefer privacy and need to work."',
    author: "Kerstin — Germany",
    dark: true,
  },
  {
    text: '"Daily activities organized by the hostel meant I was always meeting volunteers and other travelers. I would definitely stay here again!"',
    author: "Lisa — Finland",
    dark: false,
  },
  {
    text: '"Perfect to practice surfing and water activities. Next to a wonderful beach and in the center of town with everything you want."',
    author: "Alberto — Italy",
    dark: false,
  },
  {
    text: '"Great staff who organized activities every day so I was never bored. Great location right next to the beach."',
    author: "Kamil — Poland",
    dark: false,
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--sand)", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <RevealOnScroll>
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: "var(--terra)" }}>
                Guest Stories
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
                What They
                <br />
                Say
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <div
                className="leading-none"
                style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 56, color: "var(--terra)" }}
              >
                9.8
              </div>
              <div className="text-[12px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                <div className="tracking-[2px] text-[14px]" style={{ color: "var(--terra)" }}>★★★★★</div>
                Based on 200+ reviews
                <br />
                on Hostelworld &amp; Booking
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Grid */}
        <div className="grid gap-[2px]" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={(i as 0 | 1 | 2 | 3)}>
              <div
                className="p-8 flex flex-col justify-between"
                style={{
                  background: t.dark ? "var(--ink)" : "#fff",
                  minHeight: 220,
                }}
              >
                <p
                  className="text-[15px] leading-[1.65] flex-1 mb-5"
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontStyle: "italic",
                    color: t.dark ? "rgba(255,255,255,0.85)" : "var(--ink)",
                  }}
                >
                  {t.text}
                </p>
                <div
                  className="text-[11px] font-medium tracking-[0.1em] uppercase pt-4"
                  style={{
                    color: t.dark ? "rgba(255,255,255,0.4)" : "var(--muted)",
                    borderTop: t.dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--rule)",
                  }}
                >
                  {t.author}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
