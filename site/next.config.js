/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'EAR Registry',
    description: 'Mein test',
    icon: '/img/logo.svg',
    listUrl: 'https://erigazio.github.io/kasm-registry-ear/',
    contactUrl: 'https://erigazio.github.io/kasm-registry-ear/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
