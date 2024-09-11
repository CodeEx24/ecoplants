/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "", // leave empty if not using a custom port
        pathname: "/**", // allows all paths from this domain
      },
    ],
  },
};

export default nextConfig;
