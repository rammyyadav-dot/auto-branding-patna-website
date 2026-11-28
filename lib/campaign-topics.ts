import { campaignTopics, type CampaignHub, type CampaignTopic } from '@/content/seo-campaign-topics'

export const campaignHubs = {
  patna: {
    title: 'Auto Branding in Patna by Route and Format',
    description: 'Compare Patna auto advertising formats and find neighbourhood guides for retail, education, healthcare and commuter campaigns.',
    label: 'Patna routes and services',
  },
  bihar: {
    title: 'Auto Branding Across Bihar by City',
    description: 'Plan Bihar auto and e-rickshaw advertising by city. Compare local campaign objectives and confirm vehicle availability before booking.',
    label: 'Bihar cities',
  },
  industries: {
    title: 'Auto Advertising by Industry in Patna and Bihar',
    description: 'Build a transit advertising brief for your sector, from coaching admissions and local retail to events, property and app launches.',
    label: 'Campaigns by industry',
  },
  'campaign-guides': {
    title: 'Auto Advertising Campaign Guides',
    description: 'Compare auto advertising formats, check artwork dimensions, plan verification and prepare a fleet registration enquiry.',
    label: 'Campaign planning guides',
  },
} satisfies Record<CampaignHub, { title: string; description: string; label: string }>

export const campaignHubKeys = Object.keys(campaignHubs) as CampaignHub[]

export function isCampaignHub(value: string): value is CampaignHub {
  return Object.hasOwn(campaignHubs, value)
}

export function campaignTopicPath(topic: CampaignTopic) {
  return topic.existingPath ?? `/${topic.hub}/${topic.slug}`
}

export const newCampaignTopics = campaignTopics.filter((topic) => !topic.existingPath)
