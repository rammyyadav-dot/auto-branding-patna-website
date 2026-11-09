/** Single source of truth for brand + SEO constants. */
export const site = {
  name: 'Auto Branding Patna',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://autobrandingpatna.in',
  phone: '+919172712982',
  phoneDisplay: '+91 91727 12982',
  email: 'hello@autobrandingpatna.in',
  tagline: 'Your brand. Every road. Every day.',
  ogImage: '/auto-branding-hero.jpg',
  locale: 'en_IN',
}

/** Brand kit tokens — mirrored as CSS custom properties in app/globals.css */
export const brand = {
  colors: [
    { name: 'Signal Yellow', token: '--yellow', hex: '#FFD43B', rgb: '255 212 59', use: 'Primary accent, CTAs, brand mark, highlights. Never for body text.' },
    { name: 'Turmeric', token: '--deep-yellow', hex: '#E9B824', rgb: '233 184 36', use: 'Hover / pressed states, emphasis words in headlines on light grounds.' },
    { name: 'Road Ink', token: '--ink', hex: '#111111', rgb: '17 17 17', use: 'Headlines, body text, dark sections, footer, primary buttons.' },
    { name: 'Kerb Grey', token: '--muted', hex: '#686868', rgb: '104 104 104', use: 'Secondary copy, captions, metadata.' },
    { name: 'Chalk Ivory', token: '--ivory', hex: '#F7F5EF', rgb: '247 245 239', use: 'Default page background.' },
    { name: 'Gulabi Pink', token: '--pink', hex: '#F5DFE1', rgb: '245 223 225', use: 'Hero and editorial section grounds — the warm local note.' },
    { name: 'Lane Line', token: '--line', hex: '#DEDBD2', rgb: '222 219 210', use: 'Hairline borders, dividers, card outlines.' },
    { name: 'Paper White', token: '--white', hex: '#FFFFFF', rgb: '255 255 255', use: 'Cards on tinted grounds, text on ink.' },
  ],
}
