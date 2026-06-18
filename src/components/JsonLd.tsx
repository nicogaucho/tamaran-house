export function LodgingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Tamaran House",
    description:
      "Surf hostel 50 m from Las Canteras beach in Las Palmas de Gran Canaria.",
    url: "https://www.tamaranhouse.com",
    telephone: "+34673258236",
    email: "tamaran.house@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Sargento Llagas 34",
      addressLocality: "Las Palmas de Gran Canaria",
      postalCode: "35007",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.1248,
      longitude: -15.43,
    },
    image: "https://www.tamaranhouse.com/uploads/ImageHero.jpg",
    priceRange: "€–€€",
    starRating: { "@type": "Rating", ratingValue: "4.9" },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Surf lessons", value: true },
      { "@type": "LocationFeatureSpecification", name: "Rooftop terrace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fully equipped kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Yoga sessions", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    ],
    sameAs: ["https://www.instagram.com/tamaran_house?igsh=aDM1eDlxMTk4ZHFu"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd() {
  const faqs = [
    {
      q: "Do you offer surf lessons for beginners and advanced surfers?",
      a: "Yes, we offer surf lessons for all levels directly from the hostel. Ask at reception for the weekly schedule.",
    },
    {
      q: "Can I rent surfboards at your surf house?",
      a: "Yes, surfboard rental is available for guests. We also offer wetsuits and other equipment.",
    },
    {
      q: "What weekly activities are available at the surf house?",
      a: "We run surf lessons, yoga sessions, kayak trips, snorkeling, rooftop dinners, and sunset sessions every week.",
    },
    {
      q: "Can you recommend the best places to visit on the island?",
      a: "Absolutely — our team knows every hidden gem on Gran Canaria. Ask us at reception for a personalised island guide.",
    },
    {
      q: "What are the main attractions near the property?",
      a: "Las Canteras beach is 50 m away. The city centre, Vegueta old town, and Bandama volcano are all within easy reach.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
