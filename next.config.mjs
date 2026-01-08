/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // 1. Enable Static HTML Export
  output: "export",

  // 2. Rename the build cache folder (changes .next -> dist)
  distDir: "dist",

  // 3. Disable server-side image optimization (Required for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

//npm run build ---> used to see the who is component and dynamic rendering routes ...,



//after dist in next.config.js add a npm run dev in terminal then dist folder will store the data's of id and related data