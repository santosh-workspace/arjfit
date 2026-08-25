# ARJFIT — Improvement Roadmap

Benchmarked against the Indian commercial gym equipment market — Jerai Fitness,
Nortus Fitness, Syndicate Gym Industries, Into Wellness — and international
turnkey suppliers (Legend Fitness, TRUE Fitness, Gym-Worx).

ARJFIT is a **manufacturer, seller and service provider**. That makes this a B2B
site whose job is to generate qualified quote requests, not to sell memberships.

---

## Done in this pass

| Fix | Why it mattered |
|---|---|
| Retired 5 training-gym pages | They advertised memberships, classes and coaches. Wrong business. |
| `ExerciseGym` → `Organization` schema | Google was being told ARJFIT is a place to work out, not a company to buy from. |
| Hero repositioned | "Coaching-first gym" → "We build the floor your gym runs on." |
| Credentials bar | ISO / CE / RoHS / Make in India — the top B2B trust signal. |
| Manufacturing section | Competitors all show the unit. Buyers compare factories. |
| Catalogue CTA | Every serious competitor has a downloadable PDF catalogue. |
| RFQ form | 5 generic fields → 11, capturing buyer type, floor area, budget, timeline. |
| CTA reframed | "Book a free trial" → "Send your floor plan, get a layout." |

---

## Priority 1 — revenue-blocking

### 1. PDF catalogue with specifications
Every competitor has one; Jerai also publishes a frame & upholstery spec chart.
B2B buyers forward a PDF to partners and architects. **The CTA exists but has no
file behind it.**

### 2. Per-product specification data
Currently 48 product names with no specs. Buyers compare on dimensions, weight
stack, footprint, power draw and warranty. Add a spec table per product.

### 3. Real project case studies
"Gyms equipped: 0+" is a placeholder. Replace with 6–10 real installations:
client, city, floor area, equipment supplied, photos, timeline. This is the
single most persuasive content type in B2B and ARJFIT has none.

### 4. Wire up the enquiry pipeline
The RFQ form posts nowhere (`action="#"`), and product enquiry links pass
`?enquiry=<product>` that nothing reads. Every lead is currently lost.

---

## Priority 2 — reach and discovery

### 5. City landing pages
Jerai runs 15, Nortus covers 25+ cities. In India this is how equipment buyers
search: *"gym equipment manufacturer in Pune"*. High-volume, low-competition,
and ARJFIT has zero coverage. Start with 8–10 target cities.

### 6. Blog / knowledge section
Nortus and Jerai both run substantial blog libraries. Topics that attract buyers:
how much it costs to open a gym, equipment lists by floor area, commercial vs
home grade, AMC explained, layout mistakes.

### 7. Dealer & distributor programme
A dedicated page converts channel partners — a different, higher-volume buyer
than a single gym owner. The RFQ already has a "Dealer enquiry" option with no
page behind it.

### 8. Export enquiry path
Jerai leads with "26 countries". If ARJFIT exports, say so and add an export
enquiry route with incoterms and container-load guidance.

---

## Priority 3 — conversion polish

### 9. Product comparison
Let buyers compare 2–3 machines side by side on specs.

### 10. Finance / leasing
Equipment is a large capex. If EMI or leasing is available, it belongs beside
every price.

### 11. 3D or 2D layout previews
Anatomy Fitness sells on 3D layout planning. Even simple 2D layout drawings for
common floor sizes would differentiate.

### 12. Warranty & AMC detail page
Currently one line per package. Buyers want the full terms before committing.

### 13. Client logo wall
Nortus displays partner gym logos. Strong, cheap credibility — needs permission.

---

## Priority 4 — technical

### 14. Product schema markup
Add `Product` + `Offer` JSON-LD per item for rich search results.

### 15. Real photography
All 48+ images are Unsplash stock showing other people's gyms. For a
manufacturer this is a genuine credibility risk — buyers want to see *your*
machines and *your* installations.

### 16. Hindi / Marathi content
bodyshapefitness.in offers 11 languages. At minimum, key pages in Hindi.

### 17. Performance budget
Pages are 12–18 KB gzipped, which is good. Keep it that way when real
photography lands — compress to WebP/AVIF and keep the existing `srcset`.

---

## What I would not do

- **Shopping cart / checkout.** Commercial equipment sells on quote, not
  card payment. No competitor researched sells commercial kit via checkout.
- **Publishing fixed prices.** Current placeholders are quote-anchored ("From
  ₹X, quoted to your floor plan"), which is right for this market.
- **11-language selector.** bodyshapefitness.in has one; it is noise unless the
  content is genuinely translated.

---

## Honest status

The site is **structurally sound and factually empty**. Positioning, navigation
and page architecture now match a manufacturer. But every business fact —
address, phone, certifications, years, prices, product specs, client list — is
still a placeholder. See `PLACEHOLDERS.md`.

The highest-value next step is not more pages. It is **real content**:
photographs of your unit and your installations, your actual product range with
specifications, and your genuine certifications.
