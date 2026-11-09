'use client'

import { CampaignFaq } from '@/components/campaign-faq'
import { SiteFooter } from '@/components/site-footer'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check, ChevronDown, MapPin, Menu, MessageCircle, MoveRight, Phone, Route, ShieldCheck, Sparkles, X } from 'lucide-react'

const imageUrl = '/auto.webp'

const services = [
  { number: '01', title: 'Back panel ads', copy: 'The everyday billboard behind every commute. Sharp, affordable and built for instant recall.', tag: 'From ₹150 / auto', accent: 'yellow', href: '/services/auto-back-panel-advertising-patna' },
  { number: '02', title: 'Hood branding', copy: 'A bigger canvas for bigger launches, campaigns and brands that want to own the street.', tag: 'From ₹700 / auto', accent: 'black', href: '/services/auto-hood-branding-patna' },
  { number: '03', title: 'E-rickshaw ads', copy: 'Reach local markets and neighbourhoods with flexible electric fleet visibility.', tag: 'Custom fleet plans', accent: 'pink', href: '/services' },
]

const locations = [
  { name: 'Boring Road', desc: 'Education · lifestyle · retail', href: '/locations/boring-road' },
  { name: 'Bailey Road', desc: 'Retail · property · institutions', href: '/locations/bailey-road' },
  { name: 'Kankarbagh', desc: 'Clinics · coaching · residential', href: '/locations/kankarbagh' },
  { name: 'Rajendra Nagar', desc: 'Healthcare · retail · local services', href: '/locations/rajendra-nagar' },
  { name: 'Patna Junction', desc: 'Commuters · commercial audience', href: '/locations/patna-junction' },
  { name: 'Danapur', desc: 'Neighbourhood awareness', href: '/locations/danapur' },
  { name: 'Muzaffarpur', desc: 'Trading markets · coaching · healthcare', href: '/locations/muzaffarpur' },
  { name: 'Gaya', desc: 'Pilgrimage routes · coaching · local commerce', href: '/locations/gaya' },
  { name: 'Bhagalpur', desc: 'Textile markets · education · residential', href: '/locations/bhagalpur' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [whatsappOpen, setWhatsappOpen] = useState(true)
  const [vehicles, setVehicles] = useState(50)
  const [format, setFormat] = useState('Rear panel')
  const rate = format === 'Rear panel' ? 210 : format === 'Hood branding' ? 700 : 450
  const estimate = vehicles * rate

  return (
    <main className="site-shell">
      <div className="top-strip"><span>Patna&apos;s moving media network</span><span className="top-dot" /><span>Now accepting Q1 campaigns</span><a href="tel:+919172712982">Call +91 91727 12982</a></div>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Auto Branding Patna home"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a><details className="nav-dropdown"><summary>Services <ChevronDown size={14}/></summary><div className="dropdown-panel"><a href="/services">All Services</a><a href="/services/auto-rickshaw-advertising-patna">Auto Rickshaw Branding</a><a href="/services/city-bus-advertising-patna">City Bus Advertising</a><a href="/services/e-rickshaw-toto-ads-patna">E-Rickshaw / Toto Ads</a><a href="/services/mobile-vans-patna">Mobile Vans</a></div></details><details className="nav-dropdown"><summary>Coverage &amp; Routes <ChevronDown size={14}/></summary><div className="dropdown-panel"><a href="/locations">Patna &amp; Pan-Bihar</a><a href="/locations/muzaffarpur">Muzaffarpur</a><a href="/locations/gaya">Gaya</a><a href="/locations/bhagalpur">Bhagalpur</a></div></details><a href="/rates">Campaign Pricing</a><a href="#work">Case Studies</a><details className="nav-dropdown"><summary>Solutions <ChevronDown size={14}/></summary><div className="dropdown-panel"><a href="#services">Fleet Media</a><a href="#routes">Reach &amp; Analytics</a><a href="#work">Portfolio</a></div></details><a href="/about">About Us</a><a href="/contact">Contact Us</a><a className="nav-cta" href="/contact#campaign-brief" onClick={() => setMenuOpen(false)}>Partner With Us <ArrowUpRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> AUTO RICKSHAW ADVERTISING IN PATNA</div>
          <h1>PUT YOUR BRAND<br /><em>ON EVERY ROUTE.</em></h1>
          <p className="hindi">हर सड़क पर आपका ब्रांड।</p>
          <p className="hero-text">Turn Patna&apos;s everyday streets into moving advertising opportunities. One campaign, hundreds of moving billboards — right where your customers are.</p>
          <div className="hero-actions"><a href="/contact#campaign-brief" className="button button-dark">Get a free quote <MoveRight size={18} /></a><a href="#services" className="text-link">Explore formats <ArrowUpRight size={16} /></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>R</span><span>S</span><span>A</span><span>+</span></div><div><strong>Built for Patna businesses</strong><small>From local shops to Bihar&apos;s ambitious brands</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame"><div className="image-label label-top">01 / MOVING MEDIA</div><div className="image-label label-bottom">PATNA, BIHAR <MapPin size={13} /></div><div className="hero-photo" style={{ backgroundImage: `url(${imageUrl})` }} /></div>
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

      <section id="services" className="section-pad service-section"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> CHOOSE YOUR CANVAS</div><h2>One city.<br /><span>Many ways to</span> get seen.</h2></div><p>From an affordable rear sticker to a full hood takeover, build a campaign around your ambition, audience and budget.</p></div><div className="service-grid">{services.map((service) => <Link href={service.href} className={`service-card ${service.accent}`} key={service.number}><div className="card-top"><span>{service.number}</span><ArrowUpRight size={20} /></div><div><h3>{service.title}</h3><p>{service.copy}</p><span className="service-tag">{service.tag}</span></div></Link>)}</div></section>

      <section id="calculator" className="calculator-section section-pad"><div className="calculator-copy"><div className="eyebrow"><span className="eyebrow-line" /> PLAN YOUR CAMPAIGN</div><h2>Big visibility.<br /><em>Flexible</em> budgets.</h2><p>Get a quick starting point for your campaign. Your final quote will include design, printing, installation and route planning.</p><div className="check-list"><span><Check size={16} /> No hidden commitment</span><span><Check size={16} /> WhatsApp-ready proposal</span><span><Check size={16} /> Local route planning</span></div></div><div className="calculator-card"><div className="calc-header"><span>ILLUSTRATIVE MEDIA ESTIMATOR</span><Sparkles size={16} /></div><label>Branding format<select value={format} onChange={(e) => setFormat(e.target.value)}><option>Rear panel</option><option>Hood branding</option><option>E-rickshaw</option></select></label><label>Number of autos <output>{vehicles} autos</output><input type="range" min="10" max="200" step="10" value={vehicles} onChange={(e) => setVehicles(Number(e.target.value))} /></label><div className="estimate"><span>Starting campaign estimate</span><strong>₹{estimate.toLocaleString('en-IN')}</strong><small>Indicative only · before taxes, permissions & production</small></div><a href="/contact#campaign-brief" className="button button-yellow">Request exact WhatsApp quote <MessageCircle size={17} /></a></div></section>

      <section id="routes" className="routes-section section-pad"><div className="route-heading"><div className="eyebrow"><span className="eyebrow-line" /> WHERE BIHAR MOVES</div><h2>Put your message<br />in the <em>right places.</em></h2><p>Plan around the catchments that matter to your business — from Patna&apos;s key zones to Muzaffarpur, Gaya and Bhagalpur.</p></div><div className="location-list">{locations.map((loc, index) => <a href={loc.href} key={loc.href}><span>0{index + 1}</span><b>{loc.name}</b><small>{loc.desc}</small><ArrowUpRight size={18} /></a>)}</div></section>

      <section id="work" className="work-section section-pad"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> MADE FOR THE STREET</div><h2>Campaigns that<br /><span>don&apos;t stand still.</span></h2></div><a href="/contact#campaign-brief" className="text-link">See all our work <ArrowUpRight size={16} /></a></div><div className="work-grid"><div className="work-card work-one"><div className="work-overlay"><span>Education</span><h3>Own the morning commute.</h3></div></div><div className="work-card work-two"><div className="work-overlay"><span>Local retail</span><h3>Your next customer is already moving.</h3></div></div><div className="work-card work-three"><div className="work-overlay"><span>Brand launch</span><h3>Make a city-sized impression.</h3></div></div></div></section>

      <section className="proof-section section-pad"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> PATNA MEDIA, MADE TRANSPARENT</div><h2>Rates that make<br /><span>business sense.</span></h2></div><p>Start with a clear monthly fleet plan. Every campaign includes print-ready production, installation guidance and route-level reporting.</p></div><div className="pricing-table"><div className="pricing-row pricing-head"><b>Format</b><b>Dimensions</b><b>Starting / auto</b><b>Fleet minimum</b></div><div className="pricing-row"><span>Back-panel vinyl</span><span>Approx. 24 × 18 in</span><strong>₹210 / month</strong><span>25 autos</span></div><div className="pricing-row"><span>3-panel hood branding</span><span>Custom hood fit</span><strong>₹700 / month</strong><span>50 autos</span></div><div className="pricing-row"><span>E-rickshaw branding</span><span>Side + rear panels</span><strong>₹450 / month</strong><span>25 autos</span></div></div><div className="faq-grid"><div><h3>How many impressions can a campaign generate?</h3><p>We plan around dense signals and market belts so your fleet earns repeated daily visibility across <Link href="/locations/boring-road">Boring Road</Link>, <Link href="/locations/kankarbagh">Kankarbagh</Link> Golamber and <Link href="/locations/bailey-road">Bailey Road</Link>.</p></div><div><h3>How do you verify the campaign?</h3><p>Our team shares installation photos, route allocation and periodic fleet checks. Ask for a GPS/photo verification plan with your quote.</p></div><div><h3>Will the vinyl survive Patna weather?</h3><p>We use outdoor-grade, weather-resistant vinyl and professional application for a clean finish through heat, dust and monsoon conditions.</p></div></div></section>

      <section id="quote" className="quote-section section-pad"><div><div className="eyebrow"><span className="eyebrow-line" /> READY WHEN YOU ARE</div><h2>Let&apos;s put your<br /><em>brand in motion.</em></h2><p>Tell us what you&apos;re promoting, where you want to be seen and when you want to launch. We&apos;ll take it from there.</p></div><div className="quote-actions"><a className="button button-dark" href="/contact">Contact us <ArrowUpRight size={18} /></a><a className="button button-dark" href="https://wa.me/919172712982?text=Hi%20Auto%20Branding%20Patna%2C%20I%27d%20like%20a%20campaign%20quote." target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a><a className="phone-link" href="tel:+919172712982"><Phone size={16} /> +91 91727 12982</a></div></section>

      <section className="seo-related section-pad"><div className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</div><div className="related-grid"><Link href="/services"><span>All services</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-rickshaw-advertising-patna"><span>Auto rickshaw advertising</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-hood-branding-patna"><span>Hood branding</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-back-panel-advertising-patna"><span>Back-panel advertising</span><ArrowUpRight size={17}/></Link><Link href="/rates"><span>Campaign rates</span><ArrowUpRight size={17}/></Link><Link href="/blog"><span>Advertising journal</span><ArrowUpRight size={17}/></Link><Link href="/about"><span>About Auto Branding Patna</span><ArrowUpRight size={17}/></Link><Link href="/contact"><span>Plan a campaign</span><ArrowUpRight size={17}/></Link><Link href="/locations"><span>All coverage zones</span><ArrowUpRight size={17}/></Link><Link href="/locations/boring-road"><span>Boring Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/bailey-road"><span>Bailey Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/kankarbagh"><span>Kankarbagh</span><ArrowUpRight size={17}/></Link><Link href="/locations/patna-junction"><span>Patna Junction</span><ArrowUpRight size={17}/></Link><Link href="/locations/rajendra-nagar"><span>Rajendra Nagar</span><ArrowUpRight size={17}/></Link><Link href="/locations/danapur"><span>Danapur</span><ArrowUpRight size={17}/></Link><Link href="/locations/muzaffarpur"><span>Muzaffarpur</span><ArrowUpRight size={17}/></Link><Link href="/locations/gaya"><span>Gaya</span><ArrowUpRight size={17}/></Link><Link href="/locations/bhagalpur"><span>Bhagalpur</span><ArrowUpRight size={17}/></Link></div></section>
      <CampaignFaq /><SiteFooter />
      {whatsappOpen && <div className="whatsapp-popup" role="dialog" aria-label="Chat with Auto Branding Patna"><div className="whatsapp-popup-header"><div className="whatsapp-avatar">AB</div><div><strong>AUTO BRANDING PATNA</strong><span><i /> Replies within minutes</span></div><button onClick={() => setWhatsappOpen(false)} aria-label="Close WhatsApp message"><X size={19} /></button></div><div className="whatsapp-popup-body"><p>Hi! Planning your next <b>Patna campaign</b>? We turn autos into moving billboards for your brand.</p><span className="whatsapp-status">Just now ✓✓</span><div className="whatsapp-chips"><span>Auto Ads</span><span>Patna Routes</span><span>Brand Launch</span><span>Free Quote</span></div></div><a className="whatsapp-popup-button" href="https://wa.me/919172712982?text=Hi%20Auto%20Branding%20Patna%2C%20I%27d%20like%20a%20campaign%20quote." target="_blank" rel="noreferrer"><MessageCircle size={20} /> Chat on WhatsApp</a></div>}
      <button className="whatsapp-widget" onClick={() => setWhatsappOpen(!whatsappOpen)} aria-label={whatsappOpen ? 'Close WhatsApp popup' : 'Open WhatsApp popup'}>{whatsappOpen ? <X size={22} /> : <MessageCircle size={22} />}<span><b>{whatsappOpen ? 'Close' : 'Chat with us'}</b><small>WhatsApp · +91 91727 12982</small></span></button>
      <a className="mobile-cta" href="https://wa.me/919172712982" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Get a free quote</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Auto Branding Patna', description: 'Auto rickshaw back-panel and hood branding across Patna.', url: 'https://autobrandingpatna.in', telephone: '+919172712982', address: { '@type': 'PostalAddress', addressLocality: 'Patna', addressRegion: 'BR', addressCountry: 'IN' }, geo: { '@type': 'GeoCoordinates', latitude: 25.6093, longitude: 85.1235 }, areaServed: ['Boring Road', 'Kankarbagh Golamber', 'Bailey Road', 'Saguna More', 'Exhibition Road'], makesOffer: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto Rickshaw Advertising' } } }) }} />
    </main>
  )
}
