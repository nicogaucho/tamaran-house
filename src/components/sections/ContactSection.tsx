"use client";

import { useState, useTransition } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { sendContactEmail } from "@/app/contact/actions";

const channels = [
  {
    type: "Email",
    label: "tamaran.house@gmail.com",
    href: "mailto:tamaran.house@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5 }}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    type: "WhatsApp",
    label: "+34 673 25 82 36",
    href: "https://wa.me/34673258236",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5 }}>
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" />
      </svg>
    ),
  },
  {
    type: "Instagram",
    label: "@tamaranhouse",
    href: "https://instagram.com/tamaranhouse",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5 }}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="var(--terra)" stroke="none" />
      </svg>
    ),
  },
  {
    type: "Address",
    label: "C. Sgto. Llagas 34, Las Palmas",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5 }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <section style={{ background: "var(--cream)", padding: "100px 0" }}>
      <div
        className="mx-auto grid gap-20 items-start"
        style={{ maxWidth: 1280, padding: "0 48px", gridTemplateColumns: "1fr 1.4fr" }}
      >
        {/* Info column */}
        <div className="pt-2">
          <RevealOnScroll>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-4" style={{ color: "var(--terra)" }}>
              Reach us
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h2
              className="leading-[0.92] mb-6"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(48px, 5vw, 72px)",
                color: "var(--ink)",
              }}
            >
              Let&apos;s
              <br />
              Talk
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="text-[15px] leading-[1.75] mb-10 max-w-[340px]" style={{ color: "var(--muted)" }}>
              Whether you have questions about your stay, want to book a room, or just want to know more about Tamaran — we&apos;re
              here for you.
            </p>
          </RevealOnScroll>

          <div className="flex flex-col" style={{ borderTop: "1px solid var(--rule)" }}>
            {channels.map((ch, i) => {
              const inner = (
                <div key={ch.type} className="flex items-center gap-5 py-[22px]" style={{ borderBottom: "1px solid var(--rule)" }}>
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-full"
                    style={{ background: "var(--sand)" }}
                  >
                    {ch.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-medium tracking-[0.18em] uppercase mb-0.5" style={{ color: "var(--muted)" }}>
                      {ch.type}
                    </div>
                    <div className="text-[14px] font-medium transition-colors duration-200" style={{ color: "var(--ink)" }}>
                      {ch.label}
                    </div>
                  </div>
                </div>
              );
              return ch.href ? (
                <RevealOnScroll key={ch.type} delay={(i % 3) as 0 | 1 | 2}>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="no-underline text-inherit hover:opacity-80 block"
                  >
                    {inner}
                  </a>
                </RevealOnScroll>
              ) : (
                <RevealOnScroll key={ch.type} delay={(i % 3) as 0 | 1 | 2}>
                  {inner}
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Form column */}
        <RevealOnScroll>
          <div
            className="p-12"
            style={{ background: "#fff", borderTop: "3px solid var(--terra)" }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-5"
                  style={{ background: "oklch(92% 0.06 145)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ width: 24, height: 24, stroke: "oklch(42% 0.12 145)", strokeWidth: 2, fill: "none" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 28, letterSpacing: "0.04em", color: "var(--ink)" }}
                >
                  Message Sent!
                </h3>
                <p className="text-[14px]" style={{ color: "var(--muted)" }}>
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div
                  className="mb-1.5"
                  style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 32, letterSpacing: "0.04em", color: "var(--ink)" }}
                >
                  Send us a message
                </div>
                <p
                  className="mb-8"
                  style={{ fontFamily: "var(--font-dm-serif), serif", fontStyle: "italic", fontSize: 15, color: "var(--muted)" }}
                >
                  We usually reply within a few hours.
                </p>
                <form
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    setError(null);
                    const data = new FormData(e.currentTarget);
                    startTransition(async () => {
                      const result = await sendContactEmail(data);
                      if (result.success) {
                        setSubmitted(true);
                      } else {
                        setError(result.error);
                      }
                    });
                  }}
                >
                  <div className="grid gap-4 mb-5" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-[10px] font-medium tracking-[0.16em] uppercase"
                        style={{ color: "var(--muted)" }}
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Anna García"
                        required
                        className="w-full px-4 py-3.5 text-[14px] font-light outline-none transition-colors duration-200 rounded-[4px]"
                        style={{
                          border: "1px solid var(--rule)",
                          background: "var(--cream)",
                          color: "var(--ink)",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--terra)";
                          e.currentTarget.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--rule)";
                          e.currentTarget.style.background = "var(--cream)";
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-[10px] font-medium tracking-[0.16em] uppercase"
                        style={{ color: "var(--muted)" }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="anna@email.com"
                        required
                        className="w-full px-4 py-3.5 text-[14px] font-light outline-none transition-colors duration-200 rounded-[4px]"
                        style={{
                          border: "1px solid var(--rule)",
                          background: "var(--cream)",
                          color: "var(--ink)",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--terra)";
                          e.currentTarget.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--rule)";
                          e.currentTarget.style.background = "var(--cream)";
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="checkin"
                        className="text-[10px] font-medium tracking-[0.16em] uppercase"
                        style={{ color: "var(--muted)" }}
                      >
                        Check-in date
                      </label>
                      <input
                        type="date"
                        id="checkin"
                        name="checkin"
                        className="w-full px-4 py-3.5 text-[14px] font-light outline-none transition-colors duration-200 rounded-[4px]"
                        style={{
                          border: "1px solid var(--rule)",
                          background: "var(--cream)",
                          color: "var(--ink)",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--terra)";
                          e.currentTarget.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--rule)";
                          e.currentTarget.style.background = "var(--cream)";
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="checkout"
                        className="text-[10px] font-medium tracking-[0.16em] uppercase"
                        style={{ color: "var(--muted)" }}
                      >
                        Check-out date
                      </label>
                      <input
                        type="date"
                        id="checkout"
                        name="checkout"
                        className="w-full px-4 py-3.5 text-[14px] font-light outline-none transition-colors duration-200 rounded-[4px]"
                        style={{
                          border: "1px solid var(--rule)",
                          background: "var(--cream)",
                          color: "var(--ink)",
                          fontFamily: "var(--font-dm-sans), sans-serif",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--terra)";
                          e.currentTarget.style.background = "#fff";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--rule)";
                          e.currentTarget.style.background = "var(--cream)";
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    <label
                      htmlFor="room"
                      className="text-[10px] font-medium tracking-[0.16em] uppercase"
                      style={{ color: "var(--muted)" }}
                    >
                      Room type
                    </label>
                    <select
                      id="room"
                      name="room"
                      className="w-full px-4 py-3.5 text-[14px] font-light outline-none transition-colors duration-200 rounded-[4px] cursor-pointer appearance-none"
                      style={{
                        border: "1px solid var(--rule)",
                        background: "var(--cream)",
                        color: "var(--ink)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: 40,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--terra)";
                        e.currentTarget.style.background = "#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\") no-repeat right 14px center";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--rule)";
                        e.currentTarget.style.background = "var(--cream)";
                      }}
                    >
                      <option value="">Select a room type…</option>
                      <option>4-Bed Dorm — from €25/night</option>
                      <option>Private Room — from €65/night</option>
                      <option>Master Private — from €85/night</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 mb-5">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-medium tracking-[0.16em] uppercase"
                      style={{ color: "var(--muted)" }}
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us anything — questions, requests, special occasions…"
                      rows={5}
                      className="w-full px-4 py-3.5 text-[14px] font-light outline-none transition-colors duration-200 rounded-[4px] resize-y"
                      style={{
                        border: "1px solid var(--rule)",
                        background: "var(--cream)",
                        color: "var(--ink)",
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        minHeight: 120,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--terra)";
                        e.currentTarget.style.background = "#fff";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--rule)";
                        e.currentTarget.style.background = "var(--cream)";
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full text-white text-[12px] font-medium tracking-[0.18em] uppercase py-4 mt-2 transition-colors duration-200 border-none"
                    style={{
                      background: "var(--terra)",
                      borderRadius: "100px",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      cursor: isPending ? "default" : "pointer",
                      opacity: isPending ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => { if (!isPending) e.currentTarget.style.background = "var(--coral)"; }}
                    onMouseLeave={(e) => { if (!isPending) e.currentTarget.style.background = "var(--terra)"; }}
                  >
                    {isPending ? "Sending…" : "Send Message →"}
                  </button>
                  {error && (
                    <p className="text-center text-[12px] mt-3" style={{ color: "var(--coral)" }}>
                      {error}
                    </p>
                  )}
                  <p className="text-center text-[11px] mt-3.5 leading-[1.6]" style={{ color: "var(--muted)" }}>
                    By submitting you agree to our privacy policy. We&apos;ll never share your data.
                  </p>
                </form>
              </>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
