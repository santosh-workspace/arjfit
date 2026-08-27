# Type Options — temporary

Five candidate pairings are live. Use the **Type** tab on the right edge to
switch. Remembered in `localStorage` on your device only.

| # | Display | Body | Character |
|---|---|---|---|
| 1 | **Anton** | Inter | Heavy condensed. Current. Maximum impact, least flexible — one weight only. |
| 2 | **Oswald** | Inter | Narrower and lighter than Anton, with real weights. Industrial. |
| 3 | **Archivo Black** | Archivo | Wide grotesk. The most corporate, closest to how Jerai and Nortus present. |
| 4 | **Bebas Neue** | Barlow | Tall and narrow. The classic gym look — also the most common, so least distinctive. |
| 5 | **Teko** | Rajdhani | Technical and squared. **Both support Devanagari**, so Hindi and Marathi pages would work without a second pairing. |

## Picking one

Judge on **[product.html](product.html)** and **[strength.html](strength.html)** —
spec tables are where a display face with poor numerals or a body face with weak
small sizes falls apart. The home page flatters everything.

Two practical notes:

- **Anton has a single weight.** Every heading is the same density; there is no
  lighter cut for sub-headings. Oswald and Archivo give you a real range.
- **Teko + Rajdhani is the only pairing that covers Devanagari.** If Hindi or
  Marathi content is likely — and recommendation #16 suggests it is — this is
  worth weighing above pure aesthetics.

## Cost while the picker is live

All five pairings load on every page: **9 families** instead of 2. Baking one in
drops the `<link>` back to a single pair and removes that overhead.

## Removing the picker afterwards

Tell me which, and I will:

1. Copy the chosen `[data-font]` values into `:root` in `src/input.css`.
2. Delete the other four blocks.
3. Trim the Google Fonts `<link>` to the one pairing.
4. Delete `typePicker()` in the generator, its call in `build()`, the pre-paint
   `<script>` in `<head>`, and the type-picker block in `assets/site.js`.
5. Rebuild.

The CSS-variable structure stays — same reasoning as the palette.
