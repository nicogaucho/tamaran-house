import type { Metadata } from "next";
import Image from "next/image";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const values = [
  {
    num: "01",
    name: "Community",
    desc: "We believe travel is better together. We organize daily activities so guests connect, share meals, and build real friendships, not just WhatsApp contacts.",
  },
  {
    num: "02",
    name: "Adventure",
    desc: "From surf at El Confital to hiking the Roque Nublo, we believe every day should be an adventure. We're here to help you find yours.",
  },
  {
    num: "03",
    name: "Authenticity",
    desc: "No corporate hostel feel here. Every detail, the rooftop terrace, the shared dinners, the hand-picked surf spots is designed to feel real and local.",
  },
];

const islandStats = [
  { num: "300+", label: "Sunny days per year" },
  { num: "18°C", label: "Average temperature" },
  { num: "236", label: "km² of beaches" },
  { num: "3h", label: "Flight from most of Europe" },
];

const hostelActivities = [
  {
    num: "01",
    name: "Surf Lessons",
    desc: "Partner with Ocean Side surf school for lessons at all levels. La Cicer, one of the island's best breaks, is just 900m away.",
    tag: "On request",
  },
  {
    num: "02",
    name: "Yoga & Wellness",
    desc: "Morning yoga sessions on the closet beach. Open to all levels. Start your day with intention and a sea breeze.",
    tag: "On request",
  },
  {
    num: "03",
    name: "Kayaking & Snorkeling",
    desc: "Las Canteras is a natural reef, one of the best snorkeling spots in Europe. We provide free gear. Kayaking tours available through our partner network.",
    tag: "On request",
  },
  {
    num: "04",
    name: "Group Dinners",
    desc: "Family-style dinners where strangers become friends. Cooked in our communal kitchen or at one of the best local restaurants, we'll find the best spots in town.",
    tag: "Weekly",
  },
  {
    num: "05",
    name: "Island Excursions",
    desc: "From the Roque Nublo to the Maspalomas dunes, Gran Canaria has landscapes that will take your breath away. We can organize group trips for guests with external partners.",
    tag: "On request",  
  },
  {
    num: "06",
    name: "City Nights",
    desc: "Las Palmas has an incredible nightlife, music scene and food culture. We share the best bars, tapas spots, live music venues and hidden gems of the city.",
    tag: "Daily",
  },
];

const team = [
  {
    name: "Damiano",
    role: "Co-Founder",
    bio: "Tourist guide, storyteller, longboarder and the heart of Tamaran House.",
    img: "/uploads/Damiano.png",
    alt: "Damiano — Co-Founder of Tamaran House",
  },
  {
    name: "Eugenie",
    role: "Manager & Operations",
    bio: "Video maker, She makes sure everything runs smoothly.",
    img: "/uploads/Eugenie.jpeg",
    alt: "Eugenie — Manager & Operations at Tamaran House",
  },
  {
    name: "Jacopo",
    role: "Co-Founder",
    bio: "Video maker, surfer, ocean passionate turned hostel founder.",
    img: "/uploads/Jacopo.png",
    alt: "Jacopo — Co-Founder of Tamaran House",
  },
  {
    name: "Nico",
    role: "Co-Founder",
    bio: "Nerd IT boy, surfer, knows every hidden gem on the island.",
    img: "/uploads/nico.jpeg",
    alt: "Nico — Co-Founder of Tamaran House",
  },
];

export const metadata: Metadata = {
  title: "About Us — Our Story, Team & Gran Canaria",
  description:
    "Meet the Tamaran House team and discover why Gran Canaria is the ultimate surf destination. " +
    "Our story, values, island guide, and weekly activities.",
  alternates: { canonical: "https://tamaranhouse.com/the-hostel" },
  openGraph: {
    url: "https://tamaranhouse.com/the-hostel",
    images: [
      {
        url: "/uploads/GalleryRoof.jpg",
        width: 1200,
        height: 630,
        alt: "Tamaran House rooftop — Las Palmas de Gran Canaria",
      },
    ],
  },
};

export default function TheHostelPage() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section
          className="relative flex flex-col justify-end overflow-hidden px-5 pb-14 sm:px-8 md:px-12 md:pb-[72px]"
          style={{ height: "70vh", minHeight: 560 }}
        >
          <div className="absolute inset-0">
            <Image
              src="/uploads/GalleryRoof.jpg"
              alt="Rooftop terrace at Tamaran House with ocean views"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0" style={{ background: "rgba(10,16,24,0.55)" }} />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,16,24,0.7) 0%, transparent 55%)" }}
          />
          <div className="relative z-10">
            <p
              className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3.5"
              style={{ color: "var(--coral)" }}
            >
              Tamaran House
            </p>
            <h1
              className="leading-[0.9] mb-[18px]"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(56px, 7.5vw, 112px)",
                color: "#fff",
              }}
            >
              About <span style={{ color: "var(--coral)" }}>Tamaran House</span>
            </h1>
            <p
              className="max-w-[560px]"
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontStyle: "italic",
                fontSize: 20,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Our story, our island, our team.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="py-16 md:py-[120px]" style={{ background: "var(--cream)" }}>
          <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
            <div className="grid gap-20 items-center grid-cols-1 md:grid-cols-2">
              {/* YouTube embed */}
              <RevealOnScroll>
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "#000" }}>
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/TFjHvqATgy8?start=8&rel=0&modestbranding=1&playsinline=1"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    title="Tamaran House — Las Palmas"
                  />
                </div>
              </RevealOnScroll>

              {/* Text */}
              <div>
                <RevealOnScroll>
                  <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-4" style={{ color: "var(--terra)" }}>
                    Our Story
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={1}>
                  <h2
                    className="leading-[0.94] mb-8"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      fontSize: "clamp(48px, 6vw, 88px)",
                      color: "var(--ink)",
                    }}
                  >
                    Born From
                    <br />
                    A Dream
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={2}>
                  <blockquote
                    className="my-9 pl-6 text-[22px] leading-[1.5]"
                    style={{
                      borderLeft: "3px solid var(--terra)",
                      fontFamily: "var(--font-dm-serif), serif",
                      fontStyle: "italic",
                      color: "var(--ink)",
                    }}
                  >
                    &ldquo;We wanted a place where travelers could feel brave, just like the ancient Canarians.&rdquo;
                  </blockquote>
                </RevealOnScroll>
                <RevealOnScroll delay={2}>
                  <div>
                    <p className="text-[16px] leading-[1.8] mb-5" style={{ color: "var(--muted)" }}>
                      Tamaran House was born from an idea of a young friends team in order to develop a sustainable tourism oriented
                      on the promotion of the local territory, recalling the origins and beauty of this land, Gran Canaria. The
                      passion for the ocean has brought us here and we can&apos;t wait to share our passion with you.
                    </p>
                    <p className="text-[16px] leading-[1.8] mb-5" style={{ color: "var(--muted)" }}>
                      We built this hostel to be more than just a bed for the night. We wanted it to be a{" "}
                      <strong className="font-medium" style={{ color: "var(--ink)" }}>home</strong>, a place where strangers
                      become friends, where you eat together, surf together, explore together, and share stories that last a lifetime.
                    </p>
                    <p className="text-[16px] leading-[1.8]" style={{ color: "var(--muted)" }}>
                      Located just 50 meters from Las Canteras beach, one of Europe&apos;s finest urban beaches, Tamaran House puts you
                      at the heart of everything{" "}
                      <strong className="font-medium" style={{ color: "var(--ink)" }}>Las Palmas de Gran Canaria</strong> has to
                      offer sun, surf, culture, and buena vibra.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-[100px]" style={{ background: "var(--terra)" }}>
          <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
            <div className="grid gap-[2px] grid-cols-1 sm:grid-cols-3">
              {values.map((v, i) => (
                <RevealOnScroll key={v.num} delay={(i as 0 | 1 | 2)}>
                  <div
                    className="px-9 py-11"
                    style={{ background: "rgba(255,255,255,0.08)", borderTop: "2px solid rgba(255,255,255,0.3)" }}
                  >
                    <div
                      className="leading-none mb-4"
                      style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 64, color: "rgba(255,255,255,0.2)" }}
                    >
                      {v.num}
                    </div>
                    <div
                      className="tracking-[0.04em] mb-2.5"
                      style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 28, color: "#fff" }}
                    >
                      {v.name}
                    </div>
                    <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {v.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Island of Eternal Spring */}
        <section id="island" className="py-16 md:py-[120px] overflow-hidden" style={{ background: "var(--ink)" }}>
          <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
            <div className="grid gap-20 items-center grid-cols-1 md:grid-cols-2">
              {/* Text */}
              <div>
                <RevealOnScroll>
                  <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-4" style={{ color: "var(--coral)" }}>
                    Gran Canaria
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={1}>
                  <h2
                    className="leading-[0.94] mb-3"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      fontSize: "clamp(48px, 6vw, 88px)",
                      color: "#fff",
                    }}
                  >
                    The Island
                    <br />
                    of Eternal
                    <br />
                    Spring
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={2}>
                  <div className="mt-4">
                    <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      Gran Canaria is one of the most diverse places on earth. In a single day you can{" "}
                      <strong className="font-medium" style={{ color: "#fff" }}>surf world-class waves</strong> in the morning,
                      hike through ancient pine forests at noon, and watch the sunset over sand dunes that look like the Sahara.
                    </p>
                    <p className="text-[15px] leading-[1.8] mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      The island enjoys{" "}
                      <em style={{ fontFamily: "var(--font-dm-serif), serif", fontStyle: "italic", color: "var(--surf)" }}>
                        over 300 days of sunshine a year
                      </em>
                      , with temperatures rarely dropping below 18°C. It&apos;s no wonder surfers, digital nomads, and adventurers from
                      across the world choose Las Palmas as their base.
                    </p>
                    <p className="text-[15px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <strong className="font-medium" style={{ color: "#fff" }}>Las Canteras</strong>, right outside our door, is
                      regularly voted one of the best urban beaches in Europe a long stretch of golden sand protected by a
                      natural reef, perfect for swimming, snorkeling, and learning to surf.
                    </p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll delay={3}>
                  <div className="grid gap-[2px] mt-12 grid-cols-2 sm:grid-cols-4">
                    {islandStats.map((s) => (
                      <div
                        key={s.num}
                        className="px-6 py-7"
                        style={{ background: "rgba(255,255,255,0.05)", borderTop: "2px solid var(--terra)" }}
                      >
                        <div
                          className="leading-none"
                          style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 48, color: "var(--terra)" }}
                        >
                          {s.num}
                        </div>
                        <div className="text-[12px] mt-1 tracking-[0.04em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </div>

              {/* Photos grid — 3 equal columns on sm+, stacked on mobile */}
              <RevealOnScroll>
                <div className="grid gap-[3px] grid-cols-1 sm:grid-cols-3">
                  <div className="relative overflow-hidden h-[260px] sm:h-[480px]">
                    <Image
                      src="/uploads/_DSC5996.jpg"
                      alt="Gran Canaria hiking"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center top" }}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="relative overflow-hidden h-[260px] sm:h-[480px]">
                    <Image
                      src="/uploads/DSC08728.jpg"
                      alt="Tamaran rooftop event"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center top" }}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="relative overflow-hidden h-[260px] sm:h-[480px]">
                    <Image
                      src="/uploads/DSC02326.jpg"
                      alt="Surfing Las Canteras"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="py-16 md:py-[120px]" style={{ background: "var(--sand)" }}>
          <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
            <div className="grid gap-10 items-end mb-16 grid-cols-1 md:grid-cols-2">
              <div>
                <RevealOnScroll>
                  <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-4" style={{ color: "var(--terra)" }}>
                    What We Offer
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={1}>
                  <h2
                    className="leading-[0.94]"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      fontSize: "clamp(48px, 6vw, 88px)",
                      color: "var(--ink)",
                    }}
                  >
                    Activities
                    <br />
                    &amp; Experiences
                  </h2>
                </RevealOnScroll>
              </div>
              <RevealOnScroll>
                <p className="text-[15px] leading-[1.75] max-w-[420px]" style={{ color: "var(--muted)" }}>
                  Every week we organize a packed calendar of activities: from surf lessons to group dinners, city tours to yoga
                  sessions. There&apos;s always something going on at Tamaran.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-[2px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {hostelActivities.map((a, i) => (
                <RevealOnScroll key={a.num} delay={(i % 3) as 0 | 1 | 2}>
                  <div
                    className="relative px-8 py-9 overflow-hidden transition-transform duration-250 hover:-translate-y-[3px] group"
                    style={{ background: "#fff" }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{ background: "var(--terra)" }}
                    />
                    <div
                      className="leading-none mb-3"
                      style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 52, color: "var(--rule)" }}
                    >
                      {a.num}
                    </div>
                    <div className="text-[15px] font-medium mb-2" style={{ color: "var(--ink)" }}>
                      {a.name}
                    </div>
                    <p className="text-[13px] leading-[1.6]" style={{ color: "var(--muted)" }}>
                      {a.desc}
                    </p>
                    <span
                      className="inline-block mt-4 text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1"
                      style={{
                        color: "var(--terra)",
                        border: "1px solid var(--terra)",
                        borderRadius: "100px",
                      }}
                    >
                      {a.tag}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-16 md:py-[120px]" style={{ background: "var(--cream)" }}>
          <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
            <div className="grid gap-10 items-end mb-16 grid-cols-1 md:grid-cols-2">
              <div>
                <RevealOnScroll>
                  <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-4" style={{ color: "var(--terra)" }}>
                    The People
                  </p>
                </RevealOnScroll>
                <RevealOnScroll delay={1}>
                  <h2
                    className="leading-[0.94]"
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      fontSize: "clamp(48px, 6vw, 88px)",
                      color: "var(--ink)",
                    }}
                  >
                    Meet Our
                    <br />
                    Team
                  </h2>
                </RevealOnScroll>
              </div>
              <RevealOnScroll>
                <p className="text-[15px] leading-[1.75] max-w-[400px]" style={{ color: "var(--muted)" }}>
                  Our team is made up of passionate travelers, surfers and locals who love Las Palmas. We&apos;re here to make sure
                  your stay is unforgettable.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
              {team.map((member, i) => (
                <RevealOnScroll key={member.name} delay={(i as 0 | 1 | 2 | 3)}>
                  <div className="text-center">
                    <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "3/4", background: "var(--sand)" }}>
                      <Image
                        src={member.img}
                        alt={member.alt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "center top" }}
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div
                      className="tracking-[0.04em] mb-1"
                      style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 22, color: "var(--ink)" }}
                    >
                      {member.name}
                    </div>
                    <div
                      className="text-[11px] font-medium tracking-[0.14em] uppercase"
                      style={{ color: "var(--terra)" }}
                    >
                      {member.role}
                    </div>
                    <p className="text-[13px] leading-[1.6] mt-2.5" style={{ color: "var(--muted)" }}>
                      {member.bio}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Ready to join us?"
          title={"Book Your\nStay"}
          subtitle="Beds are filling up fast. Grab yours and become part of the Tamaran family."
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
