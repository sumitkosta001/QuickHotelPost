/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
=======
    images:{
    domains:["cdn-icons-png.flaticon.com"]
    }
  };
  
  export default nextConfig;
  
>>>>>>> 830c8b68ae93733d5058c0594a3eab757c45081e
