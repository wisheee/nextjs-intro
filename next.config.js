/** @type {import('next').NextConfig} */
const DESTINATION_URL = 'https://api.themoviedb.org/3/';
const DESTINATION_URL_PARAMS = `api_key=${process.env.API_KEY}&language=ko`;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  async rewrites() {
    return [
      {
        source: '/api/movies/popular',
        destination: `${DESTINATION_URL}movie/popular?${DESTINATION_URL_PARAMS}`
      },
      {
        source: '/api/movies/nowPlaying',
        destination: `${DESTINATION_URL}movie/now_playing?${DESTINATION_URL_PARAMS}`
      },
      {
        source: '/api/movies/upcoming',
        destination: `${DESTINATION_URL}movie/upcoming?${DESTINATION_URL_PARAMS}`
      },
      {
        source: '/api/movies/:id',
        destination: `${DESTINATION_URL}movie/:id?${DESTINATION_URL_PARAMS}`
      }
    ];
  }
}

module.exports = nextConfig
