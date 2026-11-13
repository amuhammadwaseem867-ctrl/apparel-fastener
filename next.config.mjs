/** @type {import('next').NextConfig} */

// The AF7 site is a separate Vercel project built with basePath "/af7".
// Requests for www.afgroup.com.hk/af7 are forwarded to it, so both sites
// share one domain. Override with AF7_ORIGIN to point at another deployment.
const af7Origin = process.env.AF7_ORIGIN || "https://af7-tau.vercel.app";

const nextConfig = {
  images: {
    qualities: [75, 90, 92, 95],
  },
  // The old cPanel site answered /webmail and /cpanel itself. Now that www
  // points to Vercel, send those paths to the cPanel server instead.
  async redirects() {
    const server = "https://web1016.dataplugs.com";
    return [
      { source: "/webmail", destination: `${server}:2096/`, permanent: false },
      { source: "/webmail/:path*", destination: `${server}:2096/`, permanent: false },
      { source: "/cpanel", destination: `${server}:2083/`, permanent: false },
      { source: "/cpanel/:path*", destination: `${server}:2083/`, permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/af7", destination: `${af7Origin}/af7` },
      { source: "/af7/:path*", destination: `${af7Origin}/af7/:path*` },
    ];
  },
};

export default nextConfig;
