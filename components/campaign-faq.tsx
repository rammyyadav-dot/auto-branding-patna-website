import Link from 'next/link'

const answers = [
  ['How much does auto rickshaw advertising cost in Patna?', 'The published indicative rates start at ₹210 per auto per month for back-panel vinyl and ₹700 for three-panel hood branding. Request a tailored e-rickshaw or Toto quote. Final costs depend on fleet size, duration, material, printing, installation, taxes and the agreed monitoring scope.'],
  ['Which materials can I discuss for hood and back-panel branding?', 'Ask about printed rexine or a compatible canopy cover for hood branding, and outdoor-grade vinyl for rear-panel stickers. Confirm panel dimensions, weather resistance, vehicle fit and installation requirements before approving artwork. Material suitability depends on the format and vehicle.'],
  ['What should I check about Patna Nagar Nigam advertising permissions?', 'Before launch, ask which municipal and vehicle permissions apply to your selected format and routes. Confirm who will arrange approvals, any fees and the required documents in writing. Approval requirements must be checked for the specific campaign; they are not automatically included.'],
  ['Can I plan an auto advertising campaign outside Patna?', 'Share your target cities, including Muzaffarpur, Gaya, Bhagalpur, Darbhanga or Purnia, with our team. Fleet availability, routes, local execution and pricing need confirmation for each city before booking a Bihar campaign.'],
  ['How can I evaluate campaign results and verification?', 'Agree on installation photos, fleet and route records, reporting frequency and any tracking requirements before launch. Use a campaign-specific phone number, QR code or offer to assess enquiries alongside your other marketing. Reach, lead volume and ROI vary by campaign.'],
]
export function CampaignFaq() {
  return <section className="campaign-faq section-pad" aria-labelledby="campaign-faq-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> PLAN WITH CLARITY</div><h2 id="campaign-faq-heading">Auto advertising.<br />Your questions, answered.</h2><p>Practical answers on Patna campaign costs, materials and planning.</p><Link className="text-link" href="/contact">Discuss your campaign</Link></div><div>{answers.map(([q,a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
}
