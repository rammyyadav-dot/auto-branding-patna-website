import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { campaignTopics } from '@/content/seo-campaign-topics'
import { campaignHubs, campaignTopicPath, newCampaignTopics } from '@/lib/campaign-topics'
import { pageMetadata } from '@/lib/page-metadata'
import { site } from '@/lib/site'
import { stickerBrandingPath } from '@/lib/sticker-branding'
import styles from '../campaign.module.css'

type Props = { params: Promise<{ seoHub: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return newCampaignTopics.map(({ hub, slug }) => ({ seoHub: hub, slug }))
}

async function getTopic(params: Props['params']) {
  const { seoHub, slug } = await params
  const topic = newCampaignTopics.find((entry) => entry.hub === seoHub && entry.slug === slug)
  if (!topic) notFound()
  return topic
}

export async function generateMetadata({ params }: Props) {
  const topic = await getTopic(params)
  return pageMetadata(campaignTopicPath(topic), topic.title, topic.plan, topic.hub === 'campaign-guides' ? 'article' : 'website')
}

export default async function CampaignTopicPage({ params }: Props) {
  const topic = await getTopic(params)
  const hub = campaignHubs[topic.hub]
  const hubPath = `/${topic.hub}`
  const path = campaignTopicPath(topic)
  const siblings = campaignTopics.filter((entry) => entry.hub === topic.hub)
  const position = siblings.indexOf(topic)
  const related = [...siblings.slice(position + 1), ...siblings.slice(0, position)].slice(0, 3)
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: hub.label, item: new URL(hubPath, site.url).href },
      { '@type': 'ListItem', position: 3, name: topic.title, item: new URL(path, site.url).href },
    ],
  }
  const whatsapp = `https://wa.me/${site.phone.slice(1)}?text=${encodeURIComponent(`Hi, I'd like to discuss ${topic.title}. Please confirm the formats, availability and what a written quote would include.`)}`

  return <>
    <SiteHeader />
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c') }} />
      <header className={styles.hero}>
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href={hubPath}>{hub.label}</Link></nav>
        <h1>{topic.title}</h1>
        <p>{topic.plan}</p>
        <a href={whatsapp} className="button button-yellow">Discuss on WhatsApp <ArrowUpRight size={17} /></a>
      </header>
      <section className={styles.section} aria-labelledby="campaign-brief-heading">
        <div className={styles.detail}>
          <div>
            <h2 id="campaign-brief-heading">What to confirm in your brief</h2>
            <p>{topic.check}</p>
            {topic.hub === 'bihar' && <p>Ask for local vehicle availability, installation logistics and billing by city before setting the launch date.</p>}
            {topic.hub === 'patna' && <p>Share your preferred dates, the area your customers travel through and the action you want them to take.</p>}
            {topic.hub === 'industries' && <p>Agree who signs off on the creative and how the team will record attributable enquiries after launch.</p>}
            {topic.example && <><h2>Put the plan into practice</h2><p>{topic.example}</p></>}
            <Link className="text-link" href="/contact#campaign-brief">Use the campaign brief form <ArrowUpRight size={16} /></Link>
          </div>
          <aside className={styles.card} aria-labelledby="planning-references">
            <h3 id="planning-references">Rates and artwork references</h3>
            <table className={styles.facts}>
              <caption>Published Patna pricing examples</caption>
              <thead><tr><th scope="col">Format and size</th><th scope="col">Indicative rate</th></tr></thead>
              <tbody>
                <tr><th scope="row"><Link href={stickerBrandingPath}>24 × 6 in sticker · 1 sq ft</Link></th><td>From ₹140 per auto. Confirm duration.</td></tr>
                <tr><th scope="row"><Link href="/rates">Approx. 24 × 18 in rear panel · 3 sq ft</Link></th><td>₹210 per auto per month</td></tr>
                <tr><th scope="row"><Link href="/rates">Three-panel hood · vehicle-specific</Link></th><td>₹700 per auto per month</td></tr>
              </tbody>
            </table>
            <p>Dimensions refer to rectangular artwork. Confirm usable space and local pricing for the vehicles selected.</p>
          </aside>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="related-campaigns">
        <h2 id="related-campaigns">Related campaign options</h2>
        <div className={styles.grid}>
          {related.map((entry) => <article className={styles.card} key={entry.slug}><h3><Link href={campaignTopicPath(entry)}>{entry.title} <ArrowUpRight size={15} aria-hidden="true" /></Link></h3><p>{entry.plan}</p></article>)}
        </div>
        <Link className="text-link" href={hubPath}>All {hub.label.toLowerCase()} <ArrowUpRight size={16} /></Link>
      </section>
    </main>
    <SiteFooter />
  </>
}
