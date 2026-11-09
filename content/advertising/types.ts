/** Individually written copy for one keyword landing page. */
export type PageCopy = {
  /** Keyword tags — rendered as tag tiles and emitted as meta keywords / article:tag */
  tags: string[]
  /** Three hero stats: [value, label, detail] */
  stats: [string, string, string][]
  /** Body sections: [heading, paragraph] */
  sections: [string, string][]
  /** FAQs: [question, answer] — also emitted as FAQPage JSON-LD */
  faqs: [string, string][]
  /** Closing call-to-action headline */
  cta: string
}
