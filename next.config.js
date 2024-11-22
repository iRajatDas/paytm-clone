/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/paytm",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
