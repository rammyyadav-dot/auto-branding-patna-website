import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MoveRight } from 'lucide-react'
import { Menu } from 'lucide-react'
import { site } from '@/lib/site'

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'LocalBusiness', '@id': `${site.url}/#business`, name: site.name, url: site.url, telephone: site.phone, email: site.email, address: { '@type': 'PostalAddress', addressLocality: 'Patna', addressRegion: 'Bihar', addressCountry: 'IN' }, founder: { '@type': 'Person', name: 'Ram Kumar', jobTitle: 'CEO & Founder', worksFor: { '@type': 'Organization', name: site.name } } },
    { '@type': 'Person', '@id': `${site.url}/about#founder`, name: 'Ram Kumar', jobTitle: 'CEO & Founder', worksFor: { '@type': 'Organization', name: site.name, url: site.url }, description: 'MBA graduate with 15+ years in automotive marketing and branding with global brands.' },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'About Us', item: `${site.url}/about` }] },
  ],
}

export const metadata: Metadata = {
  title: 'About Us | Ram Kumar & the Auto Branding Patna Team',
  description: 'Meet Ram Kumar, CEO & Founder, an MBA graduate with 15+ years in automotive marketing and branding with global brands, and our team of five MBA professionals.',
  alternates: { canonical: '/about' },
}

const approach = [
  { title: 'Start with your business.', copy: 'We begin with your audience, offer and sales priorities, then shape a campaign around the markets you want to reach.' },
  { title: 'Make every route relevant.', copy: 'We connect clear creative with local route planning so your message appears where your customers live, work and shop.' },
  { title: 'Stay close to execution.', copy: 'From format selection to installation and campaign updates, we keep the work practical, coordinated and easy to follow.' },
]

export default function AboutPage() {
  return (
    <main className="site-shell about-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd).replace(/</g, '\\u003c') }} />
      <header className="about-header"><Link className="brand" href="/" aria-label="Auto Branding Patna home"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></Link><nav className="about-desktop-nav" aria-label="Main navigation"><Link href="/services">Services</Link><Link href="/locations">Coverage</Link><Link href="/rates">Pricing</Link><Link href="/about" aria-current="page">About us</Link><Link className="button button-dark" href="/contact#campaign-brief">Let’s talk <ArrowUpRight size={16} /></Link></nav><details className="about-mobile-menu"><summary aria-label="Open navigation"><Menu size={22} /> Menu</summary><nav aria-label="Mobile navigation"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/locations">Coverage</Link><Link href="/rates">Pricing</Link><Link href="/about" aria-current="page">About us</Link><Link href="/contact#campaign-brief">Contact our team</Link></nav></details></header>
      <section className="about-hero section-pad">
        <div className="about-hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> ABOUT AUTO BRANDING PATNA</div>
        <h1>Global perspective.<br /><em>Local momentum.</em></h1>
        <p>We bring marketing experience, commercial thinking and an understanding of Patna&apos;s streets together to help brands become part of the everyday journey.</p>
        <Link className="text-link" href="#our-approach">Explore our approach <MoveRight size={16} /></Link></div><aside className="about-at-a-glance" aria-label="Our expertise"><span className="eyebrow">EXPERIENCE MEETS LOCAL INSIGHT</span><dl><div><dt>15+</dt><dd>years in automotive marketing &amp; branding</dd></div><div><dt>5</dt><dd>MBA professionals in sales &amp; marketing</dd></div><div><dt>Patna</dt><dd>local understanding. Global-brand experience.</dd></div></dl></aside>
      </section>
      <section id="our-approach" className="section-pad about-approach" aria-labelledby="approach-heading">
        <div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> OUR APPROACH</div><h2 id="approach-heading">Clear thinking.<br /><span>Considered execution.</span></h2></div><p>Good advertising starts with a business goal. We turn that goal into a clear message, the right format and a considered plan for the street.</p></div>
        <div className="about-principles">{approach.map((item, index) => <article key={item.title}><span className="about-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>
      <section className="section-pad founder-section" aria-labelledby="founder-heading">
        <figure className="founder-portrait"><Image src="/ram-kumar.jpg" alt="Ram Kumar, CEO and Founder of Auto Branding Patna" width={400} height={400} sizes="(max-width: 800px) 100vw, 40vw" priority /><figcaption><strong>Ram Kumar</strong><span>CEO &amp; Founder</span></figcaption></figure>
        <div className="founder-copy"><div className="eyebrow"><span className="eyebrow-line" /> MEET OUR FOUNDER</div><h2 id="founder-heading">Led by experience.<br /><span>Grounded in Patna.</span></h2><p>Ram Kumar, CEO &amp; Founder of Auto Branding Patna, is an MBA graduate with more than 15 years of experience in automotive marketing and branding with global brands.</p><p>His focus is simple: bring the discipline of global-brand marketing to local businesses, with clear communication, relevant routes and care in execution.</p><div className="founder-credentials"><span><b>15+</b> years of experience</span><span><b>MBA</b> graduate</span><span><b>Global</b> brand experience</span></div>
          <div className="founder-message"><div className="eyebrow">A MESSAGE FROM OUR FOUNDER</div><blockquote>“A strong brand begins with understanding people. Our aim is to bring that understanding to every campaign — with a clear message, relevant routes and care in execution. We want to help your business become a familiar name in the communities it serves.”</blockquote><p>Ram Kumar <span>— CEO &amp; Founder</span></p></div>
        </div>
      </section>
      <section className="section-pad about-team" aria-labelledby="team-heading"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> OUR PEOPLE</div><h2 id="team-heading">A small team.<br /><span>A shared commitment.</span></h2></div><p>Our team of five MBA professionals brings sales and marketing expertise to every brief, connecting brand strategy with the practical needs of growing businesses.</p></div><ul className="about-expertise" aria-label="Team expertise"><li><span>01</span> Brand strategy</li><li><span>02</span> Sales &amp; market understanding</li><li><span>03</span> Campaign coordination</li></ul></section>
      <section className="seo-related section-pad"><div className="eyebrow"><span className="eyebrow-line" /> EXPLORE OUR WORK</div><div className="related-grid"><Link href="/services"><span>All services</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-rickshaw-advertising-patna"><span>Auto rickshaw advertising</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-hood-branding-patna"><span>Hood branding</span><ArrowUpRight size={17}/></Link><Link href="/services/auto-back-panel-advertising-patna"><span>Back-panel advertising</span><ArrowUpRight size={17}/></Link><Link href="/locations"><span>All coverage zones</span><ArrowUpRight size={17}/></Link><Link href="/locations/boring-road"><span>Boring Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/kankarbagh"><span>Kankarbagh</span><ArrowUpRight size={17}/></Link><Link href="/locations/bailey-road"><span>Bailey Road</span><ArrowUpRight size={17}/></Link><Link href="/locations/patna-junction"><span>Patna Junction</span><ArrowUpRight size={17}/></Link><Link href="/locations/rajendra-nagar"><span>Rajendra Nagar</span><ArrowUpRight size={17}/></Link><Link href="/locations/danapur"><span>Danapur</span><ArrowUpRight size={17}/></Link><Link href="/locations/muzaffarpur"><span>Muzaffarpur</span><ArrowUpRight size={17}/></Link><Link href="/locations/gaya"><span>Gaya</span><ArrowUpRight size={17}/></Link><Link href="/locations/bhagalpur"><span>Bhagalpur</span><ArrowUpRight size={17}/></Link><Link href="/rates"><span>Campaign rates</span><ArrowUpRight size={17}/></Link><Link href="/blog"><span>Advertising journal</span><ArrowUpRight size={17}/></Link><Link href="/contact"><span>Contact us</span><ArrowUpRight size={17}/></Link></div></section>
      <section className="quote-section section-pad"><div><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CAMPAIGN STARTS HERE</div><h2>Let’s move your<br /><em>brand forward.</em></h2><p>Tell us about your brand and the customers you want to reach.</p></div><Link className="button button-dark" href="/contact#campaign-brief">Talk to our team <ArrowUpRight size={18} /></Link></section>
      <SiteFooter />
    </main>
  )
}
