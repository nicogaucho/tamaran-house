import type { Metadata } from "next";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Marquee from "@/components/sections/Marquee";
import Spaces from "@/components/sections/Spaces";
import Activities from "@/components/sections/Activities";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import FAQ from "@/components/sections/FAQ";
import Partners from "@/components/sections/Partners";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import { FAQJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Surf Hostel Las Palmas — Dorms from €25 | Tamaran House",
  description:
    "Tamaran House: surf hostel 50 m from Las Canteras beach, Las Palmas de Gran Canaria. " +
    "Dorms from €25/night, private rooms from €65. Surf lessons, yoga, rooftop, community kitchen.",
  alternates: { canonical: "https://www.tamaranhouse.com" },
  openGraph: { url: "https://www.tamaranhouse.com" },
};

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <FAQJsonLd />
        <Hero />
        <Marquee />
        <Manifesto />
        <Spaces />
        <Activities />
        <Rooms />
        <Amenities />
        <FAQ />
        <Partners />
        <Location />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
