import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { campaignTopics } from '@/content/seo-campaign-topics'
import { campaignHubs } from '@/lib/campaign-topics'
import styles from '@/app/[seoHub]/campaign.module.css'

export function CampaignTopicNote({ path }: { path: string }) {
  const topic = campaignTopics.find(({ existingPath }) => existingPath === path)
  if (!topic) return null

  return <section className={styles.section} aria-labelledby="campaign-planning-note">
    <div className={styles.card}>
      <h2 id="campaign-planning-note">Plan your next step</h2>
      <p>{topic.plan} {topic.check}</p>
      <Link className="text-link" href={`/${topic.hub}`}>{campaignHubs[topic.hub].label} <ArrowUpRight size={16} /></Link>
    </div>
  </section>
}
