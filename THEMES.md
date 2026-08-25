# Palette Options — temporary

Five candidate palettes are live on the site. Open any page and use the
**Theme** tab on the right edge to switch between them. Your choice is
remembered in `localStorage` on that device only — it does not change the
site for anyone else.

| # | Key | Name | Character |
|---|---|---|---|
| 1 | `volt-noir` | Volt Noir | Near-black + volt green. Current. Bold, modern, stands out against competitors. |
| 2 | `forge` | Forge | Steel-blue charcoal + amber. Industrial and warm — reads "manufacturing". |
| 3 | `crimson` | Iron & Crimson | Graphite + crimson. Classic strength-equipment look; the safest, most conventional. |
| 4 | `midnight` | Midnight Steel | Deep navy + cyan. Technical and precise; leans engineering rather than gym. |
| 5 | `works-white` | Works White | Light corporate. The only light option — closest to how Jerai and Nortus present, and the easiest to read on a spec-heavy B2B page. |

## Picking one

Judge them on **[product.html](product.html)**, not the home page. That is where
the spec tables, price figures and long equipment lists live, and it is where a
weak palette shows up first.

Two things worth weighing:

- **Dark themes** photograph equipment well and look premium, but long spec
  tables are harder to scan.
- **Works White** is the outlier. Every competitor researched uses a light,
  corporate layout. Matching them is safer; not matching them is more
  distinctive. Both are defensible.

## Removing the picker afterwards

Tell me which one and I will do this — it is a five-step cleanup:

1. Copy the chosen block's values into `:root` in `src/input.css`.
2. Delete the other four `[data-theme]` blocks and the `PALETTE OPTIONS` banner.
3. Delete `themePicker()` in the generator and its call in `build()`.
4. Delete the `TEMPORARY palette picker` block in `assets/site.js` and the
   pre-paint `<script>` in `<head>`.
5. Rebuild: `npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify`

The CSS-variable structure itself is worth **keeping** — it costs nothing and
makes future colour changes a one-line edit instead of a rebuild of every class.
