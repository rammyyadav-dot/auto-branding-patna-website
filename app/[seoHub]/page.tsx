import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { campaignTopics } from '@/content/seo-campaign-topics'
import { campaignHubKeys, campaignHubs, campaignTopicPath, isCampaignHub } from '@/lib/campaign-topics'
import { pageMetadata } from '@/lib/page-metadata'
import styles from './campaign.module.css'

type Props = { params: Promise<{ seoHub: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return campaignHubKeys.map((seoHub) => ({ seoHub }))
}

export async function generateMetadata({ params }: Props) {
  const { seoHub } = await params
  if (!isCampaignHub(seoHub)) notFound()
  const hub = campaignHubs[seoHub]
  return pageMetadata(`/${seoHub}`, hub.title, hub.description)
}

export default async function CampaignHubPage({ params }: Props) {
  const { seoHub } = await params
  if (!isCampaignHub(seoHub)) notFound()
  const hub = campaignHubs[seoHub]
  const topics = campaignTopics.filter(({ hub }) => hub === seoHub)

  return <>
    <SiteHeader />
    <main className={styles.main}>
      <header className={styles.hero}>
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">{hub.label}</span></nav>
        <h1>{hub.title}</h1>
        <p>{hub.description}</p>
        <Link className="button button-yellow" href="/contact#campaign-brief">Discuss your campaign <ArrowUpRight size={17} /></Link>
      </header>
      <nav className={styles.hubs} aria-label="Campaign directories">
        {campaignHubKeys.map((key) => <Link key={key} href={`/${key}`} aria-current={key === seoHub ? 'page' : undefined}>{campaignHubs[key].label}</Link>)}
      </nav>
      <section className={styles.section} aria-labelledby="campaign-options">
        <h2 id="campaign-options">Explore {hub.label.toLowerCase()}</h2>
        <div className={styles.grid}>
          {topics.map((topic) => <article className={styles.card} key={topic.slug}>
            <h3><Link href={campaignTopicPath(topic)}>{topic.title} <ArrowUpRight size={15} aria-hidden="true" /></Link></h3>
            <p>{topic.plan}</p>
          </article>)}
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
}
