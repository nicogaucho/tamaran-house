import RevealOnScroll from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    text: "\"Location is perfect. The staff is really friendly and helpful; it's more like a family. It's clean and nice, and the volunteers are putting in so much effort to get a place going right.\"",
    author: "Łukasz Karpow (siwy)",
    dark: true,
  },
  {
    text: `We loved this hostel. Amazing terrace, adorable staff. Location can’t be more perfect. I totally recommend the private dorm in the rooftop, it has an amazing view.`,
    author: "Fiama Manzolillo",
    dark: false,
  },
  {
    text: '"Thank you to Omar and the rest of the Volunteers who made my stay soo lovely . Such friendly people and great activities to do. Bonus was that it was by the sea. I would defo come back.',
    author: "graciela lane yana'",
    dark: false,
  },
  {
    text: '"Tamaran is a wonderful hostel to stay at! It has a very "family" like feeling to it with different activities to join in and so many friendly people and staff. The vibes all around were amazing :)"',
    author: "Carlie",
    dark: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-[120px]" style={{ background: "var(--sand)" }}>
      <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-16">
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
                9.0
              </div>
              <div className="text-[12px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                <div className="tracking-[2px] text-[14px]" style={{ color: "var(--terra)" }}>★★★★★</div>
                Based on 200+ reviews
                <br />
                on Hostelworld &amp; Booking &amp; Google
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Grid */}
        <div className="grid gap-[2px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={(i as 0 | 1 | 2 | 3)}>
              <a
                href="https://www.google.com/travel/search?gsas=1&ts=GhwSGhIUCgcI6g8QBRgXEgcI6g8QBRgYGAEyAhAA&qs=MjZDaVFJaFBESXMtdm05ZWkwQVJDYjc2dk0ySU9OOW5nYURTOW5MekV4Y0RBMGNtMXFkSElRQVE4Ag&ap=ugEHcmV2aWV3cw&ictx=111&biw=1470&bih=831&ved=0CAAQ5JsGahcKEwiI3v26-J-UAxUAAAAAHQAAAAAQBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline transition-opacity duration-200 hover:opacity-80"
              >
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
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
