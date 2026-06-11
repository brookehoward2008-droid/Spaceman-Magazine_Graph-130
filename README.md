# Spaceman Magazine — GRAPH 130

A space-age editorial magazine website built with plain HTML, CSS, and JavaScript
for GRAPH 130 at Everett Community College. Project by B. Howard.

## Folder structure

```
.
├── index.html                  Home page (site entry point)
├── pages/                      All other HTML pages
│   ├── articles.html           Feature article: "Into the Cosmic Unknown"
│   ├── about.html              About the project
│   └── wireframe_spaceman3.html  Wireframe / layout study
├── styles/                     Stylesheets
│   ├── styles.css              Base theme + components (nav, cards, articles)
│   ├── layout.css              12-column CSS grid
│   └── responsive.css          Tablet / mobile breakpoints
├── scripts/                    JavaScript
│   └── main.js                 Highlights the active nav link
├── images/                     Site images
│   ├── hero/                   Home page hero image
│   └── wireframes/             Wireframe reference exports
└── assets/                     Other assets (fonts, downloads, etc.)
```

## Navigation

Every page shares the same navigation: **Home · Articles · About · Wireframe**.
`scripts/main.js` underlines the link for the page you are currently on.

## Viewing the site

Open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server
```

then visit <http://localhost:8000>.

## Replacing placeholder images

Two SVG placeholders are included so the site renders without broken images.
Swap them for real artwork (and update the `src` in the HTML if the filename
changes):

- `images/hero/space-hero.svg` — home page hero photo
- `images/wireframes/page-p46-reference.svg` — P46 artboard export
