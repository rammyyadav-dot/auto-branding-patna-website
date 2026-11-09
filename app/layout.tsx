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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
