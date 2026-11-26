import { notFound } from 'next/navigation'
import { SeoLandingPage } from '@/components/seo-landing-page'
import { pageMetadata } from '@/lib/page-metadata'
import { servicePages } from '@/lib/seo-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!Object.hasOwn(servicePages, slug)) notFound()
  const page = servicePages[slug]
  const [format] = page.eyebrow.split(' · ')
  const title = format.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())
  return pageMetadata(`/services/${slug}`, `${title} in Patna`, page.description)
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!Object.hasOwn(servicePages, slug)) notFound()
  return <SeoLandingPage data={servicePages[slug]} pageType="service" slug={slug} />
}
