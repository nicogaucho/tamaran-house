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
  layout.tsx           ← font setup, root metadata
  globals.css          ← all CSS tokens + animations
  page.tsx             ← homepage
  contact/page.tsx
  the-hostel/page.tsx
  rooms/page.tsx
src/components/
  layout/              ← TopBanner, Navbar, Footer
  sections/            ← one file per homepage/page section
  ui/RevealOnScroll.tsx
public/uploads/        ← all photo assets — do not rename files
```

## Client vs Server components

| Component | Directive | Reason |
| --- | --- | --- |
| `Navbar` | `"use client"` | `window.scroll` listener |
| `TopBanner` | `"use client"` | marked for potential future state |
| `FAQ` | `"use client"` | accordion open/close state |
| `CTASection` | `"use client"` | hover event handlers |
| `RevealOnScroll` | `"use client"` | `IntersectionObserver` |
| `rooms/page.tsx` | `"use client"` | `RoomCard` inline mouse handlers |
| Everything else | Server component (default) | no interactivity needed |

If you add interactivity to a currently server component, add `"use client"` to that file. Do not bubble it up to `layout.tsx`.

## Design rules

- **Colors** — OKLCH tokens only. `var(--terra)` for primary accent, `var(--coral)` for hover, `var(--ink)` for dark sections, `var(--cream)` for page bg.
- **Fonts** — `var(--font-bebas)` for display type, `var(--font-dm-serif)` for italic editorial, `var(--font-dm-sans)` for body.
- **Buttons** — `border-radius: 100px` (pill). Enforced globally in `globals.css`.
- **Spacing rhythm** — sections use `padding: 120px 0` (large) or `80px 0` (compact). Containers are `max-width: 1280px` with `padding: 0 48px`.
- **Scroll reveal** — wrap new content blocks in `<RevealOnScroll>`. Accepts `delay` prop (0–4) for staggered children.

## Adding a new section

1. Create `src/components/sections/MySection.tsx`.
2. Import and use `RevealOnScroll` for animated content.
3. Use `var(--*)` tokens for all colors via inline styles.
4. Add it to the relevant page file.
5. Run `npm run build` — confirm no errors.

## Adding a new page

1. Create `src/app/my-route/page.tsx`.
2. Import `TopBanner`, `Navbar`, and `Footer` from `@/components/layout/`.
3. Wrap sections in `<main>`.
4. Add a nav link in `src/components/layout/Navbar.tsx`.

## Images

- All assets are in `public/uploads/`. Use `next/image` with `fill` + `sizes` for responsive images.
- Do not rename existing asset files — filenames are referenced by path in component code.
- Prefer `object-cover` with an explicit `objectPosition` matching the focal point of the photo.

## Common mistakes to avoid

- Do not add Tailwind classes for colors (e.g. `bg-orange-500`) — use `bg-[var(--terra)]` or inline `style`.
- Do not import from `next/font` inside components — fonts are set up once in `layout.tsx`.
- Do not use `<img>` — always use `next/image`.
- Do not add `"use client"` to `layout.tsx` or page files that do not need it.
- Do not create new CSS files — extend `globals.css` for global rules or use inline styles.
