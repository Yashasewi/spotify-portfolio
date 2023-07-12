import SignIn_Button from "@/components/SignIn_Button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
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
