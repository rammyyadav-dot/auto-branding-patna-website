import { pageMetadata } from '@/lib/page-metadata'

export const metadata = pageMetadata(
  '/',
  'Auto Rickshaw Advertising in Patna',
  'Book auto rickshaw advertising in Patna. Compare rear-panel stickers, hood wraps and e-rickshaw ads, explore campaign routes and request a fleet quote.',
)

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children
}
