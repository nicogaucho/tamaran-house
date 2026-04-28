"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 z-[100] flex items-center justify-between px-12"
      style={{
        top: "36px",
        padding: "16px 48px",
        background: scrolled ? "var(--cream)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--rule)" : "none",
        transition: "background 0.3s",
      }}
    >
      <Link href="/" className="flex items-center no-underline">
        <Image src="/uploads/logo.png" alt="Tamaran House" height={48} width={160} style={{ height: 48, width: "auto" }} priority />
      </Link>
      <ul className="flex gap-9 list-none m-0 p-0">
        <li>
          <Link
            href="/the-hostel"
            className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-100"
            style={{ color: "var(--terra)", opacity: 0.85 }}
          >
            The Hostel
          </Link>
        </li>
        <li>
          <Link
            href="/rooms"
            className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-100"
            style={{ color: "var(--terra)", opacity: 0.85 }}
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline transition-opacity duration-200 hover:opacity-100"
            style={{ color: "var(--terra)", opacity: 0.85 }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <a
            href="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline text-white transition-colors duration-200 hover:bg-[var(--coral)]"
            style={{
              background: "var(--terra)",
              padding: "10px 24px",
              borderRadius: "100px",
              opacity: 1,
              color: "#fff",
            }}
          >
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
