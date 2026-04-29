import RevealOnScroll from "@/components/ui/RevealOnScroll";

const activities = [
  { num: "01", name: "Surf Lessons", desc: "Exclusive discounts with partner Ocean Side. Beginner to pro." },
  { num: "02", name: "Yoga & Wellness", desc: "Morning sessions on the rooftop with ocean breeze." },
  { num: "03", name: "Kayaking", desc: "Explore the Canarian coastline with new friends." },
  { num: "04", name: "Snorkeling", desc: "Free gear rental. Las Canteras is a natural reef." },
  { num: "05", name: "Group Dinners", desc: "Family-style meals where strangers become friends." },
  { num: "06", name: "City Nights", desc: "Best bars, concerts, and events in Las Palmas." },
];

export default function Activities() {
  return (
    <section
      className="border-t border-b py-16 md:py-[80px]"
      style={{ background: "var(--cream)", borderColor: "var(--rule)" }}
    >
      <div
        className="mx-auto grid gap-20 items-center px-5 sm:px-8 md:px-12 grid-cols-1 md:grid-cols-[280px_1fr]"
        style={{ maxWidth: 1280 }}
      >
        {/* Intro */}
        <div>
          <RevealOnScroll>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-3" style={{ color: "var(--terra)" }}>
              Tamaran Life
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h2
              className="leading-[0.94] tracking-[0.02em] mt-3"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(56px, 7vw, 100px)",
                color: "var(--ink)",
              }}
            >
              Every
              <br />
              Day Is
              <br />
              An Event
            </h2>
          </RevealOnScroll>
        </div>

        {/* Grid */}
        <div className="grid gap-[2px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {activities.map((a, i) => (
            <RevealOnScroll key={a.num} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <div
                className="relative group px-6 py-7"
                style={{ background: "var(--sand)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "var(--terra)" }}
                />
                <div
                  className="leading-none mb-2"
                  style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 44, color: "var(--rule)" }}
                >
                  {a.num}
                </div>
                <div className="text-[14px] font-medium mb-1.5" style={{ color: "var(--ink)" }}>
                  {a.name}
                </div>
                <div className="text-[12px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                  {a.desc}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
