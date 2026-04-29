import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const rooms = [
  {
    name: "4-Bed Dorm",
    desc: "Forget overcrowded dorms. Ours are spacious, clean, and social — with lockers in every room.",
    price: "€25 / night",
    img: "/uploads/Tenerife.jpg",
    badge: { label: "Most Popular", bg: "var(--terra)" },
  },
  {
    name: "Private Room",
    desc: "The privacy of your own room with all the great vibes of a social hostel. Beach views included.",
    price: "€65 / night",
    img: "/uploads/image00006.jpeg",
    badge: null,
  },
  {
    name: "Master Private",
    desc: "Wake up to a great ocean view. Private balcony, double bed, and everything you need to work and rest.",
    price: "€85 / night",
    img: "/uploads/Private.jpg",
    badge: { label: "Best Views", bg: "var(--ocean)" },
  },
];

export default function Rooms() {
  return (
    <section className="py-16 md:py-[120px]" style={{ background: "var(--sand)" }}>
      <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-14">
          <div>
            <RevealOnScroll>
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: "var(--terra)" }}>
                Where You Sleep
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
                Choose
                <br />
                Your Vibe
              </h2>
            </RevealOnScroll>
          </div>
          <Link
            href="/rooms"
            className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline pb-0.5"
            style={{ color: "var(--terra)", borderBottom: "1px solid var(--terra)" }}
          >
            View all rooms →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {rooms.map((room, i) => (
            <RevealOnScroll key={room.name} delay={(i as 0 | 1 | 2)}>
              <div
                className="bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {room.badge && (
                    <div
                      className="absolute top-4 right-4 text-white text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1.5"
                      style={{ background: room.badge.bg }}
                    >
                      {room.badge.label}
                    </div>
                  )}
                </div>
                <div className="p-7 flex flex-col flex-1" style={{ borderTop: "2px solid var(--ink)" }}>
                  <div
                    className="tracking-[0.04em] mb-2"
                    style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 28, color: "var(--ink)" }}
                  >
                    {room.name}
                  </div>
                  <p className="text-[13px] leading-[1.65] mb-5 flex-1" style={{ color: "var(--muted)" }}>
                    {room.desc}
                  </p>
                  <div>
                    <div
                      className="text-[13px]"
                      style={{ fontFamily: "var(--font-dm-serif), serif", fontStyle: "italic", color: "var(--muted)" }}
                    >
                      From
                    </div>
                    <div
                      className="tracking-[0.02em]"
                      style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 32, color: "var(--terra)" }}
                    >
                      {room.price}
                    </div>
                  </div>
                  <a
                    href="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-5 text-center text-white text-[11px] font-medium tracking-[0.18em] uppercase no-underline py-3 transition-colors duration-200 hover:bg-[var(--terra)]"
                    style={{ background: "var(--ink)" }}
                  >
                    Book This Room
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
