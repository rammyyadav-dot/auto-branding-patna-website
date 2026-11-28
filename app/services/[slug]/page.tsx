import { notFound } from 'next/navigation'
import { SeoLandingPage } from '@/components/seo-landing-page'
import { pageMetadata } from '@/lib/page-metadata'
import { servicePages } from '@/lib/seo-pages'
import { stickerBrandingPath } from '@/lib/sticker-branding'

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!Object.hasOwn(servicePages, slug)) notFound()
  const page = servicePages[slug]
  if (slug === 'auto-rickshaw-advertising-patna') {
    return pageMetadata(
      '/services/auto-rickshaw-advertising-patna',
      'Auto Rickshaw Ad Campaigns in Patna',
      'Plan a Patna auto rickshaw ad campaign by format, fleet size and target route. See how artwork, installation and campaign checks work before requesting a quote.',
    )
  }

  const [format] = page.eyebrow.split(' · ')
  const title = format.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase())
  return pageMetadata(`/services/${slug}`, `${title} in Patna`, page.description)
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!Object.hasOwn(servicePages, slug)) notFound()
  const page = servicePages[slug]
  if (slug !== 'auto-rickshaw-advertising-patna') {
    return <SeoLandingPage data={page} pageType="service" slug={slug} />
  }

  return <SeoLandingPage pageType="service" slug={slug} data={{
    ...page,
    sections: [...page.sections, {
      title: 'What to include in your booking brief',
      text: 'Share your launch date, target neighbourhoods, offer and approximate fleet size. Ask for a quote that itemises artwork, print, installation, campaign duration and reporting. Confirm the available vehicle placements and approve a size proof before production.',
    }],
    related: [{ label: '24 × 6 auto sticker specifications and pricing', href: stickerBrandingPath }, ...page.related],
  }} />
}
