# WavesCo — Website Design Studio

The portfolio site for [dev.wavesco.in](https://dev.wavesco.in). Its single job:
prove that WavesCo can design and build premium websites.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

## Before you ship

All site-wide values live in `lib/site.ts`:

| Key | What it is |
| --- | --- |
| `domain` / `url` | Public domain. Update `metadataBase` implications. |
| `email` | Contact email (used for the `mailto:` link). |
| `whatsapp` | WhatsApp number, digits only with country code (used for the `wa.me` links and the contact form). |
| `booking.configured` | Set to `true` once the Cal.com page is live. |
| `booking.url` | The Cal.com booking URL. Replaces the placeholder `https://cal.com/wavesco/intro`. |

Until `booking.configured` is `true`, the contact section shows a designed
fallback card instead of a broken iframe. Flip it to `true` to embed Cal.com.

## Content

- Project samples live in `lib/projects.ts`. Each entry drives the card, the
  live preview and the case study modal. Thumbnails are hand-built vector
  mockups in `components/project-previews.tsx` — no image assets required.
- Replace the sample projects with real client work as it ships. Cards render
  whatever data is in the array; no other edits needed.

## Structure

```
app/            Routes, layout, SEO files (robots, sitemap, metadata)
components/     Sections: navigation, hero, projects, services, process,
                contact, footer + project modal & preview mockups
lib/            Site config, project data, utilities
```

## Notes

- Deliberately no pricing, testimonials, metrics, AI or marketing filler.
- The contact form opens a pre-filled WhatsApp message — nothing is stored
  server-side.
- Accessible: semantic landmarks, focus-visible rings, reduced-motion support.
