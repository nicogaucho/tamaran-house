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
| Tailwind CSS | v4 | Utility styles |
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
    layout.tsx           # Root layout — font variables, metadata
    globals.css          # CSS custom properties, @theme tokens, animations
    page.tsx             # Home
    contact/page.tsx     # Contact
    the-hostel/page.tsx  # The Hostel
    rooms/page.tsx       # Rooms
  components/
    layout/
      TopBanner.tsx      # Fixed promo bar (terra bg, 36px height)
      Navbar.tsx         # Transparent → cream on scroll (client)
      Footer.tsx         # Dark footer, 4-column grid
    sections/
      Hero.tsx           # Full-bleed bg, title, stats
      Manifesto.tsx      # Dark ink section, "Land of the Braves"
      Marquee.tsx        # Infinite CSS marquee ticker
      Spaces.tsx         # Asymmetric 3-col photo grid
      Activities.tsx     # 6-item 3-col numbered grid
      Rooms.tsx          # 3-card room preview with pricing
      Amenities.tsx      # 4×2 icon grid on dark bg
      FAQ.tsx            # Accordion, one-open-at-a-time (client)
      Location.tsx       # Google Maps iframe + distance stats
      Testimonials.tsx   # 4 guest reviews
      CTASection.tsx     # Full-bleed CTA with bg image (client)
    ui/
      RevealOnScroll.tsx # IntersectionObserver fade-in utility (client)
public/
  uploads/               # All photo assets (copied from design bundle)
```

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

**`RevealOnScroll`** — polymorphic wrapper that adds `.reveal` and observes itself with `IntersectionObserver`; fires `.visible` once on entry then disconnects. Accepts `delay` (0–4) mapped to `.reveal-delay-N` CSS classes.

**`Navbar`** — client component; listens to `window.scroll` with `{ passive: true }` and toggles `scrolled` state to switch the background from transparent to `var(--cream)` after 60px.

**`FAQ`** — client component; tracks open index in local state; animates with `max-height` transition.

**`CTASection`** — client component; accepts props for all copy and both button targets so it is reused across all four pages.

**`rooms/page.tsx`** — marked `"use client"` because `RoomCard` uses inline `onMouseEnter`/`onMouseLeave` handlers on the book button.

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
