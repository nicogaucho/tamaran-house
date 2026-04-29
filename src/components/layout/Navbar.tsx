"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled || menuOpen ? "var(--cream)" : "transparent";
  const navBorder = scrolled || menuOpen ? "1px solid var(--rule)" : "none";
  const iconColor = scrolled || menuOpen ? "var(--ink)" : "#fff";

  return (
    <nav
      className="fixed left-0 right-0 z-[100] flex items-center justify-between px-5 py-4 sm:px-8 md:px-12"
      style={{
        top: "36px",
        background: navBg,
        borderBottom: navBorder,
        transition: "background 0.3s",
      }}
    >
      <Link href="/" className="flex items-center no-underline">
        <Image src="/uploads/logo.png" alt="Tamaran House" height={48} width={160} style={{ height: 48, width: "auto" }} priority />
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
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

      {/* Hamburger button — mobile only */}
      <button
        className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer p-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className="block w-6 h-[1.5px] transition-all duration-200 origin-center"
          style={{
            background: iconColor,
            transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block w-6 h-[1.5px] transition-all duration-200"
          style={{
            background: iconColor,
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-[1.5px] transition-all duration-200 origin-center"
          style={{
            background: iconColor,
            transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full flex flex-col md:hidden"
          style={{ background: "var(--cream)", borderBottom: "1px solid var(--rule)" }}
        >
          <Link
            href="/the-hostel"
            className="text-[13px] font-medium tracking-[0.1em] uppercase no-underline px-5 py-4 border-b"
            style={{ color: "var(--terra)", borderColor: "var(--rule)" }}
            onClick={() => setMenuOpen(false)}
          >
            The Hostel
          </Link>
          <Link
            href="/rooms"
            className="text-[13px] font-medium tracking-[0.1em] uppercase no-underline px-5 py-4 border-b"
            style={{ color: "var(--terra)", borderColor: "var(--rule)" }}
            onClick={() => setMenuOpen(false)}
          >
            Rooms
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-medium tracking-[0.1em] uppercase no-underline px-5 py-4 border-b"
            style={{ color: "var(--terra)", borderColor: "var(--rule)" }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="px-5 py-4">
            <a
              href="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-white text-[13px] font-medium tracking-[0.1em] uppercase no-underline py-3 transition-colors duration-200"
              style={{ background: "var(--terra)", borderRadius: "100px" }}
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
