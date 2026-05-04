> ⚠️ **Proprietary Software** — This repository contains confidential source code
> developed for Tamaran House / Agüita Canarias SL. All rights reserved.
> Unauthorized use, copying, or distribution is strictly prohibited.

# Tamaran House — Marketing Website

Surf hostel marketing site for **Tamaran House**, Las Palmas de Gran Canaria.
Built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4.

---

## Stack

| Tool | Version | Role |
| --- | --- | --- |
| Next.js | 16.2.4 | Framework (App Router, Turbopack) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Utility styles + responsive breakpoints |
| next/font/google | — | Bebas Neue · DM Serif Display · DM Sans |
| clsx + tailwind-merge | — | Conditional class helpers |
| Resend | ^4.x | Transactional email (contact form) |

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint check
```

---

## Environment variables

Create a `.env.local` file in the project root (never commit this file):

```
RESEND_API_KEY=re_your_key_here
```

Get your API key from resend.com. The contact form will return a server error if this variable is missing.

---

## Pages

| Route | File | Description |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Full homepage |
| `/the-hostel` | `src/app/the-hostel/page.tsx` | Story, values, island, activities, team |
| `/rooms` | `src/app/rooms/page.tsx` | All room categories |
| `/contact` | `src/app/contact/page.tsx` | Contact form + channel cards |

All routes are statically prerendered (`○ Static`).

---

## Project structure

```
src/
  app/
    layout.tsx           # Root layout — font variables, metadata, SEO, Google verification
    globals.css          # CSS custom properties, @theme tokens, animations
    icon.png             # Favicon — must be square 512×512, served at /icon.png
    page.tsx             # Home
    contact/page.tsx     # Contact
    the-hostel/page.tsx  # The Hostel
    rooms/page.tsx       # Rooms (server component — exports metadata)
  components/
    layout/
      TopBanner.tsx      # Fixed promo bar (terra bg, 36px height)
      Navbar.tsx         # Transparent → cream on scroll + hamburger menu (client)
      Footer.tsx         # Dark footer, responsive 1→2→4 column grid
    sections/
      Hero.tsx           # Full-bleed bg, title, responsive stats row
      Manifesto.tsx      # Dark ink section, "Land of the Braves"
      Marquee.tsx        # Infinite CSS marquee ticker
      Spaces.tsx         # Asymmetric 3-col photo grid (single col on mobile)
      Activities.tsx     # 6-item numbered grid (1→2→3 cols)
      Rooms.tsx          # 3-card room preview with pricing (1→2→3 cols)
      Amenities.tsx      # 4×2 icon grid on dark bg (2 cols mobile, 4 desktop)
      FAQ.tsx            # Accordion, one-open-at-a-time (client)
      Location.tsx       # Google Maps iframe + distance stats (map first on mobile)
      Testimonials.tsx   # 4 guest reviews (1→2→4 cols)
      CTASection.tsx     # Full-bleed CTA with bg image (client)
      ContactSection.tsx # Contact form + channel list (client)
      RoomCard.tsx       # Individual room card with hover state (client)
    ui/
      RevealOnScroll.tsx # IntersectionObserver fade-in utility (client)
public/
  uploads/               # All photo assets (copied from design bundle)
```

---

## Responsive design

The site is fully responsive across three breakpoints:

| Breakpoint | Width | Tailwind prefix |
| --- | --- | --- |
| Mobile | 375px | (default) |
| Tablet | 768px | `md:` |
| Desktop | 1280px+ | `lg:` / `md:` |

**Container padding** — every section inner container uses:

```text
px-5 sm:px-8 md:px-12
```

**Section vertical padding**:

```text
py-16 md:py-[120px]   (large)
py-16 md:py-[80px]    (compact)
```

Layout properties (`padding`, `gridTemplateColumns`) live in Tailwind `className`, not inline `style`, so responsive prefixes work. Color tokens (`var(--terra)` etc.) may stay in inline style.

---

## Design system

### Colors (CSS custom properties)

Defined in `globals.css`, exposed to Tailwind via `@theme inline`:

```css
--sand:    oklch(95% 0.022 80)   /* light warm background */
--cream:   oklch(97% 0.012 75)   /* page background */
--ink:     oklch(15% 0.018 240)  /* near-black text */
--ocean:   oklch(32% 0.065 220)  /* dark teal */
--terra:   oklch(58% 0.12 42)    /* terracotta — primary accent */
--coral:   oklch(68% 0.13 38)    /* coral — hover/secondary */
--surf:    oklch(72% 0.09 210)   /* muted blue */
--muted:   oklch(55% 0.018 80)   /* muted text */
--rule:    oklch(85% 0.018 80)   /* borders/dividers */
```

Always use `var(--token)` in inline styles or `bg-[var(--token)]` in Tailwind classes. Never hardcode hex or rgb values.

### Typography

| Variable | Font | Usage |
| --- | --- | --- |
| `var(--font-bebas)` | Bebas Neue | Display headings, stats, labels |
| `var(--font-dm-serif)` | DM Serif Display | Italic editorial subheadings, quotes |
| `var(--font-dm-sans)` | DM Sans (300/400/500) | All body text |

Font variables are injected on `<html>` by `layout.tsx` via `next/font/google`.

### Buttons

All buttons use `border-radius: 100px` (pill shape). The base style is set globally in `globals.css`.

### Animations

| Class | Definition | Used in |
| --- | --- | --- |
| `.reveal` + `.visible` | Fade + translateY via IntersectionObserver | Every section |
| `.marquee-track` | `animation: marquee 24s linear infinite` | Marquee strip |
| `bounceScroll` keyframes | Up/down bounce | Hero scroll indicator |

---

## Key component notes

**`TopBanner`** — client component; on mobile (< sm) shows only the promo code; email and WhatsApp links are hidden with `hidden sm:inline`.

**`Navbar`** — client component; two states: (1) `scrolled` — background switches from transparent to `var(--cream)` after 60px scroll; (2) `menuOpen` — hamburger button (mobile-only, `flex md:hidden`) toggles a full-width dropdown drawer with all nav links stacked vertically. Both states share the same nav background logic (`scrolled || menuOpen → cream`).

**`Footer`** — responsive grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]`. Bottom bar stacks on mobile.

**`RevealOnScroll`** — polymorphic wrapper that adds `.reveal` and observes itself with `IntersectionObserver`; fires `.visible` once on entry then disconnects. Accepts `delay` (0–4) mapped to `.reveal-delay-N` CSS classes. Also accepts `className` for layout utility (e.g. `md:row-span-2`).

**`Spaces`** — asymmetric grid (`grid-cols-1 md:grid-cols-[2fr_1fr_1fr]`). First card uses `md:row-span-2` (no `row-span-2` on mobile to avoid layout collapse).

**`FAQ`** — client component; tracks open index in local state; animates with `max-height` transition.

**`Location`** — map div has `order-first md:order-last` so the iframe appears above the text on mobile.

**`CTASection`** — client component; accepts props for all copy and both button targets so it is reused across all four pages.

**`ContactSection`** — client component; form input grid is `grid-cols-1 sm:grid-cols-2`. Form card padding is `p-6 sm:p-8 md:p-12`.

**`rooms/page.tsx`** — **server component** (exports `metadata`). `RoomCard.tsx` is the client component that handles hover state.

---

## Assets

All images live in `public/uploads/`.

| File | Used in |
| --- | --- |
| `logo.png` | Navbar, Hero, Footer |
| `ImageHero.jpg` | Hero bg, CTA section bg |
| `GalleryRoof.jpg` | The Hostel hero bg |
| `GalleryRoom.jpg` | Spaces — Rooftop card |
| `GalleryLeaving.jpg` | Spaces — Living Room card |
| `IMG_4971.JPG` | Spaces — Kitchen card |
| `GalleryReception.jpg` | Spaces — Reception card |
| `Tenerife.jpg` | Rooms cards, Rooms page hero bg |
| `image00006.jpeg` | Private Room card, La Palma room |
| `Private.jpg` | Master Private card |
| `Palma.jpg` | El Hierro room card |
| `_DSC5996.jpg` | Island section photo 1 |
| `DSC08728.jpg` | Island section photo 2 |
| `DSC02326.jpg` | Island section photo 3 |
| `Damiano.png` | Team card |
| `Eugenie.jpeg` | Team card |
| `Jacopo.png` | Team card |
| `nico.jpeg` | Team card |

---

## SEO configuration

All metadata is managed via Next.js's `metadata` API in `layout.tsx` and individual page files. Do not add raw `<meta>` tags in JSX.

| Feature | Implementation |
| --- | --- |
| Title / description | `metadata.title`, `metadata.description` in `layout.tsx` |
| Open Graph + Twitter | `metadata.openGraph`, `metadata.twitter` |
| Canonical URL | `metadata.alternates.canonical` |
| Robots | `metadata.robots` |
| Sitemap | Auto-generated by Next.js (`src/app/sitemap.ts`) |
| Robots.txt | Auto-generated by Next.js (`src/app/robots.ts`) |
| JSON-LD | `<LodgingJsonLd />` component in `layout.tsx` |
| Favicon | `src/app/icon.png` — square 512×512 PNG, served at `/icon.png` |
| Google Search Console | `metadata.verification.google` in `layout.tsx` |

**Favicon rule** — `src/app/icon.png` must stay square. Google ignores non-square favicons in search results. If you replace it, keep it at 512×512.

---

## External embeds

- **Google Maps** — `Location.tsx` embeds `https://www.google.com/maps?q=Calle+Sargento+Llagas+34,...&output=embed`
- **YouTube** — `the-hostel/page.tsx` embeds `https://www.youtube-nocookie.com/embed/TFjHvqATgy8?start=8`

Both iframes use `loading="lazy"`.

---

## Contact & booking

| Channel | Value |
| --- | --- |
| Email | tamaran.house@gmail.com |
| WhatsApp | +34 673 25 82 36 |
| Instagram | @tamaranhouse |
| Address | C. Sgto. Llagas 34, 35007 Las Palmas de Gran Canaria |
| Booking | https://tamaranhouse.com (all "Book Now" CTAs) |
