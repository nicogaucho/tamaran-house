const items = [
  "Surf Lessons", "Ocean Views", "Las Canteras Beach", "Daily Activities",
  "Digital Nomads Welcome", "Buena Vibra", "Community Spirit",
  "Surf Lessons", "Ocean Views", "Las Canteras Beach", "Daily Activities",
  "Digital Nomads Welcome", "Buena Vibra", "Community Spirit",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ background: "var(--terra)", padding: "18px 0" }}>
      <div className="inline-flex marquee-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="tracking-[0.12em] opacity-85"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: 18,
                color: "#fff",
                padding: "0 32px",
              }}
            >
              {item}
            </span>
            <span className="text-[8px] align-middle" style={{ color: "rgba(255,255,255,0.4)" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
