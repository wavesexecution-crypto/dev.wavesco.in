"""Crop the WavesCo logo and emit the favicon set (SVG, ICO, apple-icon PNG)."""
from PIL import Image
from pathlib import Path

SRC = Path(r"C:\Users\hp\Desktop\logo.png")
APP = Path(r"C:\Users\hp\Projects\dev.wavesco.in\app")

img = Image.open(SRC).convert("RGBA")
w, h = img.size
print(f"Source: {w}x{h}")

# Source has a near-white background (~254,254,254). Walk rows/cols and
# trim the first/last pixel that isn't background so the rounded square
# fills the canvas cleanly.
def is_bg(px):
    r, g, b = px[0], px[1], px[2]
    return r >= 250 and g >= 250 and b >= 250

pixels = img.load()
top = next((y for y in range(h) if any(not is_bg(pixels[x, y]) for x in range(w))), 0)
bottom = next((y for y in range(h - 1, -1, -1) if any(not is_bg(pixels[x, y]) for x in range(w))), h - 1)
left = next((x for x in range(w) if any(not is_bg(pixels[x, y]) for y in range(h))), 0)
right = next((x for x in range(w - 1, -1, -1) if any(not is_bg(pixels[x, y]) for y in range(h))), w - 1)
img = img.crop((left, top, right + 1, bottom + 1))
print(f"After content crop: {img.size}")

# Pad a little so the rounded corners don't kiss the favicon edge.
pad_pct = 0.02
sq = max(img.size)
new = Image.new("RGBA", (sq, sq), (0, 0, 0, 0))
pad = int(sq * pad_pct)
inner = sq - 2 * pad
scale = inner / max(img.size)
new_size = (int(img.size[0] * scale), int(img.size[1] * scale))
resized = img.resize(new_size, Image.LANCZOS)
ox = (sq - new_size[0]) // 2
oy = (sq - new_size[1]) // 2
new.paste(resized, (ox, oy), resized)
print(f"Square canvas: {new.size} (padding {pad}px)")

# 1) icon.svg — Next.js will pick this up automatically. Re-embed as base64 PNG
#    inside the SVG so it renders identically to the source at any size.
import base64
png_buf = new.resize((512, 512), Image.LANCZOS)
import io
b64 = base64.b64encode(png_buf.tobytes()).decode("ascii")
# We need a fresh PNG bytes object (tobytes on RGBA needs the PNG-encoded form, not raw).
png_bytes_io = io.BytesIO()
png_buf.save(png_bytes_io, format="PNG")
b64 = base64.b64encode(png_bytes_io.getvalue()).decode("ascii")
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <image href="data:image/png;base64,{b64}" width="512" height="512"/>
</svg>
'''
(APP / "icon.svg").write_text(svg, encoding="utf-8")
print(f"Wrote {APP / 'icon.svg'}")

# 2) favicon.ico — multi-size ICO for legacy browser tab use.
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
ico_imgs = [new.resize(s, Image.LANCZOS) for s in ico_sizes]
ico_path = APP / "favicon.ico"
ico_imgs[1].save(
    ico_path,
    format="ICO",
    sizes=ico_sizes,
    append_images=ico_imgs[2:],
)
print(f"Wrote {ico_path}")

# 3) apple-icon.png — 180x180, no transparency so iOS home screen stays clean.
apple = Image.new("RGB", (180, 180), (10, 31, 68))
sq_scaled = new.resize((180, 180), Image.LANCZOS)
apple.paste(sq_scaled, (0, 0), sq_scaled)
apple_path = APP / "apple-icon.png"
apple.save(apple_path, format="PNG")
print(f"Wrote {apple_path}")

# 4) Save a preview for quick eyeballing.
preview = APP / "icon-preview.png"
new.resize((256, 256), Image.LANCZOS).save(preview)
print(f"Wrote {preview}")
