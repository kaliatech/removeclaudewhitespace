import { execSync } from "node:child_process";

// Build label shown in the header. `git describe` gives the nearest tag, the
// commits since it, and the short hash (e.g. v1.2.0-3-g975bd6a), or just the
// hash when there are no tags, plus -dirty for uncommitted changes. Set
// APP_VERSION to override it when building without a .git directory.
function gitDescribe() {
  try {
    return execSync("git describe --tags --always --dirty", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return "unknown";
  }
}

// Stored in process.env so Next's build workers, which load this file again,
// inherit the same values instead of computing their own.
process.env.APP_VERSION ||= gitDescribe();
process.env.APP_BUILD_TIME ||= new Date().toISOString();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML/JS/CSS in out/, servable by any static file server.
  output: "export",
  // Emit about/index.html instead of about.html so plain static servers resolve /about/.
  trailingSlash: true,
  // Inlined into the bundle at build time.
  env: {
    APP_VERSION: process.env.APP_VERSION,
    APP_BUILD_TIME: process.env.APP_BUILD_TIME,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
