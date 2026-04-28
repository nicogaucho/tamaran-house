'use client';

import Image from "next/image";
import Link from "next/link";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  eyebrow = "Ready to be brave?",
  title = "Your Adventure\nStarts Here",
  subtitle = "Join our community of surfers, dreamers, and adventurers in the heart of Las Palmas.",
  primaryLabel = "Book Your Stay",
  primaryHref = "https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden text-center" style={{ padding: "160px 48px" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/uploads/ImageHero.jpg"
          alt="Tamaran House"
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,16,24,0.60)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p
          className="text-[11px] font-medium tracking-[0.25em] uppercase mb-5"
          style={{ color: "var(--coral)" }}
        >
          {eyebrow}
        </p>
        <h2
          className="text-white leading-[0.9] mb-7"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontSize: "clamp(62px, 8.5vw, 120px)",
          }}
        >
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p
          className="text-[20px] mb-12 max-w-[480px] mx-auto"
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={primaryHref}
            target={primaryHref.startsWith("http") ? "_blank" : undefined}
            rel={primaryHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-block text-white text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--terra)",
              padding: "18px 48px",
              borderRadius: "100px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--coral)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--terra)")}
          >
            {primaryLabel}
          </a>
          {secondaryLabel && (
            <Link
              href={secondaryHref!}
              className="inline-block text-[12px] font-medium tracking-[0.2em] uppercase no-underline transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.7)",
                padding: "18px 48px",
                borderRadius: "100px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
              }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
