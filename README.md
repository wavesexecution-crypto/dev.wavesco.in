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
| `booking.url` | The Cal.com booking URL, embedded in the contact section. |

## Content

- Project entries live in `lib/projects.ts`. Each entry drives the card and
  the build-detail modal. Thumbnails are hand-built vector mockups in
  `components/project-previews.tsx` — no image assets required.
- Swap the current builds for real client work as it ships. Cards render
  whatever data is in the array; no other edits needed.
- Live Preview buttons are hidden unless a project is publicly accessible —
  add a `buildUrl` when one exists.

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
