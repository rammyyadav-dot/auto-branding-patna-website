import Link from 'next/link'
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { AgencyHeader } from '@/components/agency-header'
import { SiteFooter } from '@/components/site-footer'
import { clusterMeta, type BuiltKeywordPage } from '@/lib/keyword-pages'
import { site } from '@/lib/site'

export function KeywordLandingPage({ page }: { page: BuiltKeywordPage }) {
  const hi = page.lang === 'hi'
  const url = `${site.url}/advertising/${page.s}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h,
        serviceType: page.k,
        keywords: page.tags.join(', '),
        description: page.d,
        inLanguage: hi ? 'hi-IN' : 'en-IN',
        areaServed: page.c === 'bihar' || page.place?.includes('Bihar') ? { '@type': 'State', name: 'Bihar' } : { '@type': 'City', name: 'Patna' },
        provider: { '@type': 'LocalBusiness', name: site.name, telephone: site.phone, email: site.email, url: site.url, address: { '@type': 'PostalAddress', addressLocality: 'Patna', addressRegion: 'Bihar', addressCountry: 'IN' } },
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Advertising', item: `${site.url}/advertising` },
          { '@type': 'ListItem', position: 3, name: page.h, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  return (
    <main className={`seo-page kw-page kw-theme-${page.c}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <AgencyHeader />
      <div lang={page.lang}>
        <nav className="kw-crumbs section-pad" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span><Link href="/advertising">Advertising</Link><span>/</span><span aria-current="page">{page.k}</span>
        </nav>
        <section className="seo-hero section-pad">
          <div className="kw-tags">
            <span className="tag-tile tag-tile-ink">#{String(page.n).padStart(3, '0')}</span>
            <span className="tag-tile">{clusterMeta[page.c].short}</span>
          </div>
          {page.c === 'slogan' && <span className="kw-quote-mark" aria-hidden="true">“</span>}
          <div className="eyebrow"><span className="eyebrow-line" /> {page.eyebrow}</div>
          <h1>{page.h}</h1>
          <p>{page.intro}</p>
          <ul className="tag-cloud kw-hero-tags" aria-label={hi ? 'टैग' : 'Topic tags'}>
            {page.tags.map((t) => <li className="tag-tile" key={t}>{t}</li>)}
          </ul>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact#campaign-brief">{hi ? 'अभियान प्लान करें' : 'Plan your campaign'} <ArrowUpRight size={17} /></Link>
            <a className="text-link" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </div>
        </section>
        <section className="seo-stats section-pad">
          {page.stats.map(([value, label, detail]) => <div key={label}><strong>{value}</strong><b>{label}</b><span>{detail}</span></div>)}
        </section>
        <section className="seo-body section-pad">
          <div className="seo-body-main">
            <div className="eyebrow"><span className="eyebrow-line" /> {hi ? 'पूरी जानकारी' : 'THE PRACTICAL PLAYBOOK'}</div>
            {page.sections.map((section) => <article key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}
            <div className="kw-faq">
              <h2>{hi ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently asked questions'}</h2>
              {page.faqs.map((f) => <details className="faq-item" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
            </div>
          </div>
          <aside className="seo-aside">
            <span className="aside-kicker">{hi ? 'ब्रांड क्यों चुनते हैं' : 'WHY BRANDS USE MOVING MEDIA'}</span>
            <h3>“{page.k}”</h3>
            <ul>{page.bullets.map((b) => <li key={b}><Check size={15} />{b}</li>)}</ul>
            <a className="button button-dark" href={`https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent(`Hi, I'd like a quote for: ${page.k}`)}`} rel="nofollow noopener" target="_blank"><MessageCircle size={16} /> {hi ? 'व्हाट्सऐप पर रेट पूछें' : 'Get a WhatsApp quote'}</a>
          </aside>
        </section>
      </div>
      <section className="kw-cta section-pad" lang={page.lang}>
        <h2>{page.cta}</h2>
        <div>
          <Link className="button button-dark" href="/contact#campaign-brief">{hi ? 'कोटेशन लें' : 'Get your quote'} <ArrowUpRight size={17} /></Link>
          <a className="button kw-cta-call" href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </div>
      </section>
      <section className="seo-related section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</div>
        <div className="tag-cloud">
          {page.related.map((r) => <Link className="tag-tile tag-tile-link" href={`/advertising/${r.s}`} key={r.s} lang={r.c === 'hindi' ? 'hi' : 'en'}>{r.k}<ArrowUpRight size={13} /></Link>)}
          <Link className="tag-tile tag-tile-ink tag-tile-link" href="/advertising">All 100 topics <ArrowUpRight size={13} /></Link>
        </div>
        <div className="related-grid" style={{marginTop:'1.5rem'}}>
          <Link href="/services/auto-rickshaw-advertising-patna"><span>Auto rickshaw advertising</span><ArrowUpRight size={17}/></Link>
          <Link href="/services/auto-hood-branding-patna"><span>Hood branding</span><ArrowUpRight size={17}/></Link>
          <Link href="/services/auto-back-panel-advertising-patna"><span>Back-panel advertising</span><ArrowUpRight size={17}/></Link>
          <Link href="/services"><span>All services</span><ArrowUpRight size={17}/></Link>
          <Link href="/rates"><span>Campaign rates</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations"><span>All coverage zones</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/boring-road"><span>Boring Road</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/bailey-road"><span>Bailey Road</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/kankarbagh"><span>Kankarbagh</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/patna-junction"><span>Patna Junction</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/rajendra-nagar"><span>Rajendra Nagar</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/danapur"><span>Danapur</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/muzaffarpur"><span>Muzaffarpur</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/gaya"><span>Gaya</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/bhagalpur"><span>Bhagalpur</span><ArrowUpRight size={17}/></Link>
          <Link href="/blog"><span>Advertising journal</span><ArrowUpRight size={17}/></Link>
          <Link href="/about"><span>About Auto Branding Patna</span><ArrowUpRight size={17}/></Link>
          <Link href="/contact"><span>Plan a campaign</span><ArrowUpRight size={17}/></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
