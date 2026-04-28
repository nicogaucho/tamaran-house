import RevealOnScroll from "@/components/ui/RevealOnScroll";

const amenities = [
  {
    name: "Fast WiFi Throughout",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M6 18c0-6.627 5.373-12 12-12s12 5.373 12 12"/>
        <path d="M10 22c0-4.418 3.582-8 8-8s8 3.582 8 8"/>
        <circle cx="18" cy="26" r="2"/>
      </svg>
    ),
  },
  {
    name: "Lockers in Every Room",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M8 28V12l10-6 10 6v16"/>
        <rect x="14" y="20" width="8" height="8"/>
      </svg>
    ),
  },
  {
    name: "Daily Activities",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M8 14h20M8 20h12M12 8v4M24 8v4"/>
        <rect x="6" y="6" width="24" height="24" rx="2"/>
      </svg>
    ),
  },
  {
    name: "Surf Lessons & Rent",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M18 6C11.373 6 6 11.373 6 18c0 3.18 1.244 6.07 3.27 8.2"/>
        <path d="M18 10c-4.418 0-8 3.582-8 8 0 2.21.898 4.21 2.343 5.657"/>
      </svg>
    ),
  },
  {
    name: "Washing Machine",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="7" y="8" width="22" height="20" rx="2"/>
        <path d="M7 14h22M12 8v6M24 8v6"/>
      </svg>
    ),
  },
  {
    name: "Fully Equipped Kitchen",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M12 10h12v4H12zM10 14h16v12H10z"/>
        <path d="M16 18h4M14 22h8"/>
      </svg>
    ),
  },
  {
    name: "Beach Views & Location",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <circle cx="18" cy="18" r="8"/>
        <path d="M18 10v8l5 3"/>
      </svg>
    ),
  },
  {
    name: "Free Filtered Water",
    icon: (
      <svg className="w-9 h-9 opacity-50" viewBox="0 0 36 36" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M10 16h16M10 20h16M14 12l-4 12M22 12l4 12"/>
      </svg>
    ),
  },
];

export default function Amenities() {
  return (
    <section style={{ background: "var(--ink)", padding: "80px 0" }}>
      <div className="mx-auto" style={{ maxWidth: 1280, padding: "0 48px" }}>
        <RevealOnScroll>
          <p
            className="text-[10px] font-medium tracking-[0.25em] uppercase mb-10"
            style={{ color: "var(--coral)" }}
          >
            Everything Included
          </p>
        </RevealOnScroll>
        <div
          className="grid border"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          {amenities.map((a, i) => (
            <RevealOnScroll key={a.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div
                className="p-9 transition-colors duration-200 hover:bg-white/[0.04]"
                style={{
                  borderRight: (i + 1) % 4 !== 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="mb-4">{a.icon}</div>
                <div
                  className="text-[13px] font-medium tracking-[0.04em] leading-[1.4]"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {a.name}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
