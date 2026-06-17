<<<<<<< HEAD
# Spaceman Magazine — GRAPH 130

A space-age editorial magazine website built with basic HTML and CSS
for GRAPH 130 at Everett Community College. Project by B. Howard.

## Folder structure

```
.
├── index.html                  Home page (site entry point)
├── pages/                      All other HTML pages
│   ├── articles.html           Feature article: "Into the Cosmic Unknown"
│   ├── gallery.html            4-column still gallery with caption overlays
│   ├── about.html              About the project
│   ├── wireframes.html         The three project artboards
│   └── wireframe_spaceman3.html  Early article layout study
├── styles/                     Stylesheets
│   ├── styles.css              Base theme + components (nav, cards, articles, gallery)
│   ├── layout.css              12-column CSS grid
│   ├── responsive.css          Tablet breakpoint (1024px)
│   └── mobile.css              Mobile breakpoint (768px) — per the artboard notes
├── scripts/                    JavaScript
│   └── main.js
├── images/                     Site images
│   ├── hero/                   Home page hero image
│   ├── gallery/                Scanned stills for the gallery page
│   └── wireframes/             The three artboards, exported for screens
│       ├── wireframe-home-1280x1024.png
│       ├── wireframe-article-1280x1024.png
│       └── wireframe-gallery-1280x1024.png
└── assets/                     Other assets (fonts, downloads, etc.)
```

## Wireframes

The three 1280 × 1024 artboards (Home, Article, Gallery) each place the
header, navigation, and footer, mark the 960px content width, and note the
768px breakpoint that `styles/mobile.css` handles. They are exported for
screens into `images/wireframes/` and presented on the Wireframes page.

## Navigation

Every page shares the same navigation:
**Home · Articles · Gallery · About · Wireframes**.
The current page's link is underlined via the `active` class in the HTML.

## Adding the gallery stills

Save each scanned still as `images/gallery/still-01.jpg` (then 02, 03, …)
and replace the matching placeholder in `pages/gallery.html` with an
image — there is a commented example at the top of the gallery grid.
Files can be added by drag-and-drop on github.com (Add file → Upload files)
or from a local clone.

## Replacing the hero placeholder

`images/hero/space-hero.svg` is a stand-in. Swap it for a real photo and
update the `src` in `index.html` if the filename changes.

## Viewing the site

Open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server
```

then visit <http://localhost:8000>.
=======
# Spaceman Magazine

A space-age editorial magazine site hand-coded in HTML and CSS for GRAPH 130 at Everett Community College.

Author: Brooke Howard

The homepage redirects to the finished magazine in the `final/` folder.

## Project structure

- `index.html` — redirect to the finished magazine.
- `final/` — finished magazine pages.
- `final/css/final.css` — shared stylesheet.
- `final/js/nav.js` — mobile navigation.
- `images/optimized/` — prepared web images.
- `assets/artboards/` — artboard exports and layout references.

## Layout

The magazine uses CSS Grid and Flexbox for the page structure, image strips, navigation, and responsive layout. The finished pages are designed as a small editorial issue with a vintage science-fiction tone.
>>>>>>> fc7b70100b401701782e0fc252829c27172dc610
