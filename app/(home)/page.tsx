'use client'

import { stickerBrandingPath } from '@/lib/sticker-branding'

import { CampaignFaq } from '@/components/campaign-faq'
import { SiteFooter } from '@/components/site-footer'
import { useState } from 'react'
import Image from 'next/image'
import { site } from '@/lib/site'
import Link from 'next/link'
import { ArrowUpRight, ChevronDown, MapPin, Menu, MessageCircle, MoveRight, Phone, Route, ShieldCheck, Sparkles, X } from 'lucide-react'

const imageUrl = '/auto.webp'

const services = [
  { number: '01', title: 'Back panel ads', copy: 'Give people one thing to remember, such as an admissions deadline, an opening date or a nearby landmark.', tag: 'View back-panel options', accent: 'yellow', href: '/services/auto-back-panel-advertising-patna' },
  { number: '02', title: 'Hood branding', copy: 'Give your logo and product more room with a bold visual and a short line people can read as the vehicle passes.', tag: 'View hood options', accent: 'black', href: '/services/auto-hood-branding-patna' },
  { number: '03', title: 'E-rickshaw ads', copy: 'Promote a shop, clinic or local service. Ask which vehicles and panels are available for your dates.', tag: 'Custom fleet plans', accent: 'pink', href: '/advertising/e-rickshaw-advertising-patna' },
]

const routeFilters = ['All routes', 'Patna commuters', 'Patna retail', 'Patna education & health', 'Other Bihar cities'] as const
type RouteFilter = typeof routeFilters[number]

const locations: { name: string; audience: string; filters: RouteFilter[]; href?: string; aliases?: string }[] = [
  { name: 'Boring Road', audience: 'Students · shoppers · office workers', filters: ['Patna retail', 'Patna education & health'], href: '/locations/boring-road' },
  { name: 'Kankarbagh', audience: 'Residents · coaching students · clinic visitors', filters: ['Patna education & health'], href: '/locations/kankarbagh', aliases: 'Kankbagh' },
  { name: 'Dak Bungalow Crossing', audience: 'Office workers · shoppers · through commuters', filters: ['Patna commuters', 'Patna retail'], aliases: 'Dak Bangla Chauraha' },
  { name: 'Raja Bazar', audience: 'Market shoppers · clinic visitors · residents', filters: ['Patna retail', 'Patna education & health'], aliases: 'Raja Bazaar' },
  { name: 'Mithapur', audience: 'Commuters · students · neighbourhood shoppers', filters: ['Patna commuters', 'Patna education & health'] },
  { name: 'Bailey Road', audience: 'Office commuters · shoppers · property seekers', filters: ['Patna commuters', 'Patna retail'], href: '/locations/bailey-road' },
  { name: 'Rajendra Nagar', audience: 'Residents · healthcare visitors · local shoppers', filters: ['Patna retail', 'Patna education & health'], href: '/locations/rajendra-nagar' },
  { name: 'Patna Junction', audience: 'Rail passengers · commuters · local shoppers', filters: ['Patna commuters', 'Patna retail'], href: '/locations/patna-junction' },
  { name: 'Danapur', audience: 'Residents · commuters · families', filters: ['Patna commuters'], href: '/locations/danapur' },
  { name: 'Muzaffarpur', audience: 'Market traders · students · clinic visitors', filters: ['Other Bihar cities'], href: '/locations/muzaffarpur' },
  { name: 'Gaya', audience: 'Pilgrims · students · local shoppers', filters: ['Other Bihar cities'], href: '/locations/gaya' },
  { name: 'Bhagalpur', audience: 'Textile shoppers · students · residents', filters: ['Other Bihar cities'], href: '/locations/bhagalpur' },
]

const monthlyRates = { 'Rear panel': 210, 'Hood branding': 700, 'E-rickshaw': 450 }
const durations = [7, 15, 30]
const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [whatsappOpen, setWhatsappOpen] = useState(false)
  const [vehicles, setVehicles] = useState(50)
  const [format, setFormat] = useState<keyof typeof monthlyRates>('Rear panel')
  const [days, setDays] = useState(30)
  const [impressions, setImpressions] = useState('')
  const [routeQuery, setRouteQuery] = useState('')
  const [routeFilter, setRouteFilter] = useState<RouteFilter>('All routes')
  const estimate = Math.round(vehicles * monthlyRates[format] * days / 30)
  const exposureCount = Number(impressions)
  const costPerThousand = exposureCount > 0 ? money.format(estimate * 1000 / exposureCount) : 'Add your estimate'
  const visibleRoutes = locations.filter((route) =>
    (routeFilter === 'All routes' || route.filters.includes(routeFilter)) &&
    `${route.name} ${route.audience} ${route.aliases ?? ''}`.toLowerCase().includes(routeQuery.trim().toLowerCase()),
  )
  const quoteBrief = `Hi, please quote ${vehicles} autos for ${days} days of ${format.toLowerCase()} advertising. The online planning estimate was ${money.format(estimate)}. Please confirm fleet availability, dates and itemised costs.`
  const quoteUrl = `https://wa.me/${site.phone.slice(1)}?text=${encodeURIComponent(quoteBrief)}`

  return (
    <main className="site-shell abp-home">
      <div className="top-strip"><span>Patna&apos;s moving media network</span><span className="top-dot" /><span>Request a campaign quote</span><a href="tel:+919172712982">Call +91 91727 12982</a></div>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Auto Branding Patna home"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a><details className="nav-dropdown"><summary>Services <ChevronDown size={14}/></summary><div className="dropdown-panel"><a href="/services">All Services</a><a href="/services/auto-rickshaw-advertising-patna">Auto Rickshaw Branding</a><a href={stickerBrandingPath}>24 × 6 Auto Sticker Branding</a><a href="/advertising/city-bus-branding-service-patna">City Bus Advertising</a><a href="/advertising/e-rickshaw-advertising-patna">E-Rickshaw / Toto Ads</a><a href="/advertising/mobile-advertising-van-vs-auto-branding-patna">Mobile Vans</a></div></details><details className="nav-dropdown"><summary>Coverage &amp; Routes <ChevronDown size={14}/></summary><div className="dropdown-panel"><a href="/locations">Patna &amp; Pan-Bihar</a><a href="/locations/muzaffarpur">Muzaffarpur</a><a href="/locations/gaya">Gaya</a><a href="/locations/bhagalpur">Bhagalpur</a></div></details><a href="/rates">Campaign Pricing</a><a href="#work">Case Studies</a><details className="nav-dropdown"><summary>Solutions <ChevronDown size={14}/></summary><div className="dropdown-panel"><a href="#services">Fleet Media</a><a href="#routes">Reach &amp; Analytics</a><a href="#work">Portfolio</a></div></details><a href="/about">About Us</a><a href="/contact">Contact Us</a><a className="nav-cta" href="/contact#campaign-brief" onClick={() => setMenuOpen(false)}>Partner With Us <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> TRANSIT MEDIA IN PATNA</div>
          <h1>Auto Rickshaw<br /><em>Advertising in Patna</em></h1>
          <p className="hero-text">Put your offer on auto rickshaws travelling through the Patna neighbourhoods your customers already use.</p>
          <div className="hero-actions">
            <Link href="/contact#campaign-brief" className="button button-dark hero-booking">Book a Campaign <MoveRight size={18} /></Link>
            <a href="#calculator" className="text-link">Estimate your budget <ArrowUpRight size={16} /></a>
          </div>
          <dl className="hero-metrics">
            <div><dt>Route reach</dt><dd>9 Patna corridors to explore</dd></div>
            <div><dt>Impression cost</dt><dd><a href="#calculator">Calculate from your estimate</a></dd></div>
          </dl>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><div className="image-label label-top">01 / MOVING MEDIA</div><div className="image-label label-bottom">PATNA, BIHAR <MapPin size={13} /></div><Image className="hero-photo" src={imageUrl} alt="Auto rickshaw used for Patna transit advertising" fill preload sizes="(max-width: 800px) 94vw, 45vw" /></div>
          <div className="floating-note"><Sparkles size={16} /><span><b>Street-level visibility.</b><br />Local relevance. Flexible budgets.</span></div>
          <div className="route-line" aria-hidden="true" />
        </div>
      </section>

      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="marquee-set" key={i}>
              <span>PUT YOUR BRAND ON EVERY ROUTE</span><Route size={16} />
              <span>BACK PANEL ADS</span><Route size={16} />
              <span>HOOD BRANDING</span><Route size={16} />
              <span>E-RICKSHAW ADS</span><Route size={16} />
              <span>500+ AUTOS ON THE ROAD</span><Route size={16} />
              <span>PATNA&apos;S MOVING MEDIA NETWORK</span><Route size={16} />
            </div>
          ))}
        </div>
      </div>

      <section className="stats-band"><div><strong>500+</strong><span>autos on the road</span></div><div><strong>6</strong><span>high-impact zones</span></div><div><strong>24/7</strong><span>everyday visibility</span></div><div><strong>01</strong><span>simple campaign partner</span></div></section>

      <section id="services" className="section-pad service-section"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> CHOOSE YOUR CANVAS</div><h2>Auto Branding <span>in Patna</span></h2></div><p>Choose a format based on what people should remember and where they can act on your message.</p></div><div className="service-grid">{services.map((service) => <Link href={service.href} className={`service-card ${service.accent}`} key={service.number}><div className="card-top"><span>{service.number}</span><ArrowUpRight size={20} /></div><div><h3>{service.title}</h3><p>{service.copy}</p><span className="service-tag">{service.tag}</span></div></Link>)}</div></section>

      <section id="routes" className="routes-section section-pad">
        <div className="route-heading">
          <h2>Where should your <em>auto ads run?</em></h2>
          <p>Explore corridors by audience. Confirm route availability and request a dated count for the location and time of day you want to target.</p>
        </div>
        <div>
          <div className="route-controls">
            <label>Search localities <input type="search" value={routeQuery} onChange={(event) => setRouteQuery(event.target.value)} placeholder="Try Boring Road or students" /></label>
            <label>Audience or region <select value={routeFilter} onChange={(event) => setRouteFilter(event.target.value as RouteFilter)}>
              {routeFilters.map((filter) => <option key={filter}>{filter}</option>)}
            </select></label>
          </div>
          <p className="route-count" role="status">{visibleRoutes.length} {visibleRoutes.length === 1 ? 'route' : 'routes'}</p>
          <div className="route-grid" aria-label="Campaign route results" tabIndex={0}>
            {visibleRoutes.map((route) => <article key={route.name}>
              <h3>{route.name}</h3>
              <p>{route.audience}</p>
              <small>Daily footfall: count required</small>
              <Link href={route.href ?? '/contact#campaign-brief'}>{route.href ? 'View route guide' : 'Ask about this route'} <ArrowUpRight size={14} /></Link>
            </article>)}
            {visibleRoutes.length === 0 && <p>Try another locality or choose All routes.</p>}
          </div>
        </div>
      </section>

      <section id="calculator" className="calculator-section section-pad">
        <div className="calculator-copy">
          <h2>Auto rickshaw advertising <em>rates in Patna</em></h2>
          <p>Estimate your media budget by format, fleet size and duration. Short campaigns use a prorated 30-day rate for planning. Availability, minimum fleet sizes and short-run pricing are confirmed in your written quote.</p>
          <Link href="/rates" className="text-link">Compare published rates and formats <ArrowUpRight size={16} /></Link>
        </div>
        <div className="calculator-card">
          <div className="calc-header"><span>CAMPAIGN BUDGET ESTIMATE</span><Sparkles size={16} /></div>
          <label>Branding format<select value={format} onChange={(event) => setFormat(event.target.value as keyof typeof monthlyRates)}>
            {Object.entries(monthlyRates).map(([name, rate]) => <option key={name} value={name}>{name} · {money.format(rate)}/auto per 30 days</option>)}
          </select></label>
          <label>Number of autos <output>{vehicles} autos</output>
            <input type="range" min="10" max="100" step="1" value={vehicles} onChange={(event) => setVehicles(Number(event.target.value))} />
          </label>
          <fieldset className="duration-picker">
            <legend>Campaign duration</legend>
            {durations.map((duration) => <label key={duration}>
              <input type="radio" name="campaign-duration" checked={days === duration} onChange={() => setDays(duration)} />
              <span>{duration} days{duration === 30 && <small>Full-month plan</small>}</span>
            </label>)}
          </fieldset>
          <div className="estimate" aria-live="polite">
            <span>Indicative media estimate</span><strong>{money.format(estimate)}</strong>
            <small>Before taxes and any separately quoted fees</small>
          </div>
          <label>Estimated total campaign impressions (optional)
            <input type="number" min="1" step="1" inputMode="numeric" value={impressions} onChange={(event) => setImpressions(event.target.value)} placeholder="Enter your own projection" />
          </label>
          <p className="impression-cost">Media cost per 1,000 impressions <output>{costPerThousand}</output></p>
          <a href={quoteUrl} target="_blank" rel="noopener noreferrer" className="button button-yellow">Confirm pricing on WhatsApp <MessageCircle size={17} /></a>
        </div>
      </section>

      <section id="work" className="work-section section-pad"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> MADE FOR THE STREET</div><h2>Mobile billboard<br /><span>advertising in Bihar</span></h2></div><a href="/contact#campaign-brief" className="text-link">See all our work <ArrowUpRight size={16} /></a></div><div className="work-grid"><div className="work-card work-one"><Image src="/work-education.svg" alt="" fill sizes="(max-width: 800px) 94vw, 30vw" loading="lazy" unoptimized /><div className="work-overlay"><span>Education</span><h3>Own the morning commute.</h3></div></div><div className="work-card work-two"><Image src="/work-retail.svg" alt="" fill sizes="(max-width: 800px) 94vw, 30vw" loading="lazy" unoptimized /><div className="work-overlay"><span>Local retail</span><h3>Your next customer is already moving.</h3></div></div><div className="work-card work-three"><Image src="/work-launch.svg" alt="" fill sizes="(max-width: 800px) 94vw, 30vw" loading="lazy" unoptimized /><div className="work-overlay"><span>Brand launch</span><h3>Make a city-sized impression.</h3></div></div></div></section>

      <section className="proof-section section-pad"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> PATNA MEDIA, MADE TRANSPARENT</div><h2>Rates that make<br /><span>business sense.</span></h2></div><p>Start with a clear monthly fleet plan. Every campaign includes print-ready production, installation guidance and route-level reporting.</p></div><p><a href="#calculator" className="text-link">Calculate a campaign budget <ArrowUpRight size={16} /></a></p><div className="faq-grid"><div><h3>How many impressions can a campaign generate?</h3><p>We plan around dense signals and market belts so your fleet earns repeated daily visibility across <Link href="/locations/boring-road">Boring Road</Link>, <Link href="/locations/kankarbagh">Kankarbagh</Link> Golamber and <Link href="/locations/bailey-road">Bailey Road</Link>.</p></div><div><h3>How do you verify the campaign?</h3><p>Our team shares installation photos, route allocation and periodic fleet checks. Ask for a GPS/photo verification plan with your quote.</p></div><div><h3>Will the vinyl survive Patna weather?</h3><p>We use outdoor-grade, weather-resistant vinyl and professional application for a clean finish through heat, dust and monsoon conditions.</p></div></div></section>

      <section id="quote" className="quote-section section-pad"><div><div className="eyebrow"><span className="eyebrow-line" /> READY WHEN YOU ARE</div><h2>Get Your <em>Campaign Quote</em></h2><p>Tell us what you’re promoting, your target areas, your launch date and approximate budget. Include your preferred vehicle count or artwork if you have it.</p></div><div className="quote-actions"><a className="button button-dark" href="/contact#campaign-brief">Get My Campaign Quote <ArrowUpRight size={18} /></a><a className="button button-dark" href="https://wa.me/919172712982?text=Hi%21%20I%E2%80%99d%20like%20an%20auto%20advertising%20quote.%20Target%20areas%3A%20%20Launch%20date%3A%20%20Budget%3A" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a><a className="phone-link" href="tel:+919172712982"><Phone size={16} /> +91 91727 12982</a></div></section>

      <section className="seo-related section-pad"><div className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</div><div className="related-grid"><Link href="/services"><span>All services</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-rickshaw-advertising-patna"><span>Auto rickshaw advertising</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-hood-branding-patna"><span>Hood branding</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-back-panel-advertising-patna"><span>Back-panel advertising</span><ArrowUpRight size={17}/></Link><Link href="/rates"><span>Campaign rates</span><ArrowUpRight size={17}/></Link><Link href="/blog"><span>Advertising journal</span><ArrowUpRight size={17}/></Link><Link href="/about"><span>About Auto Branding Patna</span><ArrowUpRight size={17}/></Link><Link href="/contact"><span>Plan a campaign</span><ArrowUpRight size={17}/></Link><Link href="/locations"><span>All coverage zones</span><ArrowUpRight size={17}/></Link><Link href="/locations/boring-road"><span>Boring Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/bailey-road"><span>Bailey Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/kankarbagh"><span>Kankarbagh</span><ArrowUpRight size={17}/></Link><Link href="/locations/patna-junction"><span>Patna Junction</span><ArrowUpRight size={17}/></Link><Link href="/locations/rajendra-nagar"><span>Rajendra Nagar</span><ArrowUpRight size={17}/></Link><Link href="/locations/danapur"><span>Danapur</span><ArrowUpRight size={17}/></Link><Link href="/locations/muzaffarpur"><span>Muzaffarpur</span><ArrowUpRight size={17}/></Link><Link href="/locations/gaya"><span>Gaya</span><ArrowUpRight size={17}/></Link><Link href="/locations/bhagalpur"><span>Bhagalpur</span><ArrowUpRight size={17}/></Link></div></section>
      <CampaignFaq structuredData /><SiteFooter />
      {whatsappOpen && <div className="whatsapp-popup" role="dialog" aria-label="Chat with Auto Branding Patna"><div className="whatsapp-popup-header"><div className="whatsapp-avatar">AB</div><div><strong>AUTO BRANDING PATNA</strong><span><i /> Replies within minutes</span></div><button onClick={() => setWhatsappOpen(false)} aria-label="Close WhatsApp message"><X size={19} /></button></div><div className="whatsapp-popup-body"><p>Hi! Planning your next <b>Patna campaign</b>? We turn autos into moving billboards for your brand.</p><span className="whatsapp-status">Just now ✓✓</span><div className="whatsapp-chips"><span>Auto Ads</span><span>Patna Routes</span><span>Brand Launch</span><span>Free Quote</span></div></div><a className="whatsapp-popup-button" href="https://wa.me/919172712982?text=Hi%21%20I%E2%80%99d%20like%20an%20auto%20advertising%20quote.%20Target%20areas%3A%20%20Launch%20date%3A%20%20Budget%3A" target="_blank" rel="noreferrer"><MessageCircle size={20} /> Chat on WhatsApp</a></div>}
      <button className="whatsapp-widget" onClick={() => setWhatsappOpen(!whatsappOpen)} aria-label={whatsappOpen ? 'Close WhatsApp popup' : 'Open WhatsApp popup'}>{whatsappOpen ? <X size={22} /> : <MessageCircle size={22} />}<span><b>{whatsappOpen ? 'Close' : 'Chat with us'}</b><small>WhatsApp · +91 91727 12982</small></span></button>
      <a className="mobile-cta" href="https://wa.me/919172712982" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Get a free quote</a>
    </main>
  )
}
