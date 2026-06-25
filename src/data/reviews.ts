/**
 * Customer review quotes for the reviews section.
 *
 * POC NOTE: these are real Google-review excerpts collected during research
 * (see content.json → candidate_testimonials), included here so the proof-of-
 * concept looks live. Before launch, CONFIRM exact wording, attribution and the
 * customers' permission to republish — or, better, pull live reviews from the
 * Google Places API at build time. Do not fabricate quotes or counts.
 */

export interface Review {
  quote: string;
  name: string;
}

export const reviews: Review[] = [
  { quote: 'Great selection of high quality meats and very reasonable prices.', name: 'Charles' },
  { quote: 'The store is very clean and well organized. The employees are very nice.', name: 'Joyce' },
  { quote: 'So clean and prices are half of what they are anywhere else!', name: 'Local customer' },
];
