import type { MetadataRoute } from 'next'
import { keywordEntries } from '@/lib/keyword-pages'
import { servicePages } from '@/lib/seo-pages'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ['/', '/about', '/services', '/locations', '/rates', '/contact', '/blog', '/blog/auto-rickshaw-advertising-patna', '/advertising']
  const locations = ['boring-road', 'bailey-road', 'kankarbagh', 'patna-junction', 'rajendra-nagar', 'danapur', 'muzaffarpur', 'gaya', 'bhagalpur']
  const paths = [
    ...core,
    ...Object.keys(servicePages).map((slug) => `/services/${slug}`),
    ...locations.map((slug) => `/locations/${slug}`),
    ...keywordEntries.map(({ s }) => `/advertising/${s}`),
  ]
  return paths.map((path) => ({ url: new URL(path, site.url).href }))
}
