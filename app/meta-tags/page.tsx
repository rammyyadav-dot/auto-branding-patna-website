import Link from 'next/link'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: { absolute: 'Meta Tags Google Supports: SEO Guide | Auto Branding Patna' },
  description: 'What meta tags are, which meta tags and HTML attributes Google supports to control indexing and snippets, and what to check when implementing them.',
  alternates: { canonical: '/meta-tags' },
}

const metaTags: [string, string, string][] = [
  ['<meta name="description" content="…">', 'Description', 'A short summary of the page. Google may use it as the search snippet when it describes the page better than on-page text. Write a unique one for every page.'],
  ['<meta name="robots" content="…">', 'Robots', 'Controls crawling/indexing behaviour for all search engines. Rules can be combined with commas, e.g. "noindex, nofollow". With no robots tag the default is "index, follow".'],
  ['<meta name="googlebot" content="…">', 'Googlebot', 'Same rules as robots, but applies only to Google. Use googlebot-news for Google News. When rules conflict, the more restrictive one wins.'],
  ['<meta name="google" content="nositelinkssearchbox">', 'Sitelinks search box', 'Asks Google not to show a sitelinks search box for your site in results.'],
  ['<meta name="google" content="notranslate">', 'No translate', 'Stops Google offering a translation of the page in search results.'],
  ['<meta name="google" content="nopagereadaloud">', 'No read aloud', 'Prevents Google text-to-speech services from reading the page aloud.'],
  ['<meta name="google-site-verification" content="…">', 'Site verification', 'Verifies ownership of the site in Google Search Console. Place it on the home page.'],
  ['<meta http-equiv="Content-Type" content="…; charset=…">', 'Charset', 'Declares the content type and character set. Prefer <meta charset="utf-8"> — essential for Hindi/Devanagari text to render correctly.'],
  ['<meta http-equiv="refresh" content="…;url=…">', 'Meta refresh', 'Redirects after a delay. Google treats an instant refresh as a redirect, but a server-side 301 is strongly preferred; it is also an accessibility problem.'],
  ['<meta name="viewport" content="…">', 'Viewport', 'Tells browsers how to render on mobile. Its presence signals a mobile-friendly page.'],
  ['<meta name="rating" content="adult">', 'Rating', 'Labels a page as sexually explicit so SafeSearch can filter it.'],
]

const robotsRules: [string, string][] = [
  ['all', 'No restrictions. The default — same as having no tag.'],
  ['noindex', 'Do not show this page, media or resource in search results.'],
  ['nofollow', 'Do not follow the links on this page.'],
  ['none', 'Equivalent to noindex, nofollow.'],
  ['noarchive', 'Historic rule for cached copies; Google no longer shows cached links, so it has little effect.'],
  ['nositelinkssearchbox', 'Do not show a sitelinks search box.'],
  ['nosnippet', 'Do not show a text snippet or video preview; also blocks use as a direct input for AI Overviews / AI Mode.'],
  ['indexifembedded', 'Allow indexing when the content is embedded via iframe on another page, even if the URL itself has noindex.'],
  ['max-snippet:[number]', 'Maximum characters in a text snippet. 0 = no snippet, -1 = no limit.'],
  ['max-image-preview:[setting]', 'Largest image preview: none, standard or large.'],
  ['max-video-preview:[number]', 'Maximum seconds of video preview. 0 = static image only, -1 = no limit.'],
  ['notranslate', 'Do not offer a translation of this page in results.'],
  ['noimageindex', 'Do not index images on this page.'],
  ['unavailable_after:[date]', 'Stop showing the page after the given date/time (RFC 822, RFC 850 or ISO 8601). Useful for time-limited campaign offers.'],
]

const attributes: [string, string][] = [
  ['data-nosnippet', 'HTML attribute on span, div or section elements. Text inside is excluded from search snippets — e.g. internal pricing notes or disclaimers.'],
  ['rel="nofollow"', 'Link attribute: you do not want to endorse or pass ranking signals to the target.'],
  ['rel="sponsored"', 'Link attribute for paid, sponsored or affiliate links.'],
  ['rel="ugc"', 'Link attribute for user-generated content links such as comments and forum posts.'],
  ['rel="canonical"', 'Link element in <head> naming the preferred URL among duplicates. Used on every page of this site.'],
  ['hreflang', 'Link element pointing to language/region versions of a page (e.g. hi-IN and en-IN) so the right version is shown.'],
  ['lang', 'HTML attribute that declares the language of a page or element. Our Hindi pages and Hindi blocks are marked lang="hi".'],
  ['X-Robots-Tag', 'HTTP header equivalent of the robots meta tag. Use it for non-HTML files like PDFs and images.'],
]

const ignored: [string, string][] = [
  ['<meta name="keywords">', 'Ignored by Google Search. Do not rely on it — put keywords in titles, headings and copy instead.'],
  ['<meta name="author">, "revisit-after", "distribution"', 'Not used by Google for ranking or indexing.'],
  ['<meta http-equiv="content-language">, lang on <html>', 'Google detects language from visible text and hreflang; it does not rely on these for indexing.'],
  ['<meta name="news_keywords">', 'Not used by Google News.'],
]

const notes = [
  ['Google must be able to crawl the page to see the tags', 'If robots.txt blocks a URL, Googlebot never reads its noindex. To remove a page from search, allow crawling and use noindex.'],
  ['Tags are case-insensitive', 'name="ROBOTS" and content="NoIndex" are read the same as lowercase.'],
  ['Most restrictive rule wins', 'When a page carries several robots rules (e.g. max-snippet:50 and nosnippet), Google applies the stricter one.'],
  ['Put meta tags in <head>', 'Google reads meta tags in the head of valid HTML. Invalid elements in the head can end it early, so keep it clean.'],
  ['JavaScript-injected tags work — carefully', 'Google can read meta tags added with JavaScript after rendering, but a noindex in the original HTML may stop rendering entirely. Ship critical tags server-side (this site uses Next.js generateMetadata).'],
  ['The title element is not a meta tag — but it matters most', 'Write a unique, descriptive <title> of roughly 50–60 characters for every page. Google may rewrite titles that are vague, stuffed or duplicated.'],
  ['Descriptions should be unique and specific', 'Include the facts a searcher needs — format, place, price — rather than repeating the title. Around 150–160 characters avoids truncation on desktop.'],
  ['Structured data is separate from meta tags', 'JSON-LD (Service, LocalBusiness, BreadcrumbList, FAQPage) helps Google understand the page; keep it consistent with visible content.'],
]

export default function MetaTagsGuide() {
  return (
    <main className="seo-page">
      <SiteHeader />
      <section className="seo-hero section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> SEO PLAYBOOK · META TAGS</div>
        <h1>Meta tags.<br /><em>What Google reads.</em></h1>
        <p>Meta tags are HTML elements in a page’s &lt;head&gt; that give search engines and browsers information about the page. This guide explains which ones Google supports to control indexing and snippets, which it ignores, and what to check when you implement them — with examples from our own 100 advertising pages.</p>
      </section>

      <section className="guide-block section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 01 · SUPPORTED META TAGS</div>
        <h2>Meta tags Google supports</h2>
        <div className="guide-table" role="table">
          {metaTags.map(([code, name, text]) => (
            <div className="guide-row" role="row" key={name}><b role="cell">{name}</b><code role="cell">{code}</code><p role="cell">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="guide-block guide-block-pink section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 02 · ROBOTS RULES</div>
        <h2>Indexing &amp; serving rules</h2>
        <p className="guide-lede">Use these values in the robots or googlebot meta tag, or in an X-Robots-Tag HTTP header. Combine with commas: <code>&lt;meta name="robots" content="max-snippet:-1, max-image-preview:large"&gt;</code></p>
        <div className="tag-cloud guide-rules">
          {robotsRules.map(([rule, text]) => <div className="guide-rule" key={rule}><span className="tag-tile tag-tile-ink">{rule}</span><p>{text}</p></div>)}
        </div>
      </section>

      <section className="guide-block section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 03 · HTML ATTRIBUTES</div>
        <h2>Attributes &amp; headers that control indexing</h2>
        <div className="guide-table">
          {attributes.map(([a, t]) => <div className="guide-row guide-row-2" key={a}><code>{a}</code><p>{t}</p></div>)}
        </div>
      </section>

      <section className="guide-block guide-block-ink section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 04 · IGNORED BY GOOGLE</div>
        <h2>Tags Google doesn’t use</h2>
        <div className="guide-table">
          {ignored.map(([a, t]) => <div className="guide-row guide-row-2" key={a}><code>{a}</code><p>{t}</p></div>)}
        </div>
      </section>

      <section className="guide-block section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 05 · IMPLEMENTATION NOTES</div>
        <h2>Important points when implementing</h2>
        <div className="seo-columns">
          {notes.map(([h, t]) => <div key={h}><h3>{h}</h3><p>{t}</p></div>)}
        </div>
      </section>

      <section className="guide-block guide-block-pink section-pad">
        <div className="eyebrow"><span className="eyebrow-line" /> 06 · HOW THIS SITE DOES IT</div>
        <h2>Our head, on every advertising page</h2>
        <pre className="guide-code">{`<title>Auto Branding Agency in Patna | Hood & Back-Panel Ads</title>
<meta name="description" content="Patna auto branding agency for hood, back-panel and e-rickshaw ads. …">
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="https://autobrandingpatna.in/advertising/auto-branding-agency-patna">
<meta property="og:title" content="…">  <meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">{ Service · BreadcrumbList · FAQPage }</script>`}</pre>
        <p className="guide-lede">Hindi pages use <code>lang="hi"</code> on their content and <code>og:locale</code> hi_IN. All pages are listed in <Link className="text-link" href="/sitemap.xml">/sitemap.xml</Link>; browse them on the <Link className="text-link" href="/advertising">advertising hub</Link>.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
