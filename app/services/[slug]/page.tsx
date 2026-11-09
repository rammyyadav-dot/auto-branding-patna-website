import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SeoLandingPage } from '@/components/seo-landing-page'
import { servicePages } from '@/lib/seo-pages'
export function generateStaticParams(){return Object.keys(servicePages).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const page=servicePages[slug] ?? servicePages['auto-rickshaw-advertising-patna']; return {title:`${page.title} | Auto Branding Patna`,description:page.intro,alternates:{canonical:`/services/${slug}`}}}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const data=servicePages[slug] ?? servicePages['auto-rickshaw-advertising-patna']; return <SeoLandingPage data={data} pageType="service" slug={slug} />}
