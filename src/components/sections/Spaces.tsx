"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ImageLightbox from "@/components/ui/ImageLightbox";

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
    img: "/uploads/kitchen.jpg",
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
  const [lightbox, setLightbox] = useState<{ img: string; alt: string } | null>(null);

  return (
    <>
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
                and a fully equipped kitchen. You&apos;ll feel right at home.
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
                <div className="relative overflow-hidden h-full">
                  <button
                    type="button"
                    onClick={() => setLightbox({ img: space.img, alt: space.name })}
                    aria-label={`View ${space.name} photo`}
                    className={`relative overflow-hidden group block w-full ${i === 0 ? "h-[280px] md:h-full md:min-h-[580px]" : "h-[280px]"}`}
                    style={{ border: "none", borderRadius: 0, padding: 0, cursor: "zoom-in" }}
                  >
                    <Image
                      src={space.img}
                      alt={space.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: space.position }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "rgba(10,16,24,0.35)" }}
                      aria-hidden="true"
                    >
                      <span className="text-white text-[10px] font-medium tracking-[0.2em] uppercase flex items-center gap-2">
                        <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: "#fff", fill: "none", strokeWidth: 1.5 }}>
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                        </svg>
                        View Photo
                      </span>
                    </div>
                  </button>
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

      {lightbox && (
        <ImageLightbox
          images={[lightbox.img]}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
