/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML/JS/CSS in out/, servable by any static file server.
  output: "export",
  // Emit about/index.html instead of about.html so plain static servers resolve /about/.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
