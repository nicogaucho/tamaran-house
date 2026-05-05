"use client";

import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/components/sections/rooms-data";

export function RoomCard({
  room,
  dark = false,
  onImageClick,
}: {
  room: Room;
  dark?: boolean;
  onImageClick?: () => void;
}) {
  const borderTopColor = dark ? "var(--coral)" : "var(--terra)";

  const imageContent = (
    <>
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
      {onImageClick && (
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
            View more photos
          </span>
        </div>
      )}
      {room.images && room.images.length > 1 && (
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 text-white text-[9px] font-medium tracking-[0.1em] uppercase"
          style={{ background: "rgba(10,16,24,0.65)", borderRadius: 100 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" style={{ width: 10, height: 10, stroke: "#fff", fill: "none", strokeWidth: 2 }}>
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
          {room.images.length} photos
        </div>
      )}
    </>
  );

  return (
    <div
      className="overflow-hidden transition-transform duration-300 hover:-translate-y-[3px] flex flex-col"
      style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: dark ? "1px solid rgba(255,255,255,0.08)" : "none" }}
    >
      {onImageClick ? (
        <button
          type="button"
          onClick={onImageClick}
          aria-label={`View ${room.island} room photos`}
          className="relative overflow-hidden flex-shrink-0 w-full group"
          style={{ height: 340, background: "var(--sand)", border: "none", borderRadius: 0, padding: 0, display: "block", cursor: "zoom-in" }}
        >
          {imageContent}
        </button>
      ) : (
        <div className="relative overflow-hidden flex-shrink-0" style={{ height: 340, background: "var(--sand)" }}>
          {imageContent}
        </div>
      )}
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
