"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex = 0, alt, onClose }: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  const total = images.length;
  const isMulti = total > 1;
  const hasPrev = current > 0;
  const hasNext = current < total - 1;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) prev();
      if (e.key === "ArrowRight" && hasNext) next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [hasPrev, hasNext, onClose]);

  if (!mounted) return null;

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(10,16,24,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative flex items-center justify-center w-full h-full px-12 md:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Counter */}
        {isMulti && (
          <div
            className="absolute top-4 left-4 md:top-6 md:left-6 text-[10px] font-medium tracking-[0.15em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
            aria-live="polite"
          >
            {current + 1} / {total}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 hover:bg-white/20"
          style={{ background: "rgba(255,255,255,0.12)", borderRadius: "100px", border: "none", cursor: "pointer" }}
        >
          <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "currentColor", fill: "none", strokeWidth: 1.5 }}>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Prev arrow */}
        {hasPrev && (
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 hover:bg-white/20"
            style={{ background: "rgba(255,255,255,0.12)", borderRadius: "100px", border: "none", cursor: "pointer" }}
          >
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "currentColor", fill: "none", strokeWidth: 1.5 }}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        {/* Image */}
        <div
          className="relative w-full"
          style={{ maxWidth: 1000, height: "80vh" }}
        >
          <Image
            src={images[current]}
            alt={isMulti ? `${alt} — photo ${current + 1} of ${total}` : alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1000px"
            priority
          />
        </div>

        {/* Next arrow */}
        {hasNext && (
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-white transition-colors duration-150 hover:bg-white/20"
            style={{ background: "rgba(255,255,255,0.12)", borderRadius: "100px", border: "none", cursor: "pointer" }}
          >
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, stroke: "currentColor", fill: "none", strokeWidth: 1.5 }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}

        {/* Dot indicators */}
        {isMulti && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" aria-hidden="true">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
                className="transition-all duration-200"
                style={{
                  width: 8,
                  height: 8,
                  background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
                  borderRadius: "100px",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transform: i === current ? "scale(1.25)" : "scale(1)",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
