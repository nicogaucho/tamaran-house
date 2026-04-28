"use client";

export default function TopBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[102] flex items-center justify-center gap-4 flex-wrap px-6 text-white text-[11px] font-normal tracking-[0.04em]"
      style={{ background: "var(--terra)", height: "36px" }}
    >
      <span>
        Book directly &amp; save — use code{" "}
        <strong
          className="font-semibold px-2 py-0.5 rounded-sm text-[13px] tracking-[0.1em]"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            background: "rgba(255,255,255,0.18)",
          }}
        >
          TAMARAN10
        </strong>{" "}
        for 10% off
      </span>
      <span style={{ opacity: 0.35 }}>|</span>
      <span>
        <a
          href="mailto:tamaran.house@gmail.com"
          className="border-b transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.4)" }}
        >
          tamaran.house@gmail.com
        </a>
      </span>
      <span style={{ opacity: 0.35 }}>|</span>
      <span>
        WhatsApp{" "}
        <a
          href="https://wa.me/34673258236"
          className="border-b transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.4)" }}
        >
          +34 673 25 82 36
        </a>
      </span>
    </div>
  );
}
