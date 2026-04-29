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
    <section className="py-16 md:py-[120px]" style={{ background: "var(--cream)" }}>
      <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div className="grid gap-6 md:gap-10 items-end mb-16 grid-cols-1 md:grid-cols-2">
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

        {/* Grid: 3-col on md+, single col on mobile */}
        <div className="grid gap-[3px] grid-cols-1 md:grid-cols-[2fr_1fr_1fr]">
          {spaces.map((space, i) => (
            <RevealOnScroll
              key={space.name}
              delay={i === 0 ? 0 : i === 1 || i === 3 ? 1 : i === 2 || i === 4 ? 2 : 3}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <div className="relative overflow-hidden cursor-pointer group h-full">
                <div
                  className={`relative overflow-hidden ${i === 0 ? "h-[280px] md:h-full md:min-h-[580px]" : "h-[280px]"}`}
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
