from PIL import Image
import os
import sys
import json

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
FAV_DIR = os.path.join(ROOT, 'public', 'favicons')
SRC = os.path.join(FAV_DIR, 'logo.png')

if not os.path.exists(SRC):
    print('Source image not found:', SRC)
    sys.exit(1)

img = Image.open(SRC).convert('RGBA')

# compute average color of non-transparent pixels
px = img.load()
W, H = img.size
rs = gs = bs = cnt = 0
for y in range(H):
    for x in range(W):
        r,g,b,a = px[x,y]
        if a > 16:
            rs += r; gs += g; bs += b; cnt += 1
if cnt == 0:
    bg = (255,255,255)
else:
    bg = (rs//cnt, gs//cnt, bs//cnt)

os.makedirs(FAV_DIR, exist_ok=True)

sizes = {
    'favicon-16x16.png': (16,16),
    'favicon-32x32.png': (32,32),
    'apple-touch-icon.png': (180,180),
}

for name, size in sizes.items():
    out = Image.new('RGB', size, bg)
    tmp = img.copy()
    tmp.thumbnail(size, Image.LANCZOS)
    # center
    x = (size[0] - tmp.size[0]) // 2
    y = (size[1] - tmp.size[1]) // 2
    out.paste(tmp.convert('RGBA'), (x,y), tmp.convert('RGBA'))
    out.save(os.path.join(FAV_DIR, name), optimize=True)
    print('Wrote', name)

# create favicon.ico with 16 and 32
ico_sizes = [(16,16),(32,32)]
icons = []
for s in [16,32]:
    out = Image.new('RGB', (s,s), bg)
    tmp = img.copy()
    tmp.thumbnail((s,s), Image.LANCZOS)
    x = (s - tmp.size[0]) // 2
    y = (s - tmp.size[1]) // 2
    out.paste(tmp.convert('RGBA'), (x,y), tmp.convert('RGBA'))
    icons.append(out)

ico_path = os.path.join(FAV_DIR, 'favicon.ico')
icons[0].save(ico_path, format='ICO', sizes=[(16,16),(32,32)])
print('Wrote favicon.ico')

# simple webmanifest
manifest = {
    'name': 'WavesCo',
    'short_name': 'WavesCo',
    'icons': [
        {
            'src': '/favicons/favicon-32x32.png',
            'sizes': '32x32',
            'type': 'image/png'
        },
        {
            'src': '/favicons/apple-touch-icon.png',
            'sizes': '180x180',
            'type': 'image/png'
        }
    ],
    'theme_color': '#ffffff',
    'background_color': '#ffffff',
    'display': 'standalone'
}

with open(os.path.join(FAV_DIR, 'site.webmanifest'), 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2)
    print('Wrote site.webmanifest')
