# Owner confirmation checklist — The Meat Center site (v3 POC)

This version is a **front-end proof of concept** built to show the owners what a
modern site can do that a Facebook page can't. Some content is realistic
placeholder data (marked **POC** below) so the page looks live. Confirm/replace
before launch.

## ✅ Now confirmed first-party (from the owner-supplied storefront photo)
- **Name is "The Meat Center"** (building sign + branded show car).
- **Address 657 Lancaster Bypass E, Lancaster, SC 29720** (on the building + car).
- **Phone 803-286-5077** (on the car).
- **"40 years"** family-owned (painted on the car) — used as a trust line; exact
  founding year still not printed.
- **Certified Angus Beef retailer** (CAB mark on the car).

## ⚙️ Backend not yet wired (front-end only for the demo)
- [ ] **Pre-order form** — currently shows a success message but doesn't send.
      Wire to email/SMS or a form service (e.g. Formspree) before launch.
- [ ] **Specials signup** (email/text) — same; connect to an email/SMS provider.
- [ ] **"This week's special"** — decide how it stays current: (A) auto-mirror
      from Facebook, (B) we update it as a service, or (C) a simple admin/sheet.

## 📝 POC placeholder content to confirm or replace
- [ ] **This week's special** — the $99.99 Family Grill Bundle is an example.
- [ ] **Bundle catalog** (4 bundles + prices) — representative; confirm real ones.
- [ ] **Services list** — confirm **custom cuts to order** (still unverified).
- [ ] **FAQ answers** — confirm wording (esp. custom cuts, pre-orders, seafood).
- [ ] **Review quotes** (3) — real Google excerpts; confirm wording/permission,
      or switch to live Google Places API pull.

## 🔎 Still conflicting / unconfirmed
- [ ] **Saturday closing time** — showing 9 AM–5 PM; one source says 6 PM.
- [ ] **Wayfinding line** ("near AutoZone and Mully's") — confirm.
- [ ] **Founding year** — not printed (sources conflict); confirm if you want it.
- [ ] **Current owner/operator name** — not shown; confirm if you want it named.
- [ ] **Instagram** `@the.meatcenter` — confirm it's yours before linking.
- [ ] **Business email**, **parking details**, **seasonal/holiday hours**.

## 🖼️ Photos
Currently using two photos pulled from the Facebook page (storefront + a meat
collage cropped into cut tiles) for the demo. Before launch, get the owner's OK
to use them and ask for high-res originals: storefront, interior, the meat case,
a bundle/box deal, and a staff/owner photo.

## 🌐 Launch
- [ ] Real **domain** (set in `astro.config.mjs` → `site`) — needed for correct
      Open Graph image + structured-data URLs.
- [ ] Confirm the **Google review count** to complete the aggregateRating schema.
- [ ] Claim/verify the **Google Business Profile** so the site + Maps reinforce
      each other (this is the main "get found on Google" win).
