/** @type {import('next').NextConfig} */

// The AF7 site is a separate Vercel project built with basePath "/af7".
// Requests for www.afgroup.com.hk/af7 are forwarded to it, so both sites
// share one domain. Override with AF7_ORIGIN to point at another deployment.
const af7Origin = process.env.AF7_ORIGIN || "https://af7-tau.vercel.app";

const nextConfig = {
  images: {
    qualities: [75, 90, 92, 95],
  },
  async rewrites() {
    return [
      { source: "/af7", destination: `${af7Origin}/af7` },
      { source: "/af7/:path*", destination: `${af7Origin}/af7/:path*` },
    ];
  },
};

export default nextConfig;
