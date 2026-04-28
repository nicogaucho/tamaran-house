import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const spaces = [
  {
    name: "Rooftop",
    desc: "Panoramic ocean & mountain views. Sun, meals, work — the perfect perch between surf sessions.",
    img: "/uploads/GalleryRoom.jpg",
    position: "center",
  },
  {
    name: "Living Room",
    desc: "Kick back with fellow travelers, movies, games.",
    img: "/uploads/GalleryLeaving.jpg",
    position: "center top",
  },
  {
    name: "Kitchen",
    desc: "Where friendships are made over shared recipes.",
    img: "/uploads/IMG_4971.JPG",
    position: "center top",
  },
  {
    name: "Reception",
    desc: "Always here for you. Tips, help, best tapas in town.",
    img: "/uploads/GalleryReception.jpg",
    position: "center",
  },
  {
    name: "Terrace",
    desc: "Fast WiFi, sofas, chill atmosphere for nomads.",
    img: "/uploads/GalleryRoof.jpg",
    position: "center",
  },
];

export default function Spaces() {
  return (
    <section style={{ background: "var(--cream)", padding: "120px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
        {/* Header */}
        <div
          className="grid gap-10 items-end mb-16"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <div>
            <RevealOnScroll>
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: "var(--terra)" }}>
                The Space
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
                Our
                <br />
                World
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <p className="text-[16px] leading-[1.75] max-w-[420px]" style={{ color: "var(--muted)" }}>
              Designed for fun, relaxation and work. Three 4-bed dorms, three private rooms with beach views, a sunny rooftop,
              and a fully equipped kitchen — you&apos;ll feel right at home.
            </p>
          </RevealOnScroll>
        </div>

        {/* Grid: 3-col, first card spans 2 rows */}
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "auto auto" }}
        >
          {spaces.map((space, i) => (
            <RevealOnScroll
              key={space.name}
              delay={i === 0 ? 0 : i === 1 || i === 3 ? 1 : i === 2 || i === 4 ? 2 : 3}
              className={i === 0 ? "row-span-2" : ""}
            >
              <div className="relative overflow-hidden cursor-pointer group h-full">
                <div
                  className="relative overflow-hidden"
                  style={i === 0 ? { height: "100%", minHeight: 580 } : { height: 280 }}
                >
                  <Image
                    src={space.img}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: space.position }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="px-6 py-5"
                  style={{ background: "#fff", borderTop: "2px solid var(--terra)" }}
                >
                  <div
                    className="tracking-[0.06em]"
                    style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 22, color: "var(--ink)" }}
                  >
                    {space.name}
                  </div>
                  <div className="text-[13px] mt-1 leading-[1.5]" style={{ color: "var(--muted)" }}>
                    {space.desc}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
