/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript : {
    ignoreBuildErrors : true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greedy-labrador-143.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'sleek-capybara-771.convex.cloud'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
    ]
  }
};

export default nextConfig;

// images: {
//   domains: ['greedy-labrador-143.convex.cloud', 'other-domains.com'],
// },
