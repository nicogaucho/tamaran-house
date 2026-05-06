import Image from "next/image";
import { Fragment } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const partners = [
  { name: "WeRoad",                   img: "/partners/Weroad.png" },
  { name: "Le Routard",               img: "/partners/Routard.png" },
  { name: "Salitre",                  img: "/partners/Salitre.avif" },
  { name: "Oceanside",                img: "/partners/oceanside.svg" },
  { name: "Booking.com",              img: "/partners/Booking.png" },
  { name: "Hostelworld",              img: "/partners/Hostelworld.png" },
  { name: "Hostelling International", img: "/partners/Albergues.png" },
];

export default function Partners() {
  return (
    <section style={{ background: "var(--sand)" }}>
      {/* Header */}
      <div
        className="mx-auto px-5 sm:px-8 md:px-12 pt-16 md:pt-[80px] pb-12 md:pb-14"
        style={{ maxWidth: 1280 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-end">
          <div>
            <RevealOnScroll>
              <p
                className="text-[10px] font-medium tracking-[0.25em] uppercase mb-3.5"
                style={{ color: "var(--terra)" }}
              >
                Community
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2
                className="leading-[0.92]"
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(44px, 5vw, 72px)",
                  color: "var(--ink)",
                }}
              >
                Our
                <br />
                Partners
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={1}>
            <p className="text-[15px] leading-[1.75]" style={{ color: "var(--muted)" }}>
              We work hand in hand with local surf schools, travel communities, booking platforms
              and cultural organizations, each one carefully chosen to give our guests the richest,
              most authentic Gran Canaria experience every single day.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Logo strip — static, Marquee-style */}
      <RevealOnScroll>
        <div style={{ background: "var(--terra)", padding: "20px 0" }}>
          <div
            className="mx-auto px-5 sm:px-8 md:px-12"
            style={{ maxWidth: 1280 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              {partners.map((partner, i) => (
                <Fragment key={partner.name}>
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                  >
                    <div className="relative w-[120px] h-[100px]">
                      <Image
                        src={partner.img}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        sizes="150px"
                      />
                    </div>
                  </div>
                  {i < partners.length - 1 && (
                    <span
                      className="hidden md:inline text-[8px] leading-none"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      ◆
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
