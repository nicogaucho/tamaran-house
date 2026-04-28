import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Tamaran House — Las Palmas Beach Hostel",
  description:
    "A surf hostel where travelers, surfers, and dreamers become family. 50m from Las Canteras beach, Las Palmas de Gran Canaria.",
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
      <body>{children}</body>
    </html>
  );
}
