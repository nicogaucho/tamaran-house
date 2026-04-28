"use client";

import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/components/sections/rooms-data";

export function RoomCard({ room, dark = false }: { room: Room; dark?: boolean }) {
  const borderTopColor = dark ? "var(--coral)" : "var(--terra)";

  return (
    <div
      className="overflow-hidden transition-transform duration-300 hover:-translate-y-[3px] flex flex-col"
      style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fff", border: dark ? "1px solid rgba(255,255,255,0.08)" : "none" }}
    >
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 340, background: "var(--sand)" }}>
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
      </div>
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
