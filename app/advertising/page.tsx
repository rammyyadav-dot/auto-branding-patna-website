import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { clusterMeta, keywordEntries, type Cluster } from '@/lib/keyword-pages'

export const metadata: Metadata = {
  title: { absolute: 'Auto & Bus Advertising in Patna & Bihar | 100 Guides' },
  description: 'Browse 100 guides on auto rickshaw, bus, e-rickshaw and mobile van advertising in Patna and Bihar — rates, formats, locations, Hindi FAQs and slogans.',
  alternates: { canonical: '/advertising' },
}

const order: Cluster[] = ['local', 'commercial', 'bihar', 'hindi', 'slogan']

export default function AdvertisingHub() {
  return (
    <main className="seo-page">
      <SiteHeader />
      <section className="seo-hero section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 100 TOPICS · PATNA &amp; BIHAR</div>
        <h1>Every question.<br /><em>Every route.</em></h1>
        <p>One hundred focused guides on auto, bus, e-rickshaw and van advertising — grouped by what you are searching for. Pick a tag to open its page.</p>
      </section>
      {order.map((c) => {
        const items = keywordEntries.filter((e) => e.c === c)
        return (
          <section className="kw-hub-group section-pad" key={c} lang={clusterMeta[c].hi ? 'hi' : 'en'} aria-labelledby={`hub-${c}`}>
            <div className="kw-hub-head">
              <span className="tag-tile tag-tile-ink">{String(items[0].n).padStart(3, '0')}–{String(items[items.length - 1].n).padStart(3, '0')}</span>
              <h2 id={`hub-${c}`}>{clusterMeta[c].label}</h2>
            </div>
            <div className="tag-cloud">
              {items.map((e) => (
                <Link className={`tag-tile tag-tile-link${c === 'slogan' ? ' tag-tile-quote' : ''}`} href={`/advertising/${e.s}`} key={e.s}>
                  <small>{String(e.n).padStart(3, '0')}</small>{e.k}<ArrowUpRight size={13} />
                </Link>
              ))}
            </div>
          </section>
        )
      })}
      <SiteFooter />
    </main>
  )
}
