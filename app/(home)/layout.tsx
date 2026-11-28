import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import { site } from '@/lib/site'

const description = 'Plan auto branding in Patna. Compare rickshaw ad rates, explore Bihar transit routes and estimate your campaign by fleet size and duration.'
const preview = { url: site.ogImage, width: 800, height: 800, alt: 'Auto rickshaw branding in Patna, Bihar' }
const base = pageMetadata('/', 'Auto Rickshaw Advertising in Patna', description)

export const metadata: Metadata = {
  ...base,
  openGraph: { ...base.openGraph, description, images: [preview] },
  twitter: { ...base.twitter, description, images: [preview] },
}

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${site.url}/#transit-advertising`,
  url: `${site.url}/`,
  name: 'Auto Rickshaw Advertising in Patna',
  description,
  serviceType: 'Transit media and mobile billboard advertising',
  provider: { '@id': `${site.url}/#business` },
  areaServed: [{ '@type': 'City', name: 'Patna' }, { '@type': 'State', name: 'Bihar' }],
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, '\\u003c') }} />
    {children}
  </>
}
