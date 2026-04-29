"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    question: "Do you offer surf lessons for beginners and advanced surfers?",
    answer:
      "Yes! We partner with Ocean Side, one of the best surf schools in Las Palmas. They offer lessons for all levels — from total beginners to those looking to sharpen their technique. As a Tamaran guest you get exclusive discounts.",
  },
  {
    question: "Can I rent surfboards at your surf house?",
    answer:
      "Absolutely. Through our partner Ocean Side you can rent surfboards, wetsuits and all the gear you need. El Confital, one of the best surf spots on the island, is just 900m away.",
  },
  {
    question: "Do you offer sports equipment rental for guests?",
    answer:
      "Yes — we offer free use of snorkeling gear, beach volleyball equipment and more. Just ask at reception and we'll set you up.",
  },
  {
    question: "What weekly activities are available at the surf house?",
    answer:
      "Our team organizes daily activities for guests: group dinners, city tours, beach days, yoga sessions, kayaking, surf trips and more. We also add you to our hostel WhatsApp group so you never miss anything.",
  },
  {
    question: "Can you recommend the best places to visit on the island?",
    answer:
      "Definitely — our staff knows Gran Canaria inside out. From hidden beaches to mountain trails, local restaurants and night spots, we're always happy to share our favourite tips. Just ask at reception!",
  },
  {
    question: "What are the main attractions near the property?",
    answer:
      "Las Canteras beach is just 50m away — one of the best urban beaches in Europe. The historic Vegueta quarter, the Triana shopping district, great restaurants and bars are all within easy walking distance.",
  },
  {
    question: "How can I collaborate or partner with your surf house?",
    answer:
      "We love working with local businesses, instructors, photographers and creators. Reach out through our Contact page and we'll be happy to explore opportunities together.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="border-t py-16 md:py-[120px]"
      style={{ background: "var(--cream)", borderColor: "var(--rule)" }}
    >
      <div className="mx-auto px-5 sm:px-8 md:px-12" style={{ maxWidth: 1280 }}>
        <div className="grid gap-10 items-end mb-16 grid-cols-1 md:grid-cols-2">
          <RevealOnScroll>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: "var(--terra)" }}>
              Got Questions?
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h2
              className="leading-[0.94] tracking-[0.02em]"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(56px, 7vw, 100px)",
                color: "var(--ink)",
              }}
            >
              FAQ
            </h2>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col" style={{ borderTop: "1px solid var(--rule)" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <button
                className="w-full bg-transparent border-none cursor-pointer flex justify-between items-center gap-6 py-7 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="text-[16px] md:text-[20px] leading-[1.3]"
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontStyle: "italic",
                    color: "var(--ink)",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center relative transition-colors duration-200"
                  style={{
                    border: `1px solid ${open === i ? "var(--terra)" : "var(--rule)"}`,
                    borderRadius: "50%",
                    background: open === i ? "var(--terra)" : "transparent",
                  }}
                  aria-hidden
                >
                  <span
                    className="absolute"
                    style={{
                      width: 12,
                      height: 1.5,
                      background: open === i ? "#fff" : "var(--ink)",
                      borderRadius: 2,
                    }}
                  />
                  <span
                    className="absolute transition-all duration-300"
                    style={{
                      width: 1.5,
                      height: 12,
                      background: open === i ? "#fff" : "var(--ink)",
                      borderRadius: 2,
                      transform: open === i ? "rotate(90deg)" : "rotate(0deg)",
                      opacity: open === i ? 0 : 1,
                    }}
                  />
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{ maxHeight: open === i ? 300 : 0 }}
              >
                <p
                  className="pb-7 text-[15px] leading-[1.75] max-w-[720px]"
                  style={{ color: "var(--muted)" }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
