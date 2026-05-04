import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { LodgingJsonLd } from "@/components/JsonLd";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tamaranhouse.com"),
  title: {
    default: "Tamaran House — Surf Hostel in Las Palmas de Gran Canaria",
    template: "%s | Tamaran House",
  },
  description:
    "Tamaran House is a surf hostel in Las Palmas de Gran Canaria. " +
    "Dorms from €25, private rooms from €65. 50 m from Las Canteras beach. " +
    "Surf lessons, yoga, rooftop, fully equipped kitchen.",
  keywords: [
    "surf hostel Las Palmas",
    "hostel Gran Canaria",
    "surf house Las Canteras",
    "budget accommodation Las Palmas",
    "Tamaran House",
    "surfers hostel Canary Islands",
  ],
  authors: [{ name: "Tamaran House" }],
  creator: "Tamaran House",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tamaranhouse.com",
    siteName: "Tamaran House",
    title: "Tamaran House — Surf Hostel in Las Palmas de Gran Canaria",
    description:
      "Your home between sand & sky. Dorms from €25, private rooms from €65. 50 m from Las Canteras beach.",
    images: [
      {
        url: "/uploads/ImageHero.jpg",
        width: 1200,
        height: 630,
        alt: "Tamaran House — surf hostel in Las Palmas de Gran Canaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamaran House — Surf Hostel in Las Palmas",
    description:
      "Your home between sand & sky. Dorms from €25. 50 m from Las Canteras beach.",
    images: ["/uploads/ImageHero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://tamaranhouse.com",
  },
  verification: {
    google: "AiVUTOzKuTD9Vs5ASvY49LVWkjPg8jE-ynwS1uHnB_M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body>
        <LodgingJsonLd />
        {children}
      </body>
    </html>
  );
}
