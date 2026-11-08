'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, MessageCircle, Check } from 'lucide-react'

export default function CampaignForm() {
  const [ready, setReady] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const brief = `Hi Auto Branding Patna! I'd like a campaign quote.\n\nName: ${data.get('name')}\nBusiness: ${data.get('business')}\nFormat: ${data.get('format')}\nPreferred area: ${data.get('area')}\nCampaign brief: ${data.get('message')}`
    window.open(`https://wa.me/919172712982?text=${encodeURIComponent(brief)}`, '_blank', 'noopener,noreferrer')
    setReady(true)
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="contact-form-top"><span className="eyebrow">YOUR NEXT CAMPAIGN STARTS HERE</span><ArrowUpRight size={23} /></div>
    <h2>A little about your<br />big idea.</h2><p>Share the essentials. We’ll help you plan the right format and routes.</p>
    <div className="contact-fields"><label>Your name <span>*</span><input name="name" autoComplete="name" placeholder="Full name" required maxLength={100} /></label><label>Business / brand <span>*</span><input name="business" autoComplete="organization" placeholder="Your business name" required maxLength={150} /></label><label>Branding format<select name="format" defaultValue="Help me choose"><option>Help me choose</option><option>Back panel ads</option><option>Hood branding</option><option>E-rickshaw ads</option></select></label><label>Preferred area<select name="area" defaultValue="Help me plan routes"><option>Help me plan routes</option><option>Boring Road</option><option>Bailey Road</option><option>Kankarbagh</option><option>Rajendra Nagar</option><option>Patna Junction</option><option>Danapur</option><option>Multiple areas in Patna</option></select></label></div>
    <label className="contact-message">What are you planning? <span>*</span><textarea name="message" rows={4} placeholder="Your goal, launch date, approximate budget or number of autos…" required maxLength={2000} /></label>
    <button className="button button-dark" type="submit"><MessageCircle size={18} /> Continue on WhatsApp <ArrowUpRight size={18} /></button>
    <p className="contact-form-note">This opens WhatsApp with your brief. Review it and press Send to share it with our team. Nothing is submitted here.</p>
    {ready && <p className="contact-feedback" role="status"><Check size={16} /> Your brief is ready in WhatsApp. If it didn’t open, allow pop-ups and try again, or call us below.</p>}
  </form>
}
