import { NextAuthOptions, getServerSession } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { redirect } from "next/navigation";

export const authCOnfig: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],

  pages: {
    signIn: "/signin",
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authCOnfig);
  if (!session) return redirect("/signin");
}
// export function LoginIsRequiredClient() {
//   if (typeof window === "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) return router.push("/signin");
//   }
// }

// function loginIsRequiredClient() {
//   // Check if the function is running in a serverless environment.
//   if (typeof window === "undefined") {
//     // Get the session and router objects.
//     const session = useSession();
//     const router = useRouter();

//     // If the session is empty, redirect the user to the sign-in page.
//     if (!session) return router.push("/signin");
//   }

//   // The user is logged in.
//   return false;
// }
