/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services/city-bus-advertising-patna', destination: '/advertising/city-bus-branding-service-patna', permanent: true },
      { source: '/services/e-rickshaw-toto-ads-patna', destination: '/advertising/e-rickshaw-advertising-patna', permanent: true },
      { source: '/services/mobile-vans-patna', destination: '/advertising/mobile-advertising-van-vs-auto-branding-patna', permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
