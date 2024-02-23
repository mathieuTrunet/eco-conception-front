/** @type {import('next').NextConfig} */

const apiUrl = 'http://127.0.0.1:8080'

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
