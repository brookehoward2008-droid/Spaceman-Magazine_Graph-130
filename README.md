# Spaceman Magazine (GRAPH 130)

A space-age editorial magazine site, hand-coded in HTML and CSS for GRAPH 130
at Everett Community College. Project by B. Howard.

The `index.html` in the root just redirects to the finished magazine, which
lives in the `final/` folder.

## Folder structure

```
.
├── index.html                  Redirects to final/index.html
├── final/                      The finished magazine
│   ├── index.html              Lost Planet (feature article)
│   ├── page2.html              Girl in the Moon
│   ├── page3.html              Obituary Dept.
│   ├── scans.html              Wireframes & Notes
│   ├── css/final.css           The stylesheet for every page
│   └── spaceman_wireframe_site/  Illustrator wireframe and planning notes
├── images/optimized/           Photos and the background, sized down for the web
└── assets/artboards/           Artboard HTML exports
```

## Layout and grid

All four pages share one stylesheet, `final/css/final.css`. The layout is
built with CSS Grid (no framework), and Flexbox handles the header, nav, and
footer. A few key measurements are set once as variables at the top of the
file and reused everywhere, so I only change them in one place:

| Variable | Value | What it does |
|---|---|---|
| `--page-max-width` | `1280px` | How wide the header, nav, page, and footer can get (each is 85% wide, up to that cap) |
| `--gutter` | `18px` | The gap between grid columns (article and image strips) |
| `--baseline` | `18px` | The vertical spacing between blocks |

The feature article uses a grid so the hero image can span two rows of text
beside it:

```
grid-template-columns: 2fr 1fr;      /* hero 2/3, text 1/3 */
grid-template-areas:
  "hero     intro"
  "hero     copyone"
  "copytwo  copythree"
  "quote    quote";
```

The smaller photos sit in a three-column row. These sizes come from my
Illustrator wireframe: a 1280px container, a 1/3 plus 2/3 split, and a 768px
breakpoint. The wireframe used a 24px gutter, but I tightened it to 18px so
each page ends up close to a real magazine page shape (about 1 to 1.3 in width
to height; a sheet of letter paper is about 1 to 1.29).

### Responsive breakpoints

- Tablet (768px and under): the article stacks into one column (intro, hero,
  copy, then the quote), the photo rows drop to two columns, and the page gets
  a little wider.
- Phone (520px and under): the page widens again, padding shrinks, the nav
  stacks top to bottom, photos go one per row, and the fixed background
  switches to scrolling.

## Wireframe

`final/spaceman_wireframe_site/artboard_wireframe.html` is my Illustrator
planning artboard. It shows the color-coded regions and labels that the
finished layout is based on.

## Viewing the site

Open `index.html` in a browser, or run a local server from the project folder:

```
python3 -m http.server
```

Then go to http://localhost:8000.
