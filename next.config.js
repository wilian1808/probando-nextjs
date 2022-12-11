/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    greet: process.env.NEXT_PUBLIC_GITHUB
  }
}

module.exports = nextConfig