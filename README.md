# Spaceman Magazine — GRAPH 130

A space-age editorial magazine website built with hand-written HTML and CSS
for GRAPH 130 at Everett Community College. Project by B. Howard.

The root `index.html` is a redirect — the published magazine lives in
[`final/`](final/).

## Folder structure

```
.
├── index.html                  Redirects to final/index.html
├── final/                      The published magazine (the deliverable)
│   ├── index.html              Lost Planet — feature article
│   ├── page2.html              Girl in the Moon
│   ├── page3.html              Obituary Dept.
│   ├── scans.html              Wireframes & Notes
│   ├── css/final.css           All layout + theme (one stylesheet)
│   └── spaceman_wireframe_site/  Illustrator wireframe + planning notes
├── images/optimized/           Web-optimized photos + background.jpg
└── assets/artboards/           Artboard HTML exports
```

## Layout & grid

Every page shares one stylesheet, `final/css/final.css`, built on **native
CSS Grid** (no framework) with Flexbox for the header, nav, and footer. The
key measurements are defined once as custom properties in `:root` and reused
everywhere, so the layout has a single source of truth:

| Variable | Value | Role |
|---|---|---|
| `--page-max-width` | `1280px` | Max width of the header, nav, page, and footer (each `width: 85%` up to this cap) |
| `--gutter` | `18px` | Horizontal gap for every grid (article + image strips) |
| `--baseline` | `18px` | Vertical rhythm between major blocks |

The feature article is a 2-D grid (`.article-grid`) so the hero image can
span two text rows:

```
grid-template-columns: 2fr 1fr;      /* hero 2/3 · text 1/3 */
grid-template-areas:
  "hero     intro"
  "hero     copyone"
  "copytwo  copythree"
  "quote    quote";
```

Supporting photos use a three-column track (`repeat(3, 1fr)`). These values
carry over from the Illustrator wireframe spec (1280px container, a 1/3 + 2/3
editorial split, a 768px breakpoint). The wireframe planned a 24px
gutter/baseline; the final tightens it to 18px so each page holds a
**magazine-page proportion** — the frames render roughly 1 : 1.28–1.38
(width : height), close to a US-Letter page (1 : 1.29).

### Responsive breakpoints

- **≤ 768px (tablet):** the article grid collapses to a single column
  (`intro → hero → copy → quote`); image grids drop to two columns; wrappers
  widen to 90%.
- **≤ 520px (mobile):** wrappers 92%, reduced page padding, the nav stacks
  vertically, image grids become a single column, and the fixed background
  switches to scroll.

## Wireframe

`final/spaceman_wireframe_site/artboard_wireframe.html` is the Illustrator
planning artboard: color-coded regions, visible tag/measurement notes, and
the documented grid that the final layout implements.

## Viewing the site

Open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server
```

then visit <http://localhost:8000>.
