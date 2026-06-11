# Spaceman Magazine — GRAPH 130

A space-age editorial magazine project built with basic HTML and CSS
for GRAPH 130 at Everett Community College. Project by B. Howard.

## Folder structure

```
.
├── index.html                  Landing page linking to the project sections
├── final/                      The final magazine site
│   ├── final1.html             Lost Planet
│   ├── final2.html             Girl in the Moon
│   ├── final3.html             Obituary Dept.
│   ├── scans.html              Original Scans — all 26 source plates
│   └── css/final.css           Final site styles (3-column grid, backgrounds)
├── spaceman_wireframe_site/    Instructor wireframe site (self-contained)
├── images/
│   ├── gallery/                Full-resolution source plates and backgrounds
│   │   └── web/                Optimized copies (JPG) that the pages load
│   └── wireframes/             The three 1280×1024 artboards
├── assets/artboards/           Artboard sources (HTML/CSS) — edit and re-export
├── styles/, scripts/           Earlier site stage (styles are stubs now)
└── .github/                    CI workflow
```

## Images

Pages always load the optimized copies (`images/gallery/web/` and
`spaceman_wireframe_site/images/web/`, ~5 MB total) instead of the
full-resolution scans (~170 MB total). To add an image: drop the original
in `images/gallery/`, then create its web copy, e.g.

```
python3 -c "from PIL import Image; im=Image.open('images/gallery/27.png').convert('RGB'); w,h=im.size; im.resize((1000, round(h*1000/w))).save('images/gallery/web/27.jpg','JPEG',quality=82,optimize=True)"
```

## Viewing the site

Open `index.html` in a browser, or serve the folder locally with
`python3 -m http.server` and visit <http://localhost:8000>.

With GitHub Pages enabled (Settings → Pages → Deploy from branch `main`,
root), the site is served at
`https://brookehoward2008-droid.github.io/Spaceman-Magazine_Graph-130/`.
