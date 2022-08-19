/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    const apiBase = new URL('/graphql', process.env.MAGENTO_BACKEND_URL).toString()

    return {
      beforeFiles: [
        {
          source: '/api/:graphql*',
          destination: apiBase + '/:graphql*'
        }
      ]
    }
  }
}

module.exports = nextConfig
