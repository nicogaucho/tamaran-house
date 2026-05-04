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
      <span className="hidden sm:inline" style={{ opacity: 0.35 }}>|</span>
      <span className="hidden sm:inline">
        <a
          href="mailto:tamaran.house@gmail.com"
          className="border-b transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.4)" }}
        >
          tamaran.house@gmail.com
        </a>
      </span>
      <span className="hidden sm:inline" style={{ opacity: 0.35 }}>|</span>
      <span className="hidden sm:inline">
        WhatsApp{" "}
        <a
          href="https://wa.me/34673258236"
          className="border-b transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.4)" }}
        >
          +34 673 25 82 36
        </a>
      </span>
      <span className="hidden sm:inline" style={{ opacity: 0.35 }}>|</span>
      <span className="hidden sm:inline">
        <a
          href="https://www.instagram.com/tamaran_house?igsh=aDM1eDlxMTk4ZHFu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border-b transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.4)" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ width: 12, height: 12 }}
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          @tamaran_house
        </a>
      </span>
    </div>
  );
}
