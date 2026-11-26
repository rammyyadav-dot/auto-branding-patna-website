import { pageMetadata } from '@/lib/page-metadata'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/lib/site'
export const metadata = pageMetadata(
  '/services',
  'Auto Branding Services in Patna',
  'Compare rear-panel stickers, three-panel hood wraps and e-rickshaw ads in Patna. Choose a format and request a fleet and route plan.',
)
const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${site.url}/services#catalog`,
  name: 'Auto Advertising Services',
  url: `${site.url}/services`,
  itemListElement: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Rickshaw Advertising', url: `${site.url}/services/auto-rickshaw-advertising-patna` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Hood Branding', url: `${site.url}/services/auto-hood-branding-patna` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Back-Panel Advertising', url: `${site.url}/services/auto-back-panel-advertising-patna` } },
  ],
}
const services=[['Auto rickshaw advertising','Your brand on Patna’s moving streets.','/services/auto-rickshaw-advertising-patna'],['Auto hood branding','A larger canvas for city-sized recall.','/services/auto-hood-branding-patna'],['Back-panel advertising','Small panel. Big local visibility.','/services/auto-back-panel-advertising-patna'],['Patna rates & packages','Compare formats, fleet minimums and indicative costs.','/rates'],['Bihar transit media','Plan a route-led campaign beyond Patna.','/blog']]
export default function Services(){return <main className="seo-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(servicesJsonLd).replace(/</g,'\\u003c')}}/><SiteHeader /><section className="seo-hero section-pad"><div className="eyebrow"><span className="eyebrow-line"/> AUTO BRANDING SERVICES · PATNA</div><h1>Auto Branding<br/><em>Services in Patna</em></h1><p>Use rear-panel ads for a single offer or branch opening, hood branding when your artwork needs more room, and e-rickshaw ads for neighbourhood campaigns where suitable vehicles are available. Compare the formats below, then share your priority areas, campaign dates and budget for a fleet plan.</p></section><section className="service-directory section-pad"><div className="service-directory-grid">{services.map(([title,desc,href],i)=><Link href={href} className={`directory-card card-${i%3}`} key={href}><span>0{i+1}</span><h2>{title}</h2><p>{desc}</p><ArrowUpRight size={20}/></Link>)}</div></section><section className="seo-related section-pad"><div className="eyebrow"><span className="eyebrow-line"/> COVERAGE ZONES IN PATNA</div><div className="related-grid"><Link href="/locations"><span>All Patna locations</span><ArrowUpRight size={17}/></Link><Link href="/locations/boring-road"><span>Boring Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/bailey-road"><span>Bailey Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/kankarbagh"><span>Kankarbagh</span><ArrowUpRight size={17}/></Link><Link href="/locations/patna-junction"><span>Patna Junction</span><ArrowUpRight size={17}/></Link><Link href="/locations/rajendra-nagar"><span>Rajendra Nagar</span><ArrowUpRight size={17}/></Link><Link href="/locations/danapur"><span>Danapur</span><ArrowUpRight size={17}/></Link><Link href="/locations/muzaffarpur"><span>Muzaffarpur</span><ArrowUpRight size={17}/></Link><Link href="/locations/gaya"><span>Gaya</span><ArrowUpRight size={17}/></Link><Link href="/locations/bhagalpur"><span>Bhagalpur</span><ArrowUpRight size={17}/></Link><Link href="/rates"><span>Campaign rates</span><ArrowUpRight size={17}/></Link><Link href="/blog"><span>Advertising journal</span><ArrowUpRight size={17}/></Link><Link href="/contact"><span>Plan a campaign</span><ArrowUpRight size={17}/></Link><Link href="/about"><span>About Auto Branding Patna</span><ArrowUpRight size={17}/></Link></div></section><SiteFooter /></main>}
