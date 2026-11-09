import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Auto Branding Patna | Your Brand. Every Road. Every Day.', template: '%s | Auto Branding Patna' },
  description: 'Patna\'s specialist auto rickshaw advertising and transit branding partner. Plan moving billboard campaigns across Patna.',
  applicationName: site.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  openGraph: { type: 'website', siteName: site.name, locale: site.locale, url: '/', images: [{ url: site.ogImage, width: 1000, height: 1000, alt: site.tagline }] },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFD43B' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: 'Auto rickshaw advertising and transit branding in Patna and Bihar.',
  image: site.ogImage,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Patna',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 25.5941, longitude: 85.1376 },
  areaServed: [
    { '@type': 'City', name: 'Patna' },
    { '@type': 'City', name: 'Muzaffarpur' },
    { '@type': 'City', name: 'Gaya' },
    { '@type': 'City', name: 'Bhagalpur' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Rickshaw Advertising Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Rickshaw Advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Hood Branding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Back-Panel Advertising' } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
