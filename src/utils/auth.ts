import { NextAuthOptions, getServerSession } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { refreshAccessToken } from "@/utils/helper";

export const authConfig: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope:
            "user-read-email user-read-private user-read-playback-state user-read-recently-played user-top-read user-library-read playlist-read-private streaming app-remote-control user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public user-read-private",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;

        return token;
      }
      // access token has not expired
      if (
        token.accessTokenExpires &&
        Date.now() < (token.accessTokenExpires as number) * 1000
      ) {
        return token;
      }

      // access token has expired
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;

      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authConfig);
