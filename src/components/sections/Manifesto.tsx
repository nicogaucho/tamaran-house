import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Manifesto() {
  return (
    <section
      className="overflow-hidden py-16 md:py-[120px]"
      style={{ background: "var(--ink)" }}
    >
      <div
        className="mx-auto grid gap-20 items-center px-5 sm:px-8 md:px-12 grid-cols-1 md:grid-cols-2"
        style={{ maxWidth: 1280 }}
      >
        {/* Left */}
        <div>
          <RevealOnScroll>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: "var(--coral)" }}>
              About Tamaran
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h2
              className="leading-[0.95] tracking-[0.02em]"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(64px, 8vw, 112px)",
                color: "#fff",
                marginBottom: 12,
              }}
            >
              The Land
              <br />
              of the
              <br />
              <span style={{ color: "var(--terra)" }}>Braves</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Right */}
        <RevealOnScroll>
          <div>
            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              <em style={{ fontFamily: "var(--font-dm-serif), serif", fontStyle: "italic", color: "var(--surf)" }}>Tamarán</em>{" "}
              is the ancient name of Gran Canaria —{" "}
              <strong className="font-medium" style={{ color: "#fff" }}>&ldquo;the land of the braves.&rdquo;</strong>
            </p>
            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Travel is a way to be brave. We want to celebrate it in our hostel, our home, our family. Tamaran House is not just a
              place to sleep and eat: it&apos;s a place for sharing experiences, friendship, stories to tell, dinners, activities,
              surfing, and adventures together.
            </p>
            <p className="text-[17px] leading-[1.75] mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              We want to feel{" "}
              <strong className="font-medium" style={{ color: "#fff" }}>the sun on our skin</strong>, walk on the sand, feel the
              power of the ocean, and the{" "}
              <em style={{ fontFamily: "var(--font-dm-serif), serif", fontStyle: "italic", color: "var(--surf)" }}>buena vibra</em>{" "}
              of a city that embraces travelers from all over the world.
            </p>
            <p className="text-[17px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.65)" }}>
              <strong className="font-medium" style={{ color: "#fff" }}>All of this, we want to celebrate together.</strong>
            </p>
            <div className="flex flex-wrap gap-2.5 mt-9">
              {["Travelers", "Surfers", "Backpackers", "Digital Nomads", "Adventurersº"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium tracking-[0.1em] uppercase px-[18px] py-2"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "100px",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
