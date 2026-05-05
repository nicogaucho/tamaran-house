<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Agent guide — Tamaran House

## What this project is

Marketing website for **Tamaran House**, a surf hostel in Las Palmas de Gran Canaria.
Next.js 16.2.4 · App Router · TypeScript · Tailwind CSS v4 · Turbopack.

## Before you write any code

1. Read `README.md` — it contains the full project structure, design system tokens, and component contracts.
2. Run `npm run build` before and after your change to confirm zero errors.
3. Never hardcode hex/rgb colors. Use `var(--token)` from the CSS custom properties defined in `src/app/globals.css`.

## File layout (fast reference)

```text
src/app/
  layout.tsx                    ← font setup, root metadata, SEO, Google verification
  globals.css                   ← all CSS tokens + animations
  icon.png                      ← favicon served at /icon.png (must be square, 512×512)
  page.tsx                      ← homepage
  contact/page.tsx
  the-hostel/page.tsx
  rooms/page.tsx                ← server component (exports metadata); delegates to DormsSection + PrivateRoomsSection
src/components/
  layout/                       ← TopBanner, Navbar, Footer
  sections/                     ← one file per homepage/page section
    DormsSection.tsx            ← client component: dorm cards grid + lightbox state
    PrivateRoomsSection.tsx     ← client component: unified private rooms grid + lightbox state
    rooms-data.tsx              ← Room interface + dorms[] + privateRooms[] (includes Gran Canaria)
  ui/
    RevealOnScroll.tsx
    ImageLightbox.tsx           ← full-screen image viewer with carousel, keyboard nav, createPortal
public/uploads/                 ← all photo assets — do not rename files
```

## Client vs Server components

| Component | Directive | Reason |
| --- | --- | --- |
| `Navbar` | `"use client"` | `window.scroll` listener + `menuOpen` hamburger state |
| `TopBanner` | `"use client"` | marked for potential future state |
| `FAQ` | `"use client"` | accordion open/close state |
| `CTASection` | `"use client"` | hover event handlers |
| `RevealOnScroll` | `"use client"` | `IntersectionObserver` |
| `RoomCard.tsx` | `"use client"` | `onMouseEnter`/`onMouseLeave` + `onImageClick` handler |
| `Spaces.tsx` | `"use client"` | lightbox open/close state |
| `DormsSection.tsx` | `"use client"` | lightbox open/close state |
| `PrivateRoomsSection.tsx` | `"use client"` | lightbox open/close state |
| `ImageLightbox.tsx` | `"use client"` | `createPortal` + keyboard/scroll event listeners |
| Everything else | Server component (default) | no interactivity needed |

`rooms/page.tsx` exports `metadata` — it is a **server** component. It delegates room sections to `DormsSection` and `PrivateRoomsSection`, which are client components.

If you add interactivity to a currently server component, add `"use client"` to that file. Do not bubble it up to `layout.tsx`.

## Responsive design

The site is fully responsive across three breakpoints using Tailwind CSS v4 prefixes:

| Breakpoint | Width | Tailwind prefix |
| --- | --- | --- |
| Mobile | 375px | (default — no prefix) |
| Tablet | 768px | `md:` |
| Desktop | 1280px | `lg:` (or `md:` when 768 suffices) |

**Container padding pattern** (use on every section container `div`):

```text
px-5 sm:px-8 md:px-12
```

Never use `padding: "0 48px"` in inline styles for containers — this breaks on mobile.

**Section vertical padding pattern**:

```text
py-16 md:py-[120px]   ← large sections
py-16 md:py-[80px]    ← compact sections
```

**Common grid patterns**:

```text
grid-cols-1 md:grid-cols-2              ← 2-col content grids
grid-cols-1 sm:grid-cols-2 md:grid-cols-3   ← activity/room cards
grid-cols-1 sm:grid-cols-2 md:grid-cols-4   ← testimonials / amenities row
grid-cols-2 md:grid-cols-4              ← team, amenities (2 per row on mobile)
grid-cols-1 md:grid-cols-[280px_1fr]    ← sidebar + content
grid-cols-[2fr_1fr_1fr]                 ← asymmetric photo grids (md+ only, prepend grid-cols-1)
```

**Inline style extraction rule**: layout properties (`padding`, `gridTemplateColumns`, `gridTemplateRows`) must be extracted to Tailwind className so responsive prefixes work. Colors using `var(--token)` may stay in inline style.

## Design rules

- **Colors** — OKLCH tokens only. `var(--terra)` for primary accent, `var(--coral)` for hover, `var(--ink)` for dark sections, `var(--cream)` for page bg.
- **Fonts** — `var(--font-bebas)` for display type, `var(--font-dm-serif)` for italic editorial, `var(--font-dm-sans)` for body.
- **Buttons** — `border-radius: 100px` (pill). Enforced globally in `globals.css`.
- **Spacing rhythm** — sections use `py-16 md:py-[120px]` (large) or `py-16 md:py-[80px]` (compact). Containers use `px-5 sm:px-8 md:px-12` horizontal padding and `max-width: 1280px mx-auto`.
- **Scroll reveal** — wrap new content blocks in `<RevealOnScroll>`. Accepts `delay` prop (0–4) for staggered children.

## Adding a new section

1. Create `src/components/sections/MySection.tsx`.
2. Import and use `RevealOnScroll` for animated content.
3. Use `var(--*)` tokens for all colors via inline styles.
4. Use `px-5 sm:px-8 md:px-12` on the inner container div for horizontal padding.
5. Use responsive grid classes (see patterns above) — never `gridTemplateColumns` in inline style.
6. Add it to the relevant page file.
7. Run `npm run build` — confirm no errors.

## Adding a new page

1. Create `src/app/my-route/page.tsx`.
2. Import `TopBanner`, `Navbar`, and `Footer` from `@/components/layout/`.
3. Wrap sections in `<main>`.
4. Add a nav link in `src/components/layout/Navbar.tsx` (both the desktop `<ul>` and the mobile drawer).

## Images

- All assets are in `public/uploads/`. Use `next/image` with `fill` + `sizes` for responsive images.
- Do not rename existing asset files — filenames are referenced by path in component code.
- Prefer `object-cover` with an explicit `objectPosition` matching the focal point of the photo.
- For fill images, the container must have `position: relative` and an explicit height (e.g. `h-[280px]`).

## SEO & metadata

All `<head>` metadata is managed through Next.js's `metadata` API — never insert raw `<meta>` tags into JSX.

- **Global metadata** — `layout.tsx` exports a `metadata` object that covers title template, description, Open Graph, Twitter card, robots, canonical URL, and Google Search Console verification.
- **Page-level metadata** — each page can export its own `metadata` object; Next.js merges it with the root metadata.
- **Favicon** — `src/app/icon.png` is served at `/icon.png` by Next.js. It **must be square** (currently 512×512). Google ignores non-square favicons in search results. To replace it, provide a new square PNG at that path.
- **Verification tags** — add third-party verification via `metadata.verification`:

  ```ts
  verification: { google: "your-token-here" }
  ```

- **Sitemap & robots** — auto-generated by Next.js from `src/app/sitemap.ts` and `src/app/robots.ts`.
- **JSON-LD** — `<LodgingJsonLd />` is rendered in `layout.tsx` for structured data.

## Lightbox pattern

The project has a shared `ImageLightbox` component at `src/components/ui/ImageLightbox.tsx`. Use it any time you need to open an image full-screen.

**Props:** `images: string[]` · `alt: string` · `onClose: () => void` · `initialIndex?: number`

**How to wire it up in a section:**

```tsx
"use client";
import { useState } from "react";
import ImageLightbox from "@/components/ui/ImageLightbox";

const [lightbox, setLightbox] = useState<{ images: string[]; alt: string } | null>(null);

// On image click:
setLightbox({ images: ["/uploads/photo.jpg"], alt: "Description" });

// At the end of the JSX:
{lightbox && <ImageLightbox images={lightbox.images} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
```

The lightbox renders via `createPortal` at `z-[200]` (above the Navbar at `z-[100]`), handles Escape / ←/→ keyboard navigation, and locks body scroll while open.

**When using `<button>` as a clickable image wrapper:** always add `borderRadius: 0` to the inline style. The global rule `button { border-radius: 100px }` in `globals.css` will otherwise clip the image with pill-shaped corners.

## Common mistakes to avoid

- Do not add Tailwind classes for colors (e.g. `bg-orange-500`) — use `bg-[var(--terra)]` or inline `style`.
- Do not import from `next/font` inside components — fonts are set up once in `layout.tsx`.
- Do not use `<img>` — always use `next/image`.
- Do not add `"use client"` to `layout.tsx` or page files that do not need it.
- Do not create new CSS files — extend `globals.css` for global rules or use inline styles.
- Do not put `padding` or `gridTemplateColumns` in inline styles on containers — use Tailwind className so responsive prefixes work.
- When adding a nav link, update **both** the desktop `<ul>` and the mobile drawer in `Navbar.tsx`.
- Do not add `<meta>` tags directly in JSX — use the `metadata` export API instead.
- Do not replace `src/app/icon.png` with a non-square image — Google will stop showing the favicon in search results.
- When wrapping an image in a `<button>` for click handling, add `borderRadius: 0` inline — the global pill style will otherwise distort the image.
