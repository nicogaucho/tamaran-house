"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { RoomCard } from "@/components/sections/RoomCard";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { privateRooms } from "@/components/sections/rooms-data";
import type { Room } from "@/components/sections/rooms-data";

interface LightboxState {
  images: string[];
  initialIndex: number;
  alt: string;
}

export default function PrivateRoomsSection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (room: Room) => {
    const images = room.images?.length ? room.images : room.img ? [room.img] : [];
    if (!images.length) return;
    setLightbox({ images, initialIndex: 0, alt: `${room.island} room` });
  };

  return (
    <>
      <section
        id="private"
        className="border-b"
        style={{ background: "var(--sand)", padding: "100px 0", borderColor: "var(--rule)" }}
      >
        <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
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

          <div className="grid gap-[3px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {privateRooms.map((room, i) => (
              <RevealOnScroll
                key={room.island}
                delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4)}
                className={room.island === "Gran Canaria" ? "md:col-span-2 lg:col-span-1" : undefined}
              >
                <RoomCard
                  room={room}
                  onImageClick={() => openLightbox(room)}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          initialIndex={lightbox.initialIndex}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
