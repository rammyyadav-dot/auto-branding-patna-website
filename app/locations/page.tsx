import { pageMetadata } from '@/lib/page-metadata'
import { SiteFooter } from '@/components/site-footer'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/lib/site'
export const metadata = pageMetadata(
  '/locations',
  'Auto Rickshaw Advertising Locations in Bihar',
  'Explore auto advertising routes in Patna, Gaya, Muzaffarpur and Bhagalpur. Compare local audiences and ask about fleet availability.',
)
const locationsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${site.url}/locations#page`,
  name: 'Auto Rickshaw Advertising Locations in Bihar',
  url: `${site.url}/locations`,
  about: { '@id': `${site.url}/#business` },
}
const patnaZones=[['Boring Road','Education, lifestyle and retail catchments','/locations/boring-road'],['Bailey Road','Retail, property and institutions','/locations/bailey-road'],['Kankarbagh','Clinics, coaching and residential reach','/locations/kankarbagh'],['Patna Junction','Commuters and commercial audiences','/locations/patna-junction'],['Rajendra Nagar','Healthcare, retail and local services','/locations/rajendra-nagar'],['Danapur','Neighbourhood and residential visibility','/locations/danapur']]
const biharCities=[['Muzaffarpur','Trading markets, coaching and healthcare corridors','/locations/muzaffarpur'],['Gaya','Pilgrimage routes, coaching and local commerce','/locations/gaya'],['Bhagalpur','Textile markets, education and residential reach','/locations/bhagalpur']]
export default function Locations(){return <main className="seo-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(locationsJsonLd).replace(/</g,'\\u003c')}}/><SiteHeader /><section className="seo-hero section-pad"><div className="eyebrow"><span className="eyebrow-line"/> WHERE BIHAR MOVES</div><h1>Auto Rickshaw<br/><em>Advertising Across Bihar</em></h1><p>Launching in several Bihar cities? Share your priority areas in Patna, Gaya, Muzaffarpur or Bhagalpur, along with your dates and campaign goals. We’ll discuss available vehicles, ad formats and pricing city by city.</p><a href="https://wa.me/919172712982" className="button button-dark">Request a Bihar Campaign Quote <ArrowUpRight size={18}/></a></section><section className="location-directory section-pad"><div className="eyebrow"><span className="eyebrow-line"/> PATNA ZONES</div><div className="location-directory-grid">{patnaZones.map(([name,desc,href],i)=><Link href={href} className="location-directory-card" key={href}><span>0{i+1}</span><MapPin size={18}/><h2>{name}</h2><p>{desc}</p><ArrowUpRight size={18}/></Link>)}</div><div className="eyebrow" style={{marginTop:'2.5rem'}}><span className="eyebrow-line"/> BIHAR CITIES</div><div className="location-directory-grid">{biharCities.map(([name,desc,href],i)=><Link href={href} className="location-directory-card" key={href}><span>0{i+1}</span><MapPin size={18}/><h2>{name}</h2><p>{desc}</p><ArrowUpRight size={18}/></Link>)}</div></section><SiteFooter /></main>}
