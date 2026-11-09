import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { brand } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Brand Kit | Auto Branding Patna' },
  description: 'The Auto Branding Patna brand kit: logo, colour palette, typography, tag tiles, tone of voice and transit creative rules.',
  alternates: { canonical: '/brand' },
  robots: { index: false, follow: true },
}

const type: [string, string, string, string][] = [
  ['Display', 'clamp(56px, 8vw, 112px) · 700 · −0.09em · 0.87', 'One city. Many ways to be seen.', 'type-display'],
  ['Headline', '31–68px · 700 · −0.06em · 0.92–1.02', 'Small panel. Big local visibility.', 'type-headline'],
  ['Body', '14–17px · 400 · normal · 1.7', 'Plan local transit media that travels through the neighbourhoods where your customers already are.', 'type-body'],
  ['Eyebrow', '10px · 700 · +0.18em · uppercase', 'AUTO HOOD BRANDING · PATNA', 'type-eyebrow'],
  ['Hindi', 'Noto Sans Devanagari · 500–800', 'आपका ब्रांड। पटना की सड़कों पर।', 'type-hindi'],
]

const voice: [string, string][] = [
  ['Local, not provincial', 'Name the roads — Boring Road, Kankarbagh, Patna Junction. Hinglish is welcome; translation-speak is not.'],
  ['Short enough for a red light', 'Headlines of 3–8 words. One idea per line. A full stop is a design element.'],
  ['Proof over promise', 'Lead with rates, minimums and photo evidence. Never invent reach numbers.'],
  ['Confident, warm, practical', 'We speak like a planner who knows the city — direct, helpful, never shouty.'],
]

const rules: [string, string][] = [
  ['One logo, one headline, one action', 'Every panel carries the brand, a short line and a phone, WhatsApp or QR — nothing more.'],
  ['Contrast first', 'Signal Yellow on Road Ink, or Road Ink on Signal Yellow. Minimum 7:1 for panel text.'],
  ['Mind the seams', 'Keep text 2 in away from hood folds, rivets and panel edges.'],
  ['Bilingual by design', 'Set Hindi in Noto Sans Devanagari at the same visual weight as English — never as a footnote.'],
]

export default function BrandKit() {
  return (
    <main className="seo-page brand-kit">
      <SiteHeader />
      <section className="seo-hero section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> BRAND KIT · V1.0</div>
        <h1>Built for<br /><em>the moving city.</em></h1>
        <p>A single, uniform system for every page, panel and pitch — bold street-sign typography, a turmeric-and-ink palette and a warm Patna voice. Use it to keep 100 pages, 1,000 autos and every campaign unmistakably ours.</p>
      </section>

      <section className="guide-block section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 01 · LOGO</div>
        <h2>The mark</h2>
        <div className="bk-logos">
          <div className="bk-logo bk-logo-light"><span className="brand"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></span></div>
          <div className="bk-logo bk-logo-dark"><span className="brand"><span className="brand-mark">AB</span><span>AUTO BRANDING <b>PATNA</b></span></span></div>
          <div className="bk-logo bk-logo-yellow"><span className="brand"><span className="brand-mark bk-mark-ink">AB</span><span>AUTO BRANDING <b>PATNA</b></span></span></div>
        </div>
        <p className="guide-lede">The Signal Yellow roundel echoes a wheel and a traffic light. Keep clear space equal to the roundel’s height on all sides; minimum size 24 px. On yellow grounds, invert the roundel to Road Ink.</p>
      </section>

      <section className="guide-block guide-block-pink section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 02 · COLOUR PALETTE</div>
        <h2>Turmeric, ink &amp; chalk</h2>
        <div className="bk-swatches">
          {brand.colors.map((c) => (
            <div className="bk-swatch" key={c.hex}>
              <div className="bk-chip" style={{ background: c.hex }} />
              <b>{c.name}</b>
              <code>{c.hex} · rgb({c.rgb})</code>
              <code>var({c.token})</code>
              <p>{c.use}</p>
            </div>
          ))}
        </div>
        <div className="bk-ratio"><span style={{ flex: 60, background: '#F7F5EF' }}>60% Chalk / Pink</span><span style={{ flex: 30, background: '#111', color: '#fff' }}>30% Road Ink</span><span style={{ flex: 10, background: '#FFD43B' }}>10% Yellow</span></div>
      </section>

      <section className="guide-block section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 03 · TYPOGRAPHY</div>
        <h2>Street-sign type</h2>
        <p className="guide-lede">Latin: <b>Arial / Helvetica</b> bold with tight negative tracking — the vernacular of Indian road signage, zero font-loading cost. Devanagari: <b>Noto Sans Devanagari</b> 400–800.</p>
        <div className="bk-type">
          {type.map(([name, spec, sample, cls]) => <div key={name}><span className="tag-tile">{name}</span><code>{spec}</code><p className={cls} lang={name === 'Hindi' ? 'hi' : 'en'}>{sample}</p></div>)}
        </div>
      </section>

      <section className="guide-block guide-block-ink section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 04 · TAG TILES</div>
        <h2>The tag tile system</h2>
        <p className="guide-lede">Tag tiles label topics, clusters and keywords across the site — square-cornered like a number plate, never pill-shaped.</p>
        <div className="tag-cloud">
          <span className="tag-tile">Default</span>
          <span className="tag-tile tag-tile-ink">#001 · Ink</span>
          <span className="tag-tile tag-tile-yellow">Yellow</span>
          <span className="tag-tile tag-tile-link">Link tile <ArrowUpRight size={13} /></span>
          <span className="tag-tile tag-tile-quote">“Slogan tile”</span>
          <span className="tag-tile" lang="hi">हिंदी टैग</span>
        </div>
      </section>

      <section className="guide-block section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 05 · AESTHETICS &amp; VOICE</div>
        <h2>How we look and sound</h2>
        <div className="seo-columns">{voice.map(([h, t]) => <div key={h}><h3>{h}</h3><p>{t}</p></div>)}</div>
        <h2 className="bk-sub">Transit creative rules</h2>
        <div className="seo-columns">{rules.map(([h, t]) => <div key={h}><h3>{h}</h3><p>{t}</p></div>)}</div>
        <p className="guide-lede">Taglines: <b>Your brand. Every road. Every day.</b> · <b>Moving billboards. Neighbourhood connections.</b> · <b lang="hi">आपका ब्रांड। पटना की सड़कों पर।</b></p>
      </section>
      <section className="seo-related section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> KEEP EXPLORING</div>
        <div className="related-grid">
          <Link href="/services/auto-rickshaw-advertising-patna"><span>Auto rickshaw advertising</span><ArrowUpRight size={17}/></Link>
          <Link href="/services/auto-hood-branding-patna"><span>Hood branding</span><ArrowUpRight size={17}/></Link>
          <Link href="/services/auto-back-panel-advertising-patna"><span>Back-panel advertising</span><ArrowUpRight size={17}/></Link>
          <Link href="/services"><span>All services</span><ArrowUpRight size={17}/></Link>
          <Link href="/rates"><span>Campaign rates</span><ArrowUpRight size={17}/></Link>
          <Link href="/advertising"><span>100 advertising guides</span><ArrowUpRight size={17}/></Link>
          <Link href="/blog"><span>Advertising journal</span><ArrowUpRight size={17}/></Link>
          <Link href="/about"><span>About Auto Branding Patna</span><ArrowUpRight size={17}/></Link>
          <Link href="/contact"><span>Plan a campaign</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations"><span>All coverage zones</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/boring-road"><span>Boring Road</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/bailey-road"><span>Bailey Road</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/kankarbagh"><span>Kankarbagh</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/patna-junction"><span>Patna Junction</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/rajendra-nagar"><span>Rajendra Nagar</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/danapur"><span>Danapur</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/muzaffarpur"><span>Muzaffarpur</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/gaya"><span>Gaya</span><ArrowUpRight size={17}/></Link>
          <Link href="/locations/bhagalpur"><span>Bhagalpur</span><ArrowUpRight size={17}/></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
