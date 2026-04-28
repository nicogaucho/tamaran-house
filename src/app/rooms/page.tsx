import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { RoomCard } from "@/components/sections/RoomCard";
import { dorms, privateRooms } from "@/components/sections/rooms-data";

export const metadata: Metadata = {
  title: "Rooms & Dorms — Dorms €25 · Private €65 · Master €85",
  description:
    "Choose from 4-bed dorms (shared or ensuite), private double rooms with balcony, " +
    "and a master suite with ocean view. All rooms in Las Palmas de Gran Canaria.",
  alternates: { canonical: "https://tamaranhouse.com/rooms" },
  openGraph: {
    url: "https://tamaranhouse.com/rooms",
    images: [
      {
        url: "/uploads/Tenerife.jpg",
        width: 1200,
        height: 630,
        alt: "Tamaran House dorm room — Las Palmas hostel",
      },
    ],
  },
};

const iconBed = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M2 12h20M2 8h20M6 16h12" />
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
              alt="Tamaran House dorm room — Las Palmas hostel"
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
              Rooms &amp; Dorms
              <br />
              <span style={{ color: "var(--coral)" }}>Tamaran House</span>
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
                    alt="Gran Canaria Master Room — ocean view suite at Tamaran House"
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
