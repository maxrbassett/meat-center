/**
 * Single source of truth for site copy.
 *
 * v3 (frontend proof-of-concept): rebuilt as a modern, photo-forward marketing
 * site that does what the Facebook page can't — get found on Google, show this
 * week's deal with no login wall, take pre-orders, and capture an owned audience.
 *
 * Provenance note: the owner-supplied storefront photo (src/assets/storefront.jpg)
 * is FIRST-PARTY confirmation of several previously-flagged facts. The building
 * sign and the branded show car both read "The Meat Center", "657 Lancaster
 * Bypass E, Lancaster SC 29720", "803-286-5077", "40 Years" and carry the
 * Certified Angus Beef mark. Those are now treated as confirmed.
 *
 * Still PROOF-OF-CONCEPT placeholder data (clearly marked `// POC`): the weekly
 * special, the bundle catalog prices/contents, pre-order options, and FAQ
 * answers. These are realistic stand-ins so the page looks live — confirm/replace
 * with the owner before launch. See TODO-owner.md.
 */

export type DayKey =
  | 'monday' | 'tuesday' | 'wednesday' | 'thursday'
  | 'friday' | 'saturday' | 'sunday';

export interface HoursEntry {
  label: string;
  display: string;
  open: number | null; // minutes from midnight, null = closed
  close: number | null;
}

// --- Identity ------------------------------------------------------------------
// Confirmed first-party: storefront sign + branded car both read "The Meat Center".
export const name = 'The Meat Center';
export const shortName = 'Meat Center';

// "40 Years" is painted on their own show car (first-party). Safe trust line;
// we don't pin an exact founding year (sources still conflict on the exact year).
export const familyOwnedLine = 'Family-owned & operated for 40 years';
export const familyOwnedShort = 'Family-owned for 40 years';

// Their own taglines (from Facebook, first-party).
export const heroTagline = 'Quality Meats. Fresh Seafood. Great Prices.';
export const heroSubhead =
  'A hometown butcher in Lancaster — Certified Angus Beef, Wagyu, and fresh seafood at honest, beat-the-grocery-store prices. Fresh every day, never frozen.';

// --- Navigation ----------------------------------------------------------------
export const nav = [
  { label: 'This Week', href: '#special' },
  { label: 'What We Sell', href: '#offer' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Pre-Order', href: '#preorder' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
];

// --- Contact / location --------------------------------------------------------
export const phone = '803-286-5077';
export const phoneTel = '+18032865077';
export const phoneSms = '+18032865077'; // POC: same line for click-to-text demo

// Confirmed first-party (657 on the building + on the car).
export const address = {
  street: '657 Lancaster Bypass E',
  altStreet: 'Hwy 9 Bypass E',
  city: 'Lancaster',
  state: 'SC',
  zip: '29720',
};
export const addressOneLine = `${address.street} (${address.altStreet}), ${address.city}, ${address.state} ${address.zip}`;

export const geo = { lat: 34.7290745, lng: -80.7560651 };

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${name}, ${address.street}, ${address.city}, ${address.state} ${address.zip}`,
)}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${name}, ${address.street}, ${address.city}, ${address.state} ${address.zip}`,
)}`;
// Keyless Google Maps embed (no API key needed for the static `&output=embed` form).
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${address.street}, ${address.city}, ${address.state} ${address.zip}`,
)}&z=15&output=embed`;

export const googleReviewsUrl = 'https://www.google.com/maps?cid=4246771460274755208';
export const facebookUrl = 'https://www.facebook.com/TheMeatCenter/';
// Instagram (@the.meatcenter) still unverified — left out until owner confirms.

export const wayfinding =
  'On Hwy 9 Bypass E (Lancaster Bypass E) — look for the big red sign, near AutoZone and Mully’s.';
export const inspectionLine = 'Inspected daily by SC Meat & Poultry Inspectors.';
export const pickupNote = 'Call-ahead pickup available.';
export const cabRetailer = true; // car carries the Certified Angus Beef mark (first-party)

// --- Hours (Saturday still flagged) --------------------------------------------
export const hours: Record<DayKey, HoursEntry> = {
  monday: { label: 'Monday', display: '9:00 AM – 6:00 PM', open: 540, close: 1080 },
  tuesday: { label: 'Tuesday', display: '9:00 AM – 6:00 PM', open: 540, close: 1080 },
  wednesday: { label: 'Wednesday', display: '9:00 AM – 6:00 PM', open: 540, close: 1080 },
  thursday: { label: 'Thursday', display: '9:00 AM – 6:00 PM', open: 540, close: 1080 },
  friday: { label: 'Friday', display: '9:00 AM – 6:00 PM', open: 540, close: 1080 },
  saturday: { label: 'Saturday', display: '9:00 AM – 5:00 PM', open: 540, close: 1020 }, // CONFIRM close
  sunday: { label: 'Sunday', display: 'Closed', open: null, close: null },
};

export const hoursOrder: DayKey[] = [
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
];

export const openingHoursSpec = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '09:00',
    closes: '17:00', // CONFIRM Saturday close
  },
];

// --- Quick trust badges (hero strip) -------------------------------------------
export const heroBadges = [
  '4.7★ on Google',
  'Certified Angus Beef',
  'Fresh, never frozen',
  '98% recommend',
];

// --- Offerings -----------------------------------------------------------------
export const premiumBeef = [
  {
    name: 'Certified Angus Beef',
    blurb: 'Hand-cut ribeyes, Porterhouse, T-bone, NY strips and filet mignon — premium grade, cut fresh in store.',
  },
  {
    name: 'Wagyu',
    blurb: 'Rich, marbled Wagyu hamburger patties and ground beef for the best burger you’ll make at home.',
  },
];

export const products = [
  'Beef', 'Pork', 'Chicken & poultry', 'Fresh seafood',
  'Fresh vegetables', 'Breads', 'Sides & fixings',
];

export const services = [
  { icon: '🏷️', title: 'Weekly specials', blurb: 'Fresh deals that change every week — see this week’s above.' },
  { icon: '📦', title: 'Family bundle & box deals', blurb: 'Buy in bulk and save big on premium cuts. Stock the freezer for less.' },
  { icon: '🔪', title: 'Custom cuts to order', blurb: 'Tell us how you like it cut and we’ll take care of you.' }, // POC: confirm
  { icon: '🛒', title: 'Call-ahead pickup', blurb: 'Phone your order in and we’ll have it boxed and ready.' },
];

export const freshClaim = 'Fresh every day — never frozen.';
export const familiesClaim = 'Perfect for families.';

// --- Gallery (cut tiles from the owner-supplied marketing banner) --------------
export const galleryCaption = 'A look at what’s in the case — premium beef, cut fresh daily.';

// --- This week's special (the living centerpiece) ------------------------------
// POC: realistic stand-in. In production this is the one rotating headline deal,
// updated weekly (owner-edited, or auto-mirrored from their Facebook post).
export const weeklySpecial = {
  badge: 'This Week’s Special',
  title: 'The Family Grill Bundle',
  price: '$99.99',
  unit: '',
  blurb: 'Everything you need for a weekend of grilling — premium Certified Angus Beef and Wagyu, cut fresh and boxed ready to go.',
  items: [
    '6-pack Wagyu hamburger patties',
    '1 lb Wagyu ground beef',
    '2 × 12 oz Certified Angus boneless ribeyes',
    '12 oz Certified Angus Porterhouse',
    '12 oz Certified Angus T-bone',
    '2 × 12 oz Certified Angus New York strips',
    '2 × 8 oz Certified Angus filet mignon',
  ],
  note: 'Specials change every Monday. Call to reserve while it lasts.',
};

// --- Bundle catalog (standing menu) --------------------------------------------
// POC: representative line-up so the page looks stocked. Confirm real bundles/prices.
export const bundles = [
  {
    name: 'Grill-Out Bundle',
    price: 'from $59.99',
    tag: 'Most popular',
    blurb: 'Burgers, dogs, and steaks ready for the backyard.',
    items: ['2 lb ground chuck', '8 burger patties', '4 ribeye steaks', '2 lb chicken wings'],
  },
  {
    name: 'Family Freezer Bundle',
    price: 'from $129.99',
    tag: 'Best value',
    blurb: 'A couple weeks of dinners — stock the freezer and save.',
    items: ['5 lb ground beef', '4 pork chops', '4 chicken breasts', '3 lb cube steak', '2 lb sausage'],
  },
  {
    name: 'Premium Steak Bundle',
    price: 'from $149.99',
    tag: 'Certified Angus',
    blurb: 'Hand-cut Certified Angus Beef for a special night in.',
    items: ['2 ribeyes', '2 NY strips', '2 filet mignon', '1 Porterhouse'],
  },
  {
    name: 'Seafood Bundle',
    price: 'from $79.99',
    tag: 'Fresh catch',
    blurb: 'Fresh seafood, ready for the skillet or the fryer.',
    items: ['1 lb shrimp', '2 salmon fillets', '1 lb flounder', '1 lb catfish'],
  },
];

// --- Holiday & event pre-orders ------------------------------------------------
export const preorder = {
  heading: 'Holiday & event pre-orders',
  blurb: 'Hosting a crowd? Reserve your holiday ham, turkey, party platters or a custom bundle and we’ll have it cut, boxed and ready for pickup.',
  options: [
    'Holiday ham',
    'Whole turkey',
    'Prime rib roast',
    'Party platter',
    'Custom bundle / box',
    'Quarter / half / whole order',
    'Something else',
  ],
  occasions: ['Thanksgiving', 'Christmas', 'Easter', 'July 4th', 'Family gathering', 'Other'],
};

// --- Specials signup (owned audience) ------------------------------------------
export const signup = {
  heading: 'Never miss a deal',
  blurb: 'Get this week’s specials and bundle deals by text or email — straight from the shop, no Facebook account needed.',
};

// --- Reputation ----------------------------------------------------------------
export const rating = {
  google: '4.7',
  bestRating: '5',
  facebookRecommend: '98%',
  facebookReviewCount: '507',
};

export const trustPoints = [
  { icon: '🥩', title: 'Quality you can see', body: 'A wide variety of fresh, high-quality cuts in a clean, well-organized store.' },
  { icon: '💲', title: 'Honest prices', body: 'Locals consistently call out the value — often well below the grocery store.' },
  { icon: '🤝', title: 'Friendly folks', body: 'Courteous, helpful staff who know their meat and treat you like a neighbor.' },
  { icon: '🚗', title: 'Worth the trip', body: 'Weekly specials and bundle deals keep customers coming back — some from out of town.' },
];

// --- FAQ (also emitted as FAQPage schema for SEO) ------------------------------
// POC answers — confirm with owner. Built to capture local "near me" searches.
export const faqs = [
  {
    q: 'Where is The Meat Center located?',
    a: 'We’re at 657 Lancaster Bypass E (Hwy 9 Bypass E), Lancaster, SC 29720 — look for the big red sign, near AutoZone and Mully’s.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday through Friday 9 AM–6 PM, Saturday 9 AM–5 PM, closed Sunday. Hours can vary on holidays — call ahead at 803-286-5077.',
  },
  {
    q: 'Do you carry Certified Angus Beef and Wagyu?',
    a: 'Yes. We specialize in Certified Angus Beef — ribeyes, Porterhouse, T-bone, NY strips and filet mignon — plus Wagyu burger patties and ground beef, all cut fresh in store.',
  },
  {
    q: 'Do you do custom cuts and bulk orders?',
    a: 'We do. Tell us how you like your meat cut, or ask about our family bundles and freezer/box deals to buy in bulk and save.', // POC: confirm custom cuts
  },
  {
    q: 'Can I pre-order for the holidays?',
    a: 'Yes — reserve hams, turkeys, prime rib, party platters or a custom bundle ahead of time and we’ll have it boxed and ready for pickup. Use the pre-order form on this page or call us.',
  },
  {
    q: 'Do you sell fresh seafood?',
    a: 'We do — fresh seafood alongside our beef, pork, chicken, fresh vegetables, breads and sides.',
  },
];

// --- SEO -----------------------------------------------------------------------
export const seo = {
  title: 'The Meat Center | Butcher Shop & Meat Market in Lancaster, SC',
  description:
    'The Meat Center — a family-owned butcher shop in Lancaster, SC with Certified Angus Beef, Wagyu, fresh seafood, weekly specials and family bundle deals. Open Mon–Sat. Call 803-286-5077.',
  priceRange: '$',
};
