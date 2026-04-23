# Aurora Luxe Travel

Ultra-premium concierge travel landing page with a futuristic luxury aesthetic — dark mode, glassmorphism, neon accents, and cinematic animations.

## Features

- **Futuristic luxury design** — near-black backgrounds, icy white text, cyan/purple/magenta accent gradients, soft gold highlights
- **Glassmorphism** — frosted-glass navbar, cards, and modals
- **Cinematic hero** — animated aurora gradient blobs, parallax scroll, noise texture
- **Scroll-based animations** — framer-motion reveal animations on every section
- **Active section tracking** — navbar highlights the current section while scrolling
- **Destination cards** — hover shimmer, reveal quick facts, click-to-open modal
- **5 Signature Experiences** — alternating image/text layout with staggered animations
- **3 Membership Tiers** — Silver, Black, Obsidian with gold accent on popular tier
- **Testimonials** — 4 reviews with star ratings and avatars
- **Concierge form** — client-side validated with interests chips, budget selector, success toast
- **Responsive** — mobile-first, FAB button on mobile, hamburger menu
- **SEO** — OpenGraph + Twitter Card metadata, semantic headings, aria labels, skip-to-content link
- **Accessibility** — focus rings, keyboard nav, semantic HTML, good contrast

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** (CSS-based config)
- **Framer Motion** — scroll/entrance animations
- **Lucide React** — icons
- **Google Fonts** — Space Grotesk (headings) + Inter (body)

## How to Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Image Credits

All images are sourced from [Unsplash](https://unsplash.com) under the Unsplash License (free to use).

| Section | Image Source |
|---------|-----|
| Hero background | Unsplash — luxury travel aerial view |
| Maldives resort | Unsplash — tropical resort |
| Tokyo skyline | Unsplash — Tokyo night city |
| Swiss Alps | Unsplash — aurora over mountains |
| Dubai hotel | Unsplash — Dubai architecture |
| Safari lodge | Unsplash — African wildlife camp |
| Mediterranean yacht | Unsplash — luxury yacht sailing |
| Private jet | Unsplash — private aircraft |
| Michelin dining | Unsplash — restaurant interior |
| Desert | Unsplash — Sahara dunes |
| Alpine wellness | Unsplash — mountain landscape |
| Testimonial avatars | Unsplash — portrait photos |

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, SEO metadata
    page.tsx            # Assembled page
    globals.css         # Tailwind theme, animations, utility classes
  components/
    Navbar.tsx          # Sticky glass navbar with active section
    Hero.tsx            # Cinematic hero with aurora blobs
    DestinationGrid.tsx # 6-card destination grid
    DestinationModal.tsx # Click-to-expand destination detail
    ExperienceList.tsx  # Signature experiences
    Tiers.tsx           # Membership tiers
    Testimonials.tsx    # Customer reviews
    ConciergeForm.tsx   # Client-side validated concierge form
    Toast.tsx           # Success toast notification
    Footer.tsx          # Minimal premium footer
  data/
    destinations.ts     # 6 destination objects
    experiences.ts      # 5 experience objects
    tiers.ts            # 3 membership tier objects
    testimonials.ts     # 4 testimonial objects
  lib/
    constants.ts        # Brand config, nav items
    utils.ts            # cn() class merge utility
```
