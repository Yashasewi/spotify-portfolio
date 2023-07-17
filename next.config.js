/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // domains: [
    //   "i.scdn.co",
    //   "t.scdn.co",
    //   "newjams-images.scdn.co",
    //   "dailymix-images.scdn.co",
    //   "seed-mix-image.spotifycdn.com",
    //   "charts-images.scdn.co",
    //   "daily-mix.scdn.co",
    //   "mixed-media-images.spotifycdn.com",
    //   "scdn.co",
    //   "mosaic.scdn.co",
    //   "wrapped-images.spotifycdn.com",
    //   "blend-playlist-covers.spotifycdn.com",
    //   "seeded-session-images.scdn.co",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      },
    ],
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};
