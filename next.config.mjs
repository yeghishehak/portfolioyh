/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    // 1️⃣ Find and modify Next.js default image rule to ignore SVGs
    const imageRule = config.module.rules.find(
      (rule) => rule?.test?.test?.(".svg")
    );
    if (imageRule) {
      imageRule.exclude = /\.svg$/i;
    }

    // 2️⃣ Add a rule that tells Webpack to treat SVGs as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
