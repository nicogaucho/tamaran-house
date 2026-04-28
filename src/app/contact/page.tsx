import type { Metadata } from "next";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Get in touch with Tamaran House. Email, WhatsApp, or fill in our form. " +
    "We are at Calle Sargento Llagas 34, Las Palmas de Gran Canaria.",
  alternates: { canonical: "https://tamaranhouse.com/contact" },
  openGraph: { url: "https://tamaranhouse.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        {/* Page Header */}
        <div
          className="relative overflow-hidden"
          style={{ paddingTop: "calc(36px + 80px + 80px)", paddingBottom: 80, background: "rgb(0,0,0)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(255,255,255,0.015) 24px, rgba(255,255,255,0.015) 25px)",
            }}
          />
          <div className="relative z-10 mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
            <p
              className="text-[11px] font-medium tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--coral)" }}
            >
              Get in touch
            </p>
            <h1
              className="text-white leading-[0.9] mb-5"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(56px, 7.5vw, 104px)",
              }}
            >
              Contact <span style={{ color: "var(--coral)" }}>Tamaran House</span>
            </h1>
            <p
              className="max-w-[520px]"
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontStyle: "italic",
                fontSize: 20,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              We&apos;re always happy to hear from you — questions, bookings, or just to say hi.
            </p>
          </div>
        </div>

        <ContactSection />

        <CTASection
          eyebrow="Ready to be brave?"
          title={"Book Your\nStay"}
          subtitle="Beds are filling up fast. Grab yours and join the Tamaran family."
          primaryLabel="Reserve a Room"
          primaryHref="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
          secondaryLabel={undefined}
        />
      </main>
      <Footer />
    </>
  );
}
