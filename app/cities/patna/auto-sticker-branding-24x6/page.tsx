import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { pageMetadata } from '@/lib/page-metadata'
import { site } from '@/lib/site'
import { stickerBrandingPath } from '@/lib/sticker-branding'
import styles from './page.module.css'

const title = '24 × 6 Auto Sticker Branding in Patna'
const description = 'Plan 24 × 6-inch auto rickshaw sticker advertising in Patna from ₹140 per auto. Compare formats, explore local routes and request a written campaign quote.'
export const metadata = pageMetadata(stickerBrandingPath, title, description)

const areas = [
  ['Boring Road', 'Coaching admissions, cafés and local offers', 'boring-road'],
  ['Kankarbagh', 'Clinics, diagnostics and neighbourhood shops', 'kankarbagh'],
  ['Bailey Road', 'Branch launches and directions to showrooms', 'bailey-road'],
  ['Patna Junction', 'Short messages for commuters and visitors', 'patna-junction'],
  ['Rajendra Nagar', 'Healthcare, education and local retail', 'rajendra-nagar'],
  ['Danapur', 'Residential catchments and property enquiries', 'danapur'],
]

const steps = [
  ['Share your brief', 'Tell us your offer, target areas, campaign dates and expected fleet size.'],
  ['Approve the design', 'Check an actual-size proof for readability, logo placement and contact details.'],
  ['Confirm the scope', 'Review vehicle availability, printing, installation, duration, taxes and total cost.'],
  ['Install and verify', 'Agree how installation will be documented and how any damaged stickers will be handled.'],
  ['Track responses', 'Use a dedicated phone number, short URL or campaign code to measure enquiries.'],
]

const faqs = [
  ['What is 24 × 6 auto sticker branding?', 'It is an advertising sticker measuring 24 inches wide by 6 inches tall. Fit and placement are confirmed for the selected vehicles before production.'],
  ['What does the ₹140 starting price cover?', '₹140 per auto is an indicative starting rate. The written quote confirms campaign duration, vehicle count, printing, installation, taxes and any other charges.'],
  ['Can I choose the routes in Patna?', 'Share your preferred neighbourhoods and landmarks. We confirm the available fleet and coverage before you approve the campaign.'],
  ['What should I put on a 24 × 6 sticker?', 'Use a recognisable logo, a short offer and one way to respond. Choose high-contrast lettering and test the printed proof from several steps away.'],
  ['Can I run a bilingual Hindi and English ad?', 'Yes. Use the language your audience reads most easily for the headline, and keep the secondary line short so both remain legible.'],
  ['When should I use a larger back panel or hood wrap?', 'Choose a larger format when you need a prominent product image, more campaign details or a clearer viewing area for a QR code.'],
]

const url = new URL(stickerBrandingPath, site.url).href
const quoteUrl = `https://wa.me/${site.phone.replace('+', '')}?text=${encodeURIComponent('Hi, I’d like a quote for 24 × 6 auto sticker branding in Patna. Please share fleet availability, routes and what the rate includes.')}`

export default function PatnaStickerBrandingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: title, url, description, serviceType: 'Auto rickshaw sticker advertising', provider: { '@id': `${site.url}/#business` }, areaServed: { '@type': 'City', name: 'Patna' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Coverage & Routes', item: `${site.url}/locations` },
        { '@type': 'ListItem', position: 3, name: '24 × 6 Auto Sticker Branding', item: url },
      ] },
    ],
  }

  return <>
    <SiteHeader />
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className={styles.crumb}>
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <Link href="/locations">Coverage &amp; Routes</Link><span aria-hidden="true">/</span>
        <span aria-current="page">24 × 6 Auto Stickers</span>
      </nav>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.kicker}>Patna transit advertising</p>
          <h1>24 × 6 Auto Sticker Branding in Patna</h1>
          <p className={styles.price}>From ₹140 per auto</p>
          <p className={styles.lede}>Put your shop opening, admissions deadline or local offer on auto rickshaws travelling through your target neighbourhoods. The compact 24 × 6-inch format gives you room for a bold headline, a logo and one clear way to respond.</p>
          <div className={styles.actions}><a href={quoteUrl}>Get a WhatsApp quote</a><a href={`tel:${site.phone}`}>Call {site.phoneDisplay}</a></div>
          <dl className={styles.facts}><div><dt>Sticker size</dt><dd>24 × 6 inches</dd></div><div><dt>Creative</dt><dd>One clear message</dd></div><div><dt>Coverage</dt><dd>Selected Patna routes</dd></div><div><dt>Final scope</dt><dd>Written quote</dd></div></dl>
        </div>
      </section>
      <nav aria-label="On this page" className={styles.jump}><a href="#coverage">Coverage</a><a href="#pricing">Pricing</a><a href="#specifications">Specifications</a><a href="#compare">Compare formats</a><a href="#faqs">FAQs</a></nav>
      <section className={styles.section}><div className={styles.wrap}>
        <h2>When a 24 × 6 auto sticker works best</h2>
        <div className={styles.grid}>
          <article><h3>One message commuters can read quickly</h3><p>Use a short headline such as “Admissions Open” or “New Store Near Boring Road.” Give one contact number or a short URL. Keep detailed terms and product information on the destination page.</p></article>
          <article><h3>Repeated visibility in a defined area</h3><p>Choose the catchment around your branch, campus or shop before selecting vehicles. Ask where the fleet typically operates and how installation will be verified.</p></article>
        </div>
      </div></section>
      <section id="coverage" className={styles.section}><div className={styles.wrap}>
        <h2>Auto sticker advertising coverage across Patna</h2>
        <p>Choose the neighbourhoods that match your customers. Route and vehicle availability are confirmed for your campaign dates.</p>
        <div className={styles.areas}>{areas.map(([area, detail, slug]) => <Link href={`/locations/${slug}`} key={slug}><strong>{area} →</strong><span>{detail}</span></Link>)}</div>
      </div></section>
      <section id="pricing" className={styles.section}><div className={styles.wrap}>
        <h2>24 × 6 auto sticker branding price in Patna</h2>
        <div className={styles.grid}>
          <article><h3>From ₹140 per auto</h3><p>Indicative starting rate. Your quote confirms fleet size, campaign duration, production, fitting, monitoring and applicable taxes.</p><Link href="/contact#campaign-brief">Share your campaign brief →</Link></article>
          <article><h3>Illustrative campaign budget</h3><dl className={styles.budget}>{[25, 50, 100].map(count => <div key={count}><dt>{count} autos</dt><dd>₹{(count * 140).toLocaleString('en-IN')}</dd></div>)}</dl><p>Calculated at the advertised starting rate, before any additional quoted charges.</p></article>
        </div>
      </div></section>
      <section id="specifications" className={styles.section}><div className={styles.wrap}>
        <h2>Sticker specifications and artwork checklist</h2>
        <div className={styles.grid}>
          <article><h3>Production brief</h3><ul><li>Finished size: 24 × 6 inches, landscape.</li><li>Review a photo of the proposed mounting surface. Check that the sticker fits without covering registration plates, lights or required markings.</li><li>Confirm outdoor finish, lamination, bleed and artwork file requirements before print.</li></ul></article>
          <article><h3>Artwork for a quick read</h3><ul><li>Use a short headline with high-contrast type.</li><li>Leave space around the logo, contact and edges.</li><li>Review a size proof. Test any QR code from a realistic viewing distance.</li></ul></article>
        </div>
      </div></section>
      <section className={styles.section}><div className={styles.wrap}>
        <h2>How your Patna campaign works</h2>
        <ol className={styles.steps}>{steps.map(([name, detail]) => <li key={name}><h3>{name}</h3><p>{detail}</p></li>)}</ol>
      </div></section>
      <section className={styles.section}><div className={styles.wrap}>
        <h2>What installation verification should show</h2>
        <p>Agree on these fields before booking. This checklist is a sample reporting format for your brief.</p>
        <div className={styles.grid}>
          <article><h3>Vehicle and installation record</h3><p>Record the fleet reference, format and installation date. Ask for a wide photo showing placement and a close photo showing print condition and legibility.</p></article>
          <article><h3>Coverage and exceptions</h3><p>Record the agreed operating area and flag any pending installation, damaged sticker or vehicle substitution. Review enquiry counts separately using your campaign code or dedicated number.</p></article>
        </div>
      </div></section>
      <section id="compare" className={styles.section}><div className={styles.wrap}>
        <h2>Compare auto branding formats in Patna</h2>
        <table className={styles.table}><thead><tr><th scope="col">Format</th><th scope="col">Best for</th></tr></thead><tbody>
          <tr><th scope="row">24 × 6 sticker</th><td>Short offers, opening dates and a single response action</td></tr>
          <tr><th scope="row"><Link href="/services/auto-back-panel-advertising-patna">24 × 18 rear panel</Link></th><td>Larger lettering and room for supporting information</td></tr>
          <tr><th scope="row"><Link href="/services/auto-hood-branding-patna">Three-panel hood branding</Link></th><td>Prominent product imagery and broader vehicle coverage</td></tr>
        </tbody></table><p><Link href="/rates">Explore campaign rates →</Link></p>
      </div></section>
      <section id="faqs" className={styles.section}><div className={styles.wrap}>
        <h2>Frequently asked questions</h2>
        {faqs.map(([question, answer]) => <details className={styles.faq} key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </div></section>
      <section className={styles.closing}><div className={styles.wrap}>
        <h2>Get a quote for your Patna sticker campaign</h2>
        <p>Share your preferred routes, campaign dates and approximate vehicle count.</p>
        <div className={styles.actions}><a href={quoteUrl}>Request a WhatsApp quote</a><Link href="/contact#campaign-brief">Send a campaign brief</Link></div>
      </div></section>
    </main>
    <SiteFooter />
  </>
}
