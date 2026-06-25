# Build prompt for Claude Code — Meat Center one-page site (v2, enriched)

Build a fast, accessible, single-page marketing website for **Meat Center**, a
family-owned hometown butcher shop / meat market in Lancaster, SC, using
**Astro**. This v2 replaces the generic first pass: use the REAL content below so
the site feels specific, not templated.

## Source of truth
Three files in the project root:
- `content.json` — structured, sourced, verification-flagged facts (CANONICAL).
- `assets.md` — photo manifest (demo-only, not for publication).
- `brief.md` — brand/tone read + Open Questions for the owner.

**Read all three before writing code.** Pull copy from `content.json` rather than
inventing it. New since v1: a `facebook_first_party` block (their own taglines,
an example bundle deal, post styles) and confirmed seafood / Certified Angus /
Wagyu products.

## IMPORTANT correction vs the first version
The Facebook page **facebook.com/TheMeatCenter is confirmed to be THIS business**
(its Intro lists 657 Lancaster Bypass East + 803-286-5077, 43K followers). The
earlier worry that it belonged to a different/closed shop was a search-engine
mix-up. So:
- It IS okay to link Facebook and to use their own words/marketing.
- The closed "Buford Meat Station" on Pageland Hwy is a *different* business — keep it out.

## Hard content rules (still non-negotiable)
1. **Never present `uncertain` or `not_found` fields as fact.** Render only
   `verified_2plus` / `single_source` items as real claims.
2. **Do not invent** cuts, prices, history, or an owner name.
3. **No owner name on the site.** Describe it as **"family owned"** (first-party
   confirmed) but do NOT state an exact founding year — sources conflict (FB "39
   years" ≈ 1987 vs Buzzfile 1992). Note: "Since 1978" on their graphics is the
   *Certified Angus Beef brand*, not the shop — don't use it as a founding year.
4. **Prices are time-sensitive.** The $99.99 bundle is a real example but promos
   rotate weekly — present bundles as "example" / "current specials" and never
   hardcode a price as permanent. Better: point to Facebook for the latest.
5. **Saturday hours + exact street number conflict.** Use the `content.json`
   values (Sat 9–5; 657 Lancaster Bypass E) and add HTML comments flagging both
   "confirm with owner."
6. **Photos: do NOT hotlink Facebook/Google/aggregator images.** Facebook
   `scontent.fbcdn.net` URLs expire and aren't licensed. Use CSS/SVG placeholders
   with `{/* replace with owner-supplied photo */}` comments. (Owner to provide
   originals — see `assets.md`.)
7. Phone numbers click-to-call (`tel:`); address links to the Google Maps place.

## Sections to build (top to bottom)

### 1. Hero
Business name + a value-forward headline using THEIR OWN tagline:
**"Quality Meats. Fresh Seafood. Great Prices."** Supporting line can draw from
"Premium quality. Great value. Fresh every day." Prominent click-to-call CTA
(803-286-5077), "open now / today's hours" indicator, and a secondary CTA to
directions.

### 2. What we sell
Use `confirmed_products`: Certified Angus Beef, Wagyu (burgers & ground beef),
beef, pork, chicken, **fresh seafood**, plus fresh vegetables, breads, and sides.
Lead with the premium beef program (Certified Angus / Wagyu) since that's how
they market themselves. Commented placeholders for unconfirmed items (deli,
smoked meats, house sausage, custom cuts, freezer/whole-animal orders).

### 3. Bundle deals / weekly specials  ← NEW, make this prominent
This is central to how they sell. Build a "Family Bundles & Weekly Specials"
section featuring an **example bundle** from `content.json`
(`facebook_first_party.example_bundle_deal`):
> Bundle Deal — ~$99.99 (example): 6-pk Wagyu patties, 1 lb Wagyu ground beef,
> Certified Angus boneless ribeyes, Porterhouse, T-bone, NY strips, and filet
> mignon.
Render the item list nicely, but label it clearly as an example and add a line
like "Specials change weekly — see our Facebook for this week's bundles," linking
to Facebook. Add HTML comment: `{/* price/contents are time-sensitive — confirm */}`.
Reinforce their messaging: **"Fresh every day — never frozen,"** **"Perfect for
families,"** in-store pickup available.

### 4. Google reviews  ← NEW, requested
They rely heavily on their Google Maps listing, so make social proof prominent:
- Headline the **4.7★ Google rating** and link to the Google Business listing
  (use the `google_maps_place` from `content.json`).
- Also surface Facebook's **"98% recommend (507 reviews)."**
- Paraphrase the verified review THEMES into 3–4 short trust cards (quality
  meats; prices well below grocery stores; clean, well-organized store; friendly
  staff). These paraphrases are safe.
- For actual review QUOTES, leave a `ReviewCard` component wired up but populated
  from a `reviews` data file that's **empty/commented by default** — the three
  candidate testimonials in `content.json` are UNCONFIRMED, so don't publish them
  until the owner approves. Add a comment explaining this.
- Preferred enhancement: if a Google Places API key is available, fetch live
  reviews at build time; otherwise render the static rating + "Read our reviews
  on Google" button. Do not fabricate review text or counts.

### 5. Visit us
Address (linked to map), phone, full weekly hours table, "near AutoZone /
Mully's on Hwy 9 Bypass" wayfinding line (flagged confirm), in-store pickup note,
"inspected daily by SC Meat and Poultry Inspectors" trust line (first-party).

### 6. Footer
Name, address, phone, hours, and a Facebook link (confirmed). Leave Instagram
commented until verified.

## Design / tone
Per `brief.md`: **old-school, no-frills, family-owned butcher** — warm,
plainspoken, value-forward, community-rooted. Classic meat-market cues
(butcher-paper texture, deep red / cream / charcoal, strong readable serif or
slab headings). Now that we know they push Certified Angus + Wagyu, it's fine to
convey "premium quality at honest prices" — but keep it down-to-earth, not
gourmet/hipster. The Certified Angus Beef logo/branding may be referenced only if
the owner confirms they're an authorized CAB retailer.

## Technical requirements
- Astro, single page (`/`), minimal/zero client JS.
- Mobile-first, responsive, WCAG-AA contrast, semantic HTML, keyboard-accessible.
- SEO: title/meta description, **LocalBusiness JSON-LD** from verified fields
  only (name, address, phone, geo, hours, priceRange "$", aggregateRating 4.7).
- Centralize copy in `content.json` / a typed `src/content/` module so flagged
  items are easy to swap.
- Fast & Lighthouse-friendly; optimized fonts, no heavy libraries.
- Keep/refresh `TODO-owner.md` listing every placeholder and flag (mirror
  `brief.md` Open Questions): exact founding year, current owner, Saturday hours,
  street number, custom cuts, deli/smoked/sausage/freezer offerings, Instagram
  handle, permission to use review quotes, original photos, and confirmation of
  current bundle pricing.

## Deliverable
A working Astro project that builds cleanly (`npm run build`), rendering the real
verified content above (hero tagline, products incl. Certified Angus/Wagyu/
seafood, bundle-deals section, Google-reviews section) with clearly marked
placeholders for everything still awaiting owner confirmation.
