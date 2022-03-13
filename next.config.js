/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/contact',
  //       destination: '/form',
  //       permanent: false,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: '/api/movies/popular',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      },
    ];
  }
}

module.exports = nextConfig
