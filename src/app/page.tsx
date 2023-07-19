import SignIn_Button from "@/components/SignInButton";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/utils/auth";
import { refreshAccessToken } from "@/utils/helper";

export default async function Home() {
  var session = await getAuthSession();

  console.log("before refreshing token");
  console.log(session);

  if (
    session?.accessTokenExpires &&
    session?.accessTokenExpires < Date.now() / 1000
  ) {
    session = await refreshAccessToken(session);
  }

  console.log("after refreshing token");
  console.log(session);
  if (session) return redirect("/profile");

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <h1 className="text-4xl font-bold">Welcome to Spotify Stats</h1>
        <p className="text-xl">Log in into your Spotify account</p>
        <SignIn_Button />
      </div>
    </div>
  );
}
