/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ REQUIRED for static export
  output: "export",
  trailingSlash: true,

  // ✅ Required for static images
  images: {
    unoptimized: true,
  },

  // (Optional – keep if needed)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
