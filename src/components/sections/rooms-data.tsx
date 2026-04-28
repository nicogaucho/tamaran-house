import type { ReactNode } from "react";

export interface RoomFeature {
  icon: ReactNode;
  label: string;
}

export interface Room {
  island: string;
  typeLabel: string;
  features: RoomFeature[];
  desc: string;
  price: string;
  img: string | null;
  badges: { label: string; variant: "terra" | "dark" | "ocean" }[];
}

const iconBed = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M2 12h20M2 8h20M6 16h12" />
  </svg>
);
const iconBath = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M4 12h16M4 6h16M4 18h16" />
  </svg>
);
const iconWifi = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
  </svg>
);
const iconLocker = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const iconBalcony = (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, stroke: "var(--terra)", fill: "none", strokeWidth: 1.5, flexShrink: 0 }}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const dorms: Room[] = [
  {
    island: "Fuerteventura",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "Shared bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Bright and airy dorm perfect for meeting fellow travelers. Lockers, reading lights and USB ports at every bunk. Shared bathrooms are kept spotless.",
    price: "€25 / night",
    img: "/uploads/Fuerteventura.jpg",
    badges: [{ label: "Shared Bathroom", variant: "terra" }],
  },
  {
    island: "Lanzarote",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "Shared bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Named after the volcanic island, this dorm has a warm, earthy atmosphere. Great natural light and a social vibe — perfect for solo travelers.",
    price: "€25 / night",
    img: "/uploads/Lanzarote.jpg",
    badges: [{ label: "Shared Bathroom", variant: "terra" }],
  },
  {
    island: "Gomera",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Upgraded dorm with a private en-suite bathroom shared only with your dorm mates. More comfort, same great social atmosphere.",
    price: "€30 / night",
    img: "/uploads/Gomera.jpg",
    badges: [{ label: "Bathroom In Room", variant: "dark" }],
  },
  {
    island: "Tenerife",
    typeLabel: "4-Bed Dorm",
    features: [
      { icon: iconBed, label: "4 bunk beds" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Our most popular dorm. Named after Spain's tallest peak, it feels spacious and bright. En-suite bathroom and extra storage for surfers with gear.",
    price: "€30 / night",
    img: "/uploads/Tenerife.jpg",
    badges: [{ label: "Bathroom In Room", variant: "dark" }],
  },
];

export const privateRooms: Room[] = [
  {
    island: "La Palma",
    typeLabel: "Double Private Room",
    features: [
      { icon: iconBed, label: "Double bed" },
      { icon: iconBalcony, label: "Private balcony" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
    ],
    desc: "Named after the 'Beautiful Island'. A bright double room with your own private balcony — perfect for couples or solo travelers who want a little more space and privacy.",
    price: "€65 / night",
    img: "/uploads/LaPalma.jpeg",
    badges: [
      { label: "Double Bed", variant: "terra" },
      { label: "Balcony", variant: "dark" },
    ],
  },
  {
    island: "El Hierro",
    typeLabel: "Double Private Room",
    features: [
      { icon: iconBed, label: "Double bed" },
      { icon: iconBath, label: "En-suite bathroom" },
      { icon: iconWifi, label: "Free WiFi" },
      { icon: iconLocker, label: "Locker" },
    ],
    desc: "Cozy and intimate, El Hierro is your private sanctuary in the heart of Las Palmas. All the hostel vibe with the privacy of your own room and en-suite bathroom.",
    price: "€65 / night",
    img: "/uploads/image00006.jpeg",
    badges: [{ label: "Double Bed", variant: "terra" }],
  },
];
