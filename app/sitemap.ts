import type { MetadataRoute } from 'next'
import { keywordEntries } from '@/lib/keyword-pages'
import { servicePages } from '@/lib/seo-pages'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const core = ['', '/about', '/services', '/locations', '/rates', '/contact', '/blog', '/blog/auto-rickshaw-advertising-patna', '/advertising', '/meta-tags']
  const locations = ['boring-road', 'bailey-road', 'kankarbagh', 'patna-junction', 'rajendra-nagar', 'danapur', 'muzaffarpur', 'gaya', 'bhagalpur']
  return [
    ...core.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8 })),
    ...Object.keys(servicePages).map((s) => ({ url: `${site.url}/services/${s}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...locations.map((s) => ({ url: `${site.url}/locations/${s}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...keywordEntries.map((e) => ({ url: `${site.url}/advertising/${e.s}`, lastModified: now, changeFrequency: 'monthly' as const, priority: e.c === 'slogan' ? 0.5 : 0.7 })),
  ]
}
