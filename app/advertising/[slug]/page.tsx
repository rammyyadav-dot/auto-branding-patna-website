import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { KeywordLandingPage } from '@/components/keyword-landing-page'
import { buildKeywordPage, keywordBySlug, keywordEntries } from '@/lib/keyword-pages'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return keywordEntries.map((e) => ({ slug: e.s }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const e = keywordBySlug[slug]
  if (!e) return {}
  const hi = e.c === 'hindi'
  const path = `/advertising/${e.s}`
  return {
    // Hand-written <title>, used verbatim (no template suffix) to stay ≤ 60 chars.
    title: { absolute: e.t },
    description: e.d,
    alternates: { canonical: path },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
    openGraph: {
      type: 'website',
      url: path,
      title: e.t,
      description: e.d,
      siteName: site.name,
      locale: hi ? 'hi_IN' : 'en_IN',
      images: [{ url: site.ogImage, width: 1000, height: 1000, alt: e.h }],
    },
    twitter: { card: 'summary_large_image', title: e.t, description: e.d, images: [site.ogImage] },
    other: { 'content-language': hi ? 'hi-IN' : 'en-IN' },
  }
}

export default async function AdvertisingKeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const e = keywordBySlug[slug]
  if (!e) notFound()
  return <KeywordLandingPage page={buildKeywordPage(e)} />
}
