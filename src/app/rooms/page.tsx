"use client";

import Image from "next/image";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const iconBed = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M2 12h20M2 8h20M6 16h12" />
  </svg>
);
const iconBath = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M4 12h16M4 6h16M4 18h16" />
  </svg>
);
const iconWifi = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
  </svg>
);
const iconLocker = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const iconBalcony = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const iconOcean = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
  </svg>
);

interface RoomFeature {
  icon: React.ReactNode;
  label: string;
}

interface Room {
  island: string;
  typeLabel: string;
  features: RoomFeature[];
  desc: string;
  price: string;
  img: string | null;
  badges: { label: string; variant: "terra" | "dark" | "ocean" }[];
}

function RoomCard({ room, dark = false }: { room: Room; dark?: boolean }) {
  const borderTopColor = dark ? "var(--coral)" : "var(--terra)";

  return (
    <div
      className="overflow-hidden transition-transform duration-300 hover:-translate-y-[3px] flex flex-col"
      style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: dark ? "1px solid rgba(255,255,255,0.08)" : "none" }}
    >
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 340, background: "var(--sand)" }}>
        {room.img ? (
          <Image
            src={room.img}
            alt={room.island}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(0,0,0,0.03) 18px, rgba(0,0,0,0.03) 19px)",
            }}
          />
        )}
        {room.badges.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            {room.badges.map((b) => (
              <span
                key={b.label}
                className="text-white text-[9px] font-medium tracking-[0.12em] uppercase px-3 py-1.5"
                style={{
                  background: b.variant === "terra" ? "var(--terra)" : b.variant === "ocean" ? "var(--ocean)" : "var(--ink)",
                  borderRadius: "100px",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        )}
      </div>
      <div
        className="p-8 flex-1 flex flex-col"
        style={{ borderTop: `2px solid ${borderTopColor}` }}
      >
        <div>
          <div
            className="leading-none"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: 32,
              letterSpacing: "0.04em",
              color: dark ? "#fff" : "var(--ink)",
            }}
          >
            {room.island}
          </div>
          <div
            className="text-[10px] font-medium tracking-[0.16em] uppercase mt-1 mb-3.5"
            style={{ color: dark ? "var(--coral)" : "var(--terra)" }}
          >
            {room.typeLabel}
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {room.features.map((f, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.5)" : "var(--muted)" }}>
                {f.icon}
                {f.label}
              </span>
            ))}
          </div>
          <p className="text-[13px] leading-[1.7] mb-6 flex-1" style={{ color: dark ? "rgba(255,255,255,0.5)" : "var(--muted)" }}>
            {room.desc}
          </p>
        </div>
        <div
          className="flex items-end justify-between gap-4 pt-5 mt-auto"
          style={{ borderTop: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--rule)" }}
        >
          <div>
            <div className="text-[11px] italic" style={{ color: dark ? "rgba(255,255,255,0.35)" : "var(--muted)" }}>
              From
            </div>
            <div
              className="leading-none"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: 36,
                letterSpacing: "0.02em",
                color: dark ? "var(--coral)" : "var(--terra)",
              }}
            >
              {room.price}
            </div>
          </div>
          <Link
            href="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
            className="text-white text-[11px] font-medium tracking-[0.16em] uppercase no-underline px-6 py-3.5 flex-shrink-0 transition-colors duration-200 whitespace-nowrap"
            style={{
              background: dark ? "var(--terra)" : "var(--ink)",
              borderRadius: "100px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = dark ? "var(--coral)" : "var(--terra)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = dark ? "var(--terra)" : "var(--ink)";
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

const dorms: Room[] = [
  {
    island: "Fuerteventura",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "Shared bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Bright and airy dorm perfect for meeting fellow travelers. Lockers, reading lights and USB ports at every bunk. Shared bathrooms are kept spotless.",
    price: "€25 / night",
    img: "/uploads/Fuerteventura.jpg",
    badges: [{ label: "Shared Bathroom", variant: "terra" }],
  },
  {
    island: "Lanzarote",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "Shared bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Named after the volcanic island, this dorm has a warm, earthy atmosphere. Great natural light and a social vibe — perfect for solo travelers.",
    price: "€25 / night",
    img: "/uploads/Lanzarote.jpg",
    badges: [{ label: "Shared Bathroom", variant: "terra" }],
  },
  {
    island: "Gomera",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Upgraded dorm with a private en-suite bathroom shared only with your dorm mates. More comfort, same great social atmosphere.",
    price: "€30 / night",
    img: "/uploads/Gomera.jpg",
    badges: [{ label: "Bathroom In Room", variant: "dark" }],
  },
  {
    island: "Tenerife",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Our most popular dorm. Named after Spain's tallest peak, it feels spacious and bright. En-suite bathroom and extra storage for surfers with gear.",
    price: "€30 / night",
    img: "/uploads/Tenerife.jpg",
    badges: [{ label: "Bathroom In Room", variant: "dark" }],
  },
];

const privateRooms: Room[] = [
  {
    island: "La Palma",
    typeLabel: "Double Private Room",
    features: [
      { icon: iconBed, label: "Double bed" },
      { icon: iconBalcony, label: "Private balcony" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
    ],
    desc: "Named after the 'Beautiful Island'. A bright double room with your own private balcony — perfect for couples or solo travelers who want a little more space and privacy.",
    price: "€65 / night",
    img: "/uploads/LaPalma.jpeg",
    badges: [
      { label: "Double Bed", variant: "terra" },
      { label: "Balcony", variant: "dark" },
    ],
  },
  {
    island: "El Hierro",
    typeLabel: "Double Private Room",
    features: [
      { icon: iconBed, label: "Double bed" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Cozy and intimate, El Hierro is your private sanctuary in the heart of Las Palmas. All the hostel vibe with the privacy of your own room and en-suite bathroom.",
    price: "€65 / night",
    img: "/uploads/image00006.jpeg",
    badges: [{ label: "Double Bed", variant: "terra" }],
  },
];

export default function RoomsPage() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section
          className="relative flex flex-col justify-end overflow-hidden"
          style={{ height: "60vh", minHeight: 480, padding: "0 48px 72px" }}
        >
          <div className="absolute inset-0">
            <Image
              src="/uploads/Tenerife.jpg"
              alt="Tamaran House Rooms"
              fill
              priority
              className="object-cover object-center"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,16,24,0.55)" }} />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,16,24,0.72) 0%, transparent 60%)" }}
          />
          <div className="relative z-10">
            <p
              className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3.5"
              style={{ color: "var(--coral)" }}
            >
              Tamaran House
            </p>
            <h1
              className="leading-[0.9] mb-4"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(56px, 7.5vw, 104px)",
                color: "#fff",
              }}
            >
              Choose
              <br />
              Your <span style={{ color: "var(--coral)" }}>Vibe</span>
            </h1>
            <p
              className="max-w-[500px]"
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontStyle: "italic",
                fontSize: 18,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Dorms, private rooms, and a master suite with ocean views. Find yours.
            </p>
          </div>
        </section>

        {/* 4-Bed Dorms */}
        <section
          id="dorms"
          className="border-b"
          style={{ padding: "100px 0", borderColor: "var(--rule)" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
            <RevealOnScroll>
              <span
                className="text-[10px] font-medium tracking-[0.25em] uppercase block mb-3.5"
                style={{ color: "var(--terra)" }}
              >
                Shared Accommodation
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2
                className="leading-[0.92] mb-12"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(44px, 5vw, 72px)",
                  color: "var(--ink)",
                }}
              >
                4-Bed Dorms
              </h2>
            </RevealOnScroll>
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {dorms.map((room, i) => (
                <RevealOnScroll key={room.island} delay={(i % 2) as 0 | 1}>
                  <RoomCard room={room} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Private Rooms */}
        <section
          id="private"
          className="border-b"
          style={{ background: "var(--sand)", padding: "100px 0", borderColor: "var(--rule)" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
            <RevealOnScroll>
              <span
                className="text-[10px] font-medium tracking-[0.25em] uppercase block mb-3.5"
                style={{ color: "var(--terra)" }}
              >
                For Two
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2
                className="leading-[0.92] mb-12"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(44px, 5vw, 72px)",
                  color: "var(--ink)",
                }}
              >
                Private Rooms
              </h2>
            </RevealOnScroll>
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {privateRooms.map((room, i) => (
                <RevealOnScroll key={room.island} delay={(i as 0 | 1)}>
                  <RoomCard room={room} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Master Private */}
        <section
          id="master"
          style={{ background: "var(--ink)", padding: "100px 0" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
            <RevealOnScroll>
              <span
                className="text-[10px] font-medium tracking-[0.25em] uppercase block mb-3.5"
                style={{ color: "var(--coral)" }}
              >
                The Best of Tamaran
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2
                className="leading-[0.92] mb-12 text-white"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(44px, 5vw, 72px)",
                }}
              >
                Master Private
              </h2>
            </RevealOnScroll>

            {/* Gran Canaria — horizontal full-width card */}
            <RevealOnScroll>
              <div
                className="flex overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  minHeight: 420,
                }}
              >
                <div className="relative flex-shrink-0 overflow-hidden" style={{ width: "55%" }}>
                  <Image
                    src="/uploads/Private.jpg"
                    alt="Gran Canaria Master Room"
                    fill
                    className="object-cover object-center"
                    sizes="55vw"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className="text-white text-[9px] font-medium tracking-[0.12em] uppercase px-3 py-1.5"
                      style={{ background: "var(--ocean)", borderRadius: "100px" }}
                    >
                      Ocean View
                    </span>
                    <span
                      className="text-white text-[9px] font-medium tracking-[0.12em] uppercase px-3 py-1.5"
                      style={{ background: "var(--terra)", borderRadius: "100px" }}
                    >
                      Balcony
                    </span>
                  </div>
                </div>
                <div
                  className="flex-1 flex flex-col justify-between p-10"
                  style={{ borderTop: "2px solid var(--coral)" }}
                >
                  <div>
                    <div
                      className="leading-none"
                      style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 48, letterSpacing: "0.04em", color: "#fff" }}
                    >
                      Gran Canaria
                    </div>
                    <div
                      className="text-[10px] font-medium tracking-[0.16em] uppercase mt-1 mb-4"
                      style={{ color: "var(--coral)" }}
                    >
                      Master Private Room
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {[
                        { icon: iconBed, label: "Double bed" },
                        { icon: iconBalcony, label: "Private balcony" },
                        { icon: iconOcean, label: "Ocean view" },
                        { icon: iconBath, label: "En-suite bathroom" },
                        { icon: iconWifi, label: "Fast WiFi" },
                      ].map((f, i) => (
                        <span key={i} className="flex items-center gap-1.5 text-[12px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {f.icon}
                          {f.label}
                        </span>
                      ))}
                    </div>
                    <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      The crown jewel of Tamaran House. Wake up to the sound of the ocean and step out onto your private balcony
                      to watch the surf. Named after the island itself — this room is the full Canarian experience. A luxurious
                      double bed, premium linens, en-suite bathroom, and the most spectacular view in the building.
                    </p>
                  </div>
                  <div
                    className="flex items-end justify-between gap-4 pt-5 mt-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div>
                      <div className="text-[11px] italic" style={{ color: "rgba(255,255,255,0.35)" }}>
                        From
                      </div>
                      <div
                        className="leading-none"
                        style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 36, color: "var(--coral)" }}
                      >
                        €85 / night
                      </div>
                    </div>
                    <Link
                      href="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
                      className="text-white text-[11px] font-medium tracking-[0.16em] uppercase no-underline px-6 py-3.5 flex-shrink-0 transition-colors duration-200 whitespace-nowrap"
                      style={{ background: "var(--terra)", borderRadius: "100px" }}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to be brave?"
          title={"Book Your\nStay"}
          subtitle="Beds are filling up fast. Grab yours and join the Tamaran family."
          primaryLabel="Reserve a Room"
          primaryHref="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
