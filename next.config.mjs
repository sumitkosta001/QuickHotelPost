/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "cdn-icons-png.flaticon.com", // Add this domain
    ],
  },
};

export default nextConfig;
