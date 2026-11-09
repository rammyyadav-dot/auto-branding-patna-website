import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { ArrowUpRight, Check, MapPin, MessageCircle } from 'lucide-react'
import { AgencyHeader } from '@/components/agency-header'
import { site } from '@/lib/site'

export type SeoPageData = { eyebrow: string; title: string; intro: string; description: string; stats: [string,string,string][]; sections: { title: string; text: string }[]; bullets: string[]; related: { label: string; href: string }[] }

const provider = { '@type': 'LocalBusiness', name: site.name, telephone: site.phone, email: site.email, url: site.url, address: { '@type': 'PostalAddress', addressLocality: 'Patna', addressRegion: 'Bihar', addressCountry: 'IN' } }

function buildJsonLd(data: SeoPageData, pageType: 'service' | 'location', url: string) {
  const [name, place] = data.eyebrow.split(' · ')
  const isState = place === 'BIHAR' || place?.includes('BIHAR')
  const areaServed = isState ? { '@type': 'State', name: 'Bihar' } : { '@type': 'City', name: place ?? 'Patna' }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#service`, name: data.title, serviceType: name, description: data.description, inLanguage: 'en-IN', areaServed, provider, url },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: pageType === 'service' ? 'Services' : 'Locations', item: `${site.url}/${pageType === 'service' ? 'services' : 'locations'}` }, { '@type': 'ListItem', position: 3, name: data.title, item: url }] },
    ],
  }
}

export function SeoLandingPage({ data, pageType = 'service', slug }: { data: SeoPageData; pageType?: 'service' | 'location'; slug?: string }) {
  const path = slug ? `/${pageType === 'service' ? 'services' : 'locations'}/${slug}` : ''
  const url = `${site.url}${path}`
  const jsonLd = slug ? buildJsonLd(data, pageType, url) : null
  return <main className="seo-page">{jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />}<AgencyHeader /><section className="seo-hero section-pad"><div className="eyebrow"><span className="eyebrow-line" /> {data.eyebrow}</div><h1>{data.title}</h1><p>{data.intro}</p><div className="hero-actions"><Link className="button button-dark" href="/contact#campaign-brief">Plan your campaign <ArrowUpRight size={17} /></Link><Link className="text-link" href="tel:+919172712982">+91 91727 12982</Link></div></section><section className="seo-stats section-pad">{data.stats.map(([value,label,detail]) => <div key={label}><strong>{value}</strong><b>{label}</b><span>{detail}</span></div>)}</section><section className="seo-body section-pad"><div className="seo-body-main"><div className="eyebrow"><span className="eyebrow-line" /> THE PRACTICAL PLAYBOOK</div>{data.sections.map((section) => <article key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</div><aside className="seo-aside"><span className="aside-kicker">WHY BRANDS USE MOVING MEDIA</span><h3>{data.description}</h3><ul>{data.bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul><Link className="button button-yellow" href="/contact#campaign-brief"><MessageCircle size={16} /> Get a WhatsApp quote</Link></aside></section><section className="seo-related section-pad"><div className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</div><div className="related-grid">{data.related.map((item) => <Link href={item.href} key={item.href}><span>{item.label}</span><ArrowUpRight size={17} /></Link>)}</div></section><SiteFooter /></main>
}
