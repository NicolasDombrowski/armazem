import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
     serverExternalPackages: ["sequelize", "pg", "pg-hstore"],
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
