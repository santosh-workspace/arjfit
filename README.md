# ARJFIT

Static marketing site for ARJFIT, a strength and conditioning gym.
Eight hand-editable HTML pages, Tailwind CSS, and a small vanilla-JS interaction layer.

> **Not launch-ready.** All business content is placeholder — see [PLACEHOLDERS.md](PLACEHOLDERS.md).

## Run it

No build server needed. Any static file server works:

```bash
python3 -m http.server 8080
```

## Editing

The `.html` files are plain, standalone HTML — edit them directly. The header and
footer are duplicated across all eight pages by design; a change to navigation means
changing eight files.

After editing any class names, rebuild the stylesheet:

```bash
npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify
```

Tailwind scans `./*.html` **and `./assets/*.js`** — the JS file matters, because
`site.js` toggles classes that exist nowhere in the markup.

## Structure

```
index.html          Home
about.html          Story, principles, timeline
programs.html       Six training programmes
facilities.html     Zones, amenities, hours
trainers.html       Coaching roles (unnamed by design)
membership.html     Plans, add-ons, FAQ
schedule.html       Weekly timetable
contact.html        Enquiry form, details, FAQ

src/input.css       Tailwind source + component layer
assets/styles.css   Built stylesheet — generated, do not edit
assets/site.js      Nav, accordion, scroll reveal, counters
tailwind.config.js  Design tokens
```

## Design system

Defined in `tailwind.config.js` and `src/input.css`.

| Token | Value | Use |
|---|---|---|
| `ink` | `#0A0A0B` | Page ground |
| `surface` | `#131316` | Raised panels |
| `surface2` | `#1C1C21` | Cards on panels |
| `line` | `#2A2A31` | Hairline borders |
| `bone` | `#F4F2ED` | Primary text |
| `muted` | `#9A9AA4` | Secondary text |
| `volt` | `#CCFF33` | Single accent — used sparingly |
| `ember` | `#FF5A1F` | Rare secondary accent |

Type is Anton (display, uppercase) over Inter (body), both from Google Fonts.

Component classes — `.btn-volt`, `.card`, `.eyebrow`, `.marker`, `.media`, `.shell`,
`.h-section` — keep the markup readable across eight files. Prefer extending them over
adding long utility chains inline.

## Motion

GSAP + ScrollTrigger from CDN drive scroll reveals, one hero parallax and the stat
counters. Everything degrades gracefully: if the CDN fails or the user has
`prefers-reduced-motion: reduce` set, `site.js` reveals all content immediately and
skips animation entirely.

## Accessibility

Skip link, visible `:focus-visible` rings, labelled form controls, `aria-expanded` on
the nav and accordions, `sr-only` text on icon-only links, and a horizontally
scrolling timetable rather than a squashed one on mobile.

## Known gaps

- No favicon or apple-touch-icon yet.
- The OG image points at a stock photo.
- The enquiry form has no backend (`action="#"`).
- Images load from `images.unsplash.com`, so the site currently depends on a third
  party at runtime. This resolves itself when real photography lands in `assets/images/`.
