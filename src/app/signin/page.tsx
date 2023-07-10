import SignIn_Button from "@/components/SignIn_Button";

function signin() {
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

export default signin;
