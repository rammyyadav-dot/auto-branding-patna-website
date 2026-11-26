import { site } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const text = `# Auto Branding Patna

> Auto Branding Patna plans route-based transit advertising for businesses and agencies in Patna and selected cities in Bihar.

Campaign formats include auto rickshaw rear-panel vinyl, three-panel hood branding and e-rickshaw or Toto advertising. Confirm vehicles, routes, campaign duration and final rates with the team.

## Campaign planning

- [Auto rickshaw advertising in Patna](${site.url}/services/auto-rickshaw-advertising-patna): Formats and planning for local campaigns.
- [Auto branding services](${site.url}/services): Rear-panel, hood and e-rickshaw options.
- [Indicative campaign rates](${site.url}/rates): Per-vehicle estimates and what to confirm in a quote.
- [Coverage areas](${site.url}/locations): Patna neighbourhoods and selected Bihar cities.
- [Transit advertising guides](${site.url}/advertising): Campaign planning by format, topic and location.
- [Request a campaign quote](${site.url}/contact): Share your audience, preferred areas, dates and budget.

## Optional

- [About Auto Branding Patna](${site.url}/about): Company and founder information.
- [XML sitemap](${site.url}/sitemap.xml): Canonical pages.
`
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
