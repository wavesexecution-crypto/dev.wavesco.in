# Deploy dev.wavesco.in rebuild via OpenCode

## What changed
Rebuilt `dev.wavesco.in` to match the wavesco.in brand and reflect the actual build-studio role:

- **`app/globals.css`** — full rewrite. Dark theme → light. New tokens: `--navy #0a1f44`, `--accent #00c2d1`, `--paper #f7f9fb`, etc. (full palette in commit).
- **`app/layout.tsx`** — new. Inter + IBM Plex Mono fonts, body bg-paper.
- **`app/page.tsx`** — new. 5-section single-page: hero → what is this → build log → install method → stack → CTA → footer. 88 uses of text-navy, 36 of text-accent. Cross-links to wavesco.in and app.wavesco.in.
- **`lib/engagements.ts`** — new. Replaces `lib/projects.ts`. Real engagements marked `status: live` (Vidya Sindhu Foundation, cafe chain, service agency). Two `status: placeholder` entries illustrate engagement type, clearly labelled.
- **`lib/projects.ts`** — deleted.

## Verification (already run)
- `npm install` — 339 packages, 0 errors
- `npm run build` — ✓ Compiled successfully, 3.74 kB page, 109 kB first-load JS
- `npm run start` → `curl :3000` — HTTP 200, 67 KB rendered, all 5 sections + 4 install phases + 5 engagements present, color tokens compiled into CSS, no warnings

## OpenCode deploy command

Run this from `C:\Users\hp\Projects\dev.wavesco.in` to commit + push. Vercel auto-deploys on push to the connected branch.

### Step 1 — OpenCode does its thing

```
cd C:\Users\hp\Projects\dev.wavesco.in
git status
git add -A
git diff --cached --stat
```

### Step 2 — Commit

```
git commit -m "feat: rebuild dev.wavesco.in as WavesCo build studio

Replace fake 'website design' portfolio with a real build log.

- app/globals.css: sync to wavesco.in palette (navy #0a1f44, accent #00c2d1, paper #f7f9fb)
- app/layout.tsx: Inter + IBM Plex Mono, body bg-paper
- app/page.tsx: 5 sections — hero / what is this / build log / install method / stack / CTA
- lib/engagements.ts: real engagements marked live (Vidya Sindhu, cafe chain, agency), placeholders clearly labelled
- lib/projects.ts: removed

Cross-links to wavesco.in and app.wavesco.in throughout. Single-page, server component, 3.74 kB.

Verified: npm run build clean, npm run start serves 200, all sections + engagements render."
```

### Step 3 — Push

```
git push origin main
```

(Replace `main` with your actual default branch if it's different — check `git symbolic-ref refs/remotes/origin/HEAD`.)

### Step 4 — Verify Vercel deploy

- Open Vercel dashboard
- Confirm the latest deployment is "Ready"
- Visit https://dev.wavesco.in/ — should show the new build

### Optional follow-ups after deploy

1. **Replace Inter with General Sans.** Download Fontshare woff2 files, drop into `public/fonts/`, swap `Inter` import in `app/layout.tsx` for `next/font/local`.
2. **Add a real engagement.** Edit `lib/engagements.ts`, change `status: "placeholder"` → `status: "live"` and update the copy.
3. **Add `/engagements/[slug]` dynamic route.** Per-engagement detail pages with architecture diagrams, screenshots, the actual install timeline.

## Rollback

If anything's broken on prod, revert the merge commit:

```
git revert HEAD --no-edit
git push origin main
```

Or hard-reset if this hasn't been deployed long:

```
git reset --hard HEAD~1
git push --force-with-lease origin main
```

## What I cannot do from here

I have shell access but not push access to your Vercel-connected repo, and I shouldn't be the one making production deploys anyway. OpenCode (your dev agent) is the right hand for this.

Once pushed, ping me with the Vercel URL or any console errors and I'll diagnose from there.
