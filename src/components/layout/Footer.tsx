import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="px-12 pt-16 pb-10"
      style={{ background: "oklch(10% 0.012 240)", color: "rgba(255,255,255,0.45)" }}
    >
      <div
        className="max-w-[1280px] mx-auto grid gap-12 mb-14"
        style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
      >
        <div>
          <Image
            src="/uploads/logo.png"
            alt="Tamaran House"
            height={80}
            width={200}
            style={{ height: 80, width: "auto", filter: "brightness(0) invert(0.7)", display: "block", marginBottom: 16 }}
          />
          <p
            className="text-[15px] leading-relaxed max-w-[240px]"
            style={{ fontFamily: "var(--font-dm-serif), serif", fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}
          >
            The land of the braves — a surf hostel in the heart of Las Palmas.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Explore
          </div>
          <ul className="list-none p-0 flex flex-col gap-2.5">
            <li><Link href="/the-hostel" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>The Hostel</Link></li>
            <li><Link href="/the-hostel#activities" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Tamaran Life</Link></li>
            <li><Link href="/rooms" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Rooms</Link></li>
            <li><Link href="/the-hostel#activities" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Activities</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Book
          </div>
          <ul className="list-none p-0 flex flex-col gap-2.5">
            <li><a href="https://hotels.cloudbeds.com/en/reservation/OGEL0K?currency=eur" target="_blank" rel="noopener noreferrer" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Book a Room</a></li>
            <li><a href="#" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Hostelworld</a></li>
            <li><a href="#" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Booking.com</a></li>
            <li><Link href="/contact" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
            Follow
          </div>
          <ul className="list-none p-0 flex flex-col gap-2.5">
            <li><a href="https://instagram.com/tamaranhouse" target="_blank" rel="noopener noreferrer" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Instagram</a></li>
            <li><a href="#" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>YouTube</a></li>
            <li><a href="#" className="text-[13px] no-underline transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>TikTok</a></li>
          </ul>
        </div>
      </div>
      <div
        className="max-w-[1280px] mx-auto flex justify-between items-center pt-8 text-[12px]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span>© 2025 Tamaran House Hostel — Las Palmas de Gran Canaria</span>
        <a href="#" className="no-underline" style={{ color: "rgba(255,255,255,0.4)" }}>Privacy Policy</a>
      </div>
    </footer>
  );
}
