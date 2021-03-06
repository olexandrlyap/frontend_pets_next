/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'res.cloudinary.com', 'cloudinary.com', 'unsplash.com' ],
  },
}

module.exports = nextConfig
