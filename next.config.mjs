/** @type {import("next").NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
    // Static export so the site can be hosted on GitHub Pages.
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
    images:{
        unoptimized: true
    }
};

export default nextConfig;
