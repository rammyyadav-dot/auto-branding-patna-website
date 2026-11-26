import type { Metadata } from 'next'
import { site } from './site'

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  type: 'website' | 'article' = 'website',
): Metadata {
  const socialTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: socialTitle,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: site.ogImage, width: 1000, height: 1000, alt: 'Auto rickshaw advertising by Auto Branding Patna' }],
    },
    twitter: { card: 'summary_large_image', title: socialTitle, description, images: [site.ogImage] },
  }
}
