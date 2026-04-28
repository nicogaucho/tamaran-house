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
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Spaces />
        <Activities />
        <Rooms />
        <Amenities />
        <FAQ />
        <Location />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
