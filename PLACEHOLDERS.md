# ARJFIT — Placeholder Register

Everything on this site that stands in for real ARJFIT content is machine-findable.
Search the HTML for `data-placeholder` to locate every one:

```bash
grep -rn 'data-placeholder' *.html
```

Visible in-page notices use the `.ph-badge` class. **Delete each badge as you replace
the content behind it**, then remove the `.ph-badge` rule from `src/input.css` and
rebuild before launch.

---

> **Positioning changed.** ARJFIT is a gym equipment manufacturer, seller and
> service provider. The five training-gym pages (programs, membership, schedule,
> trainers, facilities) were retired — recoverable from commit `9df92ee`.
> See `RECOMMENDATIONS.md` for the improvement roadmap.

## 0. New placeholders — certifications & credentials

`data-placeholder="cert"` marks ISO 9001 / 14001 / 45001, CE / RoHS, "Make in
India", GSTIN, CIN and founding year on both the home page and `about.html`.

**Publish only certifications you actually hold**, with real certificate numbers.
Displaying an ISO badge you do not hold is a legal exposure, not a design choice.

The manufacturing section carries placeholder unit area, monthly capacity and
team size. The four homepage counters all read `0+`.

## 1. Business facts — blocking

All defined in one place: `BIZ` at the top of the page generator, and mirrored into
every page's footer, JSON-LD and contact block. These values are deliberately fake so
nothing can be mistaken for real:

| Field | Current placeholder | Needed |
|---|---|---|
| Phone | `+91 00000 00000` | Real number (also updates `tel:` and WhatsApp links) |
| Email | `hello@arjfit.example` | Real address |
| Street | `[Street address to be confirmed]` | Full street address |
| Area / City | `Baner, Pune` | **Assumed** — confirm the real location |
| Domain | `https://arjfit.example` | Real domain (canonical, OG, sitemap, robots) |
| Opening hours | 05:30–22:00 weekdays | Confirm; appears on 3 pages **and in JSON-LD** |

> `.example` is a reserved TLD and will never resolve. That is intentional — it cannot
> be confused for a live address.

Files to update: all 8 `.html` files, `robots.txt`, `sitemap.xml`.

## 2. Photography — 46 images

Every image is licensed Unsplash stock loaded from `images.unsplash.com`, marked
`data-placeholder="image"`. None of it depicts ARJFIT, its members or its staff.

Replace with real ARJFIT photography. When you do:
- Export at 1920px wide max, convert to WebP/AVIF, and drop them in `assets/images/`.
- Keep the `srcset` / `sizes` attributes — they are already tuned per layout slot.
- The `width`/`height` attributes prevent layout shift; update them to match real ratios.
- Priority hero images already carry `loading="eager" fetchpriority="high"`; leave that.

## 3. People — do not invent

`trainers.html` deliberately contains **no named coaches**. It ships as four unnamed
*role slots* (`data-placeholder="trainer"`), each reading `[ Coach name pending ]`.

Fill these with real staff — real names, real photos, real qualifications. Do not
publish invented coaches.

Likewise `index.html` carries four `data-placeholder="testimonial"` slots rendered as
visible templates (`[ Member name ]`). Replace only with **real, consented** member
quotes, or delete the section entirely.

## 4. Numbers that make claims

- **Stats strip** (`index.html`, 5 markers) — coaching hours, zones, classes, coach ratio.
- **Pricing** (`membership.html`, 11 markers) — every plan and add-on shows `₹0,000`.
- **Timeline** (`about.html`) — every milestone year reads `[ Year ]`.

These assert things about the business. Verify each before publishing.

## 5. Product catalogue — new

`product.html` ships **3 setup packages** (Home / Studio / Commercial) plus
**8 placeholder categories with 48 invented product names**
(`data-placeholder="product"`). These are generic, industry-standard equipment
terms, not a real ARJFIT range, and every one shows *Price on request*.

Each package now has a **full detail section** (`#plan-home`, `#plan-studio`,
`#plan-commercial`) carrying an equipment breakdown table with quantities, the
service included, four optional add-ons, lead time, warranty and payment terms.

**Every price is a zero placeholder** — `₹0,00,000` / `₹00,00,000` on the packages
and `₹00,000`-style figures on the 18 add-ons. No real amount appears anywhere.
Prices are marked *ex-GST*; confirm whether you quote inclusive or exclusive.

Four things in these sections are commercial commitments, not marketing copy, and
each needs sign-off before launch:

| Item | Current placeholder |
|---|---|
| Lead times | 2-3 / 4-6 / 8-12 weeks from confirmed order |
| Warranty | 1-3 yrs frames, 6mo-2yrs moving parts, 1 yr electronics |
| Payment terms | Deposit / staged / phased — all marked placeholder |
| Quantities | Indicative; stated as adjusted to floor plan |

Before launch: replace with the real product list, add real specs and photography,
and decide whether prices are published or stay quote-only. Enquiry links point at
`contact.html?enquiry=<product>` — the contact form does not yet read that
parameter, so the enquiry arrives without the product name attached.

## 6. Reviews and ratings — new

The trust row on `index.html` shows `0.0 average from 000 reviews` and links to
Google Reviews, JustDial and Instagram, all `href="#"`.

Replace with your real aggregate rating and real profile URLs, **or delete the row**.
A fabricated star rating is a business claim, not decoration.

## 7. Not yet wired up

| Item | Where | Action |
|---|---|---|
| Enquiry form | `contact.html` | `action="#"` → Formspree / Netlify Forms / CRM |
| Map | `contact.html` | Dashed box → Google Maps iframe |
| Booking | `schedule.html` | No system connected |
| Social links | footer, all pages | 25 `href="#"` → real Instagram / Facebook / WhatsApp |
| Timetable | `schedule.html` | Placeholder grid — replace with real class times |

## 8. Copy to rewrite

`data-placeholder="copy"` (19 markers). The largest block is the founder story in
`about.html`, which is written as guidance-for-the-writer rather than finished prose.
Several FAQ answers on `membership.html` and `contact.html` also state a placeholder
policy that must be confirmed.

---

## Pre-launch checklist

- [ ] Real address, phone, email, hours — everywhere including JSON-LD
- [ ] Real domain in canonical, OG tags, `robots.txt`, `sitemap.xml`
- [ ] Real photography replacing all 46 stock images
- [ ] Real coaches, or delete the role slots
- [ ] Real testimonials, or delete the section
- [ ] Real rating + review profile URLs in the trust row, or delete it
- [ ] Real product range, specs and photography on product.html
- [ ] Confirm the 3 package inclusion lists, floor-area bands and lead times
- [ ] Set real package prices and add-on costs (18 figures, all zeros today)
- [ ] Confirm GST handling — prices currently marked ex-GST
- [ ] Sign off warranty periods and payment terms (these are contractual)
- [ ] Decide: published prices or quote-only
- [ ] Wire contact form to read the ?enquiry= parameter
- [ ] Verified stats, prices and timeline dates
- [ ] Form, map and booking connected
- [ ] Social profile URLs
- [ ] Add `assets/favicon.png` + `apple-touch-icon.png` and link them in `<head>`
- [ ] Add a real `og-image` (currently points at a stock photo)
- [ ] Remove every `.ph-badge` and the rule in `src/input.css`
- [ ] `npx tailwindcss@3 -i src/input.css -o assets/styles.css --minify`
- [ ] Re-run `grep -rn 'data-placeholder' *.html` — should return nothing
