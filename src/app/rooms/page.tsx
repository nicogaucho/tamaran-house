import type { Metadata } from "next";
import Image from "next/image";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import DormsSection from "@/components/sections/DormsSection";
import PrivateRoomsSection from "@/components/sections/PrivateRoomsSection";

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

export default function RoomsPage() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section
          className="relative flex flex-col justify-end overflow-hidden px-5 pb-14 sm:px-8 md:px-12 md:pb-[72px]"
          style={{ height: "60vh", minHeight: 480 }}
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

        <DormsSection />
        <PrivateRoomsSection />

        <CTASection
          eyebrow="Ready to live the adeventure?"
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
