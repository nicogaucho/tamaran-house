import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tamaranhouse.com";
  return [
    { url: base,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/the-hostel`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rooms`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
