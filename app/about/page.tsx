import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MoveRight } from 'lucide-react'

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
    <main className="site-shell about-shell">
      <div className="top-strip"><span>Patna&apos;s moving media network</span><span className="top-dot" /><span>The people behind the motion</span><a href="tel:+919172712982">Call +91 91727 12982</a></div>
      <header className="nav-wrap">
        <Link className="brand" href="/"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></Link>
        <nav className="about-nav" aria-label="Main navigation"><Link href="/#services">Services</Link><Link href="/about" aria-current="page">About us</Link><Link href="/blog">Journal</Link><Link className="nav-cta" href="/#quote">Get a free quote <ArrowUpRight size={16} /></Link></nav>
      </header>
      <section className="about-hero section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> ABOUT AUTO BRANDING PATNA</div>
        <h1>Global perspective.<br /><em>Local momentum.</em></h1>
        <p>We bring marketing experience, commercial thinking and an understanding of Patna&apos;s streets together to help brands become part of the everyday journey.</p>
        <Link className="text-link" href="#our-approach">Meet the thinking behind the work <MoveRight size={16} /></Link>
      </section>
      <section id="our-approach" className="section-pad about-approach" aria-labelledby="approach-heading">
        <div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> OUR APPROACH</div><h2 id="approach-heading">Strategy with purpose.<br /><span>Visibility with relevance.</span></h2></div><p>Good advertising starts with a business goal. We turn that goal into a clear message, the right format and a considered plan for the street.</p></div>
        <div className="about-principles">{approach.map((item, index) => <article key={item.title}><span className="about-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>
      <section className="section-pad founder-section" aria-labelledby="founder-heading">
        <figure className="founder-portrait"><Image src="/ram-kumar.jpg" alt="Ram Kumar, CEO and Founder of Auto Branding Patna" width={400} height={400} sizes="(max-width: 800px) 100vw, 40vw" /><figcaption><strong>Ram Kumar</strong><span>CEO &amp; Founder</span></figcaption></figure>
        <div className="founder-copy"><div className="eyebrow"><span className="eyebrow-line" /> MEET OUR FOUNDER</div><h2 id="founder-heading">Experience that<br /><span>moves brands forward.</span></h2><p>Ram Kumar, CEO &amp; Founder of Auto Branding Patna, is an MBA graduate with more than 15 years of experience in automotive marketing and branding with global brands.</p><p>He brings that experience to a focused local mission: helping businesses in Patna build a stronger presence through thoughtful brand communication and relevant street-level visibility.</p><div className="founder-credentials"><span><b>15+</b> years of experience</span><span><b>MBA</b> graduate</span><span><b>Global</b> brand experience</span></div>
          <div className="founder-message"><div className="eyebrow">A MESSAGE FROM OUR FOUNDER</div><blockquote>“A strong brand begins with understanding people. Our aim is to bring that understanding to every campaign — with a clear message, relevant routes and care in execution. We want to help your business become a familiar name in the communities it serves.”</blockquote><p>Ram Kumar <span>— CEO &amp; Founder</span></p></div>
        </div>
      </section>
      <section className="section-pad about-team" aria-labelledby="team-heading"><div className="section-intro"><div><div className="eyebrow"><span className="eyebrow-line" /> THE TEAM BEHIND YOUR CAMPAIGN</div><h2 id="team-heading">Five MBA minds.<br /><span>One shared ambition.</span></h2></div><p>Our team of five MBA professionals brings sales and marketing expertise to every brief, connecting brand strategy with the practical needs of growing businesses.</p></div><div className="about-principles"><article><span className="about-number">01 / STRATEGY</span><h3>Think like a marketer.</h3><p>Audience understanding, brand positioning and a clear campaign message guide our recommendations.</p></article><article><span className="about-number">02 / SALES</span><h3>Understand the business.</h3><p>We connect campaign choices to your offer, target customers and sales priorities.</p></article><article><span className="about-number">03 / EXECUTION</span><h3>Bring the plan to life.</h3><p>We coordinate creative, formats and deployment so the campaign stays consistent from brief to street.</p></article></div></section>
      <section className="quote-section section-pad"><div><div className="eyebrow"><span className="eyebrow-line" /> LET&apos;S BUILD YOUR NEXT CHAPTER</div><h2>Your ambition.<br /><em>Our next route.</em></h2><p>Tell us about your brand and the customers you want to reach.</p></div><Link className="button button-dark" href="/#quote">Talk to our team <ArrowUpRight size={18} /></Link></section>
      <footer className="footer"><div className="footer-top"><div><Link className="brand footer-brand" href="/"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></Link><p>Patna&apos;s specialist auto rickshaw advertising and transit branding partner.</p></div><div className="footer-links"><div><b>Explore</b><Link href="/#services">Services</Link><Link href="/about">About us</Link><Link href="/blog">Journal</Link></div><div><b>Contact</b><a href="tel:+919172712982">+91 91727 12982</a><Link href="/#quote">Request a quote</Link></div></div></div><div className="footer-bottom"><span>© 2026 Auto Branding Patna</span><span>Made for the moving city</span></div></footer>
    </main>
  )
}
