/** @type {import('next').NextConfig} */
const repo = 'portfolio'; // GitHub repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`
};

module.exports = nextConfig;