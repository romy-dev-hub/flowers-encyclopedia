import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ensure ESM packages like three and r3f are transpiled properly
    // when using Turbopack in dev/build.
    // Safe in Next 15; ignored by stable webpack builds.
    turbo: {
      resolveAlias: {
        three: "three",
        "@react-three/fiber": "@react-three/fiber",
        "@react-three/drei": "@react-three/drei",
      },
    },
  },
};

export default nextConfig;
