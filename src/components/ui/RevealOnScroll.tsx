"use client";

import { useEffect, useRef, ReactNode } from "react";
import { clsx } from "clsx";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: keyof React.JSX.IntrinsicElements;
}

const delayMap = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
};

export default function RevealOnScroll({ children, className, delay = 0, as: Tag = "div" }: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error -- polymorphic ref
    <Tag ref={ref} className={clsx("reveal", delayMap[delay], className)}>
      {children}
    </Tag>
  );
}
