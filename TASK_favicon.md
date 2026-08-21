Task: Replace the default Next.js favicon on dev.wavesco.in with a WavesCo-branded favicon.

Current state:
- The deployed site (https://dev.wavesco.in/) is showing the default Next.js favicon in the browser tab.
- The default favicon is at app/favicon.ico (or just doesn't exist yet — Next.js ships one if missing).
- We don't have a WavesCo brand asset for the favicon yet.

What needs to happen:
1. Create a WavesCo favicon that matches the brand:
   - Colors: navy background (#0a1f44) with cyan-teal accent (#00c2d1)
   - Simple, recognizable at 16x16 and 32x32 px
   - Could be: white "W" letter on navy circle, or a small geometric mark
   - I recommend an SVG favicon (scales perfectly) plus a fallback .ico

2. Files to create in C:\Users\hp\Projects\dev.wavesco.in\:
   - app/icon.svg (Next.js 13+ App Router convention — preferred)
   - OR app/favicon.ico (older convention, still works)

3. Optional but recommended:
   - public/og-image.png (1200x630) for Open Graph previews when shared
   - app/apple-icon.png (180x180) for iOS home screen if added

4. Verify:
   - npm run build (clean, no errors)
   - npm run start, then visit http://localhost:3000/ in browser
   - Check browser tab icon
   - Check http://localhost:3000/icon.svg returns the SVG (or /favicon.ico for the ico)

5. Commit + push to main once verified.

Design notes for the favicon:
- Keep it monochrome or two-tone (navy + cyan) so it's legible at small sizes
- No text-heavy logos at favicon scale — a single bold letter or geometric shape works best
- If you want, you can extract the mark from the live wavesco.in site (their logo is "Wavesco" with a small accent dot — the green/cyan dot from the nav at https://wavesco.in)

Once the favicon is in place and verified locally, commit and push. Vercel will auto-deploy.

After deployment, ping me with the live URL or any console errors and I'll verify.